---
id: ex-improper-substitution-reciprocal
kind: example
title: "The substitution $x=1/t$ exchanges the two rational $p$-tests"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-substitution-for-improper-integrals,
       thm-improper-p-test-rational, lem-rational-power-laws,
       def-rational-power, thm-algebra-of-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Section 3.4"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Example

For rational $p$, the decreasing substitution $x=1/t$ gives
$$\int_1^\infty x^{-p}\,dx=\int_0^1 t^{p-2}\,dt$$
whenever either improper integral converges, and convergence occurs exactly when $p>1$.

## Facts & Assumptions

**Given:** The map $\phi(t)=1/t$ from $(0,1]$ onto $[1,\infty)$.

[L1] The reciprocal derivative is $\phi'(t)=-t^{-2}$ ([[thm-algebra-of-derivatives]]).

[L2] Rational exponent laws give $(1/t)^{-p}t^{-2}=t^{p-2}$ ([[lem-rational-power-laws]]).

[L3] Improper substitution preserves convergence and value ([[thm-substitution-for-improper-integrals]]).

## Verification

**Proof technique:** computation.

1.1 The map $\phi$ is decreasing, so [L3] uses $|\phi'|=t^{-2}$. By [L1] and [L2], the transformed integrand is $t^{p-2}$, proving the identity. [L3, L1, L2]

2.1 Write $t^{p-2}=t^{-(2-p)}$. The finite-endpoint $p$-test says this converges exactly when $2-p<1$, namely $p>1$, which is also precisely the infinite-endpoint threshold for the original integral. [given] ∎
