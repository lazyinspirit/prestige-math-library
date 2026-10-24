---
id: lem-no-property-star-outcome-forces-a-small-structural-block-partition
kind: lemma
title: "Failure of the first and third property-(*) outcomes forces one small-block structural partition"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-large-y-part-in-a-structural-comb-partition-yields-a-homogeneous-set, lem-transversal-wide-blocks-in-structural-comb-partitions-yields-a-pure-blockade, def-structural-comb-partition-hypothesis]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
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
    - title: "Huang, Ju, and Zhou, Erdős–Hajnal beyond the five-vertex path, proof after Claim 5.1.1"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Statement

Under the hypotheses of the preceding two lemmas, suppose that $G$ has no
clique or stable set of size $w^{c/2}$ and no pure
$(\ell,w/\ell^2)$-blockade. Then for some $i\in[\ell]$,
$$|X_i|\ge w/2,\qquad t_i\ge\ell,\qquad |A^i_j|\le w/(2\ell)\quad(j\in[t_i]).$$

## Facts & Assumptions

**Given:** A structural partition, $c\in(0,1]$, and failure of the first and third displayed outcomes.

[F1] A $Y_i$ of size at least $w/2$ yields a clique or stable set of size at least $w^{c/2}$ ([[lem-large-y-part-in-a-structural-comb-partition-yields-a-homogeneous-set]]).

[F2] A selected block of size at least $w/(2\ell)$ in every partition yields a pure $(\ell,w/\ell^2)$-blockade ([[lem-transversal-wide-blocks-in-structural-comb-partitions-yields-a-pure-blockade]]).

[F3] Each $B_i$ is the disjoint union of $X_i$ and $Y_i$, and $(A^i_1,\ldots,A^i_{t_i})$ partitions $X_i$ ([[def-structural-comb-partition-hypothesis]]).

## Proof

**Proof technique:** contradiction.

1.1 By the contrapositive of [F1], every $Y_i$ has size less than $w/2$. Since $|B_i|\ge w$ and $B_i=X_i\mathbin{\dot\cup}Y_i$ by [F3], every $X_i$ has size at least $w/2$. [F1, F3]

1.2 Suppose every partition had a block of size at least $w/(2\ell)$. Then [F2] would give the excluded pure blockade. Hence some index $i$ has every $A^i_j$ of size less than $w/(2\ell)$, and thus at most that bound. [F2, assume-contra, discharge-contradiction]

2.1 For this $i$, [F3] and step 1.1 give $w/2\le|X_i|=\sum_{j=1}^{t_i}|A^i_j|\le t_iw/(2\ell)$, hence $t_i\ge\ell$. [step 1.1, step 1.2, F3, algebra, discharge-contradiction] ∎
