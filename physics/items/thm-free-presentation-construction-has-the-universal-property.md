---
id: thm-free-presentation-construction-has-the-universal-property
kind: theorem
title: "Free-presentation construction is universal"
status: published
origin: pipeline
deps: [def-universal-central-extension-from-a-free-presentation, lem-free-presentation-construction-is-a-central-extension, def-universal-central-extension, def-perfect-group, def-axiom-of-choice]
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

Assume the Axiom of Choice. If $G=F/R$ is perfect and $F$ is free, then
$[F,F]/[F,R]\to G$ is a universal central extension.

## Facts & Assumptions

**Given:** A central extension $E\to G$ and a free basis of $F$. The Axiom
of Choice supplies simultaneous lifts in $E$ of the images of every basis
element, including when the basis is infinite.

## Proof

**Proof technique:** direct.

1.1 The chosen basis lifts extend uniquely to a homomorphism $h:F\to E$ over $G$. Every $r\in R$ maps into the central kernel of $E\to G$, so $h([F,R])=1$. Restricting $h$ to $[F,F]$ therefore gives a homomorphism $[F,F]/[F,R]\to E$ over $G$. Since $G$ is perfect, the displayed source maps onto $G$, and the preceding central-extension lemma gives its central kernel. [given, choose, algebra]

2.1 If $v,w:[F,F]/[F,R]\to E$ are two maps over $G$, their pointwise ratio $v(x)w(x)^{-1}$ lies in the central kernel. Centrality makes this ratio a homomorphism to an abelian group. The source is perfect: write elements $a,b\in F$ as $a=a'r$, $b=b's$ with $a',b'\in[F,F]$ and $r,s\in R$, which is possible because $G$ is perfect; modulo $[F,R]$ one has $[a,b]=[a',b']$. Its generators are thus commutators inside the source. Every homomorphism from it to an abelian group is zero, so $v=w$. Existence from step 1.1 and this uniqueness prove universality. [step 1.1, algebra] ∎
