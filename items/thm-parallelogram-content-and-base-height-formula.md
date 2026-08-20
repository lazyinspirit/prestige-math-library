---
id: thm-parallelogram-content-and-base-height-formula
kind: theorem
title: "A parallelogram has Jordan content $|\\det[v\\ w]|$, equal to base times height when $v\\ne0$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-parallelogram-and-triangle-in-r2, def-base-and-height-for-plane-figures, lem-determinant-base-height-identity-in-r2, cor-parallelepiped-content-is-the-absolute-determinant, thm-jordan-content-is-translation-invariant]
justified_by: []
aliases: []
landmark: true
short: "Parallelogram content"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. F. Trench, Introduction to Real Analysis, Theorem 7.3.7"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/TRENCH_REAL_ANALYSIS.PDF"
    - title: "M. E. Taylor, Introduction to Analysis in Several Variables, Proposition 3.1.10"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
pipeline_run: null
---

## Statement

A parallelogram has Jordan content $|\det[v\ w]|$, equal to base times height when $v\ne0$.

More precisely, $P(p;v,w)$ ([[def-parallelogram-and-triangle-in-r2]]) is Jordan measurable and

$$\operatorname{cont}(P(p;v,w))=|\det[v\ w]|,$$

including the singular case. If $v\ne0$, this value is $\lVert v\rVert_2d(w,\mathbb Rv)$ in the convention of [[def-base-and-height-for-plane-figures]].

## Facts & Assumptions

**Given:** A base point $p\in\mathbb R^2$ and spanning vectors $v,w\in\mathbb R^2$.

[L1] For column vectors $v_1,\ldots,v_n$, the closed parallelepiped is Jordan measurable with content equal to the absolute determinant; this includes the singular case, when the content is zero ([[cor-parallelepiped-content-is-the-absolute-determinant]]).

[L2] For $v\ne0$, $\lVert v\rVert_2d(w,\mathbb Rv)=|\det[v\ w]|$ ([[lem-determinant-base-height-identity-in-r2]]).

[L3] Translation preserves Jordan measurability and content ([[thm-jordan-content-is-translation-invariant]]).

## Proof

**Proof technique:** direct.

1.1 Specialize [L1] to $n=2$ and use [L3] to translate the origin-based parallelepiped by $p$; it gives Jordan measurability and $\operatorname{cont}(P(p;v,w))=|\det[v\ w]|$, including dependent or zero spanning vectors. [L1, L3]

2.1 When $v\ne0$, substitute [L2] into the determinant formula of step 1.1 to obtain content equal to base length times perpendicular height. [step 1.1, L2] ∎
