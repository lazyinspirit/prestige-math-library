---
id: ex-cft-divergent-formal-coordinate
kind: example
title: A formal coordinate need not converge
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: mathematics
library: mathematics
deps:
  - def-cft-aut-o-formal-coordinate-group
  - def-cft-pointed-curve-with-formal-coordinates
  - def-cft-smooth-projective-complex-curve
  - lem-cft-formal-coordinate-exists-on-smooth-projective-complex-curve
  - thm-taylor-expansion-holomorphic-function
dependency_roles:
  def-cft-aut-o-formal-coordinate-group: mathematical-premise
  def-cft-pointed-curve-with-formal-coordinates: mathematical-premise
  def-cft-smooth-projective-complex-curve: mathematical-premise
  lem-cft-formal-coordinate-exists-on-smooth-projective-complex-curve: mathematical-premise
  thm-taylor-expansion-holomorphic-function: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Bin Gui, Lectures on Vertex Operator Algebras and Conformal Blocks, arXiv:2305.03822v1, §10.1
      url: https://arxiv.org/pdf/2305.03822v1
      locator: Formal local coordinates are arbitrary formal series and need not be analytic coordinate germs.
    - title: Edward Frenkel, Vertex Algebras and Algebraic Curves, Séminaire Bourbaki 875 (2000), §4.1
      url: https://math.berkeley.edu/~frenkel/BOOK/bourbaki.pdf
      locator: Formal-coordinate torsors are not restricted to convergent series.
---

## Statement

There is an isomorphism of completed local rings $\widehat{\mathcal O}_{\mathbb P^1,0}\to\mathbb C\llbracket t\rrbracket$ on the projectively presented pointed curve $(\mathbb P^1,0)$ whose defining series has radius of convergence zero. Thus formal coordinates need not arise from analytic coordinate germs.

## Statement references

[[def-cft-pointed-curve-with-formal-coordinates]]

## Facts & Assumptions

**Given:** The formal-coordinate convention and Aut O of this pair.

[F1] [[def-cft-pointed-curve-with-formal-coordinates]]: a formal coordinate is a continuous isomorphism of completed local rings; it is not required to converge.

[F2] [[def-cft-aut-o-formal-coordinate-group]]: every series $t+O(t^2)$ is an allowed formal-coordinate change, and its inverse is obtained by recursively solving coefficients.

[F3] [[lem-cft-formal-coordinate-exists-on-smooth-projective-complex-curve]]: the completion of the local ring at the chosen smooth point is a formal power-series ring; for $\mathbb P^1$ at $0$, the standard affine coordinate $z$ identifies it with $\mathbb C\llbracket z\rrbracket$.

[F4] [[thm-taylor-expansion-holomorphic-function]]: the Taylor series of an analytic germ has a positive radius of convergence.

## Proof

1.1 On $X=\mathbb P^1$ at $p=0$, take the formal series $f(t)=t+\sum_{n\ge1}n!t^{n+1}$. The map $\tau_f:\mathbb C\llbracket z\rrbracket\to\mathbb C\llbracket t\rrbracket$ sending $z\mapsto f(t)$ and fixing constants is a continuous ring isomorphism: its linear coefficient is $1$, so the coefficients of a compositional inverse are determined recursively as in [F2]. By [F3], it is a formal coordinate of the pointed curve. [F1, F2, F3, construct]

2.1 For any fixed complex $t\ne0$, the ratio of consecutive term magnitudes in the tail is $(n+1)|t|$, which tends to infinity. In particular, the terms $n!t^{n+1}$ do not tend to zero, so the series diverges at every nonzero $t$. Its radius of convergence is therefore zero, and by [F4] it cannot be the Taylor series of an analytic coordinate germ. [F1, F4, algebra] ∎
