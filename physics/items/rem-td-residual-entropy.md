---
id: rem-td-residual-entropy
kind: remark
title: Residual entropy and the scope of the third-law postulates
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: Interpretive distinction between a macroscopic entropy-difference postulate and a finite microscopic canonical model; no identification of their entropies or universal zero-temperature value is asserted.
deps:
  - def-td-si-quantities
  - def-natural-logarithm
  - post-td-nernst-scoped
forward_refs:
  - ex-td-finite-canonical-ground-state-entropy
dependency_roles:
  def-td-si-quantities: formulation-prerequisite
  def-natural-logarithm: mathematical-premise
  post-td-nernst-scoped: formulation-prerequisite
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: David Tong, Statistical Physics, complete Chapter 4 lecture-note PDF, §4.5
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapter 2, §2.6.2
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf
dependency_level: 7
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

## Remark

Residual entropy here means a finite entropy limit at low temperature under a model's specified entropy convention. In a finite canonical model, let a finite set of microstates have energies $E_i$ in joules, assign $p_i(T)\propto\exp[-E_i/(k_{\mathrm B}T)]$ for $T>0$, and use the Gibbs entropy $-k_{\mathrm B}\sum_i p_i(T)\log p_i(T)$. If the ground energy has finite degeneracy $g$ and there is a positive gap to all excited states, this model-specific entropy tends to $k_{\mathrm B}\log g$; [[ex-td-finite-canonical-ground-state-entropy]] supplies the full finite-state calculation. Here $g$ is the number of ground states and $\log$ is the natural logarithm of [[def-natural-logarithm]].

This formula belongs to that specified microscopic preparation and entropy convention. It does not identify every Gibbs entropy with the macroscopic $S_c$, and it does not establish a universal value $S_c(0)=0$. The uniform Nernst postulate [[post-td-nernst-scoped]] constrains differences across its declared family, not the common entropy offset: adding one fixed constant to every $S_K(t,a)$ leaves every displayed difference unchanged. Thus that postulate alone neither selects an absolute zero nor forces a unique ground state. The Nernst heat theorem, zero-entropy convention for a unique ground state, and operational unattainability remain distinct model statements.
