---
id: thm-coset-multiplication-well-defined-iff-normal
kind: theorem
title: "Coset multiplication $(gH)(hH)=ghH$ is well defined if and only if $H$ is normal"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-quotient-group, thm-normal-subgroup-characterisations, lem-coset-membership-and-equality, def-subgroup]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. W. Judson, Abstract Algebra: Theory and Applications, Factor Groups and Normal Subgroups"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%253A_Theory_and_Applications_%28Judson%29/10%253A_Normal_Subgroups_and_Factor_Groups/10.01%253A_Factor_Groups_and_Normal_Subgroups"
pipeline_run: null
---

## Statement

Let $H\le G$. The rule on left cosets

$$ (aH)(bH):=abH $$

is independent of the representatives $a$ and $b$ if and only if
$H\mathrel{\trianglelefteq}G$.

## Facts & Assumptions

**Given:** A group $G$ and a subgroup $H\le G$.

[F1] The proposed coset product sends the pair $(aH,bH)$ to $abH$ ([[def-quotient-group]]).

[L1] A subgroup $H$ is normal if and only if $g^{-1}Hg\subseteq H$ for every $g\in G$ ([[thm-normal-subgroup-characterisations]]).

[L2] For left cosets, $aH=a'H$ if and only if $a^{-1}a'\in H$ ([[lem-coset-membership-and-equality]]).

[F2] A subgroup contains products of its elements ([[def-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $H\mathrel{\trianglelefteq}G$ and $aH=a'H$, $bH=b'H$. By [L2], write $a'=ah_1$ and $b'=bh_2$ with $h_1,h_2\in H$. Then $(ab)^{-1}a'b'=b^{-1}h_1bh_2\in H$ by [L1] and [F2], so [L2] gives $abH=a'b'H$. Hence [F1] is independent of both representatives. [given, F1, L1, L2, F2, algebra]

1.2 Conversely, suppose [F1] is well defined. For $h\in H$ and $g\in G$, the equal cosets $H=eH=hH$ give the same product with $gH$, so $gH=(eH)(gH)=(hH)(gH)=hgH$. [given, F1]

2.1 The equality $gH=hgH$ gives $g^{-1}hg\in H$ by [L2]. Thus $g^{-1}Hg\subseteq H$ for every $g$, and [L1] gives $H\mathrel{\trianglelefteq}G$. [step 1.2, L1, L2]

3.1 Step 1.1 proves sufficiency and steps 1.2 and 2.1 prove necessity, establishing the biconditional. [step 1.1, step 1.2, step 2.1] ∎
