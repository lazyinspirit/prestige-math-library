---
id: thm-grp-is-complete-and-cocomplete
kind: theorem
title: "Grp is complete and cocomplete"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-completeness-and-cocompleteness-criteria, prop-groups-and-homomorphisms-form-category-grp, def-free-group, def-normal-closure, thm-quotient-group-universal-property, def-group-homomorphism]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructions-and-criteria
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Categories, Example 4.19.5"
      url: "https://stacks.math.columbia.edu/download/categories.pdf"
    - title: "E. Riehl, Category Theory in Context, Section 3.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

The category $\mathbf{Grp}$ of groups and group homomorphisms has all small
limits and all small colimits.

## Facts & Assumptions

**Given:** A set-indexed family of groups or a parallel pair of group
homomorphisms.

[L1] A category is complete exactly when it has all small products and
equalizers, and cocomplete exactly when it has all small coproducts and
coequalizers ([[cor-completeness-and-cocompleteness-criteria]]).

[F1] Groups and homomorphisms form $\mathbf{Grp}$, and homomorphisms preserve
the group operation and identity
([[prop-groups-and-homomorphisms-form-category-grp]],
[[def-group-homomorphism]]).

[F2] The free group on a set has the unique homomorphic extension property
([[def-free-group]]).

[F3] The normal closure is the least normal subgroup containing a subset
([[def-normal-closure]]).

[L2] A homomorphism out of $G/N$ exists uniquely precisely when the original
homomorphism kills $N$ ([[thm-quotient-group-universal-property]]).

## Proof

**Proof technique:** explicit constructions and the criteria.

1.1 For groups $(G_i)_{i\in I}$, the Cartesian product with componentwise multiplication and inverse is a group. Coordinate projections are homomorphisms, and the unique set-theoretic pairing of a family of homomorphisms is componentwise a homomorphism. This gives every small product, including the one-element group for $I=\varnothing$. [F1, algebra]

1.2 For $f,g:G\rightrightarrows H$, the subset $E=\{x\in G:f(x)=g(x)\}$ is a subgroup. Its inclusion is an equalizer because an equalizing homomorphism has image in $E$ and corestricts uniquely. Thus [L1] gives completeness. [F1, L1]

1.3 For a family $(G_i)$, let $S=\coprod_i\{i\}\times|G_i|$, take the free group $F(S)$, and quotient by the normal closure $N$ of the elements imposing $[i,1]=1$ and $[i,xy]=[i,x][i,y]$. The maps $G_i\to F(S)/N$, $x\mapsto[i,x]N$, are homomorphisms. [F2, F3, algebra]

1.4 For $f,g:G\rightrightarrows H$, let $N$ be the normal closure of $\{f(x)g(x)^{-1}:x\in G\}$. The quotient $q:H\to H/N$ satisfies $qf=qg$. If $h:H\to K$ equalizes $f,g$, it kills those generators and their normal closure, so [L2] gives a unique factor through $q$. Thus $q$ is a coequalizer. [F3, L2, algebra]

2.1 Given homomorphisms $h_i:G_i\to H$, [F2] extends the tagged function to a unique $F(S)\to H$. It kills every defining relation, hence $N$, so [L2] factors it uniquely through $F(S)/N$. Conversely any factor restricts to the $h_i$. This proves the coproduct existence and uniqueness clauses, including the empty family, where the free group is trivial. [F2, F3, L2, step 1.3]

3.1 Steps 1.3, 2.1, and 1.4 give all small coproducts and coequalizers. The dual half of [L1] therefore gives cocompleteness. [L1, step 2.1, step 1.4] ∎
