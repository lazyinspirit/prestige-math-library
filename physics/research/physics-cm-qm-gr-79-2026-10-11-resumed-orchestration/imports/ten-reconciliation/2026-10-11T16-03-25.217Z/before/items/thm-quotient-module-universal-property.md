---
id: thm-quotient-module-universal-property
kind: theorem
title: "A module homomorphism vanishing on $N$ factors uniquely through $M/N$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-canonical-quotient-module-map, thm-quotient-group-universal-property, def-module-homomorphism-kernel-image-and-cokernel]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "McGerty, Algebra II: Rings and Modules, Section 3"
      url: "https://people.maths.ox.ac.uk/mcgerty/Algebra%20II.pdf"
pipeline_run: null
---

## Statement

Let $f:M\to P$ be a module homomorphism and let $N\le M$ satisfy
$N\subseteq\ker f$. There is a unique module homomorphism

$$\bar f:M/N\longrightarrow P$$

such that $\bar f(m+N)=f(m)$, equivalently $f=\bar f\circ\pi$.

## Facts & Assumptions

**Given:** A module homomorphism $f:M\to P$ and a submodule $N\le M$ with $N\subseteq\ker f$.

[L1] The canonical map $\pi:M\to M/N$ is a surjective module homomorphism with kernel $N$ ([[prop-canonical-quotient-module-map]]).

[L2] A group homomorphism that kills a normal subgroup factors uniquely through the group quotient ([[thm-quotient-group-universal-property]]).

[L3] A module homomorphism is additive and scalar-preserving, and its kernel is the preimage of zero ([[def-module-homomorphism-kernel-image-and-cokernel]]).

## Proof

**Proof technique:** constructive.

1.1 By [L1], the canonical map $\pi:M\to M/N$ is an additive-group quotient map with kernel $N$. Viewing the modules as additive groups, [L3] makes $f$ a group homomorphism and the hypothesis says it kills $N$. By [L2], define the unique additive homomorphism $\bar f$ by $\bar f(m+N)=f(m)$, with $f=\bar f\circ\pi$. [L1, L2, L3, given, construct]

2.1 For every coset, $\bar f(r(m+N))=\bar f(rm+N)=f(rm)=rf(m)=r\bar f(m+N)$, so $\bar f$ is scalar-preserving. [step 1.1, L3, given]

3.1 Thus $\bar f$ is a module homomorphism with the required factorisation. [step 1.1, step 2.1, L3]

4.1 Any module-homomorphism factor is in particular an additive-group factor, so the uniqueness in step 1.1 proves its uniqueness as a module homomorphism. [step 1.1, L2, L3, discharge-construct: final] ∎
