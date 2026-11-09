---
id: lem-author-f08c343a07fc-cancel-module-stabilization
kind: lemma
title: Free stabilization passes through global sections
status: draft
domain: mathematics
deps:
  - lem-author-f08c343a07fc-cancel-module-classes
  - lem-affine-bundle-module-interface
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-f08c343a07fc-cancel-module-classes: mathematical-premise
  lem-affine-bundle-module-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 2
---

## Statement
Assume AC and put $X=\operatorname{Spec}A$. For bundles $E,F$ and an integer $N\geq0$, $E\oplus\mathcal O_X^N\cong F\oplus\mathcal O_X^N$ if and only if $\Gamma(X,E)\oplus A^N\cong\Gamma(X,F)\oplus A^N$. All modules here are finite projective.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement.

**Goal:** Establish the stated conclusion.

[F1] The affine equivalence preserves finite direct sums and sends $A^N$ to $\mathcal O_X^N$. [[lem-affine-bundle-module-interface]]

[F2] It reflects and preserves isomorphism classes. [[lem-author-f08c343a07fc-cancel-module-classes]]

## Proof

1.1 Apply global sections to a stabilized bundle isomorphism. Its inverse remains an inverse; direct-sum compatibility identifies its source and target with the displayed modules. [F1, F2]

2.1 Conversely sheafify a module isomorphism and use the counit to identify its ends with the displayed bundles. The equivalence also supplies finite projectivity. [F1, F2, step 1.1] ∎
