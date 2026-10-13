---
id: ex-square-roots-diverge-to-infinity
kind: example
title: "The square roots $\\sqrt{k}$ diverge to $+\\infty$"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-of-square-roots, lem-of-square-monotone, thm-of-archimedean, def-divergence-to-infinity, lem-convergent-implies-bounded, def-sequence, def-real-order, lem-of-naturals-positive, lem-of-q-embeds, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
dependency_level: 3
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
      locator: "§3.3 Example 3.13, printed p. 42: cubic growth is proved by choosing N > M^(1/3). The square-root growth here is established locally; §3.4, printed pp. 45-47, supplies comparison and algebraic limit rules."
    - title: "Jiri Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I (author-hosted complete book PDF)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "§2.1.1 Example 2.1.11, printed p. 56: 1/sqrt(n) is decreasing with infimum 0, using square-root comparison and the Archimedean property. Its convergence proof invokes monotone convergence; the proof here uses a direct threshold."
---

## Example

Let $\sqrt{k}$ denote the unique nonnegative square root of the canonical
natural $k \in \mathbb{R}$ ([[thm-of-square-roots]]). Then
$(\sqrt{k})_{k \in \mathbb{N}}$ diverges to $+\infty$
([[def-divergence-to-infinity]]): it is unbounded, hence not convergent
([[lem-convergent-implies-bounded]]). The proof is the Archimedean comparison
$k > M^2 \Rightarrow \sqrt{k} > M$; it uses only that $\mathbb{R}$ is
Archimedean ([[thm-of-archimedean]]) and that squaring is monotone on the
nonnegatives ([[lem-of-square-monotone]]).

## Facts & Assumptions

**Given:** For every natural $k$ the canonical natural $k \cdot 1_{\mathbb{R}}$, written $k$, and the real $\sqrt{k}$ ([[def-sequence]], [[lem-of-naturals-positive]]).

[F1] Divergence to $+\infty$: $z_k \to +\infty$ means that for every real $M$ there is $K$ with $z_k > M$ for all $k \ge K$ ([[def-divergence-to-infinity]]).

[F2] Archimedean property: for every real $x$ there is a natural number $n \ge 1$ with $x < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]).

[F3] Canonical naturals: $0 \cdot 1_{\mathbb{R}} = 0$ and $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$; the map $n \mapsto n \cdot 1_{\mathbb{R}}$ is strictly increasing, hence preserves non-strict order, on $\{1, 2, 3, \dots\}$; so the real $k = k \cdot 1_{\mathbb{R}}$ is nonnegative for every natural $k$ ([[lem-of-q-embeds]], [[lem-of-naturals-positive]]).

[F4] Square roots: every real $a \ge 0$ has a unique $s \ge 0$ with $s^2 = a$, written $s = \sqrt{a}$ ([[thm-of-square-roots]]).

[F5] Monotonicity of squaring on nonnegatives: for $a, b \ge 0$, $a < b \iff a^2 < b^2$ ([[lem-of-square-monotone]]).

[F6] Trichotomy and order arithmetic: for all reals $u, v$ exactly one of $u < v$, $u = v$, $v < u$ holds, and $u \ge 0 > v$ implies $u > v$ ([[def-ordered-field]], [[def-real-order]]).

[F7] A sequence converging to a real is bounded, so a sequence that diverges to $+\infty$ — being unbounded, since it eventually exceeds every real bound — is not convergent ([[lem-convergent-implies-bounded]], [[def-divergence-to-infinity]], [[def-sequence]]).

## Verification

**Proof technique:** direct.

1.1 For every natural $k$ the real $k$ is nonnegative by [F3], so [F4] applies: $\sqrt{k}$ is defined with $\sqrt{k} \ge 0$ and $(\sqrt{k})^2 = k$. [given, F3, F4]

2.1 First case, $M < 0$: by step 1.1, $\sqrt{k} \ge 0 > M$ for every $k$, so $\sqrt{k} > M$ for all $k$ and the threshold $K = 0$ witnesses the condition of [F1] for this $M$. [step 1.1, F1, F6]

2.2 Second case, $M \ge 0$: apply [F2] to the real $M^2$ to obtain a natural $n \ge 1$ with $M^2 < n$. For every $k \ge n$ the order preservation of [F3] gives $n \le k$, hence $M^2 < k$; since $M \ge 0$ and $\sqrt{k} \ge 0$ with $(\sqrt{k})^2 = k$ by step 1.1, the equivalence of [F5] at the nonnegative pair $M, \sqrt{k}$ gives $M < \sqrt{k}$; so every $k \ge n$ satisfies $\sqrt{k} > M$. [step 1.1, F2, F3, F5, F6]

3.1 Steps 2.1 and 2.2 dispose of the two cases $M < 0$ and $M \ge 0$, which exhaust the reals by [F6]: for every real $M$ there is a threshold beyond which $\sqrt{k} > M$, which is exactly the condition of [F1]; so $(\sqrt{k})$ diverges to $+\infty$. By [F7] it is therefore unbounded and does not converge. [step 2.1, step 2.2, F1, F6, F7] ∎
