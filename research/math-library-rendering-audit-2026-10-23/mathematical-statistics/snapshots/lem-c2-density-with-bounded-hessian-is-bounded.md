---
id: lem-c2-density-with-bounded-hessian-is-bounded
kind: lemma
title: "An integrable C² density with bounded Hessian is bounded"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-density-target-and-kernel-density-estimator
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-chain-rule-for-total-derivatives
  - thm-integration-by-parts
  - thm-ftc-second-part
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Whitney K. Newey, Nonparametric and Semiparametric Estimation, MIT OpenCourseWare 14.385, Fall 2007, Proposition 1, PDF p. 3"
      url: "https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/655fcef1b4192f40d80edea3c1dd85ce_notes_nonsemi.pdf"
    - title: "Adrian Bowman and Ludger Evers, Nonparametric Smoothing, APTS 2013–14 course notes, §1.2.1, PDF p. 8"
      url: "https://warwick.ac.uk/fac/sci/statistics/apts/students/resources-1314/ns_notes.pdf"
---

## Statement

Let $f:\mathbb R^d\to[0,\infty)$ be a density version with all partial
derivatives through order two existing and continuous, so
$\int f\,d\lambda_d=1$. If its Hessian satisfies
$H:=\sup_x\|D^2f(x)\|_{op}<\infty$, then $f$ is bounded.

## Facts & Assumptions

**Given:** $d\ge1$, a pointwise nonnegative $C^2$ density version $f$ on $\mathbb R^d$, and a finite global Hessian bound $H$.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] A density version is Borel, nonnegative and has integral one ([[def-density-target-and-kernel-density-estimator]]).

[F2] Assuming $\mathrm{AC}_\omega$, every box with side lengths $\ell_1,\ldots,\ell_d$ has Lebesgue measure $\prod_j\ell_j$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F3] The nonnegative integral is monotone ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F4] The total-derivative chain rule differentiates a smooth function along an affine line ([[thm-chain-rule-for-total-derivatives]]).

[F5] Integration by parts and the second fundamental theorem evaluate the integral of a derivative on a compact interval ([[thm-integration-by-parts]], [[thm-ftc-second-part]]).

## Proof
1.1 Set $C=\max(1,H)$. For $x\in\mathbb R^d$, write $M=f(x)$ and $g=\nabla f(x)$. For $q(t)=f(x+ty)$, the chain rule [F4] gives $q'(0)=g\cdot y$ and $q''(t)=y^TD^2f(x+ty)y$. Integration by parts and the second fundamental theorem [F5] give $q(1)-q(0)-q'(0)=\int_0^1(1-t)q''(t)dt.$ Since $|q''(t)|\le C\|y\|^2$ and $\int_0^1(1-t)dt=1/2$, this yields $\left|f(x+y)-M-g\cdot y\right|\le\frac C2\|y\|^2,$ so both the upper and lower Taylor bounds with this remainder hold. Taking $y=-g/C$ and using $f\ge0$ yields $0\le f(x-g/C)\le M-\|g\|^2/(2C)$; hence $\|g\|\le\sqrt{2CM}$. [given, F1, F4, F5, choose, algebra]

2.1 If $M>0$, put $r=\tfrac18\sqrt{M/C}$. For every $y$ with $\|y\|\le r$, the corresponding lower Taylor bound and step 1.1 give $f(x+y)\ge M-\|g\|r-\frac C2r^2\ge M\left(1-\frac{\sqrt2}{8}-\frac1{128}\right)\ge\frac12M.$ The cube $Q=x+[-r/\sqrt d,r/\sqrt d]^d$ lies in that ball and has measure $\lambda_d(Q)=(2r/\sqrt d)^d=(M/(16Cd))^{d/2}$ by [A1] and [F2]. [step 1.1, A1, F2, algebra]

3.1 Monotonicity [F3] and $\int f=1$ now imply $1\ge\int_Qf\,d\lambda_d\ge\frac12M\left(\frac{M}{16Cd}\right)^{d/2}.$ Thus $M^{1+d/2}\le2(16Cd)^{d/2}$ for every $x$ with $f(x)>0$; points where $f(x)=0$ satisfy the same resulting finite bound. Therefore $f$ is bounded. [step 2.1, F1, F3, algebra] ∎ 
