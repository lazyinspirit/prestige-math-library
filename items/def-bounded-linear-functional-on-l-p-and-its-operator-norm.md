---
id: def-bounded-linear-functional-on-l-p-and-its-operator-norm
kind: definition
title: "A bounded linear functional on $L^p(\\mu)$ and its operator norm"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-l-p-space-as-a-quotient-by-null-functions, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 6.2"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Section 15.4"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
    - title: "John K. Hunter, Measure Theory, Section 7.5"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
---

## Definition

Let $(X,\mathcal A,\mu)$ be a measure space and let $1 \le p < \infty$. A
map
$$\Lambda:L^p(\mu)\to\mathbb R,$$
is a **bounded linear functional** when it is linear and there exists
$C \in [0,\infty)$ such that
$$|\Lambda([f])|\le C\|[f]\|_p\qquad([f]\in L^p(\mu)).$$

Its **operator norm** is
$$\|\Lambda\|:=\sup\{\,|\Lambda([f])|:\|[f]\|_p\le1\,\}.$$

Because $L^p(\mu)$ is a normed space by
[[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]],
the unit ball is nonempty and the displayed supremum is over a well-defined
subset of $[0,\infty]$. When $\Lambda$ is bounded, the defining inequality
shows $\|\Lambda\|\le C$.
