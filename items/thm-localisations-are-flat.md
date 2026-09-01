---
id: thm-localisations-are-flat
kind: theorem
title: "Every localization is flat, and localizing a flat module preserves flatness"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-flat-and-faithfully-flat-modules-and-ring-maps, def-localisation-at-a-prime-ideal, thm-localisation-of-modules-is-exact, thm-localisation-of-modules-is-tensor-product]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stacks Project, Lemma 10.39.18"
      url: "https://stacks.math.columbia.edu/tag/00H9"
    - title: "J. S. Milne, A Primer of Commutative Algebra, §11"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Statement

Let $R$ be a commutative ring and let $S\subseteq R$ be a multiplicative set.

1. The localization $S^{-1}R$ is a flat $R$-algebra.
2. If $M$ is an $S^{-1}R$-module, then $M$ is flat over $R$ if and only if it
   is flat over $S^{-1}R$.
3. In particular, if $N$ is a flat $R$-module, then $S^{-1}N$ is flat over
   $S^{-1}R$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and a multiplicative subset $S\subseteq R$.

[L1] Flatness means exactness of tensoring ([[def-flat-and-faithfully-flat-modules-and-ring-maps]]).

[L2] Localization of modules preserves exact sequences ([[thm-localisation-of-modules-is-exact]]).

[L3] Localization of modules is tensor product: $$ S^{-1}N\cong S^{-1}R\otimes_R N $$ ([[thm-localisation-of-modules-is-tensor-product]]).

[L4] Localization at a prime ideal is the special case $S=R\setminus\mathfrak p$ ([[def-localisation-at-a-prime-ideal]]).

## Proof

**Proof technique:** direct.


1.1 For an exact sequence $A\to B\to C$ of $R$-modules, [L2] gives an exact sequence $$ S^{-1}A\to S^{-1}B\to S^{-1}C. $$ By [L3] this is $$ (S^{-1}R\otimes_R A)\to (S^{-1}R\otimes_R B)\to (S^{-1}R\otimes_R C), $$ so $S^{-1}R$ is flat over $R$ by [L1]. [L1, L2, L3, given]


2.1 Let $M$ be an $S^{-1}R$-module. If $M$ is flat over $S^{-1}R$, then for any exact sequence over $R$ we first tensor with $S^{-1}R$ as in step 1.1 and then tensor over $S^{-1}R$ with $M$; the result is exact, so $M$ is flat over $R$. Conversely, if $M$ is flat over $R$, then every exact sequence of $S^{-1}R$-modules is in particular exact over $R$, and tensoring it with $M$ over $R$ agrees with tensoring over $S^{-1}R$ because the scalars already act through the localization. Hence $M$ is flat over $S^{-1}R$. [L1, L3, step 1.1, algebra]


3.1 If $N$ is flat over $R$, then $S^{-1}N\cong S^{-1}R\otimes_R N$ by [L3]. Applying step 2.1 to the $S^{-1}R$-module $S^{-1}N$ proves it is flat over $S^{-1}R$. [L3, step 2.1]


3.2 Step 2.1 applies in particular to localization at a prime ideal by [L4]. [L4]


4.1 Therefore all three claims hold. [algebra] ∎
