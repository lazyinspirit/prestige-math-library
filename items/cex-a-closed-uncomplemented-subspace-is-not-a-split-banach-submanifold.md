---
id: cex-a-closed-uncomplemented-subspace-is-not-a-split-banach-submanifold
kind: counterexample
title: A closed uncomplemented subspace is not a split Banach submanifold
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-split-banach-submanifold, lem-c-zero-is-a-closed-subspace-of-ell-infinity, def-countable-choice, def-c-zero-and-ell-infinity, def-tangent-space-and-differential-on-a-banach-manifold, def-complemented-subspace, lem-banach-manifold-differentials-are-chart-independent, thm-complemented-subspace-iff-range-of-a-bounded-projection, thm-countable-union-of-countable, cor-irrationals-uncountable, lem-q-and-irrationals-dense-r, thm-well-ordering-principle, def-quotient-vector-space-coset-notation, def-quotient-seminorm, thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed, def-dual-space-of-a-normed-space, def-operator-norm, def-bounded-linear-operator, def-countable-base-banach-manifold-and-smooth-map, lem-closed-subspace-of-a-banach-space-is-banach]
justified_by: []
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Piotr Hajłasz, Functional Analysis — Theorem 10.19 (c_0 is not complemented in ℓ∞)"
      url: "https://sites.pitt.edu/~hajlasz/Notatki/Functional%20Analysis2.pdf"
---

## Statement refuted

Assuming the Axiom of Countable Choice ([[def-countable-choice]]), the space
$c_0$ is a closed subspace of $\ell^\infty$ but is not a split Banach
submanifold of $\ell^\infty$ ([[def-split-banach-submanifold]]).

## Facts & Assumptions

**Given:** The sequence spaces $c_0 \subseteq \ell^\infty$ with the sup norm ([[def-c-zero-and-ell-infinity]]), the manifold structure of $\ell^\infty$ carried by its single identity chart, and the assumed $\mathrm{AC}_\omega$.

[F1] $c_0$ is a closed linear subspace of the Banach space $\ell^\infty$ and is itself a Banach space for the sup norm ([[def-c-zero-and-ell-infinity]], [[lem-c-zero-is-a-closed-subspace-of-ell-infinity]], [[lem-closed-subspace-of-a-banach-space-is-banach]]).

[L1] With the identity chart, $\ell^\infty$ is a Banach manifold modelled on itself, and a tangent vector is the velocity of a curve through the point ([[def-countable-base-banach-manifold-and-smooth-map]], [[def-tangent-space-and-differential-on-a-banach-manifold]]).

[L2] A split chart at $0$ consists of an open $U\ni0$, a chart $\varphi$ with $\varphi(0)=0$ and a decomposition $\ell^\infty=E_0\oplus E_1$ into closed complemented subspaces with $\varphi[U\cap c_0]=\varphi[U]\cap(E_0\oplus\{0\})$; the differential of an inclusion is computed in charts by the derivative of its chart representative ([[def-split-banach-submanifold]], [[lem-banach-manifold-differentials-are-chart-independent]]).

[L3] The rationals are dense in $\mathbb R$ and the irrationals are uncountable ([[lem-q-and-irrationals-dense-r]], [[cor-irrationals-uncountable]]).

[L4] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

[L5] Under $\mathrm{AC}_\omega$, a countable union of countable sets is countable ([[def-countable-choice]], [[thm-countable-union-of-countable]]).

[L6] Cosets of the quotient $Q=\ell^\infty/c_0$, the quotient map, the quotient seminorm $\|x+c_0\|_Q=\operatorname{dist}(x,c_0)$, and its being a norm because $c_0$ is closed ([[def-quotient-vector-space-coset-notation]], [[def-quotient-seminorm]], [[thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed]]).

[L7] A closed subspace is complemented exactly when it is the range of a bounded linear projection ([[thm-complemented-subspace-iff-range-of-a-bounded-projection]], [[def-complemented-subspace]]).

[L8] Dual and operator bounds: $|g(v)|\le\|g\|\,\|v\|$ for $g$ in the dual, and $\|Px\|\le\|P\|\,\|x\|$ for a bounded linear $P$ ([[def-dual-space-of-a-normed-space]], [[def-operator-norm]], [[def-bounded-linear-operator]]).



## Counterexample

**Proof technique:** contradiction.

1.1 $c_0$ is closed in $\ell^\infty$ and is a Banach space for the sup norm by [F1]; the identity chart makes $\ell^\infty$ a Banach manifold and tangents are velocities of curves by [L1]. [F1, L1]

1.2 Suppose for contradiction that $c_0$ is a split $C^k$ submanifold of $\ell^\infty$ for some $k\ge1$: fix a split chart $(\varphi,U)$ at $0$ with $\varphi(0)=0$ and a decomposition $\ell^\infty=E_0\oplus E_1$ into closed complemented subspaces such that $\varphi[U\cap c_0]=\varphi[U]\cap(E_0\oplus\{0\})$. [assume-contra, L2]

1.3 Fix an enumeration $(q_n)$ of the rationals; for every irrational $x$ and every $k\ge1$ let $n_k(x)$ be the least index $n$ not already used among $n_1(x),\dots,n_{k-1}(x)$ with $q_n\in(x-\frac1k,x+\frac1k)$, and put $A_x:=\{n_k(x):k\ge1\}$. [L3, L4, construct]

2.1 In the charts $\varphi|_{U\cap c_0}$ on $c_0$ and $\varphi$ on $\ell^\infty$, the inclusion $j:c_0\to\ell^\infty$ has representative the inclusion $E_0\oplus\{0\}\hookrightarrow\ell^\infty$ near $0$, whose derivative at $0$ is the inclusion of $E_0$; hence $T_0j(T_0c_0)=E_0$ by [L2]. [step 1.2, L2]

2.2 Each $A_x$ is infinite, and if $x\ne y$ then $A_x\cap A_y$ is finite: for large $k$ the intervals $(x-\frac1k,x+\frac1k)$ and $(y-\frac1k,y+\frac1k)$ are disjoint, so a common index must occur among the finitely many earlier choices; hence $x\mapsto A_x$ is injective and $\{A_x\}$ is uncountable by [L3]. [step 1.3, L3, algebra]

2.3 Let $u_x$ be the indicator sequence of $A_x$ and let $Q:=\ell^\infty/c_0$ carry the quotient norm; then $u_x\in\ell^\infty$ and $[u_x]\ne0$ because $u_x\notin c_0$, and for distinct $x_1,\dots,x_m$ and scalars $c_1,\dots,c_m$ the quotient norm of $\sum_jc_j[u_{x_j}]$ equals $\max_j|c_j|$, since the supports of the $u_{x_j}$ meet only finitely and each $A_{x_j}$ is infinite. [step 1.3, F1, L6, algebra]

3.1 For every $g\in Q^*$ and every real $r>0$ the set $\{x:|g([u_x])|\ge r\}$ is finite: for distinct points $x_1,\dots,x_m$ in it choose unimodular scalars $c_j$ with $c_jg([u_{x_j}])=|g([u_{x_j}])|$, so that by [step 2.3] and [L8] one has $mr\le\sum_j|g([u_{x_j}])|=\bigl|g\bigl(\sum_jc_j[u_{x_j}]\bigr)\bigr|\le\|g\|\cdot\bigl\|\sum_jc_j[u_{x_j}]\bigr\|_Q=\|g\|$ and hence $m\le\|g\|/r$. [step 2.3, L8, choose, algebra]

3.2 The image $T_0j(T_0c_0)$ also equals $D\varphi(0)[c_0]$: for $v\in c_0$ the curve $t\mapsto tv$ lies in $c_0$ and its image velocity is the class of $D\varphi(0)v$, while every tangent vector of $c_0$ is the velocity of a curve $\gamma$ in $c_0$ and the image velocity has $\varphi$-coordinate $D\varphi(0)\dot\gamma(0)$ with $\dot\gamma(0)\in c_0$, because the difference quotients of $\gamma$ lie in the closed subspace. [step 2.1, F1, L1, L2]

4.1 No countable family in $Q^*$ separates the points of $Q$: given $(g_n)$, the set of $x$ with $g_n([u_x])\ne0$ for some $n$ is the countable union over the pairs $(n,k)$ of the finite sets of [step 3.1] with $r=\frac1k$, hence countable by [L5]; since $\{A_x\}$ is uncountable by [step 2.2], some $x$ lies outside it, and then the nonzero vector $[u_x]$ is annihilated by every $g_n$. [step 3.1, step 2.2, L5]

4.2 From [step 2.1] and [step 3.2], $D\varphi(0)[c_0]=E_0$; the conjugate $R:=D\varphi(0)^{-1}P_{E_0}D\varphi(0)$ of the bounded projection onto $E_0$ is a bounded linear projection with range $D\varphi(0)^{-1}[E_0]=c_0$, so $c_0$ is complemented in $\ell^\infty$ by [L7]. [step 2.1, step 3.2, L7, algebra]

5.1 If a bounded linear projection $P:\ell^\infty\to c_0$ existed, then $\psi_n(x+c_0):=x_n-(Px)_n$ would be a well-defined bounded functional on $Q$ — well-defined because $P$ fixes every element of $c_0$ — with $\|\psi_n\|\le1+\|P\|$ by [L8], and if $\psi_n(x+c_0)=0$ for all $n$ then $(x-Px)_n=0$ for all $n$, so $x=Px\in c_0$; such functionals would be a countable separating family in $Q^*$, contradicting [step 4.1], so no bounded projection of $\ell^\infty$ onto $c_0$ exists and by [L7] $c_0$ is not complemented in $\ell^\infty$. [step 4.1, L6, L7, L8]

6.1 This contradicts [step 4.2]; therefore $c_0$ is not a split Banach submanifold of $\ell^\infty$, while it is closed there by [step 1.1]. [step 1.1, step 4.2, step 5.1, discharge-contradiction] ∎
