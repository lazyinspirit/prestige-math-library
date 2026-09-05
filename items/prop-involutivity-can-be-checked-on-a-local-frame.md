---
id: prop-involutivity-can-be-checked-on-a-local-frame
kind: proposition
title: "Involutivity can be checked on a local frame"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-involutive-distribution,
       prop-sections-of-a-distribution-form-a-locally-free-module,
       prop-leibniz-rules-for-the-lie-bracket-with-function-multiples]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $\mathcal D$ be a smooth distribution. Then $\mathcal D$ is involutive if
and only if every point has a neighborhood $U$ with a local frame
$X_1,\dots,X_k$ of $\mathcal D|_U$ such that

$$ [X_i,X_j] \in \Gamma(\mathcal D|_U) \qquad \text{for all } i,j. $$

## Facts & Assumptions

**Given:** A smooth distribution $\mathcal D$.

[A1] Fix a neighborhood $U$ with local frame $X_1,\dots,X_k$ of $\mathcal D|_U$.

## Proof

**Proof technique:** direct.

1.1 If $\mathcal D$ is involutive, then every bracket of tangent vector fields [given]
is tangent, so in particular every bracket $[X_i,X_j]$ is tangent on $U$.
[given]

1.2 Conversely, assume all frame brackets are tangent on $U$. Any tangent [given]
fields on $U$ have the form $X = \sum_i f_iX_i$ and $Y = \sum_j g_jX_j$ with
smooth coefficients. Expanding $[X,Y]$ with the Leibniz rule expresses the
bracket as a sum of terms involving the tangent fields $[X_i,X_j]$ and the
frame fields $X_i$, hence again as a tangent field. [given, algebra]

1.3 Since this holds on a neighborhood of every point, $\mathcal D$ is [given]
involutive exactly when one may check bracket closure on a local frame.
[given] ∎
