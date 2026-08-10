---
id: ex-a-four-has-no-subgroup-of-order-six
kind: example
title: '$A_4$ has no subgroup of order $6$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-elements-of-the-alternating-group-a-four, thm-index-two-subgroup-is-normal,
       thm-lagrange]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'T. W. Judson, Abstract Algebra: Theory and Applications, §6.2, Proposition 6.9'
      url: 'https://judsonbooks.org/aata-files/aata-20140815.pdf'
pipeline_run: null
---

## Example

The group $A_4$ has no subgroup of order $6$.

## Facts & Assumptions

**Given:** The explicit list of the elements of $A_4$ and a hypothetical subgroup $H\le A_4$ with $|H|=6$.

[L1] $A_4$ consists of the identity, eight three-cycles, and three products of disjoint transpositions ([[ex-elements-of-the-alternating-group-a-four]]).

[L2] Every subgroup of index $2$ is normal ([[thm-index-two-subgroup-is-normal]]).

[L3] If $H$ is a subgroup of a finite group $G$, then $|G|=[G:H]|H|$ ([[thm-lagrange]]).

## Verification

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $|H|=6$. Since $|A_4|=12$ by [L1], [L3] gives $[A_4:H]=2$, and [L2] makes $H$ normal. [assume-contra, L1, L2, L3]

2.1 The complement of $H$ in $A_4$ has six elements, so it cannot contain all eight three-cycles from [L1]; hence $H$ contains a three-cycle $g$. [step 1.1, L1]

3.1 Write $g=(a\,b\,c)$ and let $d$ be the fourth symbol. The three-cycle $u=(a\,b\,d)$ belongs to $A_4$ by [L1], so normality and direct evaluation give $ugu^{-1}=(b\,d\,c)=:h\in H$. Likewise $h\in A_4$ and $hgh^{-1}=(a\,d\,b)=:k\in H$. Subgroup closure also puts $g^{-1},h^{-1},k^{-1}$ in $H$. [step 2.1, L1]

4.1 The seven elements $e,g,g^{-1},h,h^{-1},k,k^{-1}$ are distinct: their displayed supports or orientations differ. This contradicts $|H|=6$, so no subgroup of order $6$ exists. [step 3.1, L1, discharge-contradiction] ∎
