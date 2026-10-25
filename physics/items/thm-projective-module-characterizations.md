---
id: thm-projective-module-characterizations
kind: theorem
title: "Equivalent characterizations of projective modules"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-projective-module, thm-splitting-lemma-for-modules, thm-hom-functors-are-left-exact, cor-every-module-is-a-quotient-of-a-free-module, thm-free-modules-are-projective-with-choice-boundary, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
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

For a left $R$-module $P$, assertions 1 to 3 below are equivalent without choice. Under the Axiom of Choice, they are also equivalent to assertion 4:

1. $P$ is projective;
2. every short exact sequence $0\to K\to E\to P\to0$ splits;
3. $\operatorname{Hom}_R(P,-)$ takes every short exact sequence to a short exact sequence;
4. $P$ is a direct summand of a free module.

The equivalence of 1 to 3 is choice-free. The implication $1\Rightarrow4$ uses the canonical free cover and is choice-free; under AC, every free module is projective, so $4\Rightarrow1$.

## Facts & Assumptions

**Given:** A left $R$-module $P$.

[F1] Projectivity is the lifting property for surjections ([[def-projective-module]]).

[L1] A short exact sequence splits exactly when its epimorphism has a section, equivalently its monomorphism has a retraction ([[thm-splitting-lemma-for-modules]]).

[L2] Applying $\operatorname{Hom}_R(P,-)$ to an exact sequence $0\to A\to B\to C$ gives an exact sequence $0\to\operatorname{Hom}_R(P,A)\to\operatorname{Hom}_R(P,B)\to\operatorname{Hom}_R(P,C)$ ([[thm-hom-functors-are-left-exact]]).

[L3] The canonical map $R^{(P)}\to P$ is surjective ([[cor-every-module-is-a-quotient-of-a-free-module]]).

[L4] Under AC, every free module is projective ([[thm-free-modules-are-projective-with-choice-boundary]], [[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 If $P$ is projective and $0\to K\to E\xrightarrow qP\to0$ is short exact, lift $\operatorname{id}_P$ through $q$ using [F1]; the lift is a section, so the sequence splits by [L1]. [assume-hyp, F1, L1]

1.2 If every such sequence splits, then for a surjection $q:E\to M$ and map $f:P\to M$, form the pullback module $T=\{(x,e)\in P\oplus E:f(x)=q(e)\}$. The projection $T\to P$ is surjective with kernel isomorphic to $\ker q$, so its short exact sequence splits; a section followed by the projection $T\to E$ is a lift of $f$. Thus $P$ is projective. [assume-hyp, L1, construct]

1.3 By [L2], applying $\operatorname{Hom}_R(P,-)$ to $0\to A\to B\xrightarrow qC\to0$ is exact through $\operatorname{Hom}_R(P,B)$; its last map is surjective exactly when every $P\to C$ lifts through $q$. Hence [F1] makes assertions 1 and 3 equivalent. [F1, L2]

1.4 If $P$ is projective, lift $\operatorname{id}_P$ through the canonical surjection $R^{(P)}\to P$ from [L3]. This section splits the free cover by [L1], so $P$ is a direct summand of $R^{(P)}$. [assume-hyp, F1, L1, L3]

1.5 A direct summand of a projective module is projective: precompose a map from the summand with the projection, lift the resulting map, and restrict the lift along the inclusion. Under AC the free ambient module in assertion 4 is projective by [L4], so assertion 4 implies assertion 1. [assume-hyp, F1, L4]

2.1 Steps 1.1 and 1.2 prove $1\Leftrightarrow2$, step 1.3 proves $1\Leftrightarrow3$, and steps 1.4 and 1.5 prove $1\Leftrightarrow4$ with the stated choice boundary. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5] ∎
