---
id: fs-gamma-recurrence-and-factorial-values-do-not-characterize-gamma
kind: false-statement
title: "FALSE: the Gamma recurrence and factorial values characterize Gamma"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-gamma-factorial-values,
       thm-gamma-functional-equation]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 7 §4"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Statement

**False claim:** If a meromorphic function $F$ satisfies
$F(z+1)=zF(z)$ and $F(n+1)=n!$ for every integer $n\ge0$, then $F=\Gamma$.

## Facts & Assumptions

**Given:** The Gamma recurrence and factorial values.

[L1] Gamma satisfies $F(z+1)=zF(z)$ on its domain
([[thm-gamma-functional-equation]]).

[L2] Gamma satisfies $\Gamma(n+1)=n!$ for integers $n\ge0$
([[cor-gamma-factorial-values]]).

## Refutation

**Proof technique:** direct.

1.1 Define $F(z):=\Gamma(z)e^{\sin(2\pi z)}$. Since $\sin(2\pi(z+1))=\sin(2\pi z)$, the exponential factor is $1$-periodic. Hence [L1] gives $F(z+1)=zF(z)$. [given, L1, construct]
2.1 For every integer $n$, $\sin(2\pi n)=0$, so $e^{\sin(2\pi n)}=1$. Thus [L2] gives $F(n+1)=\Gamma(n+1)=n!$. But $e^{\sin(2\pi z)}\ne1$ identically, so $F\ne\Gamma$. Therefore the stated data do not characterize Gamma. [step 1.1, L2, algebra] ∎