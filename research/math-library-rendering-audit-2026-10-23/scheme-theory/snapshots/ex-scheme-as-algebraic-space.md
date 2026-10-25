---
id: ex-scheme-as-algebraic-space
kind: example
title: "The affine line is an algebraic space"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
proof_strategy: direct
justified_by: []
aliases: []
deps:
  - def-affine-scheme
  - def-scheme-over-base
  - def-algebraic-space-as-fppf-sheaf
  - def-groupoid-in-schemes-and-etale-equivalence-relation
  - lem-scheme-functor-is-algebraic-space
  - def-fibre-product-schemes-universal-property
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, Chapter 65 (Algebraic Spaces), Lemma 65.6.2"
      url: "https://stacks.math.columbia.edu/download/spaces.pdf"
      locator: "Lemma 65.6.2 (tag 025Z), every scheme is an algebraic space, applied to the affine line"
---

## Example

Assume the Axiom of Choice inherited from the quotient/sheaf and descent
suppliers ([[def-axiom-of-choice]]). Let $k$ be a field and let
$\mathbb A^1_k=\operatorname{Spec}k[x]$ be the affine line
([[def-affine-scheme]], [[def-scheme-over-base]]). Then $\mathbb A^1_k$ is an
algebraic space over $k$ ([[def-algebraic-space-as-fppf-sheaf]]). A
presentation is given by $U=\mathbb A^1_k$, the diagonal equivalence relation
$R=\Delta(\mathbb A^1_k)\subseteq\mathbb A^1_k\times_k\mathbb A^1_k$ with its
two projections ([[def-groupoid-in-schemes-and-etale-equivalence-relation]]),
and the identity $U\to\mathbb A^1_k$; more generally every $k$-scheme is an
algebraic space ([[lem-scheme-functor-is-algebraic-space]]).

## Verification

**Given:** A field $k$, the affine line $\mathbb A^1_k=\operatorname{Spec}k[x]$, and the represented presheaf $h_{\mathbb A^1_k}$.

[F1] Every $k$-scheme $T$ represents an algebraic space $h_T$ over $k$: $h_T$ is an fppf sheaf, its diagonal is representable by schemes, and the identity is a representable etale surjective cover ([[lem-scheme-functor-is-algebraic-space]]).

[F2] The diagonal $\Delta\colon\mathbb A^1_k\to\mathbb A^1_k\times_k\mathbb A^1_k$ is a closed immersion and the two projections $R=\Delta(\mathbb A^1_k)\to\mathbb A^1_k$ are isomorphisms; diagonals are monomorphisms, so $R\to\mathbb A^1_k\times_k\mathbb A^1_k$ is a monomorphism and $R$ is an étale equivalence relation on $\mathbb A^1_k$ with respect to the projections ([[def-groupoid-in-schemes-and-etale-equivalence-relation]], [[def-fibre-product-schemes-universal-property]]).

1.1 $h_{\mathbb A^1_k}$ is an algebraic space over $k$ by [F1] applied to $T=\mathbb A^1_k$, with the identity as its etale scheme cover. [F1]

2.1 The presentation $R\rightrightarrows U\to\mathbb A^1_k$ with $U=\mathbb A^1_k$, $R=\Delta(\mathbb A^1_k)$ and the two projections is exactly the kernel pair of the identity: the projections are isomorphisms, the comparison map $R=U\times_{\mathbb A^1_k}U$ is the diagonal, and the coequalizer of the two projections is $\mathbb A^1_k$ itself; by [F2] the diagonal relation is an equivalence relation on $U$ over $k$, and both projections are etale because they are isomorphisms. This exhibits the asserted presentation, and the final claim that every $k$-scheme is an algebraic space is [F1]. [F1, F2] ∎
