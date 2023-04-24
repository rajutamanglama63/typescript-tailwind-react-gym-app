import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from "@/assets/Logo.png"
import Link from "./Link";
import { SelectedPage } from "@/shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void
};

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";
  return <nav>
    <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>

      <div className={`${flexBetween} mx-auto w-5/6`}>

        <div className={`${flexBetween} w-full gap-16`}>
          <img alt="logo" src={logo} />

          <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8`}>
              <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Benifits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </div>
            <div className={`${flexBetween} gap-8`}>
              <div>sign in</div>
              <button>Become a member</button>
            </div>
          </div>

        </div>

      </div>

    </div>
  </nav>;
};

export default Navbar;
