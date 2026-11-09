---
title: An injection identifies its domain with its image
status: draft
research_item: lem-author-b87d598e83f3-injective-image-isomorphism
dependency_level: 0
---

## Prerequisites

None.

## Statement
If $f:G\to H$ is an injective homomorphism of abelian groups, its corestriction $G\to\operatorname{im}f$ is an isomorphism.

## Facts & Assumptions
**Given:** The injective group homomorphism in the statement.

**Goal:** Construct the asserted isomorphism.

## Proof
1.1 The corestriction is a homomorphism and is surjective by the definition of image. It remains injective because the original map is injective. [given]

2.1 Its set-theoretic inverse preserves addition: if $f(a)$ and $f(b)$ are image elements, their sum is $f(a+b)$. Thus the inverse sends their sum to the sum of their inverse images. The corestriction is consequently an isomorphism. [step 1.1, algebra] ∎
