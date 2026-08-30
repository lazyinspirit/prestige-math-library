---
id: ex-the-graph-of-the-sine-function-as-an-embedded-submanifold
kind: example
title: "The graph of the sine function is an embedded submanifold"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold, thm-sine-and-cosine-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, Embedded Submanifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
---

## Example

The set

$$\Gamma=\{(x,\sin x):x\in\mathbb R\}\subseteq\mathbb R^2$$

is an embedded one-dimensional submanifold of $\mathbb R^2$.

## Facts & Assumptions

**Given:** The smooth function $f:\mathbb R\to\mathbb R$, $f(x)=\sin x$.

[L1] The graph of a smooth map $F:M\to N$ is an embedded submanifold of
$M\times N$ of dimension $\dim M$
([[prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold]]).

[L2] Sine and cosine are differentiable with derivatives cosine and negative
sine, respectively ([[thm-sine-and-cosine-derivatives]]).

## Verification
**Proof technique:** direct.

1.1 Repeatedly applying the derivative identities in [L2] shows that every derivative of $f(x)=\sin x$ exists and is again $\pm\sin x$ or $\pm\cos x$; these functions are continuous. Hence $f$ is smooth. [L2, given]

2.1 Therefore its graph is an embedded submanifold of $\mathbb R\times\mathbb R\cong\mathbb R^2$ by [L1]. [L1, step 1.1]

3.1 This is exactly the displayed subset $\Gamma$. [step 2.1] ∎
