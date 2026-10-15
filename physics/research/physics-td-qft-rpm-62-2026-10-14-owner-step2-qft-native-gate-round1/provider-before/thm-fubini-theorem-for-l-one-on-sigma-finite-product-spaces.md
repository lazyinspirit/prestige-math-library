---
id: thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
kind: theorem
title: "Fubini's theorem for L^1 functions on a sigma-finite product"
status: published
origin: session
landmark: true
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-tonelli-theorem-for-sigma-finite-product-spaces, def-l-one-of-a-measure, def-integrable-real-and-complex-functions-and-their-integrals, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-integral-triangle-inequality]
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Theorem 1.7.21"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "John K. Hunter, Measure Theory, Theorem 5.18"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$ be sigma-finite measure
spaces, and let $f : X \times Y \to \mathbb C$ belong to
$L^1(\mu \times \nu)$. Then:

1. for $\mu$-almost every $x$, the section $f_x$ belongs to $L^1(\nu)$;
2. for $\nu$-almost every $y$, the section $f^y$ belongs to $L^1(\mu)$;
3. after assigning the value $0$ on the exceptional parameter sets, the
   section-integral functions are integrable; and
4. the three integrals agree:
$$\int_{X \times Y} f\,d(\mu \times \nu) = \int_X \left(\int_Y f_x\,d\nu\right)d\mu = \int_Y \left(\int_X f^y\,d\mu\right)d\nu.$$

## Facts & Assumptions

**Given:** Sigma-finite measure spaces $(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$, and a function $f \in L^1(\mu \times \nu)$.

[L1] Tonelli's theorem holds for nonnegative measurable functions on $X \times Y$. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[L2] A complex-valued function belongs to $L^1$ exactly when its absolute value has finite integral. ([[def-l-one-of-a-measure]])

[L3] The Lebesgue integral is linear on $L^1$. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]])

[L4] The triangle inequality gives $$\left|\int g\,d\eta\right| \le \int |g|\,d\eta$$ for every integrable function $g$. ([[thm-integral-triangle-inequality]])

## Proof

**Proof technique:** direct.

1.1 By [L2], the function $|f|$ is nonnegative measurable, and [L1] gives $$\int_X \left(\int_Y |f_x|\,d\nu\right)d\mu = \int_{X \times Y} |f|\,d(\mu \times \nu) < \infty.$$ Therefore $\int_Y |f_x|\,d\nu < \infty$ for $\mu$-almost every $x$, so $f_x \in L^1(\nu)$ for $\mu$-almost every $x$. The same argument with the variables reversed gives $f^y \in L^1(\mu)$ for $\nu$-almost every $y$ and shows that the section integrals of $|f|$ are integrable. [L1, L2]

2.1 For almost every $x$ from step 1.1, [L4] gives $$\left|\int_Y f_x\,d\nu\right| \le \int_Y |f_x|\,d\nu.$$ Define the section integral to be $0$ on the exceptional null set where $f_x\notin L^1(\nu)$. The right-hand side is integrable over $X$ by step 1.1, so this extended section-integral function is integrable. The same convention and conclusion hold for $y \mapsto \int_X f^y\,d\mu$. [step 1.1, L4]

3.1 Write $f=u-v+i(p-q)$, where $u,v,p,q \ge 0$ are the positive and negative parts of the real and imaginary parts of $f$. Each of $u,v,p,q$ is integrable because $|u|,|v|,|p|,|q| \le |f|$. Applying [L1] to these four nonnegative functions and recombining with [L3] yields the stated equality of the three integrals. [step 1.1, step 2.1, L1, L3] ∎
