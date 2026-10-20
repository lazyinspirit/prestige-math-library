---
id: lem-mean-field-projection-identities
kind: lemma
title: Feature and energy identities for homogeneous projections
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-feature-measure-energy, def-two-homogeneous-measure-projection, def-partial-one-homogeneous-measure-projection, thm-bounded-linear-maps-commute-with-bochner-integration]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
---
## Statement

For a finite nonnegative Borel measure $\mu$ on $\mathbb R^d$ with finite second moment, suppose $\Phi$ and $V$ are continuous and positively two-homogeneous, with $\Phi:\mathbb R^d\to\mathcal H$ taking values in a Hilbert space and $V:\mathbb R^d\to[0,\infty)$. Then

$$\int_{\mathbb R^d}\Phi(u)d\mu(u)=\int_{\mathbb S^{d-1}}\Phi(\theta)dh^2(\mu)(\theta),\qquad\int_{\mathbb R^d}V(u)d\mu(u)=\int_{\mathbb S^{d-1}}V(\theta)dh^2(\mu)(\theta).$$

If $h^2(\mu_n)$ converges weakly as finite measures on the compact sphere to $\nu$, then the feature integrals converge in Hilbert norm, the regularizer integrals converge, and $F(\mu_n)\to R(\int\Phi d\nu)+\int Vd\nu$. In the partially one-homogeneous model $\Omega=\mathbb R\times\Theta$, $\Phi(w,\theta)=w\varphi(\theta)$ and $V(w,\theta)=|w|\widetilde V(\theta)$ with bounded nonnegative $\widetilde V$, the exact identities are $\int\Phi d\mu=\int\varphi dh^1(\mu)$ and $\int Vd\mu\ge\int\widetilde Vdh^1(\mu)$. Weak convergence of signed $h^1(\mu_n)$ against bounded continuous tests gives weak convergence of feature moments when $\varphi$ is bounded continuous, but does not alone give Hilbert-norm convergence or energy convergence.

## Statement references

[[def-feature-measure-energy]]

[[def-two-homogeneous-measure-projection]]

[[def-partial-one-homogeneous-measure-projection]]

[[thm-bounded-linear-maps-commute-with-bochner-integration]]

[Chizat and Bach, Appendices A.2.1–A.2.2, C.2.1–C.2.2, C.4.1–C.4.2](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapters 8 and 10](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** The two projection definitions and the hypotheses in the Statement.

[F1] $h^2(\mu)(A)=\int_{u\ne0}\mathbf1_A(u/|u|)|u|^2d\mu(u)$ is a finite measure on $\mathbb S^{d-1}$. [[def-two-homogeneous-measure-projection]]

[F2] $h^1(\mu)(B)=\int_{\mathbb R\times B}w\,d\mu(w,\theta)$ is a finite signed measure, and $\int\psi\,dh^1(\mu)=\int w\psi(\theta)d\mu$ for bounded measurable $\psi$. [[def-partial-one-homogeneous-measure-projection]]

[F3] A bounded linear map commutes with Bochner integration, so equality of all scalar evaluations by elements of $\mathcal H^*$ determines equality of the Hilbert-valued integrals. [[thm-bounded-linear-maps-commute-with-bochner-integration]]

## Proof

**Given:** The measures and feature maps in the Statement.

1.1 On $\mathbb R^d\setminus\{0\}$, write $u=|u|\rho(u)$. Positive two-homogeneity gives $\Phi(u)=|u|^2\Phi(\rho(u))$ and $V(u)=|u|^2V(\rho(u))$; at $u=0$ both vanish. Integrating these identities and applying the definition of $h^2$ proves both displayed projection identities. [F1, given, algebra]

2.1 For weak convergence on the compact sphere, the masses $h^2(\mu_n)(\mathbb S^{d-1})$ are bounded. The continuous map $\Phi|_{\mathbb S^{d-1}}$ has compact image in $\mathcal H$. For any $\epsilon>0$, cover that image by finitely many $\epsilon$-balls and use a continuous partition of unity on the sphere to approximate $\Phi$ uniformly by a finite sum $\sum_j\psi_jg_j$. Weak convergence gives convergence of each scalar coefficient $\int\psi_jdh^2(\mu_n)$, hence strong convergence of the approximating vector integrals. The uniform approximation error is at most $\epsilon$ times the bounded masses, so $\int\Phi dh^2(\mu_n)\to\int\Phi d\nu$ in norm. The same argument, or scalar weak convergence directly, gives $\int Vdh^2(\mu_n)\to\int Vd\nu$. Continuity of $R$ proves the energy limit. [F1, given, choose]

3.1 In the partially one-homogeneous case, apply [F2] to $\psi=\varphi$ after scalar evaluation by an arbitrary bounded linear functional on $\mathcal H$; [F3] then gives $\int\Phi d\mu=\int\varphi dh^1(\mu)$. For the penalty, $|w|-w=2w_-\ge0$, so

$$\int |w|\widetilde V(\theta)d\mu-\int\widetilde Vdh^1(\mu)=2\int w_-\widetilde V(\theta)d\mu\ge0.$$

If $h^1(\mu_n)$ converges against bounded continuous scalar tests, testing against $\langle z,\varphi(\cdot)\rangle$ for each $z\in\mathcal H$ proves only weak convergence of the feature moments. The measures $\delta_{(1,\theta)}$ and $2\delta_{(1,\theta)}+\delta_{(-1,\theta)}$ have the same $h^1=\delta_\theta$ but their $|w|$ penalties for $\widetilde V\equiv1$ are $1$ and $3$, respectively. Thus $h^1$ convergence alone cannot imply penalty or energy convergence. [F2, F3, given, algebra] ∎
