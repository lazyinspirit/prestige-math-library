---
page: tits-cones-chambers-and-parabolic-stabilizers-examples
title: "Tits Cones, Chambers, and Parabolic Stabilizers — Examples"
status: published
requires: [tits-cones-chambers-and-parabolic-stabilizers]
items: []
examples: [ex-cg-tits-cone-of-infinite-dihedral-type,
           ex-cg-chamber-face-stabilizers-in-a2,
           ex-cg-outside-tits-cone-point-with-infinite-stabilizer]
---

This companion is a dependency leaf: its examples use only the theory of
[[tits-cones-chambers-and-parabolic-stabilizers]] and that page's prerequisite
closure.

[[ex-cg-tits-cone-of-infinite-dihedral-type]] computes the Tits cone of the
infinite dihedral group without invoking the recorded slip in the source: in
the coordinates $(x_s,x_t)$ one has $U=\{\Delta>0\}\cup\{0\}$,
$U^\circ=\{\Delta>0\}$, $\overline U=\{\Delta\ge0\}$ for
$\Delta(f)=f(e_s+e_t)$, the boundary line $\{\Delta=0\}$ carries the infinite
stabilizer $\langle st\rangle$ away from the origin, and every point of
$U\setminus\{0\}$ has stabilizer of order at most $2$.
[[ex-cg-chamber-face-stabilizers-in-a2]] checks a wall stabilizer in $A_2$:
the three root lines cut the plane into six chambers on which $W$ acts simply
transitively, $\operatorname{Stab}_W(0,1)=\{1,s\}$, the orbit of $(0,1)$ has
three points with $(0,1)$ the unique point of the orbit in $C$, and
$sC\cap C=\{x_s=0,\ x_t\ge0\}$. Finally,
[[ex-cg-outside-tits-cone-point-with-infinite-stabilizer]] shows that a vector
outside the Tits cone need not have a finite parabolic stabilizer: in the
product of two infinite dihedral groups the point $(-1,0,1,-1)$ lies strictly
outside even the closed cone and has the infinite stabilizer
$\{1,s_2\}\times\langle s_3s_4\rangle$.
