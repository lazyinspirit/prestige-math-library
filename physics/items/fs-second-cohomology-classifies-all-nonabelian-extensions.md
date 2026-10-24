---
id: fs-second-cohomology-classifies-all-nonabelian-extensions
kind: false-statement
title: Second cohomology classifies all nonabelian extensions
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-second-lie-algebra-cohomology-classifies-abelian-extensions]
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
    - title: "Weibel, Lie Algebra Homology and Cohomology, §§7.6–7.7"
      url: https://math.mit.edu/~hrm/palestine/weibel/07-lie_algebra_homology_and_cohomology.pdf
      locator: "§7.6 extension discussion and Exercise 7.7.5, printed pp. 237 and 241"
---

## Statement refuted

$H^2(\mathfrak g,M)$ classifies all Lie-algebra extensions, including those
with nonabelian kernel.

## Facts & Assumptions

**Given:** A characteristic-zero field and the split extension displayed below.

[L1] The $H^2$ classification theorem applies to extensions with abelian kernel, regarded as a module ([[thm-second-lie-algebra-cohomology-classifies-abelian-extensions]]).

## Counterexample

**Proof technique:** exhibit an extension outside the construction.

1.1 Let $\mathfrak h$ be the three-dimensional Heisenberg algebra and take the split extension $0\to\mathfrak h\to\mathfrak h\oplus k t\to k t\to0$. Its kernel is nonabelian because it contains basis elements $x,y,z$ with $[x,y]=z\ne0$. [given, construct]

2.1 In every extension constructed from a CE $2$-cocycle with coefficient module $M$, the kernel is $M\oplus0$ and its internal bracket is zero. Thus no such construction can be equivalent—by a map fixing the kernel—to the extension in step 1.1. The proof of [L1] uses abelianness both to make the quotient action independent of lifts and to turn Jacobi into the linear equation $d\omega=0$. Nonabelian kernels require outer-action and nonlinear obstruction data. Hence the word “all” is refuted. [L1, step 1.1, algebra] ∎