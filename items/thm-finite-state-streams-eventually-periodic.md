---
id: thm-finite-state-streams-eventually-periodic
kind: theorem
title: "Every deterministic finite-state stream is eventually periodic"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Pierre L’Ecuyer, Pseudorandom Number Generators (2007)"
      url: "https://www.iro.umontreal.ca/~lecuyer/myftp/papers/eqf.pdf"
      locator: "Introduction: deterministic finite-state generator and eventual periodicity. The local pigeonhole proof includes the injective-transition zero-preperiod refinement. Historical full-text inspection and later fetch failure are recorded in batch11 coverage; no new successful fetch is asserted."
---

## Statement

Let $S$ be a nonempty finite set with $N$ elements, let $T:S\to S$ be a deterministic transition, let $s_0\in S$, and let $g:S\to Y$ be any output map. The state sequence $s_{n+1}=T(s_n)$ has integers $\mu\ge0$ and $p\ge1$ with $\mu+p\le N$ such that $s_{n+p}=s_n$ for all $n\ge\mu$. Hence the output sequence $g(s_n)$ is eventually periodic with period $p$. If $T$ is bijective, then $\mu=0$ can be used.

## Facts & Assumptions

**Given:** The finite state set, deterministic transition, initial state, and output map in the Statement.

[A1] The state space has exactly $N<\infty$ elements, and each next state is uniquely determined by the current one.

## Proof

1.1 Among the $N+1$ states $s_0,\ldots,s_N$, two must be equal, so choose $0\le i<j\le N$ with $s_i=s_j$. Put $\mu=i$ and $p=j-i$. Applying the same transition to equal states repeatedly gives $s_{n+p}=s_n$ for every $n\ge i$, and $\mu+p=j\le N$. [given, A1, choose]

2.1 If $T$ is bijective, its $i$-fold iterate is injective. Applying that injectivity to $T^i(s_0)=T^j(s_0)$ gives $s_0=T^{j-i}(s_0)=s_p$. Repeated application of $T$ yields $s_{n+p}=s_n$ from $n=0$, and applying $g$ gives the same output period. [A1, step 1.1, algebra] ∎
