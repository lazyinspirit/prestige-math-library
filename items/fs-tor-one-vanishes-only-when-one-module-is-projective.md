---
id: fs-tor-one-vanishes-only-when-one-module-is-projective
title: "Vanishing Tor one does not require a projective factor"
kind: false-statement
status: published
origin: pipeline
deps: ["thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

False claim: $\operatorname{Tor}_1^R(N,M)=0$ can occur only when $N$ or $M$ is projective.

## Refutation

**Given:** $R=\mathbb Z$, $N=\mathbb Q$, and $M=\mathbb Z/2$.

1.1 The module $\mathbb Q$ is flat because it is torsion-free over the PID $\mathbb Z$. [given]

2.1 Flatness gives $\operatorname{Tor}^{\mathbb Z}_1(\mathbb Q,\mathbb Z/2)=0$. [step 1.1, algebra]

3.1 Neither $\mathbb Q$ nor $\mathbb Z/2$ is projective as a $\mathbb Z$-module, so this is the required counterinstance. [step 2.1, algebra] ∎
