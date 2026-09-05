---
id: cor-kernel-of-a-constant-rank-submersion-is-integrable
kind: corollary
title: "The kernel distribution of a constant-rank submersion is integrable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-frobenius-local-first-integrals,
       thm-a-regular-level-set-is-an-embedded-submanifold,
       prop-tangent-space-of-a-regular-level-set-is-the-kernel]
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

Let $F:M \to N$ be a smooth submersion. Then the kernel distribution
$\ker dF \subseteq TM$ is integrable, and its maximal connected integral
manifolds are the connected components of the level sets of $F$.

## Facts & Assumptions

**Given:** A smooth submersion $F:M \to N$.

[A1] Fix $p \in M$ and write $q := F(p)$.

## Proof

**Proof technique:** direct.

1.1 Because $F$ is a submersion, $q$ is a regular value and the level set [given]
$F^{-1}(q)$ is an embedded submanifold. Its tangent space at each point is the
kernel of the differential of $F$. Therefore each connected component of
$F^{-1}(q)$ is an integral manifold of $\ker dF$. [given]

1.2 Repeating the same argument at every point of $M$ shows that each point [given]
lies on such a connected component, so $\ker dF$ is integrable. Since an
integral manifold of $\ker dF$ stays inside one level set of $F$, the maximal
connected integral manifolds are exactly the connected components of the fibres.
[given]

1.3 Hence the kernel of a submersion is integrable with leaves equal to fibre [given]
components. [given] ∎
