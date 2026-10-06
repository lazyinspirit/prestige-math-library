---
id: thm-global-h-two-dirichlet-regularity
kind: theorem
title: "Global $H^2$ Dirichlet regularity"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
deps: [lem-finite-boundary-and-interior-partition-glues-local-h-two-estimates, lem-tangential-h-two-estimate-near-a-flat-dirichlet-boundary, lem-normal-second-derivative-recovered-from-the-elliptic-equation, thm-interior-h-two-regularity-for-divergence-form-equations, lem-weak-divergence-form-equations-are-invariant-under-c-two-boundary-charts, lem-c-two-boundary-flattening-transforms-uniform-ellipticity, def-weak-dirichlet-solution-for-a-divergence-form-operator, def-bounded-c-k-domain-and-boundary-charts, def-uniformly-elliptic-divergence-form-operator, def-countable-choice, thm-young-inequality-real-exponents]
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 4.12, Theorem 4.30, printed pp. 114-116 (read in full)"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 5, Section 5.2, Theorem 5.10 and proof sketch, printed pp. 112-113 (read in full)"
---

## Statement

Assume Countable Choice. Let $\Omega\subset\mathbb R^n$ be a bounded $C^2$
domain, $n\ge2$, $\mathbb K\in\{\mathbb R,\mathbb C\}$, let $L,a$ be as in
[[def-uniformly-elliptic-divergence-form-operator]] with ellipticity
constant $\theta$, bounds $M_a,M_b,M_c$ and $a^{ij}\in W^{1,\infty}(\Omega)$,
$b^i,c\in L^\infty(\Omega)$, and let $f\in L^2(\Omega)$. If
$u\in H^1_0(\Omega)$ is a weak solution of $Lu=f$ with zero boundary values
([[def-weak-dirichlet-solution-for-a-divergence-form-operator]]), then
$u\in H^2(\Omega)$ and there is
$C=C(n,\Omega,\theta,M_a,M_b,M_c,\|Da^{ij}\|_\infty)$ with
$$\|u\|_{H^2(\Omega)}\le C\big(\|f\|_{L^2(\Omega)}+\|u\|_{L^2(\Omega)}\big).$$
The $L^2$ norm of $u$ on the right cannot be deleted without a hypothesis
excluding the homogeneous kernel, as the companion counterexample shows; the
theorem is stated for zero Dirichlet data, and nonzero compatible boundary
data are handled by an $H^2$ lifting, with an $L^2$ residual forcing,
before the theorem is applied.

## Facts & Assumptions

**Given:** Countable Choice; the bounded $C^2$ domain and its finite $C^2$ boundary atlas; the coefficient package; the datum $f\in L^2(\Omega)$; and the zero-trace weak solution $u\in H^1_0(\Omega)$.

[F1] Weak Dirichlet solution: $a(u,v)=\int_\Omega f\overline v\,dx$ for every $v\in H^1_0(\Omega)$, and $u\in H^1_0(\Omega)$ is the closure of the $C_c^\infty(\Omega)$ classes in $H^1$. ([[def-weak-dirichlet-solution-for-a-divergence-form-operator]])

[F2] Local interior regularity with localization. If $v$ solves the divergence-form equation with $L^2$ datum $g$ on a neighbourhood of $U_1$, the interior $H^2$ theorem bounds $\|v\|_{H^2(U_0)}$ by $C(\|g\|_{L^2(U_1)}+\|v\|_{L^2(U_1)})$ for $U_0\Subset U_1$. For a cutoff $\zeta\in C_c^\infty(U_1)$, the product $v=\zeta u$ satisfies such an equation with datum
$$g_\zeta=\zeta f-(D_i\zeta)a^{ij}D_ju-D_i(a^{ij}uD_j\zeta)+b^iuD_i\zeta,$$
whose $L^2$ norm is bounded by $C_\zeta(\|f\|_{L^2(U_1)}+\|Du\|_{L^2(U_1)}+\|u\|_{L^2(U_1)})$ because $a^{ij}\in W^{1,\infty}$ and $b,c\in L^\infty$ ([[thm-interior-h-two-regularity-for-divergence-form-equations]], [[def-uniformly-elliptic-divergence-form-operator]]).

[F3] Boundary-patch reduction. For each compactly supported boundary localization $\zeta u$, choose an ambient $C^2$ chart with $\Phi(W\cap\Omega)=V\cap H$. On the compact chart support, $D\Phi,D\psi,D^2\Phi$ and the Jacobians are bounded; the chart lemma preserves the weak equation and zero trace, while the flattening lemma gives an accretive $W^{1,\infty}$ principal matrix with a positive ellipticity constant. The transformed lower-order coefficients are bounded and the transformed localized datum is in $L^2$, with its norm controlled by $\|f\|_2+\|Du\|_2+\|u\|_2$. Extend the transformed principal matrix to all of $H$ by $\chi\widetilde A+(1-\chi)\theta_0 I$, where $\chi$ is a smooth ambient cutoff equal to one on the support and $\theta_0>0$ is the transformed ellipticity constant; extend lower-order coefficients and the datum by multiplication by $\chi$. This preserves uniform ellipticity, the $W^{1,\infty}$ principal bounds, and the equation for the zero-extended localized solution. After translation and dilation, choose the partition support inside the estimated half-ball $B_{1/2}\cap H$ while the extended solution is supported in $B_1\cap\overline H$. The tangential estimate bounds all tangential second derivatives there; the interior theorem supplies $H^2_{\rm loc}(H)$ and the normal-recovery lemma, using $\operatorname{Re}\widetilde a^{nn}\ge\theta_0$, bounds the remaining derivative. The compact chart bounds transport the resulting $H^2$ estimate back to $\zeta u$. ([[lem-weak-divergence-form-equations-are-invariant-under-c-two-boundary-charts]], [[lem-c-two-boundary-flattening-transforms-uniform-ellipticity]], [[lem-tangential-h-two-estimate-near-a-flat-dirichlet-boundary]], [[lem-normal-second-derivative-recovered-from-the-elliptic-equation]], [[thm-interior-h-two-regularity-for-divergence-form-equations]], [[def-bounded-c-k-domain-and-boundary-charts]])

[F4] Gluing: the finite partition lemma assembles the interior and boundary local bounds into the global bound. ([[lem-finite-boundary-and-interior-partition-glues-local-h-two-estimates]])

[F5] Global energy bound: testing the zero-trace equation with $u\in H^1_0(\Omega)$ and taking real parts gives
$$\theta\|Du\|_{L^2(\Omega)}^2\le\|f\|_{L^2(\Omega)}\|u\|_{L^2(\Omega)}+\sqrt n\,M_b\|Du\|_{L^2(\Omega)}\|u\|_{L^2(\Omega)}+M_c\|u\|_{L^2(\Omega)}^2.$$
Young's inequality absorbs the gradient product and yields $\|Du\|_{L^2(\Omega)}\le C(\|f\|_{L^2(\Omega)}+\|u\|_{L^2(\Omega)})$ with $C=C(n,\theta,M_b,M_c)$ ([[def-weak-dirichlet-solution-for-a-divergence-form-operator]], [[def-uniformly-elliptic-divergence-form-operator]], [[thm-young-inequality-real-exponents]]).

## Proof

1.1 Setup. Since $\Omega$ is a bounded $C^2$ domain, [F3] supplies a finite atlas of boundary charts, and $\partial\Omega$ is covered by finitely many chart neighbourhoods; fix a finite cover of $\overline\Omega$ by an interior set $U_0\Subset\Omega$ and these chart neighbourhoods, as in the gluing lemma. [F3, F4]

1.2 Global energy estimate. Since $u\in H^1_0(\Omega)$, use $u$ as a test in the Dirichlet equation and take real parts. The estimate of [F5] gives $$\|Du\|_{L^2(\Omega)}\le C(\|f\|_{L^2(\Omega)}+\|u\|_{L^2(\Omega)}).$$ This supplies the global $H^1$ control needed by each localization. [F1, F5]

1.3 Interior local bounds. On the interior member of the finite cover choose nested sets $U_0\Subset U_1\Subset\Omega$ and $\zeta_0\in C_c^\infty(U_1)$ with $\zeta_0=1$ on $U_0$. By [F2], $\zeta_0u$ has an $L^2$ right-hand side with norm bounded by $C(\|f\|_{L^2(\Omega)}+\|Du\|_{L^2(\Omega)}+\|u\|_{L^2(\Omega)})$. Applying the interior $H^2$ estimate on a slightly smaller set and then using [F5] gives the required $H^2$ bound for $u$ on $U_0$. [F2, F5]

2.1 Boundary bounds and gluing. Subdivide the finite boundary atlas if needed so that each partition support fits inside the inner half-ball of its chart after scaling, and choose a larger chart cutoff equal to one near that support. The construction of [F3] gives an $H^2$ bound for every localized boundary piece; its cutoff commutators are controlled by the global energy estimate [F5]. The interior pieces are controlled by step 1.3. The finite partition lemma [F4] then assembles all pieces into $u\in H^2(\Omega)$ with $$\|u\|_{H^2(\Omega)}\le C(\|f\|_{L^2(\Omega)}+\|u\|_{L^2(\Omega)}),$$ where $C$ depends only on $n,\Omega,\theta$ and the coefficient bounds, including $\|Da^{ij}\|_\infty$. [F2, F3, F4, F5, step 1.3]

3.1 Conclusion. The zero-trace Dirichlet solution lies in $H^2(\Omega)$ with the displayed estimate; the $L^2$ term of $u$ is retained because the homogeneous problem may have a nontrivial kernel, as the companion counterexample records, and compatible nonzero boundary data enter only after a trace lifting to the zero-trace problem. [step 2.1] ∎


## Source notes

Hunter's Theorem 4.30 (printed pp. 114-116) proves the global $H^2$ estimate by flattening the boundary and reducing to the half-space tangential estimate plus the recovery of the normal derivative; Laugesen's Theorem 5.10 (printed pp. 112-113) gives the same result. The theorem keeps the $L^2$ term of $u$ on the right, which is removed only under the injectivity hypothesis in the companion corollary.
