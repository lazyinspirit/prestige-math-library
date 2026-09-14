---
id: cex-standard-unit-vectors-are-not-a-schauder-basis-of-ell-infinity
kind: counterexample
title: "The standard unit vectors are not a Schauder basis of ell-infinity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-schauder-basis-and-coordinate-functionals, def-c-zero-and-ell-infinity]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Thomas Schlumprecht, Course Notes in Functional Analysis, Math 655"
      url: "https://people.tamu.edu/~t-schlumprecht/course_notes_math655_23c.pdf"
      locator: "Examples 3.1.2 and the contrast with ell-infinity, printed pp.63-64"
pipeline_run: phase-2-next-18
---

## Statement refuted

The standard unit vectors form a Schauder basis of $\ell^\infty$.

## Facts & Assumptions

[L1] A Schauder basis expansion must converge in norm to every vector
([[def-schauder-basis-and-coordinate-functionals]]).

[L2] $c_0$ consists of scalar sequences tending to zero and is contained in
$\ell^\infty$ ([[def-c-zero-and-ell-infinity]]).

## Counterexample

**Proof technique:** counterexample.

**Given:** The objects and hypotheses in the Statement.

1.1 Every finite linear combination of standard unit vectors has finite [given, L2]
support. A supremum-norm limit of finite-support sequences lies in $c_0$: for a
given tolerance, approximate uniformly by one finite-support sequence and use
its finite support to bound the tail. [L2, uniform limit]

2.1 The constant-one sequence belongs to $\ell^\infty$ but not to $c_0$. [given, L1, L2, step 1.1]
Therefore it is not the norm limit of standard-unit-vector partial sums, in
violation of [L1]. This explicit witness refutes the statement.
[L1, L2, step 1.1] ∎
