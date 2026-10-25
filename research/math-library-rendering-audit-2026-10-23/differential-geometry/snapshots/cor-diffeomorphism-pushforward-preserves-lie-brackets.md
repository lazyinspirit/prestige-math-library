---
id: cor-diffeomorphism-pushforward-preserves-lie-brackets
kind: corollary
title: "Diffeomorphism pushforward preserves Lie brackets"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-pushforward-and-pullback-of-a-vector-field-by-a-diffeomorphism, prop-related-vector-fields-have-related-lie-brackets]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

If $F:M\to N$ is a diffeomorphism and $X,Y$ are smooth vector fields on $M$, then

$$ F_*[X,Y]=[F_*X,F_*Y]. $$

## Facts & Assumptions

**Given:** A diffeomorphism $F:M\to N$ and smooth vector fields $X,Y$ on $M$.

[L1] For a diffeomorphism, the pushforward $F_*X$ is by definition the unique vector field $F$-related to $X$ ([[def-pushforward-and-pullback-of-a-vector-field-by-a-diffeomorphism]]).

[L2] Related vector fields have related Lie brackets ([[prop-related-vector-fields-have-related-lie-brackets]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the vector fields $X$ and $F_*X$ are $F$-related, and likewise $Y$ and $F_*Y$ are $F$-related. [L1, given]

2.1 Applying [L2] to step 1.1 shows that $[X,Y]$ is $F$-related to $[F_*X,F_*Y]$. By the definition of pushforward in [L1], this means exactly that $F_*[X,Y]=[F_*X,F_*Y]$. [L1, L2, step 1.1] ∎
