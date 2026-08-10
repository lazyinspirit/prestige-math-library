---
id: thm-substitution-for-improper-integrals
kind: theorem
title: "Change of variable in an improper integral"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-monotone-change-of-variable-for-riemann-integrals,
       def-improper-integral-at-infinity,
       def-improper-integral-at-a-finite-endpoint, def-mixed-improper-integral,
       def-monotone-function, def-derivative,
       thm-algebra-of-function-limits, def-oriented-integral]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Theorem 8.3.9"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

Let $I$ and $J$ be intervals, possibly open at finite or infinite singular ends, and let $\phi:I\to J$ be a monotone differentiable surjection. Assume $\phi'$ is locally Riemann integrable and the proper change-of-variable hypotheses hold on every compact truncation. If $f$ is locally Riemann integrable on $J$, then
$$\int_J f(x)\,dx\quad\text{and}\quad
\int_I f(\phi(t))|\phi'(t)|\,dt$$
converge simultaneously and, when convergent, are equal. At several singular ends this assertion is applied separately to the corresponding ends; orientation is retained for decreasing parametrizations.

## Facts & Assumptions

**Given:** The intervals, monotone surjection $\phi$, and locally integrable $f$ in the statement.

[L1] The proper change-of-variable theorem gives equality on corresponding compact truncations ([[thm-monotone-change-of-variable-for-riemann-integrals]]).

[L2] Monotonicity and surjectivity send truncations tending to an endpoint of $I$ to truncations tending to the corresponding endpoint of $J$.

[L3] Limits are preserved under equality and under finite sums ([[thm-algebra-of-function-limits]]).

[L4] Mixed improper integrals require separate convergence at every singular end ([[def-mixed-improper-integral]]).

## Proof

**Proof technique:** direct.

1.1 On each compact source truncation $[u,v]\subset I$, [L1] gives [L1]
$$\int_{\phi([u,v])}f=\int_u^v(f\circ\phi)|\phi'|,$$
with the endpoint order adjusted when $\phi$ decreases.

1.2 By [L2], the two sides form the same net of values as the corresponding truncation approaches a singular end. Thus one has a finite limit exactly when the other does, and the limits are equal. [step 1.1, L2, L3]

2.1 For multiple ends, apply step 1.2 separately at each matched end and add only after all pieces converge, as [L4] requires. The oriented convention supplies the sign for a decreasing parametrization. [L4, step 1.2] ∎
