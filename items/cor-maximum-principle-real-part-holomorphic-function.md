---
id: cor-maximum-principle-real-part-holomorphic-function
kind: corollary
title: "Maximum principle for the real part of a holomorphic function"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-open-mapping-theorem-holomorphic-functions]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "B. V. Shabat, Introduction to Complex Analysis, Exercise 1.16(2)"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
pipeline_run: null
---

## Statement

If the real part of a holomorphic function on a complex domain has an interior local maximum, then the function is constant.

That is, if $f$ is holomorphic on a complex domain $\Omega$ and $\operatorname{Re}f(z)\le\operatorname{Re}f(a)$ throughout some neighbourhood of $a\in\Omega$, then $f$ is constant on $\Omega$.

## Facts & Assumptions

**Given:** A holomorphic function $f$ on a complex domain $\Omega$, a point $a\in\Omega$, and a neighbourhood $V$ on which $\operatorname{Re}f(z)\le\operatorname{Re}f(a)$.

[L1] Every nonconstant holomorphic function on a complex domain is an open map ([[thm-open-mapping-theorem-holomorphic-functions]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $f$ is nonconstant. For a disc $D$ about $a$ contained in $V$, [L1] makes $f[D]$ an open neighbourhood of $f(a)$, so $D(f(a),\rho)\subseteq f[D]$ for some $\rho>0$. [L1, given]

2.1 The point $f(a)+\rho/2$ belongs to that target disc and has real part $\operatorname{Re}f(a)+\rho/2>\operatorname{Re}f(a)$, so some point of $D$ violates the assumed local maximum. [step 1.1, algebra]

3.1 The contradiction in step 2.1 rules out nonconstancy, so $f$ is constant on $\Omega$. [step 1.1, step 2.1] ∎
