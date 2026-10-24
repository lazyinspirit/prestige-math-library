---
id: ex-gram-schmidt-in-r-three
kind: example
title: "Gram–Schmidt on an explicit basis of $\\mathbb R^3$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-standard-coordinate-inner-products, thm-gram-schmidt-orthonormalisation]
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sergei Treil, Linear Algebra Done Wrong, §5.3.2'
      url: 'https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html'
pipeline_run: null
---

## Example

Applying Gram–Schmidt in standard $\mathbb R^3$ to

$$v_0=(1,1,1),\qquad v_1=(0,1,2),\qquad v_2=(1,0,2)$$

produces

$$e_0=\frac{(1,1,1)}{\sqrt3},\qquad e_1=\frac{(-1,0,1)}{\sqrt2},\qquad e_2=\frac{(1,-2,1)}{\sqrt6}.$$

## Facts & Assumptions

**Given:** The displayed ordered basis in standard $\mathbb R^3$.

[L1] The standard coordinate inner product is the sum of coordinatewise products ([[prop-standard-coordinate-inner-products]]).

[L2] Gram–Schmidt subtracts earlier orthogonal projections, normalises the nonzero residual, and preserves each successive span ([[thm-gram-schmidt-orthonormalisation]]).

## Verification

**Proof technique:** computation.

1.1 By [L1], $\lVert v_0\rVert=\sqrt3$, giving $e_0$. The second residual is $u_1=v_1-\langle v_1,e_0\rangle e_0=(-1,0,1)$, whose norm is $\sqrt2$, giving $e_1$. [L1, L2, algebra]

1.2 The third residual is $u_2=v_2-\langle v_2,e_0\rangle e_0-\langle v_2,e_1\rangle e_1=(1/2,-1,1/2)$. Its norm is $\sqrt6/2$, so normalisation gives the displayed $e_2$. [L1, L2, algebra]

2.1 Direct dot products give $\langle e_i,e_j\rangle=\delta_{ij}$. Moreover $e_0$ is a nonzero multiple of $v_0$, $u_1=v_1-v_0$, and $u_2$ differs from $v_2$ by a combination of the first two residual directions, verifying all three successive-span equalities from [L2]. [step 1.1, step 1.2, L1, L2] ∎
