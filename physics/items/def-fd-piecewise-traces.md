---
id: def-fd-piecewise-traces
kind: definition
title: Planar shocks and piecewise smooth traces
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-fd-conservation-system
dependency_roles:
  def-fd-conservation-system: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Constantine M. Dafermos, Hyperbolic Conservation Laws in Continuum Physics, 2nd ed., Chapter III §3.1 and Chapter IV §4.3"
      url: "https://yulia-petrova.github.io/teaching/shocks/Dafermos.pdf"
    - title: "Lawrence C. Evans, Entropy and Partial Differential Equations, Chapter V §3"
      url: "https://math.berkeley.edu/~evans/entropy.and.PDE.pdf"
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Definition

Let $I\subseteq\mathbb R$ be open, $\Omega\subseteq\mathbb R^d$ be open, $\mathcal O\subseteq\mathbb R^m$ be the state domain of a conservation system, $n\in\mathbb R^d$ satisfy $|n|=1$, and $s\in\mathbb R$. The planar interface and its two open sides are
$$\Sigma=\{(t,x)\in I\times\Omega:n\cdot x-st=0\},\qquad Q^-=\{(t,x)\in I\times\Omega:n\cdot x-st<0\},\qquad Q^+=\{(t,x)\in I\times\Omega:n\cdot x-st>0\}.$$
A state field is piecewise $C^1$ across $\Sigma$ if on each side it is $C^1$ and, near every point of $\Sigma$, each side field is the restriction of a $C^1$ map from a neighborhood in $I\times\Omega$ into $\mathcal O$. The left and right traces $U_L,U_R:\Sigma\to\mathcal O$ are the restrictions of those extensions to $\Sigma$; they are independent of the chosen extensions because they agree with the same field on their respective open sides. For any state or flux quantity $G$ with these traces, define its jump by $[G]=G_R-G_L$. A planar shock profile is such a piecewise $C^1$ state field with its specified constant interface normal $n$ and speed $s$; the definition does not assert that it solves a conservation system.

## Definition references

[[def-fd-conservation-system|conservation-system state and flux domains]]

## Remarks

This definition supplies actual one-sided traces only for fields with the stated piecewise smooth extensions. It does not assert a trace theorem for arbitrary locally bounded weak solutions. The value assigned on $\Sigma$ is not part of either one-sided trace.
