---
id: ex-tdmath-singular-phase-rank
kind: example
title: "A singular two-phase equation map with a four-dimensional solution set"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
proof_strategy: direct
deps:
  - thm-tdmath-phase-dimension
dependency_roles:
  thm-tdmath-phase-dimension: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Faye Jackson, MATH 395 notes, Implicit Function Theorem, pp. 99–106 and 127–132"
      url: "https://math.uchicago.edu/~alephnil/notes/MATH-395-notes.pdf"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: n/a
---

## Example

Take $C=2$ components and $P=2$ phases on the open coordinate domain $U=(0,\infty)^2\times(0,1)^2\subset\mathbb R^4$. Set all four chemical-potential coordinate functions $\mu_i^\alpha$ identically equal to zero. The two coexistence equations then vanish identically, so the solution set is all of $U$ and has local dimension four. The regular formula would give $C-P+2=2$, but its nonsingular-minor hypothesis fails because the equation Jacobian is zero.

## Facts & Assumptions

**Given:** The stated component and phase counts, open domain, and constant coordinate functions.

[L1] [[thm-tdmath-phase-dimension]]: the dimension $C-P+2$ is conditional on an invertible square derivative minor for the coexistence equation map.

## Verification

**Proof technique:** direct calculation.

1.1 For $C=P=2$, there are $n=2+2(2-1)=4$ coordinates and $q=2(2-1)=2$ equations. Since each $\mu_i^\alpha$ is identically zero, both differences $\mu_i^2-\mu_i^1$ equal zero at every point of $U$. Thus the zero set is exactly the open set $U$, which is locally parameterized by its four original coordinates. [given, algebra]

2.1 The derivative of each identically zero equation is the zero covector, so the equation Jacobian has rank zero and no $2\times2$ minor is invertible. Therefore [L1] does not apply; the example does not contradict its regular dimension count, and it shows why equation count alone does not determine local dimension. [L1, step 1.1, algebra] ∎
