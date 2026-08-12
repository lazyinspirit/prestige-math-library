---
id: lem-kst-common-neighbour-double-count
kind: lemma
title: "The Kővári–Sós–Turán common-neighbour count and the discrete convexity lower bound for degree sums"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-zarankiewicz-number, def-graph-adjacency-incidence-neighbourhood-and-degree, thm-double-counting, def-binomial-coefficient]
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

Let $G$ be bipartite with parts $A,B$, where $|A|=m$, $|B|=n$, and let $d(b)=|N(b)\cap A|$. If $G$ contains no oriented $K_{s,t}$ with $s$ vertices in $A$, then

$$\sum_{b\in B}\binom{d(b)}s\le(t-1)\binom ms.$$

For $n\ge1$ and any nonnegative integers $d_1,\ldots,d_n$ with sum $E$, moving one unit from a value at least two larger than another cannot increase $\sum_i\binom{d_i}s$. Consequently the minimum occurs when the values differ by at most one. If $E/n\ge s-1$, this gives

$$\sum_{i=1}^n\binom{d_i}s\ge\frac n{s!}\left(\frac En-s+1\right)^s.$$

## Facts & Assumptions

**Given:** The oriented forbidden graph of [[def-zarankiewicz-number]], degrees from [[def-graph-adjacency-incidence-neighbourhood-and-degree]], and binomial coefficients from [[def-binomial-coefficient]].

The theorem [[thm-double-counting]] states that two finite counts agree when they enumerate the same finite incidence set in opposite orders.

## Proof

**Proof technique:** double-count common neighbours, then smooth integer degrees.

1.1 Count pairs $(S,b)$ with $S\subseteq A$, $|S|=s$, and $S\subseteq N(b)$. Counting first by $b$ gives the left side. For fixed $S$, at most $t-1$ vertices of $B$ contain $S$ in their neighbourhood, or those vertices with $S$ form the forbidden $K_{s,t}$. Counting first by $S$ proves the upper bound. [given]

1.2 Partitioning the $s$-subsets of a $d$-element set according to whether they contain one distinguished element gives $\binom d s-\binom{d-1}s=\binom{d-1}{s-1}$, a nondecreasing function of $d$. Thus if $d_i\ge d_j+2$, replacing $(d_i,d_j)$ by $(d_i-1,d_j+1)$ does not increase the binomial sum. Repetition terminates at values $q=\lfloor E/n\rfloor$ and $q+1$. [given]

2.1 For integers $d\ge s-1$, $\binom ds\ge(d-s+1)^s/s!$. Writing $E/n=q+\theta$ with $0\le\theta<1$, the balanced sum is the corresponding linear interpolation between $\binom qs$ and $\binom{q+1}s$; convexity of $y\mapsto y^s$ on nonnegative reals bounds it below by $n(E/n-s+1)^s/s!$. [step 1.2, algebra]

3.1 Steps 1.1-2.1 prove the common-neighbour upper count and the discrete smoothing lower count with the stated threshold. [step 1.1, step 1.2, step 2.1] ∎
