---
id: prop-commuting-hamiltonian-vector-fields-integrate-to-a-local-r-n-action
kind: proposition
title: Commuting Hamiltonian vector fields integrate to a local $\mathbb R^n$-action
status: published
origin: pipeline
deps: ["def-completely-integrable-hamiltonian-system", "prop-regular-common-level-sets-are-lagrangian-submanifolds", "thm-hamiltonian-flows-commute-iff-their-hamiltonians-poisson-commute-up-to-locally-constant-bracket", "thm-two-vector-fields-commute-if-and-only-if-their-local-flows-commute"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, Lemma 18.11 and discussion, p. 110
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

On the regular locus of a completely integrable system, the fields
$X_{F_1},\ldots,X_{F_n}$ integrate to a local $\mathbb R^n$-action. On a
compact invariant regular fibre their restrictions are complete, so the action
is global on that fibre.

## Facts & Assumptions

**Given:** A completely integrable system and its Hamiltonian vector fields.

[F1] Zero Poisson brackets make the local Hamiltonian flows commute. [[thm-hamiltonian-flows-commute-iff-their-hamiltonians-poisson-commute-up-to-locally-constant-bracket]], [[thm-two-vector-fields-commute-if-and-only-if-their-local-flows-commute]].

[F2] On a regular fibre the fields are tangent and span its tangent spaces. [[prop-regular-common-level-sets-are-lagrangian-submanifolds]].

## Proof

**Proof technique:** direct.

1.1 Let $\phi_i^t$ be the local flow of $X_{F_i}$. Pairwise involution in complete integrability and [F1] make these flows commute. Therefore $(t_1,\ldots,t_n)\cdot p=\phi_1^{t_1}\circ\cdots\circ\phi_n^{t_n}(p)$ is independent of the order and satisfies the action law wherever both sides are defined. [F1, given]

1.2 By [F2], every regular fibre is invariant under all these flows. On a compact fibre, a maximal trajectory of any restricted smooth field cannot escape in finite time: a convergent subsequence near a finite endpoint and local ODE existence would extend it. Thus every restricted flow is complete. [F2, given]

2.1 Substituting the complete commuting restricted flows into the formula of step 1.1 defines a global $\mathbb R^n$-action on the compact fibre. Without compactness, only the local action is asserted. [step 1.1, step 1.2] ∎
