---
id: lem-schur-multiplier-of-a-finite-group-is-finite
kind: lemma
title: "Multiplier of a finite group is finite"
status: published
origin: pipeline
deps: [def-schur-multiplier-of-a-group, lem-every-finite-group-is-finitely-presented, cor-schur-multiplier-of-a-finitely-presented-group-is-finitely-generated, lem-positive-degree-integral-homology-of-a-finite-group-is-order-torsion, def-axiom-of-choice, def-supplied-projective-resolution-datum]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Clara Löh, Group Cohomology"
      url: https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-05-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice and supplied projective-resolution data for group
homology. For finite $G$, $M(G)$ is finite abelian.

## Proof

**Given:** The stated choice and resolution hypotheses and a finite group $G$.

1.1 The finite-presentation lemma gives a finite presentation of $G$; the finitely-presented-multiplier corollary makes $M(G)$ finitely generated under the stated hypotheses. The finite-group homology torsion lemma says $|G|$ annihilates this positive-degree integral homology group. [given]

2.1 A finitely generated abelian group of bounded exponent is finite, so $M(G)$ is finite. [step 1.1, algebra] ∎
