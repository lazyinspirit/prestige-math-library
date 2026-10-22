---
id: cor-double-cover-d-invariant-obstructs-smooth-slice
kind: corollary
title: "Double-cover correction terms obstruct smooth sliceness"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
page: branched-cover-correction-terms-and-sliceness
deps:
  - lem-slice-disk-double-cover-is-rational-homology-ball
  - lem-rational-ball-spin-c-extension-set-metabolizer
  - thm-correction-term-obstruction-from-rational-ball
  - lem-branched-cover-surgery-presentation-from-seifert-surface
  - lem-cyclic-cover-linking-form-inverse-matrix
  - def-axiom-of-choice
dependency_level: 7
justified_by: []
aliases: []
proof_strategy: direct
axiom_strength: "Assume AC, inherited from the smooth slice-cover and rational-ball extension suppliers."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "The double cover branched over a slice disk is a rational homology ball, published local supplier"
      url: "https://www.i-repository.net/contents/osakacu/sugaku/111F0000002-00302-8.pdf"
      locator: "Theorem 2 and the smooth-disk scope"
    - title: "Paolo Aceto and Marco Golla, Dehn Surgeries and Rational Homology Balls"
      url: "https://arxiv.org/pdf/1509.07559v2"
      locator: "Section 2, Proposition 2.2; extension coset and metabolizer"
    - title: "Peter S. Ozsvath and Zoltan Szabo, Absolutely Graded Floer Homologies and Intersection Forms for Four-Manifolds with Boundary"
      url: "https://arxiv.org/pdf/math/0110170v1"
      locator: "Section 9.2, Proposition 9.9; correction-term vanishing on extending structures"
---

## Statement

Assume AC. Let $K\subset S^3$ be a smooth oriented knot admitting a smooth properly embedded disk $D\subset B^4$ (a smooth embedding of the closed disk with interior in $\operatorname{int}B^4$ and boundary $K\subset S^3$). Let $W_D$ be its connected double cover branched along $D$, so $H_*(W_D;\mathbb Q)\cong H_*(\mathrm{point};\mathbb Q)$, and let $Y=\Sigma_2(K)$ be the oriented double branched cover of $S^3$ using the positive-meridian convention. Then $H_*(Y;\mathbb Q)\cong H_*(S^3;\mathbb Q)$. Define the torsion linking pairing $\lambda_Y$ on $H_1(Y;\mathbb Z)$ by $\lambda_Y([C],[D])=(F\cdot D)/n\pmod{\mathbb Z}$ when $\partial F=nC$, with signed intersection in the oriented $Y$. Under Poincare duality, the restriction image of $\operatorname{Spin}^c(W_D)$ in $\operatorname{Spin}^c(Y)$ is an affine coset of a subgroup $M\subseteq H_1(Y;\mathbb Z)$ with $M=M^\perp$, where $M^\perp=\{x:\lambda_Y(m,x)=0\text{ for every }m\in M\}$; such a subgroup is a metabolizer. It has $|M|^2=|H_1(Y;\mathbb Z)|$. Every extending structure $\mathfrak t$ in this coset satisfies $d(Y,\mathfrak t)=0$. No conclusion is asserted for a merely locally flat topological disk (a topological embedding with local flat disk charts but no smoothness hypothesis) or for nonextending boundary structures.

## Statement references

[[lem-slice-disk-double-cover-is-rational-homology-ball|The smooth slice-disk double cover is a rational homology ball]]

[[lem-rational-ball-spin-c-extension-set-metabolizer|The extension coset is a self-annihilating subgroup]]

[[thm-correction-term-obstruction-from-rational-ball|Correction-term vanishing for extending structures]]

[[lem-branched-cover-surgery-presentation-from-seifert-surface|The Seifert-surface surgery presentation]]

[[lem-cyclic-cover-linking-form-inverse-matrix|The positive-meridian surgery linking convention]]

## Facts & Assumptions

**Given:** AC, a smooth oriented knot $K\subset S^3$, and a smooth proper slice disk $D\subset B^4$.

[A1] AC is assumed by the smooth slice-cover and extension-set suppliers ([[def-axiom-of-choice]]).

[F1] The connected cover branched over $D$ is a rational homology four-ball and its boundary is $Y=\Sigma_2(K)$ under the positive-meridian convention ([[lem-slice-disk-double-cover-is-rational-homology-ball]]).

[F2] For a rational ball with connected rational-homology-sphere boundary, the extending Spin$^c$ structures form one affine coset of a self-annihilating subgroup of the boundary torsion cohomology, and that subgroup has square-root order ([[lem-rational-ball-spin-c-extension-set-metabolizer]]).

[F3] A Spin$^c$ structure extending over a smooth rational homology four-ball has correction term zero ([[thm-correction-term-obstruction-from-rational-ball]]).

[F4] The double branched cover has the nonsingular Seifert-surface surgery presentation; its meridian linking form uses the matrix inverse convention fixed by the positive-meridian surgery supplier ([[lem-branched-cover-surgery-presentation-from-seifert-surface]], [[lem-cyclic-cover-linking-form-inverse-matrix]]).

## Proof
**Proof technique:** apply the slice-cover, extension-set, and vanishing results in sequence.

**Given:** The data above.

1.1 Apply [F1] to $D$. It gives a rational homology four-ball $W_D$ and identifies the oriented boundary with $Y$; in particular $Y$ is a rational homology sphere. [A1, F1, given]

2.1 Apply [F2] to $(W_D,Y)$. It identifies the restriction image as one affine coset of a self-annihilating subgroup $M$ for the torsion linking form and gives $|M|^2=|H_1(Y;\mathbb Z)|$. The boundary orientation and linking convention agree with the stated one by [F4]. [F2, F4, step 1.1]

3.1 Every structure in that restriction image extends over $W_D$, so [F3] gives $d(Y,\mathfrak t)=0$ for each such structure. The proof used a smooth disk in [F1]; it does not apply to a merely locally flat topological disk. It makes no statement about structures outside the restriction image. [F1, F3, step 2.1] ∎
