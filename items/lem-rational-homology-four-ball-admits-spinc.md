---
id: lem-rational-homology-four-ball-admits-spinc
kind: lemma
title: "A compact oriented rational homology four-ball admits a Spin-c structure"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
page: branched-cover-correction-terms-and-sliceness
deps:
  - def-given-spin-and-spinc-structures-and-associated-spinor-bundles
  - def-axiom-of-choice
  - lem-finite-good-covers-of-compact-smooth-boundary-manifolds-compute-integral-cohomology
  - lem-spin-c-lifts-exist-iff-w2-has-an-integral-lift
  - lem-integral-two-classes-in-four-manifolds-have-surface-representatives-and-characteristic-parity
  - thm-universal-coefficient-theorem-for-cohomology-over-a-pid
dependency_level: 0
justified_by: []
aliases: []
proof_strategy: direct
axiom_strength: "Assume AC for the compact-manifold and cohomology interfaces in the cited proof route."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Danny Calegari, Notes on 4-Manifolds"
      url: "https://math.uchicago.edu/~dannyc/courses/4manifolds_2018/4_manifolds_notes.pdf"
      locator: "Section 3.2.1, Lemma 3.2 and proof, printed pp. 30–31; obstruction criterion and integral lift of w2"
    - title: "Peter Teichner and Elmar Vogt, All 4-Manifolds Have Spin-c Structures"
      url: "https://math.berkeley.edu/~teichner/Papers/spin.pdf"
      locator: "Proposition and proof, printed pp. 1–3; coefficient UCT argument and self-intersection parity"
---

## Statement

Assume AC. Let $B$ be a compact connected oriented smooth four-manifold with $H_*(B;\mathbb Q)\cong H_*(\mathrm{point};\mathbb Q)$. Then the oriented tangent frame bundle of $B$ admits a Spin$^c$ lift.

## Statement references

[[def-given-spin-and-spinc-structures-and-associated-spinor-bundles|Spin-c structures as lifts of the oriented frame bundle]]

[Calegari, *Notes on 4-Manifolds*, §3.2.1, Lemma 3.2](https://math.uchicago.edu/~dannyc/courses/4manifolds_2018/4_manifolds_notes.pdf)

[Teichner and Vogt, *All 4-Manifolds Have Spin-c Structures*](https://math.berkeley.edu/~teichner/Papers/spin.pdf)

## Facts & Assumptions

**Given:** AC and the compact connected oriented smooth rational homology four-ball $B$ in the statement.

[A1] [[def-axiom-of-choice]] is the original hypothesis. It covers the finite good-cover and integral cohomology suppliers; no weaker analytic branch is substituted for this topological one.

[F1] [[lem-finite-good-covers-of-compact-smooth-boundary-manifolds-compute-integral-cohomology]] gives a finite nerve homotopy equivalent to $B$ and coefficient-compatible cohomology comparisons, including boundary points.

[F2] [[lem-integral-two-classes-in-four-manifolds-have-surface-representatives-and-characteristic-parity]] proves that every integral degree-two class has a closed oriented embedded surface representative in the interior, and that $w_2(TB)$ evaluates to its normal Euler number modulo two. For a torsion class this integer is zero, by its actual normal Thom class calculation.

[F3] [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]] gives the coefficient-natural exact sequence $0\to\operatorname{Ext}^1(H_1(B;\mathbb Z),G)\to H^2(B;G)\to\operatorname{Hom}(H_2(B;\mathbb Z),G)\to0$. Its last map is evaluation on integral cycles.

[F4] [[lem-spin-c-lifts-exist-iff-w2-has-an-integral-lift]] proves, by actual Spin transition functions and finite-partition cocycles, that an integral lift of $w_2(TB)$ gives a Spin$^c$ lift of the tangent frame bundle. It asserts existence, not an injective classification by determinant classes.

## Proof

1.1 By [F1], $B$ has the homotopy type of a finite simplicial complex. Its integral chain groups are finite free abelian groups. Finite integer row and column operations, using the Euclidean algorithm, give Smith forms for their boundary maps, so each integral homology group is finitely generated. Tensoring these finite matrices with $\mathbb Q$ kills exactly their finite cyclic factors and preserves their free ranks. The assumed vanishing of positive rational homology therefore makes both $H_1(B;\mathbb Z)$ and $H_2(B;\mathbb Z)$ finite torsion groups. No assertion about a choice of infinitely many generators is needed. [A1, F1, given, construct, algebra]

2.1 Every $x\in H_2(B;\mathbb Z)$ is torsion by step 1.1. Apply [F2]: its embedded oriented surface has integer normal Euler number zero. Hence $\langle w_2(TB),\rho_2x\rangle=0$. Thus the evaluation homomorphism of [F3] with $G=\mathbb F_2$ sends $w_2(TB)$ to zero on the entire integral group $H_2(B;\mathbb Z)$. By exactness, $w_2(TB)$ is the image of a class $v\in\operatorname{Ext}^1(H_1(B;\mathbb Z),\mathbb F_2)$. This also covers zero $H_2$, without requiring mod-two $H_2$ to vanish. [F2, F3, step 1.1, construct, algebra]

3.1 **The coefficient lift is onto, including two-torsion.** Write the finite group $H_1(B;\mathbb Z)$ as a finite direct sum of cyclic groups $\mathbb Z/n$. From the free resolution $0\to\mathbb Z\xrightarrow{n}\mathbb Z\to\mathbb Z/n\to0$, applying $\operatorname{Hom}(-,G)$ gives $\operatorname{Ext}^1(\mathbb Z/n,G)=G/nG$. The coefficient reduction therefore induces the explicit map $\mathbb Z/n\to\mathbb F_2/n\mathbb F_2$. If $n$ is odd its target is zero; if $n$ is even its target is $\mathbb F_2$ and the reduction is onto. Finite direct sums give a surjection $\operatorname{Ext}^1(H_1(B),\mathbb Z)\to\operatorname{Ext}^1(H_1(B),\mathbb F_2)$. When $H_1=0$, both groups are zero and the same conclusion holds. Choose a preimage $\widetilde v$ of the one class $v$ in step 2.1. [F3, step 1.1, step 2.1, construct, algebra]

4.1 Let $c\in H^2(B;\mathbb Z)$ be the image of $\widetilde v$ under the integral UCT injection. Naturality of [F3] under $\mathbb Z\to\mathbb F_2$ identifies its reduction with the mod-two UCT image of $v$, which is exactly $w_2(TB)$ by step 2.1. Thus $c$ is an actual integral lift. In fact it lies in the finite Ext subgroup; no assertion that distinct such lifts label distinct Spin$^c$ structures is made. [F3, step 2.1, step 3.1, construct, algebra]

5.1 Choose a smooth Riemannian metric by a finite trivializing atlas and a smooth partition, as in the construction of [F1]. Apply [F4] to $B$ with this metric and the integral lift $c$. Its transition-cocycle construction produces the required Spin$^c(4)$ principal bundle and its equivariant map to the oriented tangent frame bundle. This proves the original existence claim. All possible finite cyclic two-primary factors were retained in step 3.1; neither a vanishing mod-two homology assumption nor a determinant-class bijection was used. [A1, F1, F4, step 4.1, construct] ∎
