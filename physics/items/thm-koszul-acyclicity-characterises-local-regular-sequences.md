---
id: thm-koszul-acyclicity-characterises-local-regular-sequences
kind: theorem
title: "Koszul Acyclicity Characterises Local Regular Sequences"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-regular-sequences-give-acyclic-koszul-complexes, lem-local-koszul-acyclicity-inductive-converse, def-axiom-of-choice]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-maintenance-receipts.jsonl (thm-koszul-acyclicity-characterises-local-regular-sequences). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/062D"
pipeline_run: frontier-31a
---

## Statement

Assume the Axiom of Choice. For a finite module over a Noetherian local ring and $\mathbf x\subseteq\mathfrak m$ with nonzero terminal quotient, $\mathbf x$ is regular if and only if $H_i(K(\mathbf x;M))=0$ for all $i>0$.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]) and the rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[thm-regular-sequences-give-acyclic-koszul-complexes]] and [[lem-local-koszul-acyclicity-inductive-converse]].

## Proof

**Proof technique:** direct.

1.1 If $\mathbf x$ is empty, its Koszul complex is concentrated in degree zero and the assumed nonzero terminal quotient is exactly the nonzero-module condition in the definition of an empty regular sequence. Thus the equivalence holds in this case. For nonempty $\mathbf x$, regularity implies acyclicity by the forward theorem. [given, algebra]

2.1 Conversely, suppose $\mathbf x$ is nonempty and the Koszul complex is acyclic in positive degrees. Under the assumed AC, the local converse lemma applies and makes the last element injective on the quotient by the preceding entries and the shorter Koszul complex acyclic. Its terminal quotient is nonzero because it surjects onto $M/(\mathbf x)M$. Iterating proves all ordered injectivity conditions, while the final nonzero quotient is assumed; hence $\mathbf x$ is regular. [step 1.1, algebra] ∎
