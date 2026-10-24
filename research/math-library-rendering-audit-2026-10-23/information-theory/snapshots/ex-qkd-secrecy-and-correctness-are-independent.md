---
id: ex-qkd-secrecy-and-correctness-are-independent
kind: example
title: Secrecy and correctness are separate requirements
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-qkd-finite-authenticated-protocol
  - def-qkd-abort-aware-composable-security
  - thm-qkd-composable-secrecy-sum-bound
  - def-qc-trace-distance
  - thm-qc-trace-norm-spectral-formula
  - def-qc-density-operator
  - def-qc-register-and-computational-basis
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Christopher Portmann and Renato Renner, Cryptographic Security of Quantum Key Distribution (2014), §4.3
      url: https://arxiv.org/pdf/1409.3525
    - title: Joseph M. Renes, Quantum Information Theory, ETH Zürich lecture notes (HS2014; revised 4 February 2015), §8.3
      url: https://edu.itp.phys.ethz.ch/hs15/QIT/renes_lecture_notes14.pdf
---

## Example

For $\mathsf K=\{0,1\}$, no abort, a one-element transcript, and a one-dimensional adversary system, consider two finite output laws. In the first, Alice's key is uniform but Bob always outputs its complement: secrecy error is $0$ and correctness error is $1$. In the second, both parties always output $0$: correctness error is $0$ and secrecy error is $1/2$. Thus neither condition implies the other.

## Facts & Assumptions

**Given:** The two normalized classical output states described in the Example.

[F1] [[def-qkd-abort-aware-composable-security]]: the correctness error is the probability of unequal accepted outputs, and secrecy compares Alice's accepted key with a uniform key independent of transcript and Eve.

[F2] [[def-qc-trace-distance]]: trace distance of density operators is half the trace norm of their difference.

[F3] [[thm-qc-trace-norm-spectral-formula]]: for an orthogonal diagonal decomposition, the trace norm is the sum of absolute eigenvalues.

[F4] [[thm-qkd-composable-secrecy-sum-bound]]: the real-ideal distance is at most the sum of the correctness and secrecy errors.

## Verification

**Given:** Let $\rho^{(1)}=\tfrac12|0,1,t\rangle\langle0,1,t|+\tfrac12|1,0,t\rangle\langle1,0,t|$ and $\rho^{(2)}=|0,0,t\rangle\langle0,0,t|$, with Eve's one-dimensional factor suppressed.

1.1 For $\rho^{(1)}$, Alice's marginal is $I/2$, so it is already uniform and independent of the trivial transcript-adversary state; hence $\varepsilon_{\rm sec}=0$. Every output pair differs, so $\varepsilon_{\rm cor}=1$. The real state is supported on $\{|0,1,t\rangle,|1,0,t\rangle\}$ while the ideal state is supported on the orthogonal set $\{|0,0,t\rangle,|1,1,t\rangle\}$. Their difference therefore has positive and negative parts each of trace one, giving $\delta_{\rm id}=1$ by [F2]–[F3]. [given, F1, F2, F3, algebra]

2.1 For $\rho^{(2)}$, the parties always agree, so $\varepsilon_{\rm cor}=0$. Alice's accepted state is $|0\rangle\langle0|$, and $|0\rangle\langle0|-I/2$ has eigenvalues $1/2,-1/2$; hence $\varepsilon_{\rm sec}=1/2$. The real-ideal output difference has the same two eigenvalues, so $\delta_{\rm id}=1/2$. Both cases satisfy [F4] with equality, while each has exactly one of the two component errors zero. [given, F1, F2, F3, F4, algebra] ∎
