---
id: thm-anderson-reverse-time-diffusion
kind: theorem
title: Anderson's bounded-start reverse-time diffusion theorem
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: anderson-reverse-time-diffusion
dependency_level: 1
deps:
- def-axiom-of-choice
- def-d-dimensional-brownian-motion
- def-ito-sde-and-strong-solution
- lem-density-translation-factorization
- thm-multidimensional-ito-formula-for-brownian-driven-processes
- thm-quadratic-covariation-of-brownian-ito-processes
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
  - title: B. D. O. Anderson, Reverse-time diffusion equation models, Sections 3–4
    url: https://eva.fcien.udelar.edu.uy/pluginfile.php/166428/mod_resource/content/1/1982_andersonREVERSE-TIME%20DIFFUSION%20EQUATION%20MODELS.pdf
  - title: 'Y. Tang and H. Zhao, Score-based diffusion models via stochastic differential
      equations: a technical tutorial, Section 2.2'
    url: https://arxiv.org/pdf/2402.07487
---

## Statement

Assume AC. Fix $t_0<T$, integers $d,r\ge1$, and a filtered probability space $(\Omega,\mathcal F,(\mathcal F_t)_{t_0\le t\le T},P)$ satisfying the usual conditions. Let $W$ be an adapted standard $r$-dimensional Brownian motion such that $W_t-W_s$ is independent of $\mathcal F_s$ and has law $N_r(0,(t-s)I_r)$ for every $t_0\le s<t\le T$. Let $X_{t_0}$ be $\mathcal F_{t_0}$-measurable, almost surely bounded, and independent of the future Brownian increments $\sigma(W_t-W_{t_0}:t_0\le t\le T)$. Let
$$dX_t=b(X_t,t)\,dt+\sigma(X_t,t)\,dW_t,\qquad X_t\in\mathbb R^d,$$
for $t\in[t_0,T]$. Assume the drift and diffusion path integrals satisfy $\int_{t_0}^T|b(X_s,s)|ds<\infty$ and $\int_{t_0}^T\|\sigma(X_s,s)\|_F^2ds<\infty$ almost surely, and that this SDE has a unique nonexplosive strong solution. Put $a=\sigma\sigma^{\mathsf T}$. Also assume the strong restart property: for each deterministic $s\in[t_0,T]$, the future path $(X_r)_{s\le r\le T}$ is almost surely a measurable function of $X_s$ and $(W_r-W_s)_{s\le r\le T}$. Assume the coefficients and densities are smooth enough for the displayed derivatives and Itô identities to hold. Assume the marginal density $p_t(x)$ is positive wherever used and is a unique smooth solution of
$$\partial_t p_t=L_t^*p_t,\qquad L_t^*r=-\sum_i\partial_i(b_i r)+\tfrac12\sum_{i,j}\partial_i\partial_j(a_{ij}r).$$
Define the $r$-vector process $\widetilde W$ by $\widetilde W_{t_0}=0$ and
$$d\widetilde W_t^k=dW_t^k+c_k(X_t,t)\,dt,\qquad c_k(x,t)=p_t(x)^{-1}\sum_i\partial_i\!\left(p_t(x)\sigma_{ik}(x,t)\right).$$
Assume the augmented process $(X,\widetilde W)$ has a unique smooth joint density solving its augmented forward Kolmogorov equation for $t>t_0$, and for every $t>s\ge t_0$ its conditional joint density given $\widetilde W_s$ is the unique smooth solution of the corresponding conditional augmented equation; all displayed derivatives and density integrals are valid. Then the following hold.

1. For $t>s\ge t_0$, $X_t$ is independent of $\widetilde W_t-\widetilde W_s$, and this increment has law $N_r(0,(t-s)I_r)$.
2. Put $U=T-t_0$, $Y_u=X_{T-u}$, and $B_u=\widetilde W_{T-u}-\widetilde W_T$ for $0\le u\le U$. With $\mathcal G_u=\sigma(Y_v,B_v:0\le v\le u)$, $B$ is a standard $r$-dimensional Brownian motion relative to $(\mathcal G_u)$.
3. In the backward Itô convention, $Y$ satisfies
$$dY_u=\left[-b(Y_u,T-u)+(\nabla\!\cdot a)(Y_u,T-u)+a(Y_u,T-u)\nabla\log p_{T-u}(Y_u)\right]du+\sigma(Y_u,T-u)\,dB_u,$$
where $(\nabla\!\cdot a)_i=\sum_j\partial_j a_{ij}$. The score is asserted only where $p_{T-u}>0$; no density or score regularity beyond the stated hypotheses is implied.

## Statement references

[Anderson, Sections 3–4, printed pp. 317–322](https://eva.fcien.udelar.edu.uy/pluginfile.php/166428/mod_resource/content/1/1982_andersonREVERSE-TIME%20DIFFUSION%20EQUATION%20MODELS.pdf): states the bounded-start theorem and gives the augmented-density proof route, including the reverse-noise increment calculation and backward-Itô correction.

[Tang and Zhao, Section 2.2, PDF pp. 3–5](https://arxiv.org/pdf/2402.07487): gives the score-form reverse SDE with a heuristic derivation, not the augmented-density proof supplied here.

## Facts & Assumptions

**Given:** AC, the strong solution and density hypotheses in the statement, and the augmented process $Z_t=(X_t,\widetilde W_t)$ whose diffusion matrix is $\Gamma(x,t)=\binom{\sigma(x,t)}{I_r}$ and whose drift is $(b(x,t),c(x,t))$.

[A1] AC is required by the multidimensional Itô and quadratic-covariation suppliers used in the backward-integral conversion. [[def-axiom-of-choice]]

[F1] The forward SDE is an adapted continuous strong solution on the stated usual filtration. Its strong restart property is an explicit statement hypothesis, and future Brownian increments are independent of the present filtration. [[def-ito-sde-and-strong-solution]] [[def-d-dimensional-brownian-motion]]

[F2] The forward marginal density satisfies the displayed adjoint equation, and the augmented density satisfies the forward equation for drift $(b,c)$ and covariance blocks $a$, $\sigma$, $\sigma^{\mathsf T}$, and $I_r$. This is the smooth unique-density hypothesis of the statement; the operator follows from the Itô formula for $Z$.

[F3] For a smooth density $R(x,w,t)$ of $Z$, the augmented forward operator is
$$-\partial_i(b_iR)-\partial_{w_k}(c_kR)+\tfrac12\partial_i\partial_j(a_{ij}R)+\partial_i\partial_{w_k}(\sigma_{ik}R)+\tfrac12\Delta_wR.$$
The cross derivative appears because $d[X_i,\widetilde W_k]_t=\sigma_{ik}(X_t,t)dt$. [[thm-multidimensional-ito-formula-for-brownian-driven-processes]] [[thm-quadratic-covariation-of-brownian-ito-processes]]

[F4] For $h>0$, $\varphi_h(w)=(2\pi h)^{-r/2}\exp(-|w|^2/(2h))$ is a probability density satisfying $\partial_h\varphi_h=\tfrac12\Delta_w\varphi_h$ and converging weakly to a point mass at zero as $h\downarrow0$; these identities follow by differentiating the displayed expression and the Gaussian integral.

[F5] If a conditional density has the factorization $p_{A,B\mid C}(a,b\mid c)=p_A(a)f(b-c)$ with probability densities, then $A$ is independent of $B-C$ and the latter has density $f$. [[lem-density-translation-factorization]]

[F6] Left-endpoint and right-endpoint sums against a continuous integrand differ in the limit by its quadratic covariation with the continuous semimartingale integrator. For $H_{ik}(t)=\sigma_{ik}(X_t,t)$,
$$d[H_{ik},\widetilde W^k]_t=\sum_j\partial_j\sigma_{ik}(X_t,t)\sigma_{jk}(X_t,t)\,dt,$$
by Itô's formula and the Brownian-Itô covariation formula. [[thm-multidimensional-ito-formula-for-brownian-driven-processes]] [[thm-quadratic-covariation-of-brownian-ito-processes]]


## Proof
**Given:** the hypotheses and notation in the Statement.

1.1 For $t>t_0$ set $R(x,w,t)=p_t(x)\varphi_{t-t_0}(w)$. In [F3], the $x$-drift and $x$-diffusion terms combine to $\varphi_{t-t_0}(w)L_t^*p_t(x)$. The cross term is $\displaystyle \partial_i\partial_{w_k}(\sigma_{ik}p_t\varphi)=\partial_{w_k}\!\left(\varphi\,\partial_i(p_t\sigma_{ik})\right)=\partial_{w_k}(c_kp_t\varphi),$ which cancels the $-\partial_{w_k}(c_kR)$ term by the definition of $c_k$. The remaining $w$-diffusion term is $p_t\partial_t\varphi$, and $\partial_t p_t=L_t^*p_t$; hence the augmented equation's right side is $\partial_tR$. The initial limit is the law of $X_{t_0}$ times $\delta_0(dw)$ by [F4]. Uniqueness therefore identifies $R$ with the actual joint density of $(X_t,\widetilde W_t)$. [F3, F4, A1, F2]

1.2 The definition of $\widetilde W$ gives the forward-Itô equation $\displaystyle dX_i=\left(b_i-\sum_k\sigma_{ik}c_k\right)dt+\sum_k\sigma_{ik}\,d^{\mathrm f}\widetilde W_k.$ For $H_{ik}=\sigma_{ik}(X_t,t)$, right-endpoint sums equal left-endpoint sums plus the cross-increment sums defining $[H_{ik},\widetilde W_k]$. Their limits differ by the bracket in [F6]; consequently $\displaystyle \int_s^t H_{ik}\,d^{\mathrm f}\widetilde W_k=\int_s^t H_{ik}\,d^{\mathrm b}\widetilde W_k-\int_s^t\sum_j\partial_j\sigma_{ik}(X_r,r)\sigma_{jk}(X_r,r)\,dr,$ where the superscripts denote left-endpoint forward and right-endpoint backward Itô sums. This fixes the sign of the conversion. [F6]

2.1 Fix $s\ge t_0$ and condition on $\widetilde W_s=w_s$. Step 1.1 shows that $X_s$ has density $p_s$ independently of $\widetilde W_s$, so the conditional initial density at time $s$ is $p_s(x)\delta_{w_s}(dw)$. The candidate $R_s(x,w,t)=p_t(x)\varphi_{t-s}(w-w_s)$ has that initial limit. The calculation in step 1.1, with $\varphi_{t-s}(w-w_s)$ in place of $\varphi_{t-t_0}(w)$, proves that it solves the conditional augmented equation. By the assumed uniqueness, this is the conditional joint density of $(X_t,\widetilde W_t)$ given $\widetilde W_s=w_s$. [step 1.1, F2, F3, F4]

2.2 The resulting backward drift in the original time variable is $\displaystyle \widehat b_i=b_i-\sum_k\sigma_{ik}c_k-\sum_{j,k}\partial_j\sigma_{ik}\sigma_{jk}=b_i-\frac1{p_t}\sum_j\partial_j(p_t a_{ij}).$ Indeed, substituting $c_k=p_t^{-1}\sum_j\partial_j(p_t\sigma_{jk})$ and applying the product rule expands the last numerator as $\sum_k\sigma_{ik}\partial_j(p_t\sigma_{jk})+p_t\sum_{j,k}(\partial_j\sigma_{ik})\sigma_{jk}$. [F6, step 1.2]

3.1 For $s>t_0$, multiplying the conditional density in step 2.1 by the density $\varphi_{s-t_0}(w_s)$ from step 1.1 gives the joint density of $(X_t,\widetilde W_t,\widetilde W_s)$. Apply [F5] with $A=X_t$, $B=\widetilde W_t$, $C=\widetilde W_s$, and $f=\varphi_{t-s}$. For $s=t_0$, the same conclusion follows directly from step 2.1 with the deterministic value $\widetilde W_{t_0}=0$. Thus $X_t$ and $\widetilde W_t-\widetilde W_s$ are independent and the increment has law $N_r(0,(t-s)I_r)$, proving claim 1. [step 2.1, step 1.1, F5]

4.1 For $0\le u<v\le U$, put $s=T-v$ and $t=T-u$. Then $B_v-B_u=-(\widetilde W_t-\widetilde W_s)$, so by claim 1 this increment has law $N_r(0,(v-u)I_r)$. It is measurable with respect to the forward filtration at time $t$. By the strong restart assumption in the Statement, the future $X$ path, and hence the future $\widetilde W$ increments, are measurable functions of $X_t$ and the future Brownian increments of $W$; those Brownian increments are independent of $\mathcal F_t$ by [F1]. Since $\widetilde W_t-\widetilde W_s$ is independent of $X_t$ by claim 1, it is independent of the pair consisting of $X_t$ and all future Brownian increments, and thus of the entire future segment $(X_r,\widetilde W_r-\widetilde W_t)_{r\ge t}$. The variables $Y_q$ and $B_q$ for $q\le u$ are measurable with respect to that segment. Therefore $B_v-B_u$ is independent of $\mathcal G_u$. The process $B$ is continuous, starts at zero, and has these centered Gaussian increments independent of its past; hence it is standard Brownian motion in $(\mathcal G_u)$. [F1, step 3.1, given]

5.1 Reparameterize by $u=T-t$ and set $B_u=\widetilde W_{T-u}-\widetilde W_T$. Right-endpoint sums in forward time satisfy $\int_{T-u}^T H_s\,d^{\mathrm b}\widetilde W_s=-\int_0^uH_{T-r}\,dB_r$: each reversed increment is the negative of the corresponding right-endpoint forward increment. Therefore $Y_u-Y_0=-\int_0^u\widehat b(Y_r,T-r)dr+\int_0^u\sigma(Y_r,T-r)dB_r$. The drift is $-\widehat b_i=-b_i+p_t^{-1}\partial_j(p_ta_{ij})=-b_i+\partial_j a_{ij}+\sum_j a_{ij}\partial_j\log p_t$. With $t=T-u$, this is exactly the displayed reverse SDE and completes claim 3. [F6, step 2.2] ∎

## Remarks

The timeline aligns forward time with reverse time for an interior pair $0<u<v<U$, where $U=T-t_0$. Dashed lines identify the same instant under the change of clock; the arrows show each clock's increasing direction. Spacings are schematic.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
\node[anchor=east] at (-0.5,0) {forward time};
\draw[->,thick] (-0.2,0) -- (9.6,0);
\node[above] at (0,0.15) {$t_0$};
\node[above] at (3,0.15) {$s=T-v$};
\node[above] at (6,0.15) {$t=T-u$};
\node[above] at (9,0.15) {$T$};
\draw[dashed,gray] (0,-0.15) -- (0,-1.85);
\draw[dashed,gray] (3,-0.15) -- (3,-1.85);
\draw[dashed,gray] (6,-0.15) -- (6,-1.85);
\draw[dashed,gray] (9,-0.15) -- (9,-1.85);
\node[fill=white] at (4.5,-1) {$t=T-u$};
\node[anchor=east] at (-0.5,-2) {reverse time};
\draw[->,thick] (9.2,-2) -- (-0.6,-2);
\node[below] at (0,-2.15) {$U=T-t_0$};
\node[below] at (3,-2.15) {$v$};
\node[below] at (6,-2.15) {$u$};
\node[below] at (9,-2.15) {$0$};
\node at (4.5,-3.2) {$Y_u=X_{T-u},\qquad B_u=\widetilde W_{T-u}-\widetilde W_T,\qquad B_0=0$};
\node at (4.5,-4) {$B_v-B_u=\widetilde W_s-\widetilde W_t=-(\widetilde W_t-\widetilde W_s)$};
\end{tikzpicture}
```

The corresponding intervals have equal length $v-u=t-s$. The subtraction order in the last line is the one used in step 4.1; the same reversal of increments fixes the integral sign in step 5.1. The theorem's hypotheses remain in force, and its rigorous proof is independent of the illustration.
