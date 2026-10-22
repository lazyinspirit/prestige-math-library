---
id: ex-tgrx-greybody-nonplanck
kind: example
title: Frequency filtering changes a thermal spectrum
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-countable-choice
  - prop-tgrx-collapse-channel-spectrum
dependency_roles:
  def-countable-choice: mathematical-premise
  prop-tgrx-collapse-channel-spectrum: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
---

## Example

Let $\omega_1,\omega_2>0$ be distinct angular frequencies measured in seconds$^{-1}$, let $\theta>0$ be measured in seconds, and choose a pointwise channel transmissivity $\Gamma:(0,\infty)\to[0,1]$ with $\Gamma(\omega_1)=1$ and $\Gamma(\omega_2)=0$. Define the numerical Planck occupation profile $n_\theta(\omega)=(\exp(\theta\omega)-1)^{-1}$ and its filtered profile $m_\Gamma(\omega):=\Gamma(\omega)n_\theta(\omega)$. The proposition's modewise multiplier formula motivates this pointwise profile map; this example does not assert that one normalized Fock-state family realizes the full profile. Then $m_\Gamma$ is positive at $\omega_1$ and zero at $\omega_2$. No single Planck occupation $n_{\theta'}(\omega)$ with finite $\theta'>0$ measured in seconds has both values. This is a constructed mathematical filter, not a claim about an actual black-hole potential.

## Example references

[[prop-tgrx-collapse-channel-spectrum]]

## Facts & Assumptions

**Given:** $\theta>0$ measured in seconds, distinct positive angular frequencies $\omega_1,\omega_2$ measured in seconds$^{-1}$, and the mode channel of [[prop-tgrx-collapse-channel-spectrum]].

[A1] Countable Choice is inherited from the supplied channel proposition. [[def-countable-choice]]

[F1] [[prop-tgrx-collapse-channel-spectrum]] gives $n_{\theta}(\omega)>0$ for every $\theta>0$ and $\omega>0$.

[F2] [[prop-tgrx-collapse-channel-spectrum]] proves the loss-channel identity $\mathfrak n_{\rm out}(\omega)=\Gamma(\omega)n_\omega$ for each fixed-frequency normalized signal vector in the stated annihilation-operator domain and a vacuum environment. The profile $m_\Gamma$ here is only the numerical pointwise multiplier of $n_\theta$; no state-family realization is asserted.

## Verification

1.1 From the definition of $m_\Gamma$ and [F1], $m_\Gamma(\omega_1)=1\cdot n_\theta(\omega_1)>0$ and $m_\Gamma(\omega_2)=0\cdot n_\theta(\omega_2)=0$. [given, A1, F1, algebra]

2.1 If one finite $\theta'>0$ Planck function fitted both values, it would have $n_{\theta'}(\omega_2)>0$ by [F1], contradicting $m_\Gamma(\omega_2)=0$ from step 1.1. Thus no such common width exists. [A1, F1, step 1.1, algebra] ∎
