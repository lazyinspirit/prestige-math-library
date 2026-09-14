---
id: cor-pfa-implies-ma-aleph-one-and-suslin-hypothesis
kind: corollary
title: "PFA implies MA(aleph-one) and the Suslin Hypothesis"
status: draft
origin: pipeline
deps: [def-proper-forcing-axiom, thm-ccc-and-countably-closed-forcings-are-proper, thm-ma-aleph-one-eliminates-suslin-trees, thm-kurepa-equivalence-of-suslin-trees-lines-and-algebras, def-axiom-of-choice]
justified_by: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Karagila, Forcing & Symmetric Extensions, Sections 7-8"
      url: https://karagila.org/files/Forcing-2023.pdf
---

## Statement

In ZFC plus PFA, $\mathrm{MA}(\aleph_1)$ holds and the Suslin Hypothesis
holds.

## Facts & Assumptions

**Given:** PFA.

[F1] PFA supplies a filter meeting any family of at most $\omega_1$ dense sets
in a proper forcing. [[def-proper-forcing-axiom]]

[F2] Every ccc forcing is proper. [[thm-ccc-and-countably-closed-forcings-are-proper]]

[F3] $\mathrm{MA}(\aleph_1)$ rules out Suslin trees.
[[thm-ma-aleph-one-eliminates-suslin-trees]]

[F4] A Suslin line exists exactly when a Suslin tree exists; consequently SH
is equivalent to nonexistence of a Suslin tree.
[[thm-kurepa-equivalence-of-suslin-trees-lines-and-algebras]]

[A1] The supplier theorems work in ZFC and propagate their stated uses of AC.
[[def-axiom-of-choice]]

## Proof

1.1 Let $P$ be ccc and let $\mathcal D$ be a family of at most $\omega_1$ dense subsets of $P$. By F2, $P$ is proper, so F1 gives a filter meeting all members of $\mathcal D$. This is precisely $\mathrm{MA}(\aleph_1)$. [F1, F2, A1, Given]

2.1 Applying F3 to step 1.1 shows that no Suslin tree exists. [F3, A1, step 1.1]

3.1 By F4, nonexistence of Suslin trees is equivalent to nonexistence of Suslin lines, which is the Suslin Hypothesis. Thus PFA implies both asserted conclusions. No value of the continuum was used. [F4, A1, step 2.1] ∎
