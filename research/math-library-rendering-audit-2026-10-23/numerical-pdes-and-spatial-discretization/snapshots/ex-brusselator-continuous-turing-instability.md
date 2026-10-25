---
id: ex-brusselator-continuous-turing-instability
kind: example
title: A Brusselator with a continuous Turing-unstable torus mode
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
aliases: []
deps:
  - def-reaction-vector-field-and-quasipositivity
  - prop-two-species-continuous-and-discrete-turing-criterion
justified_by: []
proof_strategy: direct
axiom_base: No choice axiom is used; the example is a finite algebraic calculation and a Fourier-mode substitution.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Luca Doria, Numerical Algorithms, lecture notes, Johannes Gutenberg-Universität Mainz, 2022
      url: https://www.staff.uni-mainz.de/doria/NumAlg/NumAlg.pdf
      locator: "§§10.6–10.7, PDF pp. 149–151: general reaction-diffusion systems and linear Turing mode analysis. The explicit Brusselator field and its calculations are supplied locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Consider the Brusselator field
$$
F(u,v)=\bigl(1-\tfrac52u+u^2v,\ \tfrac32u-u^2v\bigr)
$$
with diagonal diffusivity $D=\operatorname{diag}(1/10,2)$. Its homogeneous equilibrium is $(u_*,v_*)=(1,3/2)$. On the one-dimensional torus of length $L=4\pi/3$, the continuous reaction-diffusion linearization has an unstable Fourier mode with wave number $k=1$.

## Facts & Assumptions

**Given:** The reaction field and diffusivities in the Statement, and the dispersion criterion of [[prop-two-species-continuous-and-discrete-turing-criterion]].

[F1] [[prop-two-species-continuous-and-discrete-turing-criterion]]: for a mode with Laplacian eigenvalue $\lambda$, the linearized matrix is $J-\lambda D$; with negative trace, it has one positive eigenvalue when its determinant $q(\lambda)$ is negative.

[A1] The example uses $A=1$, $B=3/2$ in the standard Brusselator $F(u,v)=(A-(B+1)u+u^2v,\ Bu-u^2v)$.

## Proof

1.1 Direct substitution gives $F(1,3/2)=(0,0)$. Differentiating the two components gives $ J=DF(1,3/2)=\begin{pmatrix}1/2&1\\-3/2&-1\end{pmatrix}, \qquad \operatorname{tr}J=-1/2,\quad \det J=1. $ [F1, given, algebra]

2.1 The coefficient in the dispersion polynomial is $\beta_T=d_2J_{11}+d_1J_{22}=9/10$ and $d_1d_2=1/5$. Therefore $ q(\lambda)=\tfrac15\lambda^2-\tfrac9{10}\lambda+1 =\tfrac15(\lambda-2)(\lambda-\tfrac52). $ [step 1.1, given, algebra]

3.1 For the continuous torus mode $k=1$, $\lambda=(2\pi/L)^2=9/4$. This lies strictly between $2$ and $5/2$, so step 2.1 gives $q(9/4)<0$. By [F1], the mode matrix has one positive eigenvalue and one negative eigenvalue. This example proves a linear mode instability only; it does not assert nonlinear pattern existence or stability. [F1, step 2.1, algebra] ∎
