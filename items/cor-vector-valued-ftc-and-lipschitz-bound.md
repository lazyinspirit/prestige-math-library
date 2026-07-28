---
id: cor-vector-valued-ftc-and-lipschitz-bound
kind: corollary
title: "If $f : [a,b] \\to \\mathbb{R}^m$ is differentiable with integrable $f'$ then $\\int_a^b f' = f(b)-f(a)$; and a bounded derivative makes $f$ Lipschitz"
status: published
origin: session
deps: [def-vector-valued-derivative-and-integral, def-vector-valued-functions-limits-and-continuity, thm-mean-value-inequality, thm-norm-inequality-for-the-vector-valued-integral, thm-componentwise-limits-and-continuity, thm-ftc-second-part, cor-primitives-of-a-continuous-function, def-lipschitz-holder-contraction, lem-metrics-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-p-norms-on-rn, def-norm-and-normed-space, def-oriented-integral, thm-additivity-over-subintervals, def-derivative, cor-bounded-derivative-implies-lipschitz, def-interval, lem-real-line-is-a-metric-space, def-function-limit, lem-of-abs-value, def-limit-point-r]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Fundamental theorem of calculus (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus"
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
pipeline_run: null
---

## Statement

Let $m \in \mathbb{N}$ with $m \ge 1$ and let $a, b \in \mathbb{R}$ with $a < b$.

1. **Fundamental theorem, second part, in $\mathbb{R}^{m}$.** Let
   $f : [a,b] \to \mathbb{R}^{m}$ be differentiable at every point of $[a,b]$ as
   a function on $[a,b]$ ([[def-vector-valued-derivative-and-integral]]), and
   suppose $f' : [a,b] \to \mathbb{R}^{m}$ is integrable. Then
   $$\int_a^b f' \;=\; f(b) - f(a).$$
2. **A bounded derivative gives a Lipschitz function.** Let
   $f : [a,b] \to \mathbb{R}^{m}$ be continuous on $[a,b]$ and differentiable at
   every point of $(a,b)$, and let $M \ge 0$ satisfy
   $\lVert f'(t)\rVert_2 \le M$ for every $t \in (a,b)$. Then
   $$\lVert f(t) - f(s)\rVert_2 \;\le\; M\,|t-s| \qquad \text{for all } s,t \in [a,b],$$
   that is, $f$ is Lipschitz with constant $M$ as a map
   $([a,b], d_{\mathbb{R}}) \to (\mathbb{R}^{m}, d_2)$
   ([[def-lipschitz-holder-contraction]], [[lem-real-line-is-a-metric-space]],
   [[lem-metrics-on-rn]]).

## Facts & Assumptions

**Given:** A natural $m \ge 1$, reals $a < b$, and a function $f : [a,b] \to \mathbb{R}^{m}$ with the hypotheses of the clause under discussion; points $s, t \in [a,b]$.

[L1] The vector-valued derivative and integral are componentwise: $f'(c)_i = f_i'(c)$, and $f$ is integrable exactly when every $f_i$ is, with $\bigl(\int_a^b f\bigr)_i = \int_a^b f_i$; equality of two elements of $\mathbb{R}^{m}$ is equality of all their coordinates ([[def-vector-valued-derivative-and-integral]], [[thm-componentwise-limits-and-continuity]]).

[L2] The second fundamental theorem: if $G$ is differentiable on $[a,b]$ with $G' = g$ and $g$ is integrable on $[a,b]$, then $\int_a^b g = G(b)-G(a)$ ([[thm-ftc-second-part]], [[def-derivative]]).

[L3] The mean value inequality on a subinterval ([[thm-mean-value-inequality]]): for $s<t$, $f$ continuous on $[s,t]$ and differentiable on $(s,t)$ with $\lVert f'\rVert_2 \le M$ there, $\lVert f(t)-f(s)\rVert_2 \le M(t-s)$.

[L4] Restricting the domain of a function preserves a limit and its value, the $\varepsilon$-$\delta$ condition then quantifying over fewer points; in particular if $f$ is differentiable at $c$ as a function on $[a,b]$ and $c$ is a limit point of $[s,t] \subseteq [a,b]$, then the restriction of $f$ to $[s,t]$ is differentiable at $c$ with the same derivative ([[def-function-limit]], [[def-vector-valued-functions-limits-and-continuity]], [[def-limit-point-r]], [[def-interval]]).

[L5] Norms and the induced metric: $\lVert w\rVert_2 \ge 0$, $\lVert -w\rVert_2 = \lVert w\rVert_2$, and $d_2(u,w) = \lVert u-w\rVert_2$ ([[def-norm-and-normed-space]], [[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]); $d_{\mathbb{R}}(s,t) = |s-t|$ and $|t-s| = |s-t|$ ([[lem-real-line-is-a-metric-space]], [[lem-of-abs-value]]).

[L6] Lipschitz maps: $f$ is Lipschitz with constant $L \ge 0$ when $d_Y(f(x),f(x')) \le L\,d_X(x,x')$ for all $x,x'$ ([[def-lipschitz-holder-contraction]]).

[L7] Additivity of the integral over subintervals and the orientation convention ([[thm-additivity-over-subintervals]], [[def-oriented-integral]]).

## Proof

**Proof technique:** direct.

1.1 Under the hypotheses of clause 1, each component $f_i$ is differentiable at every point of $[a,b]$ with derivative $f_i' = (f')_i$, and each $(f')_i$ is integrable on $[a,b]$. [L1]

1.2 Under the hypotheses of clause 2, if $s < t$ in $[a,b]$ then $f$ restricted to $[s,t]$ is continuous on $[s,t]$ and differentiable at every point of $(s,t)$ with the same derivative, since $(s,t) \subseteq (a,b)$ and every point of $(s,t)$ is a limit point of $[s,t]$. [L4]

2.1 Applying [L2] to $G := f_i$ and $g := (f')_i$ gives $\int_a^b (f')_i = f_i(b)-f_i(a)$ for every $i<m$. [step 1.1, L2]

2.2 Under the hypotheses of clause 2, for $s<t$ in $[a,b]$ the mean value inequality applies on $[s,t]$ and gives $\lVert f(t)-f(s)\rVert_2 \le M(t-s) = M|t-s|$. [step 1.2, L3, L5]

3.1 The $i$-th coordinate of $\int_a^b f'$ is $\int_a^b (f')_i$ and the $i$-th coordinate of $f(b)-f(a)$ is $f_i(b)-f_i(a)$; by step 2.1 these agree for every $i<m$, so the two vectors are equal, which is clause 1. [step 2.1, L1]

3.2 If $s = t$ then $\lVert f(t)-f(s)\rVert_2 = 0 = M|t-s|$; and if $t < s$ then step 2.2 applied with the roles exchanged gives $\lVert f(s)-f(t)\rVert_2 \le M|s-t|$, and $\lVert f(t)-f(s)\rVert_2 = \lVert -(f(s)-f(t))\rVert_2 = \lVert f(s)-f(t)\rVert_2$ while $|s-t| = |t-s|$. [step 2.2, L5]

4.1 Steps 2.2 and 3.2 cover all pairs $s,t \in [a,b]$, so $\lVert f(t)-f(s)\rVert_2 \le M|t-s|$ always; since $d_2(f(t),f(s)) = \lVert f(t)-f(s)\rVert_2$ and $d_{\mathbb{R}}(t,s) = |t-s|$, this is exactly the Lipschitz condition with constant $M \ge 0$, which is clause 2. [step 2.2, step 3.2, L5, L6] ∎

## Remarks

- **Two routes to the mean value inequality, and why the other one was taken.** When $f'$ happens to be integrable, clause 1 together with [[thm-norm-inequality-for-the-vector-valued-integral]] gives $$\lVert f(b)-f(a)\rVert_2 = \Bigl\lVert\int_a^b f'\Bigr\rVert_2 \le \int_a^b \lVert f'\rVert_2 \le M(b-a),$$ the last step by monotonicity of the integral. That is a second proof of [[thm-mean-value-inequality]] **under an extra hypothesis**. The theorem is proved the other way, from the scalar mean value theorem, precisely because it then needs no integrability at all: it applies to every differentiable $f$. The point is not academic — the companion page's witness for the failure of the equality form is differentiable and is nowhere assumed integrable.

- **When is $f'$ integrable?** Continuity of $f'$ suffices, each component being then continuous and hence integrable, which is the classical form of clause 1 and is what [[cor-primitives-of-a-continuous-function]] supplies for the scalar case. Clause 1 as stated is stronger: it asks only for integrability, exactly as [[thm-ftc-second-part]] does.

- **The scalar case of clause 2 is already published** as [[cor-bounded-derivative-implies-lipschitz]], for a function on an order-convex subset of $\mathbb{R}$. Clause 2 is its $\mathbb{R}^{m}$ analogue on a closed bounded interval, and it is proved from the vector mean value inequality rather than by applying the scalar statement coordinatewise, which would give the worse constant $\iota(m)\,M$.

- **Additivity is not needed above but is available**, so that clause 1 may be applied on any subinterval and the pieces reassembled ([[thm-additivity-over-subintervals]], [[def-oriented-integral]]).
