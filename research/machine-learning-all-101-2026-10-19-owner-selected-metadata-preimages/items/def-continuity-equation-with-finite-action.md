---
id: "def-continuity-equation-with-finite-action"
kind: definition
title: "Finite-action continuity equation in Euclidean space"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: ["def-wasserstein-two-space-and-couplings", "lem-spacetime-law-of-a-narrow-probability-curve"]
justified_by: []
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
sources:
  references:
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures, Theorem 1.1.2 and Chapter 8, PDF pp. 24–26 and 171–186"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
    - title: "Filippo Santambrogio, Optimal Transport for Applied Mathematicians, Chapter 5, §§5.1–5.3, PDF pp. 161–178"
      url: "https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf"
verification:
  precheck: n/a
---
## Definition

Fix $T>0$ and an integer $d\ge1$. Let $t\mapsto\mu_t$ be a narrowly continuous curve in $\mathcal P_2(\mathbb R^d)$ (so $t\mapsto\int f\,d\mu_t$ is continuous for every bounded continuous $f$), let $M$ be its space-time measure $M(dt,dx)=dt\,\mu_t(dx)$, and let $v:[0,T]\times\mathbb R^d\to\mathbb R^d$ be Borel. Its squared action is $A(\mu,v)=\int|v(t,x)|^2dM(t,x)$. If $A(\mu,v)<\infty$, say that $v$ solves the continuity equation for $\mu$ when
$$\int_0^T\!\int_{\mathbb R^d}(\partial_t\varphi(t,x)+\nabla_x\varphi(t,x)\cdot v(t,x))\,d\mu_t(x)\,dt=0$$
for every $\varphi\in C_c^\infty((0,T)\times\mathbb R^d)$. This is the distributional meaning of $\partial_t\mu_t+\nabla\cdot(v_t\mu_t)=0$; the continuous representative fixes the endpoint laws.

## Definition references

[[def-wasserstein-two-space-and-couplings|def wasserstein two space and couplings]]

[[lem-spacetime-law-of-a-narrow-probability-curve|lem spacetime law of a narrow probability curve]]

[Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures, Theorem 1.1.2 and Chapter 8, PDF pp. 24–26 and 171–186](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

[Filippo Santambrogio, Optimal Transport for Applied Mathematicians, Chapter 5, §§5.1–5.3, PDF pp. 161–178](https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf)
