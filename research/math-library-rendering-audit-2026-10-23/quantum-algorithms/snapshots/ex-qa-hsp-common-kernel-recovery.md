---
id: ex-qa-hsp-common-kernel-recovery
kind: example
title: Common-kernel subgroup recovery in a product of cyclic groups
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - alg-qa-finite-abelian-hidden-subgroup-reconstruction
  - thm-qa-finite-abelian-hidden-subgroup-sample-law
  - lem-qa-cyclic-group-has-n-characters
  - lem-qa-character-dual-of-a-product-factors
  - def-qa-finite-abelian-subgroup-annihilator
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Example

Take the invariant-factor group $G=\mathbb Z/2\mathbb Z\times\mathbb Z/6\mathbb Z$ and the trivial subgroup $H=\{(0,0)\}$. The characters are $\chi_{a,b}(x,y)=\exp(2\pi i(ax/2+by/6))$. Two possible Fourier samples, $\chi_{1,0}$ followed by $\chi_{0,1}$, reduce the initial candidate group $G$ to $H$.

## Facts & Assumptions

**Given:** The character labels of a product of cyclic groups and the common-kernel output convention.

[F1] Cyclic characters are indexed by residues and product characters factor by coordinates. ([[lem-qa-cyclic-group-has-n-characters]], [[lem-qa-character-dual-of-a-product-factors]])

[F2] A sample is uniform on $H^\perp$, and independent repetitions use fresh samples. ([[thm-qa-finite-abelian-hidden-subgroup-sample-law]], [[alg-qa-finite-abelian-hidden-subgroup-reconstruction]])

[F3] The output list represents the intersection of the sampled character kernels. ([[alg-qa-finite-abelian-hidden-subgroup-reconstruction]])

## Verification

**Given:** The group and subgroup in the Example, with additive coordinates reduced modulo $2$ and $6$.

1.1 Since $H$ is trivial, every character is trivial on $H$. The labels are $a\in\{0,1\}$ and $b\in\{0,1,2,3,4,5\}$, so $|H^\perp|=12$ and both $(1,0)$ and $(0,1)$ label allowed outcomes. [given, F1, algebra]

1.2 By [F2], the probability that two independent samples occur in the specified order is $(1/12)(1/12)=1/144$. The first sampled character has kernel $\{0\}\times\mathbb Z/6\mathbb Z$, since $\chi_{1,0}(x,y)=(-1)^x$. [F2, algebra]

1.3 The second character has kernel $\mathbb Z/2\mathbb Z\times\{0\}$, since $\chi_{0,1}(x,y)=\exp(2\pi i y/6)$ equals $1$ exactly for $y\equiv0\pmod6$. Intersecting the two kernels gives $\{(0,0)\}=H$. [F3, algebra]

2.1 Each constraint kernel contains $H$, and the ordered sample list therefore presents the exact hidden subgroup without converting it to generators. [F1, F3, step 1.3] ∎
