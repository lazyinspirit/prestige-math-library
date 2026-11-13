---
id: def-expander-sync-phase-arcs
title: Phase tail sets for amplification
kind: definition
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-prereq-phase-torus
  - def-expander-prereq-phasor-calculus
  - prop-expander-prereq-ordered-angle-inequalities
  - math:lem-integer-part
  - math:def-abs-value
dependency_roles:
  def-expander-prereq-phase-torus: mathematical-premise
  def-expander-prereq-phasor-calculus: mathematical-premise
  prop-expander-prereq-ordered-angle-inequalities: mathematical-premise
  math:lem-integer-part: mathematical-premise
  math:def-abs-value: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 22, Section 4, equation (4.1) and the following sentence; PDF p.
        11, Section 2.1
      statement: For $0\le\psi\le\pi$, the article defines $\mathcal
        C_\psi(\theta)=\{x\in V:\cos\theta_x\le\cos\psi\}$ and gives the
        equivalent description by $|\theta_x|\ge|\psi|$, using phase
        representatives in $(-\pi,\pi]$.
      hypotheses: A phase state indexed by the graph's vertex set, with phases
        represented in $(-\pi,\pi]$, and $0\le\psi\le\pi$.
      reading_limits: The cited passages of the extracted article text were inspected
        for the definition and phase convention. The article is cited for
        attribution, not as proof of the equivalence.
dependency_level: 1
---

## Definition

Let $V$ be a nonempty finite set of vertices, and let $\theta\in T_V=\mathbb R^V/(2\pi\mathbb Z)^V$ be a phase configuration: each coordinate is a real angle modulo $2\pi$. For each $x\in V$, write $\theta_x$ for its unique representative in $(-\pi,\pi]$. For an angle $0\le\psi\le\pi$, define the phase tail set

$$\mathcal C_\psi(\theta):=\{x\in V:\cos\theta_x\le\cos\psi\}=\{x\in V:|\theta_x|\ge\psi\}.$$

Thus $\mathcal C_\psi(\theta)$ consists of the vertices whose principal angular distance from phase zero is at least $\psi$; here that distance is $|\theta_x|$.

## Definition references

[[def-expander-prereq-phase-torus]]

[[def-expander-prereq-phasor-calculus]]

[[prop-expander-prereq-ordered-angle-inequalities]]

[[math:lem-integer-part]]

## Facts & Assumptions

[F1] In $T_V$, two real representatives of a coordinate represent the same phase exactly when they differ by an integer multiple of $2\pi$ ([[def-expander-prereq-phase-torus]]).

[F2] Every real number has a representative modulo $2\pi$ in $[0,2\pi)$ ([[math:lem-integer-part]]).

[F3] For real $u$, $z(u)=\cos u+i\sin u$ and $z(-u)=\overline{z(u)}$; cosine is $2\pi$-periodic ([[def-expander-prereq-phasor-calculus]]).

[F4] Cosine is strictly decreasing on $[0,\pi]$ ([[prop-expander-prereq-ordered-angle-inequalities]]).

[F5] For a real $t$, $|t|=t$ when $t\ge0$, and $|t|=-t$ when $t<0$ ([[math:def-abs-value]]).

## Justification

**Given:** A phase configuration $\theta$ indexed by the nonempty finite set $V$ and an angle $\psi\in[0,\pi]$.

**Goal:** Verify the representative convention and the equality of the two descriptions of $\mathcal C_\psi(\theta)$.

1.1 For a real lift of a coordinate, choose the representative $r\in[0,2\pi)$ from [F2]. Use $r$ if $r\le\pi$ and $r-2\pi$ otherwise; this lies in $(-\pi,\pi]$ and represents the same phase by [F1]. Two representatives in that interval have difference of absolute value less than $2\pi$, so [F1] makes them equal if they represent the same phase. By [F5], $|\theta_x|\in[0,\pi]$. Any other representative is $\theta_x+2\pi k$. For $k\ge1$ it is greater than $\pi$, and for $k\le-1$ it is at most $-\pi$; its absolute value is therefore at least $|\theta_x|$. Thus $|\theta_x|$ is the least absolute value among real representatives of that phase. The cosine condition is also independent of the chosen lift by periodicity. [F1, F2, F3, F5, algebra]

2.1 Taking real parts in [F3] gives $\cos(-u)=\cos u$, so $\cos\theta_x=\cos|\theta_x|$. Since both $|\theta_x|$ and $\psi$ lie in $[0,\pi]$, strict decrease in [F4] gives $\cos|\theta_x|\le\cos\psi$ exactly when $|\theta_x|\ge\psi$. This holds for every vertex, proving the equality of the sets, including the endpoint cases. [F3, F4, F5, step 1.1] ∎



The definition and its equivalent description are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF page 22, Section 4, equation (4.1) and the following sentence; the principal representative convention is stated on PDF page 11. The justification above uses the mathematical suppliers, not the article as proof.

## Source notes

The definition and its equivalent description are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF page 22, Section 4, equation (4.1) and the following sentence; the principal representative convention is stated on PDF page 11. The justification above uses the mathematical suppliers, not the article as proof.
