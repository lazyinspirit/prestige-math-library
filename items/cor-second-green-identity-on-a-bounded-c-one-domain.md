---
id: cor-second-green-identity-on-a-bounded-c-one-domain
kind: corollary
title: Second Green identity
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: Hunter, Notes on Partial Differential Equations
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Hunter §2.5, Theorem 2.23, equation (2.12) and proof, printed p. 32 (PDF p. 38).
status: draft
origin: pipeline
proof_strategy: direct
deps: ["cor-first-green-identity-on-a-bounded-c-one-domain"]
---

## Statement

Assume $\mathrm{AC}_\omega$. For a bounded $C^1$ domain $\Omega\subset\mathbb R^n$, $n\ge2$, or the specified finite piecewise $C^1$ class, and real $u,v\in C^2(\overline\Omega)$, $$\int_\Omega(v\Delta u-u\Delta v)\,dx=\int_{\partial\Omega}(v\partial_\nu u-u\partial_\nu v)\,dS.$$ The face convention and finiteness are those of the first Green identity; every normal is outward from Omega, including normals on holes.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, a bounded C1 domain or the specified finite piecewise C1 class in dimension $n\ge2$, and real $u,v\in C^2(\overline\Omega)$.

[F1] The first identity applies to each ordered pair of C2 functions. ([[cor-first-green-identity-on-a-bounded-c-one-domain]]).

## Proof

1.1 Both functions are C1 as well as C2, so apply F1 to (u,v) and (v,u). This gives $\int_\Omega(v\Delta u+Du\cdot Dv)=\int_{\partial\Omega}v\partial_\nu u$ and $\int_\Omega(u\Delta v+Dv\cdot Du)=\int_{\partial\Omega}u\partial_\nu v$, using the same specified outward normal and faces in both applications. [given, F1]

2.1 All four integrals in step 1.1 are finite by F1, so subtraction is legitimate. Since $Du\cdot Dv=\sum_i(\partial_i u)(\partial_i v)=Dv\cdot Du$ pointwise, those terms cancel. Linearity leaves exactly the asserted volume and boundary differences, with the unchanged outward normals on every component. [step 1.1, F1, algebra] ∎

## Source notes

Hunter §2.5, Theorem 2.23, equation (2.12) and proof, printed p. 32 (PDF p. 38).

