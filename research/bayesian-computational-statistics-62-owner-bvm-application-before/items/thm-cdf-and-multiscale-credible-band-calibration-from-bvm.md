---
id: thm-cdf-and-multiscale-credible-band-calibration-from-bvm
kind: theorem
title: CDF and multiscale credible-band calibration from weak BvM limits
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-multiscale-coefficient-space-m0w
  - lem-m0w-separable-and-projection-tails
  - lem-random-posterior-quantiles-stabilize-under-bvm
  - lem-measurable-posterior-quantile-and-cdf-bracketing
  - lem-multiscale-primitive-map-to-continuous-cdfs
  - thm-continuous-mapping-theorem
  - thm-portmanteau-theorem
  - thm-projected-empirical-process-clt-in-m0w
  - thm-subsequence-characterization-of-convergence-in-probability
  - def-negative-sobolev-space-for-white-noise
  - cor-cauchy-schwarz-for-random-variables
  - def-posterior-credible-set
axiom_use: "The conditional mapping, quantile, credibility and coverage proof adds no choice. If the sampling-center premise is instantiated by thm-projected-empirical-process-clt-in-m0w, AC is inherited there through the finite-dimensional multivariate iid CLT."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Castillo and Nickl, On the Bernstein–von Mises phenomenon for nonparametric Bayes procedures, Theorems 4–5, Corollary 2, and §5.4"
      url: https://arxiv.org/pdf/1310.2484
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, Theorem 7.3.23 and proof"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Statement

Let $P_0$ have a density $f_0$ on $[0,1]$ bounded above and bounded away from zero, and put $F_0(t)=\int_0^t f_0(x)dx$. Use the wavelet basis and $M_0(w)$ of [[def-multiscale-coefficient-space-m0w]], and assume the wavelet conditions and summability condition $\sum_lw_l2^{-l/2}<\infty$ of [[lem-multiscale-primitive-map-to-continuous-cdfs]]. Let $T_n$ be a measurable $L^2$-valued center, let $\Pi_n$ be a posterior kernel supported on $L^2$ densities, and define $Q_n$ to be the conditional law on $M_0(w)$ of $\sqrt n(f-T_n)$ under $f\sim\Pi_n(\cdot\mid X^n)$.

Assume under $P_0^n$ that (i) $Q_n$ converges in bounded-Lipschitz distance in probability to the centered Gaussian bridge coefficient law $G_{P_0}$ in $M_0(w)$, whose finite coefficient covariances are $P_0[(h-P_0h)(g-P_0g)]$, and (ii) $\sqrt n(T_n-f_0)\Rightarrow G_{P_0}$ in $M_0(w)$. For $u=1-\alpha$, let $q_M$ and $q_C$ be the lower $u$-quantiles of $\|G_{P_0}\|_{M(w)}$ and $\|JG_{P_0}\|_\infty$. Assume both CDFs are continuous on $\mathbb R$ and strictly increasing on open neighborhoods of their respective quantiles, and that $q_M,q_C>0$. These local quantile conditions allow the CDFs to be constant on the negative half-line. In the projected empirical-center case $T_n=P_n(L_n)$, [[thm-projected-empirical-process-clt-in-m0w]] supplies premise (ii) under its stated smoothness and cutoff conditions. Proving the Type-S/H source hypotheses imply the posterior BvM premise (i) remains the separate authoring obligation recorded in the batch notes.

For a posterior draw $f$, write $F_f=Jf$ and $F_{T_n}=JT_n$, where $J$ is the primitive map of [[lem-multiscale-primitive-map-to-continuous-cdfs]]. Then the posterior law of $\sqrt n(F_f-F_{T_n})$ converges in bounded-Lipschitz distance on $C([0,1])$ to the $P_0$-Brownian bridge $B_{P_0}(t)$, with covariance $F_0(s\wedge t)-F_0(s)F_0(t)$.

For $0<\alpha<1$, let $R_n^M$ and $R_n^C$ be the posterior lower $1-\alpha$ quantiles of $\|\sqrt n(f-T_n)\|_{M(w)}$ and $\|\sqrt n(F_f-F_{T_n})\|_\infty$, respectively. The corresponding posterior balls
$$C_n^M=\{f:\|f-T_n\|_{M(w)}\le R_n^M/\sqrt n\},\qquad C_n^C=\{F:\|F-F_{T_n}\|_\infty\le R_n^C/\sqrt n\}$$
are measurable credible sets of posterior mass at least $1-\alpha$. Their frequentist coverage tends to $1-\alpha$, and the scaled radii converge to the respective $1-\alpha$ quantiles of $\|G_{P_0}\|_{M(w)}$ and $\|B_{P_0}\|_\infty$.

## Facts & Assumptions

**Given:** The density law, posterior kernel, wavelet basis, space $M_0(w)$, primitive map, two weak-convergence assumptions, continuous strictly increasing limit norm CDFs, and $0<\alpha<1$ in the Statement.

[F1] [[def-multiscale-coefficient-space-m0w]]: $M_0(w)$ has the weighted supremum norm on wavelet coefficients whose normalized level maxima vanish.

[F2] [[lem-m0w-separable-and-projection-tails]]: every square-summable wavelet coefficient sequence belongs to $M_0(w)$.

[F3] [[lem-multiscale-primitive-map-to-continuous-cdfs]]: $J:M_0(w)\to C([0,1])$ is continuous and agrees with $f\mapsto(t\mapsto\int_0^t f)$ for $L^2$ functions.

[F4] [[thm-continuous-mapping-theorem]]: a continuous map carries weak convergence of probability laws to weak convergence of their pushforwards.

[F5] [[lem-measurable-posterior-quantile-and-cdf-bracketing]]: for a posterior probability kernel on $\mathbb R$, its lower $u$-quantile is measurable and its CDF brackets $u$.

[F6] [[lem-random-posterior-quantiles-stabilize-under-bvm]]: if the limiting scalar CDF is continuous on $\mathbb R$ and strictly increasing on a neighborhood of the target quantile, bounded-Lipschitz convergence in probability implies convergence of that posterior quantile.

[F7] [[def-posterior-credible-set]]: a graph-measurable rule whose posterior mass is at least $1-\alpha$ is a posterior credible set at level $1-\alpha$.

[A1] The posterior laws $Q_n$ converge in bounded-Lipschitz distance in probability to the centered Gaussian bridge coefficient law $G_{P_0}$ in $M_0(w)$.

[A2] The sampling centers satisfy $\sqrt n(T_n-f_0)\Rightarrow G_{P_0}$ in $M_0(w)$.

[A3] The CDFs of $\|G_{P_0}\|_{M(w)}$ and $\|JG_{P_0}\|_\infty$ are continuous on $\mathbb R$ and strictly increasing on open neighborhoods of their positive $1-\alpha$ quantiles. Continuity at each lower quantile $q$ implies its CDF value is $1-\alpha$.

[F8] [[thm-portmanteau-theorem]]: weak convergence of probability measures gives convergence of probabilities of sets whose boundary has zero limit measure.

[F9] [[thm-projected-empirical-process-clt-in-m0w]]: for the projected empirical center and the theorem's coefficient regularity and cutoff assumptions, $\sqrt n(P_n(L_n)-f_0)\Rightarrow G_{P_0}$ in $M_0(w)$.

[F10] [[thm-subsequence-characterization-of-convergence-in-probability]]: every sequence converging in probability has from each subsequence a further subsequence converging almost surely.

[F11] [[def-negative-sobolev-space-for-white-noise]]: the wavelets form a complete orthonormal basis of $L^2([0,1])$, so finite orthogonal projections converge in $L^2$.

[F12] [[cor-cauchy-schwarz-for-random-variables]]: square-integrable random variables satisfy $|\mathbb E[UV]|\le(\mathbb E U^2\mathbb E V^2)^{1/2}$.

## Proof




1.1 The posterior draw $f$ and center $T_n$ are $L^2$-valued, so [F2] embeds $\sqrt n(f-T_n)$ in $M_0(w)$; [F1] supplies its norm. For an $L$-Lipschitz map $T$ between metric spaces and any admissible bounded 1-Lipschitz test $h$ on its target, $h\circ T/\max(1,L)$ is an admissible test on its domain. Therefore
$$\beta_{BL}(T_\#\nu,T_\#\rho)\le\max(1,L)\beta_{BL}(\nu,\rho).$$
By [F3], $J$ is linear and Lipschitz with a finite constant $L_J$. The bound applied pointwise to the data-indexed laws in [A1] gives $\beta_{BL}(J_\#Q_n,J_\#G_{P_0})\to0$ in probability. Moreover, if $\ell:C([0,1])\to\mathbb R$ is continuous and linear, then $\ell\circ J$ is continuous and linear on $M_0(w)$. The centered Gaussian premise on $G_{P_0}$ says exactly that this scalar pushforward is centered normal, allowing zero variance. Thus $J_\#G_{P_0}$ is a centered Gaussian Borel law. In particular, for any finite $t_1,\ldots,t_m$ and real $a_1,\ldots,a_m$, the functional $x\mapsto\sum_i a_iJx(t_i)$ is continuous and linear, so the evaluation vector $(JG_{P_0}(t_i))_{i=1}^m$ is jointly centered Gaussian. This uses only the scalar Gaussian pushforward meaning of the premise, without characteristic-function uniqueness or a Gaussian existence theorem. To identify its covariance, let $p_J1_{[0,s]}$ be the finite wavelet projection of the indicator. The finite Gaussian coefficient covariance gives
$$\operatorname{Cov}(J(P_JG_{P_0})(s),J(P_JG_{P_0})(t))=P_0[(p_J1_{[0,s]}-P_0p_J1_{[0,s]})(p_J1_{[0,t]}-P_0p_J1_{[0,t]})].$$
By [F11], $p_J1_{[0,s]}\to1_{[0,s]}$ in Lebesgue $L^2$; since $f_0\le B$, this is also convergence in $L^2(P_0)$. The variance of a difference of two finite projected Gaussian evaluations is the $P_0$-variance of the corresponding difference of projected indicators, so it tends to zero; hence those evaluations are Cauchy in $L^2$. They also converge almost surely to $JG_{P_0}(s)$ because $P_JG_{P_0}\to G_{P_0}$ in $M_0(w)$ and $J$ is continuous. The almost-sure and in-probability limits coincide: for any $\varepsilon>0$, the probability that they differ by more than $\varepsilon$ is bounded by the two probabilities that each sequence differs from its limit by more than $\varepsilon/2$, both tending to zero. If $U_J,V_J$ are the projected evaluations and $U,V$ their $L^2$ limits, [F12] gives
$$|\mathbb E[U_JV_J]-\mathbb E[UV]|\le\|U_J-U\|_2\|V_J\|_2+\|U\|_2\|V_J-V\|_2\longrightarrow0;$$
the norms $\|V_J\|_2$ are bounded because $V_J\to V$ in $L^2$, and the means converge to zero as well. Thus the finite covariance passes to the limit. The resulting covariance is $P_0[(1_{[0,s]}-F_0(s))(1_{[0,t]}-F_0(t))]=F_0(s\wedge t)-F_0(s)F_0(t)$, the defining covariance of the $P_0$-Brownian bridge. [A1, F3, F11, F12, given, algebra]

1.2 The norm maps $x\mapsto\|x\|_{M(w)}$ and $F\mapsto\|F\|_\infty$ are 1-Lipschitz by the reverse triangle inequality. Applying the pushforward bound of step 1.1 first to the $M(w)$ norm and then to the supremum norm after $J$ gives bounded-Lipschitz convergence in probability of both posterior norm laws to their corresponding limit norm laws. Their CDFs satisfy [A3], so [F6] gives $R_n^M\to q_M$ and $R_n^C\to q_C$ in probability. For the projected empirical center $T_n=P_n(L_n)$, [F9] verifies [A2] under the smoothness and cutoff assumptions in [F9]. [A1, A2, A3, F1, F6, F9, step 1.1]

1.3 The posterior pushforward under either norm is a probability kernel on $[0,\infty)$. By [F5], the two lower quantiles are measurable and their posterior CDFs at those radii are at least $1-\alpha$. Since the centers and norms are measurable, the membership graphs of $C_n^M$ and $C_n^C$ are measurable. Thus both sets are credible by [F7]. [F5, F7, given, algebra]

2.1 By [A2] and [F4], $\sqrt n(T_n-f_0)\Rightarrow G_{P_0}$ and its primitive converges weakly to $B_{P_0}$. The frequentist error uses the negative center difference, but $\|f_0-T_n\|_{M(w)}=\|T_n-f_0\|_{M(w)}$ and $\|J(f_0-T_n)\|_\infty=\|J(T_n-f_0)\|_\infty$ because $J$ is linear. Thus each scaled frequentist error norm converges to the corresponding limit norm in [A3]. On the event that the random radius is within $\varepsilon$ of its deterministic limit from step 1.2, coverage is bounded above and below by probabilities for the frequentist norm with fixed thresholds expanded or contracted by $\varepsilon$. [F8] gives convergence of those fixed-threshold probabilities because [A3] makes their boundary probabilities zero. Sending $\varepsilon\downarrow0$ and using the CDF value $1-\alpha$ at its quantile from [A3] yields $1-\alpha$ for both coverage probabilities. This comparison does not require independence between the data-dependent posterior radii and the frequentist center. [A2, A3, F3, F4, F8, step 1.2, algebra] ∎
