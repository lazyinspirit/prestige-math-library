---
id: cex-a-closed-uncomplemented-subspace-is-not-a-split-banach-submanifold
kind: counterexample
title: A closed subspace of ell-infinity that is not complemented
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-split-banach-submanifold, def-countable-base-banach-manifold-and-smooth-map, def-second-countable-space, lem-c-zero-is-a-closed-subspace-of-ell-infinity, def-countable-choice, def-c-zero-and-ell-infinity, def-complemented-subspace, thm-complemented-subspace-iff-range-of-a-bounded-projection, thm-countable-union-of-countable, cor-irrationals-uncountable, lem-q-and-irrationals-dense-r, thm-well-ordering-principle, def-quotient-vector-space-coset-notation, def-quotient-seminorm, thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed, def-dual-space-of-a-normed-space, def-operator-norm, def-bounded-linear-operator, lem-closed-subspace-of-a-banach-space-is-banach]
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
$c_0$ is a closed subspace of $\ell^\infty$ that is not complemented in it:
there is no bounded linear projection of $\ell^\infty$ onto $c_0$. Consequently
no decomposition $\ell^\infty = c_0 \oplus E_1$ into closed subspaces exists, so
the split-chart condition of [[def-split-banach-submanifold]] fails for the pair
$(\ell^\infty, c_0)$ at the identity chart. The ambient $\ell^\infty$ is not
second countable and hence is not a Banach manifold in the library's sense
([[def-countable-base-banach-manifold-and-smooth-map]]), so this counterexample
separates closedness from complementedness at the level of Banach spaces; the
sentence about $c_0$ in [[def-split-banach-submanifold]] records the same
qualification.

## Facts & Assumptions

**Given:** The sequence spaces $c_0 \subseteq \ell^\infty$ with the sup norm ([[def-c-zero-and-ell-infinity]]), the identity chart of $\ell^\infty$, and the assumed $\mathrm{AC}_\omega$.

[F1] $c_0$ is a closed linear subspace of the Banach space $\ell^\infty$ and is itself a Banach space for the sup norm ([[def-c-zero-and-ell-infinity]], [[lem-c-zero-is-a-closed-subspace-of-ell-infinity]], [[lem-closed-subspace-of-a-banach-space-is-banach]]).

[L1] The identity chart of $\ell^\infty$ covers $\ell^\infty$ and has trivial transition maps, so the split-chart condition of [[def-split-banach-submanifold]] is meaningful for the pair $(\ell^\infty, c_0)$: it asks for a decomposition $\ell^\infty = E_0 \oplus E_1$ into closed subspaces with bounded coordinate projections such that, in the chart, $U \cap c_0 = U \cap (E_0 \oplus \{0\})$. The space $\ell^\infty$ is not second countable — the uncountably many $0$-$1$ sequences are pairwise at sup-distance $1$, so every dense subset is uncountable — hence $\ell^\infty$ is not a Banach manifold in the library's sense ([[def-countable-base-banach-manifold-and-smooth-map]], [[def-split-banach-submanifold]], [[def-second-countable-space]]).

[L2] A bounded linear projection $P$ of $\ell^\infty$ onto $c_0$ fixes every element of $c_0$, and for each $n$ the map $x \mapsto x_n - (Px)_n$ is a bounded linear functional on $\ell^\infty$ that annihilates $c_0$, hence induces a bounded linear functional on the quotient $Q = \ell^\infty/c_0$ of norm at most $1 + \|P\|$ ([[def-bounded-linear-operator]], [[def-operator-norm]], [[def-complemented-subspace]], [[def-quotient-vector-space-coset-notation]], [[def-quotient-seminorm]], [[def-dual-space-of-a-normed-space]]).

[L3] The rationals are dense in $\mathbb R$ and the irrationals are uncountable ([[lem-q-and-irrationals-dense-r]], [[cor-irrationals-uncountable]]).

[L4] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

[L5] Under $\mathrm{AC}_\omega$, a countable union of countable sets is countable ([[def-countable-choice]], [[thm-countable-union-of-countable]]).

[L6] Cosets of the quotient $Q=\ell^\infty/c_0$, the quotient map, the quotient seminorm $\|x+c_0\|_Q=\operatorname{dist}(x,c_0)$, and its being a norm because $c_0$ is closed ([[def-quotient-vector-space-coset-notation]], [[def-quotient-seminorm]], [[thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed]]).

[L7] A closed subspace is complemented exactly when it is the range of a bounded linear projection ([[thm-complemented-subspace-iff-range-of-a-bounded-projection]], [[def-complemented-subspace]]).

[L8] Dual and operator bounds: $|g(v)|\le\|g\|\,\|v\|$ for $g$ in the dual, and $\|Px\|\le\|P\|\,\|x\|$ for a bounded linear $P$ ([[def-dual-space-of-a-normed-space]], [[def-operator-norm]], [[def-bounded-linear-operator]]).

## Counterexample

**Proof technique:** contradiction.

1.1 $c_0$ is closed in $\ell^\infty$ and is a Banach space for the sup norm by [F1]; $\ell^\infty$ is not second countable and hence is not a Banach manifold in the library's sense, while the identity chart still makes the split-chart condition meaningful for the pair $(\ell^\infty, c_0)$ by [L1]. [F1, L1]
1.2 Suppose for contradiction that $c_0$ is complemented in $\ell^\infty$: by [L7] fix a bounded linear projection $P : \ell^\infty \to c_0$ of $\ell^\infty$ onto $c_0$, so that $Px = x$ for every $x \in c_0$. [assume-contra, L7]
1.3 Fix an enumeration $(q_n)$ of the rationals; for every irrational $x$ and every $k\ge1$ let $n_k(x)$ be the least index $n$ not already used among $n_1(x),\dots,n_{k-1}(x)$ with $q_n\in(x-\frac1k,x+\frac1k)$, and put $A_x:=\{n_k(x):k\ge1\}$. [L3, L4, construct]
2.1 Each $A_x$ is infinite, and if $x\ne y$ then $A_x\cap A_y$ is finite: for large $k$ the intervals $(x-\frac1k,x+\frac1k)$ and $(y-\frac1k,y+\frac1k)$ are disjoint, so a common index must occur among the finitely many earlier choices; hence $x\mapsto A_x$ is injective and $\{A_x\}$ is uncountable by [L3]. [step 1.3, L3, algebra]
2.2 Let $u_x$ be the indicator sequence of $A_x$ and let $Q:=\ell^\infty/c_0$ carry the quotient norm; then $u_x\in\ell^\infty$ and $[u_x]\ne0$ because $u_x\notin c_0$, and for distinct $x_1,\dots,x_m$ and scalars $c_1,\dots,c_m$ the quotient norm of $\sum_jc_j[u_{x_j}]$ equals $\max_j|c_j|$, since the supports of the $u_{x_j}$ meet only finitely and each $A_{x_j}$ is infinite. [step 1.3, F1, L6, algebra]
3.1 For every $g\in Q^*$ and every real $r>0$ the set $\{x:|g([u_x])|\ge r\}$ is finite: for distinct points $x_1,\dots,x_m$ in it choose unimodular scalars $c_j$ with $c_jg([u_{x_j}])=|g([u_{x_j}])|$, so that by [step 2.2] and [L8] one has $mr\le\sum_j|g([u_{x_j}])|=\bigl|g\bigl(\sum_jc_j[u_{x_j}]\bigr)\bigr|\le\|g\|\cdot\bigl\|\sum_jc_j[u_{x_j}]\bigr\|_Q=\|g\|$ and hence $m\le\|g\|/r$. [step 2.2, L8, choose, algebra]
4.1 No countable family in $Q^*$ separates the points of $Q$: given $(g_n)$, the set of $x$ with $g_n([u_x])\ne0$ for some $n$ is the countable union over the pairs $(n,k)$ of the finite sets of [step 3.1] with $r=\frac1k$, hence countable by [L5]; since $\{A_x\}$ is uncountable by [step 2.1], some $x$ lies outside it, and then the nonzero vector $[u_x]$ is annihilated by every $g_n$. [step 3.1, step 2.1, L5]
5.1 Let $P$ be the projection assumed in step 1.2 and put $\psi_n(x+c_0):=x_n-(Px)_n$. By [L2] each $\psi_n$ is a well-defined bounded linear functional on $Q$ — well-defined because $P$ fixes every element of $c_0$ — with $\|\psi_n\|\le1+\|P\|$ by [L8], and if $\psi_n(x+c_0)=0$ for all $n$ then $(x-Px)_n=0$ for all $n$, so $x=Px\in c_0$. The countably many functionals $\psi_n$ would therefore be a countable separating family in $Q^*$, contradicting [step 4.1]. [step 1.2, step 4.1, L2, L6, L8]
6.1 This contradiction with [step 4.1] shows that no bounded linear projection of $\ell^\infty$ onto $c_0$ exists; by [L7] $c_0$ is not complemented in $\ell^\infty$, although it is closed there by [step 1.1], and consequently the identity chart admits no split-chart decomposition of $c_0$, as claimed. [step 1.1, step 4.1, step 5.1, L7, discharge-contradiction] ∎

## Remarks

- **Where the countability enters.** The proof only uses $\mathrm{AC}_\omega$ once, in [step 4.1], to make the union of the finitely-many-violators sets countable. The construction of the uncountable family $\{A_x\}$ and the quotient-norm computation are choice-free beyond the fixed enumeration of the rationals.

- **The manifold reading.** The identity chart makes $(\ell^\infty, c_0)$ an instance of the split-chart condition, but $\ell^\infty$ is not second countable, so the pair is not a Banach manifold. The library's [[def-split-banach-submanifold]] therefore treats this example as evidence that closedness does not imply splitness in the Banach-space setting, and the split-submanifold definition itself is stated only for second countable ambient manifolds.
