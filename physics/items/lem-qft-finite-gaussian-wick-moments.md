---
id: lem-qft-finite-gaussian-wick-moments
kind: lemma
title: Finite Gaussian normalization and Wick moments
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - def-qft-finite-euclidean-interacting-measure
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - def-axiom-of-choice
  - lem-characteristic-function-of-a-multivariate-normal-law
  - lem-moments-give-derivatives-of-the-characteristic-function
  - thm-generalized-holder-inequality-for-products
  - thm-of-square-roots
  - thm-gaussian-integral
  - thm-substitution-for-improper-integrals
  - def-real-exponential-function-and-e
dependency_roles:
  def-qft-finite-euclidean-interacting-measure: mathematical-premise
  def-multivariate-normal-law: mathematical-premise
  def-standard-normal-and-normal-laws: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-characteristic-function-of-a-multivariate-normal-law: mathematical-premise
  lem-moments-give-derivatives-of-the-characteristic-function: mathematical-premise
  thm-generalized-holder-inequality-for-products: mathematical-premise
  thm-of-square-roots: mathematical-premise
  thm-gaussian-integral: mathematical-premise
  thm-substitution-for-improper-integrals: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Skinner, Advanced Quantum Field Theory, Chapter 2, “QFT in Zero Dimensions” (University of Cambridge Part III lecture notes)
      url: https://www.damtp.cam.ac.uk/user/dbs26/AQFT/chap2.pdf
    - title: Nima Moshayedi, Quantum Field Theory and Functional Integrals (lecture notes, arXiv:1902.08652)
      url: https://arxiv.org/pdf/1902.08652
---

## Statement

Assume the Axiom of Choice. Let $N\ge1$ be finite, let $C$ be a real symmetric positive-semidefinite $N\times N$ covariance matrix, and let $Q\sim\gamma_C=N_N(0,C)$ be the law of [[def-qft-finite-euclidean-interacting-measure]]. For $k\ge0$ and vectors $u_1,\ldots,u_k\in\mathbb R^N$, every product $\prod_{j=1}^k(u_j^{\mathsf T}Q)$ is integrable. For $k=0$ its expectation is $1$. If $k$ is odd, its expectation is $0$; if $k=2m$, then

$$\mathbb E\!\left[\prod_{j=1}^{2m}u_j^{\mathsf T}Q\right]=\sum_{\pi\in\operatorname{Pair}(2m)}\prod_{\{a,b\}\in\pi}u_a^{\mathsf T}Cu_b,$$

where $\operatorname{Pair}(2m)$ is the finite set of partitions of $\{1,\ldots,2m\}$ into unordered two-element subsets. Thus every real polynomial $P$ in $Q$ satisfies $\mathbb E|P(Q)|<\infty$, and its expectation $\mathbb E[P(Q)]$ is computed by expanding $P$ into monomials and applying finitely many covariance pairings.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice. Let $N\ge1$, $C$ be a real symmetric positive-semidefinite matrix, and $Q\sim\gamma_C$.

[A1] The Axiom of Choice is explicitly assumed; the normal-law suppliers below use it. [[def-axiom-of-choice]]

[F1] [[def-qft-finite-euclidean-interacting-measure]] defines $\gamma_C=N_N(0,C)$ as a Borel probability law on $\mathbb R^N$. The supplied multivariate normal law exists under Choice and every linear projection $u^{\mathsf T}Q$ has law $N(0,u^{\mathsf T}Cu)$. [[def-multivariate-normal-law]]

[F2] The scalar standard normal has density $e^{-x^2/2}/\sqrt{2\pi}$, and $N(0,\sigma^2)$ is its pushforward by $x\mapsto\sigma x$, including the point mass at zero when $\sigma=0$. [[def-standard-normal-and-normal-laws]]

[F3] For $X\sim N_N(0,C)$, the characteristic function is $\varphi_X(t)=e^{-t^{\mathsf T}Ct/2}$ for $t\in\mathbb R^N$. [[lem-characteristic-function-of-a-multivariate-normal-law]]

[F4] If $\mathbb E|X|^k<\infty$, then $\varphi_X^{(j)}(t)=\mathbb E[(iX)^je^{itX}]$ for $0\le j\le k$. [[lem-moments-give-derivatives-of-the-characteristic-function]]

[F5] For $k$ measurable factors in $L^k$, their product is integrable; this follows by iterating generalized H\"older with exponents chosen so the reciprocal exponents sum to one. [[thm-generalized-holder-inequality-for-products]]

[F6] $\int_{\mathbb R}e^{-x^2}\,dx=\sqrt\pi$ and a positive scalar substitution gives the corresponding finite Gaussian integral with any positive quadratic scale. [[thm-gaussian-integral]], [[thm-substitution-for-improper-integrals]]

[F7] For $x\ge0$ and every integer $r\ge0$, $e^x\ge x^r/r!$ by the nonnegative terms in the defining power series. [[def-real-exponential-function-and-e]]

[F8] Every nonnegative real has a unique nonnegative square root. [[thm-of-square-roots]]

## Proof

**Proof technique:** direct, via scalar Gaussian moments and polarization.

1.1 Let $Z\sim N(0,1)$. For an integer $k\ge0$, choose an integer $r$ with $2r\ge k$. On $|x|\ge1$, [F7] gives $e^{x^2/4}\ge (x^2/4)^r/r!$, so $|x|^ke^{-x^2/2}\le 4^rr!e^{-x^2/4}$. The right side is integrable by [F6], and the integrand is bounded on $[-1,1]$. Since [F2] represents any scalar $N(0,v)$ as $\sqrt v Z$ with $\sqrt v$ supplied by [F8], every scalar normal has finite absolute moments of every integer order, including the degenerate $v=0$ case. [F2, F6, F7, F8, algebra]

2.1 For fixed $k\ge1$, define $T_k(u_1,\ldots,u_k):=\mathbb E\prod_{j=1}^k(u_j^{\mathsf T}Q)$. Each projection has a finite $k$th absolute moment by step 1.1 and [F1]. Applying [F5] successively shows the product is integrable. Linearity of each scalar projection and of the integral makes $T_k$ a symmetric $k$-linear form. The law exists under the stated Choice hypothesis [A1]. Since every polynomial is a finite linear combination of coordinate monomials, the triangle inequality also gives every polynomial a finite absolute moment. [A1, F1, F5, step 1.1, algebra]

3.1 On the diagonal, $T_k(u,\ldots,u)=\mathbb E[(u^{\mathsf T}Q)^k]$. Put $v=u^{\mathsf T}Cu\ge0$. By [F1], $u^{\mathsf T}Q\sim N(0,v)$, so [F3] gives its characteristic function $e^{-vt^2/2}$. At zero, [F4] gives $\varphi^{(k)}(0)=i^k\mathbb E[(u^{\mathsf T}Q)^k]$; extracting the $t^k$ coefficient of $e^{-vt^2/2}$ and dividing by $i^k$ yields zero for odd $k$, and for $k=2m$ gives $$T_{2m}(u,\ldots,u)=\frac{(2m)!}{2^m m!}v^m=(2m-1)!!\,(u^{\mathsf T}Cu)^m.$$ The identity also holds for $v=0$, when the projected law is the point mass at zero. [F1, F3, F4, F7, step 1.1, step 2.1, algebra]

4.1 For even $k=2m$, define $W_{2m}(u_1,\ldots,u_{2m})$ by the pairing sum in the Statement; for odd $k$, define $W_k=0$. This is a symmetric $k$-linear form. On the diagonal, every pairing contributes $(u^{\mathsf T}Cu)^m$, and there are $(2m-1)!!$ pairings: pair index $1$ with one of $2m-1$ indices and repeat on the remaining $2m-2$. Hence $W_k(u,\ldots,u)=T_k(u,\ldots,u)$ by step 3.1, also for odd $k$. [step 2.1, step 3.1, construct, algebra]

5.1 For $k\ge1$, two symmetric $k$-linear forms agreeing on every diagonal agree everywhere. Indeed, for their difference $A$, expand $$\sum_{\varepsilon\in\{-1,1\}^k}\left(\prod_{j=1}^k\varepsilon_j\right)A\!\left(\sum_i\varepsilon_i u_i,\ldots,\sum_i\varepsilon_i u_i\right).$$ In the multilinear expansion, the sum over signs cancels every term unless each label $1,\ldots,k$ occurs an odd number of times among the $k$ slots. Thus every surviving term uses each label once; symmetry makes all $k!$ such terms equal to $A(u_1,\ldots,u_k)$, and the sign sum is $2^k k!A(u_1,\ldots,u_k)$. Since the diagonal of $A=T_k-W_k$ vanishes by step 4.1, this sum is zero and $T_k=W_k$. For $k=0$, the empty product has expectation one and $\operatorname{Pair}(0)$ contains just the empty pairing, whose empty product is one, so the formula also holds. [step 2.1, step 4.1, given, algebra] ∎
