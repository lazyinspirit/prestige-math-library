---
id: def-feature-measure-energy
kind: definition
title: Feature-measure energy and its regularity assumptions
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-hilbert-space, def-bochner-integrable-function, thm-bochner-integrability-criterion]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
---
## Definition

Let $d\ge1$, let $\mathcal H$ be a separable real Hilbert space, and let $\Omega\subseteq\mathbb R^d$ be the closure of a nonempty convex open set. Let $R:\mathcal H\to[0,\infty)$ be differentiable, with differential locally Lipschitz on bounded subsets of $\mathcal H$ and bounded on every sublevel set of $R$. Let $\Phi:\Omega\to\mathcal H$ be Fréchet differentiable and let $V:\Omega\to[0,\infty)$ be $\lambda_V$-semiconvex, with the convention that $V(u)-\frac{\lambda_V}{2}|u|^2$ is convex on $\Omega$. For a semiconvex function $f$ on a convex domain $D$ with coefficient $\lambda$, define
$$\partial_\lambda f(u)=\{\xi\in\mathbb R^d:f(v)\ge f(u)+\xi\cdot(v-u)+\tfrac{\lambda}{2}|v-u|^2\text{ for every }v\in D\}.$$
For a locally semiconvex function $g$ on $D$, define its local Fréchet subdifferential by
$$\partial g(u)=\left\{\xi\in\mathbb R^d:\liminf_{\substack{v\to u,\ v\in D\\v\ne u}}\frac{g(v)-g(u)-\xi\cdot(v-u)}{|v-u|}\ge0\right\}.$$
When $g$ is globally $\lambda$-semiconvex, this local subdifferential agrees with the convexified supporting set $\partial_\lambda g(u)$.
For every $r>0$, require a nonempty closed convex set $Q_r\subseteq\Omega$, nested increasingly in $r$, such that
$$\{u\in\Omega:\operatorname{dist}(u,Q_r)\le r'\}\subseteq Q_{r+r'}\qquad(r,r'>0),$$
such that $\Phi$ and $V$ are bounded on $Q_r$, $d\Phi$ is Lipschitz on $Q_r$, and there are fixed constants $C_1,C_2>0$ with
$$\sup_{u\in Q_r}\bigl(\|d\Phi_u\|+\|\partial V(u)\|\bigr)\le C_1+C_2r.$$
Here $\partial V(u)=\partial_{\lambda_V}V(u)$ is the supporting set on $\Omega$, and in the growth bound $\|\partial V(u)\|$ means its minimum element norm, equivalently the bound requires a supporting vector of norm at most $C_1+C_2r$ at every $u\in Q_r$. No bound is imposed on the domain normal cone. The source Assumptions 2.1 use the stronger maximal bound for the ambient potential subgradients before adding the domain indicator; that original bound implies the bounded-selection condition used here. Taking a supremum over the relative-domain supporting set would instead include unbounded normal vectors at proper-domain boundaries and would incorrectly exclude the constrained branch. All original source hypotheses and conclusions are retained by this sufficient, weaker growth convention. For a finite nonnegative Borel measure $\mu$ on $\mathbb R^d$, set
$$F(\mu)=R\!\left(\int_\Omega\Phi(u)\,d\mu(u)\right)+\int_\Omega V(u)\,d\mu(u)$$
when $\mu$ is concentrated on $\Omega$, the Bochner integral exists, and the scalar integral is finite; set $F(\mu)=+\infty$ otherwise. For $\mu\in\mathcal P_2(\Omega)$ with finite $F(\mu)$, write $m_\mu=\int_\Omega\Phi\,d\mu$ and define its first-variation potential on $\Omega$ by
$$F'(\mu)(u)=dR_{m_\mu}[\Phi(u)]+V(u).$$
No convexity of $R$ is required by this definition.

## Definition references

[[def-hilbert-space]]

[[def-bochner-integrable-function]]

[[thm-bochner-integrability-criterion]]

[Chizat and Bach, Assumptions 2.1 and Definitions 2.2/2.4](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapter 4](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)
