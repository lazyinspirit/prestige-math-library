---
id: lem-centralizer-of-a-normal-subgroup-is-normal
kind: lemma
title: "The centralizer of a normal subgroup is normal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-centralizer-of-a-subgroup, def-normal-subgroup, def-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Proposition 3.22"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Statement

If $N\trianglelefteq G$, then $C_G(N)\trianglelefteq G$.

## Facts & Assumptions

**Given:** A group $G$ and a normal subgroup $N\trianglelefteq G$.

[L1] $C_G(N)=\{g\in G:gn=ng\text{ for every }n\in N\}$, and it is a subgroup of $G$ ([[def-centralizer-of-a-subgroup]]).

[L2] $N\trianglelefteq G$ means $gNg^{-1}=N$ for every $g\in G$ ([[def-normal-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 Fix $g\in G$, $x\in C_G(N)$ and $n\in N$. By [L2] the element $g^{-1}ng$ lies in $N$, so $x(g^{-1}ng)=(g^{-1}ng)x$ by [L1]. [L1, L2, given]

2.1 Multiplying that identity by $g$ on the left and by $g^{-1}$ on the right gives $(gxg^{-1})n=gx(g^{-1}ng)g^{-1}=g(g^{-1}ng)xg^{-1}=n(gxg^{-1})$, and since $n\in N$ was arbitrary, $gxg^{-1}\in C_G(N)$ by [L1]. [L1, step 1.1, algebra]

3.1 Hence $gC_G(N)g^{-1}\subseteq C_G(N)$ for every $g\in G$. Applying this inclusion to $g^{-1}$ and conjugating by $g$ gives $C_G(N)\subseteq gC_G(N)g^{-1}$, so $gC_G(N)g^{-1}=C_G(N)$ for every $g\in G$, which is normality by [L2]. This proves the stated claim. [L1, L2, step 2.1] ∎
