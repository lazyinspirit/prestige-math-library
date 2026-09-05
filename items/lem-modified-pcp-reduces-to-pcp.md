---
id: lem-modified-pcp-reduces-to-pcp
kind: lemma
title: "Modified PCP many-one reduces to PCP"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-post-correspondence-problem, def-modified-post-correspondence-problem]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.pdf"
    - title: "MIT OpenCourseWare, Lecture 10: Computation History Method"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/resources/lecture-10-computation-history-method/"
---

## Statement

There is a computable many-one reduction from modified PCP to ordinary PCP.

## Facts & Assumptions

**Given:** A modified-PCP instance $$ (x_1,y_1),\dots,(x_n,y_n). $$

[L1] A modified-PCP match is an index sequence beginning with the first domino, by [[def-modified-post-correspondence-problem]].

[L2] An ordinary PCP match is any nonempty domino sequence whose top and bottom concatenations are equal, by [[def-post-correspondence-problem]].

## Proof

**Proof technique:** direct.

1.1 Introduce fresh symbols `*` and `!`. For a word $a_1\cdots a_k$, write $$ L(a_1\cdots a_k):=a_1*a_2*\cdots a_k*,\qquad R(a_1\cdots a_k):=*a_1*a_2*\cdots *a_k. $$ Construct a PCP instance consisting of one special start tile, one shifted tile for each original domino, and one end tile: $$ (*L(x_1),R(y_1)),\qquad (L(x_i),R(y_i))\ (1\le i\le n),\qquad (!,*!). $$ The extra leading `*` appears only on the special start tile, and `!` appears only on the end tile. [L1, L2, given, construct]

2.1 If $1=i_1,i_2,\dots,i_k$ is a modified-PCP match, choose the special start tile, then the ordinary shifted tiles for $i_2,\dots,i_k$, and finally the end tile. The top concatenation is $$ *L(x_1)L(x_{i_2})\cdots L(x_{i_k})!, $$ while the bottom concatenation is $$ R(y_1)R(y_{i_2})\cdots R(y_{i_k})*!. $$ Because the original match satisfies $x_1x_{i_2}\cdots x_{i_k}=y_1y_{i_2}\cdots y_{i_k}$, these two shifted strings agree symbol by symbol: the leading `*` on top supplies the one-symbol offset, every interior `*` matches the next boundary marker on the bottom, and the end tile matches the final extra `*`. Hence the transformed PCP instance has a match. [L1, step 1.1, construct]

2.2 Conversely, let a PCP match be given for the transformed instance. The common concatenated word begins with `*`, and among the available top words only the special start tile begins with `*`, so the first chosen tile is the special start tile. Equality cannot be completed without an end tile. Consider the prefix ending at the first use of that tile. The fresh symbol `!` occurs nowhere else, so its two first occurrences align and this prefix already has equal top and bottom concatenations. Delete the initial `*`, the terminal `!`, and all separator symbols `*` from this matched prefix. The remaining equality is $$ x_1x_{i_2}\cdots x_{i_k}=y_1y_{i_2}\cdots y_{i_k}. $$ Thus the recovered sequence begins with the original first domino and is a modified-PCP match. Later repetitions of the start or end tiles, if present in the original PCP match, are irrelevant because the first completed prefix has already supplied the required modified-PCP match. [L1, L2, step 1.1, construct]

3.1 Steps 2.1 and 2.2 prove the required equivalence, and the construction in step 1.1 is effective. Therefore modified PCP many-one reduces to PCP. [step 2.1, step 2.2] ∎
