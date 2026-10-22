---
id: lem-nrqmx-landau-form-diagonalization
kind: lemma
domain: mathematics
library: physics
title: Closed-form diagonalization in Landau gauge
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
deps:
  - def-nrqmx-magnetic-form-data
  - thm-nrqm-oscillator-oscillator-scaling-and-exact-realization
  - def-fourier-transform-on-l-one-of-rn
  - thm-plancherel
  - cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space
  - lem-nrqm-composites-euclidean-l2-product-unitary
  - cor-c-one-change-of-variables-for-l-one-functions
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-integration-by-parts-for-absolutely-continuous-functions
  - def-the-standard-smooth-step-function
  - cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - def-countable-choice
  - def-dependent-choice
dependency_roles:
  def-nrqmx-magnetic-form-data: mathematical-premise
  thm-nrqm-oscillator-oscillator-scaling-and-exact-realization: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  thm-plancherel: mathematical-premise
  cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space: mathematical-premise
  lem-nrqm-composites-euclidean-l2-product-unitary: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-integration-by-parts-for-absolutely-continuous-functions: mathematical-premise
  def-the-standard-smooth-step-function: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Applications of Quantum Mechanics, §1.2, Landau gauge and oscillator fibers"
      url: "https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf"
    - title: "Aram Harrow, MIT 8.06 Spring 2016 Lecture Notes, Chapter 4, §§3.1–3.2"
      url: "https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2016/6e02558ecf4b7af37d2cdff550fc0f71_MIT8_06S16_chap4.pdf"
    - title: "V. P. Nair, Notes on Quantum Mechanics, §13.2"
      url: "https://nair.ccny.cuny.edu/Notes-QM.pdf"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and Dependent Choice, $m,\hbar>0$, and real $q,B$
with $qB\ne0$. On
$L^2(\mathbb R^2;\mathbb C)$ close the nonnegative form
$$q_B[u]=\frac1{2m}\left(\|-i\hbar\partial_xu\|_2^2+\|(-i\hbar\partial_y-qBx)u\|_2^2\right),\qquad u\in C_c^\infty(\mathbb R^2;\mathbb C).$$
Put $\omega_c=|qB|/m$,
$E_n=\hbar\omega_c(n+\tfrac12)$, and let $(\psi_n)_{n\ge0}$ be the
complete normalized eigenfunctions of the one-dimensional oscillator with
mass $m$, frequency $\omega_c$, and action constant $\hbar$ in its exact
self-adjoint oscillator realization. For
Schwartz $u$ define
$\mathcal F_yu(x,k)=(2\pi)^{-1/2}\int_{\mathbb R}e^{-iky}u(x,y)\,dy$,
and use its unitary $L^2$ extension. Put $x_0(k)=\hbar k/(qB)$ and
$(Uu)(\xi,k)=\mathcal F_yu(\xi+x_0(k),k)$.
Then $U$ is unitary from $L^2(\mathbb R^2_{x,y})$ onto
$L^2(\mathbb R^2_{\xi,k})$. Writing
$$Uu(\xi,k)=\sum_{n=0}^\infty f_n(k)\psi_n(\xi),\qquad f_n\in L^2(\mathbb R_k),$$
the form closure domain and value are exactly
$$D(\overline q_B)=\left\{u:\sum_{n=0}^\infty E_n\|f_n\|_{L^2(k)}^2<\infty\right\},\qquad \overline q_B[u]=\sum_{n=0}^\infty E_n\|f_n\|_{L^2(k)}^2.$$
Thus the form is the diagonal oscillator form with an unrestricted $L^2(k)$
degeneracy factor; it asserts no finite-area state count.

## Statement references

[[def-nrqmx-magnetic-form-data]]

[[def-countable-choice]]

[[def-dependent-choice]]

[[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]]

[[thm-dominated-convergence]]

## Facts & Assumptions

**Given:** Countable Choice and Dependent Choice, $m,\hbar>0$, $qB\ne0$,
the form $q_B$, and the oscillator eigenfamily $(\psi_n)$ with energies
$E_n$.

[F1] The magnetic form on $C_c^\infty$ is the form of
[[def-nrqmx-magnetic-form-data]] with $d=2$, $A=(0,Bx)$ and $V=0$.

[F2] The $2\pi$-frequency Fourier transform on $L^1$ has kernel
$e^{-2\pi i y\xi}$ ([[def-fourier-transform-on-l-one-of-rn]]), and its
extension to $L^2$ is unitary ([[thm-plancherel]]). The wave-number convention
in the Statement is the unitary rescaling
$\mathcal F_y g(k)=(2\pi)^{-1/2}\widehat g(k/(2\pi))$; for Schwartz $g$ it
satisfies $\mathcal F_y(-i\partial_y g)=k\mathcal F_y g$ by integration by
parts, and Fourier transform preserves Schwartz space
([[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]).
The Euclidean $L^2$ product identification and Fubini apply
([[lem-nrqm-composites-euclidean-l2-product-unitary]],
[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]); the
integration-by-parts identity used for the derivative multiplier is
[[thm-integration-by-parts-for-absolutely-continuous-functions]].

[F3] For $\omega_c>0$, let $H_{\mathrm{osc}}$ be the exact self-adjoint
oscillator realization in
[[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]]. It has
complete orthonormal basis $(\psi_n)$, eigenvalues $E_n$, and domain
$$D(H_{\mathrm{osc}})=\left\{g:\sum_{n=0}^\infty E_n^2|\langle g,\psi_n\rangle|^2<\infty\right\}.$$
On its polynomial-Gaussian core it has differential expression
$L=-\hbar^2\partial_\xi^2/(2m)+m\omega_c^2\xi^2/2$; in particular,
$L\psi_n=E_n\psi_n$ on that core.

[F4] Translation of one Lebesgue variable preserves its integral, and
integration by parts holds for smooth compactly supported functions
([[cor-c-one-change-of-variables-for-l-one-functions]],
[[thm-integration-by-parts-for-absolutely-continuous-functions]]).

[F5] Smooth compactly supported cutoffs equal to one on expanding balls and
with first derivatives bounded by $C/R$ are obtained by rescaling the
standard smooth step function ([[def-the-standard-smooth-step-function]]).

[F6] Tonelli's theorem permits integration of the nonnegative oscillator
energy series term by term over $(\xi,k)$ with Lebesgue measure
([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F7] For every finite $p$ and dimension, compactly supported smooth
functions are dense in $L^p(\mathbb R^d)$; in particular this holds for
$L^2(\mathbb R_k)$ ([[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]]).

[F8] The weighted sequence space in the Statement is complete: it is
$L^2$ on $\mathbb N_0\times\mathbb R_k$ for the sigma-finite measure
$(n,k)\mapsto E_n\,d\#(n)\,dk$, and $L^2$ of any measure space is
Hilbert under Countable Choice
([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F9] On any measure space, measurable complex-valued functions converging almost everywhere and bounded in modulus by a single nonnegative measurable $L^1$ function converge in integral (indeed in $L^1$). [[thm-dominated-convergence]]

[A1] Countable Choice is assumed by the unitary Fourier, product-space, and
oscillator suppliers; Dependent Choice is an exact hypothesis of the
absolutely-continuous integration-by-parts supplier
([[def-countable-choice]], [[def-dependent-choice]],
[[thm-integration-by-parts-for-absolutely-continuous-functions]]).

## Proof

1.1 On the dense tensor core $a(x)b(y)$ with $a,b\in\mathcal S(\mathbb R)$,
$\mathcal F_y$ is the identity on the first factor and the unitary Fourier
transform on the second, by [F2] and the Euclidean $L^2$ product identification
in [F2]. It extends uniquely to a unitary on $L^2(\mathbb R^2)$. For each
$k$, translation $x=\xi+x_0(k)$ preserves the $x$-integral by [F4]; Fubini
then shows that $Wg(\xi,k)=g(\xi+x_0(k),k)$ is an isometry with inverse
$W^{-1}h(x,k)=h(x-x_0(k),k)$. Hence $U=W\mathcal F_y$ is unitary. [given, A1, F2, F4, construct]

2.1 Let $u\in C_c^\infty(\mathbb R^2)$ and write
$F(\xi,k)=Uu(\xi,k)$. For each fixed $k$, $F(\cdot,k)$ is smooth and
compactly supported in $\xi$. Plancherel in $y$, the derivative identity
in [F2], and the substitution $x=\xi+x_0(k)$ give
$$q_B[u]=\int_{\mathbb R^2}\left(\frac{\hbar^2}{2m}|\partial_\xi F|^2+\frac{(qB)^2}{2m}\xi^2|F|^2\right)d\xi\,dk.$$
For a compactly supported smooth $g(\xi)$, put
$Lg=-\hbar^2g''/(2m)+m\omega_c^2\xi^2g/2\in L^2$. Integrating by parts
twice on a finite interval containing the support of $g$ gives
$\langle Lg,\psi_n\rangle=E_n\langle g,\psi_n\rangle$, since
$L\psi_n=E_n\psi_n$ and the boundary terms vanish. Completeness and Parseval
therefore give
$$\sum_{n=0}^\infty E_n^2|\langle g,\psi_n\rangle|^2=\|Lg\|_2^2<\infty.$$
The exact domain characterization in [F3] now implies
$g\in D(H_{\mathrm{osc}})$, and its diagonal action gives
$H_{\mathrm{osc}}g=Lg$. Hence
$$\langle H_{\mathrm{osc}}g,g\rangle=\sum_{n=0}^\infty E_n|\langle g,\psi_n\rangle|^2.$$
Integration by parts also identifies the left side with
$$\frac1{2m}\left(\hbar^2\|g'\|_2^2+(qB)^2\|\xi g\|_2^2\right).$$
Apply this identity to $F(\cdot,k)$ for almost every $k$. Tonelli [F6]
permits integrating the nonnegative series, so the displayed core form is
the coefficient form on every transformed core vector. [given, A1, F2, F3, F4, F6, step 1.1, algebra]

3.1 For $N<\infty$ and $f_0,\ldots,f_N\in C_c^\infty(\mathbb R_k)$,
$F_N(\xi,k)=\sum_{n=0}^Nf_n(k)\psi_n(\xi)$ has inverse
$$U^{-1}F_N(x,y)=\frac1{\sqrt{2\pi}}\sum_{n=0}^N\int_{\mathbb R}e^{iky}f_n(k)\psi_n\!\left(x-\frac{\hbar k}{qB}\right)dk.$$
Write $v:=U^{-1}F_N$. The integrands have compact $k$-support and are Schwartz in $x$ uniformly
there by the Hermite form in [F3]; differentiating under the integral and
integrating by parts in $k$ show rapid decay in $y$, so the inverse is
Schwartz. Define
$$\chi_R(x,y)=\prod_{s\in\{x,y\}}\sigma(2-s/R)\sigma(2+s/R),$$
using [F5]. These cutoffs are one on $[-R,R]^2$, vanish outside
$[-2R,2R]^2$, and have $|\nabla\chi_R|\le C/R$. For each covariant
derivative,
$$\Pi_j^A(\chi_Rv)=\chi_R\Pi_j^Av-i\hbar(\partial_j\chi_R)v.$$
Take integer $R\ge1$. The step-function bounds in [F5] give $0\le\chi_R\le1$, and for every fixed $(x,y)$, $\chi_R(x,y)=1$ once $R\ge\max\{|x|,|y|\}$, so $\chi_R\to1$ pointwise. Since $v$ is Schwartz and $A=(0,Bx)$ is linear, $\Pi_1^Av=-i\hbar\partial_xv$ and $\Pi_2^Av=-i\hbar\partial_yv-qBxv$ are Schwartz and belong to $L^2(\mathbb R^2)$. For each $w\in\{v,\Pi_1^Av,\Pi_2^Av\}$, the functions $|(\chi_R-1)w|^2$ are measurable, tend pointwise to zero, and are bounded by the single measurable $L^1$ majorant $|w|^2$. Applying [F9] on the Lebesgue measure space $\mathbb R^2$ gives $\|(\chi_R-1)w\|_2\to0$. The derivative-cutoff term separately satisfies $\|\hbar(\partial_j\chi_R)v\|_2\le C\hbar\|v\|_2/R\to0$. Thus the displayed product identity and the triangle inequality give $\|\Pi_j^A(\chi_Rv-v)\|_2\to0$ for both $j$, as well as $\|\chi_Rv-v\|_2\to0$.
The form identity of step 2.1 also holds for Schwartz functions: the Fourier and shear maps preserve Schwartz regularity, and for each Schwartz $g(\xi)$ one has $Lg\in L^2$; its integration-by-parts pairings with the polynomial-Gaussian $\psi_n$ have vanishing boundary terms at both infinities. The same Parseval calculation and exact diagonal operator-domain criterion in [F3] therefore give $g\in D(H_{\mathrm{osc}})$ and the same oscillator energy identity. All resulting nonnegative energies can again be integrated by [F6]. Apply this extended identity to the Schwartz difference $\chi_Rv-v$. Its weighted coefficient norm squared is exactly $\frac1{2m}\sum_{j=1}^2\|\Pi_j^A(\chi_Rv-v)\|_2^2$, which tends to zero by the preceding bounds. Since $\chi_Rv\in C_c^\infty$, each $F_N$ therefore lies in the weighted-norm closure of the transformed original core, without assuming closability in advance. Finite coefficient families are dense
in the weighted target: truncate its convergent nonnegative series, then
approximate the remaining finitely many $L^2(k)$ coefficients by
$C_c^\infty(k)$ using [F7]. [A1, F1, F2, F3, F4, F5, F6, F7, F9, step 1.1, step 2.1, construct, algebra]

4.1 Let $\mathcal K_E$ be the coefficient space
$\{(f_n):\sum_nE_n\|f_n\|_2^2<\infty\}$ with squared norm
$\sum_nE_n\|f_n\|_2^2$, and let
$J:\mathcal K_E\hookrightarrow L^2(\mathbb N_0\times\mathbb R,d\#\,dk)$
be the identity inclusion. Step 2.1 maps the transformed core isometrically
into $\mathcal K_E$. Since $E_n\ge E_0=\hbar\omega_c/2>0$, $J$ is
continuous and injective, with
$\|Jf\|_2^2\le E_0^{-1}\sum_nE_n\|f_n\|_2^2$. The coefficient map is
unitary on the underlying $L^2$ space by [F2] and [F3]. Thus
$q_B[u]\ge E_0\|u\|_2^2$ on the core. For every $\varepsilon>0$,
$$q_B[u]\le q_B[u]+\varepsilon\|u\|_2^2\le(1+\varepsilon/E_0)q_B[u],$$
so each shifted form norm is equivalent to $q_B[u]^{1/2}$. Suppose a core
sequence is Cauchy in $q_B[u]^{1/2}$ and tends to zero in $L^2$. Its
weighted coefficient image converges in $\mathcal K_E$ to
some $f$; unweighted $L^2$ convergence and continuity of $J$ give $Jf=0$.
Injectivity of $J$ gives $f=0$, so $q_B[u]\to0$ along that sequence.
The equivalence above then gives convergence to zero in the defining shifted
form norm, proving closability of the core form. By [F8] the
target is complete, so the isometric image of the form completion is
closed there. Step 3.1 places a dense subspace of that target in the image;
hence the image is the whole weighted space and the form closure is exactly
the stated one. [F1, F2, F3, F8, step 2.1, step 3.1, algebra] ∎

## Remarks

The diagram records the unitary changes of representation used in the proof;
the argument establishes each arrow and does not rely on the diagram.

```tikzcd
L^2(\mathbb R^2_{x,y}) \arrow[r,"\mathcal F_y"] & L^2(\mathbb R^2_{x,k}) \arrow[r,"W"] & L^2(\mathbb R^2_{\xi,k}) \arrow[r,"\mathcal H"] & L^2(\mathbb R_k;\ell^2(\mathbb N_0))
```

Here $\mathcal H$ is the coefficient map
$F\mapsto(\langle F(k,\cdot),\psi_n\rangle)_{n\ge0}$, which is unitary by
the complete oscillator basis. The linear Landau potential is unbounded, so
no bounded-coefficient $H^2$ realization is invoked.
