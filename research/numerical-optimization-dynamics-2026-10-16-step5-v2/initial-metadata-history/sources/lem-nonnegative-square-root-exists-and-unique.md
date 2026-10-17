---
id: lem-nonnegative-square-root-exists-and-unique
kind: lemma
title: Nonnegative real square roots exist uniquely
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-complete-ordered-real-field]
sources:
  references:
    - title: "Steven G. Krantz, Foundations of Analysis, §1.1, Theorem 1.8"
      url: "https://api.pageplace.de/preview/DT0400.9781482220759_A37871115/preview-9781482220759_A37871115.pdf"
---

## Statement

In a Dedekind-complete ordered field, every $x\ge0$ has a unique $y\ge0$ with
$y^2=x$.

## Facts & Assumptions

**Given:** A field satisfying [[def-complete-ordered-real-field]] and $x\ge0$.

[A1] [[def-complete-ordered-real-field]]: every nonempty bounded-above subset has a least upper bound; field operations preserve order.

## Proof

1.1 If $x=0$, $y=0$ is a root. If $x>0$, let $S=\{q\ge0:q^2\le x\}$. It contains $0$. If $q>x+1$, then $q^2>(x+1)^2>x$, so $x+1$ bounds $S$ above. By [A1], $y=\sup S$ exists and $y\ge0$. [given, A1, construct]

2.1 Suppose $y^2<x$. Put $\epsilon=\min(1,(x-y^2)/(2y+1))>0$. Then $2y\epsilon+\epsilon^2\le(2y+1)\epsilon\le x-y^2$, so $(y+\epsilon)^2\le x$. Thus $y+\epsilon\in S$, contradicting that $y$ is an upper bound. If $y^2>x$, put $\epsilon=(y^2-x)/(4y)$. Since $0<y^2-x\le y^2$, $0<\epsilon\le y/4$, and $(y-\epsilon)^2=y^2-2y\epsilon+\epsilon^2>x$. Every $q\in S$ therefore satisfies $q<y-\epsilon$, contradicting that $y$ is the least upper bound. Hence $y^2=x$. [step 1.1, A1, algebra]

3.1 If $0\le u<v$, then $v^2-u^2=(v-u)(v+u)>0$ unless $u=v=0$, which is excluded by $u<v$. Thus two nonnegative roots of $x$ cannot differ; $y$ is unique. [step 2.1, algebra] ∎

