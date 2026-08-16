---
id: ex-sylow-data-for-groups-of-order-at-most-fifteen
kind: example
title: "Sylow data for finite groups of order at most $15$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-sylow-first-theorem, thm-sylow-third-theorem, cor-sylow-subgroup-normal-iff-unique, thm-classification-of-groups-of-order-pq, thm-finite-p-groups-are-nilpotent]
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

For finite groups of positive order at most $15$, the Sylow subgroup orders and possible counts are as follows. An entry $p^a:n_p$ gives the Sylow order and the permitted values of its count.

$$\begin{array}{c|l|l}|G|&\text{Sylow data}&\text{forced normal Sylow subgroups}\\ \hline 1&\text{none}&\text{none}\\ 2&2:1&2\\ 3&3:1&3\\ 4&4:1&4\\ 5&5:1&5\\ 6&2:1\text{ or }3,\ 3:1&3\\ 7&7:1&7\\ 8&8:1&8\\ 9&9:1&9\\ 10&2:1\text{ or }5,\ 5:1&5\\ 11&11:1&11\\ 12&4:1\text{ or }3,\ 3:1\text{ or }4&\text{none from the numerical restrictions alone}\\ 13&13:1&13\\ 14&2:1\text{ or }7,\ 7:1&7\\ 15&3:1,\ 5:1&3,5\end{array}$$

The order-$15$ entry also uses the order-$pq$ classification; no classification at orders $8$ or $12$ is asserted. See [[thm-sylow-first-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] Let $G$ be finite, let $p$ be prime, and write $|G|=p^am$ with $p\nmid m$. Then $G$ has a subgroup of order $p^a$, hence a Sylow $p$-subgroup (def-sylow-p-subgroup). ([[thm-sylow-first-theorem]]).

[L2] Let $|G|=p^am$ with $p\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\equiv1\pmod p,\qquad n_p(G)\mid m.$$. ([[thm-sylow-third-theorem]]).

[L3] A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. ([[cor-sylow-subgroup-normal-iff-unique]]).

[L4] Let $p<q$ be primes. - If $p\nmid(q-1)$, every group of order $pq$ is cyclic. - If $p\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\rtimes C_p$. ([[thm-classification-of-groups-of-order-pq]]).

[L5] Every finite $p$-group is nilpotent. The trivial group is included and has nilpotency class zero. ([[thm-finite-p-groups-are-nilpotent]]).

## Verification

**Proof technique:** direct.

1.1 Factoring each order and applying $n_p\mid |G|/p^a$ together with $n_p\equiv1\pmod p$ gives every entry through order $14$, including the two independent possibilities displayed at order $12$. [L1, L2, L3, L4, L5, given, algebra]

2.1 At order $15$, Sylow III forces $n_5=1$, while the order-$pq$ classification makes the group cyclic and hence also gives $n_3=1$. The entries at orders $8$ and $12$ record only Sylow data, not isomorphism types. [step 1.1, given, algebra]

3.1 At order $1$ no prime divides the group order, so there is no Sylow subgroup to list. This proves the stated claim. [step 2.1, given, algebra] ∎
