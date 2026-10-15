---
dependency_level: 0
id: thm-summable-l-two-projections-give-stationary-clt
kind: theorem
title: Summable conditional projections give a stationary martingale CLT
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-axiom-of-choice
  - def-ergodic-measure-preserving-system
  - def-moments-variance-and-covariance
  - cor-cauchy-schwarz-for-random-variables
  - cor-conditional-lp-contraction
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-tower-property-of-conditional-expectation
  - thm-taking-out-what-is-known
  - thm-riesz-fischer-completeness-of-l-p
  - thm-stationary-process-birkhoff-ergodic-limit
  - thm-martingale-central-limit-theorem
  - thm-dominated-convergence
  - thm-lp-convergence-implies-convergence-in-probability
  - thm-converging-together-lemma
  - thm-continuous-mapping-theorem
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Mikhail Gordin and Magda Peligrad, On the functional central limit theorem via martingale approximation, §1 and full martingale construction in §2; the absolutely summable specialization is derived locally
      url: https://arxiv.org/pdf/0910.3448
axiom_use: AC is inherited from conditional expectation, L2 completeness, Birkhoff, and the martingale-array CLT; no additional choice principle is used.
---

## Statement

Assume AC. Let $T$ be an invertible bimeasurable probability-preserving transformation on $(\Omega,\mathcal A,Q)$ such that $Q(A\mathbin\triangle T^{-1}A)=0$ implies $Q(A)\in\{0,1\}$. Let $X_0\in L^2(Q)$ be real and centered, put $X_k=X_0\circ T^k$ for $k\in\mathbb Z$, and put $\mathcal F_k=\sigma(X_i:i\le k)$. Suppose
$$\sum_{j=1}^{\infty}\|\mathbb E[X_j\mid\mathcal F_0]\|_2<\infty.$$
Then the $L^2$ series $H_0=\sum_{j\ge1}\mathbb E[X_j\mid\mathcal F_0]$ converges. Put $H_k=H_0\circ T^k$ and $D_k=X_k+H_k-H_{k-1}$. The $D_k$ are stationary square-integrable martingale differences for $\mathcal F_k$, and for $n\ge1$,
$$S_n:=\sum_{k=1}^nX_k=\sum_{k=1}^nD_k+H_0-H_n,\qquad \|H_0-H_n\|_2\le2\|H_0\|_2.$$
With $\tau^2=\mathbb E[D_1^2]$,
$$S_n/\sqrt n\Rightarrow N(0,\tau^2),$$
including $\tau^2=0$. If additionally $\sum_{j\ge1}|\operatorname{Cov}(X_0,X_j)|<\infty$, then
$$\tau^2=\mathbb E[X_0^2]+2\sum_{j=1}^{\infty}\operatorname{Cov}(X_0,X_j).$$

## Facts & Assumptions

**Given:** AC, the invertible probability-preserving ergodic transformation $T$, centered real $X_0\in L^2(Q)$, its stationary translates, natural past filtration, and the displayed summability assumption.

[A1] AC supplies the inherited choices for the following conditional-expectation and limit suppliers. ([[def-axiom-of-choice]])

[F1] Conditional expectation is linear, preserves expectation and constants, and contracts the real $L^2$ norm. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]], [[cor-conditional-lp-contraction]])

[F2] Conditional expectations satisfy the tower property and allow a known measurable factor to be taken out when the input and the required products are integrable. ([[thm-tower-property-of-conditional-expectation]], [[thm-taking-out-what-is-known]])

[F3] Under countable choice $L^2$ is complete. ([[thm-riesz-fischer-completeness-of-l-p]])

[F4] Square-integrable products satisfy Cauchy–Schwarz. ([[cor-cauchy-schwarz-for-random-variables]])

[F5] A stationary integrable process with ergodic canonical shift has averages converging almost surely to its expectation. Ergodicity requires invariant events to have probability zero or one. ([[thm-stationary-process-birkhoff-ergodic-limit]], [[def-ergodic-measure-preserving-system]])

[F6] A square-integrable martingale-difference array with terminal conditional variance clock tending to $1$ in probability and vanishing unconditional Lindeberg sums has terminal sum converging to $N(0,1)$. ([[thm-martingale-central-limit-theorem]])

[F7] Dominated convergence passes limits through integrals dominated by an integrable function. ([[thm-dominated-convergence]])

[F8] $L^2$ convergence implies convergence in probability; a perturbation tending to zero in probability preserves a weak limit; continuous scaling preserves weak convergence. ([[thm-lp-convergence-implies-convergence-in-probability]], [[thm-converging-together-lemma]], [[thm-continuous-mapping-theorem]])

[F9] Variance and covariance are centered second and product moments. ([[def-moments-variance-and-covariance]])

## Proof

1.1 For an integrable $Z$ and any integer $k$, the variable $\mathbb E[Z\mid\mathcal F_0]\circ T^k$ is $\mathcal F_k$ measurable because the pullback of $\mathcal F_0$ by $T^k$ is $\mathcal F_k$. Every event in $\mathcal F_k$ is the pullback of an event in $\mathcal F_0$, since $T$ is invertible and bimeasurable. Changing variables under the probability-preserving bijection $T^k$ proves that the integrals of this candidate and $Z\circ T^k$ agree over every $\mathcal F_k$ event. Uniqueness of conditional expectation therefore gives $\mathbb E[Z\circ T^k\mid\mathcal F_k]=\mathbb E[Z\mid\mathcal F_0]\circ T^k$ as almost-everywhere classes. [A1, F1, given]

1.2 By summability and [F3], the partial sums defining $H_0$ are Cauchy in $L^2(\mathcal F_0)$ and have a limit there. Composition with $T^k$ is an $L^2$ isometry, so step 1.1 yields $H_k=\sum_{j\ge1}\mathbb E[X_{k+j}\mid\mathcal F_k]$ in $L^2$, with $H_k$ measurable in $\mathcal F_k$ and $\|H_k\|_2=\|H_0\|_2$. Representatives may be fixed for the countably many indices; discard a countable union of null sets for their identities. [A1, F3, step 1.1, given, construct]

1.3 By [F1], conditional expectation is continuous in $L^2$. Apply [F2]'s tower property to the partial sums in step 1.2 and pass to the $L^2$ limit to obtain $\mathbb E[H_k\mid\mathcal F_{k-1}]=\sum_{j\ge1}\mathbb E[X_{k+j}\mid\mathcal F_{k-1}]=H_{k-1}-\mathbb E[X_k\mid\mathcal F_{k-1}]$. Thus $D_k=X_k+H_k-H_{k-1}$ is square-integrable and $\mathcal F_k$ measurable, with $\mathbb E[D_k\mid\mathcal F_{k-1}]=0$. Also $D_k=D_1\circ T^{k-1}$, so the differences are stationary. Summing their defining identity gives $S_n=M_n+R_n$, where $M_n=\sum_{k=1}^nD_k$, $R_n=H_0-H_n$, and $\|R_n\|_2\le2\|H_0\|_2$. In particular $R_n/\sqrt n\to0$ in $L^2$ and hence in probability by [F8]. [F1, F2, F8, step 1.1, step 1.2, algebra]

2.1 Put $q_0=\mathbb E[D_1^2\mid\mathcal F_0]$. It is nonnegative, integrable, and has expectation $\tau^2=\mathbb E[D_1^2]$ by [F1]. Step 1.1 gives $\mathbb E[D_k^2\mid\mathcal F_{k-1}]=q_0\circ T^{k-1}$. The map $\omega\mapsto(q_0(T^j\omega))_{j\ge0}$ intertwines $T$ with the canonical one-sided shift. Hence a shift-invariant event for this process pulls back to a $T$-invariant event modulo null sets, whose probability is zero or one by the assumed ergodicity. The process is stationary, integrable and ergodic, so [F5] gives $n^{-1}\sum_{k=1}^n\mathbb E[D_k^2\mid\mathcal F_{k-1}]\to\tau^2$ almost surely. The limiting variance is therefore a constant. [F1, F5, step 1.1, step 1.3, given]

2.2 If $\tau^2>0$, let $Z_{n,k}=D_k/(\tau\sqrt n)$ for $1\le k\le n$, and let $Z_{n,k}=0$ for $k>n$; use the filtration $\mathcal F_{n,k}=\mathcal F_{\min(k,n)}$ for $k\ge0$. Step 1.3 makes each row a square-integrable martingale-difference row. The row sums and clocks are eventually constant, and step 2.1 shows their terminal clocks converge almost surely to $1$. For every $\varepsilon>0$, stationarity gives $\sum_{k\ge1}\mathbb E[Z_{n,k}^2\mathbf1_{\{|Z_{n,k}|>\varepsilon\}}]=\tau^{-2}\mathbb E[D_1^2\mathbf1_{\{|D_1|>\varepsilon\tau\sqrt n\}}]\to0$ by [F7]. Thus [F6] gives $M_n/(\tau\sqrt n)\Rightarrow N(0,1)$. Scaling and the perturbation in step 1.3 give $S_n/\sqrt n\Rightarrow N(0,\tau^2)$ by [F8]. [A1, F6, F7, F8, step 1.3, step 2.1, construct]

2.3 If $\tau^2=0$, stationarity implies $\mathbb E[D_k^2]=0$ for every $k$, so $M_n=0$ almost surely. Step 1.3 gives $S_n/\sqrt n\to0$ in $L^2$ and hence in probability. The constant sequence $0$ has weak limit the point mass $N(0,0)$; [F8] transfers that limit to $S_n/\sqrt n$. This establishes the asserted CLT in both variance cases. [F8, step 1.3, step 2.2, given]

3.1 Suppose the additional covariance summability holds, and put $\gamma_j=\operatorname{Cov}(X_0,X_j)$. Stationarity and expansion of the finite square give $\operatorname{Var}(S_n)/n=\gamma_0+2\sum_{j=1}^{n-1}(1-j/n)\gamma_j\to\gamma_0+2\sum_{j\ge1}\gamma_j$, by [F7] on counting measure with summable dominator $|\gamma_j|$. For $i<j$, $D_i$ is $\mathcal F_{j-1}$ measurable, so [F2], [F4], and step 1.3 give $\mathbb E[D_iD_j]=0$. Therefore $\mathbb E[M_n^2]=n\tau^2$. The identity $S_n=M_n+R_n$ and [F4] imply $|\mathbb E[S_n^2]-n\tau^2|/n\le\|R_n\|_2^2/n+2\|R_n\|_2\tau/\sqrt n\to0$, since $\|R_n\|_2$ is bounded. All $S_n$ are centered, so [F9] identifies the two variance limits and proves the stated covariance formula, including $\tau^2=0$. [F2, F4, F7, F9, step 1.3, given] ∎

## Source notes

The absolutely summable projection assumption permits an exact $L^2$ coboundary series, so no maximal martingale approximation theorem is imported. The deterministic variance follows from the explicitly assumed ergodicity and its factor argument. The covariance identity is obtained from second moments, independently of convergence in distribution.
