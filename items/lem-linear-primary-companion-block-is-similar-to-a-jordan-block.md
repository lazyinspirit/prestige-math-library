---
id: lem-linear-primary-companion-block-is-similar-to-a-jordan-block
kind: lemma
title: "A companion block for $(x-\\lambda)^e$ is similar to the Jordan block $J_e(\\lambda)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-companion-matrix-of-a-monic-polynomial, def-jordan-block-and-jordan-string, thm-similarity-is-an-equivalence-relation-and-models-basis-change]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "A. Apisa, Wisconsin Math 542, Lemma 37"
      url: "https://people.math.wisc.edu/~apisa/notes542.pdf"
    - title: "M. Brussel, Finitely Generated Modules over a PID, Section 7.4"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
pipeline_run: null
---

## Statement

For $e\ge1$ and $\lambda\in F$, $C((x-\lambda)^e)$ is similar to $J_e(\lambda)$.

## Facts & Assumptions

**Given:** The power-basis companion matrix of [[def-companion-matrix-of-a-monic-polynomial]] and similarity as change of basis ([[thm-similarity-is-an-equivalence-relation-and-models-basis-change]]).

[F1] For $m\ge1$ and $\lambda\in F$, the Jordan block $J_m(\lambda)$ has $\lambda$ on the diagonal, $1$ on the superdiagonal, and $0$ elsewhere ([[def-jordan-block-and-jordan-string]]).

## Proof

**Proof technique:** direct.

1.1 In $F[x]/((x-\lambda)^e)$, the residue classes $1,(x-\lambda),\ldots,(x-\lambda)^{e-1}$ form a basis. Reversing their order gives the basis $(x-\lambda)^{e-1},\ldots,x-\lambda,1$. [algebra]

2.1 Multiplication by $x=\lambda+(x-\lambda)$ in the reversed basis has $\lambda$ on the diagonal and sends each basis vector except the first to itself times $\lambda$ plus the preceding basis vector. Its matrix therefore has ones on the superdiagonal and is $J_e(\lambda)$ by [F1]. For $e=1$ it is the matrix $(\lambda)$. [step 1.1, F1]

3.1 In the ordinary power basis $1,x,\ldots,x^{e-1}$, the same multiplication operator has companion matrix $C((x-\lambda)^e)$. The two matrices represent one operator in two bases, so they are similar. [step 2.1, given] ∎
