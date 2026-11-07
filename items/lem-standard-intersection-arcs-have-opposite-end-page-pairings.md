---
id: lem-standard-intersection-arcs-have-opposite-end-page-pairings
kind: lemma
title: "Standard intersection arcs have opposite end page pairings"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-euclidean-inverse-function-theorem
  - thm-fundamental-theorem-on-flows
  - lem-four-page-arc-collapse-is-a-disk-for-opposite-end-pairings
  - lem-collapsing-a-smooth-embedded-arc-preserves-the-three-sphere
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited from the smooth local-flow supplier used to make relative strips around the proper arc. The endpoint signs, finite page matchings and supplied arc-collapse formulas need only finite constructions."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, §2.4.1, Procedure 2.20 and Figure 6, PDF pp.10–11"
      url: "https://arxiv.org/pdf/2008.06490v3"
    - title: "Joshua Evan Greene, Alternating links and definite surfaces, Proof of Theorem 1.1, PDF p.7, local standard-arc neighborhoods"
      url: "https://people.maths.ox.ac.uk/lackenby/Fox.pdf"
---

## Statement

Assume countable choice. Let $L\subset S^3$ be a smooth link with chosen disjoint smooth normal tubes, and let $F_0,F_1$ be smooth embedded spanning surfaces with boundary $L$. Orient each component of $L$ arbitrarily. Supply radial collar coordinates in the tubes in which each surface collar is given by a smooth ray direction depending on the boundary parameter. Put $X=S^3\setminus\operatorname{int}\nu L$, and orient each torus of $\partial\nu L$ as the boundary of the oriented solid tube, so its outward normal points into $X$. Orient the two surface boundary curves on those tori compatibly with $L$.

Let $\alpha$ be a smoothly and properly embedded arc of transverse intersection of $F_0\cap X$ and $F_1\cap X$, transverse to $\partial X$, with transverse boundary-curve crossings at its distinct endpoints. Extend it radially through the supplied collars to the corresponding points of $L$, obtaining a smooth embedded arc $A$. Assume a neighborhood of this extended arc contains no other intersection components. Write $i_0,i_1\in\{1,-1\}$ for the ordered local intersection signs of the two boundary curves at its endpoints, measured on $\partial\nu L$.

The union $F_0\cup F_1$ has a closed intrinsic neighborhood $K$ of $A$ modeled by four pages with common arc, glued at each end by one of the matchings $M=(01)(23)$ and $N=(03)(12)$, with pages zero and two on $F_0$ and pages one and three on $F_1$. The two end matchings differ if and only if $i_0=i_1$. Consequently collapsing $A$ in this neighborhood gives a closed topological disk exactly when $i_0+i_1=2$ or $-2$. When $i_0+i_1=0$ it gives two disks joined at their interior centers. For the standard cases the ambient arc-collapse map can be chosen supported in any prescribed neighborhood of $A$, and its image of $K$ is an embedded topological disk. Local flatness of that disk is not asserted here.

## Statement references

[[def-countable-choice]]

[[lem-four-page-arc-collapse-is-a-disk-for-opposite-end-pairings]]

[[lem-collapsing-a-smooth-embedded-arc-preserves-the-three-sphere]]

## Facts & Assumptions

**Given:** Countable choice, the oriented ambient sphere and boundary tubes with radial surface collars, the chosen boundary orientations, and the proper transverse common arc with its isolated radial extension and two endpoint signs.

[F1] Smooth coordinate maps with invertible differential have smooth local inverses, by iterating the inverse derivative formula. Smooth vector fields have unique smooth local flows under countable choice. ([[thm-euclidean-inverse-function-theorem]], [[thm-fundamental-theorem-on-flows]])

[F2] A four-page strip complex whose two end matchings are distinct has a disk quotient after collapsing its common arc. If the end matchings agree, its quotient is two disks joined at their interior centers. Its outer edge graph is the boundary of the resulting disk in the first case. ([[lem-four-page-arc-collapse-is-a-disk-for-opposite-end-pairings]])

[F3] A smooth embedded compact arc in $S^3$ can be collapsed by a continuous surjection to $S^3$ with only that arc as a non-singleton fiber, supported in any prescribed open neighborhood. ([[lem-collapsing-a-smooth-embedded-arc-preserves-the-three-sphere]])

## Proof

1.1 Orient $\alpha$ from its first to its second endpoint, and extend this orientation to $A$. Along its open part choose continuous smooth transverse directions $u$ on $F_0$ and $v$ on $F_1$ so that the ordered triple $(\dot A,u,v)$ has positive ambient orientation. Such choices exist along an interval: choose the first direction in finite surface charts and interpolate consecutive signs consistently, and choose the sign of the second by the displayed orientation condition. Inside the radial collars these directions extend to nonzero boundary-tangent directions at the two points of $L$. To verify this, write the two collars as $(s,r,\theta_k(s))$. At a common radial arc their transverse tangents have base component $\partial_s$ and angular component $r\theta_k'(s)$ in the oriented unit angular direction of the normal disk. The boundary-curve transversality says $\theta_0'(s)-\theta_1'(s)\ne0$ there. Hence the orientation of their ordered transverse pair has constant nonzero sign for every $r>0$ and has a definite limiting sign choice on each copy of the boundary tangent at $r=0$. The individual directions remain transverse to $A$ on their own surfaces all the way to those endpoints. [given, construct]

2.1 These directions give relative strips on both surfaces. Extend the transverse field on each surface to a neighborhood of $A$, tangent to $L$ at its two ends, using finitely many surface charts and cutoffs. In the boundary charts take its restriction to $L$ to be a signed unit tangent for a common arclength parameter. Its short flow in [F1] sends $(t,r)$ to the time-$r$ point starting at $A(t)$; the two derivatives are independent on the zero section. By [F1], compactness and the same converging-collision argument as for a normal arc chart, it is an embedded rectangle for a sufficiently small uniform width. Uniqueness of the flow retains its two end edges on $L$. The positive and negative halves give two pages on each surface. By the isolated-intersection hypothesis, after shrinking they meet only along $A$ and their end edges on $L$. Their widths on these end edges can be chosen equal in the common arclength parameter, so the end identifications are pointwise in the page radius. Label the $u$-positive, $v$-positive, $u$-negative and $v$-negative pages by $0,1,2,3$. This gives exactly the asserted four-page neighborhood. [step 1.1, F1, construct]

3.1 At either exterior endpoint project $u,v$ to its boundary torus along $\dot A$. These are nonzero tangent vectors parallel respectively to the two boundary curves: each surface tangent plane contains $\dot A$ and its boundary-curve tangent. Let $s_0,s_1\in\{1,-1\}$ record whether those projected directions agree with the chosen orientations of the respective boundary curves. Following the radial collars to $L$ retains precisely these signs relative to the common oriented boundary tangent, by the collar coordinates in step 1.1. The positive page on $F_0$ is therefore glued to the positive page on $F_1$ exactly when $s_0s_1=1$. If the product is negative it is glued to the negative page instead. Thus the matching at that endpoint is $M$ for product $1$ and $N$ for product $-1$. This assertion uses the signs separately at each endpoint, not a presumed orientation of either whole surface. [step 1.1, step 2.1, construct, algebra]

4.1 At the first endpoint $\dot A$ points from the solid tube into $X$; at the second it points back toward the solid tube. Projection along $\dot A$ consequently carries the oriented transverse plane determined by $(\dot A,u,v)$ to the oriented torus plane with sign $+1$ at the first endpoint and $-1$ at the second. Indeed the solid tube boundary orientation is defined by putting its outward normal first, and that normal has respectively positive and negative component along $\dot A$. Therefore the two local boundary intersection signs are $i_0=s_0^{\mathrm{first}}s_1^{\mathrm{first}}$ and $i_1=-s_0^{\mathrm{second}}s_1^{\mathrm{second}}$. By step 3.1 the end matchings differ exactly when the two products differ. These displayed formulas show this is equivalent to $i_0=i_1$. Equal matchings occur exactly when $i_0=-i_1$. [step 1.1, step 3.1, construct, algebra]

5.1 Apply [F2] to the actual neighborhood in step 2.1. By step 4.1 the standard sign sums $2$ and $-2$ give its disk quotient, while sum zero gives the two-disk wedge. To realize the former quotient inside the ambient sphere use [F3] on the smooth arc $A$, with any prescribed neighborhood as support. Its restriction to the compact $K$ has exactly the same identifications as $K/A$. The induced map of that quotient onto its image in $S^3$ is a continuous bijection from a compact space to a Hausdorff space, hence a homeomorphism. Its image is therefore an embedded topological disk. The construction has proved its intrinsic topology and its ambient embedding, while making no local-flatness conclusion at the collapsed point. [step 2.1, step 4.1, F2, F3, construct] ∎
