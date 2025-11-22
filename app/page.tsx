import { FaInstagram } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { IoMdCall } from "react-icons/io";

export default function Home() {
  return (
    <main className="min-h-screen bg-base-100 text-base-content flex justify-center md:items-center">
      <div className="w-full pb-16 md:pb-20 shadow-none mx-auto">
        {/* Top bar */}
        <div className="bg-secondary text-secondary-content text-center py-3 text-[0.65rem] md:text-xs lg:text-sm tracking-[0.25em] font-brigends font-extrabold">
          ONLINE BOOKINGS COMING SOON
        </div>

        {/* Middle content block (logo + text + buttons) */}
        <div className="bg-neutral">
          {/* Logo section */}
          <section className="flex justify-center px-6 py-8 md:py-10 lg:py-12">
            <img
              src="/logo.svg"
              alt="The Grid"
              className="w-full h-auto max-w-xs md:max-w-sm"
            />
          </section>

          {/* Activities */}
          <section className="px-4 pb-8 md:pb-10 lg:pb-12 pt-4 md:pt-6 text-center space-y-4 md:space-y-5 lg:space-y-6">
            <p className="text-2xl md:text-3xl lg:text-4xl font-brigends font-extrabold tracking-[0.25em]">
              PICKLEBALL
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-brigends font-extrabold tracking-[0.25em]">
              PAINTBALL
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-brigends font-extrabold tracking-[0.25em]">
              BANQUET LAWN
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-brigends font-extrabold tracking-[0.25em]">
              CAFE
            </p>
          </section>

          {/* Call to book */}
          <div className="flex justify-center">
            <section className="flex-col justify-center max-w-sm md:max-w-md lg:max-w-lg px-4 pb-10 md:pb-12 lg:pb-14 pt-4 md:pt-6 text-center">
              <p className="text-[0.7rem] md:text-xs lg:text-sm font-brigends font-extrabold tracking-[0.22em] mb-4 md:mb-5">
                CALL TO BOOK/ENQUIRE
              </p>

              {/* Phone button */}
              <a
                href="tel:7598223200"
                className="btn btn-primary w-full rounded-none justify-center gap-2 text-lg md:text-xl font-lexend font-extrabold tracking-[0.12em] mb-6"
              >
                <span className="text-lg md:text-xl mr-2">
                  <IoMdCall />
                </span>
                <span>7598 22 32 00</span>
              </a>

              {/* Instagram button */}
              <a
                href="https://instagram.com/thegridmadurai"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-primary w-full rounded-none justify-center px-6 text-base md:text-lg font-lexend font-extrabold tracking-[0.08em] mb-4"
              >
                <span className="text-lg md:text-xl mr-2">
                  <FaInstagram />
                </span>
                <span>thegridmadurai</span>
              </a>

              {/* Location button */}
              <a
                href="https://maps.app.goo.gl/4M2QdpVBfbJncnup7"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-primary w-full rounded-none justify-center px-6 text-base md:text-lg font-lexend font-extrabold tracking-[0.08em]"
              >
                <span className="text-lg md:text-xl mr-2">
                  <GrLocation />
                </span>
                <span>Location</span>
              </a>
            </section>
          </div>
        </div>

        {/* Address section */}
        <div className="flex justify-center">
          <section className="text-center font-lexend bg-base-100 border-t border-base-300 max-w-sm md:max-w-md lg:max-w-lg px-6 mt-4 text-[0.75rem] md:text-[0.8rem] lg:text-sm leading-relaxed">
            <div className="divider divider-primary-content"></div>
            <p className="text-[0.7rem] md:text-xs lg:text-sm tracking-[0.2em] mb-4 font-extrabold">
              OFFICE ADDRESS
            </p>

            <p className="mb-4">
              <span className="text-[0.8rem] md:text-sm">
                THE GRID
              </span>
              <br />
              [A UNIT OF RAVEGA VENTURES]
            </p>

            <p className="mb-4">
              9/155/A, MAIN ROAD,
              <br />
              MANDHIKULAM,
              <br />
              MADURAI - 625 014,
              <br />
              TAMIL NADU
            </p>

            <p className="mb-4">GSTIN: 33ABLFR3870M1ZO</p>

            <p>PHONE: 7598 22 32 00</p>
          </section>
        </div>
      </div>
    </main>
  );
}
