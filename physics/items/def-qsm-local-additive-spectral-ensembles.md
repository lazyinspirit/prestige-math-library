---
id: def-qsm-local-additive-spectral-ensembles
kind: definition
title: Additive spectral Hamiltonian and normalized ensembles
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-qsm-local-finite-tensor-state
  - def-real-exponential-function-and-e
  - def-natural-logarithm
dependency_roles:
  def-qsm-local-finite-tensor-state: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  def-natural-logarithm: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: David Tong, Statistical Physics, §§1.2–1.3
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.2–4.4
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Fix $q\ge1$ and real level parameters $e_1,\ldots,e_q$. Use the real
exponential of [[def-real-exponential-function-and-e]] and natural logarithm
of [[def-natural-logarithm]]. For $N\ge1$, define
the one-site diagonal matrix $h|j\rangle=e_j|j\rangle$ and, for
$a=1,\ldots,N$,
$$h^{(a)}=I^{\otimes(a-1)}\otimes h\otimes I^{\otimes(N-a)},\qquad H_N=\sum_{a=1}^N h^{(a)}.$$
Thus the product basis vector $|j_1,\ldots,j_N\rangle$ has eigenvalue
$E(j_1,\ldots,j_N)=\sum_{a=1}^N e_{j_a}$; repeated level values remain
distinct basis labels and therefore count as degeneracy.

For finite $\beta\in\mathbb R$, put
$$Z_1=\sum_{j=1}^q e^{-\beta e_j},\qquad p_j=\frac{e^{-\beta e_j}}{Z_1},\qquad E=\sum_{j=1}^q p_je_j.$$
All terms in $Z_1$ are positive, so $Z_1>0$. Define the one-site canonical
density $\gamma=\operatorname{diag}(p_1,\ldots,p_q)$. For $N$ sites put
$$Z_N=\sum_{(j_1,\ldots,j_N)\in\{1,\ldots,q\}^N} e^{-\beta\sum_{a=1}^N e_{j_a}},\qquad \gamma_N=\operatorname{diag}\left( \frac{e^{-\beta\sum_{a=1}^N e_{j_a}}}{Z_N}\right)_ {(j_1,\ldots,j_N)\in\{1,\ldots,q\}^N}.$$
The mathematical definition permits $\beta=0$ and negative $\beta$ as well
as positive $\beta$; a physical positive-temperature interpretation is a
separate assumption.

For a width $\delta_N\ge0$, define the spectral band label set and its
projection by
$$\Gamma_N=\left\{(j_1,\ldots,j_N): \left|\sum_{a=1}^N e_{j_a}-NE\right|\le\delta_N\right\},\qquad \Pi_N=\sum_{\mathbf j\in\Gamma_N}|\mathbf j\rangle\langle\mathbf j|.$$
Its rank is $\Omega_N=\operatorname{Tr}\Pi_N=|\Gamma_N|$, which counts
all basis vectors in the band, including degeneracy. When $\Omega_N>0$,
define the normalized band density $\sigma_N=\Pi_N/\Omega_N$. If
$\Omega_N=0$, this normalized density is undefined.
