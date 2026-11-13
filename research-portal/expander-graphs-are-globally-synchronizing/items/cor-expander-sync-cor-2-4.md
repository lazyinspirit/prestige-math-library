---
id: cor-expander-sync-cor-2-4
title: Lower bound for the second order parameter — Corollary 2.4
kind: corollary
domain: mathematics
status: draft
origin: pipeline
deps:
  - lem-expander-sync-lem-2-3
  - prop-expander-sync-h-properties
  - def-expander-sync-h
  - def-expander-sync-daido
  - def-expander-sync-adjacency-expander
  - def-expander-sync-graph-notation
  - def-expander-sync-states
  - def-expander-prereq-phasor-calculus
  - math:def-countable-choice
  - math:def-complex-conjugate-real-imaginary-part-and-modulus
formulation_deps:
  - def-expander-sync-daido
  - def-expander-sync-adjacency-expander
  - def-expander-sync-graph-notation
  - def-expander-sync-states
  - def-expander-prereq-phasor-calculus
  - math:def-countable-choice
  - math:def-complex-conjugate-real-imaginary-part-and-modulus
argument_deps:
  - lem-expander-sync-lem-2-3
  - prop-expander-sync-h-properties
  - def-expander-sync-h
  - def-expander-sync-daido
  - def-expander-prereq-phasor-calculus
  - math:def-countable-choice
  - math:def-complex-conjugate-real-imaginary-part-and-modulus
dependency_roles:
  lem-expander-sync-lem-2-3: mathematical-premise
  prop-expander-sync-h-properties: mathematical-premise
  def-expander-sync-h: mathematical-premise
  def-expander-sync-daido: mathematical-premise
  def-expander-sync-adjacency-expander: mathematical-premise
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-sync-states: mathematical-premise
  def-expander-prereq-phasor-calculus: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 11, last paragraph of Section 2.1; p. 15, Corollary 2.4 and its
        proof
      statement: For a stable state on an expander with real positive first order
        parameter, the second order parameter satisfies the displayed lower
        bound in equation (2.10).
      hypotheses: The section assumes a connected graph and phases represented in
        (-pi, pi], with the first order parameter real and nonnegative; the
        corollary additionally requires it to be positive.
      reading_limits: The supplied extracted article text at the standing assumptions,
        corollary and proof was inspected for attribution. The argument below
        uses the declared local mathematical suppliers.
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 10
---

## Statement

Assume countable choice. Let $G=(V,E)$ be a connected finite undirected graph with $n=|V|>0$, symmetric binary adjacency matrix $A$ and possible self-loops. Connected means that every two vertices can be joined by a finite edge path. Let $d^*,\alpha\in\mathbb R$, and suppose $G$ is an $(n,d^*,\alpha)$-expander: $\|A-(d^*/n)J\|\le\alpha d^*$, where $J$ is the all-ones matrix and the norm is the Euclidean operator norm. Let $\theta$ be a stable state, meaning a local minimum on the phase torus of $\mathcal E_G(\theta)=\frac12\sum_{x,y\in V}A_{xy}(1-\cos(\theta_x-\theta_y))$. For $k\ge1$, define its Daido order parameter by $\rho_k(\theta)=n^{-1}\sum_{x\in V}e^{ik\theta_x}$, using real representatives of the phases. If $\rho_1(\theta)$ is real and positive, then $|\rho_2(\theta)|\ge1-2\alpha^2/\rho_1(\theta)^2$.

## Statement references

[[def-expander-sync-graph-notation]]

[[def-expander-sync-adjacency-expander]]

[[def-expander-sync-states]]

[[def-expander-sync-daido]]

[[def-expander-prereq-phasor-calculus]]

[[math:def-countable-choice]]

[[math:def-complex-conjugate-real-imaginary-part-and-modulus]]

## Facts & Assumptions

[F1] Under the statement's hypotheses, after choosing representatives $\theta_x\in(-\pi,\pi]$, Lemma 2.3 gives $n\alpha^2\ge\rho_1(\theta)^2\sum_xH(\theta_x)$. It assumes countable choice and applies to connected graphs, including zero reference degree ([[lem-expander-sync-lem-2-3]], [[math:def-countable-choice]]).

[F2] On $(-\pi,\pi]$, $H(t)=\sin^2(|t|)$ for $|t|\le\pi/2$ and $H(t)=1$ for $\pi/2\le|t|\le\pi$; in particular $H(t)\ge\sin^2t$ ([[def-expander-sync-h]], [[prop-expander-sync-h-properties]]).

[F3] The Daido parameter is the stated average, independent of the representatives. For real $t$, $e^{it}=\cos t+i\sin t$, $|e^{it}|=1$, and $e^{i(u+v)}=e^{iu}e^{iv}$; the real part of a finite sum is the sum of its real parts ([[def-expander-sync-daido]], [[def-expander-prereq-phasor-calculus]]).

[F4] For $z=a+ib$ with $a,b\in\mathbb R$, $\operatorname{Re}z=a$ and $|z|=\sqrt{a^2+b^2}$, where the square root is nonnegative ([[math:def-complex-conjugate-real-imaginary-part-and-modulus]]).

## Proof

**Given:** The connected expander and stable state in the statement, with $\rho_1(\theta)>0$ real, under countable choice.

**Goal:** Prove $|\rho_2(\theta)|\ge1-2\alpha^2/\rho_1(\theta)^2$.

1.1 Choose each phase representative in $(-\pi,\pi]$. By [F3] and [F4], $\cos^2t+\sin^2t=|e^{it}|^2=1$; squaring $e^{it}=\cos t+i\sin t$ and using the addition law gives $\cos(2t)=\cos^2t-\sin^2t=1-2\sin^2t$. For any $z=a+ib$, put $m=|z|$. By [F4], $m\ge0$ and $m^2=a^2+b^2$. If $m<a$, then $a>0$ and $0<(a-m)(a+m)=-b^2\le0$, a contradiction. Thus $|z|\ge\operatorname{Re}z$. Hence $|\rho_2|\ge\operatorname{Re}\rho_2=1-(2/n)\sum_x\sin^2\theta_x\ge1-(2/n)\sum_xH(\theta_x)$. [F2, F3, F4, given, algebra]

2.1 Because $n>0$ and $\rho_1>0$, [F1] gives $(1/n)\sum_xH(\theta_x)\le\alpha^2/\rho_1^2$. Substitution into step 1.1 proves the claimed bound. [F1, step 1.1, given, algebra] ∎

## Source notes

The corollary and its standing connectedness assumption are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF pp. 11 and 15. The proof above derives the conclusion from the stated suppliers.
