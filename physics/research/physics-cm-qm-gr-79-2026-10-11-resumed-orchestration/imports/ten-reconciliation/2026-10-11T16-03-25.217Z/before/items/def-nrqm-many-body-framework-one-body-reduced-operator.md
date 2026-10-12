---
id: def-nrqm-many-body-framework-one-body-reduced-operator
aliases: [nrqm-many-body-framework-one-body-reduced-operator]
kind: definition
domain: physics
title: "The declared one-body reduced operator and the one-body readout of a sector preparation"
status: draft
origin: pipeline
dependency_level: 10
deps: [def-nrqm-identical-particles-framework-species-sectors-and-preparations, def-nrqm-identical-particles-framework-orbital-occupation-model, def-nrqm-observables-framework-observable-and-outcome-law, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-many-body-one-body-reduction-trace-law, def-hilbert-space, def-countable-choice, def-nrqm-framework-quantities-and-units, def-nrqm-state-geometry-framework-state-space]
dependency_roles:
  def-nrqm-identical-particles-framework-species-sectors-and-preparations: formulation-prerequisite
  def-nrqm-identical-particles-framework-orbital-occupation-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-many-body-one-body-reduction-trace-law: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The declared one-body reduction of a sector preparation in the framework's finite-mode realization: the reduced preparation on the one-particle mode space, the sector operator that sums a declared bounded one-particle quantity over the labels, and the reading of that sum as an assigned sharp observable. The reduction is a mathematical partial trace of a sector state; it asserts no physical single-particle state, no separability of the sector preparation, no measurement of an individual particle and no fact about a laboratory sample."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 6.1-6.3 printed pages 105-126 (PDF pages 113-134): composite systems, local operators A tensor I, the reduced density operator obtained by tracing out one factor, and its use for local predictions"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Section 1.4.2 pp. 8-10: single-particle operators (46)-(48) as sums of slot operators in the occupation-number representation"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Adopted readings.** Adopt the state and composition postulate
[[post-nrqm-framework-state-and-composition]] (P1) and the observable and
probability postulate [[post-nrqm-framework-observable-and-probability]] (P2)
in the state reading of
[[def-nrqm-state-geometry-framework-state-space]] and the observable reading
of [[def-nrqm-observables-framework-observable-and-outcome-law]]. Work in the
**finite-mode realization** of a declared species sector of
[[def-nrqm-identical-particles-framework-species-sectors-and-preparations]]:
the one-particle space is a finite-dimensional complex Hilbert space $K$ of
dimension $d\ge1$ with its declared orthonormal modes $(f_1,\dots,f_d)$, and
the $N$-particle sector space is
$\mathfrak H_N^\sigma=\operatorname{ran}P_\sigma^{(N)}\subseteq K^{\otimes N}$
with the declared sector preparations of
[[def-nrqm-identical-particles-framework-orbital-occupation-model]]. Assume
the Axiom of Countable Choice ([[def-countable-choice]]).

**(b) The one-body reduced operator.** Let $\rho$ be a declared sector
preparation, that is, a density operator on $\mathfrak H_N^\sigma$
([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a)).
The **one-body reduced preparation** of $\rho$ is the density operator
$\gamma_\rho$ on $K$ of clause (e) of
[[lem-nrqm-many-body-one-body-reduction-trace-law]] (with $H:=K$, $n:=N$ and
the same sector projections). Explicitly, for the sector inclusion $j$ put $\widetilde\rho=j\rho j^*$ on $K^{\otimes N}$, and for the regrouping unitary $J_N:K^{\otimes N}\to K\widehat\otimes K^{\otimes(N-1)}$ put $\gamma_\rho=\operatorname{Tr}_{K^{\otimes(N-1)}}(J_N\widetilde\rho J_N^{-1})$. Here $K^{\otimes0}=\mathbb C$, so $N=1$ gives $\gamma_\rho=\rho$. A zero sector has no preparation and makes this clause vacuous. By that lemma $\gamma_\rho$ is a density operator
on $K$ independent of which factor is traced, and for every
$O\in\mathcal B(K)$ the pairings are related by
$$\operatorname{tr}\bigl(\widetilde\rho\,\Sigma(O)\bigr)=N\operatorname{tr}\bigl(\gamma_\rho\,O\bigr),$$
where $\widetilde\rho$ is the zero extension of $\rho$ and $\Sigma(O)$ is the
sum over the $N$ labelled slots of the slot operator $O^{(i)}$.

**(c) The one-body readout.** For a declared **bounded self-adjoint**
$O\in\mathcal B(K)$ with a declared unit $u_O$ in the sense of
[[def-nrqm-framework-quantities-and-units]], the model reads the sector
operator
$$A_O:=\Sigma(O)|_{\mathfrak H_N^\sigma}=P_\sigma^{(N)}\Sigma(O)P_\sigma^{(N)}|_{\mathfrak H_N^\sigma}$$
as an **assigned sharp observable** $(A_O,u_O)$ in the sense of
[[def-nrqm-observables-framework-observable-and-outcome-law]] clause (a): it
is bounded and self-adjoint on the nonzero sector space and its outcome law
in a declared sector preparation $\rho$ is the law
$\mu^{A_O}_\rho(B)=\operatorname{tr}(\rho E_{A_O}(B))$ of clause (b) of that
definition. The **one-body readout** of $O$ in $\rho$ is the mean of that law
when it exists.

**(d) Scope.** The reduced preparation $\gamma_\rho$ is a mathematical
partial trace of the sector state; it is not asserted to be the state of any
individual particle, and it does not determine the sector preparation $\rho$:
many sector preparations have the same one-body reduction. The definition
asserts no separability or factorization of $\rho$, no result for the spatial
(infinite-dimensional) realization, whose reduction would require the
separable partial trace, and no measurement of individual particle labels,
which are mathematical factor labels by P6 clause (i). Whether a declared
laboratory preparation realizes a sector preparation $\rho$ and a quantity
realizes the pair $(A_O,u_O)$ are tested identifications with uncertainty
under P7, not consequences of this definition.

## Remarks

- **Normalization.** The one-body reduced preparation is normalized as a
  probability state, $\operatorname{tr}\gamma_\rho=1$, while the mean of the
  sum $A_O$ carries the factor $N$; the sum $\Sigma(O)$ is a many-body
  quantity, not a single-particle quantity, and its mean is $N$ times the
  single-particle pairing with $\gamma_\rho$.
- **Choice of retained factor.** Lemma clause (e) shows that reducing over
  any $N-1$ of the labelled factors gives the same operator on $K$; this is
  the precise sense in which the reduction is label independent inside the
  model.
