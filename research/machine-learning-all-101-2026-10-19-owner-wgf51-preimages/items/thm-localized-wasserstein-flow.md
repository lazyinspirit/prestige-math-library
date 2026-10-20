---
id: thm-localized-wasserstein-flow
kind: theorem
title: The localized Wasserstein gradient flow exists, satisfies EVI, and is unique
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-feature-measure-energy, def-wasserstein-gradient-flow-for-feature-energy, lem-feature-energy-geodesically-semiconvex, lem-feature-energy-strong-wasserstein-subgradient, lem-localized-lift-generates-continuity-equation, lem-characteristics-unique-and-stable, lem-w2-distance-derivative-under-a-continuity-equation, thm-superposition-for-finite-action-continuity-equations, thm-continuity-equation-implies-ac2, thm-ac2-curve-admits-minimal-velocity, def-axiom-of-choice, thm-semiconvex-hilbert-gradient-flow, lem-lifted-energy-lipschitz-gradient]
justified_by: []
proof_strategy: direct
axiom_use: "AC is used by the Hilbert gradient-flow construction, superposition, optimal-plan selection, and disintegration; it is carried explicitly into the localized Wasserstein conclusion."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Luigi Ambrosio, Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
---
## Statement

Assume AC and the feature-measure energy hypotheses. Let $r>0$ and let $\mu_0\in\mathcal P_2(\Omega)$ have finite energy and be concentrated on $Q_r$. There is a unique curve $\mu:[0,\infty)\to\mathcal P_2(Q_r)$ in $AC^2_{\mathrm{loc}}$ that starts at $\mu_0$, solves the continuity equation with velocity equal almost everywhere to the negative minimum-norm element of $\partial(F'(\mu_t)+\iota_{Q_r})$, and satisfies
$$F(\mu_t)-F(\mu_s)=-\int_s^t\int|v_q(u)|^2d\mu_q(u)dq\qquad(0\le s\le t<\infty).$$
Writing $\lambda_r=\lambda_V-L_rA_r^2-N_rB_r$, it also satisfies the evolution variational inequality
$$\frac12\frac d{dt}W_2^2(\mu_t,\eta)+\frac{\lambda_r}{2}W_2^2(\mu_t,\eta)\le F(\eta)-F(\mu_t)$$
for each fixed $\eta\in\mathcal P_2(Q_r)$ and almost every $t>0$ (with the exceptional null set allowed to depend on $\eta$). Any two such localized flows obey $W_2(\mu_t,\nu_t)\le e^{-\lambda_r t}W_2(\mu_0,\nu_0)$.

## Statement references

[[def-feature-measure-energy]]

[[def-wasserstein-gradient-flow-for-feature-energy]]

[[lem-feature-energy-geodesically-semiconvex]]

[[lem-feature-energy-strong-wasserstein-subgradient]]

[[lem-localized-lift-generates-continuity-equation]]

[Chizat and Bach, Proposition 2.5](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Theorem 11.2.1](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** AC, $r$, $\mu_0$, and the model regularity hypotheses.

[F1] The localized lift is a proper lower-bounded semiconvex energy on a separable Hilbert space; its gradient flow exists uniquely for all time and satisfies the Hilbert energy identity. [[thm-semiconvex-hilbert-gradient-flow]] [[lem-lifted-energy-lipschitz-gradient]]

[F2] The Hilbert flow pushes forward to a finite-action continuity-equation solution and an $AC^2$ Wasserstein curve with the displayed minimum pointwise velocity. [[lem-localized-lift-generates-continuity-equation]]

[F3] The model energy has the all-coupling strong subgradient inequality with coefficient $\lambda_r$. [[lem-feature-energy-strong-wasserstein-subgradient]]

[F4] Along a finite-action continuity equation, squared distance to a fixed measure has derivative bounded above by the velocity-pairing with any optimal coupling. [[lem-w2-distance-derivative-under-a-continuity-equation]]

[F5] Any two localized continuity-equation solutions with these velocities satisfy the stated W2 stability estimate. [[lem-characteristics-unique-and-stable]]

[F6] AC is the inherited axiom in [F1]–[F5]. [[def-axiom-of-choice]]

## Proof


**Given:** AC, $r$, $\mu_0$ and the hypotheses in the Statement.

1.1 Form the label Hilbert space $K=L^2(\mu_0;\mathbb R^d)$ and the initial vector $X_0(s)=s$. It has finite $E_r$ because $F(\mu_0)<\infty$. [F1] yields the unique Hilbert gradient flow $X_t$ for all $t\ge0$. Define $\mu_t=(X_t)_\#\mu_0$. By [F2] this curve solves the localized continuity equation with the prescribed minimum-norm velocity and is in $AC^2_{\mathrm{loc}}$. [F1, F2, F6, construct]

2.1 The Hilbert energy identity in [F1] is $E_r(X_t)-E_r(X_s)=-\int_s^t\|\dot X_q\|_K^2dq$. By [F2], $\dot X_q(s)=v_q(X_q(s))$ almost everywhere and $E_r(X_q)=F(\mu_q)$. The change-of-variables identity for the pushforward therefore gives the displayed Wasserstein energy identity. [F1, F2, step 1.1]

2.2 Fix $\eta\in\mathcal P_2(Q_r)$ and a time where [F4] applies. Choose an optimal coupling $\gamma_t$ of $\mu_t,\eta$. The derivative estimate [F4] gives $\displaystyle \frac12\frac d{dt}W_2^2(\mu_t,\eta)\le\int(x-y)\cdot v_t(x)d\gamma_t=-\int g_{\mu_t}(x)\cdot(x-y)d\gamma_t.$ By [F3], $F(\eta)\ge F(\mu_t)+\int g_{\mu_t}(x)\cdot(y-x)d\gamma_t+\frac{\lambda_r}{2}W_2^2(\mu_t,\eta)$. Combining the inequalities proves the EVI. [F3, F4, step 1.1]

3.1 If $\mu$ and $\nu$ are two such solutions, [F5] gives their stability estimate; equal initial data imply $W_2(\mu_t,\nu_t)=0$ for every $t$, hence equality of the measures and uniqueness. The construction in step 1.1 proves existence. [F5, step 1.1] ∎