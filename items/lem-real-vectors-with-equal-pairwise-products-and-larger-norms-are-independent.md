---
id: lem-real-vectors-with-equal-pairwise-products-and-larger-norms-are-independent
kind: lemma
title: "If $v_1,\\dots,v_m\\in\\mathbb{R}^{n}$ satisfy $\\langle v_i,v_j\\rangle=t\\ge0$ for $i\\ne j$ and $\\langle v_i,v_i\\rangle>t$, they are linearly independent"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-standard-coordinate-inner-products, def-inner-product-space, def-standard-bilinear-form-on-a-coordinate-space, def-linear-independence, def-definiteness-inertia-and-signature-data-over-the-reals, def-sum-over-a-finite-index-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Matousek, Thirty-three Miniatures, Miniature 4"
      url: "https://users.math.cas.cz/~matousek/mini.ps"
pipeline_run: null
---

## Statement

Let $v_1,\dots,v_m\in\mathbb{R}^n$ and let $t\ge0$. Suppose

$$\langle v_i,v_j\rangle=t\quad(i\ne j),\qquad \langle v_i,v_i\rangle>t\quad(1\le i\le m).$$

Then $v_1,\dots,v_m$ are linearly independent.

## Facts & Assumptions

**Given:** vectors $v_1,\dots,v_m\in\mathbb{R}^n$ satisfying the displayed hypotheses.

[F1] The standard inner product is bilinear ([[prop-standard-coordinate-inner-products]]).

[F2] A sum of nonnegative real numbers is $0$ only when every summand is $0$ ([[def-definiteness-inertia-and-signature-data-over-the-reals]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\sum_{i=1}^{m}c_iv_i=0$. Taking the inner product of this vector with itself and expanding bilinearly gives $$0=\sum_{i=1}^{m}c_i^2\langle v_i,v_i\rangle+\sum_{i\ne j}c_ic_jt=\sum_{i=1}^{m}c_i^2(\langle v_i,v_i\rangle-t)+t\Bigl(\sum_{i=1}^{m}c_i\Bigr)^2.$$ [F1, assume-contra]

2.1 Each summand on the right is nonnegative: $\langle v_i,v_i\rangle-t>0$ by hypothesis and $t\ge0$. Therefore [F2] forces every term $c_i^2(\langle v_i,v_i\rangle-t)$ to vanish, and hence every $c_i$ is $0$. [F2, step 1.1]

3.1 So the only linear relation is the trivial one, and the vectors are linearly independent. [step 2.1, discharge-contradiction] ∎

## Remarks

- This is the one place in the page where the order and positivity of $\mathbb{R}$ are load-bearing. That is exactly what fails over $\mathbb{F}_2$.
