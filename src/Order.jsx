import { useState } from "react";







import {



  Search,



  MapPin,



  Upload,



  Plus,



  Minus,



  Trash2,



  CalendarDays,



  Clock3,



  MessageCircle,



  UserRound,



  Phone,



  Pill,



  FileImage,



  ArrowLeft,



  CheckCircle2,



  X,



} from "lucide-react";







import "./Order.css";







import desktopBackground from "./assets/backgrounds/order-desktop.png";



import mobileBackground from "./assets/backgrounds/order-mobile.png";



import logo from "./assets/brand/logo.png";







/* =========================================================



   SAMPLE MEDICINE DATA



   ========================================================= */







const medicines = [



  {



    id: 1,



    name: "पॅरासिटामॉल 500 mg",



    type: "Tablet",



  },



  {



    id: 2,



    name: "पॅरासिटामॉल 650 mg",



    type: "Tablet",



  },



  {



    id: 3,



    name: "अॅझिथ्रोमायसिन 500 mg",



    type: "Tablet",



  },



  {



    id: 4,



    name: "अॅमॉक्सिसिलिन 500 mg",



    type: "Capsule",



  },



  {



    id: 5,



    name: "ओमेप्राझोल 20 mg",



    type: "Capsule",



  },



];







/* =========================================================



   CLOCK VALUES



   ========================================================= */







const hours = [



  12,



  1,



  2,



  3,



  4,



  5,



  6,



  7,



  8,



  9,



  10,



  11,



];







const minutes = [



  "00",



  "05",



  "10",



  "15",



  "20",



  "25",



  "30",



  "35",



  "40",



  "45",



  "50",



  "55",



];







/* =========================================================



   ORDER COMPONENT



   ========================================================= */







function Order({ onBack }) {

  /* -------------------------------------------------------



     CUSTOMER



     ------------------------------------------------------- */







  const [customer, setCustomer] = useState({



    name: "",



    whatsapp: "",



    contact: "",



    location: "",



  });







  /* -------------------------------------------------------



     MEDICINE



     ------------------------------------------------------- */







  const [search, setSearch] = useState("");







  const [selectedMedicines, setSelectedMedicines] =



    useState([]);







  /* -------------------------------------------------------



     PRESCRIPTION



     ------------------------------------------------------- */







  const [prescription, setPrescription] =



    useState(null);







  /* -------------------------------------------------------



     DATE



     ------------------------------------------------------- */







  const [neededDate, setNeededDate] =

    useState("");



  const [calendarOpen, setCalendarOpen] =

    useState(false);



  const [calendarMonth, setCalendarMonth] =

    useState(new Date());







  /* -------------------------------------------------------



     TIME



     ------------------------------------------------------- */







  const [selectedHour, setSelectedHour] =



    useState(null);







  const [selectedMinute, setSelectedMinute] =



    useState("00");







  const [selectedPeriod, setSelectedPeriod] =



    useState("सकाळ");







  const [clockOpen, setClockOpen] =



    useState(false);







  const [clockStep, setClockStep] =



    useState("hour");







  /* =======================================================



     MEDICINE SEARCH



     ======================================================= */







  const filteredMedicines = medicines.filter(



    (medicine) =>



      medicine.name



        .toLowerCase()



        .includes(search.toLowerCase()) ||



      medicine.type



        .toLowerCase()



        .includes(search.toLowerCase())



  );







  /* =======================================================



     CUSTOMER UPDATE



     ======================================================= */







  const updateCustomer = (field, value) => {



    setCustomer((previous) => ({



      ...previous,



      [field]: value,



    }));



  };







  /* =======================================================



     ADD MEDICINE



     ======================================================= */







  const addMedicine = (medicine) => {



    const alreadyAdded = selectedMedicines.find(



      (item) => item.id === medicine.id



    );







    if (alreadyAdded) {



      setSelectedMedicines((previous) =>



        previous.map((item) =>



          item.id === medicine.id



            ? {



                ...item,



                quantity: item.quantity + 1,



              }



            : item



        )



      );



    } else {



      setSelectedMedicines((previous) => [



        ...previous,



        {



          ...medicine,



          quantity: 1,



        },



      ]);



    }







    setSearch("");



  };







  /* =======================================================



     QUANTITY



     ======================================================= */







  const increaseQuantity = (id) => {



    setSelectedMedicines((previous) =>



      previous.map((item) =>



        item.id === id



          ? {



              ...item,



              quantity: item.quantity + 1,



            }



          : item



      )



    );



  };







  const decreaseQuantity = (id) => {



    setSelectedMedicines((previous) =>



      previous.map((item) =>



        item.id === id



          ? {



              ...item,



              quantity: Math.max(



                1,



                item.quantity - 1



              ),



            }



          : item



      )



    );



  };







  const removeMedicine = (id) => {



    setSelectedMedicines((previous) =>



      previous.filter(



        (item) => item.id !== id



      )



    );



  };







  /* =======================================================



     PRESCRIPTION



     ======================================================= */







  const handlePrescription = (event) => {



    const file = event.target.files?.[0];







    if (!file) return;







    setPrescription(file);



  };







  /* =======================================================



     LOCATION



     ======================================================= */







  const getLocation = () => {



    if (!navigator.geolocation) {



      alert(



        "तुमच्या browser मध्ये Location सुविधा उपलब्ध नाही."



      );







      return;



    }







    navigator.geolocation.getCurrentPosition(



      (position) => {



        const latitude =



          position.coords.latitude.toFixed(6);







        const longitude =



          position.coords.longitude.toFixed(6);







        updateCustomer(



          "location",



          `${latitude}, ${longitude}`



        );



      },



      () => {



        alert(



          "Location मिळवता आली नाही. कृपया Location permission द्या."



        );



      }



    );



  };







  /* =======================================================

     CALENDAR

     ======================================================= */



  const monthNames = [

    "जानेवारी",

    "फेब्रुवारी",

    "मार्च",

    "एप्रिल",

    "मे",

    "जून",

    "जुलै",

    "ऑगस्ट",

    "सप्टेंबर",

    "ऑक्टोबर",

    "नोव्हेंबर",

    "डिसेंबर",

  ];



  const weekDays = [

    "रवि",

    "सोम",

    "मंगळ",

    "बुध",

    "गुरु",

    "शुक्र",

    "शनि",

  ];



  const getCalendarDays = () => {

    const year = calendarMonth.getFullYear();

    const month = calendarMonth.getMonth();

    const firstDay = new Date(year, month, 1).getDay();

    const daysInMonth = new Date(year, month + 1, 0).getDate();



    const days = Array(firstDay).fill(null);



    for (let day = 1; day <= daysInMonth; day += 1) {

      days.push(day);

    }



    return days;

  };



  const openCalendar = () => {

    if (neededDate) {

      setCalendarMonth(new Date(`${neededDate}T00:00:00`));

    } else {

      setCalendarMonth(new Date());

    }



    setCalendarOpen(true);

  };



  const closeCalendar = () => {

    setCalendarOpen(false);

  };



  const selectDate = (day) => {

    if (!day) return;



    const year = calendarMonth.getFullYear();

    const month = calendarMonth.getMonth() + 1;



    const formatted = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;



    setNeededDate(formatted);

    setCalendarOpen(false);

  };



  const displayDate = neededDate

    ? (() => {

        const date = new Date(`${neededDate}T00:00:00`);

        return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;

      })()

    : "तारीख निवडा";



  /* =======================================================

     CLOCK

     ======================================================= */







  const openClock = () => {



    setClockOpen(true);



    setClockStep("hour");



  };







  const closeClock = () => {



    setClockOpen(false);



  };







  const selectHour = (hour) => {



    setSelectedHour(hour);



    setClockStep("minute");



  };







  const selectMinute = (minute) => {



    setSelectedMinute(minute);



    setClockStep("done");



  };







  const selectPeriod = (period) => {



    setSelectedPeriod(period);



  };







  const confirmClock = () => {



    if (!selectedHour) {



      alert("कृपया आधी तास निवडा.");



      return;



    }







    setClockOpen(false);



  };







  /* =======================================================



     CLOCK DISPLAY



     ======================================================= */







  const formattedTime =



    selectedHour !== null



      ? `${String(selectedHour).padStart(



          2,



          "0"



        )}:${selectedMinute} — ${selectedPeriod}`



      : "वेळ निवडा";







  /* =======================================================



     CLOCK HAND ANGLE



     ======================================================= */







  const getHourAngle = (hour) => {



    return (hour % 12) * 30;



  };







  const getMinuteAngle = (minute) => {



    return Number(minute) * 6;



  };







  /* =======================================================



     SUBMIT



     ======================================================= */







  const handleSubmit = (event) => {

    if (!customer.name.trim()) {
      event.preventDefault();
      alert("कृपया तुमचे नाव भरा.");
      return;
    }

    if (!customer.whatsapp.trim()) {
      event.preventDefault();
      alert("कृपया WhatsApp नंबर भरा.");
      return;
    }

    if (selectedMedicines.length === 0) {
      event.preventDefault();
      alert("कृपया किमान एक औषध निवडा.");
      return;
    }

    if (!neededDate) {
      event.preventDefault();
      alert("कृपया औषध हवे असलेली तारीख निवडा.");
      return;
    }

    if (!selectedHour) {
      event.preventDefault();
      alert("कृपया औषध हवे असलेली वेळ निवडा.");
      return;
    }

    if (prescription && prescription.size > 10 * 1024 * 1024) {
      event.preventDefault();
      alert("Prescription फाईल 10 MB पेक्षा मोठी आहे. कृपया छोटी फाईल निवडा.");
      return;
    }

    // सर्व माहिती valid असल्यास browser FormSubmit कडे native multipart POST करेल.
  };

/* =======================================================



     RENDER



     ======================================================= */







  return (



    <main className="order-page">



      {/* =================================================



          BACKGROUND



          ================================================= */}







      <picture className="order-background">



        <source



          media="(max-width: 767px)"



          srcSet={mobileBackground}



        />







        <img



          src={desktopBackground}



          alt=""



          aria-hidden="true"



        />



      </picture>







      <div className="order-background-overlay" />







      {/* =================================================



          CONTAINER



          ================================================= */}







      <div className="order-container">



        {/* =================================================



            TOP BAR



            ================================================= */}







        <div className="order-topbar">



          <button



            type="button"



            className="order-back-button"



            onClick={onBack}



          >



            <ArrowLeft size={17} />



            मुख्यपृष्ठावर परत



          </button>







          <div className="order-brand">



            <img



              src={logo}



              alt="धनदाई मेडीकल"



            />







            <div>



              <strong>



                धनदाई मेडीकल



              </strong>







              <span>



                अँड जनरल स्टोअर



              </span>



            </div>



          </div>



        </div>







        {/* =================================================



            HEADER



            ================================================= */}







        <header className="order-header">



          <div className="order-badge">



            <CheckCircle2 size={14} />



            सोपी ऑनलाइन औषध ऑर्डर सेवा



          </div>







          <h1>



            औषध <span>ऑर्डर करा</span>



          </h1>







          <p>



            तुमची माहिती भरा, औषधे निवडा, Prescription



            Upload करा आणि ऑर्डर पाठवा.



          </p>



        </header>







        {/* =================================================



            FORM



            ================================================= */}







        <form
          className="order-form"
          action="https://formsubmit.co/dhandaimedical9414@gmail.com"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_subject" value="नवीन औषध ऑर्डर - धनदाई मेडिकल" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="medicine_order" value={selectedMedicines.map((item) => `${item.name} — मात्रा: ${item.quantity}`).join(" | ")} />
          <input type="hidden" name="needed_date" value={neededDate} />
          <input type="hidden" name="needed_time" value={selectedHour ? `${String(selectedHour).padStart(2, "0")}:${selectedMinute} — ${selectedPeriod}` : ""} />



          {/* =================================================



              STEP 1



              ================================================= */}







          <section className="order-section">



            <div className="order-section-heading">



              <div className="section-icon">



                <span className="section-number">



                  1



                </span>



              </div>







              <div>



                <h2>तुमची माहिती</h2>







                <p>



                  ऑर्डरसाठी तुमची प्राथमिक माहिती द्या



                </p>



              </div>



            </div>







            <div className="order-grid">



              {/* NAME */}







              <div className="order-field">



                <label>



                  तुमचे नाव <span>*</span>



                </label>







                <div className="input-with-icon">



                  <UserRound size={20} />







                  <input



                    type="text"
                      name="customer_name"
                      className="order-input"
                      placeholder="तुमचे पूर्ण नाव"



                    value={customer.name}



                    onChange={(event) =>



                      updateCustomer(



                        "name",



                        event.target.value



                      )



                    }



                  />



                </div>



              </div>







              {/* WHATSAPP */}







              <div className="order-field">



                <label>



                  WhatsApp नंबर <span>*</span>



                </label>







                <div className="input-with-icon">



                  <MessageCircle size={20} />







                  <input



                    type="tel"
                      name="whatsapp_number"
                      className="order-input"
                      placeholder="10 अंकी WhatsApp नंबर"



                    value={customer.whatsapp}



                    onChange={(event) =>



                      updateCustomer(



                        "whatsapp",



                        event.target.value



                      )



                    }



                  />



                </div>



              </div>







              {/* CONTACT */}







              <div className="order-field">



                <label>



                  संपर्क क्रमांक



                </label>







                <div className="input-with-icon">



                  <Phone size={20} />







                  <input



                    type="tel"
                      name="contact_number"
                      className="order-input"
                      placeholder="तुमचा संपर्क नंबर"



                    value={customer.contact}



                    onChange={(event) =>



                      updateCustomer(



                        "contact",



                        event.target.value



                      )



                    }



                  />



                </div>



              </div>







              {/* LOCATION */}







              <div className="order-field">



                <label>



                  तुमचे Location <span>*</span>



                </label>







                <div className="location-wrapper">



                  <div className="input-with-icon">



                    <MapPin size={20} />







                    <input



                      type="text"
                        name="location"
                        className="order-input"
                        placeholder="तुमचे Location"



                      value={customer.location}



                      onChange={(event) =>



                        updateCustomer(



                          "location",



                          event.target.value



                        )



                      }



                    />



                  </div>







                  <button



                    type="button"



                    className="location-button"



                    onClick={getLocation}



                    aria-label="Current Location मिळवा"



                  >



                    <MapPin size={21} />



                  </button>



                </div>



              </div>



            </div>



          </section>







          {/* =================================================



              STEP 2



              ================================================= */}







          <section className="order-section">



            <div className="order-section-heading">



              <div className="section-icon">



                <Pill size={21} />



              </div>







              <div>



                <h2>



                  कोणती औषधे हवी आहेत?



                </h2>







                <p>



                  औषधाचे नाव Search करून निवडा



                </p>



              </div>



            </div>







            <div className="medicine-search">



              <div className="medicine-search-box">



                <Search size={21} />







                <input



                  type="text"



                  className="medicine-search-input"



                  placeholder="उदा. Paracetamol, Azithromycin..."



                  value={search}



                  onChange={(event) =>



                    setSearch(event.target.value)



                  }



                />



              </div>







              {search.trim() !== "" && (



                <div className="medicine-results">



                  {filteredMedicines.length > 0 ? (



                    filteredMedicines.map(



                      (medicine) => (



                        <button



                          type="button"



                          className="medicine-result-item"



                          key={medicine.id}



                          onClick={() =>



                            addMedicine(medicine)



                          }



                        >



                          <div className="medicine-result-info">



                            <div className="medicine-icon">



                              <Pill size={19} />



                            </div>







                            <div>



                              <div className="medicine-result-name">



                                {medicine.name}



                              </div>







                              <div className="medicine-result-type">



                                {medicine.type}



                              </div>



                            </div>



                          </div>







                          <div className="medicine-add">



                            <Plus size={18} />



                          </div>



                        </button>



                      )



                    )



                  ) : (



                    <div className="empty-medicine">



                      <Pill size={28} />







                      <strong>



                        औषध सापडले नाही



                      </strong>







                      <span>



                        दुसरे औषधाचे नाव Search करा



                      </span>



                    </div>



                  )}



                </div>



              )}



            </div>







            {selectedMedicines.length > 0 ? (



              <div className="selected-medicines">



                {selectedMedicines.map(



                  (medicine) => (



                    <div



                      className="selected-medicine"



                      key={medicine.id}



                    >



                      <div className="selected-medicine-info">



                        <div className="selected-medicine-icon">



                          <Pill size={18} />



                        </div>







                        <div>



                          <div className="selected-medicine-name">



                            {medicine.name}



                          </div>







                          <span className="selected-medicine-type">



                            {medicine.type}



                          </span>



                        </div>



                      </div>







                      <div className="quantity-control">



                        <button



                          type="button"



                          className="quantity-button"



                          onClick={() =>



                            decreaseQuantity(



                              medicine.id



                            )



                          }



                        >



                          <Minus size={15} />



                        </button>







                        <span className="quantity-value">



                          {medicine.quantity}



                        </span>







                        <button



                          type="button"



                          className="quantity-button"



                          onClick={() =>



                            increaseQuantity(



                              medicine.id



                            )



                          }



                        >



                          <Plus size={15} />



                        </button>



                      </div>







                      <button



                        type="button"



                        className="remove-medicine"



                        onClick={() =>



                          removeMedicine(



                            medicine.id



                          )



                        }



                        aria-label="औषध काढा"



                      >



                        <Trash2 size={16} />



                      </button>



                    </div>



                  )



                )}



              </div>



            ) : (



              <div className="empty-medicine">



                <Pill size={30} />







                <strong>



                  अजून औषधे निवडलेली नाहीत



                </strong>







                <span>



                  वर Search करून औषध निवडा



                </span>



              </div>



            )}



          </section>







          {/* =================================================



              STEP 3



              ================================================= */}







          <section className="order-section">



            <div className="order-section-heading">



              <div className="section-icon">



                <FileImage size={21} />



              </div>







              <div>



                <h2>



                  Prescription आहे का?



                </h2>







                <p>



                  असल्यास येथे Prescription Upload करा



                </p>



              </div>



            </div>







            <label



              className="prescription-upload"



              htmlFor="prescription-file"



            >



              <input



                id="prescription-file"
                  name="prescription"
                  type="file"



                accept="image/jpeg,image/png,image/webp,application/pdf"



                onChange={handlePrescription}



              />







              <div className="prescription-icon">



                <Upload size={23} />



              </div>







              <div className="prescription-content">



                <strong>



                  Prescription Upload करा



                </strong>







                <span>



                  JPG, PNG किंवा PDF फाईल निवडा



                </span>







                {prescription && (



                  <small>



                    निवडलेली फाईल:{" "}



                    {prescription.name}



                  </small>



                )}



              </div>



            </label>



          </section>







          {/* =================================================



              STEP 4



              ================================================= */}







          <section className="order-section">



            <div className="order-section-heading">



              <div className="section-icon">



                <CalendarDays size={21} />



              </div>







              <div>



                <h2>



                  औषध कधी हवे आहे?



                </h2>







                <p>



                  तुम्हाला औषध कोणत्या दिवशी आणि किती वाजता हवे आहे?



                </p>



              </div>



            </div>







            <div className="datetime-grid">



              {/* DATE */}







              <div className="order-field">



                <label>



                  तारीख <span>*</span>



                </label>



                <button

                  type="button"

                  className="order-date-button"

                  onClick={openCalendar}

                >

                  <CalendarDays size={20} />



                  <span

                    className={

                      neededDate

                        ? "date-selected"

                        : "date-placeholder"

                    }

                  >

                    {displayDate}

                  </span>

                </button>



              </div>



              {/* CUSTOM TIME */}







              <div className="order-field">



                <label>



                  वेळ <span>*</span>



                </label>







                <button



                  type="button"



                  className="order-time-button"



                  onClick={openClock}



                >



                  <Clock3 size={20} />







                  <span



                    className={



                      selectedHour



                        ? "time-selected"



                        : "time-placeholder"



                    }



                  >



                    {formattedTime}



                  </span>



                </button>



              </div>



            </div>



          </section>







          {/* =================================================



              SUBMIT



              ================================================= */}







          <div className="order-submit-area">



            <div className="order-submit-info">



              <CheckCircle2 size={22} />







              <div>



                <strong>



                  माहिती तपासा



                </strong>







                <span>



                  ऑर्डर पाठवण्यापूर्वी तुमचे नाव,



                  नंबर, औषधे, तारीख आणि वेळ तपासा.



                </span>



              </div>



            </div>







            <button



              type="submit"



              className="order-submit-button"



            >



              <MessageCircle size={19} />







              ऑर्डर पाठवा



            </button>



          </div>



        </form>







        <div className="order-footer-note">



          तुमची माहिती सुरक्षितपणे वापरली जाईल.



        </div>



      </div>







      {/* =====================================================

          CALENDAR MODAL

          ===================================================== */}



      {calendarOpen && (

        <div

          className="calendar-modal-backdrop"

          onMouseDown={(event) => {

            if (event.target === event.currentTarget) {

              closeCalendar();

            }

          }}

        >

          <div

            className="calendar-modal"

            role="dialog"

            aria-modal="true"

            aria-label="तारीख निवडा"

          >

            <div className="calendar-modal-header">

              <div>

                <span>औषधाची तारीख</span>

                <strong>{displayDate}</strong>

              </div>



              <button

                type="button"

                className="calendar-close-button"

                onClick={closeCalendar}

                aria-label="कॅलेंडर बंद करा"

              >

                <X size={20} />

              </button>

            </div>



            <div className="calendar-navigation">

              <button

                type="button"

                onClick={() =>

                  setCalendarMonth(

                    new Date(

                      calendarMonth.getFullYear(),

                      calendarMonth.getMonth() - 1,

                      1

                    )

                  )

                }

                aria-label="मागील महिना"

              >

                ‹

              </button>



              <strong>

                {monthNames[calendarMonth.getMonth()]}{" "}

                {calendarMonth.getFullYear()}

              </strong>



              <button

                type="button"

                onClick={() =>

                  setCalendarMonth(

                    new Date(

                      calendarMonth.getFullYear(),

                      calendarMonth.getMonth() + 1,

                      1

                    )

                  )

                }

                aria-label="पुढील महिना"

              >

                ›

              </button>

            </div>



            <div className="calendar-weekdays">

              {weekDays.map((day) => (

                <span key={day}>{day}</span>

              ))}

            </div>



            <div className="calendar-days">

              {getCalendarDays().map((day, index) => {

                if (!day) {

                  return <span key={`empty-${index}`} />;

                }



                const currentDate = `${calendarMonth.getFullYear()}-${String(

                  calendarMonth.getMonth() + 1

                ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;



                const isSelected = currentDate === neededDate;



                return (

                  <button

                    type="button"

                    key={day}

                    className={

                      isSelected

                        ? "calendar-day selected"

                        : "calendar-day"

                    }

                    onClick={() => selectDate(day)}

                  >

                    {day}

                  </button>

                );

              })}

            </div>



            <button

              type="button"

              className="calendar-today-button"

              onClick={() => {

                const today = new Date();

                setCalendarMonth(today);

                selectDate(today.getDate());

              }}

            >

              आजची तारीख निवडा

            </button>

          </div>

        </div>

      )}



      {/* =====================================================

          ANALOG CLOCK MODAL

          ===================================================== */}



      {/* =====================================================



          ANALOG CLOCK MODAL



          ===================================================== */}







      {clockOpen && (



        <div



          className="clock-modal-backdrop"



          onMouseDown={(event) => {



            if (



              event.target ===



              event.currentTarget



            ) {



              closeClock();



            }



          }}



        >



          <div



            className="clock-modal"



            role="dialog"



            aria-modal="true"



            aria-label="वेळ निवडा"



          >



            {/* HEADER */}







            <div className="clock-modal-header">



              <div>



                <span>



                  औषधाची वेळ



                </span>







                <strong>



                  {selectedHour



                    ? `${String(



                        selectedHour



                      ).padStart(



                        2,



                        "0"



                      )}:${selectedMinute}`



                    : "--:--"}



                </strong>



              </div>







              <button



                type="button"



                className="clock-close-button"



                onClick={closeClock}



                aria-label="बंद करा"



              >



                <X size={20} />



              </button>



            </div>







            {/* PERIOD */}







            <div className="clock-period">



              <button



                type="button"



                className={



                  selectedPeriod ===



                  "सकाळ"



                    ? "period-button active"



                    : "period-button"



                }



                onClick={() =>



                  selectPeriod("सकाळ")



                }



              >



                सकाळ



              </button>







              <button



                type="button"



                className={



                  selectedPeriod ===



                  "दुपार"



                    ? "period-button active"



                    : "period-button"



                }



                onClick={() =>



                  selectPeriod("दुपार")



                }



              >



                दुपार



              </button>



            </div>







            {/* STEP INDICATOR */}







            <div className="clock-step-indicator">



              <span



                className={



                  clockStep === "hour"



                    ? "active"



                    : ""



                }



              >



                १. तास



              </span>







              <span



                className={



                  clockStep === "minute" ||



                  clockStep === "done"



                    ? "active"



                    : ""



                }



              >



                २. मिनिट



              </span>



            </div>







            {/* CLOCK */}







            <div className="analog-clock">



              <div



  className={`clock-face ${



    clockStep === "hour"



      ? "hour-mode"



      : "minute-mode"



  }`}



>



                {/* Hour markers */}







                {clockStep === "hour" &&



  hours.map((hour) => {



                  const angle =



                    ((hour % 12) * 30 -



                      90) *



                    (Math.PI / 180);







                  const radius = 105;







                  const x =



                    50 +



                    (Math.cos(angle) *



                      radius) /



                      2.15;







                  const y =



                    50 +



                    (Math.sin(angle) *



                      radius) /



                      2.15;







                  const active =



                    clockStep ===



                      "hour" &&



                    selectedHour ===



                      hour;







                  return (



                    <button



                      key={hour}



                      type="button"



                      className={



                        active



                          ? "clock-number active"



                          : "clock-number"



                      }



                      style={{



                        left: `${x}%`,



                        top: `${y}%`,



                      }}



                      onClick={() =>



                        selectHour(hour)



                      }



                    >



                      {hour}



                    </button>



                  );



                })}







                {/* Minute markers */}







{clockStep !== "hour" &&



  minutes.map(



                    (minute) => {



                      const numeric =



                        Number(



                          minute



                        );







                      const angle =



                        ((numeric * 6 -



                          90) *



                          Math.PI) /



                        180;







                      const radius = 105;







                      const x =



                        50 +



                        (Math.cos(



                          angle



                        ) *



                          radius) /



                          2.15;







                      const y =



                        50 +



                        (Math.sin(



                          angle



                        ) *



                          radius) /



                          2.15;







                      const active =



                        selectedMinute ===



                        minute;







                      return (



                        <button



                          key={minute}



                          type="button"



                          className={



                            active



                              ? "clock-number minute active"



                              : "clock-number minute"



                          }



                          style={{



                            left: `${x}%`,



                            top: `${y}%`,



                          }}



                          onClick={() =>



                            selectMinute(



                              minute



                            )



                          }



                        >



                          {minute}



                        </button>



                      );



                    }



                  )}







                {/* CLOCK HAND */}







                {selectedHour &&



                  clockStep ===



                    "hour" && (



                    <div



                      className="clock-hand hour-hand"



                      style={{



                        transform: `rotate(${getHourAngle(



                          selectedHour



                        )}deg)`,



                      }}



                    />



                  )}







                {selectedHour &&



                  clockStep !==



                    "hour" && (



                    <div



                      className="clock-hand minute-hand"



                      style={{



                        transform: `rotate(${getMinuteAngle(



                          selectedMinute



                        )}deg)`,



                      }}



                    />



                  )}







                <div className="clock-center" />



              </div>



            </div>







            {/* SELECTED TIME */}







            <div className="clock-selected-time">



              <Clock3 size={18} />







              <div>



                <span>



                  निवडलेली वेळ



                </span>







                <strong>



                  {formattedTime}



                </strong>



              </div>



            </div>







            {/* ACTIONS */}







            <div className="clock-actions">



              <button



                type="button"



                className="clock-cancel-button"



                onClick={closeClock}



              >



                रद्द करा



              </button>







              <button



                type="button"



                className="clock-confirm-button"



                onClick={confirmClock}



              >



                वेळ निश्चित करा



              </button>



            </div>



          </div>



        </div>



      )}



    </main>



  );



}







export default Order;