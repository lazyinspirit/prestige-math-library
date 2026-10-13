---
id: cor-cm-variation-of-constants-for-linear-systems
kind: corollary
title: "Variation of constants for $z'=Az+b(t)$ via the matrix exponential"
status: published
origin: pipeline
domain: mathematics
dependency_level: 1
deps:
  [
    lem-cm-convolution-differentiation,
    lem-exponential-series-of-a-bounded-operator,
    cor-linear-maps-with-finite-dimensional-domain-are-bounded,
    def-operator-norm,
    def-matrix-space,
    def-euclidean-inner-product,
    thm-cauchy-schwarz-and-the-euclidean-norm,
    lem-standard-basis-of-f-n,
    def-matrix-product-and-identity-matrix,
    def-linear-map,
    def-bounded-linear-operator,
    thm-euclidean-space-complete,
    thm-gronwall-integral-inequality,
    thm-chain-rule,
    thm-algebra-of-derivatives,
    cor-vector-valued-ftc-and-lipschitz-bound,
    thm-norm-inequality-for-the-vector-valued-integral,
    def-vector-valued-derivative-and-integral,
    def-interval
  ]
dependency_roles:
  lem-cm-convolution-differentiation: mathematical-premise
  lem-exponential-series-of-a-bounded-operator: mathematical-premise
  cor-linear-maps-with-finite-dimensional-domain-are-bounded: mathematical-premise
  def-operator-norm: mathematical-premise
  def-matrix-space: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  lem-standard-basis-of-f-n: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-linear-map: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  thm-euclidean-space-complete: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: G. Teschl, Ordinary Differential Equations and Dynamical Systems (retrieved 365-page online edition), Section 3.1, Eqs. (3.2)-(3.12), printed pp. 59-61; Section 3.4, Theorem 3.12, Eq. (3.97), printed pp. 83-84.
    url: https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf
  - title: 'K. Likharev, Essential Graduate Physics, Classical Mechanics (complete 252-page volume), Chapter 5 Section 5.1, Eqs. (5.27)-(5.30): the temporal Green''s function as the response to a short pulse, $q(t)=\int f(t'')G(t-t'')\,dt''$, printed pages 6-7 of Chapter 5 (PDF pages 92-93)'
    url: https://essentialgraduatephysics.org/Files/CM%20merged.pdf
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, equip $\mathbb R^n$ with the Euclidean inner product and norm of [[def-euclidean-inner-product]], let $A\in M_n(\mathbb R)$ ([[def-matrix-space]]), let $t_0\in\mathbb R$ and $z_0\in\mathbb R^n$, and let $b:\mathbb R\to\mathbb R^n$ be continuous ([[def-vector-valued-derivative-and-integral]]). The Euclidean norm is a norm by [[thm-cauchy-schwarz-and-the-euclidean-norm]], and the standard coordinate vectors form an ordered basis by [[lem-standard-basis-of-f-n]]. For $A=(a_{ij})$ and $z\in\mathbb R^n$, define $(Az)_i:=\sum_{j<n}a_{ij}z_j$; this is a linear map by [[def-linear-map]], hence bounded by [[cor-linear-maps-with-finite-dimensional-domain-are-bounded]], and $\|A\|$ denotes its induced Euclidean operator norm ([[def-operator-norm]]). Matrix powers and products use [[def-matrix-product-and-identity-matrix]]; their action agrees with composition of the corresponding linear maps by distributing the finite sums in the displayed coordinate formula. Define the **matrix exponential**

$$E:\mathbb R\longrightarrow M_n(\mathbb R),\qquad E(t):=\sum_{k=0}^\infty\frac{t^k}{k!}A^k .$$

Then:

1. $E$ is well defined and of class $C^1$, with $E(0)=I_n$, $E(u+v)=E(u)E(v)$, $\frac{d}{du}E(u)=AE(u)=E(u)A$ for all $u,v\in\mathbb R$, and $\|E(u)\|\le e^{\|A\||u|}$ for the operator norm ([[def-operator-norm]]) subordinate to the Euclidean norm.
2. The map
$$z:\mathbb R\longrightarrow\mathbb R^n,\qquad z(t):=E(t-t_0)z_0+\int_{t_0}^tE(t-s)b(s)\,ds,$$
satisfies $z(t_0)=z_0$ and $z'(t)=A\,z(t)+b(t)$ for every $t\in\mathbb R$.
3. Uniqueness: if $J\subseteq\mathbb R$ is an interval with nonempty interior containing $t_0$ ([[def-interval]]) and $w:J\to\mathbb R^n$ is differentiable with $w'=Aw+b$ on $J$ and $w(t_0)=z_0$, then $w=z|_J$.

## Facts & Assumptions

**Given:** $n\ge1$, $A\in M_n(\mathbb R)$ identified with a linear endomorphism of $\mathbb R^n$, $z_0\in\mathbb R^n$, a continuous $b:\mathbb R\to\mathbb R^n$, and the matrix exponential $E$ displayed above.

[F1] The matrix action defined in the Statement is a bounded linear endomorphism $\widehat A$ of normed Euclidean $\mathbb R^n$: the Euclidean norm is a norm, and the standard coordinate vectors form a finite ordered basis, so the finite-dimensional boundedness theorem applies ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]], [[lem-standard-basis-of-f-n]], [[cor-linear-maps-with-finite-dimensional-domain-are-bounded]]). Its induced metric agrees with $d_2$ ([[def-euclidean-inner-product]]), which is complete ([[thm-euclidean-space-complete]]); hence this normed space is Banach. For matrices $B=(b_{ij})$ and $C=(c_{j\ell})$, $((BC)z)_i=\sum_{\ell<n}(\sum_{j<n}b_{ij}c_{j\ell})z_\ell=(B(Cz))_i$, so matrix multiplication represents composition ([[def-matrix-product-and-identity-matrix]]). The exponential series lemma applies to $\widehat A$ and gives absolute convergence in operator norm, $E\in C^1$ with $E'=AE=EA$, $E(0)=I_n$, $E(u+v)=E(u)E(v)$ and $\|E(u)\|\le e^{\|A\||u|}$ ([[lem-exponential-series-of-a-bounded-operator]]).

[F2] The convolution differentiation lemma ([[lem-cm-convolution-differentiation]]) applies with interval $I=\mathbb R$, open kernel domain $U=\mathbb R\supseteq I-I$, $g:=E:U\to M_n(\mathbb R)$ and $f:=b:I\to\mathbb R^n$: for every $t$, the map $t\mapsto\int_{t_0}^tE(t-s)b(s)\,ds$ is differentiable with derivative $E(0)b(t)+\int_{t_0}^tE'(t-s)b(s)\,ds$.

[F3] Differentiation rules: the chain rule and the algebra of derivatives differentiate products and compositions; for a differentiable matrix curve $M$ and constant vector $v$, $t\mapsto M(t)v$ is differentiable with derivative $M'(t)v$. [thm-chain-rule, thm-algebra-of-derivatives]

[F4] Fundamental theorem for continuous derivatives: if $u:J\to\mathbb R^n$ is differentiable with continuous derivative on an interval $J$ containing $t_0$, then $\int_{t_0}^tu'=u(t)-u(t_0)$ ([[cor-vector-valued-ftc-and-lipschitz-bound]]); and $\|{\int_{t_0}^t\phi}\|_2\le|\int_{t_0}^t\|\phi\|_2|$ ([[thm-norm-inequality-for-the-vector-valued-integral]], [[def-vector-valued-derivative-and-integral]]).

[F5] Gronwall: if a continuous real $u\ge0$ satisfies $u(t)\le A+\int_{t_0}^tB\,u$ for $t\ge t_0$ with constants $A,B\ge0$, then $u(t)\le Ae^{B(t-t_0)}$; the time-reflected form with the integral from $t$ to $t_0$ applies for $t\le t_0$ ([[thm-gronwall-integral-inequality]]).

## Proof

**Proof technique:** direct; verify the explicit solution by the convolution lemma and the exponential identities, then prove uniqueness by Gronwall.

1.1 By [F1] the exponential $E$ is $C^1$ with $E'=AE=EA$, $E(0)=I_n$, $E(u+v)=E(u)E(v)$ and $\|E(u)\|\le e^{\|A\||u|}$ for all $u,v$; in particular $t\mapsto E(t-t_0)$ is differentiable with derivative $AE(t-t_0)$, by the chain rule for the affine inner map $t\mapsto t-t_0$. [F1, F3, given]

2.1 By step 1.1 and [F3], $t\mapsto E(t-t_0)z_0$ has derivative $AE(t-t_0)z_0$. By [F2] the integral term has derivative $E(0)b(t)+\int_{t_0}^tE'(t-s)b(s)\,ds=b(t)+\int_{t_0}^tAE(t-s)b(s)\,ds$, where the second identity uses $E'=AE$ of step 1.1 and linearity of the integral. Hence $$z'(t)=AE(t-t_0)z_0+b(t)+A\int_{t_0}^tE(t-s)b(s)\,ds=Az(t)+b(t),$$ by linearity of matrix-vector multiplication. Moreover $z(t_0)=E(0)z_0+\int_{t_0}^{t_0}=z_0$, so clause 2 holds. [step 1.1, F2, F3, given]

3.1 For clause 3 let $w$ solve $w'=Aw+b$ on an interval $J$ containing $t_0$ with $w(t_0)=z_0$, and put $u:=w-z|_J$. By step 2.1, $u'=Au$ and $u(t_0)=0$, so by [F4] $$u(t)=\int_{t_0}^tA\,u(s)\,ds\qquad(t\in J),$$ and therefore $\|u(t)\|_2\le\bigl|\int_{t_0}^t\|A\|\,\|u(s)\|_2\,ds\bigr|\le\|A\|\,\bigl|\int_{t_0}^t\|u(s)\|_2\,ds\bigr|$ for $t\ge t_0$ and the reflected inequality for $t\le t_0$. Applying [F5] with $A_0=0$ and $B=\|A\|$ to the nonnegative continuous function $\|u\|_2$ gives $\|u(t)\|_2\le0$ on both sides of $t_0$, hence $u=0$ and $w=z|_J$. [step 2.1, F4, F5] ∎
