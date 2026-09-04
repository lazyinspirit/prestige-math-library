---
id: fs-schur-zassenhaus-says-every-hall-subgroup-is-normal
kind: false-statement
title: "FALSE: Schur-Zassenhaus says every Hall subgroup is normal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hall-pi-subgroup, thm-schur-zassenhaus-existence]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
---

## Statement

Schur-Zassenhaus says that every Hall subgroup of a finite group is normal.

## Facts & Assumptions

**Given:** The subgroup $\langle(12)\rangle\le S_3$.

[L1] A Hall subgroup is defined by a coprime order-index condition
([[def-hall-pi-subgroup]]).

[L2] Schur-Zassenhaus starts from a normal Hall subgroup and then produces a
complement ([[thm-schur-zassenhaus-existence]]).

## Refutation

**Proof technique:** direct.

1.1 The subgroup $\langle(12)\rangle$ has order $2$ and index $3$, so [L1] makes it a Hall $\{2\}$-subgroup of $S_3$. [given, L1]

2.1 It is not normal, because $(123)(12)(123)^{-1}=(23)\notin\langle(12)\rangle$. Thus Hall subgroups need not be normal. The actual theorem [L2] assumes normality of the Hall subgroup as a hypothesis, so the claim is false. [L2, step 1.1, algebra] ∎
