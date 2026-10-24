---
id: ex-ip-01-scope-and-boundary-cases
kind: example
title: Kernel ambiguity, an unstable diagonal inverse, and a constrained class
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-forward-map-and-solution-classes
  - def-ip-identifiability-and-stability-modulus
  - thm-ip-kernel-directions-preclude-unrestricted-recovery
  - def-euclidean-inner-product
  - def-linear-map
  - lem-metrics-on-rn
  - def-square-summable-family-on-an-arbitrary-index-set
  - def-hilbert-space
  - lem-square-summable-sequences-form-a-hilbert-space
  - lem-geometric-sequence-null
  - lem-power-monotone
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  scraped: []
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, Chapter 3 §§3.1–3.2 and Chapter 4 §4.1"
      url: "https://arxiv.org/pdf/2001.00617v2"
    - title: "Tristan van Leeuwen and Christoph Brune, 10 Lectures on Inverse Problems and Imaging, Lecture 1 §§1.2–1.3"
      url: "https://tristanvanleeuwen.github.io/IP_and_Im_Lectures/what_is.html"
    - title: "Giannis Daras et al., A Survey on Diffusion Models for Inverse Problems, §1.2 (scope context)"
      url: "https://arxiv.org/pdf/2410.00083v1"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Example

For $n=1,2$, give $\mathbb R^n$ the metric $d_1(x,z)=\sum_{k<n}|x_k-z_k|$, using the coordinatewise real vector-space structure. In the first model take parameter space and admissible truth class $X=U=\mathbb R^2$, data space $Y=\mathbb R^1$, and identity recovery target $Q=U$ with $q=\operatorname{id}_U$ and the restricted $d_1$ metric. Define $A:\mathbb R^2\to\mathbb R^1$ by $A(a,b)=(a)$, take $F:=A$, and define $\ker A:=\{x\in\mathbb R^2:A(x)=(0)\}$. Then $\ker A=\{(0,t):t\in\mathbb R\}$ is nontrivial. The truths $x_0=(0,0)$ and $x_1=(0,1)$ have the same exact datum $(0)$ and target-class distance $d_1(x_0,x_1)=1$, so every deterministic data-only estimator at that datum has worst-case loss at least $1/2$.

Let $\mathbb N=\{0,1,2,\ldots\}$ and use the real Hilbert space $\ell^2(\mathbb N,\mathbb R)$. For each $n\in\mathbb N$, let $e_n$ be the sequence with value $1$ at $n$ and $0$ elsewhere. Define the diagonal map $D:\ell^2\to\ell^2$ by $(Dx)_n=(1/2)^n x_n$. In the second model take $X=U=Y=Q=\ell^2(\mathbb N,\mathbb R)$ with its canonical norm metric $d_2(x,z)=\|x-z\|_2$, forward map $F:=D$, and identity target map $q=\operatorname{id}_U$. This map is well-defined, linear, and injective, hence identifiable, but it has no uniform stability modulus on all of $\ell^2$: $\|e_n\|_2=1$ and $\|De_n\|_2=(1/2)^n\to0$. For each $n$, the observed datum $y=0$ lies within noise radius $\delta=(1/2)^n$ of both $D(0)$ and $D(e_n)$, so every deterministic data-only estimator at $y=0$ has worst-case loss at least $1/2$.

Finally, restrict $A$ to $U_0:=\{(a,0):a\in\mathbb R\}$ and use $U_0$ itself as the target class with its inherited $d_1$ metric. The restricted map is identifiable, and its inverse $\widehat q((a))=(a,0)$ is an isometry; the function $\omega(t)=t$ is a uniform stability modulus. This restriction removes the particular kernel ambiguity above.

## Example references

[Christian Clason, Regularization of Inverse Problems, Chapter 3 §§3.1–3.2 and Chapter 4 §4.1](https://arxiv.org/pdf/2001.00617v2)

[Tristan van Leeuwen and Christoph Brune, 10 Lectures on Inverse Problems and Imaging, Lecture 1 §§1.2–1.3](https://tristanvanleeuwen.github.io/IP_and_Im_Lectures/what_is.html)

[Giannis Daras et al., A Survey on Diffusion Models for Inverse Problems, §1.2](https://arxiv.org/pdf/2410.00083v1)

## Facts & Assumptions

**Given:** The metric and vector-space structures in the example statement, the canonical norm on real $\ell^2$, the geometric sequence $((1/2)^n)$, and the theorem on recovery from two truths compatible with a common datum.

[F1] [[def-euclidean-inner-product]]: $\mathbb R^n$ is the function space on $n$ with its coordinatewise real vector-space operations.

[F2] [[def-linear-map]]: a map $T:V\to W$ between real vector spaces is linear when $T(au+bv)=aT(u)+bT(v)$ for all real $a,b$ and vectors $u,v$.

[F3] [[lem-metrics-on-rn]]: for $n\ge1$, $d_1(x,z)=\sum_{k<n}|x_k-z_k|$ is a metric on $\mathbb R^n$.

[F4] [[def-ip-forward-map-and-solution-classes]]: the solution-class target is a metric space $(Q,d_Q)$ with map $q:U\to Q$; the identity target is allowed.

[F5] [[def-ip-identifiability-and-stability-modulus]]: identifiability is equal data implying equal target classes, and a uniform stability modulus bounds target-class distance as a function of data distance.

[F6] [[thm-ip-kernel-directions-preclude-unrestricted-recovery]]: if one datum lies within radius $\delta$ of both forward data, every estimator's maximum target-class loss is at least half the target-class distance.

[F7] [[lem-square-summable-sequences-form-a-hilbert-space]]: $\ell^2(\mathbb N,\mathbb R)$ consists of sequences with finite sum of squares, uses its canonical inner-product norm, and is a real Hilbert space.

[F8] [[def-square-summable-family-on-an-arbitrary-index-set]]: for a nonnegative family, its sum is the supremum of its finite subsums.

[F9] [[def-square-summable-family-on-an-arbitrary-index-set]]: $e_n$ is the family that is $1$ at coordinate $n$ and $0$ elsewhere.

[F10] [[def-hilbert-space]]: a real Hilbert space is a real inner-product space complete for its induced norm metric.

[F11] [[lem-geometric-sequence-null]]: if $|r|<1$ then $r^n\to0$, and if $|r|>1$ then $|r|^n$ diverges to $+\infty$.

[F12] [[lem-power-monotone]]: for $a>0$ all natural powers $a^n$ are positive, and for $0\le a\le1$ they satisfy $a^n\le1$.

## Verification

1.1 The $d_1$ formulas on $\mathbb R^1$ and $\mathbb R^2$ are metrics by [F3]. The real $\ell^2$ space is a Hilbert space by [F7] and [F10], so its canonical norm metric is $d_2(x,z):=\|x-z\|_2$. These are the metrics used in the three models. [F3, F7, F10]

1.2 The coordinate projection $A(a,b)=(a)$ is linear by coordinatewise addition and scalar multiplication, so $A(a,b)=(0)$ exactly when $a=0$; hence $\ker A=\{(0,t):t\in\mathbb R\}$ and $(0,1)\ne(0,0)$ lies in its kernel. [F1, F2]

1.3 For every $x\in\ell^2$ and finite $E\subseteq\mathbb N$, [F12] gives $\sum_{n\in E}|(Dx)_n|^2=\sum_{n\in E}(1/2)^{2n}|x_n|^2\le\sum_{n\in E}|x_n|^2\le\|x\|_2^2$. Taking the supremum over finite $E$ by [F8] shows $\sum_n|(Dx)_n|^2\le\|x\|_2^2<\infty$, hence $Dx\in\ell^2$ by [F7]. For real scalars $a,b$ and sequences $x,z$, each coordinate satisfies $(D(ax+bz))_n=(1/2)^n(ax_n+bz_n)=a(Dx)_n+b(Dz)_n$; equality of all coordinates gives $D(ax+bz)=aDx+bDz$, so $D$ is linear by [F2]. [F2, F7, F8, F12, algebra]

1.4 Since every coefficient $(1/2)^n$ is positive by [F12], $Dx=0$ implies $x_n=0$ for every $n$, so $D$ is injective. For each $n$, $De_n=(1/2)^n e_n$ and hence $\|De_n\|_2=(1/2)^n\to0$ by [F11], while $\|e_n\|_2=1$ by [F7, F9]. At $n=0$ the coefficient is $1$, so the first coordinate is unchanged; the decay is as $n\to\infty$. If a uniform stability modulus $\omega$ existed, [F5] applied to $0,e_n$ would give $1\le\omega((1/2)^n)$ for all $n$; but the modulus limit supplies $\eta>0$ with $0<t<\eta\Rightarrow\omega(t)<1/2$, and [F11] supplies $n$ with $0<(1/2)^n<\eta$, a contradiction. [F5, F7, F9, F11, F12, algebra]

2.1 We have $A(x_0)=A(x_1)=(0)$ and $d_1(x_0,x_1)=|0-0|+|0-1|=1$. Applying the two-truth theorem with $y=(0)$ and $\delta=0$ gives maximum loss at least $1/2$ for every estimator. [F3, F4, F6, step 1.2, algebra]

2.2 For each $n$, $d_2(0,D(0))=0\le(1/2)^n$ and $d_2(0,D(e_n))=(1/2)^n$. The target truths have distance $d_2(0,e_n)=1$, so the two-truth theorem at common datum $y=0$ and radius $\delta=(1/2)^n$ gives maximum estimator loss at least $1/2$. [F4, F6, F7, F9, step 1.4, algebra]

3.1 On $U_0$, $A(a,0)=(a)$, so equality of data implies equality of truths. For $a,b\in\mathbb R$, $d_1((a,0),(b,0))=|a-b|=d_1((a),(b))=d_Y(A(a,0),A(b,0))$; therefore the inverse $\widehat q((a))=(a,0)$ is isometric, and $\omega(t)=t$ satisfies the modulus conditions in [F5]. This is only a claim about the specified restricted class. [F1, F3, F4, F5, step 1.2, algebra] ∎
