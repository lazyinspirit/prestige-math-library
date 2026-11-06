---
id: def-cft-r5-finite-gauging-wall-conventions
kind: definition
title: Finite-group gauging wall conventions
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: physics
library: physics
physical_scope: Operational finite-group gauging conventions for topological interfaces in an idealized two-dimensional CFT.
deps:
  - def-cft-r5-topological-defect-interface-conventions
dependency_roles:
  def-cft-r5-topological-defect-interface-conventions: operational-prerequisite
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Riccardo Argurio et al., Non-Invertible T-duality at Any Radius via Non-Compact SymTFT, arXiv:2409.11822v1
      url: https://arxiv.org/pdf/2409.11822v1
      locator: §3.1, discrete subgroup gauging and finite anomaly condition; §4.2, rational-radius defect fusion.
    - title: Guillermo Arias-Tamargo et al., Non-Invertible Symmetries and Boundaries for Two-Dimensional Fermions, arXiv:2605.13952v1
      url: https://arxiv.org/pdf/2605.13952v1
      locator: §§2.3–2.5, 3.1–3.4, finite cyclic gauging and defect fusion.
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Use the interface data package cited below: $C$ supplies bulk field-label spaces and correlators; its topological interfaces have labelled-network distributional correlators, specified one-sided stress traces, isotopy invariance, coherent junction sewing, and specified fusion limits. An endodefect has $C$ on both sides. A **normalized action** of a finite abelian group $G$ consists of such invertible topological lines $L_g$, indexed by $g\in G$, with $L_e\cong\mathbf 1$ and chosen invertible multiplication junctions $L_g\otimes L_h\cong L_{gh}$ satisfying the unit and associativity coherence conditions. The action need not be faithful unless this is separately assumed.

An **anomaly-free finite gauging** of this action is a chosen consistent gauging: the local trivializations and junctions can be summed over flat principal $G$-bundles so that the resulting gauge-invariant correlators define the gauged CFT, denoted $C/G$, and a topological gauging interface $W_G:C\to C/G$. Its orientation-reversed interface is $\bar W_G:C/G\to C$. This is an adopted existence condition; it does not assert that every finite group action is anomaly-free. Throughout, $G$ is regarded as a finite discrete group; a flat principal $G$-bundle has locally constant transition functions and is classified by its monodromy representation up to gauge equivalence, with any stated boundary frames held fixed.

For a finite groupoid $\mathcal G$ (a category in which every morphism is invertible), its **groupoid cardinality** is
$$|\mathcal G|=\sum_{[x]\in\pi_0(\mathcal G)}\frac{1}{|\operatorname{Aut}_{\mathcal G}(x)|},$$
where $\pi_0(\mathcal G)$ is the set of isomorphism classes of objects and $\operatorname{Aut}_{\mathcal G}(x)$ is the finite group of automorphisms of $x$. The finite-gauging path integral uses this weight for the groupoid of flat bundles with the boundary data fixed by the wall construction.

The gauging in this definition is **untwisted**: no discrete-torsion phase or other topological action multiplies the weight of a flat-bundle sector.

In the **standard endpoint-framed wall normalization** used here, the composite $W_G\otimes\bar W_G$ is evaluated on a thin strip whose transverse interval is $[0,1]$, with a gauge trivialization fixed at each endpoint; gauge isomorphisms must preserve both endpoint trivializations. Each flat bundle on this interval is classified by its relative parallel transport $g\in G$ between the two fixed trivializations. Every such framed bundle has trivial endpoint-preserving automorphism group, so its groupoid-cardinality weight is $1/1=1$. No additional division by $|G|$ is made at the framed endpoints. This fixes the finite-wall normalization used by the fusion result; it does not fix the absolute normalization of a continuous-gauging wall.

With this gauging-wall convention, an oriented strip sector of relative transport $g$ contributes the action line $L_g$ on the $C$ side; reversing the strip orientation replaces $g$ by $g^{-1}$ and $L_g$ by its orientation reverse. Subdividing and fusing strips uses the chosen junctions $L_g\otimes L_h\cong L_{gh}$. For the trivial group, the single framed sector has weight one and $W_{\{e\}}$ is the identity interface.

## Definition references

[[def-cft-r5-topological-defect-interface-conventions]]

[Argurio et al., §3.1 and §4.2](https://arxiv.org/pdf/2409.11822v1)

[Arias-Tamargo et al., §§2.3–2.5, 3.1–3.4](https://arxiv.org/pdf/2605.13952v1)

## Remarks

The finite gauging condition includes the absence of the relevant 't Hooft anomaly. In the compact-boson application the two cyclic factors have a mixed anomaly, and the source permits their joint gauging when their orders are coprime. The definition does not assert anomaly cancellation for an arbitrary group action.

