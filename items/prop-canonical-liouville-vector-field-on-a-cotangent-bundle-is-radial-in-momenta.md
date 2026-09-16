---
id: prop-canonical-liouville-vector-field-on-a-cotangent-bundle-is-radial-in-momenta
kind: proposition
title: The canonical Liouville vector field on a cotangent bundle is radial in momenta
status: published
origin: pipeline
deps: ["def-countable-choice", "def-liouville-vector-field-on-an-exact-symplectic-manifold", "def-tautological-one-form-on-a-cotangent-bundle"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 1, cotangent coordinates, pp. 11--12
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

Assume $\mathrm{AC}_\omega$. For
$\omega_{\mathrm{can}}=-d\lambda$ on $T^*Q$, the Liouville vector field is

$$Z=\sum_i p_i\frac{\partial}{\partial p_i}.$$

## Facts & Assumptions

**Given:** Canonical coordinates $(q^i,p_i)$ on $T^*Q$.

[F1] $\lambda=\sum_i p_i\,dq^i$ and $\omega_{\mathrm{can}}=\sum_i dq^i\wedge dp_i$. [[def-tautological-one-form-on-a-cotangent-bundle]].

[F2] The Liouville equation is $\iota_Z\omega=-\lambda$. [[def-liouville-vector-field-on-an-exact-symplectic-manifold]].

## Proof

**Proof technique:** direct.

1.1 For the displayed radial field, contraction with [F1] gives $\iota_Z\omega_{\mathrm{can}}=-\sum_i p_i\,dq^i=-\lambda$. [F1, algebra]

2.1 Nondegeneracy makes the solution of [F2] unique, so this radial field is the canonical Liouville field. Its local flow is $(q,p)\mapsto(q,e^tp)$. [F2, step 1.1] ∎
