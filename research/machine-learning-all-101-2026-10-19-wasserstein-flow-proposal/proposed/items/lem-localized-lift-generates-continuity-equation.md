---
id: lem-localized-lift-generates-continuity-equation
kind: lemma
title: The Hilbert lift induces the localized Wasserstein continuity equation
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-feature-measure-energy, def-localized-hilbert-lift, thm-semiconvex-hilbert-gradient-flow, lem-lifted-energy-lipschitz-gradient, lem-localized-lift-subdifferential, def-wasserstein-gradient-flow-for-feature-energy, lem-feature-energy-strong-wasserstein-subgradient, thm-superposition-for-finite-action-continuity-equations, thm-continuity-equation-implies-ac2, thm-ac2-curve-admits-minimal-velocity, def-wasserstein-two-space-and-couplings, thm-wasserstein-two-is-a-metric, thm-bounded-linear-maps-commute-with-bochner-integration, thm-change-of-variables-for-expectation, thm-dominated-convergence, def-axiom-of-choice, lem-hilbert-valued-path-energy-characterization]
justified_by: []
proof_strategy: direct
axiom_use: "AC supplies the Hilbert gradient-flow and Bochner path representatives; it is inherited by the Wasserstein action interface."
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

Assume AC and the feature-measure energy hypotheses. Let $\mu_0\in\mathcal P_2(\Omega)$ have finite energy and be concentrated on $Q_r$, and let $X:[0,\infty)\to K=L^2(\mu_0;\mathbb R^d)$ be the Hilbert gradient flow of the localized lift $E_r$ from $X(0,s)=s$. Define $\mu_t=(X(t,\cdot))_\#\mu_0$, $m_t=\int\Phi(X(t,s))d\mu_0(s)$, and
$$v_t(u)=-S(\nabla R(m_t),u),$$
where $S(a,u)$ is the minimum-norm element of the full shifted set $d\Phi_u^*a+\partial_{\lambda_V}(V+\iota_{Q_r})(u)$. Then $v$ is Borel, $\int_0^T\int|v_t|^2d\mu_tdt<\infty$ for each $T<\infty$, and $\partial_t\mu_t+\nabla\cdot(v_t\mu_t)=0$ in distributions on $(0,T)\times\mathbb R^d$. The curve $\mu_t$ is in $AC^2([0,T];\mathcal P_2(\mathbb R^d),W_2)$, and $v$ is the minimum-action velocity, satisfying $\int_0^T\int|v_t|^2d\mu_tdt=\int_0^T|\dot\mu_t|_{W_2}^2dt$.

## Statement references

[[def-feature-measure-energy]]

[[def-localized-hilbert-lift]]

[[thm-semiconvex-hilbert-gradient-flow]]

[[lem-localized-lift-subdifferential]]

[[def-continuity-equation-with-finite-action]]

[Chizat and Bach, Proposition 2.5 and Appendix B.2.1](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Theorem 8.3.1](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** AC, the localized lift, the initial law, and its Hilbert gradient flow.

[F1] The Hilbert flow is locally absolutely continuous, has a Bochner derivative, and its derivative is the negative Hilbert subgradient almost everywhere. [[thm-semiconvex-hilbert-gradient-flow]]

[F2] The Hilbert subdifferential is the smooth feature gradient plus the measurable pointwise constrained potential subgradient. [[lem-localized-lift-subdifferential]]

[F3] Bochner paths have strongly measurable representatives and their integrals commute with bounded linear functionals. [[lem-hilbert-valued-path-energy-characterization]] [[thm-bounded-linear-maps-commute-with-bochner-integration]]

[F4] A curve satisfying the finite-action continuity equation is $W_2$-absolutely continuous with squared metric speed bounded by its action. [[thm-continuity-equation-implies-ac2]]

[F5] AC is the inherited axiom in the flow and transport suppliers. [[def-axiom-of-choice]]

[F6] An AC² Wasserstein curve has a minimum-action field in the spatial gradient closure, and every difference of two admissible fields annihilates those gradients. [[thm-ac2-curve-admits-minimal-velocity]]

[F7] Scalar domination passes limits through finite-measure integrals. [[thm-dominated-convergence]]




**Given:** AC and the data above.

## Proof

1.1 Since $m_t$ is the image of $X_t$ under Bochner integration, [F3] and the Lipschitz bound on $\Phi$ show $t\mapsto m_t$ is continuous. The full shifted selection $S(a,u)$ is jointly Borel by [F2], and $a(t)=\nabla R(m_t)$ is continuous, so $v$ is Borel. By [F1] and [F2], a representative of the Hilbert derivative satisfies $\dot X(t,s)=v_t(X(t,s))$ for almost every $(t,s)$. Its squared integral is $\int_0^T\int|v_t(u)|^2d\mu_t(u)dt=\int_0^T\|\dot X(t)\|_K^2dt<\infty$. [F1, F2, F3, F5]

2.1 For $\varphi\in C_c^\infty((0,T)\times\mathbb R^d)$, the scalar chain rule along the almost-everywhere absolutely continuous label paths gives $\displaystyle \frac d{dt}\varphi(t,X(t,s))=\partial_t\varphi(t,X(t,s))+\nabla_x\varphi(t,X(t,s))\cdot v_t(X(t,s))$ for almost every $(t,s)$. The right side is integrable: the test derivatives are bounded, $\mu_t$ is a probability, and [F1] gives finite $L^1$ velocity action on $[0,T]$. Integrating in $s$ and $t$, Fubini and the vanishing of $\varphi$ near $t=0,T$ give the weak continuity-equation identity for $\mu_t$. [F1, step 1.1]

2.2 The coupling $(X(s),X(t))_\#\mu_0$ gives $W_2(\mu_s,\mu_t)^2\le\|X(s)-X(t)\|_K^2$. Cauchy–Schwarz in time and [F1] imply $W_2(\mu_s,\mu_t)\le\int_s^t\|\dot X(q)\|_K\,dq$ for $s<t$. Thus $\mu\in AC^2$ on $[0,T]$. Alternatively [F4] applies to the continuity equation and the action bound from step 1.1. [F1, F4, step 1.1]


2.3 Fix a time $t$ and put $f_t(u)=\langle\nabla R(m_t),\Phi(u)\rangle+V(u)+\iota_{Q_r}(u)$. On $Q_r$ this function is bounded, lower semicontinuous and semiconvex, with a nonempty subdifferential and minimum section $g_t=-v_t$ bounded uniformly on compact time intervals by [F2]. For small $\varepsilon>0$ let $J_\varepsilon x$ minimize $f_t(y)+|x-y|^2/(2\varepsilon)$ and let $f_{t,\varepsilon}$ be the minimum value. The resolvent proof in [F2] gives $J_\varepsilon$ Lipschitz. Comparing the envelope at $x+h$ using $J_\varepsilon x$, and at $x$ using $J_\varepsilon(x+h)$, bounds the difference from $\langle(x-J_\varepsilon x)/\varepsilon,h\rangle$ by $O(|h|^2)$ locally. Thus $f_{t,\varepsilon}$ is $C^1$ and its gradient is $(x-J_\varepsilon x)/\varepsilon$. The monotonicity estimate from [F2] gives $|\nabla f_{t,\varepsilon}(x)|\le |g_t(x)|/(1+\varepsilon\alpha_t)$ on $Q_r$, with $\alpha_t$ a semiconvexity coefficient; the same proof gives pointwise convergence to $g_t(x)$. Dominated convergence yields convergence in $L^2(\mu_t)$. Each gradient belongs to the closure of gradients of compactly supported smooth functions: multiply the $C^1$ envelope by smooth cutoffs equal to one on $B_N$, with derivative $O(1/N)$, and then mollify. On $Q_r$ the envelope stays between the fixed lower bound and upper bound of $f_t$, so the cutoff derivative term tends to zero in $L^2(\mu_t)$; the other tail tends to zero by the bound just proved. Mollification converges uniformly in $C^1$ on each compact set. Therefore $g_t$ belongs to the spatial gradient closure in $L^2(\mu_t)$. [F2, F7, step 1.1, construct]

3.1 Let $w$ be the minimum-action field for $\mu$ supplied by the AC² minimal-velocity theorem. Subtracting its continuity equation from that of $v$ and using time tensor tests shows $\int(v_t-w_t)\cdot\nabla\psi\,d\mu_t=0$ for almost every $t$, simultaneously for a countable set of compactly supported smooth $\psi$ dense in $C^1$ on each compact ball. Such a set is obtained by rational polynomial approximations and fixed smooth cutoffs; extend the equality to every compactly supported smooth test by uniform gradient approximation. By step 2.3, $v_t$ belongs to their $L^2(\mu_t)$ gradient closure. Hence $\langle v_t-w_t,v_t\rangle=0$. The minimal-velocity theorem also gives $w_t$ in this closure and $v_t-w_t$ orthogonal to it (equivalently its Pythagorean identity), so $\|v_t-w_t\|_2^2=0$. This is the required tangent-gradient orthogonality, including the constraint: for any absolutely continuous label path in $Q_r$, at any two-sided differentiability time and every $n\in N_{Q_r}(X_t)$, the inequalities $n\cdot(X_{t+h}-X_t)\le0$ for both signs of $h$ give $n\cdot\dot X_t=0$. Thus normal-cone terms contribute no velocity pairing; the constrained minimum cannot be replaced by an unconstrained selection. We have $v=w$ almost everywhere, so its squared action equals $\int_0^T|\dot\mu_t|_{W_2}^2dt$, as asserted. [F1, F2, F4, F6, step 2.1, step 2.2, step 2.3] ∎
