---
id: cor-harmonic-cauchy-estimates-in-supremum-norm
kind: corollary
title: Harmonic Cauchy estimates in supremum norm
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, lem-sphere-and-ball-measures-scale, thm-interior-derivative-estimates-for-harmonic-functions]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§2.2, printed pp. 23–25, derivative estimates and factorial bounds"
    - title: "Leon Simon, Lectures on PDE (2015 rough draft)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 4, printed pp. 36–39, Problem 4.4"
---

## Statement

Assume Countable Choice and $n\ge2$. Let $u$ be real or complex harmonic on an open $\Omega\subseteq\mathbb R^n$ with $B_r(x)\Subset\Omega$, $r>0$, and let $\alpha$ be a multi-index. Then
$$\bigl|D^\alpha u(x)\bigr|\le C'_{n,\alpha}\,r^{-|\alpha|}\sup_{B_r(x)}|u|,$$
with $C'_{n,\alpha}$ depending only on $n$ and $\alpha$.

## Facts & Assumptions

**Given:** Countable Choice, an integer $n\ge2$, an open set $\Omega$, a harmonic $u$ on $\Omega$, $x\in\Omega$, $r>0$ with $\overline{B_r(x)}\subset\Omega$, and a multi-index $\alpha$.

[F1] Under these hypotheses, $|D^\alpha u(x)|\le C_{n,\alpha}r^{-n-|\alpha|}\int_{B_r(x)}|u(y)|\,dy$ with $C_{n,\alpha}$ independent of $u,x,r,\Omega$ ([[thm-interior-derivative-estimates-for-harmonic-functions]]).

[F2] For $n\ge1$ and $r>0$, $|B_r|=\omega_{n-1}r^n/n$, finite and positive ([[lem-sphere-and-ball-measures-scale]]).

[F3] Countable Choice $\mathrm{AC}_\omega$ is the standing hypothesis ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Work under [F3] and set $M:=\sup_{B_r(x)}|u|\in[0,+\infty]$. Since $|u|$ is continuous and $B_r(x)$ is bounded, the integral $\int_{B_r(x)}|u|$ is defined in $[0,+\infty]$. [given, F3]

2.1 If $M<+\infty$, then $|u(y)|\le M$ for every $y\in B_r(x)$, so by monotonicity of the integral $\int_{B_r(x)}|u|\le M\,|B_r(x)|=M\,\omega_{n-1}r^n/n$ by [F2]. [step 1.1, F2, algebra]

3.1 Substituting step 2.1 into [F1] gives $|D^\alpha u(x)|\le C_{n,\alpha}r^{-n-|\alpha|}\cdot M\omega_{n-1}r^n/n=\bigl(C_{n,\alpha}\omega_{n-1}/n\bigr)\,r^{-|\alpha|}M$, so the stated estimate holds with $C'_{n,\alpha}:=C_{n,\alpha}\omega_{n-1}/n$, a constant depending only on $n$ and $\alpha$. [step 2.1, F1, F2, algebra]

4.1 If $M=+\infty$ the right-hand side of the stated inequality is $+\infty$ while $|D^\alpha u(x)|$ is a finite real number, so the inequality holds trivially; for the local applications of this estimate one always takes a compactly contained ball on which $|u|$, being continuous, is bounded, so the case $M=+\infty$ never carries mathematical content. [step 1.1, step 3.1, cases] ∎
