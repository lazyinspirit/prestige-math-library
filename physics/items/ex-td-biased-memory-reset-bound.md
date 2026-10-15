---
id: ex-td-biased-memory-reset-bound
kind: example
title: "Reset bound for a biased two-state memory"
status: published
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
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Example

Let the retained-register set be the singleton $R=\{r_0\}$ and let the memory be a bit with probability $p\in(0,1)$ of state 1. The register carries no information.

## Facts & Assumptions

**Given:** A finite memory law and the endpoint assumptions of [[pthm-td-qualified-landauer-reset]].

[F1] [[def-td-finite-memory-reset-model]]: $a_r=\sum_m p(m,r)$, $q(m|r)=p(m,r)/a_r$ for $a_r>0$, and $H(M|R)=\sum_{r:a_r>0}a_r[-\sum_{m:q(m|r)>0}q(m|r)\log q(m|r)]$, with natural logarithms and entropy in nats.

[F2] [[pthm-td-qualified-landauer-reset]]: $W\ge k_{\mathrm B}T_b H(M|R)$ under its stated endpoint entropy, fixed-temperature bath, unchanged endpoint energy, and total entropy nondecrease assumptions.

## Verification

**Given:** $p\in(0,1)$ and $T_b>0$.

1.1 Since $R=\{r_0\}$, its marginal is $a_{r_0}=1$, and the conditional law is $q(1|r_0)=p$, $q(0|r_0)=1-p$. The entropy definition therefore gives $H(M|R)=H(M)=-p\log p-(1-p)\log(1-p)$. [given, F1, algebra]

2.1 Therefore the theorem gives $W\ge k_{\mathrm B}T_b[-p\log p-(1-p)\log(1-p)]$ for this preparation. It reports no work measurement and makes no claim about an apparatus. [F2, step 1.1, algebra] ∎
