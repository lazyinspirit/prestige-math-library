---
id: cor-spherical-complement-characterization-of-plane-simple-connectivity
kind: corollary
title: "Assuming the Axiom of Choice, a plane domain is simply connected exactly when its spherical complement is connected"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-grand-equivalence-for-simply-connected-plane-domains,
       lem-connected-spherical-complement-implies-null-homology,
       lem-null-homology-implies-connected-spherical-complement]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4, §4.2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Proposition 4.3.7"
      url: "https://www.jirka.org/ca/ca.pdf"
---

## Statement

Assume the Axiom of Choice. Let $\Omega\subseteq\mathbb C$ be a complex domain. Then $\Omega$ is simply
connected if and only if $\widehat{\mathbb C}\setminus\Omega$ is connected.

## Facts & Assumptions

**Given:** The Axiom of Choice and a complex domain $\Omega$.

[L1] Under the grand equivalence theorem, connected spherical complement, homological simple connectivity, and trivial fundamental group are equivalent conditions on $\Omega$ ([[thm-grand-equivalence-for-simply-connected-plane-domains]]).

[L2] Connected spherical complement implies null homology, and null homology implies connected spherical complement ([[lem-connected-spherical-complement-implies-null-homology]], [[lem-null-homology-implies-connected-spherical-complement]]).

## Proof

**Proof technique:** direct.

1.1 If $\widehat{\mathbb C}\setminus\Omega$ is connected, then [L2] gives homological simple connectivity, and [L1] identifies that with simple connectivity under the current Axiom-of-Choice hypothesis. [L1, L2]

1.2 If $\Omega$ is simply connected, then [L1] places it under the grand-equivalent conditions, so it is homologically simply connected; [L2] then gives connected spherical complement. [L1, L2]

2.1 Steps 1.1 and 1.2 prove both directions. [step 1.1, step 1.2] ∎
