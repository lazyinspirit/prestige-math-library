---
id: lem-successive-small-integral-geometric-layers-contradict-a-large-x-part
kind: lemma
title: "Successive small integral geometric layers contradict a large X-part"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integral-geometric-layers-of-a-decreasing-block-partition, lem-integral-geometric-layers-have-rounded-cutoff-bounds, thm-geometric-series, thm-real-power-laws, lem-rational-power-monotone, thm-real-power-agrees-with-rational-exponent]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Huang, Ju, and Zhou, Erdős–Hajnal beyond the five-vertex path, final sum in Lemma 5.1"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Statement

Let $(A_1,\ldots,A_t)$ be a decreasing partition of $X$ with $t\ge\ell\ge4$
and every $|A_j|\le w/(2\ell)$. Form its integral geometric layers
$C_1,\ldots,C_q$. If, for every $r<q$, the layer $C_r$ contains a block of
size less than $w/\ell^{5r/2}$, then $|X|<w/2$.

## Facts & Assumptions

**Given:** The decreasing partition, its layers, and one stated small block in every preterminal layer.

[F1] The first layer has at most $\ell^{1/2}$ blocks, and layer $C_{r+1}$ has at most $\ell^{(r+1)/2}$ blocks ([[lem-integral-geometric-layers-have-rounded-cutoff-bounds]]).

[F2] The layers partition the blocks of $X$ in their original nonincreasing order ([[def-integral-geometric-layers-of-a-decreasing-block-partition]]).

[F3] For $|z|<1$, the infinite geometric series sums to $1/(1-z)$ ([[thm-geometric-series]]).

## Proof

**Proof technique:** direct.

1.1 The first-layer contribution is at most $\ell^{1/2}w/(2\ell)=w/(2\sqrt\ell)\le w/4$. [F1, given, algebra]

1.2 A small block in $C_r$ has size less than $w/\ell^{5r/2}$; by the nonincreasing order and [F2], every block in $C_{r+1}$ is no larger. Hence the contribution of $C_{r+1}$ is less than $w\ell^{(r+1)/2-5r/2}=w\ell^{1/2-2r}$. [F1, F2, given, algebra]

2.1 Since $\ell\ge4$, the sum of these latter bounds is at most $$w\sum_{r\ge1}4^{1/2-2r}=\frac w8\sum_{s\ge0}16^{-s}=\frac{2w}{15}$$ by [F3]. [F3, step 1.2, algebra]

3.1 Adding steps 1.1 and 2.1 gives $|X|<w(1/4+2/15)=23w/60<w/2$, as required. [step 1.1, step 2.1, F2, algebra] ∎
