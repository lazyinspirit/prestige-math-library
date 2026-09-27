---
id: rem-aleph-one-dowker-space-open
kind: remark
title: "Is there a Dowker space of cardinality $\\aleph_1$ in ZFC? (open)"
status: published
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "Open: ZFC gives Dowker spaces, but none of size aleph_1 is known"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "Dowker space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dowker_space"
    - title: "Z. Balogh, A small Dowker space in ZFC, Proceedings of the AMS 124 (1996) 2555-2560"
      url: "https://www.ams.org/journals/proc/1996-124-08/S0002-9939-96-03610-6/"
    - title: "M. Kojman and S. Shelah, A ZFC Dowker space in aleph_{omega+1}: an application of pcf theory to topology, Proceedings of the AMS 126 (1998) 2459-2465 (arXiv:math/9512202)"
      url: "https://arxiv.org/abs/math/9512202"
    - title: "A. Rinot, R. Shalev and S. Todorcevic, A new small Dowker space (arXiv:2209.10504); introduction, for the three ZFC constructions and for Rudin's Conjecture 4 remaining open"
      url: "https://arxiv.org/abs/2209.10504"
pipeline_run: null
---

## Statement

A **Dowker space** is a normal Hausdorff space $X$ such that $X \times [0,1]$ is
not normal. By Dowker's theorem (1951) these are exactly the normal spaces that
fail to be countably paracompact, so they are the witnesses that normality is not
preserved by so much as multiplying with the unit interval.

**Question.** Does ZFC prove that a Dowker space of cardinality $\aleph_1$
exists?

**Status: open.** Dowker spaces themselves exist in ZFC, but only three
constructions are known: M. E. Rudin's of 1971, of cardinality
$\aleph_\omega^{\aleph_0}$; Balogh's of 1996, of cardinality the continuum; and
the Kojman-Shelah space of 1998, of cardinality $\aleph_{\omega+1}$, obtained
from pcf theory as a subspace of Rudin's. Small ones exist under extra axioms: a
Dowker space of cardinality $\aleph_1$ can be built under the continuum
hypothesis (Juhász, Kunen and Rudin, 1976), from the existence of a Luzin set
(Todorcevic), and from the guessing principle $\clubsuit$ (de Caux, 1977; note
$\diamondsuit$ implies $\clubsuit$, so it suffices too). Whether ZFC alone
suffices is not known; this is Conjecture 4 of Rudin's 1990 problem list, and it
is still open.

## Remarks

**Not proved in this library, and not proved anywhere.** The library now
develops the required general-topology background, but it does not build a
Dowker-space construction or the forcing and independence machinery needed to
analyse the $\aleph_1$ question.

**What is known, and what would settle it.** Settling it means either a ZFC
construction of a Dowker space of size $\aleph_1$, or a model of ZFC containing no
such space. The consistency of the negative side is what the extra-axiom
constructions do *not* rule out, and it is why the question is genuinely open
rather than merely unresolved by the current constructions. Work since has gone
on widening the hypotheses that suffice rather than removing them: Rinot, Shalev
and Todorcevic derive the relevant guessing principle at $\aleph_1$ from the
stick principle, from $\diamondsuit(\mathfrak{b})$, and from the existence of a
Luzin set. Note the difference in status from the ambient theory: that a ZFC
Dowker space exists at all was settled in 1971, and the open part is entirely
about how small it can be forced to be.

**Why it matters here.** The library's separation-axiom material has to record
that normality is badly behaved: not hereditary, not productive, and not even
stable under multiplication by $[0,1]$. Dowker spaces are the canonical witness
for the last of these, and they are also a clean example of a question whose
answer is a cardinal rather than a yes or no. Recording it here keeps that
material from asserting anything about the smallest such space.
