---
id: ex-normalized-riemann-map-for-a-sector-with-branch-choice
kind: example
title: "A normalized Riemann map for a sector with an explicit branch choice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-riemann-mapping-theorem, thm-sector-power-map-is-biholomorphic-on-narrow-sectors, thm-upper-half-plane-automorphisms-are-real-mobius-maps, thm-blaschke-factor-is-a-disc-automorphism]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, Ch. 3 §4.2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Example

On the sector

$$S:=\{\,re^{i\theta}:r>0,\ |\theta|<\pi/4\,\},$$

the map

$$f(z):=\frac{z^2-1}{z^2+1}$$

is a normalized Riemann map sending $1$ to $0$.

## Facts & Assumptions

**Given:** The sector $S$ and the map $f$ above.

[L1] The square map biholomorphically sends $S$ onto the right half-plane ([[thm-sector-power-map-is-biholomorphic-on-narrow-sectors]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $z\mapsto z^2$ sends $S$ biholomorphically onto the right half-plane. Composing with the Cayley map $w\mapsto(w-1)/(w+1)$ gives a biholomorphic map from $S$ onto $\mathbb D$, namely the displayed $f$. [L1, given, algebra]

2.1 Direct substitution gives $f(1)=0$, and $$f'(z)=\frac{4z}{(z^2+1)^2},\qquad f'(1)=1>0.$$ So the map is normalized at $1$. [step 1.1, algebra] ∎
