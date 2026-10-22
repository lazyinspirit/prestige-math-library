---
id: lem-gr-fx-variation-commutator-identity
kind: lemma
title: Variation identity for the presymplectic current
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
  - def-gr-fx-covariant-field-variations
dependency_roles:
  def-gr-fx-covariant-presymplectic-current: mathematical-premise
  def-gr-fx-covariant-field-variations: mathematical-premise
sources:
  references:
    - title: "Vivek Iyer and Robert M. Wald, Some Properties of Noether Charge and a Proposal for Dynamical Black Hole Entropy, §3, equation (44)"
      url: "https://arxiv.org/pdf/gr-qc/9403028"
    - title: "Geoffrey Compère and Adrien Fiorucci, Advanced Lectures on General Relativity, §1.3.1"
      url: "https://arxiv.org/pdf/1801.07064"
    - title: "Daniel Harlow and Jie-qiang Wu, Covariant phase space with boundaries, §2.2, equation (2.25)"
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

Use the chosen first-variation decomposition and its Iyer–Wald current
ordering. For a smooth two-parameter family with commuting variations
$\delta_1,\delta_2$,

$$d_M\omega(\delta_1\phi,\delta_2\phi) =(\delta_1E_\phi)[\delta_2\phi]-(\delta_2E_\phi)[\delta_1\phi].$$

## Statement references

[Some Properties of Noether Charge, §3](https://arxiv.org/pdf/gr-qc/9403028)

[Advanced Lectures on General Relativity, §1.3.1](https://arxiv.org/pdf/1801.07064)

[Covariant phase space with boundaries, §2.2](https://arxiv.org/pdf/1906.08616)

[[def-gr-fx-covariant-presymplectic-current]]

[[def-gr-fx-covariant-field-variations]]

## Facts & Assumptions

**Given:** A smooth two-parameter family of commuting field variations and a
chosen first-variation decomposition.

[A1] The decomposition is
$\delta\mathcal L=E_\phi[\delta\phi]+d_M\theta(\phi;\delta\phi)$, and
$\omega(\delta_1,\delta_2)=\delta_2\theta(\delta_1)-\delta_1\theta(\delta_2)$.
[[def-gr-fx-covariant-presymplectic-current]]

[A2] The two variations are parameter derivatives on a smooth family, so
$\delta_1\delta_2\phi=\delta_2\delta_1\phi$ and
$\delta_1\delta_2\mathcal L=\delta_2\delta_1\mathcal L$.
[[def-gr-fx-covariant-field-variations]]

## Proof

**Given:** As in [A1]–[A2].

1.1 Differentiate [A1] in direction $\delta_1$ with input $\delta_2\phi$ held fixed, and in direction $\delta_2$ with input $\delta_1\phi$ held fixed. The total derivatives of the Euler terms are respectively $(\delta_1E_\phi)[\delta_2\phi]+E_\phi[\delta_1\delta_2\phi]$ and $(\delta_2E_\phi)[\delta_1\phi]+E_\phi[\delta_2\delta_1\phi]$ by the definition of $\delta_iE_\phi$ in [A1]. Subtract the second differentiated identity from the first. The second-variation terms cancel by [A2], and the left-hand sides cancel by commutation of mixed derivatives. Since $\omega(\delta_1,\delta_2)=\delta_2\theta(\delta_1)-\delta_1\theta(\delta_2)$, the remaining identity is $$0=(\delta_1E_\phi)[\delta_2\phi]-(\delta_2E_\phi)[\delta_1\phi] -d_M\omega(\delta_1\phi,\delta_2\phi).$$ [A1, A2, algebra]

2.1 Rearranging step 1.1 gives $d_M\omega=(\delta_1E_\phi)[\delta_2\phi]-(\delta_2E_\phi)[\delta_1\phi]$, with the stated sign fixed by the Iyer–Wald ordering in [A1]. [step 1.1, A1] ∎
