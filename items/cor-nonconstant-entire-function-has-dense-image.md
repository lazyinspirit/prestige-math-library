---
id: cor-nonconstant-entire-function-has-dense-image
kind: corollary
title: "Every nonconstant entire function has dense image in the complex plane"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
  truth_risk: "The reciprocal must be entire and globally bounded when an open disc is omitted from the image."
  counterexample_search: "Checked constant functions as the excluded boundary and tested the reciprocal bound on the boundary of the omitted disc; no counterexample to the nonconstant conclusion was found."
deps: [thm-liouville-bounded-entire-function, thm-algebra-of-complex-derivatives, def-dense-top, def-complex-metric-convergence-and-continuity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Lars Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2 §4"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

Every nonconstant entire function has dense image in the complex plane.

Equivalently, if $f:\mathbb C\to\mathbb C$ is entire and nonconstant, then every nonempty open disc meets $f[\mathbb C]$.

## Facts & Assumptions

**Given:** A nonconstant entire function $f$ and the usual metric topology on $\mathbb C$ from [[def-complex-metric-convergence-and-continuity]].

[L1] A subset of a topological space is dense exactly when it meets every nonempty open set, equivalently every nonempty member of a chosen basis ([[def-dense-top]]).

[L2] If a complex differentiable function is nonzero at a point, its reciprocal is complex differentiable there; linear combinations of complex differentiable functions are complex differentiable ([[thm-algebra-of-complex-derivatives]]).

[L3] Every bounded entire function is constant ([[thm-liouville-bounded-entire-function]]).

## Proof

**Proof technique:** direct.

1.1 Suppose the image of $f$ is not dense. By [L1], some nonempty open set misses it; choosing a point $w$ of that set and a metric ball contained in it gives $\varepsilon>0$ with $D(w,\varepsilon)\cap f[\mathbb C]=\varnothing$. [given, L1, choose]

2.1 The function $f-w$ never vanishes, so [L2] makes $g:=1/(f-w)$ entire, and step 1.1 gives $|f(z)-w|\ge\varepsilon$ and hence $|g(z)|\le1/\varepsilon$ for every $z$. [step 1.1, L2, algebra]

3.1 By step 2.1, $g$ is a bounded entire function, so [L3] makes it constant. [step 2.1, L3]

4.1 The constant $g$ is nonzero, and $f=w+1/g$ is therefore constant, contradicting the given hypothesis; thus the image is dense. [step 3.1, algebra] ∎
