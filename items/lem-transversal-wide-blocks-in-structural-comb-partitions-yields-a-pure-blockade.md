---
id: lem-transversal-wide-blocks-in-structural-comb-partitions-yields-a-pure-blockade
kind: lemma
title: "A transversal of wide structural blocks yields the pure blockade outcome"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-structural-comb-partition-hypothesis, def-complete-anticomplete-pure-and-x-sparse-blockades, def-blockade-length-and-width]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Huang, Ju, and Zhou, Erdős–Hajnal beyond the five-vertex path, Claim 5.1.1"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Statement

Assume a structural comb partition for an $(\ell,w)$-comb with $\ell,w\ge4$.
If for every $i\in[\ell]$ one can choose a block $A^i_{j_i}$ with
$|A^i_{j_i}|\ge w/(2\ell)$, then
$(A^1_{j_1},\ldots,A^\ell_{j_\ell})$ is a pure
$(\ell,w/\ell^2)$-blockade.

## Facts & Assumptions

**Given:** One selected partition block $A^i_{j_i}$ of size at least $w/(2\ell)$ for every $i\in[\ell]$.

[F1] Every partition block $A^i_j$ is pure to every vertex in every other comb block $B_k$ with $k\ne i$ ([[def-structural-comb-partition-hypothesis]]).

[F2] A blockade is a sequence of pairwise disjoint nonempty sets with the stated length and width bounds; a pure blockade has every pair of blocks pure ([[def-blockade-length-and-width]], [[def-complete-anticomplete-pure-and-x-sparse-blockades]]).

## Proof

**Proof technique:** direct.

1.1 The selected sets lie in distinct, hence disjoint, comb blocks. Fix $i\ne k$. By [F1], every vertex of $A^k_{j_k}\subseteq B_k$ is individually complete or anticomplete to $A^i_{j_i}$. If two such vertices had opposite relations, then any vertex of the nonempty set $A^i_{j_i}$ would be mixed on $A^k_{j_k}$, contradicting [F1] applied with $i$ and $k$ reversed. Hence the relation is uniform and the pair of selected blocks is pure. [F1]

2.1 Thus the selected sequence is a pure blockade of length $\ell$ and width at least $w/(2\ell)$ by [F2]. [step 1.1, F2]

3.1 Since $\ell\ge4$, $2\ell\le\ell^2$, so $w/(2\ell)\ge w/\ell^2$. Step 2.1 and [F2] give the asserted pure $(\ell,w/\ell^2)$-blockade. [step 2.1, F2, algebra] ∎
