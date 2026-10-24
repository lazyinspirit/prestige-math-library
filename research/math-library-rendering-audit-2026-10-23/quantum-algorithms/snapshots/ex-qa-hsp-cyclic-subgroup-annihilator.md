---
id: ex-qa-hsp-cyclic-subgroup-annihilator
kind: example
title: Fourier sampling for a cyclic subgroup
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - alg-qa-finite-abelian-hidden-subgroup-sample
  - thm-qa-finite-abelian-hidden-subgroup-sample-law
  - def-qa-normalized-finite-abelian-fourier-transform
  - def-qa-finite-abelian-subgroup-annihilator
  - lem-qa-cyclic-group-has-n-characters
  - lem-qa-finite-character-values-have-unit-modulus
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Example

Let $G=\mathbb Z/12\mathbb Z$ and $H=3\mathbb Z/12\mathbb Z=\{0,3,6,9\}$. Its annihilator has the three character labels $0,4,8$, so a Fourier sample is uniform on those labels.

## Facts & Assumptions

**Given:** The additive cyclic group $\mathbb Z/12\mathbb Z$, its subgroup $H$, and the negative-character QFT convention.

[F1] The characters are $\chi_k(x)=\exp(2\pi i kx/12)$ for $k\in\mathbb Z/12\mathbb Z$, and these are all twelve characters. ([[lem-qa-cyclic-group-has-n-characters]])

[F2] $H^\perp$ consists of the characters trivial on every element of $H$. ([[def-qa-finite-abelian-subgroup-annihilator]])

[F3] The normalized transform of a coset state has equal-modulus amplitudes exactly on $H^\perp$. ([[def-qa-normalized-finite-abelian-fourier-transform]], [[thm-qa-finite-abelian-hidden-subgroup-sample-law]])

[F4] Character values on finite groups have modulus one. ([[lem-qa-finite-character-values-have-unit-modulus]])

## Verification

**Given:** The coset state $|a+H\rangle=\frac12\sum_{j=0}^3|a+3j\rangle$ for any $a\in\mathbb Z/12\mathbb Z$.

1.1 A character $\chi_k$ is trivial on $H$ exactly when $\chi_k(3)=\exp(2\pi i k/4)=1$, which holds exactly when $4\mid k$. Among residues modulo $12$ this gives $k\in\{0,4,8\}$, so $|H^\perp|=3$. [given, F1, F2, algebra]

1.2 The amplitude of label $k$ after the normalized QFT is $\frac{1}{\sqrt{48}}\sum_{j=0}^{3}\overline{\chi_k(a+3j)}=\frac{\overline{\chi_k(a)}}{\sqrt{48}}\sum_{j=0}^{3}\exp(-2\pi i kj/4)$. If $4\mid k$, the sum is $4$ and the amplitude has modulus $4/\sqrt{48}=1/\sqrt3$ by [F4]. If $4\nmid k$, the ratio $q=\exp(-2\pi i k/4)$ is a nontrivial fourth root of unity, so $(1-q)\sum_{j=0}^3q^j=1-q^4=0$ and the sum vanishes. [F1, F3, F4, algebra]

2.1 Squaring the amplitudes in step 1.2 gives probability $1/3$ for each of $k=0,4,8$ and zero for the other nine labels. These probabilities sum to one and agree with the uniform annihilator law. [F2, F3, step 1.2] ∎
