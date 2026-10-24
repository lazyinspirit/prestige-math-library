---
id: cex-lebesgue-plus-counting-measure-has-no-lebesgue-decomposition-relative-to-lebesgue-measure
kind: counterexample
title: "Lebesgue plus counting measure has no Lebesgue decomposition relative to Lebesgue measure"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-counting-measure, prop-counting-measure-is-a-measure, thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
---

## Statement refuted

The measure $\lambda\!\restriction_{[0,1]}+c$ on $[0,1]$ admits a Lebesgue decomposition relative to Lebesgue measure, where $c$ is counting measure.

## Facts & Assumptions

**Given:** The measure $\nu:=\lambda\!\restriction_{[0,1]}+c$ on $[0,1]$.

[L1] Counting measure gives value $1$ to every singleton. ([[def-counting-measure]], [[prop-counting-measure-is-a-measure]])

[L2] A Lebesgue decomposition would have the form $\nu=\nu_a+\nu_s$ with $\nu_a\ll\lambda$ and $\nu_s\perp\lambda$. ([[thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures]])

## Counterexample

**Proof technique:** direct.

1.1 Suppose $\nu=\nu_a+\nu_s$ were such a decomposition. For each $x\in[0,1]$, absolute continuity gives $\nu_a(\{x\})=0$, so $$\nu_s(\{x\})=\nu(\{x\})=1.$$ [L1, L2, assume-contra, algebra]

2.1 If $\nu_s\perp\lambda$, then $\nu_s$ is concentrated on some Lebesgue-null set $N$. But every $x\in[0,1]\setminus N$ satisfies $\{x\}\subseteq[0,1]\setminus N$, so concentration would force $\nu_s(\{x\})=0$, contradicting step 1.1. Therefore no such decomposition exists. [step 1.1, contradiction: concentration off a null set, discharge-contradiction] ∎
