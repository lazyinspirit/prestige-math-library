---
id: lem-proper-arc-cuts-preserve-definite-normal-pairings
kind: lemma
title: "Proper arc cuts preserve definite normal pairings"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-normal-transfer-pairing-and-signature-under-component-connecting-tubes
  - thm-mayer-vietoris-sequence-in-singular-homology
  - thm-euclidean-inverse-function-theorem
  - thm-fundamental-theorem-on-flows
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the full normal-transfer pairing on compact boundary surfaces. The relative strip charts, Mayer–Vietoris calculations and finite iteration use no additional choice principle."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Observation 3.1 and Sublemma 6.3"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Statement

Assume full AC. Let $F\subset S^3$ be a nonempty compact smooth embedded surface with no closed components, possibly disconnected and nonorientable, and let $\alpha$ be a smoothly and properly embedded arc in $F$. Cut $F$ along a sufficiently small open rectangular neighborhood of $\alpha$ and round the resulting boundary corners inside $F$, obtaining $F'$. Then every component of $F'$ has nonempty boundary, the inclusion induces an injection $H_1(F';\mathbb Z)\hookrightarrow H_1(F;\mathbb Z)$, and its full normal-transfer pairing is the pullback of that on $F$. In particular positive or negative definiteness is preserved by this cut.

Writing $c(F)$ for the number of connected components and $b_1(F)=\dim_{\mathbb Q}H_1(F;\mathbb Q)$, one has
$$b_1(F)-c(F)=b_1(F')+1-c(F').$$
More precisely, if the arc does not separate its component, then $c(F')=c(F)$ and $b_1(F')=b_1(F)-1$; if it separates its component, then $c(F')=c(F)+1$ and $b_1(F')=b_1(F)$. For a finite disjoint family of $m$ proper arcs, successive cuts retain the injection and pairing assertions and give $b_1(F)-c(F)=b_1(F')+m-c(F')$.

## Statement references

[[def-axiom-of-choice]]

[[lem-normal-transfer-pairing-and-signature-under-component-connecting-tubes]]

## Facts & Assumptions

**Given:** Full AC, the compact smoothly embedded surface without closed components, and the proper smooth arc or finite disjoint family of such arcs.

[F1] Every compact smooth surface without closed components has free finite-rank first homology and a full symmetric normal-transfer pairing, defined by linking with the double normal push, including cross-component entries. ([[lem-normal-transfer-pairing-and-signature-under-component-connecting-tubes]])

[F2] Mayer–Vietoris is exact for a two-set open cover, with middle map induced by the two inclusions. ([[thm-mayer-vietoris-sequence-in-singular-homology]])

[F3] The inverse function theorem supplies local smooth normal coordinate charts. Compactness and a finite cover permit a common sufficiently small embedded normal neighborhood. ([[thm-euclidean-inverse-function-theorem]])

[F4] Smooth vector fields have unique smooth local flows. ([[thm-fundamental-theorem-on-flows]])

## Proof

1.1 The normal line of the arc in its surface is trivial, since the arc is an interval. Extend a transverse vector along its finitely many overlapping interval charts, changing its sign on an overlap if necessary; the interval has no cyclic compatibility condition. At its endpoints use proper boundary charts, so the transverse vector is tangent to the boundary. Extend this transverse vector to a smooth field near the arc, tangent to the boundary in its endpoint charts, using finitely many smooth chart cutoffs. Its short flow from [F4] and [F3] give a rectangular strip whose two end edges lie on $\partial F$. Removing a thinner open strip leaves a compact surface with four boundary corners; round them inward in the surface charts. This rounded subsurface is $F'$. A component that meets either cut edge has boundary there, and an untouched component has its original nonempty boundary. Thus no closed component is created. The affected original component has at most two resulting components: every component of its complement of the arc must meet one of the two connected side strips, or else it is open and closed in the original component. Rounding and shrinking the strip do not change this count. [given, F3, F4, construct]

2.1 Recover $F$ from $F'$ by attaching the removed rectangular strip along two intervals and undoing the small corner rounding. More precisely, a two-set relative-open cover consists of a small thickening $U$ of the cut subsurface and a thickened strip $V$; these retract onto $F'$ and a rectangle respectively, and their intersection retracts onto the two attaching intervals. Such retractions are the linear interval contractions in the strip and corner charts of step 1.1, fixed off those charts. Thus $H_1(U\cap V;\mathbb Z)=0$ and $H_1(V;\mathbb Z)=0$. The sequence in [F2] gives an injection $H_1(F';\mathbb Z)\to H_1(F;\mathbb Z)$ induced by inclusion, together with exact sequence $0\to H_1(F';\mathbb Z)\to H_1(F;\mathbb Z)\to\ker j\to0$, where $j:H_0(U\cap V;\mathbb Z)\to H_0(U;\mathbb Z)\oplus H_0(V;\mathbb Z)$. [step 1.1, F2, construct, algebra]

3.1 If the two strip sides belong to one component of $F'$, their two degree-zero generators have the same image under $j$, with the common sign convention for the strip component. The kernel has rank one. If the sides belong to distinct components, their images have distinct $U$-coordinates and the kernel is zero. These are the only possibilities by step 1.1. In the first case $c(F')=c(F)$, and in the second case $c(F')=c(F)+1$. Finite ranks in [F1] and the exact sequence in step 2.1 give the two asserted first-Betti-number formulas. Rearranging either yields $b_1(F)-c(F)=b_1(F')+1-c(F')$. [step 1.1, step 2.1, F1, algebra]

3.2 Representatives for classes on $F'$ may be chosen in its interior by [F1], so they are also interior curves of $F$. Their sufficiently short normal pushes can be chosen identical on both surfaces, since the tangent planes agree on this subsurface. The two linking expressions defining their pairings therefore agree literally, even when two curves lie on different components of $F'$ or of $F$. This proves the pullback assertion. The injection in step 2.1 remains an injection over $\mathbb Q$: the groups are free by [F1], so clearing denominators verifies this directly. A nonzero rational class on $F'$ consequently maps to a nonzero class on $F$, and its quadratic value is that of this image. Either strict sign of definiteness is therefore retained. [step 2.1, F1, construct, algebra]

4.1 For finitely many disjoint proper arcs choose their strips disjoint by compactness, with disjoint endpoint charts; proper disjointness includes their endpoints. After each cut the remaining arcs are still proper arcs on the resulting surface. Apply steps 1.1–3.2 successively. The homology injections and pullbacks compose, and definiteness is retained at every step. Summing the one-arc rank relation cancels the intermediate terms and gives $b_1(F)-c(F)=b_1(F')+m-c(F')$. The empty family has $m=0$ and is the identity operation. This proves the finite-family assertion with the same full scope. [step 1.1, step 3.1, step 3.2, F1, construct, algebra] ∎
