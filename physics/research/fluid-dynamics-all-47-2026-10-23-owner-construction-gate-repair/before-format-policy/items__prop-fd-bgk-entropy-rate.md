---
id: prop-fd-bgk-entropy-rate
kind: proposition
title: Exponential reference-relative entropy bound for homogeneous BGK
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 7
deps:
  - def-fd-kinetic-density
  - def-fd-conserving-bgk
  - thm-fd-homogeneous-bgk-limit
  - prop-fd-maxwellian-moments
  - thm-logarithm-derivative-and-integral
  - thm-algebra-of-derivatives
  - thm-exponential-beats-every-polynomial
dependency_roles:
  def-fd-kinetic-density: mathematical-premise
  def-fd-conserving-bgk: mathematical-premise
  thm-fd-homogeneous-bgk-limit: mathematical-premise
  prop-fd-maxwellian-moments: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-exponential-beats-every-polynomial: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Kinetic Theory, Part 2, §2.5.1, pp. 45–46"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
    - title: "François Golse, The Boltzmann Equation and Its Hydrodynamic Limits, §§3.1–3.2"
      url: "https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf"
verification:
  precheck: pending
---

## Statement

Let $f_0$ satisfy the exact homogeneous BGK relaxation hypotheses, let $M=M[f_0]$, and set $f^\epsilon(t)=M+e^{-t/(\epsilon\tau)}(f_0-M)$. Define
$$H(g):=\int_{\mathbb R^3}g(v)\log(g(v)/f_{\rm ref})\,dv,\qquad 0\log0:=0,$$
for a fixed reference density $f_{\rm ref}>0$. Then for every $t\ge0$,
$$0\le H(f^\epsilon(t))-H(M)
\le e^{-t/(\epsilon\tau)}\bigl(H(f_0)-H(M)\bigr).$$
The lower bound is relative entropy with respect to the moment-matched Maxwellian. This is a deduction for the adopted BGK model and its explicit solution, not an empirical entropy measurement or a claim about the binary collision operator.

## Statement references

[Tong, §2.5.1, full lecture notes](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf)

[Golse, §§3.1–3.2, full chapter](https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf)

## Facts & Assumptions

**Given:** The exact solution $f^\epsilon=M+a(t)(f_0-M)$ with $a(t)=e^{-t/(\epsilon\tau)}$, and equality of its mass, momentum, and energy moments with those of $M$.

[F1] [[thm-fd-homogeneous-bgk-limit]]: The explicit solution is a convex combination of $f_0$ and $M$ and preserves their defining moments.

[F2] [[def-fd-kinetic-density]] and [[prop-fd-maxwellian-moments]]: $\log(M/f_{\rm ref})$ is a constant plus a linear term and a quadratic term in velocity, and all its products with $f_0$ or $M$ are integrable.

[F3] [[thm-logarithm-derivative-and-integral]] and [[thm-algebra-of-derivatives]]: The logarithm derivative and product rule give $\Phi\prime(z)=\log z$; its sign shows the minimum at $1$, hence $\Phi(z)\ge0$.

[F4] [[thm-logarithm-derivative-and-integral]]: On $(0,\infty)$, $\Phi''(z)=1/z>0$, so $\Phi$ is convex.

[F5] [[thm-exponential-beats-every-polynomial]]: Setting $z=e^{-y}$ gives $z\log z=-ye^{-y}\to0$ as $y\to\infty$; hence $\Phi(0)=1$ gives the continuous convex extension on $[0,\infty)$.

[A1] The nonnegative initial data has finite absolute third moment and finite absolute reference-relative entropy as in the homogeneous BGK theorem.

## Proof

1.1 Put $z_0=f_0/M$ and $\Phi(z)=z\log z-z+1$, with $\Phi(0)=1$. Since $M$ is a positive Gaussian, $\log(M/f_{\rm ref})$ is a quadratic polynomial plus a constant. The assumed finite absolute entropy and second moments make $\int f_0\log(f_0/M)$ finite; the negative part is bounded by $M/e$. Equal mass, momentum, and energy moments then give
$$H(f_0)-H(M)=\int M\Phi(z_0)\,dv<\infty.$$
At zeros of $f_0$, the formula uses $0\log0=0$; continuity of $z\log z$ at zero follows from [F5]. [A1, F1, F2, F5, algebra]

2.1 Let $a=e^{-t/(\epsilon\tau)}$. By [F1], $f^\epsilon/M=az_0+(1-a)$. Convexity [F4] and $\Phi(1)=0$ imply pointwise
$$0\le\Phi(f^\epsilon/M)\le a\Phi(z_0).$$
Integrating against $M$ and using step 1.1 shows the relative-entropy integral is finite and
$$\int M\Phi(f^\epsilon/M)\,dv\le a\bigl(H(f_0)-H(M)\bigr).$$
[F1, F3, F4, step 1.1, algebra]

3.1 The same moment cancellation as in step 1.1 gives
$$H(f^\epsilon)-H(M)=\int\bigl[f^\epsilon\log(f^\epsilon/M)-f^\epsilon+M\bigr]\,dv=\int M\Phi(f^\epsilon/M)\,dv.$$
The identity also proves $H(f^\epsilon)$ is finite: the relative-entropy integrand is integrable by step 2.1, $\log(M/f_{\rm ref})$ grows at most quadratically, and $f^\epsilon$ has finite second moment. Nonnegativity follows from [F3]. Combining this equality with step 2.1 yields both asserted bounds. [A1, F1, F2, F3, step 1.1, step 2.1, algebra] ∎
