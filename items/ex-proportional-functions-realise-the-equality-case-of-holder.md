---
id: ex-proportional-functions-realise-the-equality-case-of-holder
kind: example
title: "Proportional functions realise the equality case of Holder"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-equality-case-in-holder-inequality]
proof_strategy: "Choose nonnegative functions with |f|^p and |g|^q proportional almost everywhere and invoke the equality theorem."
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Holder's Inequality"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Example

Fix $1<p<\infty$, let $q$ be its conjugate exponent, and work on $[0,1]$ with
Lebesgue measure. For positive constants $a,b$, define

$$f:=a\chi_{[0,1]},\qquad g:=b\chi_{[0,1]}.$$

Then

$$\int_0^1 |fg|\,d\lambda=\|f\|_p\|g\|_q.$$

## Facts & Assumptions

**Given:** Constants $a,b>0$, an exponent $1<p<\infty$, and its conjugate $q$.

[L1] Equality in Holder holds when $|f|^p$ and $|g|^q$ are proportional almost
everywhere ([[thm-equality-case-in-holder-inequality]]).

## Verification

**Proof technique:** Choose nonnegative functions with $|f|^p$ and $|g|^q$
proportional almost everywhere and invoke the equality theorem.

1.1 The functions satisfy [given]
$$|f|^p=a^p\chi_{[0,1]},\qquad |g|^q=b^q\chi_{[0,1]},$$
so $|f|^p=(a^p/b^q)|g|^q$ almost everywhere.

2.1 Applying [L1] gives equality in Holder: [L1, step 1.1]
$$\int_0^1 |fg|\,d\lambda=\|f\|_p\|g\|_q.$$
∎
