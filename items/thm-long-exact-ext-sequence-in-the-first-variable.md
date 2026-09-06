---
id: thm-long-exact-ext-sequence-in-the-first-variable
kind: theorem
title: "The long exact Ext sequence in the first variable"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-balanced-ext-bifunctor, thm-right-derived-functors-form-a-cohomological-delta-functor, thm-horseshoe-lemma-for-projective-resolutions, thm-naturality-of-the-cohomology-connecting-morphism]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Statement

Assume the Axiom of Dependent Choice. Let $\mathcal A$ be abelian with enough
projectives and enough injectives, and fix supplied projective and injective
resolution data on all its objects.
For $0\to M'\to M\to M''\to0$ and every $N$, there is a natural exact sequence
$$0\to\operatorname{Hom}(M'',N)\to\operatorname{Hom}(M,N)\to\operatorname{Hom}(M',N)\xrightarrow{\partial^0}\operatorname{Ext}^1(M'',N)\to\operatorname{Ext}^1(M,N)\to\cdots,$$
where $\partial^q:\operatorname{Ext}^q(M',N)\to\operatorname{Ext}^{q+1}(M'',N)$; it is natural contravariantly in the short exact sequence and covariantly in $N$.

## Facts & Assumptions

**Given:** A short exact sequence $0\to M'\to M\to M''\to0$ and an object $N$.

## Proof

**Proof technique:** direct.

1.1 Regard $\operatorname{Hom}_{\mathcal A}(-,N)$ as a left exact functor $\mathcal A^{\mathrm{op}}\to\mathbf{Ab}$. A projective resolution in $\mathcal A$ is an injective resolution in $\mathcal A^{\mathrm{op}}$, so [[thm-right-derived-functors-form-a-cohomological-delta-functor]] on the opposite category gives the displayed order and connecting maps. [given, construct]

2.1 Translating the short exact sequence to the opposite category gives the three Hom terms in the displayed order and the maps $\partial^q$. [[def-balanced-ext-bifunctor]] identifies the right-derived groups with Ext, and delta-functor naturality gives contravariant naturality in the short exact sequence. [step 1.1, algebra]


3.1 To check covariance in $N$, fix a projective horseshoe $0\to P'\to P\to P''\to0$ for the given short exact sequence, as supplied by [[thm-horseshoe-lemma-for-projective-resolutions]]. Its degreewise splitting makes $0\to\operatorname{Hom}(P'',N)\to\operatorname{Hom}(P,N)\to\operatorname{Hom}(P',N)\to0$ a short exact sequence of cochain complexes. Postcomposition with $v:N\to N'$ gives a morphism from this sequence to the analogous one with coefficients $N'$. By [[thm-naturality-of-the-cohomology-connecting-morphism]], all connecting squares commute. These are the horseshoe connecting maps used by the right-derived theorem in step 1.1. The comparison isomorphisms transporting the middle horseshoe resolution to the supplied one are induced by precomposition, which commutes with postcomposition by $v$. Thus the transported connecting maps, and hence the balanced Ext sequence of step 2.1, are covariantly natural in $N$. [step 2.1, construct] ∎
