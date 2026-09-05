---
id: ex-kernel-of-a-submersion-as-an-integrable-distribution
kind: example
title: "The kernel of a submersion as an integrable distribution"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-kernel-of-a-constant-rank-submersion-is-integrable,
       prop-level-set-distributions-are-involutive]
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

## Example

Consider
$$F:\mathbb R^3 \to \mathbb R,\qquad F(x,y,z) = x^2 + y^2 + z.$$
Since $dF = (2x,2y,1)$ is never zero, $F$ is a submersion. Therefore
$\ker dF$ is a rank-$2$ integrable distribution whose leaves are the connected
surfaces
$$x^2 + y^2 + z = c.$$

## Facts & Assumptions

**Given:** The submersion $F(x,y,z) = x^2 + y^2 + z$.

[A1] Its differential never vanishes.

## Verification

**Proof technique:** direct.

1.1 Because the third partial derivative of $F$ is $1$, the map is a [given]
submersion everywhere. [given]

1.2 The kernel distribution is therefore integrable, and its maximal connected [given]
integral manifolds are the connected components of the level sets of $F$.
Each level set here is a connected paraboloid. [given]

2.1 Thus $\ker dF$ is an explicit integrable distribution. [given] ∎ [given]
