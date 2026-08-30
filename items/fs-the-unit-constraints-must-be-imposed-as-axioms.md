---
id: fs-the-unit-constraints-must-be-imposed-as-axioms
kind: false-statement
title: "FALSE: the standard unit-constraint identities must all be imposed as independent axioms"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-left-unitor-of-a-tensor-product-is-determined, thm-the-right-unitor-of-a-tensor-product-is-determined, cor-the-two-unitors-agree-on-the-unit-object]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Proposition 2.2.4 and Corollary 2.2.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Statement

**False claim:** besides the pentagon and triangle, the tensor-product formulas
for the left and right unitors and the equality on the unit object must all be
imposed as independent axioms.

## Facts & Assumptions

**Given:** The unit-constraint formulas already proved on this page.

[L1] The left unitor satisfies $$\lambda_{X\otimes Y}=(\lambda_X\otimes1_Y)\circ\alpha_{\mathbf 1,X,Y}$$ ([[thm-the-left-unitor-of-a-tensor-product-is-determined]]).

[L2] The right unitor satisfies $$\rho_{X\otimes Y}\circ\alpha_{X,Y,\mathbf 1}=1_X\otimes\rho_Y$$ ([[thm-the-right-unitor-of-a-tensor-product-is-determined]]).

[L3] The two unitors agree on the tensor unit ([[cor-the-two-unitors-agree-on-the-unit-object]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1] and [L2], the two tensor-product formulas for the unitors follow from the monoidal axioms and are not independent axioms. [L1, L2]

1.2 By [L3], even the remaining equality on the unit object is a theorem rather than an extra axiom. [L3]

2.1 Therefore the claim is false. [step 1.1, step 1.2] ∎
