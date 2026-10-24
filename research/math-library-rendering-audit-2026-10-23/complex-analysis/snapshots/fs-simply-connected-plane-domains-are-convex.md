---
id: fs-simply-connected-plane-domains-are-convex
kind: false-statement
title: "FALSE: every simply connected plane domain is convex"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-the-slit-plane-is-simply-connected-by-the-principal-logarithm]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 3, §6"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement

**False claim.** Every simply connected plane domain is convex.

## Facts & Assumptions

**Given:** The slit-plane witness from [[ex-the-slit-plane-is-simply-connected-by-the-principal-logarithm]].

[L1] The slit plane $\mathbb C\setminus(-\infty,0]$ is simply connected ([[ex-the-slit-plane-is-simply-connected-by-the-principal-logarithm]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the slit plane is simply connected. [given, L1]

2.1 It is not convex: the points $-1+i$ and $-1-i$ lie in the slit plane, but the straight segment between them is the vertical line segment $\{-1+it:-1\le t\le1\}$, which contains the removed point $-1\in(-\infty,0]$. Thus the segment is not contained in the domain. [step 1.1]

3.1 Therefore simple connectivity does not imply convexity. [step 1.1, step 2.1] ∎
