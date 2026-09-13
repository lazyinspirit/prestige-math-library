---
id: cex-a-nondegenerate-nonclosed-two-form-in-dimension-at-least-four
kind: counterexample
title: A nondegenerate nonclosed two-form in dimension at least four
status: published
origin: pipeline
deps: ["def-symplectic-form-and-symplectic-manifold"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 1, closedness and nondegeneracy, pp. 4--5
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

On $\mathbb R^4$, set
$\eta=dx_1\wedge dy_1+e^{x_1}dx_2\wedge dy_2$.

## Facts & Assumptions

**Given:** The displayed two-form.

[F1] Symplecticity requires both nondegeneracy and closedness.
[[def-symplectic-form-and-symplectic-manifold]].

## Verification

**Proof technique:** direct.

1.1 Its square is $\eta^2=2e^{x_1}dx_1\wedge dy_1\wedge dx_2\wedge dy_2$, a nowhere-zero top form, so $\eta$ is nondegenerate. [given, algebra]

2.1 Exterior differentiation gives $d\eta=e^{x_1}dx_1\wedge dx_2\wedge dy_2\ne0$. Hence [F1] shows that $\eta$ is not symplectic. Products with standard symplectic factors give the same phenomenon in every even dimension at least four. [F1, step 1.1, algebra] ∎
