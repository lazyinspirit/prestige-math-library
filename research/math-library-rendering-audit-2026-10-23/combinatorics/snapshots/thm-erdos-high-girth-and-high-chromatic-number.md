---
id: thm-erdos-high-girth-and-high-chromatic-number
kind: theorem
title: "For all positive $k,\\ell$, some finite graph has girth greater than $\\ell$ and chromatic number greater than $k$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-graph-distance-and-girth, def-proper-vertex-colouring-and-chromatic-number, def-standard-complete-bipartite-path-and-cycle-graphs, def-subgraph-induced-subgraph-and-spanning-subgraph, lem-random-graph-short-cycle-expectation, lem-random-graph-independence-number-bound, lem-finite-probability-basic-laws, thm-markov-inequality, thm-finite-union-bound, thm-positive-probability-existence-principle, prop-deletion-alteration-method, lem-exponential-dominates-one-plus-x, cor-exponential-reciprocal-and-positivity, thm-exponential-is-strictly-increasing, thm-real-power-laws, thm-logarithm-slower-than-every-positive-power]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Theorem 4.2.1"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
    - title: "Y. Zhao, MIT 18.218 Probabilistic Method in Combinatorics, Theorem 6.3"
      url: "https://yufeizhao.com/pm/sp19/pmnotes.pdf"
    - title: "M. Bucic, Probabilistic Method, Theorem 4.1"
      url: "https://homepage.univie.ac.at/matija.bucic/wp-content/uploads/2026/01/Probabilistic_Method.pdf"
pipeline_run: null
---

## Statement

For every pair of positive natural numbers $k,\ell$, there is a finite simple graph whose girth is greater than $\ell$ and whose chromatic number is greater than $k$.

## Facts & Assumptions

**Given:** Positive naturals $k,\ell$.

[L1] Girth and chromatic number have their finite-graph definitions; a forest has infinite girth, and in $K_m$ every two distinct vertices are adjacent ([[def-graph-distance-and-girth]], [[def-proper-vertex-colouring-and-chromatic-number]], [[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[L2] Deleting vertices produces an induced subgraph and cannot create a cycle ([[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

[L3] The expected short-cycle count and the independence-number probability obey the bounds in [[lem-random-graph-short-cycle-expectation]] and [[lem-random-graph-independence-number-bound]].

[L4] Markov bounds upper tails of nonnegative variables, the union bound controls finite unions, complements have complementary probabilities, and positive probability gives a witness ([[thm-markov-inequality]], [[thm-finite-union-bound]], [[lem-finite-probability-basic-laws]], [[thm-positive-probability-existence-principle]]).

[L5] Deleting at most one vertex per listed defect leaves a repaired object of size bounded below as in the alteration method ([[prop-deletion-alteration-method]]).

[L6] Real-power laws hold and $\log n$ grows more slowly than every positive power of $n$ ([[thm-real-power-laws]], [[thm-logarithm-slower-than-every-positive-power]]).

[L7] $1+x\le\exp(x)$, the exponential is strictly increasing and positive, and $\exp(-x)=1/\exp(x)$ ([[lem-exponential-dominates-one-plus-x]], [[thm-exponential-is-strictly-increasing]], [[cor-exponential-reciprocal-and-positivity]]).

## Proof

**Proof technique:** constructive.

1.1 If $\ell\le2$, take $K_{k+1}$. It has no cycle of length at most $2$. Every proper colouring gives distinct colours to its pairwise adjacent vertices, while assigning one colour per vertex is proper, so its chromatic number is $k+1$; its girth is therefore greater than $\ell$. [L1, construct]

1.2 For the remaining range $\ell\ge3$, choose a sufficiently large natural $n$ divisible by $2k$, put $s=n/(2k)$, and put $p=n^{-1+1/(2\ell)}$. [given, choose]

2.1 By [L3] and the real-power laws, $\mathbb E[X_{\le\ell}]\le\sum_{r=3}^{\ell}n^{r/(2\ell)}/(2r)$, which is less than $n/4$ for all sufficiently large $n$. Markov then gives $\mathbb P(X_{\le\ell}\ge n/2)<1/2$. [step 1.2, L3, L4, L6]

2.2 Enlarge $n$ so that $s\ge2$ and $\log n<n^{1/(2\ell)}/(16k)$. Then $\binom s2\ge s^2/4$, so $p\binom s2\ge n^{1+1/(2\ell)}/(16k^2)$, whereas $s\log n<n^{1+1/(2\ell)}/(32k^2)$. Thus [L3] bounds $\mathbb P(\alpha(G(n,p))\ge s)$ by an exponential whose exponent is less than $-n^{1+1/(2\ell)}/(32k^2)$. Enlarge $n$ once more so that this exponent is less than $-1$; then [L7] gives a probability less than $\exp(-1)=1/e\le1/2$. [step 1.2, L3, L6, L7, algebra]

3.1 Enlarge the choice of $n$ so both strict bounds hold. The union bound then gives positive probability that $X_{\le\ell}<n/2$ and $\alpha(G)<n/(2k)$ simultaneously; fix such a graph. [step 2.1, step 2.2, L4, choose]

4.1 Delete one vertex from each cycle of length at most $\ell$. Fewer than $n/2$ vertices are deleted, the induced survivor $H$ has more than $n/2$ vertices, and [L2] gives girth greater than $\ell$. [step 3.1, L2, L5, construct]

5.1 If $H$ were $k$-colourable, one colour class would have at least $|V(H)|/k>n/(2k)$ vertices and would be independent, contradicting $\alpha(H)\le\alpha(G)<n/(2k)$. Thus $\chi(H)>k$. [step 3.1, step 4.1, L1, algebra]

6.1 Step 1.1 covers $\ell\le2$, while steps 1.2 through 5.1 cover $\ell\ge3$, completing the construction. [step 1.1, step 5.1, discharge-construct] ∎
