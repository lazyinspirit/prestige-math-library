---
id: post-td-stationary-bath-kernel
kind: postulate
title: "Finite bath kernels preserve the stage canonical law"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps: [def-td-driven-finite-path-model]
dependency_roles:
  def-td-driven-finite-path-model: operational-prerequisite
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "The transition matrices of the specified finite-state model preserve each stage's canonical probability vector; no universal Markov approximation or physical thermalization theorem is asserted."
sources:
  references:
    - title: "U. Seifert, Stochastic thermodynamics, fluctuation theorems, and molecular machines"
      url: "https://arxiv.org/html/1205.4176v1"
      locator: "Sections 6.1 and 6.2 on finite-state master-equation dynamics and stationary distributions."
    - title: "C. Jarzynski, Introduction to Nonequilibrium Statistical Physics, lecture notes, Detailed Balance"
      url: "https://terpconnect.umd.edu/~cjarzyns/CHEM-CHPH-PHYS_703_Spr_20/onlineLectures/Detailed%20Balance.pdf"
      locator: "Complete 11-page lecture PDF; finite rate matrices, stationary laws, and detailed balance."
verification:
  sources_checked:
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    by: "Completed delegated workflow source/scope reviewers and adjudicators; owner accepted existing evidence"
---

## Postulate

For the protocol in [[def-td-driven-finite-path-model]], adopt, at each stage $k=1,\ldots,m$, the stationarity condition $\sum_{i\in\Omega}\pi_k(i)K_k(i,j)=\pi_k(j)$ for every $j\in\Omega$. This says that if the bath transition begins with law $\pi_k$ at fixed energy $E_k$, it ends with the same law. It is a physical modeling assumption for this protocol family, not a consequence of the transition-kernel definition and not an assertion that the kernel mixes every initial law to $\pi_k$.
