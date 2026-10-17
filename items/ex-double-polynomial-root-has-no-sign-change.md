---
id: ex-double-polynomial-root-has-no-sign-change
kind: example
title: A double polynomial root has no sign change
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: interval-newton-krawczyk-and-polynomial-root-isolation-examples
dependency_level: 4
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - lem-polynomial-squarefree-decomposition-and-multiplicity
  - thm-sturm-sign-variation-counts-distinct-roots
  - alg-rational-polynomial-root-isolation
  - thm-rational-polynomial-root-isolation-is-sound-and-finite
verification:
  precheck: pass
---

## Example

For $p(x)=(x-1)^2=x^2-2x+1$, the values at $0$ and $2$ are both positive, so endpoint signs do not reveal its real root. The exact gcd decomposition labels the root $1$ with multiplicity $2$. The exact dyadic Sturm algorithm returns the isolating interval $(-3,3)$ with multiplicity $2$.

## Facts & Assumptions

**Given:** $p(x)=x^2-2x+1$ and the exact rational root-isolation procedure.

[F1] The gcd decomposition places a root of multiplicity $k$ in the squarefree factor $q_k$ ([[lem-polynomial-squarefree-decomposition-and-multiplicity]]).

[F2] For a squarefree polynomial with nonroot endpoints, the Sturm variation difference counts its distinct roots in the open interval ([[thm-sturm-sign-variation-counts-distinct-roots]]).

[F3] The root-isolation algorithm returns exact isolating intervals labelled by multiplicity and terminates on every nonzero rational polynomial ([[thm-rational-polynomial-root-isolation-is-sound-and-finite]]).

## Verification

1.1 Direct calculation gives $p'(x)=2x-2$ and $\gcd(p,p')=x-1$ after monic normalization. Thus $q_2=x-1$ and $q_1=1$ in [F1], so $1$ is a double root. Also $p(0)=p(2)=1>0$, and $p(x)=(x-1)^2\ge0$, so there is no sign change across the root. [given, F1, algebra]

2.1 The squarefree part is $S=x-1$ with Sturm sequence $(S,S')=(x-1,1)$. At endpoints $-3$ and $3$, the sign lists are $(-,+)$ and $(+,+)$, so $V(-3)-V(3)=1-0=1$ by [F2]. The coefficient height of $S$ is $1$, hence the algorithm starts on $(-3,3)$; its single Sturm count is one and the factor count assigns multiplicity $2$. By [F3], this is a complete isolating record. [given, F2, F3, algebra] ∎
