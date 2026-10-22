---
id: lem-ruled-half-turn-arc-model-has-a-single-crossing-tangle-projection
kind: lemma
title: "Ruled half-turn arc model has a single-crossing tangle projection"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-jordan-schoenflies-extension-for-plane-curves
  - lem-standard-intersection-arc-pairs-admit-a-relative-ruled-half-turn-model
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is used only for Jordan–Schönflies on the outer sphere curve when identifying its radial cone as a standard disk. All rotations, boundary orders, graph projections and fiber homeomorphisms are explicit."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Procedure 2.20 and Figure 6, PDF pp.10–11; explicit ruled-model crossing calculation supplied here"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Statement

Assume full AC. Fix $\varepsilon>0$, $\epsilon\in\{1,-1\}$, and the ellipsoid
$$B=\{x^2/(1+\varepsilon^2)+(y^2+z^2)/\varepsilon^2\le1\}.$$
Inside it take the two ruled strips $F_0=\{z=0,-1\le x\le1\}$ and $F_1=\{(x,t\cos\theta(x),t\sin\theta(x)):-1\le x\le1\}$, intersected with $B$, where $\theta(x)=\pi(1+\epsilon x)/2$. Their local boundary link consists of the two end chords $x=\pm1,z=0$. Let $C=(F_0\cup F_1)\cap\partial B$.

The smooth ball diffeomorphism rotating each normal plane by $-\theta(x)/2$ carries these link chords to two orthogonal chords at distinct $x$ heights. There is a proper locally flat topological disk $P$ in the ball, bounded exactly by the rotated curve $C$, such that projection of the rotated link parallel to the $x$ axis onto $P$ has precisely one transverse double point. The disk is flat and smooth near that double point, and its two projected branches join opposite pairs of the four boundary marks. For $\epsilon=1$ the $z$-axis chord is over the $y$-axis chord with respect to increasing $x$; for $\epsilon=-1$ their roles reverse. The pair $(B,P)$ is a standard ball-disk pair. Smoothness of $P$ away from the central projection chart and global link reconstruction are not asserted.

## Statement references

[[def-axiom-of-choice]]

[[lem-standard-intersection-arc-pairs-admit-a-relative-ruled-half-turn-model]]

## Facts & Assumptions

**Given:** The explicit ellipsoid, the two ruled strips, and the sign $\epsilon$.

[F1] Under full AC every Jordan curve on $S^2$ can be carried to an equator by a sphere homeomorphism, by stereographic projection, plane Jordan–Schönflies and extension at infinity. Radially extending this sphere map identifies the cone on that curve with a standard ball-disk pair; fixed diagonal scaling gives the same assertion for an ellipsoid. ([[lem-jordan-schoenflies-extension-for-plane-curves]])

[F2] The actual isolated standard intersection arc pair admits the displayed ruled model in a smaller cylinder, with the literal link fixed, by an ambient topological isotopy. Its actual angular formula preserves $x$ and normal radius, hence preserves every such small confocal ellipsoid and carries its outer page curve to that of the ruled model. This records how the explicit model applies; the following calculation proves its tangle assertion directly. ([[lem-standard-intersection-arc-pairs-admit-a-relative-ruled-half-turn-model]])

## Proof

1.1 Put $d=\varepsilon^2/\sqrt{1+\varepsilon^2}$. Each original link chord is $(\pm1,t,0)$ with $|t|\le d$, by the ellipsoid equation. The map $W$ preserving $x$ and rotating $(y,z)$ by $-\theta(x)/2$ is a smooth diffeomorphism of $B$ onto itself: it preserves $y^2+z^2$ and has inverse rotation by $\theta(x)/2$. Its link image consists of $\Lambda_y=\{(-\epsilon,t,0):|t|\le d\}$ and $\Lambda_z=\{(\epsilon,0,t):|t|\le d\}$. The four boundary edges of $W(C)$ have normal angles $-\theta/2$, $\theta/2$, $\pi-\theta/2$ and $\pi+\theta/2$. They consecutively cover the four angular quadrants, meeting at their four endpoint marks. [given, construct, algebra]

2.1 For a normal angle $\phi$, let $a(\phi)\in[0,\pi/2]$ be its angular distance from $\pi\mathbb Z$, and set $b(\phi)=\epsilon(4a(\phi)/\pi-1)$ and $R(\phi)=\varepsilon\sqrt{1-b(\phi)^2/(1+\varepsilon^2)}$. The edge formulas in step 1.1 show that $W(C)$ is exactly $(b(\phi),R(\phi)\cos\phi,R(\phi)\sin\phi)$. In particular it is a Jordan curve, $d\le R\le\varepsilon$, and its normal-plane projection bounds the star-shaped disk $\Omega=\{(r\cos\phi,r\sin\phi):0\le r\le R(\phi)\}$. Its four marked points occur in cyclic order at angles $0,\pi/2,\pi,3\pi/2$. Thus the two ends of each chord belong to opposite marks. [step 1.1, construct, algebra]

3.1 Choose a smooth nondecreasing $\kappa:[0,1]\to[0,1]$, zero near zero and one for $s\ge1/2$, and put $\zeta(s)=s\kappa(s)$. Define $h(r,\phi)=\zeta(r/R(\phi))b(\phi)$ on $\Omega$ and $h(0)=0$. It is continuous, vanishes on a neighborhood of the origin, and equals $b$ on the boundary. Its graph $P=\{(h(y,z),y,z):(y,z)\in\Omega\}$ is a disk. It lies in $B$: for $r\le R(\phi)$ the allowed absolute $x$ height $A(r)=\sqrt{1+\varepsilon^2}\sqrt{1-r^2/\varepsilon^2}$ is at least $|b(\phi)|$, while $|h|\le|b|$. For strict $r<R$, the ellipsoid inequality is strict. Thus it is proper with boundary exactly $W(C)$. Near the origin $h=0$, so this disk is flat and smooth there. [step 2.1, construct, algebra]

4.1 Verify the full ball-disk type, including the outer corners. The ordinary radial cone on $W(C)$ is the graph $h_0(r,\phi)=(r/R(\phi))b(\phi)$ over the same $\Omega$. By [F1] it is a standard ball-disk pair. For each fixed normal point $(y,z)\in\Omega$, use the increasing piecewise-affine homeomorphism of the vertical interval $[-A(r),A(r)]$ fixing its endpoints and taking $h_0$ to $h$. Use the identity when the interval degenerates, and outside $\Omega$. In the interior both marked heights are strictly between the interval endpoints. Near $\partial\Omega$ they are equal, because $\zeta(s)=s$ for $s\ge1/2$, so the map is the identity there; near the origin their difference tends uniformly to zero. The maximum displacement of such an interval map, and of its inverse, is at most $|h-h_0|$. Hence these fiber maps paste continuously, including at zero and at the degenerate boundary fibers, to a ball homeomorphism fixed on $\partial B$. It sends the cone exactly to $P$. Consequently $(B,P)$ is a standard pair and $P$ is locally flat everywhere. [step 2.1, step 3.1, F1, construct]

4.2 Project each chord to the point on $P$ with its same $(y,z)$ coordinates. Along the $y$ axis, $b=-\epsilon$ and $R=d$, so the projected point is $(-\epsilon\zeta(|t|/d),t,0)$. Along the $z$ axis it is $(\epsilon\zeta(|t|/d),0,t)$. These two arcs meet only at $t=0$, where both lie in the flat central disk and have the two perpendicular coordinate directions. They are smooth and regular as curves, because $\zeta$ is smooth, is zero near zero, and the nonconstant coordinate is $t$. For $|t|<d$, one has $\zeta(|t|/d)<1$, so the signed $x$ heights of the actual chords over their projections are respectively $-\epsilon(1-\zeta)$ and $\epsilon(1-\zeta)$, never zero in the interior. They vanish exactly at the boundary marks. Thus the two arcs have the asserted single crossing and opposite height order, with no additional projected intersection or boundary coincidence. [step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 The ball diffeomorphism $W$ and the proper disk $P$ have therefore produced an explicit one-crossing tangle projection relative to the entire four-page boundary curve, rather than merely a pairing of four points. For an actual standard arc one first uses the smaller ruled neighborhood in [F2], choosing the ellipsoid sufficiently small to lie in that cylinder; the displayed two original end chords remain the literal link before $W$. All local pairing and height conclusions then apply to that actual tangle. The construction has not supplied global smoothing of the projection disk or the isotopy identifying all globally reconstructed checkerboard surfaces, and none was asserted. [step 1.1, step 2.1, step 4.1, step 4.2, F2, construct] ∎
