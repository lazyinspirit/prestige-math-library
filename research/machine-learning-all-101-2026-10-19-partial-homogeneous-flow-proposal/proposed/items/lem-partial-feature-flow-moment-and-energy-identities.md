---
id: lem-partial-feature-flow-moment-and-energy-identities
kind: lemma
title: Partial feature flows have exact energy and weight-moment identities
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-axiom-of-choice, def-feature-measure-energy, def-wasserstein-gradient-flow-for-feature-energy, thm-superposition-for-finite-action-continuity-equations, lem-hilbert-valued-path-energy-characterization, thm-bounded-linear-maps-commute-with-bochner-integration, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-cauchy-schwarz-in-an-inner-product-space]
justified_by: []
proof_strategy: direct
axiom_use: "AC supplies the stated DC/Countable Choice and inherited measure/flow representation branches; all auxiliary constructions are proved locally."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Chizat and Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport, locally reconstructed auxiliary proof"
      url: "https://arxiv.org/pdf/1805.09545"
---
## Statement

Assume AC. Let $\Theta$ be either all of $\mathbb R^q$ or the compact closure of a nonempty bounded convex Euclidean domain and let $\phi:\Theta\to H$ and $W:\Theta\to[0,\infty)$ be bounded $C^{1,1}$ maps, with $H$ separable Hilbert. Put $\Phi(w,\theta)=w\phi(\theta)$, $V(w,\theta)=|w|W(\theta)$, and assume the feature-energy hypotheses and the prescribed differentiable risk $R\ge0$. Let $\mu_t$ be any flow in the feature-energy Wasserstein definition. Write $m_t=\int w\phi(\theta)d\mu_t$, $f_t=\nabla R(m_t)$, $P_t=\int|w|W(\theta)d\mu_t$, $S(t)=\int w^2d\mu_t$ and $A(t)=\int|v_t|^2d\mu_t$. On every finite interval these quantities have continuous or absolutely continuous representatives as appropriate, and
$$F(\mu_t)-F(\mu_s)=-\int_s^t A(q)dq,\qquad S(t)-S(s)=-2\int_s^t(\langle f_q,m_q\rangle+P_q)dq.$$
These identities hold at every finite pair of endpoints. In particular $F(\mu_t)\le E_0:=F(\mu_0)<\infty$ and $\int_0^\infty A(t)dt\le E_0$. If $\sup_{t\ge0}\|m_t\|\le M$, then, with $D=\sup_{R(z)\le E_0}\|\nabla R(z)\|$,
$$0\le S(t)\le S(0)+2(DM+E_0)t.$$
No bounded-support assumption on the initial weights is required.

## Statement references

[[def-axiom-of-choice]]

[[def-feature-measure-energy]]

[[def-wasserstein-gradient-flow-for-feature-energy]]

[[thm-superposition-for-finite-action-continuity-equations]]

[[lem-hilbert-valued-path-energy-characterization]]

[[thm-bounded-linear-maps-commute-with-bochner-integration]]

[[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]

[[thm-cauchy-schwarz-in-an-inner-product-space]]

## Facts & Assumptions

**Given:** AC and the hypotheses in the Statement.

[F1] A finite-action continuity-equation solution has a law of absolutely continuous characteristic paths with its time marginals and velocity. [[thm-superposition-for-finite-action-continuity-equations]]

[F2] The prescribed velocity is the negative minimum of the full constrained local subdifferential. [[def-wasserstein-gradient-flow-for-feature-energy]] [[def-feature-measure-energy]]

[F3] Hilbert paths with finite partition energy have Bochner derivatives, bounded linear maps commute with their integrals, and scalar AC functions obey the endpoint FTC. [[lem-hilbert-valued-path-energy-characterization]] [[thm-bounded-linear-maps-commute-with-bochner-integration]] [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]

[F4] Cauchy–Schwarz and the inherited AC assumption justify the path/time integrals. [[thm-cauchy-schwarz-in-an-inner-product-space]] [[def-axiom-of-choice]]

## Proof

**Given:** The data and assumptions in the Statement.

1.1 The first derivatives of $\phi,W$ are bounded. This follows from compactness for bounded $\Theta$; on the full Euclidean domain, boundedness and Lipschitz differential imply $\|D\phi(\theta)e\|\le2\|\phi\|_\infty+\operatorname{Lip}(D\phi)/2$ for unit $e$, by Taylor's inequality on a unit segment. The scalar bound is identical. On a finite horizon, W2 continuity bounds the second moments of $\mu_t$. Coupling Cauchy–Schwarz and $\|w\phi(\theta)-w'\phi(\theta')\|\le\|\phi\|_\infty|w-w'|+\|D\phi\|_\infty|w'|\,|\theta-\theta'|$ show norm continuity of $m_t$; hence $f_t$ is bounded and continuous there. [F2, F4, given, algebra]

2.1 Apply [F1]. Along almost every path, the derivative of $w\phi(\theta)$ is $w'\phi(\theta)+wD\phi_\theta\theta'$, with norm at most $C(1+|w|)|v|$. Its path/time integral is finite by the uniform second-moment bound and Cauchy–Schwarz. The same bound controls the derivative of $|w|W(\theta)$. For a real AC path, its derivative is zero almost everywhere on its zero set: at a differentiability point with nonzero derivative that zero is isolated, and isolated zeroes form a countable set. Thus the formula $(|w|)'=\operatorname{sign}(w)w'$ with sign zero set to zero holds almost everywhere. Integrating the pathwise FTC and using Fubini gives AC representatives of $m_t,P_t$ with the integrated derivatives. Their time derivatives are bounded by $C(1+\sqrt{S(t)})\sqrt{A(t)}$, hence are in $L^2$ on finite intervals; [F3] identifies the norm derivative of $m_t$. [F1, F3, F4, step 1.1]

3.1 Compose the AC moment with $R$: its differential is bounded on the compact image of the continuous moment path on the finite interval, so the composition is AC, and the ordinary Fréchet difference quotient gives derivative $\langle f_t,m_t'\rangle$ almost everywhere. Pair the inclusion [F2] with the characteristic velocity. At $w\ne0$ the potential derivatives are $\partial_w P_t=\langle f_t,\phi\rangle+\operatorname{sign}(w)W$ and $\nabla_\theta P_t=wD\phi^*f_t+|w|\nabla W$. Any domain normal $n$ satisfies $n\cdot\theta'=0$ at two-sided differentiability times: test its normal inequality against $\theta(t+h)$ for both signs of $h$. At $w=0$ the angular velocity is zero, and step 2.1 gives $w'=0$ almost everywhere on that zero set. The cusp and normal contributions therefore have zero pairing. The chain rule from step 2.1 yields $F'(t)=-\int(|w'|^2+|\theta'|^2)d\mu_t=-A(t)$ almost everywhere. The established AC representative gives the first identity at all endpoints. Nonnegativity of $R,V$ gives $F\le E_0$ and $\int_0^\infty A\le E_0$. [F1, F2, F3, step 2.1]

4.1 Off $w=0$, the unconstrained weight equation is $w'=-\langle f_t,\phi(\theta)\rangle-\operatorname{sign}(w)W(\theta)$; the theta-domain normal has no weight component. Consequently $(w^2)'=-2(w\langle f_t,\phi(\theta)\rangle+|w|W(\theta))$, also at almost every zero-set time. The product is integrable on finite intervals by Cauchy–Schwarz, the second-moment bound and bounded forcing. Integrating the pathwise identity gives the exact formula for $S(t)-S(s)$. If moments are uniformly bounded by $M$, the risk-sublevel bound gives $\|f_t\|\le D$, and $0\le P_t\le E_0$. Thus $|S'(t)|\le2(DM+E_0)$ almost everywhere; integrating proves the displayed linear growth bound. [F1, F2, F3, F4, step 3.1] ∎

## Source note

The direct partial-model chain rule preserves the stationarity/escape claims for any flow in the definition. It does not apply the common-cutoff global theorem to an initial law outside its hypotheses.
