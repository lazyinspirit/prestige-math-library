---
id: thm-krull-schmidt-for-finite-dimensional-kg-modules
kind: theorem
title: "Finite-dimensional kG-modules decompose as finite direct sums of indecomposables uniquely up to order and isomorphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-direct-sum-of-a-family-of-modules, def-endomorphism-ring-of-a-module, thm-rank-nullity, cor-dimension-of-a-direct-sum]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-09-receipts.jsonl (thm-krull-schmidt-for-finite-dimensional-kg-modules). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Every finite-dimensional module over a finite-dimensional algebra is a finite
direct sum of indecomposable modules, and the multiset of indecomposable
summands is unique up to isomorphism and permutation.

## Facts & Assumptions

**Given:** A finite-dimensional left module $M$ over a finite-dimensional algebra.

[F1] Dimensions add across finite direct sums, and rank-nullity holds for linear endomorphisms ([[cor-dimension-of-a-direct-sum]], [[thm-rank-nullity]]).

[F2] Finite direct sums have coordinate inclusions and projections; the endomorphisms of a module form a ring ([[def-direct-sum-of-a-family-of-modules]], [[def-endomorphism-ring-of-a-module]]).

## Proof

**Proof technique:** direct.

1.1 Prove existence by induction on $d=\dim_k M$. If $M=0$ or $M$ is indecomposable there is nothing to split. Otherwise $M=M_1\oplus M_2$ with both summands nonzero. By dimension additivity, $0<\dim_k M_i<d$ for each $i$, so the induction hypothesis decomposes each $M_i$ into finitely many indecomposables. Their combined list decomposes $M$. [F1, given, induction]

1.2 Let $X$ be a nonzero indecomposable finite-dimensional module and $f\in\operatorname{End}(X)$. The dimensions of $\ker f^n$ increase and are bounded by $\dim_k X$, so for some $n\ge1$, $\ker f^n=\ker f^{2n}$. If $y=f^n(x)$ lies in $\ker f^n$, then $x\in\ker f^{2n}=\ker f^n$ and $y=0$. Rank-nullity therefore gives $X=\ker f^n\oplus\operatorname{im} f^n$. Both are submodules. Indecomposability makes one summand zero: in the first case $f$ is injective and hence invertible in finite dimension; in the second $f^n=0$. Thus every endomorphism of $X$ is invertible or nilpotent. [F1, F2, given, algebra]

2.1 A nilpotent $f$ has inverse $1+f+\cdots+f^{n-1}$ for $1-f$. If nonunits $a,b$ of $\operatorname{End}(X)$ had unit sum $u=a+b$, then $u^{-1}a$ and $u^{-1}b$ would still be nonunits and would sum to $1$; the first is nilpotent by step 1.2, so the second $1-u^{-1}a$ would be a unit, a contradiction. Thus the nonunits are closed under finite sums. This is the only endomorphism-ring property needed below; no commutativity is assumed. [F2, step 1.2, algebra]

3.1 For uniqueness induct on $\dim_k M$. Suppose $M=X\oplus A=Y_1\oplus\cdots\oplus Y_s$, with $X$ and all $Y_j$ nonzero indecomposable. The identity of $X$ is the sum of composites $e_j:X\hookrightarrow M\twoheadrightarrow Y_j\hookrightarrow M\twoheadrightarrow X$. By step 2.1 at least one $e_j$ is a unit. Write its two factors as $a:X\to Y_j$ and $b:Y_j\to X$, so $ba$ is invertible. Then $a(ba)^{-1}$ splits the surjection $b$, giving $Y_j=a(X)\oplus\ker b$. Indecomposability of $Y_j$ forces $\ker b=0$, hence $X\cong Y_j$ and $b$ is an isomorphism. [F2, step 2.1, algebra]

4.1 Put $B=\bigoplus_{i\ne j}Y_i$. Since the projection $M\to X$ restricts to the isomorphism $b:Y_j\to X$, the projection $M\to B$ restricts to an isomorphism $A\to B$: its kernel is $A\cap Y_j=0$, and for every $z\in B$ subtract from $z$ the unique $y\in Y_j$ with the same $X$-projection to obtain a preimage in $A$. Thus $A\cong B$. Both have dimension smaller than $M$; induction matches their indecomposable decompositions. Adding $X\cong Y_j$ proves uniqueness up to permutation and isomorphism. [F1, F2, step 3.1, induction, algebra] ∎
