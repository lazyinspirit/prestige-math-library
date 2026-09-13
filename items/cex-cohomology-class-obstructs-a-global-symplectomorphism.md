---
id: cex-cohomology-class-obstructs-a-global-symplectomorphism
kind: counterexample
title: A cohomology class obstructs a global symplectomorphism
status: published
origin: pipeline
deps: ["def-symplectomorphism-local-symplectomorphism-and-symplectic-embedding", "thm-integration-is-an-isomorphism-on-top-compactly-supported-de-rham-cohomology"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 7, cohomology obstruction, pp. 42--43
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Counterexample

Let $\omega$ be the standard positive area form on $S^2$. The symplectic
manifolds $(S^2,\omega)$ and $(S^2,2\omega)$ are not symplectomorphic.

## Facts & Assumptions

**Given:** The oriented sphere and its positive area form.

[F1] A symplectomorphism $f$ must satisfy $f^*\omega_1=\omega_0$.
[[def-symplectomorphism-local-symplectomorphism-and-symplectic-embedding]].

[F2] On a compact connected oriented surface, integration identifies top de
Rham cohomology with $\mathbb R$.
[[thm-integration-is-an-isomorphism-on-top-compactly-supported-de-rham-cohomology]].

## Verification

**Proof technique:** direct.

1.1 Both forms are closed and positive, hence symplectic. By [F2], their cohomology classes are distinct because their integrals are $A>0$ and $2A$. [F2, given, algebra]

2.1 If $f^*(2\omega)=\omega$, then $f$ is orientation preserving and change of variables gives $A=\int_{S^2}f^*(2\omega)=2A$, impossible. Thus [F1] fails for every diffeomorphism, exhibiting the global cohomology obstruction. [F1, F2, step 1.1] ∎
