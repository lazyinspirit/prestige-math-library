---
id: pthm-csm-dk-qualified-kinetic-entropy
kind: physics-theorem
title: "Conditional one-particle kinetic entropy production"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - post-csm-dk-selected-cutoff-kinetic-model
  - thm-csm-dk-regular-collision-h-and-equality
  - lem-csm-dk-gaussian-mixture-regularity
  - def-countable-choice
dependency_roles:
  post-csm-dk-selected-cutoff-kinetic-model: physical-assumption
  thm-csm-dk-regular-collision-h-and-equality: mathematical-premise
  lem-csm-dk-gaussian-mixture-regularity: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "Conditional prediction of nondecrease of the declared one-particle velocity-reference information entropy for the adopted homogeneous cutoff reflection model and the specified positive regular Gaussian-mixture preparation. It is not a statement about fine-grained N-particle Gibbs entropy, generic gases, a hard-sphere Boltzmann–Grad limit, hydrodynamic limits, experiments, or all physical realizations."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Kinetic Theory, Part 2"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
    - title: "R. Fitzpatrick, Plasma Physics, Boltzmann H-Theorem"
      url: "https://farside.ph.utexas.edu/teaching/plasma/lectures1/node40.html"
---

## Statement

Assume the physical adoption [[post-csm-dk-selected-cutoff-kinetic-model]] with a positive collision rate $\lambda$, particle mass $m>0$, reference speed $v_0>0$, and $k_B>0$. Prepare the normalized one-particle velocity density by

$$f_0(v)=\tfrac12\gamma_{aI,u}(v)+\tfrac12\gamma_{bI,u}(v),\qquad u\in\mathbb R^3,\quad 0<a<b,$$

where $u\in\mathbb R^3$ is a mean velocity measured in $\mathrm{m\,s^{-1}}$, $a,b$ are covariance variances in $(\mathrm{m\,s^{-1}})^2$, and $\gamma_{\Sigma,u}$ is the normalized Gaussian defined in [[lem-csm-dk-gaussian-mixture-regularity]]. For the resulting global regular model solution $f_t$, define the one-particle reference information entropy

$$S_B(t):=-k_B\int_{\mathbb R^3}f_t(v)\log(v_0^3f_t(v))\,dv.$$

Since $v_0^3f_t(v)$ is dimensionless, $S_B$ has SI units $\mathrm{J\,K^{-1}}$.

Then the model deduction is

$$\frac{dS_B}{dt}=\frac{k_B\lambda}{4}\int_{\mathbb R^3\times\mathbb R^3\times S^2}(B-A)\log(B/A)\,d\mu\ge0,$$

where $A=f_t(v)f_t(w)$ and $B=f_t(v')f_t(w')$ use the exact reflection variables of [[post-csm-dk-selected-cutoff-kinetic-model]]. The derivative is strictly positive at $t=0$. Equality at any time holds exactly when, for some mean velocity $\bar u\in\mathbb R^3$ and speed parameter $s>0$ (in $\mathrm{m\,s^{-1}}$),

$$f_t(v)=(2\pi s^2)^{-3/2}\exp\!\left(-\frac{|v-\bar u|^2}{2s^2}\right).$$

This conclusion is conditional on the adopted closed homogeneous model and regular preparation. It identifies a one-particle information functional with entropy units; it does not assert the fine-grained entropy of an $N$-particle ensemble, a general thermodynamic second law, or empirical entropy increase.

## Facts & Assumptions

**Given:** The postulated kinetic model, $\mathrm{AC}_\omega$, $m>0$, $\lambda>0$, $v_0>0$, $k_B>0$, and the stated Gaussian-mixture initial preparation.

[A1] The selected model equation is an equality in $X$ for norm-$C^1$ trajectories in the stated admissible domain, with normalized velocity density and the finite angular reflection law ([[post-csm-dk-selected-cutoff-kinetic-model]]). The Gaussian-mixture branch also supplies the specified pointwise regular representatives by [F1].

[A2] Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) as required by the mathematical measure and change-of-variables suppliers.

[F1] [[thm-csm-dk-regular-collision-h-and-equality]]: the specified mixture has a global positive smooth solution with $H'(t)=-\frac{\lambda}{4}\int(B-A)\log(B/A)\,d\mu\le0$, equality exactly for a normalized isotropic Gaussian, and strict production at the non-Gaussian initial mixture.

## Proof

**Given:** [A1], [A2], and [F1].

**Proof technique:** direct.

1.1 The physical postulate [A1] supplies the trajectory and the selected one-particle entropy convention; the mathematical theorem [F1] applies to this exact reflection measure, rate, reference speed, and initial mixture. Since $S_B=-k_BH$ and $k_B>0$, differentiating gives $S_B'=-k_BH'=\frac{k_B\lambda}{4}\int(B-A)\log(B/A)\,d\mu\ge0$. [A1, A2, F1, algebra]

2.1 The strict-production and equality clauses in [F1] transfer with the same positive factor $k_B$: the initial mixture has $S_B'(0)>0$, and at any later time $S_B'=0$ exactly when the velocity density has the normalized isotropic Gaussian form in the Statement. This is a deduction inside the adopted model and supplies no empirical premise. [A1, F1, step 1.1] ∎
