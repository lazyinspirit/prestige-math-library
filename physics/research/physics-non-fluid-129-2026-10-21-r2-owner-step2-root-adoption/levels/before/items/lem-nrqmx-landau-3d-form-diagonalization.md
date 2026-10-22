---
id: lem-nrqmx-landau-3d-form-diagonalization
kind: lemma
domain: mathematics
library: physics
title: Closed-form diagonalization with free longitudinal motion
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 3
deps:
  - lem-nrqmx-landau-form-diagonalization
  - def-nrqmx-magnetic-form-data
  - def-fourier-transform-on-l-one-of-rn
  - thm-plancherel
  - cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space
  - lem-nrqm-composites-euclidean-l2-product-unitary
  - cor-c-one-change-of-variables-for-l-one-functions
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-integration-by-parts-for-absolutely-continuous-functions
  - cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn
  - def-the-standard-smooth-step-function
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - thm-nrqm-oscillator-oscillator-scaling-and-exact-realization
  - thm-dominated-convergence
  - def-countable-choice
  - def-dependent-choice
dependency_roles:
  lem-nrqmx-landau-form-diagonalization: mathematical-premise
  def-nrqmx-magnetic-form-data: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  thm-plancherel: mathematical-premise
  cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space: mathematical-premise
  lem-nrqm-composites-euclidean-l2-product-unitary: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-integration-by-parts-for-absolutely-continuous-functions: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  def-the-standard-smooth-step-function: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  thm-nrqm-oscillator-oscillator-scaling-and-exact-realization: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Applications of Quantum Mechanics, §1.2, Landau levels with longitudinal momentum"
      url: "https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf"
    - title: "V. P. Nair, Notes on Quantum Mechanics, §13.2, longitudinal momentum bands"
      url: "https://nair.ccny.cuny.edu/Notes-QM.pdf"
    - title: "Aram Harrow, MIT 8.06 Spring 2016 Lecture Notes, Chapter 4, §§3.1–3.2"
      url: "https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2016/6e02558ecf4b7af37d2cdff550fc0f71_MIT8_06S16_chap4.pdf"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and Dependent Choice, $m,\hbar>0$, and real $q,B$
with $qB\ne0$. Let
$c=\hbar^2/(2m)$, $\omega_c=|qB|/m$, and
$E_n=\hbar\omega_c(n+\tfrac12)$ for $n\in\mathbb N_0$. On
$L^2(\mathbb R^3_{x,y,z};\mathbb C)$ close the nonnegative form
$$q^{(3)}_B[u]=\frac1{2m}\left(\|-i\hbar\partial_xu\|_2^2+\|(-i\hbar\partial_y-qBx)u\|_2^2+\|-i\hbar\partial_zu\|_2^2\right),\qquad u\in C_c^\infty(\mathbb R^3;\mathbb C).$$
Use the wave-number Fourier convention
$$\mathcal F_yg(k_y)=(2\pi)^{-1/2}\int e^{-ik_yy}g(y)\,dy,\qquad \mathcal F_zg(k_z)=(2\pi)^{-1/2}\int e^{-ik_zz}g(z)\,dz.$$
and set
$$U_3u(\xi,k_y,k_z)=\mathcal F_z\!\left[\mathcal F_yu\!\left(\xi+\frac{\hbar k_y}{qB},k_y,z\right)\right](k_z).$$
Then $U_3$ extends to a unitary map onto
$L^2(\mathbb R^2_{k_y,k_z};\ell^2(\mathbb N_0))$ by expansion in the
complete transverse oscillator basis $\psi_n(\xi)$. If
$$U_3u(\xi,k_y,k_z)=\sum_{n=0}^\infty f_n(k_y,k_z)\psi_n(\xi),$$
the form closure domain and value are exactly
$$D(\overline q^{(3)}_B)=\left\{u:\sum_{n=0}^\infty\int_{\mathbb R^2}\left(E_n+ck_z^2\right)|f_n(k_y,k_z)|^2\,dk_y\,dk_z<\infty\right\},$$
$$\overline q^{(3)}_B[u]=\sum_{n=0}^\infty\int_{\mathbb R^2}\left(E_n+ck_z^2\right)|f_n(k_y,k_z)|^2\,dk_y\,dk_z.$$

## Statement references

[[lem-nrqmx-landau-form-diagonalization]]

[[def-countable-choice]]

[[def-dependent-choice]]

[[thm-plancherel]]

## Facts & Assumptions

**Given:** Countable Choice and Dependent Choice, $m,\hbar>0$, real $q,B$
with $qB\ne0$, and the three-dimensional core form in the Statement.

[A1] Countable Choice is the hypothesis of the transverse form, product
Fourier, and compactly-supported $L^2$ density inputs. The transverse form
lemma also assumes Dependent Choice because its integration-by-parts
supplier does
([[def-countable-choice]], [[def-dependent-choice]],
[[lem-nrqmx-landau-form-diagonalization]]).

[F1] The displayed core form is the $d=3$, $A=(0,Bx,0)$ instance of the
magnetic form definition; in $d=2$ the planar core form closes to the oscillator
coefficient form with energies $E_n$ and complete normalized functions
$\psi_n$ ([[def-nrqmx-magnetic-form-data]],
[[lem-nrqmx-landau-form-diagonalization]]).

[F2] The partial Fourier transforms in $y,z$ are unitary on $L^2$ and send
$-i\partial_y,-i\partial_z$ to multiplication by $k_y,k_z$ on Schwartz
functions; the product-space identifications and their iterated use are
valid ([[def-fourier-transform-on-l-one-of-rn]], [[thm-plancherel]],
[[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]],
[[lem-nrqm-composites-euclidean-l2-product-unitary]],
[[thm-integration-by-parts-for-absolutely-continuous-functions]]).

[F3] Translation of the $x$ variable preserves Lebesgue measure
([[cor-c-one-change-of-variables-for-l-one-functions]]).

[F4] $C_c^\infty(\mathbb R^2)$ is dense in $L^2(\mathbb R^2)$, and smooth
cutoffs equal to one on expanding boxes with first derivatives bounded by
$C/R$ can be built from the standard smooth step function
([[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]],
[[def-the-standard-smooth-step-function]]).

[F5] Fubini and Tonelli apply to Lebesgue product spaces, including the
nonnegative oscillator-energy series
([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]],
[[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F6] The weighted coefficient space is complete: identify it with $L^2$ on
$\mathbb N_0\times\mathbb R^2$ for the measure
$(n,k_y,k_z)\mapsto(E_n+ck_z^2)\,d\#(n)\,dk_y\,dk_z$. This measure is
sigma-finite because the weight is finite on each bounded box and finite
index set, and $L^2$ on a measure space is Hilbert under Countable Choice
([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F7] The oscillator eigenfunctions $(\psi_n)$ are normalized Hermite
functions, hence polynomial times Gaussian and Schwartz
([[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]]).

[F8] Dominated convergence applies to the integrable weighted coefficient
tails and to the $L^2$ tails of Schwartz functions
([[thm-dominated-convergence]]).

## Proof

1.1 First apply the unitary planar map from [F1] at each fixed $z$, then the
partial Fourier transform in $z$ from [F2]. On the dense product core both
maps are unitary; the Euclidean $L^2$ product identifications in [F2] extend
their composition uniquely to a unitary on $L^2(\mathbb R^3)$. The inverse
uses the inverse Fourier transforms and the opposite translation, which is
measure preserving by [F3]. The coefficient map in the transverse variable
is unitary because $(\psi_n)$ is a complete orthonormal basis. Thus $U_3$ is
unitary onto the stated coefficient space. [A1, F1, F2, F3, construct]

1.2 Let $f=(f_n)$ have finite weighted norm and fix $\varepsilon>0$. Since
the defining nonnegative series converges, choose $N$ so the norm of its
tail over $n>N$ is below $\varepsilon/3$. For the finitely many indices
$n\le N$, the weighted integrals outside
$K_R=[-R,R]_{k_y}\times[-R,R]_{k_z}$ tend to zero as $R\to\infty$ by
dominated convergence, so choose one $R$ making their combined tail norm
below $\varepsilon/3$. Define
$$\eta_R(k_y,k_z)=\prod_{s\in\{k_y,k_z\}}\sigma(R+1-s)\sigma(R+1+s).$$
It equals one on $K_R$, is between zero and one, and has support in
$K_{R+1}$ by [F4]. For each $n\le N$, truncate $f_n$ to $K_R$ and
approximate that truncation in unweighted $L^2$ by
$\varphi_n\in C_c^\infty(\mathbb R^2)$ using [F4]. The function
$g_n=\eta_R\varphi_n$ is smooth and supported in $K_{R+1}$, and on that
box $E_n+ck_z^2\le E_n+c(R+1)^2$. Since $\eta_R=1$ on $K_R$ and
$0\le\eta_R\le1$, choose each of the finitely many $L^2$ errors small
enough that the weighted norm difference between $g_n$ and the truncation
has combined norm below $\varepsilon/3$. Set $g_n=0$ for $n>N$. The
triangle inequality then gives a finite family
$g_0,\ldots,g_N\in C_c^\infty(\mathbb R^2)$ within $\varepsilon$ of $f$
in the weighted coefficient norm. [A1, F4, F8, construct, algebra]

2.1 For $u\in C_c^\infty(\mathbb R^3)$, every $z$-slice
$u(\cdot,\cdot,z)$ is a planar test function. Apply the form identity in
[F1] on those slices and integrate in $z$ by Fubini. The $z$ derivative
commutes with the planar transform; after Fourier transformation in $z$,
Plancherel and the derivative identity in [F2] turn
$\|-i\hbar\partial_zu\|_2^2/(2m)$ into the multiplier $ck_z^2$. Tonelli
[F5] permits summing the nonnegative transverse energies and integrating in
$(k_y,k_z)$. Therefore
$$q^{(3)}_B[u]=\sum_{n=0}^\infty\int_{\mathbb R^2}(E_n+ck_z^2)|f_n(k_y,k_z)|^2\,dk_y\,dk_z.$$
This makes the transformed core an isometric subspace of the stated weighted
coefficient space. [A1, F1, F2, F5, step 1.1, algebra]

2.2 For the finite family from step 1.2 put
$G(\xi,k_y,k_z)=\sum_{n=0}^Ng_n(k_y,k_z)\psi_n(\xi)$. Its inverse is
$$v(x,y,z)=\frac1{2\pi}\sum_{n=0}^N\int_{\mathbb R^2}e^{i(k_yy+k_zz)}g_n(k_y,k_z)\psi_n\!\left(x-\frac{\hbar k_y}{qB}\right)dk_y\,dk_z.$$
Each coefficient is smooth and compactly supported in $(k_y,k_z)$, and each
$\psi_n$ is a polynomial times a Gaussian by [F7]. Every derivative of the
integrand is smooth with compact wave-number support and has uniformly rapid
decay in $x$ because $k_y$ remains in a bounded set. Repeated integration
by parts in $k_y,k_z$ gives arbitrary polynomial decay in $y,z$; the same
estimates hold after any fixed $x,y,z$ derivatives. Thus $v$ is Schwartz.
Define
$$\chi_R(x,y,z)=\prod_{s\in\{x,y,z\}}\sigma(2-s/R)\sigma(2+s/R),$$
using the smooth step from [F4]. These cutoffs equal one on $[-R,R]^3$,
vanish outside $[-2R,2R]^3$, and satisfy $|\nabla\chi_R|\le C/R$. For
each covariant derivative,
$$\Pi_j(\chi_Rv)=\chi_R\Pi_jv-i\hbar(\partial_j\chi_R)v,$$
where $\Pi_x=-i\hbar\partial_x$, $\Pi_y=-i\hbar\partial_y-qBx$,
and $\Pi_z=-i\hbar\partial_z$. Dominated convergence [F8] sends
$(\chi_R-1)\Pi_jv$ and $(\chi_R-1)v$ to zero in $L^2$, while the added
term has norm at most $C\hbar\|v\|_2/R$. Hence $\chi_Rv$ approximates
$v$ in the form norm and belongs to the original compactly supported core.
Thus each finite smooth coefficient family from step 1.2 lies in the
transformed form closure. [A1, F2, F4, F7, F8, step 1.2, construct, algebra]

3.1 Step 2.1 embeds the transformed core isometrically into the weighted
coefficient space. Because the form completion is complete and the weighted
target is complete by [F6], the isometric image of the completion is closed
in that target. Steps 1.2 and 2.2 show that a dense subspace of the entire
weighted space lies in the image, so the image is the whole target. This
identifies the completion and its quadratic form as stated. [F1, F6, step 1.2, step 2.1, step 2.2, algebra] ∎
