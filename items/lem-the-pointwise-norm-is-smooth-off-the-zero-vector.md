---
id: lem-the-pointwise-norm-is-smooth-off-the-zero-vector
kind: lemma
title: The pointwise norm on a tangent space is smooth off the zero vector
status: published
origin: pipeline
deps:
  - cor-the-tangent-space-of-an-n-manifold-has-dimension-n
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-dimension
  - def-pointwise-norm-and-angle-from-a-riemannian-metric
  - def-riemannian-metric-and-riemannian-manifold
  - lem-derivative-of-a-power
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - thm-euclidean-inverse-function-theorem
  - thm-higher-regularity-of-local-inverses
  - thm-of-square-roots
  - thm-unique-coordinates-with-respect-to-an-ordered-basis
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10, printed pp.173-190: the radial function in exponential coordinates sends q to |exp_p^{-1}(q)|_{g_p}, whose smoothness off the origin rests on the elementary tangent-space fact isolated here."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Lecture 23, section 23.3, printed pp.170-172: differentiability of the distance function is reduced to smoothness of the tangent-space norm away from the origin."
---

## Statement

Let $(M,g)$ be a Riemannian manifold with $n=\dim M\in\mathbb N$, let
$p\in M$, and let
$$N_p:T_pM\to\mathbb R,\qquad N_p(w)=|w|_g=\sqrt{g_p(w,w)},$$
be the pointwise norm on the tangent space at $p$
([[def-pointwise-norm-and-angle-from-a-riemannian-metric]]). Then $N_p$ is
smooth on $T_pM\setminus\{0_p\}$.

Smoothness on the finite-dimensional real vector space $T_pM$ is read in its
canonical linear structure: for every ordered basis $e_1,\dots,e_n$ of $T_pM$
with coefficient isomorphism
$v:T_pM\to\mathbb R^n$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]),
the coordinate representative
$$\sigma_e(\lambda)=N_p\Bigl(\sum_{i=1}^{n}\lambda_i e_i\Bigr), \qquad \lambda\in\mathbb R^n\setminus\{0\},$$
is smooth; this condition is independent of the basis, because a
change-of-coordinate map is a linear isomorphism and both it and its inverse
are smooth. No choice principle is used beyond fixing one ordered basis.

## Facts & Assumptions

**Given:** The Riemannian manifold $(M,g)$ with $n=\dim M\in\mathbb N$, the point $p\in M$, the tangent space $T_pM$ with its real vector-space structure, and the pointwise norm $N_p$.

[F1] $g_p$ is a positive definite symmetric bilinear form on the real vector space $T_pM$: it is linear in each variable, $g_p(w,w')=g_p(w',w)$, and $g_p(w,w)>0$ for every nonzero $w\in T_pM$ ([[def-riemannian-metric-and-riemannian-manifold]]).

[F2] If $M$ is a smooth $n$-manifold and $p\in M$, then $T_pM$ is an $n$-dimensional real vector space ([[cor-the-tangent-space-of-an-n-manifold-has-dimension-n]]).

[F3] A vector space is finite-dimensional when it has a finite basis, and $\dim_F V=n$ means that some basis $B$ of $V$ satisfies $B\approx n$; the zero space has the empty basis and dimension $0$ ([[def-dimension]]).

[F4] Let $v:n\to V$ be a finite list in the vector space $V$. It is an ordered basis of $V$ if and only if for every $x\in V$ there is exactly one $\lambda:n\to F$ with $x=\sum_{i<n}\lambda_iv_i$; that $\lambda$ is the coordinate list of $x$ with respect to the ordered basis ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[F5] A map $f:U\to\mathbb R^q$ on an open $U\subseteq\mathbb R^m$ is of class $C^k$ when each component is $C^k$ in the word-derivative sense of the multi-index convention, and it is smooth ($C^\infty$) when it is $C^k$ for every $k\in\mathbb N$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F6] Finite componentwise sums and products of $C^k$ Euclidean maps are $C^k$, scalar multiples are included, and a composite of composable $C^k$ Euclidean maps is $C^k$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

[F7] For $n\ge1$ the function $p_n(x)=x^n$ is differentiable at every $c\in\mathbb R$ with $p_n'(c)=n\,c^{\,n-1}$ ([[lem-derivative-of-a-power]]); in particular $(t\mapsto t^2)'(t_0)=2t_0$ at every $t_0\in\mathbb R$.

[F8] A $C^1$ map $f:U\to\mathbb R^n$ on an open $U\subseteq\mathbb R^n$ with invertible derivative $Df(a)$ at $a\in U$ admits open neighbourhoods $V\ni a$ and $W\ni f(a)$ such that $f|_V:V\to W$ is bijective, with $C^1$ inverse $g:W\to V$ ([[thm-euclidean-inverse-function-theorem]]).

[F9] If in addition $f$ is $C^k$, then every local inverse supplied by the inverse function theorem at $a$ is $C^k$ ([[thm-higher-regularity-of-local-inverses]]).

[F10] Every $a\ge0$ has a unique $s\ge0$ with $s^2=a$, written $s=\sqrt a$; in particular $\sqrt a>0$ for $a>0$ ([[thm-of-square-roots]]).

[F11] The pointwise norm is $|v|_g=\sqrt{g(v,v)}$ ([[def-pointwise-norm-and-angle-from-a-riemannian-metric]]).

## Proof

**Proof technique:** transport the norm to $\mathbb R^n$ along the coefficient isomorphism of one ordered basis, where it becomes the square root of a positive definite quadratic form; polynomials are smooth, the square root is smooth on $(0,\infty)$ by the inverse function theorem with higher regularity, and smoothness is transported back and checked to be basis-independent.

1.1 Set-up and the zero-dimensional case. [F2, F3, F4, given]
By [F2] the space $T_pM$ is an $n$-dimensional real vector space. If $n=0$, then $T_pM=\{0_p\}$ by [F3], so $T_pM\setminus\{0_p\}=\varnothing$ and the smoothness assertion is vacuous; assume henceforth $n\ge1$. By [F3] the finite-dimensional space $T_pM$ has a finite basis, and we fix one ordered basis $e_1,\dots,e_n$; fixing a single basis is one existential instantiation and invokes no choice principle. By [F4] every $w\in T_pM$ has exactly one coordinate list $(v^1(w),\dots,v^n(w))\in\mathbb R^n$ with $w=\sum_{i=1}^{n}v^i(w)e_i$. The coefficient map $v:T_pM\to\mathbb R^n$, $v(w)=(v^1(w),\dots,v^n(w))$, is linear and bijective: linear because the coordinate list of $\alpha w+\beta w'$ is $\alpha v(w)+\beta v(w')$ by uniqueness in [F4], injective because $v(w)=0$ forces $w=\sum_i0\,e_i=0_p$, and surjective because an arbitrary $\lambda\in\mathbb R^n$ is the coordinate list of $\sum_i\lambda_ie_i$ again by uniqueness in [F4].

1.2 The square root is smooth on $(0,\infty)$. [F5, F6, F7, F8, F9, F10, given]
Let $x_0>0$ and put $t_0:=\sqrt{x_0}>0$, so that $t_0^2=x_0$ by [F10]. The function $f(t):=t^2$ on the open set $U:=(0,\infty)\subseteq\mathbb R$ is the product of the identity map with itself; the identity map is $C^k$ for every $k$ by the definition in [F5] (all its iterated partial derivatives are the constants $0$ and $1$), so [F6] makes $f$ $C^k$ for every $k$, that is, smooth. Its derivative at $t_0$ is $f'(t_0)=2t_0\ne0$ by [F7], so the derivative is invertible and [F8] supplies open neighbourhoods $V$ of $t_0$ and $W$ of $x_0$ with $f|_V:V\to W$ bijective and $C^1$ inverse $g:W\to V$; since $f$ is $C^k$ for every $k$, [F9] makes this same local inverse $C^k$ for every $k$, that is, smooth. For $y\in W$ we have $g(y)\in V\subseteq(0,\infty)$ and $f(g(y))=y$, that is, $g(y)\ge0$ and $g(y)^2=y$; by the uniqueness clause of [F10] applied to the nonnegative number $y$, $g(y)=\sqrt y$. Hence the square root function agrees on the open neighbourhood $W$ of the arbitrary point $x_0>0$ with the smooth map $g$, so it is smooth at every point of $(0,\infty)$.

2.1 The norm squared is a quadratic form in the coordinates. [F1, F4, step 1.1]
Let $w=\sum_{i=1}^{n}v^i(w)e_i$ and $w'=\sum_{j=1}^{n}v'^j(w')e_j$ be two vectors of $T_pM$. Bilinearity of $g_p$ [F1] and the coordinate expansion [F4] give $$g_p(w,w')=\sum_{i,j=1}^{n}v^i(w)v'^j(w')\,c_{ij}, \qquad c_{ij}:=g_p(e_i,e_j)\in\mathbb R,$$ a finite sum of products of coordinates with the constants $c_{ij}$. In particular $$Q(w):=g_p(w,w)=q(v(w)),\qquad q(\lambda):=\sum_{i,j=1}^{n}c_{ij}\lambda_i\lambda_j,$$ for $w\in T_pM$ and $\lambda\in\mathbb R^n$. Positive definiteness [F1] gives $Q(w)>0$ for $w\ne0_p$ and $Q(0_p)=0$; since the coefficient isomorphism $v$ of step 1.1 is linear and bijective with $v(0_p)=0$, this reads $$q(\lambda)>0\ \text{ for }\ \lambda\ne0, \qquad q(0)=0 .$$

3.1 The quadratic polynomial is smooth. [F5, F6, step 2.1]
Each coordinate function $\lambda\mapsto\lambda_i$ on $\mathbb R^n$ is $C^k$ for every $k$ by the definition in [F5]: its iterated coordinate partial derivatives are the constants $0$ and $1$. The functions $\lambda\mapsto\lambda_i\lambda_j$ are products of $C^k$ maps and the functions $\lambda\mapsto c_{ij}\lambda_i\lambda_j$ are their scalar multiples, so each is $C^k$ for every $k$ by [F6]; the finite sum $q$ defining the quadratic form is again $C^k$ for every $k$ by [F6], that is, $q$ is smooth. Together with step 2.1 this yields the positivity statement $q(\lambda)>0$ exactly for $\lambda\ne0$.

4.1 The pointwise norm is smooth off zero in the coordinates of the basis. [F1, F6, F11, step 1.1, step 1.2, step 2.1, step 3.1] For $w\ne0_p$ the pointwise norm is $$N_p(w)=|w|_g=\sqrt{g_p(w,w)}=\sqrt{q(v(w))}$$ by [F1], [F11] and step 2.1, and $q(v(w))>0$ by step 3.1. By step 1.2 the square root is smooth on $(0,\infty)$, and step 3.1 makes $q$ smooth on the open set $\mathbb R^n$; the smooth map $q$ carries $\mathbb R^n\setminus\{0\}$ into $(0,\infty)$ by step 3.1, so the composite $\sigma(\lambda):=\sqrt{q(\lambda)}$ is $C^k$ for every $k$ on the open set $\mathbb R^n\setminus\{0\}$ by the composition clause of [F6]; that is, $\sigma$ is smooth. By step 1.1 the coefficient map $v$ is a linear bijection, so $N_p=\sigma\circ v$ on $T_pM\setminus\{0_p\}$; this exhibits the coordinate representative $\sigma=\sigma_e$ of the pointwise norm in the ordered basis $e_1,\dots,e_n$ as a smooth function on $\mathbb R^n\setminus\{0\}$.

5.1 Basis independence and boundary audit. [F4, F5, F6, F10, step 1.1, step 4.1]
Let $e'_1,\dots,e'_n$ be a second ordered basis with coefficient isomorphism $v'$ and representative $\sigma_{e'}$. The change of coordinates $v'\circ v^{-1}:\mathbb R^n\to\mathbb R^n$ is a linear bijection, hence $C^k$ for every $k$ with $C^k$ inverse $v\circ v'^{-1}$: a linear map has component functions that are finite sums of scalar multiples of coordinate functions, and both it and its inverse are covered by the algebra and composition clauses of [F6]; the coordinate lists are related by $v'(w)=(v'\circ v^{-1})(v(w))$, so $\sigma_{e'}=\sigma_e\circ(v\circ v'^{-1})$ is smooth exactly when $\sigma_e$ is, again by [F6]. This proves the claimed independence of the basis. The audit: the zero-dimensional case was disposed of in step 1.1, so the excluded vector $0_p$ is the only point at which smoothness is not asserted, and there $N_p(0_p)=\sqrt{q(0)}=0$ by step 2.1 and the square root is not used, since step 1.2 asserts smoothness of the square root only on $(0,\infty)$, whose endpoint $0$ is exactly what is being excluded; in dimension one the form is $q(\lambda)=c_{11}\lambda^2$ with $c_{11}>0$ and $N_p$ is $\sqrt{c_{11}}\,|\lambda|$ in the coordinate, smooth off the origin and subsumed by the general composite; no degenerate case arises because positive definiteness [F1] makes $q$ strictly positive off zero, so $q$ never takes the value $0$ on the domain of $\sigma$; no choice principle is used beyond the single existential instantiation of the basis in step 1.1, and the two Euclidean closures of [F6] and the uniqueness clause of [F10] are theorems of ZF; the lemma states a smoothness assertion and no equivalence, so neither forward nor reverse direction of a biconditional is claimed. $\square$

## Source locator

The fact that the tangent-space norm is smooth off the origin is used throughout the Riemannian literature without proof, for instance in Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 10, printed pp.173-190, where the radial function in exponential coordinates is $q\mapsto|\exp_p^{-1}(q)|_{g_p}$, and in Datar, *Lectures on Riemannian Geometry*, section 23.3, printed pp.170-172, where differentiability of the distance function is reduced to it. The argument above isolates the fact and carries it out from library items: one ordered basis makes the norm the square root of a positive definite quadratic polynomial, polynomials are smooth by [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], and the square root is smooth on $(0,\infty)$ by [[thm-euclidean-inverse-function-theorem]] applied to $t\mapsto t^2$ together with [[thm-higher-regularity-of-local-inverses]] and the uniqueness of the nonnegative square root in [[thm-of-square-roots]]. No claim is quoted from the sources; the coordinate and inverse-function details are proved here.
