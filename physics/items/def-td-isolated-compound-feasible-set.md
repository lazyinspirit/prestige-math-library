---
id: def-td-isolated-compound-feasible-set
kind: definition
title: Isolated compound and feasible equilibrium set
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: Feasible endpoint macrostates for a declared isolated compound of nonrelativistic macroscopic thermodynamic systems; only explicitly permitted exchanges and retained constraints are included.
deps: [def-cartesian-product, def-natural-numbers, def-finite-sum, def-td-equilibrium-state-domain, def-td-system-and-permitted-exchanges, def-td-thermal-contact-constraints, post-td-bulk-additivity, post-td-concave-fundamental-entropy]
dependency_roles:
  def-cartesian-product: mathematical-premise
  def-natural-numbers: mathematical-premise
  def-finite-sum: mathematical-premise
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-system-and-permitted-exchanges: formulation-prerequisite
  def-td-thermal-contact-constraints: formulation-prerequisite
  post-td-bulk-additivity: physical-assumption
  post-td-concave-fundamental-entropy: physical-assumption
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: David Tong, Statistical Physics, Chapter 4 of the complete author-hosted lecture notes, §§4.1 and 4.3.3
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§2.2, 2.6 and 2.9
      url: https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§II.F and IV.A
      url: https://arxiv.org/pdf/cond-mat/9708200v2
dependency_level: 5
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

Fix a finite list of named subsystems $s_1,\ldots,s_m$, where $m\in\mathbb N$ and $m\ge1$ ([[def-natural-numbers]]), each having its own equilibrium state domain $D_{c_i}$ as defined in [[def-td-equilibrium-state-domain]]. Their separated endpoint state space is the Cartesian product ([[def-cartesian-product]])

$$\mathcal D:=D_{c_1}\times\cdots\times D_{c_m}.$$

If the boundary also includes named auxiliaries or work devices $d_1,\ldots,d_k$ not already among the $s_i$, where $k\in\mathbb N$, supply endpoint state sets $Y_j$ and energy maps $E_j:Y_j\to\mathbb R$ with numerical values interpreted in joules. Supply also every coordinate map needed for their matter, volume, retained constraints and separately tracked mechanical or external-field energy. The complete endpoint space is

$$\mathcal D_{\mathrm{all}}:=\mathcal D\times Y_1\times\cdots\times Y_k.$$

For $k=0$ use $\mathcal D_{\mathrm{all}}=\mathcal D$. Write an endpoint as $(\mathbf x,\mathbf y)$ and obtain constituent states by coordinate projection. In the separated additive energy model, declare $E_{\mathrm{tot}}(\mathbf x,\mathbf y)=\sum_{i=1}^{m}U_{c_i}(x_i)+\sum_{j=1}^{k}E_j(y_j)\,\mathrm J$, with finite sums as in [[def-finite-sum]] and the empty auxiliary sum zero. Every tracked endpoint energy contribution must be included in these maps or in an additional explicitly supplied contribution; an interacting model must supply its total-energy map on $\mathcal D_{\mathrm{all}}$. For each entropy-bearing auxiliary supply $S_j^{\mathrm{aux}}:Y_j\to\mathbb R$ with values in $\mathrm{J\,K^{-1}}$. If the complete separated split has an adopted additive entropy model, its total includes those maps as well as the $S_{c_i}$; omitting an auxiliary requires an explicitly constant entropy contribution or a supplied reduced total-entropy function.

An **isolated compound** consists of all these constituents inside a declared outer boundary, with no matter or energy transfer across that boundary during the admitted process, in the sense of [[def-td-system-and-permitted-exchanges]]. Internal transfers may change auxiliary energy and entropy. On pairs admitted to the simple aggregate composition map of [[post-td-bulk-additivity]], totals and entropy satisfy that postulate and [[post-td-concave-fundamental-entropy]]. A retained partition endpoint in $\mathcal D_{\mathrm{all}}$ is not automatically such an admitted aggregate state: summing its coordinates can discard partition information. For endpoints outside that composition's admitted set, total-energy and total-entropy maps must be supplied separately; no aggregate entropy identity is inferred.

For specified totals and retained barriers, an **equilibrium feasible set** is the model-declared subset $\mathcal F\subseteq\mathcal D_{\mathrm{all}}$ of complete endpoint tuples satisfying those totals and exactly the exchange permissions in the declared protocol. Its thermodynamic projection is $\Pi(\mathcal F):=\{\mathbf x\in\mathcal D:\exists\mathbf y\text{ with }(\mathbf x,\mathbf y)\in\mathcal F\}$; that projection alone does not record variable auxiliary states, energy or entropy. When $k=0$ the original convention $\mathcal F\subseteq\mathcal D$ applies. Totals use all supplied endpoint maps and the dimensioned coordinate maps $U_c,V_c,n_{c,j}$ of [[def-td-equilibrium-state-domain]], rather than treating numerical coordinates as quantities with units. For two constituents without auxiliaries, thermal contact through [[def-td-thermal-contact-constraints]] at fixed volumes and mole amounts gives the model-declared allowed energy partitions with prescribed total energy and any further retained constraints. Volume or species exchange changes $\mathcal F$ only when explicitly permitted; retained walls fix the corresponding coordinates.

The set $\mathcal F$ may be empty, noncompact, or otherwise fail to contain an entropy-maximizing state. This definition imposes no existence, compactness, convexity, uniqueness, or attainment assumption.
