---
id: ex-naturality-of-the-balance-isomorphism
kind: example
title: "Naturality of the balance isomorphism"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
deps: [prop-the-ext-balance-isomorphism-is-natural-in-both-variables, def-hom-double-complex-of-a-projective-and-an-injective-resolution]
generation:
  role: example
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Example

For maps $M'\to M$ and $N\to N'$ draw the square of projective and injective Ext computations and verify that both routes agree through the total-complex comparison.

## Facts & Assumptions

**Given:** Morphisms $a:M'\to M$ and $b:N\to N'$ and supplied projective and injective resolution comparison maps lifting them.

## Verification

**Proof technique:** direct.

1.1 Precomposition by the projective comparison for $a$ and postcomposition by the injective comparison for $b$ define a morphism of first-quadrant Hom double complexes $\operatorname{Hom}(P(M),I(N))\to\operatorname{Hom}(P(M'),I(N'))$. It commutes with both $d_h$ and $d_v$. [given, algebra]

2.1 The induced map on the total complex restricts on the projective edge and the injective edge to the usual maps on their Hom complexes. Passing to cohomology makes the two edge-to-total quasi-isomorphism squares commute; therefore the balance isomorphism intertwines $\operatorname{Ext}^q(M,N)\to\operatorname{Ext}^q(M',N')$ for every $q$. [step 1.1, algebra] ∎

## Remarks

For $q\geq0$, write $E_P^q(M,N)=H^q\operatorname{Hom}(P_\bullet(M),N)$, $E_I^q(M,N)=H^q\operatorname{Hom}(M,I^\bullet(N))$, and $T^q(M,N)=H^q\operatorname{Tot}\operatorname{Hom}(P_\bullet(M),I^\bullet(N))$. The edge-to-total isomorphisms $j_P$ and $j_I$ give the comparison ladder:

```tikzcd
E_P^q(M,N) \arrow[r, "j_P"] \arrow[d, "E_P^q(a,b)"'] & T^q(M,N) \arrow[d, "T^q(a,b)"] & E_I^q(M,N) \arrow[l, "j_I"'] \arrow[d, "E_I^q(a,b)"] \\
E_P^q(M',N') \arrow[r, "j_P"'] & T^q(M',N') & E_I^q(M',N') \arrow[l, "j_I"]
```

Here the vertical maps are induced by precomposition with the comparison lifting $a:M'\to M$ and postcomposition with $b:N\to N'$ (or its injective comparison), as appropriate. Both squares commute by Verification 2.1. Thus the balance map $\beta^q_{M,N}=j_I^{-1}j_P$ satisfies $E_I^q(a,b)\beta^q_{M,N}=\beta^q_{M',N'}E_P^q(a,b)$. The verification above is independent of this illustration.
