---
id: def-complemented-subspace
kind: definition
title: "A complemented closed subspace of a normed space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-bounded-linear-operator, def-linear-subspace, def-normed-subspace]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations"
      url: "https://math.jhu.edu/~sire/brezis.pdf"
pipeline_run: frontier-28
---

## Definition

Let $X$ be a normed space and let $M \le X$ be a closed linear subspace. We say
that $M$ is **complemented** when there is a closed linear subspace $N \le X$
such that every $x \in X$ admits a unique decomposition

$$x = m+n \qquad (m \in M,\ n \in N),$$

and the coordinate maps

$$P_M(x):=m,\qquad P_N(x):=n$$

are bounded linear operators on $X$.

## Remarks

- The decomposition is written $X = M \oplus N$.
- The theorem below shows that this is equivalent to $M$ being the range of a
  bounded projection.
