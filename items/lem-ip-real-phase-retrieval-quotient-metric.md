---
id: lem-ip-real-phase-retrieval-quotient-metric
kind: lemma
title: The real sign quotient and its induced measurement maps
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-real-frame-phase-retrieval
  - def-metric-space
  - def-max-min
  - def-ordered-field
  - def-euclidean-inner-product
  - lem-metrics-on-rn
  - def-abs-value
  - lem-of-abs-value
  - lem-of-square-positive
  - thm-of-square-roots
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Philipp Grohs, Sarah Koppensteiner, and Martin Rathmair, Phase Retrieval: Uniqueness and Stability, arXiv:1901.07911v2, quotient metric discussion"
      url: "https://arxiv.org/pdf/1901.07911v2"
    - title: "Radu Balan, Pete Casazza, and Dan Edidin, On signal reconstruction without phase, Applied and Computational Harmonic Analysis 20(3) (2006)"
      url: "https://arxiv.org/pdf/math/0412411"
---

## Statement

Let $d\ge1$, $m\ge0$, and $\Phi=(a_i)_{i\in[m]}$ be a family in $\mathbb R^d$. Define $x\sim z$ by $z=x$ or $z=-x$, let $Q_d=\mathbb R^d/\sim$, and put
$$d_{\pm}([x],[z])=\min\{\|x-z\|_2,\|x+z\|_2\}.$$
Let $Y_m=\{b:[m]\to[0,\infty)\}$ carry the metric induced from zero-based Euclidean $\mathbb R^m$ by the fixed relabeling $i\mapsto i-1$ when $m\ge1$, and the zero metric on the singleton $Y_0$ when $m=0$. Define
$$\mathcal M_\Phi([x])=(|\langle a_i,x\rangle|)_{i\in[m]},\qquad \mathcal I_\Phi([x])=(\langle a_i,x\rangle^2)_{i\in[m]}.$$
Then $\sim$ is an equivalence relation, $d_{\pm}$ is a metric on $Q_d$, $Y_m$ is a metric space, and both displayed measurement maps are well defined. Moreover, $\mathcal I_\Phi$ is coordinatewise the square of $\mathcal M_\Phi$, so the two maps are injective simultaneously.

## Statement references

[[def-ip-real-frame-phase-retrieval|Real phase-retrieval model and map conventions]]

[[def-metric-space|Metric-space axioms]]

[[lem-metrics-on-rn|The Euclidean metric on real coordinate spaces]]

[Philipp Grohs, Sarah Koppensteiner, and Martin Rathmair, quotient metric for phase retrieval, §1](https://arxiv.org/pdf/1901.07911v2)

## Facts & Assumptions

**Given:** The definitions and hypotheses in the statement.

[F1] The sign relation is $x\sim z$ exactly when $z=x$ or $z=-x$, the quotient map sends $x$ to $[x]$, and the amplitude and intensity formulas use the real Euclidean pairing ([[def-ip-real-frame-phase-retrieval]]).

[F2] For each integer $n\ge1$, $d_2(x,y)=\|x-y\|_2$ is a metric on $\mathbb R^n$ ([[lem-metrics-on-rn]], [[def-euclidean-inner-product]]).

[F3] A metric satisfies separation, symmetry, and the triangle inequality; these axioms can be restricted to a subset ([[def-metric-space]]).

[F4] For real $t$, $|t|\ge0$, $|-t|=|t|$, and $|t|=0$ exactly when $t=0$ ([[def-abs-value]], [[lem-of-abs-value]]).

[F5] A nonnegative real has a unique nonnegative square root ([[thm-of-square-roots]]).

[F6] Every real square is nonnegative ([[lem-of-square-positive]]).

[F7] The real order is total, so every two-element set of real numbers has a least element, which is its minimum ([[def-ordered-field]], [[def-max-min]]).

## Proof



**Given:** A finite real family $\Phi$, $d\ge1$, and $m\ge0$.

1.1 The relation $\sim$ is reflexive because $x=x$, symmetric because $z=x$ implies $x=z$ and $z=-x$ implies $x=-z$, and transitive because multiplying the two signs in $z=\epsilon x$ and $w=\delta z$ gives $w=(\delta\epsilon)x$ with $\delta\epsilon\in\{1,-1\}$. Thus $Q_d$ is the quotient set and $q(x)=[x]$ is onto by the definition of equivalence classes. [given, F1, algebra]

1.2 If $m\ge1$, the relabeling $J:Y_m\to[0,\infty)^m$ given by $J(b)_k=b_{k+1}$ is a bijection and $\rho_m(b,c)=d_2(Jb,Jc)$, so the metric axioms of [F2] restrict to $Y_m$. If $m=0$, $Y_0$ has one element and the zero function separates its only pair and is symmetric and triangular. Hence $Y_m$ is a metric space in both cases. [given, F2, F3, algebra]

1.3 Replacing representatives by $x'=\epsilon x$ and $z'=\delta z$, with $\epsilon,\delta\in\{1,-1\}$, changes the pair $(\|x-z\|_2,\|x+z\|_2)$ only by possibly interchanging its two entries, since $\|x'-z'\|_2=\|x-(\epsilon\delta)z\|_2$ and $\|x'+z'\|_2=\|x+(\epsilon\delta)z\|_2$. By [F7] the minimum is attained, so its value is independent of representatives. [given, F1, F7, algebra]

2.1 Replacing $x$ by $-x$ changes each amplitude coordinate from $|\langle a_i,x\rangle|$ to $|-\langle a_i,x\rangle|=|\langle a_i,x\rangle|$, and changes each intensity coordinate from $\langle a_i,x\rangle^2$ to $(-\langle a_i,x\rangle)^2=\langle a_i,x\rangle^2$. Every intensity coordinate is nonnegative by [F6], so both maps have the stated codomain and are well defined on $Q_d$, including zero rows and the zero signal. For $m=0$ both are the unique map to the empty tuple. [step 1.1, F1, F4, F6, algebra]

2.2 Choose signs $\epsilon,\delta\in\{1,-1\}$ attaining the two minima for $d_{\pm}([x],[y])$ and $d_{\pm}([y],[z])$; [F7] ensures these minima exist, and the choices are from finite two-element sets. The Euclidean triangle inequality and sign-invariance of the norm give $d_{\pm}([x],[z])\le\|x-\epsilon\delta z\|_2\le\|x-\epsilon y\|_2+\|y-\delta z\|_2=d_{\pm}([x],[y])+d_{\pm}([y],[z])$. Thus the triangle inequality holds. [step 1.3, F2, F7, choose, algebra]

3.1 Both candidate norms are nonnegative by the nonnegative-root convention [F5], and their minimum is symmetric under interchanging $x$ and $z$. The minimum is zero exactly when $x=z$ or $x=-z$, which is exactly $[x]=[z]$ by [F1] and separation of the Euclidean metric in [F2]. Together with the triangle inequality in step 2.2, this proves that $d_{\pm}$ is a metric. [step 1.3, step 2.2, F1, F2, F5]

4.1 Each amplitude coordinate is nonnegative and its square is the corresponding intensity coordinate. If two nonnegative amplitudes have the same square, uniqueness of nonnegative square roots [F5] makes the amplitudes equal; conversely equal amplitudes have equal squares. Coordinatewise, the amplitude and intensity maps therefore have the same fibers and are injective simultaneously. [step 2.1, F5, algebra] ∎
