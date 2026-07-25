---
id: rem-dowker-spaces
kind: remark
title: "Dowker spaces exist in ZFC, and the aleph-one case is open"
status: published
origin: session
proved_here: false
deps: [rem-independence-of-ch-and-gch]
justified_by: []
forward_refs: [def-cardinal]
aliases: []
landmark: false
short: "Rudin 1971, Balogh 1996, Kojman-Shelah 1998"
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
    - title: "M. E. Rudin, A normal space X for which X x I is not normal, Fund. Math. 73 (1971), 179-186"
      url: "https://doi.org/10.4064/fm-73-2-179-186"
    - title: "Z. Balogh, A small Dowker space in ZFC, Proc. Amer. Math. Soc. 124 (1996), 2555-2560"
      url: "https://doi.org/10.1090/S0002-9939-96-03610-6"
    - title: "M. Kojman and S. Shelah, A ZFC Dowker space in aleph_{omega+1}: an application of pcf theory to topology, Proc. Amer. Math. Soc. 126 (1998), 2459-2465"
      url: "https://doi.org/10.1090/S0002-9939-98-04884-9"
pipeline_run: null
---

## Statement

**Dowker's theorem** (1951) characterises the normal spaces whose product with
the unit interval is again normal: for a normal $X$, the product
$X \times [0,1]$ is normal if and only if $X$ is countably paracompact. A
**Dowker space** is a normal space that is not countably paracompact, that is, a
witness that the hypothesis cannot be dropped.

**(a) Dowker spaces exist in ZFC.** M. E. Rudin (1971) gives one, a subspace of
a product of ordinal spaces; its cardinality is $\aleph_\omega^{\aleph_0}$.

**(b) Smaller ZFC examples.** Balogh (1996) constructs a Dowker space of
cardinality the continuum. Kojman and Shelah (1998) construct one of cardinality
$\aleph_{\omega+1}$, using pcf theory.

**(c) The $\aleph_1$ case is open.** Whether ZFC alone proves the existence of a
Dowker space of cardinality $\aleph_1$ is **not known**. Such spaces are known to
exist under extra hypotheses, the standard ones being the continuum hypothesis
and the diamond principle.

## Remarks

- **Not proved in this library.** No construction here, and no topology track at
  this point of the library.

- **What would prove it.** All three constructions are ZFC arguments, so no
  forcing is needed for (a) and (b), but they need ordinal and cardinal
  arithmetic well past [[def-cardinal]], the ordinal spaces, and in the
  Kojman-Shelah case Shelah's pcf theory. Clause (c) is an open problem and no
  track would discharge it.

- **Why it matters here.** Dowker's theorem is the reason "normal" is not a
  well-behaved property under products, and a theorem with a hypothesis and no
  witness is a theorem no reader can calibrate. Recording the ZFC examples is
  what lets a later separation or product page state Dowker's theorem honestly:
  the countable paracompactness hypothesis is not removable, and the smallest
  known ZFC witness is large. Recording (c) is what stops that page from
  claiming a small witness exists.

- **Conditional discipline.** (a) and (b) are ZFC theorems, cited and not
  proved. (c) is a statement about the current state of knowledge, not a
  mathematical claim, and is recorded so no later page asserts more than is
  known.
