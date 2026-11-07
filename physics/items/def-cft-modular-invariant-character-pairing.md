---
id: def-cft-modular-invariant-character-pairing
kind: definition
title: Modular-invariant torus character pairing
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: mathematics
library: mathematics
deps:
  - thm-cft-strongly-rational-character-modularity
dependency_roles:
  thm-cft-strongly-rational-character-modularity: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Paul Ginsparg, Applied Conformal Field Theory
      url: https://arxiv.org/pdf/hep-th/9108028
      locator: Sections 7.5 and 9.6–9.8, printed pages 95–100 and 157–165.
    - title: Chiara Damiolini and Lukas Woike, Modular Functors from Conformal Blocks of Rational Vertex Operator Algebras
      url: https://arxiv.org/pdf/2507.05845v2
      locator: Sections 5.3–5.5 for the distinction between chiral modular-functor data and additional full-correlator constructions.
---

## Definition

Let $I_L,I_R$ be finite label sets, let $\chi_L(\tau)\in\mathbb C^{I_L}$ and $\chi_R(\tau)\in\mathbb C^{I_R}$ be column vectors of chiral characters, and let $M\in\mathbb C^{I_R\times I_L}$. The genus-one character pairing is

$$Z(\tau,\bar\tau)=\overline{\chi_R(\tau)}^{\,T}M\chi_L(\tau).$$

Suppose chosen lifts of the modular generators act by $\chi_L(g\tau)=\rho_L(g)\chi_L(\tau)$ and $\overline{\chi_R(g\tau)}=\overline{\rho_R(g)}\,\overline{\chi_R(\tau)}$. The pairing is called modular invariant as a bilinear form when

$$\overline{\rho_R(g)}^{\,T}M\rho_L(g)=M\qquad(g=S,T).$$

The combined left/right projective multipliers must cancel so that this is an action on the pairing. Since $S,T$ generate the modular group, these two matrix identities give invariance under the generated action. For a spectrum interpretation, $M_{ab}$ is a nonnegative integer multiplicity; $M_{00}=1$ is imposed only when a unique vacuum is assumed. Functional equality for one particular dependent set of character functions is weaker unless their linear independence is separately proved.

## Definition references

[[thm-cft-strongly-rational-character-modularity]]

## Facts & Assumptions

**Given:** The finite character vectors, chosen lifts of $S,T$, and multiplicity matrix $M$ in the Definition.

[F1] [[thm-cft-strongly-rational-character-modularity]]: for a strongly rational VOA, the finite vector of irreducible ordinary characters has an $S,T$ action in the source convention; its local proof derives this action from ordinary trace completeness and the exact genus-one Ward identities.

## Proof

1.1 For either generator $g$, substitute the two transformation laws into the Definition:
$$Z(g\tau,\overline{g\tau})=\overline{\chi_R(\tau)}^{\,T}\overline{\rho_R(g)}^{\,T}M\rho_L(g)\chi_L(\tau).$$
Thus the bilinear pairing is fixed by $g$ exactly when $\overline{\rho_R(g)}^{\,T}M\rho_L(g)=M$. [given, F1, algebra]

2.1 Applying the same calculation for $S$ and $T$ proves the stated generator criterion; because these generators produce the modular action, the identities compose to invariance for every generated element. If the combined projective multiplier does not cancel, the pairing is not an invariant bilinear form for that action. [given, step 1.1, algebra] ∎

## Proof status

This proves the finite-dimensional algebraic criterion. The definition does not construct an underlying VOA character representation, a positive spectrum, or a full local CFT.
