---
id: cor-endomorphisms-over-an-algebraically-closed-field-are-triangularisable
kind: corollary
title: "Every finite-dimensional endomorphism over an algebraically closed field is triangularisable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-triangularisation-splitting-criterion, def-algebraically-closed-field, cor-factor-theorem-over-a-commutative-ring]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Result 5.47"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Statement

Let $F$ be algebraically closed. Every endomorphism of a finite-dimensional $F$-vector space is triangularisable over $F$.

## Facts & Assumptions

**Given:** An algebraically closed field $F$, a finite-dimensional $F$-vector space $V$, and an endomorphism $T:V\to V$.

[L1] An endomorphism is triangularisable exactly when its characteristic polynomial splits into linear factors over its base field ([[thm-triangularisation-splitting-criterion]]).

[L2] In an algebraically closed field, every nonconstant polynomial has a root in the field ([[def-algebraically-closed-field]]).

[L3] If $f(a)=0$ over a commutative ring, then $x-a$ divides $f$ ([[cor-factor-theorem-over-a-commutative-ring]]).

## Proof

**Proof technique:** induction.

1.1 A monic polynomial of degree $0$ is $1$, hence is the empty product of linear factors. [base]

1.2 Let $f\in F[x]$ be monic of positive degree and assume every monic polynomial of smaller degree splits; [L2] gives a root $a$, and [L3] writes $f=(x-a)q$ with $q$ monic of degree one less, so the induction hypothesis makes $q$, and therefore $f$, split. [L2, L3, ih]

2.1 Apply steps 1.1-1.2 to the monic polynomial $\chi_T$; it splits over $F$, so [L1] triangularises $T$, with $V=0$ covered by the degree-zero base case. [step 1.1, step 1.2, L1, discharge-induction] ∎
