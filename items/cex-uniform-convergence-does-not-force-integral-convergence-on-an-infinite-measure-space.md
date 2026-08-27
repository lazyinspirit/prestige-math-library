---
id: cex-uniform-convergence-does-not-force-integral-convergence-on-an-infinite-measure-space
kind: counterexample
title: "Uniform convergence does not force convergence of integrals on an infinite-measure space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-bounded-convergence-on-a-finite-measure-space]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory Notes, Example 4.19"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
---

## Statement refuted

Uniform convergence of integrable functions always implies convergence of their
integrals.

## Facts & Assumptions

**Given:** The functions
$f_n:=(n+1)^{-1}\chi_{[0,n+1]}$ on $\mathbb R$.

[L1] Bounded convergence is a finite-measure-space theorem ([[cor-bounded-convergence-on-a-finite-measure-space]]).

## Counterexample

**Proof technique:** direct.

1.1 Since $0\le f_n\le1/(n+1)$, the sequence $(f_n)$ converges uniformly to $0$ on $\mathbb R$. [given]

2.1 Nevertheless, $$\int_{\mathbb R} f_n\,d\lambda=(n+1)^{-1}\lambda([0,n+1])=1$$ for every $n$, so the integrals do not converge to $0$. This refutes the Statement and shows why [L1] needs finite total measure. [step 1.1, L1, algebra] ∎
