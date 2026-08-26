---
id: cor-harmonic-conjugates-differ-by-a-real-constant
kind: corollary
title: "Two harmonic conjugates differ by a real constant"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-harmonic-conjugate, cor-real-valued-holomorphic-function-is-constant, thm-algebra-of-complex-derivatives]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Jeremy Orloff, MIT 18.04 Topic 5: Introduction to Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/2e739bb156efb0bc7103fc43d0897dda_MIT18_04S18_topic5.pdf"
pipeline_run: null
---

## Statement

Let $\Omega$ be a complex domain, let $u:\Omega\to\mathbb R$ be harmonic, and
let $v_1,v_2$ be harmonic conjugates of $u$ on $\Omega$. Then $v_1-v_2$ is a
real constant on $\Omega$.

## Facts & Assumptions

**Given:** Harmonic conjugates $v_1,v_2$ of the same harmonic function $u$ on a domain $\Omega$.

[L1] By definition, $u+iv_1$ and $u+iv_2$ are holomorphic on $\Omega$ ([[def-harmonic-conjugate]]).

[L2] Sums, differences, and scalar multiples of holomorphic functions are holomorphic ([[thm-algebra-of-complex-derivatives]]).

[L3] A real-valued holomorphic function on a domain is constant ([[cor-real-valued-holomorphic-function-is-constant]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the functions $F_1:=u+iv_1$ and $F_2:=u+iv_2$ are holomorphic, so [L2] makes $-i(F_1-F_2)=v_1-v_2$ holomorphic on $\Omega$. [L1, L2, algebra]

2.1 The function $v_1-v_2$ is real-valued, so [L3] makes it constant on $\Omega$. [step 1.1, L3] ∎
