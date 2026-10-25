---
id: ex-conditional-expectation-for-a-small-max-cut-instance
kind: example
title: "Conditional expectation derandomizes Max-Cut on a triangle"
status: published
origin: pipeline
deps:
  - def-optimization-problem-and-approximation-ratio
  - thm-random-cut-has-expected-half-the-edges
  - thm-conditional-expectation-derandomizes-max-cut-half-approximation
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  scraped: []
  references:
    - title: "Cornell CS 4820, Lecture notes on randomized approximation algorithms, §1.1.2 conditional-expectation procedure, PDF pp. 2–3"
      url: "https://www.cs.cornell.edu/courses/cs4820/2011sp/handouts/approx_algs.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Example

Run the conditional-expectation algorithm on $K_3$ with vertices
$v_1,v_2,v_3$ in that order. The initial expected cut size is $3/2$. Fix
$v_1=0$. Setting $v_2=0$ leaves conditional expectation $1$, while setting
$v_2=1$ gives $2$, so choose $v_2=1$. The two choices for $v_3$ then both give
final cut size $2$. Thus the returned cut has $2\ge3/2$ edges.

## Facts & Assumptions

**Given:** The complete graph $K_3$ on $V=\{v_1,v_2,v_3\}$ with edge set $E=\{v_1v_2,v_2v_3,v_1v_3\}$, so $m=3$, and the independent fair bits $b_1,b_2,b_3$ of the conditional-expectation algorithm applied in the vertex order $v_1,v_2,v_3$.

[F1] For a graph with $m$ edges the independent uniform placement crosses $m/2$ edges in expectation, and every placement crosses at most $m$ edges, so $\operatorname{OPT}_{\mathrm{MaxCut}}\le m$. ([[thm-random-cut-has-expected-half-the-edges]])

[F2] The conditional-expectation algorithm fixes the vertices one at a time, choosing at each step the value of the next bit whose conditional expected final cut size is larger, with ties resolved by the value $0$; its conditional expectation is the average of the cut size over the equally weighted completions, and it is computable from the finished and unfinished edge contributions. ([[thm-conditional-expectation-derandomizes-max-cut-half-approximation]])

[F3] For Max-Cut the objective is the number of crossing edges and $\operatorname{OPT}_{\mathrm{MaxCut}}$ is the attained maximum over the finitely many placements. ([[def-optimization-problem-and-approximation-ratio]])

## Verification

**Proof technique:** direct.

1.1 For $K_3$ the edge set has $m=3$ elements, so by [F1] the initial conditional expectation over no fixed bits is the expected cut size $m/2=3/2$; the algorithm of [F2] now fixes $b_1,b_2,b_3$ in order. [F1, F2, given, construct]

2.1 At the first step every one of the three edges has at least one unfixed endpoint, so each contributes $1/2$ to both candidates for $b_1$ and both conditional expectations equal $3/2$; the tie rule of [F2] selects $b_1=0$. With $b_1=0$ fixed, the candidate $b_2=0$ finishes the edge $v_1v_2$ as non-crossing and leaves $v_2v_3$ and $v_1v_3$ with an unfixed endpoint each, giving conditional expectation $0+\tfrac12+\tfrac12=1$, while the candidate $b_2=1$ makes $v_1v_2$ crossing and again leaves the other two edges half-crossing, giving $1+\tfrac12+\tfrac12=2$; since $2>1$ the algorithm fixes $b_2=1$. [F2, step 1.1, algebra]

3.1 With $b_1=0$ and $b_2=1$ fixed, the candidate $b_3=0$ gives crossing edges $v_1v_2$ and $v_2v_3$ but not $v_1v_3$, a cut size of $2$, and the candidate $b_3=1$ gives crossing edges $v_1v_2$ and $v_1v_3$ but not $v_2v_3$, also a cut size of $2$; both conditional expectations equal the actual final cut size because every edge is then finished, and the tie rule fixes $b_3=0$. [F2, step 2.1, algebra]

4.1 The returned placement $(b_1,b_2,b_3)=(0,1,0)$ has cut $\{v_1,v_3\}$ against $\{v_2\}$ with crossing edges $v_1v_2$ and $v_2v_3$, so its cut size is $2\ge3/2=m/2$, and this equals $\operatorname{OPT}_{\mathrm{MaxCut}}(K_3)=2$, since a triangle placement crosses at most two of its three edges and the displayed cut crosses exactly two. The instance therefore realizes the conditional-expectation guarantee with the initial expectation $3/2$. [F1, F3, step 1.1, step 3.1, algebra] ∎
