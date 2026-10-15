---
id: def-td-finite-memory-reset-model
kind: definition
title: "Finite memory and retained-register reset model"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 1
deps: [lem-tdmath-conditional-memory-entropy]
dependency_roles:
  lem-tdmath-conditional-memory-entropy: formulation-prerequisite
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "A finite-state memory and retained register with a specified probabilistic reset map; the definition does not assert a particular apparatus, reset dynamics, or measured work."
sources:
  references:
    - title: "U. Seifert, Stochastic thermodynamics, fluctuation theorems, and molecular machines"
      url: "https://arxiv.org/html/1205.4176v1"
      locator: "Section 7.3 on measurement, information, and feedback."
    - title: "C. Jarzynski, Introduction to Nonequilibrium Statistical Physics, lecture notes, Maxwell's Demon"
      url: "https://terpconnect.umd.edu/~cjarzyns/CHEM-CHPH-PHYS_703_Spr_20/onlineLectures/Maxwells%20Demon.pdf"
      locator: "Complete 16-page lecture PDF; memory registers, erasure, and the scope of Landauer's principle."
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

## Definition

Let $M$ be a finite memory-state set and $R$ a finite retained-register set. A joint preparation is a probability law $p(m,r)\ge0$ with $\sum_{m,r}p(m,r)=1$. Write $a_r=\sum_m p(m,r)$ and, for $a_r>0$, $q(m|r)=p(m,r)/a_r$. Use the finite Shannon entropy in nats and the conditional entropy $H(M|R)$ exactly as defined by [[lem-tdmath-conditional-memory-entropy]]. For a fixed target memory state $m_0$, a reset is the endpoint map $p'(m,r)=\mathbf 1_{\{m=m_0\}}a_r$: it places the memory at $m_0$ while leaving the register marginal unchanged. The definition alone assigns no physical entropy, work cost, heat transfer, or implementation.
