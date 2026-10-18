---
id: lem-continuous-kernel-integral-operator-is-compact-on-c
aliases: [lem-continuous-kernel-integral-operator-is-compact-on-C]
kind: lemma
title: A continuous kernel defines a compact integral operator on C of an interval
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-continuous-real-functions-on-a-compact-metric-space
  - def-riemann-stieltjes-sum-and-integral
  - thm-c-k-complete-in-the-sup-metric
  - def-compact-linear-operator
  - def-countable-choice
  - def-dependent-choice
  - thm-arzela-ascoli-for-real-ck
  - thm-continuous-implies-integrable
  - thm-linearity-of-the-integral
  - lem-uniform-integral-error-bound
  - thm-heine-cantor-metric
justified_by: []
proof_strategy: direct
axiom_use: "Assume Countable Choice and Dependent Choice, exactly as required by the cited real Arzelà–Ascoli theorem; no full Axiom of Choice is used in this item."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andreas Neubauer and Ronny Ramlau, Lecture Notes: Integral Equations and Boundary Value Problems, §2.2"
      url: "https://www.jyu.fi/en/file-download/download/public/28300"
      locator: "Chapter 2, §2.2 and the continuous-kernel compactness argument; printed pp. 15–16."
    - title: "Habib Ammari, Brian Fitzpatrick, and Sanghyeon Yu, Mathematical and Computational Methods in Photonics: Tutorial Notes, §1.3"
      url: "https://people.math.ethz.ch/~grsam/HS16/MCMP/Mathematical%20and%20Computational%20Methods%20in%20Photonics%20-%20Tutorial%20Notes.pdf"
      locator: "Chapter 1, §1.3, continuous-kernel Fredholm operator setup and the compact-operator approximation results, printed pp. 10–13."
---

## Statement

Assume Countable Choice and Dependent Choice. Let $X:=C([0,1],\mathbb R)$ with
$\|u\|_\infty:=\sup_{x\in[0,1]}|u(x)|$
([[def-continuous-real-functions-on-a-compact-metric-space]],
[[thm-c-k-complete-in-the-sup-metric]]) and let
$k:[0,1]^2\to\mathbb R$ be continuous. The map
$$ (Ku)(x):=\int_0^1 k(x,y)u(y)\,dy $$
uses the ordinary Riemann integral of [[def-riemann-stieltjes-sum-and-integral]] and defines a bounded linear operator $K:X\to X$, and it is compact
([[def-compact-linear-operator]]).

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, $X=C([0,1],\mathbb R)$, and a continuous kernel $k$ on the compact square $[0,1]^2$.

[A1] [[def-countable-choice]] and [[def-dependent-choice]]: these are the two explicit choice hypotheses in the real Arzelà–Ascoli theorem used below.

[F1] [[thm-continuous-implies-integrable]]: every continuous real-valued function on a compact interval is Riemann integrable.

[F2] [[thm-linearity-of-the-integral]]: finite sums and scalar multiples of Riemann-integrable functions are integrable and their integrals are the corresponding finite sums and scalar multiples.

[F3] [[lem-uniform-integral-error-bound]]: if two integrable functions differ everywhere by at most $\eta$, then their integrals on an interval of length $L$ differ by at most $L\eta$.

[F4] [[thm-heine-cantor-metric]]: a continuous function on a compact metric space is uniformly continuous.

[F5] [[thm-arzela-ascoli-for-real-ck]]: under Countable Choice and Dependent Choice, an equicontinuous pointwise bounded family in $C(K,\mathbb R)$ on a compact metric space has compact closure in the supremum metric.

[F6] [[thm-c-k-complete-in-the-sup-metric]]: every continuous real-valued function on a compact metric space is bounded, so $M$ is finite; in particular $X$ is complete in the supremum metric, as used in [[def-compact-linear-operator]].

[F7] [[def-compact-linear-operator]]: a bounded linear operator is compact when the image of its closed unit ball has compact closure.

## Proof

**Given:** The data in the Statement, $M:=\sup_{(x,y)\in[0,1]^2}|k(x,y)|$, and the modulus $\omega(\delta):=\sup\{|k(x,y)-k(x',y)|:|x-x'|\le\delta,\ y\in[0,1]\}$.

1.1 By [F6], $M$ is finite. For each $u\in X$ and $x\in[0,1]$, the function $y\mapsto k(x,y)u(y)$ is continuous, so its Riemann integral exists by [F1]. Linearity [F2] makes $K$ linear. Since $|k(x,y)u(y)|\le M\|u\|_\infty$, [F3] applied against the zero function gives $|Ku(x)|\le M\|u\|_\infty$; hence $K$ is bounded. [given, F1, F2, F3, F6]

2.1 For $x,x'\in[0,1]$, [F3] applied to the two continuous integrands gives $|Ku(x)-Ku(x')|\le\sup_{y\in[0,1]}|k(x,y)-k(x',y)|\,\|u\|_\infty\le\omega(|x-x'|)\|u\|_\infty.$ By [F4], $\omega(\delta)\to0$ as $\delta\downarrow0$, so $Ku$ is continuous and $K$ maps $X$ into $X$. [given, F3, F4, step 1.1]

3.1 For every $u$ in the closed unit ball, step 1.1 gives $\|Ku\|_\infty\le M$, while step 2.1 gives the common equicontinuity modulus $\omega$. Thus the image of the unit ball is pointwise bounded and equicontinuous. [step 1.1, step 2.1]

4.1 By [A1] and [F5], the image of the unit ball has compact closure in the supremum metric. Since $X$ is complete by [F6], this is compact as a subset of $X$; [F7] therefore makes $K$ compact. [A1, F5, F6, F7, step 3.1] ∎
