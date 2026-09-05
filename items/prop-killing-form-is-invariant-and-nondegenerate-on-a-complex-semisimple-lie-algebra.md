---
id: prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra
kind: proposition
title: "The Killing form is invariant and nondegenerate on a complex semisimple Lie algebra"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-killing-form-of-a-semisimple-lie-algebra]
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
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
pipeline_run: null
---

## Statement

Let $\mathfrak g$ be a complex semisimple Lie algebra, and let $B$ be its Killing form from [[def-killing-form-of-a-semisimple-lie-algebra]]. Then

$$B([x,y],z)=B(x,[y,z]) \qquad (x,y,z\in \mathfrak g),$$

and $B$ is nondegenerate.

## Facts & Assumptions

**Given:** A complex semisimple Lie algebra $\mathfrak g$ and its Killing form $B$.

## Proof

**Proof technique:** direct.

1.1 Using $\operatorname{ad}_{[x,y]}=[\operatorname{ad}_x,\operatorname{ad}_y]$ and cyclicity of trace, one gets $B([x,y],z)=\operatorname{tr}([\operatorname{ad}_x,\operatorname{ad}_y]\operatorname{ad}_z)=\operatorname{tr}(\operatorname{ad}_x[\operatorname{ad}_y,\operatorname{ad}_z])=B(x,[y,z])$. [given, algebra]

2.1 The radical $\{x\in \mathfrak g : B(x,\mathfrak g)=0\}$ is an ideal because step 1.1 makes it stable under brackets. Cartan's semisimplicity criterion states that a finite-dimensional Lie algebra over characteristic $0$ is semisimple if and only if its Killing form is nondegenerate. Since $\mathfrak g$ is complex semisimple, this criterion makes the radical zero. [given, step 1.1]

3.1 Hence $B$ is invariant and has zero radical, so it is nondegenerate. [step 1.1, step 2.1] ∎
