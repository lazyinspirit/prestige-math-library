---
id: ex-sqrt2-cut
kind: example
title: "The cut $S = \\{q : q<0 \\text{ or } q^2<2\\}$ is $\\sqrt{2}$"
status: published
origin: session
deps: [def-dedekind-cut, def-real-dedekind, thm-rat-ordered-field, fs-sqrt2-rational]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Appendix: construction of ℝ)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "E. Landau, Foundations of Analysis"
      url: "https://bookstore.ams.org/chel-79"
pipeline_run: null
---

## Example

The set $S := \{ q \in \mathbb{Q} : q < 0 \text{ or } q^2 < 2 \}$ is a Dedekind
cut ([[def-dedekind-cut]]), hence a real number ([[def-real-dedekind]]), yet no
rational lies "at its boundary": it is the real number $\sqrt{2}$ that
$\mathbb{Q}$ lacks. It is the canonical witness that cuts capture limits missing
from $\mathbb{Q}$, and the standard test case for the completeness of $\mathbb{R}$.

## Facts & Assumptions

**Given:** The set $S := \{ q \in \mathbb{Q} : q < 0 \text{ or } q^2 < 2 \}$, the cut axioms (C1)–(C3) ([[def-dedekind-cut]]), and $\mathbb{R}$ as the set of all cuts with rational embedding $q \mapsto q^\ast = \{ r \in \mathbb{Q} : r < q \}$ ([[def-real-dedekind]]).

[L1] $\mathbb{Q}$ is a totally ordered field; in particular squaring is order-preserving on nonnegatives ($0 \le a < b \Rightarrow a^2 < b^2$) and the usual rational arithmetic holds ([[thm-rat-ordered-field]]).

[L2] No rational number squares to $2$ ([[fs-sqrt2-rational]]).

## Verification

**Proof technique:** direct.

1.1 (C1) $0 \in S$ since $0^2 = 0 < 2$, so $S \ne \emptyset$; and $2 \notin S$ since $2 > 0$ and $2^2 = 4 > 2$, so $S \ne \mathbb{Q}$. [given, L1]

1.2 (C2) Let $p \in S$ and $q < p$. If $q < 0$ then $q \in S$ by definition. Otherwise $0 \le q < p$, so $p > 0$; then $p \in S$ forces $p^2 < 2$, and $0 \le q < p$ gives $q^2 < p^2 < 2$, whence $q \in S$. [given, L1]

1.3 (C3, case $q \le 0$) Given $q \in S$ with $q \le 0$, take $r = 1$: then $1 \in S$ (as $1^2 = 1 < 2$) and $r = 1 > 0 \ge q$, so $r > q$. [given, L1]

1.4 (C3, case $q > 0$) Given $q \in S$ with $q > 0$, we have $q^2 < 2$; set $r = \dfrac{2q+2}{q+2}$. Then $r - q = \dfrac{2 - q^2}{q+2} > 0$, so $r > q > 0$, while $r^2 - 2 = \dfrac{2\,(q^2 - 2)}{(q+2)^2} < 0$, so $r^2 < 2$; hence $r \in S$ with $r > q$. [given, L1, algebra]

2.1 (C3) Combining the two cases, every $q \in S$ admits $r \in S$ with $r > q$: $S$ has no greatest element. [step 1.3, step 1.4]

3.1 By steps 1.1, 1.2 and 2.1, $S$ satisfies (C1)–(C3); it is a Dedekind cut ([[def-dedekind-cut]]), i.e. a real number ([[def-real-dedekind]]). [step 1.1, step 1.2, step 2.1]

4.1 Finally $S \ne p^\ast$ for every $p \in \mathbb{Q}$: were $S = p^\ast = \{ r : r < p \}$, then $p \notin S$ would give $p > 0$ and $p^2 \ge 2$, while $p^2 = 2$ is impossible by [L2], so $p^2 > 2$; as $p > 0$ we have $p + 2 > 0$, and then $s := \dfrac{2p+2}{p+2}$ satisfies $0 < s < p$ and $s^2 > 2$, so $s \notin S$, yet $s < p$ puts $s \in p^\ast = S$, a contradiction. Thus $S$ is a cut represented by no rational: it is the real number $\sqrt{2}$ absent from $\mathbb{Q}$. [step 3.1, L2, algebra] ∎
