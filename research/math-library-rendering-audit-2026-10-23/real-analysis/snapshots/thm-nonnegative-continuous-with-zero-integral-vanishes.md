---
id: thm-nonnegative-continuous-with-zero-integral-vanishes
kind: theorem
title: "A continuous $f \\ge 0$ on $[a,b]$ with $\\int_a^b f = 0$ is identically $0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-additivity-over-subintervals, thm-monotonicity-of-the-integral, lem-integral-elementary-bounds, thm-continuous-implies-integrable, lem-integrability-on-a-subinterval, def-continuity-real, def-darboux-integral, def-oriented-integral, def-max-min, def-interval, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "zero integral forces vanishing, for continuous $f \\ge 0$"
proof_strategy: contradiction
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: pass
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "MIT 18.100, problem-set solutions on the Riemann integral"
      url: "https://math.mit.edu/~rbm/18.100-F02.HMW/HMW7s.pdf"
    - title: "J. Lebl, Basic Analysis I, Properties of the Riemann integral"
      url: "https://www.jirka.org/ra/html/sec_rintprop.html"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be continuous on $[a,b]$
([[def-continuity-real]]) with $f(x) \ge 0$ for every $x \in [a,b]$ and

$$\int_a^b f \;=\; 0 .$$

Then $f(x) = 0$ for every $x \in [a,b]$.

**This is the exact repair of a published false statement.** Without continuity
the conclusion fails: [[fs-nonnegative-integrable-with-zero-integral-vanishes]],
on the companion page of *The Riemann Integral*, exhibits a nonnegative
integrable function with integral $0$ that is positive at every rational point.
The remark there says that the continuous case is true and that its proof was
not available at that point in the reading order, because additivity over
subintervals had not been proved. It is proved now
([[thm-additivity-over-subintervals]]), and this item is that proof.

## Facts & Assumptions

**Given:** Reals $a<b$ and a continuous $f : [a,b] \to \mathbb{R}$ with $f \ge 0$ on $[a,b]$ and $\int_a^b f = 0$.

[A1] There is $c \in [a,b]$ with $f(c) > 0$.

[L1] $f$ is integrable on $[a,b]$ and on every closed subinterval with distinct endpoints ([[thm-continuous-implies-integrable]], [[lem-integrability-on-a-subinterval]], [[def-darboux-integral]]).

[L2] Continuity at $c$: for every real $\eta>0$ there is a real $\delta>0$ such that every $x \in [a,b]$ with $|x-c|<\delta$ satisfies $|f(x)-f(c)| < \eta$ ([[def-continuity-real]]).

[L3] Additivity: for $a \le p \le q \le b$, $\int_a^b f = \int_a^p f + \int_p^q f + \int_q^b f$, the degenerate pieces being $0$ ([[thm-additivity-over-subintervals]], claim 3, [[def-oriented-integral]]).

[L4] If $u \ge 0$ is integrable on $[p,q]$ with $p<q$ then $\int_p^q u \ge 0$; and if $u \ge \kappa$ there then $\int_p^q u \ge \kappa(q-p)$ ([[thm-monotonicity-of-the-integral]], [[lem-integral-elementary-bounds]]).

[L5] Ordered-field arithmetic and minima: the order is total and transitive, $\min\{s,t\}$ and $\max\{s,t\}$ are reals lying appropriately, a product of two positive reals is positive, and adding constants preserves inequalities ([[def-max-min]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $f$ does not vanish identically; since $f \ge 0$, this gives $c \in [a,b]$ with $f(c) > 0$, which is [A1]. [assume-contra, given]

1.2 By [L2] with $\eta := f(c)\cdot 2^{-1} > 0$, fix a real $\delta > 0$ such that every $x \in [a,b]$ with $|x-c| < \delta$ satisfies $|f(x)-f(c)| < f(c)\cdot 2^{-1}$, hence $f(x) > f(c)\cdot 2^{-1}$. [A1, L2, L5, choose]

2.1 Put $p := \max\{a,\ c - \delta\cdot 2^{-1}\}$ and $q := \min\{b,\ c + \delta\cdot2^{-1}\}$. Then $a \le p \le c \le q \le b$, and $[p,q] \subseteq [a,b]$. [step 1.2, A1, L5, construct]

3.1 $p < q$: indeed $p \le c \le q$, and $p = q$ would force $p = c = q$, hence $c = \max\{a, c-\delta\cdot2^{-1}\}$ and $c = \min\{b, c+\delta\cdot 2^{-1}\}$, so $c = a$ and $c = b$, contradicting $a<b$. [step 2.1, L5]

3.2 Every $x \in [p,q]$ satisfies $|x - c| \le \delta\cdot 2^{-1} < \delta$, so $f(x) > f(c)\cdot2^{-1}$ there by step 1.2. [step 1.2, step 2.1, L5]

4.1 Hence $\int_p^q f \ge f(c)\cdot 2^{-1}\,(q-p) > 0$ by [L4] and step 3.1. [step 3.1, step 3.2, L1, L4, L5]

5.1 By [L3] and [L4], $\int_a^b f = \int_a^p f + \int_p^q f + \int_q^b f \ge \int_p^q f > 0$, the first and third pieces being $\ge 0$ because $f \ge 0$ there, or $0$ when degenerate. [step 4.1, L1, L3, L4, L5]

6.1 This contradicts the hypothesis $\int_a^b f = 0$, so no such $c$ exists and $f(x) = 0$ for every $x \in [a,b]$. [step 5.1, given, discharge-contradiction] ∎

## Remarks

- **The nonnegativity on the two outer pieces is cited, not assumed away.** The usual one-line version writes "so $\int_a^b f \ge \int_p^q f$" without saying why; what makes that step legitimate is that $f \ge 0$ on $[a,p]$ and on $[q,b]$ too, so both of those integrals are $\ge 0$ ([[thm-monotonicity-of-the-integral]]). Without a sign hypothesis outside $[p,q]$ the argument would fail.

- **The case where $c$ is an endpoint is covered by the construction, not by a case split.** Taking $p$ and $q$ as a maximum and a minimum with $a$ and $b$ makes $[p,q]$ a one-sided neighbourhood of $c$ when $c = a$ or $c = b$, and step 3.1 is what checks that it is still nondegenerate.

- **Continuity is used only at the single point $c$.** The proof needs no uniform continuity and no continuity anywhere else, so the statement could be sharpened to: a nonnegative integrable $f$ with $\int_a^b f = 0$ vanishes at every point of continuity. That sharpening is not asserted as a separate clause because nothing on this page uses it.
