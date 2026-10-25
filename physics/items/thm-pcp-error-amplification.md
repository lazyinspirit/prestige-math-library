---
id: thm-pcp-error-amplification
kind: theorem
title: "PCP soundness amplification by independent repetition"
status: published
origin: pipeline
deps:
  - def-pcp-class-with-completeness-and-soundness
  - def-product-of-finite-probability-spaces
  - def-independent-families-of-event-classes
  - thm-product-probability-has-independent-coordinate-events
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.1, Note 3 to Theorem 18.2, printed p. 354"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

Let $V$ be a nonadaptive PCP verifier with addressable proof length $L(n)$,
randomness bound $r(n)$, query bound $q(n)$, fixed finite proof alphabet, and
completeness at least the constant $c$ and soundness at most the constant $s$,
where $0\le s<c\le1$. For every fixed integer $k\ge1$, repeat $V$ on $k$
independent random tapes, using the same fixed proof in every run, and accept
if and only if all $k$ runs accept. The repeated verifier has proof length
$L(n)$, randomness bound $kr(n)$, query bound $kq(n)$, completeness at least
$c^k$, and soundness at most $s^k$. If $c=1$, perfect completeness remains
perfect. For every fixed target $\tau\in(0,1)$, a fixed $k$ can be chosen so
that $s^k\le\tau$; if $s=0$, take $k=1$. No claim of reaching target $0$ is
made when $s>0$.

## Facts & Assumptions

**Given:** A verifier satisfying the fixed-proof completeness and soundness
conditions of the statement, and a fixed positive integer $k$.

[F1] PCP completeness uses one fixed proof on a yes input, while soundness
holds for every fixed proof on a no input; the proof alphabet and resource
bounds are fixed for the verifier. ([[def-pcp-class-with-completeness-and-soundness]])

[F2] A finite product of finite probability spaces has product outcomes and
product weights. ([[def-product-of-finite-probability-spaces]])

[F3] In a finite product space, events determined by distinct coordinates
are mutually independent. ([[thm-product-probability-has-independent-coordinate-events]])

[F4] Independence of event classes means that every finite choice of one
event from each of distinct classes has intersection probability equal to
the product of its probabilities. ([[def-independent-families-of-event-classes]])

## Proof

1.1 Define $V^{(k)}$ to use $k$ independent blocks of $r(n)$ random bits, run $V$ once on each block with the original fixed proof, and accept exactly when every run accepts. Concatenating the query lists gives at most $kq(n)$ symbol queries, all determined by the input and full random tape before answers are read; the proof length and alphabet are unchanged, and the verifier remains uniform polynomial time for fixed $k$. [F1, given, construct]

1.2 Fix an input $x$ and proof $\pi$, let $p=\Pr[V^\pi(x)\text{ accepts}]$, and let $A_i$ be the event that run $i$ accepts. The $k$ coin blocks form the product space in [F2], each $A_i$ depends only on coordinate $i$, and [F3] makes them mutually independent in the sense of [F4]. Therefore $\Pr[V^{(k),\pi}(x)\text{ accepts}]=\Pr[\bigcap_{i=1}^kA_i]=\prod_{i=1}^kp=p^k$. This remains valid for zero random bits, where each coordinate space is a singleton. [F2, F3, F4, algebra]

2.1 If $x$ is a yes input, [F1] supplies one fixed proof with $p\ge c$, so step 1.2 gives acceptance $p^k\ge c^k$. If $x$ is a no input, every fixed proof has $p\le s$, so every repeated run on that same proof has acceptance $p^k\le s^k$. In particular $c=1$ gives completeness one. [F1, step 1.2, algebra]

3.1 For $0<s<1$, put $u=1-s>0$. For each $k\ge1$, $s^{-k}=(1+u/s)^k\ge1+ku/s\ge1+ku$, hence $s^k\le(1+ku)^{-1}$. Choosing a fixed integer $k\ge(\tau^{-1}-1)/u$ gives $s^k\le\tau$; when $s=0$, step 2.1 already gives soundness zero with $k=1$. Because $s,\tau$ are constants independent of $n$, this $k$ is fixed, so multiplying $r(n)$ and $q(n)$ by $k$ preserves logarithmic randomness and constant query bounds. [step 2.1, algebra, discharge-construct] ∎
