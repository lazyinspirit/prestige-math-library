---
id: def-index-of-a-central-division-algebra
kind: definition
title: "Index of a central division algebra"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-division-ring, def-extension-degree-and-finite-extension]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Gabor Wiese, Galois Representations, Theorem 2.3.5"
      url: "https://r.jina.ai/https://math.uni.lu/wiese/notes/GalRep.pdf"
    - title: "Weizhe Zheng, Lectures on Algebra, Section 3.7"
      url: "https://server.mcm.ac.cn/~zheng/algebra.pdf"
---

## Definition

Let $D$ be a finite-dimensional division algebra whose centre is the field $K$.
Then $[D:K]$ is a square.  Its positive square root
$$\operatorname{ind}(D):=\sqrt{[D:K]}$$
is the **index** (or degree) of $D$.  Equivalently, every maximal subfield
$L$ has $[L:K]=\operatorname{ind}(D)$ and splits $D$.  This convention applies
only to central finite-dimensional division algebras.
