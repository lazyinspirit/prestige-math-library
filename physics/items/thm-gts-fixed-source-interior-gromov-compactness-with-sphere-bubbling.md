---
id: thm-gts-fixed-source-interior-gromov-compactness-with-sphere-bubbling
kind: theorem
title: Zinger fixed-domain interior Gromov compactness
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
dependency_level: 7
axiom_strength: ZF + Countable Choice, inherited from the local compactness proof.
deps:
  - def-gts-stable-map-and-gromov-convergence
  - def-countable-choice
  - thm-countable-choice-interior-gromov-bubble-tree-compactness
  - lem-gts-positive-energy-gap-on-a-fixed-closed-domain
  - lem-countable-choice-genus-zero-riemann-surface-is-the-sphere
dependency_roles:
  def-gts-stable-map-and-gromov-convergence: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-countable-choice-interior-gromov-bubble-tree-compactness: mathematical-premise
  lem-gts-positive-energy-gap-on-a-fixed-closed-domain: mathematical-premise
  lem-countable-choice-genus-zero-riemann-surface-is-the-sphere: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Aleksey Zinger, Notes on J-Holomorphic Maps, arXiv:1706.00331v1
      url: https://arxiv.org/pdf/1706.00331v1
      locator: Definition 1.1 and Theorem 1.2; the complete local interior bubble-tree argument is supplied by the exact mathematical prerequisite below.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $(X,J)$ be a compact almost-complex manifold and let $g$ be any Riemannian metric on $X$. Fix a compact closed Riemann surface $(\Sigma,j)$ and any smooth $j$-compatible metric $h$. For a smooth map $u$, set $E_g(u)=\frac12\int_\Sigma |du|^2_{g,h}\,d\mathrm{vol}_h$; in real dimension two this energy is independent of the choice of $h$ in the conformal class. Let $u_i:\Sigma\to X$ be nonconstant $J$-holomorphic maps. If $\liminf_i E_g(u_i)<\infty$, then a subsequence converges in the stable-map and Gromov-convergence sense defined above to a stable $J$-holomorphic map of arithmetic genus $g(\Sigma)$. The smooth source complex structure is fixed throughout; all added components are interior sphere bubbles, and the component energies sum to the subsequential limit of $E_g(u_i)$.

## Statement references

[[def-gts-stable-map-and-gromov-convergence]]

[[thm-countable-choice-interior-gromov-bubble-tree-compactness]]

[[lem-gts-positive-energy-gap-on-a-fixed-closed-domain]]

## Facts & Assumptions

**Given:** Exactly the compact almost-complex target, arbitrary target metric, fixed closed conformal source, nonconstant maps and finite lower-limit energy hypothesis in the Statement. Countable Choice is the background axiom used by the mathematical compactness supplier.

[F1] Stable-map convergence means smooth component convergence away from matched nodes, the fixed-source sphere-tree description and no lost neck energy, followed by contraction of unstable constant components. For nonconstant components finite automorphism groups are part of the stated equivalent stability convention. [[def-gts-stable-map-and-gromov-convergence]]

[F2] For a fixed closed compact Riemann surface and compact Riemannian target, a uniformly energy-bounded sequence of solutions for smoothly convergent almost-complex coefficients has a subsequential smooth base limit and finitely many sphere trees, matching nodes, explicit rescalings, vanishing neck energy and diameter, and exact Dirichlet energy identity. Its local proof uses target-global epsilon regularity, finite-energy removability and soft rescaling, without a symplectic-area hypothesis. Every constant sphere in its forest has at least three nodes. [[thm-countable-choice-interior-gromov-bubble-tree-compactness]]

[F3] For the fixed source and target data, every nonconstant map has Dirichlet energy at least a positive $\hbar$. [[lem-gts-positive-energy-gap-on-a-fixed-closed-domain]]

[F4] A connected compact Riemann surface homeomorphic to the sphere admits a biholomorphism to $\mathbb{CP}^1$, and affine complex transformations in that global coordinate are actual automorphisms. [[lem-countable-choice-genus-zero-riemann-surface-is-the-sphere]]

[A1] Countable Choice is inherited from [F2] and [F3]. [[def-countable-choice]]

## Proof
1.1 Finite lower limit gives a subsequence with uniformly bounded energy and a finite limiting value $E_\infty$. By [F3], $E_\infty\ge\hbar>0$. The energy remains the same in every conformal chart of the fixed source, since in real dimension two the inverse conformal factor in the squared norm cancels the area-form factor. [F3, A1, given, algebra]

2.1 Apply [F2] with the constant coefficient sequence $J_i(z,x)=J(x)$ and the chosen target metric $g$. All its hypotheses hold: the source is the one fixed closed surface, the target is compact, the coefficients converge smoothly, and step 1.1 gives the uniform energy bound. Obtain the base solution on $\Sigma$ and the finite attached sphere forest, with matched nodal values, smooth local convergence, all relative rescalings and the exact energy identity. No tame symplectic form or comparison of area with energy is needed. [F2, A1, step 1.1]

3.1 If the base in step 2.1 is a constant genus-zero component with fewer than three attachment points, use [F4] to identify the genus-zero source $(\Sigma,j)$ biholomorphically with $\mathbb{CP}^1$. Here genus zero means the sphere homeomorphism type. In that global coordinate, choose an original concentration point as $0$, choose gradient-maximizing points $z_i\to0$ and scales $M_i^{-1}\to0$ as in the normalized interior rescaling construction inside [F2], and set $h_i(z)=z_i+z/M_i$. These are GLOBAL Möbius automorphisms of the original source. The gradient-maximizing (or Hofer-selected) rescaling in [F2] gives $|d(u_i\circ h_i)(0)|=1$ and a constant $C$ independent of $i$ bounding $|d(u_i\circ h_i)|$ on a fixed disk about zero. Its local higher-regularity estimates therefore give smooth convergence on a smaller fixed disk, with derivative norm one retained at zero. Retain that subsequence and reapply [F2] to the full maps $u_i\circ h_i$, whose energies are unchanged. The fixed-disk derivative bound excludes zero from the second extraction's concentration set, so its base has derivative norm one at zero and is nonconstant. No derivative bound on the whole global sphere is asserted. Thus the original base vertex in this second extraction is stable and survives stabilization. If the original base already was stable or nonconstant, use $h_i=\mathrm{id}$. A constant genus-one base must have an attached positive-energy tree by step 1.1, hence has at least one special point; a higher-genus constant base is already stable. [F1, F2, F4, step 1.1, step 2.1, construct, algebra]

4.1 Attach the forest to its specified points of the base. The connected dual graph is a tree attached to the original base vertex, so its arithmetic genus is $g(\Sigma)$. Total component energy is $E_\infty>0$, hence at least one component map is nonconstant. Contract any unstable constant genus-zero vertex: a valence-one vertex is deleted with its edge, and a valence-two vertex is deleted by joining its two neighbors at their corresponding attachment points. Those values agree because the contracted map was constant. Each operation preserves connectedness, the arithmetic genus and all energy. There are finitely many vertices, so this process terminates; a valence-zero constant component cannot be the whole remaining curve because a nonconstant component with positive energy remains. A constant genus-one base has at least one attached tree, since otherwise all energy would be zero; it is therefore stable. Constant higher-genus components are already stable. Thus [F1] identifies the result as a stable map of precisely the original genus. [F1, F2, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 The base-preserving extraction in step 3.1 supplies actual global source automorphisms. The remaining component maps and their rescalings retain the smooth convergence from [F2]. Removing finitely many constant unstable vertices only concatenates adjacent vanishing necks; all their energy and image diameters tend to zero and the target node values remain matched. It removes no positive component energy. Consequently the convergence after stabilization has exactly the component, node and no-neck properties of [F1], and the sum of its component energies remains $E_\infty$. This proves the entire original fixed-source metric-energy Statement. No varying-domain, boundary, strip-breaking, gluing or virtual-cycle assertion is deduced. [F1, F2, step 2.1, step 3.1, step 4.1, algebra] ∎

## Proof status

The fixed-source analytic implication is fully supplied by the exact local interior bubble-tree theorem and its proved epsilon-regularity/removability/rescaling prerequisites, together with the fixed-domain gap preventing a wholly unstable constant limit. The prerequisite is an existing root mathematics draft carrier with a complete local argument; neither its publication status nor independent acceptance is invented. Root must add its actual mathematical context before adopting this candidate. The public Statement is unchanged and its target metric remains arbitrary.
