---
id: lem-finite-boundary-and-interior-partition-glues-local-h-two-estimates
kind: lemma
title: "A finite partition glues the local interior and boundary $H^2$ estimates"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps: [thm-interior-h-two-regularity-for-divergence-form-equations, lem-tangential-h-two-estimate-near-a-flat-dirichlet-boundary, lem-normal-second-derivative-recovered-from-the-elliptic-equation, lem-localisation-identity-for-a-divergence-form-weak-solution, lem-weak-divergence-form-equations-are-invariant-under-c-two-boundary-charts, lem-c-two-boundary-flattening-transforms-uniform-ellipticity, def-bounded-c-k-domain-and-boundary-charts, lem-finite-ambient-partitions-for-euclidean-boundary-integration, lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound, def-local-weak-solution-for-a-divergence-form-operator, def-uniformly-elliptic-divergence-form-operator, def-countable-choice]
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
      locator: "Section 4.12, partition-of-unity reduction in the proof of Theorem 4.30, printed p. 115 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 9, partition of unity and flattening, printed pp. 88-90 (read in full)"
---

## Statement

Assume Countable Choice. Let $\Omega\subset\mathbb R^n$ be a bounded $C^2$
domain ([[def-bounded-c-k-domain-and-boundary-charts]]), $n\ge2$, let $L,a$
be as in [[def-uniformly-elliptic-divergence-form-operator]] with
$a^{ij}\in W^{1,\infty}(\Omega)$, $b^i,c\in L^\infty(\Omega)$, and let
$f\in L^2(\Omega)$. Suppose $u\in H^1(\Omega)$ is a local weak solution of
$Lu=f$ on $\Omega$
([[def-local-weak-solution-for-a-divergence-form-operator]]) and fix a finite ambient smooth partition of unity near $\overline\Omega$
whose pieces are supported in interior patches compactly contained in
$\Omega$ or in compact ambient boundary-chart patches $(W_\ell,\Phi_\ell)$.
Assume every boundary piece has the quantitative bound
$$\|\widehat{\zeta_\ell u}\|_{H^2(Q_\ell)}\le C_\ell(\|f\|_{L^2(\Omega)}+\|u\|_{L^2(\Omega)}),$$
where the flattened half-patch $Q_\ell$ contains its entire support, and the
chart/inverse derivatives through order two and Jacobians have fixed uniform
bounds there. These are hypotheses, rather than consequences of an
unspecified boundary condition on $u$. Then
$u\in H^2(\Omega)$ and there is $C$, depending only on
$n,\theta$, the coefficient bounds, the fixed partition/chart bounds
and the constants $C_\ell$, with
$$\|u\|_{H^2(\Omega)}\le C\big(\|f\|_{L^2(\Omega)}+\|u\|_{L^2(\Omega)}\big).$$
The proof uses a finite smooth partition of unity subordinate to the cover,
the localisation identities of
[[lem-localisation-identity-for-a-divergence-form-weak-solution]], and the
finiteness of the cover; no choice of a cover beyond the finite chart
neighbourhoods supplied by the definition is used.

## Facts & Assumptions

**Given:** Countable Choice; the bounded $C^2$ domain and its finite boundary atlas; the coefficient package; the solution $u$; and the stated local $H^2$ bounds on the interior set and the flattened localisations.

[F1] Localisation identity: for an ambient smooth cutoff $\zeta$ supported in a chart neighbourhood, the localized weak equation is
$$L(\zeta u)=\zeta f-(D_i\zeta)a^{ij}D_ju-D_i(a^{ij}uD_j\zeta)+b^i(D_i\zeta)u.$$
Expanding the divergence gives an $L^2$ datum whose norm is bounded by $C(\zeta)(\|f\|_2+\|u\|_{H^1})$, since $a\in W^{1,\infty}$ and $b,c$ are bounded. This bound alone does not replace $\|u\|_{H^1}$ by $\|u\|_2$; that replacement must come from the assumed quantitative local bounds or, in a zero-trace application, a separate energy estimate.
([[def-local-weak-solution-for-a-divergence-form-operator]], [[lem-localisation-identity-for-a-divergence-form-weak-solution]])

[F2] A finite ambient smooth partition can be chosen subordinate to a finite cover of $\overline\Omega$ by an interior region and boundary chart neighbourhoods, with cutoffs supported in compactly contained ambient patches. The interior region may be enlarged inside $\Omega$ to cover the compact set remaining outside the boundary patches. ([[lem-finite-ambient-partitions-for-euclidean-boundary-integration]], [[lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound]], [[def-bounded-c-k-domain-and-boundary-charts]])

[F3] On every pair of interior balls $B_r(x)\Subset B_R(x)\Subset\Omega$, the interior $H^2$ theorem gives a bound for $u$ on $B_r(x)$ by $C(\|f\|_{L^2(B_R(x))}+\|u\|_{L^2(B_R(x))})$. On each boundary chart, the Statement assumes the corresponding quantitative $H^2$ bound for the flattened localization, obtained from the tangential and normal estimates. The constants depend on the fixed balls or chart, cutoffs and coefficient bounds; these are local estimates for the gluing step, not consequences of a boundary condition on a general local weak solution. ([[thm-interior-h-two-regularity-for-divergence-form-equations]], [[lem-tangential-h-two-estimate-near-a-flat-dirichlet-boundary]], [[lem-normal-second-derivative-recovered-from-the-elliptic-equation]])

[F4] On compactly contained ambient $C^2$ chart patches, change of variables and the weak chain rule transport $H^2$ norms in both directions with uniform constants: second derivatives use only first and second chart derivatives and derivatives of the function through order two. The compact ambient bounds remain uniform on half-patches reaching the boundary. ([[lem-weak-divergence-form-equations-are-invariant-under-c-two-boundary-charts]], [[lem-c-two-boundary-flattening-transforms-uniform-ellipticity]], [[def-bounded-c-k-domain-and-boundary-charts]])

## Proof

1.1 Use the finite partition fixed in the Statement. Compactness and the graph definition permit such a partition: finitely many boundary patches cover $\partial\Omega$, their complement in $\overline\Omega$ is compact in $\Omega$, and finitely many interior balls cover it; [F2] supplies the subordinate ambient smooth functions. The boundary estimates assumed in the Statement concern these actual fixed pieces and their whole supports, so no new unestimated boundary localization is substituted. [F2, F3, given]

2.1 Localized equations. Each $\zeta_j u$ belongs to $H^1(\Omega)$ by the product rule and has the datum in [F1]. Ambient cutoffs are admissible even at boundary patches: their restrictions multiply the Sobolev class, and the distributional identity is tested on compact subsets of $\Omega$. The extra terms are bounded by $C_j(\|f\|_2+\|u\|_{H^1})$. The sharper $L^2$-based local estimates consumed below are precisely those assumed in [F3]; no zero-trace condition is inferred for a general $u\in H^1(\Omega)$. [F1, step 1.1]

3.1 For an interior piece, choose nested compactly interior open sets containing its support. The interior theorem in [F3] bounds $u$ in $H^2$ on the inner neighbourhood by $C(\|f\|_2+\|u\|_2)$. The smooth multiplier rule bounds the piece there; its cutoff support is compact in $\Omega$, so its weak derivatives extend by zero across the artificial edges inside $\Omega$. Each such piece therefore has the required $H^2(\Omega)$ bound. [F3, step 1.1, step 2.1]

3.2 Boundary pieces. Each assumed flattened $H^2$ estimate in [F3] holds on a half-patch containing the entire support of the corresponding cutoff. The compact ambient chart bounds and [F4] transport it back to $\|\zeta_\ell u\|_{H^2(\Omega\cap W_\ell)}\le C_\ell'(\|f\|_2+\|u\|_2)$. The cutoff vanishes near the artificial chart edges, so the local derivatives extend by zero inside $\Omega$ and give the same $H^2(\Omega)$ bound. No extension across the actual boundary of $\Omega$ is required. [F3, F4, step 1.1, step 2.1]

4.1 Summing. Since $u=\sum_{j=0}^m\zeta_ju$ almost everywhere and each piece belongs to $H^2(\Omega)$, linearity of weak derivatives gives $u\in H^2(\Omega)$ and $\|u\|_{H^2(\Omega)}\le\sum_j\|\zeta_ju\|_{H^2(\Omega)}\le C(\|f\|_2+\|u\|_2)$. The finite sum of local constants depends on the fixed atlas, cutoffs and coefficient data, as asserted. [step 3.1, step 3.2, algebra]

5.1 Conclusion. The given quantitative interior and boundary estimates glue to the displayed global estimate. The PDE estimates supply the local hypotheses in Dirichlet applications; the finite partition argument itself adds no boundary condition or additional estimate for the localized forcing. [step 4.1] ∎


## Source notes

Hunter's proof of Theorem 4.30 (printed p. 115) reduces the global statement to the half-space case by a partition of unity and a flattening of the boundary; Simon's Lecture 9 (printed pp. 88-90) performs the same reduction. The lemma records the reduction step separately so that the flat-boundary estimates can be consumed by the global Dirichlet theorem.
