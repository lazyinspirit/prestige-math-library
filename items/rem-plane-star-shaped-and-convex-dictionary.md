---
id: rem-plane-star-shaped-and-convex-dictionary
kind: remark
title: 'Complex star-shaped and convex domains are the published Euclidean notions under the identification $\mathbb C=\mathbb R^2$'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [rem-complex-plane-euclidean-dictionary, def-complex-domain, def-star-shaped-open-subset-of-rn, def-convex-subset-of-euclidean-space]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Guide to Cultivating Complex Analysis, Proposition 3.2.11"
      url: "https://web.archive.org/web/20260108042400if_/https://math.okstate.edu/people/lebl/osu5283-s20/ca.pdf"
    - title: "Tang-Kai Lee, Complex Analysis Notes, Section 2.1.2"
      url: "https://www.math.columbia.edu/~leetk/TA/CA25-file/Note-CA.pdf"
pipeline_run: null
---

## Remark

We use the identification $\mathbb C=\mathbb R^2$ from [[rem-complex-plane-euclidean-dictionary]] without changing its Euclidean topology or line segments. Thus an open set $U\subseteq\mathbb C$ is **star-shaped with respect to $a\in U$** precisely when the whole segment $(1-t)a+tz$, $0\le t\le1$, lies in $U$ for every $z\in U$, as in [[def-star-shaped-open-subset-of-rn]]. It is **convex** precisely when the segment $(1-t)z+tw$ lies in $U$ for every $z,w\in U$, as in [[def-convex-subset-of-euclidean-space]].

A complex domain is nonempty, open, and connected by [[def-complex-domain]]. Consequently, a convex complex domain is star-shaped with respect to each of its points: after fixing $a\in U$, convexity applied to $a$ and any $z\in U$ gives the required segment. Connectedness is not needed for that implication.
