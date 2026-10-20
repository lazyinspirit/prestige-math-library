---
id: lem-w2-distance-derivative-under-a-continuity-equation
kind: lemma
title: Derivative of squared W2 distance along a finite-action continuity equation
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-wasserstein-two-space-and-couplings, thm-wasserstein-two-is-a-metric, prop-existence-and-lower-semicontinuity-of-optimal-couplings, thm-superposition-for-finite-action-continuity-equations, lem-hilbert-valued-path-energy-characterization, thm-disintegration-of-a-joint-law-on-standard-borel-spaces, def-standard-borel-space, lem-finite-products-of-standard-borel-spaces-are-standard-borel, def-measure-kernel-and-probability-kernel, thm-measurability-of-integration-against-a-kernel, def-product-measure-on-sigma-finite-spaces, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, lem-countable-generators-yield-countable-set-algebras, lem-finite-measure-sets-are-approximable-by-a-countable-generating-algebra, thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
axiom_use: "AC supplies an optimal coupling, the superposition path law and disintegration of that law against the time-t position. Countable Choice supplies the separable L2 path space and Hilbert-valued differentiation."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Luigi Ambrosio, Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
---
## Statement

Assume AC. Let $(\mu_t,v_t)_{t\in[0,T]}$ be a narrowly continuous finite-action solution of the continuity equation on $\mathbb R^d$, and fix $\nu\in\mathcal P_2(\mathbb R^d)$. For almost every $t\in(0,T)$, the scalar map $t\mapsto\frac12W_2^2(\mu_t,\nu)$ is differentiable and, for every optimal coupling $\gamma_t$ of $\mu_t$ and $\nu$,
$$\frac d{dt}\frac12W_2^2(\mu_t,\nu)\le\int_{\mathbb R^d\times\mathbb R^d}(x-y)\cdot v_t(x)\,d\gamma_t(x,y).$$

## Statement references

[[def-wasserstein-two-space-and-couplings]]

[[thm-superposition-for-finite-action-continuity-equations]]

[[prop-existence-and-lower-semicontinuity-of-optimal-couplings]]

[Ambrosio, Gigli, and Savaré, Theorem 8.4.7](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

[Chizat and Bach, Appendix B.2.1](https://arxiv.org/pdf/1805.09545)

## Facts & Assumptions

**Given:** AC, a finite-action continuity-equation solution, and $\nu\in\mathcal P_2(\mathbb R^d)$.

[F1] A finite-action continuity-equation solution has a path law on absolutely continuous curves whose time marginals are $\mu_t$ and whose path derivative is $v_t$ almost everywhere. [[thm-superposition-for-finite-action-continuity-equations]]

[F2] Optimal couplings exist for probability measures in $\mathcal P_2(\mathbb R^d)$. [[prop-existence-and-lower-semicontinuity-of-optimal-couplings]]

[F3] Standard Borel disintegration constructs a joint law of a path and a fixed endpoint from a coupling of their time-$t$ marginals. [[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]] [[def-standard-borel-space]] [[lem-finite-products-of-standard-borel-spaces-are-standard-borel]]

[F4] A finite-action path law induces a continuous Hilbert-valued time curve with square-integrable derivative; its derivative is recovered almost everywhere by the path-energy characterization. [[lem-hilbert-valued-path-energy-characterization]]

[F5] The path-space $L^2$ is separable because the path space is Polish and its Borel sigma-algebra has a countable generator whose finite-measure sets are approximable by a countable algebra; simple functions are dense. [[lem-countable-generators-yield-countable-set-algebras]] [[lem-finite-measure-sets-are-approximable-by-a-countable-generating-algebra]] [[thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p]]

[F6] AC supplies the optimal-plan, superposition and disintegration selections. [[def-axiom-of-choice]]

## Proof


**Given:** AC, $T$, $(\mu_t,v_t)$, and $\nu$.

1.1 By [F1] and the AC construction [F6], choose a probability $\Pi$ on $C([0,T];\mathbb R^d)$ with time marginals $\mu_t$ and path derivative $\dot\gamma(t)=v_t(\gamma(t))$ almost everywhere. Its expected action is finite. For $s<t$, Cauchy–Schwarz gives $\|Z_t-Z_s\|_{L^2(\Pi)}^2\le(t-s)\int\!\int_s^t|\dot\gamma(q)|^2dq\,d\Pi$, so $Z_t(\gamma)=\gamma(t)$ is a continuous path in $H=L^2(\Pi;\mathbb R^d)$. For each partition $P=(t_i)$, the same estimate and summation give $\displaystyle \sum_i\frac{\|e_{t_{i+1}}-e_{t_i}\|_{L^2(\Pi)}^2}{t_{i+1}-t_i}\le\int\!\int_0^T|\dot\gamma(t)|^2dt\,d\Pi(\gamma)<\infty.$ The path space is Polish, so [F5] makes $H=L^2(\Pi;\mathbb R^d)$ separable. The pathwise fundamental theorem and Fubini show $Z_t=Z_0+\int_0^t(\gamma\mapsto v_q(\gamma(q)))dq$ in $H$; this Bochner integral exists by the finite action. Apply [F4] to the continuous Hilbert-valued path $Z_t$: its norm derivative is the displayed Bochner integrand almost everywhere, so $\dot Z_t(\gamma)=v_t(\gamma(t))$ in $L^2(\Pi)$ almost everywhere. [F1, F4, F5, construct]

2.1 The coupling $(Z_s,Z_t)_\#\Pi$ gives $W_2(\mu_s,\mu_t)\le\|Z_s-Z_t\|_H\le\int_s^t\|\dot Z_q\|_H dq$. Hence $t\mapsto W_2(\mu_t,\nu)$ is absolutely continuous; it is bounded on $[0,T]$, so its square is also absolutely continuous and differentiable almost everywhere. Choose a time where this scalar derivative and $Z_t$'s Hilbert derivative exist and the identities in step 1.1 hold. [F1, F2, step 1.1]

3.1 For any optimal coupling $\gamma_t$ supplied by [F2], disintegrate $\Pi$ conditionally on $Z_t=x$ using [F3] and combine that kernel with $\gamma_t(dx,dy)$. The resulting joint law of $(\gamma,y)$ has path marginal $\Pi$, endpoint marginal $\nu$, and $(Z_t,y)$ marginal $\gamma_t$. Thus $(Z_{t+h},y)$ is a coupling of $\mu_{t+h},\nu$, so optimality of $\gamma_t$ gives $\displaystyle \frac12W_2^2(\mu_{t+h},\nu)-\frac12W_2^2(\mu_t,\nu)\le\frac12\mathbb E\bigl[|Z_{t+h}-y|^2-|Z_t-y|^2\bigr].$ Divide by $h>0$ and let $h\downarrow0$. Differentiability of $Z$ in $L^2$ gives $\|Z_{t+h}-Z_t\|_H=O(h)$, so the quadratic increment term divided by $h$ tends to zero; Cauchy–Schwarz passes the linear term to $\mathbb E\langle Z_t-y,\dot Z_t\rangle$, which equals $\int(x-y)\cdot v_t(x)d\gamma_t$ by the marginals and derivative identity. The left side converges to the derivative at $t$. The construction works for every optimal $\gamma_t$, proving the inequality. [F1, F2, F3, F4, step 1.1, step 2.1] ∎