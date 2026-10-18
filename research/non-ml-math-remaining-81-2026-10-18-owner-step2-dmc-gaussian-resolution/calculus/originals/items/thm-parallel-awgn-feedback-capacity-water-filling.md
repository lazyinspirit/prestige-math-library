---
id: thm-parallel-awgn-feedback-capacity-water-filling
kind: theorem
title: Capacity of finite parallel Gaussian channels with and without feedback
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps: [def-axiom-of-choice, def-parallel-awgn-feedback-code, def-parallel-gaussian-channel-with-power-constraint, lem-finite-message-fano-for-density-observation, lem-gaussian-noise-orthogonalization, lem-jensen-for-integrable-cost-random-variable, lem-parallel-awgn-cost-constrained-achievability, lem-parallel-awgn-single-use-information-bound, lem-water-filling-optimal-allocation, def-natural-logarithm, thm-logarithm-derivative-and-integral, thm-nondegenerate-multivariate-normal-law-has-density]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: AC is inherited from the Gaussian channel law and orthogonal-normal invariance supplier; the converse and finite-block coding arguments add no choice principle.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 20 §§20.3–20.4 and Chapter 23 §23.1"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "Yury Polyanskiy, MIT 6.441 Information Theory, Chapter 17 §§17.3.1–17.3.2 and Chapter 21 §21.1"
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/24fb44b6a101e847c32ffe38bbeeea6e_MIT6_441S16_chapter_17.pdf
---

## Statement

Assume AC and use the finite-dimensional channel of dimension $d$ and covariance $K$ from [[def-parallel-gaussian-channel-with-power-constraint]]. Let $\lambda_1,\ldots,\lambda_d>0$ be the eigenvalues of $K$ and put $\lambda_{\min}:=\min_j\lambda_j$. Both the ordinary no-feedback capacity $C_{\rm nf}(P)$ and the causal-feedback capacity $C_{\rm fb}(P)$ defined in [[def-parallel-awgn-feedback-code]] equal
$$C_K(P)=\max_{p_j\ge0,\,\sum_jp_j\le P}\frac12\sum_{j=1}^d\ln\left(1+\frac{p_j}{\lambda_j}\right)=\frac12\sum_{j=1}^d\ln^+\!\left(\frac{T}{\lambda_j}\right),$$
where $T$ is the unique water level solving $\sum_j(T-\lambda_j)^+=P$ when $P>0$; for $P=0$, $C_K(0)=0$ and all $p_j=0$. Thus feedback does not increase capacity.

## Facts & Assumptions

**Given:** AC, a finite-dimensional additive Gaussian channel with positive-definite covariance, a finite-message code, and an expected average-power budget.

[A1] [[def-axiom-of-choice]] and [[def-parallel-gaussian-channel-with-power-constraint]]: the Gaussian channel has independent fresh $N_d(0,K)$ noises and uses squared Euclidean norm as cost under AC.

[A2] [[def-parallel-awgn-feedback-code]]: each causal encoder has the form $f_t(M,Y^{t-1})$, the decoder is measurable, and the power constraint is expected average input energy.

[F1] [[lem-gaussian-noise-orthogonalization]]: orthogonal coordinates diagonalize $K$ and preserve power and code/error correspondence.

[F2] [[lem-parallel-awgn-single-use-information-bound]]: for every finite-support vector input of second moment at most $u$, its one-use mutual information is at most $C_K(u)$.

[F3] [[lem-water-filling-optimal-allocation]]: $C_K(u)$ is the maximum allocation value and is nondecreasing and concave.

[F4] [[lem-jensen-for-integrable-cost-random-variable]]: for integrable $U\ge0$, the finite concave function $C_K$ satisfies $\mathbb E C_K(U)\le C_K(\mathbb E U)$.

[F5] [[lem-finite-message-fano-for-density-observation]]: for an $N$-message variable observed through conditional densities and decoded with error $e$, $H(M\mid Y)\le\ln2+e\ln N$.

[F6] [[lem-parallel-awgn-cost-constrained-achievability]]: every rate below the Gaussian-input mutual information of a strict allocation is achievable with no feedback under the average power budget.

[F7] [[thm-nondegenerate-multivariate-normal-law-has-density]]: positive-definite Gaussian noise has a positive Lebesgue density.

[F8] [[def-natural-logarithm]]: $\ln$ is the natural logarithm.

[F9] [[thm-logarithm-derivative-and-integral]]: $\ln'(x)=1/x$ for $x>0$, so integrating its derivative gives $\ln(1+x)\le x$ for $x\ge0$ and continuity of the finite rate expression.

## Proof

1.1 Use [F1] to express the channel in independent scalar branches. For a feedback code from [A2], conditional on each message $m$ the output vector has density
$$p(y^n\mid m)=\prod_{t=1}^n\phi_K\bigl(y_t-f_t(m,y^{t-1})\bigr),$$
where $\phi_K(z)=(2\pi)^{-d/2}(\det K)^{-1/2}\exp(-z^TK^{-1}z/2)$ is positive by [F7]. Thus [F5] applies. Since $M$ is finite, define $I(M;Y^n)=H(M)-H(M\mid Y^n)$ using the posterior density of [F5]. Bayes' formula factors $\Pr(M=m\mid Y^n)/\Pr(M=m)$ into the product over $t$ of $p(Y_t\mid M=m,Y^{t-1})/p(Y_t\mid Y^{t-1})$; taking logarithms and expectations proves $I(M;Y^n)=\sum_t I(M;Y_t\mid Y^{t-1})$. At a fixed history, $X_t=f_t(M,h)$ has finite support; grouping the finite mixture terms for messages with the same input shows $I(M;Y_t\mid h)=I(X_t;Y_t\mid h)$ because their conditional output densities are identical. Hence [F2] bounds this by $C_K(u_{t,h})$, where $u_{t,h}=\mathbb E[\|X_t\|^2\mid h]$. [A1, A2, F1, F2, F5, F7, given, algebra]

2.1 Let $T$ be uniform on $[n]$, independent of the channel, and let $H=Y^{T-1}$ and $U=u_{T,H}$. Then $U\ge0$ and $\mathbb E U=n^{-1}\sum_t\mathbb E\|X_t\|^2\le P$. For every allocation with total power at most $u$, [F8]--[F9] give $\frac12\sum_j\ln(1+p_j/\lambda_j)\le\frac12\sum_jp_j/\lambda_j\le u/(2\lambda_{\min})$; hence $C_K(U)$ is integrable. Apply [F4] to step 1.1 and then monotonicity of $C_K$ to obtain $I(M;Y^n)\le nC_K(\mathbb E U)\le nC_K(P)$. [F3, F4, F8, F9, step 1.1, given, algebra]

3.1 If $N=1$ the rate is zero. If $N\ge2$, [F5] and $H(M)=\ln N$ give $I(M;Y^n)\ge(1-e)\ln N-\ln2$. Combining with step 2.1 shows every reliable feedback rate is at most $C_K(P)$. The no-feedback capacity is bounded by the same argument because no-feedback codes are a subclass. [F5, step 2.1, given, algebra, cases]

4.1 If $P=0$, expected total input energy is zero, so each nonnegative $\|X_t\|^2$ is zero almost surely; outputs are then independent of the message and step 3.1 gives zero reliable rate. One-message codes attain rate zero. If $P>0$, [F3] supplies the allocation $p_j^*$ with total power $P$. For any $R<C_K(P)$ choose $\epsilon>0$ so the strict allocation $(1-\epsilon)p^*$ has Gaussian mutual information greater than $R$; continuity from [F9] gives such an $\epsilon$. Apply [F6] to obtain no-feedback codes at every such rate, and therefore also feedback codes. Letting $R\uparrow C_K(P)$ proves both lower bounds, including the case $C_K(P)=0$ by a one-message code. [F3, F6, F9, step 3.1, given, cases, algebra] ∎