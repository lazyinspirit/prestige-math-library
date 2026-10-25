---
id: def-prefix-free-machine-and-prefix-complexity
kind: definition
title: "Prefix-free machines and prefix complexity"
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
    - title: "Shen, §34"
      url: "https://arxiv.org/pdf/1504.04955"
---
## Definition
A description machine $M$ is **prefix-free** if its domain contains no two words one of which is a proper prefix of the other. Define $K_M(x)=\min\{|p|:M(p)=x\}$, with $\infty$ when no description exists. This is relative complexity only; unqualified $K$ is not fixed until an optimal prefix-free machine is constructed. The underlying machine notion is [[def-description-machine-and-plain-kolmogorov-complexity]].
