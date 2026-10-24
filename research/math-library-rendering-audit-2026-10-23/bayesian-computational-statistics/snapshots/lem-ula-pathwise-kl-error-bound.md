---
dependency_level: 4
id: lem-ula-pathwise-kl-error-bound
kind: lemma
title: Pathwise relative-entropy error of the Langevin Euler interpolation
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
axiom_base: Full AC
deps:
  - lem-finite-horizon-girsanov-and-relative-entropy-for-lipschitz-drifts
  - thm-global-strong-well-posedness-for-lipschitz-ito-sdes
  - thm-ito-isometry-and-linearity-in-predictable-l2
  - thm-doob-maximal-bound-for-the-ito-integral
  - def-d-dimensional-brownian-motion
  - def-kullback-leibler-divergence
  - thm-likelihood-ratio-change-of-measure
  - thm-dominated-convergence
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - cor-cauchy-schwarz-for-random-variables
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Alain Durmus and Eric Moulines, Nonasymptotic convergence analysis for the unadjusted Langevin algorithm, v3, proof of Proposition 2, equations (12)–(15)"
      url: "https://arxiv.org/pdf/1507.05021v3"
---

## Statement

Assume AC. Let $d\ge1$, let $U\in C^1(\mathbb R^d)$ have globally
$L$-Lipschitz gradient $g=\nabla U$, and let
$0=t_0<\cdots<t_N=T$, $\gamma_{k+1}=t_{k+1}-t_k$,
$\eta(t)=t_k$ on $[t_k,t_{k+1})$. On a complete usual filtered Brownian
space, start with an $\mathcal F_0$-measurable $X_0$ satisfying
$E|X_0|^2<\infty$ and interpolate the Euler recursion by
$$X_t=X_{t_k}-(t-t_k)g(X_{t_k})+\sqrt2(W_t-W_{t_k}),\qquad t_k\le t\le t_{k+1}.$$
Let $\mathsf E$ be its law on $C([0,T],\mathbb R^d)$ and let $\mathsf D$
be the path law of $dY_t=-g(Y_t)dt+\sqrt2dB_t$ with the same initial law.
Then $\mathsf E$ and $\mathsf D$ are equivalent and
$$D(\mathsf E\|\mathsf D)=\frac14E\int_0^T|g(X_t)-g(X_{\eta(t)})|^2dt\le\frac{L^2}{4}\sum_{k=0}^{N-1}\left\{\frac{\gamma_{k+1}^3}{3}E|g(X_{t_k})|^2+d\gamma_{k+1}^2\right\}.$$
In particular the same upper bound holds for
$D(\mathcal L(X_T)\|\mathcal L(Y_T))$.
The expectations in the bound are under the Euler law; its gradient moments
are finite under the stated hypotheses. No convexity or stationarity is
required, and the direction of the relative entropy is Euler relative to
diffusion.

## Facts & Assumptions

**Given:** AC, the potential, Lipschitz constant, finite mesh, square-integrable
initial value, Brownian filtration, interpolation and path laws above.

[F1] The finite-horizon change-of-drift lemma applies to drift choices
$b(X_t)$ and $b(X_{\eta(t)})$ for globally Lipschitz $b$, with the same
square-integrable initial law. Its exponential is a true density, identifies
the target path law, and satisfies the base-measure entropy identity and
measurable-statistic data processing.
[[lem-finite-horizon-girsanov-and-relative-entropy-for-lipschitz-drifts]]

[F2] The Langevin diffusion is strongly well-posed and has finite second
path moment. Each Brownian coordinate has squared maximal expectation at
most $4T$; finite-energy vector Brownian integrals obey their isometry.
[[thm-global-strong-well-posedness-for-lipschitz-ito-sdes]]
[[thm-doob-maximal-bound-for-the-ito-integral]]
[[thm-ito-isometry-and-linearity-in-predictable-l2]]

[F3] Brownian increments after $t_k$ are independent of $\mathcal F_{t_k}$,
centered and have covariance $(t-t_k)I_d$.
[[def-d-dimensional-brownian-motion]]

[F4] Relative entropy is directional and uses the Radon–Nikodym density;
change of measure follows by integrating that density. Dominated convergence,
Tonelli and Cauchy–Schwarz justify the integrable operations below.
[[def-kullback-leibler-divergence]]
[[thm-likelihood-ratio-change-of-measure]] [[thm-dominated-convergence]]
[[thm-tonelli-theorem-for-sigma-finite-product-spaces]]
[[cor-cauchy-schwarz-for-random-variables]]

[A1] AC is inherited from the Brownian, Itô, SDE, change-of-measure and
relative-entropy suppliers. [[def-axiom-of-choice]]

## Proof

1.1 The finite Euler recursion and $|g(x)|\le|g(0)|+L|x|$ give $E|X_{t_k}|^2<\infty$ by induction, using the finite Brownian second moments. Its interpolation has $E\sup_{t\le T}|X_t|^2<\infty$: on each of the finitely many intervals its supremum is bounded by $|X_{t_k}|+\gamma_{k+1}|g(X_{t_k})|+\sqrt2\sup_{t_k\le t\le t_{k+1}}|W_t-W_{t_k}|$, whose square is integrable by [F2]. Thus every stated Euler gradient moment is finite. The diffusion law exists by [F2]. Apply [F1] on the Euler probability space with $b=-g$, $a_t=-g(X_{\eta(t)})$, $c_t=-g(X_t)$ and $$\theta_t=\frac{g(X_{\eta(t)})-g(X_t)}{\sqrt2},\qquad Z_T=\exp\left(\int_0^T\theta_t\cdot dW_t-\frac12\int_0^T|\theta_t|^2dt\right).$$ It is a true positive density, and under $Q=Z_TP$, $X$ has diffusion path law $\mathsf D$. [F1, F2, F3, given]

2.1 For $h=t-t_k$, the increment representation and [F3] imply $$E|X_t-X_{t_k}|^2=h^2E|g(X_{t_k})|^2+2dh.$$ The mixed term vanishes because $g(X_{t_k})$ is $\mathcal F_{t_k}$-measurable and square integrable, while $W_t-W_{t_k}$ is centered and independent of that sigma-algebra. Lipschitz continuity and Tonelli now give $$E\int_0^T|\theta_t|^2dt\le\frac{L^2}{2}\sum_{k=0}^{N-1}\left\{\frac{\gamma_{k+1}^3}{3}E|g(X_{t_k})|^2+d\gamma_{k+1}^2\right\}<\infty.$$ Indeed integrate $h^2$ and $2dh$ on $[0,\gamma_{k+1}]$. The entropy identity of [F1] yields $D(P\|Q)=\tfrac12E\int|\theta_t|^2dt$. [F1, F3, F4, step 1.1, algebra]

3.1 The exact path-law identity, rather than just its upper bound, follows because $Z_T$ is a measurable function of the Euler path. In fact $$W_t=\frac{X_t-X_0+\int_0^tg(X_{\eta(s)})ds}{\sqrt2}$$ is a Borel functional of that continuous path. On deterministic refining partitions containing all mesh points, the left-endpoint step approximations to $\theta$ converge at almost every time on every continuous path: on an open Euler interval $\theta$ is continuous and at its left endpoint it equals zero. Their squared errors are bounded by a fixed constant times $1+\sup_{t\le T}|X_t|^2$, integrable by step 1.1. Dominated convergence and the Itô isometry therefore make the corresponding stochastic sums converge to $\int\theta dW$ in $L^2(P)$. Each sum is a Borel path functional, since both $\theta$ and the recovered Brownian increments are such functionals. Choose a subsequence whose squared $L^2$ errors are at most $2^{-3j}$; Markov's inequality bounds the probability of error exceeding $2^{-j}$ by $2^{-j}$, so the union bound on the tails shows almost sure convergence. Define its Borel limit arbitrarily on the Borel nonconvergence set. Also $\int|\theta|^2dt$ is a Borel path functional, by ordinary interval Riemann approximation. Hence $Z_T=z(X)$ almost surely for some positive Borel function $z$ (reset its value to one where the constructed exponential is not finite and positive). [F2, F4, step 1.1, step 2.1, construct]

4.1 For every Borel path set $C$, $\mathsf D(C)=Q(X\in C)=E_P[Z_T1_{\{X\in C\}}]=\int_Cz\,d\mathsf E$. Since $z>0$ almost everywhere, the two path laws are equivalent and $d\mathsf D/d\mathsf E=z$. The logarithm is integrable under $\mathsf E$ because its pullback equals $\int\theta dW-\tfrac12\int|\theta|^2dt$, with the first term square integrable and the second integrable by step 2.1. Thus $$D(\mathsf E\|\mathsf D)=E_P[-\log Z_T]=\frac12E\int_0^T|\theta_t|^2dt=\frac14E\int_0^T|g(X_t)-g(X_{\eta(t)})|^2dt.$$ Combining with step 2.1 proves the asserted upper bound. [F2, F4, step 2.1, step 3.1, algebra]

5.1 Terminal evaluation is a measurable statistic on continuous path space. Data processing in [F1] therefore gives $D(\mathcal L(X_T)\|\mathcal L(Y_T))\le D(\mathsf E\|\mathsf D)$. If $L=0$, $g$ is constant, Euler interpolation already solves the diffusion and both entropies and the displayed bound are zero. At $t=0$ the path laws have the same initial law; the trivial zero-horizon case likewise has entropy zero. All positive step lengths, including a single interval, were covered without a minimum-step restriction. AC has exactly the inherited uses stated in [A1]. [A1, F1, step 4.1] ∎

## Source notes

Durmus–Moulines v3, equations (12)–(15), motivates the interpolation bound.
Its Euler expectations give the directional entropy $D(\mathsf E\|\mathsf D)$
used here. The Brownian exponential in step 1.1 fixes the density sign without
relying on a path-coordinate sign convention in a source formula. The
change-of-measure and entropy arguments are supplied by the proved local
supplier, rather than by an external Girsanov citation.
