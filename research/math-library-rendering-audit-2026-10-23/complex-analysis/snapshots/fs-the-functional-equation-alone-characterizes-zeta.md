---
id: fs-the-functional-equation-alone-characterizes-zeta
kind: false-statement
title: "FALSE: the classical functional equation alone characterizes the Riemann zeta function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-riemann-zeta-function]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 12 §7"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Statement

**False claim:** the classical functional equation by itself determines zeta.

## Facts & Assumptions

**Given:** The classical homogeneous equation
$$F(s)=2^s\pi^{s-1}\sin(\pi s/2)\Gamma(1-s)F(1-s),$$
interpreted as an identity of meromorphic functions.

[L1] On $\operatorname{Re}s>1$, $\zeta(s)=\sum_{n\ge1}n^{-s}$ ([[def-riemann-zeta-function]]).

## Refutation

**Proof technique:** direct.

1.1 Take the entire function $F(s)=0$. Both sides of the given equation are identically zero wherever its displayed coefficient is finite. At its poles the product with the zero function has the zero meromorphic extension. Thus $F$ satisfies the equation as a meromorphic identity. [given, construct, algebra]

2.1 By [L1], $\zeta(2)=\sum_{n\ge1}n^{-2}\ge1$, whereas $F(2)=0$. Hence a meromorphic function different from zeta satisfies the equation, and the equation alone cannot determine zeta. No assertion that zeta itself satisfies the equation is needed for this counterexample. [L1, step 1.1, algebra] ∎
