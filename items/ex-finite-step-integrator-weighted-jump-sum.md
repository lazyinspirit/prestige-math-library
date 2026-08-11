---
id: ex-finite-step-integrator-weighted-jump-sum
kind: example
title: "A finite-step integrator gives a weighted sum over its jumps"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-riemann-stieltjes-sum-and-integral,
       thm-riemann-stieltjes-linearity-and-additivity,
       ex-step-integrator-evaluates-at-the-jump,
       def-finite-sum, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, Ch. 6, Theorem 6.15"
      url: "https://archive.org/details/principlesofmath00rudi"
pipeline_run: null
---

## Example

Let $a<b$, let $c_1<\cdots<c_m$ be points of the open interval $(a,b)$, as in the one-jump example, and let
$$\alpha=C+\sum_{j=1}^m w_jH_{c_j}.$$
For every continuous $f$,
$$\int_a^b f\,d\alpha=\sum_{j=1}^m w_jf(c_j).$$

## Facts & Assumptions

**Given:** The displayed finite-step integrator and a continuous $f$.

[L1] For $a<c<b$ and $H_c$ equal to $0$ below $c$ and $1$ from $c$ on, every continuous $f$ has $\int_a^bf\,dH_c=f(c)$: a single jump of weight one at an **interior** point evaluates $f$ there ([[ex-step-integrator-evaluates-at-the-jump]]).

[L2] The Stieltjes integral is linear in its integrator ([[thm-riemann-stieltjes-linearity-and-additivity]]).

## Verification

**Proof technique:** computation.

1.1 The constant term has every increment equal to zero. By [L1], each $H_{c_j}$ contributes $f(c_j)$, and finite linearity [L2] gives the displayed sum. [L1, L2]

2.1 Ordering the distinct jump points prevents double counting. The jump points are interior because [L1] places them strictly inside, and the restriction is not cosmetic: $H_a$ takes the value $1$ at every point of $[a,b]$, so a jump placed at $a$ makes every increment zero and contributes nothing, while the weighted sum would still count $w f(a)$. [L1] ∎
