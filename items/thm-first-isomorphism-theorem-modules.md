---
id: thm-first-isomorphism-theorem-modules
kind: theorem
title: 'First isomorphism theorem for modules: $M/\ker f\cong\operatorname{im}f$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-quotient-module-universal-property, thm-module-kernel-image-and-injectivity, def-module-homomorphism-kernel-image-and-cokernel]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
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

For every module homomorphism $f:M\to N$, there is a module isomorphism

$$M/\ker f\ \cong\ \operatorname{im}f,$$

given by $m+\ker f\mapsto f(m)$.

## Facts & Assumptions

**Given:** A module homomorphism $f:M\to N$.

[L1] Its kernel and image are submodules, and a module homomorphism is
injective exactly when its kernel is trivial
([[thm-module-kernel-image-and-injectivity]]).

[L2] A homomorphism vanishing on a submodule factors uniquely through the
quotient module ([[thm-quotient-module-universal-property]]).

[L3] Module isomorphisms are precisely bijective module homomorphisms; kernel
and image have their displayed definitions
([[def-module-homomorphism-kernel-image-and-cokernel]]).

## Proof

**Proof technique:** direct.

1.1 Since $\ker f$ is a submodule and $f$ vanishes on it, [L2] gives a module homomorphism $\bar f:M/\ker f\to N$ with $\bar f(m+\ker f)=f(m)$. [L1, L2, L3, given]

2.1 Every value of $\bar f$ lies in $\operatorname{im}f$, and every $f(m)$ is the value of $\bar f$ at $m+\ker f$; hence its corestriction $\bar f:M/\ker f\to\operatorname{im}f$ is a surjective module homomorphism. [step 1.1, L1, L3, given]

2.2 The corestriction has trivial kernel: $\bar f(m+\ker f)=0_N$ means $f(m)=0_N$, hence $m\in\ker f$ and $m+\ker f=0_{M/\ker f}$. [step 1.1, L1, L3, given]

3.1 The corestriction is injective by [L1], so it is bijective. [step 2.1, step 2.2, L1]

4.1 By [L3], this bijective module homomorphism is the claimed module isomorphism. [step 3.1, L3] ∎
