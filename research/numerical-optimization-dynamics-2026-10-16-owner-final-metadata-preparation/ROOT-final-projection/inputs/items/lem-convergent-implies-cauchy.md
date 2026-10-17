---
id: lem-convergent-implies-cauchy
kind: lemma
title: "Every convergent sequence is Cauchy"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: literature-derived
deps: [def-real-limit, def-sequence, def-real-numbers, thm-reals-cauchy-complete, thm-uniqueness-complete-ordered-field, lem-of-triangle-inequality, lem-of-abs-value, thm-rat-ordered-field, lem-rat-embeds-dense, cor-of-one-positive, lem-of-inverse-positive, lem-of-sign-rules, lem-of-add-order, thm-nat-linear-order, def-complete-ordered-field, def-ordered-field, def-field]
justified_by: []
aliases: []
landmark: false
short: "convergent implies Cauchy"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals converging to $x \in \mathbb{R}$
([[def-sequence]], [[def-real-limit]]). Then $(x_k)$ is Cauchy
([[def-real-limit]]).

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals converging to a real $x$ ([[def-sequence]], [[def-real-limit]]).

[L1] $(x_k)$ converges to $x$ when for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $|x_k - x| < \hat\varepsilon$ for all $k \ge K$; and $(x_k)$ is Cauchy when for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $|x_k - x_l| < \hat\varepsilon$ for all $k, l \ge K$ ([[def-real-limit]]).

[L2] Triangle inequality: $|a + b| \le |a| + |b|$ in $\mathbb{R}$ ([[lem-of-triangle-inequality]], [[def-complete-ordered-field]]).

[L3] Absolute value: $|-u| = |u|$ for every real $u$ ([[lem-of-abs-value]]).

[L4] Halving a positive rational: if $\varepsilon$ is a rational $> 0$ then $\varepsilon/2$ is again a rational, it is $> 0$, and $\varepsilon/2 + \varepsilon/2 = \varepsilon$. In detail, $\mathbb{Q}$ is an ordered field ([[thm-rat-ordered-field]], [[def-ordered-field]], [[def-field]]), so $1 > 0$ ([[cor-of-one-positive]]) and $2 := 1 + 1 > 0$ because the positives are closed under addition ([[def-ordered-field]]); hence $2 \ne 0$ is invertible with $2^{-1} > 0$ ([[lem-of-inverse-positive]]), the product $\varepsilon/2 = \varepsilon \cdot 2^{-1}$ of two positives is positive ([[lem-of-sign-rules]]), and $\varepsilon \cdot 2^{-1} + \varepsilon \cdot 2^{-1} = \varepsilon \cdot 2^{-1} \cdot 2 = \varepsilon$ by the field axioms ([[def-field]]). The embedding of $\mathbb{Q}$ in $\mathbb{R}$ preserves the order ([[lem-rat-embeds-dense]]), so these facts hold verbatim for the images, under the identification recorded in [[def-sequence]].

[L5] The order on $\mathbb{N}$ is total and transitive, so a single threshold serves for both indices ([[thm-nat-linear-order]]).

[L6] Order arithmetic in $\mathbb{R}$: adding two strict inequalities, $a < b$ and $c < d$ give $a + c < b + d$ ([[lem-of-add-order]]); and, since $u \le v$ means $u < v$ or $u = v$, the mixed form $u \le v < w \Rightarrow u < w$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon > 0$ be rational; then $\varepsilon/2$ is a rational $> 0$. [L4]

2.1 By convergence there is $K \in \mathbb{N}$ with $|x_k - x| < \varepsilon/2$ for all $k \ge K$. [step 1.1, L1]

3.1 For all $k, l \ge K$ we get $|x_k - x_l| = |(x_k - x) + (x - x_l)| \le |x_k - x| + |x - x_l| = |x_k - x| + |x_l - x|$, while adding the two strict inequalities of step 2.1 gives $|x_k - x| + |x_l - x| < \varepsilon/2 + \varepsilon/2 = \varepsilon$; composing the non-strict inequality with the strict one yields $|x_k - x_l| < \varepsilon$. [step 2.1, L2, L3, L4, L5, L6]

4.1 Since the rational $\varepsilon > 0$ was arbitrary and the single threshold $K$ works for both indices, $(x_k)$ is Cauchy. [step 3.1, L1] ∎

## Remarks

- The converse is a genuine theorem and is **not** proved here. "Every Cauchy sequence of reals converges" is the completeness of $\mathbb{R}$ in the Cauchy sense. It is the subject of the next page of this track, *Monotone Sequences, Bolzano-Weierstrass, and Cauchy Completeness*, where it is proved from the least-upper-bound property, last of the four completeness results there, by way of Bolzano-Weierstrass, which is itself routed through the monotone convergence theorem. That proof is not available at this point in the reading order; the converse itself, for the $\mathbb{R}$ this library constructs, already is, by the different route the next remark records.

- The converse is nevertheless already available in this library, and it should be said plainly rather than left to the next page. The $\mathbb{R}$ used throughout ([[def-real-numbers]], [[def-sequence]]) is the quotient of the ring of Cauchy sequences of rationals, and [[thm-reals-cauchy-complete]] proves for precisely that $\mathbb{R}$ that every Cauchy sequence of reals converges to a real. Nothing further is needed to have the converse in hand here; and any other complete ordered field inherits it, since any two are isomorphic by a unique ordered-field isomorphism ([[thm-uniqueness-complete-ordered-field]]). The reason the next page proves it again, from the least-upper-bound property, is that that proof is the form the rest of analysis uses and does not route through a particular construction.

- The splitting $\varepsilon/2 + \varepsilon/2$ is the whole content. It is worth noticing that no property of $\mathbb{R}$ beyond the ordered-field axioms and the triangle inequality is used, so the same argument shows that a convergent sequence of rationals is Cauchy in $\mathbb{Q}$.
