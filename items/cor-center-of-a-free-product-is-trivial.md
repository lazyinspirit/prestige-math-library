---
id: cor-center-of-a-free-product-is-trivial
kind: corollary
title: "The center of a free product with at least two nontrivial factors is trivial"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-center-of-a-group, def-reduced-syllable-word-in-a-family-of-groups, thm-normal-form-for-free-products]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Ch. 1, §1.2, Exercise 1"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---
## Statement

If at least two factors in a free product are nontrivial, then its center is the trivial subgroup.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] Let $G$ be a group (def-group). The **center of $G$** is $$Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}.$$ Thus $Z(G)$ consists of the elements that commute with every element of $G$. Its subgroup and normality properties are proved in lem-center-is-normal. ([[def-center-of-a-group]]).

[L2] For groups as in def-group, a **syllable** is a tagged pair $(i,g)$ with $i\in I$ and $g\in G_i\setminus\{e_i\}$. A **reduced syllable word** is a finite list of syllables, indexed by a natural length as in def-natural-numbers, in which adjacent tags differ. The empty list is allowed. At a concatenation seam, adjacent syllables from the same factor are multiplied and an identity result is deleted; this elementary reduction is repeated until the seam is reduced. ([[def-reduced-syllable-word-in-a-family-of-groups]]).

[L3] Every element of $\ast_{i\in I}G_i$ has a unique reduced syllable expression. The identity is represented by the empty word, and no nonempty reduced word represents the identity. ([[thm-normal-form-for-free-products]]).

## Proof

**Proof technique:** contradiction.

1.1 Assume for contradiction that a nonidentity central element has reduced word $z=x_1\cdots x_n$. Choose a nonidentity syllable $g$ from a factor different from the factor of $x_1$. [assume-contra, given, L1, L2, L3]

2.1 Then $gz$ is reduced of length $n+1$. If the last syllable of $z$ lies in the factor of $g$, the word $zg$ reduces to length at most $n$; otherwise it is reduced of length $n+1$ but begins in a different factor from $gz$. [step 1.1]

3.1 Normal-form uniqueness gives $gz\ne zg$ in either case, contradicting centrality. Hence only the identity is central. [step 2.1, discharge-contradiction] ∎
