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
  - def-cyclic-branched-cover-of-a-knot
  - lem-rational-ball-spin-c-extension-set-metabolizer
  - thm-correction-term-obstruction-from-rational-ball
  - thm-poincare-duality-for-oriented-topological-manifolds
  - thm-poincare-lefschetz-duality
  - thm-long-exact-sequence-of-a-pair-in-singular-cohomology
  - thm-universal-coefficient-theorem-for-cohomology-over-a-pid
  - def-axiom-of-choice
dependency_level: 6
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
    - title: "Ralph H. Fox and John W. Milnor, Singularities of 2-spheres in 4-space and cobordism of knots"
      url: "https://www.i-repository.net/contents/osakacu/sugaku/111F0000002-00302-8.pdf"
      locator: "Section 2, Theorem 2 proves the Alexander-polynomial factorization condition for slice knots; related context only. The smooth branched-cover homology assertion is proved by the cited local supplier."
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

## Facts & Assumptions

**Given:** AC, a smooth oriented knot $K\subset S^3$, and a smooth proper slice disk $D\subset B^4$.

[A1] AC is assumed by the smooth slice-cover and extension-set suppliers ([[def-axiom-of-choice]]).

[F1] The connected cover branched over $D$ is a rational homology four-ball and its oriented boundary is the connected cyclic double branched cover $Y=\Sigma_2(K)$ ([[lem-slice-disk-double-cover-is-rational-homology-ball]], [[def-cyclic-branched-cover-of-a-knot]]).

[F2] Poincaré–Lefschetz duality and the cohomology long exact sequence of $(W_D,Y)$ compute the rational cohomology of $Y$ from that of $W_D$. Universal coefficients and closed-manifold Poincaré duality identify it with the rational homology of $S^3$ ([[thm-poincare-lefschetz-duality]], [[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]], [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]], [[thm-poincare-duality-for-oriented-topological-manifolds]]).

[F3] For a rational ball with connected rational-homology-sphere boundary, the extending Spin$^c$ structures form one affine coset of a self-annihilating subgroup for the chain linking pairing, and that subgroup has square-root order ([[lem-rational-ball-spin-c-extension-set-metabolizer]]).

[F4] A Spin$^c$ structure extending over a smooth rational homology four-ball has correction term zero ([[thm-correction-term-obstruction-from-rational-ball]]).

## Proof
**Proof technique:** apply the slice-cover, extension-set, and vanishing results in sequence.

**Given:** The data above.

1.1 Apply [F1] to $D$. It gives a connected oriented rational homology four-ball $W_D$ with connected boundary $Y$. [A1, F1, given]

2.1 Since $H_*(W_D;\mathbb Q)\cong H_*(\mathrm{point};\mathbb Q)$, universal coefficients give $H^0(W_D;\mathbb Q)=\mathbb Q$ and $H^j(W_D;\mathbb Q)=0$ for $j>0$. By [F2], $H^j(W_D,Y;\mathbb Q)$ is zero except for $H^4(W_D,Y;\mathbb Q)\cong\mathbb Q$. The pair sequence and connectedness of $Y$ give $H^1(Y;\mathbb Q)=H^2(Y;\mathbb Q)=0$ and $H^3(Y;\mathbb Q)\cong\mathbb Q$; also $H^0(Y;\mathbb Q)\cong\mathbb Q$. Closed-manifold Poincaré duality now gives $H_*(Y;\mathbb Q)\cong H_*(S^3;\mathbb Q)$. [F2, step 1.1, algebra]

3.1 Apply [F3] to $(W_D,Y)$. The restriction image is one affine coset of a self-annihilating subgroup $M$ for the chain torsion linking pairing, and $|M|^2=|H_1(Y;\mathbb Z)|$. The hypotheses hold by steps 1.1 and 2.1. [F3, step 1.1, step 2.1]

4.1 Every structure in the restriction image of step 3.1 extends over $W_D$, so [F4] gives $d(Y,\mathfrak t)=0$ for each such structure. The proof used a smooth disk in [F1]; it does not apply to a merely locally flat topological disk. It makes no statement about structures outside the restriction image. [F1, F4, step 3.1] ∎
