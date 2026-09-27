---
id: rem-lebesgue-measure-and-integral
kind: remark
title: "Lebesgue measure and the Lebesgue integral"
status: published
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: [def-countable-choice, def-lebesgue-outer-measure, thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-lebesgue-measure-is-a-complete-measure, def-nonnegative-lebesgue-integral, cor-additivity-of-the-nonnegative-lebesgue-integral, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]
aliases: [rem-lebesgue-integral]
landmark: true
short: "Lebesgue outer measure, Caratheodory measurability, and the integral built from them"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "Lebesgue integration (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lebesgue_integral"
    - title: "Lebesgue measure (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lebesgue_measure"
    - title: "Caratheodory's criterion (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Carath%C3%A9odory%27s_criterion"
    - title: "T. Tao, An Introduction to Measure Theory, Ch. 1"
      url: "https://terrytao.wordpress.com/books/an-introduction-to-measure-theory/"
pipeline_run: null
---

## Statement

For $E \subseteq \mathbb{R}$ put

$$\lambda^{*}(E) := \inf\Big\{ \sum_{k=1}^{\infty} |I_k| \;:\; E \subseteq \bigcup_{k=1}^{\infty} I_k, \ I_k \text{ open intervals} \Big\},$$

the **Lebesgue outer measure** of $E$. Call $E$ **measurable** when it satisfies
the **Caratheodory criterion**

$$\lambda^{*}(A) = \lambda^{*}(A \cap E) + \lambda^{*}(A \setminus E) \quad \text{for every } A \subseteq \mathbb{R}.$$

Then the measurable sets form a $\sigma$-algebra $\mathcal{M}$ containing every
open set, $\lambda := \lambda^{*}|_{\mathcal{M}}$ is countably additive,
$\lambda([a,b]) = b - a$, $\lambda$ is invariant under translation, and
$\mathcal{M}$ is complete: every subset of a set of outer measure zero is
measurable and null. The same construction in $\mathbb{R}^n$ with boxes in place
of intervals produces $\lambda_n$.

A function $f : \mathbb{R} \to [-\infty, +\infty]$ is **measurable** when
$f^{-1}((c, +\infty]) \in \mathcal{M}$ for every $c \in \mathbb{R}$. For
measurable $f \ge 0$ the **Lebesgue integral** is

$$\int f \, d\lambda := \sup\Big\{ \sum_{i=1}^{m} c_i \lambda(A_i) \;:\; 0 \le \sum_{i=1}^{m} c_i \mathbf{1}_{A_i} \le f, \ A_i \in \mathcal{M} \text{ disjoint} \Big\},$$

and a measurable $f$ is **Lebesgue integrable** when
$\int |f| \, d\lambda < \infty$, in which case
$\int f \, d\lambda := \int f^{+} \, d\lambda - \int f^{-} \, d\lambda$. The
integrable functions modulo equality almost everywhere form $L^{1}(\lambda)$.
Finally, every Riemann integrable $f$ on $[a,b]$ is Lebesgue integrable there and
the two integrals agree, so the Lebesgue integral extends the Riemann integral.

## Remarks

**This remark supplies no proof.** The library now has separate published
definitions and results for the construction: [[def-lebesgue-outer-measure]],
[[thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]],
[[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]],
[[thm-lebesgue-measure-is-a-complete-measure]], and
[[def-nonnegative-lebesgue-integral]]. Later items should cite the exact result
they use rather than treating this overview as a theorem.

**How the construction is established.** The published measure track proves
countable subadditivity of outer measure under Countable Choice, applies
Carathéodory's criterion to obtain a complete measure, and establishes volume
agreement on elementary sets. The integral track then defines the nonnegative
integral through simple minorants and proves its additivity separately
([[cor-additivity-of-the-nonnegative-lebesgue-integral]]). The comparison with
the Riemann integral is stated and proved in
[[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]].

**Which page it serves.** It connects the earlier Riemann integral and elementary
null-set pages to the later published measure and integral pages. The preceding
pages prove Lebesgue's criterion for Riemann integrability using the elementary
covering notion of a null set; the later items construct the measure and
integral. This remark is orientation, not a proof dependency.

**The earlier elementary scope.** The notion "$E$ is null if for every
$\varepsilon > 0$ it is covered by countably many intervals of total length below
$\varepsilon$" predates the measure construction, as do the Riemann-integrability
criterion, the Cantor-function and Volterra examples, and Jordan content. The
later measure and integral items add the $\sigma$-algebra and integration theory.

**Choice.** The construction above is not free of choice, and the statement
displayed above is not a theorem of ZF. What is choice-free is the definition of
$\lambda^{*}$, its monotonicity, and its subadditivity over finitely many sets.
What is not is countable subadditivity of $\lambda^{*}$, and with it the
countable additivity of $\lambda$ asserted above and the statement "a countable
union of null sets is null": each needs a countable choice principle
([[def-countable-choice]]) to select one $\varepsilon 2^{-n}$ cover per index.
If ZF is consistent then ZF proves none of them, since in the Feferman-Levy
model of ZF the set $\mathbb{R}$ is a countable union of countable sets, so
$[0,1]$ there is a countable union of null sets while $\lambda^{*}([0,1]) = 1$.
A measure track built here would have to keep the same ledger of choice
principles that the rest of this library keeps.
