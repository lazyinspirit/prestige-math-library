---
id: lem-two-query-pcps-and-constraint-graphs-are-equivalent
kind: lemma
title: "Two-query PCPs and binary constraint graphs"
status: published
origin: pipeline
deps:
  - def-pcp-class-with-completeness-and-soundness
  - def-constraint-graph-and-labeling-value
  - def-gap-csp
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.2.4, proof of Theorem 18.13 in both directions, printed pp. 358–359"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

Fix a finite nonempty alphabet $\Sigma$. First, let $G$ be an explicit binary
(arity-two) constraint multigraph over $\Sigma$ with $m\ge1$ edges. There is a
nonadaptive verifier whose proof is a labeling $\sigma:V(G)\to\Sigma$, which
uses exactly $\lceil\log_2m\rceil$ random bits and reads at most two symbols,
such that for every fixed labeling
$$\Pr[V^\sigma\text{ rejects}]=\frac{m}{2^{\lceil\log_2m\rceil}}\,\operatorname{UNSAT}_\sigma(G)\ge\frac12\operatorname{UNSAT}_\sigma(G).$$
It has perfect completeness on satisfiable graphs, and if
$\operatorname{UNSAT}(G)\ge\delta$ then every proof is rejected with
probability at least $\delta/2$.

Conversely, fix an input $x$ and a nonadaptive verifier with proof alphabet
$\Sigma$, at most two symbol queries, and $r$ unbiased random bits. One can
construct an explicit binary constraint multigraph $G_{V,x}$ over $\Sigma$
with one edge per random tape (hence at most $2^r$ edges) so that every fixed
proof has exactly the same acceptance fraction as its induced graph labeling,
and every graph labeling extends to a proof with the same fraction. Therefore
$$\operatorname{val}(G_{V,x})=\max_\pi\Pr[V^\pi(x)\text{ accepts}].$$
The graph has $O(2^r)$ vertices and edges for fixed $\Sigma$, is constructible
in time polynomial in $|x|+2^r$, and is polynomial size when $r=O(\log |x|)$.
By the definition of $\operatorname{GapCSP}(c,s)$, its yes and no value
thresholds are exactly the corresponding completeness and soundness
thresholds. If a binary proof convention is required, encoding each $\Sigma$
symbol by a fixed number of bits changes two symbol queries to a constant
number of nonadaptive bit queries without changing the best acceptance
probability.

## Facts & Assumptions

**Given:** The fixed alphabet, explicit graph or verifier input, and the
verifier's fixed proof and random tape in the reverse construction.

[F1] PCP completeness and soundness quantify over fixed proofs; the verifier
has a fixed finite proof alphabet and bounded randomness and queries.
([[def-pcp-class-with-completeness-and-soundness]])

[F2] Each graph edge has an ordered binary relation on its endpoint labels;
loops test the relation on the same label twice.
([[def-constraint-graph-and-labeling-value]])

[F3] For a fixed labeling, value is the fraction of satisfied edges and
unsatisfaction is one minus that fraction; graph value is the maximum over
labelings. ([[def-constraint-graph-and-labeling-value]])

[F4] $\operatorname{GapCSP}(c,s)$ has yes instances with value at least $c$
and no instances with value at most $s$; values strictly between the
thresholds are outside the promise. ([[def-gap-csp]])

## Proof

1.1 For the graph-to-verifier direction, order the $m$ edges and use $r_G=\lceil\log_2m\rceil$ random bits to choose one of $2^{r_G}$ indices. For indices below $m$, query the edge's endpoints in its specified order and accept exactly when their labels satisfy its relation; surplus indices accept without queries. This is nonadaptive, and a loop reads the same proof symbol twice. For a fixed labeling $\sigma$, exactly $m\operatorname{UNSAT}_\sigma(G)$ of the $m$ real-edge indices reject, so the rejection probability is $m\operatorname{UNSAT}_\sigma(G)/2^{r_G}$. Since $2^{r_G}<2m$, this is at least half the labeling's unsatisfaction; taking the minimum over labelings gives the stated graph-unsatisfiability bound. [F1, F2, F3, given, construct, algebra]

1.2 For the verifier-to-graph direction, enumerate its $2^r$ random tapes. On each tape the nonadaptive query addresses are fixed. Make one ordered edge per tape with endpoint vertices equal to the two queried proof positions, and put in its relation exactly the answer pairs on which that tape accepts. If the two addresses coincide, make a loop with relation $\{(a,a): V\text{ accepts on this tape when the repeated location returns }a\}$; its off-diagonal entries are empty. If there is one query, use a fresh dummy vertex as the second endpoint and let the relation ignore its label; if there are no queries, use a loop at a dummy vertex with relation $\Sigma^2$ when that tape accepts and the empty relation when it rejects. Retain parallel edges, including identical tape outcomes, so the graph has exactly $2^r$ edges. [F1, F2, given, construct]

2.1 For any fixed proof $\pi$, label each retained proof-position vertex by its symbol and each dummy by a fixed default symbol in the nonempty alphabet. The edge for a tape is satisfied exactly when that run accepts, so its satisfied-edge fraction equals $\Pr[V^\pi(x)\text{ accepts}]$. Conversely, any graph labeling extends to a proof by assigning its symbols at retained positions and a fixed default symbol at every unused proof position; hence maximizing over proofs gives exactly $\operatorname{val}(G_{V,x})$. Since the proof space is finite, this maximum is attained. [F1, F2, F3, step 1.2, algebra]

3.1 At most two proof positions occur on each of $2^r$ tapes, so after removing unused proof positions the graph has at most $2^{r+1}+1$ vertices, and its fixed-size relation tables and endpoint names can be written in polynomial time in $|x|+2^r$. Thus $r=O(\log |x|)$ gives a polynomial-size graph. The exact value equality in step 2.1, [F3] and [F4] transfer both threshold directions: value at least $c$ iff some fixed proof accepts with probability at least $c$, and value at most $s$ iff every fixed proof accepts with probability at most $s$. For binary proofs, choose $k=\max(1,\lceil\log_2|\Sigma|\rceil)$ and a fixed surjection $D:\{0,1\}^k\to\Sigma$; decoding each queried block makes every bit proof a $\Sigma$-symbol proof, and every symbol proof has a block encoding, so the maximum is unchanged while at most $2k=O(1)$ bits are queried. [F1, F3, F4, step 2.1, discharge-construct, algebra] ∎
