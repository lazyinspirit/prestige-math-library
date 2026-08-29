---
id: ex-power-map-sends-a-sector-to-a-half-plane
kind: example
title: "A power map sends a sector to a half-plane"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-sector-power-map-is-biholomorphic-on-narrow-sectors]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §4.2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Example

Let

$$S:=\{\,re^{i\theta}:r>0,\ -\pi/4<\theta<\pi/4\,\}.$$

Then the square map $z\mapsto z^2$ biholomorphically sends $S$ onto the right
half-plane

$$\{\,w\in\mathbb C:\operatorname{Re}w>0\,\}.$$

## Facts & Assumptions

**Given:** The sector $S$ above.

[F1] On sectors of angular width less than $\pi$, the square map is a
biholomorphism onto the angle-doubled sector
([[thm-sector-power-map-is-biholomorphic-on-narrow-sectors]]).

## Verification

1.1 The argument interval of $S$ is $(-\pi/4,\pi/4)$, which has width $\pi/2<\pi$, so [F1] applies to $z\mapsto z^2$. [F1, given]

2.1 Doubling the argument interval gives $(-\pi/2,\pi/2)$, hence the image is $\{\,\rho e^{i\phi}:\rho>0,\ -\pi/2<\phi<\pi/2\,\}$, which is exactly the right half-plane. Therefore $z\mapsto z^2$ is a biholomorphism from $S$ onto $\{\,\operatorname{Re}w>0\,\}$. [F1, step 1.1, algebra] ∎
