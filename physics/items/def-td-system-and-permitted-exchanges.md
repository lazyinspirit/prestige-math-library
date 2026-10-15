---
id: def-td-system-and-permitted-exchanges
kind: definition
title: Thermodynamic systems and permitted exchanges
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: Boundary and exchange classifications for the nonrelativistic macroscopic thermodynamic framework; no energy-balance law is asserted here.
deps: []
dependency_roles: {}
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Ling, Moebs, and Sanny, University Physics Volume 2, §3.1 Thermodynamic Systems
      url: https://openstax.org/books/university-physics-volume-2/pages/3-1-thermodynamic-systems
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §II.A
      url: https://arxiv.org/pdf/cond-mat/9708200v2
dependency_level: 0
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

A thermodynamic system $s$ is a model-selected body or collection of bodies together with a specified outer boundary $\partial s$. The boundary separates the system from its environment for the purpose of classifying transfers; it need not be a material wall. A compound system has named subsystems inside one outer boundary. Transfers between its subsystems are internal to the compound; only transfers across $\partial s$ are external.

The model specifies which transfers across $\partial s$ are permitted. A system is closed when no matter crosses its outer boundary; energy may cross. A system is open when only the named matter species and other named transfer channels may cross its boundary. A system or compound is isolated when no matter or energy crosses its outer boundary. These terms classify the declared model boundary, not the accuracy with which a real apparatus approximates it.

This boundary classification alone asserts neither an energy-balance law nor equilibration.
