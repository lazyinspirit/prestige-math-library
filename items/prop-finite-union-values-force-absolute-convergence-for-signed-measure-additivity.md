---
id: prop-finite-union-values-force-absolute-convergence-for-signed-measure-additivity
kind: proposition
title: "If a disjoint union has finite signed measure, then the signed-measure series converges absolutely"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-signed-measure, lem-finite-signed-measure-sets-have-only-finite-subset-values, def-rearrangement-and-unconditional-convergence, cor-unconditional-iff-absolute-in-r]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Definition 12.1"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, 9.3"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

Let $\nu$ be a signed measure on $(X,\mathcal A)$ and let $(E_n)_{n\in\mathbb N}$
be pairwise disjoint measurable sets. If
$$\nu\left(\bigcup_{n\in\mathbb N} E_n\right)\in\mathbb R,$$
then the real series $\sum_{n=0}^\infty \nu(E_n)$ converges absolutely.

## Facts & Assumptions

**Given:** A signed measure $\nu$, a pairwise disjoint measurable sequence
$(E_n)$, and the finite value
$\nu(\bigcup_n E_n)\in\mathbb R$.

[L1] A subset of a set of finite signed measure also has finite signed measure.
([[lem-finite-signed-measure-sets-have-only-finite-subset-values]])

[L2] A signed measure is countably additive on every disjoint measurable
sequence. ([[def-signed-measure]])

[L3] Unconditional convergence of a real series means that every rearrangement
converges to the same sum. ([[def-rearrangement-and-unconditional-convergence]])

[L4] For a series of real numbers, unconditional convergence is equivalent to
absolute convergence. ([[cor-unconditional-iff-absolute-in-r]])

## Proof

**Proof technique:** direct.

1.1 Put $E=\bigcup_n E_n$. Each $E_n\subseteq E$, so [L1] makes every [L1, L3, L4]
$\nu(E_n)$ a real number. Thus $\sum_n \nu(E_n)$ is a real series to which
[L3] and [L4] apply.

1.2 Let $\sigma:\mathbb N\to\mathbb N$ be a bijection. The sequence [L2, L3]
$(E_{\sigma(n)})$ is again pairwise disjoint and has the same union $E$, so
[L2] gives
$$\sum_{n=0}^\infty \nu(E_{\sigma(n)})=\nu(E)=\sum_{n=0}^\infty \nu(E_n).$$
Hence the series is unconditionally convergent in the sense of [L3].

2.1 Step 1.2 and [L4] imply that $\sum_n \nu(E_n)$ converges absolutely. [L4, step 1.1, step 1.2] ∎
