---
id: lem-standard-ball-disks-with-smooth-collars-admit-relative-smooth-replacement
kind: lemma
title: "Standard ball disks with smooth collars admit relative smooth replacement"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-euclidean-inverse-function-theorem
  - lem-jordan-schoenflies-extension-for-plane-curves
  - lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations
  - lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from plane Jordan–Schönflies; the finite smooth disk parametrization inherits countable choice. Given the standard-pair charts, the relative homeomorphism and its Alexander isotopy use explicit choice-free formulas."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology, Lemma 1.3; relative disk replacement is supplied locally here"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Procedure 2.20 and Figure 6; smoothing prerequisite supplied here"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Statement

Assume full AC. Let $B$ be a smoothly parametrized closed three-ball in a smooth three-manifold. Let $D\subset B$ be a properly embedded locally flat topological disk supplied with a homeomorphism of pairs $(B,D)\cong(B^3,D^2_0)$, where $D^2_0=B^3\cap\{z=0\}$. Suppose $C=\partial D$ is smooth and $D$ is a smooth embedded surface in a neighborhood of $C$, transverse to $\partial B$ there.

There is a smooth properly embedded disk $D'\subset B$, agreeing with $D$ on a smaller boundary collar, and an ambient topological isotopy of $B$, fixed pointwise on $\partial B$, carrying $D$ to $D'$. This isotopy extends by the identity outside $B$. No smoothness or differentiability of the supplied standard-pair homeomorphism is assumed. The assertion requires the actual smooth transverse collar; it does not apply directly to a disk with unrounded corners on its boundary.

## Statement references

[[def-axiom-of-choice]]

[[lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption]]

## Facts & Assumptions

**Given:** Full AC, the smooth ball parameter, the actual standard-pair homeomorphism, and the smooth transverse boundary collar of the disk.

[F1] Every Jordan region in the plane is a closed topological disk under full AC; prescribed boundary homeomorphisms extend. By stereographic projection and one-point compactification this gives the same assertion for either closed region cut out by a Jordan curve on a sphere. ([[lem-jordan-schoenflies-extension-for-plane-curves]])

[F2] A compact regular $C^2$ surface region homeomorphic to a closed disk has a $C^2$ disk parametrization with prescribed boundary parameter. For a smooth input the supplier's explicit disk-and-band proof uses smooth Morse handles, smooth collar moves and the smooth circle-extension formula, hence gives a smooth disk parametrization. This smooth-input use is of its actual proof, not an upgrade asserted for arbitrary $C^2$ input. ([[lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations]])

[F3] A smoothly parametrized ball with a smoothly parametrized boundary disk is diffeomorphic to a standard ball with a hemispherical window; the diffeomorphism retains the supplied window parameter with the necessary orientation. ([[lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption]])

[F4] A smooth map with invertible derivative has a smooth local inverse, by the inverse function theorem and differentiation of the inverse identity. ([[thm-euclidean-inverse-function-theorem]])

## Proof

1.1 Use the smooth ball parameter to work in $B^3$. The smooth embedded circle $C\subset S^2$ cuts the boundary sphere into two closed topological disk regions by [F1]. Both are smooth surface regions with boundary: the regular smooth curve has smooth graph charts, and each chosen side is a half-chart there. Choose one region $R$. By the smooth-input construction in [F2] it has an actual smooth disk parameter. Apply [F3] to $(B^3,R)$. The resulting smooth ball diffeomorphism $P$ carries $R$ to a hemisphere, hence carries $C$ to the equator. Therefore $E=P^{-1}(D^2_0)$ is a smooth proper disk with boundary exactly $C$, transverse to $\partial B^3$, and $(B^3,E)$ has a supplied smooth standard-pair chart. [given, F1, F2, F3, construct]

2.1 Adjust $E$ to agree with the given collar of $D$. Take smooth coordinates $(s,u,r)$ near $C$, with $s\in C$, signed normal coordinate $u$ within $S^2$, and inward coordinate $r\ge0$. These are obtained from the smooth curve's two-sided normal field in the oriented sphere and the radial collar of the ball. Transversality makes both disk collars graphs $u=f(s,r)$ and $u=g(s,r)$, with $f(s,0)=g(s,0)=0$; the first is the collar of $E$ and the second that of $D$. The graph representation follows by the inverse function theorem applied to projection onto $(s,r)$, and compactness gives one common collar width. Both functions are smooth. Choose a fixed small width $a>0$ in the $u$ coordinate, a smooth cutoff $\chi(u)$ supported in $|u|<a$ and equal to one for $|u|<a/2$, and a smooth radial cutoff $\eta(r)$ equal to one near $r=0$ and zero before the inner edge of a sufficiently small collar. [given, step 1.1, F4, construct]

3.1 On that collar put $T(s,u,r)=(s,u+\eta(r)\chi(u)(g(s,r)-f(s,r)),r)$. Shrink its radial support so that $|f|,|g|<a/4$ and $\|\chi'\|_\infty|g-f|<1/2$ there; this is possible uniformly because $f(s,0)=g(s,0)=0$ on compact $C$. Its derivative in $u$ is then greater than $1/2$. For each fixed $(s,r)$ the map in $u$ is strictly increasing and the identity outside a compact subinterval, hence onto with smooth inverse. Thus $T$ is a smooth ball diffeomorphism, extended by the identity off this collar, fixing the boundary pointwise because $g-f=0$ at $r=0$. Where $\eta=1$, the graph $u=f(s,r)$ maps exactly to $u=g(s,r)$, since $\chi(f)=1$. Consequently $D'=T(E)$ is smooth and agrees with $D$ on a boundary collar. It has the standard-pair chart $H_1=P\circ T^{-1}$. The same positivity estimate also applies to replacing $\eta$ by $t\eta$, although no smooth isotopy of the original nonsmooth disk is needed. [step 1.1, step 2.1, F4, construct, algebra]

4.1 Let $H_0:(B^3,D)\to(B^3,D^2_0)$ be the supplied topological standard-pair chart. On the boundary sphere the homeomorphism $d=(H_1|_{S^2})\circ(H_0|_{S^2})^{-1}$ preserves the equator, since both charts carry the same $C$ to it. Its radial extension $\overline d(r\omega)=r\,d(\omega)$, with $\overline d(0)=0$, is a ball homeomorphism preserving the flat disk; its inverse is the radial extension of $d^{-1}$, and continuity at zero follows from the unchanged radius. Thus $h=H_1^{-1}\circ\overline d\circ H_0$ is a ball homeomorphism taking $D$ onto $D'$ and restricting to the identity on $S^2$. This argument corrects the entire boundary map, rather than assuming the original standard-pair chart is boundary-fixed. [given, step 3.1, construct]

5.1 For $0<t\le1$ define $h_t(x)=t\,h(x/t)$ when $|x|\le t$, and $h_t(x)=x$ when $|x|\ge t$; set $h_0=\operatorname{id}$. The formulas agree at $|x|=t$ because $h$ fixes the unit sphere. Each $h_t$ is a homeomorphism, with inverse given by the same formula using $h^{-1}$. Joint continuity for positive $t$ follows by closed pasting, and at $t=0$ the map differs from the identity only inside the radius-$t$ ball, where $|h_t(x)-x|\le2t$. The identical bound applies to the inverses. Hence this is an ambient topological isotopy fixed on $S^2$, starting at the identity and ending at $h$. Pull back the original smooth ball parameter and extend by the identity outside $B$. At its endpoint it carries $D$ to the smooth disk $D'$ constructed above, with the asserted unchanged boundary collar. No derivative of $H_0$ was used. [step 3.1, step 4.1, construct] ∎
