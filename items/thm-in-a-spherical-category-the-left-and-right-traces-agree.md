---
id: thm-in-a-spherical-category-the-left-and-right-traces-agree
kind: theorem
title: "In a spherical category the left and right traces agree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-spherical-structure, def-pivotal-structure, def-the-categorical-trace-of-a-morphism-into-the-double-dual]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Theorem 4.7.15"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

Let $\mathcal C$ be a spherical tensor category with spherical structure $a$.
For every object $X$ and every endomorphism $x:X\to X$,

$$\operatorname{Tr}_L(a_Xx)=\operatorname{Tr}_R(xa_X^{-1}).$$

## Facts & Assumptions

**Given:** A spherical tensor category $(\mathcal C,a)$, an object $X$, and an
endomorphism $x:X\to X$.

[F1] EGNO Theorem 4.7.15 proves exactly the displayed identity for spherical
tensor categories.

[L1] The left and right traces used in the statement are the ones defined in
[[def-the-categorical-trace-of-a-morphism-into-the-double-dual]], and
$a_X:X\to X^{\vee\vee}$ is the pivotal comparison from [[def-pivotal-structure]].

## Proof

**Proof technique:** direct.

1.1 By [L1], both composites in the statement are well typed in any pivotal category, and the extra spherical hypothesis is exactly the one assumed in [F1]. [given, F1, L1]

1.2 Applying [F1] to the present spherical tensor category gives $$\operatorname{Tr}_L(a_Xx)=\operatorname{Tr}_R(xa_X^{-1}).$$ [F1]

2.1 Hence in a spherical category the left and right traces agree after inserting the pivotal comparison. [step 1.2] ∎
