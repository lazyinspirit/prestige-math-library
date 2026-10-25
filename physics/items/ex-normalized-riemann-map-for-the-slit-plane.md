---
id: ex-normalized-riemann-map-for-the-slit-plane
kind: example
title: "A normalized Riemann map for the slit plane"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-riemann-mapping-theorem, thm-slit-plane-root-branch-biholomorphism-to-a-sector, thm-upper-half-plane-automorphisms-are-real-mobius-maps, thm-blaschke-factor-is-a-disc-automorphism]
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

Let $S:=\mathbb C\setminus(-\infty,0]$, and let $\sqrt{z}$ denote the principal
root branch on $S$. Then

$$f(z):=\frac{\sqrt z-1}{\sqrt z+1}$$

is a normalized Riemann map sending $1$ to $0$.

## Facts & Assumptions

**Given:** The slit plane $S$ and the principal square-root branch on it.

[L1] The principal root branch biholomorphically maps the slit plane onto a sector, in particular onto the right half-plane when $n=2$ ([[thm-slit-plane-root-branch-biholomorphism-to-a-sector]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $\sqrt z$ maps $S$ biholomorphically onto the right half-plane. Composing with the Cayley map $w\mapsto(w-1)/(w+1)$ gives the displayed biholomorphic map $f:S\to\mathbb D$. [L1, given, algebra]

2.1 One has $f(1)=0$, and $$f'(z)=\frac{1}{\sqrt z\,(\sqrt z+1)^2},\qquad f'(1)=\frac14>0.$$ So $f$ is normalized at $1$. [step 1.1, algebra] ∎
