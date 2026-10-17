---
id: lem-tgr-planck-integrals
kind: lemma
title: Planck integrals from Fourier Parseval
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-countable-choice
  - def-nonnegative-lebesgue-integral
  - thm-monotone-convergence-for-the-integral
  - thm-fourier-basis-and-parseval-on-the-n-torus
dependency_roles:
  def-countable-choice: mathematical-premise
  def-nonnegative-lebesgue-integral: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "University of Mississippi PHY 727 course notes, Lecture 18: The Photon Gas"
      url: "https://www.phy.olemiss.edu/~luca/phys727/Topics/L18_photons.pdf"
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333 Statistical Mechanics I, Lecture 20, photon-gas section"
      url: "https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/368b2180e6efa1417ab336d79b2df6db_MIT8_333F13_Lec20.pdf"
---

## Statement

Assume the Axiom of Countable Choice. The following improper integrals
converge and have the exact values
$$\int_0^\infty\frac{x^3}{e^x-1}\,dx=\frac{\pi^4}{15},\qquad \int_0^\infty x^2[-\log(1-e^{-x})]\,dx=\frac{\pi^4}{45}.$$

## Facts & Assumptions

**Given:** Countable Choice and the coordinate characters on the normalized one-dimensional torus $\mathbb T=\mathbb R/\mathbb Z$.

[A1] All integrals in the Statement and Proof are nonnegative Lebesgue integrals on $(0,\infty)$ with respect to one-dimensional Lebesgue measure, as defined in [F4]. The integrands and partial sums below are continuous, hence Borel measurable.

[F1] [[def-countable-choice]]: every countable sequence of nonempty sets has a choice function; this is the exact set-theoretic assumption in the Fourier supplier.

[F2] [[thm-fourier-basis-and-parseval-on-the-n-torus]]: under Countable Choice, the characters $e_n(y)=e^{2\pi i n y}$ form an orthonormal basis of $L^2(\mathbb T)$ and Parseval gives $\|F\|_2^2=\sum_{n\in\mathbb Z}|\widehat F(n)|^2$.

[F3] [[thm-monotone-convergence-for-the-integral]], Statement: if nonnegative measurable functions increase pointwise to $f$ on a measure space, their integrals increase to $\int f$.

[F4] [[def-nonnegative-lebesgue-integral]], Definition: the integral of a nonnegative measurable function is the supremum of the integrals of its nonnegative simple minorants.

## Proof

1.1 On $[-\tfrac12,\tfrac12]$ define the continuous periodic representative $F(y)=(2\pi y)^2$. Its normalized Fourier coefficients are $c_n=(2\pi)^{-1}\int_{-\pi}^{\pi}x^2e^{-inx}\,dx$ after the change $x=2\pi y$. Direct integration gives $c_0=\pi^2/3$; for $n\ne0$, two integrations by parts give $c_n=2(-1)^n/n^2$ because the first boundary term cancels at $x=\pm\pi$ and $\int_{-\pi}^{\pi}e^{-inx}\,dx=0$. [given, algebra]

2.1 The normalized squared norm is $(2\pi)^{-1}\int_{-\pi}^{\pi}x^4\,dx=\pi^4/5$. Under the stated Countable Choice assumption [F1], Parseval [F2] therefore gives $\pi^4/5=|c_0|^2+\sum_{n\ne0}|c_n|^2=\pi^4/9+8\sum_{n=1}^\infty n^{-4}$, whence $\sum_{n=1}^\infty n^{-4}=\pi^4/90$. [F1, F2, step 1.1, algebra]

3.1 For $m\ge1$ and $p=0,1,2,3$, put $J_p(m)=\int_0^\infty x^pe^{-mx}\,dx$. Direct integration gives $J_0(m)=1/m$; integration by parts on $[0,R]$ and then $R\to\infty$ gives $J_p(m)=pJ_{p-1}(m)/m$, since $R^pe^{-mR}\to0$ (for example, $e^{mR}\ge(mR)^{p+1}/(p+1)!$). Hence $J_3(m)=6/m^4$ and $J_2(m)=2/m^3$. The finite geometric identity and its limit give $(e^x-1)^{-1}=\sum_{m\ge1}e^{-mx}$ for $x>0$. The partial sums $x^3\sum_{m\le N}e^{-mx}$ are nonnegative measurable and increase pointwise; the monotone-convergence theorem [F3] for the integral defined in [F4] gives the first integral as $\sum_{m\ge1}J_3(m)=6\sum_{m\ge1}m^{-4}=\pi^4/15$. [A1, F3, F4, step 2.1, algebra]

4.1 For $0<z<1$, the geometric series is uniformly convergent on $[0,z]$, so integrating its partial sums gives $-\log(1-z)=\sum_{m\ge1}z^m/m$. At $z=e^{-x}$ the nonnegative partial sums $x^2\sum_{m\le N}e^{-mx}/m$ increase pointwise to the second integrand. Applying [F3] to the integral defined in [F4] and using step 3.1 gives its integral as $\sum_{m\ge1}J_2(m)/m=2\sum_{m\ge1}m^{-4}=\pi^4/45$. The integral ratio is therefore $1/3$. [A1, F3, F4, step 2.1, step 3.1, algebra] ∎
