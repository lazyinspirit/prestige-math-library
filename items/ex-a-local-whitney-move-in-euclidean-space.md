---
id: ex-a-local-whitney-move-in-euclidean-space
kind: example
title: A local Whitney move in Euclidean space
deps:
- def-local-whitney-move
- thm-whitney-move-removes-a-cancelling-pair-of-intersections
- def-local-oriented-intersection-sign
- def-oriented-smooth-manifold-and-oriented-chart
- def-smooth-embedding
- def-compact-space
- def-countable-choice
- thm-compactly-supported-vector-fields-are-complete
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University
      Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Theorem 6.6 and its proof, printed pp. 71-74 (the plane model and the isotopy $G_t$ of Figure 6.3)
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press
      2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Proof of Theorem 7.27, printed pp. 139-140 (the final isotopy "given on p. 74 of Milnor")
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
dependency_level: 5
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Assume $\mathrm{AC}_\omega$ for the compact-support flow supplier. In $\mathbb R^2$ let $C_0=\{(u,0):u\in\mathbb R\}\subset\mathbb R^2$ and let $C_1$ be the graph of a smooth function that crosses the $u$-axis transversely in exactly two points $p,q$ with opposite local signs (the standard picture: a curve crossing the axis once upward and once downward, bounding with the axis segment between $p$ and $q$ a disk $D$). Then the local Whitney move of [[def-local-whitney-move]] is an ambient isotopy $G_t$ of $\mathbb R^2$ supported in a neighbourhood of $D$ which leaves $C_0$ fixed outside a slightly extended segment containing $p$ and $q$, sweeps that segment across $D$, and produces an arc $C_0'$ with $C_0'\cap C_1=\varnothing$; the two intersections disappear and none is created. Taking the split normal model with $\mathbb R^{a-1}\times\mathbb R^{b-1}$ and a compact normal cutoff gives the local picture used in the general Whitney-move theorem. The example verifies the move in the lowest dimension and exhibits the role of the two opposite signs.

## Facts & Assumptions

[F1] The local sign compares the ordered tangent spaces of the two sheets with the ambient orientation. [[def-local-oriented-intersection-sign]]

[F2] The explicit compactly supported vector field moves the first model sheet and compares it with the unchanged second sheet. [[def-local-whitney-move]]

[F3] Under Countable Choice every compactly supported smooth vector field is complete. [[thm-compactly-supported-vector-fields-are-complete]]

[F4] The Whitney move removes a cancelling pair of intersection points. [[thm-whitney-move-removes-a-cancelling-pair-of-intersections]]

## Verification


**Given:** Countable Choice and the two axis/graph arcs with exactly two simple zeros and the fixed second arc.

1.1 Use an increasing coordinate change to put the zeros at $u=-1,1$, and reflect $v$ if necessary so $f$ is negative between them and positive outside. The ratio $\lambda(u)=(u^2-1)/f(u)$ extends smoothly and positively over the two zeros by their nonzero first derivatives. The map $(u,v)\mapsto(u,\lambda(u)v)$ is a plane diffeomorphism fixing the axis and taking the other arc to $v=u^2-1$. At its corners the determinant of the ordered tangent directions $(1,0),(1,2u)$ is $2u$, giving one negative and one positive intersection. [given, construct, algebra, F1]

2.1 Apply the explicit local flow of the model definition: $g(u)=b(u)(u^2-1-\varepsilon)$, with $b=1$ on $[-1,1]$, and use a compact vertical cutoff equal to one on the swept segments. The axis is taken to $v=g(u)$ at time one. For $|u|\le1$, $g=u^2-1-\varepsilon<u^2-1$. For $|u|>1$, $u^2-1>0$ and $g=b(u)(u^2-1)-b(u)\varepsilon<u^2-1$, also where $b=0$. Thus the moved axis and the unchanged graph are disjoint. The vector field has compact support, so its auxiliary time maps are diffeomorphisms; the first arc is embedded throughout. Pull back by the plane normalization to obtain the asserted isotopy of the original first arc, with the second held fixed. [step 1.1, construct, algebra, F2, F3]

3.1 In complementary dimensions the sheet factors are $E=\mathbb R^{a-1}$ and $H=\mathbb R^{b-1}$, with sheets $\{v=0,h=0\}$ and $\{v=u^2-1,e=0\}$. Use the compact normal cutoff from the theorem; a possible intersection still forces $e=h=0$, where the preceding calculation applies. The normal factors are split sheet directions, not a simultaneous product action on both images. This verifies the exact local picture and the cancellation of the opposite-sign pair. [step 2.1, construct, F4] ∎
