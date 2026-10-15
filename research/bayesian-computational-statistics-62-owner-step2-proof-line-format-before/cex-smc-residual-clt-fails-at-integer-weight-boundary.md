---
id: cex-smc-residual-clt-fails-at-integer-weight-boundary
kind: counterexample
title: "Residual resampling is discontinuous at positive integer weights"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-smc-clt-function-classes-and-variance-recursions
  - alg-multinomial-and-residual-offspring-resampling
  - thm-lindeberg-levy-iid-central-limit-theorem
  - thm-slutsky-for-real-random-variables
  - thm-continuous-mapping-theorem
proof_strategy: direct
axiom_use: "The two-point model and conditional residual counts use no additional choice; the CLT normalization uses AC only through its cited IID CLT supplier."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, Theorem 2 and Appendix A.4"
      url: "https://arxiv.org/pdf/math/0508594"
---

## Statement refuted

Under the recursive weighted-moment class and normalization hypotheses in [[def-smc-clt-function-classes-and-variance-recursions]], the residual offspring covariance is always the displayed $R_t(\phi)$ computed from the limiting fractional parts $r(\upsilon_t)$, including when the importance-weight law has an atom at a positive integer.

## Facts & Assumptions

**Given:** The CLT classes and residual covariance formula in the cited definition, and the standard normalized-weight residual procedure.

[F1] [[def-smc-clt-function-classes-and-variance-recursions]]: $\upsilon_t=d\pi_t/d\widetilde\pi_t$ has $\widetilde\pi_t$-mean one; the formal source candidate $R_t^{\mathrm{cand}}$ is computed from $r(\upsilon_t)$.

[F2] [[alg-multinomial-and-residual-offspring-resampling]]: With normalized input weights $p_i$, residual resampling uses floors $\lfloor Np_i\rfloor$ and distributes the remaining $N-\sum_i\lfloor Np_i\rfloor$ children according to normalized fractional remainders.

[F3] [[thm-lindeberg-levy-iid-central-limit-theorem]]: IID real variables with finite positive variance have the usual normalized Gaussian sample-mean limit.

[F4] [[thm-slutsky-for-real-random-variables]]: Multiplying a distributionally convergent variable by a factor converging in probability to a constant gives the corresponding scaled limit.

[F5] [[thm-continuous-mapping-theorem]]: A measurable map continuous outside a null set of the limiting law preserves weak convergence.

## Counterexample

**Given:** At time $0$, let the proposal law on $\{A,B\}$ be $\widetilde\pi_0(A)=1/4$, $\widetilde\pi_0(B)=3/4$. Let the target be $\pi_0(A)=\pi_0(B)=1/2$, with Radon–Nikodym weights $\upsilon_0(A)=2$, $\upsilon_0(B)=2/3$. Use $\phi=\mathbf1_{\{A\}}$. Both weights are positive and finite, $\phi$ is bounded, and $\widetilde\pi_0(r(\upsilon_0))=1/2>0$.

1.1 For $N$ IID proposal particles, let $M_N$ be the number at $A$ and $p_N=M_N/N$. The weighted empirical estimate is
$$S_N=\frac{2M_N}{2M_N+(2/3)(N-M_N)}=\frac{3p_N}{1+2p_N}.$$
Since $M_N$ is binomial with parameters $(N,1/4)$, [F3] gives $\sqrt N(p_N-1/4)\Rightarrow N(0,3/16)$. The identity $\sqrt N(S_N-1/2)=2\sqrt N(p_N-1/4)/(1+2p_N)$ and [F4] yield $Z_N:=\sqrt N(S_N-1/2)\Rightarrow Z\sim N(0,1/3)$. Moreover, $Z_N>0$ exactly when $p_N>1/4$. [F3, F4, given, algebra]

1.2 The limiting-weight candidate in [F1] gives $r(2)=0$ and $r(2/3)=2/3$. Because $\phi(B)=0$, both $\widetilde\pi_0(r(\upsilon_0)\phi^2)$ and $\widetilde\pi_0(r(\upsilon_0)\phi)$ are zero, so $R_0^{\mathrm{cand}}(\phi)=0$. If used as a universal residual CLT variance, it predicts a post-resampling Gaussian limit with variance $V_0(\phi)=\widetilde\pi_0[\upsilon_0^2(\phi-1/2)^2]=1/3$. [F1, given, algebra]

2.1 Put $\bar w_N=2/3+(4/3)p_N$ and $u_A=2/\bar w_N$, $u_B=(2/3)/\bar w_N$. On $1/4<p_N<1/3$, the normalized residual sizes are $u_A\in(1,2)$ and $u_B\in(0,1)$; hence each $A$ particle receives one deterministic child, each $B$ particle receives none, and $R=N-M_N$ children are sampled from the remainders. If $X_N$ is the number of residual children at $A$, then conditionally on the proposal sample, $X_N\sim\mathrm{Bin}(R,a_N)$ with $a_N=M_N(u_A-1)/R$. As $p_N\downarrow1/4$, $R/N\to3/4$ and $a_N\to1/3$. [F2, given, algebra]

2.2 On that event, the post-resampling mean is $(M_N+X_N)/N$ and its conditional mean is $S_N$. A Taylor expansion of the binomial characteristic function, uniform for $0\le a_N\le1$ and $R\le N$, gives
$$\mathbb E\!\left[\exp\!\left(iu\frac{X_N-Ra_N}{\sqrt N}\right)\middle|M_N\right]=\exp\!\left(-\frac{u^2}{2}\frac RN a_N(1-a_N)+O(N^{-1/2})\right).$$
Thus, on the positive branch $p_N>1/4$, the extra resampling fluctuation has limiting variance $(3/4)(1/3)(2/3)=1/6$. [F2, step 2.1, algebra]

3.1 On the negative branch with $p_N<1/4$ and $p_N\to1/4$, one has $u_A\in(2,3)$ and $u_B\in(0,1)$. The floor for each $A$ particle is two, and its total fractional remainder is $M_N(u_A-2)=O_P(\sqrt N)$, because $u_A-2=2(1/\bar w_N-1)=O_P(|p_N-1/4|)$. Conditional variance of the residual $A$ count is at most this total remainder. Consequently the variance of $\sqrt N$ times the post-resampling proportion about its weighted conditional mean is $O_P(N^{-1/2})$, so the extra resampling fluctuation tends to zero in probability on the negative branch. The events $p_N\notin(1/5,1/3)$ have probability tending to zero by [F3]. [F2, F3, step 2.1, algebra]

3.2 Put $U_N=\sqrt N(\check\eta_0^N(\phi)-S_N)$, the post-resampling fluctuation centered at the weighted mean, and condition on the proposal count $M_N$. For any real $v,s$, steps 2.2–3.1 and the negligible exceptional event show that $\mathbb E[e^{isU_N}\mid M_N]$ converges in probability to $e^{-s^2/12}$ when $Z_N>0$ and to $1$ when $Z_N<0$. Since $Z_N\Rightarrow Z$ and $P(Z=0)=0$, [F5] gives
$$\mathbb E[e^{ivZ_N+isU_N}]\longrightarrow\mathbb E\!\left[e^{ivZ}\left(\mathbf1_{\{Z>0\}}e^{-s^2/12}+\mathbf1_{\{Z<0\}}\right)\right].$$
This is the joint characteristic function of $(Z,\mathbf1_{\{Z>0\}}W)$ for an independent $W\sim N(0,1/6)$, so the post-resampling limit is $Z+\mathbf1_{\{Z>0\}}W$. Its mean is zero and its third moment is $3\mathbb E[Z\mathbf1_{\{Z>0\}}]\mathbb E[W^2]>0$, so it is not Gaussian. This contradicts the variance-$1/3$ Gaussian predicted in step 1.2. [F5, step 1.1, step 2.2, step 3.1, step 1.2, algebra] ∎
