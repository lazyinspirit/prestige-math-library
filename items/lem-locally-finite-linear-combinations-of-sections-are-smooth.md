---
id: lem-locally-finite-linear-combinations-of-sections-are-smooth
kind: lemma
title: "Locally finite linear combinations of sections are smooth"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components, prop-smooth-sections-form-a-module-over-smooth-functions, lem-locally-finite-families-of-supports-have-locally-finite-cozero-families, thm-a-locally-finite-sum-of-smooth-functions-is-smooth]
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

Let $(\sigma_i)_{i\in I}$ be smooth sections of a vector bundle $E\to M$ and let
$(f_i)_{i\in I}$ be smooth real-valued functions on $M$. If the family of
supports $\bigl(\operatorname{supp}(f_i\sigma_i)\bigr)_{i\in I}$ is locally
finite, then the pointwise sum

$$\sum_{i\in I} f_i\sigma_i$$

defines a smooth section of $E$.

## Facts & Assumptions

**Given:** Smooth sections $\sigma_i$, smooth functions $f_i$, and a locally
finite family of supports $\operatorname{supp}(f_i\sigma_i)$.

[L1] A section is smooth exactly when its local frame components are smooth
([[prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components]]).

[L2] A locally finite sum of smooth scalar functions is smooth
([[thm-a-locally-finite-sum-of-smooth-functions-is-smooth]]).

## Proof

**Proof technique:** direct.

1.1 Fix a local frame $(s_1,\dots,s_r)$ on an open set $U$. Write $\sigma_i|_U=\sum_j a_{ij}s_j$ with smooth coefficient functions $a_{ij}$. Then on $U$ the formal sum has components $\sum_i f_i a_{ij}$. Because the supports of $f_i\sigma_i$ are locally finite, only finitely many terms are nonzero near each point. [L1, given]
2.1 Each component $\sum_i f_i a_{ij}$ is therefore a locally finite sum of smooth scalar functions, so it is smooth by [L2]. Applying [L1] again shows that $\sum_i f_i\sigma_i$ is a smooth section on $U$, and hence on all of $M$. [L1, L2, step 1.1] ∎