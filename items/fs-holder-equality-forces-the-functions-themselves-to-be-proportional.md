---
id: fs-holder-equality-forces-the-functions-themselves-to-be-proportional
kind: false-statement
title: "FALSE: Holder equality forces the functions themselves to be proportional"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-holder-inequality-for-integrals, thm-equality-case-in-holder-inequality]
proof_strategy: "Refute at the endpoint p = 1, q = infinity with f = 1_A and g = 1 on a proper positive-measure subset A. Equality holds, but the functions are not proportional on the whole space."
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Holder's Inequality"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, Section 7.2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Whenever equality holds in Holder's inequality, the two functions themselves are
proportional almost everywhere.

## Facts & Assumptions

**Given:** The endpoint pair $(p,q)=(1,\infty)$ on $[0,1]$ with Lebesgue
measure.

[L1] Holder's inequality includes the endpoint cases
([[thm-holder-inequality-for-integrals]]).

[L2] The strict proportionality criterion on $|f|^p$ and $|g|^q$ was proved
only for $1<p<\infty$
([[thm-equality-case-in-holder-inequality]]).

## Refutation

**Proof technique:** Refute at the endpoint $p=1$, $q=\infty$ with
$f=\chi_A$ and $g=1$ on a proper positive-measure subset $A$. Equality holds,
but the functions are not proportional on the whole space.

1.1 Let $A=[0,1/2]$, let $f:=\chi_A$, and let $g:=\chi_{[0,1]}$. Then [L1, given, algebra]
$$\int_0^1 |fg|\,d\lambda=\lambda(A)=\frac12,\qquad \|f\|_1=\frac12,\qquad \|g\|_\infty=1.$$
So equality holds in Holder:
$$\int_0^1 |fg|\,d\lambda=\|f\|_1\|g\|_\infty.$$

2.1 There is no constant $c$ with $f=cg$ almost everywhere, because on [L2, step 1.1]
$A$ one would need $c=1$ while on $(1/2,1]$ one would need $c=0$. This does not
contradict [L2], because [L2] does not cover the endpoint $p=1$.

3.1 Thus equality in Holder does not force the functions themselves to be [step 1.1, step 2.1]
proportional almost everywhere. ∎
