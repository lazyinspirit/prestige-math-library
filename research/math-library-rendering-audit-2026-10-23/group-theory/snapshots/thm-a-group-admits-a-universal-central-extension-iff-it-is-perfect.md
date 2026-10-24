---
id: thm-a-group-admits-a-universal-central-extension-iff-it-is-perfect
kind: theorem
title: "Existence criterion for universal central extensions"
status: published
origin: pipeline
deps: [def-perfect-group, def-universal-central-extension, def-free-presentation-kernel-data, thm-free-presentation-construction-has-the-universal-property, def-axiom-of-choice]
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

Assume the Axiom of Choice. A group $G$ admits a universal central
extension if and only if $G$ is perfect.

## Facts & Assumptions

**Given:** The Axiom of Choice. First suppose $u:U\twoheadrightarrow G$
is universal. In the converse, Choice supplies simultaneous lifts of
the generators of a free presentation into each central extension.

## Proof

**Proof technique:** direct.

1.1 For every abelian group $A$ and homomorphism $\phi:G\to A$, the two maps $x\mapsto(u(x),0)$ and $x\mapsto(u(x),\phi(u(x)))$ from $U$ to the split central extension $G\times A\to G$ must agree by universality.  Since $u$ is surjective, $\phi=0$.  Taking $A=G_{\mathrm{ab}}$ and $\phi$ the quotient map gives $G_{\mathrm{ab}}=0$, so $G$ is perfect. [given, algebra]

1.2 Conversely, let $G=F/R$ be perfect, using for example the free group on the underlying set of $G$. Under Choice, [[thm-free-presentation-construction-has-the-universal-property]] proves that $[F,F]/[F,R]\to G$ is a universal central extension. Its proof identifies the exact use of Choice: lifting every free generator through each central quotient. [given, construct]

2.1 Steps 1.1 and 1.2 prove the two implications. [step 1.1, step 1.2] ∎
