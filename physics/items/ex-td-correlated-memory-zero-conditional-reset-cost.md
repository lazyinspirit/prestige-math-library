---
id: ex-td-correlated-memory-zero-conditional-reset-cost
kind: example
title: "A perfectly retained bit gives zero conditional entropy reset bound"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps: [def-td-finite-memory-reset-model, pthm-td-qualified-landauer-reset, lem-tdmath-conditional-memory-entropy]
dependency_roles:
  def-td-finite-memory-reset-model: formulation-prerequisite
  pthm-td-qualified-landauer-reset: physical-result
  lem-tdmath-conditional-memory-entropy: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
physical_scope: "A calculated finite correlated-memory model illustrating the theorem's retained-register condition; no measurement or reset apparatus is described."
sources:
  references:
    - title: "U. Seifert, Stochastic thermodynamics, fluctuation theorems, and molecular machines"
      url: "https://arxiv.org/html/1205.4176v1"
      locator: "Section 7.3 on information, feedback, and memory reset."
    - title: "C. Jarzynski, Introduction to Nonequilibrium Statistical Physics, lecture notes, Maxwell's Demon"
      url: "https://terpconnect.umd.edu/~cjarzyns/CHEM-CHPH-PHYS_703_Spr_20/onlineLectures/Maxwells%20Demon.pdf"
      locator: "Complete 16-page lecture PDF; memory registers and erasure."
---

## Example

Take memory and register bits $M,R\in\{0,1\}$ with joint law $p(0,0)=p(1,1)=1/2$ and all other probabilities zero. Retain $R$ and reset $M$ to 0.

## Facts & Assumptions

**Given:** The finite joint law and the physical assumptions of [[pthm-td-qualified-landauer-reset]].

[F1] [[lem-tdmath-conditional-memory-entropy]]: $H(M,R)=H(R)+H(M|R)$.

[F2] [[pthm-td-qualified-landauer-reset]]: the reset work bound uses $H(M|R)$, not $H(M)$.

## Verification

**Given:** The specified perfectly correlated two-bit distribution.

1.1 The memory marginal is uniform, so $H(M)=\log2$. Given either value of $R$, the conditional law of $M$ is a point mass; hence each conditional entropy is zero and $H(M|R)=0$. [given, F1, algebra]

2.1 Therefore the theorem yields only $W\ge0$ for this reset under its stated thermodynamic assumptions, while the unconditioned memory entropy is $\log2$. It does not imply a $k_{\mathrm B}T_b\log2$ lower bound for this correlated preparation. [F2, step 1.1, algebra] ∎
