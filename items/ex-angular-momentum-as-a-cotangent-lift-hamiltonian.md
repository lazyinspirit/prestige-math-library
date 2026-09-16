---
id: ex-angular-momentum-as-a-cotangent-lift-hamiltonian
kind: example
title: Angular momentum as a cotangent-lift Hamiltonian
status: published
origin: pipeline
deps: ["def-countable-choice", "prop-cotangent-lift-of-a-vector-field-is-hamiltonian"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, cotangent-lift exercise, p. 106; Lecture 22, Rotation, pp. 137--138
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Example

Assume $\mathrm{AC}_\omega$. Fix $a\in\mathbb R^3$. The infinitesimal
rotation $Y_a(q)=a\times q$ lifts to the Hamiltonian vector field on
$T^*\mathbb R^3$ with Hamiltonian

$$H_a(q,p)=a\cdot(q\times p).$$

## Facts & Assumptions

**Given:** Euclidean dot and cross products identify covectors with vectors.

[F1] The cotangent lift of $Y$ has Hamiltonian $H_Y(q,p)=p(Y_q)$ under the library convention. [[prop-cotangent-lift-of-a-vector-field-is-hamiltonian]].

## Verification

**Proof technique:** direct.

1.1 Insert $Y_a(q)=a\times q$ into [F1]. The scalar triple-product identity gives $H_{Y_a}(q,p)=p\cdot(a\times q)=a\cdot(q\times p)$. [F1, given, algebra]

2.1 Hence the infinitesimal cotangent-lifted rotation is $X_{H_a}$. Varying $a$ shows that the vector-valued observable is $q\times p$, the usual angular momentum. [step 1.1] ∎
