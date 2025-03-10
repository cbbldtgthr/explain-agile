import { Button } from "@mui/material";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import { useNavigate } from "react-router-dom";


import styles from "./Arena.module.css";

export function About() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.root}>
        <div className="flex justify-center">
          <article className="prose prose-slate lg:prose-2xl">
            <h3>The <b>problem</b> with this model...</h3>
            <img
              src={process.env.PUBLIC_URL + "/og_agile-mini.jpg"}
              alt="OG Agile model"
            />
            <p>
              This picture is generally fine for explaining product evolution in terms of de-risking capital investment.
              However, it provides little insight for <i>developers</i> {" "} and what strategies will help them practically in their day-to-day work.
            </p>
            <p>
              <u>Problem 1:</u> {" "}
              We are all familiar with skateboards, scooters, and cars. But software worth building should, by definition, be something {" "}
              <i>unknown</i>. Great software products are usually <i>discovered</i> {" "} rather than <i>willed</i> {" "} into existence.
            </p>
            <p>
              <u>Problem 2:</u> {" "}
              Consider a factory that produces skateboards versus one that produces scooters.
              You can't simply swap out a few dies and start producing
              skateboards one day and scooters the next. So even though those
              two things are very similar from a <i>user prespective</i>, the factory
              that produces each likely looks and operates very differently.
            </p>

            <h2>A better model</h2>
            <h3>The number of steps does not matter</h3>
            <p>
              You are only judged by the <b>distance</b> traveled, not the
              number of steps taken. The most efficient path is to do lots of
              short clicks. People tend to make one of two mistakes:
            </p>
            <ol>
              <li>
                take increasingly larger steps as their "confidence" grows, or
              </li>
              <li>
                take increasingly smaller steps as they try to "fine tune"
                their path
              </li>
            </ol>

            <p>
              Both of these lead to a longer path traveled. The best way is
              take small steps, all the time.
            </p>

            <h3>Takeaways</h3>
            <ul>
              <li>
                Playing is not possible without having a sense of what you
                want and then some way to get real-time, concrete{" "}
                <b>feedback</b>. Define and communicate the goal in{" "}
                <b>experimental</b> terms so you have a mental "temperature
                gauge" to guide you. You will know what this looks like in
                your domain.
              </li>
              <li>
                The underlying philosopy is that an evolusionary model of
                constant experimentation through variation and selection is
                really the <i>only viable way</i> to navigate an extremely
                complicated problem.
              </li>
              <li>
                Do whatever to keep your SDLC as short as possible. This will
                motivate you to take smaller and smaller steps, more
                frequently. Aiming for a minimum of 10 production deploys a
                day is a good start.
              </li>
            </ul>
            <img
              src={process.env.PUBLIC_URL + "/pain_of_change.png"}
              alt="Pain of Change"
            />
            <p>
              In a future version of the game, I also want add a variable
              timeout between steps to show how this naturally leads you to
              wanting to take larger steps.
            </p>

            <h3>Inspiration</h3>
            <ul>
              <li>
                The principles of{" "}
                <a href="https://en.wikipedia.org/wiki/Extreme_programming">
                  Extreme Programming
                </a>{" "}
                aim to solve for both of the above problems: <i>feedback</i>{" "}
                and <i>iteration time</i> (which are really two sides of the
                same coin).
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=RhdlBHHimeM">
                  Software Art Thou: Glenn Vanderburg - Real Software
                  Engineering
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=5eW6Eagr9XA">
                  Veritasium: The 4 things it takes to be an expert (not just
                  10,000 hours)
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=GnK_n9Udhhs">
                  Agile Adria 2013 keynote / Gojko Adzic: Make Impacts Not
                  Software
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=ln4WnxX-wrw">
                  TDD Is The Best Design Technique
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=v21jg8wb1eU">
                  How To Estimate Software Development Time
                </a>
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/28820024-competing-against-luck">
                  Competing Against Luck
                </a>{" "}
                by Clayton M. Christensen
              </li>
              <li>
                <a href="https://www.goodreads.com/vi/book/show/11721966-good-strategy-bad-strategy">
                  Good Strategy / Bad Strategy
                </a>{" "}
                and{" "}
                <a href="https://www.goodreads.com/book/show/58895961-the-crux">
                  The Crux
                </a>{" "}
                by Richard P. Rumelt
              </li>
              <li>
                <a href="https://www.goodreads.com/book/show/10158633-adapt">
                  Adapt
                </a>{" "}
                and{" "}
                <a href="https://www.goodreads.com/book/show/28815513-messy">
                  Messy
                </a>{" "}
                by Tim Harford
              </li>
            </ul>
            <div className="flex items-center mb-5 my-auto">
              <div className="mr-5">

                <Button
                  variant="contained"
                  onClick={() => navigate("/arena")}
                  startIcon={<DirectionsWalkIcon />}
                >
                  Play
                </Button>
              </div>
              <div>

                <Button
                  variant="outlined"
                  onClick={() => navigate("/")}
                >
                  Home
                </Button>
              </div>
              <div className="w-full sm:w-1/2 m-2">
              </div>
            </div>
            <div className="mt-3">
              <i>
                By <a href="http://buymeacoffee.com/cbbldtgthr">Andrew Cloete</a>.
                Feel free to share! Source available{" "}
                <a href="https://github.com/cbbldtgthr/">here</a>.
              </i>
            </div>
          </article>
        </div>
      </div>
    </>

  )
}


export function Intro() {
  const navigate = useNavigate();
  return (
    <div className={styles.root}>
      <div className="flex justify-center">
        <article className="prose prose-slate lg:prose-2xl">
          <h1>
            <i>"How long will it take?"</i>
          </h1>
          <p>
            To help explain my feelings regarding this question, I hacked
            together this silly little "game" for a presentation. My aim was to
            leave my audience with a more tangible mental model behind the
            motivation for <a href="https://agilemanifesto.org/">Agile</a>{" "}
            software development principles.
          </p>
          <p>
            Your challenge is to find a hidden goal in the shortest distance
            traveled. Use the "temperature gauge" to guide you.
          </p>
          <p>
            <i>
              Note. This game is designed for <b>desktop use only</b>. You will
              have a bad time on mobile.
            </i>
          </p>
          <div className="flex flex-col items-center">
            <div className="w-full sm:w-1/2 m-2">
              <Button
                variant="contained"
                onClick={() => navigate("/arena")}
                fullWidth={true}
                startIcon={<DirectionsWalkIcon />}
              >
                Play
              </Button>
            </div>
            <div className="w-full sm:w-1/2 m-2">
              <Button
                variant="outlined"
                onClick={() => navigate("/about")}
                fullWidth={true}
              >
                I'm lazy, just tell me
              </Button>
            </div>
          </div>
          <div className="mt-3">
            <i >
              By <a href="http://buymeacoffee.com/cbbldtgthr">Andrew Cloete</a>.
              Feel free to share! Source available{" "}
              <a href="https://github.com/cbbldtgthr/">here</a>.
            </i>
          </div>

        </article>
      </div>
    </div>
  );
}
