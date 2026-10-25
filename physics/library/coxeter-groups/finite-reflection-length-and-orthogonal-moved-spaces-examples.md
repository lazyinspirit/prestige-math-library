---
page: finite-reflection-length-and-orthogonal-moved-spaces-examples
title: "Finite Reflection Length and Orthogonal Moved Spaces — Examples"
status: published
requires: [finite-reflection-length-and-orthogonal-moved-spaces]
items: []
examples: [ex-cg-simple-and-reflection-length-of-a-long-transposition-in-s5,
           ex-cg-wall-form-and-line-restrictions-of-a-plane-rotation,
           ex-cg-moved-space-intersection-is-not-a-meet-in-a3]
---

This companion is a dependency leaf: its three examples use only the theory of
[[finite-reflection-length-and-orthogonal-moved-spaces]] and that page's
prerequisite closure, and no other page or item depends on them. Each example
is a complete finite computation.

[[ex-cg-simple-and-reflection-length-of-a-long-transposition-in-s5]] works in
type $A_4$: under the isomorphism $W\to S_5$, $s_i\mapsto(i\ i+1)$, the
reflections are exactly the transpositions, the simple length of a transposition
$(i\ j)$ with $i<j$ is its inversion number $2(j-i)-1$, and
$\ell_T(\varphi^{-1}(\sigma))=5-c(\sigma)$ is read off the fixed space of
$\sigma$ in the sum-zero hyperplane. The long transposition $(1\ 5)$ therefore
has $\ell=7$ but $\ell_T=1$, and the longest element
$w_0=(1\ 5)(2\ 4)$ has $\ell=10$ and $\ell_T=2$, while every $5$-cycle has
$\ell_T=4=\dim V$; the example also exhibits
$(1\ 5)=(2\ 5)(1\ 2)(2\ 5)^{-1}$ explicitly as a reflection.

[[ex-cg-moved-space-intersection-is-not-a-meet-in-a3]] works in type $A_3$
inside the sum-zero hyperplane of $\mathbb R^4$, under the isometry
$e_{s_i}\mapsto\frac1{\sqrt2}(e_i-e_{i+1})$: the elements
$\alpha=\varphi^{-1}\bigl((1\ 2)(3\ 4)\bigr)$ and
$\beta=\varphi^{-1}\bigl((1\ 4)(2\ 3)\bigr)$ both lie below the $4$-cycle
$\gamma$, and their moved spaces are the two planes
$\{x_2=-x_1,\ x_4=-x_3\}$ and $\{x_2=-x_3,\ x_4=-x_1\}$, which meet in the line
$\mathbb R(e_1-e_2+e_3-e_4)$. That line contains no root of $A_3$, so no
element of $W$ has it as moved space, the only common lower bound of $\alpha$
and $\beta$ is $1$, and the moved space of the meet, $M(1)=0$, is strictly
smaller than the intersection $M(\alpha)\cap M(\beta)$: arbitrary subspace
intersection does not compute the meet.

[[ex-cg-wall-form-and-line-restrictions-of-a-plane-rotation]] works in the
rank-two system $I_2(m)$: for $A=\rho(st)=r_sr_t$ the moved space is all of
$V$, in oriented orthonormal coordinates $S_A=(A-\mathrm{id})^{-1}$ is
multiplication by $1/(e^{i\theta}-1)=-\tfrac12-\tfrac i2\cot(\theta/2)$ with
$\theta=2\pi/m$, and the line restrictions $H_L=\Pi_LS_A\Pi_L$ are the scalar
$-\tfrac12$, so $L\mapsto A_L=\mathrm{id}-2\Pi_L$ is the bijection from lines to
reflections below $A$, with $A_L\in\rho(W)$ exactly for the $m$ root lines. For
$m=4$ the pair $A$ and $w_0=A^2$ satisfies $M(w_0)=V=M(A)$ although
$w_0\not\le_TA$, $A\not\le_Tw_0$, and no element of $W$ lies above both; this
shows that the common-upper-bound hypothesis in the rigidity statement is
indispensable.

The results tested here are proved on the theory page: the Wall form, the
subspace restriction and the prefix form of $\le_{\mathrm O}$ in
[[lem-cg-orthogonal-wall-form-and-subspace-restriction]], the factorizations
and independent normals in
[[lem-cg-reflection-factorizations-and-independent-normals]], and Carter's
formula together with the rigidity statement in
[[thm-cg-carter-reflection-length-and-absolute-order]]. The examples are
evidence within their computed scope and do not replace those proofs.
