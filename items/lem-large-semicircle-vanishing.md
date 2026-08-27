---
id: lem-large-semicircle-vanishing
kind: lemma
title: "A rational large-semicircle integral vanishes under the zR(z) to 0 condition"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-standard-residue-contours]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §5.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a rational function, and for $T>0$ let $\gamma_T^+(t)=Te^{it}$ for
$0\le t\le\pi$. Assume that $\gamma_T^+$ meets no pole of $R$ for all
sufficiently large $T$, and that

$\sup_{0\le t\le\pi}|\,\gamma_T^+(t)\,R(\gamma_T^+(t))\,|\longrightarrow0 \qquad(T\to\infty).$

Then

$\int_{\gamma_T^+}R(z)\,dz\longrightarrow0\qquad(T\to\infty).$

## Facts & Assumptions

**Given:** A rational function $R$ and the upper semicircles $\gamma_T^+(t)=Te^{it}$.

## Proof

**Proof technique:** direct.

1.1 Along $\gamma_T^+$ one has $|\gamma_T^+(t)|=T$, so $|R(\gamma_T^+(t))|\le \frac{1}{T}\sup_{0\le s\le\pi}|\,\gamma_T^+(s)R(\gamma_T^+(s))\,|.$ [given]

2.1 The arc length of $\gamma_T^+$ is $\pi T$. Therefore the ML estimate gives $\left|\int_{\gamma_T^+}R(z)\,dz\right| \le \pi T\cdot \frac{1}{T}\sup_{0\le s\le\pi}|\,\gamma_T^+(s)R(\gamma_T^+(s))\,| =\pi\sup_{0\le s\le\pi}|\,\gamma_T^+(s)R(\gamma_T^+(s))\,|.$ [step 1.1]

3.1 The right-hand side tends to $0$ by hypothesis, so the arc integral tends to $0$ as claimed. [step 2.1] ∎
