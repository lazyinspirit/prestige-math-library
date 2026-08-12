---
id: thm-hypergraph-kovari-sos-turan-bound
kind: theorem
title: "Hypergraph KST: $\\operatorname{ex}(n,K^{(r)}_{s,\\ldots,s})=O_{r,s}(n^{r-1/s^{r-1}})=o(n^r)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-uniform-hypergraph-and-complete-partite-hypergraph, thm-kovari-sos-turan-bound, lem-kst-common-neighbour-double-count, thm-double-counting]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
pipeline_run: null
---

## Statement

For fixed integers $r\ge2$ and $s\ge2$,

$$\operatorname{ex}\bigl(n,K^{(r)}_{s,\ldots,s}\bigr)=O_{r,s}\!\left(n^{r-1/s^{r-1}}\right)=o(n^r).$$

## Facts & Assumptions

**Given:** Complete partite uniform hypergraphs from [[def-uniform-hypergraph-and-complete-partite-hypergraph]], the graph KST base case [[thm-kovari-sos-turan-bound]], the degree-smoothing estimate [[lem-kst-common-neighbour-double-count]], and finite double counting from [[thm-double-counting]].

## Proof

**Proof technique:** induction on uniformity through common links.

1.1 For $r=2$, the ordinary KST theorem gives exponent $2-1/s$, which is the displayed exponent. Assume the result for uniformity $r-1$. Since the assertion is asymptotic, take $n\ge r-1$, and let an $r$-graph $G$ on $n$ vertices have $M$ edges and contain no $K^{(r)}_{s,\ldots,s}$. For each $(r-1)$-set $A$, let $d(A)$ be the number of vertices $v$ with $A\cup\{v\}$ an edge. Then $\sum_A d(A)=rM$. [given]

2.1 Count pairs $(S,A)$ with $|S|=s$ and every $v\in S$ extending $A$ to an edge. The count is $\sum_A\binom{d(A)}s$. For fixed $S$, its common link is an $(r-1)$-graph containing no $K^{(r-1)}_{s,\ldots,s}$, since such a copy together with $S$ would form the forbidden $r$-partite $r$-graph. By induction, $\sum_A\binom{d(A)}s=O_{r,s}(n^s n^{r-1-1/s^{r-2}})$. [step 1.1, given]

3.1 If the average $rM/\binom n{r-1}$ is below $2s$, then $M=O_{r,s}(n^{r-1})$, already stronger than required. Otherwise degree smoothing gives $\sum_A\binom{d(A)}s=\Omega_{r,s}(n^{r-1}(M/n^{r-1})^s)$. Comparing with step 2.1 and solving for $M$ gives $M=O_{r,s}(n^{r-1/s^{r-1}})$, because $r-1+s(1-1/s^{r-1})=r+s-1-1/s^{r-2}$. [step 2.1, given, algebra]

4.1 Induction proves the first asymptotic bound for every $r\ge2$. Since $1/s^{r-1}>0$, division by $n^r$ tends to $0$, proving the $o(n^r)$ clause. [step 1.1, step 3.1, given] ∎
