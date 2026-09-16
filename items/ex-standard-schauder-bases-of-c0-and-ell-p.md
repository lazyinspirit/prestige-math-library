---
id: ex-standard-schauder-bases-of-c0-and-ell-p
kind: example
title: "Standard Schauder bases of c0 and ell-p"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-partial-sum-projections-and-basis-constant, lem-finite-truncations-are-dense-in-c0-and-ell-one, rem-ell-p-is-l-p-of-counting-measure]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Thomas Schlumprecht, Course Notes in Functional Analysis, Math 655"
      url: "https://people.tamu.edu/~t-schlumprecht/course_notes_math655_23c.pdf"
      locator: "Examples 3.1.2, printed pp.63-64"
pipeline_run: phase-2-next-18
---

## Example

For $c_0$ and for $\ell^p$, $1\le p<\infty$, let $(e_n)_{n\ge1}$ be the
standard unit vectors indexed so that $e_n$ is $1$ in coordinate $n-1$ and
$0$ elsewhere. They form a Schauder basis. Their coordinate truncations are
contractions, so the basis constant is exactly one in every nonzero case.

## Facts & Assumptions

[L1] Finite truncations converge in $c_0$ and $\ell^1$ ([[lem-finite-truncations-are-dense-in-c0-and-ell-one]]).

[L2] $\ell^p$ is $L^p$ of counting measure, with its usual series norm ([[rem-ell-p-is-l-p-of-counting-measure]]).

[L3] The basis constant is the supremum of coordinate-truncation norms ([[def-partial-sum-projections-and-basis-constant]]).

## Verification

**Proof technique:** direct.

**Given:** The objects and hypotheses in the Statement.

1.1 For $N\ge1$, $P_N$ retains coordinates $0,\ldots,N-1$, and $P_0=0$. [given, L1, L2]
Thus in $c_0$, [L1] (with its truncation index $N-1$) gives $P_Nx\to x$ in supremum norm. In $\ell^p$, [L2] gives $\|x-P_Nx\|_p^p=\sum_{m\ge N}|x_m|^p\to0$; for $p=1$ this is also [L1]. The coefficients are necessarily the coordinates, so the expansions are unique. [L1, L2]

2.1 Deleting coordinates cannot increase either the supremum norm or the [given, L3, step 1.1]
$p$-norm, hence $\|P_N\|\le1$. In a nonzero space $P_Ne_1=e_1$ for $N\ge1$, so $\|P_N\|=1$ and [L3] gives basis constant one. [L3, coordinate calculation] ∎
