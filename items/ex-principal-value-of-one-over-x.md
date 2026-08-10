---
id: ex-principal-value-of-one-over-x
kind: example
title: "$1/x$ on $[-1,1]$ has principal value $0$ but no improper integral"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cauchy-principal-value,
       thm-improper-convergence-implies-principal-value,
       thm-improper-p-test-rational, def-oriented-integral]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Section 8.4"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Example

The function $f(x)=1/x$ on $[-1,1]\setminus\{0\}$ has
$$\operatorname{PV}\!\int_{-1}^1\frac{dx}{x}=0,$$
but its two one-sided improper integrals do not converge.

## Facts & Assumptions

**Given:** The reciprocal function away from zero.

[L1] Principal value uses equal truncations on the two sides ([[def-cauchy-principal-value]]).

[L2] The rational $p$-test at $p=1$ says $\int_0^1x^{-1}dx$ diverges ([[thm-improper-p-test-rational]]).

## Verification

**Proof technique:** computation.

1.1 Substitution $x=-t$ gives
$$\int_{-1}^{-\varepsilon}\frac{dx}{x}=-\int_\varepsilon^1\frac{dt}{t}.$$
Thus the symmetric sum is exactly zero for every $\varepsilon>0$, and [L1] gives principal value zero.

2.1 By [L2], the right-hand integral diverges to $+\infty$; the identity in step 1.1 makes the left-hand one diverge to $-\infty$. Hence separate improper convergence fails, showing that the converse of the principal-value theorem is false. ∎
