---
id: lem-probability-laws-on-a-compact-metric-space-have-weakly-convergent-subsequences
kind: lemma
title: Probability laws on a compact metric space have weakly convergent subsequences
deps: ["lem-countable-uniformly-dense-tests-on-a-compact-metric-space", "def-weak-convergence-of-borel-probability-measures", "thm-rmk-positive-functional-is-integration-against-its-representing-measure", "thm-bolzano-weierstrass", "def-axiom-of-choice"]
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: van Gaans, Proposition 5.3 and §6; diagonal replacement for compact-case functional argument
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Assume AC. Every sequence of Borel probability laws on a compact metric K has a subsequence converging weakly to a Borel probability on K.

## Facts & Assumptions

[F1] [[lem-countable-uniformly-dense-tests-on-a-compact-metric-space]]: Assume AC. For a compact metric K, $C(K;\mathbb R)$ has a countable uniformly dense subset in the supremum norm.

[F2] [[thm-bolzano-weierstrass]]: Every bounded sequence of reals has a convergent subsequence: if $(x_k)$ is a
sequence of reals and there is $M \in \mathbb{R}$ with $|x_k| \le M$ for every
$k \in \mathbb{N}$ (def-sequence), then there is a strictly increasing
$n : \mathbb{N} \to \mathbb{N}$ and a real $L$ with $x_{n_j} \to L$.

Equivalently: the subsequential limit set of a bounded sequence is nonempty
(def-subsequential-limit).

The theorem is the exact repair of the false claim that a bounded sequence
converges. A bounded
sequence need not converge, and the alternating sequence is the standing witness;
what boundedness does force is that *some* subsequence converges. The converse of
the theorem is false, and badly so: a sequence with a convergent subsequence need
not be bounded.

[F3] [[thm-rmk-positive-functional-is-integration-against-its-representing-measure]]: Let $X$ be LCH and let $\Lambda:C_c(X;\mathbb R)\to\mathbb R$ be positive. The Radon measure $\mu$ constructed above satisfies
$$\Lambda(f)=\int_X f\,d\mu\qquad(f\in C_c(X;\mathbb R)).$$

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 K cannot be empty because the given laws have mass one. List a countable dense test family $f_1,f_2,\ldots$ by F1. Each numerical sequence $\int f_j\,d\mu_n$ is bounded by $\|f_j\|_\infty$. F2 supplies nested infinite subsequences along which the first j integrals converge. AC supplies these successive selections; taking the jth index of the jth subsequence gives one increasing diagonal subsequence $n_j$ with convergence for every listed test. [F1, F2]

1.2 For any continuous f and $\eta$>0 choose a listed test h with $\|f-h\|_\infty<\eta$. The inequality $|\int f\,d\mu_{n_j}-\int f\,d\mu_{n_k}|\le2\eta+|\int h\,d\mu_{n_j}-\int h\,d\mu_{n_k}|$ shows the f integrals are Cauchy. Define L(f) as their finite limit. Taking limits in finite linear combinations gives linearity; nonnegative f has nonnegative integrals and hence L(f)>=0; also L(1)=1. [given, algebra]

2.1 The compact metric space K is Hausdorff and locally compact (K itself is a compact neighborhood of each point), and $C_c(K)=C(K)$. The positive functional in step 1.2 therefore satisfies F3. Its representing Borel measure has total mass L(1)=1. The defining identity L(f)=integral f against that measure, combined with step 1.2, is weak convergence of the extracted subsequence. [F3, step 1.2] ∎
