---
id: cor-real-beta-recurrences
kind: corollary
title: 'The elementary recurrences for the real Beta function'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-real-beta-gamma-identity, thm-real-gamma-functional-equation]
justified_by: []
aliases: []
landmark: false
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
    - title: "University of Toronto MAT237Y1, The Gamma Function and the Beta Function, §2.2"
      url: "https://www.math.toronto.edu/campesat/ens/1920/gamma-beta.pdf"
pipeline_run: null
---

## Statement

For $p,q>0$,

$$B(p+1,q)=\frac{p}{p+q}B(p,q),\qquad B(p,q+1)=\frac{q}{p+q}B(p,q),$$

and consequently $B(p,q)=B(p+1,q)+B(p,q+1)$.

## Facts & Assumptions

**Given:** Positive real parameters $p,q$.

[F1] For $p,q>0$, $B(p,q)=\Gamma(p)\Gamma(q)/\Gamma(p+q)$ ([[thm-real-beta-gamma-identity]]).

[F2] For every $s>0$, $\Gamma(s+1)=s\Gamma(s)$ ([[thm-real-gamma-functional-equation]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] and [F2], $B(p+1,q)=\Gamma(p+1)\Gamma(q)/\Gamma(p+q+1)=pB(p,q)/(p+q)$. [F1, F2, algebra]

1.2 Similarly, $B(p,q+1)=qB(p,q)/(p+q)$. [F1, F2, algebra]

2.1 Adding steps 1.1 and 1.2 and using $p+q>0$ gives $B(p+1,q)+B(p,q+1)=B(p,q)$. [step 1.1, step 1.2, algebra] ∎
