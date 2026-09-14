---
id: prop-degree-and-parity-criteria-for-serre-collapse
kind: proposition
title: Degree and parity criteria for Serre collapse
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-homological-serre-spectral-sequence, thm-cohomological-serre-spectral-sequence, prop-degree-reasons-force-stabilization-in-a-bounded-region, prop-a-spectral-sequence-supported-in-one-row-or-column-collapses, prop-collapse-does-not-in-general-split-the-abutment, def-axiom-of-choice]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Serre spectral sequence examples"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf"
      locator: "Chapter 5, printed pp. 532–538"
---

## Statement

Let $E_s$ be either the homological or cohomological Serre spectral sequence,
and fix $r\geq2$. Write $S_r$ for the set of bidegrees where $E_r$ is nonzero.
If, for every $s\geq r$, no two points of $S_r$ differ by the bidegree of
$d_s$, then every $d_s$ for $s\geq r$ is zero and the sequence collapses at
$E_r$. Equivalently, it is enough that every possible incoming or outgoing
endpoint from every point of $S_r$ lies outside $S_r$.

In particular:

1. support in a single row or a single column at $E_r$ forces collapse;
2. if $S_r$ is supported in total degrees of only one parity, then collapse
   occurs at $E_r$; and
3. more locally, a specified differential is zero whenever its source and
   target total-degree parities cannot both occur in the support.

The homological assertion is choice-free. For the cohomological Serre spectral
sequence as constructed in this library, assume the Axiom of Choice. Collapse
identifies $E_r=E_\infty$ with the associated graded of the abutment filtration;
it does not assert that the filtration splits.

## Facts & Assumptions

**Given:** One of the two Serre sequences in the statement and its support on page $r\geq2$.

[A1] [[def-axiom-of-choice]] is assumed only in the cohomological Serre branch.

[F1] [[thm-homological-serre-spectral-sequence]] supplies the choice-free homological bidegree $(-s,s-1)$, persistence of zero terms, and the associated-graded abutment.

[F2] [[thm-cohomological-serre-spectral-sequence]] supplies, under [A1], the cohomological bidegree $(s,1-s)$, persistence of zero terms, and the associated-graded abutment.

[F3] [[prop-a-spectral-sequence-supported-in-one-row-or-column-collapses]] proves the one-row and one-column criterion for every page $r\geq2$.

[F4] [[prop-degree-reasons-force-stabilization-in-a-bounded-region]] proves that zero terms persist and explains pointwise stabilization from absence of incident endpoints.

[F5] [[prop-collapse-does-not-in-general-split-the-abutment]] supplies an explicit collapsed filtered $\mathbb Z/4$ whose two $\mathbb Z/2$ graded pieces do not split.

## Proof

**Proof technique:** inspect both endpoints of every differential.

1.1 In homological indexing, a nonzero $d_s$ would have a source $(p,q)\in S_r$ and target $(p-s,q+s-1)\in S_r$. Indeed, every point outside $S_r$ is zero on page $r$ and stays zero on all later pages by [F1] and [F4]. The support-disjointness hypothesis excludes this pair for every $s\geq r$, so every later differential has a zero endpoint and vanishes. In cohomological indexing the same argument uses the pair $(p,q)$ and $(p+s,q-s+1)$ and [F2]. Thus every page transition is the homology of a zero differential, proving collapse at $E_r$. [F1, F2, F4]

2.1 A single row or column has no pair differing by $(-s,s-1)$ or $(s,1-s)$ when $s\geq r\geq2$; this is also exactly [F3]. For parity, a homological differential lowers total degree by one, while a cohomological differential raises total degree by one. Its endpoints therefore have opposite total-degree parity. If only one parity occurs in $S_r$, one endpoint is zero. The same endpoint argument proves both the global collapse assertion and the local criterion for a specified differential. [F1, F2, F3, step 1.1]

2.2 The convergence statements in [F1] and [F2] identify the stable page only with the successive quotients of the abutment filtration. The filtered $\mathbb Z/4$ in [F5] has zero differentials and two $\mathbb Z/2$ stable pieces, but the quotient map $\mathbb Z/4\to\mathbb Z/2$ has no homomorphic section. Hence none of the degree arguments supplies a splitting. [F1, F2, F5, step 1.1]

3.1 If the base or total space is empty, all page terms are zero and the support is empty. The zero coefficient ring, a zero page, or a single nonzero bidegree satisfies the criterion. Row or column number zero and total degree zero require no separate exception. A degenerate representative has zero or ordinary bidegree and is governed by its page class. Both incoming and outgoing endpoints, both parity values, and both indexing conventions were checked in steps 1.1–2.1. AC is used only to invoke [F2], not in the support argument. There is no biconditional claim: support separation is sufficient, not necessary, because a differential between two nonzero terms may still vanish algebraically. [A1, F1, F2, F3, F4, F5, step 1.1, step 2.1, step 2.2] ∎

## Source notes

[Hatcher, Chapter 5](https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf), printed pp. 532–538, repeatedly applies these row, column, and degree obstructions in Serre computations. The endpoint argument is written out above; the nonsplitting warning is supplied internally by [F5].
