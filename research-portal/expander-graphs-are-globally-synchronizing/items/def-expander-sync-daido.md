---
id: def-expander-sync-daido
title: Daido order parameters
kind: definition
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-prereq-phase-torus
  - def-expander-prereq-phasor-calculus
dependency_roles:
  def-expander-prereq-phase-torus: mathematical-premise
  def-expander-prereq-phasor-calculus: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 11, Section 2.1, equation (2.7)
      statement: For a phase configuration on the vertex set V, the Daido order
        parameters are rho_k(theta) = |V|^{-1} sum over x in V of exp(i k
        theta_x), for integers k >= 1.
      hypotheses: A finite nonempty vertex set V and one phase theta_x for each
        vertex; k is a positive integer.
      reading_limits: The extracted article text at equation (2.7) and its surrounding
        paragraph was inspected for attribution. The article is not used to
        justify independence of representatives.
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 1
---

## Definition

Let $V$ be a nonempty finite vertex set, put $n=|V|$, and let $\theta\in T_V=\mathbb R^V/(2\pi\mathbb Z)^V$ be a phase configuration. Thus each phase $\theta_x$ is a real angle modulo $2\pi$; a lift is a real representative of that phase. For each integer $k\geq1$, the $k$th Daido order parameter is the complex number

$$\rho_k(\theta):=\frac{1}{|V|}\sum_{x\in V}e^{ik\theta_x},$$

where the exponential is evaluated using any real lift of each phase. Here $e^{iu}=\cos u+i\sin u$ for real $u$, with $i^2=-1$.

## Facts & Assumptions

[F1] In the phase torus, two lifts of a phase differ by an integer multiple of $2\pi$ ([[def-expander-prereq-phase-torus]]).

[F2] The phasor $e^{iu}$ is $2\pi$-periodic for real $u$, and $e^{iu}=\cos u+i\sin u$ ([[def-expander-prereq-phasor-calculus]]).

## Justification

**Given:** A nonempty finite set $V$, a phase configuration $\theta\in T_V$, and an integer $k\geq1$.

**Goal:** Show that the displayed formula determines a unique complex number independently of the lifts.

1.1 If a lift of $\theta_x$ is replaced by another, [F1] makes the change $2\pi m_x$ for an integer $m_x$. The argument $k\theta_x$ then changes by $2\pi(km_x)$, so [F2] leaves the corresponding exponential unchanged. [F1, F2, given, algebra]

2.1 By step 1.1 every summand is independent of its lift. The sum has finitely many complex summands and $|V|=n$ is positive, so its average is a uniquely determined complex number. This establishes the definition. [step 1.1, given, algebra] ∎

## Source notes

The name and formula are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF page 11, Section 2.1, equation (2.7). The justification above uses the stated mathematical suppliers.
