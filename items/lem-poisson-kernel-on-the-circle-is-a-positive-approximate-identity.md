---
id: lem-poisson-kernel-on-the-circle-is-a-positive-approximate-identity
kind: lemma
title: "The Poisson kernel on the circle is a positive approximate identity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cesaro-and-abel-means-of-a-fourier-series, def-period-one-fourier-coefficients-partial-sums-and-convolution]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Statement

For $0\le r<1$, let

$$P_r(t):=\sum_{k\in\mathbb Z}r^{|k|}e_k(t).$$

Then

$$P_r(t)=\frac{1-r^2}{1-2r\cos(2\pi t)+r^2}.$$

Hence $P_r(t)\ge0$ for every $t$, $\int_0^1P_r(t)\,dt=1$, and for every
$\delta\in(0,1/2]$,

$$\sup_{t\in[\delta,1-\delta]}P_r(t)\longrightarrow0 \qquad (r\uparrow1).$$

In particular,

$$\int_\delta^{1-\delta}P_r(t)\,dt\longrightarrow0 \qquad (r\uparrow1).$$

## Facts & Assumptions

**Given:** A parameter $r$ with $0\le r<1$ and a real $\delta\in(0,1/2]$.

[L1] The Poisson kernel $P_r$ and the characters $e_k(t)=e^{2\pi ikt}$ are defined in [[def-cesaro-and-abel-means-of-a-fourier-series]] and [[def-period-one-fourier-coefficients-partial-sums-and-convolution]].

## Proof

**Proof technique:** direct.

1.1 Let $z=e^{2\pi it}$. By [L1], $$P_r(t)=1+\sum_{k=1}^\infty r^kz^k+\sum_{k=1}^\infty r^kz^{-k}.$$ Both geometric series converge absolutely, so $$P_r(t)=1+\frac{rz}{1-rz}+\frac{rz^{-1}}{1-rz^{-1}}=\frac{1-r^2}{(1-rz)(1-rz^{-1})}.$$ Since $z+z^{-1}=2\cos(2\pi t)$, this is exactly $$P_r(t)=\frac{1-r^2}{1-2r\cos(2\pi t)+r^2}.$$ [L1, algebra]

2.1 Step 1.1 shows $P_r(t)\ge0$ because $$1-2r\cos(2\pi t)+r^2=(1-r)^2+2r(1-\cos(2\pi t))\ge0,$$ and the numerator is positive for $r<1$. Also the constant Fourier coefficient of $P_r$ is $1$, so $$\int_0^1P_r(t)\,dt=1.$$ [L1, step 1.1, algebra]

3.1 The limit only concerns $r\uparrow1$, so it is enough to consider $r\in[1/2,1)$. If $t\in[\delta,1-\delta]$, then $$1-2r\cos(2\pi t)+r^2=(1-r)^2+4r\sin^2(\pi t)\ge 2\sin^2(\pi\delta).$$ Therefore step 1.1 gives $$P_r(t)\le \frac{1-r^2}{2\sin^2(\pi\delta)}.$$ As $r\uparrow1$, the right-hand side tends to $0$, so the displayed supremum tends to $0$. Multiplying that supremum bound by the interval length at most $1$ gives the same limit for the tail integral. [step 1.1, algebra] ∎
