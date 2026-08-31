---
id: lem-contraction-is-independent-of-the-basis-formula
kind: lemma
title: "Contraction is independent of the basis formula"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-contraction-of-a-mixed-tensor,
       def-linear-basis,
       def-dual-family-associated-to-a-basis]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Statement

The contraction formula

$$
\sum_i T(e^i,\alpha_2,\ldots,\alpha_r,e_i,v_2,\ldots,v_s)
$$

has the same value for every basis $(e_i)$ and its dual basis $(e^i)$.

## Facts & Assumptions

**Given:** A type $(r,s)$ tensor $T$ with $r,s\ge 1$, fixed arguments $\alpha_2,\ldots,\alpha_r,v_2,\ldots,v_s$, and two bases $(e_i)$ and $(b_j)$ with dual families $(e^i)$ and $(b^j)$.

[F1] Contraction is given by the displayed dual-basis sum ([[def-contraction-of-a-mixed-tensor]]).

[L1] Every vector and every covector expand in a basis and its dual family ([[def-dual-family-associated-to-a-basis]]).

## Proof
**Proof technique:** direct.

1.1 Define the bilinear map $B:V^*\times V\to\mathbb R$ by $B(\beta,w)=T(\beta,\alpha_2,\ldots,\alpha_r,w,v_2,\ldots,v_s)$. Then the two contraction sums are $\sum_i B(e^i,e_i)$ and $\sum_j B(b^j,b_j)$. [F1, given, construct]

2.1 By [L1], any vector $w$ satisfies $w=\sum_i e^i(w)e_i=\sum_j b^j(w)b_j$, and any covector $\beta$ satisfies $\beta=\sum_i \beta(e_i)e^i=\sum_j \beta(b_j)b^j$. Bilinearity of $B$ therefore gives $$ \sum_i B(e^i,e_i)=\sum_{i,j} b^j(e_i)B(e^i,b_j)=\sum_j B\Bigl(\sum_i b^j(e_i)e^i,b_j\Bigr)=\sum_j B(b^j,b_j). $$ [L1, step 1.1, algebra]

3.1 The displayed sum is therefore basis-independent, so contraction is intrinsically defined. [step 2.1] ∎