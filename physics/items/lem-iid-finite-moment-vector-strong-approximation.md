---
dependency_level: 4
id: lem-iid-finite-moment-vector-strong-approximation
kind: lemma
title: Finite-moment iid vectors admit a strong Gaussian approximation
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - lem-bounded-vector-log-cubed-gaussian-coupling
  - cor-existence-and-scaling-of-d-dimensional-brownian-motion
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - def-d-dimensional-brownian-motion
  - lem-uncorrelated-jointly-gaussian-blocks-are-independent
  - lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal
  - lem-finite-euclidean-space-is-standard-borel
  - lem-two-sided-mills-bounds-for-standard-normal-tail
  - thm-countable-product-of-probability-spaces
  - thm-disintegration-of-a-joint-law-on-standard-borel-spaces
  - thm-first-borel-cantelli
  - thm-ionescu-tulcea-construction-of-a-markov-chain
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: A. Yu. Zaitsev, Multidimensional version of the results of Komlós, Major and Tusnády for vectors with finite exponential moments; finite-moment dyadic truncation reduction
      url: https://www.numdam.org/item/PS_1998__2__41_0.pdf
axiom_use: Assume AC for the Gaussian and Brownian constructions, standard-Borel disintegration, countable products and Ionescu–Tulcea extension. All truncations and covariance restrictions are explicit.
---

## Statement

Assume AC. Let $X_1,X_2,\ldots$ be iid centered vectors in $\mathbb R^2$ with $E\|X_1\|^q<\infty$ for some $q>2$. For any fixed real numbers $2<p<a<q$, on an extension preserving the original process there are independent Gaussian vectors $G_i\sim N_2(0,\Sigma)$, where $\Sigma=EX_1X_1^T$, such that almost surely
$$\max_{1\le k\le n}\left\|\sum_{i=1}^k(X_i-G_i)\right\|=O\bigl(n^{1/a}[\log(en)]^3\bigr)=o(n^{1/p}).$$
The extension can also carry a standard two-dimensional Brownian motion $B$ with $\sum_{i=1}^kG_i=\Sigma^{1/2}B(k)$ for every integer $k\ge0$. Thus, in particular, the partial-sum Brownian approximation error is $O(n^{1/p}\log n)$ almost surely. Singular covariance, including $\Sigma=0$, is permitted. Neither $B$ nor $(G_i)$ is required to be independent of $(X_i)$.

## Facts & Assumptions

**Given:** AC, the centered iid vectors $X_i$, their finite $q$th absolute moment, and fixed real exponents $2<p<a<q$.

[A1] AC is assumed as in [[def-axiom-of-choice]] and the construction interfaces below.

[F1] For centered iid vectors of dimension one or two with covariance $I$ and norm at most $R\ge1$, the bounded-vector Gaussian coupling has a bound $C_A R[\log(eN)]^3$ on the maximum partial-sum discrepancy, with exceptional probability at most $C_A N^{-A}$ for every fixed $A>0$. Constants are uniform in $R,N$ and the bounded law. [[lem-bounded-vector-log-cubed-gaussian-coupling]]

[F2] A real symmetric matrix has an orthonormal eigenbasis; in particular positive definite matrices have square roots and inverse square roots obtained in that basis. [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]

[F3] Events with summable probabilities occur only finitely often almost surely. [[thm-first-borel-cantelli]]

[F4] Finite-dimensional Euclidean spaces are standard Borel, and a joint probability law on two standard-Borel spaces has a conditional probability kernel for one coordinate given the other. [[lem-finite-euclidean-space-is-standard-borel]], [[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]]

[F5] Supplied history-dependent probability kernels, with an arbitrary measurable initial probability space, admit an iterated countable extension preserving their finite-prefix laws. [[thm-ionescu-tulcea-construction-of-a-markov-chain]]

[F6] A standard normal variable satisfies $\Pr(|Z|>t)\le2e^{-t^2/2}$ for $t\ge1$, by the Mills upper bound and symmetry. [[lem-two-sided-mills-bounds-for-standard-normal-tail]]

[F7] Gaussian vectors admit their specified covariance, including singular covariance, by linear transformation of independent standard-normal coordinates; finite independent Gaussian vectors form a jointly Gaussian stack. [[def-multivariate-normal-law]], [[lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal]]

[F8] Independent Brownian copies exist in each finite dimension, and countable products of probability spaces exist under the choice principles supplied by AC. [[cor-existence-and-scaling-of-d-dimensional-brownian-motion]], [[thm-countable-product-of-probability-spaces]]

[F9] Zero cross-covariance between jointly Gaussian blocks implies their independence. Standard vector Brownian motion is characterized by continuous paths, zero start and independent normal vector increments of the specified variances. [[lem-uncorrelated-jointly-gaussian-blocks-are-independent]], [[def-d-dimensional-brownian-motion]]

## Proof

1.1 Put $V=\operatorname{ran}\Sigma$. For each vector $v$ in a deterministic finite orthonormal basis of $\ker\Sigma$, $E(v^TX_i)^2=0$, so $v^TX_i=0$ almost surely. Intersect over that basis and the countably many indices to get one full event on which every $X_i\in V$. If $V=\{0\}$, take $G_i=0$ and adjoin an independent standard two-dimensional Brownian motion by [F8]; both approximation errors vanish. Otherwise use a deterministic orthonormal eigenbasis of $\Sigma$ on $V$ and work in dimension $d=1$ or $2$, preserving Euclidean norms. Its covariance, still denoted $\Sigma$, is positive definite, with smallest eigenvalue $\lambda>0$ by [F2]. The final construction will be mapped back by the same isometry. [A1, F2, F8, given, construct, algebra]

2.1 Let $M=E\|X_1\|^q$, $N_m=2^m$, $I_m=\{2^m,\ldots,2^{m+1}-1\}$, and $L_m=N_m^{1/a}$. Set $\mu_m=E[X_1\mathbf1_{\{\|X_1\|\le L_m\}}]$ and $W_{m,i}=X_i\mathbf1_{\{\|X_i\|\le L_m\}}-\mu_m$ for $i\in I_m$. The pointwise bound $x^s\mathbf1_{\{x>L\}}\le L^{s-q}x^q$ for $0\le s\le q$ gives $\Pr(\exists i\in I_m:\|X_i\|>L_m)\le MN_mL_m^{-q}=M2^{-m(q/a-1)}$. Since $q>a$, this is summable in $m$, and [F3] gives no discarded observations in every sufficiently large block almost surely. Also $EX_1=0$ implies $\|\mu_m\|\le ML_m^{1-q}$. On a block without discarded observations the maximum partial-block difference between $X_i$ and $W_{m,i}$ is at most $MN_mL_m^{1-q}=MN_m^{1+(1-q)/a}=O(N_m^{1/a})$, since $a<q$. [F3, step 1.1, given, construct, algebra]

3.1 The truncated covariance $\Sigma_m=EW_{m,i}W_{m,i}^T$ satisfies the exact identity $\Sigma-\Sigma_m=E[X_1X_1^T\mathbf1_{\{\|X_1\|>L_m\}}]+\mu_m\mu_m^T$. Hence $\|\Sigma-\Sigma_m\|_{\mathrm{op}}\le ML_m^{2-q}+M^2L_m^{2-2q}\le CL_m^{2-q}\to0$. For all sufficiently large deterministic $m$, its eigenvalues are therefore bounded below by $\lambda/2$ and above by a fixed constant. The standardized truncated vectors $Z_{m,i}=\Sigma_m^{-1/2}W_{m,i}$ are centered iid within each block, with covariance $I_d$ and norm bounded by $R_m=C_0L_m\ge1$, after increasing a fixed $C_0$, because $\|\mu_m\|\le E\|X_1\|$ and $\|\Sigma_m^{-1/2}\|_{\mathrm{op}}\le\sqrt{2/\lambda}$. [F2, step 1.1, step 2.1, algebra]

4.1 Apply [F1] with $A=3$ separately on each such block, obtaining iid standard Gaussian vectors $H_{m,j}$, $1\le j\le N_m$. Put $\widetilde G_{m,j}=\Sigma_m^{1/2}H_{m,j}$. The operator norms of $\Sigma_m^{1/2}$ are uniformly bounded, so the maximum partial-sum discrepancy between the truncated row and this Gaussian row is at most $C N_m^{1/a}(m+1)^3$, except with probability at most $C2^{-3m}$. Here $C$ is independent of the varying truncated law and $m$, by the uniform constants in [F1]. [F1, F7, step 3.1, construct, algebra]

4.2 Set $D_m=\Sigma^{1/2}-\Sigma_m^{1/2}$. If $A=\Sigma^{1/2}$ and $C_m=\Sigma_m^{1/2}$, then $AD_m+D_mC_m=\Sigma-\Sigma_m$. Taking Frobenius inner product with $D_m$ gives $(\lambda_{\min}(A)+\lambda_{\min}(C_m))\|D_m\|_F^2\le\|D_m\|_F\|\Sigma-\Sigma_m\|_F$. Treating $D_m=0$ separately and otherwise dividing, the eigenvalue bounds of step 3.1 and equivalence of these matrix norms in dimension at most two give $\|D_m\|_{\mathrm{op}}\le C\|\Sigma-\Sigma_m\|_{\mathrm{op}}\le CL_m^{2-q}$. This uses positive definiteness only on $V$, with no inverse on covariance-kernel directions. [F2, step 1.1, step 3.1, algebra]

5.1 To realize these couplings while preserving the original process, use [F4] on each finite coupling law to obtain a kernel giving its Gaussian block conditioned on its standardized truncated block. Evaluate that kernel at the actually given $(Z_{m,i})_{i\in I_m}$. Apply [F5] with initial coordinate the entire original space $(\Omega,\mathcal F,P)$ and each subsequent coordinate its finite Gaussian block, the kernel depending on $\omega$ through that block alone. This extension keeps the original marginal. Independence of the original disjoint blocks implies, by integrating finite block rectangles, that the unconditional paired-block laws factor into the finite coupling laws; thus all $H_{m,j}$ across all blocks are independent standard Gaussians. Assign independent Gaussian blocks to the finitely many early blocks before invertibility. Their total discrepancy is finite almost surely. On the resulting extension, [F3] and the summable bounds of step 4.1 give the stated partial-block coupling bound for all sufficiently large blocks almost surely. [A1, F3, F4, F5, step 3.1, step 4.1, construct, algebra]

6.1 Put $G_{m,j}=\Sigma^{1/2}H_{m,j}$. Each coordinate of $\sum_{j=1}^kD_mH_{m,j}$, $k\le N_m$, is Gaussian with variance at most $N_m\|D_m\|_{\mathrm{op}}^2$. By [F6], a union bound over the $dN_m$ coordinates and times bounds the probability that its maximum Euclidean norm exceeds $C_1\|D_m\|_{\mathrm{op}}\sqrt{N_m(m+1)}$ by $2d2^m\exp[-C_1^2(m+1)/(2d)]$, summable in $m$ for fixed sufficiently large $C_1$. If $D_m=0$ the discrepancy is zero. Thus [F3] gives a maximum partial-block covariance-replacement error $O(N_m^{1/2}L_m^{2-q}\sqrt{m+1})$ almost surely. Its power $1/2+(2-q)/a$ is less than $1/a$ because $a<q<2(q-1)$, so this error is $O(N_m^{1/a}(m+1)^3)$. [F3, F6, F7, step 5.1, step 4.2, algebra]

7.1 Combine steps 2.1, 5.1 and 6.1 by triangle inequality. On one full event the maximum partial-block error between $X_i$ and $G_{m,j}$ is at most $C(\omega)2^{m/a}(m+1)^3$ for every $m$, after absorbing finitely many early errors into a finite random constant. Concatenate the independent Gaussian blocks into $(G_i)$. For $2^J\le n<2^{J+1}$, the global maximum is at most $C(\omega)\sum_{m=0}^J2^{m/a}(m+1)^3\le C_aC(\omega)2^{J/a}(J+1)^3=O(n^{1/a}[\log(en)]^3)$. Because $1/a<1/p$, this bound is $o(n^{1/p})$. Mapping from $V$ back to $\mathbb R^2$ preserves the error norm and gives covariance equal to the original $\Sigma$. [F7, step 1.1, step 2.1, step 5.1, step 6.1, algebra]

8.1 To produce the Brownian driver, retain the independent standardized Gaussian increments in the effective eigenbasis of $\Sigma$. If $d=1$, adjoin independent standard Gaussian increments in its orthogonal complement by [F7] and [F8]. For each coordinate and each integer interval, adjoin an independent Brownian motion $W_{i,l}$ by [F8], independent of all existing variables, and form its bridge $\beta_{i,l}(t)=W_{i,l}(t)-tW_{i,l}(1)$, $0\le t\le1$. The bridges are centered Gaussian with covariance $\min(s,t)-st$ and zero endpoints. Interpolate each standardized Gaussian random walk on $[k,k+1]$ by its linear increment plus $\beta_{k+1,l}$, independently for the two coordinates. By [F7], finite stacks are Gaussian; direct covariance calculation gives covariance $\min(s,t)$ within each coordinate and zero cross-coordinate covariance. Paths are continuous, including at integer joins. The covariance calculation makes vector increments over disjoint time intervals uncorrelated; finite joint Gaussianity and [F9] make them independent with covariance equal to interval length times $I_2$, so [F9] identifies standard two-dimensional Brownian motion. Applying the deterministic orthogonal eigenbasis map makes a standard two-dimensional $B$ and yields $\sum_{i=1}^kG_i=\Sigma^{1/2}B(k)$ for every integer $k$. Step 7.1 supplies the asserted Brownian approximation and its weaker $O(n^{1/p}\log n)$ rate. [F2, F7, F8, F9, step 1.1, step 5.1, step 7.1, construct, algebra] ∎
