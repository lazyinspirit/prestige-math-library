---
id: def-optimal-description-machine
kind: definition
title: "Optimal description machines"
status: published
origin: session
deps: [def-description-machine-and-plain-kolmogorov-complexity]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Shen, Around Kolmogorov Complexity, §3"
      url: "https://arxiv.org/pdf/1504.04955"
---

## Definition

A description machine $U$ is **optimal** if, for every description machine $M$, there is a constant $c_M$ such that $C_U(x)\le C_M(x)+c_M$ for every finite binary string $x$. The constant may depend on $M$ but not on $x$.
