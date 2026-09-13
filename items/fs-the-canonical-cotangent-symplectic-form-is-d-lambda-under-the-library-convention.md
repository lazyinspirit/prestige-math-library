---
id: fs-the-canonical-cotangent-symplectic-form-is-d-lambda-under-the-library-convention
kind: false-statement
title: The canonical cotangent symplectic form is $d\lambda$ under the library convention
status: published
origin: pipeline
deps: ["def-countable-choice", "def-tautological-one-form-on-a-cotangent-bundle"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 1, cotangent bundles, pp. 11--12
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement refuted

Under the library convention, the canonical cotangent symplectic form is
$d\lambda$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and the library's cotangent convention.

[F1] The convention is $\omega_{\mathrm{can}}=-d\lambda$.
[[def-tautological-one-form-on-a-cotangent-bundle]].

## Refutation

**Proof technique:** direct.

1.1 On $T^*\mathbb R$ with coordinates $(q,p)$, $\lambda=p\,dq$, so $d\lambda=dp\wedge dq=-dq\wedge dp$. [F1, algebra]

2.1 Hence [F1] gives $\omega_{\mathrm{can}}=dq\wedge dp=-d\lambda$, which is not $d\lambda$. This one-dimensional base already refutes the universal sign claim. [F1, step 1.1] ∎
