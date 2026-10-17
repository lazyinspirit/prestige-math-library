---
id: thm-qsm-local-classical-diagonal-embedding
kind: theorem
title: Consistent finite classical laws define a quasilocal C-star state
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-qsm-local-matrix-net-completion
  - def-state-on-a-c-star-algebra
  - thm-cauchy-schwarz-in-an-inner-product-space
dependency_roles:
  def-qsm-local-matrix-net-completion: mathematical-premise
  def-state-on-a-c-star-algebra: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: M. Takesaki, Theory of Operator Algebras I, §I.9
      url: https://doi.org/10.1007/978-1-4612-6188-9
    - title: B. Bekka, P. de la Harpe, A. Valette, Kazhdan's Property (T), §8.A
      url: https://arxiv.org/pdf/1912.07262
---

## Statement

Let $q\ge1$ and let $\mu_N$ be probability laws on
$\{1,\ldots,q\}^N$ for $N\ge1$, consistent under deleting the last
coordinate. On a local matrix $A\in\mathcal A_N$, define
$$\omega_N(A)=\sum_{x\in\{1,\ldots,q\}^N}\mu_N(x)A_{xx}.$$
In particular, for a diagonal $D_f$ this is
$\omega_N(D_f)=\sum_x\mu_N(x)f(x)$. On the algebra $\mathcal A$ of
[[def-qsm-local-matrix-net-completion]],
Then this rule extends uniquely to a state on $\mathcal A$. The theorem
constructs a classical diagonal state; it does not say that every state on
$\mathcal A$ is diagonal or classical.

## Facts & Assumptions

**Given:** Consistent probability laws $\mu_N$ and the local embeddings in
[[def-qsm-local-matrix-net-completion]].

[F1] [[def-qsm-local-matrix-net-completion]]: each local matrix has a
well-defined operator norm, the embeddings preserve it, and
$\mathcal A_{\rm loc}$ is dense in its C*-completion.

[F2] [[def-state-on-a-c-star-algebra]]: a state is a positive bounded linear
functional of norm one.

[F3] [[thm-cauchy-schwarz-in-an-inner-product-space]]: the inner-product
pairing obeys $|\langle u,v\rangle|\le\|u\|\|v\|$.

## Proof

1.1 Under the inclusion $A\mapsto A\otimes I_q$, the diagonal entry at
$(x,j)$ equals $A_{xx}$. Consistency of $\mu_{N+1}$ says
$\sum_j\mu_{N+1}(x,j)=\mu_N(x)$; substituting this identity into
$\omega_{N+1}(A\otimes I_q)$ gives $\omega_N(A)$. Hence the rule is
well-defined on the union of positive-length local matrix algebras. Define
$\omega_0(cI)=c$ on $\mathcal A_0=\mathbb C I$. It agrees with the $N=1$
formula because $\sum_x\mu_1(x)=1$. Each $\omega_N$ is linear, and these
identities show the rule on the full union is linear and satisfies
$\omega(1)=1$.
[given, F1, algebra]

2.1 For a local matrix $A$, positivity of the weights gives
$|\omega_N(A)|\le\sum_x\mu_N(x)|A_{xx}|\le\|A\|$ because
$|\langle A e_x,e_x\rangle|\le\|A\|$ by [F3], and the same marginal calculation
makes the functionals consistent. Thus $|\omega(A)|\le\|A\|$ on
$\mathcal A_{\rm loc}$. If $A_n$ is a norm-Cauchy sequence of local
matrices, $(\omega(A_n))$ is Cauchy; define its limit to extend $\omega$.
The bound proves independence of approximating sequence, linearity and
continuity, and density makes the extension unique. [given, F1, F3, step 1.1,
algebra]

3.1 If $A_n\to A$ in norm, then $A_n^*A_n\to A^*A$ by continuity of
multiplication and adjoint in the C*-norm. For local $A_n$, its diagonal
entries obey
$\langle A_n^*A_ne_x,e_x\rangle=\|A_ne_x\|^2\ge0$, so
$\omega(A_n^*A_n)\ge0$. Passing to the limit
shows positivity of the extension. Its norm is at most one by step 2.1 and at
least one because $\omega(1)=1$ and $\|1\|=1$. Hence it is a state by [F2].
[given, F1, F2, step 2.1, algebra] ∎
