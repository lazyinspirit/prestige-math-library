---
id: ex-the-galois-connection-of-images-and-preimages-for-a-module-homomorphism
kind: example
title: "Images and preimages of submodules form a concrete Galois connection"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-direct-and-inverse-image-of-subobjects-form-a-galois-connection, cor-inverse-image-preserves-meets-and-direct-image-preserves-joins, cor-the-kernel-and-image-constructions-are-the-inverse-and-direct-images-along-a-morphism]
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
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Section VIII.3"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
pipeline_run: frontier-22
---

## Example

Let $f:\mathbb Z\to\mathbb Z/6$ be reduction modulo $6$. Then direct images and
inverse images of submodules are the familiar image and preimage operations on
subgroups, and they satisfy the Galois-connection inequality
$f_*B\le C \iff B\le f^*C$.

## Facts & Assumptions

**Given:** The homomorphism $f:\mathbb Z\to\mathbb Z/6$.

[L1] Direct and inverse images form a Galois connection
([[thm-direct-and-inverse-image-of-subobjects-form-a-galois-connection]]).

[L2] Inverse images preserve meets and direct images preserve joins
([[cor-inverse-image-preserves-meets-and-direct-image-preserves-joins]]).

[L3] Kernels and ordinary images are the special cases of inverse and direct
images ([[cor-the-kernel-and-image-constructions-are-the-inverse-and-direct-images-along-a-morphism]]).

## Verification

**Proof technique:** direct.

1.1 For the subgroup $2\mathbb Z\le\mathbb Z$, the direct image is $f_*(2\mathbb Z)=\{0,2,4\}\le\mathbb Z/6$. For the subgroup $C=\{0,2,4\}\le\mathbb Z/6$, the inverse image is $f^*C=2\mathbb Z$. Also [L3] identifies $f^*(0)=6\mathbb Z=\ker(f)$ and $f_*(\mathbb Z)=\mathbb Z/6=\operatorname{im}(f)$. [L3, algebra]
2.1 Thus $f_*(2\mathbb Z)\le C$ and $2\mathbb Z\le f^*C$ are the same true statement in this example, exactly as [L1] predicts. Likewise [L2] is visible here: the meet of $\{0,2,4\}$ with $0$ pulls back to $2\mathbb Z\cap 6\mathbb Z=6\mathbb Z$, and the join of $2\mathbb Z$ with $6\mathbb Z$ pushes forward to $\{0,2,4\}$. [L1, L2, step 1.1] ∎