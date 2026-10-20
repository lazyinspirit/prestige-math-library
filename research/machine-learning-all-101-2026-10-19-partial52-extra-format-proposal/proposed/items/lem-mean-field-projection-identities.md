---
id: lem-mean-field-projection-identities
kind: lemma
title: Feature and energy identities for homogeneous projections
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-feature-measure-energy, def-two-homogeneous-measure-projection, def-partial-one-homogeneous-measure-projection, thm-bounded-linear-maps-commute-with-bochner-integration, lem-signed-narrow-convergence-controls-bochner-moments, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
axiom_use: "The algebraic identities and compact-sphere finite-net argument are choice-free; AC is assumed only for the additional signed narrow-convergence conclusion."
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

If $h^2(\mu_n)$ converges weakly as finite measures on the compact sphere to $\nu$, then the feature integrals converge in Hilbert norm, the regularizer integrals converge, and $F(\mu_n)\to R(\int\Phi d\nu)+\int Vd\nu$. In the partially one-homogeneous model $\Omega=\mathbb R\times\Theta$, $\Phi(w,\theta)=w\varphi(\theta)$ and $V(w,\theta)=|w|\widetilde V(\theta)$ with bounded nonnegative $\widetilde V$, for every $z\in\mathcal H$ the exact feature identity is $\langle z,\int w\varphi(\theta)d\mu\rangle=\int\langle z,\varphi(\theta)\rangle dh^1(\mu)$, using the scalar pairing defined in the partial projection, and the penalty inequality is $\int|w|\widetilde V(\theta)d\mu\ge\int\widetilde Vdh^1(\mu)$. Weak convergence of signed $h^1(\mu_n)$ against all bounded continuous tests gives weak convergence of feature moments when $\varphi$ is bounded continuous. If AC holds, $\Theta$ is a closed Euclidean subset and $\varphi$ is bounded norm-continuous into a separable Hilbert space, it also gives Hilbert-norm convergence. Signed projection convergence alone does not imply penalty or full energy convergence for arbitrary lifts.

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

[F2] For every bounded measurable scalar $\psi$, the projection pairing is $\int\psi dh^1(\mu)=\int w\psi(\theta)d\mu$, and $h^1(\mu)$ is a finite signed measure. [[def-partial-one-homogeneous-measure-projection]]

[F3] A bounded linear map commutes with Bochner integration, so equality of all scalar evaluations by elements of $\mathcal H^*$ determines equality of the Hilbert-valued integrals. [[thm-bounded-linear-maps-commute-with-bochner-integration]]

[F4] Under AC, signed narrow convergence on a closed Euclidean subset controls bounded norm-continuous Bochner moments in norm. [[lem-signed-narrow-convergence-controls-bochner-moments]] [[def-axiom-of-choice]]

## Proof

**Given:** The measures and feature maps in the Statement.

1.1 On $\mathbb R^d\setminus\{0\}$, write $u=|u|\rho(u)$. Positive two-homogeneity gives $\Phi(u)=|u|^2\Phi(\rho(u))$ and $V(u)=|u|^2V(\rho(u))$; at $u=0$ both vanish. Integrating these identities and applying the definition of $h^2$ proves both displayed projection identities. [F1, given, algebra]

2.1 For weak convergence on the compact sphere, the masses $h^2(\mu_n)(\mathbb S^{d-1})$ are bounded. The continuous map $\Phi|_{\mathbb S^{d-1}}$ has compact image in $\mathcal H$. Given $\epsilon>0$, choose finitely many vectors $g_j=\Phi(\theta_j)$ whose open $\epsilon$-balls cover that image and put $U_j=\{\theta:\|\Phi(\theta)-g_j\|<\epsilon\}$. Define $r_j(\theta)=\operatorname{dist}(\theta,\mathbb S^{d-1}\setminus U_j)$ when the complement is nonempty, and $r_j\equiv1$ when $U_j=\mathbb S^{d-1}$. The continuous functions $\psi_j=r_j/(\sum_i r_i)$ are well-defined because the finite open sets cover the sphere, and $\psi_j(\theta)>0$ only when $\theta\in U_j$. Therefore $\|Phi(\theta)-\sum_j\psi_j(\theta)g_j\|<\epsilon$ uniformly. Weak convergence gives convergence of each scalar coefficient $\int\psi_jdh^2(\mu_n)$, hence strong convergence of the approximating vector integrals. The uniform approximation error is at most $\epsilon$ times the uniformly bounded masses, so $\int\Phi dh^2(\mu_n)\to\int\Phi d\nu$ in norm. Since $V|_{\mathbb S^{d-1}}$ is continuous, weak convergence also gives $\int Vdh^2(\mu_n)\to\int Vd\nu$. Continuity of $R$ proves the energy limit. [F1, given, choose, step 1.1]

3.1 In the partially one-homogeneous case, fix $z\in\mathcal H$ and apply [F2] to the bounded scalar function $\psi(\theta)=\langle z,\varphi(\theta)\rangle$. This gives the displayed feature identity for every $z$, hence equality of the Hilbert-valued feature moments because inner products determine vectors. For the penalty, $|w|-w=2w_-\ge0$, and [F2] applied to $\widetilde V$ gives $\int |w|\widetilde V(\theta)d\mu-\int\widetilde Vdh^1(\mu)=2\int w_-\widetilde V(\theta)d\mu\ge0.$ If $h^1(\mu_n)$ converges against bounded continuous scalar tests, testing against $\langle z,\varphi(\cdot)\rangle$ for each $z\in\mathcal H$ proves weak convergence of the feature moments. Under the additional AC, closed-Euclidean, separable-Hilbert assumptions in the Statement, [F4] improves this to norm convergence. Let $\mu_1$ assign mass one to $(1,\theta)$ and let $\mu_2$ assign mass two to $(1,\theta)$ and mass one to $(-1,\theta)$. Then both have $h^1$ equal to the measure assigning mass one to $\theta$, while their $|w|$ penalties for $\widetilde V\equiv1$ are $1$ and $3$, respectively. Thus $h^1$ convergence alone cannot imply penalty or energy convergence. [F2, F3, F4, given, algebra, step 2.1] ∎
