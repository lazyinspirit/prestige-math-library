---
id: thm-direct-sums-of-projectives-and-enough-projectives
kind: theorem
title: "Direct sums of projectives are projective, and module categories have enough projectives"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-universal-property-of-module-direct-sums, thm-free-modules-are-projective-with-choice-boundary, cor-every-module-is-a-quotient-of-a-free-module, def-axiom-of-choice, lem-finite-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
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

Assume the Axiom of Choice. An arbitrary direct sum of projective left $R$-modules is projective, and every left $R$-module is the quotient in a short exact sequence
$$0\to K\to P\to M\to0$$
with $P$ projective. Thus the category of left $R$-modules has enough projectives.

For a finite direct sum, finite choice suffices; the empty direct sum is the zero module and is projective. The arbitrary free cover uses the full choice boundary recorded for free modules.

## Facts & Assumptions

**Given:** A family $(P_i)_{i\in I}$ of projective left $R$-modules and a left $R$-module $M$.

[L1] A family of component maps determines a unique map from the direct sum ([[thm-universal-property-of-module-direct-sums]]).

[L2] Under AC every free module is projective; a finite basis needs only finite choice ([[thm-free-modules-are-projective-with-choice-boundary]]).

[L3] The canonical map $R^{(M)}\to M$ is surjective ([[cor-every-module-is-a-quotient-of-a-free-module]]).

[F1] AC chooses one element from each member of an arbitrary family of nonempty sets ([[def-axiom-of-choice]]).

[L4] A listed finite family of nonempty sets has a choice function in ZF ([[lem-finite-choice]]).

## Proof

**Proof technique:** constructive.

1.1 Given a surjection $q:E\to N$ and a homomorphism $f:\bigoplus_iP_i\to N$, each component $f_i=f\circ\jmath_i$ has a nonempty set of lifts $P_i\to E$ because $P_i$ is projective. [given]

1.2 By [L3], $\varepsilon_M:R^{(M)}\to M$ is a canonical surjection. Under AC, [L2] makes $R^{(M)}$ projective, so with $K=\ker\varepsilon_M$ one obtains the asserted short exact sequence. [L2, L3, construct]

2.1 Use [F1] to choose a lift $\tilde f_i$ for every $i$; for finite $I$, [L4] suffices, and for $I=\varnothing$ the family is empty. [step 1.1, F1, L4, choose]

3.1 By [L1], the $\tilde f_i$ assemble uniquely into $\tilde f:\bigoplus_iP_i\to E$, and equality on every summand gives $q\circ\tilde f=f$. Thus the direct sum is projective. [step 2.1, L1, construct]

4.1 Steps 1.1, 2.1, and 3.1 prove closure under arbitrary direct sums with the stated choice cost, and step 1.2 gives enough projectives. [step 1.1, step 2.1, step 3.1, step 1.2, discharge-construct] ∎
