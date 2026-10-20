---
id: lem-flow-preserves-spherical-separation
kind: lemma
title: A homogeneous flow preserves spherical support separation
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 12
deps: [def-feature-measure-energy, def-wasserstein-gradient-flow-for-feature-energy, def-axiom-of-choice, thm-superposition-for-finite-action-continuity-equations, lem-characteristics-unique-and-stable, lem-feature-flow-escape-bound, thm-global-wasserstein-flow-existence-uniqueness-and-stability, lem-pushforward-support-is-closure-of-image, lem-bounded-domain-degree-properties]
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the Wasserstein flow, superposition, and characteristic constructions; the radial estimates and degree argument themselves are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
    - title: "Allen Hatcher, Algebraic Topology, Chapter 2"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
---
## Statement

Assume AC, the full feature-energy hypotheses on $\Omega=\mathbb R^d$, $d\ge2$, and positive two-homogeneity of $\Phi$ and $V$. Let $\mu_t$ be the resulting Wasserstein gradient flow on $[0,T]$. If $K=\operatorname{spt}\mu_0$ is compact, is contained in $B(0,r_b)$, and separates $r_a\mathbb S^{d-1}$ from $r_b\mathbb S^{d-1}$ for $0<r_a<r_b$, then for every $t\in[0,T]$ the support $\operatorname{spt}\mu_t$ separates $r'_a\mathbb S^{d-1}$ from $r'_b\mathbb S^{d-1}$ for some $0<r'_a<r'_b$ depending on the flow and $T$. Here separation means that every continuous path with endpoints on the two spheres intersects the stated support.

## Statement references

[[def-feature-measure-energy]]

[[def-wasserstein-gradient-flow-for-feature-energy]]

[[lem-characteristics-unique-and-stable]]

[[lem-feature-flow-escape-bound]]

[[thm-global-wasserstein-flow-existence-uniqueness-and-stability]]

[[lem-bounded-domain-degree-properties]]

[Chizat and Bach, Assumptions 3.2 and Appendix C.3.1](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Chapter 8](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

[Hatcher, Algebraic Topology, Proposition 2.30](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf)

## Facts & Assumptions

**Given:** The flow, its characteristic map, and the initial support in the Statement.

[F1] On finite time intervals the energy flow exists and the energy decreases, so $R(m_{\mu_t})$ stays in the initial sublevel because $V\ge0$. [[thm-global-wasserstein-flow-existence-uniqueness-and-stability]]

[F2] For a continuous moment path the characteristic inclusion has a unique forward solution and a continuous characteristic map; the same supplier states W2 stability for finite-action continuity-equation solutions. [[lem-characteristics-unique-and-stable]]

[F3] A finite-action continuity-equation solution has a path law concentrated on AC trajectories solving its velocity equation. [[thm-superposition-for-finite-action-continuity-equations]]

[F4] For a continuous map, the support of the pushforward of a finite measure is the closure of the image of its support. [[lem-pushforward-support-is-closure-of-image]]

[F5] The relative-homology degree is normalized, additive, nonzero only when there is a preimage, and invariant under homotopies whose moving target avoids the boundary image. [[lem-bounded-domain-degree-properties]]

[A1] AC supplies the Wasserstein flow, superposition representation, and minimum-norm characteristic constructions. [[def-axiom-of-choice]]

## Proof

**Given:** AC, the two-homogeneous feature-energy flow, and $K$ as in the Statement.

1.1 Since $R(m_{\mu_t})\le F(\mu_0)$, $\|dR_{m_{\mu_t}}\|$ is bounded on $[0,T]$ by [F1]. Differentiating $\Phi(ru)=r^2\Phi(u)$ gives $d\Phi_{ru}=r\,d\Phi_u$. If $\zeta\in\partial_{\lambda_V}V(u)$, substitute $y=rz$ into its defining inequality and use $V(rz)=r^2V(z)$; division by $r^2$ shows $r\zeta\in\partial_{\lambda_V}V(ru)$, and applying the same argument with $1/r$ proves equality of the scaled subdifferentials. The feature-energy bounds on the unit sphere therefore imply $|v_t(u)|\le C|u|$ uniformly on $[0,T]$. Along a characteristic, $r(t)=|X_t(u_0)|$ obeys $|r'(t)|\le Cr(t)$ whenever $r(t)>0$. Grönwall gives $e^{-Ct}|u_0|\le|X_t(u_0)|\le e^{Ct}|u_0|$; the lower bound prevents a nonzero trajectory from reaching zero, while two-homogeneity fixes the zero trajectory. [A1, F1, F2, given, algebra]

2.1 By [F3], the flow law has a path-space representation concentrated on AC trajectories solving its velocity equation, with initial law $\mu_0$. Each such path solves the nonautonomous characteristic inclusion for the moment path $m_{\mu_t}$; uniqueness in [F2] makes it $t\mapsto X_t(x)$ from its initial point $x$. Therefore $\mu_t=(X_t)_\#\mu_0$. The compact set $K$ has compact image $X_t(K)$; [F4] gives $\operatorname{spt}\mu_t=\overline{X_t(K)}=X_t(K)$. Continuity on $[0,T]\times K$ makes $M_K=\sup_{s\le T,u\in K}|X_s(u)|$ finite. [A1, F2, F3, F4, given, step 1.1]

3.1 Let $C_\infty$ be the unbounded component of $\mathbb R^d\setminus K$. It is unique because the complement of a sufficiently large ball is connected. Choose $\alpha>\max(r_b,M_K)$ and then $\beta>e^{CT}\alpha$. Set $A=B(0,\beta)\cap C_\infty$. Its boundary lies in $K\cup\beta\mathbb S^{d-1}$. Moreover $\partial A\cap B(0,r_a)=\varnothing$: if a point of this boundary lay inside the ball, points of $C_\infty$ arbitrarily near it would also lie inside; a path in $C_\infty$ from any such point to outside $B(0,\beta)$ would cross both spheres $r_a\mathbb S^{d-1}$ and $r_b\mathbb S^{d-1}$ without meeting $K$, contradicting separation. [A1, given, choose, step 2.1]

4.1 For $y\in\alpha\mathbb S^{d-1}$, $y\in A$ and $X_s(\partial A)$ avoids $y$ for all $s\le T$: $X_s(K)\subset B(0,M_K)\subset B(0,\alpha)$, while the radial lower bound sends $\beta\mathbb S^{d-1}$ outside $B(0,\alpha)$. Homotopy invariance [F5] gives $\deg(X_t,A,y)=\deg(\operatorname{id},A,y)=1$. Choose $0<\eta<e^{-CT}r_a$. For every $y\in B(0,\eta)$ and $x\in\partial A$, $|X_s(x)|\ge e^{-Cs}|x|\ge e^{-CT}r_a>\eta$, so the target avoids $X_s(\partial A)$. Since $B(0,r_a)\cap A=\varnothing$, the identity degree there is zero; hence $\deg(X_t,A,y)=0$. [A1, F5, step 1.1, step 3.1]

5.1 Consider any path from $\eta\mathbb S^{d-1}$ to $\alpha\mathbb S^{d-1}$ and stop it the first time it reaches $\alpha\mathbb S^{d-1}$. Before that time it stays in $\overline{B(0,\alpha)}$, which is disjoint from $X_t(\beta\mathbb S^{d-1})$. If the stopped path avoided $X_t(K)$, then $\partial A\subset K\cup\beta\mathbb S^{d-1}$ would imply that it avoided $X_t(\partial A)$. The degree along that moving target path would be constant by [F5], contradicting its endpoint values $0$ and $1$ from step 4.1. Thus every such path meets $X_t(K)=\operatorname{spt}\mu_t$, proving separation. [A1, F5, step 2.1, step 4.1] ∎
