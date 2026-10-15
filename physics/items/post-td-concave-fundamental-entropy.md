---
id: post-td-concave-fundamental-entropy
kind: postulate
title: Concave macroscopic fundamental entropy
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: The adopted entropy representation for the declared nonrelativistic, macroscopic, additive bulk thermodynamic systems; smooth derivative conditions apply only on the named single-phase charts.
deps: [def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-interval, def-td-equilibrium-state-domain, def-td-si-quantities, def-td-system-and-permitted-exchanges, post-td-bulk-additivity]
dependency_roles:
  def-ck-euclidean-maps-and-diffeomorphisms: formulation-prerequisite
  def-directional-and-partial-derivatives: formulation-prerequisite
  def-interval: formulation-prerequisite
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-system-and-permitted-exchanges: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  post-td-bulk-additivity: formulation-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: David Tong, Statistical Physics, Chapter 4 of the complete author-hosted lecture notes, §§4.3.1–4.3.4
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§2.5–2.6 and §2.9
      url: https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§II.F and IV.A
      url: https://arxiv.org/pdf/cond-mat/9708200v2
dependency_level: 4
verification:
  sources_checked:
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    by: "Completed delegated workflow source/scope reviewers and adjudicators; owner accepted existing evidence"
---

## Postulate

For each admitted material constitution $c$, the model adopts a finite scalar function

$$S_c:D_c\longrightarrow\mathbb R\ \text{with values measured in }\mathrm{J\,K^{-1}},$$

on the equilibrium state domain $D_c$ of [[def-td-equilibrium-state-domain]]. This framework treats $S_c$ as primitive constitutive data: its existence and form are assumed, not derived from the word entropy, statistical mechanics, or experimental evidence.

On every specified convex region $C\subseteq D_c$ in the dimensionless coordinates of [[def-td-equilibrium-state-domain]], $S_c$ is continuous and concave, meaning that for all $x,y\in C$ and every $\alpha\in[0,1]$ ([[def-interval]]),

$$S_c((1-\alpha)x+\alpha y)\ge (1-\alpha)S_c(x)+\alpha S_c(y).$$

The domain assumptions are local to the material and region named; no unlisted coordinate tuple is presumed physically realizable. The input of $S_c$ is the represented state $\pi_c(e)$; when the function is written using physical coordinates $(U,V,n_1,\ldots,n_r)$, those coordinates mean the SI values whose dimensionless numerical tuple is $\pi_c(e)$. For independent separated macroscopic systems $A,B$ admitted by [[post-td-bulk-additivity]], entropy is additive under that postulate's composition map $\kappa_{AB}$:

$$S_{A\sqcup B}(\kappa_{AB}(x_A,x_B))=S_A(x_A)+S_B(x_B).$$

On each separately designated open, single-phase chart in the physical coordinates $(U,V,n_1,\ldots,n_r)$, assume the numerical representative of $S_c$ is $C^2$ in the sense of [[def-ck-euclidean-maps-and-diffeomorphisms]]: its first and second coordinate partial derivatives exist and are continuous. The partial derivative $S_U$ at fixed $V,n_1,\ldots,n_r$ is the ordinary partial derivative in the $U$ coordinate, as in [[def-directional-and-partial-derivatives]], and is assumed finite and strictly positive. The numerical chart input uses $\hat U=U/(1\,\mathrm J)$; consequently $S_U=(1\,\mathrm J)^{-1}\partial S_c/\partial\hat U$ and has units $\mathrm{K^{-1}}$. The other physical coordinates are similarly represented using the fixed SI units of [[def-td-si-quantities]]. No differentiability, strict concavity, or positive $S_U$ is asserted outside those charts. This item does not itself define a thermometer calibration or claim a temperature law.

For the tagged bulk family with scaling maps $\delta_\lambda$ and domains $B_{c,\lambda}$ from [[post-td-bulk-additivity]], also adopt, for every admitted $\lambda>0$ and $x\in B_{c,\lambda}$,

$$S_{c^{(\lambda)}}(\delta_\lambda x)=\lambda S_c(x).$$

This is a bulk homogeneity assumption for tagged scaled systems, not exact finite-size scaling for every body. Lieb–Yngvason develop a different accessibility-based route in which entropy is represented from additional operational hypotheses; this framework does not claim that their derivation proves the present primitive entropy postulate.
