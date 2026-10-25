---
id: thm-qa-simon-hadamard-sampling-law
kind: theorem
title: "Simon samples uniformly from s-perp"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - thm-qa-simon-postquery-coset-state
  - alg-qa-simon-one-sample
  - lem-qa-hadamard-f2-kernel
  - def-qa-binary-dot-product
  - lem-qa-computational-basis-measurement-law
  - lem-qa-simon-annihilator-subspace-basis
  - thm-qc-computational-basis-orthonormal
justified_by: []
proof_strategy: direct
axiom_use: "No Choice is used; the proof is a finite binary sum and a finite coordinate count."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6, 2026)"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 3 §§3.1-3.3, PDF pp.35-39: Simon promise, one-sample derivation, uniform s-perp law, rank growth, expected queries and classical lower-bound proof."
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms (updated November 2020)"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
      locator: "§6.1, PDF pp.11-13 and §6.5, PDF pp.27-33: independent Simon sample derivation and finite-abelian HSP context."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 6, PDF pp.33-37: Simon as a finite-abelian hidden-subgroup instance and Fourier sampling context."
---
## Statement

For every Simon hidden nonzero string $s\in\{0,1\}^n$, the one-sample algorithm returns a string uniformly distributed on

$$s^\perp:=\{y\in\{0,1\}^n:s\cdot y=0\}.$$

The set $s^\perp$ has $2^{n-1}$ elements. Conditional on the measured output value $f(x_0)$, the amplitude of $y$ is $2^{-(n-1)/2}(-1)^{x_0\cdot y}$ when $s\cdot y=0$ and is zero otherwise. Thus the outcome law is independent of which output fiber was observed.

## Facts & Assumptions
**Given:** $n\ge1$, the Simon promise, and a fresh one-sample execution.

[F1] [[thm-qa-simon-postquery-coset-state]]: conditional on output $f(x_0)$, the address state is $(|x_0\rangle+|x_0\oplus s\rangle)/\sqrt2$.

[F2] [[lem-qa-hadamard-f2-kernel]]: $H^{\otimes n}|x\rangle=2^{-n/2}\sum_y(-1)^{x\cdot y}|y\rangle$.

[F3] [[def-qa-binary-dot-product]]: $x\cdot y$ is the parity $\bigoplus_{i<n}(x_i\land y_i)$.

[F4] [[alg-qa-simon-one-sample]]: after the target branch, the algorithm applies $H^{\otimes n}$ to the address and measures in the computational basis.

[F5] [[lem-qa-computational-basis-measurement-law]]: for a unit vector measured in the computational basis, the outcome weight is the squared modulus of its basis amplitude.

[F6] [[lem-qa-simon-annihilator-subspace-basis]]: $s^\perp$ is a subspace of dimension $d=n-1$ and has exactly $2^d$ elements.

[F7] [[thm-qc-computational-basis-orthonormal]]: the address register's computational basis is orthonormal.

## Proof

1.1 Apply [F2] to the two terms in [F1]. The amplitude at $y$ is
$$2^{-(n+1)/2}\left((-1)^{x_0\cdot y}+(-1)^{(x_0\oplus s)\cdot y}\right).$$
By [F3], $(x_0\oplus s)\cdot y=(x_0\cdot y)\oplus(s\cdot y)$. [given, F1, F2, F3, algebra]

2.1 If $s\cdot y=1$, the two signs in step 1.1 are opposites and the amplitude is zero. If $s\cdot y=0$, they agree and the amplitude is $2^{-(n-1)/2}(-1)^{x_0\cdot y}$. Thus its squared modulus is $2^{-(n-1)}$ on every allowed $y$ and zero otherwise. [step 1.1, F3, algebra]

3.1 There are $2^{n-1}$ allowed strings by [F6]. The vector after the final Hadamards has squared norm $2^{n-1}2^{-(n-1)}=1$ by step 2.1 and orthonormality [F7]. This also covers $n=1$, when the only allowed string is $0$. [given, F2, F6, F7, step 2.1, algebra]

4.1 The measured vector is unit by step 3.1, so [F5] gives probability $2^{-(n-1)}$ for each allowed string and zero for every disallowed string. These weights sum to one; the phase depends on $x_0$ but the probabilities do not. Thus every fresh execution has the same uniform sample law regardless of the observed coset. [F4, F5, step 2.1, step 3.1, algebra] ∎

