---
page: canonical-roots-signs-and-faithful-reflections-examples
title: "Canonical Roots, Signs, and Faithful Reflections — Examples"
status: draft
items: []
examples: [ex-cg-root-inversions-and-chambers-in-i2-5-a2-and-i2-infinity, ex-cg-indefinite-form-admits-faithful-reflection-representation, ex-cg-mixed-sign-vector-is-not-a-root]
---

This companion is a dependency leaf: its examples use only the theory of [[canonical-roots-signs-and-faithful-reflections]] and that page's prerequisite closure, and no other page or item depends on them.

[[ex-cg-root-inversions-and-chambers-in-i2-5-a2-and-i2-infinity]] computes the full rank-two data for $m=3,5,\infty$: the positive roots, the inversion sets $N(u_k)$ of the alternating words together with the complement formula $N(u_k)=\Phi_+\setminus N(u_{k-5}')$ and the explicit value of $N(u_7)$ in $I_2(5)$, and the chamber geometry — six sectors $C^\circ,sC^\circ,stC^\circ,stsC^\circ,tsC^\circ,tC^\circ$ with $stsC^\circ=-C^\circ$ in $A_2$, the ten sectors cut out by the five root lines with the wall-separation ranges in $I_2(5)$, and, for infinite dihedral type, the roots $e_s+ku$, $e_t+ku$ along the null vector $u=e_s+e_t$ with the chambers realised as cones over the intervals $(j,j+1)$ of the affine line $f(e_s)+f(e_t)=1$.

[[ex-cg-indefinite-form-admits-faithful-reflection-representation]] shows that an indefinite or degenerate Coxeter form does not obstruct faithfulness: for the all-infinite rank-three matrix the form has signature $(2,1)$, and for the degenerate rank-two form its radical is $\mathbb R(e_s+e_t)$; the root-length criterion applies verbatim to both, while what fails in the degenerate case is only the identification of $V$ with $V^*$ through $B$. [[ex-cg-mixed-sign-vector-is-not-a-root]] marks the exact scope of the sign theorem: the vector $e_s-e_t$ has mixed signs and $B$-norm $2+2c\ne1$ and so is not a root, although every element of the $W$-orbit of the simple roots indeed has a sign; the comparison cases $m=3$ and $m=\infty$ are evaluated explicitly.

The results tested here are proved on the theory page: the rank-two chamber and length facts of [[lem-cg-rank-two-prefix-and-chamber-length-induction]], the sign partition of [[thm-cg-root-sign-and-simple-reflection-positivity]], the faithfulness of [[thm-cg-root-length-criterion-and-faithfulness]], the inversion recursion of [[def-cg-geometric-inversion-set]] and the inversion formula of [[thm-cg-root-inversion-formulas-and-strong-exchange]]. The examples are evidence within their computed scope and do not replace those proofs.
