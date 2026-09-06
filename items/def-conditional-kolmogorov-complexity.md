---
id: def-conditional-kolmogorov-complexity
kind: definition
title: "Conditional Kolmogorov complexity"
status: published
origin: session
deps: [def-description-machine-and-plain-kolmogorov-complexity, def-effective-binary-encoding-and-decoder]
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
    - title: "Shen, §12"
      url: "https://arxiv.org/pdf/1504.04955"
---
## Definition
A **conditional description machine** is a partial computable function
$$D:\{0,1\}^*\times\{0,1\}^*\rightharpoonup\{0,1\}^*,$$
with pairs represented through a fixed effective pairing and decoder as in
[[def-effective-binary-encoding-and-decoder]]. Put
$$C_D(x\mid y):=\min\{|p|:D(p,y)=x\},$$
with value $\infty$ when no such $p$ exists.

A conditional machine $U$ is **optimal** when, for every conditional machine
$D$, there is a constant $c_D$ such that
$$C_U(x\mid y)\le C_D(x\mid y)+c_D$$
for all strings $x,y$. An optimal conditional machine exists by universal
dispatch: prefix a program $p$ by a fixed self-delimiting code for an index of
$D$ and simulate $D(p,y)$. Fix one such $U$ and write
$C(x\mid y):=C_U(x\mid y)$. This is the conditional version of
[[def-description-machine-and-plain-kolmogorov-complexity]].
