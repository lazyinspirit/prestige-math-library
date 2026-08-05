---
id: thm-continuity-characterised-by-nets
kind: theorem
title: "A map of topological spaces is continuous at a point if and only if it preserves every net converging to that point"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-closure-characterised-by-nets, def-net-convergence-and-cluster-point, def-continuous-map-top, thm-continuity-characterisations-top]
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "WVU Math 581 Topology I"
      url: "https://math.wvu.edu/~jwojciec/teaching_files/2024_Spring-581/index.html"
    - title: "Net (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Net_(mathematics)"
pipeline_run: null
---

## Statement

Let $f:X\to Y$ and $p\in X$. Then $f$ is continuous at $p$ if and only if, for every net $x_d\to p$ in $X$, the net $f(x_d)$ converges to $f(p)$ in $Y$.

## Facts & Assumptions

**Given:** A function $f:X\to Y$ and a point $p\in X$.

[A1] $f$ is continuous at $p$ exactly when every neighbourhood $V$ of $f(p)$ has $f^{-1}[V]$ as a neighbourhood of $p$ ([[def-continuous-map-top]]).

[A2] A point is in the closure of a set exactly when a net in that set converges to it ([[thm-closure-characterised-by-nets]]).

[A3] A net converges exactly when it is eventually in every neighbourhood ([[def-net-convergence-and-cluster-point]]).



## Proof

**Proof technique:** contradiction.

1.1 If $f$ is continuous at $p$ and $x_d\to p$, then for every neighbourhood $V$ of $f(p)$ the net is eventually in $f^{-1}[V]$ by [A1], hence $f(x_d)$ is eventually in $V$ and converges to $f(p)$. [A1, A3]

1.2 Conversely, assume every net converging to $p$ has image converging to $f(p)$, and assume for a contradiction that $f$ is not continuous at $p$. Then some neighbourhood $V$ of $f(p)$ has $f^{-1}[V]$ not a neighbourhood of $p$. [A1, assume-contra]

2.1 Put $A=X\setminus f^{-1}[V]$. Every neighbourhood of $p$ meets $A$, for otherwise it would be contained in $f^{-1}[V]$; hence $p\in\overline A$ and [A2] gives a net $x_d$ in $A$ converging to $p$. [step 1.2, A2]

3.1 Every $f(x_d)$ lies outside $V$, so its image net is not eventually in the neighbourhood $V$ of $f(p)$ and cannot converge to $f(p)$, contradicting the assumption of step 1.2. [step 2.1, A3]

4.1 Therefore $f$ is continuous at $p$; together with step 1.1 this proves the equivalence. [step 1.1, step 3.1, discharge-contradiction] ∎
