---
id: thm-braided-coherence-fails-in-the-symmetric-form
kind: theorem
title: "Braided coherence fails in the symmetric form"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-braid-category, thm-the-two-strand-braid-group-is-infinite-cyclic]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Remark 8.2.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 4"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Statement

There exists a braided monoidal category in which the canonical endomorphisms

$$1,\ c_{X,X}^2,\ c_{X,X}^4,\dots$$

of $X\otimes X$ are pairwise distinct. Consequently the symmetric slogan
"every diagram built from associators and braidings commutes" is false for
braided monoidal categories.

## Facts & Assumptions

**Given:** The braid category $\mathcal B$.

[L1] In the braid category, the braiding on $1\otimes1=2$ is the generator $\sigma_1\in B_2$ ([[def-the-braid-category]]).

[L2] The group $B_2$ is infinite cyclic, so its distinct powers of $\sigma_1$ are distinct morphisms ([[thm-the-two-strand-braid-group-is-infinite-cyclic]]).

## Proof

**Proof technique:** direct.

1.1 Take $X:=1$ in the braid category. By [L1], the canonical braiding on $X\otimes X$ is $\sigma_1$, so its even powers are the endomorphisms $\sigma_1^{2m}$ of the object $2$. [given, L1, algebra]

2.1 By [L2], the elements $1,\sigma_1^2,\sigma_1^4,\dots$ are pairwise distinct in $B_2$. Therefore the canonical endomorphisms $1,c_{X,X}^2,c_{X,X}^4,\dots$ are pairwise distinct in this braided monoidal category. [L2, step 1.1, algebra]

3.1 If every formal diagram built from associators and braidings commuted in every braided monoidal category, then the morphisms in step 2.1 would all agree. They do not, so the symmetric-form coherence slogan fails in the braided setting. [step 2.1, contradiction] ∎
