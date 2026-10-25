---
id: def-yangian-periodic-fundamental-chain
kind: definition
title: "Finite periodic fundamental evaluation chain and transfer matrix"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-yangian-evaluation-module, thm-yangian-evaluation-module-well-defined]
justified_by: [lem-yangian-periodic-monodromy-satisfies-rtt]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "L. D. Faddeev, How Algebraic Bethe Ansatz Works for Integrable Model"
      url: "https://arxiv.org/pdf/hep-th/9605187"
      locator: "§§3–4: local Lax operators, ordered monodromy matrices, transfer traces, and the periodic XXX chain."
    - title: "F. Loebbert, Lectures on Yangian Symmetry"
      url: "https://arxiv.org/pdf/1606.02947"
      locator: "§§5.1–5.3: Lax operators, monodromy, and periodic transfer matrices."
    - title: "A. P. Isaev, Lectures on Quantum Groups and Yang-Baxter Equations"
      url: "https://arxiv.org/pdf/2206.08902"
      locator: "§5.1: finite periodic chains and transfer-matrix trace construction."
verification:
  precheck: n/a
---

## Definition

Fix $N\ge2$, a chain length $m\ge1$, and inhomogeneities $a_1,\ldots,a_m\in\mathbb C$. The quantum space is the finite-dimensional vector space $\mathcal H=(V_N^\vee)^{\otimes m}$, where each factor is the dual-natural evaluation module with its own parameter $a_j$ from [[def-yangian-evaluation-module]]; well-definedness is supplied by [[thm-yangian-evaluation-module-well-defined]]. Let $V_0=V_N$ be an auxiliary copy. Identify the ordered bases $e_i$ and $f^i$ when defining $P_{0j}(e_p\otimes f^q)=e_q\otimes f^p$, with all other quantum factors unchanged, and put

$$L_{0j}(u)= (u-a_j)I+iP_{0j}=R_{0j}(u-a_j),\qquad M_0(u)=L_{01}(u)L_{02}(u)\cdots L_{0m}(u).$$

Products are composition with the rightmost factor applied first. The un-twisted periodic transfer matrix is the polynomial $\tau(u)=\operatorname{tr}_0 M_0(u)\in\operatorname{End}_{\mathbb C}(\mathcal H)[u]$, where $\operatorname{tr}_0$ is the ordinary matrix trace over the auxiliary basis and does not act on $\mathcal H$. This definition asserts neither Bethe completeness nor Yangian invariance of a periodic Hamiltonian.

