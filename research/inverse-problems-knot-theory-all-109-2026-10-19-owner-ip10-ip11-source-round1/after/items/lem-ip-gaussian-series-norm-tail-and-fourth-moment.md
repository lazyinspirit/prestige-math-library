---
id: lem-ip-gaussian-series-norm-tail-and-fourth-moment
kind: lemma
title: Gaussian series norm tails and fourth moments
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-countable-choice
  - thm-monotone-convergence-for-the-integral
  - thm-chebyshev-markov-inequality-for-the-integral
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-factorization-of-expectations-for-independent-variables
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: "Countable Choice is assumed; the independent normal coordinates are given, and the proof uses only their finite-dimensional densities and countable monotone limits, with no construction of a new product measure or arbitrary-index choice."
sources:
  references:
    - title: "Vladimir Spokoiny and Niklas Willrich, Bootstrap tuning in ordered model selection, Appendix D, Gaussian quadratic forms"
      url: https://arxiv.org/pdf/1507.05034
---

## Statement

Assume Countable Choice. Let $(\xi_j)_{j\ge1}$ be given real random variables on a probability space such that every finite subfamily is independent and each variable has density $(2\pi)^{-1/2}e^{-z^2/2}$. Let $a_j\ge0$ be deterministic with $v:=\sum_j a_j<\infty$, and put $u:=\sup_j a_j$ and $w:=\sum_j a_j^2$. The nonnegative series $Q:=\sum_j a_j\xi_j^2$ is finite almost surely. Define $N:=\sqrt Q$ on that event and set $N=0$ on its null complement. Then
$$\mathbb E N^2=v,\qquad \mathbb E N^4=v^2+2w\le3v^2.$$
For every $t>0$,
$$\mathbb P\{N^2>v+2\sqrt{wt}+2ut\}\le e^{-t},\qquad \mathbb P\{N>\sqrt v+\sqrt{2ut}\}\le e^{-t}.$$
The upper quantile $q(t):=\inf\{z\ge0:\mathbb P(N>z)\le e^{-t}\}$ is finite and satisfies
$$\mathbb P(N>q(t))\le e^{-t},\qquad q(t)\le\sqrt v+\sqrt{2ut}.$$
These conclusions include $v=0$, in which case $N=q(t)=0$ almost surely. For a Gaussian series in a fixed orthonormal coordinate system with coordinate variances $a_j$, $N$ is its norm.

## Statement references

[[def-countable-choice|Countable Choice]]

[[thm-monotone-convergence-for-the-integral|Monotone convergence for nonnegative integrals]]

[[thm-chebyshev-markov-inequality-for-the-integral|Markov's inequality]]

[Spokoiny and Willrich, *Bootstrap tuning in ordered model selection*, Appendix D](https://arxiv.org/pdf/1507.05034)

## Facts & Assumptions

**Given:** The supplied independent standard-normal coordinates and summable nonnegative weights in the Statement.

[A1] [[def-countable-choice]] is assumed; all countable coordinates are already given.

[F1] [[thm-monotone-convergence-for-the-integral]] permits increasing limits of nonnegative measurable functions inside the integral.

[F2] [[thm-chebyshev-markov-inequality-for-the-integral]] bounds the probability that a nonnegative variable exceeds a positive level by its expectation divided by that level.

[F3] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]] gives scalar affine substitution under Countable Choice. The supplied normal density already has total mass one.

[F4] [[thm-factorization-of-expectations-for-independent-variables]] factors finite products of nonnegative or integrable functions of independent coordinates.

## Proof

1.1 Put $Q_n=\sum_{j\le n}a_j\xi_j^2$, $v_n=\sum_{j\le n}a_j$, and $w_n=\sum_{j\le n}a_j^2$. On finite intervals integration by parts with $\phi'(x)=-x\phi(x)$ gives $\int x^{2k}\phi(x)\,dx=[-x^{2k-1}\phi(x)]+(2k-1)\int x^{2k-2}\phi(x)\,dx$. The boundary terms vanish at infinity; the integrals converge since a polynomial times $e^{-x^2/2}$ is bounded by a constant times $e^{-x^2/4}$, whose integral is finite by [F3] and the given unit Gaussian integral. Starting from $\int\phi=1$ therefore gives $\mathbb E\xi_j^2=1$ and $\mathbb E\xi_j^4=3$. Thus $\mathbb E Q_n=v_n$ and finite independence gives $\mathbb E Q_n^2=v_n^2+2w_n$. Also $u\le v$ and $w\le uv\le v^2$. [given, A1, F3, F4, algebra]

2.1 The measurable series $Q_n\uparrow Q$ satisfies $\mathbb E Q=v$ by [F1]; hence $Q<\infty$ almost surely, since [F2] gives $\mathbb P(Q\ge r)\le v/r$ for every $r>0$. Extending $N$ by zero on the null exceptional set does not change an integral. Applying [F1] also to $Q_n^2\uparrow Q^2$ proves $\mathbb E N^4=v^2+2w\le3v^2$. [F1, F2, step 1.1, algebra]

2.2 Suppose $u>0$. For $0<s<(2u)^{-1}$ the scalar substitution $y=\sqrt{1-2sa_j}\,x$ in [F3], using the supplied unit density, gives $\mathbb E e^{s a_j\xi_j^2}=(1-2sa_j)^{-1/2}$. Finite factorization [F4] and the power-series inequality $-\log(1-z)-z\le z^2/[2(1-z)]$ for $0\le z<1$ therefore give $$\log\mathbb E e^{s(Q_n-v_n)}=\sum_{j\le n}\left[-sa_j-\tfrac12\log(1-2sa_j)\right]\le\frac{s^2w_n}{1-2us}.$$ If $w_n>0$, apply [F2] to this exponential and choose $s=\sqrt t/(\sqrt{w_n}+2u\sqrt t)$. Substitution gives $-s(2\sqrt{w_nt}+2ut)+s^2w_n/(1-2us)=-t$, so $\mathbb P\{Q_n>v_n+2\sqrt{w_nt}+2ut\}\le e^{-t}$. If $w_n=0$, then $Q_n=v_n=0$ almost surely and this inequality is immediate. [given, F2, F3, F4, step 1.1, algebra, choose]

3.1 The deterministic levels $v_n+2\sqrt{w_nt}+2ut$ converge to $v+2\sqrt{wt}+2ut$. Whenever $Q$ strictly exceeds this final level, sufficiently large $n$ have $Q_n$ exceeding their corresponding levels. The probability of this eventual-event set is at most the lower limit of their probabilities, as follows directly by countable additivity applied to unions of intersections. Step 2.2 thus gives the first tail inequality. Since $w\le uv$ and $v+2\sqrt{uvt}+2ut\le(\sqrt v+\sqrt{2ut})^2$, the second follows. If $u=0$, all weights vanish and both bounds hold directly. [step 1.1, step 2.1, step 2.2, algebra]

4.1 The second tail bound makes the set defining $q(t)$ nonempty and implies $0\le q(t)\le\sqrt v+\sqrt{2ut}$. This set is upward closed. Every $q(t)+1/n$ therefore belongs to it: by the definition of an infimum some member lies strictly below that number. The events $\{N>q(t)+1/n\}$ increase to $\{N>q(t)\}$, so countable additivity gives $\mathbb P(N>q(t))\le e^{-t}$. When $v=0$, step 2.1 gives $N=0$ almost surely and the quantile is zero. Finally, in a fixed orthonormal system the squared norm of the finite Gaussian sum is $Q_n$; finiteness of $Q$ gives norm convergence of that series and the asserted norm interpretation. [step 2.1, step 3.1, algebra] ∎
