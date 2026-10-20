---
id: thm-markov-diffusion-reversal-by-bayes-kernels
kind: theorem
title: Reverse-time SDE for an unbounded-start Markov diffusion
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: anderson-reverse-time-diffusion
dependency_level: 3
deps:
- def-axiom-of-choice
- def-continuous-brownian-ito-process
- def-reversed-transition-kernels-for-diffusions
- lem-predictable-elliptic-martingale-brownian-reconstruction
- def-progressively-measurable-and-predictable-process
- lem-forward-density-duality-identifies-reverse-process
- lem-stopped-uniformly-elliptic-semimartingale-occupation-absolute-continuity
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

Assume the Axiom of Choice. Work on a complete filtered probability space $(\Omega,\mathcal F,(\mathcal F_t)_{0\le t\le T},P)$ with the usual conditions. Let $W$ be an adapted standard $d$-dimensional Brownian motion such that $W_t-W_s$ is independent of $\mathcal F_s$ and has law $N_d(0,(t-s)I_d)$ for $0\le s<t\le T$. Let $X_0$ be a finite $\mathcal F_0$-measurable vector independent of the future Brownian increments. Let $X$ be an adapted continuous nonexplosive Markov diffusion on $[0,T]$ in $\mathbb R^d$, where nonexplosive means its paths remain in $\mathbb R^d$ throughout the interval and Markov means conditional future laws given the past filtration depend only on the current state. Assume $\int_0^T|b_s(X_s)|ds<\infty$ and $\int_0^T\|\sigma_s(X_s)\|_F^2ds<\infty$ almost surely. It satisfies
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

[F2] If an auxiliary reverse Itô solution has spacetime absolutely continuous stopped occupation measures and initial density $p_T$, the classical forward density equations identify its law and kernels with the actual reversed process. The proof uses positive mixtures of $q/p$, conservation, time averaging, and a fixed-endpoint $L^1$ limit. [[lem-forward-density-duality-identifies-reverse-process]]

[F3] For symmetric $a$, the formal adjoint product rule is
$$p^{-1}\{L_t^*(p\phi)-\phi L_t^*p\}=\left(-b_i+p^{-1}\partial_j(pa_{ij})\right)\partial_i\phi+\tfrac12a_{ij}\partial_{ij}\phi.$$
Thus the first-order coefficient is $-b+\nabla\!\cdot a+a\nabla\log p$. [[lem-forward-density-duality-identifies-reverse-process]]

[F4] For a continuous semimartingale $Y=M+A$ with local-martingale part $M$ and continuous finite-variation part $A$, the localized product formula identifies the covariation from the coordinate-product martingale tests. A continuous finite-variation local martingale is constant. Bounded stopping preserves the martingale identities used in the compact-test localization. [[lem-continuous-local-martingale-quadratic-variation]]

[F5] For a predictable invertible matrix process $\sigma$ with bounded inverse and finite pathwise squared energy, bracket $\int\sigma\sigma^{\mathsf T}dt$ yields a Brownian inverse-diffusion integral and the recovery identity $M=\int\sigma\,dB$, without continuity of $\sigma$. [[lem-predictable-elliptic-martingale-brownian-reconstruction]]

[F6] The predictable sigma-algebra contains deterministic Borel time functions and adapted left-step processes; limits and Borel compositions of predictable maps are predictable. [[def-progressively-measurable-and-predictable-process]]

[F7] A continuous Brownian Itô process with uniformly positive bracket density has spacetime absolutely continuous occupation measure after stopping to make expected drift variation and bracket trace finite; no bounded initial value or squared-drift condition is required. [[lem-stopped-uniformly-elliptic-semimartingale-occupation-absolute-continuity]]

## Proof
**Given:** all hypotheses and notation in the Statement; AC as required by [A1].

1.1 For $u<v$, the joint density of $(X_{T-v},X_{T-u})$ is $p_{T-v}(x)q(T-v,x;T-u,y)$. Dividing by the strictly positive later marginal $p_{T-u}(y)$ gives the conditional law of $X_{T-v}$ given $X_{T-u}=y$, exactly $K_{u,v}(y,dx)$. Its normalization and reverse Chapman–Kolmogorov identity follow from [F1], so $Y$ is Markov with those transitions. [F1]

2.1 Choose an auxiliary nonexplosive continuous solution $Z$ of the assumed reverse martingale problem, with initial density $p_T$. Compact coordinate cutoffs give $Z=Z_0+\int\widetilde b\,du+N$ locally in state, with $N$ a continuous local martingale. Coordinate-product cutoffs and [F4] identify $[N]_u=\int_0^u a_{T-v}(Z_v)dv$: subtract the two product compensators and use that a continuous finite-variation local martingale is constant. The compact-test integrals make the local drift and trace integrals finite; nonexplosion and continuity exhaust the finite interval, without a bound on $Z_0$. Work in the usual augmentation, which preserves these continuous local martingales by the stopped event-test argument in the proof of [F5]. Left-step approximations as in [F6] give a predictable version of $\sigma_{T-u}(Z_u)$, and [F5] constructs the auxiliary Brownian Itô representation with the same drift and bracket. If $C=\sup\|\sigma^{-1}\|$, then $a\ge C^{-2}I$. Stop when $|Z|$ or the accumulated drift-plus-trace energy reaches $n$; the stops exhaust $T$ and the expected stopped variation and trace are finite. Thus [F7] supplies their occupation absolute continuity. Apply [F2], using only the original classical forward equations for $q,p$ and the actual forward path continuity: it identifies all marginals and Bayes kernels of $Z$ with those of $Y$, and transfers the compact-test local martingale problem to $Y$ in its natural reversed filtration. In particular the displayed operator is its extended martingale generator. [F2, F4, F5, F6, F7, step 1.1]

3.1 Expanding the adjoint by [F3] yields diffusion coefficient $a_{T-u}$ and drift $\widetilde b_u=-b_{T-u}+p_{T-u}^{-1}\nabla\!\cdot(p_{T-u}a_{T-u})=-b_{T-u}+\nabla\!\cdot a_{T-u}+a_{T-u}\nabla\log p_{T-u}$. [F3, step 2.1]

3.2 Fix $R$ and stop when $|Y|$ first reaches $R$. Compactly supported cutoffs equal to $x_i$ and $x_ix_j$ on the ball of radius $R$ turn the compact-test martingale identities into coordinate and coordinate-product identities. Subtracting the finite-variation drift in each coordinate identity gives continuous local martingales $M^i$. The product formula in [F4] shows that $Y_iY_j-Y_i(0)Y_j(0)-\int_0^{\cdot}(\widetilde b_iY_j+\widetilde b_jY_i)dr-[M_i,M_j]$ is a local martingale. The coordinate-product test shows that the same expression with $\int_0^{\cdot}a_{ij}(T-r,Y_r)dr$ in place of $[M_i,M_j]$ is a local martingale. Their difference is a continuous finite-variation local martingale, hence constant by [F4]; it starts at zero. Thus $[M_i,M_j]_u=\int_0^u a_{ij}(T-r,Y_r)dr$. Letting $R\uparrow\infty$ is valid because the assumed solution is nonexplosive. [F4, step 2.1]

4.1 To handle the Borel coefficients allowed by the SDE data, choose the predictable representative $\widehat Y$ obtained as follows: take left-step approximations with coefficients $Y_{kT/2^n}$, set their time-zero value to $Y_0$, and take their pointwise limit where finite and $0$ otherwise. These maps are predictable by [F6] and agree with $Y$ at every time on its common continuity event. The pair $(r,\widehat Y_r)$ is predictable, so the joint Borel coefficient gives a predictable matrix $\Sigma_r=\sigma_{T-r}(\widehat Y_r)$; inversion is Borel on invertible matrices, and $\|\Sigma_r^{-1}\|$ is uniformly bounded. Step 3.2 gives $\int_0^T\|\Sigma_r\|_F^2dr=\operatorname{tr}[M]_T<\infty$ almost surely, as well as $[M]_u=\int_0^u\Sigma_r\Sigma_r^{\mathsf T}dr$. Thus [F5] constructs $B=\int\Sigma^{-1}dM$ Brownian in the original reversed filtration, and proves $M=\int\Sigma\,dB$. Since $\widehat Y=Y$ on a common full event, this is the displayed reverse SDE with its original Borel coefficient. The assumed well-posedness and nonexplosion of the reverse martingale problem identify its law uniquely and complete the theorem. [F5, F6, A1, step 3.2] ∎
