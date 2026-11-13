---
id: thm-se-1-2
kind: theorem
domain: mathematics
title: "Theorem 1.2: linear control on the full stated scale"
status: published
proof_strategy: direct
deps:
  - def-se-internal-systems
  - def-se-nontrapping
  - def-se-control-cutoffs
  - def-se-dirichlet-scale
  - def-se-foundation-time-function-spaces
  - thm-se-3-6
  - math:def-axiom-of-choice
dependency_roles:
  def-se-internal-systems: mathematical-premise
  def-se-nontrapping: mathematical-premise
  def-se-control-cutoffs: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  thm-se-3-6: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 19
---

## Statement

Assume the Axiom of Choice and hypothesis (H): $n\ge2$, the nonempty compact obstacle $\Theta\subset\mathbb R^n$ has smooth boundary, its exterior $\Omega=\mathbb R^n\setminus\Theta$ is connected, and its generalized reflected rays leave every compact set in finite time. Let $R>0$ and the real smooth cutoff $\varphi$ be as in [[def-se-control-cutoffs]]. Let $T>0$ and $s\in[-2,2]$. For every $z_0,z_T\in H_D^s(\Omega)$, there is a control $h\in C([0,T];H_D^s(\Omega))$ such that the linear system $i\partial_t z+\Delta z=\varphi h$, with homogeneous Dirichlet boundary condition and initial state $z_0$, has a mild solution $z\in C([0,T];H_D^s(\Omega))$ satisfying $z(T)=z_T$.

Here $H_D^s(\Omega)$ is the Dirichlet spectral Hilbert scale associated with $I-\Delta_D$, and $C([0,T];H_D^s(\Omega))$ denotes norm-continuous paths. The homogeneous boundary condition is encoded by the Dirichlet realization and its scale; at negative orders the solution is understood in the corresponding mild evolution sense.

## Facts & Assumptions

[F1] Under the stated geometry, cutoff, Choice assumption, $T$ and $s$, [[thm-se-3-6]] gives a bounded complex-linear operator $G:H_D^s(\Omega)\times H_D^s(\Omega)\to C([0,T];H_D^s(\Omega))$. For each endpoint pair, its control produces the unique mild solution of the stated linear system with initial value $z_0$ and terminal value $z_T$.

[F2] The linear equation and cutoff convention are those of [[def-se-internal-systems]] and [[def-se-control-cutoffs]]; its scale and norm-continuous path notation are fixed by [[def-se-dirichlet-scale]] and [[def-se-foundation-time-function-spaces]]. The geometric convention is that of [[def-se-nontrapping]], and the Choice assumption is recorded in [[math:def-axiom-of-choice]].

## Proof

**Given:** The geometry, Choice assumption, cutoff, $T$, $s$ and endpoints in the Statement.

**Goal:** Find a continuous control and a continuous mild solution joining the two endpoints.

1.1 The given hypotheses match those of F1. Apply its operator to the given endpoints and set $h=G(z_0,z_T)$. Its codomain gives $h\in C([0,T];H_D^s(\Omega))$. [given, F1, F2]

2.1 F1 supplies the unique mild solution for this control, continuous in $H_D^s(\Omega)$, with initial state $z_0$ and terminal state $z_T$. By F2 this is the linear system and terminology in the Statement. Thus the chosen $h$ and solution have all the required properties. [F1, F2, step 1.1] ∎

## Source notes

The frozen article is cited for attribution of Theorem 1.2. The deduction above uses [[thm-se-3-6]], rather than the article's statement of Theorem 1.2, as its proof input. The Choice hypothesis is inherited from the stated supplier and is not attributed to the article.
