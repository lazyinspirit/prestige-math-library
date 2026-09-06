---
id: lem-h-one-regular-local-implies-koszul-regular
kind: lemma
title: "H One Regular Local Implies Koszul Regular"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-koszul-regular-and-h-one-regular-sequences, lem-local-koszul-h-one-detects-first-regularity-failure, cor-local-koszul-acyclicity-iff-regular-sequence, thm-nakayama-lemma]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/062D"
pipeline_run: frontier-31a
---

## Statement

For finite $M$ over Noetherian local $(R,\mathfrak m)$ with $\mathbf x\subseteq\mathfrak m$, $M$-$H_1$-regularity implies $M$-Koszul-regularity.

## Facts & Assumptions

**Given:** The ring, finite module, and sequence stated in the claim. The declared prerequisites used here are [[def-koszul-regular-and-h-one-regular-sequences]], [[lem-local-koszul-h-one-detects-first-regularity-failure]], [[cor-local-koszul-acyclicity-iff-regular-sequence]], and [[thm-nakayama-lemma]].

## Proof

**Proof technique:** direct.

1.1 If $M=0$, every term of $K(\mathbf x;M)$ is zero and the conclusion is immediate. Suppose $M\ne0$. Because $(\mathbf x)\subseteq\mathfrak m$, Nakayama shows that $M/(\mathbf x)M\ne0$; the same argument applies to every prefix quotient. [given, algebra]

2.1 If $\mathbf x$ were not regular, it would therefore have a first injectivity failure. The detection lemma would give $H_1(K(\mathbf x;M))\ne0$, contradicting $H_1$-regularity. Thus $\mathbf x$ is regular, and the local regularity criterion gives vanishing of every positive Koszul homology group. [step 1.1, algebra] ∎
