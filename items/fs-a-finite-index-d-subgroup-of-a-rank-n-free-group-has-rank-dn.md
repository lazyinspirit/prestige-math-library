---
id: fs-a-finite-index-d-subgroup-of-a-rank-n-free-group-has-rank-dn
kind: false-statement
title: "FALSE: a finite-index d subgroup of a rank n free group has rank dn"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-schreier-index-rank-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Version 4.01"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
---

## Statement

If $H$ has finite index $d$ in a rank-$n$ free group, then $\operatorname{rank}(H)=dn$.

## Facts & Assumptions

**Given:** The false claim above.

[L1] The correct formula is $\operatorname{rank}(H)=1+d(n-1)$
([[thm-schreier-index-rank-formula]]).

## Refutation

**Proof technique:** direct.

1.1 Consider the index-two subgroup $H\le F(a,b)$ consisting of words with even exponent sum in $a$. Here the ambient free group has rank $n=2$ and $d=[F(a,b):H]=2$. [given, construct]

2.1 By [L1], $\operatorname{rank}(H)=1+2(2-1)=3$, whereas the false formula predicts $dn=4$. [L1, step 1.1, algebra]

3.1 Since $3\ne4$, this subgroup refutes the statement. [step 2.1] ∎
