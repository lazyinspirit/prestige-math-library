---
id: alg-predictor-corrector-score-sampling
kind: algorithm
title: Predictor-corrector sampling for score SDEs
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: score-sdes-and-reverse-time-generation
dependency_level: 3
axiom_base: Full AC
axiom_use: "Full AC is stated for the current unbounded-start reversal proof and is used by the Brownian and multivariate normal interfaces."
deps:
  - alg-unadjusted-langevin-algorithm
  - def-axiom-of-choice
  - def-continuous-brownian-ito-process
  - def-d-dimensional-brownian-motion
  - def-marginal-score-function
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - thm-markov-diffusion-reversal-by-bayes-kernels
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Yang Song et al., Score-Based Generative Modeling through Stochastic Differential Equations, Section 4.2 and Appendix G"
      url: "https://arxiv.org/pdf/2011.13456"
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations, Algorithm 8.1"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
    - title: "Alain Durmus and Éric Moulines, Non-asymptotic convergence analysis for the Unadjusted Langevin Algorithm, Section 1, equation (2)"
      url: "https://arxiv.org/pdf/1507.05021v3"
    - title: "Maxim Raginsky, Stochastic Differential Equations: A Systems-Theoretic Approach, Section 7.2"
      url: "https://maxim.ece.illinois.edu/teaching/spring23/SDE_book.pdf"
---

## Definition

Assume the Axiom of Choice. Fix $T>0$, $0<\epsilon<T$, an integer $d\ge1$, and an integer $N\ge1$. Let $X_t\in\mathbb R^d$ be a continuous nonexplosive Markov diffusion on $[\epsilon,T]$, where nonexplosive means its paths remain in $\mathbb R^d$ on the whole interval, and Markov means its conditional future law given the past depends only on its current state. Write $P_t(A)=P(X_t\in A)$ for its law on each Borel set $A$. On a complete filtered probability space with the usual conditions, let $W$ be an adapted standard $d$-dimensional Brownian motion whose increments are independent of the earlier filtration and have laws $N_d(0,(t-s)I_d)$. Let $b_t(x)\in\mathbb R^d$ and $\sigma_t(x)\in\mathbb R^{d\times d}$ be Borel maps. The process is a continuous Brownian Itô process in the sense that, up to indistinguishability,

$$X_t=X_\epsilon+\int_\epsilon^t b_r(X_r)\,dr+\left(\sum_{j=1}^d\int_\epsilon^t\sigma_{ij}(r,X_r)\,dW_r^j\right)_{i=1}^d,$$

where the drift integrals are pathwise Lebesgue integrals and the coordinate stochastic integrals are localized Itô integrals; assume $\int_\epsilon^T|b_r(X_r)|\,dr<\infty$ and $\int_\epsilon^T\|\sigma_r(X_r)\|_F^2\,dr<\infty$ almost surely, with $\|M\|_F^2=\sum_{i,j}|M_{ij}|^2$. Assume also that $\sigma_t(x)$ is invertible with $\sup_{t,x}\|\sigma_t(x)^{-1}\|<\infty$. Put $a_t(x)=\sigma_t(x)\sigma_t(x)^{\mathsf T}$. A transition density $q(s,x;t,y)$ means that $P(X_t\in dy\mid X_s=x)=q(s,x;t,y)\,dy$.

Assume the marginal densities $p_t$ and transition densities $q(s,x;t,y)$ are positive, finite, and normalized with respect to Lebesgue measure; $p_t$ has one continuous time derivative and two continuous state derivatives. For $\epsilon\le s<t\le T$, assume

$$p_t(y)=\int_{\mathbb R^d}p_s(x)q(s,x;t,y)\,dx,\qquad q(s,x;t,y)=\int_{\mathbb R^d}q(s,x;r,z)q(r,z;t,y)\,dz\quad(s<r<t).$$

For $L_t\phi=b_t\cdot\nabla\phi+\tfrac12\sum_{i,j}a_{t,ij}\partial_i\partial_j\phi$, define $L_t^*r=-\sum_i\partial_i(b_{t,i}r)+\tfrac12\sum_{i,j}\partial_i\partial_j(a_{t,ij}r)$. Assume $\partial_t p_t=L_t^*p_t$ and $\partial_tq(s,x;t,y)=L_t^{*,y}q(s,x;t,y)$ classically. For every compactly supported smooth test, assume transition integrals and their time derivatives are absolutely integrable, differentiation under those integrals is valid, and integration by parts in space has no boundary term.

For $0\le u<T-\epsilon$, set $s=T-u$ and define the reverse score $s_s(x)=\nabla_x\log p_s(x)$. With $a=\sigma\sigma^{\mathsf T}$ and $(\nabla\!\cdot a)_i=\sum_j\partial_j a_{ij}$, define the reverse drift supplied by the positive-density reversal interface:

$$\widetilde b_u(x)=-b_{T-u}(x)+(\nabla\!\cdot a_{T-u})(x)+a_{T-u}(x)s_{T-u}(x),\qquad \widetilde\sigma_u(x)=\sigma_{T-u}(x).$$

Write $C_c^\infty(\mathbb R^d)$ for infinitely differentiable real functions with compact support. For $\phi\in C_c^\infty(\mathbb R^d)$, define $\widetilde L_u\phi=\widetilde b_u\cdot\nabla\phi+\tfrac12\sum_{i,j}a_{T-u,ij}\partial_i\partial_j\phi$. Assume that for every reverse initial law the martingale problem for $\widetilde L_u$ has a unique nonexplosive continuous solution in law; this means that each compact-test compensated process $\phi(Y_u)-\phi(Y_0)-\int_0^u\widetilde L_r\phi(Y_r)\,dr$ is a local martingale and its law is unique. The current reversal supplier's proof uses AC through its Brownian-reconstruction lemma, so AC is an explicit algorithm assumption here.

Set $S=T-\epsilon$, $h=S/N$, $u_k=kh$, and $t_k=T-u_k$ for $0\le k\le N$. Given step sizes $\eta_k>0$, the **predictor-corrector score-sampling algorithm** takes an initial draw $Y_0\sim P_T$ and mutually independent vectors $G_k,\xi_k\sim N_d(0,I_d)$, independent of $Y_0$. For $k=0,\ldots,N-1$, perform the following two operations:

1. **Predictor.** Compute one Euler–Maruyama step for the reverse equation:
   $$\widehat Y_{k+1}=Y_k+h\widetilde b_{u_k}(Y_k)+\sqrt h\,\widetilde\sigma_{u_k}(Y_k)G_k.$$

2. **Corrector.** Let $U_{k+1}(x)=-\log p_{t_{k+1}}(x)$, so $e^{-U_{k+1}}$ is the normalized target density $p_{t_{k+1}}$. Apply one unadjusted Langevin update with step size $\eta_k$:
   $$Y_{k+1}=\widehat Y_{k+1}-\eta_k\nabla U_{k+1}(\widehat Y_{k+1})+\sqrt{2\eta_k}\,\xi_k=\widehat Y_{k+1}+\eta_k s_{t_{k+1}}(\widehat Y_{k+1})+\sqrt{2\eta_k}\,\xi_k.$$

Return $Y_N$, the finite-step state at forward time $\epsilon$. The procedure requires an exact marginal score on $[\epsilon,T]$ and starts from the actual terminal law $P_T$; it does not replace $P_T$ by $N_d(0,I_d)$ unless they are equal.

## Definition references

[[thm-markov-diffusion-reversal-by-bayes-kernels|The positive-density Bayes-kernel reversal theorem]] is applied with horizon $S=T-\epsilon$ to $\overline X_r=X_{\epsilon+r}$, $0\le r\le S$, on the shifted filtration $\overline{\mathcal F}_r=\mathcal F_{\epsilon+r}$ and with Brownian motion $\overline W_r=W_{\epsilon+r}-W_\epsilon$. Brownian increments remain independent of $\overline{\mathcal F}_r$ by the original increment hypothesis, and the shifted filtration retains the usual conditions. The shifted coefficients are $\overline b_r(x)=b_{\epsilon+r}(x)$ and $\overline\sigma_r(x)=\sigma_{\epsilon+r}(x)$; changing variables in the Lebesgue and elementary stochastic integrals, then passing to their localized limits, gives $d\overline X_r=\overline b_r(\overline X_r)dr+\overline\sigma_r(\overline X_r)d\overline W_r$. Its marginal densities are $\overline p_r=p_{\epsilon+r}$ and its transition densities are $\overline q(r,x;s,y)=q(\epsilon+r,x;\epsilon+s,y)$. Positivity, normalization, Markov identities, forward equations, uniform nonsingularity, integrability, and the assumed reverse martingale problem transfer by this deterministic time translation. Its reverse process is $\overline X_{S-u}=X_{T-u}$ with natural reversed filtration $\mathcal G_u=\sigma(X_{T-v}:0\le v\le u)$, and its Bayes kernels become $$\overline K_{u,v}(y,dx)=\frac{p_{T-v}(x)q(T-v,x;T-u,y)}{p_{T-u}(y)}dx,\qquad0\le u<v\le S.$$ The supplier therefore gives precisely the displayed reverse coefficients and a Brownian driver in this reversed filtration, retaining Borel time dependence of $\sigma$.

[[def-marginal-score-function|The marginal score definition]] sets $s_t(x)=\nabla_x\log p_t(x)$ where the density is positive and differentiable.

[[def-d-dimensional-brownian-motion|The finite-dimensional Brownian convention]]

and [[def-continuous-brownian-ito-process|the Brownian Itô-process convention]] fix the increment, filtration, and localized integral assumptions used in the forward diffusion input.

[[alg-unadjusted-langevin-algorithm|The unadjusted Langevin algorithm]] supplies the one-step corrector used at each time level.

[Song et al., Section 4.2 and Appendix G, Algorithm 1](https://arxiv.org/pdf/2011.13456)

[Särkkä and Solin, Algorithm 8.1](https://users.aalto.fi/~asolin/sde-book/sde-book.pdf)

[Durmus and Moulines, Section 1, equation (2)](https://arxiv.org/pdf/1507.05021v3)

[Raginsky, Section 7.2](https://maxim.ece.illinois.edu/teaching/spring23/SDE_book.pdf)

## Remarks

This definition supplies no sampler convergence rate, no solver error bound, and no exactness claim for the finite predictor or unadjusted Langevin corrector. The corrector need not preserve its target density at a fixed positive step size. Errors from estimated scores, choosing a positive cutoff, substituting a terminal law, discretizing the reverse equation, and numerical integration require separate bounds.
