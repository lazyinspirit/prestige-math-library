---
id: ex-groups-of-order-thirty
kind: example
title: "The four isomorphism types of groups of order $30$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-groups-of-order-thirty-have-a-normal-sylow-subgroup, thm-classification-of-groups-of-order-pq, lem-actions-related-by-automorphisms-give-isomorphic-semidirect-products, def-external-semidirect-product]
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

## Example

Up to isomorphism, the groups of order $30$ are the four semidirect products $C_{15}\rtimes C_2$ in which the involution acts trivially, by inversion on both prime factors, by inversion on $C_3$ only, or by inversion on $C_5$ only. See [[thm-groups-of-order-thirty-have-a-normal-sylow-subgroup]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] Every group of order $30$ has normal Sylow $3$- and $5$-subgroups and is not simple. ([[thm-groups-of-order-thirty-have-a-normal-sylow-subgroup]]).

[L2] Let $p<q$ be primes. - If $p\nmid(q-1)$, every group of order $pq$ is cyclic. - If $p\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\rtimes C_p$. ([[thm-classification-of-groups-of-order-pq]]).

[L3] Let $\alpha,β:H\to\operatorname{Aut}(N)$ be actions. If $u\in\operatorname{Aut}(N)$ and $v\in\operatorname{Aut}(H)$ satisfy $$\beta_{v(h)}=u\alpha_hu^{-1}\qquad(h\in H),$$ then $$N\rtimes_\alpha H\cong N\rtimes_\beta H$$. ([[lem-actions-related-by-automorphisms-give-isomorphic-semidirect-products]]).

[L4] Let $N$ and $H$ be groups (def-group), and let $\alpha:H\to\operatorname{Aut}(N)$ be an action by automorphisms (def-action-by-automorphisms). The external semidirect product $N\rtimes_\alpha H$ is the set $N\times H$ with multiplication. ([[def-external-semidirect-product]]).

## Verification

**Proof technique:** direct.

1.1 The normal Sylow $3$- and $5$-subgroups commute and form a cyclic normal subgroup $N\cong C_{15}$. A Sylow $2$-subgroup $C_2$ meets $N$ trivially and $NC_2=G$, so $G\cong C_{15}\rtimes C_2$. [L1, L2, L3, L4, given, algebra]

2.1 Under $C_{15}\cong C_3\times C_5$, an involutory automorphism acts independently on the prime factors. Each factor admits either the trivial action or inversion, giving the four actions stated in the Example. [step 1.1, given, algebra]

3.1 The corresponding centers have orders $30$, $1$, $5$, and $3$, respectively, so the groups are pairwise nonisomorphic. Every group of order $30$ arose in step 1.1, proving exhaustiveness. This proves the stated claim. [step 2.1, given, algebra] ∎
