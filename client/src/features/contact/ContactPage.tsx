import { Button, ButtonGroup, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { decrement, increment } from "./counterSlice";

export default function ContactPage() {
  const dispatch = useAppDispatch();
  useAppSelector(state => state.counter);

  return (
    <div>
      <h1>Contact us</h1>
      <p>We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, there are multiple ways to get in touch with us.</p>

      <ul>
        <li>
          Email: <a href="mailto:ebook@gmail.com">ebook@gmail.com</a>
        </li>
        <li>
          Phone Number: +1 (123) 555-6789
          <ul>  
          </ul>
        </li>
      </ul>
    </div>
  );
}
