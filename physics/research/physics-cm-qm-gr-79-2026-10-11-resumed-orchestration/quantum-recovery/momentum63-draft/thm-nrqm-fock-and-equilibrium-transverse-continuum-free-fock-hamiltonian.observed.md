---
id: thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian
aliases: [nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian]
kind: theorem
domain: mathematics
title: "Transverse continuum free Fock Hamiltonian"
status: draft
origin: pipeline
dependency_level: 5
deps: [thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction, lem-nrqm-fock-and-equilibrium-fock-sector-projections, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-permutation-sector-projections, lem-nrqm-composites-euclidean-l2-product-unitary, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, def-compact-linear-operator, thm-sequential-characterization-of-compact-operators, def-dependent-choice, def-trace-class-operator, thm-spectral-theorem-for-unbounded-self-adjoint-operators, def-projection-valued-measure, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, def-complex-lp-and-euclidean-test-function-conventions, def-l-p-space-as-a-quotient-by-null-functions, def-hilbert-orthogonal-projection, def-hilbert-space, def-bounded-linear-operator, def-operator-norm, def-countable-choice, def-axiom-of-choice]
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
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Section 1.2 pp. 5-6 and Section 1.4.2 pp. 9-10 (Fock space and second-quantized free Hamiltonians)"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
    - title: "S. Pratt, Lecture Notes on Quantum Mechanics (Michigan State University, PHY 851/852; retrieved via the Internet Archive snapshot of 2024-04-21), Chapter 9 Sections 9.1-9.3 pp. 135-138 (field operators, energy and radiation modes)"
      url: "http://web.archive.org/web/20240421090356/http://web.archive.org/web/20240421090356/https://web.pa.msu.edu/people/pratts/phy851/lectures/lectures_full.pdf"
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
$$H_f:=\bigoplus_{n\ge0}T_n,\qquad D(H_f):=\Bigl\{\psi\in F(\mathfrak h):\ \sum_n\|T_n\psi_n\|^2<\infty\Bigr\}.$$
Then:

(a) $\mathfrak h=\operatorname{ran}M_\Pi$ is a closed separable subspace of
$L^2(\mathbb R^3;\mathbb C^3)$, invariant under $M_\varepsilon$, and
$\varepsilon_{\mathfrak h}$ is a positive self-adjoint operator on
$\mathfrak h$ with $D(\varepsilon_{\mathfrak h})=\{f\in\mathfrak h:\varepsilon f\in\mathfrak h\}$
([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]],
[[def-hilbert-orthogonal-projection]]);

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

[F2] For a real measurable finite-valued function $a$ on a Euclidean space, the multiplier $M_a$ with domain $\{f:af\in L^2\}$ is self-adjoint; if $M_a$ commutes with a bounded orthogonal projection $Q$, then the restriction of $M_a$ to $\operatorname{ran}Q$ is self-adjoint with domain $\{f\in\operatorname{ran}Q:af\in\operatorname{ran}Q\}$ ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]).

[F3] $\mathfrak h^{\otimes n}$ is a closed subspace of $(L^2(\mathbb R^3;\mathbb C^3))^{\otimes n}$; the iterated Euclidean product unitary identifies it with a closed subspace of $L^2((\mathbb R^3)^n;(\mathbb C^3)^{\otimes n})$, under which the symmetric projection $P_+^{(n)}$ becomes the symmetrization of functions and the permutation unitaries act by permuting the arguments; a multiplier by a symmetric real function commutes with all permutation unitaries ([[lem-nrqm-composites-hilbert-tensor-construction]], [[lem-nrqm-composites-permutation-sector-projections]], [[lem-nrqm-composites-euclidean-l2-product-unitary]]).

[F4] Direct sums of self-adjoint operators are self-adjoint on
$\{\psi:\psi_n\in D(T_n),\ \sum_n\|T_n\psi_n\|^2<\infty\}$; the positivity passes to the direct sum ([[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]] (f)).

[F5] Spectral theorem and functional calculus: a self-adjoint operator $T$ has a unique projection-valued measure $E$ with $T=\int\lambda\,dE$; the direct sum $\bigoplus_nE_n$ of the projection-valued measures of the $T_n$ is the projection-valued measure of $\bigoplus_nT_n$, so $e^{-\beta H_f}=\bigoplus_ne^{-\beta T_n}$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-projection-valued-measure]], [[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]]).

[F6] Sequential characterization of compactness: a bounded operator $T$ is compact if and only if every bounded sequence has a subsequence whose images converge in norm; hence an orthonormal sequence whose images have pairwise distances bounded below by a positive constant obstructs compactness ([[thm-sequential-characterization-of-compact-operators]], [[def-compact-linear-operator]], [[def-dependent-choice]]).

[F7] Bump functions: for every $c\in\mathbb R^3$ and $\rho>0$ there is $\varphi\in C_c^\infty(\mathbb R^3)$ with $0\le\varphi\le1$, $\varphi=1$ on the ball of radius $\rho/2$ about $c$ and $\varphi=0$ outside the ball of radius $\rho$ about $c$ ([[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]], [[def-complex-lp-and-euclidean-test-function-conventions]]).




## Proof

1.1 [The transverse space] For $k\ne0$ the matrix $\Pi(k)$ is the orthogonal projection onto $\{v:k\cdot v=0\}$: it is symmetric, $\Pi(k)^2=\Pi(k)$ and $\Pi(k)v=v$ exactly for $k\cdot v=0$. Extending by $\Pi(0)=0$ gives a measurable, bounded, projection-valued function, so $M_\Pi$ is a bounded self-adjoint projection and $\mathfrak h=\operatorname{ran}M_\Pi$ is a closed subspace; it is separable because $L^2(\mathbb R^3;\mathbb C^3)$ is. Since $\varepsilon$ is radial, $M_\varepsilon M_\Pi=M_\Pi M_\varepsilon$, so $M_\varepsilon$ preserves $\mathfrak h$; by [F2] the restriction $\varepsilon_{\mathfrak h}$ is self-adjoint with domain $\{f\in\mathfrak h:\varepsilon f\in\mathfrak h\}$, and it is positive because $\varepsilon\ge0$. This proves (a). [F1, F2, algebra]

1.2 [Sector operators] Fix $n\ge1$. Under the identifications of [F3], the multiplier $M_{\varepsilon_n}$ on $(\mathfrak h)^{\otimes n}$ corresponds to multiplication by the real measurable finite-valued symmetric function $(k_1,\dots,k_n)\mapsto\sum_i\alpha|k_i|$, which is self-adjoint by [F2] and commutes with all permutation unitaries because $\varepsilon_n$ is symmetric; hence it preserves the closed subspace $\operatorname{ran}P_+^{(n)}$ and its restriction $T_n$ is self-adjoint with domain $\{\psi\in\operatorname{ran}P_+^{(n)}:\varepsilon_n\psi\in\operatorname{ran}P_+^{(n)}\}$ by [F2] (applied to the commuting pair). Since $\varepsilon_n\ge0$, $T_n\ge0$. This proves (b). [F2, F3, algebra]

2.1 [The free Fock Hamiltonian] By step 1.2 each $T_n$ is self-adjoint on its sector, so [F4] gives that $H_f=\bigoplus_nT_n$ is self-adjoint on the displayed domain and positive. Since each $T_n$ maps $\operatorname{ran}P_+^{(n)}$ into itself, $H_f$ commutes with every sector projection $\Pi_n$. This proves (c). [F4, step 1.2, algebra]

2.2 [Exponential and one-particle restriction] By [F5] the projection-valued measure of $H_f$ is the direct sum of those of the $T_n$, and $e^{-\beta H_f}=\bigoplus_ne^{-\beta T_n}$ is the direct sum of bounded operators with $\|e^{-\beta T_n}\|\le1$. Restricted to the one-particle sector, $T_1=\varepsilon_{\mathfrak h}$ and $e^{-\beta T_1}=M_{e^{-\beta\varepsilon}}$ by uniqueness of the functional calculus on the self-adjoint multiplier $\varepsilon_{\mathfrak h}$ ([F2], [F5]). [F5, step 1.1, step 1.2, algebra]

3.1 [Non-compactness of the one-particle multiplier] For $m\ge1$ put $c_m:=2^{-m-2}e_1\in\mathbb R^3$ and $\rho_m:=2^{-m-5}$, and let $\varphi_m$ be a bump as in [F7] with centre $c_m$ and radius $\rho_m$; the balls $B(c_m,\rho_m)$ are pairwise disjoint and contained in $\{|k|\le1/2\}$. Define $g_m:=\Pi\varphi_me_3\in\mathfrak h$; on $B(c_m,\rho_m)$ one has $\Pi(k)e_3=e_3-(k_3/|k|^2)k$ with norm $\sqrt{k_1^2+k_2^2}/|k|\ge|k_1|/|k|\ge(1-\tfrac18)/(1+\tfrac18)>1/2$, so $\|g_m\|\ge\frac12\|\varphi_m\|_2>0$; the $g_m$ have pairwise disjoint supports and hence are pairwise orthogonal. Put $f_m:=g_m/\|g_m\|$; then $(f_m)$ is orthonormal and $|e^{-\beta\varepsilon(k)}|\ge e^{-\beta\alpha}$ on every $B(c_m,\rho_m)$ (since $|k|\le1$ there), so $\|M_{e^{-\beta\varepsilon}}f_m\|_2\ge e^{-\beta\alpha}$ and $\|M_{e^{-\beta\varepsilon}}f_m-M_{e^{-\beta\varepsilon}}f_{m'}\|_2^2=\|Mf_m\|_2^2+\|Mf_{m'}\|_2^2\ge2e^{-2\beta\alpha}$ for $m\ne m'$. The bounded (indeed orthonormal) sequence $(f_m)$ therefore has no subsequence with norm-convergent images, so $M_{e^{-\beta\varepsilon}}$ is not compact by [F6]. [F6, F7, step 2.2, algebra]

4.1 [Non-compactness and non-trace-class of $e^{-\beta H_f}$] Suppose $e^{-\beta H_f}$ were compact. The one-particle sector $\operatorname{ran}\Pi_1$ is a closed subspace invariant under $e^{-\beta H_f}$ (by step 2.1 and [F5]); if $(x_m)$ is a bounded sequence in it, compactness in $F(\mathfrak h)$ yields a norm-convergent subsequence of $(e^{-\beta H_f}x_m)$, whose limit lies again in the closed invariant subspace; hence the restriction is compact. By step 2.2 the restriction is $M_{e^{-\beta\varepsilon}}$, contradicting step 3.1. Therefore $e^{-\beta H_f}$ is not compact; since every trace-class operator is compact ([[def-trace-class-operator]]), it is not trace class. This proves (d). [F6, step 2.1, step 2.2, step 3.1, algebra]

5.1 [Conclusion and scope] Step 1.1 proves (a), step 1.2 proves (b), step 2.1 proves (c), and steps 2.2, 3.1 and 4.1 prove (d). The closing paragraphs of the statement record that the physical photon identification and any thermal interpretation are separate model assumptions, not asserted here. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 4.1, algebra] ∎
