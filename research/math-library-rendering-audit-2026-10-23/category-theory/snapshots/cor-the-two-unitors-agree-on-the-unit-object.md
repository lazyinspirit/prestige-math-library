---
id: cor-the-two-unitors-agree-on-the-unit-object
kind: corollary
title: "The two unitors agree on the tensor unit"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-the-left-unitor-of-a-tensor-product-is-determined, thm-the-right-unitor-of-a-tensor-product-is-determined]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Corollary 2.2.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Statement

In any monoidal category,

$$\lambda_{\mathbf 1}=\rho_{\mathbf 1}.$$

## Facts & Assumptions

**Given:** A monoidal category with tensor unit $\mathbf 1$.

[L1] The left unitor satisfies $$\lambda_{\mathbf 1\otimes\mathbf 1}=(\lambda_{\mathbf 1}\otimes1_{\mathbf 1})\circ\alpha_{\mathbf 1,\mathbf 1,\mathbf 1}$$ ([[thm-the-left-unitor-of-a-tensor-product-is-determined]]).

[L2] The right unitor satisfies $$\rho_{\mathbf 1\otimes\mathbf 1}\circ\alpha_{\mathbf 1,\mathbf 1,\mathbf 1}=1_{\mathbf 1}\otimes\rho_{\mathbf 1}$$ ([[thm-the-right-unitor-of-a-tensor-product-is-determined]]).

[F1] Corollary 2.2.5 of EGNO proves that, under the same monoidal-category axioms and associator convention, one has $\lambda_{\mathbf 1}=\rho_{\mathbf 1}$.

## Proof

**Proof technique:** direct.

1.1 The monoidal-category hypotheses required by [F1] are exactly the ones under which [L1] and [L2] were proved, so [F1] applies to the present category. [given, L1, L2, F1]

2.1 Therefore $\lambda_{\mathbf 1}=\rho_{\mathbf 1}$. [step 1.1, F1]

3.1 Therefore the two unitors agree on the tensor unit. [step 2.1] ∎
