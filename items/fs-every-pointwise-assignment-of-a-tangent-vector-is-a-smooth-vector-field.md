---
id: fs-every-pointwise-assignment-of-a-tangent-vector-is-a-smooth-vector-field
kind: false-statement
title: "FALSE: every pointwise assignment of a tangent vector is a smooth vector field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-smooth-vector-field-as-a-tangent-bundle-section, prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

**False claim:** every assignment $p\mapsto v_p\in T_pM$ is a smooth vector field.

## Facts & Assumptions

**Given:** The manifold $M=\mathbb R$ and the assignment $X_x:=|x|\,d/dx|_x$.

[L1] A vector field is smooth exactly when its coordinate coefficient functions are smooth ([[prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components]]).

## Refutation

**Proof technique:** direct.

1.1 The rule $x\mapsto |x|\,d/dx|_x$ assigns a tangent vector at every point of $\mathbb R$, so it is a pointwise tangent assignment. [given]

1.2 In the standard coordinate on $\mathbb R$, the unique coefficient function of this field is $|x|$, which is not smooth at $0$. Therefore [L1] says that $X$ is not a smooth vector field. [L1, given]

2.1 Hence a pointwise assignment of tangent vectors need not be a smooth vector field. [step 1.1, step 1.2] ∎
