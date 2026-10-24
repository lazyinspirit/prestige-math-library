---
id: cex-a-nonzero-polynomial-vanishing-on-a-grid-of-exactly-its-degree
kind: counterexample
title: "$P(x)=x(x-1)$ vanishes on $\\{0,1\\}$ although $\\deg_x P=\\lvert\\{0,1\\}\\rvert$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-polynomial-identity-lemma, def-monomials-multidegree-and-total-degree, thm-root-bound-for-polynomials-over-a-domain, def-polynomial-evaluation-and-root]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "N. Alon, Combinatorial Nullstellensatz, Lemma 2.1"
      url: "https://www.tau.ac.il/~nogaa/PDFS/null.pdf"
pipeline_run: null
---

## Statement refuted

The strict inequality in the polynomial identity lemma cannot be weakened to
equality.

## Facts & Assumptions

**Given:** a field $F$, the polynomial $P(x)=x(x-1)\in F[x]$, and the set $S=\{0,1\}\subseteq F$.

[L1] Over a field, if a polynomial has degree in each variable strictly below the size of the corresponding finite grid set and vanishes on the whole grid, then it is the zero polynomial ([[thm-polynomial-identity-lemma]]).

## Counterexample

**Proof technique:** direct.

1.1 The polynomial $P(x)=x(x-1)$ is nonzero and has degree $2=\lvert S\rvert$. [given]

2.1 Yet $P(0)=0$ and $P(1)=0$, so $P$ vanishes on all of $S$. [step 1.1]

3.1 Therefore the conclusion of [L1] fails when the strict inequality is replaced by equality. [L1, step 2.1] ∎
