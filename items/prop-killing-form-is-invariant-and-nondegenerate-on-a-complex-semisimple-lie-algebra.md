---
id: prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra
kind: proposition
title: "The Killing form is invariant and nondegenerate on a complex semisimple Lie algebra"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-killing-form-of-a-semisimple-lie-algebra, lem-finite-lie-engel-trace-criterion-and-killing-nondegeneracy]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-07-receipts.jsonl (prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra). No independent judge or whole-closure certification.
    delegated_by: owner
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

**Given:** A finite-dimensional complex semisimple Lie algebra $\mathfrak g$ and its Killing form $B$.

[L1] The finite Engel/trace argument proves that the Killing form of every finite-dimensional complex semisimple Lie algebra is invariant and nondegenerate ([[lem-finite-lie-engel-trace-criterion-and-killing-nondegeneracy]]).

## Proof

**Proof technique:** direct.

1.1 Using $\operatorname{ad}_{[x,y]}=[\operatorname{ad}_x,\operatorname{ad}_y]$ and cyclicity of trace, one gets $B([x,y],z)=\operatorname{tr}([\operatorname{ad}_x,\operatorname{ad}_y]\operatorname{ad}_z)=\operatorname{tr}(\operatorname{ad}_x[\operatorname{ad}_y,\operatorname{ad}_z])=B(x,[y,z])$. [given, algebra]

1.2 The nondegeneracy clause of [L1] applies to $\mathfrak g$. It proves that the radical $\{x\in\mathfrak g:B(x,\mathfrak g)=0\}$ is zero by an explicit finite trace-solvability argument, rather than leaving Cartan's criterion as an unproved appeal. [L1, given]

2.1 Hence $B$ is invariant and has zero radical, so it is nondegenerate. [step 1.1, step 1.2, L1] ∎
