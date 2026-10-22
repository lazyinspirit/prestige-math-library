---
id: thm-identity-theorem-holomorphic-functions
kind: theorem
title: "Identity theorem for holomorphic functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-locally-zero-locus-clopen-holomorphic-function, thm-zero-order-factorization-holomorphic-function, thm-algebra-of-complex-derivatives, cor-complex-differentiability-implies-continuity, def-metric-interior-closure-boundary, def-complex-domain, def-connected-space]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "Accumulating agreement forces identity"
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
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Theorem 2.4.7"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "B. V. Shabat, Introduction to Complex Analysis, Theorem 2.28"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
pipeline_run: null
---

## Statement

If two holomorphic functions on a complex domain agree on a set with an accumulation point in the domain, then they agree everywhere on the domain.

Precisely, let $\Omega\subseteq\mathbb C$ be a complex domain ([[def-complex-domain]]), let $f,g:\Omega\to\mathbb C$ be holomorphic, and suppose that some $a\in\Omega$ is an accumulation point of $\{z\in\Omega:f(z)=g(z)\}$. Then $f=g$ on $\Omega$. The requirement $a\in\Omega$ is essential.

## Facts & Assumptions

**Given:** A complex domain $\Omega$, holomorphic functions $f,g:\Omega\to\mathbb C$, an accumulation point $a\in\Omega$ of their agreement set, and the holomorphic difference $h:=f-g$ supplied by [[thm-algebra-of-complex-derivatives]]. A nonempty subset of a connected space that is both open and closed is the whole space ([[def-connected-space]]).

[L1] For a holomorphic function $h$ on an open set $U$, the set of points having a neighbourhood on which $h$ vanishes is both open and closed in $U$ ([[lem-locally-zero-locus-clopen-holomorphic-function]]).

[L2] A holomorphic function has finite order $m$ at $a$ exactly when it factors near $a$ as $(z-a)^m q(z)$ with $q(a)\ne0$; its order is $+\infty$ exactly when it vanishes on a neighbourhood of $a$ ([[thm-zero-order-factorization-holomorphic-function]]).

[L3] If $f:U\to\mathbb C$ is complex differentiable at $a\in U$, then $f$ is continuous at $a$ ([[cor-complex-differentiability-implies-continuity]]).

## Proof

**Proof technique:** direct.

1.1 The function $h$ vanishes at points arbitrarily close to $a$. If it had finite order there, [L2] would give $h(z)=(z-a)^m q(z)$ with $q(a)\ne0$, and [L3] would make $q$ nonzero on a smaller neighbourhood; then $h$ would have no zeros there other than possibly $a$, contrary to accumulation. Hence $h$ has infinite order at $a$, so [L2] makes it vanish on a neighbourhood of $a$. [given, L2, L3]

2.1 By [L1], the locally zero locus of $h$ is open and closed in $\Omega$; it is nonempty by step 1.1. Since $\Omega$ is connected, that locus is all of $\Omega$. [step 1.1, L1, given]

3.1 Therefore $h(z)=0$ for every $z\in\Omega$, which means $f(z)=g(z)$ throughout $\Omega$. [step 2.1] ∎

## Remarks

The accumulation point must belong to the domain. Accumulation only at a boundary point does not force identity, as the companion counterexample shows.
