---
id: thm-pbw-model-of-a-verma-module
kind: theorem
title: "The PBW model of a Verma module"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-verma-module, thm-triangular-decomposition-from-a-chosen-positive-root-system, thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I & II, Proposition 25.7"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
---

## Statement

Multiplication gives a vector-space isomorphism

$$U(\mathfrak n^-)\xrightarrow{\sim}M(\lambda),\qquad u\longmapsto uv_\lambda.$$

Consequently, ordered negative-root PBW monomials from
[[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]] applied to
$v_\lambda$ form a basis.

## Facts & Assumptions

**Given:** The triangular decomposition and the induced-module relations defining $M(\lambda)$.

## Proof

**Proof technique:** direct.

1.1 Triangular PBW from [[thm-triangular-decomposition-from-a-chosen-positive-root-system]] identifies $U(\mathfrak g)$ with $U(\mathfrak n^-)\otimes U(\mathfrak b)$.  Tensoring over $U(\mathfrak b)$ with $\mathbb C_\lambda$ therefore gives $U(\mathfrak n^-)\otimes\mathbb C_\lambda$. [given, algebra]

2.1 Under that identification, $u\otimes c_\lambda$ maps to $uv_\lambda$, so the map is bijective.  Applying the ordered PBW basis in the negative factor proves the asserted basis statement. [given, algebra] ∎
