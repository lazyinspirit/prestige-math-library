---
id: ex-spectrum-product-ring-disjoint-union
kind: example
title: "The spectrum of a product ring is a disjoint union"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-affine-scheme, def-morphism-affine-schemes-from-ring-map, def-product-ring, def-prime-and-maximal-ideals, thm-stalk-structure-sheaf-prime-localization]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "The Stacks Project, Lemma 26.6.8"
      url: "https://stacks.math.columbia.edu/tag/01HX"
---
## Example

For commutative rings $A,B$, there is a canonical isomorphism of locally
ringed spaces
$$ \operatorname{Spec}(A\times B)\cong\operatorname{Spec}A\sqcup\operatorname{Spec}B. $$

## Facts & Assumptions

**Given:** Commutative rings $A,B$ and the idempotents $e=(1,0)$,
$e'=(0,1)$ in $A\times B$.

[F1] A ring map induces a contraction map on prime spectra
([[def-morphism-affine-schemes-from-ring-map]]).

## Verification

**Proof technique:** direct.

1.1 Since $(1,0)(0,1)=0$, a prime is uniquely either $\mathfrak p\times B$ or $A\times\mathfrak q$ for a prime of one factor. [given, algebra]

2.1 The two families are disjoint open-and-closed sets, and projections give homeomorphisms with the two factor spectra by [F1]. [F1, step 1.1]

2.2 Their localizations are $A_{\mathfrak p}$ and $B_{\mathfrak q}$, so these homeomorphisms identify the structure sheaves. [step 1.1, algebra]

3.1 Hence the spectrum is the claimed disjoint union of locally ringed spaces. [step 2.1, step 2.2] ∎
 
