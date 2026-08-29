---
id: cex-numerical-rank-depends-on-the-declared-tolerance
kind: counterexample
title: "The same matrix can have two different numerical ranks under two declared tolerances"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-spectral-numerical-rank-counts-singular-values-above-the-declared-threshold]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "David Bindel, CS 6210: Matrix Nearness Problems"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-15.html"
---



## Statement refuted

Numerical rank is a property of the matrix alone, an exact invariant that does
not depend on the declared tolerance.

## Facts & Assumptions

**Given:** The diagonal matrix $A=\operatorname{diag}(1,1/2,0)$ with singular
values $\sigma_1=1$, $\sigma_2=1/2$, $\sigma_3=0$, and the two tolerances
$\tau_1=3/4$ and $\tau_2=1/4$.

[L1] In the spectral norm,
$\operatorname{rank}_{\tau}(A)=\#\{j:\sigma_j>\tau\}$
([[prop-spectral-numerical-rank-counts-singular-values-above-the-declared-threshold]]).

## Counterexample

**Proof technique:** direct.

1.1 At the tolerance $\tau_1=3/4$, the only singular value strictly above the threshold is $\sigma_1=1$, so [L1] gives $\operatorname{rank}_{\tau_1}(A)=\#\{j:\sigma_j>3/4\}=1$. [L1, algebra]

1.2 At the tolerance $\tau_2=1/4$, the singular values strictly above the threshold are $\sigma_1=1$ and $\sigma_2=1/2$, so [L1] gives $\operatorname{rank}_{\tau_2}(A)=\#\{j:\sigma_j>1/4\}=2$. [L1, algebra]

1.3 The singular value $\sigma_2=1/2$ lies strictly between the two tolerances, $\tau_2=1/4<\sigma_2<\tau_1=3/4$, which is exactly why it is counted at $\tau_2$ but not at $\tau_1$. [given, algebra]

2.1 Steps 1.1, 1.2 and 1.3 exhibit one matrix and two declared tolerances with numerical ranks $1$ and $2$: numerical rank is a function of the matrix together with the tolerance, not of the matrix alone, which refutes the false statement. [step 1.1, step 1.2, step 1.3] ∎
