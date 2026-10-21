---
id: ex-ip-neural-inverse-mesh-truncation-modulus
kind: example
title: A diagonal inverse has an explicit Fourier truncation error
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
axiom_use: No choice axiom is used; the truncation and norm estimates are explicit.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let $p,s,R>0$, $m\ge1$, $\theta\in\ell^2$ satisfy $\sum_{j\ge1}j^{2s}\theta_j^2\le R^2$, and let $(A_p\theta)_j=j^{-p}\theta_j$. Given data $y=A_p\theta+\eta$ with $\|\eta\|_{\ell^2}\le\delta$, the mesh-$m$ truncated inverse is $g_m(y)=(j^py_j)_{j\le m}$ with zero output coordinates for $j>m$. It satisfies the continuum error bound
$$\|g_m(y)-\theta\|_{\ell^2}\le m^p\delta+R(m+1)^{-s}.$$
This separates measurement-noise amplification from the mesh truncation tail; it makes no statistical or neural-operator claim.

## Example references

[[op-ip-neural-operator-sample-complexity-for-inverse-maps|A mesh-transfer example on the compact diagonal inverse-map domain.]]

## Facts & Assumptions

**Given:** $p,s,R>0$, $m\ge1$, $\sum_{j\ge1}j^{2s}\theta_j^2\le R^2$, data $y=A_p\theta+\eta$, and $\|\eta\|_{\ell^2}\le\delta$.

[A1] $g_m(y)$ retains the first $m$ coordinates $j^py_j$ and sets all later coordinates to zero.

## Verification

1.1 For $j\le m$, $j^py_j=\theta_j+j^p\eta_j$. The norm of the first-$m$ noise vector is at most $m^p\|\eta\|_{\ell^2}\le m^p\delta$. [given, A1, algebra]

1.2 The omitted truth tail satisfies $\sum_{j>m}\theta_j^2\le(m+1)^{-2s}\sum_{j>m}j^{2s}\theta_j^2\le R^2(m+1)^{-2s}$. Its norm is at most $R(m+1)^{-s}$. [given, A1, algebra]

2.1 The error vector is the sum of the retained-coordinate noise error and the omitted truth tail. The triangle inequality with steps 1.1 and 1.2 gives $\|g_m(y)-\theta\|_{\ell^2}\le m^p\delta+R(m+1)^{-s}$. [A1, step 1.1, step 1.2, algebra] ∎
