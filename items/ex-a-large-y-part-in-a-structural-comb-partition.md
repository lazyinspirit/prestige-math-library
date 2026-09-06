---
id: ex-a-large-y-part-in-a-structural-comb-partition
kind: example
title: "A large Y-part in a structural comb partition"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-large-y-part-in-a-structural-comb-partition-yields-a-homogeneous-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Huang, Ju, and Zhou, Erdős–Hajnal beyond the five-vertex path, proof of Lemma 5.1"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Example

Assume $(\mathcal F_1,\mathcal F_2;\mathcal H)$ satisfies the structural
comb-partition hypothesis and $c=1/2$ is an Erdős–Hajnal constant for both
$\mathcal F_1$-free and $\mathcal F_2$-free graphs. Let $G$ be a finite
$\overline{\mathcal H}$-free graph containing an $(\ell,16)$-comb with
$\ell\ge4$, equipped with a structural partition. If one part has
$|Y_i|=8$, the large-$Y$ lemma supplies a clique or stable set in $G$ of
size at least $16^{1/4}=2$.

## Facts & Assumptions

**Given:** The families satisfying the structural comb-partition hypothesis,
their common Erdős–Hajnal constant $c=1/2$, the finite
$\overline{\mathcal H}$-free graph $G$ and its structurally partitioned
$(\ell,w)$-comb with $\ell\ge4$, $w=16$, and an index $i$ with $|Y_i|=8$.

[F1] Under the structural comb-partition hypothesis, with a common
Erdős–Hajnal constant $c\in(0,1]$ for the two forbidden families and a
structurally partitioned $(\ell,w)$-comb with $\ell,w\ge4$, a part with
$|Y_i|\ge w/2$ yields a clique or stable set in $G$ of size at least
$w^{c/2}$ ([[lem-large-y-part-in-a-structural-comb-partition-yields-a-homogeneous-set]]).

## Verification

**Proof technique:** direct calculation.

1.1 The structural and common-constant hypotheses of [F1] are given. Also $c=1/2\in(0,1]$, $\ell\ge4$, $w=16\ge4$, and $|Y_i|=8=16/2=w/2$. Thus [F1] gives a clique or stable set in $G$ with at least $16^{(1/2)/2}$ vertices. [given, F1]

1.2 The displayed lower bound is $16^{(1/2)/2}=16^{1/4}=2$. [algebra]

2.1 Hence, under the stated structural hypotheses, $G$ has a clique or stable set with at least two vertices, as asserted. [step 1.1, step 1.2] ∎
