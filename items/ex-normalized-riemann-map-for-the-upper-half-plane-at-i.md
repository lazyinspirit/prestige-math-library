---
id: ex-normalized-riemann-map-for-the-upper-half-plane-at-i
kind: example
title: "The normalized Riemann map from the upper half-plane sending i to 0"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-riemann-mapping-theorem, thm-upper-half-plane-automorphisms-are-real-mobius-maps, thm-blaschke-factor-is-a-disc-automorphism]
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Example

The map

$$f(z):=i\,\frac{z-i}{z+i}$$

is the normalized Riemann map from $\mathbb H$ to $\mathbb D$ sending $i$ to
$0$.

## Facts & Assumptions

**Given:** The upper half-plane $\mathbb H$ and the map $f$ above.

[L1] Automorphisms of the upper half-plane are real Möbius maps ([[thm-upper-half-plane-automorphisms-are-real-mobius-maps]]).

[L2] Blaschke factors are disc automorphisms ([[thm-blaschke-factor-is-a-disc-automorphism]]).

## Verification

**Proof technique:** direct.

1.1 The Cayley transform $C(z)=(z-i)/(z+i)$ maps $\mathbb H$ biholomorphically onto $\mathbb D$, and multiplication by $i$ is a disc automorphism. Thus [L1] and [L2] make $f$ a biholomorphic map $\mathbb H\to\mathbb D$. [L1, L2, given]

2.1 Direct substitution gives $f(i)=0$. Differentiating yields $$f'(z)=i\frac{2i}{(z+i)^2},\qquad f'(i)=\frac12>0.$$ So $f$ has the required normalization at $i$. [step 1.1, algebra] ∎
