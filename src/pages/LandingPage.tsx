import {
  Download,
  Globe,
  ShieldCheck,
  ArrowRight,
  Bot,
  Zap,
  CheckCircle,
  Play,
  Star,
  ChevronRight,
  Code2,
  Layers,
  Clock,
  Award,
  ArrowUpRight,
} from "lucide-react";
import { useState, useEffect } from "react";

export const LandingPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Globe,
      title: "Deterministic Physics Engine",
      description:
        "Frame-perfect reproducibility across all platforms. Run identical simulations on any machine—essential for regression testing and validation.",
      highlight: "Bit-perfect results guaranteed",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise-Grade Security",
      description:
        "Your intellectual property stays on your network. Operate entirely offline with optional cloud syncing for marketplace assets only.",
      highlight: "SOC 2 Type II Certified",
    },
    {
      icon: Zap,
      title: "Blazing Performance",
      description:
        "Optimized for multi-core and GPU acceleration. Run headless simulations in parallel at 100x real-time speed.",
      highlight: "Up to 1000x faster training",
    },
    {
      icon: Code2,
      title: "Developer-First API",
      description:
        "Native Python, C++, and Rust bindings. Seamless integration with ROS2, TensorFlow, and PyTorch ecosystems.",
      highlight: "Full API documentation",
    },
    {
      icon: Layers,
      title: "Modular Architecture",
      description:
        "Plug-and-play sensors, actuators, and environments. Customize every aspect of your simulation without touching core code.",
      highlight: "200+ pre-built modules",
    },
    {
      icon: Bot,
      title: "AI-Ready Infrastructure",
      description:
        "Built-in support for reinforcement learning, imitation learning, and model predictive control workflows.",
      highlight: "Native ML framework support",
    },
  ];

  const integrations = [
    { name: "ROS2", logo: "🤖" },
    { name: "TensorFlow", logo: "🧠" },
    { name: "PyTorch", logo: "🔥" },
    { name: "NVIDIA Isaac", logo: "🎮" },
    { name: "Kubernetes", logo: "☸️" },
    { name: "Docker", logo: "🐳" },
  ];

  const testimonials = [
    {
      quote:
        "TrainBot reduced our simulation-to-deployment time by 80%. It's now the backbone of our entire robotics pipeline.",
      author: "Dr. Sarah Chen",
      role: "Head of Robotics, Boston Dynamics",
      avatar: "SC",
    },
    {
      quote:
        "The deterministic physics engine is a game-changer. We finally have reproducible results across our entire distributed team.",
      author: "Marcus Rodriguez",
      role: "Principal Engineer, Waymo",
      avatar: "MR",
    },
    {
      quote:
        "We evaluated 5 simulation platforms. TrainBot's performance and API design made it the clear winner.",
      author: "Dr. Yuki Tanaka",
      role: "CTO, Agility Robotics",
      avatar: "YT",
    },
  ];

  // Removed unused pricingTiers constant
  // const pricingTiers = [
  //   {
  //     name: "Starter",
  //     price: "Free",
  //     description: "For individual researchers and students",
  //     features: [
  //       "5 simulation environments",
  //       "Community support",
  //       "Basic analytics",
  //       "1 team member",
  //     ],
  //     cta: "Get Started",
  //     highlighted: false,
  //   },
  //   {
  //     name: "Professional",
  //     price: "$299",
  //     period: "/month",
  //     description: "For professional teams and startups",
  //     features: [
  //       "Unlimited environments",
  //       "Priority support",
  //       "Advanced analytics",
  //       "Up to 10 team members",
  //       "CI/CD integration",
  //       "Custom sensors",
  //     ],
  //     cta: "Start Free Trial",
  //     highlighted: true,
  //   },
  //   {
  //     name: "Enterprise",
  //     price: "Custom",
  //     description: "For large organizations",
  //     features: [
  //       "Everything in Pro",
  //       "Dedicated support",
  //       "Custom integrations",
  //       "Unlimited team members",
  //       "SLA guarantee",
  //       "On-premise deployment",
  //     ],
  //     cta: "Contact Sales",
  //     highlighted: false,
  //   },
  // ];

  return (
    <div style={{ overflow: "hidden" }}>
      {/* Hero Section */}
      <section
        style={{
          background:
            "linear-gradient(135deg, var(--color-primary) 0%, #1a365d 50%, #0d1b2a 100%)",
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Animated Background Elements */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(99, 179, 237, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(129, 140, 248, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 40% 80%, rgba(52, 211, 153, 0.1) 0%, transparent 40%)
          `,
            pointerEvents: "none",
          }}
        />

        {/* Grid Pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            pointerEvents: "none",
          }}
        />

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
            paddingTop: "6rem",
            paddingBottom: "4rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease-out",
            }}
          >
            {/* Left Content */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "rgba(52, 211, 153, 0.15)",
                  color: "#6ee7b7",
                  border: "1px solid rgba(52, 211, 153, 0.3)",
                  borderRadius: "50px",
                  padding: "0.5rem 1rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  marginBottom: "2rem",
                }}
              >
                <Star size={14} fill="#6ee7b7" />
                v2.4 Enterprise Release — Now Available
              </div>

              <h1
                style={{
                  color: "white",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  marginBottom: "1.5rem",
                }}
              >
                The Future of
                <span
                  style={{
                    color: "white", // Changed from gradient to white
                    display: "block",
                  }}
                >
                  Robotics Simulation
                </span>
              </h1>

              <p
                style={{
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "1.25rem",
                  lineHeight: 1.7,
                  marginBottom: "2.5rem",
                  maxWidth: "540px",
                }}
              >
                Develop, train, and validate autonomous systems in a
                deterministic, physics-accurate environment. From prototype to
                production in days, not months.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: "3rem",
                  flexWrap: "wrap",
                }}
              >
                <button
                  className="btn"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                    color: "white",
                    padding: "1rem 2rem",
                    border: "none",
                    fontSize: "1rem",
                    fontWeight: 600,
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    boxShadow: "0 4px 14px rgba(59, 130, 246, 0.4)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <Download size={20} />
                  Download Free
                </button>
                <button
                  className="btn"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "white",
                    padding: "1rem 2rem",
                    fontSize: "1rem",
                    fontWeight: 600,
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <Play size={20} />
                  Watch Demo
                </button>
              </div>

              {/* Trust Badges - Removed star ratings and "50,000+ engineers trust us" */}
              {/*
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                    ))}
                  </div>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "0.875rem",
                    }}
                  >
                    4.9/5 from 2,000+ reviews
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.875rem",
                  }}
                >
                  <Users size={16} />
                  <span>50,000+ engineers trust us</span>
                </div>
              </div>
              */}
            </div>

            {/* Right Content - Hero Image */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: "-20%",
                  right: "-10%",
                  width: "300px",
                  height: "300px",
                  background:
                    "radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent 70%)",
                  filter: "blur(60px)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                  backdropFilter: "blur(20px)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "1rem",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  transform: "perspective(1000px) rotateY(-5deg) rotateX(5deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                {/* Window Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.75rem",
                    paddingBottom: "0.75rem",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#ff5f56",
                    }}
                  />
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#ffbd2e",
                    }}
                  />
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#27ca3f",
                    }}
                  />
                  <span
                    style={{
                      marginLeft: "auto",
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.75rem",
                    }}
                  >
                    TrainBot Simulation v2.4
                  </span>
                </div>
                <img
                  src="https://i.ibb.co/bgWCjdGw/image-3-1.png"
                  alt="TrainBot Simulation"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    display: "block",
                  }}
                />
              </div>

              {/* Floating Stats Card */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-2rem",
                  left: "-2rem",
                  background: "white",
                  borderRadius: "12px",
                  padding: "1.25rem",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  minWidth: "200px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "linear-gradient(135deg, #10b981, #059669)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <Zap size={20} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        color: "#111",
                      }}
                    >
                      100x
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#666" }}>
                      Faster Training
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    color: "#10b981",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                >
                  <ArrowUpRight size={16} />
                  <span>234% faster training using public compute power </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            color: "rgba(255,255,255,0.5)",
            animation: "bounce 2s infinite",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Scroll to explore
          </span>
          <ChevronRight size={20} style={{ transform: "rotate(90deg)" }} />
        </div>
      </section>

      {/* Logos Section */}
      <section
        style={{
          background: "white",
          padding: "4rem 0",
          borderBottom: "1px solid var(--border-color)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle Background Pattern for Appeal */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(99, 179, 237, 0.03) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(52, 211, 153, 0.02) 0%, transparent 50%)`,
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              textAlign: "center",
              color: "var(--color-text-muted)",
              fontSize: "0.875rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "2rem",
            }}
          >
            Trusted by industry leaders worldwide
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "4rem",
              flexWrap: "wrap",
              opacity: 0.6,
            }}
          >
            {[
              "NVIDIA",
              "Boston Dynamics",
              "Waymo",
              "Tesla",
              "Amazon Robotics",
              "ABB",
            ].map((company, i) => (
              <div
                key={i}
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  letterSpacing: "-0.02em",
                }}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section
        style={{
          background: "linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)",
          padding: "8rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Creative Background Elements */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              radial-gradient(circle at 10% 90%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 90% 10%, rgba(34, 197, 94, 0.04) 0%, transparent 50%),
              linear-gradient(90deg, rgba(99, 179, 237, 0.02) 0%, transparent 50%, rgba(99, 179, 237, 0.02) 100%)
            `,
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <span
              style={{
                color: "var(--color-primary)",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: "0.875rem",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Capabilities
            </span>
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem",
                color: "var(--color-text-main)",
              }}
            >
              Everything you need to build
              <br />
              <span style={{ color: "var(--color-primary)" }}>
                world-class robotics
              </span>
            </h2>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "1.25rem",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              A complete platform for simulation, training, and deployment. No
              compromises, no workarounds.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
            }}
          >
            {features.map((feature, i) => (
              <div
                key={i}
                style={{
                  padding: "2.5rem",
                  background:
                    activeFeature === i
                      ? "linear-gradient(135deg, var(--color-primary), #3b82f6)"
                      : "rgba(255,255,255,0.8)",
                  borderRadius: "20px",
                  border:
                    activeFeature === i
                      ? "none"
                      : "1px solid rgba(59, 130, 246, 0.1)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  transform: activeFeature === i ? "scale(1.02)" : "scale(1)",
                  backdropFilter: "blur(10px)",
                }}
                onMouseEnter={() => setActiveFeature(i)}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    background:
                      activeFeature === i ? "rgba(255,255,255,0.2)" : "white",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                    color:
                      activeFeature === i ? "white" : "var(--color-primary)",
                    boxShadow:
                      activeFeature === i
                        ? "none"
                        : "0 4px 12px rgba(59, 130, 246, 0.1)",
                  }}
                >
                  <feature.icon size={28} strokeWidth={1.5} />
                </div>
                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    marginBottom: "1rem",
                    color:
                      activeFeature === i ? "white" : "var(--color-text-main)",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    color:
                      activeFeature === i
                        ? "rgba(255,255,255,0.85)"
                        : "var(--color-text-muted)",
                    lineHeight: 1.7,
                    fontSize: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {feature.description}
                </p>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.5rem 1rem",
                    background:
                      activeFeature === i ? "rgba(255,255,255,0.15)" : "white",
                    borderRadius: "50px",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color:
                      activeFeature === i ? "white" : "var(--color-primary)",
                  }}
                >
                  <CheckCircle size={16} />
                  {feature.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section
        style={{
          background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
          padding: "8rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Enhanced Background Pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0),
                              radial-gradient(circle at 60% 40%, rgba(99, 179, 237, 0.03) 0%, transparent 70%)`,
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "6rem",
              alignItems: "center",
            }}
          >
            <div>
              <span
                style={{
                  color: "#60a5fa",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontSize: "0.875rem",
                }}
              >
                Integrations
              </span>
              <h2
                style={{
                  fontSize: "2.75rem",
                  fontWeight: 800,
                  marginTop: "1rem",
                  marginBottom: "1.5rem",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.2,
                  color: "white",
                }}
              >
                Seamless integration with your existing stack
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "1.15rem",
                  marginBottom: "2.5rem",
                  lineHeight: 1.7,
                }}
              >
                TrainBot fits into your existing CI/CD pipeline. Export models
                directly to ROS2, TensorFlow, or PyTorch without friction. We
                speak your language.
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {[
                  "Direct ROS2 Bridge support with zero configuration",
                  "Python, C++, and Rust API bindings",
                  "Headless mode optimized for server clusters",
                  "Real-time sensor data streaming and visualization",
                  "One-click export to production formats",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      color: "rgba(255,255,255,0.9)",
                      fontSize: "1.05rem",
                    }}
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        background: "linear-gradient(135deg, #10b981, #059669)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <CheckCircle size={14} color="white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Integration Logos */}
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginTop: "3rem",
                  flexWrap: "wrap",
                }}
              >
                {integrations.map((integration, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "12px",
                      padding: "0.75rem 1.25rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "white",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                    }}
                  >
                    <span>{integration.logo}</span>
                    {integration.name}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "400px",
                  height: "400px",
                  background:
                    "radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent 70%)",
                  filter: "blur(60px)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  overflow: "hidden",
                }}
              >
                <img
                  src="https://i.ibb.co/KzVC1k4G/image.png"
                  alt="TrainBot Workflow"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        style={{
          background: "linear-gradient(135deg, #fef7ff 0%, #f3e8ff 100%)",
          padding: "8rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Creative Background Elements */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.04) 0%, transparent 50%),
              linear-gradient(45deg, rgba(236, 72, 153, 0.02) 25%, transparent 25%, transparent 75%, rgba(236, 72, 153, 0.02) 75%)
            `,
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <span
              style={{
                color: "var(--color-primary)",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: "0.875rem",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Testimonials
            </span>
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "var(--color-text-main)",
              }}
            >
              Loved by engineers worldwide
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
            }}
          >
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.9)",
                  borderRadius: "20px",
                  padding: "2.5rem",
                  border: "1px solid rgba(59, 130, 246, 0.1)",
                  position: "relative",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                }}
              >
                {/* Quote Mark */}
                <div
                  style={{
                    position: "absolute",
                    top: "1.5rem",
                    right: "1.5rem",
                    fontSize: "4rem",
                    fontFamily: "Georgia, serif",
                    color: "var(--color-primary)",
                    opacity: 0.2,
                    lineHeight: 1,
                  }}
                >
                  "
                </div>

                <div style={{ display: "flex", marginBottom: "1.5rem" }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>

                <p
                  style={{
                    color: "var(--color-text-main)",
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                    marginBottom: "2rem",
                    fontStyle: "italic",
                  }}
                >
                  "{testimonial.quote}"
                </p>

                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background:
                        "linear-gradient(135deg, var(--color-primary), #3b82f6)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: 700,
                      fontSize: "1rem",
                    }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 600,
                        color: "var(--color-text-main)",
                      }}
                    >
                      {testimonial.author}
                    </div>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{
          background:
            "linear-gradient(135deg, var(--color-primary) 0%, #1e40af 100%)",
          padding: "8rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Enhanced Background Elements */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(52, 211, 153, 0.05) 0%, transparent 70%)
          `,
            pointerEvents: "none",
          }}
        />

        <div
          className="container"
          style={{ position: "relative", zIndex: 1, textAlign: "center" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "50px",
              padding: "0.5rem 1rem",
              marginBottom: "2rem",
              color: "rgba(255,255,255,0.9)",
              fontSize: "0.875rem",
            }}
          >
            <Award size={16} />
            Join 50,000+ engineers building the future
          </div>

          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 800,
              marginBottom: "1.5rem",
              lineHeight: 1.1,
              color: "white",
              letterSpacing: "-0.03em",
            }}
          >
            Ready to revolutionize your
            <br />
            robotics workflow?
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              color: "rgba(255,255,255,0.8)",
              marginBottom: "3rem",
              maxWidth: "600px",
              margin: "0 auto 3rem",
              lineHeight: 1.7,
            }}
          >
            Start with our free tier today. No credit card required. Upgrade
            when you're ready.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                background: "white",
                color: "var(--color-primary)",
                padding: "1.15rem 2.5rem",
                border: "none",
                borderRadius: "12px",
                fontSize: "1.1rem",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              Get Started Free
              <ArrowRight size={20} />
            </button>
            <button
              style={{
                background: "transparent",
                border: "2px solid rgba(255,255,255,0.3)",
                color: "white",
                padding: "1.15rem 2.5rem",
                borderRadius: "12px",
                fontSize: "1.1rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              Schedule Demo
            </button>
          </div>

          {/* Trust Elements */}
          <div
            style={{
              marginTop: "4rem",
              display: "flex",
              justifyContent: "center",
              gap: "3rem",
              flexWrap: "wrap",
            }}
          >
            {[
              { icon: ShieldCheck, text: "SOC 2 Certified" },
              { icon: Clock, text: "24/7 Support" },
              { icon: Globe, text: "Global Infrastructure" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.9rem",
                }}
              >
                <item.icon size={18} />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add keyframes for animations */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }

        @media (max-width: 1024px) {
          .grid-2, .grid-3 {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          section > .container > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
