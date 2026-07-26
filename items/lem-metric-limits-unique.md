---
id: lem-metric-limits-unique
kind: lemma
title: "A sequence in a metric space has at most one limit"
status: draft
origin: session
deps: [def-metric-convergence, def-metric-space, def-real-limit, lem-rat-embeds-dense,
       lem-metric-nonnegativity, def-abs-value, lem-of-abs-value, cor-of-one-positive,
       lem-of-add-order, lem-of-inverse-positive, lem-of-sign-rules, def-field,
       def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "limits are unique"
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $(x_k)$ be a
sequence in $X$ ([[def-metric-convergence]]). If $x_k \to p$ and $x_k \to q$,
then $p = q$.

So a convergent sequence in a metric space has exactly one limit, and the
notation $\lim_k x_k$ is unambiguous.

## Facts & Assumptions

**Given:** A metric space $(X,d)$, a sequence $(x_k)$ in $X$, and points $p, q \in X$ with $x_k \to p$ and $x_k \to q$.

[A1] Convergence: $x_k \to p$ means that for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $d(x_k,p) < \varepsilon$ for all $k \ge K$ ([[def-metric-convergence]], [[def-real-limit]]); here $d(x_k,p) \ge 0$, so its absolute value is itself ([[lem-metric-nonnegativity]], [[def-abs-value]], [[lem-of-abs-value]]).

[L1] Density of the rationals: strictly between any two reals lies a rational, so below any real $\eta > 0$ there is a rational $\varepsilon$ with $0 < \varepsilon < \eta$ ([[lem-rat-embeds-dense]]).

[L2] Halving. For a real $c > 0$ set $2 := 1 + 1$ and $c/2 := c \cdot 2^{-1}$. Then $2 > 0$, so $2 \ne 0$ and $2^{-1} > 0$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-inverse-positive]], [[def-ordered-field]]); hence $c/2 > 0$ ([[lem-of-sign-rules]]); and $c/2 + c/2 = c(2^{-1} + 2^{-1}) = c(2 \cdot 2^{-1}) = c$ ([[def-field]]).

[L3] Separation (M1) and the triangle inequality (M3) of $d$, together with symmetry (M2) ([[def-metric-space]]).

[L4] Trichotomy of the order of $\mathbb{R}$, and transitivity: $a < b$ and $b \le a$ cannot both hold ([[def-complete-ordered-field]], [[def-ordered-field]]).

[L5] Adding two inequalities: $a < b$ and $c < d$ give $a + c < b + d$ ([[lem-of-add-order]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $p \ne q$. [assume-contra]

2.1 By (M1) $d(p,q) \ne 0$, and $d(p,q) \ge 0$, so $c := d(p,q) > 0$ by trichotomy; put $\eta := c/2$, a positive real with $\eta + \eta = c$. [step 1.1, L2, L3, L4]

3.1 Fix a rational $\varepsilon$ with $0 < \varepsilon < \eta$, and use the convergence hypotheses at $\varepsilon$ to fix $K_1, K_2 \in \mathbb{N}$ with $d(x_k,p) < \varepsilon$ for $k \ge K_1$ and $d(x_k,q) < \varepsilon$ for $k \ge K_2$. [step 2.1, A1, L1, choose]

4.1 Let $m$ be any natural with $m \ge K_1$ and $m \ge K_2$, for instance $m := K_1 + K_2$; then $d(x_m,p) < \varepsilon$ and $d(x_m,q) < \varepsilon$. [step 3.1, choose]

5.1 By symmetry and the triangle inequality, $c = d(p,q) \le d(p,x_m) + d(x_m,q) = d(x_m,p) + d(x_m,q) < \varepsilon + \varepsilon < \eta + \eta = c$. [step 4.1, step 2.1, L3, L5]

6.1 Step 5.1 asserts $c < c$, which trichotomy forbids; the supposition of step 1.1 is therefore untenable and $p = q$. [step 5.1, L4, discharge-contradiction] ∎

## Remarks

- **Where each axiom is spent.** Separation (M1) is what turns $p \ne q$ into
  $d(p,q) > 0$, and it is the only axiom that distinguishes a metric from a
  pseudometric ([[def-metric-space]]). In a pseudometric space with
  $d(p,q) = 0$ and $p \ne q$, the constant sequence $x_k = p$ converges to both,
  so the lemma is false there and this is exactly the step that fails.
- **The same argument proves more**, namely that a metric space is Hausdorff:
  the balls $B(p, c/2)$ and $B(q, c/2)$ are disjoint. That is recorded
  separately as [[thm-metric-hausdorff-separation]], and uniqueness of limits
  follows from it as well.
- **Instantiating at a rational is not cosmetic.** [[def-real-limit]] quantifies
  over rational $\varepsilon$, so a convergence hypothesis may only be applied at
  a rational; step 3.1 passes from the real $\eta$ to a rational below it using
  [[lem-rat-embeds-dense]], which is the sanctioned move.
