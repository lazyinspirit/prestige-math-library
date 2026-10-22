---
id: lem-six-whitehead-twist-resolutions-have-explicit-positive-hopf-movies
kind: lemma
title: "Six Whitehead twist resolutions have explicit positive Hopf movies"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-explicit-two-twisted-whitehead-double-has-sixteen-crossing-code
  - lem-positive-three-crossing-braid-is-canonical-complex-trefoil
  - lem-positive-whitehead-clasp-band-gives-genus-one-surface
  - thm-blackboard-framing-self-linking-is-writhe
  - lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy
  - def-countable-choice
proof_strategy: direct
axiom_use: "Countable Choice is inherited from the supplied smooth knot conventions; each of the six signed-port calculations and move sequences is finite."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Hedden and Ording, The Ozsvath-Szabo and Rasmussen concordance invariants are not equal"
      url: "https://arxiv.org/pdf/math/0512348v1"
      locator: "Figure1 and Section2.2, printed3 and8–11. The asserted resolution identification is replaced here by six explicit finite movies."
---

## Statement

Assume Countable Choice. For each $t=1,\ldots,6$, there is an explicit crossing of $D_+(T_{2,3},t)$ which is oriented negative, changes to an oriented positive crossing to give $D_+(T_{2,3},t-1)$, and whose oriented resolution is the positive Hopf link. The table in the proof is a finite Reidemeister movie identifying each resolved link, including its two component orientations. Tiny marked intervals beside the retained clasp crossings can be kept fixed throughout these movies. This is a geometric link assertion, supplying no Floer count or map.

## Facts & Assumptions

**Given:** The geometric positive half-twist and clockwise ports $(I_L,I_R,O_R,O_L)$ of the admitted cable/clasp model.

[F1] The positive trefoil blackboard parallel is the four-braid $(2,1,3,2)^3$. The clockwise ports, ordinary wires $B_3T_3,B_4T_4$, and clasp wires $CT_1T_1,CT_2B_1,CB_1T_2,CB_2B_2$ realize the positive Whitehead band. Its separate clasp word is $(-1,-1)$. [[lem-explicit-two-twisted-whitehead-double-has-sixteen-crossing-code]] [[lem-positive-three-crossing-braid-is-canonical-complex-trefoil]] [[lem-positive-whitehead-clasp-band-gives-genus-one-surface]]

[F2] The trefoil blackboard framing is three, and each coherent full parallel twist changes it by one. [[thm-blackboard-framing-self-linking-is-writhe]]

[F3] Each oriented Reidemeister move in an empty disk is an actual ambient isotopy with the indicated support. [[lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy]]

## Proof

1.1 Use the four-braid word $w_t=(1)^{2t}(-1)^6(2,1,3,2)^3$ and the separate two-letter clasp and exterior wires in [F1]. The first $2t$ letters insert $t$ coherent full twists into one ribbon, and the next six negative letters subtract three. The framed annulus therefore has framing $3+t-3=t$ by [F2]. The actual band of [F1] identifies this knot with $D_+(T_{2,3},t)$, with the same positive clasp. This extends the LOCAL cable construction in [F1], rather than treating its two-twist Statement as a theorem for all twists. Label the $2t+18$ crossings of $w_t$ in word order, then its two clasp crossings as $2t+19,2t+20$. Strand continuation pairs $I_L$ with $O_R$ and $I_R$ with $O_L$. At a positive letter the over pair is $I_R,O_L$, and at a negative letter it is $I_L,O_R$. Start the knot along $T_1$. Its two traversals through crossing one have opposite braid-parameter directions, so its oriented sign is negative. Replacing its geometric positive letter by a negative one cancels with the next positive letter by an empty two-strand Reidemeister-II disk; the remaining word is exactly $w_{t-1}$. This proves the asserted crossing-change identification and direction. [F1, F2, given, construct, algebra]

2.1 Here are exact rules for checking the resolutions and their entire movies. Pair the two darts on each exterior or between-letter wire to obtain an involution $a$; write $\rho$ for the clockwise four-port successor at each vertex and $o$ for the opposite-port pairing. Traverse the oriented knot by $d\mapsto a(o(d))$ on incoming darts. If $u,v$ are its two incoming darts at vertex one, oriented smoothing replaces the pairings INSIDE that vertex by $u\leftrightarrow o(v)$ and $v\leftrightarrow o(u)$, then removes that vertex and concatenates its adjacent wires. Faces are the cycles of $a\rho$. A symbol $I_i$ below deletes the one-edge face at vertex $i$. A symbol $II_{i,j}$ deletes a two-edge face with those vertices, whose one edge is over at BOTH ends and whose other edge is under at BOTH ends. Thus these are actual height-consistent Reidemeister moves, rather than unsigned word cancellations. After a deletion, connect external darts by following $a$, then the straight opposite pairing $o$ at a removed vertex, until another external dart is reached. This determines the next involution with no choices. The successive deletions are: $$\begin{array}{c|l}t&\text{successive deletions}\\1&II_{2,3},\ I_4,\ I_5,\ I_6,\ I_7,\ I_8,\ II_{9,10},\ II_{11,12},\ II_{13,15},\ II_{14,16},\ II_{17,18},\ II_{19,20}\\2&II_{4,5},\ I_2,\ II_{3,6},\ I_7,\ I_8,\ I_9,\ I_10,\ II_{11,12},\ II_{13,14},\ II_{15,17},\ II_{16,18},\ II_{19,20},\ II_{21,22}\\3&II_{6,7},\ I_2,\ II_{5,8},\ I_3,\ II_{4,9},\ I_10,\ I_11,\ I_12,\ II_{13,14},\ II_{15,16},\ II_{17,19},\ II_{18,20},\ II_{21,22},\ II_{23,24}\\4&II_{8,9},\ I_2,\ II_{7,10},\ I_3,\ II_{6,11},\ I_4,\ II_{5,12},\ I_13,\ I_14,\ II_{15,16},\ II_{17,18},\ II_{19,21},\ II_{20,22},\ II_{23,24},\ II_{25,26}\\5&II_{10,11},\ I_2,\ II_{9,12},\ I_3,\ II_{8,13},\ I_4,\ II_{7,14},\ I_5,\ II_{6,15},\ I_16,\ II_{17,18},\ II_{19,20},\ II_{21,23},\ II_{22,24},\ II_{25,26},\ II_{27,28}\\6&II_{12,13},\ I_2,\ II_{11,14},\ I_3,\ II_{10,15},\ I_4,\ II_{9,16},\ I_5,\ II_{8,17},\ I_6,\ II_{7,18},\ II_{19,20},\ II_{21,22},\ II_{23,25},\ II_{24,26},\ II_{27,28},\ II_{29,30}\end{array}$$ Starting with the wires of step 1.1, these finite port substitutions verify each indicated face. At every stage the incoming-dart permutation has exactly two cycles, so no isolated component is being discarded. The first deletion list, for example, starts with the empty face on vertices $2,3$; after it is removed, vertices $4,5,6,7,8$ successively have one-edge faces. Every remaining two-edge face has the stated equal over status at its two ends on each boundary edge. The same port rule verifies all six rows, without a diagram-recognition oracle or a crossing-number argument. [step 1.1, construct, algebra]

3.1 In every row the ONLY remaining vertices are $c=2t+19$ and $d=2t+20$, the original clasp crossings. Their four face cycles, in the same port notation, are $((c,O_R),(d,I_L))$, $((d,I_R),(c,I_R))$, $((c,O_L),(d,O_L))$, and $((c,I_L),(d,O_R))$. There are exactly two oriented components, each passing once through each of $c,d$. The letter sign multiplied by the two traversal signs gives $+1$ at BOTH vertices. This is literally the standard two-component two-positive-crossing Hopf diagram: the four empty bigon faces identify its rotation system with that diagram, and their disk coordinates extend the identification over the sphere. Thus its sign is positive and its actual link type is Hopf, rather than an arbitrary link of linking number one. By [F3] the preceding moves give an actual oriented link isotopy to it. The moving disks avoid sufficiently short intervals adjacent to the two retained vertices; take the marked intervals there and retain their collar germs. Their tracks and the link isotopy then also carry any chosen knotification joining arc through the added handle. This proves all the geometric clauses without asserting filtered invariance or a holomorphic count. [F3, step 2.1, construct, algebra] ∎
