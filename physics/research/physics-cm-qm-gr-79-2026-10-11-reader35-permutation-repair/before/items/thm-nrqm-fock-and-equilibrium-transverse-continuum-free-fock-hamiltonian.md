---
id: thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian
aliases: [ nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian ]
kind: theorem
domain: mathematics
title: "Transverse continuum free Fock Hamiltonian"
status: draft
origin: pipeline
dependency_level: 5
deps:
  - thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction
  - lem-nrqm-fock-and-equilibrium-fock-sector-projections
  - lem-nrqm-composites-hilbert-tensor-construction
  - lem-nrqm-composites-permutation-sector-projections
  - lem-nrqm-composites-euclidean-l2-product-unitary
  - thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators
  - def-compact-linear-operator
  - thm-sequential-characterization-of-compact-operators
  - def-dependent-choice
  - def-trace-class-operator
  - thm-spectral-theorem-for-unbounded-self-adjoint-operators
  - def-projection-valued-measure
  - lem-euclidean-bump-for-a-compact-set-inside-an-open-set
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-hilbert-orthogonal-projection
  - def-hilbert-space
  - def-bounded-linear-operator
  - def-operator-norm
  - def-countable-choice
  - def-axiom-of-choice
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-countable
  - def-separable-space
  - thm-product-of-countable
  - thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn
  - def-unbounded-integral-against-a-pvm
  - thm-bounded-borel-pvm-integral
  - thm-monotone-convergence-for-the-integral
  - lem-nrqm-observables-l2-multiplication-spectral-measure
  - def-adjoint-of-a-densely-defined-unbounded-operator
dependency_roles:
  thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction: mathematical-premise
  lem-nrqm-fock-and-equilibrium-fock-sector-projections: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  lem-nrqm-composites-euclidean-l2-product-unitary: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  def-compact-linear-operator: mathematical-premise
  thm-sequential-characterization-of-compact-operators: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-trace-class-operator: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  lem-euclidean-bump-for-a-compact-set-inside-an-open-set: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  def-countable: mathematical-premise
  def-separable-space: mathematical-premise
  thm-product-of-countable: mathematical-premise
  thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn: mathematical-premise
  def-unbounded-integral-against-a-pvm: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  lem-nrqm-observables-l2-multiplication-spectral-measure: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes,
        2017/18), Section 1.2 pp. 5-6 and Section 1.4.2 pp. 9-10 (Fock space and
        second-quantized free Hamiltonians)"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenote\
        s2017AQT.pdf"
    - title: "S. Pratt, Lecture Notes on Quantum Mechanics (Michigan State University,
        PHY 851/852; retrieved via the Internet Archive snapshot of 2024-04-21),
        Chapter 9 Sections 9.1-9.3 pp. 135-138 (field operators, energy and
        radiation modes)"
      url: "http://web.archive.org/web/20240421090356/http://web.archive.org/web/2024\
        0421090356/https://web.pa.msu.edu/people/pratts/phy851/lectures/lecture\
        s_full.pdf"
---

## Statement

Assume the Axiom of Countable Choice, the Axiom of Dependent Choice and the
Axiom of Choice ([[def-countable-choice]], [[def-dependent-choice]],
[[def-axiom-of-choice]]). Fix a parameter $\alpha>0$, define the transverse
subspace
$$\mathfrak h:=\Bigl\{f\in L^2(\mathbb R^3;\mathbb C^3):\ k\cdot f(k)=0\ \text{for a.e. }k\Bigr\}$$
with the $L^2$ inner product, define the bounded multiplier-valued function
$\Pi(k):=\mathrm{id}-|k|^{-2}kk^{\mathsf T}$ for $k\ne0$ and $\Pi(0):=0$, and let
$M_\Pi$ be multiplication by $\Pi$ on $L^2(\mathbb R^3;\mathbb C^3)$
([[def-l-p-space-as-a-quotient-by-null-functions]],
[[def-complex-lp-and-euclidean-test-function-conventions]]). Write
$\varepsilon(k):=\alpha|k|$ and let $M_\varepsilon$ be multiplication by
$\varepsilon$, with $\varepsilon_{\mathfrak h}:=M_\varepsilon|_{\mathfrak h}$.
Let $F(\mathfrak h)$ be the Fock space of
[[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]] with sectors
$\operatorname{ran}P_+^{(n)}$, and for $n\ge1$ define
$$T_n\psi:=\varepsilon_n\psi,\quad \varepsilon_n(k_1,\dots,k_n):=\sum_{i=1}^n\alpha|k_i|,\qquad D(T_n):=\{\psi\in\operatorname{ran}P_+^{(n)}:\varepsilon_n\psi\in\operatorname{ran}P_+^{(n)}\},$$
and $T_0:=0$ on $\mathbb C$. Finally put
$$H_f:=\bigoplus_{n\ge0}T_n,\qquad D(H_f):=\Bigl\{\psi\in F(\mathfrak h):\ \psi_n\in D(T_n)\text{ for every }n,\ \sum_n\|T_n\psi_n\|^2<\infty\Bigr\}.$$
Then:

(a) $\mathfrak h=\operatorname{ran}M_\Pi$ is a closed separable subspace of
$L^2(\mathbb R^3;\mathbb C^3)$, invariant under $M_\varepsilon$, and
$\varepsilon_{\mathfrak h}$ is a positive self-adjoint operator on
$\mathfrak h$ with $D(\varepsilon_{\mathfrak h})=\{f\in\mathfrak h:\varepsilon f\in\mathfrak h\}$
([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]],
[[def-hilbert-orthogonal-projection]], [[def-separable-space]]);

(b) each $T_n$ is a positive self-adjoint operator on the Hilbert space
$\operatorname{ran}P_+^{(n)}$ with the displayed domain
([[def-hilbert-space]], [[lem-nrqm-composites-euclidean-l2-product-unitary]],
[[lem-nrqm-composites-permutation-sector-projections]]);

(c) $H_f$ is self-adjoint and positive with domain $D(H_f)$; it commutes with
every sector projection $\Pi_n$ (i.e. $T_n$ maps its sector into itself);

(d) for every $\beta>0$ the bounded operator $e^{-\beta H_f}$
([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]],
[[def-projection-valued-measure]]) is not compact and in particular not trace
class ([[def-compact-linear-operator]], [[def-trace-class-operator]]); more
precisely its restriction to the one-particle sector equals the multiplication
operator $M_{e^{-\beta\varepsilon}}$ on $\mathfrak h$, which is not compact, and
the restriction of a compact operator to a closed invariant subspace is compact.

The identification of $\mathfrak h$, $\varepsilon$ and $H_f$ with physical
transverse photons in a chosen frame is a separate model assumption and is not
asserted here; no thermal interpretation of $e^{-\beta H_f}$ is claimed either.

## Facts & Assumptions
**Given:** the parameter $\alpha>0$, the transverse subspace $\mathfrak h$, the projection-valued multiplier $M_\Pi$, the function $\varepsilon(k)=\alpha|k|$, the sector operators $T_n$, and the direct sum $H_f$.

[F1] $\Pi(k)$ is for $k\ne0$ the orthogonal projection of $\mathbb C^3$ onto the orthogonal complement of $k$; a measurable, bounded projection-valued function defines a bounded self-adjoint projection $M_\Pi$ on $L^2(\mathbb R^3;\mathbb C^3)$, with range a closed subspace ([[def-hilbert-orthogonal-projection]], [[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F2] For a real measurable finite-valued function $a$ on a Euclidean space, the scalar multiplier $M_a$ with domain $\{f:af\in L^2\}$ is densely defined and self-adjoint ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] clause (a)). Its finite-component extension and its restriction to a reducing closed subspace are proved locally in step 1.1, using the adjoint definition [[def-adjoint-of-a-densely-defined-unbounded-operator]]. No restriction theorem is attributed to the scalar supplier.

[F3] Put $G=L^2(\mathbb R^3;\mathbb C^3)$. The completed tensor construction and iterated Euclidean product unitary give
$$\Theta_n:G^{\otimes n}\longrightarrow L_n=L^2(\mathbb R^{3n};(\mathbb C^3)^{\otimes n}),\qquad \Theta_n(f_1\otimes\cdots\otimes f_n)(k)=f_1(k_1)\otimes\cdots\otimes f_n(k_n).$$
The elementary tensor span is dense, and permutation unitaries act on tensor factors by $U_\pi(f_1\otimes\cdots\otimes f_n)=f_{\pi^{-1}(1)}\otimes\cdots\otimes f_{\pi^{-1}(n)}$; their average is the symmetric projection ([[lem-nrqm-composites-hilbert-tensor-construction]], [[lem-nrqm-composites-permutation-sector-projections]], [[lem-nrqm-composites-euclidean-l2-product-unitary]]). The corresponding transverse and symmetric projections in $L_n$, including the polarization-factor permutations, are constructed in step 3.1.


[F4] For self-adjoint $T_n$ on every sector $\operatorname{ran}P_+^{(n)}$, including $T_0$ on $\mathbb C$, the direct sum is self-adjoint on $\{\psi:\psi_n\in D(T_n),\ \sum_n\|T_n\psi_n\|^2<\infty\}$ ([[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]] (f)). Here the vacuum summand is $T_0=0$.

[F5] Each self-adjoint $T_n$ has a unique regular spectral PVM $E_n$, its domain is $\{u:\int t^2\,d(E_n)_u(t)<\infty\}$, and $T_n=\int t\,dE_n(t)$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-projection-valued-measure]], [[def-unbounded-integral-against-a-pvm]]). For bounded Borel $h$, $h(E_n)=\Phi_{E_n}(h)$ and its norm and quadratic identities hold ([[thm-bounded-borel-pvm-integral]]). For a real multiplier on a Euclidean $L^2$ space, the spectral PVM is the inverse-image indicator multiplier; this applies componentwise to $\mathbb C^3$-valued functions ([[lem-nrqm-observables-l2-multiplication-spectral-measure]]).

[F6] Sequential characterization of compactness: a bounded operator $T$ is compact if and only if every bounded sequence has a subsequence whose images converge in norm; hence an orthonormal sequence whose images have pairwise distances bounded below by a positive constant obstructs compactness ([[thm-sequential-characterization-of-compact-operators]], [[def-compact-linear-operator]], [[def-dependent-choice]]).

[F7] Bump functions: for every $c\in\mathbb R^3$ and $\rho>0$ there is $\varphi\in C_c^\infty(\mathbb R^3)$ with $0\le\varphi\le1$, $\varphi=1$ on the ball of radius $\rho/2$ about $c$ and $\varphi=0$ outside the ball of radius $\rho$ about $c$ ([[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F8] For nonnegative measurable $g_n\uparrow g$, $\int g_n\,d\mu\uparrow\int g\,d\mu$ ([[thm-monotone-convergence-for-the-integral]]).

[F9] Cauchy-Schwarz in each sector Hilbert space gives $|\langle T_nu,u\rangle|\le\|T_nu\|\,\|u\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F10] The real space $L^2(\mathbb R^3)$ has a countable dense family of rational box-step functions ([[thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]]); six copies of this countable family are countable by finite iteration of [[thm-product-of-countable]] and give a dense family in $G=L^2(\mathbb R^3;\mathbb C^3)$ by approximating the real and imaginary parts of each component. Since $M_\Pi$ is a bounded projection, the image of this dense family under $M_\Pi$ is countable and dense in $\mathfrak h=\operatorname{ran}M_\Pi$ ([[def-countable]], [[def-separable-space]]).




## Proof

1.1 [Finite components and reducing restrictions] The scalar self-adjointness in [F2] extends to any finite number of components: the multiplication domain is the finite product of scalar domains, hence dense, and testing the adjoint identity with a vector supported in one component shows that the adjoint domain and action are exactly the componentwise multiplication domain and action. Now let $A$ be self-adjoint, let $Q$ be a bounded orthogonal projection with $QD(A)\subseteq D(A)$ and $AQx=QAx$ on $D(A)$, and put $K=\operatorname{ran}Q$. The domain $D(A)\cap K$ is dense in $K$, since applying $Q$ to approximants in the dense $D(A)$ gives approximants in this intersection. The restriction $A_K$ is symmetric. If $y\in D(A_K^*)$ and $h=A_K^*y\in K$, then for every $x\in D(A)$, [F2, algebra]
$$\langle Ax,y\rangle=\langle QAx,y\rangle=\langle AQx,y\rangle=\langle Qx,h\rangle=\langle x,h\rangle.$$
Thus $y\in D(A^*)=D(A)$ and $Ay=h$, so $y\in D(A_K)$ and $A_K^*y=A_Ky$. Conversely symmetry gives $A_K\subseteq A_K^*$. Therefore $A_K$ is self-adjoint on exactly $D(A)\cap K$. This argument uses the adjoint definition, not a missing clause of the scalar multiplier theorem. [F2, algebra]

2.1 [The transverse space] For $k\ne0$ the matrix $\Pi(k)$ is the orthogonal projection onto $\{v:k\cdot v=0\}$: it is symmetric, $\Pi(k)^2=\Pi(k)$ and $\Pi(k)v=v$ exactly for $k\cdot v=0$. Extending by $\Pi(0)=0$ gives a measurable, bounded, projection-valued function, so $M_\Pi$ is a bounded self-adjoint projection and $\mathfrak h=\operatorname{ran}M_\Pi$ is a closed subspace. By [F10], the image under $M_\Pi$ of a countable dense subset of $G$ is countable and dense in its range, so $\mathfrak h$ is separable. Since $\varepsilon$ is radial, $M_\varepsilon M_\Pi=M_\Pi M_\varepsilon$, so $M_\varepsilon$ preserves $\mathfrak h$; by step 1.1 the restriction $\varepsilon_{\mathfrak h}$ is self-adjoint with domain $\{f\in\mathfrak h:\varepsilon f\in\mathfrak h\}$, and it is positive because $\varepsilon\ge0$. This proves (a). [F1, F2, F10, step 1.1, algebra]

3.1 [Transverse symmetric sectors and their energy domains] Fix $n\ge1$. The isometric inclusion $\mathfrak h\to G$ induces an isometric inclusion of the completed tensor powers, since the elementary inner products agree and their spans are dense. Under $\Theta_n$ of [F3], its closed range is that of multiplication by [F2, F3, step 1.1, step 2.1, algebra]
$$Q_n(k)=\Pi(k_1)\otimes\cdots\otimes\Pi(k_n).$$
Indeed this bounded orthogonal projection sends every elementary product to the product of its transverse projections, so its range is the closure of the transverse elementary span. Let $\tau_\pi$ permute the factors of $(\mathbb C^3)^{\otimes n}$ by the same convention as $U_\pi$. The ambient permutation is
$$(C_\pi f)(k_1,\ldots,k_n)=\tau_\pi f(k_{\pi(1)},\ldots,k_{\pi(n)}),$$
as follows first on elementary products and then everywhere by density. Hence $S_n=(n!)^{-1}\sum_\pi C_\pi$ is the orthogonal symmetric projection. The transverse tensor projection commutes with every permutation on elementary tensors, and hence everywhere; thus $R_n=M_{Q_n}S_n$ is an orthogonal projection whose range $K_n$ is exactly the image of $\operatorname{ran}P_+^{(n)}\subseteq\mathfrak h^{\otimes n}$. Denote the resulting isometry onto $K_n$ by $I_n$. Since each $\tau_\pi$ is unitary, every sector vector has $\|I_nu(k_{\pi(1)},\ldots,k_{\pi(n)})\|=\|I_nu(k_1,\ldots,k_n)\|$ almost everywhere. This is the norm symmetry used in sector energy integrals; it does not assert invariance of each polarization component without permuting its tensor factors.
The ambient finite-component multiplier $A_n=M_{\varepsilon_n}$ is self-adjoint on its maximal multiplication domain by step 1.1. Its domain is preserved by $M_{Q_n}$, since this pointwise projection is contractive and commutes with the scalar multiplier. It is preserved by every $C_\pi$, and $A_nC_\pi=C_\pi A_n$ on that domain, because $\varepsilon_n(k)=\sum_i\alpha|k_i|$ is permutation invariant. Therefore $R_n$ preserves the domain and commutes with $A_n$ there. Step 1.1 makes its restriction to $K_n$ self-adjoint on precisely $\{f\in K_n:\varepsilon_nf\in L_n\}$. Commutation implies that the product lies in $K_n$ whenever it lies in $L_n$. Transport by $I_n$ gives exactly $T_n$ and the displayed domain of the Statement. Its pairing with a domain vector is the integral of $\varepsilon_n\|I_n\psi\|^2$, which is nonnegative and finite by Cauchy-Schwarz [F9]. Thus $T_n\ge0$, proving (b). For $n=0$, $T_0=0$ on all of $\mathbb C$ is self-adjoint and positive. [F2, F3, F9, step 1.1, step 2.1, algebra]

4.1 [The free Fock Hamiltonian] By step 3.1 each $T_n$, including $T_0=0$, is self-adjoint on its sector, so [F4] gives that $H_f=\bigoplus_nT_n$ is self-adjoint on the displayed domain. For $\psi\in D(H_f)$, $\langle H_f\psi,\psi\rangle=\sum_n\langle T_n\psi_n,\psi_n\rangle\ge0$; the sum is absolutely convergent by [F9] and finite-sequence Cauchy–Schwarz applied to $(\|T_n\psi_n\|)_n$ and $(\|\psi_n\|)_n$. Since each $T_n$ maps $\operatorname{ran}P_+^{(n)}$ into itself, $H_f$ commutes with every sector projection $\Pi_n$. This proves (c). [F4, F9, step 3.1, algebra]

5.1 [The direct-sum spectral PVM and the exponential] For each $n\ge0$ let $E_n$ be the regular spectral PVM of $T_n$ from [F5], with $E_0(B)=\mathbf1_B(0)I_{\mathbb C}$ because $T_0=0$, and define $E(B):=\bigoplus_{n\ge0}E_n(B)$. Each $E(B)$ is an orthogonal projection, $E(\mathbb R)=I$, and the PVM product law holds coordinatewise. Strong countable additivity follows by first restricting a vector to finitely many sectors, where it is the strong additivity of the $E_n$, and then bounding the omitted squared norm by the tail $\sum_{n>N}\|\psi_n\|^2$. Its scalar measure is $E_\psi(B)=\sum_{n\ge0}(E_n)_{\psi_n}(B)$; this finite measure given by a countable sum of sector measures is regular, since one first discards a tail of total mass $\sum_{n>N}\|\psi_n\|^2$ and then uses inner compact and outer open approximations for the finitely many remaining regular measures. For every nonnegative simple $g$, $\int g\,dE_\psi=\sum_n\int g\,d(E_n)_{\psi_n}$ by the definition of the sum measure, and [F8] extends this identity to $g(t)=t^2$. By [F5], this second moment is finite exactly when each $\psi_n\in D(T_n)$ and $\sum_n\|T_n\psi_n\|^2<\infty$, so the domain of $\int t\,dE(t)$ is $D(H_f)$. For $\psi\in D(H_f)$ the bounded truncations $t_R(t):=t\mathbf1_{|t|\le R}$ satisfy $\Phi_E(t_R)=\bigoplus_n\Phi_{E_n}(t_R)$: this follows from the definition of $E$ for simple functions and uniform approximation for bounded Borel functions. As $R\to\infty$, these vectors converge to $(T_n\psi_n)_n$ in norm, first on finitely many sectors by the spectral integral and then on the sector tail using $\sum_n\|T_n\psi_n\|^2<\infty$. Therefore $\int t\,dE(t)=H_f$ on precisely $D(H_f)$; regularity and the uniqueness clause of [F5] give $E=E_{H_f}$. For $n=1$, the full-space multiplier PVM of $\varepsilon(k)=\alpha|k|$ commutes with the transverse projection $M_\Pi$ (scalar multiplication commutes pointwise with $\Pi(k)$), so its restriction to $\mathfrak h$ is a regular PVM. Its scalar second moment is $\int\varepsilon(k)^2\|f(k)\|^2d^3k$, and bounded spectral truncations act as multiplication by $\varepsilon\mathbf1_{\{\varepsilon\le R\}}$, converging in norm on exactly $D(\varepsilon_{\mathfrak h})$. Thus its unbounded identity integral is $T_1=\varepsilon_{\mathfrak h}$, and spectral uniqueness identifies this restricted PVM with $E_1$. The bounded function $h(t):=e^{-\beta t}\mathbf1_{[0,\infty)}(t)$ is $e^{-\beta t}$ on the nonnegative spectrum of every $T_n$; bounded PVM integration is coordinatewise, hence $e^{-\beta H_f}=\bigoplus_ne^{-\beta T_n}$ and its one-particle restriction is $M_{e^{-\beta\varepsilon}}$ on $\mathfrak h$. [F2, F3, F4, F5, F8, step 2.1, step 3.1, step 4.1, algebra]

6.1 [Non-compactness of the one-particle multiplier] For $m\ge1$ put $c_m:=2^{-m-2}e_1\in\mathbb R^3$ and $\rho_m:=2^{-m-5}$, and let $\varphi_m$ be a bump as in [F7] with centre $c_m$ and radius $\rho_m$; the balls $B(c_m,\rho_m)$ are pairwise disjoint and contained in $\{|k|\le1/2\}$. Define $g_m:=\Pi\varphi_me_3\in\mathfrak h$; on $B(c_m,\rho_m)$ one has $\Pi(k)e_3=e_3-(k_3/|k|^2)k$ with norm $\sqrt{k_1^2+k_2^2}/|k|\ge|k_1|/|k|\ge(1-\tfrac18)/(1+\tfrac18)>1/2$, so $\|g_m\|\ge\frac12\|\varphi_m\|_2>0$; the $g_m$ have pairwise disjoint supports and hence are pairwise orthogonal. Put $f_m:=g_m/\|g_m\|$; then $(f_m)$ is orthonormal and $|e^{-\beta\varepsilon(k)}|\ge e^{-\beta\alpha}$ on every $B(c_m,\rho_m)$ (since $|k|\le1$ there), so $\|M_{e^{-\beta\varepsilon}}f_m\|_2\ge e^{-\beta\alpha}$ and $\|M_{e^{-\beta\varepsilon}}f_m-M_{e^{-\beta\varepsilon}}f_{m'}\|_2^2=\|Mf_m\|_2^2+\|Mf_{m'}\|_2^2\ge2e^{-2\beta\alpha}$ for $m\ne m'$. The bounded (indeed orthonormal) sequence $(f_m)$ therefore has no subsequence with norm-convergent images, so $M_{e^{-\beta\varepsilon}}$ is not compact by [F6]. [F6, F7, step 5.1, algebra]

7.1 [Non-compactness and non-trace-class of $e^{-\beta H_f}$] Suppose $e^{-\beta H_f}$ were compact. The one-particle sector $\operatorname{ran}\Pi_1$ is a closed subspace invariant under $e^{-\beta H_f}$ (by step 4.1 and [F5]); if $(x_m)$ is a bounded sequence in it, compactness in $F(\mathfrak h)$ yields a norm-convergent subsequence of $(e^{-\beta H_f}x_m)$, whose limit lies again in the closed invariant subspace; hence the restriction is compact. By step 5.1 the restriction is $M_{e^{-\beta\varepsilon}}$, contradicting step 6.1. Therefore $e^{-\beta H_f}$ is not compact; since every trace-class operator is compact ([[def-trace-class-operator]]), it is not trace class. This proves (d). [F6, step 4.1, step 5.1, step 6.1, algebra]

8.1 [Conclusion and scope] Step 2.1 proves (a), step 3.1 proves (b), step 4.1 proves (c), and steps 5.1, 6.1 and 7.1 prove (d). The closing paragraphs of the statement record that the physical photon identification and any thermal interpretation are separate model assumptions, not asserted here. [step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, step 7.1, algebra] ∎

