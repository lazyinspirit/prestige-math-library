---
id: cor-pfa-implies-no-s-spaces
kind: corollary
title: "PFA implies that there are no S-spaces"
status: draft
origin: pipeline
deps: [thm-pfa-implies-p-ideal-dichotomy, lem-pfa-raises-the-pseudointersection-number, thm-pid-and-p-greater-than-omega-one-eliminate-s-spaces]
justified_by: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Todorcevic, Forcing with a coherent Souslin tree, Section 7"
      url: https://www.math.toronto.edu/~stevo/todorcevic_chain_cond.pdf
    - title: "Todorcevic, Combinatorial Dichotomies in Set Theory, Theorem 23.2"
      url: https://www.math.toronto.edu/~stevo/dichotomies4.pdf
---

## Statement

In ZFC plus PFA, no regular Hausdorff hereditarily separable non-Lindel&ouml;f
space exists; equivalently, there are no S-spaces.

## Facts & Assumptions

**Given:** PFA.

[F1] PFA implies PID. [[thm-pfa-implies-p-ideal-dichotomy]]

[F2] PFA implies $\mathfrak p>\omega_1$.
[[lem-pfa-raises-the-pseudointersection-number]]

[F3] PID together with $\mathfrak p>\omega_1$ makes every regular Hausdorff
hereditarily separable space hereditarily Lindel&ouml;f, excluding S-spaces.
[[thm-pid-and-p-greater-than-omega-one-eliminate-s-spaces]]

## Proof

1.1 By F1 and F2, the PFA universe satisfies both PID and $\mathfrak p>\omega_1$. [F1, F2, Given]

2.1 Apply F3. Every regular Hausdorff hereditarily separable space is hereditarily Lindel&ouml;f and therefore Lindel&ouml;f itself, so none meets the non-Lindel&ouml;f clause in the definition of an S-space. [F3, step 1.1] ∎
