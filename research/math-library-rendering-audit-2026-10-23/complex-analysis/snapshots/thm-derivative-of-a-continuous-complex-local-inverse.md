---
id: thm-derivative-of-a-continuous-complex-local-inverse
kind: theorem
title: "A continuous local inverse has derivative reciprocal to a nonzero complex derivative"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-differentiability-holomorphic-and-entire,
       lem-complex-conjugation-and-modulus-laws]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Orloff, MIT 18.04 Topic 2, §2.6.1"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/330e301bd727c7bdaa679cf44cb75fe3_MIT18_04S18_topic2.pdf"
pipeline_run: null
---

## Statement

Let $U,V\subseteq\mathbb C$ be open, let $f:U\to V$ be a bijection, and let $g=f^{-1}:V\to U$. Fix $a\in U$ and put $b=f(a)$. If $f$ is complex differentiable at $a$, $f'(a)\ne0$, and $g$ is continuous at $b$, then $g$ is complex differentiable at $b$ and

$$ g'(b)=\frac1{f'(a)}. $$

The existence or continuity of such an inverse is a hypothesis, not a consequence of $f'(a)\ne0$ here.

## Facts & Assumptions
**Given:** The open sets, bijection, inverse, points, differentiability, nonzero-derivative, and inverse-continuity hypotheses in the Statement.

[F1] Complex differentiability at $a$ means $(f(a+h)-f(a))/h\to f'(a)$ through nonzero allowed increments ([[def-complex-differentiability-holomorphic-and-entire]]).

[L1] Complex modulus is definite and multiplicative ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** direct.

1.1 For $w\ne b$ near $b$, put $z=g(w)$. Injectivity gives $z\ne a$, and $$\frac{g(w)-g(b)}{w-b}=\frac{z-a}{f(z)-f(a)}=\left(\frac{f(z)-f(a)}{z-a}\right)^{-1}.$$ [given, algebra]

2.1 As $w\to b$, continuity of $g$ gives $z\to a$. By [F1], the parenthesized quotient in step 1.1 tends to the nonzero number $f'(a)$. [step 1.1, given, F1]

3.1 If $q\to q_0\ne0$, then $q^{-1}-q_0^{-1}=(q_0-q)/(qq_0)\to0$, with denominators nonzero near the limit by [L1]. Applying this to step 2.1 proves $g'(b)=1/f'(a)$. [step 2.1, L1, algebra] ∎
