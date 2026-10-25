---
id: thm-finite-solvable-iff-composition-factors-have-prime-order
kind: theorem
title: "A finite group is solvable if and only if all its composition factors are cyclic of prime order"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-every-finite-group-has-a-composition-series, thm-jordan-holder-theorem-for-groups, thm-subgroups-and-quotients-of-solvable-groups-are-solvable, thm-extensions-and-direct-products-of-solvable-groups-are-solvable, thm-derived-subgroup-is-characteristic-and-abelianization-is-universal, thm-cauchys-theorem-for-finite-groups, lem-every-integer-above-one-has-a-prime-divisor]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Statement

A finite group $G$ is solvable if and only if every composition factor of $G$ is cyclic of prime order. By Jordan-Hölder, it is enough to check any one composition series.

## Facts & Assumptions

**Given:** A finite group $G$.

[L1] Every finite group has a composition series ([[thm-every-finite-group-has-a-composition-series]]).

[L2] Any two composition series have the same factors up to isomorphism and permutation ([[thm-jordan-holder-theorem-for-groups]]).

[L3] Subgroups and quotients of solvable groups are solvable ([[thm-subgroups-and-quotients-of-solvable-groups-are-solvable]]).

[L4] An extension of a solvable group by a solvable group is solvable ([[thm-extensions-and-direct-products-of-solvable-groups-are-solvable]]).

[L7] The derived subgroup of a group is characteristic and hence normal ([[thm-derived-subgroup-is-characteristic-and-abelianization-is-universal]]).

[L5] If a prime $p$ divides the order of a finite group, the group has an element of order $p$ ([[thm-cauchys-theorem-for-finite-groups]]).

[L6] Every integer greater than one has a prime divisor ([[lem-every-integer-above-one-has-a-prime-divisor]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $G$ is solvable. Each composition factor is a quotient of a subgroup of $G$, hence is solvable by [L3]. [assume-hyp, L1, L3]

1.2 Conversely, take a composition series $G=G_0\triangleright\cdots\triangleright G_n=1$ whose factors have prime order. The trivial group $G_n$ is solvable, and if $G_{i+1}$ is solvable then $G_i/G_{i+1}$ is cyclic, hence abelian and solvable, so [L4] makes $G_i$ solvable. Finite upward induction gives $G=G_0$ solvable. [assume-hyp, L1, L4]

2.1 Let $S$ be a simple solvable composition factor. Its derived subgroup $S'$ is normal by [L7], so simplicity gives $S'=1$ or $S'=S$; solvability excludes $S'=S$, and therefore $S$ is abelian. [step 1.1, L7, algebra]

3.1 Choose $1\ne x\in S$. Since $S$ is abelian, $\langle x\rangle\trianglelefteq S$, so simplicity gives $S=\langle x\rangle$. By [L6] choose a prime $p$ dividing $|S|$; [L5] gives a subgroup of order $p$, which is nontrivial and normal in the abelian group $S$, hence equals $S$. Thus $S$ is cyclic of prime order. [step 2.1, L5, L6, choose]

4.1 Steps 1.1, 2.1, and 3.1 prove that solvability forces prime-order composition factors, while step 1.2 proves the converse; [L2] makes the condition independent of the chosen composition series. [step 3.1, step 1.2, L2] ∎
