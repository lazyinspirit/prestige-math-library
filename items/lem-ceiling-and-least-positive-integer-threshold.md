---
id: lem-ceiling-and-least-positive-integer-threshold
kind: lemma
title: "Ceilings give the least positive integer meeting a real threshold"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - lem-integer-part
  - lem-nat-embeds-int
  - lem-nat-discrete
  - thm-int-ordered-ring
  - lem-of-add-order
  - def-ordered-field
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Emily Riehl, Category Theory in Context, Example 4.1.7, printed p. 134"
      url: "https://emilyriehl.github.io/files/context.pdf"
---

## Statement

Identify integers and naturals with their canonical copies in the reals. For every real $x$, put $\lceil x\rceil=-\lfloor-x\rfloor$, using [[lem-integer-part]]. Then $\lceil x\rceil$ is an integer, $x\le\lceil x\rceil$, and
$$\lceil x\rceil\le m\quad\Longleftrightarrow\quad x\le m\qquad(m\in\mathbb Z).$$
For $a\ge0$, the least positive integer $n$ with $n\ge a$ is $\max\{1,\lceil a\rceil\}$. In particular $\lceil0\rceil=0$, and $\lceil k\rceil=k$ for every integer $k$.

## Facts & Assumptions

**Given:** Real $x$, integer $m$, and, for the positive-size claim, real $a\ge0$.

[F1] Every real $t$ has a unique integer $k$ with $k\le t<k+1$, denoted $\lfloor t\rfloor$. [[lem-integer-part]]

[F2] Integers form an ordered ring. Every nonnegative integer is the image of a unique natural, and this embedding preserves order, addition, zero and one. [[thm-int-ordered-ring]], [[lem-nat-embeds-int]]

[F3] For naturals $u,v$, $u<v$ exactly when $u+1\le v$; in particular a positive natural is at least one. [[lem-nat-discrete]]

[F4] Real order is total and transitive, and addition preserves strict order; adjoining the equality case gives the nonstrict version. [[def-ordered-field]], [[lem-of-add-order]]

## Proof

1.1 Apply [F1] to $-x$ and write $k=\lfloor-x\rfloor$, $c=-k$. By [F2], $c$ is an integer. Negating $k\le-x<k+1$ using [F4] gives $c-1<x\le c$. [F1, F2, F4, given, construct]

1.2 For an integer $k$, [F1] applied to $-k\le-k<-k+1$ gives $\lfloor-k\rfloor=-k$, so $\lceil k\rceil=k$. This includes $k=0$. [F1, F2, F4, algebra]

2.1 Every positive integer $d$ is at least one: by [F2] it is the image of a natural, which is nonzero because the embedding is injective and preserves zero, and [F3] gives the conclusion. If an integer $m$ satisfies $x\le m$ but $m<c$, then the positive integer $c-m$ is at least one. Thus $m\le c-1<x\le m$ by step 1.1, a contradiction. Therefore $x\le m$ implies $c\le m$; conversely $c\le m$ implies $x\le m$ because $x\le c$. This proves the equivalence with $c=\lceil x\rceil$. [F2, F3, F4, step 1.1, algebra]

3.1 For $a\ge0$, step 1.1 gives $\lceil a\rceil\ge a\ge0$. Thus $n_*=\max\{1,\lceil a\rceil\}$ is an integer at least one, hence a positive natural under [F2], and $n_*\ge a$. If a positive integer $n$ satisfies $n\ge a$, step 2.1 gives $n\ge\lceil a\rceil$ and step 2.1's discreteness argument gives $n\ge1$. Hence $n\ge n_*$, proving leastness. [F2, F4, step 1.1, step 2.1, algebra] ∎