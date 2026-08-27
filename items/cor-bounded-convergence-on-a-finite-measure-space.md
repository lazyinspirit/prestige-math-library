---
id: cor-bounded-convergence-on-a-finite-measure-space
kind: corollary
title: "Bounded convergence on a finite measure space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-dominated-convergence]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.24"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a finite measure space and let $f$ and $(f_n)$ be
measurable complex-valued functions with $f_n\to f$ almost everywhere. If
$|f_n|\le M$ almost everywhere for one real $M\ge0$, then
$$\int f_n\,d\mu\longrightarrow\int f\,d\mu.$$

## Facts & Assumptions

**Given:** A finite measure space, measurable complex-valued functions $f,f_n$ with $f_n\to f$ almost everywhere, and a uniform bound $|f_n|\le M$.

[L1] Dominated convergence applies whenever one integrable dominating function controls the whole sequence ([[thm-dominated-convergence]]).

## Proof

**Proof technique:** direct.

1.1 The constant function $g:=M\chi_X$ is integrable because $$\int g\,d\mu=M\mu(X)<+\infty.$$ It dominates every $f_n$. [given, algebra]

2.1 Apply [L1] with the dominating function from step 1.1. [step 1.1, L1] ∎
