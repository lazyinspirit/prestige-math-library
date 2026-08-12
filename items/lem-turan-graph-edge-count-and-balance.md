---
id: lem-turan-graph-edge-count-and-balance
kind: lemma
title: "The exact edge count of $T_{n,r}$ and the unique balancing maximum among complete $r$-partite graphs"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-extremal-number-turan-graph-and-blowup, def-binomial-coefficient, cor-complete-graph-edge-count]
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

Let $r\ge1$ and write $n=qr+a$ with $0\le a<r$. Then

$$e(T_{n,r})=\binom n2-a\binom{q+1}{2}-(r-a)\binom q2=\frac12\left(n^2-a(q+1)^2-(r-a)q^2\right).$$

Among complete $r$-partite graphs on $n$ vertices, this is the maximum edge count. Equality holds exactly when all part sizes differ by at most $1$, hence exactly for a graph isomorphic to $T_{n,r}$. Also

$$e(T_{n,r})\le\frac{r-1}{2r}n^2,$$

with equality exactly when $r$ divides $n$.

## Facts & Assumptions

**Given:** The Turán graph from [[def-extremal-number-turan-graph-and-blowup]] and binomial coefficients from [[def-binomial-coefficient]].

The theorem [[cor-complete-graph-edge-count]] states that a complete graph on $n$ vertices has exactly $\binom n2$ edges.

## Proof

**Proof technique:** count missing within-part pairs and balance parts.

1.1 A complete multipartite graph contains every vertex pair except pairs within one part. If its part sizes are $n_1,\ldots,n_r$, its edge count is $\binom n2-\sum_i\binom{n_i}{2}=\frac12(n^2-\sum_i n_i^2)$. Substituting the $a$ sizes $q+1$ and the remaining sizes $q$ gives both displayed exact formulas. [given]

2.1 If $n_i\ge n_j+2$, moving one vertex from part $i$ to part $j$ changes $\sum_k n_k^2$ by $(n_i-1)^2+(n_j+1)^2-n_i^2-n_j^2=-2(n_i-n_j-1)<0$, so it strictly increases the edge count. Repetition ends exactly when every two part sizes differ by at most $1$, which forces the quotient-remainder sizes and proves both maximality and uniqueness. [step 1.1]

2.2 The identity $\sum_i(n_i-n/r)^2=\sum_i n_i^2-n^2/r\ge0$ gives $e\le(r-1)n^2/(2r)$. Equality requires every $n_i=n/r$, possible exactly when $r$ divides $n$; for the balanced integer sizes the converse is immediate. [step 1.1]

3.1 Steps 1.1-2.2 prove the exact count, balancing characterization, quadratic bound, and both equality cases, including $n=0$ and $r=1$. [step 1.1, step 2.1, step 2.2] ∎
