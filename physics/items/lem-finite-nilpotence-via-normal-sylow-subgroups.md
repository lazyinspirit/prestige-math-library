---
id: lem-finite-nilpotence-via-normal-sylow-subgroups
kind: lemma
title: "A finite group is nilpotent if and only if all Sylow subgroups are normal, if and only if it is their internal direct product"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-normalizer-condition-for-finite-nilpotent-groups, thm-normalizer-of-a-sylow-normalizer, thm-sylow-first-theorem, lem-distinct-normal-sylow-subgroups-commute, thm-internal-direct-product-recognition, thm-subgroups-quotients-and-finite-products-of-nilpotent-groups, thm-finite-p-groups-are-nilpotent]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

For a finite group $G$, the following are equivalent: $G$ is nilpotent; every Sylow subgroup is normal; and $G$ is the internal direct product of its Sylow subgroups. See [[thm-normalizer-condition-for-finite-nilpotent-groups]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Every proper subgroup of a finite nilpotent group is properly contained in its normalizer. ([[thm-normalizer-condition-for-finite-nilpotent-groups]]).

[L2] Let $P$ be a Sylow $p$-subgroup of a finite group $G$. If $N_G(P)\le H\le G$, then $N_G(H)=H$. In particular, $N_G(N_G(P))=N_G(P)$. ([[thm-normalizer-of-a-sylow-normalizer]]).

[L3] Let $G$ be finite, let $p$ be prime, and write $|G|=p^am$ with $p\nmid m$. Then $G$ has a subgroup of order $p^a$, hence a Sylow $p$-subgroup (def-sylow-p-subgroup). ([[thm-sylow-first-theorem]]).

[L4] Normal Sylow subgroups for distinct primes centralize one another. ([[lem-distinct-normal-sylow-subgroups-commute]]).

[L5] Let $N_0,\ldots,N_{r-1}\trianglelefteq G$. The following are equivalent: the $N_i$ form an internal direct product of $G$; every $g\in G$ has a unique expression $g=n_0\cdots n_{r-1}$ with $n_i\in N_i$; and the multiplication map $\mu:\prod_{i<r}N_i\to G$ is an isomorphism. These statements include the empty family and the one-factor case. ([[thm-internal-direct-product-recognition]]).

[L6] Every subgroup and every quotient of a nilpotent group is nilpotent. Every finite direct product of nilpotent groups is nilpotent; the class of a subgroup or quotient is at most the class of the original group, and the class of a nonempty finite product is at most the maximum of the factor classes. The empty product is the trivial group of class zero. ([[thm-subgroups-quotients-and-finite-products-of-nilpotent-groups]]).

[L7] Every finite $p$-group is nilpotent. The trivial group is included and has nilpotency class zero. ([[thm-finite-p-groups-are-nilpotent]]).

## Proof

**Proof technique:** direct.

1.1 If $G$ is nilpotent and $P$ is Sylow, self-normalization of $N_G(P)$ contradicts the normalizer condition unless $N_G(P)=G$. [L1, L2, L3, L4, L5, L6, L7, given, algebra]

2.1 Normal Sylow subgroups for distinct primes commute and have trivial intersections; their product has order $|G|$, so it is the internal direct product. [step 1.1, given, algebra]

3.1 Conversely each factor is a finite $p$-group and hence nilpotent, and a finite direct product of nilpotent groups is nilpotent. [step 2.1, given, algebra]

4.1 The two degenerate cases are admitted by [L5] and hold. For $G=1$ the family of Sylow subgroups is empty, the empty internal direct product is the trivial group, and $G$ is nilpotent of class zero by [L7]. If $|G|$ is a power of a single prime, the family has one member, namely $G$ itself, the one-factor internal direct product is $G$, and [L7] again makes $G$ nilpotent. This proves the stated claim. [L5, L7, step 3.1, given, algebra] ∎
