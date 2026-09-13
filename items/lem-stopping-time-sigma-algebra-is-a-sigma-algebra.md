---
id: lem-stopping-time-sigma-algebra-is-a-sigma-algebra
kind: lemma
title: The stopping-time sigma-algebra is a sigma-algebra
status: draft
origin: pipeline
deps: [def-sigma-algebra-at-a-stopping-time, def-sigma-algebra]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, Exercises 2.37–2.39 and Lemma 2.41, pp. 20–21", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Statement

For every stopping time $\tau$, $\mathcal F_\tau$ is a $\sigma$-algebra contained in $\mathcal F$. For deterministic $\tau=n$ it equals $\mathcal F_n$. If $\sigma\le\tau$ pointwise, then $\mathcal F_\sigma\subseteq\mathcal F_\tau$.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[def-sigma-algebra-at-a-stopping-time]] gives the defining intersection tests.

[F2] [[def-sigma-algebra]] supplies closure operations.

## Proof

1.1 Since $\{\tau\le n\}\in\mathcal F_n$, $\Omega$ passes every test. If $A$ passes, then $$A^c\cap\{\tau\le n\}=\{\tau\le n\}\setminus(A\cap\{\tau\le n\})\in\mathcal F_n.$$ If all $A_j$ pass, distributivity gives $$(\bigcup_jA_j)\cap\{\tau\le n\}=\bigcup_j(A_j\cap\{\tau\le n\})\in\mathcal F_n.$$ Thus $\mathcal F_\tau$ is a $\sigma$-algebra, and containment in $\mathcal F$ is part of F1. [F1, F2]

1.2 If $\tau\equiv n$, all tests below $n$ are vacuous and the test at $n$ is $A\in\mathcal F_n$; upward nesting then supplies every later test. Hence $\mathcal F_\tau=\mathcal F_n$. [F1]

2.1 Suppose $\sigma\le\tau$ and $A\in\mathcal F_\sigma$. For each $n$, $$A\cap\{\tau\le n\} =\bigcup_{k=0}^n (A\cap\{\sigma\le k\})\cap\{\tau=k\}.$$ On $\{\tau=k\}$ the condition $\sigma\le k$ is automatic, so the equality is exact. Each term belongs to $\mathcal F_k\subseteq\mathcal F_n$, proving $A\in\mathcal F_\tau$. The order hypothesis is not weakened to an untracked almost-sure order. [F1, F2] ∎