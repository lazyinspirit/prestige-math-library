---
id: thm-free-modules-are-projective-with-choice-boundary
kind: theorem
title: "Free modules are projective, with the exact choice boundary"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-projective-module, thm-universal-property-of-free-modules, def-axiom-of-choice, lem-finite-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Every free module is projective. More precisely, if $F$ has basis $(e_x)_{x\in X}$, a lift of a map $F\to M$ through a surjection $E\to M$ is obtained by choosing one preimage of each basis value. For finite $X$, finite choice suffices and no form of AC is needed; for $X=\varnothing$, the lift is the unique map from $0$.

## Facts & Assumptions

**Given:** A free module $F=R^{(X)}$, a surjection $q:E\to M$, and a homomorphism $f:F\to M$.

[F1] Projectivity is the existence of a lift through every surjective homomorphism ([[def-projective-module]]).

[L1] A function from the basis set $X$ to a module extends uniquely to a homomorphism from $R^{(X)}$ ([[thm-universal-property-of-free-modules]]).

[F2] AC supplies a choice function for every family of nonempty sets ([[def-axiom-of-choice]]).

[L2] A natural-number-indexed finite family of nonempty sets has a choice function in ZF ([[lem-finite-choice]]).

## Proof

**Proof technique:** constructive.

1.1 For each $x\in X$, the fiber $q^{-1}(f(e_x))$ is nonempty because $q$ is surjective. [given]

2.1 Under AC, [F2] chooses $y_x\in q^{-1}(f(e_x))$ for every $x\in X$. If $X$ is finite with a given finite enumeration, [L2] makes this choice in ZF; if $X=\varnothing$, there are no choices. [step 1.1, F2, L2, choose]

3.1 By [L1], the assignment $e_x\mapsto y_x$ extends uniquely to a homomorphism $\tilde f:F\to E$. [step 2.1, L1, construct]

4.1 Both $q\circ\tilde f$ and $f$ send each $e_x$ to $f(e_x)$, so uniqueness in [L1] gives $q\circ\tilde f=f$. [step 3.1, L1]

5.1 Thus $F$ satisfies the lifting property [F1] and is projective. The construction records exactly where arbitrary or finite choice enters. [step 1.1, step 2.1, step 3.1, step 4.1, F1, discharge-construct] ∎
