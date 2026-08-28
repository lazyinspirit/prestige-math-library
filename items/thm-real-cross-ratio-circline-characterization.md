---
id: thm-real-cross-ratio-circline-characterization
kind: theorem
title: "Four distinct sphere points lie on one circline exactly when their cross-ratio is real"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-circline-and-reflection, def-cross-ratio-riemann-sphere, thm-cross-ratio-mobius-invariant]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §§2.2-3.5"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Matthias Weber, Complex Analysis, Ch. 1 §§1.3-1.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §§1-2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
pipeline_run: frontier-22
---

## Statement

Four distinct sphere points lie on one circline if and only if their cross-ratio
is real, in the sense that
$$z_1,z_2,z_3,z_4\text{ lie on one circline }\Longleftrightarrow [z_1,z_2;z_3,z_4]\in\mathbb R.$$

## Facts & Assumptions

**Given:** Four distinct sphere points $z_1,z_2,z_3,z_4$.

[L1] A circline is exactly a set of the form $C(a,b,c)=\{a,b,c\}\cup\{z\notin\{a,b,c\}:[a,b;c,z]\in\mathbb R\}$ ([[def-circline-and-reflection]]).

## Proof

**Proof technique:** direct.

1.1 If the four points lie on one circline, then taking that circline to be $C(z_1,z_2,z_3)$ forces $z_4\in C(z_1,z_2,z_3)$. Because the four points are distinct, $z_4\notin\{z_1,z_2,z_3\}$, so [L1] gives $[z_1,z_2;z_3,z_4]\in\mathbb R$. [L1, given]

2.1 Conversely, if $[z_1,z_2;z_3,z_4]\in\mathbb R$, then $z_4\notin\{z_1,z_2,z_3\}$ and [L1] says exactly that $z_4\in C(z_1,z_2,z_3)$. Hence the four points lie on a single circline. [L1, given] ∎
