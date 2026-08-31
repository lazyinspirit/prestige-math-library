---
id: lem-every-vector-in-a-fibre-extends-to-a-compactly-supported-smooth-section
kind: lemma
title: "Every vector in a fibre extends to a compactly supported smooth section"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-local-frame-and-global-frame-of-a-vector-bundle, prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components, prop-smooth-sections-form-a-module-over-smooth-functions, lem-chart-bump-at-a-point-with-prescribed-support]
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
---
## Statement

Let $\pi:E\to M$ be a smooth vector bundle, let $p\in M$, and let $v\in E_p$.
Then there is a compactly supported smooth section $\sigma$ of $E$ with
$\sigma(p)=v$.

## Facts & Assumptions

**Given:** A smooth vector bundle $E\to M$, a point $p\in M$, and a vector $v\in E_p$.

[L1] Around $p$ there is a local frame of $E$ ([[def-local-frame-and-global-frame-of-a-vector-bundle]]).

[L2] There is a smooth bump function equal to $1$ at $p$ and supported in a prescribed chart neighborhood ([[lem-chart-bump-at-a-point-with-prescribed-support]]).

[L3] Multiplying a smooth section by a smooth function keeps it smooth ([[prop-smooth-sections-form-a-module-over-smooth-functions]]).

[L4] A section is smooth exactly when its local frame components are smooth ([[prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components]]).

## Proof

**Proof technique:** direct.

1.1 Choose a local frame $(s_1,\dots,s_r)$ on an open set $U$ containing $p$. Write $v=\sum_i a_i s_i(p)$ and define a local section $\tau=\sum_i a_i s_i$ on $U$. Then $\tau(p)=v$. [L1, given, choose]

2.1 Choose a smooth bump function $\chi:M\to\mathbb R$ with $\chi(p)=1$ and $\operatorname{supp}(\chi)\subseteq U$. On $U$ define $\sigma=\chi\tau$, which is smooth by [L3]. Because $\operatorname{supp}(\chi)\subseteq U$, there is an open neighborhood $V$ of $M\setminus U$ on which $\chi=0$; define $\sigma=0$ on $V$, which is smooth by [L4]. On $U\cap V$ the two formulas agree, so they paste to a smooth global section. Its support is contained in $\operatorname{supp}(\chi)$, hence compact, and $\sigma(p)=\chi(p)\tau(p)=v$. [L2, L3, L4, step 1.1, construct] ∎
