---
id: thm-the-image-is-the-least-subobject-through-which-a-morphism-factors
kind: theorem
title: "The image is the least subobject through which a morphism factors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism, def-subobject-and-quotient-object, thm-subobjects-and-quotient-objects-form-oppositely-ordered-collections, thm-every-monomorphism-is-the-kernel-of-its-cokernel]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.3"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
pipeline_run: frontier-21
---

## Statement

Let $f:A\to B$ be a morphism in an abelian category, and let
$i_f:\operatorname{im}(f)\to B$ be the image inclusion. Then $f$ factors through
$i_f$, and if $f=n\circ g$ with $n:N\to B$ monic, then

$$[\operatorname{im}(f)]\le[n]$$

in the subobject order of $B$.

## Facts & Assumptions

**Given:** An abelian category, a morphism $f:A\to B$, and a factorization
$f=n\circ g$ through a monomorphism $n:N\to B$.

[L1] Every morphism factors as an epimorphism followed by a monomorphism
([[thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism]]).

[L2] A subobject is a mutual-factorization class of monomorphisms, ordered by
factorization ([[def-subobject-and-quotient-object]],
[[thm-subobjects-and-quotient-objects-form-oppositely-ordered-collections]]).

[L3] Every monomorphism is the kernel of its cokernel
([[thm-every-monomorphism-is-the-kernel-of-its-cokernel]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $f$ admits an epic-monic factorization $f=i_f\circ e_f$, so it factors through its image. [L1, L2]

2.1 Because $f=n g$, the composite $\operatorname{coker}(n)\circ f$ is zero. Using step 1.1, this becomes $\operatorname{coker}(n)\,i_f e_f=0$. Since $e_f$ is epic, $\operatorname{coker}(n)\,i_f=0$. Now [L3] says that $n$ is a kernel of $\operatorname{coker}(n)$, so $i_f$ factors uniquely through $n$. [L1, L3, step 1.1]

3.1 The factorization in step 2.1 is exactly the order relation $[\operatorname{im}(f)]\le[n]$ from [L2]. Hence the image is the least subobject of $B$ through which $f$ factors. [L2, step 2.1] ∎
