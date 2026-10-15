---
id: def-td-regular-hamiltonian-shell-preparation
kind: definition
title: Regular Hamiltonian shell preparation data
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps: [def-td-galilean-rest-frame, def-td-si-quantities, def-tdmath-regular-energy-shell, thm-tdmath-regular-energy-shell-measure]
dependency_roles:
  def-td-galilean-rest-frame: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  def-tdmath-regular-energy-shell: mathematical-premise
  thm-tdmath-regular-energy-shell-measure: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: Declared finite-dimensional classical Hamiltonian models in one canonical chart, restricted to nonempty compact regular energy shells in the stated energy band; critical levels and incomplete global flows are excluded.
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §1.2 (printed pp. 2–16)
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.2–4.3 (printed pp. 192–204)
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
verification:
  precheck: n/a
---

## Definition

Fix an integer $n\ge1$, a canonical chart with physical coordinates $q_i$ in metres and $p_i$ in $\mathrm{kg\,m\,s^{-1}}$, and the corresponding dimensionless coordinates $\hat q_i=q_i/(1\,\mathrm m)$ and $\hat p_i=p_i/(1\,\mathrm{kg\,m\,s^{-1}})$. Let $O\subseteq\mathbb R^{2n}$ be the open domain of the numerical vector $\hat x=(\hat q,\hat p)$, let $\hat H:O\to\mathbb R$ be the numerical energy map with physical energy $H=(1\,\mathrm J)\hat H$, and require $\hat H$ to have continuous partial derivatives through order two. A specified open interval $J_E\subseteq\mathbb R$ is a regular compact-shell band when $\hat H^{-1}(K)$ is compact in $O$ for every compact $K\subset J_E$ and $\nabla\hat H$ is nonzero at every point of $\hat H^{-1}(J_E)$.

For $\hat E\in J_E$, the energy shell is $\Sigma_{\hat E}:=\{x\in O:\hat H(x)=\hat E\}$. The graph-chart definition of the weighted shell integral is [[def-tdmath-regular-energy-shell]]: in a local graph chart $x_i=h(z,\hat E)$, its coarea measure is $d\mu_{\hat E}=dA_{\hat E}/|\nabla\hat H|$, with graph-area factor and gradient in the dimensionless Euclidean coordinates. Set $D(\hat E):=\int_{\Sigma_{\hat E}}d\mu_{\hat E}$ and admit the preparation only when $\Sigma_{\hat E}\ne\varnothing$ and $0<D(\hat E)<\infty$. Its normalized shell law is $\nu_{\hat E}(A):=D(\hat E)^{-1}\mu_{\hat E}(A\cap\Sigma_{\hat E})$. The current draft theorem [[thm-tdmath-regular-energy-shell-measure]] proves the coarea identity, chart independence and positive finite shell mass under its stated $C^2$, compact-regular-band hypotheses; its statement and proof are present, while its acceptance remains unresolved. Multiplying the unnormalized shell measure by a fixed positive phase-volume normalization does not change $\nu_{\hat E}$.
