---
id: prop-classical-solutions-are-viscosity-solutions
kind: proposition
title: Classical solutions are viscosity solutions and differentiable viscosity solutions solve the equation pointwise
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-viscosity-subsolution-and-supersolution
- def-discontinuous-viscosity-solution
- def-hamilton-jacobi-cauchy-problem
- def-total-derivative-in-euclidean-space
- thm-fermat-for-euclidean-local-extrema
- def-directional-and-partial-derivatives
- lem-viscosity-testing-by-first-order-jets
justified_by: []
aliases: []
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 1 Exercise 5, Lemma 1.11 and Theorem 1.12, printed pp. 19--22
  - title: Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations, Bulletin of the American Mathematical Society 27 (1992), 1--67 (complete article)
    url: https://arxiv.org/pdf/math/9207212
    locator: Remarks 2.3 and the equivalence of the test-function and jet formulations, printed pp. 10--11
  - title: Alberto Bressan, Viscosity Solutions of Hamilton--Jacobi Equations and Optimal Control Problems, complete author lecture notes, Penn State University (PDF records Fall 2019 revision)
    url: https://sites.psu.edu/bressan/files/2025/05/HJlnotes24.pdf
    locator: Section 3, viscosity versus classical solutions, printed pp. 10--12
verification:
  precheck: pass
---

## Statement

Let $O\subseteq\mathbb R^n$ be open, $T>0$, let
$H:O\times[0,T]\times\mathbb R^n\to\mathbb R$ be continuous, let
$u_0:O\to\mathbb R$ be continuous, and let $Z=O\times(0,T)$.
(1) If $u\in C^1(Z)\cap C^0(\overline Z)$ satisfies
$u_t+H(x,t,Du)=0$ pointwise on $Z$ and $u(x,0)=u_0(x)$ on $O$ (a classical
solution in the sense of [[def-hamilton-jacobi-cauchy-problem]]), then $u$ is a
viscosity solution of the Cauchy problem. (2) Conversely, if $u:Z\to\mathbb R$
is a continuous viscosity solution and $u$ is differentiable at a point
$z_0\in Z$, then
$$u_t(z_0)+H(z_0,Du(z_0))=0 .$$
In particular, a viscosity solution of class $C^1(Z)$ is a classical solution
of the equation on $Z$ (its initial trace being part of the Cauchy-problem
notion). No choice principle is used.

## Facts & Assumptions

**Given:** Open $O\subseteq\mathbb R^n$, $T>0$, continuous $H:O\times[0,T]\times\mathbb R^n\to\mathbb R$, continuous $u_0:O\to\mathbb R$, $Z=O\times(0,T)$.

[F1] $w$ is a viscosity subsolution of $u_t+H(x,t,Du)=0$ in $Z$ when $\phi_t(z_0)+H(z_0,D\phi(z_0))\le0$ at every local maximum of $w-\phi$, $\phi\in C^1(Z)$; a supersolution satisfies the reverse inequality at every local minimum; a subsolution of the Cauchy problem also satisfies $\limsup_{(y,s)\to(x,0),\ s>0,\ y\in O}w(y,s)\le u_0(x)$ and a supersolution $\liminf_{(y,s)\to(x,0),\ s>0,\ y\in O}w(y,s)\ge u_0(x)$ at every $x\in O$ ([[def-viscosity-subsolution-and-supersolution]]).

[F2] If a real-valued function on an open set is differentiable at a point where it has a local maximum or a local minimum, then its total derivative vanishes there ([[thm-fermat-for-euclidean-local-extrema]]).

[F3] For an upper semicontinuous $u$: $u$ is a viscosity subsolution of the equation in $Z$ if and only if $p_t+H(z_0,p_x)\le0$ for every $z_0\in Z$ and every $p\in D^+u(z_0)$; for a lower semicontinuous $v$: $v$ is a supersolution if and only if $p_t+H(z_0,p_x)\ge0$ for every $p\in D^-v(z_0)$ ([[lem-viscosity-testing-by-first-order-jets]]).

[F4] Total differentiability of $u$ at $z_0$ with derivative $Du(z_0)$ means $u(z_0+h)=u(z_0)+Du(z_0)h+o(|h|)$; consequently $Du(z_0)\in D^+u(z_0)\cap D^-u(z_0)$ ([[def-total-derivative-in-euclidean-space]], [[def-directional-and-partial-derivatives]]).

## Proof

**Proof technique:** Fermat's theorem at a $C^1$ contact for the classical direction, and the jet characterisation for the converse.

1.1 Classical solutions are viscosity solutions. Let $u\in C^1(Z)\cap C^0(\overline Z)$ solve the equation pointwise, and let $\phi\in C^1(Z)$ with $u-\phi$ having a local maximum at $z_0\in Z$. Then $u-\phi$ is differentiable at $z_0$ and has a local extremum there, so $D\phi(z_0)=Du(z_0)$ by [F2]; hence $\phi_t(z_0)+H(z_0,D\phi(z_0))=u_t(z_0)+H(z_0,Du(z_0))=0\le0$. At a local minimum the same computation gives $\phi_t(z_0)+H(z_0,D\phi(z_0))=0\ge0$. Since $u$ extends continuously to $\overline Z$ with $u(x,0)=u_0(x)$, the relaxed initial conditions of [F1] hold; so $u$ is both a subsolution and a supersolution of the Cauchy problem. [F1, F2, algebra]

1.2 Differentiable viscosity solutions solve the equation pointwise. Let $u:Z\to\mathbb R$ be continuous and differentiable at $z_0\in Z$. By [F4], $Du(z_0)\in D^+u(z_0)\cap D^-u(z_0)$; since $u$ is a continuous viscosity solution, it equals its envelopes ([[def-discontinuous-viscosity-solution]]), so $u$ is both an upper semicontinuous subsolution and a lower semicontinuous supersolution in the sense of [F1]. Applying [F3] at $z_0$ with $p=Du(z_0)$ gives both $u_t(z_0)+H(z_0,Du(z_0))\le0$ and $u_t(z_0)+H(z_0,Du(z_0))\ge0$, hence equality. [F1, F3, F4]

2.1 Conclusion. If in addition $u\in C^1(Z)$, then the pointwise equation holds at every $z_0\in Z$ by step 1.2, and by step 1.1 the classical solution is a viscosity solution; the initial trace of a Cauchy-problem viscosity solution is the datum by [F1], so a $C^1$ viscosity solution solves the equation classically on $Z$ and extends continuously to the initial face. To be a classical solution of the Cauchy problem in the stronger sense of [[def-hamilton-jacobi-cauchy-problem]], it must additionally extend continuously to all of $\overline Z$. [step 1.1, step 1.2, F1] ∎

## Remarks

- **What is not claimed.** Part (2) presupposes that the viscosity solution is differentiable at the point; viscosity solutions of Hamilton--Jacobi equations are typically not differentiable everywhere, and the proposition says nothing about the nondifferentiable set.
- **Choice.** Both directions are pointwise computations with the definitions; no selection principle occurs.
