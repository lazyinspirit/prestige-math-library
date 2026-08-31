---
id: lem-vector-operations-are-continuous-in-a-normed-space
kind: lemma
title: "Vector addition and scalar multiplication are continuous in a normed space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [rem-real-and-complex-normed-space-convention,
       lem-reverse-triangle-inequality-in-a-normed-space,
       def-continuous-map-top, def-product-topology,
       lem-real-line-is-a-metric-space,
       thm-complex-numbers-are-the-real-coordinate-plane]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis"
      url: "https://ocw-preview.odl.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
pipeline_run: frontier-27
---

## Statement

Let $V$ be a normed space over $\mathbb{R}$ or $\mathbb{C}$. Then

$$+:V\times V\to V,\qquad (x,y)\mapsto x+y,$$

and

$$m:\mathbb{K}\times V\to V,\qquad (\lambda,x)\mapsto \lambda x,$$

are continuous for the product topology on the domain and the norm topology on
the target.

## Facts & Assumptions

**Given:** Scalars $\lambda,\alpha\in\mathbb{K}$ and vectors $x,y,h,k\in V$.

[L1] The scalar field on this page is either $\mathbb{R}$ with its usual absolute value or $\mathbb{C}$ with its modulus, and the same norm estimates are valid in both cases ([[rem-real-and-complex-normed-space-convention]]).

[L2] The norm is $1$-Lipschitz for its metric, so in particular $\|u+v\|\le \|u\|+\|v\|$ for all vectors and $\bigl|\|u\|-\|v\|\bigr|\le \|u-v\|$ ([[lem-reverse-triangle-inequality-in-a-normed-space]]).

## Proof

**Proof technique:** direct.

1.1 For addition, $\|(x+h)+(y+k)-(x+y)\|=\|h+k\|\le \|h\|+\|k\|$ by [L2]. [L2]

1.2 For scalar multiplication, $(\lambda+\alpha)(x+h)-\lambda x=\lambda h+\alpha x+\alpha h$, so $\|(\lambda+\alpha)(x+h)-\lambda x\|\le |\lambda|\,\|h\|+|\alpha|\,\|x\|+|\alpha|\,\|h\|$ by the triangle inequality and absolute homogeneity from [L1] and [L2]. [L1, L2, algebra]

2.1 Given $\varepsilon>0$, step 1.1 shows that if $\|h\|<\varepsilon/2$ and $\|k\|<\varepsilon/2$, then $(x+h)+(y+k)$ lies in the $\varepsilon$-ball around $x+y$; this is continuity of addition at $(x,y)$. [step 1.1, given]

2.2 For scalar multiplication at $(\lambda,x)$, first require $|\alpha|<1$ and then choose $\delta>0$ so that $|\lambda|\,\delta+\delta(\|x\|+\delta)<\varepsilon$; step 1.2 then gives $\|(\lambda+\alpha)(x+h)-\lambda x\|<\varepsilon$ whenever $|\alpha|<\delta$ and $\|h\|<\delta$. [step 1.2, given, algebra]

3.1 Since the point $(x,y)$ was arbitrary, step 2.1 proves continuity of addition everywhere, and step 2.2 proves continuity of scalar multiplication everywhere. [step 2.1, step 2.2] ∎
