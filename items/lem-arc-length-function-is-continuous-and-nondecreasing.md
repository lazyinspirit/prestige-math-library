---
id: lem-arc-length-function-is-continuous-and-nondecreasing
kind: lemma
title: "The arc-length function is continuous and nondecreasing, with increments equal to subpath lengths; it is strictly increasing exactly when no nondegenerate subpath is constant"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-arc-length-function, thm-arc-length-is-additive-over-subintervals, thm-rectifiable-iff-coordinate-functions-have-bounded-variation, lem-jumps-of-the-variation-function, cor-chord-length-is-at-most-arc-length]
justified_by: []
aliases: []
landmark: true
proof_strategy: comparison
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. M. Apostol, Mathematical Analysis, Theorem 6.19"
      url: "https://studylib.net/doc/27619444/mathematical-analysis-2e-apostol"
pipeline_run: null
---

## Statement

Let $\gamma:[a,b]\to\mathbb R^n$ be rectifiable and let $s=s_\gamma$. Then $s$ is continuous and nondecreasing. Moreover, $s$ is strictly increasing if and only if $\gamma$ is constant on no nondegenerate subinterval of $[a,b]$.

On a singleton interval, continuity and nondecrease hold and the strictness equivalence is vacuous on both sides.

## Facts & Assumptions

**Given:** The rectifiable path and its arc-length function.

[L1] For $u\le v$, $s(v)-s(u)$ is the nonnegative length of the restricted path ([[def-arc-length-function]], [[thm-arc-length-is-additive-over-subintervals]]).

[L2] Every coordinate $\gamma_j$ has bounded variation, and the length of a restriction is at most the sum of its coordinate variations ([[thm-rectifiable-iff-coordinate-functions-have-bounded-variation]]).

[L3] The variation function of a bounded-variation function is continuous at every point where the function is continuous ([[lem-jumps-of-the-variation-function]]).

[L4] A path of length zero is constant ([[cor-chord-length-is-at-most-arc-length]]).

## Proof

**Proof technique:** comparison.

1.1 From [L1], $s(v)\ge s(u)$ whenever $u\le v$, so $s$ is nondecreasing. [L1]

1.2 Let $V_j(t)=\operatorname{Var}_{[a,t]}(\gamma_j)$. Each $V_j$ is continuous by [L2], [L3], and continuity of the path's coordinates. [given, L2, L3]

1.3 If $s(u)=s(v)$ for some $u<v$, [L1] says the intervening path has length zero, and [L4] makes it constant on $[u,v]$. [L1, L4]

2.1 For $u\le v$, [L1] and [L2] give $0\le s(v)-s(u)\le\sum_j(V_j(v)-V_j(u))$. The finite sum on the right tends to zero as $v\to u$, from either permitted side, so $s$ is continuous. [step 1.2, L1, L2]

3.1 Conversely, if $\gamma$ is constant on $[u,v]$, every polygonal sum there is zero, so [L1] gives $s(u)=s(v)$. Thus equality at distinct arguments occurs exactly on a constant subinterval, proving the strictness equivalence. [step 1.3, L1, algebra] ∎
