---
id: fs-every-nondegenerate-two-form-is-symplectic
kind: false-statement
title: Every nondegenerate two-form is symplectic
status: draft
origin: pipeline
deps: ["def-symplectic-form-and-symplectic-manifold"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 1, definition of a symplectic form, pp. 4--5
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement refuted

Every nondegenerate two-form is symplectic.

## Facts & Assumptions

**Given:** The proposed universal claim.

[F1] A symplectic form must be both nondegenerate and closed.
[[def-symplectic-form-and-symplectic-manifold]].

## Refutation

**Proof technique:** direct.

1.1 On $\mathbb R^4$ put $\eta=dx_1\wedge dy_1+e^{x_1}dx_2\wedge dy_2$. Its square is $2e^{x_1}dx_1\wedge dy_1\wedge dx_2\wedge dy_2$, which never vanishes, so $\eta$ is nondegenerate. [F1, algebra]

2.1 But $d\eta=e^{x_1}dx_1\wedge dx_2\wedge dy_2\ne0$. Thus [F1] excludes $\eta$ from being symplectic, refuting the claim. [F1, step 1.1, algebra] ∎
