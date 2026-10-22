---
id: lem-explicit-two-twisted-whitehead-double-has-sixteen-crossing-code
kind: lemma
title: "An explicit sixteen-crossing code for the two-twisted positive Whitehead trefoil double"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-elementary-geometric-half-twist
  - def-planar-diagram-gauss-and-dowker-codes
  - lem-positive-three-crossing-braid-is-canonical-complex-trefoil
  - lem-positive-whitehead-clasp-band-gives-genus-one-surface
  - thm-blackboard-framing-self-linking-is-writhe
  - lem-linking-number-even-sum-and-reidemeister-invariance
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited from smooth diagram and framing suppliers. Every cable crossing, clasp wire, oriented visit and face permutation is specified by finite data; no full-Choice linking/intersection comparison theorem is used."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Hedden and Ording, The Ozsvath-Szabo and Rasmussen concordance invariants are not equal"
      url: "https://arxiv.org/pdf/math/0512348v1"
      locator: "Figure1, the (t-3) full-twist convention for the blackboard trefoil parallel; the exact code and its cable/clasp admission are proved below"
---

## Statement

Assume Countable Choice. The following oriented planar-diagram code represents the positive-clasped Whitehead double $D_+(T_{2,3},2)$ in the convention that a three-crossing positive trefoil blackboard parallel receives $2-3=-1$ additional full twists before the positive clasp. Each row lists edge labels in clockwise order beginning with the outgoing over-dart; positions one and three are the over-strand. For a positive crossing the arrows in this order are $(\mathrm{out},\mathrm{in},\mathrm{in},\mathrm{out})$, and for a negative crossing they are $(\mathrm{out},\mathrm{out},\mathrm{in},\mathrm{in})$. The sixteen crossing rows are
$$\begin{gathered}(1,2,3,4),(2,1,5,6),(7,5,8,9),(10,6,7,11),\\(12,13,14,9),(14,15,16,11),(17,16,15,18),(19,10,17,20),\\(13,21,22,18),(22,23,24,20),(25,24,23,26),(27,19,25,28),\\(21,12,29,26),(29,8,30,28),(3,27,31,32),(30,4,32,31).\end{gathered}$$
Their respective crossing signs are
$$(+,+,-,+,+,-,-,+,+,-,-,+,+,-,+,+).$$
The code has one oriented component, $16$ crossings, $32$ edges and $18$ faces. It supplies a finite admitted knot diagram, not a Khovanov, Lee, or knot Floer calculation. In particular no numerical $s$ or $\tau$ value is asserted.

## Statement references

[[def-planar-diagram-gauss-and-dowker-codes]]

[[lem-positive-three-crossing-braid-is-canonical-complex-trefoil]]

[[lem-positive-whitehead-clasp-band-gives-genus-one-surface]]

[Hedden and Ording, Figure1](https://arxiv.org/pdf/math/0512348v1)

## Facts & Assumptions

**Given:** The finite row/sign code in the Statement and the canonical geometric Artin half-twist convention.

[A1] [[def-countable-choice]] is assumed for the smooth knot and framing conventions.

[F1] [[def-elementary-geometric-half-twist]] makes the right input pass over the left at a positive braid letter. In coordinates $(t,x)$ the oriented determinant is positive.

[F2] [[lem-positive-three-crossing-braid-is-canonical-complex-trefoil]] identifies the positive two-braid three-crossing closure with the canonical right trefoil by a geometric signed-code proof.

[F3] [[thm-blackboard-framing-self-linking-is-writhe]] computes its blackboard framing as $3$. [[lem-linking-number-even-sum-and-reidemeister-invariance]] computes linking by the half-signed mixed-crossing sum under the stated choice hypothesis.

[F4] [[lem-positive-whitehead-clasp-band-gives-genus-one-surface]] gives the actual positive Whitehead band embedding, its two positive oriented crossings, the opposite companion traversals and the endpoint pairing joining the two top cut ends and the two bottom cut ends.

[F5] [[def-planar-diagram-gauss-and-dowker-codes]] specifies the clockwise dart pairing, orientation and face-count conventions of the displayed code.

## Proof

1.1 Thicken each strand of the positive two-braid three-crossing companion to a thin blackboard ribbon, and record its two edges in their transverse order. A positive companion crossing becomes the four-letter four-braid block $(2,1,3,2)$, with positive letters. Indeed, starting with bundle order $(L_1,L_2,R_1,R_2)$, these four adjacent swaps give $(L_1,R_1,L_2,R_2)$, then $(R_1,L_1,L_2,R_2)$, then $(R_1,L_1,R_2,L_2)$, and finally $(R_1,R_2,L_1,L_2)$. Each right-bundle strand passes over each left-bundle strand exactly once, preserving the internal order in each ribbon. This is precisely the local blackboard parallel of the crossing, realized inside its crossing disk without extra twists. Thus the blackboard parallel of the trefoil is the four-braid $(2,1,3,2)^3$, with ordinary closure at the four endpoints. By [F2] its companion is the actual canonical right trefoil. [F1, F2, given, construct]

2.1 Give the two parallel companion curves the same orientation temporarily to compute the annulus framing. In each four-letter block, exactly two crossings are between the two different parallels, each positive, so the three blocks have mixed half-sum $3$, in agreement with [F3]. Insert the two negative letters $(-1,-1)$ before the three blocks, between the two edges of one ribbon. This is one negative full twist of that annulus strip. Both crossings are mixed between the two coherent parallels and negative, so their half-sum changes by $-1$. The resulting annulus has framing $2$. Its braid word is therefore $w=(-1,-1,2,1,3,2,2,1,3,2,2,1,3,2)$. This is exactly one fewer full twist than the three-framed blackboard annulus, the stated $t-3$ convention. This calculation concerns two coherently oriented annulus parallels; the boundary orientations used after attaching the Whitehead band are opposite. [F1, F3, step 1.1, given, construct, algebra]

3.1 Specify the clasp insertion without a picture. Write $T_i,B_i$ for the input and output of strand position $i$ of $w$. Keep ordinary closure wires $B_3T_3$ and $B_4T_4$. In a separate clasp rectangle, put a two-strand two-letter braid $(-1,-1)$ and write its input and output positions as $C T_1,C T_2,C B_1,C B_2$, positions ordered transversely as in [F1]. Join $C T_1$ to $T_1$, $C T_2$ to $B_1$, $C B_1$ to $T_2$, and $C B_2$ to $B_2$. Thus its two free arcs join $T_1$ to $T_2$ and $B_1$ to $B_2$, replacing small intervals on the two different annulus boundary components. This is the clasp band of [F4]: in its local band coordinates the two free arcs are $u=\pm a$, their projection has two negative geometric half twists when both are read in the increasing longitudinal parameter, and their actual opposite boundary orientations make both oriented crossings positive. The opposite companion orientations and this endpoint pairing give exactly the positive Whitehead pattern of the framed annulus, not an ordinary two-component cable closure. All of this modification is in the ball about the chosen annulus strip. The cable, the one negative full annulus twist, and this positive clasp therefore give $D_+(T_{2,3},2)$ in the specified convention. [F1, F4, step 2.1, given, construct]

4.1 Here is an exact finite conversion of that cable/clasp construction to the displayed code. Number the fourteen crossings of $w$ in word order and the two clasp crossings as $15,16$. At each crossing use ports $I_L,I_R,O_R,O_L$ in clockwise order. A positive letter has the over-pair $I_R,O_L$, a negative letter the over-pair $I_L,O_R$, and in either case the strands join $I_L$ to $O_R$ and $I_R$ to $O_L$. Consecutive letters are wired by their unchanged strand positions; the exterior wires are exactly those in step 3.1. Starting along $T_1$ into $w$ gives the single signed traversal $(1,-2,-4,-6,7,8,-12,-14,3,4,-8,-10,11,12,-15,16,14,13,-9,-7,6,5,-13,-11,10,9,-5,-3,2,-1,-16,15)$. It visits every crossing twice, once over and once under. Orient the whole knot by this traversal. An oriented crossing sign is its geometric letter sign multiplied by the two strand traversal signs relative to the braid parameter. This gives exactly the sixteen signs in the Statement, including positive signs at $15,16$. At each crossing rotate its clockwise port list to begin with its outgoing over-port. Assign edge labels in crossing order, using the next integer when a wire is first encountered. This gives the displayed sixteen rows, and every edge occurs twice, once incoming and once outgoing. These rules specify and verify every row and every sign directly from the constructed diagram. [F1, F5, step 3.1, given, construct, algebra]

5.1 As a separate finite face check, pair equal edge labels in those rows to obtain $\alpha$, and let $\sigma$ be clockwise successor at each row. The cycles of $\alpha\sigma$ have lengths $(3,5,2,6,3,4,4,4,3,4,2,4,4,4,2,4,4,2)$, so there are eighteen faces and $16-32+18=2$. The traversal in step 4.1 proves that the code has one component and that the graph is connected. Thus it is a spherical code with the declared oriented crossing data. More strongly, steps 1.1–4.1 already realize it by the explicit local cable and clasp modifications of a knot diagram, proving the claimed knot admission constructively. The finite code can be used as input for a subsequent invariant calculation, but no such calculation or invariant value is contained in this proof. [F5, step 1.1, step 2.1, step 3.1, step 4.1, given, algebra] ∎
