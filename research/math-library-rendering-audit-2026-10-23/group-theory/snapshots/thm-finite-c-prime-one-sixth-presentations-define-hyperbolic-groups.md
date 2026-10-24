---
id: thm-finite-c-prime-one-sixth-presentations-define-hyperbolic-groups
kind: theorem
title: "Finite C'(1/6) presentations define hyperbolic groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-linear-isoperimetric-bound-for-finite-c-prime-one-sixth-presentations, thm-linear-isoperimetric-characterisation-of-hyperbolic-groups, def-axiom-of-choice]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Nicholas Touikan, An introduction to combinatorial and geometric group theory, Section 3.5"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/IntroCGGT.pdf"
    - title: "Clara Löh, Geometric Group Theory, Section 6.4"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-06-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice. Let $G=\langle X \mid R \rangle$ be a finite presentation satisfying the
metric small-cancellation condition $C'(1/6)$. Then $G$ is hyperbolic.

## Facts & Assumptions

**Given:** AC and a finite presentation $\langle X \mid R \rangle$ satisfying $C'(1/6)$.

[L0] Finite $C'(1/6)$ presentations satisfy a linear isoperimetric inequality for van Kampen area ([[cor-linear-isoperimetric-bound-for-finite-c-prime-one-sixth-presentations]]).

[L1] A finite presentation with linear isoperimetric inequality defines a hyperbolic group ([[thm-linear-isoperimetric-characterisation-of-hyperbolic-groups]]).

[A1] AC is used through [L1]'s linear-area-to-slimness supplier ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 By [L0], the given presentation satisfies a linear isoperimetric inequality. [given, L0]

2.1 Therefore [L1] applies under [A1], and the presented group is hyperbolic. [L1, A1, step 1.1] ∎
