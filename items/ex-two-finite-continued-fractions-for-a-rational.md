---
id: ex-two-finite-continued-fractions-for-a-rational
kind: example
title: "A rational number has exactly two finite regular continued-fraction expansions"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-normalized-finite-continued-fraction-uniqueness]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
    - title: "William Stein, Elementary Number Theory: Primes, Congruences, and Secrets"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Example

The rational number $8/5$ has the two finite regular continued-fraction
expansions
$$\frac85=[1;1,1,2]=[1;1,1,1,1],$$
and the normalized one is $[1;1,1,2]$ because its last digit is at least $2$.

## Facts & Assumptions

**Given:** The rational number $8/5$.

[F1] Every rational number has a unique normalized finite regular continued
fraction, and exactly one other finite expansion obtained by splitting the last
digit $a_n\ge2$ into $a_n-1,1$
([[thm-normalized-finite-continued-fraction-uniqueness]]).

## Verification

**Proof technique:** direct.

1.1 Direct calculation gives. [given, algebra]
$$[1;1,1,2] = 1+\frac{1}{1+\frac{1}{1+\frac12}} = 1+\frac{1}{1+\frac23} = 1+\frac35 = \frac85.$$ [given, algebra]

2.1 Likewise. [F1, step 1.1, algebra]
$$[1;1,1,1,1] = 1+\frac{1}{1+\frac{1}{1+\frac{1}{1+\frac11}}} = 1+\frac35 = \frac85,$$
so the same rational has two finite expansions. The last digit of $[1;1,1,2]$
is $2$, so [F1] identifies it as the normalized one and shows there are no
further finite expansions. [F1, step 1.1, algebra] ∎
