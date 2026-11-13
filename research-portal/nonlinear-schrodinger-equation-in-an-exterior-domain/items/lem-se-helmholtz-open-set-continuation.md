---
id: lem-se-helmholtz-open-set-continuation
kind: lemma
domain: mathematics
title: Helmholtz continuation through a harmonic lift
status: published
deps:
  - math:def-axiom-of-choice
  - math:def-connected-space
  - math:def-sobolev-space-wkp-and-its-norm
  - math:def-hk-and-hk-zero-notation
  - math:def-local-weak-solution-for-a-divergence-form-operator
  - math:def-real-analytic-germ-in-several-variables
  - math:thm-interior-h-k-plus-two-elliptic-regularity
  - math:thm-extension-theorem-for-bounded-smooth-domains
  - math:thm-higher-order-sobolev-embedding
  - math:thm-product-of-connected-spaces
  - math:thm-harmonic-functions-are-real-analytic
  - math:cor-unique-continuation-for-harmonic-functions
  - math:def-laplacian-of-a-c2-function
  - math:thm-connected-subsets-of-r-are-intervals
  - math:lem-classical-derivatives-are-weak-derivatives
  - math:def-real-exponential-function-and-e
  - math:thm-derivative-of-exponential
  - math:thm-sine-and-cosine-derivatives
  - math:thm-chain-rule
  - math:thm-algebra-of-derivatives
  - math:thm-ck-euclidean-maps-closed-under-algebra-and-composition
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  math:def-connected-space: mathematical-premise
  math:def-sobolev-space-wkp-and-its-norm: mathematical-premise
  math:def-hk-and-hk-zero-notation: mathematical-premise
  math:def-local-weak-solution-for-a-divergence-form-operator: mathematical-premise
  math:def-real-analytic-germ-in-several-variables: mathematical-premise
  math:thm-interior-h-k-plus-two-elliptic-regularity: mathematical-premise
  math:thm-extension-theorem-for-bounded-smooth-domains: mathematical-premise
  math:thm-higher-order-sobolev-embedding: mathematical-premise
  math:thm-product-of-connected-spaces: mathematical-premise
  math:thm-harmonic-functions-are-real-analytic: mathematical-premise
  math:cor-unique-continuation-for-harmonic-functions: mathematical-premise
  math:def-laplacian-of-a-c2-function: mathematical-premise
  math:thm-connected-subsets-of-r-are-intervals: mathematical-premise
  math:lem-classical-derivatives-are-weak-derivatives: mathematical-premise
  math:def-real-exponential-function-and-e: mathematical-premise
  math:thm-derivative-of-exponential: mathematical-premise
  math:thm-sine-and-cosine-derivatives: mathematical-premise
  math:thm-chain-rule: mathematical-premise
  math:thm-algebra-of-derivatives: mathematical-premise
  math:thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement

Assume the Axiom of Choice. Let $D\subseteq\mathbb R^n$ be connected and open, $n\ge2$, let $\mu\in\mathbb R$, and let $u\in H^1(D;\mathbb C)$ solve $\Delta u=\mu u$ weakly. Then $u$ has a real analytic representative in $D$. If $u$ vanishes almost everywhere on a nonempty open subset, then $u=0$ almost everywhere in $D$.

Here $H^1=W^{1,2}$ consists of $L^2$ classes with first weak derivatives in $L^2$. The weak equation means $-\int_D\nabla u\cdot\nabla\overline\varphi\,dx=\mu\int_Du\overline\varphi\,dx$ for every $\varphi\in C_c^\infty(D;\mathbb C)$. Real analytic means that near each point the representative has an absolutely convergent power series in the real coordinates, with complex coefficients. Connected means that the only relatively open and closed subsets of $D$ are $\varnothing$ and $D$.

## Facts & Assumptions

**Given:** The Axiom of Choice, $D$, $n$, $\mu$ and $u$ as in the statement. In particular, Countable Choice follows from the Axiom of Choice. The Sobolev and weak-solution conventions are those in [[math:def-axiom-of-choice]], [[math:def-sobolev-space-wkp-and-its-norm]], [[math:def-hk-and-hk-zero-notation]] and [[math:def-local-weak-solution-for-a-divergence-form-operator]]. The conventions for connectedness and real analyticity are given by [[math:def-connected-space]] and [[math:def-real-analytic-germ-in-several-variables]].

**Goal:** Obtain an analytic representative and prove its vanishing on $D$ when it vanishes on a nonempty open subset.

[F1] For the uniformly elliptic operator $-\Delta$, interior regularity gives $H^{k+2}_{\mathrm{loc}}$ regularity of an $H^1$ weak solution whenever its right-hand side is in $H^k_{\mathrm{loc}}$; it requires Countable Choice ([[math:thm-interior-h-k-plus-two-elliptic-regularity]]).

[F2] Every bounded smooth ball is a $W^{k,2}$ extension domain, and on such a ball the higher-order Sobolev embedding gives a $C^m$ representative when $k>m+n/2$. These inputs require the Axiom of Choice ([[math:thm-extension-theorem-for-bounded-smooth-domains|Bounded $C^k$ domains admit integer-order Sobolev extension]], [[math:thm-higher-order-sobolev-embedding]]).

[F3] A real or complex harmonic function on an open subset of Euclidean space of dimension at least two is real analytic. A harmonic function on a connected open set which vanishes on a nonempty open subset vanishes everywhere. Both assertions require Countable Choice ([[math:thm-harmonic-functions-are-real-analytic]], [[math:cor-unique-continuation-for-harmonic-functions]]).

[F4] A product of connected spaces is connected in the product topology ([[math:thm-product-of-connected-spaces]]). The real line is order-convex, since a real number between two real numbers belongs to $\mathbb R$, so it is connected by [[math:thm-connected-subsets-of-r-are-intervals]]. In particular it has no nontrivial clopen partition: the two pieces of such a partition would be nonempty disjoint closed subsets of $\mathbb R$, hence separated, contradicting that theorem. This is connectedness in the sense of [[math:def-connected-space]].

[F5] For a real $C^2$ function $f$ on an open Euclidean set, $\Delta f$ is the sum of its second coordinate derivatives, and $f$ is harmonic if $\Delta f=0$ ([[math:def-laplacian-of-a-c2-function]]). For a complex function $f=f_1+if_2$, use $\Delta f=\Delta f_1+i\Delta f_2$; calling $f$ harmonic means that both real components are harmonic. Thus the classical convention applies separately to the real and imaginary parts.

[F6] Under Countable Choice, the componentwise classical derivatives through order $k$ of a complex $C^k$ function on an open Euclidean set represent its unique weak derivatives ([[math:lem-classical-derivatives-are-weak-derivatives]]). We apply this with $k=2$ to the smooth representative; the stated Axiom of Choice supplies Countable Choice.

[F7] The real exponential is defined by its power series, which gives $\exp(0)=1$ ([[math:def-real-exponential-function-and-e]]). It is smooth with $\exp^{(m)}=\exp$ for every positive integer $m$ ([[math:thm-derivative-of-exponential]]). On $\mathbb R$, $\sin'=\cos$, $\cos'=-\sin$ and $\cos(0)=1$ ([[math:thm-sine-and-cosine-derivatives]]); iterating these identities gives continuous derivatives of every order for sine and cosine.

[F8] The one-variable chain rule applies when the inner and outer functions are differentiable at the relevant limit points; here both domains are $\mathbb R$ ([[math:thm-chain-rule]]). Scalar multiples and products obey the usual differentiation rules ([[math:thm-algebra-of-derivatives]]). Finite componentwise products and compositions of $C^k$ Euclidean maps are $C^k$ for every finite $k$ ([[math:thm-ck-euclidean-maps-closed-under-algebra-and-composition]]). These rules apply to real and imaginary components separately.

## Proof

**Given:** The Axiom of Choice, $D$, $n$, $\mu$ and $u$ as in the statement. In particular, Countable Choice follows from the Axiom of Choice. The Sobolev and weak-solution conventions are those in [[math:def-axiom-of-choice]], [[math:def-sobolev-space-wkp-and-its-norm]], [[math:def-hk-and-hk-zero-notation]] and [[math:def-local-weak-solution-for-a-divergence-form-operator]]. The conventions for connectedness and real analyticity are given by [[math:def-connected-space]] and [[math:def-real-analytic-germ-in-several-variables]].

**Goal:** Obtain an analytic representative and prove its vanishing on $D$ when it vanishes on a nonempty open subset.

[F1] For the uniformly elliptic operator $-\Delta$, interior regularity gives $H^{k+2}_{\mathrm{loc}}$ regularity of an $H^1$ weak solution whenever its right-hand side is in $H^k_{\mathrm{loc}}$; it requires Countable Choice ([[math:thm-interior-h-k-plus-two-elliptic-regularity]]).

[F2] Every bounded smooth ball is a $W^{k,2}$ extension domain, and on such a ball the higher-order Sobolev embedding gives a $C^m$ representative when $k>m+n/2$. These inputs require the Axiom of Choice ([[math:thm-extension-theorem-for-bounded-smooth-domains|Bounded $C^k$ domains admit integer-order Sobolev extension]], [[math:thm-higher-order-sobolev-embedding]]).

[F3] A real or complex harmonic function on an open subset of Euclidean space of dimension at least two is real analytic. A harmonic function on a connected open set which vanishes on a nonempty open subset vanishes everywhere. Both assertions require Countable Choice ([[math:thm-harmonic-functions-are-real-analytic]], [[math:cor-unique-continuation-for-harmonic-functions]]).

[F4] A product of connected spaces is connected in the product topology ([[math:thm-product-of-connected-spaces]]). The real line is order-convex, since a real number between two real numbers belongs to $\mathbb R$, so it is connected by [[math:thm-connected-subsets-of-r-are-intervals]]. In particular it has no nontrivial clopen partition: the two pieces of such a partition would be nonempty disjoint closed subsets of $\mathbb R$, hence separated, contradicting that theorem. This is connectedness in the sense of [[math:def-connected-space]].

[F5] For a real $C^2$ function $f$ on an open Euclidean set, $\Delta f$ is the sum of its second coordinate derivatives, and $f$ is harmonic if $\Delta f=0$ ([[math:def-laplacian-of-a-c2-function]]). For a complex function $f=f_1+if_2$, use $\Delta f=\Delta f_1+i\Delta f_2$; calling $f$ harmonic means that both real components are harmonic. Thus the classical convention applies separately to the real and imaginary parts.

[F6] Under Countable Choice, the componentwise classical derivatives through order $k$ of a complex $C^k$ function on an open Euclidean set represent its unique weak derivatives ([[math:lem-classical-derivatives-are-weak-derivatives]]). We apply this with $k=2$ to the smooth representative; the stated Axiom of Choice supplies Countable Choice.

[F7] The real exponential is defined by its power series, which gives $\exp(0)=1$ ([[math:def-real-exponential-function-and-e]]). It is smooth with $\exp^{(m)}=\exp$ for every positive integer $m$ ([[math:thm-derivative-of-exponential]]). On $\mathbb R$, $\sin'=\cos$, $\cos'=-\sin$ and $\cos(0)=1$ ([[math:thm-sine-and-cosine-derivatives]]); iterating these identities gives continuous derivatives of every order for sine and cosine.

[F8] The one-variable chain rule applies when the inner and outer functions are differentiable at the relevant limit points; here both domains are $\mathbb R$ ([[math:thm-chain-rule]]). Scalar multiples and products obey the usual differentiation rules ([[math:thm-algebra-of-derivatives]]). Finite componentwise products and compositions of $C^k$ Euclidean maps are $C^k$ for every finite $k$ ([[math:thm-ck-euclidean-maps-closed-under-algebra-and-composition]]). These rules apply to real and imaginary components separately.



**Proof technique:** direct.

1.1 The equation is the weak equation $-\Delta u=-\mu u$. Starting from $u\in H^1(D)$, apply [F1] with $k=0$ to obtain $u\in H^2_{\mathrm{loc}}(D)$. If $u\in H^k_{\mathrm{loc}}(D)$, then $-\mu u\in H^k_{\mathrm{loc}}(D)$, so [F1] gives $u\in H^{k+2}_{\mathrm{loc}}(D)$. Induction and restriction to smaller open sets therefore give $u\in H^k_{\mathrm{loc}}(D)$ for every nonnegative integer $k$. The coefficients of $-\Delta$ are constant and satisfy all coefficient and ellipticity hypotheses in [F1]. [given, F1]

2.1 Around each point choose nested balls whose larger closure lies in $D$. For any $m\ge0$, choose an integer $k>m+n/2$; step 1.1 supplies $H^k$ regularity on the larger ball, and [F2] supplies a $C^m$ representative there. Representatives for different orders and overlapping balls agree almost everywhere, hence agree everywhere where both are continuous. They consequently define one $C^\infty$ representative on $D$. Its classical Laplacian equals $\mu u$ everywhere: by [F6] with $k=2$, the weak and classical derivatives agree for this complex smooth representative on the open set $D$, and the two continuous sides agree almost everywhere. [step 1.1, F2, F5, F6]

3.1 Define $a(t)=e^{\sqrt{-\mu}\,t}$ if $\mu<0$, $a(t)=1$ if $\mu=0$, and $a(t)=\cos(\sqrt\mu\,t)$ if $\mu>0$. In the first case, put $\lambda=\sqrt{-\mu}$: [F7] and the chain and scalar rules in [F8] give $a'=\lambda a$ and $a''=\lambda^2a=-\mu a$. In the third case, put $\lambda=\sqrt\mu$: the same rules give $a'=-\lambda\sin(\lambda t)$ and $a''=-\lambda^2\cos(\lambda t)=-\mu a$. For $\mu=0$ the constant function has $a''=0$. Thus in every case $a(0)=1$ by [F7], $a''=-\mu a$, and $a$ is smooth by [F7] and [F8]. Set $v(x,t)=a(t)u(x)$ on $D\times\mathbb R$, using the smooth representative from step 2.1. The coordinate projections are linear and smooth, so composition and multiplication in [F8], at every finite order, show that $v$ is smooth componentwise. By [F5] and the differentiation rules in [F8], its componentwise classical Laplacian is $\Delta_{x,t}v=a\Delta_xu+a''u=0$; taking real and imaginary parts shows that each part is harmonic, so $v$ is complex harmonic in the stated sense. By [F3], $v$ is real analytic in the $n+1$ real variables. Restricting its locally absolutely convergent power series at $(x,0)$ to $t=0$ shows that $u(x)=v(x,0)$ is real analytic on $D$. [step 2.1, F3, F5, F7, F8, algebra]

4.1 Suppose $u=0$ almost everywhere on a nonempty open $U\subseteq D$. Its continuous representative vanishes pointwise on $U$, so $v=0$ on the nonempty open set $U\times\mathbb R$. By [F4], $D\times\mathbb R$ is connected; it is open in $\mathbb R^{n+1}$. Harmonic continuation in [F3] gives $v=0$ there. Evaluating at $t=0$ gives $u=0$ on $D$, and hence the original Sobolev class is zero almost everywhere. [given, step 3.1, F3, F4] ∎
