---
id: thm-winding-number-circle-traversed-k-times
kind: theorem
title: "A circle traversed $k$ times has winding number $k$ inside and $0$ outside"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-winding-number-closed-complex-contour, thm-winding-number-is-integer, thm-winding-number-locally-constant, thm-winding-number-zero-unbounded-component, thm-complement-of-a-compact-plane-set-has-one-unbounded-component, lem-plane-exterior-of-a-closed-disc-is-path-connected, thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment, def-continuous-argument-and-holomorphic-logarithm-branches, cor-normalized-circle-integral-about-its-centre-is-one, thm-complex-exponential-addition-and-real-extension, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-kernel-and-fibres-of-complex-exponential, thm-sine-and-cosine-parametrize-the-unit-circle, thm-sine-cosine-zero-sets-and-fundamental-period, thm-sine-and-cosine-derivatives, cor-piecewise-c1-paths-have-additive-speed-integral-length, def-natural-logarithm, def-metric-ball, def-convex-subset-of-euclidean-space, def-path-connected, thm-path-connected-implies-connected, thm-components-partition-and-are-closed, def-connected-component-and-quasicomponent, def-metric-bounded-diameter, lem-complex-conjugation-and-modulus-laws, def-integers, thm-int-comm-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.1"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $a\in\mathbb C$, let $r>0$, let $k\in\mathbb Z$ and put

$$\gamma_k(t)=a+r\exp(ikt),\qquad t\in[0,2\pi].$$

Then $\gamma_k$ is a closed complex contour and

$$n(\gamma_k,z)=k\quad\text{for }|z-a|<r,\qquad n(\gamma_k,z)=0\quad\text{for }|z-a|>r.$$

For $k\ne0$ the trace of $\gamma_k$ is the circle $\{z:|z-a|=r\}$. For $k=0$ the
contour is the constant path at $a+r$ and its trace is $\{a+r\}$; the two
displayed formulas still hold, both values being $0$, and both regions still lie
off the trace.

## Facts & Assumptions

**Given:** A point $a\in\mathbb C$, a real $r>0$ and an integer $k$.

[L1] For a closed complex contour $\gamma$ and $p\notin\gamma^\ast$, $n(\gamma,p)=(2\pi i)^{-1}\int_\gamma dz/(z-p)$ ([[def-winding-number-closed-complex-contour]]).

[L2] The winding number of a closed complex contour about a point off its trace is an integer ([[thm-winding-number-is-integer]]).

[L3] The index is constant on every connected component of the complement of the trace ([[thm-winding-number-locally-constant]]).

[L4] The complement of the trace of a closed complex contour has exactly one unbounded connected component, and the index vanishes there ([[thm-winding-number-zero-unbounded-component]]); for a compact $K$ the complement $\mathbb C\setminus K$ has exactly one unbounded component and every other component is bounded ([[thm-complement-of-a-compact-plane-set-has-one-unbounded-component]]).

[L5] For $c\in\mathbb C$ and $R>0$ the set $\{z:|z-c|>R\}$ is path-connected and connected ([[lem-plane-exterior-of-a-closed-disc-is-path-connected]]).

[L6] For a complex contour $\gamma:[a,b]\to\mathbb C$, a point $p\notin\gamma^\ast$ and a continuous logarithm $\lambda$ of $\gamma-p$ along $\gamma$, $\int_\gamma dz/(z-p)=\lambda(b)-\lambda(a)$ ([[thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment]]); such a $\lambda$ is a continuous map with $\exp(\lambda(t))=\gamma(t)-p$ throughout ([[def-continuous-argument-and-holomorphic-logarithm-branches]]).

[L7] For a positively oriented circle $\sigma(t)=a+r\exp(it)$ with $r>0$, $(2\pi i)^{-1}\int_\sigma dz/(z-a)=1$ ([[cor-normalized-circle-integral-about-its-centre-is-one]]).

[L8] $\exp(z+w)=\exp z\exp w$ for all complex $z,w$, and $\exp(x+0i)=e^x$ for real $x$ ([[thm-complex-exponential-addition-and-real-extension]]); for real $x,y$, $\exp(x+iy)=e^x(\cos y+i\sin y)$ and $|\exp(x+iy)|=e^x$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[L9] $\ker(\exp)=2\pi i\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

[L10] $t\mapsto(\cos t,\sin t)$ is a bijection from $[0,2\pi)$ onto the unit circle $S^1$ ([[thm-sine-and-cosine-parametrize-the-unit-circle]]), and $\cos$ and $\sin$ have fundamental period $2\pi$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[L11] $\cos$ and $\sin$ are differentiable on $\mathbb R$ with $\cos'=-\sin$ and $\sin'=\cos$ ([[thm-sine-and-cosine-derivatives]]).

[L12] A continuous path that is differentiable with a continuous derivative on each piece of a partition is rectifiable ([[cor-piecewise-c1-paths-have-additive-speed-integral-length]]).

[L13] For $x>0$, $\log x$ is the unique real $y$ with $\exp y=x$ ([[def-natural-logarithm]]).

[L14] $B(x,\rho)=\{y:d(x,y)<\rho\}$ ([[def-metric-ball]]); a set is convex when it contains the segment between any two of its points ([[def-convex-subset-of-euclidean-space]]); a subset joined by paths inside it is path-connected ([[def-path-connected]]) and hence connected ([[thm-path-connected-implies-connected]]).

[L15] Distinct components are disjoint and every connected subset containing a point lies inside that point's component ([[thm-components-partition-and-are-closed]], [[def-connected-component-and-quasicomponent]]).

[L16] A subset of a metric space is bounded when it is empty or contained in some ball ([[def-metric-bounded-diameter]]).

[L17] $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L18] The integers form a commutative ring ([[thm-int-comm-ring]]).

## Proof

**Proof technique:** direct.

1.1 By [L8] one has $\gamma_k(t)=a+r\cos(kt)+ir\sin(kt)$, which by [L11] is differentiable in $t$ with the continuous derivative $-kr\sin(kt)+ikr\cos(kt)$, so $\gamma_k$ is rectifiable by [L12]; and $\gamma_k(2\pi)=a+r\exp(2\pi ik)=a+r=\gamma_k(0)$ by [L9], so $\gamma_k$ is a closed complex contour. [given, L8, L9, L11, L12]

1.2 Since $|\gamma_k(t)-a|=r\,|\exp(ikt)|=r>0$ by [L8] and [L17], the centre $a$ lies off the trace, and $\lambda(t)=\log r+ikt$ is a continuous map on $[0,2\pi]$ with $\exp(\lambda(t))=e^{\log r}\exp(ikt)=r\exp(ikt)=\gamma_k(t)-a$ by [L8] and [L13]; so $\lambda$ is a continuous logarithm of $\gamma_k-a$ along $\gamma_k$ in the sense of [L6]. [given, L6, L8, L13, L17]

1.3 The trace of $\gamma_k$ is $\{a+r\exp(ikt):0\le t\le2\pi\}$. If $k=0$ this is $\{a+r\}$. If $k\ne0$ then $\{kt:0\le t\le2\pi\}$ is a closed interval of length $2\pi|k|\ge2\pi$, so by the periodicity and surjectivity in [L10] the values $\exp(iks)$ run over the whole unit circle, and the trace is $\{z:|z-a|=r\}$ by [L8] and [L17]. In both cases the trace is contained in $\{z:|z-a|=r\}$. [given, L8, L10, L17]

2.1 By [L6] and step 1.2, $\int_{\gamma_k}dz/(z-a)=\lambda(2\pi)-\lambda(0)=2\pi ik$, so $n(\gamma_k,a)=k$ by [L1]; for $k=1$ this is the published normalisation [L7], and by [L2] and [L18] the value is an integer, as it must be. [step 1.1, step 1.2, L1, L2, L6, L7, L18]

2.2 The disc $D=B(a,r)$ is convex by [L14] and [L17], hence path-connected along segments and therefore connected; step 1.3 puts the trace in $\{z:|z-a|=r\}$, which is disjoint from $D$, so $D\subseteq\mathbb C\setminus\gamma_k^\ast$ and $a\in D$. [step 1.3, L14, L17]

2.3 The set $E=\{z:|z-a|>r\}$ is connected by [L5] and is disjoint from the trace by step 1.3; it is unbounded by [L16] and [L17], so by [L15] it lies in a single component of $\mathbb C\setminus\gamma_k^\ast$, and that component is unbounded, hence is the unique unbounded one of [L4]. [step 1.3, L4, L5, L15, L16, L17]

3.1 By [L3] the index is constant on the component of $\mathbb C\setminus\gamma_k^\ast$ containing $D$, and $D$ is a connected subset of that complement containing $a$, so by [L15] it lies in one component; hence $n(\gamma_k,z)=n(\gamma_k,a)=k$ for every $z\in D$, that is for $|z-a|<r$. [step 2.1, step 2.2, L3, L15]

4.1 By [L4] the index vanishes on that unique unbounded component, so $n(\gamma_k,z)=0$ for every $z\in E$ by step 2.3, while step 3.1 gives the value $k$ on $|z-a|<r$; when $k=0$ both regions still lie off the single-point trace of step 1.3 and both values are $0$. [step 3.1, step 2.3, L4] ∎
