---
id: def-qsmx-quasifree-finite-covariance
kind: definition
title: Finite CAR quasifree states and covariance
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps:
  - lem-qsm-fock-occupation-basis-and-car-relations
  - lem-qsm-matrix-state-calculus
justified_by:
  - lem-qsmx-finite-car-quasifree-gibbs-construction
dependency_roles:
  lem-qsm-fock-occupation-basis-and-car-relations: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Huzihiro Araki, On Quasifree States of CAR and Bogoliubov Automorphisms, §§2–3"
      url: "https://ems.press/content/serial-article-files/41673"
    - title: "Jacopo Surace and Luca Tagliacozzo, Fermionic Gaussian States: An Introduction to Numerical Approaches, §§3.1–3.7"
      url: "https://arxiv.org/pdf/2111.08343"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Let $r\geq1$, let $H_1=\mathbb C^r$ with ordered orthonormal basis
$e_1,\ldots,e_r$, and let
$\mathcal F_-(H_1)=\bigoplus_{k=0}^{r}\bigwedge^k H_1$ be its finite-mode
fermionic Fock space. Let $\mathcal A_r$ be the unital *-algebra generated
by its annihilation and creation operators; it is finite-dimensional. Let
$c_j,c_j^*$ be those operators in this basis, satisfying
$$c_ic_j+c_jc_i=0,\qquad c_ic_j^*+c_j^*c_i=\delta_{ij}I,\qquad c_i^*c_j^*+c_j^*c_i^*=0.$$
A state is a complex-linear functional $\omega$ on $\mathcal A_r$ such that
$\omega(I)=1$ and $\omega(X^*X)\geq0$ for every $X\in\mathcal A_r$. Define
the gauge automorphism $\gamma_\theta$ by
$\gamma_\theta(c_j)=e^{-i\theta}c_j$ and
$\gamma_\theta(c_j^*)=e^{i\theta}c_j^*$ for $\theta\in\mathbb R$; the CAR
relations are preserved, so these assignments extend to a one-parameter
family of algebra automorphisms. A state is gauge invariant when
$\omega(\gamma_\theta(X))=\omega(X)$ for every $X$ and every $\theta$.

For a gauge-invariant state, define its one-particle covariance matrix
$C\in M_r(\mathbb C)$ by $C_{ji}:=\omega(c_i^*c_j)$. A finite
gauge-invariant state is quasifree when $C=C^*$, $0\leq C\leq I$, and its
normally ordered moments obey the following rule: for $p\neq q$,
$$\omega(c_{i_1}^*\cdots c_{i_p}^*c_{j_q}\cdots c_{j_1})=0,$$
and for $p=q$,
$$\omega(c_{i_1}^*\cdots c_{i_p}^*c_{j_p}\cdots c_{j_1})=\det\!\left[\omega(c_{i_a}^*c_{j_b})\right]_{a,b=1}^{p}=\det\!\left[C_{j_bi_a}\right]_{a,b=1}^{p}.$$
The empty moment is $\omega(I)=1$. The inequalities $0\leq C\leq I$ mean
$\langle Cv,v\rangle\geq0$ and
$\langle(I-C)v,v\rangle\geq0$ for all $v\in H_1$. Moments of words not
in normal order are obtained by reordering with the displayed CAR relations.

For a Hermitian one-particle matrix $h=h^*$, a real chemical potential $\mu$,
and $\beta>0$, define
$$d\Gamma(h-\mu I):=\sum_{i,j=1}^{r}c_i^*(h-\mu I)_{ij}c_j,\qquad Z:=\operatorname{Tr}\!\left(e^{-\beta d\Gamma(h-\mu I)}\right),\qquad \rho:=Z^{-1}e^{-\beta d\Gamma(h-\mu I)}.$$
The finite grand Gibbs state has covariance
$$C=(I+e^{\beta(h-\mu I)})^{-1}.$$
Here $h$ and $\mu$ are in joules, $\beta$ is in inverse joules, and $C$ is
dimensionless. The existence and uniqueness of the state for every
Hermitian contraction $C$, and the displayed finite Gibbs covariance formula,
are established by an earlier finite-dimensional result.

## Definition references

[[lem-qsm-fock-occupation-basis-and-car-relations]]

[[lem-qsm-matrix-state-calculus]]

[[lem-qsmx-finite-car-quasifree-gibbs-construction]]

## Remarks

The formula defines finite-mode quasifree states only. It does not assert
Wick factorization for interacting states or an infinite-mode density
operator.
