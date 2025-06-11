import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Customer feedback highlights"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div class="client-image">
                  <img src={testimonial.imgPath} alt="" />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  {testimonial.mentions ? 
                    <a
                      href={testimonial.mentions ? `${testimonial.mentions}` : "javascript:;"}>
                        {testimonial.mentions ? "Contact link" : "Available on request"}
                    </a> 
                    : 
                    <p className="text-white-50">Available on request</p>
                  }

                  {/* <a
                    href={testimonial.mentions ? `${testimonial.mentions}` : "javascript:;"}>
                      <p className="text-white-50">{testimonial.mentions ? testimonial.mentions : "Available on request"}</p>
                  </a> */}
                  {/* <p className="text-white-50">{testimonial.mentions}</p> */}

                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
