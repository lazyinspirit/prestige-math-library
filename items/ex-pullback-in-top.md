---
id: ex-pullback-in-top
kind: example
title: "A pullback in Top is the fibre product with the subspace topology inherited from the product"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-pullbacks-and-pushouts, thm-top-is-complete-and-cocomplete-and-its-underlying-set-functor-preserves-both, def-product-topology, thm-product-universal-property, def-subspace-topology-top]
justified_by: []
aliases: []
landmark: false
proof_strategy: universal-property
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Proposition 3.6.2"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Example

For continuous maps $X\xrightarrow fZ\xleftarrow gY$, the pullback in
$\mathbf{Top}$ is

$$P=\{(x,y)\in X\times Y:f(x)=g(y)\}$$

with the subspace topology inherited from the product topology on $X\times Y$.

## Facts & Assumptions

**Given:** The displayed continuous maps.

[F1] A pullback represents compatible pairs of maps
([[def-pullbacks-and-pushouts]]).

[L1] Top-limits have the Set-limit as underlying set
([[thm-top-is-complete-and-cocomplete-and-its-underlying-set-functor-preserves-both]]).

[F2] For $P=\prod_iX_i$ with the product topology of [[def-product-topology]],
a function $h:Z\to P$ is continuous exactly when every component $\pi_i\circ h$
is continuous ([[thm-product-universal-property]], claim 2).

[F3] A map into a subspace is continuous exactly when its composite with the
inclusion is continuous, provided its set map lands there
([[def-subspace-topology-top]]).

## Verification

**Proof technique:** universal property.

1.1 The restricted coordinate projections $P\to X,Y$ are continuous by [F2] and [F3], and their composites with $f,g$ agree by definition of $P$. [F2, F3]

1.2 If $r:T\to X$ and $s:T\to Y$ are continuous with $fr=gs$, their unique Set-theoretic pairing lands in $P$ by [L1]. Its composite with $P\hookrightarrow X\times Y$ is $(r,s)$, continuous by [F2], so [F3] makes the factor $T\to P$ continuous. [L1, F2, F3]

2.1 Its uniqueness follows from uniqueness of its two coordinate functions. Thus [F1] identifies the displayed space as the pullback. [F1, step 1.1, step 1.2] ∎
