---
id: lem-grid-filtered-pentagon-hexagon-equivalences
kind: lemma
title: "Filtered pentagon maps and hexagon inverse homotopies"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-grid-diagram-for-an-oriented-knot
  - alg-grid-knot-floer-complex
  - lem-grid-alexander-grading-integral
  - lem-grid-rectangle-boundary-square-zero-and-filtration
  - lem-grid-rectangle-differential-squares-to-zero
dependency_level: 5
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Definitions 5.1.1–5.1.5, Lemmas 5.1.3–5.1.6, Proposition 5.1.8, and §13.3.1; all pentagon and hexagon decomposition cases"
---

## Statement

Let $G,G'$ be knot grids related by exchanging two consecutive columns whose marking-height intervals are disjoint or strictly nested. The same assertion holds for rows, using intervals of marking abscissae, and for a switch, where an $X$ and an $O$ of the exchanged columns share a row. Identify variables by their individual $O$-markings, retaining the full polynomial ring. There are explicit filtered chain maps $P:C^-(G)\to C^-(G')$ and $Q:C^-(G')\to C^-(G)$ given by empty pentagon counts with their $O$-monomial weights, and filtered homotopies $H,H'$ given by empty hexagon counts, satisfying
$$dH+Hd=\operatorname{id}+QP,\qquad d'H'+H'd'=\operatorname{id}+PQ.$$
The maps preserve Maslov grading and do not increase Alexander filtration; the homotopies have Maslov degree $+1$ and do not increase filtration. Taking the associated graded retains precisely the polygons avoiding $X$. Setting all $O$ variables to zero in that associated-graded equivalence gives the tilde equivalence. The maps and homotopies remain valid under any coefficient specialization.

## Statement references

[[def-grid-diagram-for-an-oriented-knot]]

[[alg-grid-knot-floer-complex]]

[[lem-grid-alexander-grading-integral]]

[[lem-grid-rectangle-boundary-square-zero-and-filtration]]

[[lem-grid-rectangle-differential-squares-to-zero]]

[Ozsvath, Stipsicz and Szabo, *Grid Homology for Knots and Links*, §§5.1 and 13.3.1](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

## Facts & Assumptions

**Given:** The two grids and the individual marking labels specified in the statement. Work over characteristic two.

[F1] [[alg-grid-knot-floer-complex]] counts empty-state rectangles, weights them by the product of variables at their $O$-markings, allows all $X$ in the full filtered version, and excludes $X$ in the associated graded.

[F2] [[lem-grid-alexander-grading-integral]] gives the Maslov rectangle difference $1-2n_O(r)+2\#(\mathbf x\cap\operatorname{Int}r)$ and the Alexander difference $n_X(r)-n_O(r)$.

[F3] [[lem-grid-rectangle-boundary-square-zero-and-filtration]] gives the two decompositions of nonreturning pairs of empty rectangles, including the overlapping four-moving-point case, and identifies returning thin annuli.

[F4] [[lem-grid-rectangle-differential-squares-to-zero]] proves that the full and associated-graded rectangle operators are differentials.

## Proof

1.1 Draw both diagrams on one torus with their markings fixed. Their horizontal circles agree, and all but one vertical circle agree. Denote the different vertical circles by $\beta,\gamma$; draw them crossing transversely at two points $a,b$ away from the horizontal circles, with one marking-bearing bigon on each side. The noninterleaving interval condition allows the two intervening annular regions to avoid all markings: draw $\gamma$ around the two endpoint levels of the exchanged columns, leaving each endpoint marking on its original side. Choose $a$ as the southern tip of the bigon with $\beta$ on its western boundary and $\gamma$ on its eastern boundary; the other tip is $b$. For a switch, the shared-row $O,X$ lie in the same straight-strip region but on opposite sides of the curved circles; the same marking-free intervening annuli remain. [given, construct]

2.1 For states $\mathbf x$ of $G$ and $\mathbf y'$ of $G'$, count embedded disks with five convex corners, four in $\mathbf x\cup\mathbf y'$ and the fifth at $a$, boundary on the combined circles, and horizontal boundary satisfying $\partial(\partial_\alpha p)=\mathbf y'-\mathbf x$. Require that the interior contains no state point, but impose no marking restriction. Define $P(\mathbf x)$ as the sum of the targets with coefficient $U^{O(p)}$. Define $Q$ in the reverse direction using the distinguished corner $b$. Define $H$ on $G$ by the same rule for six-sided embedded disks with four state corners and the other two corners $a,b$; define $H'$ on $G'$ in the same way. A side cannot travel completely around its circle in an embedded polygon, so there are finitely many possible sides, corners, and polygons. These are consequently finite polynomial-module maps. [F1, step 1.1, construct]

3.1 To compute their degrees, use the nearest-point correspondence from a $\gamma$ state to a $\beta$ state, replacing just its point on the changed circle. The connecting small triangle $t$ contains no other state coordinate. Expanding the pair-counting formula on the two diagrams gives $M(\mathbf x)-M(\mathbf x')=-1+2n_O(t)$: the self-state terms are equal, the marking-self terms differ by $-1$, and the state-marking cross term differs by $0$ or $-2$ according to which side of the marked level the moved point lies. These are the four choices of side and direction of the triangle. Attaching $t$ on the available side of a pentagon yields a rectangle, so [F2] gives $M(\mathbf x)-M(\mathbf y')=-2n_O(p)$ and $A(\mathbf x)-A(\mathbf y')=n_X(p)-n_O(p)$ for an empty pentagon. For a hexagon, fill its missing bigon, which contains one $O$ and one $X$, to obtain a rectangle; [F2] then gives $M(\mathbf x)-M(\mathbf y)=-1-2n_O(h)$ and $A(\mathbf x)-A(\mathbf y)=n_X(h)-n_O(h)$. Thus the weighted pentagon maps have degree zero and filtration drop $n_X(p)$, and the weighted hexagon maps have degree $+1$ and filtration drop $n_X(h)$. [F2, step 1.1, step 2.1, algebra]

3.2 Expand $d'P+Pd$, keeping each composite domain and its multiplicities. When four coordinates of the initial state are absent from the terminal state, the rectangle and pentagon have disjoint sets of moving coordinates; commute their order, retaining their supports. This is an involution without fixed points, including when the supports overlap with local multiplicity two. When three coordinates move, cut the composite at its reflex corner in the two possible directions. For multiplicity-one domains this is the ordinary seven-corner region. If a multiplicity is two, the reflex corner is the distinguished corner $a$; following the two possible outgoing edges there again yields exactly the alternate rectangle-pentagon decomposition. Emptiness is preserved, since a forbidden state point in either alternative piece would lie in the interior of an original piece. Thus all these terms pair with the same total $O$-weight. [F1, F3, step 2.1, construct]

4.1 The remaining possibility in $d'P+Pd$ is that the endpoints differ only on the changed circle. A horizontal thin annulus with a small triangle removed has two decompositions and cancels internally. A vertical thin annulus together with that triangle has one decomposition. There are exactly two such vertical domains: adjoining the marking-free annulus on the western side of the changed circle, or adjoining the marking-free annulus on the eastern side. They have the same initial and terminal states; their difference is the difference of those two marking-free annuli. Their marking multiplicities and therefore their polynomial weights agree. They cancel with each other. These cases exhaust the compositions: the rectangle changes two coordinates and the pentagon changes the coordinate on the replaced circle together with at most one further coordinate, so the number of unmatched coordinates is four, three, or one. Hence $d'P+Pd=0$. Exchanging the roles of the two diagrams proves $dQ+Qd'=0$. [step 1.1, step 2.1, step 3.2, algebra]

4.2 Expand $dH+Hd+QP$ and group rectangle-hexagon, hexagon-rectangle, and pentagon-pentagon decompositions by domain. Four moving coordinates give the same commuting pair as in step 3.2. Three moving coordinates give eight-corner domains: either seven convex corners and one reflex corner, or five convex corners and three reflex corners, two of the latter at $a,b$. In the first case cut at the sole reflex corner in its two possible directions. In the second, at two reflex corners the outgoing cut is forced by the boundary orientation; at the remaining one either direction is allowed. The resulting two decompositions are exactly the alternative ordered polygon pairs, with equal weights. This also describes the pair when its two types differ, for example one rectangle-hexagon decomposition and one pentagon-pentagon decomposition. There is no third cut: it would either use a convex corner or leave a nonconvex counted polygon. [F3, step 2.1, construct]

5.1 If the initial and terminal states coincide, a contributing domain is the annular region between the changed circle and a consecutive unchanged vertical circle, with the parts of $\beta,\gamma$ on its boundary retained. Its unique permissible cut depends on the locations of the three relevant state points: the cut gives a rectangle-hexagon, hexagon-rectangle, or pentagon-pentagon pair. The three types occur on the same side of the state-point level where the associated cut can proceed without passing a state point. Exactly one side permits this, so exactly one such domain occurs for every initial state, with one decomposition. It contains no marking, by the marking-free annulus construction in step 1.1. It contributes the initial state with coefficient one. No case with one or two unmatched coordinates remains for an endomorphism of the original grid: a state permutation cannot differ in just one coordinate, and two unmatched coordinates cannot support both distinguished corners with convex polygon ends unless the domain is one of the just listed returning annuli. Consequently $dH+Hd+QP=\operatorname{id}$. The same argument on $G'$ proves the identity for $H'$. [step 1.1, step 2.1, step 4.2, construct, algebra]

6.1 Step 3.1 makes all four maps filtered with the claimed degrees; steps 4.1 and 5.1 give the chain and inverse-homotopy identities. On the associated graded, their degree-zero filtration components are exactly the polygons with $n_X=0$. The identities therefore pass to that graded complex. Quotienting its coefficients by all $U_i$ retains exactly the polygons with $n_O=0$ as well and gives the tilde identities. Tensoring any of these map identities with another coefficient module preserves them. Row exchanges are obtained by rotating the construction by $90$ degrees and reversing the horizontal-boundary convention accordingly; the same domain cuts and marking weights apply. This proves every assertion. [F1, F4, step 3.1, step 4.1, step 5.1, algebra] ∎
