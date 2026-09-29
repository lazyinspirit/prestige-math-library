---
id: ex-harmonic-measure-of-a-disc-arc
kind: example
title: "Harmonic measure of an arc of the unit circle"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - def-borel-sigma-algebra
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-dependent-choice
  - def-unit-disc-upper-half-plane-and-blaschke-factor
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-continuous-implies-integrable
  - thm-harmonic-measure-disc-poisson-density
sources:
  references:
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I, Appendix 1, Sections 10.1-10.9"
      url: https://www.math.stonybrook.edu/~mlyubich/book.pdf
      locator: "Section 10.8, printed pp. 170-172: harmonic measure of an arc of the circle"
    - title: "Boris Khoruzhenko, LTCC Potential Theory lecture notes, Sections 4.1-4.2"
      url: https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf
      locator: "Section 4.2, PDF pp. 37-39: Poisson density of harmonic measure on the circle"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Example

Assume Dependent Choice for the general harmonic-measure interface. Let
$\mathbb D$ be the unit disc, let $\alpha<\beta\le\alpha+2\pi$ be real, and let
$$E=\{e^{it}:\alpha\le t\le\beta\}\subseteq\partial\mathbb D,$$
the closed arc, which is the full circle when $\beta=\alpha+2\pi$. Then for
every $z\in\mathbb D$
$$\omega_{\mathbb D}^z(E)=\frac1{2\pi}\int_\alpha^\beta \frac{1-|z|^2}{|e^{it}-z|^2}\,dt,$$
and at the centre $z=0$ this value is $(\beta-\alpha)/(2\pi)$. The integration
identity itself is choice-free; $\mathrm{DC}$ enters only through the
representing measure of [[thm-harmonic-measure-disc-poisson-density]], and no
harmonicity of the boundary-set function is inferred from continuity of the
arc's indicator.

## Facts & Assumptions

**Given:** Real numbers $\alpha<\beta\le\alpha+2\pi$, the closed arc $E=\{e^{it}:\alpha\le t\le\beta\}$ on the unit circle $\partial\mathbb D$ ([[def-unit-disc-upper-half-plane-and-blaschke-factor]]), a point $z\in\mathbb D$, and Dependent Choice ([[def-dependent-choice]]). The arc is a closed, hence Borel, subset of the circle ([[def-borel-sigma-algebra]]), and $|\cdot|$ and $\overline{\phantom{w}}$ are those of [[def-complex-conjugate-real-imaginary-part-and-modulus]].

[F1] Under Dependent Choice, for every Borel $A\subseteq\partial\mathbb D$ and $z\in\mathbb D$, $$\omega_{\mathbb D}^z(A)=\int_{t\in[0,2\pi):\ e^{it}\in A}\frac{1-|z|^2}{|e^{it}-z|^2}\,\frac{dt}{2\pi},$$ the density being the positive continuous Poisson kernel of the disc ([[thm-harmonic-measure-disc-poisson-density]]).

[F2] The function $t\mapsto(1-|z|^2)/|e^{it}-z|^2$ is continuous on $\mathbb R$ and $2\pi$-periodic, since $e^{i(t+2\pi)}=e^{it}$; a continuous function on a compact interval is Riemann integrable, and a bounded Riemann integrable function on a compact interval is Lebesgue measurable with the same integral ([[thm-continuous-implies-integrable]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).

## Verification

**Proof technique:** direct.

1.1 Let $A_E:=\{t\in[0,2\pi):e^{it}\in E\}$. Choose the integer $m$ for which $\alpha':=\alpha-2\pi m\in[0,2\pi)$, and put $\beta':=\beta-2\pi m$, so $\alpha'<\beta'\le\alpha'+2\pi$. If $\beta'\le2\pi$, then $A_E$ agrees with $[\alpha',\beta']\cap[0,2\pi)$ up to the possible duplicate endpoint at $0$. If $\beta'>2\pi$, it agrees with $[\alpha',2\pi)\cup[0,\beta'-2\pi]$ up to endpoints. In the full-circle case $\beta'-\alpha'=2\pi$, one has $A_E=[0,2\pi)$. In each case, splitting the integral at $2\pi$ if necessary and translating one part by $2\pi$, the periodicity in [F2] gives $\int_{A_E}k_z(t)\,dt=\int_{\alpha}^{\beta}k_z(t)\,dt$. Endpoints have zero angular measure. [F2, given, algebra]

1.2 The kernel $k_z(t):=(1-|z|^2)/|e^{it}-z|^2$ is continuous and positive on $\mathbb R$ by [F2], and $1-|z|^2>0$ for $z\in\mathbb D$, so $k_z$ is a nonnegative measurable function on the interval $[\alpha,\beta]$ of finite length $\beta-\alpha\le2\pi$. [F2, given]

2.1 Combining [F1] with step 1.1 expresses the harmonic measure of the arc as an integral of $k_z$ over $[\alpha,\beta]$: $$\omega_{\mathbb D}^z(E)=\int_{A_E}k_z(t)\,\frac{dt}{2\pi}=\frac1{2\pi}\int_\alpha^\beta k_z(t)\,dt.$$ [F1, step 1.1]

3.1 The right-hand integral is an ordinary integral of a continuous function on a compact interval: by [F2] $k_z$ is Riemann integrable on $[\alpha,\beta]$ and its Riemann and Lebesgue integrals over that interval coincide, so the value in step 2.1 is well defined and equals the displayed Riemann integral. [F2, step 2.1]

4.1 At $z=0$ the kernel is identically one, because $|e^{it}-0|=1$ and $1-|0|^2=1$; the identity of step 2.1 therefore gives $$\omega_{\mathbb D}^0(E)=\frac1{2\pi}\int_\alpha^\beta1\,dt=\frac{\beta-\alpha}{2\pi},$$ a number in $[0,1]$, equal to $1$ exactly when the arc is the full circle $\beta=\alpha+2\pi$ and equal to the normalized angular length otherwise. [step 2.1, step 3.1, given, algebra]

5.1 The calculation used only the explicitly given Poisson density and the elementary integration of a continuous periodic kernel; Dependent Choice was used only through [F1]. In particular no harmonicity of $z\mapsto\omega_{\mathbb D}^z(E)$, and no regularity of an indicator of $E$ as a boundary datum, was used or asserted here. [F1, step 2.1, step 4.1] ∎
