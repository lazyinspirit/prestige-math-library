---
id: fs-the-argument-principle-counts-zeros-without-multiplicity
kind: false-statement
title: "FALSE: the argument principle ignores multiplicity"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-argument-principle-null-homologous-cycle]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. W. Howell and J. H. Mathews, Complex Analysis, §8.7"
      url: "https://complexanalysis.org/web/sec_argument-rouche.html"
pipeline_run: null
---

## Statement

**False claim:** the argument principle counts zeros of a holomorphic function
without multiplicity.

## Facts & Assumptions

**Given:** The function $f(z)=z^2$ and the unit circle $\gamma(t)=e^{it}$.

[L1] The argument principle counts zeros with multiplicity
([[thm-argument-principle-null-homologous-cycle]]).

## Refutation

**Proof technique:** direct.

1.1 The function $f(z)=z^2$ has exactly one distinct zero, namely $0$, but that zero has multiplicity $2$. [given]

2.1 Applying [L1] on the unit circle gives $$\frac{1}{2\pi i}\int_\gamma \frac{f'(z)}{f(z)}\,dz=\frac{1}{2\pi i}\int_\gamma \frac{2}{z}\,dz=2.$$ So the argument principle returns $2$, not the number of distinct zeros. The claim is false. [step 1.1, L1, algebra] ∎
