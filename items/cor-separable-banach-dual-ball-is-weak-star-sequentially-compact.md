---
id: cor-separable-banach-dual-ball-is-weak-star-sequentially-compact
kind: corollary
title: A separable predual has weak-star sequentially compact dual ball
status: published
origin: pipeline
deps: ["thm-banach-alaoglu", "thm-dual-ball-weak-star-metrizable-for-separable-predual", "thm-compact-implies-the-other-compactness-forms", "def-separable-space"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
      locator: "§3.2.1, Theorem 3.30, p. 132"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "§5.3, formula (5.12) and Theorem 5.10, pp. 146–147"
proof_strategy: direct
---

## Statement

**Assume the ultrafilter lemma.**  If $X$ is a separable real or complex normed
space, then every sequence in $B_{X^*}$ has a subsequence converging in the
weak-star topology.  Completeness of $X$ is not required.

## Facts & Assumptions

**Given:** The ultrafilter lemma and a separable real or complex normed space $X$.

[F1] A separable space has an at most countable dense subset ([[def-separable-space]]).

[F2] A fixed dense sequence metrizes the weak-star topology on every norm-bounded subset of the dual ([[thm-dual-ball-weak-star-metrizable-for-separable-predual]]).

[F3] Under the ultrafilter lemma, $B_{X^*}$ is weak-star compact, without completeness of $X$ ([[thm-banach-alaoglu]]).

[F4] Every compact metric space is countably compact ([[thm-compact-implies-the-other-compactness-forms]]).

[F5] Every countably compact metric space is sequentially compact, and this implication uses no choice principle ([[thm-compact-implies-the-other-compactness-forms]]).

## Proof

**Proof technique:** direct.

1.1 Fix an at most countable dense set $D\subseteq X$.  It is nonempty because $0\in X$ and the empty set is not dense in a nonempty space.  If $D$ is countably infinite, a witnessing bijection $\mathbb N\to D$ is a dense sequence.  If $D$ is finite, a witnessing finite list can be repeated periodically (and its first entry repeated after the list ends) to give a sequence with range $D$.  Thus $X$ has a fixed dense sequence; no countable family of choices was made. [F1, given]

1.2 The same ball is weak-star compact by Banach–Alaoglu; the ultrafilter lemma is used at this step through [F3]. [F3]

2.1 Applying [F2] to the norm-bounded set $B_{X^*}$ gives a metric inducing precisely its relative weak-star topology. [F2, step 1.1]

3.1 By steps 2.1 and 1.2 the ball is a compact metric space, hence countably compact by [F4] and sequentially compact by [F5]. Equivalently, every sequence in it has a weak-star convergent subsequence. [F4, F5, step 2.1, step 1.2] ∎
