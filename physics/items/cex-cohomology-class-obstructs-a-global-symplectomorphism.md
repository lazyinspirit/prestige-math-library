---
id: cex-cohomology-class-obstructs-a-global-symplectomorphism
kind: counterexample
title: A cohomology class obstructs a global symplectomorphism
status: published
origin: pipeline
deps: ["def-symplectomorphism-local-symplectomorphism-and-symplectic-embedding", "thm-integration-is-an-isomorphism-on-top-compactly-supported-de-rham-cohomology", "prop-positive-compactly-supported-top-forms-have-positive-integral", "thm-change-of-variables-for-oriented-manifold-diffeomorphisms"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 7, cohomology obstruction, pp. 42--43
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-01-receipts.jsonl (cex-cohomology-class-obstructs-a-global-symplectomorphism). No independent judge or whole-closure certification.
    delegated_by: owner
proof_strategy: direct
---

## Counterexample

Let $\omega$ be the standard positive area form on $S^2$. The symplectic
manifolds $(S^2,\omega)$ and $(S^2,2\omega)$ are not symplectomorphic.

## Facts & Assumptions

**Given:** The oriented sphere and its positive area form.

[F1] A symplectomorphism $f$ must satisfy $f^*\omega_1=\omega_0$. [[def-symplectomorphism-local-symplectomorphism-and-symplectic-embedding]].

[F2] On a compact connected oriented surface, integration identifies top de Rham cohomology with $\mathbb R$. [[thm-integration-is-an-isomorphism-on-top-compactly-supported-de-rham-cohomology]].

[F3] [[prop-positive-compactly-supported-top-forms-have-positive-integral]] gives a strictly positive choice-free finite-chart integral for a nonzero positive top form on compact $S^2$.

[F4] [[thm-change-of-variables-for-oriented-manifold-diffeomorphisms]] gives the signed choice-free finite-chart integral identity for a diffeomorphism and a compactly supported top form, including the orientation-preserving case used here.

## Verification

**Proof technique:** direct.

1.1 Both forms are closed and positive, hence symplectic. By [F3] the integral $A=\int_{S^2}\omega$ is strictly positive; by [F2], their cohomology classes are distinct because their integrals are $A$ and $2A$. [F2, F3, given, algebra]

2.1 If $f^*(2\omega)=\omega$, then $f$ is orientation preserving because both forms are positive. The choice-free change-of-variables formula [F4] gives $A=\int_{S^2}f^*(2\omega)=2A$, impossible. Thus [F1] fails for every diffeomorphism, exhibiting the global cohomology obstruction. [F1, F4, step 1.1] ∎
