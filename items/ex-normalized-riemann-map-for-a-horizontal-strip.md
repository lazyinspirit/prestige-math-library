---
id: ex-normalized-riemann-map-for-a-horizontal-strip
kind: example
title: "A normalized Riemann map for a horizontal strip"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-riemann-mapping-theorem, thm-principal-exponential-biholomorphism-from-principal-strip, thm-upper-half-plane-automorphisms-are-real-mobius-maps, thm-blaschke-factor-is-a-disc-automorphism]
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

On the strip

$$S:=\{\,z\in\mathbb C:|\operatorname{Im}z|<\pi/2\,\},$$

the map

$$f(z):=\frac{e^z-1}{e^z+1}$$

is a normalized Riemann map sending $0$ to $0$.

## Facts & Assumptions

**Given:** The strip $S$ and the map $f$ above.

[L1] The exponential maps the principal strip biholomorphically onto the slit plane ([[thm-principal-exponential-biholomorphism-from-principal-strip]]).

## Verification

**Proof technique:** direct.

1.1 The strip $S$ maps by $z\mapsto e^z$ biholomorphically onto the right half-plane, and the Cayley map $w\mapsto(w-1)/(w+1)$ sends that half-plane biholomorphically onto $\mathbb D$. Hence $f$ is a biholomorphic map from $S$ onto $\mathbb D$. [L1, given, algebra]

2.1 Direct computation gives $f(0)=0$ and $$f'(z)=\frac{2e^z}{(e^z+1)^2},\qquad f'(0)=\frac12>0.$$ So $f$ is normalized at the chosen basepoint. [step 1.1, algebra] ∎
