---
id: thm-finite-c-prime-one-sixth-presentations-define-hyperbolic-groups
kind: theorem
title: "Finite C'(1/6) presentations define hyperbolic groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-linear-isoperimetric-characterisation-of-hyperbolic-groups]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Nicholas Touikan, An introduction to combinatorial and geometric group theory, Section 3.5"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/IntroCGGT.pdf"
    - title: "Clara Löh, Geometric Group Theory, Section 6.4"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
---

## Statement

Let $G=\langle X \mid R \rangle$ be a finite presentation satisfying the
metric small-cancellation condition $C'(1/6)$. Then $G$ is hyperbolic.

## Facts & Assumptions

**Given:** A finite presentation $\langle X \mid R \rangle$ satisfying $C'(1/6)$.

[A1] Finite $C'(1/6)$ presentations satisfy a linear isoperimetric inequality.

[L1] A finite presentation with linear isoperimetric inequality defines a
hyperbolic group
([[thm-linear-isoperimetric-characterisation-of-hyperbolic-groups]]).

## Proof

**Proof technique:** direct.

1.1 By [A1], the given presentation satisfies a linear isoperimetric inequality. [given, A1]

2.1 Therefore [L1] applies, and the presented group is hyperbolic. [L1, step 1.1] ∎ 