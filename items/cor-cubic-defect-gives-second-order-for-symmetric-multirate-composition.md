---
id: cor-cubic-defect-gives-second-order-for-symmetric-multirate-composition
title: "Second-order global bound under symmetric coupling and a cubic defect"
kind: corollary
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - lem-discrete-one-step-error-recurrence-bound
  - def-first-order-ode-initial-value-problem-and-solution
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Michael Günther and Adrian Sandu, Multirate Methods for Ordinary Differential Equations, CSL-TR-25-5 (2025)"
      url: "https://vtechworks.lib.vt.edu/bitstreams/107ab78d-834d-44a8-9cc8-566d7f2a2911/download"
    - title: "Mark Embree, Lecture Notes on Numerical Analysis, Lecture 34: Global Analysis of One-Step Integrators (2016)"
      url: "https://personal.math.vt.edu/embree/math5466/nanotes.pdf"
---

## Statement

Let $T>0$, $d\ge1$, let $F:\Omega\to\mathbb R^d$ be continuous on an open set $\Omega\subseteq\mathbb R^d$, and let $Y:[0,T]\to\Omega$ be an exact solution of the autonomous IVP $Y'=F(Y)$; here exact means that $Y$ is differentiable and satisfies this equation throughout $[0,T]$. Put $H=T/N$ with $N\ge1$. Let $\Psi_H$ be a macro map that produces one output from its current input by composing exact subsystem solution maps over subintervals with a coupling interpolant $I_H$; an exact subsystem solution map sends an initial substate to its exact value at the end of that subinterval. Define numerical states by $Y_{n+1}=\Psi_H(Y_n)$. Here “symmetric interpolant” means $I_H(1-\theta;v,u)=I_H(\theta;u,v)$ for every $\theta\in[0,1]$ and endpoint pair $u,v$; “symmetric step” additionally means $\Psi_{-H}=\Psi_H^{-1}$ wherever both sides are defined. Assume the interpolant and macro step are symmetric in these senses, and there is a compact set $\mathcal K\subseteq\Omega$ containing the exact path, all numerical states, and every method stage. Suppose $\|Y_0-Y(0)\|_2\le C_0H^2$ and constants $C,L\ge0$ independent of $N$ satisfy
$$\|\Psi_H(Y(t_n))-Y(t_{n+1})\|_2\le CH^3,\qquad \|\Psi_H(u)-\Psi_H(v)\|_2\le(1+LH)\|u-v\|_2$$
for every $0\le n<N$ and all admitted inputs $u,v\in\mathcal K$. Then the global error is at most
$$\max_{0\le n\le N}\|Y_n-Y(t_n)\|_2\le\left(C_0\exp(LT)+C\frac{\exp(LT)-1}{L}\right)H^2$$
when $L>0$, and at most $(C_0+CT)H^2$ when $L=0$. The symmetry assumptions alone do not imply the cubic defect premise.

## Facts & Assumptions

**Given:** The exact IVP, symmetric exact-flow macro map, compact set $\mathcal K$, initial error, uniform local-defect bound, and one-step stability bound in the Statement.

[F1] If nonnegative errors satisfy $e_0\le C_0H^p$ and $e_{n+1}\le(1+LH)e_n+CH^{p+1}$ for $H=T/N$, the finite recurrence bound has separate $L>0$ and $L=0$ forms ([[lem-discrete-one-step-error-recurrence-bound]]).

[F2] The Euclidean norm satisfies the triangle inequality ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F3] A first-order IVP solution is a differentiable curve satisfying its vector-field equation and initial data; for this autonomous field use $\widehat F(t,u)=F(u)$ on $\mathbb R\times\Omega$ ([[def-first-order-ode-initial-value-problem-and-solution]]).

[A1] The local defect and stability inequalities hold with the same constants on all $N$ steps, and the exact path, numerical states, and method stages remain in $\mathcal K$.

## Proof

1.1 Set $e_n:=\|Y_n-Y(t_n)\|_2$ for the exact solution [F3]. The Euclidean triangle inequality [F2], the local-defect premise, and the stability premise in [A1] give $$e_{n+1}\le\|\Psi_H(Y_n)-\Psi_H(Y(t_n))\|_2+\|\Psi_H(Y(t_n))-Y(t_{n+1})\|_2\le(1+LH)e_n+CH^3.$$ [F2, F3, A1, algebra]

2.1 Apply [F1] with order $p=2$, step $H$, and the stated $C_0,C,L$. The initial error and recurrence from step 1.1 are exactly its hypotheses, so the $L>0$ and $L=0$ cases give the claimed bounds. [A1, F1, step 1.1, algebra] ∎

## Remarks

The proof uses the one-step cubic defect and stability bounds. A specific Strang or other exact-flow multirate construction must establish those bounds for its actual coupling and interpolation before this corollary applies; symmetry by itself is not a local-error estimate.
