---
id: def-gts-character-diagram-geometric-input
kind: definition
title: Character-diagram geometric input conditions
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 4
axiom_strength: ZF + full AC for smooth-to-ordinary integral cohomology comparison
deps:
  - def-gts-smooth-integral-singular-chain-complex
  - def-singular-cohomology-with-coefficients
  - def-gts-cheegersimons-differential-character
  - def-gts-smooth-deligne-cohomology-model
  - lem-gts-smooth-integral-chains-compute-singular-homology
  - lem-singular-uct-extension-from-cycle-projections
  - lem-gts-good-cover-integral-cech-singular-comparison
  - def-gts-good-cover-singular-cech-comparison-input
  - def-axiom-of-choice
dependency_roles:
  def-gts-smooth-integral-singular-chain-complex: mathematical-premise
  def-singular-cohomology-with-coefficients: mathematical-premise
  def-gts-cheegersimons-differential-character: mathematical-premise
  def-gts-smooth-deligne-cohomology-model: mathematical-premise
  lem-gts-smooth-integral-chains-compute-singular-homology: mathematical-premise
  lem-singular-uct-extension-from-cycle-projections: mathematical-premise
  lem-gts-good-cover-integral-cech-singular-comparison: mathematical-premise
  def-gts-good-cover-singular-cech-comparison-input: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: James Simons and Dennis Sullivan, Axiomatic Characterization of Ordinary Differential Cohomology
      url: https://arxiv.org/pdf/math/0701077v1
      locator: Section 2, Facts 2.1–2.3, PDF pp. 11–15; Section 1, Fact 1.1, PDF pp. 7–8.
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $\mathcal C_{\mathrm{geo}}$ be the full subcategory of finite-dimensional Hausdorff second-countable smooth manifolds whose objects satisfy the following conditions in the stated smooth-singular convention. First, for every integer $r\ge0$, every finite smooth singular $r$-chain $c$, and every open neighborhood $V$ of its compact image, there is an open $U$ with $|c|\subseteq U\subseteq V$ and $H^j(U;\mathbb Z)=0$ for every $j>r$. Second, for every integer $r\ge1$, every smooth singular $(r-1)$-cycle is homologous in each neighborhood of its image to the fundamental cycle of an oriented piecewise-smooth embedded $(r-1)$-pseudomanifold; if the cycle is null-homologous in $M$, such a representative bounds inside a neighborhood whose degree-$r$ integral cohomology vanishes. Here a piecewise-smooth pseudomanifold is a finite oriented union of smooth singular simplices for which every codimension-one face occurs twice with opposite induced orientations.

Third, fix $k\ge1$, a good cover $\mathcal U$, and a degree-$k$ class $x\in\widehat H^k_{\mathrm{Del}}(M;\mathbb Z)$ represented by a total cocycle in the Cech complex of the Deligne model from [[def-gts-smooth-deligne-cohomology-model]]. Write $R(x)\in\Omega^k_{\mathrm{cl}}(M)$ for its curvature projection and $c_{\mathrm{Del}}(x)\in\check H^k(\mathcal U;\underline{\mathbb Z})$ for the Cech class of its integer characteristic projection, using the model's exponential-sequence connecting map. For a smooth integral singular chain $c$, put $\operatorname{Int}(R(x))(c)=\int_cR(x)$; its cochain differential is positive precomposition with the boundary. The local input supplies, for each smooth integral $(k-1)$-cycle $z$, a neighborhood $U$ of $|z|$ with $H^k(U;\mathbb Z)=0$ and a form class $[\eta]\in\Omega^{k-1}(U)/\Omega^{k-1}_{\mathbb Z}(U)$ whose Deligne form-action image is $x|_U$, and requires that the formula $h_x(z)=\int_z\eta\pmod{\mathbb Z}$ be independent of all such choices and define a homomorphism $h_x:Z_{k-1}^\infty(M;\mathbb Z)\to\mathbb R/\mathbb Z$ satisfying $h_x(\partial c)=\int_cR(x)\pmod{\mathbb Z}$ for every smooth integral $k$-chain $c$. It further supplies a real cochain $\widetilde h_x\in C^{k-1}_\infty(M;\mathbb R)=\operatorname{Hom}(C_{k-1}^\infty(M;\mathbb Z),\mathbb R)$ whose restriction to cycles is a real lift of $h_x$. Require the typed equality
$$\Psi^k_{\infty,M,\mathcal U}\bigl(c_{\mathrm{Del}}(x)\bigr)=\bigl[\operatorname{Int}(R(x))-\delta\widetilde h_x\bigr]\in H^k(C^*_{\infty}(M;\mathbb Z)),$$
where $C^*_{\infty}(M;\mathbb Z)=\operatorname{Hom}(C_*^\infty(M;\mathbb Z),\mathbb Z)$ has differential by positive precomposition with $\partial$ and
$$\Psi^k_{\infty,M,\mathcal U}:=H^k(\iota^*)\circ\Psi^k_{M,\mathcal U,\mathbb Z}:\check H^k(\mathcal U;\underline{\mathbb Z})\longrightarrow H^k(C^*_{\infty}(M;\mathbb Z)),$$
with $\Psi^k_{M,\mathcal U,\mathbb Z}$ the natural integral good-cover comparison of [[lem-gts-good-cover-integral-cech-singular-comparison]], $\iota:C_*^\infty(M;\mathbb Z)\hookrightarrow C_*(M;\mathbb Z)$ the chain inclusion, and $\iota^*$ restriction of cochains. The smooth-to-ordinary homology isomorphism of [[lem-gts-smooth-integral-chains-compute-singular-homology]] and the natural free-complex UCT of [[lem-singular-uct-extension-from-cycle-projections]] make $H^k(\iota^*)$ an isomorphism under full AC. Require these supplied cycle evaluations and cochain lifts to be natural under smooth pullbacks with compatible cover functions and under cover refinements.

Require the neighborhood objects supplied by the first two conditions to lie in $\mathcal C_{\mathrm{geo}}$ and the category to be closed under their open restrictions. The subcategory is said to satisfy the **character-diagram geometric input conditions** when, in addition, every natural automorphism of the integral cohomology functor restricted to $\mathcal C_{\mathrm{geo}}$ that fixes torsion classes is the identity. These conditions are supplied hypotheses; this definition does not assert that any specified nonempty class of manifolds satisfies them.

## Definition references

[[def-gts-smooth-integral-singular-chain-complex]]

[[def-singular-cohomology-with-coefficients]]

## Remarks

This item names the geometric, naturality, and Cech-to-chain inputs used in the local reconstruction of Character Diagram uniqueness and the Deligne comparison. It does not assert that the subcategory contains every smooth manifold or that its objects satisfy the named conditions. Simons–Sullivan cite dimension theory, triangulation and pseudomanifold perturbation arguments; the full local proofs, including the Cech-to-chain integer-cocycle comparison and natural cohomology rigidity, remain an owner escalation.
