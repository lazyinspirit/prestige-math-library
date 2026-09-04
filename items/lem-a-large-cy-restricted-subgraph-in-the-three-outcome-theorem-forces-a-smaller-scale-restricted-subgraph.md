---
id: lem-a-large-cy-restricted-subgraph-in-the-three-outcome-theorem-forces-a-smaller-scale-restricted-subgraph
kind: lemma
title: "A large cy-restricted subgraph in the three-outcome theorem forces a smaller-scale restricted subgraph"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-cy-restricted-generalized-niceness-yields-three-outcomes, def-h-free-and-family-free-graph]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdos-Hajnal beyond the five-vertex path, Claim 3.3.1"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Let $\mathcal F$ be a generalized nice, leaf-reducible, wonderful finite
family. Assume constants $c\in(0,\tfrac12)$, $c_1,c_2>0$, and
$c_3\ge c_4\ge 4$ satisfy the conclusion of
[[lem-cy-restricted-generalized-niceness-yields-three-outcomes]] for
$\mathcal F$. Let $x\in(0,c^2)$, and let $G$ be an
$\overline{\mathcal F}$-free graph such that:

1. $G$ has no clique and no stable set of size at least
   $$ (x^{c_1+3c_3}|G|)^{c_2}; $$
2. for every integer $k\ge2$, $G$ has no complete or anticomplete
   $(k,|G|/k^{c_1+3c_3})$-blockade.

Then for every $y$ with $cy\in[x,c^2]$ and every $cy$-restricted induced
subgraph $F$ of $G$ with

$$ |F|\ge (cy)^{4c_3/c_4}|G|, $$

there is a $(cy)^{c_4/2}$-restricted induced subgraph of $F$ with at least
$(cy)^{c_3}|F|$ vertices.

## Facts & Assumptions

**Given:** The family $\mathcal F$, the constants $c,c_1,c_2,c_3,c_4$, the parameter $x$, the $\overline{\mathcal F}$-free graph $G$, the two global failure hypotheses, a parameter $y$ with $cy\in[x,c^2]$, and a $cy$-restricted induced subgraph $F$ with $|F|\ge (cy)^{4c_3/c_4}|G|$.

[L1] The three-outcome theorem applies to every $cy$-restricted $\overline{\mathcal F}$-free graph with the displayed constants ([[lem-cy-restricted-generalized-niceness-yields-three-outcomes]]).

[L2] Every induced subgraph of an $\overline{\mathcal F}$-free graph is again $\overline{\mathcal F}$-free ([[def-h-free-and-family-free-graph]]).

## Proof

**Proof technique:** apply the three-outcome theorem to $F$ and rule out its first two outcomes by the assumed global failures in $G$.

1.1 Because $cy\in[x,c^2]$ and $c<1$, we have $y\ge x$ and $y\le c$. Also $cy\ge y^2$ because $y\le c$. Therefore $|F|\ge (cy)^{4c_3/c_4}|G|\ge y^{8c_3/c_4}|G|$. [given, algebra]

2.1 Since $F$ is an induced subgraph of the $\overline{\mathcal F}$-free graph $G$, [L2] implies that $F$ is also $\overline{\mathcal F}$-free. Apply [L1] to $F$. If it gives a clique or stable set in $F$ of size at least $(y^{c_1}|F|)^{c_2}$, then by step 1.1 one has $(y^{c_1}|F|)^{c_2}\ge (y^{c_1+8c_3/c_4}|G|)^{c_2}\ge (x^{c_1+3c_3}|G|)^{c_2}$, because $8c_3/c_4\le 2c_3\le 3c_3$ and $y\ge x$. This contradicts global hypothesis 1. [L1, L2, step 1.1, given, algebra]

2.2 If [L1] gives a complete or anticomplete $(k,|F|/k^{c_3})$-blockade in $F$ with $k\ge y^{-1}$, then $k\ge2$. Using step 1.1 and $k\ge y^{-1}$, one has $|F|/k^{c_3}\ge y^{8c_3/c_4}|G|/k^{c_3}\ge |G|/k^{c_3+8c_3/c_4}\ge |G|/k^{c_1+3c_3}$, since $c_3+8c_3/c_4\le c_1+3c_3$. This contradicts global hypothesis 2. [L1, step 1.1, given, algebra]

3.1 Therefore only the third outcome of [L1] can occur. So $F$ has a $y^{c_4}$-restricted induced subgraph $S$ with $|S|\ge y^{c_3}|F|$. Because $cy\ge y^2$, one has $y^{c_4}=(y^2)^{c_4/2}\le (cy)^{c_4/2}$, so $S$ is also $(cy)^{c_4/2}$-restricted. Since $cy\le y$, we also have $y^{c_3}\ge (cy)^{c_3}$, hence $|S|\ge y^{c_3}|F|\ge (cy)^{c_3}|F|$. This is exactly the claimed smaller-scale restricted induced subgraph. [step 2.1, step 2.2, L1, algebra]

4.1 The claimed induced subgraph exists. [step 3.1] ∎
