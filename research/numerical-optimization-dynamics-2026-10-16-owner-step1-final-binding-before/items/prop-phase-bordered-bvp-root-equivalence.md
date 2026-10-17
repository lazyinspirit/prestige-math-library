---
id: prop-phase-bordered-bvp-root-equivalence
kind: proposition
title: "Zeros of the phase-bordered BVP are phase-fixed periodic orbits"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-phase-bordered-periodic-orbit-bvp
  - def-nonlinear-two-point-bvp-and-boundary-residual
  - thm-fundamental-theorem-for-autonomous-smooth-odes
  - thm-chain-rule-for-total-derivatives
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "E. J. Doedel and B. E. Oldeman, AUTO-07P full manual (2021)"
      url: "https://raw.githubusercontent.com/auto-07p/auto-07p/master/doc/auto.tex"
      locator: "Full 12,856-line manual retrieved; inspected periodic families/Floquet source lines 587–645, ISP warning lines 4926–4950, and phase-shifting demo ph1 lines 6822–6863."
    - title: "Y. A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Chapter 1, §1.5"
      url: "https://www.ma.imperial.ac.uk/~dturaev/kuznetsov.pdf"
      locator: "Complete 614-page second-edition PDF retrieved; inspected printed pp. 26–30 on transverse sections, return maps, variational equation, monodromy, and phase multiplier."
---

## Statement

Let $f$, $\psi$, $G$, and $\widetilde f$ be as in [[def-phase-bordered-periodic-orbit-bvp]]. Assume the exact flow exists uniquely on $[0,\theta]$ and $f(x)\ne0$. Then $G(x,\theta)=0$ if and only if $s\mapsto(\phi_{\theta s}(x),\theta)$ solves the augmented BVP on $[0,1]$, with a nonconstant periodic trajectory whose phase satisfies $\psi(x)=0$.

## Facts & Assumptions

**Given:** An autonomous $C^2$ vector field, a phase function, a positive $\theta$, and a unique exact flow on $[0,\theta]$ from the trial point.

[F1] The augmented vector field is $(x,\theta)\mapsto(\theta f(x),0)$, its boundary map is $(x_1-x_0,\psi(x_0))$, and its shooting residual is $(\phi_\theta(x)-x,\psi(x))$ ([[def-phase-bordered-periodic-orbit-bvp]]).

[F2] A solution of a square BVP is a differentiable curve satisfying its vector field and endpoint residual ([[def-nonlinear-two-point-bvp-and-boundary-residual]]).

[F3] The smooth autonomous local flow is the unique solution map, satisfies $\partial_t\phi_t(x)=f(\phi_t(x))$, and obeys the flow law wherever both sides are defined ([[thm-fundamental-theorem-for-autonomous-smooth-odes]]).

[F4] The derivative of a composition is the composition of its derivatives ([[thm-chain-rule-for-total-derivatives]]).

## Proof
1.1 Suppose $G(x,\theta)=0$. Set $u(s)=(\phi_{\theta s}(x),\theta)$. By [F3] and [F4], $u'(s)=(\theta f(\phi_{\theta s}(x)),0)=\widetilde f(u(s))$. Its endpoint state has the same $x$ component as its initial state, and its initial phase residual is $\psi(x)=0$, so [F1]–[F2] make it an augmented BVP solution. [given, F1, F2, F3, F4, construct]

2.1 Define $\gamma(t)=\phi_t(x)$ for $0\le t\le\theta$. By [F3] it solves $\gamma'=f(\gamma)$, and $G(x,\theta)=0$ gives $\gamma(\theta)=\gamma(0)$ and $\psi(\gamma(0))=0$. Since $f(x)\ne0$, it is nonconstant. [given, F1, F3, step 1.1]

3.1 Conversely, let $\gamma$ be a nonconstant solution on $[0,\theta]$ with $\gamma(\theta)=\gamma(0)$ and $\psi(\gamma(0))=0$. Uniqueness in [F3] identifies $\gamma(t)=\phi_t(\gamma(0))$. Thus both components of $G(\gamma(0),\theta)$ vanish, and $u(s)=(\gamma(\theta s),\theta)$ satisfies the augmented BVP by the same chain-rule calculation as step 1.1. [given, F1, F2, F3, F4, step 1.1] ∎
