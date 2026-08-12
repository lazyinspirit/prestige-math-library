---
id: cor-center-of-symmetric-group-is-trivial
kind: corollary
title: '$Z(S_n)$ is trivial for $n\ge3$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-center-of-a-group, thm-symmetric-permutations-are-conjugate-iff-same-cycle-type, thm-centralizer-cardinality-from-cycle-type, lem-conjugating-a-cycle-relabels-its-entries]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Conjugacy Classes"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/conjclass.pdf"
pipeline_run: frontier-11
---

## Statement

$Z(S_n)=\{1\}$ for $n\ge3$. In contrast, $S_0$, $S_1$, and $S_2$ are
abelian, so their centers are the whole groups.

## Facts & Assumptions

**Given:** The symmetric groups $S_n$.

[F1] The center consists of elements commuting with every group element ([[def-center-of-a-group]]).

[F2] Conjugation relabels the entries of a cycle ([[lem-conjugating-a-cycle-relabels-its-entries]]).

[F3] Conjugate permutations are classified by cycle type ([[thm-symmetric-permutations-are-conjugate-iff-same-cycle-type]]), and a centralizer has the cycle-type cardinality formula ([[thm-centralizer-cardinality-from-cycle-type]]).

## Proof

**Proof technique:** contradiction.

1.1 For $n=0,1$, the groups are trivial; $S_2$ has two elements and is cyclic. Hence all three are abelian, as is also consistent with the conjugacy and centralizer descriptions in [F3]. [F3, algebra]

1.2 Let $n\ge3$ and suppose, for contradiction, that $\sigma\ne1$ lies in $Z(S_n)$. Choose $a$ with $b=\sigma(a)\ne a$ and choose $c$ distinct from $a,b$. [assume-contra, choose]

2.1 For $t=(a\,c)$, [F2] gives $\sigma t\sigma^{-1}=(b\,\sigma(c))$. This cannot equal $(a\,c)$ because its support contains $b\notin\{a,c\}$. [F2, step 1.2]

3.1 Thus $\sigma$ does not commute with $t$, contradicting [F1] and the assumption that it is central. Therefore only the identity is central for $n\ge3$, while step 1.1 gives the stated exceptional centers. [F1, step 1.1, step 2.1, discharge-contradiction] ∎
