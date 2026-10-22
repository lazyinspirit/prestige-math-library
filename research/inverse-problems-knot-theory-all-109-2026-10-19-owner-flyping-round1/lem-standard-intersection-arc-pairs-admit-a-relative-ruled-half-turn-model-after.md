---
id: lem-standard-intersection-arc-pairs-admit-a-relative-ruled-half-turn-model
kind: lemma
title: "Standard intersection-arc pairs admit a relative ruled half-turn model"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-standard-intersection-arcs-admit-locally-flat-ambient-collapse
  - lem-standard-intersection-arcs-have-opposite-end-page-pairings
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the actual adapted standard-arc chart supplier. Given that finite chart and its strip parameters, all angular interpolation maps and isotopy formulas are explicit and add no choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Procedure 2.20 and Figure 6, PDF pp.10–11; actual ruled-pair adapter supplied here"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Statement

Assume full AC. Let two compact smooth embedded surfaces span the same smooth link with supplied radial collars. Let $A$ be an isolated smooth radial extension of a proper transverse common arc in the link exterior, with transverse boundary-curve crossings and equal ordered endpoint signs on the tori oriented outward toward the exterior.

There is a smooth ambient coordinate chart near $A$, with $A=[-1,1]\times\{0,0\}$, in which the first surface is $z=0$, $-1\le x\le1$, and the local link is the two end lines $x=\pm1,z=0$. An ambient topological isotopy supported in this chart, fixing that first surface and the literal link pointwise, carries the second surface in a smaller normal cylinder to
$$\{(x,R\cos\theta(x),R\sin\theta(x)):-1\le x\le1,\ |R|<r_0\},$$
where $\theta(x)=\pi(x+1)/2$ or $\pi(1-x)/2$. It fixes the common arc pointwise and introduces no other identifications. No differentiability of the ambient isotopy at the two end faces or at the common axis is asserted. This is a local surface-pair normal form, without a diagram reconstruction conclusion.

## Statement references

[[def-axiom-of-choice]]

[[lem-standard-intersection-arcs-admit-locally-flat-ambient-collapse]]

## Facts & Assumptions

**Given:** Full AC, the actual isolated standard extended arc, the surface pair and radial collars, and their transverse boundary crossings.

[F1] The actual adapted-chart proof constructs $F_0=\{z=0,-1\le x\le1\}$ and a strip on $F_1$ parametrized by $(x,Y(x,t),Z(x,t))$, with $(Y,Z)=t\,v(x,t)$, smooth nonzero $v$, and strictly increasing normal radius on each transverse half. At $x=\pm1$ the strip is $(x,\sigma_\pm t,0)$ for fixed signs $\sigma_\pm$. Only the two supplied surface strips occur in a sufficiently small chart. These are its actual first two proof steps. ([[lem-standard-intersection-arcs-admit-locally-flat-ambient-collapse]])

[F2] In the actual page model the two pages of each surface are opposite along the interior common arc. Standard endpoint signs give different end matchings, so the signed $F_1$ transverse field relative to the common boundary tangent has opposite signs at the two ends when $F_0$'s transverse coordinate has the same sign at both end lines. ([[lem-standard-intersection-arcs-have-opposite-end-page-pairings]])

## Proof

1.1 Use [F1] and shrink its fixed normal cylinder to $|x|\le1$, $\sqrt{y^2+z^2}\le\delta$. Strict radius monotonicity and compactness give one point on each $F_1$ half at every sufficiently small normal radius $r>0$, for each $x\in[-1,1]$. They depend smoothly on $x,r$ for positive radius. The function $Z(x,t)$ is nonzero for $-1<x<1$ and $t\ne0$ in this cylinder, because otherwise there would be an extra intersection with $F_0$ away from $A$. Its linear coefficient $Z_t(x,0)$ is also nonzero there, by transversality along the open common arc. Reverse the $t$ coordinate if needed to make this coefficient positive. The two connected half-strips then have $Z>0$ for $t>0$ and $Z<0$ for $t<0$. Thus their positive-radius angles have unique lifts $\alpha_+(x,r)\in(0,\pi)$ and $\alpha_-(x,r)\in(\pi,2\pi)$ for interior $x$. [given, F1, construct]

2.1 These lifts extend continuously to $r=0$ and the two end faces. Indeed $(Y,Z)=t\,v(x,t)$ with smooth nonzero $v$ on the closed strip; the normalized positive and negative half directions therefore extend uniformly as their signed $t$ tends to zero. At each end $v=(\sigma_\pm,0)$, so the positive-half angle is exactly zero or $\pi$, and the negative-half angle is respectively $\pi$ or $2\pi$. By [F2], $\sigma_-\ne\sigma_+$: the first surface has the same positive $y$ direction at its two boundary lines, so opposite end matchings mean precisely opposite signs for the second surface. Choose $\theta(x)=\pi(x+1)/2$ when $\sigma_-=1$, and $\theta(x)=\pi(1-x)/2$ otherwise. Its endpoint angles coincide with those of $\alpha_+$, and $\theta+\pi$ with those of $\alpha_-$. [step 1.1, F1, F2, construct]

3.1 Choose a smooth radial cutoff $\mu(r)$ equal to one near zero and zero near $\delta$. For $0\le u\le1$ and $-1<x<1$, prescribe target angles $\gamma_+=(1-u\mu)\alpha_++u\mu\theta$ and $\gamma_-=(1-u\mu)\alpha_-+u\mu(\theta+\pi)$. They remain respectively in $(0,\pi)$ and $(\pi,2\pi)$. On each normal circle use the increasing piecewise-affine angle map fixing $0,\pi,2\pi$ and taking $\alpha_\pm$ to $\gamma_\pm$, affine on each of the four intervening intervals. Its slopes are positive, so it and its inverse are circle homeomorphisms. The formulas depend continuously on $u,x,r$ as long as the breakpoints are distinct. At an end face they converge uniformly to the identity: the maximum angular displacement on the four affine intervals is bounded by $\max(|\gamma_+-\alpha_+|,|\gamma_--\alpha_-|)$, which tends to zero by step 2.1, uniformly in $r,u$. The inverses have the same uniform displacement bound. Define the angle maps to be the identity on the two end faces. [step 1.1, step 2.1, construct, algebra]

4.1 Preserve $x$ and normal radius and apply those angle maps for $r>0$; fix the axis at $r=0$. This gives a homeomorphism of the closed cylinder for each $u$, continuously in time, with the inverse furnished by the inverse angle maps. Continuity at the axis needs no angular limit: normal radius is unchanged. It is the identity at $u=0$, near the cylinder's radial boundary, and on both end faces by step 3.1, so it extends by the identity outside the cylinder to an ambient topological isotopy. It fixes the whole local first surface pointwise because the angles zero and $\pi$ are fixed, and fixes the local link on the end lines for the same reason. The chart was chosen to contain no other portions of the link or the first surface, so their remaining portions are fixed too. [step 1.1, step 3.1, construct]

5.1 At $u=1$ and $r$ so small that $\mu(r)=1$, the two $F_1$ half-strip angles are exactly $\theta(x)$ and $\theta(x)+\pi$. Their unique points at each normal radius thus fill exactly the signed-radius ruled strip in the Statement. The first surface remains its original flat strip and their boundary remains the literal two original end lines. Every map was an ambient homeomorphism fixing the axis, so no point identifications or extra intersections were introduced. This proves the relative local normal form, while retaining explicitly the topological regularity of the isotopy at its possible nonsmooth loci. [step 1.1, step 2.1, step 3.1, step 4.1, construct] ∎
