---
id: lem-iid-uniform-fill-distance-rate
kind: lemma
title: Uniform samples have logarithmic fill-distance rate on a cube
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume
  - thm-finite-union-bound
  - def-identically-distributed-and-iid-random-variables
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Belkin, Hsu, Ma and Mandal, Reconciling modern machine learning practice and the bias-variance trade-off"
      url: "https://arxiv.org/pdf/1812.11118"
      locator: "Appendix A, Theorem 1 proof sketch: uniform sampling covering context; full local union-bound proof supplied here."
---

## Statement

Assume the Axiom of Countable Choice. Let $d\ge1$, let
$\Omega=\prod_{j=1}^d[a_j,a_j+L]$ be a closed cube with
$L>0$, and let $U_1,U_2,\ldots$ be independent random vectors, each distributed
according to normalized Lebesgue measure on $\Omega$. For $n\ge1$, define the
Euclidean fill distance

$$h_n:=\sup_{x\in\Omega}\min_{1\le i\le n}\|x-U_i\|_2.$$

There are constants $C_d=2\sqrt d\,2^{1/d}$ and $n_d$ such that, for every
$n\ge n_d$,

$$\mathbb P\!\left\{h_n\le C_dL\left(\frac{\log n}{n}\right)^{1/d}\right\} \ge1-\frac1n.$$

## Statement references

[[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]

[[thm-finite-union-bound]]

## Facts & Assumptions

**Given:** Countable Choice, the cube $\Omega$, dimension $d$, and independent
uniform sample $U_1,U_2,\ldots$ as in the Statement.

[A1] Countable Choice means every countable family of nonempty sets has a
choice function ([[def-countable-choice]]).

[F1] Lebesgue measure agrees with volume on half-open boxes; therefore an
axis-aligned subcube of side length $L/m$ has normalized Lebesgue probability
$m^{-d}$ in $\Omega$ ([[thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]],
[[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]).

[F2] The probability of a finite union of events is at most the sum of their
probabilities ([[thm-finite-union-bound]]).

[F3] Independence means mutual independence of the whole family of random
elements ([[def-identically-distributed-and-iid-random-variables]]).

## Proof

1.1 For $n$ large enough that $t_n:=(n/(2\log n))^{1/d}\ge2$, put $m_n=\lfloor t_n\rfloor$ and partition each coordinate interval of $\Omega$ into $m_n$ equal half-open intervals, closing the last interval at its right endpoint. This gives $m_n^d$ disjoint measurable cells, each of probability $m_n^{-d}$ by [F1]. [given, A1, F1, construct]

2.1 For a fixed cell, independence [F3] gives probability $(1-m_n^{-d})^n\le e^{-n/m_n^d}$ that it is empty. By [F2], the probability that some cell is empty is at most $m_n^d e^{-n/m_n^d}\le n e^{-2\log n}=1/n$, because $m_n^d\le n/(2\log n)$ and hence $n/m_n^d\ge2\log n$. [given, F2, F3, step 1.1, algebra]

3.1 On the complementary event every cell contains a sample point. Every $x\in\Omega$ belongs to one cell, whose Euclidean diameter is $L\sqrt d/m_n$; therefore $h_n\le L\sqrt d/m_n$. Since $t_n\ge2$ implies $m_n=\lfloor t_n\rfloor\ge t_n/2$, we obtain $$h_n\le2L\sqrt d\left(\frac{2\log n}{n}\right)^{1/d} =C_dL\left(\frac{\log n}{n}\right)^{1/d}.$$ The event has probability at least $1-1/n$ by step 2.1. [given, step 2.1, algebra] ∎ 