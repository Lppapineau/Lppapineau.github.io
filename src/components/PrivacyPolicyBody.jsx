import { idNavLink3 } from "../constants";
import styles from "../style";

const PrivacyPolicyBody = () => (
  <section id={idNavLink3} className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Privacy Policy
      </h2>
    </div>

    <div className="w-full relative z-[1] max-w-[800px]">
      <p className="font-poppins text-[14px] text-dimBlack mb-8">
        Effective Date: 14 June 2025 · Last Updated: March 2026
      </p>

      <p className="font-poppins font-normal text-[18px] leading-[32px] text-black mb-10">
        Thank you for using Food Coma. We respect your privacy and keep this simple.
      </p>

      {[
        {
          title: "1. Default: No Data Collected",
          text: "If you do not create an account and do not enable Apple Health or Google Health Connect, the app collects absolutely nothing. All your data (calorie logs, weight, goals, etc.) stays only on your device. No data is sent to any server or third party.",
        },
        {
          title: "2. Optional: Account Creation",
          text: "If you choose to create a profile using your email, your data (calorie logs, weight, goals, etc.) will be saved online so you can access it across devices. Your email is used solely for authentication and is never sold or shared with third parties. Account creation is entirely optional.",
        },
        {
          title: "3. Optional: Apple Health & Google Health Connect",
          text: "If you choose to connect Apple Health or Google Health Connect, the app may read workouts, sleep data, and weight from those sources to enhance your experience. This access is only enabled if you explicitly grant permission. You can revoke this permission at any time in your device settings. This data is used only within the app and is not shared with third parties.",
        },
        {
          title: "4. Limited AI Processing (Gemini API)",
          text: "When you use the food recognition feature, only the food picture or text description you provide is sent to the Gemini API. No personal identifiers or logs are attached. Gemini cannot link this to you. This is used only to retrieve estimated food macros such as calories, protein, carbs, and fats.",
        },
        {
          title: "5. No Ads or Tracking",
          text: "The app does not contain advertisements, analytics, or tracking tools.",
        },
        {
          title: "6. Your Data, Your Control",
          text: "If no account is created and Health Connect is not enabled, no data ever leaves your device. If you delete the app without an account, all data is permanently deleted. If you have an account, you can request deletion of your data at any time by contacting us.",
        },
        {
          title: "7. Updates to This Policy",
          text: "If we change how the app handles data, we will update this Privacy Policy and make it available in the app or on our website.",
        },
      ].map((item, i) => (
        <div key={i} className="mb-8">
          <h3 className="font-poppins font-semibold text-[20px] text-black mb-3">
            {item.title}
          </h3>
          <p className="font-poppins font-normal text-[18px] leading-[32px] text-dimBlack">
            {item.text}
          </p>
        </div>
      ))}

      <div className="mt-10 pt-8 border-t border-gray-600">
        <h3 className="font-poppins font-semibold text-[20px] text-black mb-3">Contact</h3>
        <p className="font-poppins font-normal text-[18px] leading-[32px] text-dimBlack">
          If you have any questions or concerns, reach us at{" "}
          <a href="mailto:info@fluttermapp.com" className="text-blue-400 hover:underline">
            info@fluttermapp.com
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default PrivacyPolicyBody;