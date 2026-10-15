---
id: def-tdmath-finite-site-shell-and-canonical-law
kind: definition
title: "Finite-site canonical law and narrow microcanonical shell"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: ["def-finite-sum","def-natural-logarithm","def-real-exponential-function-and-e"]
justified_by: []
dependency_roles: {"def-finite-sum":"mathematical-premise","def-natural-logarithm":"mathematical-premise","def-real-exponential-function-and-e":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture text"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S1
      locator: "Complete author-hosted HTML chapter read; §§1.2–1.4, finite canonical and microcanonical ensemble conventions."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics"
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
      locator: "Complete 635-page lecture notes retrieved and read; §§4.2–4.6, pp.192–217, ensembles, microcanonical phase space, quantum density matrices, and traces."
---

## Definition

Fix a finite alphabet $A=\{1,\ldots,q\}$, $q\ge1$, and real single-site energies $e_1,\ldots,e_q$ in a fixed energy unit. At inverse parameter $\beta\in\mathbb R$, define
$$Z_1(\beta):=\sum_{j=1}^q e^{-\beta e_j},\qquad p_j(\beta):=e^{-\beta e_j}/Z_1(\beta),\qquad E(\beta):=\sum_{j=1}^q p_j(\beta)e_j.$$
For $N\ge1$, a configuration $i=(i_1,\ldots,i_N)\in A^N$ has additive energy $H_N(i):=\sum_{r=1}^Ne_{i_r}$. Given a width $\delta_N\ge0$, the **shell** is
$$\Gamma_N(\beta,\delta_N):=\{i\in A^N:|H_N(i)-NE(\beta)|\le\delta_N\}.$$
When this finite set is nonempty, its microcanonical law means the uniform probability on $\Gamma_N$, and its dimensionless entropy is $\log|\Gamma_N|$. A type is a vector $t=(n_1/N,\ldots,n_q/N)$, where the nonnegative integer counts sum to $N$; its multiplicity is $N!/\prod_j n_j!$.

The convention fixes both the shell center and the law within the shell. It makes no physical claim that an apparatus has resolution $\delta_N$.
