import { createBrowserRouter } from "react-router-dom";
import NewsletterSignup from "../pages/NewsletterSignup";
import Home from "../components/Home";
import App from "../App";
import FeedbackForm from "../pages/FeedbackForm ";
import BugReportTool from "../pages/BugReportTool";
import ContactCardGenerator from "../pages/ContactCardGenerator";
import SimplePoll from "../pages/SimplePoll";



const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/newsletter-signup",
                element:<NewsletterSignup/>
            },
            {
                path:"/feedback-form",
                element:<FeedbackForm />
            },
            {
                path:"/bug-report-tool",
                element:<BugReportTool />
            },
            {
                path:"/contact-card-generator",
                element:<ContactCardGenerator />
            },
            {
                path:"/simple-poll",
                element:<SimplePoll />
            }
        ]
    }

]);

export default router;