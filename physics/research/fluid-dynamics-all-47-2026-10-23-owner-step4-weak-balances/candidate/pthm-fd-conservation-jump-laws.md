---
id: pthm-fd-conservation-jump-laws
kind: physics-theorem
title: "Fluid conservation and entropy jump conditions"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - def-fd-quantity-and-frame-conventions
  - lem-fd-weak-jump-consistency
  - post-fd-weak-balances
  - def-fd-conservative-weak-form
  - def-countable-choice
dependency_roles:
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  lem-fd-weak-jump-consistency: mathematical-premise
  post-fd-weak-balances: physical-assumption
  def-fd-conservative-weak-form: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "Adopted weak balances on piecewise C1 states give Rankine–Hugoniot conservation and physical entropy jump conditions; no smooth-balance theorem through shocks or existence result."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joseph M. Powers, Lecture Notes on Intermediate Fluid Mechanics"
      url: "https://academicweb.nd.edu/~powers/ame.60635/notes.pdf"
      locator: "§4.7.1, printed pp. 156–157, and §9.4.1, printed pp. 379–382."
    - title: "Chiang C. Mei, MIT OpenCourseWare Lecture Notes on Fluid Dynamics"
      url: "https://www.ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/9c89bd5f8f9c4a4748a64e2c333acc1_15momem.pdf"
      locator: "§1.5, complete 2-page material momentum derivation."
    - title: "Chiang C. Mei, MIT OpenCourseWare Lecture Notes on Fluid Dynamics"
      url: "https://www.ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/20946c507055a595c44422b3616a83da_41energy.pdf"
      locator: "§4.1, complete 3-page energy derivation."
---

## Statement

Assume Countable Choice: every sequence of nonempty sets admits a choice function. Use the restricted complete Euclidean Lebesgue spaces, almost-everywhere identification and signed integrals of the conservative weak-form definition. Let $\Omega\subseteq\mathbb R^3$ be a nonempty open spatial region and $I=(0,T_f)$ a time interval in seconds, with $T_f>0$. Let $\Sigma$ be a $C^1$ moving interface in $\Omega\times I$ that locally is the graph $x_3=h(t,x_1,x_2)$ and separates minus and plus sides; here $C^1$ means that the graph function and its first coordinate partial derivatives are continuous. Let $n$ be the dimensionless Euclidean unit normal pointing from minus to plus, and let $V_n$ be the signed normal speed of $\Sigma$ in metres per second. For a field with one-sided traces, define $[g]:=g_+-g_-$. Let $\rho\ge0$ be mass density in kilograms per cubic metre, $u$ velocity in metres per second, $\sigma$ Cauchy stress in pascals, $e$ specific internal energy in joules per kilogram, $q$ outward-positive heat flux in watts per square metre, $T>0$ absolute temperature in kelvins, $s$ specific entropy in joules per kilogram kelvin, $b$ body acceleration in metres per second squared, and $r$ specific heat supply in watts per kilogram. Set $E:=e+|u|^2/2$ in joules per kilogram. Assume these fields are $C^1$ on each side and, for every relatively compact interface patch, admit $C^1$ one-sided extensions to its closed sides; here $C^1$ means that the fields and all their first time and spatial coordinate partial derivatives are continuous on those extensions. In particular, the resulting one-sided traces are finite and continuous. Assume that all displayed products and sources are locally integrable. The sources are ordinary volume functions and have no measure concentrated on $\Sigma$. Use traction $t=\sigma n$, $(u\otimes u)_{ij}=u_i u_j$, and rowwise matrix divergence $(\operatorname{div}F)_i=\sum_j\partial_{x_j}F_{ij}$.

On each side suppose the classical equations hold:

$$\partial_t\rho+\operatorname{div}(\rho u)=0,$$

$$\partial_t(\rho u)+\operatorname{div}(\rho u\otimes u-\sigma)=\rho b,$$

$$\partial_t(\rho E)+\operatorname{div}(\rho E u-\sigma^{\mathsf T}u+q)=\rho b\cdot u+\rho r,$$

$$\partial_t(\rho s)+\operatorname{div}(\rho s u+q/T)\ge\rho r/T.$$

Adopt the separate weak mass, momentum and total-energy identities and physical entropy inequality. Their interior restrictions use compactly supported $C^1$ tests in $\Omega\times I$, away from $t=0$ and $t=T_f$. The full weak forms may also use tests nonzero at $t=0$ and include initial-data terms; those terms are separate data and are not determined by the interface jumps. The interior weak conservation equations across $\Sigma$ hold if and only if the side equations hold and

$$[\rho u]\cdot n=V_n[\rho],$$

$$[\rho u\otimes u-\sigma]n=V_n[\rho u],$$

$$[\rho E u-\sigma^{\mathsf T}u+q]\cdot n=V_n[\rho E].$$

The interior weak physical entropy inequality holds across the interface if and only if it holds on both sides and

$$[\rho s u+q/T]\cdot n-V_n[\rho s]\ge0.$$

Equivalently, for any conservative density $U$ and flux $F$ above, the interface coefficient is $[F]n-V_n[U]$. Here $[F]n$ is matrix-vector multiplication for the momentum flux; for each scalar law its vector flux is identified with a one-row matrix, so $[F]n=[F]\cdot n$. The coefficient must vanish for conservation and be nonnegative for physical entropy. These conditions apply only to the specified piecewise $C^1$ fields and traces. They neither establish existence or uniqueness of a multidimensional shock solution nor extend smooth material equations through arbitrary nonsmooth fields.
## Statement references

[Powers, *Lecture Notes on Intermediate Fluid Mechanics*, §§4.7.1 and 9.4.1](https://academicweb.nd.edu/~powers/ame.60635/notes.pdf)

[Mei, MIT OpenCourseWare, *Law of Momentum Conservation*, §1.5](https://www.ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/9c89bd5fd8f9c4a4748a64e2c333acc1_15momem.pdf)

[Mei, MIT OpenCourseWare, *Heat and Energy Conservation*, §4.1](https://www.ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/20946c507055a595c44422b3616a83da_41energy.pdf)

## Facts & Assumptions

**Given:** The interface, orientation, speed, one-sided traces, local integrability and no-singular-source assumptions in the Statement; the side balance equations; the adopted weak balances and entropy inequality.

[A1] [[post-fd-weak-balances]]: the weak branch separately adopts the mass, momentum and total-energy identities and physical entropy inequality, with locally integrable fluxes and sources and the stated initial terms.

[A2] Adopt the mathematical Countable Choice measure convention of [[def-fd-conservative-weak-form]]; it underlies the weak tests and is not an extra physical balance law.

[F1] [[def-fd-conservative-weak-form]]: for $U,F,S\in L^1_{\mathrm{loc}}$, $\partial_tU+\operatorname{div}F=S$ means the compactly supported $C^1$ test identity including the initial term; the physical entropy inequality uses nonnegative scalar tests and the opposite weak sign.

[F2] [[lem-fd-weak-jump-consistency]]: for piecewise $C^1$ states with finite traces across a $C^1$ moving interface, integration on the two sides gives interface coefficient $[F]n-V_n[U]$, using the scalar-law row identification stated above; conservation requires zero coefficient and the physical entropy inequality requires a nonnegative coefficient.

[F3] [[def-fd-quantity-and-frame-conventions]]: the velocities, density, energy, heat flux, stress and normals use the adopted classical inertial and SI conventions.

## Proof

1.1 In a local graph chart write $\Sigma(t)$ as $x_3=h(t,x_1,x_2)$, with the plus side given by $x_3>h$. Then $n=(-\partial_{x_1}h,-\partial_{x_2}h,1)/\sqrt{1+|\nabla_{x'}h|^2}$ and $V_n=\partial_t h/\sqrt{1+|\nabla_{x'}h|^2}$. The jump convention is $[g]=g_+-g_-$. [given, F3, algebra]

2.1 In the graph chart of step 1.1, write a piecewise field as its minus-side value plus its jump times the indicator of $x_3>h(t,x_1,x_2)$. Differentiating this indicator gives the singular part $-h_t[U]\,\delta(x_3-h)+[F](-h_{x_1},-h_{x_2},1)\,\delta(x_3-h)$ in $\partial_tU+\operatorname{div}F-S$, componentwise for vector or tensor fluxes; the one-dimensional Dirac distribution $\delta$ is characterized by $\int f(x_3)\delta(x_3-h)\,dx_3=f(h)$. Since $(-h_{x_1},-h_{x_2},1)=n\sqrt{1+|\nabla_{x'}h|^2}$ and $h_t=V_n\sqrt{1+|\nabla_{x'}h|^2}$, and $\delta(x_3-h)\,dx=dS/\sqrt{1+|\nabla_{x'}h|^2}$, its action is exactly the interface measure with coefficient $[F]n-V_n[U]$, with the scalar-law row identification from the Statement. The sources have no surface measure, so the interior weak conservation identity requires this coefficient to vanish; when it vanishes, integration by parts leaves only the satisfied side equations. [given, A1, A2, F1, F2, step 1.1, algebra]

3.1 Apply step 2.1 to $(U_m,F_m,S_m)$, $(U_p,F_p,S_p)$ and $(U_E,F_E,S_E)$ from the Statement. Their zero interface coefficients give the three displayed mass, momentum and energy jump equalities, with no division by $\rho$. [given, A1, F2, step 2.1, algebra]

4.1 For entropy, the weak postulate [A1] tests with every nonnegative interior $\zeta$. By [F2], its interface contribution is $[F_s]\cdot n-V_n[U_s]$. If this coefficient were negative at a point, continuity of the one-sided traces would make it negative on a patch; a nonnegative test supported there would contradict the weak inequality. A nonnegative coefficient, together with the side entropy inequalities, gives the interior weak entropy inequality. This proves the stated sign and both directions. [given, A1, A2, F1, F2, step 1.1, algebra] ∎

