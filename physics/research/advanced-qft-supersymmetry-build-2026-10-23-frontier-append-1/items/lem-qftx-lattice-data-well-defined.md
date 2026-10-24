---
id: lem-qftx-lattice-data-well-defined
kind: lemma
title: Finite lattice gauge data define an invariant probability
status: draft
origin: session
dependency_level: 2
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + AC_omega, inherited through the supplied non-Abelian gauge datum; the finite-product argument adds no choice principle."
deps:
  - def-countable-choice
  - def-qftx-nonabelian-lattice-gauge-data
  - def-differential-of-a-smooth-map
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-nonabelian-lattice-gauge-data: mathematical-premise
  def-differential-of-a-smooth-map: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "H. B. Meyer, Lattice QCD: A Brief Introduction, in Lattice QCD for Nuclear Physics, Lecture Notes in Physics 889"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/73862/1/82.pdf.pdf"
      locator: "§1.2.4, printed pp. 13–14, for traced-loop gauge invariance, the plaquette action and lattice link integration."
    - title: "Robert Lohmayer, Eigenvalue Distributions of Wilson Loops"
      url: "https://epub.uni-regensburg.de/16031/1/EigenvalueDistributionsOfWilsonLoops.pdf"
      locator: "§4.1, printed pp. 59–61, for gauge-invariant two-dimensional finite-lattice integration and plaquette factorization; the finite probability and Gauss-sector proof is local."
verification:
  precheck: pending
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. For every finite oriented lattice two-complex with compact Lie group $G$, normalized bi-invariant link probability $\mu_G$, and continuous conjugation-invariant face actions $\Phi_p$, the vertex formulas $(h\cdot U)_e=h_{s(e)}U_eh_{t(e)}^{-1}$ define a smooth group action on $G^{\mathcal E^+}$. Each face holonomy transforms by conjugation at its base vertex. Consequently the product Haar measure and the Boltzmann weight $e^{-\sum_p\Phi_p(U_p)}$ are gauge invariant, and the partition function satisfies $0<Z_\Lambda<\infty$. Thus the normalized finite-lattice expectation is a well-defined gauge-invariant probability expectation. In $L^2$ of that probability, the subspace of classes invariant under each vertex gauge transformation is closed. The infinitesimal Gauss generators defined by differentiating this smooth action are well-defined as directional derivatives on smooth functions.

## Statement references

[[def-qftx-nonabelian-lattice-gauge-data|Finite oriented lattice variables, gauge action, Haar product, action, and Gauss generators]]

[Meyer, §1.2.4, printed pp. 13–14, on the invariant link measure and finite lattice expectation](https://ndl.ethernet.edu.et/bitstream/123456789/73862/1/82.pdf.pdf)

[Lohmayer, §4.1, printed pp. 59–60, on gauge invariance and factorization of the pure-gauge measure](https://epub.uni-regensburg.de/16031/1/EigenvalueDistributionsOfWilsonLoops.pdf)

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a finite oriented two-complex, a compact Lie group $G$, a normalized bi-invariant probability $\mu_G$, and continuous class functions $\Phi_p$.

[A1] $\mathrm{AC}_\omega$ is inherited through the supplied construction of $\mathfrak g=T_eG$; the definition does not use arbitrary choice. [[def-countable-choice]]

[F1] [[def-qftx-nonabelian-lattice-gauge-data]]: one variable $U_e\in G$ is assigned to each positively oriented edge, reverse edges carry $U_e^{-1}$, vertices act by $h_{s(e)}U_eh_{t(e)}^{-1}$, and face holonomies are ordered products around closed edge words.

[F2] [[def-qftx-nonabelian-lattice-gauge-data]]: $G$ is compact and $\mu_G$ is a normalized left- and right-invariant Borel probability; the face actions are continuous and conjugation invariant.

[F3] [[def-differential-of-a-smooth-map]]: the differential of a smooth map at a point sends tangent vectors at that point to tangent vectors at its image.

## Proof

**Proof technique:** direct.

1.1 For $h,k\in G^{\mathcal V}$, applying $k$ after $h$ sends an edge $e$ to $k_{s(e)}h_{s(e)}U_eh_{t(e)}^{-1}k_{t(e)}^{-1}=(kh)_{s(e)}U_e(kh)_{t(e)}^{-1}$; the identity tuple acts identically. Hence the formulas define a group action. Each coordinate is a composition of smooth multiplication and inversion maps, so the action map is smooth. By [F3], its differential sends the specified tangent vector at the identity of $G^{\mathcal V}$ to a tangent vector at $U$; applying $df_U$ therefore defines the stated directional derivative on every smooth $f$. The inherited axiom base is the stated $\mathrm{AC}_\omega$ [A1]. [given, A1, F1, F3, algebra]

2.1 Around a face word based at $v_0$, the intermediate factors $h_{v_i}^{-1}h_{v_i}$ cancel, leaving $U_p(h\cdot U)=h_{v_0}U_p(U)h_{v_0}^{-1}$. Thus each $\Phi_p(U_p)$ and the total action are unchanged. On each edge, $U_e\mapsto h_{s(e)}U_eh_{t(e)}^{-1}$ is a left and right translation, so bi-invariance preserves that edge's Haar measure and hence their finite product. [given, F1, F2, step 1.1, algebra]

3.1 For each face $p$ and each $g\in G$, continuity of $\Phi_p$ gives an open neighborhood on which $|\Phi_p|\leq |\Phi_p(g)|+1$. Compactness of $G$ gives a finite subcover, so each $\Phi_p$ is bounded; summing over the finite face set gives $|S_\Lambda(U)|\leq M$ for some finite $M$. Thus $e^{-M}\leq e^{-S_\Lambda(U)}\leq e^M$, and integration against the product probability gives $e^{-M}\leq Z_\Lambda\leq e^M$. Hence the normalized Boltzmann measure $d\mathbb P_\Lambda=Z_\Lambda^{-1}e^{-S_\Lambda}d\mu_G^{\mathcal E^+}$ exists and is invariant under the group action by step 2.1. [given, F2, step 2.1, algebra]

4.1 For each $h\in G^{\mathcal V}$, define $T_hf(U)=f(h^{-1}\cdot U)$ on $L^2(\mathbb P_\Lambda)$. The measure invariance in step 3.1 makes $T_h$ unitary. The invariant sector is exactly $\bigcap_{h\in G^{\mathcal V}}\ker(T_h-I)$; each kernel is closed because $T_h-I$ is a bounded operator, and an arbitrary intersection of closed sets is closed. [step 3.1, algebra] ∎
