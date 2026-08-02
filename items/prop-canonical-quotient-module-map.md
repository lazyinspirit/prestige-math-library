---
id: prop-canonical-quotient-module-map
kind: proposition
title: 'The canonical map $M\to M/N$ is a surjective module homomorphism with kernel $N$; thus every submodule is a kernel'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-quotient-module-laws, def-submodule, def-module-homomorphism-kernel-image-and-cokernel, prop-canonical-quotient-map, lem-coset-membership-and-equality]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "McGerty, Algebra II: Rings and Modules, Section 3"
      url: "https://people.maths.ox.ac.uk/mcgerty/Algebra%20II.pdf"
pipeline_run: null
---

## Statement

For a submodule $N\le M$, the canonical map

$$\pi:M\longrightarrow M/N,\qquad \pi(m):=m+N,$$

is a surjective $R$-module homomorphism and has kernel $N$. Hence every
submodule is the kernel of a module homomorphism.

## Facts & Assumptions

**Given:** A left $R$-module $M$ and a submodule $N\le M$.

[L1] The quotient action is a well-defined module action
([[thm-quotient-module-laws]]).

[L2] The canonical projection of the underlying additive groups is a
surjective group homomorphism ([[prop-canonical-quotient-map]]).

[L3] A module homomorphism preserves addition and scalar multiplication, and
its kernel is the inverse image of zero
([[def-module-homomorphism-kernel-image-and-cokernel]]).

[L4] The additive group of a submodule is closed under inverses, and the coset
criterion consequently gives $m+N=N$ if and only if $m\in N$
([[def-submodule]], [[lem-coset-membership-and-equality]]).

## Proof

**Proof technique:** direct.

1.1 The underlying additive map $\pi$ is a homomorphism and is surjective. [L2, given]

1.2 The quotient action gives $\pi(rm)=rm+N=r(m+N)=r\pi(m)$. [L1, given]

1.3 Since $\pi(m)=0_{M/N}=N$ exactly when $m\in N$, its kernel is $N$. [L3, L4, given]

2.1 Steps 1.1--1.2 show that $\pi$ is a surjective module homomorphism. [step 1.1, step 1.2, L3]

3.1 Together with step 1.3, this proves the claim and shows that every submodule is a kernel. [step 1.3, step 2.1] ∎
