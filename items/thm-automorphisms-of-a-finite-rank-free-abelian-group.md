---
id: thm-automorphisms-of-a-finite-rank-free-abelian-group
kind: theorem
title: ' $\operatorname{Aut}(\mathbb Z^n)\cong GL_n(\mathbb Z)$ for every finite rank $n$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-free-abelian-group, def-group-isomorphism-and-automorphism]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Martin R. Bridson and Karen Vogtmann, Automorphism groups of free groups, surface groups and free abelian groups"
      url: "https://people.maths.ox.ac.uk/bridson/papers/karen05/karen06.pdf"
pipeline_run: null
---

## Statement

For every finite rank $n\ge0$,

$$\operatorname{Aut}(\mathbb Z^n)\cong GL_n(\mathbb Z),$$

where $GL_n(\mathbb Z)$ denotes the group of invertible $n$-by-$n$ arrays of integers under the product

$$(AB)_{ij}=\sum_{k=1}^n A_{ik}B_{kj}.$$

## Facts & Assumptions

**Given:** The free abelian group $\mathbb Z^n$ with its standard basis $e_1,\ldots,e_n$.

[L1] A homomorphism from a free abelian group is determined uniquely by the images of a free basis ([[def-free-abelian-group]]).

[L2] An isomorphism is a bijective group homomorphism, and an automorphism of $G$ is an isomorphism from $G$ to itself ([[def-group-isomorphism-and-automorphism]]).

## Proof

**Proof technique:** direct.

1.1 For an endomorphism $f$, write $f(e_j)=\sum_i a_{ij}e_i$. By [L1], the integer array $A_f=(a_{ij})$ determines $f$, and every integer array arises from a unique endomorphism. [L1]

2.1 A finite-sum calculation on each basis vector gives $A_{f\circ g}=A_fA_g$ with the product displayed in the Statement. Thus $f\mapsto A_f$ is an isomorphism between the endomorphism monoid and the monoid of integer arrays. [step 1.1, algebra]

3.1 An endomorphism $f$ is an automorphism exactly when some endomorphism $g$ satisfies $fg=gf=\operatorname{id}$. If $f$ is an automorphism it is bijective by [L2], so its set-theoretic inverse $g$ exists, and $g$ is a homomorphism because $f\bigl(g(x)+g(y)\bigr)=fg(x)+fg(y)=x+y=f\bigl(g(x+y)\bigr)$ and $f$ is injective; conversely such a $g$ is a two-sided set inverse, so $f$ is bijective and hence an automorphism by [L2]. By step 2.1 this is equivalent to an integer array $A_g$ satisfying $A_fA_g=A_gA_f=I$. These are exactly the elements of $GL_n(\mathbb Z)$. [step 2.1, L2, algebra]

4.1 Restricting the correspondence in step 2.1 to the invertible elements proves the isomorphism. When $n=0$, both sides are the one-element group. [step 2.1, step 3.1] ∎
