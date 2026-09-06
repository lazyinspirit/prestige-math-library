---
id: thm-gap-and-union-theorems-for-complexity-bounds
kind: theorem
title: "Gap and union theorems for abstract complexity bounds"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-computable-and-partial-computable-function]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "Sebastiaan Terwijn, Complexity Theory, Theorem 5.6.1"
      url: "https://www.math.ru.nl/~terwijn/teaching/complexitytheory.pdf"
    - title: "Hartmanis and Hopcroft, An Overview of the Theory of Computational Complexity, Theorem 16"
      url: "https://users.cs.fiu.edu/~giri/teach/5420/f01/papers/p444-hartmanis.pdf"
---

## Statement

Let $\Phi$ be a Blum complexity measure. (Gap) for every total recursive
$r$ satisfying $r(m)>m$ for every $m$, there is a total recursive,
monotonically increasing bound $t$ such that
$\mathcal C_t=\mathcal C_{r\circ t}$. (Union) for every recursively enumerable
family of recursive bounds $(f_i)$ satisfying $f_i(n)<f_{i+1}(n)$ for every
$i,n$, there is a recursive $t$ with
$\mathcal C_t=\bigcup_i\mathcal C_{f_i}$, where $\mathcal C_h$ denotes the
programs whose $\Phi$-complexity is eventually at most $h$.

## Facts & Assumptions

**Given:** a Blum measure, the stated recursive data, and eventual-bound class convention.

## Proof

**Proof technique:** application of the classical recursive constructions.

1.1 The Gap Theorem for abstract measures (Hartmanis--Hopcroft, Theorem 7) applies to the given Blum measure and recursive $r>\mathrm{id}$. Its finite-stage construction uses only bounded tests of the decidable Blum predicate $\Phi_i(x)=m$; it does not attempt to decide whether a program is eventually below a bound. The resulting recursive nondecreasing $t$ has the stage invariant that every indexed program eventually below $r\circ t$ is also eventually below $t$. Hence $\mathcal C_t=\mathcal C_{r\circ t}$. [given, construct]

2.1 The Union Theorem for abstract measures (Hartmanis--Hopcroft, Theorem 16) applies to the effective strictly increasing sequence $(f_i)$. Its recursive finite-injury construction produces a recursive $t$ with two complementary invariants: every $f_i$ is eventually at most $t$, and each indexed program that is outside every $\mathcal C_{f_i}$ exceeds $t$ infinitely often. These give respectively $\bigcup_i\mathcal C_{f_i}\subseteq\mathcal C_t$ and the reverse inclusion. [given, construct] ∎
