---
id: thm-the-structural-comb-partition-criterion-implies-property-star
kind: theorem
title: "The structural comb-partition criterion implies property (*)"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-property-star-for-a-finite-family, def-structural-comb-partition-hypothesis, lem-large-y-part-in-a-structural-comb-partition-yields-a-homogeneous-set, lem-no-property-star-outcome-forces-a-small-structural-block-partition, def-integral-geometric-layers-of-a-decreasing-block-partition, lem-a-wide-integral-geometric-layer-forces-a-property-star-blockade, lem-successive-small-integral-geometric-layers-contradict-a-large-x-part, def-comb-in-a-graph, def-real-power, thm-real-power-laws, thm-natural-logarithm-laws, thm-exponential-is-strictly-increasing]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Huang, Ju, and Zhou, Erdős–Hajnal beyond the five-vertex path, Lemma 5.1"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Statement

If $(\mathcal F_1,\mathcal F_2;\mathcal H)$ satisfies the structural
comb-partition hypothesis, then $\mathcal H$ has property $(*)$. More
precisely, if $c\in(0,1]$ is a common Erdős–Hajnal constant for
$\mathcal F_1$-free and $\mathcal F_2$-free graphs, then
$$c_1=c_3=c/4,\qquad c_2=10/c$$
suffice in the definition of property $(*)$.

## Facts & Assumptions

**Given:** The uniform structural hypothesis, a common $c\in(0,1]$, and a special-vertex $(\ell,w)$-comb in an $\overline{\mathcal H}$-free graph, where $\ell,w\ge4$.

[F1] Property $(*)$ asks for its three stated outcomes for every such special-vertex comb ([[def-property-star-for-a-finite-family]]).

[F2] A large $Y_i$ gives a clique or stable set of size at least $w^{c/2}$ ([[lem-large-y-part-in-a-structural-comb-partition-yields-a-homogeneous-set]]).

[F3] Failure of the first and third outcomes produces a partition of some $X_i$ with $|X_i|\ge w/2$, at least $\ell$ blocks, and every block at most $w/(2\ell)$ ([[lem-no-property-star-outcome-forces-a-small-structural-block-partition]]).

[F4] A wide preterminal integral layer gives a complete or anticomplete $(k,w/k^{10/c})$-blockade with $k\ge\ell^{cr/4}$ ([[lem-a-wide-integral-geometric-layer-forces-a-property-star-blockade]]).

[F5] If every preterminal layer is small, then its decreasing partition has total size less than $w/2$ ([[lem-successive-small-integral-geometric-layers-contradict-a-large-x-part]]).

## Proof

**Proof technique:** contradiction.

1.1 Set $c_1=c_3=c/4$ and $c_2=10/c$. We verify the three alternatives required by [F1] for an arbitrary given comb. [F1, choose]

1.2 Suppose outcome one and outcome three both fail. By [F3], choose the resulting partition of some $X_i$ and relabel its finitely many blocks in nonincreasing order of size. Relabelling preserves the partition, its block bounds, purity, and the isomorphism type of its pattern graph, as well as the cross-block condition in the structural hypothesis. The relabelled partition is therefore decreasing and still structural; form its integral layers. [F3, assume-contra, choose]

1.3 Otherwise every preterminal layer has a block below its threshold; [F5] then gives $|X_i|<w/2$, contradicting [F3]. [F3, F5, assume-contra, discharge-contradiction]

2.1 If some $Y_i$ has size at least $w/2$, [F2] gives a clique or stable set of size at least $w^{c/2}\ge w^{c/4}=w^{c_1}$; this is outcome one. [F2, step 1.1, algebra]

2.2 If a preterminal layer $C_r$ is wide at the threshold $w/\ell^{5r/2}$, [F4] gives a complete or anticomplete blockade of width at least $w/k^{c_2}$. Since $r\ge1$, its length parameter satisfies $k\ge\ell^{cr/4}\ge\ell^{c/4}=\ell^{c_3}$, so outcome two holds. [F4, step 1.1, algebra]

3.1 Thus failure of outcomes one and three forces outcome two, while step 2.1 handles the remaining case. The three outcomes in [F1] therefore always hold, proving property $(*)$. [F1, step 2.1, step 2.2, step 1.3, discharge-contradiction] ∎
