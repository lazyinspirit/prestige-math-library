---
id: ex-x-times-dirichlet-is-continuous-exactly-at-zero
kind: example
title: "$x \\cdot 1_{\\mathbb{Q}}(x)$ is continuous at $0$ and at no other point"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cex-dirichlet-is-nowhere-continuous, def-continuity-real, cor-of-reverse-triangle, lem-q-and-irrationals-dense-r, thm-closure-characterisations-r, def-neighbourhood-r, def-max-min, lem-finite-set-has-max, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "$x\\,1_{\\mathbb{Q}}$ continuous only at $0$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Dirichlet function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dirichlet_function"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "E. Boman and R. Rogers, An Analytic Definition of Continuity"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Real_Analysis_%28Boman_and_Rogers%29/06%3A_Continuity_-_What_It_Isnt_and_What_It_Is/6.01%3A_An_Analytic_De%EF%AC%81nition_of_Continuity"
pipeline_run: null
---

## Example

Let $\mathbf{1}_{\mathbb{Q}}$ be the indicator of the rationals
([[cex-dirichlet-is-nowhere-continuous]]) and put

$$h : \mathbb{R} \to \mathbb{R}, \qquad h(x) := x \cdot \mathbf{1}_{\mathbb{Q}}(x),$$

so $h(x) = x$ for rational $x$ and $h(x) = 0$ for irrational $x$. Then:

1. $h$ is **continuous at $0$** ([[def-continuity-real]]);
2. $h$ is **not continuous at any $c \ne 0$**.

So the set of points of continuity of a real function can be a single point.
Together with [[cex-dirichlet-is-nowhere-continuous]], where that set is empty,
this shows how little the set of continuity points is constrained by the mere
existence of the function.

**The point of the example.** Continuity at $c$ compares $h(x)$ with $h(c)$, and
the two branches of $h$ agree only where $x = 0$. Multiplying the indicator by
$x$ damps the jump: near $0$ both branches are small, so the discrepancy is at
most $|x|$; away from $0$ the discrepancy is at least $|c|/2$ on every
neighbourhood, because each branch is realised arbitrarily close to $c$.

## Facts & Assumptions

**Given:** The canonical copy $\mathbb{Q} \subseteq \mathbb{R}$ of the rationals with complement $X := \mathbb{R} \setminus \mathbb{Q}$, and $h : \mathbb{R} \to \mathbb{R}$ with $h(x) = x$ for $x \in \mathbb{Q}$ and $h(x) = 0$ for $x \in X$.

[L1] Continuity at $c$, in the form of [[def-continuity-real]]: for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|h(x) - h(c)| < \varepsilon$ whenever $|x - c| < \delta$; and it fails at $c$ as soon as some real $\varepsilon_0 > 0$ admits, for every real $\delta > 0$, a real $x$ with $|x-c| < \delta$ and $|h(x) - h(c)| \ge \varepsilon_0$ ([[def-neighbourhood-r]]).

[L2] Both $\mathbb{Q}$ and $X$ are dense in $\mathbb{R}$, so every $N_{\delta}(c)$ meets each of them ([[lem-q-and-irrationals-dense-r]], [[thm-closure-characterisations-r]]).

[L3] $X$ is by definition the complement $\mathbb{R} \setminus \mathbb{Q}$, so every real lies in exactly one of $\mathbb{Q}$ and $X$; hence $h$ is a well-defined function, and $|h(x)| \le |x|$ for every real $x$ ([[lem-of-abs-value]], [[cex-dirichlet-is-nowhere-continuous]]).

[L4] Absolute value and order: $|u| \ge 0$ and $|u| > 0$ exactly when $u \ne 0$ ([[lem-of-abs-value]]); the reverse triangle inequality $\bigl||u| - |v|\bigr| \le |u - v|$, hence $|u - v| \ge |u| - |v|$ ([[cor-of-reverse-triangle]]); and the minimum of a two-element set of reals exists and is one of the two ([[lem-finite-set-has-max]], [[def-max-min]], [[def-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 $h$ is well defined and satisfies $|h(x)| \le |x|$ for every real $x$: on $\mathbb{Q}$ one has $|h(x)| = |x|$ and on $X$ one has $|h(x)| = 0 \le |x|$. Also $0 \in \mathbb{Q}$, so $h(0) = 0$. [L3, L4]

1.2 **Claim 2, the setup.** Let $c \ne 0$ be real, put $\varepsilon_0 := |c|/2 > 0$ by [L4], and let a real $\delta > 0$ be given. Put $\delta' := \min\{\delta,\ |c|/2\} > 0$ by [L4]. [L4, choose]

2.1 **Claim 1.** Let a real $\varepsilon > 0$ be given and take $\delta := \varepsilon$. Every real $x$ with $|x - 0| < \delta$ satisfies $|h(x) - h(0)| = |h(x)| \le |x| < \varepsilon$ by step 1.1. So $h$ is continuous at $0$. [step 1.1, L1, L4]

2.2 By [L2] the neighbourhood $N_{\delta'}(c)$ meets $\mathbb{Q}$ and meets $X$: fix $p \in N_{\delta'}(c) \cap \mathbb{Q}$ and $z \in N_{\delta'}(c) \cap X$, so $|p - c| < \delta' \le \delta$ and $|z - c| < \delta' \le \delta$, with $h(p) = p$ and $h(z) = 0$. [step 1.2, L2, choose]

3.1 **The rational case.** Suppose $c \in \mathbb{Q}$, so $h(c) = c$. Take $x := z$: then $|x - c| < \delta$ and $|h(x) - h(c)| = |0 - c| = |c| \ge |c|/2 = \varepsilon_0$. [step 1.2, step 2.2, L3, L4]

3.2 **The irrational case.** Suppose $c \in X$, so $h(c) = 0$. Take $x := p$: then $|x - c| < \delta$, and $|p| \ge |c| - |p - c| > |c| - |c|/2 = |c|/2$ by [L4] and step 2.2, so $|h(x) - h(c)| = |p| > |c|/2 = \varepsilon_0$. [step 1.2, step 2.2, L3, L4]

4.1 By [L3] the two cases of steps 3.1 and 3.2 are exhaustive, so for every real $\delta > 0$ some $x$ with $|x-c| < \delta$ has $|h(x) - h(c)| \ge \varepsilon_0$; by [L1] the function $h$ is not continuous at $c$. Since $c \ne 0$ was arbitrary, claim 2 holds, and with step 2.1 the set of points of continuity of $h$ is exactly $\{0\}$. [step 2.1, step 3.1, step 3.2, L1, L3] ∎

## Remarks

- **Where the damping factor does its work.** The estimate $|h(x)| \le |x|$ of step 1.1 is the whole of claim 1, and it is available only because the two branches of $h$ agree at $0$. Replacing $x$ by any function vanishing at $0$ and continuous there gives the same conclusion at $0$; replacing it by a nonzero constant gives [[cex-dirichlet-is-nowhere-continuous]] back.

- **The choice of $\delta' = \min\{\delta, |c|/2\}$ is what makes the irrational case work.** Without shrinking to $|c|/2$ the rational point $p$ near $c$ could be close to $0$, and then $|h(p) - h(c)| = |p|$ would be small; the shrinking keeps $p$ away from $0$ by at least $|c|/2$.

- **This example is choice free**, for the same reason as [[cex-dirichlet-is-nowhere-continuous]]: density is used only in the form "every neighbourhood meets the set", never to build a sequence.
