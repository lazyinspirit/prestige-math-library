---
id: thm-neural-operator-input-output-spaces-have-ap
kind: theorem
title: "The neural-operator input and output spaces have the approximation property"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-approximation-property-and-bounded-approximation-property
  - def-dependent-choice
  - thm-schauder-basis-implies-bounded-approximation-property
provenance:
  statement: literature-derived
  proof: incomplete
proof_strategy: direct
verification:
  precheck: blocked
sources:
  references:
    - title: "Kovachki et al., Neural Operator: Learning Maps Between Function Spaces With Applications to PDEs"
      url: "https://arxiv.org/pdf/2108.08481"
      locator: "Lemma 26 and complete proof, Appendix A, PDF pp. 77–79"
---

## Statement

Let $D\subset\mathbb R^d$ be a bounded Lipschitz domain. Each of the spaces $L^p(D)$ for $1\le p<\infty$, $W^{m,p}(D)$ for $m\in\mathbb N$ and $1\le p<\infty$, and $C^m(\bar D)$ for $m\in\mathbb N_0$ has the approximation property: on every norm-compact subset, the identity can be approximated uniformly by bounded finite-rank linear maps. The same conclusion holds for the output-space list with its dimension and regularity parameters.

## Statement references
[Kovachki et al., Lemma 26: approximation property of the listed Lipschitz-domain function spaces](https://arxiv.org/pdf/2108.08481)

## Facts & Assumptions

**Given:** A bounded Lipschitz domain and one of the listed real Banach function spaces.

[F1] The approximation property is compact-uniform approximation by bounded finite-rank maps, without a sequence requirement ([[def-approximation-property-and-bounded-approximation-property]]).

[F2] A Schauder basis yields the bounded approximation property only with Dependent Choice and after the basis is established ([[thm-schauder-basis-implies-bounded-approximation-property]], [[def-dependent-choice]]).

## Proof

**Proof strategy:** separate the Lebesgue, Sobolev, and continuous-function cases.

1.1 The definition [F1] reduces the claim to constructing compact-uniform finite-rank approximants for each listed space; the published AP definition does not itself provide those approximants. [given, F1]

1.2 For the $W^{m,p}$ cases, the source's basis route requires an actual basis construction before [F2] can be applied, with Dependent Choice stated at that use. The necessary extension, isomorphism, and basis arguments are not yet present as local suppliers, so the proof does not establish those cases. [given, F2]

## Unresolved proof obligation

The source's Lemma 26 routes $L^p(D)$ through the atomless-$\sigma$-finite measure isomorphism with $L^p(0,1)$; routes $W^{m,p}(D)$ through a Lipschitz extension and, for $p>1$, a further isomorphism and basis; treats $W^{m,1}$ separately; and proves AP but no basis for $C^m(\bar D)$ by extension to a cube and finite-rank approximation. The source cites the measure-isomorphism, extension, isomorphism, Schauder-basis, and smooth-extension theorems without proving them. The batch design requires the hypotheses and proofs of these routes to be supplied locally. No complete local derivation of all four cases is present, so this item is escalated rather than accepted by citation.
