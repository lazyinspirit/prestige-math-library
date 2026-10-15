---
id: thm-qft-diagonal-delta-distribution
kind: theorem
title: The diagonal delta is a distribution supported on the diagonal
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - def-test-function-space-d-of-an-open-set
  - def-ck-and-multi-index-notation-in-several-variables
  - def-test-function-topology
  - def-distribution
  - def-support-of-a-distribution
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-chain-rule-for-total-derivatives
  - lem-test-function-cutoffs-and-euclidean-localization
dependency_roles:
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-test-function-topology: mathematical-premise
  def-distribution: mathematical-premise
  def-support-of-a-distribution: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, complete lecture notes, section 4
      url: https://arxiv.org/html/1208.1428
      locator: Complete 42-page notes, section 4, the local-functional discussion and diagonal-supported derivative kernels; the continuity proof below is supplied locally.
---

## Statement

Let $X=\mathbb R^4$ and let $\Delta_X=\{(x,y)\in X\times X:x=y\}$.
For a continuous compactly supported $u:X\to\mathbb C$, write
$u=u_{\mathrm R}+iu_{\mathrm I}$ and define $\int_Xu$ as the stabilized
componentwise real Riemann integral over cubes $[-R,R]^4$ containing
$\operatorname{supp}u$. The real component integrals exist by
[[thm-continuous-on-a-rectangle-is-riemann-integrable]]; additivity of real
Riemann sums shows the value is independent of the sufficiently large cube.
Use $|a+ib|=(a^2+b^2)^{1/2}$ for the complex modulus. The Riemann-sum
triangle inequality gives $|\int_Xu|\le\int_X|u|$.
For $\Psi\in\mathcal D(X\times X)$, define
$$ \langle\delta_{\Delta_X},\Psi\rangle =\int_X\Psi(x,x)\,d^4x. $$
Then $\delta_{\Delta_X}\in\mathcal D'(X\times X)$ is a continuous
complex-linear distribution with support exactly $\Delta_X$, and it is
symmetric under exchanging $x$ and $y$. No nonzero smooth function on
$X\times X$ is supported on $\Delta_X$.

## Facts & Assumptions

**Given:** The test-function and distribution conventions on Euclidean open sets.

[F1] $\mathcal D(\Omega)$ consists of smooth compactly supported complex functions with the LF test-function topology, and $\mathcal D'(\Omega)$ is its continuous complex-linear dual with bilinear pairing ([[def-test-function-space-d-of-an-open-set]], [[def-test-function-topology]], [[def-distribution]]).

[F2] Smoothness is defined by coordinate derivatives, and composition with a smooth linear map obeys the total-derivative chain rule ([[def-ck-and-multi-index-notation-in-several-variables]], [[thm-chain-rule-for-total-derivatives]]).

[F3] A continuous function on a compact rectangle is Riemann integrable ([[thm-continuous-on-a-rectangle-is-riemann-integrable]]).

[F4] A compact subset of an open set has a smooth compactly supported cutoff equal to one near it ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F5] The support of a distribution is the complement of its largest open vanishing set ([[def-support-of-a-distribution]]).

## Proof

**Given:** [F1]–[F5].

1.1 Define $d_X:X\to X\times X$ by $d_X(x)=(x,x)$. For $\Psi\in\mathcal D(X\times X)$, the diagonal restriction $x\mapsto\Psi(d_X(x))$ has first derivatives $\partial_{x_j}\Psi(x,x)+\partial_{y_j}\Psi(x,x)$ by [F2]. Iterating this formula on the smooth partial derivatives of $\Psi$ shows the restriction has continuous derivatives of every order, so it is smooth. Its support is contained in the first-coordinate projection of $\operatorname{supp}\Psi$, which is compact as a continuous image of a compact set. The componentwise convention in the Statement and [F3] make the displayed integral well defined. [F1, F2, F3, construct]

2.1 The assignment is complex-linear. Fix a nonempty compact $K\subseteq X\times X$ and a compact rectangle $R\subseteq X$ containing its first-coordinate projection. For every $\Psi$ supported in $K$, $$ |\langle\delta_{\Delta_X},\Psi\rangle| \le \operatorname{vol}(R)\sup_{(x,y)\in K}|\Psi(x,y)|. $$ Thus the seminorm $q(\Psi)=|\langle\delta_{\Delta_X},\Psi\rangle|$ is continuous on every fixed-support test space. By the LF topology definition in [F1], such seminorms are continuous on $\mathcal D(X\times X)$. Therefore $\delta_{\Delta_X}\in\mathcal D'(X\times X)$. [F1, F3, step 1.1, algebra]

3.1 If an open set $U\subseteq X\times X$ is disjoint from $\Delta_X$, then every test supported in $U$ vanishes at every $(x,x)$. Its pairing with $\delta_{\Delta_X}$ is zero, so [F5] gives $\operatorname{supp}\delta_{\Delta_X}\subseteq\Delta_X$. [F5, step 2.1]

4.1 Fix $(x_0,x_0)\in\Delta_X$ and any open neighborhood $U$ of this point. There is a ball $B$ about $x_0$ with $\overline B\times\overline B\subseteq U$. By [F4] choose $h\in\mathcal D(X)$ with $h\ge0$, $h(x_0)=1$, and support in $B$. By continuity choose a closed nondegenerate cube $Q$ inside $B$ on which $h\ge1/2$, and choose a sufficiently large cube $R$ containing $\operatorname{supp}h$ and $Q$ with the faces of $Q$ among its grid cuts. The lower Darboux sum of the nonnegative function $h^2$ on this grid is at least $\operatorname{vol}(Q)/4>0$, so its real Riemann integral is positive. The product test $\Psi(x,y)=h(x)h(y)$ is supported in $U$, and $\langle\delta_{\Delta_X},\Psi\rangle=\int_X h(x)^2\,d^4x>0$. Thus $\delta_{\Delta_X}$ does not vanish on any neighborhood of $(x_0,x_0)$, so $(x_0,x_0)\in\operatorname{supp}\delta_{\Delta_X}$ by [F5]. Since the point was arbitrary, $\Delta_X\subseteq\operatorname{supp}\delta_{\Delta_X}$. Together with step 3.1 this gives equality. [F3, F4, F5, step 1.1, step 2.1, step 3.1]

5.1 For every $\Psi$, the diagonal restrictions of $\Psi(x,y)$ and $\Psi(y,x)$ coincide, so the distribution is symmetric. The diagonal has empty interior: every product neighborhood of a point $(x,x)$ contains $(x,y)$ with $y\ne x$. If a smooth function supported on the diagonal were nonzero at a point, continuity would make it nonzero on an open neighborhood, contradicting empty interior. Therefore every such smooth function is zero. [F2, step 4.1, algebra] ∎
