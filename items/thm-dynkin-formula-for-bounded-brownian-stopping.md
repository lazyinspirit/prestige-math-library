---
id: thm-dynkin-formula-for-bounded-brownian-stopping
kind: theorem
title: "Dynkin formula for bounded Brownian stopping"
status: draft
origin: pipeline
deps: [def-brownian-generator, thm-multidimensional-ito-formula-for-brownian-driven-processes, def-continuous-brownian-ito-process, def-d-dimensional-brownian-motion, def-brownian-motion, def-brownian-motion-started-at-x, def-c-c-and-c-c-infinity-on-rn, def-locally-square-integrable-predictable-brownian-integrand, def-elementary-predictable-brownian-integrand, def-ito-integral-of-an-elementary-predictable-process, def-ito-integral-for-square-integrable-predictable-processes, thm-localized-ito-integral, thm-stopping-an-ito-integral, thm-ito-integral-process-has-a-continuous-martingale-version, thm-ito-isometry-and-linearity-in-predictable-l2, thm-doob-maximal-bound-for-the-ito-integral, def-continuous-time-stopping-time, def-continuous-time-adapted-process-and-martingale, def-partition-and-refinement, def-continuity-real, thm-heine-cantor-r, thm-dominated-convergence, def-convergence-in-probability, def-conditional-expectation-as-an-ae-class, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions, lem-adapted-continuous-processes-are-progressively-measurable, thm-optional-sampling-for-bounded-stopping-times]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Sections 2.10 and 3.5"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Statement

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Let $d\ge1$, let $B^x=x+B$
be the $d$-dimensional Brownian motion started at $x$
[[def-brownian-motion-started-at-x]] on the given filtered probability space,
let $\tau$ be a stopping time [[def-continuous-time-stopping-time]] bounded by
a deterministic constant, and let $f\in C_c^2(\mathbb R^d)$
[[def-c-c-and-c-c-infinity-on-rn]]. Then
$$E\bigl[f(B^x_\tau)\bigr]=f(x)+E\int_0^\tau Lf(B^x_s)\,ds,$$
where $Lf=\tfrac12\Delta f$ is the Brownian generator
[[def-brownian-generator]] and the inner integral is the pathwise Lebesgue
integral of the continuous bounded process $s\mapsto Lf(B^x_s)$ over the random
interval $[0,\tau]$.

## Facts & Assumptions

**Given:** AC, (H), standard $d$-dimensional Brownian motion $B$, a start $x\in\mathbb R^d$, a stopping time $\tau\le K$ for a deterministic $K>0$, and $f\in C_c^2(\mathbb R^d)$.
 
[F1] **Shifted process.** $B^x_t=x+B_t$ has continuous paths, $B^x_0=x$, and is a standard Brownian motion up to its initial value; in particular it is a continuous Brownian Ito process with drift $0$ and unit dispersion matrix, so $B^{x,i}_t=x_i+\int_0^t1\,dB^i_s$ up to indistinguishability. [[def-brownian-motion-started-at-x]] [[def-d-dimensional-brownian-motion]] [[def-continuous-brownian-ito-process]] [[def-elementary-predictable-brownian-integrand]]
 
[F2] **Multidimensional Ito formula.** For $g\in C^{1,2}$ and a continuous Brownian Ito process $X$ with drift $b$ and dispersion $\sigma$, $dg(t,X_t)=(\partial_tg+\sum_ib^i\partial_ig+\tfrac12\sum_{i,j}(\sigma\sigma^{\mathsf T})^{ij}\partial_i\partial_jg)(t,X_t)dt+\sum_{i,k}\partial_ig(t,X_t)\sigma^{ik}_tdB^k_t$ up to indistinguishability. [[thm-multidimensional-ito-formula-for-brownian-driven-processes]]
 
[F3] **Bounded gradient and finite energy.** For $f\in C_c^2(\mathbb R^d)$ the gradient $\nabla f$ is bounded by some constant $C_f<\infty$ and the Hessian is bounded; hence the integrand $\nabla f(B_s)$ is predictable, bounded on $[0,K]$, and has finite energy $E\int_0^K|\nabla f(B_s)|^2ds\le C_f^2K<\infty$. [[def-c-c-and-c-c-infinity-on-rn]] [[thm-heine-cantor-r]] [[def-locally-square-integrable-predictable-brownian-integrand]] [[lem-adapted-continuous-processes-are-progressively-measurable]]
 
[F4] **Integral interfaces.** A finite-energy integral $\int_0^tH\,dB^k$ has a continuous version that is a square-integrable martingale; the stopping identity identifies stopped integrals with integrals of $H1_{[0,\sigma]}$; and the Doob maximal bound gives $E\sup_{t\le K}|\int_0^tH\,dB^k|^2\le4E\int_0^KH^2ds$. [[thm-localized-ito-integral]] [[thm-stopping-an-ito-integral]] [[thm-ito-integral-process-has-a-continuous-martingale-version]] [[thm-ito-isometry-and-linearity-in-predictable-l2]] [[thm-doob-maximal-bound-for-the-ito-integral]] [[def-ito-integral-for-square-integrable-predictable-processes]]
 
[F5] **Optional sampling for the discretized martingale.** If $N$ is a martingale on a discrete grid $0=r_0<r_1<\dots<r_M$ (that is, the sampled continuous martingale $\tilde N_j=N_{r_j}$ is a discrete martingale relative to the grid filtration), and $\rho$ is a grid stopping time bounded by the last grid point, then $E[\tilde N_\rho]=E[\tilde N_0]$. For a continuous martingale and a bounded stopping time $\tau\le K$, the dyadic ceilings $\tau_n:=2^{-n}K\lceil2^n\tau/K\rceil$ form a decreasing sequence of grid stopping times with $\tau_n\downarrow\tau$, and $N_{\tau_n}\to N_\tau$ almost surely. [[thm-optional-sampling-for-bounded-stopping-times]] [[def-continuous-time-stopping-time]] [[def-continuous-time-adapted-process-and-martingale]]
 
[F6] **Convergence.** Dominated convergence applies to sequences bounded by an integrable random variable, and $m(t):=Lf(B^x_t)$ is continuous and bounded by $\|Lf\|_\infty$ on $[0,K]$; hence $\int_0^{\tau_n}m\,ds\to\int_0^\tau m\,ds$ almost surely and in $L^1$ when $\tau_n\downarrow\tau$. [[thm-dominated-convergence]] [[def-convergence-in-probability]] [[def-continuity-real]]
 
[F7] **AC bookkeeping.** Choice is declared for the conditional-expectation interface. [[def-axiom-of-choice]]
 
 
 
 



## Proof

**Proof technique:** direct.
 
1.1 Apply the Ito formula with time-independent test function $f$: by [F1] and [F2] with $g(t,y)=f(y)$, drift $0$ and unit dispersion, $\partial_tg=0$, $\sum_ib^i\partial_ig=0$ and $\tfrac12\sum_{i,j}\delta^{ij}\partial_i\partial_jg=\tfrac12\Delta f=Lf$; hence, up to indistinguishability, $$f(B^x_t)=f(x)+\int_0^tLf(B^x_s)\,ds+M_t,\qquad M_t:=\int_0^t\nabla f(B^x_s)\cdot dB_s,$$ where the stochastic integral is the sum of the finite-energy integrals $\int_0^t\partial_if(B^x_s)dB^i_s$ and is a continuous square-integrable martingale by [F3] and [F4]. [F1, F2, F3, F4]
 
2.1 Stopped identity: applying the stopping identity of [F4] to the bounded integrand $\nabla f(B^x)$ and the stopping time $\tau$ gives $M_{t\wedge\tau}=\int_0^t1_{[0,\tau]}(s)\nabla f(B^x_s)\cdot dB_s$ up to indistinguishability; consequently $$f(B^x_\tau)=f(x)+\int_0^\tau Lf(B^x_s)\,ds+M_\tau$$ almost surely, where the stochastic integral is evaluated at the bounded stopping time $\tau$. [F4, step 1.1]
 
3.1 $EM_\tau=0$: fix $n$ and the dyadic grid of mesh $2^{-n}K$; the sampled process $\tilde M_j:=M_{j2^{-n}K}$ is a discrete martingale relative to the grid filtration (each increment $M_{r_{j+1}}-M_{r_j}=E[M_{r_{j+1}}-M_{r_j}\mid\mathcal F_{r_j}]$ has conditional mean zero because $M$ is a martingale), the ceiling $\tau_n:=2^{-n}K\lceil2^n\tau/K\rceil$ is a grid stopping time bounded by $K+2^{-n}K$, and [F5] gives $E[M_{\tau_n}]=E[M_0]=0$. Since $\tau_n\downarrow\tau$ and $M$ has continuous paths, $M_{\tau_n}\to M_\tau$ almost surely; the sequence is dominated by $\sup_{t\le K+1}|M_t|$, which is integrable by the Doob maximal bound of [F4] applied with $H=\nabla f(B^x)$ on the finite horizon $K+1$; dominated convergence gives $EM_\tau=0$. [F4, F5, step 2.1]
 
4.1 Taking expectations in the identity of step 2.1 and using step 3.1 gives $$E f(B^x_\tau)=f(x)+E\int_0^\tau Lf(B^x_s)\,ds,$$ where the pathwise Lebesgue integral is integrable because $|Lf|\le\|Lf\|_\infty$ and $\tau\le K$; this is Dynkin's formula for the started process on the original filtered space. [F6, step 2.1, step 3.1]
 
5.1 Boundary and consistency cases: for $\tau=0$ both sides are $f(x)$; for deterministic $\tau\equiv t$ the formula becomes the integrated Ito identity; for $f$ affine ($c+\lambda\cdot y$) one has $Lf=0$ and both sides equal the martingale property of $\lambda\cdot B^x$; for $f\ge0$ compactly supported the formula is meaningful with both sides finite; if $Lf=0$ (harmonic compactly supported $f$, hence $f=0$ by the maximum principle) the formula reduces to the mean-value identity $Ef(B^x_\tau)=f(x)$; the boundedness of $\tau$ is used exactly in step 3.1 for the grid optional-sampling identity, and no unbounded stopping time is claimed; the compact support of $f$ is used for the bounded gradient and Hessian, and a general $C^2$ function is not covered; AC enters only through [F7], which is the only choice-theoretic input. [F3, F6, F7, step 3.1, step 4.1] ∎

## Remarks

Lawler, Sections 2.10 and 3.5, computes the generator and states the stopping identity that Dynkin's formula expresses. The proof above stops the compactly supported Ito martingale at the bounded stopping time through the dyadic ceiling approximation and discrete optional sampling, so no general optional-stopping theorem for local martingales and no PDE regularity is imported.
