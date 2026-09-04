---
id: fs-the-functional-equation-alone-characterizes-zeta
kind: false-statement
title: "FALSE: the classical functional equation alone characterizes the Riemann zeta function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-riemann-zeta-functional-equation]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 12 §7"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Statement

**False claim:** the classical functional equation by itself determines zeta.

## Facts & Assumptions

**Given:** The modified function
$$F(s):=e^{(s-1/2)^2}\zeta(s).$$

[L1] Zeta satisfies the classical functional equation
([[thm-riemann-zeta-functional-equation]]).

## Refutation

**Proof technique:** direct.

1.1 The factor $e^{(s-1/2)^2}$ is entire, nonconstant, and invariant under $s\mapsto1-s$ because $(1-s-1/2)^2=(s-1/2)^2$. Therefore multiplying the functional equation in [L1] by this factor shows that $F$ satisfies the same functional equation as zeta. [L1, given, algebra]

2.1 The function $F$ is not equal to zeta, since for example $F(2)=e^{9/4}\zeta(2)\ne\zeta(2)$. Thus step 1.1 gives a different meromorphic function obeying the same functional equation, so that equation alone cannot characterize zeta. [step 1.1, algebra] ∎
