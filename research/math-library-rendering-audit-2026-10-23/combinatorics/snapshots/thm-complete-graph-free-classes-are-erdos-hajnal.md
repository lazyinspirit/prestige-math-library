---
id: thm-complete-graph-free-classes-are-erdos-hajnal
kind: theorem
title: "For every $t\\ge1$, the class of $K_t$-free graphs has the Erdős–Hajnal property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-homogeneous-set-and-homogeneous-number, def-erdos-hajnal-property-and-constant, def-h-free-and-family-free-graph, lem-forbidden-induced-subgraph-classes-are-hereditary, def-standard-complete-bipartite-path-and-cycle-graphs, thm-finite-graph-ramsey-binomial-bound, def-binomial-coefficient, def-real-power, thm-natural-logarithm-laws, thm-exponential-is-strictly-increasing]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "M. Chudnovsky, The Erdos-Hajnal Conjecture: A Survey, sec. 2"
      url: "https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf"
pipeline_run: null
---

## Statement

For every positive integer $t$, the hereditary class of $K_t$-free finite graphs has the Erdős–Hajnal property.

## Facts & Assumptions

**Given:** A positive integer $t$ and the class $\mathcal C_t$ of $K_t$-free finite graphs.

[L1] For a graph $G$, $\operatorname{hom}(G)=\max\{\omega(G),\alpha(G)\}$ ([[def-homogeneous-set-and-homogeneous-number]]).

[L2] A hereditary class has the Erdős–Hajnal property when some $\epsilon>0$ satisfies $\operatorname{hom}(G)\ge|V(G)|^\epsilon$ for every nonempty member $G$ ([[def-erdos-hajnal-property-and-constant]]).

[L3] A graph is $K_t$-free when it has no induced copy of $K_t$ ([[def-h-free-and-family-free-graph]]), and the class of graphs free of any fixed family is hereditary ([[lem-forbidden-induced-subgraph-classes-are-hereditary]]).

[L4] The graph $K_t$ has every pair of its $t$ vertices as an edge, while an empty graph has no edges ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[L5] For positive $a,b$, every graph on at least $\binom{a+b-2}{a-1}$ vertices contains an $a$-clique or a $b$-vertex stable set ([[thm-finite-graph-ramsey-binomial-bound]]).

[L6] The binomial coefficient $\binom mr$ counts the $r$-subsets of an $m$-set ([[def-binomial-coefficient]]).

[L7] For $x>0$ and real $u$, $x^u=\exp(u\log x)$ ([[def-real-power]]).

[L8] The logarithm is strictly increasing, maps $1$ to $0$, and obeys the product and quotient laws ([[thm-natural-logarithm-laws]]).

[L9] The exponential is strictly increasing ([[thm-exponential-is-strictly-increasing]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], $\mathcal C_t$ is hereditary. If $t=1$, it has no nonempty member, so any positive exponent works in [L2]; if $t=2$, every member is empty by [L3] and [L4], so $\operatorname{hom}(G)=|V(G)|$ and exponent $1$ works. [L1, L2, L3, L4]

1.2 Assume $t\ge3$. For all sufficiently large integers $n$, the integer $s=\lfloor\tfrac12n^{1/(t-1)}\rfloor$ satisfies $s\ge t-2$, $s\ge n^{1/t}$, and $s\ge1$; these assertions follow from [L7], [L8], and [L9] because $n^{1/(t-1)}/n^{1/t}=n^{1/(t(t-1))}$ tends to infinity. [given, L7, L8, L9, algebra]

2.1 For such $n$, $t+s-2\le2s$, and hence $\binom{t+s-2}{t-1}\le(t+s-2)^{t-1}\le(2s)^{t-1}\le n$; the first inequality counts ordered choices containing every $(t-1)$-subset. [step 1.2, L6, algebra]

3.1 If $G\in\mathcal C_t$ has sufficiently large order $n$, [L5] with parameters $(t,s)$ and step 2.1 give a $t$-clique or an $s$-vertex stable set; the first is forbidden, so $\operatorname{hom}(G)\ge\alpha(G)\ge s\ge n^{1/t}$. [step 1.2, step 2.1, L1, L3, L5]

4.1 Choose an integer threshold $N\ge2$ beyond which step 3.1 applies, and choose $0<\epsilon\le1/t$ so small that $N^\epsilon\le2$. Such an $\epsilon$ exists by [L7], [L8], and [L9]. [step 3.1, L7, L8, L9, choose]

5.1 If $G\in\mathcal C_t$ has $n\ge N$, then $\operatorname{hom}(G)\ge n^{1/t}\ge n^\epsilon$; if $2\le n<N$, an edge gives a two-vertex clique and a nonedge gives a two-vertex stable set, so $\operatorname{hom}(G)\ge2\ge n^\epsilon$; and if $n=1$, both sides equal $1$. Thus $\epsilon$ is an Erdős–Hajnal constant for $\mathcal C_t$. [step 3.1, step 4.1, L1, L2, L4, algebra] ∎
