---
id: def-pushforward-and-pullback-of-a-vector-field-by-a-diffeomorphism
kind: definition
title: "Pushforwards and pullbacks of vector fields by a diffeomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-f-related-vector-fields, def-diffeomorphism-and-local-diffeomorphism-of-manifolds, thm-the-global-differential-of-a-smooth-map-is-smooth]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Definition

Assume $\mathrm{AC}_\omega$, so that $TM$ and $TN$ carry their canonical smooth
structures. Let $F:M\to N$ be a diffeomorphism.

For a smooth vector field $X$ on $M$, the **pushforward** $F_*X$ is the unique
vector field on $N$ that is $F$-related to $X$. Explicitly,

$$ (F_*X)_{F(p)}:=dF_p(X_p). $$

For a smooth vector field $Y$ on $N$, the **pullback** $F^*Y$ is the vector
field on $M$ defined by

$$ (F^*Y)_p:=d(F^{-1})_{F(p)}(Y_{F(p)}). $$

Because $F$ and $F^{-1}$ are smooth and their global differentials are smooth,
both constructions yield smooth vector fields.
