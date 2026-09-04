---
id: cor-index-and-coindex-swap-under-negation
kind: corollary
title: "Index and coindex swap under negation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-nondegenerate-critical-point-nullity-index-and-coindex]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct sign reversal
sources:
  scraped: []
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
---

## Statement

Let $f:M\to\mathbb R$ be smooth and let $p$ be a critical point of $f$. Then
$p$ is also a critical point of $-f$, the nullity is unchanged, and the index
and coindex are exchanged:

$$\operatorname{null}_p(-f)=\operatorname{null}_p(f),\qquad \operatorname{ind}_p(-f)=\operatorname{coind}_p(f),\qquad \operatorname{coind}_p(-f)=\operatorname{ind}_p(f).$$

## Facts & Assumptions

**Given:** A smooth function $f:M\to\mathbb R$ and a critical point $p$ of $f$.

[F1] Nullity, index, and coindex are defined from the Hessian by kernel,
negative-definite subspaces, and positive-definite subspaces
([[def-nondegenerate-critical-point-nullity-index-and-coindex]]).

## Proof

**Proof technique:** direct sign reversal.

1.1 Because differentiation is linear, $\operatorname{Hess}_p(-f)=-\operatorname{Hess}_p(f)$. [F1, given, algebra]

2.1 Multiplication by $-1$ does not change the kernel of a bilinear form, so the nullity is unchanged. [F1, step 1.1]

2.2 A subspace is negative definite for $-\operatorname{Hess}_p(f)$ exactly when it is positive definite for $\operatorname{Hess}_p(f)$, and similarly with "positive" and "negative" exchanged. Therefore the index and coindex swap by [F1]. [F1, step 1.1]

3.1 Hence negating $f$ preserves nullity and exchanges index with coindex. [step 2.1, step 2.2] ∎
