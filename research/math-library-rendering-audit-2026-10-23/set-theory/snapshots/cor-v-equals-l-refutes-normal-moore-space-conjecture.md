---
id: cor-v-equals-l-refutes-normal-moore-space-conjecture
kind: corollary
title: "V=L refutes the normal Moore space conjecture"
status: published
origin: pipeline
deps: [thm-generalized-continuum-hypothesis-in-l, thm-ch-normal-nonmetrizable-moore-space, def-fleissner-hyp-covering-interface, def-moore-spaces-and-developments, thm-cantor-powerset]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Fleissner, Normal nonmetrizable Moore space from continuum hypothesis or nonexistence of inner models with measurable cardinals"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC345971/"
      locator: "Theorem 1 (CH case), printed p. 1371"
verification:
  audited: 2026-09-22
---

## Statement

$\mathrm{ZFC} + V = L$ refutes the normal Moore space conjecture: it proves
that there is a normal nonmetrizable Moore space
([[thm-ch-normal-nonmetrizable-moore-space]],
[[def-moore-spaces-and-developments]]).

## Facts & Assumptions

**Given:** The axiom $V = L$ over $\mathrm{ZFC}$.

[F1] $V = L$ implies $\mathrm{AC} + \mathrm{GCH}$
([[thm-generalized-continuum-hypothesis-in-l]]).

[F2] GCH gives the continuum hypothesis at $\omega$: the instance at the
infinite cardinal $\aleph_0$ says $2^{\aleph_0} = \aleph_1$, since
$\aleph_0^+ = \aleph_1$ and $\mathcal{P}(\omega)$ has cardinality
$2^{\aleph_0}$ ([[thm-cantor-powerset]],
[[def-fleissner-hyp-covering-interface]]); this is the form of CH consumed by
[[thm-ch-normal-nonmetrizable-moore-space]].

[F3] $\mathrm{ZFC} + \mathrm{CH}$ proves that a normal nonmetrizable Moore space
exists ([[thm-ch-normal-nonmetrizable-moore-space]]).



## Proof

**Proof technique:** direct.

1.1 Assume $V = L$. By [F1] both AC and GCH hold. [given, F1]

2.1 By [F2], GCH gives $2^{\aleph_0} = \aleph_1$, i.e. CH. [step 1.1, F2]

3.1 By [F3], applied under CH, there is a normal nonmetrizable Moore space. [step 2.1, F3]

4.1 A normal Moore space that is not metrizable is a counterexample to the normal Moore space conjecture, so $V = L$ refutes it. [step 3.1, given] ∎
