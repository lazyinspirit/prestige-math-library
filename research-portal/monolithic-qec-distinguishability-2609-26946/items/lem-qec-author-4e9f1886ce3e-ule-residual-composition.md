---
id: lem-qec-author-4e9f1886ce3e-ule-residual-composition
kind: lemma
domain: mathematics
title: Modified-operator distance and residual composition
status: published
origin: session
deps:
  - lem-qec-author-4e9f1886ce3e-remote-preparation-limit
  - lem-qec-author-4e9f1886ce3e-ule-modification-bound
  - math:def-qc-density-operator
  - math:def-non-negative-and-positive-operator
  - math:def-trace-of-an-endomorphism
  - math:thm-complex-spectral-theorem-for-normal-endomorphisms
  - math:def-operator-norm
  - math:lem-operator-norm-is-a-norm
  - math:def-vector-valued-derivative-and-integral
  - math:def-matrix-space
  - math:thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field
  - math:def-countable-choice
dependency_roles:
  lem-qec-author-4e9f1886ce3e-remote-preparation-limit: mathematical-premise
  lem-qec-author-4e9f1886ce3e-ule-modification-bound: mathematical-premise
  math:def-qc-density-operator: mathematical-premise
  math:def-non-negative-and-positive-operator: mathematical-premise
  math:def-trace-of-an-endomorphism: mathematical-premise
  math:thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  math:def-operator-norm: mathematical-premise
  math:lem-operator-norm-is-a-norm: mathematical-premise
  math:def-vector-valued-derivative-and-integral: mathematical-premise
  math:def-matrix-space: mathematical-premise
  math:thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field: mathematical-premise
  math:def-countable-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct-proof
dependency_level: 4
---

## Statement

Assume the Axiom of Countable Choice, as required by the quadrant-modification construction. Let $V=\mathbb C^{d\times d}$ for a positive integer $d$, with spectral norm $\|X\|_{\rm sp}=\sup_{\|z\|_2\leq1}\|Xz\|_2$, where $\|z\|_2=(\sum_j|z_j|^2)^{1/2}$. Use the quadrant maps $B(t),L(t),M(t):V\to V$, which are complex-linear, with induced norm $\|T\|=\sup_{\|X\|_{\rm sp}\leq1}\|T(X)\|_{\rm sp}$. Fix $\Gamma>0$, $\tau\geq0$ and $R\geq0$. On an open real time interval $J$, assume $M$ is differentiable in induced norm and $\dot M=L-B$, $\|M\|\leq\Gamma\tau$, $\|L\|\leq\Gamma/2$. The derivative identity is a hypothesis of this composition estimate.

Let $\rho:J\to V$ be differentiable in spectral norm, with each $\rho(t)$ a density operator on $\mathbb C^d$, and let $\xi:J\to V$ satisfy $\dot\rho=B\rho+\xi$, $\|\xi\|_{\rm sp}\leq R$ and $\|\dot\rho\|_{\rm sp}\leq\Gamma/2$. Products such as $B\rho$ denote evaluation $B(t)[\rho(t)]$, $LM\rho=L(t)[M(t)[\rho(t)]]$, and $I$ is the identity map on $V$. All identities and bounds are pointwise on $J$.

Then $\sigma=(I+M)\rho$ satisfies $\|\sigma-\rho\|_{\rm sp}\leq\Gamma\tau$ and $\dot\sigma=L\sigma+\eta$ with $\eta=\xi+M\dot\rho-LM\rho$ and $\|\eta\|_{\rm sp}\leq R+\Gamma^2\tau$. For $R=\Gamma^2\tau$ this is $2\Gamma^2\tau$; for the finite-preparation budget $R=\Gamma^2\tau+\delta\geq0$ it is $2\Gamma^2\tau+\delta$. Positivity or exact trace normalization of $\sigma$ is not required for these operator estimates.

## Facts & Assumptions

[F1] The preparation-budget lemma retains the finite tail and shows only convergence of residual budgets, not of the states. [[lem-qec-author-4e9f1886ce3e-remote-preparation-limit]]

[F2] Under Countable Choice and their defining dominated-kernel hypotheses, the quadrant maps act on this same matrix space and obey the stated induced-norm bounds. [[lem-qec-author-4e9f1886ce3e-ule-modification-bound]]

[F3] Differentiation is the real-time difference-quotient limit in the indicated norm. To identify it with real-coordinate differentiation, regard the matrix and map spaces as real vector spaces. Let $E_{jk}$ have entry $1$ at $(j,k)$ and zero elsewhere, for $0\leq j,k<d$. The matrices $E_{jk},iE_{jk}$ form a real basis of $V$: their coefficients are precisely the real and imaginary entries. For the complex-linear map space use $H_{jk,ab}(X)=X_{ab}E_{jk}$ and $iH_{jk,ab}$, with $0\leq j,k,a,b<d$. Their coefficients are the real and imaginary entries of $T(E_{ab})$, so they form a real basis. Each map is bounded: $|X_{ab}|\leq\|X\|_{\rm sp}$ gives $\|T(X)\|_{\rm sp}\leq\sum_{a,b}|X_{ab}|\|T(E_{ab})\|_{\rm sp}\leq(\sum_{a,b}\|T(E_{ab})\|_{\rm sp})\|X\|_{\rm sp}$. Thus [F6] supplies norms on these real spaces. Over the complete field $\mathbb R$, finite-dimensional norm equivalence compares each indicated norm above and below with its real-coordinate maximum norm by positive constants. Applied to difference quotients minus a candidate limit, those comparisons identify norm convergence with coordinate convergence, hence identify the derivatives with the real-coordinate definition. The assumed identity $\dot M=L-B$ is used directly; no continuity of $B$ or $L$ is invoked here. [[math:def-vector-valued-derivative-and-integral]] [[math:thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field]]

[F4] A density operator is a non-negative endomorphism with trace one. Non-negative means self-adjoint with nonnegative quadratic form, and trace is computed in any ordered basis. [[math:def-qc-density-operator]] [[math:def-non-negative-and-positive-operator]] [[math:def-trace-of-an-endomorphism]]

[F5] A normal endomorphism of a finite-dimensional complex inner-product space has an orthonormal eigenbasis. In particular this applies to a self-adjoint endomorphism, since it commutes with its adjoint. [[math:thm-complex-spectral-theorem-for-normal-endomorphisms]]

[F6] The operator norm satisfies $\|T(X)\|_{\rm sp}\leq\|T\|\|X\|_{\rm sp}$ and is a norm on the space of bounded maps. The spectral norm is itself the operator norm for matrices acting on Euclidean vectors. [[math:def-operator-norm]] [[math:lem-operator-norm-is-a-norm]]

[F7] Matrix addition and scalar multiplication in $V=M_{d\times d}(\mathbb C)$ are entrywise; addition and scalar multiplication of the maps are pointwise in their matrix outputs. [[math:def-matrix-space]] [[math:lem-operator-norm-is-a-norm]]

[A1] Assume the Axiom of Countable Choice inherited from the quadrant-modification supplier. It is used to invoke that supplier's Lebesgue-measure construction and the quadrant-map bounds in [F2]; the local product differentiation and norm estimates require no additional choice principle. [[math:def-countable-choice]] [[lem-qec-author-4e9f1886ce3e-ule-modification-bound]]

## Proof

**Given:** Countable Choice, the matrix space, quadrant maps, differentiable curves, derivative identity and bounds in the Statement. **Goal:** Establish the modified-operator distance and residual estimates.

1.1 Fix $t\in J$. By [F4] and [F5], $\rho(t)$ has an orthonormal eigenbasis $e_1,\ldots,e_d$ with eigenvalues $\lambda_j$. Nonnegativity gives $\lambda_j=\langle\rho(t)e_j,e_j\rangle\geq0$, and the trace computed in that basis gives $\sum_j\lambda_j=1$. Hence $0\leq\lambda_j\leq1$. For $z=\sum_j c_j e_j$, orthonormality gives $\|\rho(t)z\|_2^2=\sum_j\lambda_j^2|c_j|^2\leq\sum_j|c_j|^2=\|z\|_2^2$. Taking the unit-ball supremum shows $\|\rho(t)\|_{\rm sp}\leq1$. [given, F4, F5, F6]

1.2 The product differentiation needed here follows directly from difference quotients. For fixed $t$ and nonzero sufficiently small real $h$, put $Q_M(h)=(M(t+h)-M(t))/h$ and $Q_\rho(h)=(\rho(t+h)-\rho(t))/h$. By differentiability these converge in their respective norms to $\dot M(t)$ and $\dot\rho(t)$; in particular they are bounded for small $h$, and $\rho(t+h)-\rho(t)=hQ_\rho(h)\to0$. The difference quotient of $M\rho$ equals $Q_M(h)[\rho(t+h)]+M(t)[Q_\rho(h)]$. By [F6], the difference of its first term from $\dot M(t)[\rho(t)]$ is bounded by $\|Q_M(h)\|\|\rho(t+h)-\rho(t)\|_{\rm sp}+\|Q_M(h)-\dot M(t)\|\|\rho(t)\|_{\rm sp}$, which tends to zero; the second term converges to $M(t)[\dot\rho(t)]$. Thus $\dot\sigma=\dot\rho+\dot M\rho+M\dot\rho$. Substitution of the two assumed differential identities gives $\dot\sigma=L\rho+\xi+M\dot\rho=L\sigma+\xi+M\dot\rho-LM\rho$. [given, F3, F6, F7]

2.1 Therefore $\|\sigma-\rho\|_{\rm sp}=\|M\rho\|_{\rm sp}\leq\|M\|\|\rho\|_{\rm sp}\leq\Gamma\tau$. [given, A1, F2, F6, step 1.1]

3.1 The three residual summands have spectral norms at most $R$, $(\Gamma\tau)(\Gamma/2)$ and $(\Gamma/2)(\Gamma\tau)\|\rho\|_{\rm sp}$, respectively. By the triangle inequality and step 1.1, $\|\eta\|_{\rm sp}\leq R+\Gamma^2\tau$. Substituting each stated value of $R$ proves both specializations, retaining the finite-preparation tail as in [F1]. No positivity or trace claim for the modified operator entered these estimates. They bound a differential residual, rather than the distance between residual-free trajectories, and assert no convergence of preparation families. [given, A1, F1, F2, F6, step 1.1, step 1.2] ∎
