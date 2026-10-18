---
id: def-canonical-basic-set-for-hecke-specialization
kind: definition
title: Canonical basic sets for split Hecke specializations
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [thm-equivalent-characterisations-of-a-dvr, def-composition-series-and-composition-factors-of-an-object, def-simple-object, thm-jordan-holder-theorem-in-an-abelian-category]
justified_by: []
aliases: []
landmark: false
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Meinolf Geck, Modular Representations of Hecke Algebras, EPFL lecture notes (2006)"
      url: "https://arxiv.org/pdf/math/0511548"
      locator: "Definition 4.13 and Remark 4.14, PDF pp. 22–23: canonical basic-set conditions and the identity-decomposition case."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $O$ be a Noetherian commutative local domain, with fraction field $K$, maximal ideal $\mathfrak m$ and residue field $k_0=O/\mathfrak m$. Allow a specified field extension $k/k_0$ as the specialization field. The nonfield DVR case is included: a nonfield discrete valuation ring is equivalently a local PID with nonzero maximal ideal ([[thm-equivalent-characterisations-of-a-dvr]]); the original residue-field specialization is $k=k_0$. Let $H_O$ be a finite free $O$-algebra, so it has finite rank as an $O$-module. Assume the generic algebra $H_K=K\otimes_O H_O$ is split semisimple, meaning a finite product of full matrix algebras over $K$; assume $H_k=k\otimes_O H_O$ is split, meaning each simple module remains simple after extending the field. A simple module is a nonzero module with no proper nonzero submodule. Write $\operatorname{Irr}(H_K)$ and $\operatorname{Irr}(H_k)$ for their isomorphism classes of simple modules. For each $E\in\operatorname{Irr}(H_K)$, choose an $H_O$-stable $O$-lattice $\Lambda_E\subset E$, meaning a finite free $O$-submodule spanning $E$ over $K$. Assume each simple $M\in\operatorname{Irr}(H_k)$ occurs in at least one reduction $k\otimes_{k_0}(\Lambda_E/\mathfrak m\Lambda_E)$, so every column below is nonzero. For such $M$, let
$$
d_{E,M}=[k\otimes_{k_0}(\Lambda_E/\mathfrak m\Lambda_E):M]
$$
be the multiplicity of $M$ among the composition factors of this finite-dimensional $H_k$-module. A composition series is a finite strict submodule chain with simple successive quotients; one exists by induction on module dimension, and Jordan–Hölder makes its multiplicities independent of the chosen series ([[def-composition-series-and-composition-factors-of-an-object]], [[thm-jordan-holder-theorem-in-an-abelian-category]]). The matrix $D=(d_{E,M})$ is the decomposition matrix for these chosen lattices. This definition makes no choice-independence assertion for arbitrary local orders. The finite-Weyl theorem below supplies free integral models and proves their multiplicities independent in its complete local setting; the rank-one worked specialization gives its lattices directly.

Fix an integer-valued statistic $\alpha_E$ on $\operatorname{Irr}(H_K)$. In Geck's finite-Weyl Hecke convention this is the Schur-element exponent denoted $\alpha_E$; its particular values do not enter the identity-matrix case. Put
$$
\check\alpha_M=\min\{\alpha_E:d_{E,M}>0\}.
$$
A subset $B\subseteq\operatorname{Irr}(H_K)$ is a **canonical basic set** (relative to $D$ and $\alpha$) if there is a bijection $M\mapsto E(M)$ from $\operatorname{Irr}(H_k)$ to $B$ satisfying
$$
d_{E(M),M}=1,\qquad \alpha_{E(M)}=\check\alpha_M,
$$
and, for every $E,M$,
$$
d_{E,M}>0\quad\Longrightarrow\quad \check\alpha_M<\alpha_E\ \text{or}\ E=E(M).
$$
This is a definition only; it makes no claim that such a subset exists in every specialization.
