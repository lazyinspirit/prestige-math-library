---
id: fs-isomorphic-lie-algebras-determine-isomorphic-connected-lie-groups
kind: false-statement
title: Isomorphic Lie algebras determine isomorphic connected Lie groups
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations, def-countable-choice]
landmark: false
proof_strategy: counterexample
axiom_base: ZF + AC_omega
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §3.8"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: "Corollary 3.43 and following discussion, printed p. 42"
---

## Statement refuted

Assume countable choice. Connected real Lie groups with isomorphic Lie
algebras are isomorphic as Lie groups.

## Facts & Assumptions

**Given:** $\mathsf{AC}_\omega$ and the usual Lie-group structures on the
line and circle.

[L1] Every connected integration is a discrete central quotient of the
simply connected integration
([[thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations]]).

[L2] Countable choice is the declared weak-choice assumption
([[def-countable-choice]]).

## Counterexample

**Proof technique:** line versus circle.

1.1 The groups $(\mathbb R,+)$ and $S^1$ are connected one-dimensional Lie groups. Each Lie algebra is one-dimensional with zero bracket, so their Lie algebras are isomorphic. [given, algebra]

2.1 The circle is compact, whereas $\mathbb R$ is not. A Lie-group isomorphism is a homeomorphism and would preserve compactness, so the groups are not isomorphic. Equivalently, they are the quotients $\mathbb R/0$ and $\mathbb R/\mathbb Z$ from the classification [L1]. This also displays the distinct discrete central kernels. Countable choice is the assumption [L2] used only through [L1]; the compactness witness itself is choice-free. [L1, L2, step 1.1] ∎