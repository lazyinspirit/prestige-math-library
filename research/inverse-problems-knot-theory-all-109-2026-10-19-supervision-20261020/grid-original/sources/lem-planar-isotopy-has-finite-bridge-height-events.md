---
id: lem-planar-isotopy-has-finite-bridge-height-events
kind: lemma
title: "Finite bridge-height events in a planar isotopy"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-planar-isotopy-of-link-diagrams
  - def-regular-oriented-link-diagram
  - thm-parametric-transversality
  - thm-transverse-preimage-theorem
dependency_level: 0
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
      locator: "Appendix B.4, Definitions B.4.4 and B.4.11 and Lemma B.4.12; bridge-height events"
---

## Statement

Assume countable choice. A bridge diagram is a smooth regular oriented planar link diagram whose height function has only nondegenerate critical points, with distinct critical and crossing heights, and with neither crossing preimage a height-critical point. A planar isotopy between two bridge diagrams, stationary near its ends, can be changed arbitrarily little through regular planar diagrams, relative to those ends, so that it has finitely many exceptional times. At each such time exactly one of the following happens: a birth or death of two height-critical points; a crossing passes through a nondegenerate height-critical point of one of its branches; or two distinct special points exchange height order, where a special point is a maximum, a minimum, or a crossing. Away from these times the diagrams are bridge diagrams. The diagram orientations, crossing decorations, and planar isotopy class are retained throughout.

## Statement references

[[def-countable-choice]]

[[def-planar-isotopy-of-link-diagrams]]

[[def-regular-oriented-link-diagram]]

[[thm-parametric-transversality]]

[[thm-transverse-preimage-theorem]]

[Ozsvath, Stipsicz and Szabo, *Grid Homology for Knots and Links*, Appendix B.4](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

## Facts & Assumptions

**Given:** The countable-choice axiom and a smooth planar isotopy of a finite oriented link diagram, stationary on end collars whose diagrams satisfy the bridge conditions.

[F1] [[def-planar-isotopy-of-link-diagrams]] transports a regular immersed decorated graph by smooth orientation-preserving diffeomorphisms of the plane.

[F2] Under countable choice, [[thm-parametric-transversality]] says the nontransverse slice parameters of a transverse smooth parameter family form a null set.

[F3] [[thm-transverse-preimage-theorem]] makes a transverse preimage a submanifold of the stated codimension and makes it empty when that codimension exceeds the source dimension.

## Proof

1.1 If the source is empty, there are no special points or events and the conclusion is immediate. Otherwise parameterize the source by finitely many standard circles and write the planar family as $g(x,t)=(X(x,t),Y(x,t))$. Its immersions and transverse crossings have uniform positive local bounds on the compact time interval. Near every crossing, two transverse branches determine its unique continued crossing; outside disjoint such disks, compact separated embedded edges have a positive separation. Thus a uniformly sufficiently small smooth perturbation stays regular with the same crossing incidence and decorations. Straightening the crossings and extending edge motions in their thin normal neighborhoods gives a planar isotopy locally in time; finitely many time neighborhoods cover the interval. Therefore such a perturbed family retains the asserted planar class. [F1, given, construct]

2.1 Embed the source circles times the interval in Euclidean space, and perturb both target coordinates by all ambient-coordinate monomials of degree at most $59$, times a smooth time cutoff zero on the fixed collars and positive elsewhere. At any at most eight distinct interior source points, this finite family independently controls intrinsic jets through order three: for a point $P_i$ multiply a degree-three Taylor polynomial by $\prod_{j\ne i}|P-P_j|^8$. Its degree is at most $3+8\cdot7=59$, its jets through order three vanish at every other selected point, and at $P_i$ the nonzero factor allows arbitrary prescribed jets by finite Taylor division. Intrinsic jets extend to ambient jets in the source's local product coordinates. The nonzero cutoff is invertible on jets. Keep the parameter ball small enough for step 1.1. Consequently [F2] applies to every smooth jet stratum listed below, on countably many coordinate pieces. [F2, step 1.1, construct, algebra]

3.1 A height-critical degeneracy has equations $Y_x=Y_{xx}=0$, of codimension two on the two-dimensional source $(x,t)$. Transverse occurrence gives $Y_{xt}Y_{xxx}\ne0$, since the derivative matrix of these equations has first entry $Y_{xx}=0$. The extra degeneracy $Y_{xxx}=0$ has codimension three and is absent by [F3]. Thus these are isolated ordinary births/deaths. Explicitly the implicit function theorem applied to $Y_x=0$ solves $t=T(x)$, with $T'(x_0)=0$ and $T''(x_0)=-Y_{xxx}/Y_{xt}\ne0$. Taylor's integral formula gives $T(x)-t_0=(x-x_0)^2a(x)$ with smooth nonzero $a$; the smooth coordinate $u=(x-x_0)\sqrt{|a(x)|}$ makes the critical-point equation exactly $u^2\pm(t-t_0)=0$. At all other height-critical points $Y_{xx}\ne0$, so they continue as smooth curves in time. A crossing preimage becomes critical when $g(x,t)=g(y,t)$ and $Y_x(x,t)=0$, with $x\ne y$. These are three independent equations on $(x,y,t)$; their transverse occurrence means the derivative of $Y_x$ along the continued crossing branch is nonzero. Adding $Y_{xx}(x,t)=0$ is codimension four and is absent. The other crossing branch cannot also be height-critical, since that would give two parallel horizontal tangents at a regular crossing. Hence this event is exactly a crossing sliding through a nondegenerate maximum or minimum on one branch. [F2, F3, step 2.1, construct, algebra]

4.1 The remaining height coincidences have the following independent equations on distinct source points. Two critical points: $Y_x(x)=Y_x(y)=0$ and $Y(x)=Y(y)$, three equations on $(x,y,t)$. A critical point and a crossing: $Y_x(x)=0$, $g(y)=g(z)$, $Y(x)=Y(y)$, four equations on $(x,y,z,t)$. Two crossings: $g(x)=g(y)$, $g(z)=g(w)$, $Y(x)=Y(z)$, five equations on $(x,y,z,w,t)$. Time is common in each display. Transversality makes each coincidence isolated and makes its relative height derivative nonzero along the already continued special points; thus their order exchanges. Extra critical degeneracy or a third special point at the same height adds a constraint and is excluded by [F3]. A coincidence with overlapping source points is either the crossing/critical slide of step 3.1 or a triple crossing, and the latter is excluded because every diagram is regular. The finite monomial family controls all of these equations independently by step 2.1. [F2, F3, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 Require also that different event occurrences have distinct times. For disjoint source configurations, two event conditions have total codimension equal to the sum of their separate codimensions, whereas sharing the time coordinate removes one dimension from their product source. Their total codimension therefore exceeds the source dimension by one, so [F3] excludes them. At most eight distinct points are needed, since an individual event uses at most four. Overlapping configurations either describe the same event with different orderings of its preimages, or force one of the extra conditions already excluded: a degenerate crossing-critical point, three special points of one height, a triple crossing, or a higher critical degeneracy. Take unordered crossing pairs and unordered pairs of special points to count an event once. The finitely many event types and their countably many coordinate pieces have a countable union of null exceptional parameter sets by [F2]; countable choice suffices for that union. Choose a parameter outside it in the prescribed small ball. [F2, F3, step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 It remains to justify finiteness despite deleted configuration diagonals. Critical degeneracies are a closed isolated subset of the compact source away from the fixed end collars, hence finite. Projected immersion gives a uniformly monotone projected coordinate on neighborhoods of every source point, so distinct crossing preimages stay uniformly separated; crossings cannot accumulate on that diagonal. Two merging critical points can occur only near a birth/death. Here is the needed critical-value separation without an unproved cubic normal-form premise. Center the event at $(x,t)=(0,0)$, put $a=Y_{xt}(0,0)\ne0$ and $b=Y_{xxx}(0,0)\ne0$, and write $v=\sqrt{-2at/b}$ on the occupied side. The preceding critical-point coordinate calculation, or the scalar implicit equation after scaling $x=vq$, gives $x_\pm=\pm v+O(v^2)$. Taylor expansion gives $Y_x(x,t)=at+bx^2/2+O(|x|^3+|xt|+t^2)$. Consequently integration between these two critical points yields $Y(x_+,t)-Y(x_-,t)=-2bv^3/3+O(v^4)$: endpoint errors are $O(v^4)$ and $at=-bv^2/2$. This is nonzero for sufficiently small occupied parameters, so the merging pair gives no additional equal-height events. A critical point approaching a crossing preimage occurs only at the crossing-critical event of step 3.1. Taylor expansion about the nondegenerate critical point gives the difference between its value and the branch's crossing value as a nonzero smooth factor times the square of their source-coordinate separation. Hence it vanishes nearby only when those source points coincide, and that crossing-critical event is isolated. All remaining coincidences occur on compact configuration subsets away from these neighborhoods, where they are closed and isolated by steps 3.1–4.1. There are therefore only finitely many events. Between them the bridge conditions hold by construction; the orientations and decorations were retained by step 1.1. This proves the claim. [F1, F2, F3, step 1.1, step 3.1, step 4.1, step 5.1, construct, algebra] ∎
