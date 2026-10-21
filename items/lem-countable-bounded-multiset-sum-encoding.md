---
id: lem-countable-bounded-multiset-sum-encoding
kind: lemma
title: "Countable bounded multisets admit injective sum encodings"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-multiset]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Keyulu Xu, Weihua Hu, Jure Leskovec, and Stefanie Jegelka, How Powerful are Graph Neural Networks?"
      url: "https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf"
      locator: "§4.1, Lemma 5 and Corollary 6; Appendices D and E."
    - title: "Pan Li and Jure Leskovec, Graph Representation Learning"
      url: "https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf"
      locator: "Chapter 5 §5.3.4, Lemma 5.1 and sum-based injective aggregation."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Statement

Let $\mathcal X$ be a countable set and let $M\in\mathbb N_0$. There is a map $\phi:\mathcal X\to\mathbb N_{>0}\subset\mathbb Q$ such that the sum $S\mapsto\sum_{x\in S}\phi(x)$ is injective on finite multisets $S$ of total multiplicity at most $M$. For every irrational $\varepsilon\in\mathbb R\setminus\mathbb Q$, the map

$$
(c,S)\longmapsto(1+\varepsilon)\phi(c)+\sum_{x\in S}\phi(x)
$$

is injective on pairs with $c\in\mathcal X$ and $S$ a finite multiset of total multiplicity at most $M$. For $M=0$, the only allowed neighbor multiset is empty.

## Statement references

[Xu, Hu, Leskovec, and Jegelka, “How Powerful are Graph Neural Networks?”, Lemma 5 and Corollary 6](https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf)

[Li and Leskovec, *Graph Representation Learning*, Chapter 5 §5.3.4, Lemma 5.1](https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf)

## Facts & Assumptions

**Given:** A countable set $\mathcal X$, a bound $M\in\mathbb N_0$, and an irrational real number $\varepsilon$. Prove both injectivity claims.

[A1] Countability means that an injection $\nu:\mathcal X\to\mathbb N_0$ is given.

[F1] [[def-multiset]]: A finite multiset on $\mathcal X$ is its finitely supported multiplicity function $m:\mathcal X\to\mathbb N_0$; its size is the sum of all multiplicities.

## Proof

1.1 Let $B=\max\{2,M+1\}$ and set $\phi(x)=B^{\nu(x)}$. If $M=0$, the only allowed multiset is empty, so its sum encoding is injective. If $M\ge1$ and two allowed multisets $S,T$ have equal sums, for each $j\in\mathbb N_0$ let $d_j$ be the multiplicity in $S$ minus the multiplicity in $T$ of the element with $\nu$-index $j$, and set $d_j=0$ when no element has that index. The sequence $(d_j)$ has finite support and $|d_j|\le M$. If some $d_j\ne0$, let $r$ be its largest such index. Equality of the sums gives $|d_r|B^r=|\sum_{j<r}d_jB^j|\le M(B^r-1)/(B-1)\le B^r-1$, contradicting $|d_r|B^r\ge B^r$. Hence all multiplicities agree and $S=T$. [given, A1, F1, construct, algebra]

2.1 Suppose $(1+\varepsilon)\phi(c)+\sum_{x\in S}\phi(x)=(1+\varepsilon)\phi(c')+\sum_{x\in T}\phi(x)$. Rearranging gives $A+\varepsilon D=0$, where $A=\phi(c)-\phi(c')+\sum_{x\in S}\phi(x)-\sum_{x\in T}\phi(x)$ and $D=\phi(c)-\phi(c')$ are integers. If $D\ne0$, then $\varepsilon=-A/D$ is rational, contrary to the hypothesis. Thus $D=0$; since $B\ge2$ has distinct powers and $\nu$ is injective, $\phi$ is injective and $c=c'$. The equality then reduces to equality of the neighbor sums; step 1.1 gives $S=T$. [given, A1, F1, step 1.1, algebra] ∎
