---
id: rem-normal-moore-space-conjecture
kind: remark
title: "The normal Moore space conjecture is independent, and its consistency needs a large cardinal"
status: published
origin: session
proved_here: false
deps: [rem-martins-axiom]
justified_by: []
forward_refs: [rem-continuum-hypothesis]
aliases: []
landmark: false
short: "PMEA gives it; CH refutes it; large cardinals are necessary"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "Moore space (topology): normal Moore space conjecture (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Moore_space_(topology)"
    - title: "W. G. Fleissner, Normal nonmetrizable Moore space from continuum hypothesis or nonexistence of inner models with measurable cardinals, Proc. Nat. Acad. Sci. USA 79 (1982), 1371-1372"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC345971/"
    - title: "W. G. Fleissner, If all normal Moore spaces are metrizable, then there is an inner model with a measurable cardinal, Trans. Amer. Math. Soc. 273 (1982), 365-373"
      url: "https://doi.org/10.1090/S0002-9947-1982-0664048-8"
    - title: "P. J. Nyikos, A provisional solution to the normal Moore space problem, Proc. Amer. Math. Soc. 78 (1980), 429-435"
      url: "https://doi.org/10.1090/S0002-9939-1980-0553389-4"
pipeline_run: null
---

## Statement

A **Moore space** is a regular space carrying a development: a sequence
$(\mathcal{G}_n)_{n \in \mathbb{N}}$ of open covers such that for each point $x$
the collection of stars $\mathrm{St}(x, \mathcal{G}_n)$ is a neighbourhood base at
$x$. The **normal Moore space conjecture** (NMSC) asserts that every normal Moore
space is metrisable.

**NMSC is not decided by ZFC**, and its two sides have very different costs.

**(a) It fails under CH.** Fleissner (1982) constructs a normal nonmetrisable
Moore space from the continuum hypothesis. Since CH holds in the constructible
universe, NMSC fails in $L$. Non-metrisable normal Moore spaces also exist under
MA + (not CH), so both of the standard opposing hypotheses of
[[rem-martins-axiom]] refute it.

**(b) It holds under PMEA.** Nyikos (1980) proves that the product measure
extension axiom, that the usual product measure on $\{0,1\}^{\kappa}$ extends to
a measure on all subsets, implies every normal Moore space is metrisable. PMEA is
consistent relative to the existence of a **strongly compact cardinal**.

**(c) A large cardinal is necessary, not just convenient.** Fleissner (1982)
proves that if every normal Moore space is metrisable then there is an inner
model with a measurable cardinal. So the consistency of NMSC is not provable from
the consistency of ZFC alone.

## Remarks

- **Not proved in this library.** None of (a), (b), or (c) is proved here. The
  library now has a metrisation track and the standard metrisation theorems, but
  not the large-cardinal, forcing, measure-theoretic or inner-model machinery
  needed for these independence statements.

- **What would prove it.** For (a), a CH construction plus the standard
  metrisation theorems. For (b), large-cardinal theory (strongly compact
  cardinals) and the forcing that produces PMEA, plus measure theory. For (c),
  inner-model theory and the covering lemma. Two deferred tracks meet here,
  set theory beyond choice and measure theory.

- **Why it matters here.** It is the cleanest example in general topology of a
  natural question whose answer is not merely independent but genuinely
  **expensive**: unlike CH ([[rem-continuum-hypothesis]]), one side of it cannot
  be obtained from Con(ZFC) at all. Any metrisation page in this library must
  therefore state Bing's and Nagata-Smirnov's theorems and stop; the tempting
  further step, dropping collectionwise normality to plain normality, is not
  available and cannot be made available by working harder.

- **Conditional discipline.** (a) and (b) are implications from stated
  hypotheses; the consistency of PMEA is relative to a large-cardinal
  hypothesis strictly stronger than Con(ZFC), and (c) is an implication between
  consistency strengths. Nothing here asserts that measurable or strongly compact
  cardinals exist.
