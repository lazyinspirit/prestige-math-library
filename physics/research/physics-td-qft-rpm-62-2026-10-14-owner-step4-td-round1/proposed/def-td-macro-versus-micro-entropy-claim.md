---
id: def-td-macro-versus-micro-entropy-claim
kind: definition
domain: physics
library: physics
title: Macroscopic and microscopic entropy quantities
status: draft
origin: pipeline
dependency_level: 5
deps:
  - def-td-equilibrium-state-domain
  - post-td-concave-fundamental-entropy
  - def-td-si-quantities
  - def-td-finite-microstate-model
  - def-natural-logarithm
  - def-finite-sum
  - def-finite-cardinality
  - thm-induction-principle
  - def-function
  - def-subset-and-proper-subset
  - def-nrqm-many-body-framework-entropy-and-free-energy
dependency_roles:
  def-td-equilibrium-state-domain: formulation-prerequisite
  post-td-concave-fundamental-entropy: physical-assumption
  def-td-si-quantities: formulation-prerequisite
  def-td-finite-microstate-model: formulation-prerequisite
  def-natural-logarithm: mathematical-premise
  def-finite-sum: mathematical-premise
  def-finite-cardinality: mathematical-premise
  thm-induction-principle: mathematical-premise
  def-function: mathematical-premise
  def-subset-and-proper-subset: mathematical-premise
  def-nrqm-many-body-framework-entropy-and-free-energy: formulation-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: Definitions of the adopted macroscopic equilibrium entropy and selected finite-model microscopic entropy quantities; no identity between these quantities is asserted without a separately specified equilibrium bridge.
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, SM: Statistical Mechanics, current author-hosted merged notes (15 May 2026), Chapter 1 §1.2 (pp.5–6), Chapter 2 §2.2 (pp.6–8), equations (2.24a) and (2.29)"
      url: "https://essentialgraduatephysics.org/Files/SM%20merged.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §§6.3–6.4, printed pp. 122–131"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "I. Burmistrov and A. Lunkin, Lecture Notes on Statistical Mechanics (10 January 2023), §§1.1.1–1.1.3, printed pp. 12–14"
      url: "http://home.itp.ac.ru/~burmi/HSE/Lectures-StatPhys-temp.pdf"
---

## Definition

Fix a material constitution $c$ and its equilibrium state domain $D_c$ from [[def-td-equilibrium-state-domain]]. The adopted macroscopic entropy is the finite-valued state function $S_c:D_c\to\mathbb R$ of [[post-td-concave-fundamental-entropy]]: for every $x\in D_c$, $S_c(x)$ is a finite real value measured in $\mathrm{J\,K^{-1}}$ under [[def-td-si-quantities]]. Its argument is an equilibrium macrostate. The definition does not assign $S_c$ to an arbitrary nonequilibrium configuration or to a microscopic trajectory.

For a finite microstate model $(\Omega,\epsilon)$ of [[def-td-finite-microstate-model]], $\Omega$ is finite and nonempty and $\epsilon:\Omega\to\mathbb R$ assigns a finite numerical energy. The model's physical energy is $E(x)=\epsilon(x)\,\mathrm J$ for $x\in\Omega$, with its zero and any retained internal offsets fixed by the declared material model. By [[def-finite-cardinality]], $N:=|\Omega|$ is the unique natural number equinumerous with $\Omega$, and $N\ge1$. Choose an enumeration $\Omega=\{\omega_1,\ldots,\omega_N\}$. A chosen coarse-graining is a finite label set $\mathcal M$ and a function $\pi:\Omega\to\mathcal M$ ([[def-function]]). For $m\in\mathcal M$, let $M_m=\{x\in\Omega:\pi(x)=m\}\subseteq\Omega$ ([[def-subset-and-proper-subset]]). Each $M_m$ is finite: choose a bijection $b:N\to\Omega$ and set $J_m=b^{-1}(M_m)\subseteq N$. Induction on $n$ ([[thm-induction-principle]]) proves every subset $J\subseteq n$ finite. For $n=0$, $J=\varnothing$; for $n=\sigma(k)$, if $k\notin J$, then $J\subseteq k$; if $k\in J$, the set $J_0:=\{j\in J:j\ne k\}\subseteq k$ is finite by induction, say via a bijection $f:n_0\to J_0$, and extending $f$ by $f(n_0)=k$ gives a bijection $\sigma(n_0)\to J$. Thus $J_m$ is finite, and the restriction $b|_{J_m}:J_m\to M_m$ is a bijection. By [[def-finite-cardinality]], $N_m:=|M_m|$ is therefore defined. Only labels with $N_m\ge1$ are admitted here. The Boltzmann macrocell entropy of this specified coarse-graining is

$$S_{\mathrm B}(m):=k_{\mathrm B}\log N_m.$$

Under this enumeration, a probability vector $p=(p_1,\ldots,p_N)$ assigns probability $p_i$ to microstate $\omega_i$, where $p_i\ge0$ and $\sum_{i=1}^N p_i=1$. Define its Gibbs–Shannon entropy by

$$S_{\mathrm G}(p):=-k_{\mathrm B}\sum_{i=1}^N p_i\log p_i,$$

with the summand $p_i\log p_i$ defined to be $0$ when $p_i=0$. Both expressions have units $\mathrm{J\,K^{-1}}$, because their logarithms are dimensionless and $k_{\mathrm B}$ has those units. The finite sum and logarithm have the meanings of [[def-finite-sum]] and [[def-natural-logarithm]].

For a density operator $\rho$ in the declared finite-dimensional sector class of [[def-nrqm-many-body-framework-entropy-and-free-energy]], its von Neumann physical entropy is $S_{\mathrm{vN}}(\rho)=k_{\mathrm B}s(\rho)$, with $s(\rho)$ the dimensionless entropy defined there. That supplier defines no such quantity for its infinite-dimensional spatial sectors.

These are distinct definitions on different domains: $S_c$ acts on an equilibrium macrostate, $S_{\mathrm B}$ on a chosen macrocell, $S_{\mathrm G}$ on a specified probability vector, and $S_{\mathrm{vN}}$ on a finite-sector density operator. A numerical equality among them requires an additional, explicit identification of model, coarse-graining, preparation and applicable limit. This item supplies no such identification and adopts no canonical or microcanonical sampling rule.

## Remarks

The finite microstate model and its numerical-to-physical energy assignment are those of [[def-td-finite-microstate-model]]. That definition supplies neither a sampling rule nor an identification of microscopic entropy with $S_c$; any such bridge requires separate assumptions and results.
