---
id: ex-tdmath-singular-phase-rank
kind: example
title: "A singular two-phase equation map with a four-dimensional solution set"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
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

1.2 The derivative of each identically zero equation is the zero covector, so the equation Jacobian has rank zero and no $2\times2$ minor is invertible. Therefore [L1] does not apply; the example does not contradict its regular dimension count, and it shows why equation count alone does not determine local dimension. [L1, step 1.1, algebra] ∎
