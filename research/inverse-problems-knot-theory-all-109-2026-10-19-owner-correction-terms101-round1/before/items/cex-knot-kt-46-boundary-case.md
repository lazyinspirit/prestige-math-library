---
id: cex-knot-kt-46-boundary-case
kind: counterexample
title: "A nonextendible Spin-c structure with nonzero d on a rational-ball boundary"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
page: branched-cover-correction-terms-and-sliceness-examples
deps:
  - lem-rational-ball-b2-bounds-lens-l4
  - lem-rational-ball-spin-c-extension-set-metabolizer
  - thm-correction-term-obstruction-from-rational-ball
  - lem-heegaard-floer-correction-terms-lens-space-lp1
  - def-heegaard-floer-correction-term
  - lem-cyclic-cover-linking-form-inverse-matrix
  - def-axiom-of-choice
dependency_level: 5
justified_by: []
aliases: []
proof_strategy: direct
axiom_strength: "Assume AC for the rational-ball construction and extension-set computation."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: n/a
sources:
  references:
    - title: "Paolo Aceto and Marco Golla, Dehn Surgeries and Rational Homology Balls"
      url: "https://arxiv.org/pdf/1509.07559v2"
      locator: "Section 2, Proposition 2.2; extension-set cardinality"
    - title: "Peter S. Ozsvath and Zoltan Szabo, Absolutely Graded Floer Homologies and Intersection Forms for Four-Manifolds with Boundary"
      url: "https://arxiv.org/pdf/math/0110170v1"
      locator: "Section 9.2, Proposition 9.9; vanishing on extending structures"
    - title: "Hisaaki Endo and Yusuf Z. Gurtas, Lantern Relations and Rational Blowdowns"
      url: "https://arxiv.org/pdf/0808.0386v1"
      locator: "Section 3, proof of Theorem 3.1 and Figure 2; B2 boundary"
---

## Statement refuted

The false claim is: if a closed oriented three-manifold $Y$ with $H_*(Y;\mathbb Q)\cong H_*(S^3;\mathbb Q)$ bounds a smooth compact four-manifold $B$ with $H_*(B;\mathbb Q)\cong H_*(\mathrm{point};\mathbb Q)$, then a nonzero correction term $d(Y,\mathfrak t)$ for any boundary Spin$^c$ structure $\mathfrak t$ obstructs the existence of $B$.

## Statement references

[[thm-correction-term-obstruction-from-rational-ball|The actual vanishing theorem, which requires extension over the ball]]

## Example

Let $B_2$ be the rational homology ball bounded by $L(4,1)$ constructed as the complement of a tubular neighborhood of a conic in $\mathbb{CP}^2$. The canonical Spin$^c$ label $i=0$ has $d(L(4,1),0)=3/4$. The extension set has exactly two elements and every extending structure has correction term zero. Therefore label $i=0$ is nonextendible, even though this rational-ball filling exists.

## Example references

[[lem-rational-ball-b2-bounds-lens-l4|The explicit rational ball bounded by the four-surgery lens space]]

[[lem-rational-ball-spin-c-extension-set-metabolizer|The extension-set size and metabolizer]]

[[lem-heegaard-floer-correction-terms-lens-space-lp1|The lens-space correction-term calculation]]

[[thm-correction-term-obstruction-from-rational-ball|Vanishing on extending structures]]

## Facts & Assumptions

**Given:** AC, the rational ball $B_2$ with boundary $L(4,1)$, and the lens-space label $i=0$.

[A1] AC is assumed by the construction and the extension-set supplier ([[def-axiom-of-choice]]).

[F1] The conic complement is a rational homology four-ball with boundary $L(4,1)$ in the selected orientation ([[lem-rational-ball-b2-bounds-lens-l4]]).

[F2] The surgery matrix for $L(4,1)$ is nonsingular and its first homology has order $4$ ([[lem-cyclic-cover-linking-form-inverse-matrix]]).

[F3] Over a rational-ball boundary, the extending Spin$^c$ structures form a coset of order $\sqrt{|H_1(Y)|}$, and every extending structure has zero correction term ([[lem-rational-ball-spin-c-extension-set-metabolizer]], [[thm-correction-term-obstruction-from-rational-ball]]).

[F4] For the selected orientation, $d(L(4,1),i)=((2i-4)^2-4)/16$ ([[lem-heegaard-floer-correction-terms-lens-space-lp1]]).

## Proof
**Proof technique:** compute the extension-set size and the correction term at a label outside that set.

**Given:** The data above.

1.1 By [F1] and [F2], $B_2$ is a rational homology ball with $|H_1(L(4,1))|=4$. Therefore [F3] gives exactly $\sqrt4=2$ extending Spin$^c$ structures. [A1, F1, F2, F3, given, algebra]

2.1 At label $i=0$, [F4] gives $d(L(4,1),0)=(16-4)/16=3/4\ne0$. Every extending structure has $d=0$ by [F3], so label $0$ is not in the two-element extension set. Thus a nonextending structure has nonzero correction term while the rational-ball filling exists, refuting the stated claim. [A1, F3, F4, step 1.1, algebra] ∎
