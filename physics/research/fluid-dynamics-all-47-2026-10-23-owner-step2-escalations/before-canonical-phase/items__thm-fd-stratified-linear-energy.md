---
id: thm-fd-stratified-linear-energy
kind: theorem
title: Positive linear stratified energy and diffusion
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-fd-rotating-stratified-shallow-equations
  - def-countable-choice
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals
  - thm-riemann-fubini-on-product-rectangles
  - thm-newton-leibniz-with-interior-derivative
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-multidimensional-integral-properties
dependency_roles:
  def-fd-rotating-stratified-shallow-equations: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Geoffrey K. Vallis, Fluid Dynamics of the Atmosphere and Ocean, University of Exeter lecture notes, Autumn 2018, §1.6.3, equations (1.72)–(1.78)"
      url: "https://empslocal.ex.ac.uk/people/staff/gv219/ecmm719/lecnotes18w.pdf"
verification:
  precheck: pending
---

## Statement

Let $I\subseteq\mathbb R$ be a nonempty open interval, assume the Axiom of Countable Choice $\mathrm{AC}_\omega$, and use the periodic domain $\mathbb T^3=\mathbb R^3/(2\pi\mathbb Z)^3$ with Lebesgue measure $\lambda_3$ on $Q_3=[0,2\pi]^3$, where $dx=d\lambda_3(x)$ and the time-space integral is iterated with the spatial integral first. Let $f\in\mathbb R$, $N>0$, and $\nu,\kappa\ge0$ be constants. Suppose $u,b$ are continuously differentiable in time and space with continuous second spatial derivatives, and $\pi$ has continuous first spatial derivatives; all fields are $2\pi$-periodic and satisfy

$$u_t+f e_3\times u+\nabla\pi=b e_3+\nu\Delta u,\qquad \nabla\cdot u=0,\qquad b_t+N^2u_3=\kappa\Delta b.$$

Define the positive energy per reference density

$$E(t):=\frac12\int_{Q_3}\left(|u(t,x)|^2+\frac{b(t,x)^2}{N^2}\right)\,dx.$$

Then for every $t_0<t_1$ in $I$,

$$E(t_1)-E(t_0)=-\int_{t_0}^{t_1}\int_{Q_3}\left(\nu|\nabla u|^2+\frac{\kappa}{N^2}|\nabla b|^2\right)\,dx\,dt.$$

Thus the inviscid model conserves $E$, and the stated nonnegative diffusion coefficients make it nonincreasing. The condition $N>0$ is essential for this positive energy. This is an exact identity conditional on the displayed smooth linear Boussinesq equations; it is not a nonlinear or compressible stability theorem. A discrete analogue requires a skew Coriolis operator and compatible pressure/divergence pairing in the actual discretization; no claim is made for arbitrary schemes.

## Statement references

Equation family and pointwise regularity: [[def-fd-rotating-stratified-shallow-equations]].

Continuous functions on closed rectangles are Riemann integrable: [[thm-continuous-on-a-rectangle-is-riemann-integrable]].

Under $\mathrm{AC}_\omega$, bounded Borel Riemann integrands on finite-dimensional boxes have the same Lebesgue and Riemann integrals: [[lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]].

Riemann integration over products of rectangles and equality with iterated integrals: [[thm-riemann-fubini-on-product-rectangles]].

Newton–Leibniz for a continuous endpoint function with an integrable interior derivative: [[thm-newton-leibniz-with-interior-derivative]].

Under $\mathrm{AC}_\omega$, bounded Riemann integrable functions on closed intervals are Lebesgue integrable with the same integral: [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]].

Linearity of the multidimensional Riemann integral: [[thm-multidimensional-integral-properties]].

Geoffrey K. Vallis, *Fluid Dynamics of the Atmosphere and Ocean*, §1.6.2–1.6.3, pp. 15–17: [full lecture notes, PDF](https://empslocal.ex.ac.uk/people/staff/gv219/ecmm719/lecnotes18w.pdf).

## Facts & Assumptions

**Given:** $I\subseteq\mathbb R$ is nonempty and open; the Axiom of Countable Choice $\mathrm{AC}_\omega$; $u,b,\pi$ are classical and $2\pi$-periodic in each spatial coordinate; $f\in\mathbb R$, $N>0$, and $\nu,\kappa\ge0$; the displayed equations hold pointwise.

[F1] [[def-fd-rotating-stratified-shallow-equations]]: the stratified branch on $\mathbb T^3$ is $u_t+f e_3\times u+\nabla\pi=b e_3+\nu\Delta u$, $\nabla\cdot u=0$, and $b_t+N^2u_3=\kappa\Delta b$, with constant $f\in\mathbb R$, $N>0$, and $\nu,\kappa\ge0$.

[F2] [[def-fd-rotating-stratified-shallow-equations]]: for a scalar field $q$, $\nabla q=(\partial_{x_1}q,\partial_{x_2}q,\partial_{x_3}q)$; for a vector field $w$, $\nabla\cdot w=\sum_j\partial_{x_j}w_j$, $\Delta w$ is componentwise, $|w|^2=\sum_jw_j^2$, and $|\nabla w|^2=\sum_{i,j}(\partial_{x_j}w_i)^2$; $e_3\times w=(-w_2,w_1,0)$.

[A1] The fields satisfy these equations with the regularity in the statement, so every product and derivative below is continuous on each compact time interval times $Q_3$.

[A2] Countable Choice $\mathrm{AC}_\omega$ means that every $\mathbb N$-indexed family of nonempty sets has a choice function; it is used for the cited Lebesgue-measure and Riemann-to-Lebesgue comparison results ([[def-countable-choice]]).

[L1] Every continuous real function on a closed nondegenerate rectangle in $\mathbb R^m$, $m\ge1$, is Riemann integrable ([[thm-continuous-on-a-rectangle-is-riemann-integrable]]).

[L2] Assuming $\mathrm{AC}_\omega$, every bounded Borel Riemann-integrable real function on a closed nondegenerate box is Lebesgue integrable and its Lebesgue and Riemann integrals agree ([[lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]]).

[L3] For a Riemann-integrable function on a product of nondegenerate rectangles, the section-integral functions are Riemann integrable and the product Riemann integral equals the iterated Riemann integrals ([[thm-riemann-fubini-on-product-rectangles]]).

[L4] If $G$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $G'$ has a Riemann-integrable extension $f$ to $[a,b]$, then $\int_a^b f=G(b)-G(a)$ ([[thm-newton-leibniz-with-interior-derivative]]).

[L5] Assuming $\mathrm{AC}_\omega$, a bounded Riemann-integrable real function on a closed interval is Lebesgue integrable and has the same Lebesgue and Riemann integral ([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).

[L6] The multidimensional Riemann integral is linear on integrable functions over a nondegenerate rectangle ([[thm-multidimensional-integral-properties]]).

## Proof

1.1 Dot the momentum equation with $u$. Since $u\cdot(e_3\times u)=0$ pointwise and $u\cdot\nabla\pi=\nabla\cdot(\pi u)$ by the component definitions in [F2] and $\nabla\cdot u=0$, this gives $\partial_t(|u|^2/2)+\nabla\cdot(\pi u-\nu\sum_{i=1}^3u_i\nabla u_i)=bu_3-\nu|\nabla u|^2$. Here $u\cdot\Delta u=\nabla\cdot(\sum_i u_i\nabla u_i)-|\nabla u|^2$ follows by the product rule, component by component. [given, F1, F2, A1, algebra]

2.1 Multiply the buoyancy equation by $b/N^2$ and use $b\Delta b=\nabla\cdot(b\nabla b)-|\nabla b|^2$ to get $\partial_t(b^2/(2N^2))+\nabla\cdot(-(\kappa/N^2)b\nabla b)=-bu_3-(\kappa/N^2)|\nabla b|^2$. Adding this to step 1.1 cancels the two $bu_3$ terms and yields a local energy balance with flux $\pi u-\nu\sum_i u_i\nabla u_i-(\kappa/N^2)b\nabla b$ and dissipation $\nu|\nabla u|^2+(\kappa/N^2)|\nabla b|^2$. [given, F1, F2, A1, step 1.1, algebra]

3.1 Fix $t_0<t_1$ and set $K=[t_0,t_1]\times Q_3$. For each rectangle $A$, write $R_A(F)$ for the Riemann integral of a Riemann-integrable $F$ over $A$. Every scalar integrand in the local balance is continuous on $K$ and on its closed coordinate subrectangles; hence it is bounded and Riemann integrable by [L1], and it is Borel on each rectangle because the inverse image of an open set is relatively open. Under [A2], [L2] identifies its Riemann integral with its Lebesgue integral on $K$ and on each spatial slice. For any such continuous $F(t,x)$, [L3] gives a Riemann-integrable section integral $g_F(t)=R_{Q_3}(F(t,\cdot))$ and $R_K(F)=R_{[t_0,t_1]}(g_F)$; [L2] identifies each spatial section integral with its Lebesgue integral, and [L5] identifies the outer interval integral of $g_F$ with its Lebesgue integral. Thus the nested Lebesgue integral in the statement exists and equals the product Riemann integral on $K$ for the continuous dissipation integrand. [A2, L1, L2, L3, L5]

4.1 Write $e=\tfrac12(|u|^2+b^2/N^2)$, $\mathcal F=\pi u-\nu\sum_{i=1}^3u_i\nabla u_i-(\kappa/N^2)b\nabla b$, and $D=\nu|\nabla u|^2+(\kappa/N^2)|\nabla b|^2$, so step 2.1 gives $\partial_t e+\nabla\cdot\mathcal F=-D$. For each fixed $x$ apply [L4] in time to $e$; [L3] then gives $R_K(\partial_t e)=R_{Q_3}(e(t_1,\cdot)-e(t_0,\cdot))$. For each component $\mathcal F_j$ and each fixed value of the other variables, [L4] in $x_j$ gives the integral of $\partial_{x_j}\mathcal F_j$ as $\mathcal F_j|_{x_j=2\pi}-\mathcal F_j|_{x_j=0}=0$ by periodicity; repeated use of [L3] gives $R_K(\nabla\cdot\mathcal F)=0$. Integrating the local balance with [L6] therefore yields $R_{Q_3}(e(t_1,\cdot)-e(t_0,\cdot))=-R_K(D)$. By [L6] and [L2] at the endpoints, the left side is $E(t_1)-E(t_0)$; by step 3.1, the right side is the negative of the displayed nested Lebesgue dissipation integral. Since $N>0$, $E(t)\ge0$; since $\nu,\kappa\ge0$, the dissipation is nonnegative, and when $\nu=\kappa=0$ it vanishes. [given, A1, A2, F1, F2, L2, L3, L4, L6, step 3.1, algebra] ∎
