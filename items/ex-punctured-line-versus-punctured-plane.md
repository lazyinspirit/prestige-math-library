---
id: ex-punctured-line-versus-punctured-plane
kind: example
title: "$GL_1(\\mathbb{R})=\\mathbb{R}\\setminus\\{0\\}$ is disconnected, whereas $\\mathbb{R}^2\\setminus\\{0\\}$ is polygonally connected"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-punctured-rn-is-polygonally-connected, cor-connected-subsets-of-the-line, def-connected-space]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "General linear group"
      url: "https://en.wikipedia.org/wiki/General_linear_group"
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
pipeline_run: null
---

## Example

The invertible $1\times1$ real matrices are the nonzero real numbers, so $GL_1(\mathbb R)=\mathbb R\setminus\{0\}$. This set is disconnected: it contains $-1$ and $1$ but not the intermediate point $0$, so it is not order-convex and cannot be connected by [[cor-connected-subsets-of-the-line]]. In contrast, [[lem-punctured-rn-is-polygonally-connected]] gives polygonal connectedness of $\mathbb R^2\setminus\{0\}$. Connectedness is understood through [[def-connected-space]].
