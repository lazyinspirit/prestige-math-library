---
id: ex-two-involutions-generate-the-infinite-dihedral-group
kind: example
title: "C_2 free-product C_2 is the infinite dihedral group, and the product of its generators has infinite order"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-presentation-of-a-free-product, thm-normal-form-for-free-products, prop-integers-modulo-n-as-a-quotient-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "George D. Torres, Combinatorial Group Theory, §2"
      url: "https://web.ma.utexas.edu/users/gdavtor/notes/comb_group_theory.pdf"
    - title: "B. H. Neumann, Lectures on Topics in the Theory of Infinite Groups, Ch. 9"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr21.pdf"
pipeline_run: null
---
## Example

The free product $C_2\ast C_2$ has presentation $$\langle s,t\mid s^2=e,\ t^2=e\rangle.$$ This is the standard infinite dihedral group $D_\infty$, and $st$ has infinite order.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example.

[L1] Suppose each $G_i$ has a presentation $\langle X_i\mid R_i\rangle$, with the alphabets replaced by disjoint copies. Then $$\ast_iG_i\cong\left\langle\bigsqcup_iX_i\ \middle|\ \bigcup_iR_i\right\rangle.$$ ([[thm-presentation-of-a-free-product]]).

[L2] Every element of $\ast_{i\in I}G_i$ has a unique reduced syllable expression. The identity is represented by the empty word, and no nonempty reduced word represents the identity. ([[thm-normal-form-for-free-products]]).

[L3] For every $n\in\mathbb N$, view $n$ as its canonical nonnegative integer and put $n\mathbb Z:=\{nk:k\in\mathbb Z\}$. Then the left cosets of $n\mathbb Z$ in $(\mathbb Z,+)$ are exactly the congruence classes modulo $n$, and coset addition is the published addition of congruence classes. Thus $$(\mathbb Z,+)/n\mathbb Z=(\mathbb Z/n,+)$$ as the same group on the same underlying set. This includes $n=0$ and $n=1$. ([[prop-integers-modulo-n-as-a-quotient-group]]).

## Verification

**Proof technique:** direct.

1.1 The union-presentation theorem gives the displayed presentation from the two cyclic factors. [given, L1, L2, L3]

2.1 For every $n>0$, the word $(st)^n$ is a nonempty reduced word, so normal form makes it nonidentity. Hence $st$ has infinite order and the group is infinite. [step 1.1] ∎
