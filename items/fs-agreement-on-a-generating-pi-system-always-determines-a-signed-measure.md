---
id: fs-agreement-on-a-generating-pi-system-always-determines-a-signed-measure
kind: false-statement
title: "FALSE: agreement on a generating pi-system always determines a signed measure"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pi-system, def-signed-measure]
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Measure uniqueness on pi-systems requires positivity or a stronger hypothesis"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

**False claim.** If two signed measures agree on a generating pi-system, then
they agree on the whole generated sigma-algebra.

## Facts & Assumptions

**Given:** The two-point space $X=\{0,1\}$ with sigma-algebra $\mathcal P(X)$,
and the family $\mathcal P:=\{\{0\}\}$.

[L1] A pi-system is a nonempty family closed under binary intersections.
([[def-pi-system]])

[L2] A signed measure is any countably additive set function with the
at-most-one-infinite-sign convention. ([[def-signed-measure]])

## Refutation

**Proof technique:** direct.

1.1 The family $\mathcal P=\{\{0\}\}$ is a pi-system by [L1], and [L1, L2]
$\sigma(\mathcal P)=\mathcal P(X)$ because complements and unions recover
$\{1\}$ and $X$. Define signed measures
$$\mu(A):=0,\qquad \nu(A):=\mathbf 1_A(1).$$
They agree on the generating pi-system element $\{0\}$.

2.1 However $\mu(\{1\})=0$ while $\nu(\{1\})=1$, so the signed measures are not [L2, step 1.1] ∎
equal on the generated sigma-algebra. Therefore the claim is false.