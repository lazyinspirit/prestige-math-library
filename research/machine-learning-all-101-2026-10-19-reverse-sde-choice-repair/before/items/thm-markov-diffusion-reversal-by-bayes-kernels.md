---
id: thm-markov-diffusion-reversal-by-bayes-kernels
kind: theorem
title: Reverse-time SDE for an unbounded-start Markov diffusion
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: anderson-reverse-time-diffusion
dependency_level: 2
deps:
- def-axiom-of-choice
- def-ito-sde-and-strong-solution
- def-reversed-transition-kernels-for-diffusions
- lem-elliptic-local-martingale-brownian-representation
- lem-reversed-kernels-and-generator-identity
- lem-continuous-local-martingale-quadratic-variation
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
  - title: Y. Song et al., Score-Based Generative Modeling through Stochastic Differential
      Equations, Sections 3.2 and Appendix A.3
    url: https://ar5iv.labs.arxiv.org/html/2011.13456
  - title: 'Y. Tang and H. Zhao, Score-based diffusion models via stochastic differential
      equations: a technical tutorial, Section 2.2'
    url: https://arxiv.org/pdf/2402.07487
---

## Statement

Let $X$ be a continuous nonexplosive Markov diffusion on $[0,T]$ in $\mathbb R^d$, where nonexplosive means its paths remain in $\mathbb R^d$ throughout the interval and Markov means conditional future laws given the past depend only on the current state. It satisfies
$$dX_t=b_t(X_t)dt+\sigma_t(X_t)dW_t,$$
where $W$ is standard $d$-dimensional Brownian motion and $\sigma_t(x)$ is square and invertible with $\sup_{t,x}\|\sigma_t(x)^{-1}\|<\infty$. Put $a_t(x)=\sigma_t(x)\sigma_t(x)^{\mathsf T}$. A transition density means $P(X_t\in dy\mid X_s=x)=q(s,x;t,y)dy$. Assume $p_t$ and $q(s,x;t,y)$ are positive probability densities, with $p_t$ having one continuous time derivative and two continuous state derivatives, and satisfying
$$p_t(y)=\int p_s(x)q(s,x;t,y)dx,\qquad q(s,x;t,y)=\int q(s,x;r,z)q(r,z;t,y)dz\quad(s<r<t).$$
For $L_t\phi=b_t\cdot\nabla\phi+\tfrac12a_t:D^2\phi$, define its formal adjoint by $L_t^*r=-\partial_i(b_{t,i}r)+\tfrac12\partial_i\partial_j(a_{t,ij}r)$ and assume $\partial_t p_t=L_t^*p_t$ and $\partial_tq(s,x;t,y)=L_t^{*,y}q(s,x;t,y)$ classically. Assume that for every compactly supported smooth test function the transition integrals and their time derivatives are absolutely integrable, differentiation under those integrals is valid, and integration by parts in space has no boundary term. For each initial law, assume the reverse martingale problem for the operator defined by the Bayes-density expression below has a unique nonexplosive continuous solution in law; here this means existence and uniqueness in law of a continuous process for which each compact-test compensated process is a local martingale.

For $0\le u<v\le T$ define
$$K_{u,v}(y,dx)=\frac{p_{T-v}(x)q(T-v,x;T-u,y)}{p_{T-u}(y)}\,dx,$$
and let $Y_u=X_{T-u}$ with reversed filtration $\mathcal G_u=\sigma(Y_r:0\le r\le u)$. Then these are the transition kernels of $Y$, and for $0\le u<T$ its generator on $\phi\in C_c^\infty(\mathbb R^d)$ is
$$\widetilde L_u\phi=p_{T-u}^{-1}\{L_{T-u}^*(p_{T-u}\phi)-\phi L_{T-u}^*p_{T-u}\}.$$
Consequently $Y$ solves the reverse SDE
$$dY_u=\left[-b_{T-u}(Y_u)+(\nabla\!\cdot a_{T-u})(Y_u)+a_{T-u}(Y_u)\nabla\log p_{T-u}(Y_u)\right]du+\sigma_{T-u}(Y_u)dB_u,$$
where $(\nabla\!\cdot a)_i=\sum_j\partial_j a_{ij}$ and $B$ is a standard $d$-dimensional Brownian motion in the reversed filtration. This theorem starts from the assumed positive density regime; it does not infer densities from strong SDE well-posedness.

## Statement references

[Song et al., Sections 3.2 and Appendix A.3](https://ar5iv.labs.arxiv.org/html/2011.13456): downstream application of the state-dependent reverse-drift formula, citing Anderson; it is not used as the proof of the general Bayes-kernel theorem.

[Tang and Zhao, Section 2.2, PDF pp. 3–5](https://arxiv.org/pdf/2402.07487): gives the formula and a heuristic derivation; it does not prove the density or martingale-problem hypotheses.

## Facts & Assumptions

**Given:** the Markov diffusion, densities, regularity, integrability, ellipticity, and reverse martingale-problem hypotheses in the Statement.

[A1] AC is required by the vector Lévy characterization and the local continuous-martingale calculus used below. [[def-axiom-of-choice]]

[F1] Bayes' formula gives the displayed reverse kernels; the forward marginal and Chapman–Kolmogorov identities make them probability kernels satisfying reverse Chapman–Kolmogorov. [[def-reversed-transition-kernels-for-diffusions]]

[F2] The reverse-kernel generator and compact-test martingale identity are obtained from the forward density equation and justified differentiation under its transition integrals. [[lem-reversed-kernels-and-generator-identity]]

[F3] For symmetric $a$, the formal adjoint product rule is
$$p^{-1}\{L_t^*(p\phi)-\phi L_t^*p\}=\left(-b_i+p^{-1}\partial_j(pa_{ij})\right)\partial_i\phi+\tfrac12a_{ij}\partial_{ij}\phi.$$
Thus the first-order coefficient is $-b+\nabla\!\cdot a+a\nabla\log p$. [[lem-reversed-kernels-and-generator-identity]]

[F4] For a continuous semimartingale $Y=M+A$ with local-martingale part $M$ and continuous finite-variation part $A$, the localized product formula identifies the covariation from the coordinate-product martingale tests. A continuous finite-variation local martingale is constant. [[lem-continuous-local-martingale-quadratic-variation]]

[F5] If $M$ has bracket $\int\sigma\sigma^{\mathsf T}dt$ and $\sigma^{-1}$ is bounded, the inverse-diffusion integral is Brownian by the proved local representation lemma. [[lem-elliptic-local-martingale-brownian-representation]]

## Proof
**Given:** all hypotheses and notation in the Statement; AC as required by [A1].

1.1 For $u<v$, the joint density of $(X_{T-v},X_{T-u})$ is $p_{T-v}(x)q(T-v,x;T-u,y)$. Dividing by the strictly positive later marginal $p_{T-u}(y)$ gives the conditional law of $X_{T-v}$ given $X_{T-u}=y$, exactly $K_{u,v}(y,dx)$. Its normalization and reverse Chapman–Kolmogorov identity follow from [F1], so $Y$ is Markov with those transitions. [F1]

2.1 Apply [F2] to the Bayes kernels. It gives, for every compactly supported smooth $\phi$, the reverse generator $\displaystyle \widetilde L_u\phi(y)=p_{T-u}(y)^{-1}\{L_{T-u}^*(p_{T-u}\phi)(y)-\phi(y)L_{T-u}^*p_{T-u}(y)\}$ and the corresponding compensated local martingale. [F2, step 1.1]

3.1 Expanding the adjoint by [F3] yields diffusion coefficient $a_{T-u}$ and drift $\widetilde b_u=-b_{T-u}+p_{T-u}^{-1}\nabla\!\cdot(p_{T-u}a_{T-u})=-b_{T-u}+\nabla\!\cdot a_{T-u}+a_{T-u}\nabla\log p_{T-u}$. [F3, step 2.1]

3.2 Fix $R$ and stop when $|Y|$ first reaches $R$. Compactly supported cutoffs equal to $x_i$ and $x_ix_j$ on the ball of radius $R$ turn the compact-test martingale identities into coordinate and coordinate-product identities. Subtracting the finite-variation drift in each coordinate identity gives continuous local martingales $M^i$. The product formula in [F4] shows that $Y_iY_j-Y_i(0)Y_j(0)-\int_0^{\cdot}(\widetilde b_iY_j+\widetilde b_jY_i)dr-[M_i,M_j]$ is a local martingale. The coordinate-product test shows that the same expression with $\int_0^{\cdot}a_{ij}(T-r,Y_r)dr$ in place of $[M_i,M_j]$ is a local martingale. Their difference is a continuous finite-variation local martingale, hence constant by [F4]; it starts at zero. Thus $[M_i,M_j]_u=\int_0^u a_{ij}(T-r,Y_r)dr$. Letting $R\uparrow\infty$ is valid because the assumed solution is nonexplosive. [F4, step 2.1]

4.1 Put $\sigma_r=\sigma_{T-r}(Y_r)$. Uniform nonsingularity gives a bounded inverse, and [F5] constructs $B_u=\int_0^u\sigma_r^{-1}dM_r$ with bracket $uI_d$. AC and the vector Lévy characterization in [F5] make $B$ standard Brownian in the reversed filtration. Using $dM_u=\sigma_{T-u}(Y_u)dB_u$ in the drift decomposition proves that $Y$ is a weak solution of the displayed reverse SDE. The assumed well-posedness and nonexplosion of the reverse martingale problem identify its law uniquely and complete the theorem. [F5, A1, step 3.2] ∎
