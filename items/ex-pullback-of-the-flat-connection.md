---
id: ex-pullback-of-the-flat-connection
kind: example
title: "Pullback of the flat connection"
status: draft
origin: pipeline
deps: ["thm-pullback-connection-is-well-defined-and-functorial","ex-the-flat-connection-on-a-trivial-vector-bundle"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Example

For a smooth map $f:N\to M$, the pullback of the flat connection on $M\times\mathbb R^r$ is the componentwise derivative on the canonically identified product $f^*(M\times\mathbb R^r)=N\times\mathbb R^r$.

## Facts & Assumptions

**Given:** A smooth map and the specified product trivialization.

[F1] Pullback connections have the pulled-back local connection matrix, on arbitrary pullback sections ([[thm-pullback-connection-is-well-defined-and-functorial]]).

[F2] The product flat connection has zero matrix in the constant frame ([[ex-the-flat-connection-on-a-trivial-vector-bundle]]).

## Verification

1.1 The identification sends $(q,(f(q),v))$ to $(q,v)$, with smooth inverse $(q,v)\mapsto(q,(f(q),v))$. It takes the pullback frame to the constant frame. By [F1] and [F2] the new matrix is $f^*0=0$, hence $\nabla^{f}_X(\sum_a u^ae_a)=\sum_a X(u^a)e_a$ for arbitrary smooth functions on $N$. [F1, F2, given]

2.1 In particular, even if $f:\mathbb R\to M$ is constant, the pullback section $s(t)=te_1$ has $\nabla^f_{\partial_t}s=e_1$ when $r\geq1$. It need not be a section pulled back from $M$. Constant coefficients, in contrast, have zero derivative. Rank zero gives the unique zero operator and an empty source gives the empty bundle; no immersion, injectivity or nonzero differential is required. [step 1.1] ∎
