---
dependency_level: 1
id: lem-gcd-graph-residual-prime-cleanup
kind: lemma
title: Removing concentrated residual primes from the anatomical condition
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-finite-weighted-gcd-graph
- thm-first-mertens-theorem-for-primes
sources:
  references:
  - title: D. Koukoulopoulos and J. Maynard, On the Duffin–Schaeffer conjecture, Annals192(2020),251–307
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf
proof_strategy: direct
---

## Statement

There is an absolute $T_*>300$ such that the following holds. Suppose $t\ge T_*$ and $G$ is a nontrivial finite weighted GCD graph with $R^\flat(G)=\varnothing$, density $\delta\ge(10/t)^{50}$, and $L_t(v,w)\ge10$ on all edges. There is a subgraph with unchanged vertices and prime data and with edge mass at least $99\mu(E)/100$, quality at least $q(G)/2$, and
$$ \sum_{\substack{p\mid vw/\gcd(v,w)^2\\p\ge t,\ p\notin R(G)}}\frac1p\ge5 $$
on each retained edge.

## Statement references

[Koukoulopoulos–Maynard, §§6–14](https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf)

## Facts & Assumptions

**Given:** All the hypotheses and notation in the Statement. All graph sums and prime data are finite; all constants are absolute.

[F1] The full stated result or definition in [[def-finite-weighted-gcd-graph]] is available, with its hypotheses and constants.

[F2] The full stated result or definition in [[thm-first-mertens-theorem-for-primes]] is available, with its hypotheses and constants.

## Proof

1.1 Write $A(u)=\sum_{p\le u}\log p/p=\log u+E(u)$, with $|E(u)|\le K$ for an absolute $K$, by [F2]. Finite summation by parts between $t$ and $t^{50}$ gives
$$ \sum_{t\le p\le t^{50}}\frac1p=\log50+O\!\left(\frac{K+1}{\log t}\right). $$
Indeed the main integral is $\int_t^{t^{50}}du/(u\log u)=\log50$; the two error endpoints are $O(K/\log t)$ and the error integral $\int_t^{t^{50}}E(u)\,du/(u(\log u)^2)$ is $O(K/\log t)$. Including a prime at the lower endpoint changes the sum by at most $1/t$. Since $\log50<4$, choose an absolute $T_*>300$ so this sum is less than $4$ for every $t\ge T_*$. [F2, given, algebra]

2.1 On every edge put
$$ S(v,w):=\sum_{\substack{p\in R(G),\ p\ge t^{50}\\p\mid vw/\gcd(v,w)^2}}\frac1p. $$
For each residual prime $p$, $R^\flat(G)=\varnothing$ supplies a common exact valuation class with both relative side masses at least $1-C_0/p$. If $p\mid vw/\gcd(v,w)^2$, the valuations differ, so at least one endpoint lies outside that common class. The mass of such pairs is therefore at most $(2C_0/p)\mu(V)\mu(W)$. Reordering the finite edge and prime sums and bounding $\sum_{n\ge y}n^{-2}\le2/y$ for $y\ge2$ gives
$$ \sum_{(v,w)\in E}\mu(v)\mu(w)S(v,w)\le\frac{4C_0\mu(V)\mu(W)}{t^{50}}\le4\cdot10^{-10}\mu(E)<\frac{\mu(E)}{100}, $$
since $\delta\ge(10/t)^{50}$ and $C_0=10^{40}$. [F1, given, algebra]

3.1 Discard precisely the edges with $S(v,w)>1$. By step 2.1 their mass is less than $\mu(E)/100$. Keep the vertices and prime data. The new quality is the old quality times the tenth power of the retained edge fraction, so it is at least $(99/100)^{10}q(G)>q(G)/2$. On every retained edge the residual primes at least $t$ contribute at most $4+S(v,w)\le5$, by step 1.1 and the definition of $S$. The original edge has $L_t\ge10$, so primes outside the original $R(G)$ contribute at least $5$, as required. [F1, step 1.1, step 2.1, algebra] ∎
