---
id: thm-simple-functions-are-dense-in-l-infinity-in-essential-supremum
kind: theorem
title: "Simple functions are dense in $L^\\infty(\\mu)$ in the essential-supremum norm"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-l-infinity-on-a-measure-space, prop-essential-supremum-is-attained-as-the-least-essential-bound, rem-elements-of-l-p-are-equivalence-classes-and-pointwise-statements-require-a-representative]
landmark: false
proof_strategy: "Choose an essentially bounded representative and quantize its range into finitely many intervals of width below $\\varepsilon$. The resulting simple function is uniformly close almost everywhere, hence close in the essential-supremum norm."
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---
## Statement

Let $(X,\mathcal A,\mu)$ be a measure space. Simple functions are dense in
$L^\infty(\mu)$ for the essential-supremum norm.

## Facts & Assumptions

**Given:** A measure space, $\varepsilon > 0$, and $f \in L^\infty(\mu)$.

[L1] Choose a representative of the $L^\infty$ class and interpret its norm by
the least essential bound
([[def-l-infinity-on-a-measure-space]],
[[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

## Proof

**Proof technique:** direct.

1.1 Choose a measurable representative $u$ of $f$ and let $M := \|f\|_\infty$. [L1, given, choose, construct]
By [L1], $|u(x)| \le M$ almost everywhere. Partition the interval $[-M,M]$ into
finitely many subintervals of length at most $\varepsilon$, and on each strip
$u^{-1}(I_j)$ choose one value $c_j \in I_j$. The resulting function
$$ s := \sum_j c_j\,\mathbf{1}_{u^{-1}(I_j)} $$
is simple. [L1, given, choose, construct]

2.1 On the full-measure set where $|u| \le M$, the values $u(x)$ and $s(x)$ lie [step 1.1, algebra]
in the same interval $I_j$, so $|u(x)-s(x)| \le \varepsilon$. Hence
$$ \|f-s\|_\infty \le \varepsilon. $$ [step 1.1, algebra]

3.1 Since $\varepsilon > 0$ was arbitrary, simple functions are dense in [step 2.1]
$L^\infty(\mu)$ for the essential-supremum norm. [step 2.1] ∎
