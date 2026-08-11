---
id: cor-bv-discontinuities-are-countable-and-of-first-kind
kind: corollary
title: "A bounded-variation function has at most countably many discontinuities, all of the first kind"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-jordan-decomposition-for-bv-functions,
       thm-monotone-discontinuities-are-jumps, thm-froda,
       def-one-sided-limits, thm-algebra-of-function-limits]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Christopher Heil, Absolute Continuity and the Banach-Zaretsky Theorem"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
    - title: "William F. Trench, Introduction to Real Analysis, Ch. 3"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

If $f:[a,b]\to\mathbb R$ has bounded variation, every well-posed one-sided limit
of $f$ exists. Consequently every discontinuity is of the first kind, and the
set of discontinuities is at most countable.

## Facts & Assumptions

**Given:** A bounded-variation function $f:[a,b]\to\mathbb R$.

[L1] Jordan decomposition writes $f=f(a)+P_f-N_f$ with $P_f,N_f$ nondecreasing ([[thm-jordan-decomposition-for-bv-functions]]).

[L2] Every well-posed one-sided limit of a monotone function exists, so all its discontinuities are of the first kind ([[thm-monotone-discontinuities-are-jumps]], [[def-one-sided-limits]]).

[L3] The discontinuity set of a monotone function on an interval is at most countable ([[thm-froda]]).

[L4] Finite sums and differences preserve existing finite function limits ([[thm-algebra-of-function-limits]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] to $P_f$ and $N_f$. At every endpoint or interior point where a one-sided limit is defined, both component limits exist, and [L4] gives the corresponding one-sided limit of $f=f(a)+P_f-N_f$. Thus $f$ has no discontinuity of the second kind. [L1, L2, L4]

1.2 If both $P_f$ and $N_f$ are continuous at a point, [L4] makes $f$ continuous there. Hence the discontinuity set of $f$ is contained in the union of the two component discontinuity sets. [L1, L4]

2.1 Each component discontinuity set is at most countable by [L3]. Given injections of them into $\mathbb N$, map the first set to the even naturals and the points belonging only to the second to the odd naturals; this injects their union into $\mathbb N$. Step 1.2 therefore makes the discontinuity set of $f$ at most countable, and step 1.1 makes every one of its discontinuities first-kind. [step 1.1, step 1.2, L3, algebra] ∎
