---
id: lem-two-homogeneous-projection-limit-is-stationary
kind: lemma
title: A weak two-homogeneous projection limit is stationary on its support
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 12
deps: [def-feature-measure-energy, def-wasserstein-gradient-flow-for-feature-energy, def-two-homogeneous-measure-projection, lem-mean-field-projection-identities, lem-w2-convergence-implies-homogeneous-projection-convergence, lem-characteristics-unique-and-stable, def-axiom-of-choice, thm-global-wasserstein-flow-existence-uniqueness-and-stability]
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the Wasserstein flow and its minimum-norm velocity selection; the radial identity and limiting integral argument are choice-free."
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

Assume AC, the feature-energy hypotheses, and positive two-homogeneity of $\Phi$ and $V$ on $\Omega=\mathbb R^d$. Let $\mu_t$ be a Wasserstein gradient flow with finite initial energy. Suppose the finite measures $h^2(\mu_t)$ converge weakly on $\mathbb S^{d-1}$ to a finite nonnegative measure $\nu$. Define $G_\nu(\theta)=dR_{m_\nu}[\Phi(\theta)]+V(\theta)$, where $m_\nu=\int_{\mathbb S^{d-1}}\Phi\,d\nu$. Then $G_\nu=0$ for $\nu$-almost every $\theta$.

## Statement references

[[def-feature-measure-energy]]

[[def-wasserstein-gradient-flow-for-feature-energy]]

[[def-two-homogeneous-measure-projection]]

[[lem-mean-field-projection-identities]]

[[thm-global-wasserstein-flow-existence-uniqueness-and-stability]]

[Chizat and Bach, Lemma C.3](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Theorem 11.2.1 and energy identity](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** AC, the model and flow in the Statement, and weak convergence of their spherical projections.

[A1] AC is inherited by the flow existence, path and minimum-norm velocity constructions. [[def-axiom-of-choice]]

[F1] The flow velocity is a Borel version of the negative minimum-norm subgradient selection almost everywhere; the characteristic construction supplies its canonical pointwise Borel version. [[def-wasserstein-gradient-flow-for-feature-energy]] [[lem-characteristics-unique-and-stable]]

[F2] On every finite time interval the energy identity holds, $F(\mu_t)$ is nonincreasing, and $F\ge0$. [[thm-global-wasserstein-flow-existence-uniqueness-and-stability]]

[F3] For positive two-homogeneous $\Phi,V$, their integrals factor through $h^2$; weak convergence of $h^2$ on the compact sphere gives norm convergence of the feature moments. [[lem-mean-field-projection-identities]]

[F4] The full flow potential $P_t(u)=dR_{m_{\mu_t}}[\Phi(u)]+V(u)$ is two-homogeneous and semiconvex, so its supporting sets and their minimum-norm selections scale by $s$ under $u\mapsto su$ for $s>0$. [[def-feature-measure-energy]] [[def-wasserstein-gradient-flow-for-feature-energy]]

[F5] A W2-continuous path of laws has weakly continuous two-homogeneous projections. [[lem-w2-convergence-implies-homogeneous-projection-convergence]]

## Proof

**Given:** The assumptions and suppliers in [F1]–[F5].

1.1 Fix $t$ and $u\ne0$. Write $P_t(u)=dR_{m_{\mu_t}}[\Phi(u)]+V(u)$. If $\xi\in\partial P_t(u)$, the local subdifferential definition applied along $(1+s)u$ gives $$\liminf_{s\to0}\frac{P_t((1+s)u)-P_t(u)-s\langle\xi,u\rangle}{|s|\,|u|}\ge0.$$ Since $P_t((1+s)u)=(1+s)^2P_t(u)$, the one-sided limits for $s\downarrow0$ and $s\uparrow0$ are respectively $2P_t(u)-\langle\xi,u\rangle$ and its negative. Both must be nonnegative, so $\langle\xi,u\rangle=2P_t(u)$. By [F1], $v_t(u)$ is the negative of one such vector, giving $\langle v_t(u),u\rangle=-2P_t(u)$. [A1, F1, given, algebra]

2.1 For $s>0$, substitute $z=sy$ in the local subdifferential definition of $\partial P_t(su)$. Two-homogeneity gives $P_t(z)-P_t(su)-s\xi\cdot(z-su)=s^2(P_t(y)-P_t(u)-\xi\cdot(y-u))$, while $|z-su|=s|y-u|$. Thus $\xi\in\partial P_t(u)$ iff $s\xi\in\partial P_t(su)$; the reverse implication follows by scaling by $1/s$. Hence the minimum-norm selection scales by $s$, and $v_t(s\theta)=s v_t(\theta)$ wherever the canonical pointwise selection is defined. [A1, F1, F4, step 1.1, algebra]

3.1 Apply [F3] to the weakly convergent projections. Then $m_{\mu_t}\to m_\nu$ in Hilbert norm. The differentials $dR_{m_{\mu_t}}$ converge in operator norm to $dR_{m_\nu}$ by local Lipschitz continuity; since $\Phi$ and $V$ are bounded on the sphere, $G_t(\theta):=P_t(\theta)$ converges uniformly to $G_\nu(\theta)$. In particular, weak convergence and boundedness of the masses give $$a(t):=\int_{\mathbb S^{d-1}}G_t(\theta)^2\,dh^2(\mu_t)(\theta)\longrightarrow \int_{\mathbb S^{d-1}}G_\nu(\theta)^2\,d\nu(\theta)=:a_\infty.$$ [A1, F3, given, algebra, step 2.1]

4.1 By [F5] and the uniform convergence in step 3.1, $a(t)$ is measurable. By [F3] and [F4], positive one-homogeneity of the velocity gives $\int|v_t(u)|^2d\mu_t(u)=\int|v_t(\theta)|^2dh^2(\mu_t)(\theta)$. Step 1.1 on the unit sphere gives $2G_t(\theta)=-\langle v_t(\theta),\theta\rangle$, so $4a(t)\le\int|v_t(\theta)|^2dh^2(\mu_t)(\theta)$. Integrating and using [F2] yields $\int_0^\infty a(t)\,dt\le F(\mu_0)/4<\infty$. A nonnegative function with a finite integral cannot converge to a positive limit; hence $a_\infty=0$. Since $G_\nu^2$ is nonnegative, its zero integral implies $G_\nu=0$ $\nu$-almost everywhere. [A1, F2, F3, F4, F5, step 1.1, step 2.1, step 3.1] ∎
