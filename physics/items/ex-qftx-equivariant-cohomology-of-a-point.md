---
id: ex-qftx-equivariant-cohomology-of-a-point
kind: example
title: "The Borel and Cartan cohomology of a point"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 3
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-axiom-of-choice
  - def-torus-equivariant-cohomology-cartan-model
  - lem-torus-classifying-space-cohomology
  - def-smooth-differential-k-form
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-torus-equivariant-cohomology-cartan-model: mathematical-premise
  lem-torus-classifying-space-cohomology: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Jonas Menzi and Finn Michler, A Brief Introduction to Equivariant Cohomology"
      url: "https://people.math.ethz.ch/~acannas/Teaching/Moment_Map_2026/Papers/09_Introduction_to_Equivariant_Cohomology.pdf"
      locator: "Example 2.4 (Borel model) and Example 2.22 (Cartan model), PDF pp. 3 and 7."
    - title: "Qiuyu Ren, Equivariant de Rham Theory, complete lecture notes"
      url: "https://math.berkeley.edu/~qiuyu/papers/Equivariant_de_Rham_Theory.pdf"
      locator: "§4.3, Example 4.10, PDF p. 21."
landmark: false
---

## Example

Assume AC and let $T=\mathbb R/\mathbb Z$ act trivially on the one-point smooth manifold $\{\ast\}$. Use the period-one tangent generator and its selected degree-two polynomial generator $u$. In the chosen Borel model, $H_T^*(\{\ast\};\mathbb R)\cong\mathbb R[u]$, with $|u|=2$. The Cartan complex is $\mathbb R[u]$ with zero differential, so its cohomology is also $\mathbb R[u]$ under the selected coefficient normalization.

## Example references

[Borel and Cartan definitions and cohomology of a point] [[def-torus-equivariant-cohomology-cartan-model]]

[Torus classifying-space coefficient ring] [[lem-torus-classifying-space-cohomology]]

[Smooth differential forms] [[def-smooth-differential-k-form]]

## Facts & Assumptions

**Given:** AC, the rank-one torus $T=\mathbb R/\mathbb Z$, its trivial action on $\{\ast\}$, and the degree-two normalization fixed in the A-page definition.

[A1] Assume the Axiom of Choice, as required by the selected coefficient-ring and Cartan definitions. [[def-axiom-of-choice]]

[F1] The Borel construction and Cartan complex use the selected product Milnor model; the Cartan polynomial generators have degree two. [[def-torus-equivariant-cohomology-cartan-model]]

[F2] The selected coefficient identification sends the period-one Lie-algebra dual generator to $u$ and gives $H^*(BT;\mathbb R)\cong\mathbb R[u]$. [[lem-torus-classifying-space-cohomology]]

[F3] Smooth differential $k$-forms are sections of the exterior powers of the cotangent bundle. [[def-smooth-differential-k-form]]

## Proof

1.1 Since the action on the point is trivial, $ET\times_T\{\ast\}=ET/T=BT$ by the Borel definition [F1]. Its singular cohomology ring is $\mathbb R[u]$ by [F2]. [given, A1, F1, F2]

1.2 The tangent and cotangent spaces of a point are zero. Every real-valued function on the singleton is constant, so [F3] gives $\Omega^0(\{\ast\})=\mathbb R$; for $k>0$, the $k$th exterior power of its zero cotangent space is zero, hence $\Omega^k(\{\ast\})=0$. Every fundamental field is zero and the exterior derivative of a constant function is zero. Thus the Cartan complex is $\mathbb R[u]$ with zero differential, whose cohomology ring is $\mathbb R[u]$. [F1, F3, given]

2.1 Both presentations use the degree-two generator fixed in [F2], so the displayed rings agree under that normalization. The example asserts no comparison for other $T$-manifolds. [F2, step 1.1, step 1.2] ∎
