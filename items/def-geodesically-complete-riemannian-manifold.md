---
id: "def-geodesically-complete-riemannian-manifold"
kind: "definition"
title: "Geodesically complete Riemannian manifold"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-existence-uniqueness-and-smooth-dependence-of-geodesics","def-countable-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Definition 19.2.1, p.141
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Definition

Assume $\mathrm{AC}_\omega$. A Riemannian manifold without boundary is **geodesically complete** when, for every initial vector $v\in T_pM$, the unique maximal geodesic has domain
$$I_{p,v}=\mathbb R.$$
For a disconnected manifold this condition is componentwise. The zero initial vector is included.

## Facts & Assumptions

**Given:** A boundaryless Riemannian manifold $M$.

[F1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$, and [[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]] then supplies the unique maximal interval $I_{p,v}$ for every initial vector.

## Verification

1.1 The definition is intrinsic because [F1] makes $I_{p,v}$ unique. A geodesic remains in the connected component of its initial point, since the continuous image of its interval is connected; therefore requiring all $I_{p,v}=\mathbb R$ is equivalent to requiring the same condition separately on every component. [F1, given]

2.1 The zero vector gives the constant geodesic and already has domain $\mathbb R$. In dimension zero every vector is zero, so every boundaryless zero-manifold is geodesically complete; the empty manifold satisfies the universal condition vacuously. Failure means one explicitly existing initial vector has a finite end in its maximal open interval, so no included-endpoint ambiguity occurs. The only choice principle is the stated $\mathrm{AC}_\omega$ inherited from the construction of the maximal geodesics; the universal quantifier itself selects nothing. [F1, step 1.1] ∎
