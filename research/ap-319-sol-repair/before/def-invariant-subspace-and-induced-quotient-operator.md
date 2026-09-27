---
id: def-invariant-subspace-and-induced-quotient-operator
kind: definition
title: "Invariant subspaces, restrictions, and induced quotient operators"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-quotient-vector-space-and-canonical-projection, def-linear-map]
justified_by: [prop-induced-quotient-operator-is-well-defined]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "K. Hoffman and R. Kunze, Linear Algebra, 2nd ed., Section 6.4"
      url: "https://math.ucr.edu/~mpierce/teaching/linear-algebra/docs/Hoffman%2CKunze-LinearAlgebra.pdf"
    - title: "Cornell Math 4330, Quotient Spaces, Exercise QuoSpace 7"
      url: "https://pi.math.cornell.edu/~kassabov/math4330.fall19/cornell-only/QuoSpaces.pdf"
pipeline_run: null
---

## Definition

Let $T:V\to V$ be an endomorphism. A linear subspace $W\le V$ is **$T$-invariant** when $T(W)\subseteq W$. For such a $W$, the **restriction of $T$ to $W$** is
$$T|_W:W\longrightarrow W,\qquad w\longmapsto T(w).$$
The **operator induced by $T$ on the quotient** is the map
$$\bar T:V/W\longrightarrow V/W,\qquad \bar T(v+W):=T(v)+W,$$
where $V/W$ is the quotient of [[def-quotient-vector-space-and-canonical-projection]]. Its well-definedness, linearity, and relation to the canonical projection are proved in [[prop-induced-quotient-operator-is-well-defined]].
