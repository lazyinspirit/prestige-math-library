---
id: cex-zero-residue-does-not-force-a-removable-singularity
kind: counterexample
title: "Zero residue does not imply a removable singularity"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-residue-isolated-singularity, thm-pole-characterizations]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if $\operatorname{Res}(f,a)=0$, then $a$ is a removable
singularity of $f$.

The witness is

$$f(z)=\frac{1}{z^2}\qquad(a=0).$$

Its residue at $0$ is $0$, but $0$ is a pole of order $2$, not a removable
singularity.

## Facts & Assumptions

**Given:** The function $f(z)=1/z^2$ on $0<|z|<1$.

[L1] The residue is the coefficient of $(z-a)^{-1}$ in the Laurent expansion ([[def-residue-isolated-singularity]]).

[L2] A finite nonzero principal part characterizes a pole ([[thm-pole-characterizations]]).

## Counterexample

**Proof technique:** direct.

1.1 The Laurent expansion of $f$ at $0$ is just $z^{-2}$, so the coefficient of $z^{-1}$ is $0$; by [L1], $\operatorname{Res}(f,0)=0$. [L1, algebra]

2.1 The same Laurent expansion has finite nonzero principal part $z^{-2}$, so [L2] makes $0$ a pole of order $2$. [L2, step 1.1, algebra]

3.1 Thus $f$ has residue $0$ at $0$ but the singularity is not removable, refuting the claim. [step 1.1, step 2.1] ∎
