---
id: lem-odd-marked-reidemeister-iii-common-complex
kind: lemma
title: "A marked signed common complex for odd Reidemeister III"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-odd-khovanov-barnatan-and-leo-triple
  - lem-odd-cube-oriented-face-parity-and-sign-existence
  - lem-odd-marked-reidemeister-i-ii-contractions
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsváth, Rasmussen and Szabó, Odd Khovanov homology"
      url: https://arxiv.org/pdf/0710.4300
      locator: "Proposition 3.3; the two identity cancellations and full face comparison are expanded here"
    - title: "Putyra, A 2-category of chronological cobordisms and odd Khovanov homology"
      url: https://arxiv.org/pdf/1310.1895
      locator: "Sections 5 and 7, sign comparison and local invariance"
---

## Statement

For finite based diagrams differing by Reidemeister III in a disk missing the mark, their normalized odd complexes, with the prescribed full face signs, are bigraded chain homotopy equivalent over the right ring $\mathbb Z[X]/(X^2)$. The equivalences and homotopies are integral and reduce modulo two to the even local cancellation equivalence. They apply to every exterior closure, including closures in which several local arcs belong to the same resolution circle. Together with the marked Reidemeister I and II contractions this proves invariance under every finite based Reidemeister sequence. No choice axiom is needed for these finite constructions.

## Statement references

[[lem-odd-cube-oriented-face-parity-and-sign-existence|Full odd face prescriptions]]

[[lem-odd-marked-reidemeister-i-ii-contractions|Marked R1/R2 and the explicit cancellation identity]]

[Ozsváth–Rasmussen–Szabó, Proposition 3.3](https://arxiv.org/pdf/0710.4300)

## Facts & Assumptions

**Given:** An RIII disk, the exterior resolution cubes, and a mark outside the disk.

[F1] The odd saddle operations and marked right action are the exterior operations of [[def-odd-khovanov-barnatan-and-leo-triple]].

[F2] Full face prescriptions exist, compare by vertex signs, and include the oriented-intersection prescription on zero-composite faces ([[lem-odd-cube-oriented-face-parity-and-sign-existence]]).

[F3] For a signed identity pivot $b$, the maps $h|_B=b^{-1}$, $E=1-dh-hd$, $i=Ej$, $p=qE$ give a module-linear contraction with residual differential $q(d-dhd)j$ ([[lem-odd-marked-reidemeister-i-ii-contractions]]).

## Proof

**Given:** The hypotheses of the Statement. All matchings below are closed by the actual fixed exterior resolution before taking an exterior algebra.

1.1 **Labelled matchings and all retained saddles.** Number the upper ports $1,2,3$ and the lower ports $4,5,6$, both from left to right. Write $I=(14)(25)(36)$, $E_1=(12)(45)(36)$ and $E_2=(23)(56)(14)$. Products mean vertical stacking, the first factor above the second. Tracing the middle arcs gives $P=E_1E_2=(12)(56)(34)$, $Q=E_2E_1=(23)(45)(16)$, $E_i^2=E_i\sqcup\mu$, and $E_1E_2E_1=E_1$, $E_2E_1E_2=E_2$, without a circle in the last two equalities. In the last equalities the top cap and bottom cup of $E_i$ remain fixed, while the remaining through arc traverses the other two bends. The residual arrows are the six minimal bands $I\to E_1$, $I\to E_2$, $E_1\to P$, $E_2\to P$, $E_1\to Q$, $E_2\to Q$. Each is specified by the unique unchanged port pair and the surgery on the other four ports; thus its closure is an actual odd quotient or split-difference map. Replacing an inherited arrow direction by its opposite is accounted for by a minus sign on its split edge, as in [F2]. [F1, F2, given, construct]

2.1 **The first pivot for $121$.** Use the crossing type whose resolutions are $(I,E_i)$ and order the three local coordinates from top to bottom. Its states, grouped by local height, are $I$; $(E_1^a,E_2^b,E_1^c)$ at $100,010,001$; $(P,E_1\sqcup\mu,Q)$ at $110,101,011$; and $E_1$ at $111$. In the circle state write its exterior module as $L\oplus K$, with $L=\Lambda W$ and $K=\mu\wedge\Lambda W$, putting the small circle first. The outgoing saddle merges $\mu$ into an old circle and is the identity on $L$, up to its edge sign. Cancel $L_{101}\to E_1^{111}$ by [F3]. External edges preserve $L$ and $K$, since none meets the small circle. There is no remaining local outgoing arrow from $L$ except the cancelled one. Therefore $q d h d j$ has no component in the retained modules: the remaining lower differentials are their old projections. The two incoming splits $a\to101$ and $c\to101$ have $K$-components $\alpha\operatorname{id}$ and $\beta\operatorname{id}$ with $\alpha,\beta\in\{1,-1\}$ at each exterior vertex. This follows directly by taking the $\mu$-coefficient of $(\mu-x)\wedge w$ or its negative. [F1, F3, step 1.1, algebra, construct]

3.1 **The second pivot and its exact matrix.** Cancel $c\to K_{101}$, whose inverse is $\beta^{-1}\operatorname{id}$, by [F3]. Only the outgoing saddle $c\to Q$ contributes a new retained block; the correction identifies the $c$-coordinate with $-\alpha\beta^{-1}a$. The result is the three-term complex $I\to E_1^a\oplus E_2^b\to P\oplus Q$. Its six arrows are precisely the bands in step 1.1, with their inherited coefficients; the $E_1\to Q$ coefficient includes $-\alpha\beta^{-1}$. In particular it is still a single signed odd saddle, since the intervening pivot and its inverse are identities on the actual circle generators. The other four degree-one blocks are $a\to P$, $b\to P$, $b\to Q$, and this corrected $a\to Q$. The maps into $a,b$ are the original two saddles from $I$. All maps and the two contraction homotopies are actual matrices supplied by [F3]. The homotopy for the composite retraction is $h_1+i_1h_2p_1$, as follows by adding $1-i_1p_1=d h_1+h_1d$ and $i_1(1-i_2p_2)p_1$. [F1, F3, step 2.1, algebra, construct]

4.1 **Aligning the two copies of $E_1$.** Their exterior cubes have the same circle modules, maps and face prescriptions after the boundary-fixing matching identification. By [F2], choose vertex signs to make their exterior differentials identical. The signed saddles from $I$ to the two copies are then equal up to one constant sign, independent of the exterior vertex: on every exterior edge their coefficient ratios agree by the two identical mixed-face prescriptions. This argument uses the prescribed coefficient even when an associated two-saddle composite is zero. Adjust the remaining constant sign to make those two saddles equal. Their unsigned saddle is nonzero on the exterior algebra for each closure. The $K$-component of $d^2$ on $I$ is then $(\alpha+\beta)$ times that nonzero saddle, so $\beta=-\alpha$. Thus the corrected identification in step 3.1 is $c=a$. In these aligned coordinates the face through $P$ is the original face $000,100,010,110$, and the face through $Q$ is the original face $000,010,001,011$, with $c$ identified with $a$. Consequently both residual face products are their actual prescribed $-\kappa$, including zero-composite faces. No inference of a coefficient from a zero map is used. [F1, F2, step 2.1, step 3.1, algebra, construct]

5.1 **The $212$ reduction and complete sign comparison.** Interchange $1,2$ in steps 2.1–4.1, then reorder the retained degree-one modules as $(E_1,E_2)$ and the retained degree-two modules as $(P,Q)$. The same labelled matching table gives exactly the six bands of step 1.1. Choose their arrow conventions in both reductions to agree; a reversal is absorbed by its actual split sign. Their two faces therefore have identical $\kappa$, including the inside/outside test on any zero face, since each is the same pair of embedded bands on the same closed matching. Mixed faces with exterior crossings also have identical prescriptions, and the exterior cubes at each retained vertex are the same. Divide the two sets of retained edge coefficients. The quotient has product one on every one of these faces. At one exterior vertex choose the four-edge tree $I-E_1$, $I-E_2$, $E_1-P$, $E_1-Q$ and assign vertex signs along it. The two square products force the desired ratio on the remaining edges $E_2-P$ and $E_2-Q$. Extend this construction through the exterior cube; every interchange between an exterior edge and a tree edge is a prescribed mixed face, and every interchange of exterior edges is an exterior square. Thus it is path-independent by [F2]'s adjacent-swap argument. Multiplication by these vertex signs gives a chain isomorphism between the two residual total complexes. This checks the entire obstruction cocycle, rather than only its nonzero-map faces or a selected exterior connectivity. [F1, F2, step 1.1, step 3.1, step 4.1, algebra, construct]

6.1 **Marked modules, gradings and reduction.** All cancellations use a small circle contained in the move disk. Coefficient extraction in $\mu$ commutes with right multiplication by an old generator, so the pivots, inverse pivots, inclusions, projections and homotopies in [F3] commute with the exterior mark. The two copies of $E_i$ and the retained residual matchings agree by isotopies fixed on all exterior arcs. The first pivot has quantum degree zero: the $1$-labelled small-circle summand at local height two and the single-circle state at height three both have quantum shift $+3$. The second pivot has quantum degree zero: the $\mu$-labelled summand at height two and its $E_i$ source at height one both have quantum shift $+1$. The residual heights are $0,1,2$ on both sides, and RIII preserves $n_+$ and $n_-$. Thus all retraction maps and the comparison preserve normalized bigradings. Modulo two, $\mu\wedge(-)$ is the even $X$-labelled small-circle summand and its coefficient projection, all signs disappear, and the two pivot cancellations and residual matrices become the corresponding even matrices. [F1, F3, step 1.1, step 3.1, step 5.1, algebra]

7.1 **The other RIII variants and finite sequences.** The preceding disk is one braid RIII move. The other admissible height orders follow from it and RII cancellations: if $A B A=B A B$, multiply on the left and right by inverse letters and cancel adjacent inverse pairs to obtain $A B A^{-1}=B^{-1} A B$, $A^{-1} B A=B A B^{-1}$ and their inverse identities, as well as the inverse of $A B A=B A B$. These are the six transitive over/under orders of three strands; a nontransitive order does not describe a Reidemeister move. Rotating the disk relabels its ports and gives the corresponding drawing with another boundary arc chosen at the top. Reorienting any strand changes the normalized crossing signs on corresponding crossings equally on both sides, and does not change the underlying saddle equations. RII is available for all exterior closures by [F3]'s supplier. Consequently these finite compositions give all oriented RIII variants away from the mark. Compose the finite module equivalences for a based Reidemeister sequence. Their inverse compositions and the preceding composite-homotopy formula prove the asserted based invariance and mod-two comparison, with no movie-independence assertion and no choice used. [F1, F2, F3, step 5.1, step 6.1, algebra, construct] ∎
