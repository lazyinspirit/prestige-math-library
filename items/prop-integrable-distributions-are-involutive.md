---
id: prop-integrable-distributions-are-involutive
kind: proposition
title: "Integrable distributions are involutive"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-integrable-distribution,
       def-involutive-distribution,
       def-integral-manifold-of-a-distribution,
       cor-every-immersion-is-locally-an-embedding,
       prop-a-vector-field-tangent-to-an-embedded-submanifold-restricts-to-a-vector-field,
       prop-related-vector-fields-have-related-lie-brackets]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

Every integrable smooth distribution is involutive.

## Facts & Assumptions

**Given:** A smooth integrable distribution $\mathcal D$ on $M$.

[A1] Let $X,Y \in \Gamma(\mathcal D)$ and let $p \in M$.

## Proof

**Proof technique:** direct.

1.1 By integrability, the point $p$ lies on a connected integral manifold [given]
$i:N \to M$ of $\mathcal D$ having the same dimension as the distribution. After
shrinking near the point of $N$ over $p$, the immersion may be viewed as an
embedding, so $X$ and $Y$ restrict to smooth vector fields $\widetilde X$ and
$\widetilde Y$ on that local piece of $N$. [given]

1.2 Along that local integral manifold, the fields $\widetilde X$ and [given]
$\widetilde Y$ are $i$-related to $X$ and $Y$. Therefore their Lie bracket is
$i$-related to $[X,Y]$. Since the bracket on $N$ is tangent to $N$, the value
$[X,Y]_p$ lies in the image of $di$, which is $\mathcal D_p$. [given]

1.3 The point $p$ and the tangent fields $X,Y$ were arbitrary, so [given]
$[X,Y] \in \Gamma(\mathcal D)$. Hence $\mathcal D$ is involutive. [given] ∎
