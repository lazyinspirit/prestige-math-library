---
id: post-td-universal-thermal-range
kind: postulate
title: Universal thermal-equilibrium range T5
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: The adopted universal range condition for thermal-equilibrium partners in the declared contact family; it is an operational assumption, not an empirical thermometer calibration.
deps: [def-td-thermal-join, post-td-thermal-join-axioms]
dependency_roles:
  def-td-thermal-join: formulation-prerequisite
  post-td-thermal-join-axioms: operational-prerequisite
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §IV.A, T5
      url: https://arxiv.org/pdf/cond-mat/9708200v2
    - title: "André Thess, The Lieb–Yngvason Machine: A didactical tool for the definition of entropy in classical thermodynamics, §§2–3"
      url: https://www.dlr.de/de/tt/downloads/dokumente/institut/institutsleitung/Entropie.pdf/@@download/file
verification:
  sources_checked:
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    by: "Completed delegated workflow source/scope reviewers and adjudicators; owner accepted existing evidence"
  precheck: n/a
dependency_level: 9
---

## Postulate

Adopt **T5 (universal thermal-equilibrium range)**: for every ordered pair of simple systems $i,j$, each state $x$ of $i$, and every work-coordinate point $v_j$ in the projection of the state domain of $j$, there is some state $y=(u_j,v_j)$ of $j$ with $x\sim_T y$, using [[def-td-thermal-join]].

This is a quantified existence assumption for a thermal-equilibrium partner at each permitted work coordinate. It does not define a numerical temperature, assert that all systems possess the same temperature range as a real apparatus, or supply a calibration map and its uncertainty.
