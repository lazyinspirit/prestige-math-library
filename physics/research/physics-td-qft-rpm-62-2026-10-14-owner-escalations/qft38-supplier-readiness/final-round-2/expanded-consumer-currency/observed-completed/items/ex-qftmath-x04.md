---
id: ex-qftmath-x04
kind: example
title: Massless formal annihilation angular contrast
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 6
deps:
  - thm-qft-example-massive-tree-annihilation
dependency_roles:
  thm-qft-example-massive-tree-annihilation: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 6, section 6.6
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted HTML chapter; formal electron–positron annihilation and muon-pair channel.
    - title: Mark Srednicki, Quantum Field Theory, author-posted prepublication draft, sections 46–48 and 59
      url: https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page author-hosted textbook draft; spin sums, gamma traces, spin-averaged coefficients, and QED tree rules.
---

## Facts & Assumptions

**Given:** Use the conditional assumptions and conventions of [[thm-qft-example-massive-tree-annihilation]], including its formal tree coefficient and Countable Choice premise. Set $m=M=0$ and $s>0$.

[F1] [[thm-qft-example-massive-tree-annihilation]]: the exact differential and total formal coefficients as functions of $\beta_e,\beta_\mu,\theta,s$.

## Example

For this massless specialization, compare the formal differential coefficient at $\theta=0$ and at $\theta=\pi/2$. This is a coefficient calculation, not an observed event ratio or an exact continuum-QED cross section.

## Verification

1.1 Setting $\beta_e=\beta_\mu=1$ in [F1] gives $d\sigma_{\mathrm{coeff}}/d\Omega=\alpha^2(\hbar c)^2(1+\cos^2\theta)/(4s)$. At $\theta=0$ this is $\alpha^2(\hbar c)^2/(2s)$; at $\theta=\pi/2$ it is $\alpha^2(\hbar c)^2/(4s)$, so the ratio is $2$. [given, F1, algebra]

2.1 Integrating the same density over the sphere uses $\int d\Omega=4\pi$ and $\int\cos^2\theta\,d\Omega=4\pi/3$, giving $\sigma_{\mathrm{coeff}}=4\pi\alpha^2(\hbar c)^2/(3s)$, in agreement with [F1]. No count data or continuum scattering operator is introduced. [step 1.1, F1, algebra] ∎
