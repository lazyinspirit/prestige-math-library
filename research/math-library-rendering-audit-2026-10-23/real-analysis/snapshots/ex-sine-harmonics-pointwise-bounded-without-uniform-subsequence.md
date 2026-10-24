---
id: ex-sine-harmonics-pointwise-bounded-without-uniform-subsequence
kind: example
title: "The sine harmonics are pointwise bounded but have no uniformly convergent subsequence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-riemann-lebesgue-lemma-for-continuous-functions,
       thm-uniform-limit-continuous-real-functions,
       thm-quarter-turn-values-and-shift-formulas,
       cor-archimedean-reciprocal, thm-sine-and-cosine-derivatives,
       cor-differentiable-implies-continuous,
       cor-trigonometric-parity-and-pythagorean-identity,
       thm-algebra-of-continuous-functions,
       thm-composition-of-continuous-functions,
       def-equicontinuity-and-boundedness-in-ck,
       def-pointwise-uniform-and-uniformly-cauchy-convergence,
       thm-heine-borel-r, lem-real-line-is-a-metric-space,
       lem-real-and-metric-notions-agree,
       def-pi-via-first-positive-cosine-zero,
       thm-cosine-has-a-smallest-positive-zero]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "John Hutchinson, Introduction to Analysis, §15.7, Remark 15.7.2"
      url: "https://maths-people.anu.edu.au/~john/Assets/Analysis%201.pdf"
    - title: "Jiří Lebl, Basic Analysis I, Exercise 5.2.18"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
pipeline_run: null
---

## Example

For $k\in\mathbb N$, define

$$f_k:[0,\pi]\to\mathbb R,\qquad f_k(x):=\sin((k+1)x).$$

The sequence $(f_k)$ is uniformly bounded, is not equicontinuous, and has no uniformly convergent subsequence. It does not converge pointwise on all of
$[0,\pi]$. Nevertheless, for every fixed continuous $g:[0,\pi]\to\mathbb R$,

$$\lim_{k\to\infty}\int_0^\pi g(x)f_k(x)\,dx=0.$$

## Facts & Assumptions

**Given:** The functions $f_k$ in the Example, on the compact interval $[0,\pi]$ with its usual metric.

[L1] Sine is differentiable and hence continuous, and $|\sin x|\le1$ for every real $x$ ([[thm-sine-and-cosine-derivatives]], [[cor-differentiable-implies-continuous]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[L2] The quarter-turn values and shift formulas determine $\sin(n\pi/2)$ and give $\sin(\pi/2)=1$ ([[thm-quarter-turn-values-and-shift-formulas]]).

[L3] A family $\mathcal F$ is equicontinuous at $a$ when, for every $\varepsilon>0$, one $\delta>0$ makes $d(x,a)<\delta$ imply $|f(x)-f(a)|<\varepsilon$ for every $f\in\mathcal F$ ([[def-equicontinuity-and-boundedness-in-ck]]).

[L4] A uniform limit of continuous real functions is continuous ([[thm-uniform-limit-continuous-real-functions]]).

[L5] For every real $\varepsilon>0$, there is a positive integer $N$ with $1/N<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[L6] For every continuous $g:[0,\pi]\to\mathbb R$, $\lim_{n\to\infty}\int_0^\pi g(x)\sin(nx)\,dx=0$ ([[thm-riemann-lebesgue-lemma-for-continuous-functions]]).

[L7] The number $\pi=2\gamma$ is positive because the smallest positive zero of cosine satisfies $\gamma\in(0,2)$. Thus $[0,\pi]$ is compact by Heine--Borel; real and metric compactness agree for its absolute-value subspace metric ([[def-pi-via-first-positive-cosine-zero]], [[thm-cosine-has-a-smallest-positive-zero]], [[thm-heine-borel-r]], [[lem-real-line-is-a-metric-space]], [[lem-real-and-metric-notions-agree]], claim 5).

[L8] Affine real functions are continuous, and composites of continuous real functions are continuous ([[thm-algebra-of-continuous-functions]], claim 5, [[thm-composition-of-continuous-functions]]).

## Verification

**Proof technique:** contradiction.

1.1 Sine is continuous by [L1], while [L8] makes each affine argument $x\mapsto(k+1)x$ and its composite $f_k$ continuous. Also $|f_k(x)|\le1$ for every $k$ and every $x\in[0,\pi]$, so the sequence is uniformly bounded. [L1, L8]

1.2 At $x=\pi/2$, the values $f_k(\pi/2)$ cycle through $1,0,-1,0$, so the sequence does not converge pointwise on the whole interval. [L2, algebra]

1.3 At zero, $f_k(0)=0$, and the points $x_k:=\pi/(2(k+1))$ lie in $[0,\pi]$ and tend to zero by [L5] and [L7]. [L5, L7, construct, algebra]

1.4 Applying [L6] at the positive integer frequency $k+1$ gives the asserted convergence of every fixed continuous test-function integral. [L6]

1.5 Suppose, for contradiction, that a subsequence $(f_{k_j})$ converges uniformly to a function $g$. [assume-contra]

2.1 On the compact metric interval from [L7], the points from step 1.3 satisfy $f_k(x_k)=1$ by [L2]. Hence [L3] fails at zero for $\varepsilon=1/2$, and the family is not equicontinuous. [step 1.3, L2, L3, L7]

2.2 By [L4], the uniform limit $g$ is continuous; because every $f_{k_j}(0)=0$, uniform convergence also gives $g(0)=0$. [step 1.5, L4]

3.1 Continuity at zero gives a $\delta>0$ with $|g(x)|<1/4$ for $0\le x<\delta$, and uniform convergence gives an index after which $|f_{k_j}(x)-g(x)|<1/4$ for every $x\in[0,\pi]$. [step 2.2]

4.1 A subsequence has strictly increasing indices, so $k_j\ge j$ by induction and [L5] gives $x_j:=\pi/(2(k_j+1))<\delta$ for all sufficiently large $j$. Then [L2] gives $f_{k_j}(x_j)=1$, while step 3.1 gives both $|g(x_j)|<1/4$ and $|f_{k_j}(x_j)-g(x_j)|<1/4$, an impossibility. Thus no uniformly convergent subsequence exists, completing all the claims. [step 1.5, step 3.1, L2, L5, discharge-contradiction] ∎
