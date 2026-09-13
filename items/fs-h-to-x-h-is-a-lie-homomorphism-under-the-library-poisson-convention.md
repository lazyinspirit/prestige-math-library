---
id: fs-h-to-x-h-is-a-lie-homomorphism-under-the-library-poisson-convention
kind: false-statement
title: $H\mapsto X_H$ is a Lie homomorphism under the library Poisson convention
status: draft
origin: pipeline
deps: ["thm-hamiltonian-vector-field-map-is-a-lie-antihomomorphism"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, conclusion of §18.3, p. 109
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement refuted

Under the library convention, $H\mapsto X_H$ is a Lie homomorphism.

## Facts & Assumptions

**Given:** The library conventions for Hamiltonian fields and Poisson brackets.

[F1] The actual identity is $[X_F,X_G]=-X_{\{F,G\}}$.
[[thm-hamiltonian-vector-field-map-is-a-lie-antihomomorphism]].

## Refutation

**Proof technique:** direct.

1.1 On $(\mathbb R^2,dq\wedge dp)$, take $F=q^2/2$ and $G=p^2/2$. Solving $\iota_{X_F}\omega=dF$ and $\iota_{X_G}\omega=dG$ gives $X_F=-q\partial_p$ and $X_G=p\partial_q$. Hence $\{F,G\}=\omega(X_F,X_G)=qp$, whose Hamiltonian vector field is nonzero. [given, algebra]

2.1 By [F1], $[X_F,X_G]=-X_{qp}\ne X_{qp}=X_{\{F,G\}}$. Thus the homomorphism identity fails; the map is an antihomomorphism. [F1, step 1.1] ∎
