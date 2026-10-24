---
id: cor-entire-harmonic-function-of-sublinear-growth-is-constant
kind: corollary
title: Entire harmonic functions of sublinear growth are constant
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, cor-harmonic-cauchy-estimates-in-supremum-norm, cor-zero-derivative-implies-constant, thm-chain-rule-for-total-derivatives]
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Leon Simon, Lectures on PDE (2015 rough draft)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 4, printed pp. 36–39, Problem 4.5 polynomial-growth consequences of the derivative estimate"
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§2.2, printed pp. 23–25, interior derivative estimates"
---

## Statement

Assume Countable Choice and $n\ge2$. Use one-based basis labels $e_i:=e_{i-1}^{\mathrm{can}}$ for $1\le i\le n$. Let $u:\mathbb R^n\to\mathbb R$ or $\mathbb C$ be harmonic. If
$$\lim_{R\to\infty}R^{-1}\sup_{B_R(0)}|u|=0,$$
then $u$ is constant.

## Facts & Assumptions

**Given:** Countable Choice, an integer $n\ge2$, a harmonic $u$ on all of $\mathbb R^n$ with $\lim_{R\to\infty}R^{-1}\sup_{B_R(0)}|u|=0$.

[F1] Under the compact-ball hypotheses, $|D^\alpha u(x)|\le C'_{n,\alpha}r^{-|\alpha|}\sup_{B_r(x)}|u|$ ([[cor-harmonic-cauchy-estimates-in-supremum-norm]]).

[F2] A continuous function on an interval whose derivative vanishes at every interior point is constant there ([[cor-zero-derivative-implies-constant]]); the chain rule computes the derivative of a restriction to a line ([[thm-chain-rule-for-total-derivatives]]).

[F3] Countable Choice $\mathrm{AC}_\omega$ is the standing hypothesis ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Work under [F3] and fix $x\in\mathbb R^n$. For every $R>|x|$ put $\rho_R:=(R-|x|)/2>0$. If $y\in\overline B_{\rho_R}(x)$, then $|y|\le|y-x|+|x|\le\rho_R+|x|=(R+|x|)/2<R$, so $\overline B_{\rho_R}(x)\subset B_R(0)$. [given, F3, algebra]

2.1 Apply [F1] with radius $\rho_R$ and coordinate multi-index $\alpha=e_i$ for each $i=1,\ldots,n$. With $K_n:=2\sqrt n\max_i C'_{n,e_i}$, step 1.1 gives $$|Du(x)|\le\sqrt n\max_i|\partial_i u(x)|\le\sqrt n\max_i C'_{n,e_i}\,\rho_R^{-1}\sup_{B_{\rho_R}(x)}|u|\le K_n\frac{R}{R-|x|}\,R^{-1}\sup_{B_R(0)}|u|$$ for every $R>|x|$. [step 1.1, F1, algebra]

3.1 Letting $R\to\infty$ in step 2.1, the factor $R/(R-|x|)\to1$ and $R^{-1}\sup_{B_R(0)}|u|\to0$ by hypothesis, so $|Du(x)|\le\lim_{R\to\infty}K_n\frac{R}{R-|x|}R^{-1}\sup_{B_R(0)}|u|=0$; hence $Du(x)=0$ for every $x\in\mathbb R^n$. [step 2.1, algebra]

4.1 Therefore $u$ is constant: for fixed $x\in\mathbb R^n$ and each coordinate $i$, if $u$ is real-valued then $t\mapsto u(x+te_i)$ has zero derivative for every real $t$ by step 3.1, so it is constant on $\mathbb R$ by [F2]; if $u$ is complex-valued, apply [F2] separately to the real and imaginary parts of this line restriction, whose derivatives also vanish by step 3.1. Thus each coordinate line restriction is constant, and changing the coordinates one at a time connects any two points of $\mathbb R^n$, so $u$ has the same value everywhere. The chain rule identifies each line derivative with the corresponding partial derivative. No bounded-Liouville theorem is invoked; the sublinear growth hypothesis is used exactly in step 3.1. [step 3.1, F2] ∎
