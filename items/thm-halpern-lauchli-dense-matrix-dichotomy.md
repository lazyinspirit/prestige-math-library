---
id: thm-halpern-lauchli-dense-matrix-dichotomy
kind: theorem
title: "Halpern–Läuchli dense-matrix dichotomy"
status: published
origin: pipeline
deps: [def-halpern-lauchli-finitistic-trees-density-and-matrices, lem-halpern-lauchli-word-calculus-rearrangement, lem-halpern-lauchli-rule-soundness-and-finite-thinning]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
sources:
  references:
    - title: "Halpern–Läuchli, A partition theorem (1966), Theorem 1 and proof, pp. 361–367"
      url: https://www.cs.umd.edu/~gasarch/BLOGPAPERS/HL-1966.pdf
    - title: "Monk, Set theory following Jech (2024), Theorem 29.28, pp. 661–670"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
proof_strategy: dichotomy
---

## Statement

In ZF, let $d>0$, let $T_1,\ldots,T_d$ be finitistic trees, and let
$Q\subseteq\prod_{i=1}^dT_i$.  The alternatives need not be exclusive, but at
least one of the following holds:

1. for every $k<\omega$, $Q$ contains a $k$-matrix;
2. for some $h<\omega$ and every $k<\omega$,
   $\prod_iT_i\setminus Q$ contains an $(h,k)$-matrix.

## Facts & Assumptions

**Given:** The positive finite family of trees and the subset $Q$ in the statement.

[F1] The preceding definition distinguishes the full product and matrices and proves the common-maximum-height cone restriction. [[def-halpern-lauchli-finitistic-trees-density-and-matrices]]

[F2] The all-$a$/all-$x$ endpoint word derives the all-$A$/all-universal-$x$ endpoint word. [[lem-halpern-lauchli-word-calculus-rearrangement]]

[F3] [[lem-halpern-lauchli-rule-soundness-and-finite-thinning]] defines $W(\mathbf n,\mathbf B)$ by reading $W$ from left to right: $\exists A_i$ selects an $n_i$-dense subset of $B_i$, $\forall x_i$ ranges over it, $\forall a_i$ ranges over the height-$n_i$ cone traces in $B_i$, and $\exists x_i$ ranges over that trace, with the empty word asserting membership in $Q$.  It defines $\Phi(W,\mathbf n,p)$ to mean that $W(\mathbf n,\mathbf B)$ holds whenever every $B_i$ is $p$-dense, and proves that derivations preserve the scheme $\forall\mathbf n\exists p\,\Phi(W,\mathbf n,p)$.

## Proof

1.1 Let $W_0=\forall a_1\cdots\forall a_d\exists x_1\cdots\exists x_d$ and $W_1=\exists A_1\cdots\exists A_d\forall x_1\cdots\forall x_d$.  By classical logic, the scheme $S(W_0):=\forall\mathbf n\exists p\,\Phi(W_0,\mathbf n,p)$ either holds or fails. [given, construct, cases]

2.1 Assume first that $S(W_0)$ holds.  By F2 and F3, $S(W_1)$ holds.  Fix $k$, take $\mathbf n=(k,\ldots,k)$, and obtain a corresponding $p$. [F2, F3, step 1.1, assume-case first]

2.2 Assume instead that $S(W_0)$ fails.  Then some vector $\mathbf n$ satisfies: for every $p$ there are $p$-dense $B_i$ for which $W_0(\mathbf n,\mathbf B)$ is false.  Unwinding the negated endpoint word gives roots $t_i\in T_i(n_i)$ whose cones $a_i=B_i\cap\{u:t_i\le_{T_i}u\}$ satisfy $\prod_i a_i\subseteq\prod_iT_i\setminus Q$. [F3, step 1.1, assume-case second]

3.1 Apply $\Phi(W_1,\mathbf n,p)$ from step 2.1 with $B_i=T_i$, which is $p$-dense because it contains every node.  The interpretation supplies $k$-dense $A_i\subseteq T_i$ such that every tuple in $\prod_iA_i$ lies in $Q$.  Hence $Q$ contains a $k$-matrix; since $k$ was arbitrary, alternative 1 holds. [F1, F3, step 2.1]

3.2 Put $h=\max_i n_i$ for the vector from step 2.2 and fix $k<\omega$.  Take $p=h+k$, extend each of the finitely many $t_i$ to a node $s_i\in T_i(h)$, and put $C_i=a_i\cap\{u:s_i\le_{T_i}u\}$.  Every height-$(h+k)$ extension of $s_i$ is dominated by $B_i$, and its dominating member belongs to $C_i$; hence $C_i$ is $(h,k)$-dense.  Also $\prod_iC_i\subseteq\prod_i a_i$ lies in the complement of $Q$.  Thus alternative 2 holds for this single $h$ and every $k$, including $k=0$. [F1, step 2.2, choose]

4.1 The two cases in step 1.1 are exhaustive, and steps 3.1 and 3.2 prove the respective alternatives.  No infinite choice was used: only finitely many cone roots were extended in step 3.2. [step 1.1, step 3.1, step 3.2, cases-exhaustive] ∎
