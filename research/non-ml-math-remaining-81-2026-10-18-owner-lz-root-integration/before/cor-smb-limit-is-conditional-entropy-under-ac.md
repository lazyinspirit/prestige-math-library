---
id: cor-smb-limit-is-conditional-entropy-under-ac
kind: corollary
title: "Invariant conditional-entropy description of the SMB limit"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - thm-componentwise-shannon-mcmillan-breiman
  - def-past-information-density-finite-alphabet
  - def-axiom-of-choice
  - thm-birkhoff-limit-identification-on-finite-measure-spaces
  - def-strict-and-mod-null-invariant-sigma-algebras
  - def-conditional-expectation-given-a-sigma-algebra
justified_by: []
proof_strategy: direct
axiom_use: "Assume AC only for the published finite-measure Birkhoff-limit identification; the componentwise SMB proof is choice-free."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
---
## Statement

Under AC, identifies the componentwise SMB limit with E[g_infinity|I], conditional expectation of infinite-past information given the invariant sigma-algebra.

## Facts & Assumptions

**Given:** AC, a stationary finite-alphabet source, its invariant sigma-algebra $\mathcal I=\{E:T^{-1}E=E\}$, and $g_\infty$ from [[def-past-information-density-finite-alphabet]].

[A1] [[def-axiom-of-choice]]: AC is assumed only for the published finite-measure Birkhoff-limit identification used below.

[F1] [[thm-componentwise-shannon-mcmillan-breiman]]: the block information limit is the Birkhoff limit of $g_\infty$.

[F2] [[thm-birkhoff-limit-identification-on-finite-measure-spaces]]: under AC, the Birkhoff limit integrates like the function over every strict invariant event.

[F3] [[def-conditional-expectation-given-a-sigma-algebra]]: conditional expectation is characterized by measurability and equality of integrals on all events in the conditioning sigma-algebra.

[F4] [[def-strict-and-mod-null-invariant-sigma-algebras]]: the strict invariant sigma-algebra consists of events $E$ satisfying $T^{-1}E=E$.

## Proof

**Given:** AC, the source, $g_\infty$ and the strict invariant sigma-algebra.

1.1 The function $g_\infty$ is integrable by [F1]. Apply [F2] to its Birkhoff limit $G^*$ on the probability-preserving shift: $G^*$ has an $\mathcal I$-measurable representative and $\int_EG^*\,dP=\int_Eg_\infty\,dP$ for every $E\in\mathcal I$. [A1, F1, F2, F4, given]

1.2 These are exactly the defining tests in [F3] for $E[g_\infty\mid\mathcal I]$. Hence $G^*=E[g_\infty\mid\mathcal I]$ almost surely, and the componentwise SMB limit has this description by [F1]. AC is used only through [F2]; the componentwise SMB theorem itself does not use this identification. [F1, F2, F3, step 1.1, algebra] ∎
