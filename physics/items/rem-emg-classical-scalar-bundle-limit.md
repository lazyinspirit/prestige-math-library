---
id: rem-emg-classical-scalar-bundle-limit
kind: remark
title: "Classical scalar sector and bundle limitation"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 5
deps:
  - def-emg-trivial-potential-charged-scalar-system
dependency_roles:
  def-emg-trivial-potential-charged-scalar-system: mathematical-premise
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "David Tong, Gauge Theory, full author-hosted lecture notes, §7.2"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf"
      locator: "Complete 457-page PDF; §7.2, PDF pp. 349–352: a U(1) complex scalar and gauge-covariant derivative. The present remark records only the local definition's exact-potential scope."
provenance:
  statement: ai-altered
  proof: not-applicable
---

## Remarks

[[def-emg-trivial-potential-charged-scalar-system]] uses a globally defined real one-form $A$ and $F=dA$, so it describes only the trivial-potential sector. It does not cover a connection on an arbitrary nontrivial principal $U(1)$ bundle, a scalar represented only by local sections with nontrivial transition functions, or singular currents. In this global real-potential sector $\lambda$ may be any real number; charge quantization belongs to a separately specified bundle representation and is not inferred here. The field $\varphi$ is a classical complex field, not a quantum amplitude, and no value of $\hbar$ is used.

