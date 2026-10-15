---
id: thm-ula-quantitative-invariant-law-weighted-tv-bias
kind: theorem
title: ULA's invariant-law bias under smoothness and radial drift
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - alg-unadjusted-langevin-algorithm
  - def-axiom-of-choice
  - def-v-weighted-total-variation-distance
  - lem-ula-uniform-exponential-moments-and-invariant-laws
  - lem-ula-pathwise-kl-error-bound
  - lem-weighted-pinsker-inequality-for-probability-laws
  - thm-langevin-diffusion-weighted-geometric-ergodicity-under-radial-drift
proof_strategy: direct
axiom_use: "AC is inherited through the Gaussian and Brownian constructions, Ito and Radon–Nikodym change of measure, and the Hahn/Jordan decomposition used to construct invariant laws. The fixed physical-time block and its constants introduce no additional choices."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alain Durmus and Éric Moulines, Non-asymptotic convergence analysis for the Unadjusted Langevin Algorithm, Theorem 10 and proof §4.6"
      url: "https://arxiv.org/pdf/1507.05021v3"
      locator: "Theorem 10 and its complete proof in §4.6; the proof uses continuous-time weighted ergodicity, a Girsanov path-space KL estimate, discrete Euler drift/ergodicity, weighted Pinsker, and an inhomogeneous moment bound."
---

## Statement

Assume AC ([[def-axiom-of-choice]]) and the hypotheses of [[alg-unadjusted-langevin-algorithm]]. In
addition, let $U\in C^2(\mathbb R^d)$, let $\nabla U$ be $L$-Lipschitz for
$L>0$, and suppose there are a global minimizer $x_\star$, $\rho>0$,
$\alpha\in(1,2]$, and $M_\rho\ge0$ such that
$$\langle\nabla U(x),x-x_\star\rangle\ge\rho\|x-x_\star\|^\alpha \quad\text{whenever }\|x-x_\star\|\ge M_\rho.$$
Assume $0<Z_U=\int e^{-U(x)}dx<\infty$ and normalize $U(x_\star)=0$;
subtracting a constant leaves the target and ULA kernel unchanged and only
rescales the weight by a constant. Put $\pi_U(dx)=Z_U^{-1}e^{-U(x)}dx$ and
$V(x)=e^{U(x)/2}$. For every $0<\gamma<L^{-1}$, the ULA kernel has a unique
invariant probability $\pi_\gamma$, both $\pi_U$ and $\pi_\gamma$ have finite
$V^{1/2}$ moments, and
$$\|\pi_U-\pi_\gamma\|_{V^{1/2}}\le C\gamma^{1/2},$$
where the finite source-dependent constant $C$ is independent of $\gamma$.
The norm is the weighted total-variation norm of
[[def-v-weighted-total-variation-distance]].

## Facts & Assumptions

**Given:** AC and the potential, target, weights and step size in the Statement.

[A1] AC is inherited through the Brownian/Gaussian, Ito, change-of-measure and Hahn/Jordan interfaces. [[def-axiom-of-choice]]

[F1] The ULA kernel $R_\gamma$ is that of [[alg-unadjusted-langevin-algorithm]]. It has a unique invariant $\pi_\gamma$ with finite $V$ moment for every $0<\gamma<L^{-1}$. With $\gamma_0=(2L)^{-1}$, constants $M_V,M_W,M_g<\infty$ independent of the step satisfy $\pi_\gamma V\le M_V$ for $\gamma\le\gamma_0$, $\pi_\gamma W\le M_W$ for all allowed steps, and $\|\nabla U(x)\|^2+\|x-x_\star\|^2\le M_gV(x)$, where $W=V^{1/2}$. [[lem-ula-uniform-exponential-moments-and-invariant-laws]]

[F2] The Langevin semigroup leaves $\pi_U$ invariant, has $\pi_U V<\infty$, satisfies $P_tV\le V+B_V$ for a fixed finite $B_V$, and contracts zero-mass differences in the W norm: $\|\mu P_t-\nu P_t\|_W\le C_We^{-v_Wt}\|\mu-\nu\|_W$, with $C_W<\infty$ and $v_W>0$. [[thm-langevin-diffusion-weighted-geometric-ergodicity-under-radial-drift]]

[F3] From any finite-second-moment initial probability, the endpoint relative entropy of an m-step Euler interpolation against the Langevin endpoint satisfies $D(\operatorname{Law}(X_m)\|\operatorname{Law}(Y_{m\gamma}))\le (L^2/4)\sum_{k=0}^{m-1}(\gamma^3\mathbb E\|\nabla U(X_k)\|^2/3+d\gamma^2)$. [[lem-ula-pathwise-kl-error-bound]]

[F4] For probabilities with finite V moments, weighted Pinsker with $W^2=V$ gives $\|\mu-\nu\|_W^2\le2(\mu V+\nu V)D(\mu\|\nu)$. [[lem-weighted-pinsker-inequality-for-probability-laws]]

[F5] Weighted total variation is the supremum over Borel tests $|f|\le W$ and obeys the triangle inequality; it is at most $\mu W+\nu W$ for two probabilities with finite W moments. [[def-v-weighted-total-variation-distance]]

## Proof

**Given:** The hypotheses in the Statement, with $W=e^{U/4}$ and $\gamma_0=(2L)^{-1}$.

1.1 By [F1], for each allowed step the unique invariant probability $\pi_\gamma$ exists and has finite V moment, hence finite W moment since $1\le W\le V$. By [F2], $\pi_U V<\infty$, so its W moment is finite too. Choose a fixed $T_0>0$ so that $C_We^{-v_WT_0}\le1/2$, possible because $v_W>0$. All these constants depend only on the potential and its hypotheses. [A1, F1, F2, algebra, choose]

2.1 First suppose $0<\gamma\le\gamma_0$. Put $m=\lceil T_0/\gamma\rceil$ and $T=m\gamma$, so $T_0\le T<T_0+\gamma\le T_0+\gamma_0$. Start Euler with law $\mu=\pi_\gamma$, independently of its Brownian increments; every grid-time law is $\mu$ by invariance. Its second moment is finite by [F1], since $\|x\|^2\le2\|x-x_\star\|^2+2\|x_\star\|^2$. Moreover $\mathbb E\|\nabla U(X_k)\|^2\le M_gM_V$ at every grid time. Apply [F3] to the diffusion with the same initial law. Euler's endpoint law is $\mu$ and diffusion's is $\mu P_T$, giving $$D(\mu\|\mu P_T)\le\frac{L^2}{4}m\left(\frac{\gamma^3}{3}M_gM_V+d\gamma^2\right)\le K_D\gamma,\qquad K_D=\frac{L^2}{4}(T_0+\gamma_0)\left(d+\frac{\gamma_0}{3}M_gM_V\right).$$ The initial Brownian/Gaussian construction uses only the inherited AC assumption. [A1, F1, F3, step 1.1, algebra, construct]

3.1 By [F1], $\mu V\le M_V$; by [F2], $(\mu P_T)V\le M_V+B_V$. Weighted Pinsker [F4] and step 2.1 therefore imply $$\|\mu-\mu P_T\|_W\le K_E\sqrt\gamma,\qquad K_E=\sqrt{2(2M_V+B_V)K_D}.$$ Since $\pi_U P_T=\pi_U$, the contraction [F2], the choice of $T_0$, and $T\ge T_0$ give $$\|\mu-\pi_U\|_W\le K_E\sqrt\gamma+\|\mu P_T-\pi_U P_T\|_W\le K_E\sqrt\gamma+\tfrac12\|\mu-\pi_U\|_W.$$ The last norm is finite by step 1.1, so subtraction yields $\|\pi_\gamma-\pi_U\|_W\le2K_E\sqrt\gamma$ throughout the small-step range. [F1, F2, F4, F5, step 1.1, step 2.1, algebra]

4.1 If $\gamma_0<\gamma<L^{-1}$, [F1] and [F5] give $\|\pi_\gamma-\pi_U\|_W\le M_W+\pi_U W\le (M_W+\pi_U W)\gamma_0^{-1/2}\sqrt\gamma$. Together with step 3.1, this proves the stated bound with $$C=\max\{2K_E,(M_W+\pi_U W)\gamma_0^{-1/2}\}<\infty,$$ independent of $\gamma$ over the entire specified open interval. Step 1.1 supplies both finite weight moments and uniqueness/existence for every such step. [F1, F5, step 1.1, step 3.1, algebra] ∎
