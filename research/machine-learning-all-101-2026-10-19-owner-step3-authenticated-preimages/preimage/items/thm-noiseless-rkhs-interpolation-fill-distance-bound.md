---
id: thm-noiseless-rkhs-interpolation-fill-distance-bound
kind: theorem
title: Noiseless Gaussian RKHS interpolation error under uniform sampling
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces
  - ex-gaussian-radial-kernel
  - def-countable-choice
  - thm-canonical-rkhs-construction-and-reproducing-property
  - lem-finite-dimensional-projection-in-a-real-inner-product-space
  - lem-iid-uniform-fill-distance-rate
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - lem-gaussian-rbf-power-function-fill-distance-bound
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Belkin, Hsu, Ma, and Mandal, Reconciling modern machine learning practice and the bias-variance trade-off"
      url: "https://arxiv.org/pdf/1812.11118"
      locator: "Appendix A, Theorem 1 and proof sketch."
    - title: "Rieger and Zwicknagl, Sampling inequalities for infinitely smooth functions, with applications to interpolation and machine learning"
      url: "https://link.springer.com/content/pdf/10.1007/s10444-008-9089-0.pdf"
      locator: "Theorem 6.1 and its proof, Gaussian kernel case."
---

## Statement

Assume the Axiom of Countable Choice. Let $d\ge1$, let $\Omega\subset\mathbb{R}^d$
be a fixed closed cube with positive side length, let $\sigma>0$, and let
$k_\sigma(x,z)=\exp(-\|x-z\|_2^2/(2\sigma^2))$ with real RKHS
$\mathcal H_\sigma$. Fix $h^*\in\mathcal H_\sigma$, and let
$x_1,x_2,\ldots$ be an iid sequence uniform on $\Omega$. For every
$n\ge3$, set $y_i=h^*(x_i)$ for $1\le i\le n$. There exist constants
$A,B>0$ and $n_0$, depending only on $d,\Omega,\sigma$, such that for every
$n\ge n_0$, with probability at least $1-1/n$, every $h\in\mathcal H_\sigma$
that interpolates the same data, $h(x_i)=y_i$ for $1\le i\le n$, satisfies
$$\sup_{x\in\Omega}|h(x)-h^*(x)|\le A\exp\!\left(-B\left(\frac{n}{\log n}\right)^{1/d}\right) (\|h^*\|_{\mathcal H_\sigma}+\|h\|_{\mathcal H_\sigma}).$$

## Statement references

[[def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces]]

[[thm-canonical-rkhs-construction-and-reproducing-property]]

[[lem-iid-uniform-fill-distance-rate]]

[[lem-gaussian-rbf-power-function-fill-distance-bound]]

[Belkin, Hsu, Ma, and Mandal, Appendix A, Theorem 1](https://arxiv.org/pdf/1812.11118)

## Facts & Assumptions

**Given:** Countable Choice, the Gaussian RKHS $\mathcal H_\sigma$, target
$h^*$, and iid uniform sample from the Statement.

[A1] The Axiom of Countable Choice says every countable sequence of nonempty
sets has a choice function ([[def-countable-choice]]).

[F1] The Gaussian radial function is a real positive semidefinite kernel
([[ex-gaussian-radial-kernel]]).

[F2] Under Countable Choice, a real positive semidefinite kernel has a
canonical RKHS with the stated reproducing property
([[thm-canonical-rkhs-construction-and-reproducing-property]]).

[F3] A real RKHS has sections $k_x=k(\cdot,x)$ and satisfies
$\langle f,k_x\rangle=f(x)$ for every function $f$ in that space
([[def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces]]).

[F4] The Gaussian power function has the stated bound
([[lem-gaussian-rbf-power-function-fill-distance-bound]]).

[F5] An iid uniform sample on a fixed product cube has Euclidean fill distance at most
$C_dL(\log n/n)^{1/d}$ with probability at least $1-1/n$
([[lem-iid-uniform-fill-distance-rate]]).

[F6] Every finite-dimensional subspace of a real inner-product space admits an
orthogonal projection ([[lem-finite-dimensional-projection-in-a-real-inner-product-space]]).

[F7] Under Countable Choice, an invertible linear map with matrix $Q$
sends Lebesgue measurable sets to measurable sets and multiplies their
measure by $|\det Q|>0$; translations preserve measurability and measure
([[thm-linear-change-of-variables-for-lebesgue-measure]],
[[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

## Proof

1.1 By [A1], [F1], and [F2], the Gaussian kernel has the real RKHS used in the Statement, with evaluation property [F3]. Let $X_n=\{x_1,\ldots,x_n\}$ and $V_n=\operatorname{span}\{k_\sigma(\cdot,x_i):1\le i\le n\}$. For any interpolant $h$, put $g=h-h^*$. Then $g(x_i)=0$, so [F3] gives $\langle g,k_\sigma(\cdot,x_i)\rangle=0$ for each $i$ and hence $g\perp V_n$. By [F6] the projection $\Pi_{V_n}$ exists; therefore $$g(x)=\langle g,k_\sigma(\cdot,x)\rangle =\langle g,k_\sigma(\cdot,x)-\Pi_{V_n}k_\sigma(\cdot,x)\rangle.$$ The inner-product Cauchy--Schwarz inequality follows by expanding $\|u-tv\|^2\ge0$ and minimizing over real $t$ (with the zero-vector case immediate). Thus $|g(x)|\le\|g\|_{\mathcal H_\sigma}P_{X_n}(x)$. [given, A1, F1, F2, F3, F4, F6, algebra]

2.1 The triangle inequality gives $\|g\|_{\mathcal H_\sigma}\le\|h\|_{\mathcal H_\sigma}+\|h^*\|_{\mathcal H_\sigma}$. Taking the supremum in step 1.1 yields $$\sup_{x\in\Omega}|h(x)-h^*(x)|\le (\|h\|_{\mathcal H_\sigma}+\|h^*\|_{\mathcal H_\sigma}) \sup_{x\in\Omega}P_{X_n}(x).$$ [given, step 1.1, algebra]

3.1 Write $\Omega=v+Q[0,L]^d$ using its side length $L>0$ and an orthogonal matrix $Q$, and put $u_i=Q^{\mathsf T}(x_i-v)$. The affine map $F(u)=v+Qu$ bijects the product cube $C_0=[0,L]^d$ onto $\Omega$. For every Borel $E\subseteq C_0$, [F7] gives $\mathbb P(u_i\in E)=\lambda_d(F(E))/\lambda_d(\Omega)=|\det Q|\lambda_d(E)/(|\det Q|\lambda_d(C_0))=\lambda_d(E)/\lambda_d(C_0)$. The transformed samples remain independent: for finitely many Borel sets $E_i\subseteq C_0$, their joint event is $\bigcap_i\{x_i\in F(E_i)\}$, and independence of the $x_i$ makes its probability the product of the individual probabilities. These events are measurable since $F$ is a homeomorphism. Also $\|F(u)-F(w)\|_2=\|u-w\|_2$, so the fill distance of $\{u_1,\ldots,u_n\}$ in $C_0$ equals $h_{X_n}$ in $\Omega$. By [F5], on an event of probability at least $1-1/n$, the fill distance $h_{X_n}$ is at most $\bar h_n=C_dL(\log n/n)^{1/d}$. For all sufficiently large $n$, $\bar h_n<\min(h_0,e^{-1})$; the function $u\mapsto|\log u|/u$ is decreasing on $(0,e^{-1}]$, so [F4] applies and gives $$\sup_xP_{X_n}(x)\le C\exp\!\left(-c\frac{|\log h_{X_n}|}{h_{X_n}}\right) \le C\exp\!\left(-\frac{c}{\bar h_n}\right) =C\exp\!\left(-\frac{c}{C_dL}\left(\frac{n}{\log n}\right)^{1/d}\right).$$ Using this bound in step 2.1 proves the displayed estimate with $A=C$ and $B=c/(C_dL)$, uniformly for every interpolant on that event. [given, A1, F4, F5, F7, step 2.1, algebra] ∎ 