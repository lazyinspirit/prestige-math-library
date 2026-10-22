---
id: ex-nrqmx-landau-3d-continuum
kind: example
domain: physics
library: physics
title: Longitudinal free motion turns Landau levels into bands
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 4
deps:
  - pthm-nrqmx-landau-direct-integral
  - lem-nrqmx-landau-3d-form-diagonalization
  - thm-nrqmx-closed-form-representation
  - thm-spectral-theorem-for-unbounded-self-adjoint-operators
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - cor-c-one-change-of-variables-for-l-one-functions
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  pthm-nrqmx-landau-direct-integral: physical-result
  lem-nrqmx-landau-3d-form-diagonalization: mathematical-premise
  thm-nrqmx-closed-form-representation: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "The exact absolutely continuous spectrum of the same ideal spinless point-particle model on R^3 with a constant perpendicular field and free motion in the field direction. No finite sample, material, or empirical claim is included."
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Applications of Quantum Mechanics, §1.2, Landau levels with longitudinal momentum"
      url: "https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf"
    - title: "V. P. Nair, Notes on Quantum Mechanics, §13.2, longitudinal momentum bands"
      url: "https://nair.ccny.cuny.edu/Notes-QM.pdf"
    - title: "Aram Harrow, MIT 8.06 Spring 2016 Lecture Notes, Chapter 4, §3.2, free longitudinal degree of freedom"
      url: "https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2016/6e02558ecf4b7af37d2cdff550fc0f71_MIT8_06S16_chap4.pdf"
verification:
  precheck: pass
---

## Example

For the adopted spinless model on $L^2(\mathbb R^3;\mathbb C)$, take mass
$m>0$ kilograms, charge $q\ne0$ coulombs, a constant field $B\ne0$ teslas
in the $z$ direction, $A(x,y,z)=(0,Bx,0)$ in tesla-metres, zero scalar
potential, and free motion along $z$. The closed Hamiltonian has bands
$$E_n+\frac{\hbar^2k_z^2}{2m},\qquad E_n=\frac{\hbar|qB|}{m}\left(n+\frac12\right),\quad n\in\mathbb N_0,$$
where $k_z$ is a wave number in inverse metres and each $E_n$ is an energy
in joules. Its spectrum is the absolutely continuous half-line
$$\left[\frac{\hbar|qB|}{2m},\infty\right).$$

## Example references

[[pthm-nrqmx-landau-direct-integral]]

[[lem-nrqmx-landau-3d-form-diagonalization]]

## Facts & Assumptions

**Given:** the adopted spinless Landau model with $m>0$, $qB\ne0$,
$A=(0,Bx,0)$, zero scalar potential, and an additional free coordinate $z$.

[A1] The $z$ direction has no potential or boundary constraint and contributes
the nonnegative kinetic form $\hbar^2\|\partial_z u\|_2^2/(2m)$; the
transverse model is the one used in
[[pthm-nrqmx-landau-direct-integral]].

[A2] The Axiom of Choice and Countable Choice are the hypotheses of the
closed-form representation and spectral theorem used below
([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] Under the three-dimensional transform $U_3$, the closed form is
$$\sum_{n=0}^\infty\int_{\mathbb R^2}\left(E_n+\frac{\hbar^2k_z^2}{2m}\right)|f_n(k_y,k_z)|^2\,dk_y\,dk_z,$$
with $E_n=\hbar|qB|(n+\tfrac12)/m$
([[lem-nrqmx-landau-3d-form-diagonalization]]).

[F2] A densely defined closed form bounded below has a unique self-adjoint
representing operator. Its operator domain consists of those form-domain
vectors $F$ for which there is a vector $G$ satisfying
$\overline q(F,H)=\langle G,H\rangle$ for every form-domain $H$
([[thm-nrqmx-closed-form-representation]]).

[F3] A self-adjoint operator's scalar spectral measures are obtained by its
spectral projection-valued measure ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).

[F4] Tonelli's theorem gives
$w_n(k_z)=\int_{\mathbb R}|f_n(k_y,k_z)|^2\,dk_y\in L^1(\mathbb R)$
for each $n$, with $\sum_n\|w_n\|_1=\|F\|^2$
([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F5] On each half-line $k_z>0$ and $k_z<0$, the change of variables
$E=E_n+ck_z^2$, $c=\hbar^2/(2m)>0$, has Jacobian
$|dk_z/dE|=1/(2\sqrt{c(E-E_n)})$
([[cor-c-one-change-of-variables-for-l-one-functions]]).

## Verification

1.1 Put $c=\hbar^2/(2m)$ and $M_n(k_y,k_z)=E_n+ck_z^2$. Apply [F1] to the
three-dimensional core form and then [F2] under the choice hypotheses in [A2]. For
a form-domain vector $F$, the representation criterion says that $F$ is in
the operator domain exactly when there exists $G\in L^2$ with
$$\sum_n\int M_nF_n\overline{H_n}=\sum_n\int G_n\overline{H_n}$$
for every form-domain $H$. If such $G$ exists, fix $n$ and any bounded box
$K\subset\mathbb R^2$. Since $M_n$ is bounded on $K$, both
$1_KM_nF_n$ and $1_KG_n$ are in $L^2(K)$. Choose the test vector with sole
component $H_n=1_K(M_nF_n-G_n)$; it belongs to the form domain because its
index and support are bounded. The identity forces
$$\int_K|M_nF_n-G_n|^2=0.$$
Exhausting $\mathbb R^2$ by bounded boxes and all $n$ gives $G_n=M_nF_n$
almost everywhere, so $MF\in L^2$. Conversely, if $MF\in L^2$, then for
every form-domain $H$, Cauchy–Schwarz gives
$$\sum_n\int M_nF_n\overline{H_n}=\langle MF,H\rangle,$$
so [F2] represents the operator by multiplication by $M_n$, with domain
$\sum_n\int M_n^2|F_n|^2<\infty$. This identification follows under [A2]. [A1, A2, F1, F2, construct, algebra]

2.1 The essential range of the multiplier $M_n$ is
$[E_0,\infty)$: every $M_n\ge E_n\ge E_0$, while the $n=0$ branch
attains every value in that interval as $k_z$ varies. To verify the spectrum
directly, if $\lambda\notin[E_0,\infty)$ then
$\inf_{t\ge E_0}|t-\lambda|>0$ and
$\sup_{t\ge E_0}t/|t-\lambda|<\infty$. Thus multiplication by
$(M-\lambda)^{-1}$ is bounded and maps into the operator domain, so
$\lambda$ is in the resolvent. If $\lambda\ge E_0$, set
$k_0=\sqrt{(\lambda-E_0)/c}$. For every $\delta>0$, a sufficiently small
interval around $k_0$ (or an interval $0<k_z<\sqrt{\delta/c}$ when
$\lambda=E_0$), together with any bounded positive-measure interval of
$k_y$, gives a set of positive finite measure on which
$|E_0+ck_z^2-\lambda|<\delta$. Normalized indicator functions of these
sets are in the operator domain and have residual norm at most $\delta$;
hence $\lambda$ is in the spectrum. The spectrum is exactly the stated
half-line. [A2, F1, F2, step 1.1, algebra]

3.1 Let $F=(f_n)$ be any coefficient vector. By [F4], each band measure is
the pushforward of $w_n(k_z)\,dk_z$ under $k_z\mapsto E_n+ck_z^2$. Splitting
the integral into $k_z>0$ and $k_z<0$ and applying [F5] gives, for
$E>E_n$, the density
$$\rho_n(E)=\frac{w_n\!\left(\sqrt{(E-E_n)/c}\right)+w_n\!\left(-\sqrt{(E-E_n)/c}\right)}{2\sqrt{c(E-E_n)}}.$$
The threshold $E_n$ has no atom because its preimage is the null set
$\{0\}$. Therefore each band measure is absolutely continuous, and the
countable nonnegative sum of these finite measures remains absolutely
continuous. By [F3] these are all scalar spectral measures of the
represented Hamiltonian. There are no eigenvalues or singular-continuous
spectral measures. The conclusion is conditional on the adopted model assumptions. [A2, F3, F4, F5, step 1.1, step 2.1, algebra] ∎

## Remarks

Each transverse Landau level retains an infinite $L^2(k_y)$ multiplicity.
The continuous band parameter comes from free longitudinal momentum $k_z$;
this ideal model makes no finite-sample or material claim.
