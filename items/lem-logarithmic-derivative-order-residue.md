---
id: lem-logarithmic-derivative-order-residue
kind: lemma
title: "The logarithmic derivative has residue equal to local order"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-logarithmic-derivative-meromorphic-function,
       def-order-of-zero-holomorphic-function,
       thm-zero-order-factorization-holomorphic-function,
       thm-pole-characterizations,
       thm-algebra-of-complex-derivatives,
       cor-complex-differentiability-implies-continuity]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. W. Howell and J. H. Mathews, Complex Analysis, §8.7"
      url: "https://complexanalysis.org/web/sec_argument-rouche.html"
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §5.4"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $f$ be meromorphic on a neighbourhood of $a\in\mathbb C$.

1. If $a$ is a zero of $f$ of order $m\ge1$, then
   $$\operatorname{Res}\!\left(\frac{f'}{f},a\right)=m.$$
2. If $a$ is a pole of $f$ of order $m\ge1$, then
   $$\operatorname{Res}\!\left(\frac{f'}{f},a\right)=-m.$$

In either case $f'/f$ has a simple pole at $a$.

## Facts & Assumptions

**Given:** A meromorphic function $f$ on a neighbourhood of $a$.

[L1] A holomorphic function has a zero of order $m$ at $a$ exactly when it
factors locally as $(z-a)^m h(z)$ with $h$ holomorphic and $h(a)\ne0$
([[thm-zero-order-factorization-holomorphic-function]]).

[L2] A pole of order $m$ is exactly a point where $1/f$ extends holomorphically
across $a$ and has a zero of order $m$ there
([[thm-pole-characterizations]]).

[L3] Holomorphic quotients and products obey the usual derivative rules, and a
holomorphic function is continuous
([[thm-algebra-of-complex-derivatives]],
[[cor-complex-differentiability-implies-continuity]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $a$ is a zero of $f$ of order $m$. By [L1], on a disc about $a$ one has $f(z)=(z-a)^m h(z)$ with $h$ holomorphic and $h(a)\ne0$. [given, L1]

1.2 Suppose instead that $a$ is a pole of $f$ of order $m$. By [L2], $1/f=(z-a)^m h$ locally for some holomorphic $h$ with $h(a)\ne0$. Shrinking as before, $h$ is nowhere zero. [given, L2, L3]

2.1 By continuity in [L3], shrink the disc so that $h$ is nowhere zero there. Differentiating the factorization from step 1.1 and dividing by $(z-a)^m h(z)$ gives $$\frac{f'(z)}{f(z)}=\frac{m}{z-a}+\frac{h'(z)}{h(z)}.$$ The second term is holomorphic by [L3], so the residue is $m$ and the pole is simple. [step 1.1, L3, algebra]

3.1 From step 1.2 one has $f(z)=(z-a)^{-m}h(z)^{-1}$. Differentiating and dividing by $f$ yields $$\frac{f'(z)}{f(z)}=-\frac{m}{z-a}-\frac{h'(z)}{h(z)}.$$ Again the second term is holomorphic by [L3], so the residue is $-m$ and the pole is simple. [step 1.2, L3, algebra] ∎
