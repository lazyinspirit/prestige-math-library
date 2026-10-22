---
id: lem-smooth-two-sided-klein-bottle-curves-have-vertical-or-horizontal-normal-forms
kind: lemma
title: "Two-sided Klein-bottle curves have smooth vertical or horizontal normal forms"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [lem-choice-free-smooth-torus-curves-and-annulus-strips, lem-choice-free-isotopy-extension-for-a-compact-smooth-source]
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. The orientation double cover is an explicit quotient of the plane; all paired bigon and strip moves are finite and use the finite smooth isotopy-extension supplier."
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Proposition1.11 proof, printed p.16: boundary curves on a torus or Klein bottle are put in vertical or horizontal position. The Klein-bottle case is proved explicitly here."
---

## Statement

Let $Q$ be the smooth Klein bottle with coordinates $(x,y)\in\mathbb R^2$ modulo $(x,y)\sim(x,y+1)$ and $(x,y)\sim(x+1,-y)$, with its circle-bundle fibers the images of $x=\text{constant}$. Every finite disjoint family of essential two-sided smooth embedded circles can be carried by a jointly smooth ambient isotopy to a family either of vertical fiber circles or of horizontal circles transverse to those fibers. No choice axiom is assumed. The horizontal circles have representatives $y=c$ together with their deck partners $y=-c$, with $c\not\equiv0,1/2$ modulo one. The isotopy may be stationary near its time endpoints.

## Facts & Assumptions

**Given:** The explicit circle-bundle Klein bottle and the finite disjoint essential two-sided smooth circle family.

[F1] Essential torus circles have primitive nonzero homology; same-class curves have finite empty-bigon smooth reductions and smooth strip isotopies, without choice ([[lem-choice-free-smooth-torus-curves-and-annulus-strips]], full proof).

[F2] Smooth isotopies of compact embedded arcs or circles extend ambiently with compact support, without choice ([[lem-choice-free-isotopy-extension-for-a-compact-smooth-source]], Statement).

## Proof

1.1 The explicit orientation double cover is $\widetilde Q=\mathbb R^2/\langle(2,0),(0,1)\rangle$, with free deck involution $J(x,y)=(x+1,-y)$. Two-sidedness of a circle means precisely that its normal line returns without a reversal; its tangent line is oriented by a chosen circle parameter, so the ambient orientation also returns without reversal. It therefore lifts to two disjoint circles interchanged by $J$, each projecting with degree one. Each lift is essential: a nullhomotopy upstairs would project to one downstairs. In the homology basis of periods $(2,0),(0,1)$, let a lift have class $(m,n)$. Its partner has class $(m,-n)$ up to orientation. Their disjointness gives $-2mn=0$ by [F1], and primitiveness gives either $(m,n)=(\pm1,0)$ or $(0,\pm1)$. Thus all lifts are horizontal or all are vertical; lifts of the two different types would intersect algebraically once and cannot occur in a disjoint family. [F1, given, algebra]

2.1 The torus bigon reductions in [F1] can be made equivariant. Choose a disjoint affine reference family of the same slope, paired by $J$. For horizontal type choose levels $c,-c$ away from $0,1/2$; for vertical type choose levels $x=c,c+1$. Take an empty bigon between an actual lift and a reference lift. Its $J$ image is another empty bigon. Their interiors, being components of the complement of the two lift systems, are either disjoint or equal. Equality is impossible: $J$ reverses the torus orientation, so on the boundary of an invariant disk it would be an orientation-reversing circle map, which has a fixed point. For that last fact a decreasing angular lift $g$ satisfies $g(\theta+2\pi)=g(\theta)-2\pi$, so $g(\theta)-\theta$ crosses a multiple of $2\pi$ by the intermediate value property. Also the two bigons cannot share a corner: their two corners lie on one actual lift, whereas $J$ sends that lift to its disjoint partner. A shared edge would likewise force a shared corner. Their closures are therefore disjoint. Perform [F1]'s smooth graph bigon move on one and the $J$-conjugate move on the other. Their supports can be chosen disjoint. These paired moves commute with $J$, remove four upstairs intersections, and descend to smooth ambient isotopies of $Q$. Finite repetition makes actual and reference systems disjoint. [F1, F2, step 1.1, construct]

3.1 Now choose adjacent actual and reference circles of the same slope and their annulus strip containing no other circle. Its $J$ image is a different strip: invariance would require $J$ to preserve its actual boundary circle, since $J$ preserves the actual and reference systems separately, but actual lifts come in distinct pairs. The two open strips are disjoint. Their boundaries are also disjoint by the same partner argument. Use [F1]'s smooth strip parameter to move the actual circle to its affine reference, and make the identical $J$-conjugate move on the partner strip. These finite smooth isotopies descend. Repeating in the remaining strips, while fixing all circles already at reference levels, normalizes the finite family. If a chosen reference circle initially coincides with an actual circle, fix that pair and work in the remaining cut annuli. Paired compact-source extensions are provided by [F2]; smooth stationarizing time changes make all joins and endpoints jointly smooth. Vertical reference circles project to fibers. Horizontal paired reference circles project to two-sided curves transverse to every encountered fiber; invariant horizontal levels $0,1/2$, whose projections would be one-sided, were excluded. This proves the stated alternatives with no change to the circle-bundle coordinates or fiber structure. [F1, F2, step 1.1, step 2.1, construct] ∎
