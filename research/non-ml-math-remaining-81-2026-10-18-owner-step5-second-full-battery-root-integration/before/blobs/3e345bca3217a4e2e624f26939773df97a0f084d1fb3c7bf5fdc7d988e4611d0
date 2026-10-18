---
id: def-qkd-abort-aware-composable-security
kind: definition
title: Abort-aware real and ideal QKD outputs and security errors
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-qkd-finite-authenticated-protocol
  - def-qc-density-operator
  - def-qc-trace-distance
  - def-qc-trace-norm
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
justified_by:
  - lem-qkd-abort-aware-ideal-output-is-state
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Christopher Portmann and Renato Renner, Cryptographic Security of Quantum Key Distribution (2014), §§3.3–4.3
      url: https://arxiv.org/pdf/1409.3525
    - title: Joseph M. Renes, Quantum Information Theory, ETH Zürich lecture notes (HS2014; revised 4 February 2015), §8.3
      url: https://edu.itp.phys.ethz.ch/hs15/QIT/renes_lecture_notes14.pdf
    - title: M. Ben-Or, M. Horodecki, D. W. Leung, D. Mayers, and J. Oppenheim, The Universal Composable Security of Quantum Key Distribution (2005), §§2 and 4
      url: https://arxiv.org/pdf/quant-ph/0409078
    - title: John Watrous, The Theory of Quantum Information (2018), Chapter 1, §1.1.3
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
---

## Definition

Fix one adversarial strategy in a protocol from [[def-qkd-finite-authenticated-protocol]]. Write its final output blocks as $\omega_E^{\bot,t}$ on abort and $\omega_E^{a,b,t}$ on acceptance. Define the abort and accepted transcript-adversary substates by

$$\rho_{TE}^{\rm abort}:=\sum_{t\in\mathsf T}|t\rangle\langle t|\otimes\omega_E^{\bot,t},\qquad \rho_{TE}^{\rm acc}:=\sum_{t\in\mathsf T}|t\rangle\langle t|\otimes\sum_{a,b\in\mathsf K}\omega_E^{a,b,t}.$$

The accepted part of the full real state is $\rho_{ABTE}^{\rm acc}:=\sum_{a,b\in\mathsf K,\ t\in\mathsf T}|a,b,t\rangle\langle a,b,t|\otimes\omega_E^{a,b,t}$.

Their traces are $p_{\rm abort}$ and $p_{\rm acc}$, with $p_{\rm abort}+p_{\rm acc}=1$. If $p_{\rm acc}>0$, put $\rho_{ABTE}^{\top}:=\rho_{ABTE}^{\rm acc}/p_{\rm acc}$ and define the normalized accepted marginals directly from their classical blocks:

$$\rho_{ATE}^{\top}:=\sum_{a,t}|a,t\rangle\langle a,t|\otimes\frac{1}{p_{\rm acc}}\sum_b\omega_E^{a,b,t},\qquad \rho_{TE}^{\top}:=\sum_t|t\rangle\langle t|\otimes\frac{1}{p_{\rm acc}}\sum_{a,b}\omega_E^{a,b,t}.$$

For $m:=|\mathsf K|$, define the uniform key state $\tau_A:=m^{-1}\sum_{a\in\mathsf K}|a\rangle\langle a|$ and the ideal uniform shared-key state $\tau_{AB}:=m^{-1}\sum_{a\in\mathsf K}|a,a\rangle\langle a,a|$. The **abort-aware ideal full output** keeps the real abort branch and the accepted transcript-adversary marginal, but replaces the accepted keys with a uniform shared key independent of both:

$$\rho_{ABTE}^{\rm ideal}:=\sum_t|\bot,\bot,t\rangle\langle\bot,\bot,t|\otimes\omega_E^{\bot,t}+\tau_{AB}\otimes\rho_{TE}^{\rm acc}.$$

Let $\rho_{ABTE}^{\rm real}$ be the normalized output from the protocol definition. The **real-ideal trace-distance error** is $\delta_{\rm id}:=D(\rho_{ABTE}^{\rm real},\rho_{ABTE}^{\rm ideal})$, using [[def-qc-trace-distance]]. The **correctness error** is $\varepsilon_{\rm cor}:=\Pr[K_A\ne K_B]=\sum_{a\ne b,t}\operatorname{tr}(\omega_E^{a,b,t})$; the common abort output contributes no mismatch. The **secrecy error** is

$$\varepsilon_{\rm sec}:=\begin{cases}p_{\rm acc}D(\rho_{ATE}^{\top},\tau_A\otimes\rho_{TE}^{\top}),&p_{\rm acc}>0,\\0,&p_{\rm acc}=0.\end{cases}$$

This is an unconditional convention: the normalized secrecy distance on acceptance is weighted by the acceptance probability. Errors in a protocol are uniform bounds on these strategy-specific quantities over all allowed adversarial strategies.
