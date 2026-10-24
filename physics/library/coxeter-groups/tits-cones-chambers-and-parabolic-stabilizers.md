---
page: tits-cones-chambers-and-parabolic-stabilizers
title: "Tits Cones, Chambers, and Parabolic Stabilizers"
status: published
requires: [canonical-roots-signs-and-faithful-reflections, hilbert-space-geometry-and-riesz-representation]
items: [def-cg-tits-cone-and-fundamental-chamber,
        thm-cg-tits-cone-finite-negativity-and-convexity,
        thm-cg-dual-chamber-intersections-and-point-stabilizers,
        thm-cg-tits-cone-interior-and-local-finiteness]
examples: []
---

Chambers of a Coxeter group live in the dual space. For the contragredient
action of $\rho(W)$ on $V^*$ and the closed chamber
$C=\{f:f(e_s)\ge0\ \text{for all}\ s\}$,
[[def-cg-tits-cone-and-fundamental-chamber]] fixes the chamber system
$wC$, the **Tits cone** $U=\bigcup_{w\in W}wC$, its ordinary
finite-dimensional interior $U^\circ$ for the coordinate metric
$d(f,g)=\max_s|f(e_s)-g(e_s)|$ when $S\ne\emptyset$ (and $d(0,0)=0$ in empty rank), and the negative-root set
$\operatorname{Neg}(f)$; the union definition deliberately asserts neither
convexity nor local finiteness.

The three theorems make the union usable. [[thm-cg-tits-cone-finite-negativity-and-convexity]]
proves the criterion $f\in U\iff\operatorname{Neg}(f)$ finite, the one-letter
reduction $\operatorname{Neg}(s\cdot f)=r_s(\operatorname{Neg}(f)\setminus\{e_s\})$
when $f(e_s)<0$, with its termination in $C$, the inversion-set bounds
$\operatorname{Neg}(f)\subseteq N(w)$ and
$|\operatorname{Neg}(f)|\le\ell(w)$ whenever $w\cdot f\in C$, and convexity of $U$ under nonnegative
scalings and convex combinations. [[thm-cg-dual-chamber-intersections-and-point-stabilizers]]
shows that a point of $U$ has exactly one representative in the fundamental
chamber, identifies $\operatorname{Stab}_W(f)$ for $f\in C$ with the parabolic
$W_{S(f)}$, conjugates this formula along $U$, and computes the general
intersection $wC\cap C$ by the same left-descent argument.
[[thm-cg-tits-cone-interior-and-local-finiteness]] proves
$f\in U^\circ\iff W_{S(f)}$ finite for $f\in C$, that $U^\circ$ is the union of
the $W$-translates of the spherical faces $C^f$, that every point of $U^\circ$
has a neighborhood meeting only finitely many chambers and walls (hence so does
every compact subset), and that points with infinite parabolic stabilizer are
approached from outside $U$ by the explicit perturbations $f-t\,\delta_I$; no
local finiteness is claimed on the boundary. All four items are choice-free.
The finite-dimensional Riesz representation used in the local-finiteness argument is [[thm-riesz-representation-in-finite-dimensions]]; the inner-product conventions are fixed by [[def-real-and-complex-inner-product-space]] on [[hilbert-space-geometry-and-riesz-representation]].
The compact-subset conclusion uses [[lem-compactness-is-intrinsic]] to pass from intrinsic compactness to an ambient ball cover, formed from all suitable balls so that no choice of radii is needed.
The companion [[tits-cones-chambers-and-parabolic-stabilizers-examples]] tests
these constructions in the infinite dihedral, $A_2$ and product types.
