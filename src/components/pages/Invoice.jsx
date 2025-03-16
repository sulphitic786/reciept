import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { QRCodeCanvas } from "qrcode.react";
import React, { useRef } from "react";
import { FaFilePdf } from "react-icons/fa";

const invoiceData = {
  company: {
    GSTN: "23AJBPS6285R1ZF",
    subject: "Subject to SEONI Jurisdiction",
    FSSAI_NO: "11417230000027",
    name: "EKTA",
    name: "EKTA",
    title: "Tax Invoice",
    name: "EKTA ENTERPRISES",
    address: "Budhwari Bazar, GN Road Seoni",
    phone: ["9179174888", "9826623188"],
    office_no: "07692-220897",
    state_code: "23",
    bill_made_by: "SHUBHAM",
    DL_no: "20B/807/54/2022,",
  },
  buyer: {
    name: "HEERA TRADERS",
    address: "NAINPUR, NAINPUR",
    GSTN_number: "23HKDPK5985E1ZY",
    StateCode: 23,
    Balance: 48996,
    mobile: "9074762399",
    Inv_No: "N-12036",
    Date: "15.02.2024",
    Time: "04:06:55 PM",
    DueDate: " 22.02.2024",
    Mode: "CREDIT",
    mobile: "9074762399",
    FSSAI_NO: "9074762399",
  },
  Ack: {
    number: "162416310677187",
    date: "2024/02/15 04:07:00",
    IRN: "afbe11b68d1c303dc8757459442ba",
  },
  items: [
    {
      particulars_hsn: "NO1 SANDAL TURMERIC 57G PO4 M4\n34011190",
      pack: 0,
      mrp: 40.0,
      gst_percentage: 18.0,
      rate_incl_tax: 1755.0,
      unit: "Box - 54",
      qty: 15,
      free: 0,
      sch_rs: 0,
      co_sch_percentage: 0,
      cash_disc_percentage: 0,
      net_amt: 26325.0,
      particulars_right: "NO1 SANDAL TURMERIC 57G",
      unit_right: "Box - 54",
      mrp_right: 40.0,
      free_right: 15,
      qty_right: 0,
    },
    {
      particulars_hsn: "NO1 LIME & AV 57G PO4 M40 P54 N\n34011190",
      pack: 0,
      mrp: 40.0,
      gst_percentage: 18.0,
      rate_incl_tax: 1755.0,
      unit: "Box - 54",
      qty: 5,
      free: 0,
      sch_rs: 0,
      co_sch_percentage: 0,
      cash_disc_percentage: 0,
      net_amt: 8775.0,
      particulars_right: "NO1 LIME & AV 57G PO4 M40 P54",
      unit_right: "Box - 54",
      mrp_right: 40.0,
      free_right: 5,
      qty_right: 0,
    },
    {
      particulars_hsn: "RIN BAR SAPPHIRE FW 160G ( 30G\n34011930",
      pack: 160,
      mrp: 10.0,
      gst_percentage: 18.0,
      rate_incl_tax: 690.0,
      unit: "Box - 84",
      qty: 20,
      free: 0,
      sch_rs: 0,
      co_sch_percentage: 0,
      cash_disc_percentage: 0,
      net_amt: 13800.0,
      particulars_right: "RIN BAR SAPPHIRE FW 160G",
      unit_right: "Box - 84",
      mrp_right: 10.0,
      free_right: 20,
      qty_right: 0,
    },
  ],
  totals: {
    terms_and_condition:
      "I We herby certify that articles of food mentioned in the invoice are warranted to be of the nature and quality which they purport to be as per the Food Safety and Standards Act and Rules. Goods once sold will not be taken back. E & OE.",
    gross_amount: "48900.00",
    sgst: "3729.66",
    cgst: "3729.66",
    net_amount: "48900.00",
  },
};

const Invoice = () => {
  const { company, buyer, Ack, items, totals } = invoiceData;
  const invoiceRef = useRef();

  // Function to generate and download PDF

  const handleDownloadPDF = () => {
    const input = invoiceRef.current;

    html2canvas(input, { scale: 3, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // Create a PDF in landscape mode
      const pdf = new jsPDF("l", "mm", "a4"); // "l" = landscape mode

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, imgHeight);
      pdf.save("Invoice.pdf");
    });
  };

  return (
    <div
      ref={invoiceRef}
      className="max-w-6xl mx-auto bg-white p-6 shadow-md border rounded-lg"
    >
      {/* Header */}

      {/* Invoice Table */}
      <div className="overflow-x-auto mt-4">
        <table className="w-full border border-black text-sm">
          <thead className="">
            {/* ========== 1st Row ======= */}
            <tr>
              <td
                colSpan={11}
                className="border border-r-2 border-black px-2 py-1"
              >
                <div className="flex">
                  <div className="w-1/3 pr-2">
                    <div className="mt-4 pb-4">
                      <h3 className="font-bold">GSTN: {company.GSTN}</h3>
                      <p className="text-sm font-bold">{company.subject}</p>
                      <p className="text-sm font-bold">
                        GST: {company.FSSAI_NO}
                      </p>
                    </div>
                  </div>
                  <div className="w-1/3 flex justify-center pr-2">
                    <div className="text-center items-center pb-4">
                      <p className="text-sm font-bold">{company.title}</p>
                      <h2 className="text-xl font-bold">{company.name}</h2>
                      <p className="text-sm font-bold">{company.address}</p>
                    </div>
                  </div>
                  <div className="w-1/3 pl-2">
                    <div className="mt-4 pb-4 text-right">
                      <h3 className="font-bold">Ph: {company.phone}</h3>
                      <p className="text-sm">Office No: {company.office_no}</p>
                      <p className="text-sm font-bold">
                        State Code: {company.state_code}
                      </p>
                    </div>
                  </div>
                </div>
              </td>
              <td
                colSpan={3}
                className="border border-black px-2 py-1 relative"
              >
                {/* PDF Export Icon (Top Right Corner) */}
                <button
                  onClick={handleDownloadPDF}
                  className="absolute top-1 right-1 text-red-600 hover:text-red-800 no-print"
                >
                  <FaFilePdf size={23} />
                </button>

                {/* Company Name and Bill Made By */}
                <div className="text-center">
                  <h2 className="text-xl font-bold">{company.name}</h2>
                  <p className="text-sm">
                    Bill Made By: {company.bill_made_by}
                  </p>
                </div>
              </td>
            </tr>

            {/* ========== 2nd Row ======= */}
            <tr>
              <td colSpan={11} className="border border-black border-r-2 px-2">
                <div className="flex">
                  <div className="w-2/3 border-r flex border-r-black">
                    {/* Buyer Details */}
                    <div className="mt-4 pb-4 w-[80%] leading-6">
                      <h3 className="">
                        Party: <span className="font-bold">{buyer.name}</span>
                      </h3>
                      <p className="text-sm">Address: {buyer.address}</p>
                      <div className="flex gap-3">
                        <p className="text-sm">
                          GSTN No:
                          <span className="font-bold ps-1">
                            {buyer.GSTN_number}
                          </span>
                        </p>
                        <p className="text-sm">
                          State Code:
                          <span className="font-bold ps-1">
                            {buyer.StateCode}
                          </span>
                        </p>
                        <p className="text-sm">
                          FSSAI No:
                          <span className="font-bold ps-1">
                            {buyer.FSSAI_NO}
                          </span>
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <p className="text-sm">Mobile: {buyer.mobile}</p>
                        <p className="text-sm">
                          Balance:
                          <span className="font-bold ps-1">
                            {buyer.Balance}
                          </span>
                        </p>
                        <p className="text-sm">
                          D/L No:
                          <span className="font-bold ps-1">{buyer.DL_no}</span>
                        </p>
                      </div>
                    </div>
                    {/* QR Details */}
                    <div className="w-[20%] border flex justify-center items-center">
                      <QRCodeCanvas size={80} value="https://reactjs.org/" />
                    </div>
                  </div>
                  <div className="w-1/3 pl-2">
                    <div className="mt-4 pb-4">
                      <div className="flex justify-between leading-6">
                        <h3 className="font-bold">
                          {" "}
                          Inv. No:{" "}
                          <span className="font-bold">{buyer.Inv_No}</span>
                        </h3>
                      </div>
                      <p className="text-sm">
                        Mode: <span className="font-bold">{buyer.Mode}</span>
                      </p>

                      <div className="flex gap-5">
                        <p className="text-sm">
                          Date: <span className="font-bold">{buyer.Date}</span>
                        </p>
                        <p className="text-sm">{buyer.Time}</p>
                      </div>
                      <p className="text-sm">
                        Due Date:{" "}
                        <span className="font-bold">{buyer.DueDate}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </td>
              <td colSpan={3} className="border border-black px-2 py-1">
                <div className="mt-4 pb-4">
                  <div className="flex gap-3 leading-6">
                    <h3 className="font-semibold">Invoice No:</h3>
                    <span className="font-bold">{buyer.Inv_No}</span>
                  </div>
                  <div className="flex gap-3 leading-6">
                    <h3 className="font-semibold">Date:</h3>
                    <span className="font-bold">{buyer.Date}</span>
                  </div>
                  <div className="flex gap-3 leading-6">
                    <h3 className="font-semibold">Party:</h3>
                    <span className="font-bold">{buyer?.name}</span>
                  </div>
                  <div className="flex gap-3 leading-6">
                    <h3 className="font-semibold">Mode:</h3>
                    <span className="font-bold">{buyer.Mode}</span>
                  </div>
                </div>
              </td>
            </tr>

            {/* ========== 3rd Row ======= */}
            <tr>
              <td
                colSpan={11}
                className="border border-black border-r-2 px-2 py-2"
              >
                <div className="flex justify-between">
                  <span>Ack. No: {Ack.number}</span>
                  <span>Ack. Date: {Ack.date}</span>
                  <span>IRN No: {Ack.IRN}</span>
                </div>
              </td>
              <td colSpan={3} className="border border-black px-2 py-1"></td>
            </tr>

            {/* ========== 4th Row ======= */}
            <tr>
              <th className="border border-black px-2 py-1">Particulars/HSN</th>
              <th className="border border-black px-2 py-1">Pack</th>
              <th className="border border-black px-2 py-1">M.R.P</th>
              <th className="border border-black px-2 py-1">GST%</th>
              <th className="border border-black px-2 py-1">
                Rate <br /> <span className="text-[10px]">(incl of Tax)</span>
              </th>
              <th className="border border-black px-2 py-1">Unit</th>
              <th className="border border-black px-2 py-1">Qty</th>
              <th className="border border-black px-2 py-1">Free</th>
              <th className="border border-black px-2 py-1">Sch Rs</th>
              <th className="border border-black px-2 py-1 text-[10px]">
                Co. Sch% <hr /> Cash Disc%
              </th>
              <th className="border border-black border-r-2 px-2 py-1">
                Net Amt.
              </th>
              <th className="border border-black px-2 py-1">
                Particulars <br />
                <div className="flex justify-between gap-8">
                  <span className="">Unit</span>
                  <span className="">M.R.P.</span>
                </div>
              </th>
              <th className="border border-black px-2 py-1">Free</th>
              <th className="border border-black px-2 py-1">Qty</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="border-b text-[12px] text-center">
                <td className="border border-black max-w-[150px] ps-1 py-1 text-left">
                  {item.particulars_hsn}
                </td>
                <td className="border border-black px-2 py-1">{item.pack}</td>
                <td className="border border-black px-2 py-1">{item.mrp}</td>
                <td className="border border-black px-2 py-1">
                  {item.gst_percentage}
                </td>
                <td className="border border-black px-2 py-1">
                  {item.rate_incl_tax}
                </td>
                <td className="border border-black px-2 py-1">{item.unit}</td>
                <td className="border border-black px-2 py-1">{item.qty}</td>
                <td className="border border-black px-2 py-1">{item.free}</td>
                <td className="border border-black px-2 py-1">{item.sch_rs}</td>
                <td className="border border-black px-2 py-1">
                  {item.co_sch_percentage}
                </td>
                <td className="border border-black border-r-2 px-2 py-1">
                  {item.net_amt}
                </td>
                <td className="border border-black text-[10px]">
                  <span>{item.particulars_right}</span>
                  <div className="flex justify-between px-2 pb-1">
                    <span className="">{item.unit_right}</span>
                    <span className="">{item.mrp_right}</span>
                  </div>
                </td>
                <td className="border border-black px-2 py-1">
                  {item.free_right}
                </td>
                <td className="border border-black px-2 py-1">
                  {item.qty_right}
                </td>
              </tr>
            ))}

            <tr className="border-t-black border-t-2">
              <td colSpan={11} className="border border-black border-r-2 ">
                <div className="flex">
                  <div className="w-1/2 border-r-black border-r pr-2">
                    <div className="flex">
                      {/* Buyer Details */}
                      <div className="w-1/4 text-[12px] border-r border-r-black pt-3 ps-2 pb-4">
                        Items in Bill: 1 <br />
                        Cases in Bill: 1 <br />
                        Loose items: 0
                      </div>

                      {/* Buyer Details */}
                      <div className="w-3/4 mt-3 ps-2 pb-2">
                        <h3 className="font-bold">Terms & Conditions</h3>
                        <p className="text-[12px] leading-6">
                          1. We hereby certify that articles of food mentioned
                          in the invoice are warranted to be of the nature and
                          quality which they purport to be as per the Food
                          Safety and Standards Act and Rules. <br />
                          2. Goods once sold will not be taken back. E & OE.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-1/2 ">
                    <div className="flex h-full">
                      <div className="w-3/5 text-[12px]  border-r border-r-black ">
                        <div className="flex h-1/3 font-bold w-full ">
                          <div className="border w-1/5 border-black flex-1 items-center flex justify-center">
                            Goods
                          </div>
                          <div className="border w-1/5 border-black flex items-center justify-center">
                            SGST%
                          </div>
                          <div className="border w-1/5 border-black flex items-center justify-center">
                            Value
                          </div>
                          <div className="border w-1/5 border-black flex items-center justify-center">
                            SGST%
                          </div>
                          <div className="border w-1/5 border-black flex items-center justify-center">
                            Value
                          </div>
                        </div>

                        <div className="flex h-1/3 w-full">
                          <div className="border w-1/5 border-black flex items-center justify-center">
                            2082
                          </div>
                          <div className="border w-1/5 border-black flex items-center justify-center">
                            2082%
                          </div>
                          <div className="border w-1/5 border-black flex items-center justify-center">
                            2082
                          </div>
                          <div className="border w-1/5 border-black flex items-center justify-center">
                            2082%
                          </div>
                          <div className="border w-1/5 border-black flex items-center justify-center">
                            82
                          </div>
                        </div>

                        <div className="flex font-bold h-1/3 w-full">
                          <div className="border w-1/5 border-black flex items-center justify-center">
                            2082
                          </div>
                          <div className="border w-1/5 border-black flex items-center justify-center">
                            2082%
                          </div>
                          <div className="border w-1/5 border-black flex items-center justify-center">
                            2082
                          </div>
                          <div className="border w-1/5 border-black flex items-center justify-center">
                            2082%
                          </div>
                          <div className="border w-1/5 border-black flex items-center justify-center">
                            82
                          </div>
                        </div>
                      </div>

                      <div className="w-2/5">
                        <tr className="h-full w-full">
                          <td className="w-2/5 px-2">
                            <div className="flex justify-between border-b border-black py-1">
                              <span>Gross Amt.</span>
                              <span>2082.60</span>
                            </div>
                            <div className="flex justify-between border-b border-black py-1">
                              <span>Less Sch.</span>
                              <span>0.00</span>
                            </div>
                            <div className="flex justify-between border-b border-black py-1">
                              <span>Less CD</span>
                              <span>0.00</span>
                            </div>
                            <div className="flex justify-between border-b border-black py-1">
                              <span>R.Off</span>
                              <span>0.00</span>
                            </div>
                            <div className="flex justify-between py-1">
                              <span className="font-bold">Net Amt.</span>
                              <span className="font-bold">2082.60</span>
                            </div>
                          </td>
                        </tr>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td colSpan={3} className="border border-black px-2 py-1">
                <div className="my-auto">
                  <div className="flex justify-between border-b border-black pb-1">
                    <div>Gross Amt.</div>
                    <div>31721.52</div>
                  </div>
                  <div className="flex justify-between border-b border-black pb-1">
                    <div>Less Sch.</div>
                    <div>0.00</div>
                  </div>
                  <div className="flex justify-between border-b border-black pb-1">
                    <div>Less CD</div>
                    <div>123.65</div>
                  </div>
                  <div className="flex justify-between border-b border-black pb-1">
                    <div>R.Off</div>
                    <div>0.00</div>
                  </div>
                  <div className="flex justify-between font-bold pb-1">
                    <div>Net Amt.</div>
                    <div>31598.00</div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="">
          <p className="font-bold pb-3">
            This is computer generated Bill, No signature required.Bank:PUNJAB
            NATIONAL BANK SEONI 0490008700003292 PUNB0049000
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
