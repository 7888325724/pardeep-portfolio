// import Link from "next/link";

// import {
//   RiYoutubeLine,
//   RiInstagramLine,
//   RiFacebookLine,
//   RiDribbbleLine,
//   RiGithubLine,
//   RiPinterestLine,
// } from "react-icons/ri";

// export const socialData = [
 
//   {
//     name: "Instagram",
//     link: "https://instagram.com",
//     Icon: RiInstagramLine,
//   },
//   {
//     name: "Facebook",
//     link: "https://facebook.com",
//     Icon: RiFacebookLine,
//   },
  
  
// ];

// const Socials = () => {
//   return (
//     <div className="flex items-center gap-x-5 text-lg">
//       {socialData.map((social, i) => (
//         <Link
//           key={i}
//           title={social.name}
//           href={social.link}
//           target="_blank"
//           rel="noreferrer noopener"
//           className={`${
//             social.name === "Github"
//               ? "bg-accent rounded-full p-[5px] hover:text-white"
//               : "hover:text-accent"
//           } transition-all duration-300`}
//         >
//           <social.Icon aria-hidden />
//           <span className="sr-only">{social.name}</span>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default Socials;






import Link from "next/link";

// icons import (tuhade project ch ho sakde extra imports)
import {
  RiGithubLine,
  RiDribbbleLine,
  RiPinterestLine,
  RiYoutubeLine,
} from "react-icons/ri";

// ✅ Empty socialData or icons remove karne ne
export const socialData = [
  // example: tu later GitHub ya koi hor add kar sakda
  // {
  //   name: "Github",
  //   link: "https://github.com",
  //   Icon: RiGithubLine,
  // },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData?.length > 0 &&
        socialData.map((social, i) => (
          <Link
            key={i}
            title={social.name}
            href={social.link}
            target="_blank"
            rel="noreferrer noopener"
            className={`${
              social.name === "Github"
                ? "bg-accent rounded-full p-[5px] hover:text-white"
                : "hover:text-accent"
            } transition-all duration-300`}
          >
            <social.Icon aria-hidden />
            <span className="sr-only">{social.name}</span>
          </Link>
        ))}
    </div>
  );
};

export default Socials;
