---
id: cor-classification-of-groups-of-order-one-hundred-five
kind: corollary
title: "There are exactly two isomorphism classes of groups of order $105$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-groups-of-order-one-hundred-five-have-a-normal-sylow-subgroup, thm-sylow-first-theorem, lem-product-with-normal-subgroup, cor-prime-order-group-is-cyclic, thm-conjugation-is-an-automorphism, thm-automorphisms-form-a-group, thm-image-subgroup-and-kernel-normal, thm-automorphisms-of-a-finite-cyclic-group, cor-totient-at-one-and-at-a-prime, thm-lagrange, thm-internal-external-semidirect-product-equivalence, prop-semidirect-product-is-direct-iff-action-is-trivial, thm-classification-of-groups-of-order-pq, thm-order-of-element-in-direct-product, thm-classification-of-cyclic-groups]
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

Up to isomorphism, the groups of order $105$ are the cyclic group $C_{105}$ and the direct product $C_5\times(C_7\rtimes C_3)$, where the action of $C_3$ on $C_7$ is nontrivial. In particular, there are exactly two isomorphism classes. See [[thm-groups-of-order-one-hundred-five-have-a-normal-sylow-subgroup]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple. ([[thm-groups-of-order-one-hundred-five-have-a-normal-sylow-subgroup]]).

[L2] Let $G$ be finite, let $p$ be prime, and write $|G|=p^am$ with $p\nmid m$. Then $G$ has a subgroup of order $p^a$, hence a Sylow $p$-subgroup (def-sylow-p-subgroup). ([[thm-sylow-first-theorem]]).

[L3] If $H\le G$ and $N\mathrel{\trianglelefteq}G$, then $HN$ is a subgroup and $H\cap N\mathrel{\trianglelefteq}H$. Here $HN:=\{hn:h\in H,\ n\in N\}$. ([[lem-product-with-normal-subgroup]]).

[L4] Let $G$ be a finite group such that the positive integer $|G|$ is prime. Then every $g\ne e$ has order $|G|$, satisfies $\langle g\rangle=G$, and hence generates $G$. In particular, $G$ is cyclic. ([[cor-prime-order-group-is-cyclic]]).

[L5] Conjugation $x\mapsto gxg^{-1}$ is an automorphism. For each $g\in G$, the map $c_g:G\to G$, $c_g(x)=gxg^{-1}$, is an automorphism. ([[thm-conjugation-is-an-automorphism]]).

[L6] The automorphisms of a group form a group under composition. ([[thm-automorphisms-form-a-group]]).

[L7] The image of a group homomorphism is a subgroup and its kernel is a normal subgroup. For every group homomorphism $f:G\to H$, one has $\operatorname{im}f\le H$ and $\ker f\mathrel{\trianglelefteq}G$. ([[thm-image-subgroup-and-kernel-normal]]).

[L8] For every $n\ge1$, $$\operatorname{Aut}(C_n)\cong(\mathbb Z/n)^\times.$$ If $C_n=\langle g\rangle$, the unit class $[a]$ corresponds to the automorphism $g\mapsto g^a$. ([[thm-automorphisms-of-a-finite-cyclic-group]]).

[L9] Euler's totient satisfies $\varphi(1)=1$. If $p$ is prime (def-prime), then $$\varphi(p)=p-1.$$. ([[cor-totient-at-one-and-at-a-prime]]).

[L10] Let $G$ be a finite group and $H\le G$. Then $$|G|=[G:H]\,|H|.$$ Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$, $|H|$ divides $|G|$. ([[thm-lagrange]]).

[L11] Let $N,H\le G$. The conditions $$N\trianglelefteq G,\qquad G=NH,\qquad N\cap H=\{1\}$$ hold if and only if both of the following hold: conjugation $\alpha_h(n)=hnh^{-1}$ restricts to an action $\alpha:H\to\operatorname{Aut}(N)$, and the resulting map $$\Phi:N\rtimes_\alpha H\longrightarrow G,\qquad (n,h)\longmapsto nh$$ is an isomorphism carrying the canonical factors onto $N$ and $H$. ([[thm-internal-external-semidirect-product-equivalence]]).

[L12] The canonical factors of $N\rtimes_\alpha H$ form an internal direct product if and only if $\alpha_h=\operatorname{id}_N$ for every $h\in H$. In that case $N\rtimes_\alpha H$ is the external direct product $N\times H$. ([[prop-semidirect-product-is-direct-iff-action-is-trivial]]).

[L13] Let $p<q$ be primes. - If $p\nmid(q-1)$, every group of order $pq$ is cyclic. - If $p\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\rtimes C_p$. ([[thm-classification-of-groups-of-order-pq]]).

[L14] If $g\in G$ and $h\in H$ have finite orders $m,n\ge1$, then in the external direct product $$\operatorname{ord}(g,h)=\operatorname{lcm}(m,n).$$ ([[thm-order-of-element-in-direct-product]]).

[L15] If $G=\langle g\rangle$ is cyclic, then exactly one of the following applies: - if $g$ has infinite order, $G\cong(\mathbb Z,+)$; - if $g$ has finite order $n$, necessarily $n\ge1$, then $G\cong(\mathbb Z/n,+)$. ([[thm-classification-of-cyclic-groups]]).

## Proof

**Proof technique:** direct.

1.1 Let $N_5,N_7$ be the normal Sylow subgroups and let $P$ be Sylow of order $3$. Since $N_7$ is normal, $H=N_7P$ is a subgroup of order $21$; similarly $G=N_5H$ and $N_5\cap H=1$. [L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, L11, L12, L13, L14, L15, given, algebra]

2.1 Conjugation gives a homomorphism $H\to\operatorname{Aut}(N_5)$. Its image order divides $|H|=21$ and $|\operatorname{Aut}(C_5)|=4$, so the image is trivial. [step 1.1, given, algebra]

3.1 Thus $H$ centralizes $N_5$, and the internal product is $G\cong C_5\times H$. [step 1.1, step 2.1, given, algebra]

4.1 The order-$pq$ classification makes $H$ either $C_{21}$ or the unique nonabelian $C_7\rtimes C_3$. In the first case, generators of $C_5$ and $C_{21}$ combine to an element of order $\operatorname{lcm}(5,21)=105$, so $C_5\times H\cong C_{105}$. [step 3.1, given, algebra]

5.1 The two resulting groups are distinguished by abelianness, and exhaustiveness of the order-$21$ classification leaves no third case. This proves the stated claim. [step 3.1, step 4.1, given, algebra] ∎
