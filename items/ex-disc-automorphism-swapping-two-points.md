---
id: ex-disc-automorphism-swapping-two-points
kind: example
title: "A disc automorphism carrying one prescribed point to another"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-disc-automorphisms-are-rotated-blaschke-factors]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §2.1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Example

For $a,b\in\mathbb D$, the map

$$f_{a,b}(z):=\varphi_b(\varphi_a(z))$$

is an automorphism of $\mathbb D$ with $f_{a,b}(a)=b$.

## Facts & Assumptions

**Given:** Points $a,b\in\mathbb D$.

[F1] Every disc automorphism is a rotated Blaschke factor, and each Blaschke
factor $\varphi_c$ is itself a disc automorphism
([[thm-disc-automorphisms-are-rotated-blaschke-factors]]).

## Verification

1.1 By [F1], both $\varphi_a$ and $\varphi_b$ are automorphisms of $\mathbb D$, so their composition $f_{a,b}=\varphi_b\circ\varphi_a$ is again an automorphism of $\mathbb D$. [F1, given]

2.1 Since $\varphi_a(a)=0$ and $\varphi_b(0)=b$, one has $f_{a,b}(a)=\varphi_b(\varphi_a(a))=\varphi_b(0)=b$. [F1, step 1.1, algebra] ∎
