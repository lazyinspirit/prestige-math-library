---
id: thm-fd-expected-weak-reynolds
kind: theorem
title: Expected weak Reynolds decomposition and conditional mean equation
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-fd-random-velocity-sensor-law
  - def-countable-choice
  - thm-riesz-fischer-completeness-of-l-p
  - lem-fd-sensor-pairing-is-well-defined
  - lem-fd-velocity-tensor-is-bochner-integrable
  - def-probability-measure
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-strongly-measurable-banach-valued-function
  - thm-holder-inequality-for-integrals
  - thm-bounded-linear-maps-commute-with-bochner-integration
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-rationals-countable
  - lem-q-and-irrationals-dense-r
dependency_roles:
  def-fd-random-velocity-sensor-law: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-riesz-fischer-completeness-of-l-p: mathematical-premise
  lem-fd-sensor-pairing-is-well-defined: mathematical-premise
  lem-fd-velocity-tensor-is-bochner-integrable: mathematical-premise
  def-probability-measure: mathematical-premise
  def-product-sigma-algebra-and-finite-product-sigma-algebras: mathematical-premise
  def-strongly-measurable-banach-valued-function: mathematical-premise
  thm-holder-inequality-for-integrals: mathematical-premise
  thm-bounded-linear-maps-commute-with-bochner-integration: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-rationals-countable: mathematical-premise
  lem-q-and-irrationals-dense-r: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: Countable Choice is explicitly assumed through Riesz-Fischer completeness for the finite-component L2 and L1 spaces needed for Bochner integration; no full AC or DC is used.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis, Section 11.6
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07%2110_23_44_AM.pdf
      locator: Lemmas 11.30–11.31 and Theorem 11.32, printed pp. 332–335.
    - title: Terence Tao, An Introduction to Measure Theory
      url: https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf
      locator: Section 1.7, Theorems 1.7.15 and 1.7.21 with proofs, PDF pp. 200–206.
    - title: Caroline Terquem, Fluids
      url: https://www.physics.ox.ac.uk/system/files/file_attachments/notes.pdf
      locator: Section 6.3.1, PDF pp. 117–120; Reynolds terminology only.
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice. Let $(D,\mathcal D,\lambda)$, $d$, and $H=L^2(D,\lambda;\mathbb R^d)$ be as in the Definition. Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space and let $U:\Omega\to H$ be strongly measurable with $\mathbb E\|U\|_H^2<\infty$. Assume a representative $\widetilde U:\Omega\times D\to\mathbb R^d$ of its sections is measurable with respect to the product sigma-algebra $\mathcal F\otimes\mathcal D$. The Bochner mean
$$\bar u:=\int_\Omega U(\omega)\,d\mathbb P(\omega)\in H$$
is well-defined. For $\lambda$-almost every $x$, define
$$R(x):=\mathbb E\!\left[(\widetilde U(\omega,x)-\bar u(x))\otimes(\widetilde U(\omega,x)-\bar u(x))\right],$$
where any measurable representative of $\bar u$ may be used. Then $R$ determines an element of $L^1(D,\lambda;\mathbb R^{d\times d})$, and for every measurable tensor field $\Phi:D\to\mathbb R^{d\times d}$ with $\operatorname*{ess\,sup}_{x\in D}|\Phi(x)|_F<\infty$,
$$\mathbb E\!\left[\int_D(\widetilde U\otimes\widetilde U):\Phi\,d\lambda\right] =\int_D(\bar u\otimes\bar u+R):\Phi\,d\lambda.$$
For vectors $a,b\in\mathbb R^d$, $(a\otimes b)_{ij}:=a_i b_j$. Here $A:B:=\sum_{i,j=1}^d A_{ij}B_{ij}$ and $|\cdot|_F$ is the Frobenius norm. If $U$ is assigned SI velocity units $\mathrm{m\,s^{-1}}$, then $\bar u$ has units $\mathrm{m\,s^{-1}}$ and $R$ has units $\mathrm{m^2\,s^{-2}}$; the test field's units are chosen so both pairings have the same units. Here “weak” means tested against an essentially bounded tensor field. $R$ is the positive covariance tensor; no density factor, stress sign convention, incompressibility, Navier–Stokes equation, time-stationarity, or turbulence closure is assumed.

**Conditional time-dependent weak equation.** In addition, let $D\subset\mathbb R^d$, $d\in\{2,3\}$, be bounded and open, let $I=(a,b)$ be a bounded open interval, and let $\nu\ge0$ be fixed. Let $u,p,f$ be real fields jointly measurable for $\mathcal F\otimes\mathcal L(I)\otimes\mathcal L(D)$ on $\Omega\times I\times D$, where $\mathcal L$ denotes the respective restricted Lebesgue sigma-algebras, with vector $u,f$ and scalar $p$, such that
$$\mathbb E\int_{I\times D}(|u|^2+|p|+|f|)\,dt\,dx<\infty.$$
Assume that for almost every $\omega$, every $\varphi\in C_c^\infty(I\times D;\mathbb R^d)$ satisfies
$$\int_{I\times D}\bigl(u\cdot\partial_t\varphi+(u\otimes u):\nabla\varphi+p\,\operatorname{div}\varphi+\nu u\cdot\Delta\varphi+f\cdot\varphi\bigr)\,dt\,dx=0,$$
and every $\chi\in C_c^\infty(I\times D)$ satisfies $\int_{I\times D}u\cdot\nabla\chi=0$. These identities define the assumed distributional incompressible equation; derivatives act on smooth compactly supported tests, $\nabla\varphi_{ij}=\partial_j\varphi_i$, and $\Delta$ is componentwise. Set $m=\mathbb E u$, $\bar p=\mathbb E p$, $\bar f=\mathbb E f$, and $R=\mathbb E[(u-m)\otimes(u-m)]$, all as almost-everywhere space-time classes. Then $m\in L^2(I\times D)^d$, $\bar p,\bar f,R\in L^1(I\times D)$, $R$ is positive semidefinite almost everywhere, $\operatorname{div}m=0$ distributionally, and
$$\int_{I\times D}\bigl(m\cdot\partial_t\varphi+(m\otimes m+R):\nabla\varphi+\bar p\,\operatorname{div}\varphi+\nu m\cdot\Delta\varphi+\bar f\cdot\varphi\bigr)\,dt\,dx=0.$$
This is the conditional expected weak Reynolds equation. If assigned SI units with $u$ a velocity, $p$ is pressure per unit constant density, $f$ is acceleration and $\nu$ has units $\mathrm{m^2\,s^{-1}}$. It closes no equation for $R$, proves no pathwise solution existence, and asserts no boundary trace, initial trace, physical validity, or commutation with an undefined classical derivative. The same conclusion holds locally, with the space-time function spaces interpreted locally, when the displayed moment condition is imposed on every compact space-time set containing the chosen test support.

## Statement references

[[def-fd-random-velocity-sensor-law]]

[[def-countable-choice]]

[[thm-riesz-fischer-completeness-of-l-p]]

[[lem-fd-sensor-pairing-is-well-defined]]

[[lem-fd-velocity-tensor-is-bochner-integrable]]

[[def-probability-measure]]

[[def-product-sigma-algebra-and-finite-product-sigma-algebras]]

[[def-strongly-measurable-banach-valued-function]]

[[thm-holder-inequality-for-integrals]]

[[thm-bounded-linear-maps-commute-with-bochner-integration]]

[[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[[thm-rationals-countable]]

[[lem-q-and-irrationals-dense-r]]

## Facts & Assumptions

**Given:** Countable Choice; a finite measure space $(D,\mathcal D,\lambda)$, finite-dimensional vector fields in $H=L^2(D,\lambda;\mathbb R^d)$, a probability space $(\Omega,\mathcal F,\mathbb P)$, a strongly measurable square-integrable $H$-valued random variable $U$, and its jointly measurable representative $\widetilde U$ from the Statement.

[A1] The Axiom of Countable Choice, $\mathrm{AC}_\omega$, is assumed ([[def-countable-choice]]).

[A2] The stated joint representative agrees sectionwise with $U$ for almost every $\omega$, and $\mathbb E\|U\|_H^2<\infty$.

[F1] The Definition fixes $H$ as the space of almost-everywhere equivalence classes of square-integrable vector fields ([[def-fd-random-velocity-sensor-law]]).

[F2] The sensor pairing $S_\psi$ is a bounded linear functional on $H$ for every $\psi\in H$ ([[lem-fd-sensor-pairing-is-well-defined]]).

[F3] Under $\mathrm{AC}_\omega$, finite-component $L^2$ and $L^1$ spaces are Banach, and the quadratic tensor map is Bochner integrable with its norm expectation controlled exactly by the second moment ([[lem-fd-velocity-tensor-is-bochner-integrable]], [[thm-riesz-fischer-completeness-of-l-p]]).

[F4] Strong measurability is almost-everywhere norm convergence of measurable simple Banach-valued maps ([[def-strongly-measurable-banach-valued-function]]).

[F5] Holder's inequality bounds products of $L^2$ functions by the product of their $L^2$ norms ([[thm-holder-inequality-for-integrals]]).

[F6] Tonelli's theorem exchanges integrals for nonnegative product-measurable functions on sigma-finite spaces ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F7] Fubini's theorem exchanges integrals for absolutely integrable product-measurable functions on sigma-finite spaces ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F8] A bounded linear map commutes with a Bochner integral ([[thm-bounded-linear-maps-commute-with-bochner-integration]]).

[F9] The product sigma-algebra is generated by measurable rectangles ([[def-product-sigma-algebra-and-finite-product-sigma-algebras]]).

[F10] The triples $(\Omega,\mathcal F,\mathbb P)$ and $(D,\mathcal D,\lambda)$ are measure spaces, and total mass one defines a probability space ([[def-probability-measure]]).

[F11] The rationals are countable and dense, so rational open boxes form a countable base in each finite-dimensional Euclidean space. The preimage of a basis box under a finite tuple of measurable real functions is a finite intersection of measurable preimages; therefore that tuple is measurable as a Euclidean-valued map, and composing with a continuous finite-dimensional operation preserves measurability ([[thm-rationals-countable]], [[lem-q-and-irrationals-dense-r]]).

## Proof

**Given:** The hypotheses and conventions stated above.

1.1 By [F3], $U$ is Bochner integrable, so $\bar u=\int_\Omega U\,d\mathbb P$ exists in the quotient space $H$ of [F1]. Subtracting the constant simple map $\bar u$ from the simple approximants in [F4] shows $Z:=U-\bar u$ is strongly measurable. Its second moment satisfies $\mathbb E\|Z\|_H^2\le2\mathbb E\|U\|_H^2+2\|\bar u\|_H^2<\infty$. [A1, A2, F1, F3, F4, given, algebra]

2.1 On the product measure space of [F9], [F11] makes $|\widetilde U|^2$ product-measurable. Tonelli's theorem [F6] gives $\int_D\mathbb E|\widetilde U(\omega,x)|^2\,d\lambda=\mathbb E\|U\|_H^2<\infty$. Since $(\mathbb P\times\lambda)(\Omega\times D)=\lambda(D)<\infty$, Holder [F5] gives $\int_{\Omega\times D}|\widetilde U|\,d(\mathbb P\times\lambda)\le\lambda(D)^{1/2}(\mathbb E\|U\|_H^2)^{1/2}<\infty$. Fubini [F7] therefore makes the section expectation $m(x):=\mathbb E[\widetilde U(\omega,x)]$ measurable and defined for almost every $x$; set $m(x)=0$ on the exceptional null set. Tonelli [F6] and Holder's inequality on the probability space give $|m(x)|^2\le\mathbb E|\widetilde U(\omega,x)|^2$ almost everywhere, hence $m\in H$. For each $\psi\in H$, [F11] makes $\widetilde U(\omega,x)\cdot\psi(x)$ product-measurable, and its absolute integral is finite:
$$\mathbb E\int_D|\widetilde U\cdot\psi|\,d\lambda\le\mathbb E\|U\|_H\,\|\psi\|_H\le(\mathbb E\|U\|_H^2)^{1/2}\|\psi\|_H<\infty.$$
Fubini [F7] gives $S_\psi(m)=\mathbb E[S_\psi(U)]$. The map $S_\psi$ is bounded linear by [F2], so [F8] gives $\mathbb E[S_\psi(U)]=S_\psi(\bar u)$. Thus $S_\psi(m-\bar u)=0$ for every $\psi\in H$; taking $\psi=m-\bar u$ gives $\|m-\bar u\|_H^2=0$, hence $m=\bar u$ in $H$ and $\mathbb E[\widetilde U(\omega,x)-\bar u(x)]=0$ for almost every $x$. [A1, A2, F2, F5, F6, F7, F8, F10, step 1.1, algebra]

3.1 On the product measure space of [F9], [F11] makes $\widetilde Z(\omega,x):=\widetilde U(\omega,x)-\bar u(x)$ and its component products product-measurable. Tonelli [F6] yields $\int_D\mathbb E|\widetilde Z|^2\,d\lambda=\mathbb E\|Z\|_H^2<\infty$. For each $i,j$, $2|\widetilde Z_i\widetilde Z_j|\le\widetilde Z_i^2+\widetilde Z_j^2$, so $\widetilde Z_i\widetilde Z_j$ is absolutely integrable on $\Omega\times D$. Fubini [F7] therefore makes each entry $R_{ij}(x)=\mathbb E[\widetilde Z_i\widetilde Z_j]$ measurable and finite for almost every $x$. For each pair $i,j$, scalar Holder on the probability space gives $|R_{ij}(x)|^2\le\mathbb E[\widetilde Z_i^2]\mathbb E[\widetilde Z_j^2]$; summing over $i,j$ yields $|R(x)|_F\le\mathbb E|\widetilde Z(\omega,x)|^2$. Hence $\int_D|R|_F\,d\lambda<\infty$. Changing the representative of $\bar u$ on a spatial null set does not change the resulting $L^1$ class. On the common full-measure set where $\mathbb E|\widetilde Z|^2<\infty$, every real vector $z$ satisfies $z^{\mathsf T}Rz=\mathbb E[(z\cdot\widetilde Z)^2]\ge0$; this single set works for all $z$ because every component and the second moment are finite there. [A2, F5, F6, F7, F9, F11, step 1.1, step 2.1, algebra]

4.1 Fix an admissible $\Phi$. By [F11], each component product $\widetilde U_i\widetilde U_j\Phi_{ij}$ is measurable, and the finite sum $(\widetilde U\otimes\widetilde U):\Phi$ is product-measurable on [F9]. Finite-dimensional Cauchy--Schwarz and the tensor norm identity in [F3] give
$$\mathbb E\int_D| (\widetilde U\otimes\widetilde U):\Phi |\,d\lambda\le\|\Phi\|_\infty\mathbb E\|U\otimes U\|_K=\|\Phi\|_\infty\mathbb E\|U\|_H^2<\infty.$$
Also, Holder [F5] on $\Omega\times D$ gives
$$\int_{\Omega\times D}|\bar u(x)|\,|\widetilde Z(\omega,x)|\,d(\mathbb P\times\lambda)\le\|\bar u\|_H\bigl(\mathbb E\|Z\|_H^2\bigr)^{1/2}<\infty,$$
so the expanded cross terms remain absolutely integrable after multiplication by the bounded $\Phi$. Fubini [F7] exchanges expectation and spatial integration. Expanding $\widetilde U=\bar u+\widetilde Z$ pointwise, the two cross terms have expectation zero for almost every $x$ by step 2.1; the constant term averages to itself since $\mathbb P(\Omega)=1$ by [F10], and the remaining random term is $R$. The deterministic tensor is integrable by Holder [F5], and $R$ is integrable by step 3.1, so the claimed identity follows. [A2, F3, F5, F7, F9, F10, F11, step 2.1, step 3.1, algebra, given]

4.2 For the additional space-time data, Tonelli [F6] and the assumed moment bound give a common full-measure space-time set where $\mathbb E|u|^2$, $\mathbb E|p|$ and $\mathbb E|f|$ are finite. Scalar Holder on the probability space yields $|m|^2\le\mathbb E|u|^2$, so $m\in L^2$. Fubini [F7] gives the measurable $L^1$ means $\bar p,\bar f$. The component argument of step 3.1 on $I\times D$ makes $R$ an $L^1$ positive-semidefinite tensor. At every point of that common set, expanding $u=m+(u-m)$ and using $\mathbb E(u-m)=0$ yields $\mathbb E[u\otimes u]=m\otimes m+R$. [F5, F6, F7, step 3.1, given, algebra]

5.1 Fix a test $\varphi$ in the additional clause. Its derivatives are bounded on a compact support. The second-moment hypothesis controls the quadratic term, Holder controls the linear velocity terms on that finite-volume support, and the assumed $L^1$ moments control pressure and forcing. Each tested summand is therefore absolutely integrable on probability times space-time. Fubini [F7] takes expectation of the assumed pathwise weak identity and substitutes the means and covariance from step 4.2, proving the displayed expected equation. The same argument for $u\cdot\nabla\chi$ proves $\operatorname{div}m=0$. It works on each compact support under the local version of the hypotheses, without a global moment bound. No common exceptional event for uncountably many tests is needed: for each fixed test its assumed almost-sure identity suffices. [F5, F6, F7, step 4.2, given, algebra] ∎

