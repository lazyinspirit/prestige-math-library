---
id: lem-enveloping-algebra-of-the-negative-nilpotent-lie-algebra-is-a-domain
kind: lemma
title: "The enveloping algebra of the negative nilpotent Lie algebra is a domain"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Exercise 8.14(i)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Statement

The algebra $U(\mathfrak n^-)$ has no zero divisors.

## Facts & Assumptions

**Given:** The PBW ordered-monomial basis [[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]].

## Proof

**Proof technique:** direct.

1.1 Filter $U(\mathfrak n^-)$ by PBW degree. PBW identifies its associated graded algebra with the symmetric algebra $S(\mathfrak n^-)$, a polynomial algebra and hence a domain. [given]

2.1 If nonzero $x,y$ had $xy=0$, their nonzero leading symbols would have product zero in $S(\mathfrak n^-)$, impossible. Thus $U(\mathfrak n^-)$ is a domain. [step 1.1, contradiction] ∎
