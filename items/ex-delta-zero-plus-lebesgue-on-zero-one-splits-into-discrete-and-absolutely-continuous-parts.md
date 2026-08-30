---
id: ex-delta-zero-plus-lebesgue-on-zero-one-splits-into-discrete-and-absolutely-continuous-parts
kind: example
title: "The measure $\\delta_0+\\lambda\\!\\restriction_{[0,1]}$ splits into discrete and absolutely continuous parts"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition, def-dirac-measure, prop-dirac-measure-is-a-probability-measure]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
---

## Example

Assume the Axiom of Countable Choice. Let
$$\mu:=\delta_0+\lambda\!\restriction_{[0,1]}.$$
Then in the three-part decomposition of [[thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition]] one has
$$\mu_{\mathrm d}=\delta_0,\qquad \mu_{\mathrm{ac}}=\lambda\!\restriction_{[0,1]},\qquad \mu_{\mathrm{sc}}=0.$$

## Facts & Assumptions

**Given:** The finite Borel measure $\mu=\delta_0+\lambda\!\restriction_{[0,1]}$.

[L1] Dirac measure is a finite Borel measure concentrated at one point. ([[def-dirac-measure]], [[prop-dirac-measure-is-a-probability-measure]])

[A1] The restriction $\lambda\!\restriction_{[0,1]}$ is absolutely continuous with respect to $\lambda$.

[L3] Every finite Borel measure on $\mathbb R$ has a unique absolutely continuous, discrete, and singular-continuous decomposition. ([[thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition]])

## Verification

**Proof technique:** direct.

1.1 By [L1], $\delta_0$ is discrete. By [A1], $\lambda\!\restriction_{[0,1]}$ is absolutely continuous with respect to $\lambda$. Their sum is $\mu$, and neither summand has an atomless singular part. [L1, A1, given]

2.1 Therefore the displayed decomposition has exactly the form required by [L3], and uniqueness there forces $\mu_{\mathrm d}=\delta_0$, $\mu_{\mathrm{ac}}=\lambda\!\restriction_{[0,1]}$, and $\mu_{\mathrm{sc}}=0$. [step 1.1, L3] ∎
