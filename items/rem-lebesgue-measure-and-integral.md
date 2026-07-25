---
id: rem-lebesgue-measure-and-integral
kind: remark
title: "Lebesgue measure and the Lebesgue integral"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: [def-countable-choice]
aliases: [rem-lebesgue-integral]
landmark: true
short: "Lebesgue outer measure, Caratheodory measurability, and the integral built from them"
verification:
  precheck: n/a
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

**This library does not prove any of it.** Everything above is recorded here with
citations and used nowhere in a proof. The whole measure track is deferred.

**What would prove it.** The construction is standard and long: countable
subadditivity of $\lambda^{*}$; Caratheodory's theorem that the sets satisfying
the criterion form a $\sigma$-algebra on which an outer measure is countably
additive; the fact that intervals satisfy the criterion, which is what gives
$\lambda([a,b]) = b-a$ and forces the Borel sets into $\mathcal{M}$;
approximation of a nonnegative measurable function from below by simple
functions; and additivity of the integral, which is where the monotone
convergence theorem enters. That is the opening chapter of any measure theory
course and it is exactly the material this library has not built.

**Which page it serves.** It is the natural endpoint of the Riemann integral page
and of the Cantor set, Baire and measure zero page: those pages prove Lebesgue's
criterion for Riemann integrability using only the elementary covering notion of
a null set, and the theorem above is what explains why that notion is the right
one. It is also the base of everything else in this category.

**What is available here without it.** A great deal, and it should not be
confused with what is deferred. The elementary notion "$E$ is null if for every
$\varepsilon > 0$ it is covered by countably many intervals of total length below
$\varepsilon$", that is $\lambda^{*}(E) = 0$ with no measurability theory
attached, is in scope, and so is "almost everywhere" in that sense. Lebesgue's
criterion for Riemann integrability, the vanishing of the Cantor function's
derivative almost everywhere, Volterra's function, Jordan content and Jordan
measurability all live inside the elementary theory. What is missing is the
$\sigma$-algebra, the measure defined on it, and the integral.

**Choice.** The construction above is a theorem of ZF as stated, but the
convenience results around it are not all free. In particular "a countable union
of null sets is null" needs a countable choice principle
([[def-countable-choice]]) to select one $\varepsilon 2^{-n}$ cover per index,
and in ZF alone it can fail: in the Feferman-Levy model $\mathbb{R}$ is a
countable union of countable sets. A measure track built here would have to keep
the same ledger of choice principles that the rest of this library keeps.
