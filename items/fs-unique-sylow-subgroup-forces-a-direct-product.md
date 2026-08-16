---
id: fs-unique-sylow-subgroup-forces-a-direct-product
kind: false-statement
title: "False statement: one unique Sylow subgroup forces the whole group to be a direct product"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-sylow-subgroup-normal-iff-unique, thm-classification-of-groups-of-order-pq, prop-semidirect-product-is-direct-iff-action-is-trivial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

**False claim:** one unique Sylow subgroup forces the whole group to be a direct product. See [[cor-sylow-subgroup-normal-iff-unique]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the false claim.

[L1] A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. ([[cor-sylow-subgroup-normal-iff-unique]]).

[L2] Let $p<q$ be primes. - If $p\nmid(q-1)$, every group of order $pq$ is cyclic. - If $p\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\rtimes C_p$. ([[thm-classification-of-groups-of-order-pq]]).

[L3] The canonical factors of $N\rtimes_\alpha H$ form an internal direct product if and only if $\alpha_h=\operatorname{id}_N$ for every $h\in H$. In that case $N\rtimes_\alpha H$ is the external direct product $N\times H$. ([[prop-semidirect-product-is-direct-iff-action-is-trivial]]).

## Refutation

**Proof technique:** direct.

1.1 Let $C_2$ act on $C_3$ by inversion. The resulting semidirect product $C_3\rtimes C_2$ has order $6$ and is nonabelian. [L1, L2, L3, given, algebra]

2.1 Its canonical $C_3$ is normal and therefore the unique Sylow $3$-subgroup. If the product were direct, the two factors would commute, contradicting the inversion action. This proves the stated claim. [step 1.1, given, algebra] ∎
