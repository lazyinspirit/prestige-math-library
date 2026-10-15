---
id: ex-td-biased-memory-reset-bound
kind: example
title: "Reset bound for a biased two-state memory"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps: [def-td-finite-memory-reset-model, pthm-td-qualified-landauer-reset]
dependency_roles:
  def-td-finite-memory-reset-model: formulation-prerequisite
  pthm-td-qualified-landauer-reset: physical-result
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
physical_scope: "A symbolic finite-memory calculation under the reset theorem's physical assumptions; it is not a measured reset process."
sources:
  references:
    - title: "C. Jarzynski, Introduction to Nonequilibrium Statistical Physics, lecture notes, Maxwell's Demon"
      url: "https://terpconnect.umd.edu/~cjarzyns/CHEM-CHPH-PHYS_703_Spr_20/onlineLectures/Maxwells%20Demon.pdf"
      locator: "Complete 16-page lecture PDF; memory entropy and erasure."
    - title: "U. Seifert, Stochastic thermodynamics, fluctuation theorems, and molecular machines"
      url: "https://arxiv.org/html/1205.4176v1"
      locator: "Section 7.3 on information and feedback."
---

## Example

Let the retained-register set be the singleton $R=\{r_0\}$ and let the memory be a bit with probability $p\in(0,1)$ of state 1. The register carries no information.

## Facts & Assumptions

**Given:** A finite memory law and the endpoint assumptions of [[pthm-td-qualified-landauer-reset]].

[F1] [[def-td-finite-memory-reset-model]]: with no register, $H(M)=-p\log p-(1-p)\log(1-p)$.

[F2] [[pthm-td-qualified-landauer-reset]]: $W\ge k_{\mathrm B}T_b H(M)$ under its stated physical assumptions.

## Verification

**Given:** $p\in(0,1)$ and $T_b>0$.

1.1 Substitution into the conditional reset theorem gives $H(M|R)=H(M)=-p\log p-(1-p)\log(1-p)$. [given, F1, algebra]

2.1 Therefore the theorem gives $W\ge k_{\mathrm B}T_b[-p\log p-(1-p)\log(1-p)]$ for this preparation. It reports no work measurement and makes no claim about an apparatus. [F2, step 1.1, algebra] ∎
