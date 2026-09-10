---
id: cex-a-nontight-sequence-with-no-probability-law-subsequence-limit
kind: counterexample
title: A nontight sequence with no probability law subsequence limit
deps: ["def-tight-family-of-probability-measures", "thm-portmanteau-theorem", "thm-continuity-from-below-for-measures", "thm-compact-subset-is-closed-and-bounded"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: van Gaans, example after Theorem 5.2, p. 18; Dirac variant
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement refuted

The laws $\mu_n=\delta_n$ on the real line form a nontight sequence with no subsequence converging weakly to a probability law on the real line.

## Facts & Assumptions

[F1] [[thm-compact-subset-is-closed-and-bounded]]: Let $(X,d)$ be a metric space (def-metric-space) and let $K \subseteq X$ be a
compact subset (def-metric-compactness). Then $K$ is closed in $X$
(def-metric-topology) and bounded (def-metric-bounded-diameter).

No choice principle is used: both covers below are given by a rule, and the
indexed form of lem-compactness-is-intrinsic returns indices rather than
sets.

**The converse is false in general.** A closed and bounded subset of an arbitrary
metric space need not be compact
(fs-closed-and-bounded-implies-compact-in-every-metric-space); it is exactly
in $\mathbb{R}^n$ that the converse holds (thm-heine-borel-rn).

[F2] [[def-tight-family-of-probability-measures]]: A family $\mathcal A$ of Borel probabilities on a metric space S is **tight** if, for every $\varepsilon>0$, there is a compact $K\subseteq S$ such that $\mu(S\setminus K)<\varepsilon$ for every $\mu\in\mathcal A$. One K must work for the whole family. Compactness is def-metric-compactness. The empty family is tight, witnessed by the empty compact set.

[F3] [[thm-portmanteau-theorem]]: For Borel probabilities $\mu_n,\mu$ on a metric space S, the following are equivalent: (i) $\mu_n\Rightarrow\mu$; (ii) integrals converge for all bounded uniformly continuous real tests; (iii) $\limsup_n\mu_n(F)\le\mu(F)$ for every closed F; (iv) $\liminf_n\mu_n(G)\ge\mu(G)$ for every open G; (v) $\mu_n(A)\to\mu(A)$ for every Borel A with $\mu(\partial A)=0$.

[F4] [[thm-continuity-from-below-for-measures]]: Let $(E_n)_{n\in\mathbb N}$ be an increasing sequence of measurable sets for a measure $\mu$, so $E_n\subseteq E_{n+1}$. Then

$$\mu\left(\bigcup_{n\in\mathbb N}E_n\right)=\sup_{n\in\mathbb N}\mu(E_n).$$

No finiteness hypothesis is required.

## Counterexample

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 Every compact K is bounded by F1. Thus for all sufficiently large n, n is outside K and $\mu_n$(K)=0. No compact K can give all the laws outside mass below 1/2, so F2 fails. [F1, F2]

2.1 If $\delta_{n_j}\Rightarrow\mu$ along a subsequence, $n_j$ tends to infinity. For every positive integer m, the open set (-m,m) eventually has delta_{$n_j$} mass zero. F3 would give $\mu((-m,m))\le0$. These intervals increase to R, so F4 would give $\mu$(R)=0, contradicting probability mass one. [F3, F4] ∎
