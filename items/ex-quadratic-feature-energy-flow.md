---
id: ex-quadratic-feature-energy-flow
kind: example
title: Exact quadratic feature-energy flow and particle limit
status: draft
dependency_level: 13
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [thm-global-wasserstein-flow-existence-uniqueness-and-stability, thm-finite-particle-flows-converge-in-w2, def-feature-measure-energy, def-wasserstein-two-space-and-couplings, thm-wasserstein-two-is-a-metric, def-axiom-of-choice, thm-superposition-for-finite-action-continuity-equations]
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the existence and W2 framework; the explicit scalar characteristic and scaling identity require no further choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Ambrosio, Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
---
## Example

Assume AC. In dimension $d\ge1$, take $\mathcal H=\{0\}$, $R=0$, $\Phi=0$, $\Omega=\mathbb R^d$, $V(x)=|x|^2/2$, and $Q_r=\overline B(0,r)$ for every $r>0$. This cutoff family has the required relative-neighborhood property, and $\sup_{Q_r}\|\partial V\|=r\le1+r$, so $C_1=C_2=1$ works. Thus $F(\mu)=\frac12\int|x|^2d\mu(x)$. For any $\mu_0\in\mathcal P_2(\mathbb R^d)$, the unique Wasserstein gradient flow is $\mu_t=(e^{-t}\operatorname{id})_\#\mu_0$. The corresponding $m$-particle gradient flow satisfies $x_i(t)=e^{-t}x_i(0)$ under the inner product $m^{-1}\sum_i x_i\cdot y_i$. For every empirical probability $\mu_{m,0}$ and every $t\ge0$,
$$W_2(\mu_{m,t},\mu_t)=e^{-t}W_2(\mu_{m,0},\mu_0),$$
so any initial convergence in $W_2$ persists uniformly on every compact time interval.

## Example references

[[def-feature-measure-energy]]

[[thm-global-wasserstein-flow-existence-uniqueness-and-stability]]

[[thm-finite-particle-flows-converge-in-w2]]

[[def-wasserstein-two-space-and-couplings]]

[[thm-wasserstein-two-is-a-metric]]

[[def-axiom-of-choice]]

[Chizat and Bach, Propositions 2.3/2.5 and Theorem 2.6](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapter 11](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** AC, $d\ge1$, $\mu_0\in\mathcal P_2(\mathbb R^d)$, and an empirical initial probability $\mu_{m,0}$.

[F1] Expanding the defining inequality for $\partial_0V$ gives $V(y)-V(x)-x\cdot(y-x)=|y-x|^2/2\ge0$, and the first-order directional limit forces every subgradient to equal $x$. Thus the minimum-norm subgradient is $x$. [[def-feature-measure-energy]]

[F2] The quadratic Wasserstein distance is the square root of the infimum of the squared displacement cost over couplings. [[def-wasserstein-two-space-and-couplings]]

[F3] AC is assumed in the flow and transport results. [[def-axiom-of-choice]]

[F4] Finite-action continuity-equation solutions are represented by absolutely continuous characteristic paths. [[thm-superposition-for-finite-action-continuity-equations]]

## Proof


**Given:** The data in the Example.

1.1 The characteristic equation $\dot x=-x$ with $x(0)=x_0$ has the solution $x(t)=e^{-t}x_0$, as direct differentiation verifies. Pushing $\mu_0$ forward by this map gives a continuity-equation solution with velocity $v_t(x)=-x$. Its action on $[0,T]$ is finite because $\int|x|^2d\mu_t=e^{-2t}\int|x|^2d\mu_0$. For compactly supported initial laws it is the flow identified by the global uniqueness theorem. For arbitrary $\mu_0\in\mathcal P_2$, the same conclusion follows directly: every finite-action PDE solution with the prescribed smooth velocity $-x$ is represented by its unique characteristics via superposition, so it equals this pushforward, even when $\mu_0$ lies in no finite cutoff. [F1, F3, F4, algebra]

1.2 The metric $m^{-1}\sum_i x_i\cdot y_i$ gives the particle gradient of $m^{-1}\sum_i|x_i|^2/2$ equal to $(x_1,\dots,x_m)$, so the same scalar ODE gives $x_i(t)=e^{-t}x_i(0)$. Consequently $\mu_{m,t}=(e^{-t}\operatorname{id})_\#\mu_{m,0}$. [F1, algebra]

2.1 For $a>0$, pushing both marginals of any coupling forward by $x\mapsto ax$ multiplies its quadratic cost by $a^2$; applying the inverse scaling gives the reverse inequality for the infimum. Thus $W_2(a_\#\alpha,a_\#\beta)=aW_2(\alpha,\beta)$. Apply this with $a=e^{-t}$, $\alpha=\mu_{m,0}$, and $\beta=\mu_0$ to obtain the displayed identity. Since $e^{-t}\le1$, its supremum for $0\le t\le T$ is at most the initial W2 error, proving compact-time uniform convergence. [F2, step 1.2, algebra] ∎