---
id: thm-local-normal-form-holomorphic-map
kind: theorem
title: "Local normal form of a nonconstant holomorphic map"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-local-degree-holomorphic-map, thm-zero-order-factorization-holomorphic-function, cor-local-holomorphic-roots-nonvanishing-function, lem-nonzero-derivative-gives-local-biholomorphism, thm-algebra-of-complex-derivatives, cor-complex-differentiability-implies-continuity]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "$f-f(a)=\\phi^m$ locally"
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
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Theorem 5.1.3"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $f:\Omega\to\mathbb C$ be nonconstant and holomorphic on a complex domain $\Omega$, let $a\in\Omega$, and put $m=\deg_a f$. Then near $a$ there is a biholomorphic coordinate $\phi$ with $\phi(a)=0$ and $f(z)-f(a)=\phi(z)^m$.

Precisely, there is a complex domain $V$ with $a\in V\subseteq\Omega$ such that $\phi:V\to\phi[V]$ is biholomorphic, $\phi(a)=0$, and the displayed identity holds for every $z\in V$.

## Facts & Assumptions

**Given:** A nonconstant holomorphic function $f$ on a complex domain $\Omega$, a point $a\in\Omega$, and the positive natural $m=\deg_a f$ ([[def-local-degree-holomorphic-map]]). Holomorphic products obey the product rule ([[thm-algebra-of-complex-derivatives]]).

[L1] A holomorphic function has finite order $m$ at $a$ exactly when, near $a$, it has the form $(z-a)^m h(z)$ with $h$ holomorphic and $h(a)\ne0$ ([[thm-zero-order-factorization-holomorphic-function]]).

[L2] For every positive natural $m$, a nowhere-zero holomorphic function on a disc has a holomorphic $m$th root ([[cor-local-holomorphic-roots-nonvanishing-function]]).

[L3] If a function is holomorphic near $a$ and has nonzero derivative at $a$, then it is biholomorphic between neighbourhoods of $a$ and its value ([[lem-nonzero-derivative-gives-local-biholomorphism]]).

[L4] A complex differentiable function is continuous at every point of complex differentiability ([[cor-complex-differentiability-implies-continuity]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to $f-f(a)$: on a neighbourhood of $a$ one has $f(z)-f(a)=(z-a)^m h(z)$, where $h$ is holomorphic and $h(a)\ne0$. [L1, given]

2.1 Since $h(a)\ne0$, [L4] permits shrinking to a disc on which $h$ is nowhere zero. By [L2] there is a holomorphic $q$ on that disc with $q^m=h$. [step 1.1, L2, L4]

3.1 Define $\phi(z):=(z-a)q(z)$. Then $\phi(a)=0$ and the product rule gives $\phi'(a)=q(a)\ne0$, so [L3] makes $\phi$ biholomorphic after one further shrinking around $a$. [step 2.1, L3, given, algebra]

4.1 On that final neighbourhood, steps 1.1 and 2.1 give $f(z)-f(a)=(z-a)^m q(z)^m=\phi(z)^m$, which is the required normal form. [step 1.1, step 2.1, step 3.1, algebra] ∎
