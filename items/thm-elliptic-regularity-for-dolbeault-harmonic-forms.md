---
id: thm-elliptic-regularity-for-dolbeault-harmonic-forms
kind: theorem
title: "Elliptic regularity for Dolbeault harmonic forms"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-hilbert-orthogonal-projection
  - def-hilbert-space
  - def-hk-and-hk-zero-notation
  - def-local-weak-solution-for-a-divergence-form-operator
  - def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface
  - def-orthogonality-and-orthogonal-complement
  - def-sobolev-space-wkp-and-its-norm
  - def-uniformly-elliptic-divergence-form-operator
  - def-weak-derivative-of-a-locally-integrable-function
  - cor-smooth-data-give-smooth-interior-solutions
  - lem-dbar-adjoint-and-dolbeault-laplacian-local-formulas
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-garding-estimate-for-the-dolbeault-laplacian-on-a-compact-riemann-surface
  - thm-interior-h-k-plus-two-elliptic-regularity
  - thm-orthogonal-decomposition-by-a-closed-subspace
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014)"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "Ch. 4 §4.11, Theorem 4.28 and Corollary 4.29, printed p. 114: higher interior Sobolev regularity and smoothness for smooth coefficients and data. Theorem 4.28 refers to [9] for its detailed proof; this item uses the library's fully proved interior theorem and smooth-data corollary."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08

---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Full AC is used through the Sobolev and smooth-data regularity interfaces; the local interior theorem and Hilbert projection interface use its countable instances ([[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]). Let $X$ be a nonempty compact Riemann surface, let $E\to X$ be a holomorphic line bundle with Hermitian metric $h$, let $g$ be a compatible Riemannian metric, and use $\bar D$, $\bar D^*$, $\Delta''$, and the Hilbert spaces $L^2_q$ from [[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]]. Write $\Delta''_0=\bar D^*\bar D$, $\Delta''_1=\bar D\bar D^*$, and $\mathcal H^{0,q}(E)=\ker\Delta''_q$. On an open set in $X$, $H^k_{\rm loc}$ means that the coefficient in every holomorphic chart and frame is locally in the Euclidean $H^k=W^{k,2}$ space ([[def-sobolev-space-wkp-and-its-norm]], [[def-hk-and-hk-zero-notation]]). For each relatively compact open $U\Subset\Omega$, the norms $H^k(U)$ are the finite chart/frame Sobolev norms; the constants may depend on this fixed finite cover.

Distributionally means that, in every holomorphic chart and frame, the scalar local differential expression for $\Delta''_q u$ equals the local coefficient of $f$ as a distribution ([[def-weak-derivative-of-a-locally-integrable-function]]).

1. **Local gain.** Let $\Omega\subseteq X$ be open, let $q\in\{0,1\}$, and let $u\in H^1_{\rm loc}(\Omega,\Lambda^{0,q}T^*X\otimes E)$ satisfy $\Delta''_q u=f$ distributionally, with $f\in H^k_{\rm loc}(\Omega,\Lambda^{0,q}T^*X\otimes E)$ for an integer $k\ge0$. Then $u\in H^{k+2}_{\rm loc}$. For open sets $\Omega'\Subset\Omega''\Subset\Omega$,
$$\|u\|_{H^{k+2}(\Omega')}\le C\bigl(\|f\|_{H^k(\Omega'')}+\|u\|_{L^2(\Omega'')}\bigr),$$
where $C$ may depend on $k$, the nested sets, the fixed local norms, and the metrics.

2. **Harmonic forms.** Every $u\in\mathcal H^{0,q}(E)$ is smooth and satisfies $\bar D u=0$ if $q=0$, or $\bar D^*u=0$ if $q=1$. Conversely, a smooth form in degree $q$ that satisfies the corresponding first-order equation belongs to $\mathcal H^{0,q}(E)$. For a total form $u=u_0+u_1$,
$$u\in\ker\Delta''\quad\Longleftrightarrow\quad \bar D u_0=0\text{ and }\bar D^*u_1=0.$$

3. **Smooth representatives and projection.**
$$\operatorname{im}(\bar D)\cap C^\infty(X,\Lambda^{0,1}T^*X\otimes E)=\bar\partial_E\bigl(C^\infty(X,E)\bigr).$$
The Hilbert orthogonal projection $P_{\mathcal H}:L^2_0\oplus L^2_1\to\ker\Delta''$ also maps smooth total forms to smooth total forms.

## Facts & Assumptions

**Given:** The compact Riemann surface, supplied metrics, the maximal Dolbeault complex and its self-adjoint nonnegative Laplacian, and full AC.

[F1] The spaces $L^2_0,L^2_1$ are Hilbert spaces; $\bar D$ and $\bar D^*$ are closed, densely defined operators; $\Delta''$ is self-adjoint and nonnegative on its block-composition domain; and
$$\langle\Delta''(u_0,u_1),(u_0,u_1)\rangle=\|\bar D u_0\|^2+\|\bar D^*u_1\|^2,$$
with $\ker\Delta''=(\ker\bar D)\oplus(\ker\bar D^*)$ ([[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]]).

[F2] In a holomorphic chart and frame, the two scalar blocks have smooth coefficients and principal part $-\frac{1}{2\rho}(\partial_x^2+\partial_y^2)$; their full formulas are
$$\Delta''_0 f=-\frac{2}{\rho\psi}\partial_z(\psi\partial_{\bar z}f),\qquad \Delta''_1(a\,d\bar z\otimes e)=-2\partial_{\bar z}\bigl((\rho\psi)^{-1}\partial_z(\psi a)\bigr)d\bar z\otimes e.$$
Smooth degree-zero forms lie in $\operatorname{dom}\bar D$, and smooth degree-one forms lie in $\operatorname{dom}\bar D^*$ ([[lem-dbar-adjoint-and-dolbeault-laplacian-local-formulas]]).

[F3] The first-order graph domain $\mathcal V=\operatorname{dom}\bar D\oplus\operatorname{dom}\bar D^*$ equals the finite-chart $H^1$ space with equivalent norms; smooth forms are dense in that graph domain ([[thm-garding-estimate-for-the-dolbeault-laplacian-on-a-compact-riemann-surface]]).

[F4] A divergence-form operator with smooth coefficients is uniformly elliptic on each relatively compact chart patch when its Hermitian principal matrix has a positive lower bound ([[def-uniformly-elliptic-divergence-form-operator]]).

[F5] For such an operator with $a^{ij}\in W^{k+1,\infty}_{\rm loc}$ and lower coefficients in $W^{k,\infty}_{\rm loc}$, a local weak $H^1$ solution with datum in $H^k_{\rm loc}$ lies in $H^{k+2}_{\rm loc}$ and satisfies the nested-domain estimate ([[thm-interior-h-k-plus-two-elliptic-regularity]]).

[F6] With smooth coefficients and smooth datum, every local weak $H^1$ solution has a smooth representative on the open set ([[cor-smooth-data-give-smooth-interior-solutions]]).

[F7] The spaces $H^k$ are the classes with $L^2$ weak derivatives through order $k$, and the local weak derivative is defined by testing against $C_c^\infty$ functions ([[def-sobolev-space-wkp-and-its-norm]], [[def-hk-and-hk-zero-notation]], [[def-weak-derivative-of-a-locally-integrable-function]]).

[F8] A closed linear subspace of a Hilbert space has a unique orthogonal decomposition; its subspace component is the Hilbert orthogonal projection ([[def-hilbert-space]], [[def-orthogonality-and-orthogonal-complement]], [[thm-orthogonal-decomposition-by-a-closed-subspace]], [[def-hilbert-orthogonal-projection]]).

[F9] Full AC is used through the Sobolev localization of item 5 and the smooth-data corollary; it supplies the Countable Choice assumed by the local interior theorem and orthogonal projection theorem ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F10] A local weak solution is an $H^1$ coefficient satisfying the sesquilinear divergence-form identity against every compactly supported smooth test ([[def-local-weak-solution-for-a-divergence-form-operator]]).

## Proof

**Proof technique:** Reduce both Dolbeault Laplacian blocks to scalar uniformly elliptic divergence-form equations, then apply the local regularity and smooth-data suppliers.

1.1 In a holomorphic chart $z=x+iy$ and frame $e$ with $g=\rho(dx^2+dy^2)$ and $h(e,e)=\psi>0$, [F2] shows that the principal part of either block is $-\frac{1}{2\rho}(\partial_x^2+\partial_y^2)$. Set $a^{ij}=(2\rho)^{-1}\delta_{ij}$; moving the derivatives of the smooth weights $\rho,\psi$ into the first- and zero-order coefficients writes each block as $-\partial_i(a^{ij}\partial_j\cdot)+b^i\partial_i+c$. On every relatively compact chart patch, $\rho$ has positive minimum and all metric/frame coefficient derivatives are bounded, so this matrix is uniformly elliptic and all coefficients are smooth. [F2, F4, algebra]

1.2 If $u=u_0+u_1\in\ker\Delta''$, the energy identity [F1] is a sum of two nonnegative squared norms and equals zero, so $\bar D u_0=0$ and $\bar D^*u_1=0$. Conversely, if these two terms vanish, then their zero outputs lie in the opposite operator domains, so $u$ lies in the block domain of $\Delta''$ and $\Delta''u=0$. The same argument in each degree gives the stated degreewise characterization. [F1, algebra]

1.3 Let $v\in\operatorname{im}\bar D\cap C^\infty(X,\Lambda^{0,1}T^*X\otimes E)$ and choose $u\in\operatorname{dom}\bar D$ with $\bar Du=v$. By [F3], $u\in H^1$. The defining weak identity for $\bar D$ in [F1] says that the local coefficient derivative of $u$ is the corresponding $\bar\partial_E$ expression in distributions. Since $v$ is smooth, [F2] gives $v\in\operatorname{dom}\bar D^*$ with the stated smooth local formula for $\bar D^*v$; therefore $u\in\operatorname{dom}\Delta''_0$ and $\Delta''_0u=\bar D^*v$ is exactly the local scalar block equation in distributions. Integration by parts against compactly supported tests gives the local weak identity of [F10]. Apply the smooth-data corollary [F6] in each chart. Its smooth representatives agree on chart overlaps because they represent the same section $u$ almost everywhere and are continuous, so they glue to a global smooth section $\tilde u$. Weak differentiation depends only on the almost-everywhere class by [F7], hence $v=\bar\partial_E\tilde u$. Conversely, every smooth section belongs to $\operatorname{dom}\bar D$ and its Hilbert derivative is $\bar\partial_E$ by [F1, F2]. This proves the equality of smooth exact representatives. AC is used by [F6] as recorded in [F9]. [F1, F2, F3, F6, F7, F9, F10]

2.1 If $\Delta''_q u=f$ distributionally, the local coefficient equation from step 1.1 holds against every compactly supported smooth test. Integration by parts in the divergence term gives precisely the local weak identity of [F10]; the coefficients and the datum belong to its stated classes. Thus each local coefficient of $u$ is a local weak solution of a uniformly elliptic divergence-form equation. [F2, F4, F7, F10, step 1.1]

2.2 A harmonic component belongs to $\mathcal V$ by the block domain in [F1], and hence to $H^1$ by [F3]. Its local equation has smooth coefficients and smooth datum $f=0$ by step 1.1; the local weak-solution definition [F10] applies, and [F6] gives a smooth representative in each chart. These representatives agree on overlaps because they represent the same global $L^2$ form almost everywhere and are smooth, so they give a global smooth representative. Conversely, [F1, F2] put every smooth degree-zero form in $\operatorname{dom}\bar D$ and every smooth degree-one form in $\operatorname{dom}\bar D^*$. If its corresponding first-order derivative vanishes, the zero output lies in the other operator's domain, so step 1.2 puts the form in the Hilbert kernel. AC is used by [F6] as recorded in [F9]. [F1, F2, F3, F6, F9, F10, step 1.1, step 1.2]

3.1 Fix $k\ge0$ and $\Omega'\Subset\Omega''\Subset\Omega$. Cover $\overline{\Omega'}$ by finitely many chart patches $U'_j$ and choose larger chart patches $U''_j$ with $\overline{U'_j}\subset U''_j\Subset\Omega''$; choose domains compactly contained in $\Omega$ that contain each $\overline{U''_j}$. The local $H^1$ hypothesis and equation restrict to those domains by [F7, F10]. Apply [F5] with the smooth coefficients from step 1.1 on each nested chart domain. Summing the finite estimates, with the smooth metric and frame weights bounded above and below on the compact supports, gives the stated $H^{k+2}(\Omega')$ estimate and local regularity. AC supplies the countable-choice hypothesis of [F5] by [F9]. [F4, F5, F7, F9, F10, step 1.1, step 2.1, algebra]

3.2 The harmonic space $\mathcal H=\ker\Delta''$ is closed: if $h_n\in\mathcal H$ and $h_n\to h$ in $L^2$, then $\Delta''h_n=0\to0$, and closedness of the self-adjoint operator [F1] gives $h\in\operatorname{dom}\Delta''$ with $\Delta''h=0$. Thus [F8] defines the orthogonal projection $P_{\mathcal H}$. For any smooth total form $w$, $P_{\mathcal H}w\in\mathcal H$, and step 2.2 shows that every element of $\mathcal H$ is smooth. Therefore $P_{\mathcal H}$ maps smooth forms to smooth forms, without using the later Hodge decomposition. AC supplies the projection theorem's countable-choice assumption by [F9]. [F1, F8, F9, step 2.2]

4.1 Steps 1.1 and 2.1 establish the local scalar equations and weak formulation; step 3.1 proves the nested $H^{k+2}$ gain; steps 1.2 and 2.2 prove the harmonic characterization and smoothness; and steps 1.3 and 3.2 prove smooth exact preimages and smoothness of the harmonic projection. Full AC is used through [F6], with AC$_\omega$ for [F5] and [F8], as stated in [F9]. [F5, F6, F8, F9, step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, step 3.1, step 3.2] ∎

## Source notes

Hunter's Theorem 4.28 (printed p. 114) states higher interior regularity for uniformly elliptic divergence-form equations and explicitly refers to [9] for a detailed proof; Corollary 4.29 bootstraps smooth coefficients and data through Sobolev embedding to smoothness. This item uses the library's fully proved nested-domain theorem and smooth-data corollary for the bundle-valued equations. The formal Dolbeault adjoint and both block formulas are supplied by the preceding local-formula item, not inferred from a flat-connection Hodge theorem.
