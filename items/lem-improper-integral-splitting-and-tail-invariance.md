---
id: lem-improper-integral-splitting-and-tail-invariance
kind: lemma
title: "Improper convergence is independent of finite truncations and split points"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-improper-integral-at-infinity,
       def-improper-integral-at-a-finite-endpoint, def-mixed-improper-integral,
       thm-additivity-over-subintervals, thm-algebra-of-function-limits,
       def-oriented-integral]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Section 3.4"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

Changing a finite lower endpoint of $\int_a^\infty f$, a finite upper endpoint of $\int_{-\infty}^b f$, or a compact truncation beside a finite singular endpoint neither creates nor destroys improper convergence. The values change by the corresponding oriented proper integral.

Consequently, convergence and value in the definitions of an interior-singularity integral and a whole-line integral are independent of the chosen finite split point.

## Facts & Assumptions

**Given:** Local Riemann integrability on every compact interval away from the stated singular ends.

[L1] Proper integrals are additive over adjacent intervals ([[thm-additivity-over-subintervals]]).

[L2] Limits preserve finite sums and differences ([[thm-algebra-of-function-limits]]).

[L3] Improper integrals require separate finite limits at each singular end ([[def-improper-integral-at-infinity]], [[def-improper-integral-at-a-finite-endpoint]], [[def-mixed-improper-integral]]).

## Proof

**Proof technique:** direct.

1.1 If $a<a'$, then for every $R>a'$, [L1, L2]
$$\int_a^R f=\int_a^{a'}f+\int_{a'}^R f.$$
The first term is fixed and finite. By [L2], either truncation limit exists exactly when the other does, and their values differ by $\int_a^{a'}f$. The other three one-ended orientations follow by the same identity with endpoints reversed. [L1, L2]

2.1 Let $s<t$ be two split points on the whole line. Step 1.1 transfers the finite proper integral $\int_s^t f$ from the right tail to the left tail, so the two sums agree. The same calculation around an interior singularity changes only the nonsingular finite portion. Because [L3] continues to require both pieces separately, no cancellation of divergent pieces is introduced. [step 1.1, L1, L3] ∎
