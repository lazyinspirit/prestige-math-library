---
id: cor-algebraic-closures-are-isomorphic-over-the-base
kind: corollary
title: "Assuming Choice, any two algebraic closures are base-isomorphic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-algebraic-embedding-extension, def-algebraic-closure, thm-evaluation-kernel-and-minimal-polynomial]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 6"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "P. L. Clark, Field Theory, Chapter 4"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
pipeline_run: null
---

## Statement

Assuming the Axiom of Choice, any two algebraic closures of a field $F$ are
$F$-isomorphic. No uniqueness of the isomorphism is asserted.

## Facts & Assumptions

**Given:** The Axiom of Choice and two algebraic closures $\Omega_1/F$ and $\Omega_2/F$.

[L1] Assuming Choice, a base embedding into an algebraically closed field extends across an algebraic extension ([[thm-algebraic-embedding-extension]]).

[L2] An algebraic closure is algebraic over its base and algebraically closed ([[def-algebraic-closure]]).

[L3] Every algebraic element has a monic irreducible minimal polynomial over the base ([[thm-evaluation-kernel-and-minimal-polynomial]]).

## Proof

**Proof technique:** direct.

1.1 Extend the identity embedding of $F$ across $\Omega_1/F$ into $\Omega_2$ by [L1], obtaining an $F$-embedding $\sigma:\Omega_1\to\Omega_2$. [L1, L2]

2.1 Its image $E=\sigma(\Omega_1)$ is algebraically closed because it is isomorphic to $\Omega_1$. Every $b\in\Omega_2$ is algebraic over $F\subseteq E$, so [L3] gives a minimal polynomial over $E$; this polynomial has a root in $E$, and irreducibility then makes it linear. Hence $b\in E$. [step 1.1, L2, L3]

3.1 Thus $\sigma$ is surjective as well as injective, and is an $F$-isomorphism. The argument proves existence only and makes no uniqueness assertion. [step 1.1, step 2.1] ∎
