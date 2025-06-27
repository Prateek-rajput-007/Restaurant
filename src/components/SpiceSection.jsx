import React from 'react';

const SpiceSection = () => {
  return (
    <div className="flex mx-auto w-full max-w-[1208px] items-center gap-10 py-18 md:gap-20 md:py-[120px] xl:gap-[140px] flex-col md:flex-row">
      <div className="bg-transparent overflow-hidden rounded-[1.5rem] relative aspect-square w-full shrink-0 md:max-h-[300px] md:max-w-[300px] xl:max-h-[520px] xl:max-w-[520px] hidden md:flex">
        <span className="block h-[1.2em] bg-current animate-pulse absolute inset-0"></span>
        <img
          alt="Saffron focuses on the art of blending spices"
          loading="lazy"
          decoding="async"
          className="object-cover absolute inset-0 h-full w-full"
          style={{ color: 'transparent', maxWidth: '100%' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 300px, 520px"
          srcSet="
            https://static-content.owner.com/brands/funnel/menu-section-images/zRqmL53Fyb3GYw2CFpu0t4uHYtbPqox2/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=4541398766&w=640&q=80&auto=format 640w,
            https://static-content.owner.com/brands/funnel/menu-section-images/zRqmL53Fyb3GYw2CFpu0t4uHYtbPqox2/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=4541398766&w=750&q=80&auto=format 750w,
            https://static-content.owner.com/brands/funnel/menu-section-images/zRqmL53Fyb3GYw2CFpu0t4uHYtbPqox2/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=4541398766&w=828&q=80&auto=format 828w,
            https://static-content.owner.com/brands/funnel/menu-section-images/zRqmL53Fyb3GYw2CFpu0t4uHYtbPqox2/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=4541398766&w=1080&q=80&auto=format 1080w,
            https://static-content.owner.com/brands/funnel/menu-section-images/zRqmL53Fyb3GYw2CFpu0t4uHYtbPqox2/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=4541398766&w=1200&q=80&auto=format 1200w,
            https://static-content.owner.com/brands/funnel/menu-section-images/zRqmL53Fyb3GYw2CFpu0t4uHYtbPqox2/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=4541398766&w=1920&q=80&auto=format 1920w,
            https://static-content.owner.com/brands/funnel/menu-section-images/zRqmL53Fyb3GYw2CFpu0t4uHYtbPqox2/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=4541398766&w=2048&q=80&auto=format 2048w,
            https://static-content.owner.com/brands/funnel/menu-section-images/zRqmL53Fyb3GYw2CFpu0t4uHYtbPqox2/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=4541398766&w=3840&q=80&auto=format 3840w"
          src="https://static-content.owner.com/brands/funnel/menu-section-images/zRqmL53Fyb3GYw2CFpu0t4uHYtbPqox2/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=4541398766&w=3840&q=80&auto=format"
        />
      </div>
      <div className="flex w-full flex-col gap-8">
        <div className="flex w-full justify-center px-6 md:justify-start md:px-0">
          <h2 className="text-[1.75rem] md:text-[2.5rem] lg:text-[3.5rem] text-black font-[Inter] text-balance text-center md:text-left">
            Saffron focuses on the art of blending spices
          </h2>
        </div>
        <div className="bg-transparent overflow-hidden rounded-[1.5rem] relative aspect-square w-full shrink-0 md:max-h-[300px] md:max-w-[300px] xl:max-h-[520px] xl:max-w-[520px] md:hidden">
          <span className="block h-[1.2em] bg-current animate-pulse absolute inset-0"></span>
          <img
            alt="Saffron focuses on the art of blending spices"
            loading="lazy"
            decoding="async"
            className="object-cover absolute inset-0 h-full w-full"
            style={{ color: 'transparent', maxWidth: '100%' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 300px, 520px"
            srcSet="
              https://static-content.owner.com/brands/funnel/menu-section-images/zRqmL53Fyb3GYw2CFpu0t4uHYtbPqox2/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=4541398766&w=640&q=80&auto=format 640w,
              https://static-content.owner.com/brands/funnel/menu-section-images/zRqmL53Fyb3GYw2CFpu0t4uHYtbPqox2/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=4541398766&w=750&q=80&auto=format 750w,
              https://static-content.owner.com/brands/funnel/menu-section-images/zRqmL53Fyb3GYw2CFpu0t4uHYtbPqox2/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=4541398766&w=828&q=80&auto=format 828w,
              https://static-content.owner.com/brands/funnel/menu-section-images/zRqmL53Fyb3GYw2CFpu0t4uHYtbPqox2/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=4541398766&w=1080&q=80&auto=format 1080w,
              https://static-content.owner.com/brands/funnel/menu-section-images/zRqmL53Fyb3GYw2CFpu0t4uHYtbPqox2/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=4541398766&w=1200&q=80&auto=format 1200w,
              https://static-content.owner.com/brands/funnel/menu-section-images/zRqmL53Fyb3GYw2CFpu0t4uHYtbPqox2/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=4541398766&w=1920&q=80&auto=format 1920w,
              https://static-content.owner.com/brands/funnel/menu-section-images/zRqmL53Fyb3GYw2CFpu0t4uHYtbPqox2/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=4541398766&w=2048&q=80&auto=format 2048w,
              https://static-content.owner.com/brands/funnel/menu-section-images/zRqmL53Fyb3GYw2CFpu0t4uHYtbPqox2/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=4541398766&w=3840&q=80&auto=format 3840w"
            src="https://static-content.owner.com/brands/funnel/menu-section-images/zRqmL53Fyb3GYw2CFpu0t4uHYtbPqox2/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=4541398766&w=3840&q=80&auto=format"
          />
        </div>
        <div className="flex w-full flex-col gap-1 px-6 md:px-0 whitespace-pre-wrap">
          <p className="text-[1rem] text-black font-[Inter]">
            Saffron is a Philly-based Indian Kitchen. Our chefs have truly mastered the art of blending spices. Whether you desire traditional Indian cuisine or the ‘nouveau’ style that is increasingly popular amongst our clients, you can be sure that two things will never change – the excellence of our food and the standard of our service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpiceSection;