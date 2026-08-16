---
id: thm-groups-of-order-one-hundred-five-have-a-normal-sylow-subgroup
kind: theorem
title: "Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sylow-third-theorem, cor-sylow-subgroup-normal-iff-unique, lem-product-with-normal-subgroup, thm-left-coset-action-and-its-kernel, thm-image-subgroup-and-kernel-normal, thm-first-isomorphism-theorem-groups, cor-order-of-a-quotient-group, thm-lagrange, thm-number-of-bijections-of-a-finite-set, thm-classification-of-groups-of-order-pq, cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal, def-simple-group]
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

Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple. See [[thm-sylow-third-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $|G|=p^am$ with $p\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\equiv1\pmod p,\qquad n_p(G)\mid m.$$. ([[thm-sylow-third-theorem]]).

[L2] A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. ([[cor-sylow-subgroup-normal-iff-unique]]).

[L3] If $H\le G$ and $N\mathrel{\trianglelefteq}G$, then $HN$ is a subgroup and $H\cap N\mathrel{\trianglelefteq}H$. Here $HN:=\{hn:h\in H,\ n\in N\}$. ([[lem-product-with-normal-subgroup]]).

[L4] Let $H\le G$. Left multiplication defines a transitive action on $G/H$, and the corresponding homomorphism $\rho:G\to\operatorname{Sym}(G/H)$ has $$\ker\rho=\operatorname{Core}_G(H)\le H.$$ ([[thm-left-coset-action-and-its-kernel]]).

[L5] The image of a group homomorphism is a subgroup and its kernel is a normal subgroup. For every group homomorphism $f:G\to H$, one has $\operatorname{im}f\le H$ and $\ker f\mathrel{\trianglelefteq}G$. ([[thm-image-subgroup-and-kernel-normal]]).

[L6] First isomorphism theorem for groups: $G/\ker f\cong\operatorname{im}f$. For every homomorphism $f:G\to H$, the rule $g\ker f\mapsto f(g)$ is an isomorphism from $G/\ker f$ onto $\operatorname{im}f$. ([[thm-first-isomorphism-theorem-groups]]).

[L7] Let $N\mathrel{\trianglelefteq}G$. If $[G:N]$ is finite, then the quotient group $G/N$ is finite and $$|G/N|=[G:N].$$ In particular, if $G$ is finite, then $$|G/N|=\frac{|G|}{|N|}.$$. ([[cor-order-of-a-quotient-group]]).

[L8] Let $p<q$ be primes. - If $p\nmid(q-1)$, every group of order $pq$ is cyclic. - If $p\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\rtimes C_p$. ([[thm-classification-of-groups-of-order-pq]]).

[L9] If $N\trianglelefteq G$ and $P$ is a normal Sylow $p$-subgroup of $N$, then $P\trianglelefteq G$. ([[cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal]]).

[L10] A group $G$ is simple if $G\ne\{1\}$ and its only normal subgroups are $\{1\}$ and $G$, where normality is as in def-normal-subgroup. ([[def-simple-group]]).

[L11] If $H\le G$ and $G$ is finite, then $|G|=[G:H]|H|$; in particular $|H|$ divides $|G|$. ([[thm-lagrange]]).

[L12] A set of cardinality $n$ has exactly $n!$ bijections to itself; in particular the symmetric group on three points has order $3!=6$. ([[thm-number-of-bijections-of-a-finite-set]]).

## Proof

**Proof technique:** direct.

1.1 The nonunique counts $n_5=21$ and $n_7=15$ would already contribute $84+90$ distinct nonidentity elements, so at least one of the two Sylow subgroups is normal. [L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, given, algebra]

2.1 Let $P$ be the normal Sylow subgroup supplied by step 1.1 and let $Q$ be a Sylow subgroup for the other prime. By [L3], $H=PQ$ is a subgroup. Its multiplication map $P\times Q\to PQ$ has fibres indexed by $P\cap Q=1$, so $|H|=|P||Q|=35$. [L3, step 1.1, given, algebra]

3.1 The action on the three left cosets has kernel $K\subseteq H$. By [L6], $G/K$ is isomorphic to a subgroup of the symmetric group on three points, so [L11] and [L12] give $[G:K]\mid6$. Also [L7] and [L11] give $[G:K]\mid105$, while $K\le H$ gives $3=[G:H]\mid[G:K]$. Hence $[G:K]=3=[G:H]$, so $K=H$ and $H\trianglelefteq G$. [L4, L5, L6, L7, L11, L12, step 2.1, given, algebra]

4.1 The order-$pq$ classification [L8] makes $H$ cyclic, and its Sylow $5$- and $7$-subgroups are normal in $H$ and therefore normal in $G$ by [L9]. Either is a nontrivial proper normal subgroup of $G$, so [L10] also shows that $G$ is not simple. [L8, L9, L10, step 3.1, given] ∎
