---
id: thm-isolated-zeros-holomorphic-function
kind: theorem
title: "Zeros of a nonzero holomorphic function are isolated"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-identity-theorem-holomorphic-functions, thm-zero-order-factorization-holomorphic-function, cor-complex-differentiability-implies-continuity]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "Nonzero holomorphic functions have isolated zeros"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Theorem 2.4.7"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "B. V. Shabat, Introduction to Complex Analysis, Theorem 2.27"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
pipeline_run: null
---

## Statement

A holomorphic function on a complex domain that is not identically zero has only isolated zeros.

That is, if $f:\Omega\to\mathbb C$ is holomorphic on a complex domain and $f$ is not the zero function, then every $a\in\Omega$ with $f(a)=0$ has a neighbourhood in which $a$ is the only zero of $f$.

## Facts & Assumptions

**Given:** A complex domain $\Omega$, a holomorphic function $f:\Omega\to\mathbb C$ that is not identically zero, and an arbitrary zero $a\in\Omega$.

[L1] If two holomorphic functions on a complex domain agree on a set with an accumulation point in the domain, then they agree everywhere on the domain ([[thm-identity-theorem-holomorphic-functions]]).

[L2] A holomorphic function has finite order $m$ at $a$ exactly when it factors near $a$ as $(z-a)^m g(z)$ with $g(a)\ne0$; its order is $+\infty$ exactly when it vanishes on a neighbourhood of $a$ ([[thm-zero-order-factorization-holomorphic-function]]).

[L3] A complex differentiable function is continuous at the point of complex differentiability ([[cor-complex-differentiability-implies-continuity]]).

## Proof

**Proof technique:** direct.

1.1 The function $f$ cannot vanish on any neighbourhood of $a$, for otherwise its zero set would have the interior point $a$ as an accumulation point and [L1], applied to $f$ and the zero function, would make $f$ identically zero on $\Omega$. [L1, given]

2.1 By step 1.1 and [L2], the order of $f$ at $a$ is finite, so $f(z)=(z-a)^m g(z)$ near $a$ with $g(a)\ne0$. By [L3], after shrinking the neighbourhood, $g$ is nowhere zero there; since $f(a)=0$, the finite order $m$ is positive, and $a$ is the only zero of $f$ in that neighbourhood. [step 1.1, L2, L3]

3.1 The zero $a$ was arbitrary, so every zero of $f$ is isolated; if $f$ has no zeros, the conclusion is vacuous. [step 2.1] ∎
