---
id: cex-csm-dk-weak-mixing-not-strong-mixing
kind: counterexample
title: Weak mixing need not imply strong mixing
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-csm-dk-ergodic-and-mixing-notions
  - thm-chacon-transformation-is-weakly-mixing-but-not-mixing
  - lem-chacon-tower-height-correlations-obstruct-mixing
  - def-axiom-of-choice
dependency_roles:
  def-csm-dk-ergodic-and-mixing-notions: mathematical-premise
  thm-chacon-transformation-is-weakly-mixing-but-not-mixing: mathematical-premise
  lem-chacon-tower-height-correlations-obstruct-mixing: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Peter Varju, Topics in Ergodic Theory, Michaelmas 2016, §11, pp. 36–40
      url: https://www.scribd.com/document/345852025/ergodic
    - title: Katok–Thouvenot, An Introduction to the Modern Theory of Dynamical Systems, Theorem 5.12, pp. 696–697
      url: https://akatok.s3.amazonaws.com/pub/KT-spectral.pdf
    - title: Peter Sarig, Lecture Notes on Ergodic Theory, Problems 3.8–3.10, pp. 99–101
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
---

## Statement refuted

Weak mixing implies strong mixing for every probability-preserving
transformation.

## Facts & Assumptions

**Given:** A measure-preserving probability system, the local definitions in
[[def-csm-dk-ergodic-and-mixing-notions]], and full AC.

[A1] Full AC is assumed by the normalized Chacon construction and its
published mathematical supplier ([[def-axiom-of-choice]]).

[F1] [[def-csm-dk-ergodic-and-mixing-notions]]: weak mixing uses
$N^{-1}\sum_{n<N}|d_n(E,F)|\to0$, while strong mixing requires
$d_n(E,F)\to0$ for each fixed measurable pair.

[F2] [[thm-chacon-transformation-is-weakly-mixing-but-not-mixing]]:
under full AC the normalized three-cut one-spacer Chacon map on completed
Lebesgue probability is weakly mixing in the absolute-Cesàro sense but is
not strongly mixing. Its proof supplies the weak-mixing argument.

[F3] [[lem-chacon-tower-height-correlations-obstruct-mixing]]: for the fixed
set $E=[0,2/9)$ and unbounded tower heights $h_r$,
$\mu(E\cap T^{-h_r}E)-\mu(E)^2\ge2/81>0$.

## Counterexample

**Given:** [A1], [F1]–[F3].

1.1 Choose the normalized three-cut one-spacer Chacon transformation supplied
by [F2], on its completed Lebesgue probability space. The exact convention
in [F1] matches the supplier's absolute-Cesàro definition, so this system
is weakly mixing. [A1, F1, F2, construct]

2.1 By [F3], the correlations for the fixed pair $(E,E)$ stay at least
$2/81$ above zero along $h_r\to\infty$. Strong mixing in [F1] would force
these same correlations to tend to zero, which they do not. Hence this
probability-preserving system is not strongly mixing and refutes the
statement. [A1, F1, F3, step 1.1, algebra] ∎

## Remarks

This is a discrete measure-preserving example from ergodic theory. No
Hamiltonian realization is claimed.
