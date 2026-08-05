---
id: cex-sqrt-k-differences-null-not-cauchy
kind: counterexample
title: "$x_k = \\sqrt{k}$ has $x_{k+1} - x_k \\to 0$ and is not Cauchy"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [fs-consecutive-differences-null-implies-cauchy, thm-of-square-roots, def-real-limit, def-sequence, def-divergence-to-infinity, cor-archimedean-reciprocal, thm-of-archimedean, lem-cauchy-sequence-bounded, lem-power-difference-factorisation, lem-power-monotone, lem-of-inverse-positive, lem-of-naturals-positive, lem-of-abs-value, def-integer-power, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §2.4"
      url: "https://www.jirka.org/ra/"
    - title: "Sequence of Square Roots of Natural Numbers is not Cauchy (ProofWiki)"
      url: "https://proofwiki.org/wiki/Sequence_of_Square_Roots_of_Natural_Numbers_is_not_Cauchy"
---

## Statement refuted

**Refuted claim:** a sequence of reals whose consecutive differences tend to $0$
is Cauchy ([[fs-consecutive-differences-null-implies-cauchy]],
[[def-real-limit]]).

The witness is $x_k = \sqrt k$ for $k \in \mathbb{N}$. Its consecutive
differences satisfy

$$x_{k+1} - x_k \;=\; \sqrt{k+1} - \sqrt{k} \;=\; \frac{1}{\sqrt{k+1} + \sqrt{k}} \;\longrightarrow\; 0,$$

while the sequence itself is unbounded, hence not Cauchy
([[lem-cauchy-sequence-bounded]]). The refutation is carried out in full in
[[fs-consecutive-differences-null-implies-cauchy]]; this item records the witness
and adds the sharper statement that $\sqrt k$ diverges to $+\infty$
([[def-divergence-to-infinity]]).

## Facts & Assumptions

**Given:** The sequence $(x_k)$ of reals with $x_k := \sqrt k$, where $k$ denotes the canonical natural $k \cdot 1_{\mathbb{R}}$ ([[def-sequence]], [[thm-of-square-roots]]).

[L1] The witness and its two properties: $x_{k+1} - x_k = 1/(\sqrt{k+1} + \sqrt k)$ tends to $0$, and $(x_k)$ is unbounded and not Cauchy ([[fs-consecutive-differences-null-implies-cauchy]]).

[L2] Square roots, and the factorisation $b^2 - a^2 = (b-a)(b+a)$ ([[thm-of-square-roots]], [[lem-power-difference-factorisation]], [[def-integer-power]]).

[L3] Powers and order: for $a, b \ge 0$ and $n \ge 1$, $a < b$ exactly when $a^n < b^n$ ([[lem-power-monotone]]).

[L4] Canonical naturals: positive for $n \ge 1$, and strictly increasing in the index ([[lem-of-naturals-positive]]); reciprocals of positives are positive and reciprocation reverses the order ([[lem-of-inverse-positive]]).

[L5] Archimedean property, both forms ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]]).

[L6] Absolute value: $|t| = t$ for $t \ge 0$, and $|t| \ge t$ ([[lem-of-abs-value]]).

[L7] Every Cauchy sequence of reals is bounded ([[lem-cauchy-sequence-bounded]]).

[L8] Divergence to $+\infty$: for every real $M$ there is $K$ with $x_k > M$ for all $k \ge K$ ([[def-divergence-to-infinity]]).

[L9] Trichotomy and transitivity of the order on $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 The sequence $(x_k)$ satisfies the hypothesis of the refuted claim, its consecutive differences tending to $0$, and it is not Cauchy. [given, L1, L7]

1.2 The failure is as strong as possible: $(x_k)$ diverges to $+\infty$. Let $M \in \mathbb{R}$ and put $M' := |M| \ge M$, so $M' \ge 0$. By [L5] fix a natural $n \ge 1$ with $(M')^2 < n$. [given, L5, L6]

2.1 It therefore refutes the claim: having null consecutive differences does not make a sequence Cauchy. [step 1.1, L1]

3.1 For every $k \ge n$: $(x_k)^2 = k \ge n > (M')^2$ with $x_k \ge 0$ and $M' \ge 0$, so $x_k > M' \ge M$. Since $M$ was arbitrary, $x_k \to +\infty$. [step 1.2, L2, L3, L4, L8, L9] ∎

## Remarks

- **The gaps are null and their sums are not.** The differences are about
  $1/(2\sqrt k)$, so they tend to $0$; but they telescope, and
  $x_m - x_k = \sqrt m - \sqrt k$ is as large as one likes for $m$ large. The
  Cauchy condition constrains $|x_m - x_k|$ for *all* large pairs, and no
  hypothesis about consecutive pairs alone can deliver that.

- **What the correct hypothesis looks like.** Geometric decay of the gaps, with a
  single ratio $c < 1$ at every index, does suffice
  ([[def-contractive-sequence]], [[thm-contractive-implies-cauchy]]), because
  then the telescoped sums are dominated by a convergent geometric bound. Merely
  shrinking gaps are not enough either, which is
  [[cex-strictly-decreasing-gaps-no-limit]].

- **The same sequence separates two notions that are easy to confuse.** Its gaps
  are null, so it is "eventually almost constant" in a naive reading; it is
  nevertheless unbounded and divergent to $+\infty$. Nothing about the local
  behaviour of a sequence controls its global behaviour.
