---
id: def-it-quantum-channel-private-information
kind: definition
title: Private information of a finite channel ensemble
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-it-quantum-channel-complement-and-coherent-information
  - def-it-classical-quantum-state-and-holevo-information
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Igor Devetak, The private classical capacity and quantum capacity of a quantum channel, §3"
      url: "https://arxiv.org/pdf/quant-ph/0304127"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, Chapter 23"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Definition

Let $\mathcal N:A\to B$ be a finite-dimensional quantum channel, fix its complementary channel $\mathcal N^c:A\to E$, and let $\mathcal E=\{p_x,\rho_x\}_{x\in\mathcal X}$ be a finite ensemble of density operators on $A$. Set $\bar\rho:=\sum_xp_x\rho_x$. Its **private information** is

$$I_p(\mathcal E,\mathcal N):=\chi(\{p_x,\mathcal N(\rho_x)\})-\chi(\{p_x,\mathcal N^c(\rho_x)\}),$$

where $\chi$ is the Holevo information from [[def-it-classical-quantum-state-and-holevo-information]]; zero-probability terms are omitted. Equivalently, it is the mutual information between the classical label and the receiver output minus that between the label and the complementary output. 
