---
id: "def-embedding-dimension-and-regular-local-ring"
kind: "definition"
title: "embedding dimension and regular local ring"
deps: ["def-local-ring", "def-noetherian-ring", "def-krull-dimension-of-a-ring"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "12.3–12.5, p.115"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: not-applicable
status: published
origin: "pipeline"
---

## Definition

For a nonzero commutative Noetherian local ring $(R,\mathfrak m,k)$, define $\operatorname{edim}R=\dim_k(\mathfrak m/\mathfrak m^2)$. The ring is **regular local** when $\operatorname{edim}R=\dim R$. The cotangent space is intrinsic, and is finite-dimensional because $\mathfrak m$ is finitely generated.
