---
id: fs-symplectic-manifolds-can-have-odd-dimension
kind: false-statement
title: Symplectic manifolds can have odd dimension
status: published
origin: pipeline
deps: ["prop-symplectic-vector-spaces-have-even-dimension"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 1, linear symplectic algebra, pp. 3--5
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

A symplectic manifold can have odd dimension.

## Facts & Assumptions

**Given:** A symplectic manifold $(M,\omega)$.

[F1] Every finite-dimensional symplectic vector space has even dimension.
[[prop-symplectic-vector-spaces-have-even-dimension]].

## Refutation

**Proof technique:** direct.

1.1 At every $p\in M$, nondegeneracy makes $(T_pM,\omega_p)$ a symplectic vector space. [given]

2.1 By [F1], $\dim T_pM$ is even; this is $\dim M$ on the component containing $p$. Hence no odd-dimensional component is symplectic, contrary to the claim. [F1, step 1.1] ∎
