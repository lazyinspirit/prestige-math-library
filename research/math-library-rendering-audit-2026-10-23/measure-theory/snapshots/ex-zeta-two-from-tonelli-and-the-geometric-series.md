---
id: ex-zeta-two-from-tonelli-and-the-geometric-series
kind: example
title: "Tonelli and the geometric series compute int_0^1 int_0^1 1/(1-xy) dx dy = pi^2/6"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-geometric-series, thm-tonelli-for-nonnegative-double-series]
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Exercise 55(b)"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Example

One has
$$\int_0^1 \int_0^1 \frac{1}{1-xy}\,dx\,dy = \frac{\pi^2}{6}.$$

## Facts & Assumptions

**Given:** The function $(x,y) \mapsto (1-xy)^{-1}$ on $(0,1)^2$.

[L1] For $0 \le r < 1$, the geometric series sums to $(1-r)^{-1}$. ([[thm-geometric-series]])

[L2] Tonelli allows termwise summation of a nonnegative double series. ([[thm-tonelli-for-nonnegative-double-series]])

[A1] The classical Basel identity is $$\sum_{n \ge 1}\frac1{n^2}=\frac{\pi^2}{6}.$$

## Verification

**Proof technique:** direct.

1.1 For $(x,y)\in(0,1)^2$, [L1] gives $$\frac{1}{1-xy}=\sum_{n=0}^{\infty}(xy)^n$$ with nonnegative terms. [L1]

2.1 Tonelli and [L2] allow termwise integration: $$\int_0^1\int_0^1 \frac{1}{1-xy}\,dx\,dy = \sum_{n=0}^{\infty}\left(\int_0^1 x^n\,dx\right)\left(\int_0^1 y^n\,dy\right) = \sum_{n=0}^{\infty}\frac{1}{(n+1)^2}.$$ [L2, step 1.1]

3.1 Reindexing and applying [A1] yields $$\int_0^1\int_0^1 \frac{1}{1-xy}\,dx\,dy = \sum_{m=1}^{\infty}\frac1{m^2} = \frac{\pi^2}{6}.$$ [A1, step 2.1] ∎
