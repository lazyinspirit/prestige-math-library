---
id: lem-two-homogeneous-escape-from-nonoptimal-projection
kind: lemma
title: Negative regular sublevels force two-homogeneous projection escape
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 12
deps: [def-feature-measure-energy, def-wasserstein-gradient-flow-for-feature-energy, def-two-homogeneous-measure-projection, lem-mean-field-projection-identities, lem-mean-field-first-variation-and-measure-optimality, lem-two-homogeneous-projection-limit-is-stationary, lem-characteristics-unique-and-stable, thm-global-wasserstein-flow-existence-uniqueness-and-stability, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the flow, characteristic, and minimum-norm selection suppliers; the regular-sublevel, differential-inequality, and BL-growth arguments are choice-free."
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

Assume AC, the feature-energy hypotheses on $\Omega=\mathbb R^d$, $d\ge2$, convex differentiable $R$, and positive two-homogeneity of $\Phi,V$. Let $\nu$ be a finite nonnegative measure on $\mathbb S^{d-1}$ which is not a global minimizer of $F$ over finite nonnegative measures and satisfies $G_\nu=0$ $\nu$-almost everywhere. Set $G_\zeta(\theta)=dR_{m_\zeta}[\Phi(\theta)]+V(\theta)$ and use the bounded-Lipschitz norm $\|\sigma\|_{BL}=\sup\{|\int f\,d\sigma|:\|f\|_\infty+\operatorname{Lip}(f)\le1\}$ on finite measures on the sphere. Assume the dense-regular-value hypothesis for $G_\nu|_{\mathbb S^{d-1}}$, including differentiability of $V$ near each selected regular level. Then there are $\epsilon>0$ and a compact sublevel set $K=\{\theta:G_\nu(\theta)\le-\eta\}$ with nonempty interior with the following property. If a Wasserstein gradient flow $\mu_t$ satisfies $\|h^2(\mu_{t_0})-\nu\|_{BL}<\epsilon$ and $\mu_{t_0}(\{r\theta:r>0,\theta\in K\})>0$, then for some $t_1>t_0$,

$$\|h^2(\mu_{t_1})-\nu\|_{BL}\ge\epsilon.$$

The resulting escape time is finite and depends on the positive mass and its initial radial lower bound; no uniform escape time over all initial laws is asserted.

## Statement references

[[def-feature-measure-energy]]

[[def-wasserstein-gradient-flow-for-feature-energy]]

[[def-two-homogeneous-measure-projection]]

[[lem-mean-field-first-variation-and-measure-optimality]]

[[lem-two-homogeneous-projection-limit-is-stationary]]

[[lem-characteristics-unique-and-stable]]

[Chizat and Bach, Proposition C.1 and Lemma C.2](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapter 11](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** The feature-energy flow, the candidate projected measure, and the regularity hypotheses in the Statement.

[F1] The feature moment and regularizer integrals factor through $h^2$, and weak convergence on the sphere controls the Hilbert-valued moment in norm. [[lem-mean-field-projection-identities]]

[F2] For convex $R$, global optimality over nonnegative measures is equivalent to nonnegativity of the first-variation potential everywhere and its vanishing almost everywhere for the candidate measure. [[lem-mean-field-first-variation-and-measure-optimality]]

[F3] Flow laws are represented by the unique characteristics, and their velocities are the negative minimum-norm subgradient selections. [[def-wasserstein-gradient-flow-for-feature-energy]] [[lem-characteristics-unique-and-stable]]

[F4] On a bounded set of spherical projected measures, $dR$ is Lipschitz on the corresponding bounded set of feature moments; the risk component of $G_\zeta$ is $C^1$ on the sphere. [[def-feature-measure-energy]]

[F5] For $d\ge1$ and a two-homogeneous semiconvex potential, any selected supporting vector $\xi$ satisfies $\langle \xi,u\rangle=2G_\zeta(u)$; hence the radial velocity of a characteristic is $-2|u|G_\zeta(u/|u|)$. [[def-feature-measure-energy]]

[A1] AC is inherited by the Wasserstein flow, characteristic representation, and minimum-norm selection. [[def-axiom-of-choice]]

## Proof

**Given:** AC, $\nu$, $\mu_t$, and [F1]–[F5].

1.1 Since $G_\nu=0$ $\nu$-almost everywhere but $\nu$ is not a minimizer, [F2] gives a point $\theta_0$ with $G_\nu(\theta_0)<0$. Choose $\eta>0$ so that $G_\nu(\theta_0)<-\eta<0$ is a regular value; if $G_\nu<0$ on the whole sphere, take $K=\mathbb S^{d-1}$ and omit its boundary. Otherwise compactness and regularity make $K=\{G_\nu\le-\eta\}$ compact with nonempty interior and give a positive lower bound $\beta$ for $|\nabla_SG_\nu|$ on its boundary. With the outward normal, $-\nabla_SG_\nu\cdot n_{out}\le-\beta$. [F2, given, choose]

2.1 For projected measures $\zeta$ in a sufficiently small $BL$ neighborhood of $\nu$, [F1] and duality give $\|m_\zeta-m_\nu\|\le C_\Phi\|h^2(\zeta)-\nu\|_{BL}$, where $C_\Phi=\sup_{\|z\|\le1}(\|\langle z,\Phi\rangle\|_\infty+\operatorname{Lip}\langle z,\Phi\rangle)$. The Lipschitz bound in [F4] then yields $\|G_\zeta-G_\nu\|_{C^1}\le C_R C_\Phi\|h^2(\zeta)-\nu\|_{BL}$ for a finite $C_R$. Choose $\epsilon$ small enough that, whenever the projection remains in that ball, $G_{h^2(\mu_t)}\le-\eta/2$ on $K$ and the outward normal velocity is at most $-\beta/2$ on $\partial K$. [F1, F4, step 1.1, algebra]

3.1 While the projection remains in the chosen ball, a characteristic with direction in $K$ cannot leave $K$. At its boundary the potential is differentiable, its angular velocity is $-\nabla_SG_{h^2(\mu_t)}$, and the strict negative outward normal component from step 2.1 rules out a first outward crossing: at a first exit the signed distance to $K$ would have nonnegative right derivative, contradicting the strictly negative derivative. For $u=r\theta$ in this cone, [F5] gives $r'=-2rG_{h^2(\mu_t)}(\theta)\ge\eta r$, so $r(t)\ge r(s)e^{\eta(t-s)}$. [A1, F3, F5, step 2.1]

4.1 The initial cone has positive mass and is preserved by step 3.1. Since it is the increasing union of subsets with $r\ge1/n$, one such subset has mass $m_*>0$ for some $r_*=1/n$. For every particle in that subset, its radius grows at least as $r_*e^{\eta(t-t_0)}$ until the projection exits the ball. Therefore $h^2(\mu_t)(\mathbb S^{d-1})\ge m_*r_*^2e^{2\eta(t-t_0)}$ throughout that interval. [A1, F3, step 3.1, choose]

5.1 The constant test function $1$ has bounded-Lipschitz norm $1$. Step 4.1 makes $\int1\,dh^2(\mu_t)$ grow without bound while $\nu(\mathbb S^{d-1})$ stays fixed and finite. Hence $\|h^2(\mu_t)-\nu\|_{BL}\ge|h^2(\mu_t)(\mathbb S^{d-1})-\nu(\mathbb S^{d-1})|$ exceeds $\epsilon$ after finite time if the flow stayed in the ball. It must exit by that time, proving the assertion. [A1, step 4.1, algebra] ∎
