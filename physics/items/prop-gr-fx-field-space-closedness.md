---
id: prop-gr-fx-field-space-closedness
kind: proposition
title: Closedness of the integrated presymplectic form on smooth field families
status: published
origin: pipeline
domain: mathematics
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-covariant-presymplectic-current
  - thm-the-exterior-derivative-squares-to-zero
  - lem-gr-fx-differentiation-under-finite-chain-integral
dependency_roles:
  def-gr-fx-covariant-presymplectic-current: mathematical-premise
  thm-the-exterior-derivative-squares-to-zero: mathematical-premise
  lem-gr-fx-differentiation-under-finite-chain-integral: mathematical-premise
sources:
  references:
    - title: "Vivek Iyer and Robert M. Wald, Some Properties of Noether Charge and a Proposal for Dynamical Black Hole Entropy, §3, equations (44)–(45)"
      url: "https://arxiv.org/pdf/gr-qc/9403028"
    - title: "Geoffrey Compère and Adrien Fiorucci, Advanced Lectures on General Relativity, §1.3.1"
      url: "https://arxiv.org/pdf/1801.07064"
    - title: "Daniel Harlow and Jie-qiang Wu, Covariant phase space with boundaries, §2.2, equations (2.23)–(2.27)"
      url: "https://arxiv.org/pdf/1906.08616"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

For a smooth finite-dimensional family of field configurations, let $\Theta$
be the parameter-space one-form with values in spacetime three-forms from the
chosen variational decomposition. For every finite oriented
smooth singular three-chain $\Sigma$, the integrated two-form
$\Omega_\Sigma=\int_\Sigma(-d_P\Theta)$ is closed on the parameter space:
$d_P\Omega_\Sigma=0$. This is a field-space identity and requires no
equations of motion. If a smooth solution family is specified, its restricted
form is also closed.

## Statement references

[Some Properties of Noether Charge, §3](https://arxiv.org/pdf/gr-qc/9403028)

[Advanced Lectures on General Relativity, §1.3.1](https://arxiv.org/pdf/1801.07064)

[Covariant phase space with boundaries, §2.2](https://arxiv.org/pdf/1906.08616)

[[def-gr-fx-covariant-presymplectic-current]]

## Facts & Assumptions

**Given:** A smooth finite-dimensional field family and a finite oriented
smooth singular three-chain $\Sigma$.

[F1] The current is $\omega=-d_P\Theta$, and
$\Omega_\Sigma(\delta_1,\delta_2)=\int_\Sigma\omega(\delta_1,\delta_2)$.
[[def-gr-fx-covariant-presymplectic-current]]

[F2] The exterior derivative satisfies $d_P^2=0$.
[[thm-the-exterior-derivative-squares-to-zero]]

[F3] For a fixed finite chain, differentiation of a smooth parameter family
of integrated three-forms passes through the integral.
[[lem-gr-fx-differentiation-under-finite-chain-integral]]

## Proof

**Given:** As in [F1]–[F3].

1.1 In commuting parameter coordinates $p^a,p^b$, [F1] and [F3] give
$(\Omega_\Sigma)_{ab}
=\partial_b(\Theta_\Sigma)_a-\partial_a(\Theta_\Sigma)_b
=-(d_P\Theta_\Sigma)_{ab}$, where
$\Theta_\Sigma=\int_\Sigma\Theta$. The same differentiation formula applies
to each coefficient of the parameter-space form $\Theta$, so
$\Omega_\Sigma=-d_P\Theta_\Sigma$. [F1, F3]

2.1 Apply [F2] to step 1.1:
$d_P\Omega_\Sigma=-d_P^2\Theta_\Sigma=0$. The same computation applies to
any smooth subfamily of solutions, proving closedness of its restricted
two-form without asserting that a global solution manifold exists.
[F2, step 1.1] ∎
