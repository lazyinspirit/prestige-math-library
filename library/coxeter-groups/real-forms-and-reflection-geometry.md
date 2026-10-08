---
page: real-forms-and-reflection-geometry
title: "Real Forms and Reflection Geometry"
status: draft
requires: [coxeter-presentations-exchange-and-reduced-word-theorems, dual-spaces-bilinear-forms-and-inertia, sine-cosine-and-the-definition-of-pi, group-homomorphisms-and-the-isomorphism-theorems]
items: [def-cg-real-coxeter-form-and-reflection,
        lem-cg-reflection-form-invariance-and-rank-two-orders,
        def-cg-canonical-reflection-homomorphism,
        lem-cg-reflection-representation-descends-and-root-norms,
        def-cg-dual-chambers-and-reflection-hyperplanes,
        lem-cg-dual-action-and-chamber-faces-exist]
examples: []
---

Reflections require a form and a nonisotropic normal, not an unstated Euclidean
structure. This page begins with finite-dimensional real vector spaces and
distinguishes positive-definite, indefinite and degenerate forms before
assigning any chamber interpretation.

[[def-cg-real-coxeter-form-and-reflection]] fixes a finite set $S$, a Coxeter
matrix $m$ and the real vector space $V=\mathbb R^S$, and defines the Coxeter
form $B$ on the basis $e_s$ by $B(e_s,e_s)=1$ and
$B(e_s,e_t)=-\cos(\pi/m(s,t))$ (and $-1$ when $m(s,t)=\infty$), together with
its radical, its $B$-preserving linear maps and the reflection
$r_a(v)=v-2B(v,a)a/B(a,a)$ for $B(a,a)\ne0$. Neither positive definiteness nor
nondegeneracy is presumed, and $r_a$ is left undefined for null $a$.
[[lem-cg-reflection-form-invariance-and-rank-two-orders]] proves that this form
is well defined, that every $r_a$ is a $B$-preserving linear involution with
fixed hyperplane $\ker B(-,a)$, and computes the rank-two plane
$\mathbb Re_s+\mathbb Re_t$: the Gram matrix
$\begin{pmatrix}1&-c\\-c&1\end{pmatrix}$ is positive definite for finite $m$
(the square-sum identity $(x_s-cx_t)^2+\sin^2(\pi/m)\,x_t^2$) and positive
semidefinite with radical $\mathbb R(e_s+e_t)$ for $m=\infty$; the product
$r_sr_t$ has determinant $1$, exact order $m$ for finite $m$ (trace
$2\cos(2\pi/m)$) and is unipotent of infinite order for $m=\infty$.

[[def-cg-canonical-reflection-homomorphism]] names the canonical reflection
homomorphism $\rho:W\to\mathrm{GL}(V)$ with $\rho(s)=r_s$ through the universal
property of the presented Coxeter group, together with the roots $\Phi$, the
reflections $T$ and the positive and negative cones;
[[lem-cg-reflection-representation-descends-and-root-norms]] verifies the
relators, proves existence and uniqueness of $\rho$, shows that every root has
$B$-norm $1$ and that $\rho(wsw^{-1})=r_{\rho(w)e_s}$. Positivity,
faithfulness, discreteness and nondegeneracy are deliberately left to later
pages.

[[def-cg-dual-chambers-and-reflection-hyperplanes]] passes to the algebraic dual
$V^*$ with the contragredient action $(w\cdot f)(v)=f(\rho(w)^{-1}v)$ — used
even when $B$ is degenerate — and defines the closed chamber, its interior, the
faces $C_I$ and the root hyperplanes $H_\alpha$.
[[lem-cg-dual-action-and-chamber-faces-exist]] verifies the action axioms,
exhibits every face $C_I$ explicitly and proves the rank-two chamber structure:
the finite case tiles $P^*$ by $2m$ sectors on which $W_{s,t}$ acts simply
transitively, and in the infinite case the chambers have pairwise disjoint
interiors with union
$\{\varphi:\varphi(e_s+e_t)>0\}\cup\{0\}$ — the closed half-plane
$\{\varphi:\varphi(e_s+e_t)\ge0\}$ with the nonzero points of its boundary line
removed — and wall traces on $\{\varphi:\varphi(e_s+e_t)=1\}$ exactly the
integers. All six items are choice-free. Their worked examples are collected
on [[real-forms-and-reflection-geometry-examples]].
