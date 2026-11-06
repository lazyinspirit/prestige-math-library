---
id: ex-rank16-root-count-does-not-distinguish-lattices
kind: example
title: The norm-2 count does not distinguish the two rank-16 lattices
domain: mathematics
library: physics
category: string-theory
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
deps:
  - def-e8-and-d16plus-rank16-lattices
  - lem-e8-d16plus-are-even-unimodular
  - thm-rank16-even-unimodular-lattice-classification
dependency_roles:
  def-e8-and-d16plus-rank16-lattices: mathematical-premise
  lem-e8-d16plus-are-even-unimodular: mathematical-premise
  thm-rank16-even-unimodular-lattice-classification: mathematical-premise
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Paul Ginsparg, Applied Conformal Field Theory, arXiv:hep-th/9108028v1"
      url: "https://arxiv.org/pdf/hep-th/9108028v1"
      locator: "Chapter 7, printed pp. 104-107, the E8 and rank-16 even self-dual examples."
    - title: "Timo Weigand, Introduction to String Theory, Heidelberg lecture notes, winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "Chapter 6.9, printed pp. 151-154, and §7.2, printed pp. 157-160, the two heterotic rank-16 gauge-group alternatives."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

The two lattices $E_8\oplus E_8$ and $D_{16}^{+}$ are positive even unimodular rank-16 lattices with the same number, $480$, of vectors of norm squared $2$, but they are not isometric. Thus the norm-2 count is an isometry invariant that does not distinguish these two classes.

## Facts & Assumptions

**Given:** The coordinate definitions of $E_8\oplus E_8$ and $D_{16}^{+}$ with the standard positive-definite inner products.

[F1] Both coordinate models are full positive even unimodular rank-16 lattices ([[lem-e8-d16plus-are-even-unimodular]]).

[F2] In coordinates, $E_8=D_8\cup(D_8+h_8)$, where $D_8=\{z\in\mathbb Z^8:\sum_i z_i\in2\mathbb Z\}$ and $h_8=(1/2,\ldots,1/2)$ ([[def-e8-and-d16plus-rank16-lattices]]).

[F3] The rank-16 classification states that the two models are distinct isometry classes ([[thm-rank16-even-unimodular-lattice-classification]]).

## Verification

**Given:** The two coordinate lattices and facts [F1]-[F3].

1.1 An integer vector in $D_8$ has norm squared $2$ exactly when two coordinates are $\pm1$ and the other six are zero; every such vector has even coordinate sum, so there are $4\binom82=112$. A vector in $D_8+h_8$ has eight half-integer coordinates, each of absolute value at least $1/2$, so its norm squared is at least $2$; equality requires every coordinate to be $\pm1/2$. Such a sign pattern belongs to $D_8+h_8$ exactly when it has an even number of minus signs, giving $2^7=128$ vectors. Hence $E_8$ has $112+128=240$ norm-2 vectors. In $E_8\oplus E_8$, a vector $(x,y)$ has norm squared $\|x\|^2+\|y\|^2$; by [F1], the squared norms $\|x\|^2=\|(x,0)\|^2$ and $\|y\|^2=\|(0,y)\|^2$ are even integers, and positive definiteness makes each strictly positive when its component is nonzero. Thus each nonzero component contributes at least $2$, so their sum is $2$ exactly when one component is zero and the other is an $E_8$ norm-2 vector. Thus there are $240+240=480$ such vectors. [F1, F2, algebra]

1.2 An integer vector in $D_{16}$ has norm squared $2$ exactly when two coordinates are $\pm1$ and the rest are zero; all four sign choices for every coordinate pair have even coordinate sum, so there are $4\binom{16}{2}=480$. Every vector in $D_{16}+h_{16}$ has sixteen half-integer coordinates, each of absolute value at least $1/2$, hence norm squared at least $16/4=4$; that coset contributes no norm-2 vectors. Therefore $D_{16}^{+}$ also has exactly $480$ norm-2 vectors. [F1, algebra]

2.1 By [F3], the two lattices are not isometric despite the equal norm-2 counts established in steps 1.1 and 1.2. The counts are an invariant because an isometry preserves the inner product, but they are not a complete invariant. [F3, step 1.1, step 1.2] ∎
