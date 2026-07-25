---
id: rem-aleph-one-dowker-space-open
kind: remark
title: "Is there a Dowker space of cardinality $\\aleph_1$ in ZFC? (open)"
status: draft
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
sources:
  scraped: []
  references:
    - title: "Dowker space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dowker_space"
    - title: "Z. Balogh, A small Dowker space in ZFC, Proceedings of the AMS 124 (1996) 2555-2560"
      url: "https://www.ams.org/journals/proc/1996-124-08/S0002-9939-96-03610-6/"
    - title: "M. Kojman and S. Shelah, A ZFC Dowker space in aleph_{omega+1}: an application of pcf theory to topology (arXiv:math/9512202)"
      url: "https://arxiv.org/abs/math/9512202"
pipeline_run: null
---

## Statement

A **Dowker space** is a normal Hausdorff space $X$ such that $X \times [0,1]$ is
not normal. By Dowker's theorem (1951) these are exactly the normal spaces that
fail to be countably paracompact, so they are the witnesses that normality is not
preserved by so much as multiplying with the unit interval.

**Question.** Does ZFC prove that a Dowker space of cardinality $\aleph_1$
exists?

**Status: open.** Dowker spaces themselves exist in ZFC: M. E. Rudin constructed
one in 1971, of cardinality $\aleph_\omega^{\aleph_0}$. Small ones exist under
extra axioms: a Dowker space of cardinality $\aleph_1$ can be built under the
continuum hypothesis (Juhász, Kunen and Rudin) and under $\diamondsuit$ (de Caux).
Whether ZFC alone suffices is not known. The best ZFC upper bounds are Balogh
(1996), who produced one of cardinality the continuum, and Kojman and Shelah
(1998), who produced one of cardinality $\aleph_{\omega+1}$ using pcf theory.

## Remarks

**Not proved in this library, and not proved anywhere.** This library develops
neither the general topology in which Dowker spaces are constructed nor the
independence machinery in which the question would be settled negatively; both
tracks are deferred.

**What is known, and what would settle it.** Settling it means either a ZFC
construction of a Dowker space of size $\aleph_1$, or a model of ZFC containing no
such space. The consistency of the negative side is what the extra-axiom
constructions do *not* rule out, and it is why the question is genuinely open
rather than merely unresolved by the current constructions. A closely related and
harder open problem is whether there is a Dowker space with a $\sigma$-disjoint
base, for which not even a consistent example is known. Note the difference in
status from the ambient theory: that a ZFC Dowker space exists at all was settled
in 1971, and the open part is entirely about how small it can be forced to be.

**Why it matters here.** The library's separation-axiom material has to record
that normality is badly behaved: not hereditary, not productive, and not even
stable under multiplication by $[0,1]$. Dowker spaces are the canonical witness
for the last of these, and they are also a clean example of a question whose
answer is a cardinal rather than a yes or no. Recording it here keeps that
material from asserting anything about the smallest such space.
