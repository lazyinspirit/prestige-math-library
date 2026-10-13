---
id: ex-successive-root-differences
kind: example
title: "The successive differences $\\sqrt{k+1} - \\sqrt{k}$ converge to $0$"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-square-roots-diverge-to-infinity, lem-reciprocal-of-null-diverges, thm-of-square-roots, lem-of-square-monotone, thm-of-archimedean, def-divergence-to-infinity, def-real-limit, def-sequence, def-field, lem-of-add-order, lem-of-inverse-positive, cor-of-one-positive, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
dependency_level: 4
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "John K. Hunter, An Introduction to Real Analysis (complete author-hosted lecture notes, 307 pp.)"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
      locator: "§3.3 Example 3.13, printed p. 42, illustrates direct growth thresholds; §3.4 Theorem 3.26 and the caution following its proof, printed pp. 46-47, concern convergent factors and warn against applying limit arithmetic to divergent terms. The root-difference identity is verified locally."
    - title: "Jiri Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I (author-hosted complete book PDF)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "§2.1.1 Example 2.1.11, printed p. 56: square-root comparison and the Archimedean property; §2.2 Proposition 2.2.6, printed p. 65: rationalization of a difference of square roots. The present root-difference limit is proved locally."
---

## Example

The sequence $z_k := \sqrt{k+1} - \sqrt{k}$ converges to $0$
([[def-real-limit]]). Since
$(\sqrt{k+1} - \sqrt{k})(\sqrt{k+1} + \sqrt{k}) = 1$, the differences are the
reciprocals of the sequence $w_k := \sqrt{k+1} + \sqrt{k}$, which diverges to
$+\infty$ because $w_k \ge \sqrt{k}$ and $(\sqrt{k})$ does
([[ex-square-roots-diverge-to-infinity]]); the backward direction of
[[lem-reciprocal-of-null-diverges]] then gives $z_k \to 0$. Thus a difference of
two sequences that both diverge can converge, so the algebra of limits has no
difference rule for divergent sequences.

## Facts & Assumptions

**Given:** For every natural $k$ the reals $\sqrt{k}$ and $\sqrt{k+1}$, with $k+1 = \sigma(k)$ ([[def-sequence]]), and the sequences $z_k := \sqrt{k+1} - \sqrt{k}$, $w_k := \sqrt{k+1} + \sqrt{k}$.

[F1] $(\sqrt{k})_{k \in \mathbb{N}}$ diverges to $+\infty$ ([[ex-square-roots-diverge-to-infinity]]).

[F2] Reciprocal bridge: for a sequence $(x_k)$ with $x_k > 0$ for every $k$, $(x_k)$ converges to $0$ if and only if $(1/x_k)$ diverges to $+\infty$ ([[lem-reciprocal-of-null-diverges]]).

[F3] Square roots: every real $a \ge 0$ has a unique $s \ge 0$ with $s^2 = a$, written $s = \sqrt{a}$ ([[thm-of-square-roots]]).

[F4] Divergence to $+\infty$: $x_k \to +\infty$ means that for every real $M$ there is $K$ with $x_k > M$ for all $k \ge K$ ([[def-divergence-to-infinity]]).

[F5] Field arithmetic: every nonzero element has a multiplicative inverse, and $uv = 1$ with $v$ the inverse of $u$ identifies $v = u^{-1}$ ([[def-field]]).

[F6] Monotonicity of squaring on nonnegatives: for $a, b \ge 0$, $a < b \iff a^2 < b^2$ and $a \le b \iff a^2 \le b^2$ ([[lem-of-square-monotone]]).

[F7] Adding inequalities: if $a < b$ and $c < d$ then $a + c < b + d$, and translation by a constant preserves the order ([[lem-of-add-order]]).

[F8] $0 < 1$ ([[cor-of-one-positive]]).

[F9] Archimedean property: for every real $x$ there is a natural number $n \ge 1$ with $x < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]).

[F10] Canonical naturals: $k+1 \ge 1$ for every $k$, and $n \mapsto n \cdot 1_{\mathbb{R}}$ is strictly increasing, hence preserves non-strict order, on $\{1, 2, 3, \dots\}$ ([[lem-of-naturals-positive]]).

[F11] Inverses of positives are positive: $a > 0$ implies $a^{-1} > 0$ ([[lem-of-inverse-positive]]).

## Verification

**Proof technique:** direct.

1.1 For every $k$, $(\sqrt{k+1})^2 = k+1$ and $(\sqrt{k})^2 = k$ by [F3], so the product of the two factors is $z_k w_k = (\sqrt{k+1} - \sqrt{k})(\sqrt{k+1} + \sqrt{k}) = (k+1) - k = 1$ by [F5] and algebra. Moreover $w_k > 0$: both roots are nonnegative by [F3], $1 \le k+1$ by [F10] with $1^2 = 1 \le k+1 = (\sqrt{k+1})^2$ gives $1 \le \sqrt{k+1}$ by [F6], and adding the nonnegative $\sqrt{k}$ to it preserves the inequality by [F7], so $w_k \ge \sqrt{k+1} \ge 1 > 0$ by [F8]. Since $w_k \ne 0$, the identity $z_k w_k = 1$ exhibits $z_k$ as the inverse of $w_k$ by [F5]. [given, F3, F5, F6, F7, F8, F10]

1.2 For every $k$, $0 \le \sqrt{k+1}$ by [F3]; adding $\sqrt{k}$ to this inequality gives $\sqrt{k} \le \sqrt{k+1}+\sqrt{k}=w_k$. Translation preserves a non-strict inequality by [F7] in the strict case and by equality otherwise. [given, F3, F7]

1.3 The shifted sequence $(\sqrt{k+1})$ diverges to $+\infty$: given a real $M$, if $M < 0$ then $\sqrt{k+1} \ge 0 > M$ for every $k$ by [F3]; if $M \ge 0$, [F9] gives a natural $n \ge 1$ with $M^2 < n$, and for every $k \ge n$ one has $n \le k+1$ by [F10], hence $M^2 < (\sqrt{k+1})^2$; since $M \ge 0$ and $\sqrt{k+1} \ge 0$, the equivalence of [F6] gives $M < \sqrt{k+1}$. So for every real $M$ the bound holds eventually, which is [F4]. [given, F3, F4, F6, F9, F10]

2.1 The sequence $(w_k)$ diverges to $+\infty$: by [F1] the sequence $(\sqrt{k})$ does, so given a real $M$ there is $K$ with $\sqrt{k} > M$ for all $k \ge K$, and step 1.2 gives $w_k \ge \sqrt{k} > M$ there; this is the condition of [F4]. [step 1.2, F1, F4]

3.1 Put $x_k := 1/w_k$. Since $w_k > 0$ for every $k$ by step 1.1, [F11] gives $x_k > 0$ for every $k$, and $1/x_k = 1/(1/w_k) = w_k$ by [F5]. Now $1/x_k = w_k$ diverges to $+\infty$ by step 2.1, so the backward direction of the reciprocal bridge [F2], applied to the positive sequence $(x_k)$, gives $x_k = 1/w_k \to 0$; and $z_k = w_k^{-1} = 1/w_k$ by step 1.1, so $z_k \to 0$. Moreover $(\sqrt{k})$ diverges to $+\infty$ by [F1] and $(\sqrt{k+1})$ does by step 1.3, so $z_k$ is the difference of two sequences that both diverge to $+\infty$ and yet converges to $0$: the algebra of limits has no difference rule for divergent sequences. [step 1.1, step 1.3, step 2.1, F1, F2, F5, F11] ∎
