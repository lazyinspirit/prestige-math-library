---
id: lem-pe12-outward-zero-brouwer
kind: lemma
title: An outward-pointing finite-dimensional map has a zero
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [ thm-brouwer-fixed-point-theorem ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Marvin Fritz, Monotone Operators in Nonlinear PDEs, JKU lecture notes, WS
        2023/2024
      url: https://numa.jku.at/media/filer_public/ff/80/ff80a871-94c4-4785-8314-028a46d185ed/lecturenotes.pdf
      locator: Theorem 2.1 and its Galerkin proof, finite-dimensional outward-pointing
        map step.
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential
        Equations, Springer Universitext, 2011
      url: https://www.math.toronto.edu/almut/Brezis.pdf
      locator: Theorem 5.16, finite-dimensional Brouwer argument in the Minty–Browder
        proof, PDF p. 159.
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $N\ge1$, $R>0$, and let $F:\mathbb R^N\to\mathbb R^N$ be continuous.
If $F(x)\cdot x>0$ for every $|x|=R$, then $F$ has a zero in the closed
ball $\overline B_R(0)$.

## Facts & Assumptions

**Given:** $N\ge1$, $R>0$, and a continuous $F$ satisfying the strict
outward-pointing inequality on the sphere.

[F1] Every continuous self-map of the closed unit ball in a finite-dimensional
real vector space has a fixed point
([[thm-brouwer-fixed-point-theorem]]).

## Proof
1.1 Suppose, for contradiction, that $F$ has no zero in $\overline B_R(0)$. Then $F(x)\ne0$ there, and $G(x):=-R\,F(x)/|F(x)|$ is a continuous map $\overline B_R(0)\to\overline B_R(0)$ whose values all lie on the sphere. After rescaling the ball to the unit ball, [F1] gives a fixed point $x=G(x)$. [F1, given, discharge-contradiction, construct]

2.1 Since $G(x)$ lies on the sphere, $|x|=R$. The fixed-point equation gives $F(x)\cdot x=F(x)\cdot(-R F(x)/|F(x)|)=-R|F(x)|<0$, contradicting the assumed positive boundary pairing. Thus $F$ has a zero in the closed ball. [F1, step 1.1, given, discharge-contradiction, algebra] ∎
