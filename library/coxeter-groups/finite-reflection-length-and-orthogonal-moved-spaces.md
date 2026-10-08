---
page: finite-reflection-length-and-orthogonal-moved-spaces
title: "Finite Reflection Length and Orthogonal Moved Spaces"
status: draft
requires: [finite-reflection-arrangements-and-spherical-coxeter-complexes]
items: [def-cg-reflection-length-absolute-order-and-moved-space,
        lem-cg-orthogonal-wall-form-and-subspace-restriction,
        lem-cg-reflection-factorizations-and-independent-normals,
        thm-cg-carter-reflection-length-and-absolute-order]
examples: []
---

Reflection length counts arbitrary conjugate reflections rather than simple
generators, and in a finite Coxeter group every element is a product of exactly
$\dim M(w)$ of them, where $M(w)=\operatorname{im}(\rho(w)-\mathrm{id})$ is the
moved space in the positive definite reflection representation. This page
develops that equality, the absolute order it grades, and the geometry of moved
spaces of orthogonal operators.

[[def-cg-reflection-length-absolute-order-and-moved-space]] fixes the
conventions for a Coxeter system $(W,S)$ of finite type: the reflection length
$\ell_T(w)$ as the least number of elements of the conjugate reflection set $T$
whose product is $w$ (the minimum exists because $S\subseteq T$ and $S$
generates $W$), the absolute order $u\le_T v$ defined by the length identity
$\ell_T(v)=\ell_T(u)+\ell_T(u^{-1}v)$, the moved and fixed spaces
$M(A)=\operatorname{im}(A-\mathrm{id})$, $F(A)=\ker(A-\mathrm{id})$ of an
arbitrary linear map on the inner product space $(V,B)$, and the orthogonal
relation $B\le_{\mathrm O}A$ defined by rank additivity. Clause (4) records
explicitly that the definition asserts no order property, no rank-length
equality and no prefix description; those are proved by the items below.

[[lem-cg-orthogonal-wall-form-and-subspace-restriction]] is the
finite-dimensional linear algebra. It proves $M(A)=F(A)^\perp$ with
$V=M(A)\oplus F(A)$, that the Wall form
$\chi_A(u,v)=B\bigl((A-\mathrm{id})|_{M(A)}^{-1}u,v\bigr)$ satisfies
$\chi_A(u,v)+\chi_A(v,u)=-B(u,v)$ and is nondegenerate with symmetric part
$-\tfrac12B$, and it constructs for every subspace $U\subseteq M(A)$ the
operator $A_U=\mathrm{id}+H_U^{-1}$ on $U$ and $\mathrm{id}$ on $U^\perp$,
where $H_U$ is the operator with $B(H_Uu,v)=\chi_A(u,v)$ and
$H_U+H_U^*=-\mathrm{id}_U$. Its main theorem is that $U\mapsto A_U$ is an order
isomorphism from the subspaces of $M(A)$ onto the set
$\{B\in\mathrm O(V):B\le_{\mathrm O}A\}$, with inverse $B\mapsto M(B)$; it also
proves the rank-length equality and the prefix description of $\le_{\mathrm O}$
for products of reflections. The restriction $A_U$ is an element of
$\mathrm O(V)$ and need not lie in $\rho(W)$; the companion plane-rotation
example exhibits this inside $I_2(4)$.

[[lem-cg-reflection-factorizations-and-independent-normals]] passes back
inside $W$. For $w\ne1$ it produces a root $\alpha$ with
$F(w)\subseteq H_\alpha$ and $\alpha\in M(w)$: a generic point of $F(w)$ avoids
the finitely many intersections $H_\alpha\cap F(w)$, and its chamber
stabiliser is a parabolic containing a conjugate simple reflection whose normal
is a root. There follows $\rho(t_\alpha)\le_{\mathrm O}\rho(w)$ and the rank drop
$\dim M(w)=1+\dim M(t_\alpha w)$, and induction factors every $w$ into exactly
$\dim M(w)$ elements of $T$, giving $\ell_T(w)=\dim M(w)$. The telescoping
identity
$\rho(t_1\cdots t_m)-\mathrm{id}=\sum_{i=1}^m\rho(t_1\cdots t_{i-1})(\rho(t_i)-\mathrm{id})$
supplies the reverse inequality $\dim M(t_1\cdots t_m)\le m$ and shows that the
transported normals $\rho(t_1\cdots t_{i-1})\alpha_i$ are linearly independent
whenever $\dim M(t_1\cdots t_m)=m$. The argument uses the finite chamber tiling
of the prerequisite page, and it is choice-free.

[[thm-cg-carter-reflection-length-and-absolute-order]] assembles the order
theory. It proves Carter's formula
$\ell_T(w)=\dim M(w)=\dim V-\dim F(w)$, that $\le_T$ is a partial order of
finite rank with the prefix description of $u\le_T v$ and with $\ell_T$ as rank
function, the triangle inequality and the invariance of $\ell_T$ under
inversion and conjugation, the inclusions $M(u)\subseteq M(v)$ and
$F(v)\subseteq F(u)$ for $u\le_T v$, and the moved-space rigidity: for
$\alpha,\beta\le_T\delta$ one has $\alpha\le_T\beta$ if and only if
$M(\alpha)\subseteq M(\beta)$, so that $u\mapsto M(u)$ is an order isomorphism
from $[1,\delta]_T$ onto its image. The common upper bound $\delta$ is used
through the restriction of $\rho(\delta)$ to $M(\alpha)$ and is indispensable;
the companion rotation example shows that the converse implication fails
without it.

Earlier pages:
[[finite-reflection-arrangements-and-spherical-coxeter-complexes]] supplies the
finite reflection arrangement, the chamber system $wC$, the open faces $wC_I$
and the point stabilisers $\operatorname{Stab}_W(x)=wW_Iw^{-1}$ used by the
shortening argument, together with the root-reflection dictionary and the
positive definite Coxeter form. The companion
[[finite-reflection-length-and-orthogonal-moved-spaces-examples]] tests the
constructions in $S_5$, $S_4$ and $I_2(4)$. All four items and the companion
computations are choice-free.
