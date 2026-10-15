---
id: lem-tdmath-reciprocal-naturals-tend-zero
kind: lemma
title: Reciprocals of the positive integers decrease to zero
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: [def-complete-ordered-field, def-natural-numbers, def-nat-addition, lem-nat-add-commutative, lem-nat-add-identity, def-nat-order, lem-nat-order-add-compatible, def-canonical-natural, lem-of-naturals-positive, lem-of-q-embeds, cor-of-one-positive, lem-of-inverse-positive, lem-of-sign-rules, def-real-limit]
dependency_roles:
  def-complete-ordered-field: mathematical-premise
  def-natural-numbers: mathematical-premise
  def-nat-addition: mathematical-premise
  lem-nat-add-commutative: mathematical-premise
  lem-nat-add-identity: mathematical-premise
  def-nat-order: mathematical-premise
  lem-nat-order-add-compatible: mathematical-premise
  def-canonical-natural: mathematical-premise
  lem-of-naturals-positive: mathematical-premise
  lem-of-q-embeds: mathematical-premise
  cor-of-one-positive: mathematical-premise
  lem-of-inverse-positive: mathematical-premise
  lem-of-sign-rules: mathematical-premise
  def-real-limit: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Math 521 – Spring 2010 course notes, Chapter 20"
      url: "https://people.math.wisc.edu/~jwrobbin/521dir/521.pdf"
---

## Statement

In the complete ordered field $\mathbb R$, the sequence $\epsilon_n:=1/(n+1)$, $n\in\mathbb N$, is positive, strictly decreasing, and converges to zero.

## Facts & Assumptions

[F1] [[def-complete-ordered-field]]: every nonempty subset of an ordered field that is bounded above has a least upper bound.

[F2] [[def-natural-numbers]], [[def-nat-addition]], [[lem-nat-add-commutative]], [[lem-nat-add-identity]], and [[def-nat-order]]: $\mathbb N$ is the von Neumann set of naturals, its successor is $\sigma(n)=n+1$, and $m\le n$ means $m+k=n$ for some $k\in\mathbb N$. Since $1+n=n+1=\sigma(n)$, every successor is at least $1$. Natural indices remain in $\mathbb N$; in field expressions the successor is carried into $\mathbb R$ by the canonical natural map of [[def-canonical-natural]].

[F3] [[def-canonical-natural]] and [[lem-of-naturals-positive]]: write $\iota_{\mathbb N}:\mathbb N\to\mathbb R$ for the canonical natural map, with $\iota_{\mathbb N}(0)=0$ and $\iota_{\mathbb N}(\sigma(n))=\iota_{\mathbb N}(n)+1$. It is positive on positive naturals and strictly increases there. Thus the displayed denominator $n+1$ means $\iota_{\mathbb N}(\sigma(n))$, not a von Neumann set used as a real number.

[F4] [[lem-of-q-embeds]]: the rational embedding into $\mathbb R$ preserves order, so every rational $q>0$ has positive real image $\hat q$. [[cor-of-one-positive]], [[lem-of-inverse-positive]], and [[lem-of-sign-rules]] supply $1>0$, positivity of the inverse of a positive real, and reversal of order by reciprocation on positive reals.

[F5] [[def-real-limit]]: a real sequence converges to $0$ when, for every rational $q>0$, its absolute value is eventually less than $\hat q$.

## Proof

**Given:** [F1]–[F5].

1.1 The set $N_{\mathbb R}:=\{\iota_{\mathbb N}(n):n\in\mathbb N\}$ is nonempty. If it were bounded above, completeness [F1] would give $s=\sup N_{\mathbb R}$. Since $1>0$ by [F4], $s-1<s$, so $s-1$ is not an upper bound; choose $n\in\mathbb N$ with $\iota_{\mathbb N}(n)>s-1$. By the successor rule in [F3], $\iota_{\mathbb N}(\sigma(n))=\iota_{\mathbb N}(n)+1>s$, while $\sigma(n)\in\mathbb N$, contradicting that $s$ is an upper bound. Hence $N_{\mathbb R}$ is unbounded above. [F1, F2, F3, F4, algebra]

2.1 For every $n\in\mathbb N$, $\sigma(n)=1+n$ by natural-addition commutativity and the successor rule, so $1\le\sigma(n)$ by the definition of natural order; hence $\iota_{\mathbb N}(\sigma(n))>0$ by [F3]. The successor recursion gives $\iota_{\mathbb N}(\sigma(\sigma(n)))=\iota_{\mathbb N}(\sigma(n))+1>\iota_{\mathbb N}(\sigma(n))$, since $1>0$. Reciprocation reverses this strict inequality by [F4], hence $0<\epsilon_n$ and $\epsilon_{n+1}<\epsilon_n$. Now fix rational $q>0$ and let $\hat q>0$ be its real image. By step 1.1 choose $N\in\mathbb N$ with $\iota_{\mathbb N}(\sigma(N))>1/\hat q$. If $n\ge N$, then $\sigma(N)\le\sigma(n)$ by [F2] and [[lem-nat-order-add-compatible]], and the increasing-map clause of [F3] gives $\iota_{\mathbb N}(\sigma(n))\ge\iota_{\mathbb N}(\sigma(N))$. Therefore $0<\epsilon_n\le 1/\iota_{\mathbb N}(\sigma(N))<\hat q$. This is convergence to zero by [F5]. [F2, F3, F4, F5, step 1.1, algebra] ∎
