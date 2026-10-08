---
page: finite-reflection-arrangements-and-spherical-coxeter-complexes
title: "Finite Reflection Arrangements and Spherical Coxeter Complexes"
status: draft
items: [def-cg-finite-reflection-arrangement-and-spherical-chambers, thm-cg-finite-chamber-tiling-and-coset-face-identification, thm-cg-finite-parabolic-longest-element-and-opposition]
examples: []
---

Finite root hyperplanes divide Euclidean space into simplicial chambers. Their spherical sections give the Coxeter complex, with faces indexed by cosets and stabilizers proved rather than assumed.

The page is authored as three draft items, in dependency order. [[def-cg-finite-reflection-arrangement-and-spherical-chambers]] identifies $V$ with $V^*$ by the positive definite form $B$ only here, and defines the finite arrangement $\mathcal A$ of root hyperplanes, its chambers and closed chambers, the closed and open faces $\overline{C_I}$ and $C_I$ of the fundamental chamber, the spherical chamber complex on the unit sphere $S^{|S|-1}$, and the coset face poset $\{wW_I:I\subsetneq S\}$ ordered by reverse inclusion; clause (4) records explicitly that the definition asserts neither the tiling nor the face or triangulation identifications, which are the content of its recorded justifier.

[[thm-cg-finite-chamber-tiling-and-coset-face-identification]] proves them: the Tits-cone criterion gives $U=V^*$, the complement of the walls is the disjoint union of the open chambers $wC^\circ$ with closures $wC$, the $B$-dual basis describes each face $\overline{C_I}$ as the cone on $\{v_s:s\notin I\}$, the dihedral angle between adjacent walls is $\pi/m(s,t)$, the assignment $wW_I\mapsto w\overline{C_I}$ is a bijection onto the proper faces with the intersection formula $w\overline{C_I}\cap v\overline{C_J}=w\overline{C_{I\cup J\cup S(v^{-1}w)}}$, point stabilizers are $wW_Iw^{-1}$, and the abstract coset complex is identified with a triangulation of the sphere $S^{|S|-1}$ by the radial normalization of an explicit simplexwise affine map. The empty case $S=\emptyset$ is separated first.

[[thm-cg-finite-parabolic-longest-element-and-opposition]] proves for a general finite Coxeter system the unique $w_0$ with $w_0\cdot C=-C$, equivalently $N(w_0)=\Phi_+$, its length $\ell(w_0)=|\Phi_+|=|T|$, the length-complement identities, $w_0^2=1$ and the permutation $w_0sw_0=\sigma(s)$ of $S$; and for every finite standard parabolic $W_I$ the analogous longest element with $\ell(w_0(I))=|\Phi_I\cap V_I^+|$.

## Prerequisites and reading

Required earlier pages: [[finite-coxeter-diagrams-and-complete-classification]], [[finite-lattice-projections-and-coxeter-chain-labels]], [[further-trigonometric-identities-and-inverses]]. The companion [[finite-reflection-arrangements-and-spherical-coxeter-complexes-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.
