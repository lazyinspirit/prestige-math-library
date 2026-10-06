---
id: lem-external-evaluation-detects-tensor-square-operations
kind: lemma
title: "External evaluation detects tensor-square operations"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - thm-every-independent-set-extends-to-a-basis
  - lem-admissible-square-action-has-a-distinct-leading-monomial
  - thm-admissible-composites-present-the-mod-two-square-algebra
  - thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism
  - cor-every-vector-space-has-a-basis
  - def-axiom-of-choice
  - thm-universal-property-of-module-tensor-products
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§4.L, printed pp. 490–491 and 496–501: Steenrod-square action and Adem algebra."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. For every d,e≥0, let X_d=(RP^L)^(d+1), X_e=(RP^L)^(e+1), with L≥max(d,e)+1 and P_d=∏x_i, P_e=∏y_j. The map A^d⊗A^e→H*(X_d;F₂)⊗H*(X_e;F₂), a⊗b↦a(P_d)⊗b(P_e), is injective; under Künneth, external products jointly detect every homogeneous tensor of square operations.

## Facts & Assumptions

**Given:** AC; the mod-two square algebra $A$ with its admissible basis in each degree $d$; the space $X_d=(\mathbb{RP}^L)^{d+1}$ with $L\ge d+1$ and the class $P_d=x_1\cdots x_{d+1}$; and the external action of $A\otimes A$ on external products $u\times v$.

[F1] The admissible composites of a fixed degree $d$ have distinct leading monomials on $P_d$ with coefficient one, their excess is at most $d<d+1$, and the evaluation $j_d(a)=a(P_d)$ is therefore injective on $A^d$ ([[lem-admissible-square-action-has-a-distinct-leading-monomial]], [[thm-admissible-composites-present-the-mod-two-square-algebra]]).

[F2] The cohomological Künneth cross product identifies the graded tensor product of the factors with $H^*(X_d\times X_e;\mathbb F_2)$ and preserves the factor bidegrees ([[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]]); squares are natural and act componentwise through the Cartan formula.

[F3] Under AC, independent vectors extend to a basis; the tensor universal property makes the tensor of linear left inverses a left inverse of the tensor map ([[thm-every-independent-set-extends-to-a-basis]], [[thm-universal-property-of-module-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 Let A^d be the degree-d part of the square algebra. By the admissible-basis theorem, its basis consists of Sq^I with |I|=d. Set X_d=(RP^L)^{d+1}, P_d=x₁⋯x_{d+1}, with L≥d+1. Every admissible I of degree d has e(I)≤d<d+1. The leading-monomial lemma therefore applies and gives distinct largest monomials for the classes Sq^I(P_d). Those classes are linearly independent: in a nonzero finite linear combination, the largest of the distinct leading monomials cannot cancel. Thus evaluation j_d:A^d→H*(X_d;F₂), a↦a(P_d), is injective. For d=0, X_0=RP^L and P_0=x₁; the identity operation sends x₁ to the nonzero class x₁. [given, F1]

2.1 The map $j_d\otimes j_e$ is injective for an explicit linear-algebra reason. Extend bases of im(j_d) and im(j_e) to bases of the two target vector spaces. Projection to im(j_d), followed by j_d⁻¹, gives a left inverse r_d of j_d; similarly obtain r_e. Then r_d⊗r_e is a left inverse of j_d⊗j_e by the tensor universal property, so j_d⊗j_e is injective. The cohomological Künneth theorem identifies the target with the corresponding external-product subspace in H*(X_d×X_e;F₂). Distinct bidegrees remain distinct under this Künneth decomposition. Since every tensor is a finite sum of homogeneous bidegrees, an element of A⊗A acting as zero on every external product of classes must be zero. This proves tensor faithfulness. [step 1.1, F2, F3] ∎
