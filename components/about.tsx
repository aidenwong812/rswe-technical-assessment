import { Button } from "./ui/button"

const About = () => {
  return (
    <div className="pt-2 pb-14 px-20">
      <div className="flex flex-col gap-10">
        <h1 className="font-semibold text-3xl ml-1">About this car</h1>
        <div className="flex justify-start items-center gap-32">
          <div className="flex items-center gap-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
              <path d="M13.1494 3.67383H4.67915C4.22624 3.67383 3.79187 3.84398 3.47161 4.14686C3.15136 4.44973 2.97144 4.86052 2.97144 5.28885V11.5229C2.97144 11.7799 3.07939 12.0263 3.27154 12.2081C3.4637 12.3898 3.72432 12.4919 3.99607 12.4919H13.8325C14.1043 12.4919 14.3649 12.3898 14.557 12.2081C14.7492 12.0263 14.8572 11.7799 14.8572 11.5229V5.28885C14.8572 4.86052 14.6772 4.44973 14.357 4.14686C14.0367 3.84398 13.6023 3.67383 13.1494 3.67383ZM12.8079 10.5538H5.0207V5.61186H12.8079V10.5538Z" fill="#0036C3" />
              <path d="M20.4262 0L19.1262 1.42033L24.05 5.58056V18.7352C24.0336 19.0481 23.8937 19.343 23.6593 19.5589C23.425 19.7747 23.114 19.8951 22.7906 19.8951C22.4672 19.8951 22.1562 19.7747 21.9219 19.5589C21.6875 19.343 21.5476 19.0481 21.5312 18.7352V9.87621C21.5312 9.12448 21.2231 8.40355 20.6745 7.872C20.126 7.34046 19.382 7.04184 18.6062 7.04184H17.875V4.62632C17.875 3.45698 17.3956 2.33553 16.5423 1.50867C15.689 0.681822 14.5317 0.217302 13.325 0.217302H4.54999C3.34326 0.217302 2.18595 0.681822 1.33266 1.50867C0.479373 2.33553 0 3.45698 0 4.62632V25.5093C0 25.7599 0.102723 26.0002 0.28557 26.1774C0.468418 26.3546 0.716413 26.4541 0.974999 26.4541H16.9C17.1586 26.4541 17.4066 26.3546 17.5894 26.1774C17.7723 26.0002 17.875 25.7599 17.875 25.5093V8.93142H18.6062C18.8648 8.93142 19.1128 9.03096 19.2957 9.20814C19.4785 9.38532 19.5812 9.62563 19.5812 9.87621V18.7352C19.6078 19.5429 19.9575 20.3089 20.5565 20.8711C21.1555 21.4333 21.9567 21.7477 22.7906 21.7477C23.6245 21.7477 24.4257 21.4333 25.0247 20.8711C25.6237 20.3089 25.9734 19.5429 26 18.7352V5.15226C26.0011 5.01806 25.9727 4.88517 25.9166 4.76245C25.8606 4.63972 25.7782 4.52998 25.675 4.44051L20.4262 0ZM15.925 24.5645H1.95V4.62632C1.95 3.95813 2.22393 3.3173 2.71152 2.84481C3.19911 2.37232 3.86043 2.10688 4.54999 2.10688H13.325C14.0145 2.10688 14.6759 2.37232 15.1635 2.84481C15.6511 3.3173 15.925 3.95813 15.925 4.62632V24.5645Z" fill="#0036C3" />
            </svg>
            <p className="text-xl">Diesel Fuel</p>
          </div>
          <div className="flex items-center gap-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
              <path d="M19.0239 7.5418C18.5624 7.5418 18.2096 7.92182 18.2096 8.35613V13.2693H14.1107V8.38328C14.1107 7.92182 13.7307 7.56895 13.2964 7.56895C12.835 7.56895 12.4821 7.94897 12.4821 8.38328V13.2964H8.79044V8.38328C8.79044 7.92182 8.41042 7.56895 7.97611 7.56895C7.5418 7.56895 7.16178 7.94897 7.16178 8.38328V18.6439C7.16178 19.1053 7.5418 19.4582 7.97611 19.4582C8.41042 19.4582 8.79044 19.0782 8.79044 18.6439V14.9251H12.4821V18.6167C12.4821 19.0782 12.8621 19.4311 13.2964 19.4311C13.7579 19.4311 14.1107 19.051 14.1107 18.6167V14.9251H19.0239C19.4853 14.9251 19.8382 14.5451 19.8382 14.1107V8.38328C19.8382 7.92182 19.4853 7.5418 19.0239 7.5418ZM13.4864 1C6.59175 1 1 6.59175 1 13.4864C1 20.3811 6.59175 26 13.5136 26C20.4354 26 26 20.4083 26 13.4864C26 6.59175 20.4083 1 13.4864 1ZM13.4864 24.3713C7.48751 24.3713 2.62866 19.4853 2.62866 13.5136C2.62866 7.51466 7.51466 2.65581 13.4864 2.65581C19.4582 2.65581 24.3442 7.5418 24.3442 13.5136C24.3713 19.4853 19.4853 24.3713 13.4864 24.3713Z" fill="#0036C3" stroke="#0036C3" strokeWidth="0.5" />
            </svg>
            <p className="text-xl">Automatic Transmission</p>
          </div>
          <div className="flex items-center gap-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
              <g clipPath="url(#clip0_1_1322)">
                <path d="M23.7767 10.6311L22.3417 12.7895C23.0337 14.1697 23.3725 15.7001 23.3277 17.2435C23.2829 18.7868 22.8559 20.295 22.085 21.6328H5.915C4.91303 19.8946 4.49785 17.8798 4.731 15.887C4.96415 13.8943 5.83323 12.0298 7.20939 10.5698C8.58556 9.10983 10.3955 8.13217 12.371 7.78177C14.3465 7.43137 16.3823 7.72686 18.1767 8.62446L20.335 7.18946C18.1376 5.78038 15.531 5.14896 12.9324 5.39622C10.3337 5.64347 7.89302 6.7551 6.00074 8.55331C4.10847 10.3515 2.87392 12.7324 2.49459 15.3151C2.11525 17.8978 2.61304 20.5331 3.90833 22.7995C4.11193 23.1521 4.40427 23.4453 4.7563 23.65C5.10834 23.8547 5.5078 23.9637 5.915 23.9661H22.0733C22.4845 23.9678 22.8888 23.8607 23.2453 23.6558C23.6017 23.451 23.8978 23.1555 24.1033 22.7995C25.1783 20.9374 25.7177 18.8144 25.6621 16.6651C25.6066 14.5157 24.9581 12.4235 23.7883 10.6195L23.7767 10.6311ZM12.355 18.6111C12.5717 18.8281 12.829 19.0002 13.1123 19.1176C13.3956 19.235 13.6992 19.2955 14.0058 19.2955C14.3125 19.2955 14.6161 19.235 14.8994 19.1176C15.1826 19.0002 15.44 18.8281 15.6567 18.6111L22.26 8.70613L12.355 15.3095C12.1381 15.5262 11.966 15.7835 11.8485 16.0668C11.7311 16.35 11.6707 16.6537 11.6707 16.9603C11.6707 17.2669 11.7311 17.5706 11.8485 17.8538C11.966 18.1371 12.1381 18.3944 12.355 18.6111Z" fill="#0036C3" />
              </g>
              <defs>
                <clipPath id="clip0_1_1322">
                  <rect width="28" height="28" fill="white" transform="translate(0 0.632812)" />
                </clipPath>
              </defs>
            </svg>
            <p className="text-xl">11,594 Miles</p>
          </div>
          <div className="flex items-center gap-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="32" viewBox="0 0 10 32" fill="none">
              <path d="M8.16407 7.98401H1.67226C0.749603 7.98401 0 8.73404 0 9.65627V29.9055C0 30.8251 0.749603 31.5777 1.67226 31.5777H8.16407C9.08414 31.5777 9.83633 30.8307 9.83633 29.9055V9.65627C9.83633 8.73361 9.08888 7.98401 8.16407 7.98401ZM7.82962 9.99029V18.4198H5.94417V10.78H3.93747V18.4202H2.00628V9.99029H7.82962ZM2.00628 29.571V19.9069H7.82962V29.571H2.00628Z" fill="#0036C3" />
              <path d="M3.93622 4.0734L3.93752 7.15424H5.94422L5.94293 4.0734C6.63039 3.70745 7.11373 3.00704 7.11373 2.17631C7.11373 0.97703 6.14015 0 4.93958 0C3.7403 0 2.76845 0.977462 2.76413 2.17631C2.76586 3.00704 3.24919 3.70745 3.93622 4.0734Z" fill="#0036C3" />
            </svg>
            <p className="text-xl">3.5L Displacement</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 mt-28">
        <h1 className="font-semibold text-3xl ml-1">Specifications</h1>
        <div className="flex justify-items-start">
          <div className="w-1/3">
            <h5 className="font-semibold mb-4">Exterior</h5>
            <div className="grid grid-cols-2 gap-2">
              <p>Body Style</p>
              <p>Hatchback</p>
              <p>Exterior Color</p>
              <p>Blue</p>
              <p>Length</p>
              <p>{"175''"}</p>
              <p>Wheelbase</p>
              <p>{"106''"}</p>
              <p>Width</p>
              <p>{"69.7''"}</p>
              <p>Full Width</p>
              <p>N/A</p>
              <p>Clearance</p>
              <p>{"6''"}</p>
            </div>
          </div>
          <div className="w-1/3">
            <h5 className="font-semibold mb-4">Interior</h5>
            <div className="grid grid-cols-2 gap-2">
              <p>Seating</p>
              <p>5 adults</p>
              <p>Interior Color</p>
              <p>N/A</p>
              <p>Head Room Front</p>
              <p>{"41''"}</p>
              <p>Head Room Rear</p>
              <p>{"37''"}</p>
              <p>Leg Room Front</p>
              <p>{"42''"}</p>
              <p>Leg Room Rear</p>
              <p>{"33''"}</p>
              <p>Shoulder Room Front</p>
              <p>{"54''"}</p>
            </div>
            <Button variant="ghost" className="px-0 gap-2 hover:bg-transparent hover:underline decoration-[#0036C3] mt-6">
              <p className="font-normal text-[#0036C3]">Show more</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clipPath="url(#clip0_2875_36)">
                  <path d="M8 2.66666L7.06 3.60666L10.78 7.33332H2.66667V8.66666H10.78L7.06 12.3933L8 13.3333L13.3333 7.99999L8 2.66666Z" fill="#0036C3" />
                </g>
                <defs>
                  <clipPath id="clip0_2875_36">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Button>
          </div>
          <div className="flex flex-col w-1/3 gap-14">
            <div>
              <h5 className="font-semibold mb-4">BEV Performance</h5>
              <div className="grid grid-cols-2 gap-2">
                <p>Horsepower</p>
                <p>107 hp</p>
                <p>MPGe</p>
                <p>102</p>
                <p>Top Speed</p>
                <p>90 mph</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Charging</h5>
              <div className="grid grid-cols-2 gap-2">
                <p>Electric Range</p>
                <p>73 Mi.</p>
                <p>Battery Size</p>
                <p>24 kwh</p>
                <p>Cost to charge(full)</p>
                <p>$2.50</p>
              </div>
              <Button variant="ghost" className="px-0 gap-2 hover:bg-transparent hover:underline decoration-[#0036C3] mt-6">
                <p className="font-normal text-[#0036C3]">Show more</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g clipPath="url(#clip0_2875_36)">
                    <path d="M8 2.66666L7.06 3.60666L10.78 7.33332H2.66667V8.66666H10.78L7.06 12.3933L8 13.3333L13.3333 7.99999L8 2.66666Z" fill="#0036C3" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2875_36">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button variant="outline">Show all specifications</Button>
        </div>
      </div>
    </div>
  )
}

export default About