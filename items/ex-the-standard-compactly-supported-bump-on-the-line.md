---
id: ex-the-standard-compactly-supported-bump-on-the-line
kind: example
title: "The standard compactly supported bump on the line"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-the-standard-flat-function-is-smooth-and-flat-at-zero]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Example

Define $\rho(t):=\exp(-1/(1-t^2))$ for $|t|<1$ and $\rho(t):=0$ for $|t|\ge 1$. Then $\rho$ is smooth on $\mathbb R$, is positive on $(-1,1)$, and has support $[-1,1]$.

## Facts & Assumptions

**Given:** The displayed function $\rho$.

[L1] The standard flat function is smooth and all of its derivatives vanish at the junction point ([[thm-the-standard-flat-function-is-smooth-and-flat-at-zero]]).

[A1] On $(-1,1)$ one has $\rho(t)=\beta(1-t^2)$.

## Verification

**Proof technique:** direct.

1.1 On $(-1,1)$ the function is the composite from [A1], and on $|t|\ge 1$ it is identically zero. [A1, L1]

2.1 At $t=\pm 1$, the inner variable $1-t^2$ tends to $0^+$, so [L1] shows that all derivatives from the inside tend to $0$ and match the outer zero branch. [L1, step 1.1]

3.1 Therefore $\rho$ is smooth, positive on $(-1,1)$, and supported on $[-1,1]$. [step 1.1, step 2.1] ∎
