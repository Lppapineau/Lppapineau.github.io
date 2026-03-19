import { idNavLink1 } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { flutterChecklist, slice1, slice2, slice3 } from "../assets";

const SectionHeader = () => (
  <section id={idNavLink1} className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    {/* <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-8 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Food Coma<br className="sm:block hidden" />
      </h2>
    </div> */}
    <div className={layout.sectionReverse}>
      <div className={`${layout.sectionImgReverse} gap-4`}>
        <img src={slice1} alt="zeroToFlutterPro" className="w-[30%] relative z-[5] rounded-[20px] shadow-lg" /><img src={slice2} alt="zeroToFlutterPro" className="w-[30%] relative z-[5] rounded-[20px] shadow-lg" />
        <img src={slice3} alt="zeroToFlutterPro" className="w-[30%] relative z-[5] rounded-[20px] shadow-lg" />
      </div>
      <div className={layout.sectionInfoStart}>
        <h2 className={styles.heading3}>
          Food Coma
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-10`}>
          • One-click tracking
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-4 font-black`}>
          • It's that simple
        </p>
        <div className="flex flex-row flex-wrap gap-4 sm:mt-0 mt-6">
          <Button styles={`mt-10`} label='Apple Store' url='https://apps.apple.com/app/calories-counter-food-coma/id6747300269' />
          <Button styles={`mt-10`} label='Play Store' url='https://play.google.com/store/apps/details?id=com.fluttermapp.food_coma' />
        </div>
      </div>
    </div>
  </section>
);

export default SectionHeader;