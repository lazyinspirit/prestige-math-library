---
id: thm-solvable-iff-it-has-an-abelian-factor-series
kind: theorem
title: "A group is solvable if and only if it has a subnormal series with abelian factors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-subnormal-normal-series-refinement-and-equivalence, def-derived-series-solvable-group-and-derived-length, lem-homomorphisms-respect-commutators-and-derived-series, thm-quotient-abelian-iff-contains-commutator-subgroup]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
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

A group $G$ is solvable if and only if it has a finite subnormal series
$$G=G_0\trianglerighteq G_1\trianglerighteq\cdots\trianglerighteq G_n=1$$
whose factors $G_i/G_{i+1}$ are abelian. Moreover, for every such series, $G^{(i)}\le G_i$ for $0\le i\le n$.

## Facts & Assumptions

**Given:** A group $G$.

[F1] A subnormal series has $G_{i+1}\trianglelefteq G_i$ at every adjacent pair ([[def-subnormal-normal-series-refinement-and-equivalence]]).

[F2] $G$ is solvable exactly when $G^{(n)}=1$ for some $n$ ([[def-derived-series-solvable-group-and-derived-length]]).

[L1] Derived series terms are functorial under inclusions and quotient maps ([[lem-homomorphisms-respect-commutators-and-derived-series]]).

[L2] If $N\trianglelefteq H$, then $H/N$ is abelian if and only if $H'\le N$ ([[thm-quotient-abelian-iff-contains-commutator-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $G$ is solvable, and choose $n$ with $G^{(n)}=1$. The derived chain $G=G^{(0)}\trianglerighteq\cdots\trianglerighteq G^{(n)}=1$ is subnormal, and [L2] makes every factor $G^{(i)}/G^{(i+1)}$ abelian. [assume-hyp, F1, F2, L2]

1.2 Conversely, suppose $G=G_0\trianglerighteq\cdots\trianglerighteq G_n=1$ is subnormal with abelian factors. By [L2], $G_i'\le G_{i+1}$ for every $i<n$. [assume-hyp, F1, L2]

2.1 Starting with $G^{(0)}=G_0$, if $G^{(i)}\le G_i$, then [L1] gives $G^{(i+1)}=(G^{(i)})'\le G_i'\le G_{i+1}$; hence $G^{(i)}\le G_i$ for every $i\le n$. [step 1.2, L1, F2]

3.1 Step 2.1 gives $G^{(n)}\le G_n=1$, so $G$ is solvable by [F2]. Steps 1.1 and 3.1 prove both directions. [step 1.1, step 2.1, F2] ∎
