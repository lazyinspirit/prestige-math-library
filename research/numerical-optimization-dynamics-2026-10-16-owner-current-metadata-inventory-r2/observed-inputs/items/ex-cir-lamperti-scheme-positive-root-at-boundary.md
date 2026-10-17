---
id: ex-cir-lamperti-scheme-positive-root-at-boundary
kind: example
title: "The CIR Lamperti step remains positive from the boundary value"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-cir-lamperti-positive-implicit-scheme
  - lem-cir-lamperti-transform-and-positive-root
  - def-axiom-of-choice
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Aurélien Alfonsi, Strong convergence of some drift implicit Euler scheme. Application to the CIR process, equation (3) and positive-root discussion"
      url: "https://arxiv.org/pdf/1206.3855"
---

## Statement

Let $\kappa,\theta,\sigma,h>0$ satisfy $2\kappa\theta\ge\sigma^2$.
Starting the numerical Lamperti state at the boundary value $z_n=0$, even a
negative Brownian increment $\Delta W_n=-r$ with arbitrary $r\ge0$ gives a
strictly positive next state under the CIR scheme.

## Facts & Assumptions

**Given:** AC, positive parameters satisfying the Feller condition, $z_n=0$, and $\Delta W_n=-r$ for $r\ge0$.

[F1] Put $a=(4\kappa\theta-\sigma^2)/8$, $A=1+\kappa h/2$, and $c=z_n+\sigma\Delta W_n/2$. The scheme returns $(c+\sqrt{c^2+4Aah})/(2A)$. [[alg-cir-lamperti-positive-implicit-scheme]]

[F2] Under $\kappa,\theta,\sigma>0$ and $2\kappa\theta\ge\sigma^2$, $a>0$ and the displayed root is the unique positive solution of the drift-implicit Lamperti equation for every $z_n\ge0$ and finite increment. [[lem-cir-lamperti-transform-and-positive-root]]

[A1] AC is inherited from the numerical Brownian and algebraic interfaces. [[def-axiom-of-choice]]

## Proof

**Given:** The hypotheses and supplier statements above.

1.1 From the parameter assumptions, $4\kappa\theta-\sigma^2\ge\sigma^2>0$, so $a>0$; also $A=1+\kappa h/2>0$. With $z_n=0$ and $\Delta W_n=-r$, $c=-\sigma r/2\le0$. [F1, F2, given, algebra]

2.1 Since $4Aah>0$, $$\sqrt{c^2+4Aah}>|c|=\sigma r/2.$$ Therefore the numerator $c+\sqrt{c^2+4Aah}$ and denominator $2A$ are both strictly positive, so the algorithm's next Lamperti state is positive. Its square is also strictly positive. The uniqueness and equation interpretation follow from [F2], including the case $r=0$. AC is exactly [A1]. [A1, F1, F2, step 1.1, given, algebra] ∎
