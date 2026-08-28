---
id: thm-the-join-of-subobjects-is-their-least-upper-bound
kind: theorem
title: "The join of two subobjects is their least upper bound"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-join-of-subobjects-in-an-abelian-category, thm-the-image-is-the-least-subobject-through-which-a-morphism-factors, thm-subobjects-and-quotient-objects-form-oppositely-ordered-collections]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Daniel Murfet, Abelian Categories, Section 4.2"
      url: "https://therisingsea.org/notes/AbelianCategories.pdf"
pipeline_run: frontier-22
---

## Statement

Let $B$ and $C$ be subobjects of an object $A$ in an abelian category. Then the
subobject $B\vee C$ of
[[def-the-join-of-subobjects-in-an-abelian-category]] is the least upper bound
of $B$ and $C$ in the subobject order of $A$.

## Facts & Assumptions

**Given:** Monomorphisms $b:B\rightarrowtail A$ and $c:C\rightarrowtail A$
representing the two subobjects.

[L1] The join $B\vee C$ is the image of the induced map
$[b,c]:B\oplus C\to A$
([[def-the-join-of-subobjects-in-an-abelian-category]]).

[L2] The image of a morphism is the least subobject through which that morphism
factors ([[thm-the-image-is-the-least-subobject-through-which-a-morphism-factors]]).

[L3] A subobject inequality is exactly factorization of representatives
([[thm-subobjects-and-quotient-objects-form-oppositely-ordered-collections]]).

## Proof

**Proof technique:** direct.

1.1 Let $j:J\rightarrowtail A$ be the image inclusion of $[b,c]$. Since $[b,c]\iota_B=b$ and $[b,c]\iota_C=c$ for the biproduct injections, the factorization of $[b,c]$ through $j$ makes both $b$ and $c$ factor through $j$. Thus $B\le J$ and $C\le J$, so $J$ is an upper bound of the two subobjects. [L1, L2, L3]
1.2 Let $n:N\rightarrowtail A$ be any common upper bound. Then $b=n u$ and $c=n v$ for suitable $u:B\to N$ and $v:C\to N$. By the universal property of $B\oplus C$, the induced map satisfies $[b,c]=n[u,v]$. Now [L2] says that the image inclusion $j$ factors through every monomorphism through which $[b,c]$ factors, so $J\le N$. [L2, L3, construct]
2.1 Step 1.1 gives that $J$ is an upper bound, and step 1.2 gives that it lies below every upper bound. By [L3], this is exactly the least-upper-bound claim. [L3, step 1.1, step 1.2] ∎