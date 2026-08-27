---
id: fs-jensens-inequality-on-an-infinite-measure-space
kind: false-statement
title: "FALSE: Jensen's inequality holds on an infinite measure space without normalization"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-jensens-integral-inequality, def-counting-measure, prop-counting-measure-is-a-measure]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Theorem (7.44)"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---

## Statement

For every convex $\varphi$ and every nonnegative measurable $f$ one has
$$\varphi\!\left(\int f\,d\mu\right)\le\int\varphi(f)\,d\mu,$$
even when $\mu(X)\ne1$.

## Facts & Assumptions

**Given:** The statement above.

[L1] Jensen's inequality is stated for probability measures, so the normalization $\mu(X)=1$ is part of the theorem ([[thm-jensens-integral-inequality]]).

[L2] Counting measure is a measure on $\mathbb N$ ([[def-counting-measure]], [[prop-counting-measure-is-a-measure]]).

## Refutation

**Proof technique:** direct.

1.1 On $(\mathbb N,\mathcal P(\mathbb N),\#)$, let $f:=\chi_{\{1,2\}}$ and[L2, given, construct]
$\varphi(x):=x^2$. Then
$$\int f\,d\#=2,\qquad \int\varphi(f)\,d\#=2.$$


2.1 Therefore [step 1.1, L1, algebra] ∎
$$\varphi\!\left(\int f\,d\#\right)=4>2=\int\varphi(f)\,d\#,$$
so the displayed inequality fails on this infinite measure space. This is why
[L1] requires probability normalization.
