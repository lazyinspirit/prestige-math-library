---
id: fs-every-finite-dimensional-representation-of-a-reductive-lie-algebra-is-completely-reducible
kind: false-statement
title: Every finite-dimensional representation of a reductive Lie algebra is completely reducible
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-weyls-complete-reducibility-theorem, thm-equivalent-characterizations-of-reductive-lie-algebras]
landmark: false
proof_strategy: counterexample
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
    - title: "Milne, Lie Algebras, Theorem 6.14 and surrounding discussion"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "§6, Theorem 6.14, printed pp. 59–60"
---

## Statement refuted

Every finite-dimensional representation of a reductive Lie algebra in
characteristic zero is completely reducible.

## Facts & Assumptions

**Given:** A characteristic-zero field and the module displayed below.

[L1] The reductive characterization allows a nonzero center ([[thm-equivalent-characterizations-of-reductive-lie-algebras]]).

[L2] Weyl complete reducibility applies to a semisimple acting algebra ([[thm-weyls-complete-reducibility-theorem]]).

## Counterexample

**Proof technique:** a nilpotent action of the center.

1.1 Let the one-dimensional abelian—and hence reductive—algebra $k t$ act on $V=k e_1\oplus k e_2$ by $t e_1=0$ and $t e_2=e_1$. The line $k e_1$ is invariant, and $kt$ is reductive by [L1]. [L1, given, algebra]

2.1 Any complementary line has a generator $e_2+a e_1$. Its image under $t$ is $e_1$, which does not belong to that line. Thus $k e_1$ has no invariant complement and the representation is not completely reducible. This does not contradict [L2], whose acting algebra must be semisimple: here the nonzero center acts by a nilpotent Jordan block. [L2, step 1.1, algebra] ∎