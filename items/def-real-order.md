---
id: def-real-order
kind: definition
title: "Order on the reals"
status: published
origin: session
deps: [def-real-numbers, def-rat-order]
aliases: []
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §5.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

A real $x$ is **positive** when it has a representative $(a_n)$ together
with a rational $\delta > 0$ and an index $N$ such that $a_n > \delta$
for all $n \ge N$. Define

$$x \le y \iff x = y \;\text{ or }\; y - x \text{ is positive},$$

and $|x| = x$ if $x \ge 0$, $|x| = -x$ otherwise.

## Remarks

- Independence of the representative, trichotomy, and compatibility with the
  field operations: [[thm-reals-ordered-field]].
- The triangle inequality for this $|\cdot|$ holds because the proof of
  [[lem-rat-triangle]] uses only the axioms of a totally ordered field.
