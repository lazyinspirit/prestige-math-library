---
id: def-radon-measure-on-an-lch-space
kind: definition
title: "Radon measure on an LCH space"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-borel-sigma-algebra, def-measure, def-compact-space]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., §7.2"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Definition

For this page, a Borel measure $\mu$ on a locally compact Hausdorff space is
**Radon** when $\mu(K)<\infty$ for every compact $K$, and, for every Borel
$E$ and every open $U$,
$$\mu(E)=\inf_{E\subseteq V\text{ open}}\mu(V),\qquad \mu(U)=\sup_{K\subseteq U\text{ compact}}\mu(K).$$
Cohn calls this convention regular. It does not assert compact inner
approximation for arbitrary Borel $E$.
