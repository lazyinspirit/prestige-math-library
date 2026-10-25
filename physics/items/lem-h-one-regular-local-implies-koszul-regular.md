---
id: lem-h-one-regular-local-implies-koszul-regular
kind: lemma
title: "H One Regular Local Implies Koszul Regular"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-koszul-regular-and-h-one-regular-sequences, lem-local-koszul-h-one-detects-first-regularity-failure, cor-local-koszul-acyclicity-iff-regular-sequence, thm-nakayama-lemma, def-axiom-of-choice]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-maintenance-receipts.jsonl (lem-h-one-regular-local-implies-koszul-regular). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/062D"
pipeline_run: frontier-31a
---

## Statement

Assume the Axiom of Choice. For finite $M$ over Noetherian local $(R,\mathfrak m)$ with $\mathbf x\subseteq\mathfrak m$, $M$-$H_1$-regularity implies $M$-Koszul-regularity.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]) and the ring, finite module, and sequence stated in the claim. The declared prerequisites used here are [[def-koszul-regular-and-h-one-regular-sequences]], [[lem-local-koszul-h-one-detects-first-regularity-failure]], [[cor-local-koszul-acyclicity-iff-regular-sequence]], and [[thm-nakayama-lemma]].

## Proof

**Proof technique:** direct.

1.1 If $M=0$, every term of $K(\mathbf x;M)$ is zero and the conclusion is immediate. Suppose $M\ne0$. Under the assumed AC, Nakayama shows that $M/(\mathbf x)M\ne0$ because $(\mathbf x)\subseteq\mathfrak m$; the same argument applies to every prefix quotient. This is the first use of Choice. [given, algebra]

2.1 If $\mathbf x$ were not regular, it would therefore have a first injectivity failure. The detection lemma would give $H_1(K(\mathbf x;M))\ne0$, contradicting $H_1$-regularity. Thus $\mathbf x$ is regular, and the AC-qualified local regularity criterion gives vanishing of every positive Koszul homology group. This is the second use of Choice. [step 1.1, algebra] ∎
