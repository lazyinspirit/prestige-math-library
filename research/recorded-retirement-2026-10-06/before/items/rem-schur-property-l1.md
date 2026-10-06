---
id: rem-schur-property-l1
kind: remark
title: "The Schur property of $\\ell^1$"
status: draft
origin: session
proved_here: false
deps: [rem-weak-and-weak-star-topologies]
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "weak and norm sequences agree in l^1"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Schur's property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Schur's_property"
    - title: "Sequence space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequence_space"
    - title: "F. Albiac and N. J. Kalton, Topics in Banach Space Theory, 2nd ed., Graduate Texts in Mathematics 233, Springer (2016)"
      url: "https://doi.org/10.1007/978-3-319-31557-7"
pipeline_run: null
---

## Statement

In $\ell^1$ a sequence converges weakly if and only if it converges in norm. This is the **Schur
property**.

At the same time $\ell^1$ is infinite-dimensional, so its weak topology is strictly coarser than its
norm topology: the two topologies are different, and yet no sequence witnesses the difference.

## Remarks

**Not proved in this library.** Recorded with a citation.

**What would prove it.** A gliding hump argument: a weakly null sequence in $\ell^1$ that does not
tend to zero in norm can be thinned to an almost disjointly supported block sequence, and a
functional in $\ell^\infty$ built by choosing signs on those blocks then fails to tend to zero on
it, a contradiction.

**Why it matters here.** It is the sharpest possible warning about sequential reasoning. In
$\ell^1$ every sequential test one could apply to distinguish the weak topology from the norm
topology returns the same answer for both, and the topologies are still different. Only nets, or
filters, or a non-sequential invariant, can see the distinction, which is precisely the point made
in [[rem-weak-and-weak-star-topologies]].
