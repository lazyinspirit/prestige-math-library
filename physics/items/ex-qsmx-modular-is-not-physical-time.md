---
id: ex-qsmx-modular-is-not-physical-time
kind: example
title: Modular frequency requires a physical time identification
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 6
physical_scope: null
deps:
  - thm-qsmx-finite-modular-density
  - def-axiom-of-choice
dependency_roles:
  thm-qsmx-finite-modular-density: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: Edward Witten, Notes on Some Entanglement Properties of Quantum Field Theory
      url: https://arxiv.org/pdf/1803.04993
      locator: §4.1, equations (4.11)–(4.14), printed pp. 33–35 (PDF pp. 34–36)
    - title: F. Hiai, Concise lectures on selected topics of von Neumann algebras
      url: https://arxiv.org/pdf/2004.02383
      locator: §2.1, Example 2.4 and §2.2, Theorem 2.14, printed pp. 11 and 18
---
## Example

Assume the Axiom of Choice. Let $0<p<1$ and $\rho=\operatorname{diag}(p,1-p)$ on $\mathbb C^2$. Its modular automorphism group acts on the off-diagonal matrix unit by
$$\sigma_t(E_{12})=e^{it\log(p/(1-p))}E_{12}.$$
The modular frequency $\log(p/(1-p))$ is dimensionless and does not specify a physical energy or clock. If one separately supplies a Hamiltonian $H=\operatorname{diag}(E_1,E_2)$ with energies in joules, inverse energy $\beta>0$ in joules$^{-1}$, and action $\hbar>0$ in joule-seconds with $\rho=e^{-\beta H}/Z$, then $p/(1-p)=e^{-\beta(E_1-E_2)}$ and the physical angular frequency $(E_1-E_2)/\hbar$ has units seconds$^{-1}$. For $p=\tfrac12$ the modular frequency is zero; for $p\ne\tfrac12$ it is nonzero but still has no physical time unit before this identification.

## Example references

[[thm-qsmx-finite-modular-density]]

## Facts & Assumptions

**Given:** The Axiom of Choice and a faithful two-level density matrix $\rho=\operatorname{diag}(p,1-p)$ with $0<p<1$.

[A1] Assume the Axiom of Choice ([[def-axiom-of-choice]]).

[F1] For a finite-dimensional faithful density matrix, $\sigma_t(A)=\rho^{it}A\rho^{-it}$; if $\rho=e^{-\beta H}/Z$, physical time is identified by $\alpha_s=\sigma_{-s/(\beta\hbar)}$ ([[thm-qsmx-finite-modular-density]]).

## Verification

**Given:** [F1], $E_{12}=|1\rangle\langle2|$, and the displayed $\rho$.

1.1 Since $\rho^{it}=\operatorname{diag}(p^{it},(1-p)^{it})$, conjugating $E_{12}$ multiplies it by $p^{it}(1-p)^{-it}=e^{it\log(p/(1-p))}$. Thus the modular parameter has coefficient $\log(p/(1-p))$, which is dimensionless. [A1, F1, given, algebra]

2.1 If $\rho=e^{-\beta H}/Z$ with $H=\operatorname{diag}(E_1,E_2)$, then $p/(1-p)=e^{-\beta(E_1-E_2)}$ because the common partition function cancels. Hence $\log(p/(1-p))=-\beta(E_1-E_2)$, and substituting $t=-s/(\beta\hbar)$ yields $e^{is(E_1-E_2)/\hbar}$. The energy gap alone gives no time frequency until $\hbar$ is specified, and the state alone gives no energy gap until $H$ and $\beta$ are specified. [A1, F1, step 1.1, algebra] ∎
