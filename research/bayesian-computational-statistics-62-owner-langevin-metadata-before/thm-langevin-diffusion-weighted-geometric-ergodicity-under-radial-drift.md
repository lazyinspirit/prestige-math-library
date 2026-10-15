---
id: thm-langevin-diffusion-weighted-geometric-ergodicity-under-radial-drift
kind: theorem
title: Radial drift gives weighted geometric contraction of Langevin diffusion
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-axiom-of-choice
  - def-v-weighted-total-variation-distance
  - lem-langevin-diffusion-density-reversibility-and-compact-minorization
  - lem-langevin-potential-exponential-generator-drift
  - lem-ula-potential-coercivity-from-radial-drift
  - lem-weighted-drift-minorization-gives-contraction-and-invariant-law
  - thm-multidimensional-ito-formula-for-brownian-driven-processes
  - thm-stopping-an-ito-integral
  - thm-ito-isometry-and-linearity-in-predictable-l2
  - thm-fatou-lemma
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
axiom_use: "AC is inherited through the strong Brownian solution, Ito/change-of-measure interfaces, and the Hahn/Jordan decomposition in weighted drift-minorization. Stopping levels and constants are explicit."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Durmus and Moulines, Non-asymptotic convergence analysis for the Unadjusted Langevin Algorithm, Proposition 7 and section 4.3; local weighted-contraction proof"
      url: "https://arxiv.org/html/1507.05021v3"
---

## Statement

Assume AC and the smoothness, minimizer, normalization and radial hypotheses of
[[lem-langevin-potential-exponential-generator-drift]]. Suppose
$Z=\int e^{-U(x)}dx\in(0,\infty)$ and put $\pi(dx)=Z^{-1}e^{-U(x)}dx$.
For $0<s<1$, write $H_s=e^{sU}$ and let $a_s=sdL$ and $b_s=\beta_s$ be the
constants in that lemma. The Langevin semigroup of
[[lem-langevin-diffusion-density-reversibility-and-compact-minorization]] satisfies
$$P_tH_s(x)\le e^{-a_st}H_s(x)+\frac{b_s}{a_s}(1-e^{-a_st}),\qquad \pi H_s<\infty.$$
There are $C_s<\infty$ and $v_s>0$, depending on the potential and $s$, such that
for any probability measures $\mu,\nu$ with finite $H_s$ moments and any $t\ge0$,
$$\|\mu P_t-\nu P_t\|_{H_s}\le C_se^{-v_st}\|\mu-\nu\|_{H_s}.$$
The norm is [[def-v-weighted-total-variation-distance]].

## Facts & Assumptions

**Given:** AC, $U$, its constants, the semigroup, and $s\in(0,1)$ in the Statement.

[A1] AC is inherited through the stochastic and Hahn/Jordan interfaces. [[def-axiom-of-choice]]

[F1] The Langevin equation has a Borel Markov semigroup, invariant target $\pi$, and one-step minorization on every compact ball for every fixed positive time. [[lem-langevin-diffusion-density-reversibility-and-compact-minorization]]

[F2] For $H_s=e^{sU}$ the formal generator satisfies $\mathscr L_UH_s\le-a_sH_s+b_s1_{\{\|x-x_\star\|\le K_s\}}$, with $a_s>0$ and finite $b_s$. [[lem-langevin-potential-exponential-generator-drift]]

[F3] Radial drift gives $U(x)\ge c\|x-x_\star\|^\alpha-C$ for $c>0$. Consequently every sublevel set of $H_s$ is contained in a finite-radius ball. [[lem-ula-potential-coercivity-from-radial-drift]]

[F4] Ito's formula applies to the solution; after stopping in a compact ball its stochastic integral is square-integrable and has mean zero. [[thm-multidimensional-ito-formula-for-brownian-driven-processes]] [[thm-stopping-an-ito-integral]] [[thm-ito-isometry-and-linearity-in-predictable-l2]]

[F5] Fatou passes nonnegative stopped estimates to the unstopped limit; Tonelli integrates the resulting nonnegative kernel bounds over initial laws. [[thm-fatou-lemma]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F6] Global geometric drift and a common minorization on one sufficiently large weight-sublevel set give a unique invariant probability, finite weight moment, and geometric contraction in that weighted norm. Uniqueness holds among all invariant probabilities. [[lem-weighted-drift-minorization-gives-contraction-and-invariant-law]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Fix a deterministic starting point $x$ and horizon $t$. Stop the continuous solution at its first exit $\tau_n$ from the radius-$n$ ball about $x_\star$, taking $n>\|x-x_\star\|$. Apply [F4] to $e^{a_su}H_s(X_u)$ up to $t\wedge\tau_n$. Its drift is at most $b_se^{a_su}$ by [F2]. Its stochastic integrand is bounded on this stopped finite cylinder, so its expectation is zero. Hence $$\mathbb E_x[e^{a_s(t\wedge\tau_n)}H_s(X_{t\wedge\tau_n})]\le H_s(x)+\frac{b_s}{a_s}(e^{a_st}-1).$$ The globally defined continuous paths in [F1] are bounded on $[0,t]$, so $\tau_n>t$ eventually on each such path. Fatou [F5] and division by $e^{a_st}$ give the claimed semigroup moment bound. [A1, F1, F2, F4, F5, algebra]

2.1 In particular $P_1H_s\le aH_s+b$ with $a=e^{-a_s}\in(0,1)$ and $b=(b_s/a_s)(1-e^{-a_s})<\infty$. Any sufficiently large level set $\{H_s\le R\}$ is contained in a ball by [F3], and inherits the common minorization for $P_1$ from [F1]. The weighted drift-minorization result [F6] therefore gives an invariant law $\xi_s$ with finite $H_s$ moment and constants $M_s<\infty$, $r_s\in(0,1)$ such that $$\|\mu P_n-\nu P_n\|_{H_s}\le M_sr_s^n\|\mu-\nu\|_{H_s}\qquad(n\in\mathbb N).$$ Since [F1] already makes $\pi$ invariant and [F6] gives uniqueness among every invariant probability, $\xi_s=\pi$ and $\pi H_s<\infty$. [F1, F3, F6, step 1.1]

3.1 For $0\le u<1$, step 1.1 gives $P_uH_s\le H_s+b_s/a_s\le(1+b_s/a_s)H_s$, since $H_s\ge1$. For every Borel $f$ with $|f|\le H_s$, therefore $|P_uf|\le(1+b_s/a_s)H_s$. Taking the test-function supremum shows $$\|\mu P_u-\nu P_u\|_{H_s}\le(1+b_s/a_s)\|\mu-\nu\|_{H_s}.$$ All integrals are finite by step 1.1 and [F5]. Write $t=n+u$ with $n=\lfloor t\rfloor$ and apply this estimate after the integer contraction in step 2.1. With $v_s=-\log r_s>0$ and $C_s=M_s(1+b_s/a_s)r_s^{-1}$, the result follows from $r_s^n\le r_s^{-1}e^{-v_st}$. This includes $t=0$ and all stated finite-moment initial laws. [F5, F6, step 1.1, step 2.1, algebra] ∎
