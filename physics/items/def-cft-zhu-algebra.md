---
id: def-cft-zhu-algebra
kind: definition
title: Zhu algebra of a CFT-type vertex operator algebra
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
deps:
  - def-conformal-vertex-algebra
  - def-vertex-algebra-state-field
justified_by:
  - thm-cft-zhu-algebra-structure-and-top-action
dependency_roles:
  def-conformal-vertex-algebra: mathematical-premise
  def-vertex-algebra-state-field: mathematical-premise
domain: mathematics
library: mathematics
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf"
      locator: "§§5.1–5.3, printed pp. 113–123; Zhu circle/star operations and top-level action."
    - title: "Chongying Dong and Cuipo Jiang, Rationality of Vertex Operator Algebras"
      url: "https://arxiv.org/pdf/math/0607679v1"
      locator: "§§1–2, conventions for VOAs, admissible modules and Zhu's A(V)."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $V=\bigoplus_{r\geq0}V_r$ be a conformal vertex algebra of CFT type over $\mathbb C$, with state–field convention $Y(a,z)=\sum_{m\in\mathbb Z}a_{(m)}z^{-m-1}$. For homogeneous $a,b\in V$ of weight $r=\mathrm{wt}(a)$, define
$$ a\circ b=\operatorname{Res}_z\frac{(1+z)^r}{z^2}Y(a,z)b,\qquad O(V)=\operatorname{span}_{\mathbb C}\{a\circ b\},\qquad a*b=\operatorname{Res}_z\frac{(1+z)^r}{z}Y(a,z)b. $$
Here $(1+z)^r=\sum_{j=0}^r\binom rjz^j$ is the finite polynomial expansion and residue means coefficient of $z^{-1}$. Extend both operations to bilinear maps $V\times V\to V$: for the unique finite homogeneous decompositions $a=\sum_r a_r$ and $b=\sum_s b_s$, set $a\circ b:=\sum_{r,s}a_r\circ b_s$ and $a*b:=\sum_{r,s}a_r*b_s$, with empty sums equal to zero. Thus $O(V)$ is equivalently the span of the circle products of arbitrary vectors. Write $A(V)=V/O(V)$ for the vector-space quotient and call $a*b$ the candidate product on representatives. The assertion that this product descends to an associative unital algebra is a separate theorem; this definition alone does not assert it.

## Statement references

[[thm-cft-zhu-algebra-structure-and-top-action]]

## Facts & Assumptions

**Given:** $V$ is as specified and uses the non-super complex state–field convention.

[F1] [[def-conformal-vertex-algebra]]: $V$ has nonnegative integral conformal weights, so $(1+z)^{\mathrm{wt}(a)}$ is a finite polynomial for homogeneous $a$.

[F2] [[def-vertex-algebra-state-field]]: $Y(a,z)b=\sum_{m\in\mathbb Z}a_{(m)}b\,z^{-m-1}$, with coefficients in $V$.

## Proof

1.1 For homogeneous $a$ of weight $r$, multiplying the field by either displayed polynomial times a fixed Laurent monomial yields finite residues. Explicitly, $a\circ b=\sum_{j=0}^r\binom rj a_{(j-2)}b$ and $a*b=\sum_{j=0}^r\binom rj a_{(j-1)}b$, so both are elements of $V$. [given, F1, F2, algebra]

2.1 The grading gives unique finite homogeneous decompositions. Each homogeneous mode sum in step 1.1 is bilinear on $V_r\times V_s$ because the state–field map is linear and its coefficients are linear operators. Summing over the finite decompositions therefore defines bilinear maps on $V\times V$, uniquely extending the homogeneous formulas. Their circle-product span is a vector subspace, so $A(V)$ is a vector-space quotient. The star operation is defined on all representatives; its descent to the quotient remains the separate result cited above. [given, F1, F2, step 1.1, algebra] ∎

## Proof status

This is the algebraic construction as a vector-space quotient with a candidate product. Associativity, the unit, and the admissible top-level action are not built into the definition.

