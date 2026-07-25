---
id: lem-reciprocal-of-null-diverges
kind: lemma
title: "For positive terms, null and divergence to $+\\infty$ are reciprocal"
status: draft
origin: session
deps: [def-divergence-to-infinity, def-real-limit, def-sequence, lem-limit-of-tail, lem-of-inverse-positive, prop-of-reciprocal-order, lem-of-abs-value, lem-rat-embeds-dense, thm-of-archimedean, def-field, def-real-order, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "$x_k\\to0$ iff $1/x_k\\to+\\infty$"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals with $x_k > 0$ for every $k \in \mathbb{N}$
([[def-sequence]], [[def-real-order]]). Then

$$(x_k) \text{ converges to } 0 \iff (1/x_k) \text{ diverges to } +\infty,$$

with convergence as in [[def-real-limit]] and divergence to $+\infty$ as in
[[def-divergence-to-infinity]].

The positivity hypothesis is essential and is not a convenience; see the remarks.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals with $x_k > 0$ for every $k$, so that each $x_k$ is nonzero and $1/x_k$ is defined ([[def-sequence]], [[def-real-order]], [[def-field]]).

[L1] Convergence, quantified over rational $\varepsilon > 0$ ([[def-real-limit]]); divergence to $+\infty$, quantified over real $M$ ([[def-divergence-to-infinity]]).

[L2] Inverses and order: $a > 0$ implies $a^{-1} > 0$, and $0 < a < b$ implies $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]]).

[L3] Reciprocals against $1$, and the involution $(u^{-1})^{-1} = u$ for $u \ne 0$ ([[prop-of-reciprocal-order]], [[def-field]]).

[L4] Absolute value: $|u| = u$ when $u \ge 0$, and $|u - 0| = |u|$ ([[lem-of-abs-value]], [[def-real-order]]).

[L5] Small rationals: for every real $\eta > 0$ there is a rational $\varepsilon$ with $0 < \varepsilon < \eta$, by density ([[lem-rat-embeds-dense]]) or by the Archimedean property ([[thm-of-archimedean]]) applied to $1/\eta$.

[L6] Order arithmetic in $\mathbb{R}$: trichotomy and transitivity, and $u > 0 \ge M$ gives $u > M$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Since $x_k > 0$ we have $|x_k| = x_k$ and, by [L2], $1/x_k > 0$, for every $k$. [L2, L4]

2.1 Forward direction. Assume $(x_k)$ converges to $0$ and let $M \in \mathbb{R}$ be arbitrary. If $M \le 0$, then $1/x_k > 0 \ge M$ for every $k$ by step 1.1, so the threshold $K = 0$ works. If $M > 0$, then $1/M > 0$ by [L2]; by [L5] choose a rational $\varepsilon$ with $0 < \varepsilon < 1/M$, and by [L1] take $K$ with $|x_k - 0| < \varepsilon$ for all $k \ge K$; for such $k$, step 1.1 gives $0 < x_k = |x_k| < \varepsilon < 1/M$, and applying [L2] to $0 < x_k < 1/M$ gives $1/x_k > (1/M)^{-1} = M$ by [L3]. In both cases there is $K$ with $1/x_k > M$ for all $k \ge K$, so $(1/x_k)$ diverges to $+\infty$. [step 1.1, assume-hyp, L1, L2, L3, L5, L6]

2.2 Backward direction. Assume $(1/x_k)$ diverges to $+\infty$ and let $\varepsilon > 0$ be rational. Then $1/\varepsilon > 0$ by [L2], and by [L1] there is $K$ with $1/x_k > 1/\varepsilon$ for all $k \ge K$. For such $k$, both $1/\varepsilon$ and $1/x_k$ are positive by step 1.1, so applying [L2] to $0 < 1/\varepsilon < 1/x_k$ gives $0 < (1/x_k)^{-1} < (1/\varepsilon)^{-1}$, that is $0 < x_k < \varepsilon$ by [L3]; hence $|x_k - 0| = x_k < \varepsilon$. So $(x_k)$ converges to $0$. [step 1.1, assume-hyp, L1, L2, L3, L4]

3.1 The two implications together give the stated equivalence. [step 2.1, step 2.2] ∎

## Remarks

- **Positivity is essential.** Let $(x_k)$ be as in the lemma, so that $x_k > 0$ for every $k$ and $(x_k)$ converges to $0$; such sequences exist, $x_k = 1/(k+1)$ being the standard one ([[fs-limit-preserves-strict-inequality]]). Put $w_k := -x_k$. Then $|w_k - 0| = |-x_k| = |x_k| = |x_k - 0|$ for every $k$ ([[lem-of-abs-value]]), so $(w_k)$ converges to $0$ as well, and every $w_k$ is nonzero. Yet $(1/w_k)$ does not diverge to $+\infty$: $1/w_k = -(1/x_k)$ by field arithmetic ([[def-field]]), and $1/x_k > 0$ ([[lem-of-inverse-positive]]), so $1/w_k < 0$ at every index, its negative $1/x_k$ being positive ([[def-ordered-field]]), and no threshold works even for $M = 0$. Dropping positivity therefore breaks the forward implication outright. What survives without a sign hypothesis is the statement about absolute values: for a sequence of nonzero terms, $(|x_k|)$ converges to $0$ if and only if $(1/|x_k|)$ diverges to $+\infty$, which is this lemma applied to $(|x_k|)$, whose terms are positive ([[lem-of-abs-value]]).

- The hypothesis $x_k > 0$ is imposed at **every** index so that $1/x_k$ is defined at every index. It is tempting to relax it to "eventually positive" by passing to a tail, and on the convergence side that is exactly [[lem-limit-of-tail]]; but the equivalence also has a divergence side, and the corresponding tail statement for divergence to $+\infty$ ([[def-divergence-to-infinity]]) is proved nowhere in this library, [[lem-limit-of-tail]] covering convergence and the Cauchy condition only. The relaxed form is therefore not asserted here.

- Taking $x_k := 1/(k+1)$, which is null ([[fs-limit-preserves-strict-inequality]]), the lemma turns that one fact into $k + 1 \to +\infty$. The two are the same statement seen twice, which is why this lemma is the standard bridge between the Archimedean property ([[thm-of-archimedean]]) and statements about growth.
