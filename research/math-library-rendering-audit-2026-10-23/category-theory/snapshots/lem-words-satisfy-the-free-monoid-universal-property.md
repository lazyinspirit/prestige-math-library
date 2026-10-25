---
id: lem-words-satisfy-the-free-monoid-universal-property
kind: lemma
title: 'Finite words satisfy the free-monoid universal property'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-semigroup-and-monoid, def-monoid-finite-product, def-natural-numbers, def-nat-addition, lem-nat-add-associative, def-the-set-of-functions-from-one-set-to-another, def-indexed-union-and-intersection, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Example 4.1.10'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Tom Leinster, Basic Category Theory, Example 2.1.3'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

## Statement

For a set $X$, let

$$X^*:=\bigcup_{n\in\mathbb N}X^n$$

be the set of finite words in letters from $X$, where $X^n$ is the set of functions $n\to X$. With concatenation and the empty word, $X^*$ is a monoid. The one-letter map $i_X:X\to X^*$ has the universal property that every function $u:X\to M$ into a monoid extends uniquely to a monoid homomorphism $\widehat u:X^*\to M$.

## Facts & Assumptions

**Given:** A set $X$, a monoid $(M,\cdot,e)$, and a function $u:X\to M$.

[F1] A monoid is a set with an associative binary operation and a two-sided identity ([[def-semigroup-and-monoid]]).

[F2] A finite product in a monoid is uniquely defined by the recursion $P(0)=e$ and $P(n+1)=P(n)g_n$ ([[def-monoid-finite-product]]).

[F3] The natural numbers form the smallest inductive set ([[def-natural-numbers]]).

[F4] Natural addition satisfies $n+0=n$ and $n+(m+1)=(n+m)+1$ ([[def-nat-addition]]).

[F5] Natural addition is associative: $(n+m)+r=n+(m+r)$ ([[lem-nat-add-associative]]).

[F6] For sets $A,B$, the functions $A\to B$ form a set ([[def-the-set-of-functions-from-one-set-to-another]]).

[F7] The indexed union of a family $(A_i)_{i\in I}$ is $\bigcup_{i\in I}A_i=\bigcup\{A_i:i\in I\}$ ([[def-indexed-union-and-intersection]]).

[F8] If a property holds at $0$ and passes from $n$ to $n+1$, it holds for every natural number ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 Each $X^n$ is a set by [F6], and [F3] and [F7] make their indexed union $X^*$ a set. The unique function $0\to X$ is the empty word. [F3, F6, F7]

1.2 For $p:n\to X$ and $q:m\to X$, define $pq:n+m\to X$ by using $p$ on the first $n$ positions and $q$ on the following $m$ positions. [F4, construct]

1.3 For a word $p:n\to X$, define $\widehat u(p)$ as the finite product $u(p(0))\cdots u(p(n-1))$, with value $e$ when $n=0$. [F2, construct]

2.1 Function extensionality and [F5] show $(pq)r=p(qr)$; the equations in [F4] show that the empty word is a two-sided identity. Thus $X^*$ is a monoid by [F1]. [step 1.1, step 1.2, F1, F4, F5]

2.2 Induction on the length of the second word, using [F2] and associativity in $M$, proves $\widehat u(pq)=\widehat u(p)\widehat u(q)$. Hence $\widehat u$ is a monoid homomorphism and extends $u$ on one-letter words. [step 1.2, step 1.3, F1, F2, F8]

3.1 If $T:X^*\to M$ is any homomorphism extending $u$, induction on word length gives $T(p)=u(p(0))\cdots u(p(n-1))=\widehat u(p)$; the base case uses the empty word and the identity of $M$. [step 2.1, step 1.3, F1, F8]

4.1 Thus the extension exists and is unique for every $u$, including $X=\varnothing$, where $X^*$ contains only the empty word. [step 2.2, step 3.1] ∎
