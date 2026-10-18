---
id: lem-bmw-cubic-relation-and-hecke-quotient
kind: lemma
title: The BMW braid generators satisfy a cubic, with a Hecke quotient
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-bmw-algebra-with-fixed-kauffman-skein-convention]
proof_strategy: direct
axiom_use: "No choice principle is used; this is an identity in a presented algebra."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Goodman and Hauschild, Affine Birman-Wenzl-Murakami Algebras and Tangles in the Solid Torus, Remarks 3.2 and Proposition 3.4"
      url: https://arxiv.org/pdf/math/0411155
      locator: "PDF p. 15: cubic braid relation and the cup-cap-zero Hecke quotient."
---

## Statement

For the convention in [[def-bmw-algebra-with-fixed-kauffman-skein-convention]], every generator satisfies $(g_i-q)(g_i+q^{-1})(g_i-\rho^{-1})=0$. In the cup-cap-zero quotient, it instead satisfies the Hecke quadratic $(g_i-q)(g_i+q^{-1})=0$.

## Facts & Assumptions

**Given:** The BMW relations in [[def-bmw-algebra-with-fixed-kauffman-skein-convention]], with $z=q-q^{-1}$.

[F1] [[def-bmw-algebra-with-fixed-kauffman-skein-convention]]: $g_i e_i=e_i g_i=\rho^{-1}e_i$ and $g_i-g_i^{-1}=z(1-e_i)$.

## Proof

1.1 Fix $i$. Right-multiplying the skein relation by $g_i$ and using $e_i g_i=\rho^{-1}e_i$ gives $g_i^2-zg_i-1+z\rho^{-1}e_i=0$. Multiplying this identity on the right by $g_i-\rho^{-1}$ removes its last term because $e_i(g_i-\rho^{-1})=0$. Hence $(g_i^2-zg_i-1)(g_i-\rho^{-1})=0$. [given, F1, algebra]

2.1 Since $z=q-q^{-1}$, $g_i^2-zg_i-1=(g_i-q)(g_i+q^{-1})$, which proves the cubic. In the quotient $e_i=0$, the skein relation gives $g_i-g_i^{-1}=z$; right-multiplying by the invertible $g_i$ yields $g_i^2-zg_i-1=0$, the Hecke quadratic. The cubic statement did not impose this quadratic on the full BMW algebra. [step 1.1, algebra] ∎
