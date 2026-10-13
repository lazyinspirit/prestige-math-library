---
id: lem-em-smooth-newtonian-upgrade
kind: lemma
domain: mathematics
title: "Newtonian potential of smooth compact data is smooth and solves the Poisson equation pointwise"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 0
deps: [def-newtonian-potential, thm-newtonian-potential-solves-poisson-distributionally, thm-differentiation-under-the-integral-sign, def-countable-choice, thm-distributional-differentiation-is-continuous-and-commutes, lem-smooth-bump-between-concentric-euclidean-balls, cor-positive-density-measures-assign-positive-volume-to-nonempty-open-sets-and-metric-balls, lem-fundamental-lemma-of-the-calculus-of-variations]
dependency_roles:
  def-newtonian-potential: mathematical-premise
  thm-newtonian-potential-solves-poisson-distributionally: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-distributional-differentiation-is-continuous-and-commutes: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  cor-positive-density-measures-assign-positive-volume-to-nonempty-open-sets-and-metric-balls: mathematical-premise
  lem-fundamental-lemma-of-the-calculus-of-variations: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Thomas Schmidt, Partial Differential Equations I (2026), section 2.11 (Newtonian potential and very weak Poisson identity)"
      url: "https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf"
      locator: "Section 2.11, printed pp. 70-71, for the distributional Poisson identity used through the cited published theorem; the differentiation-under-the-integral and pointwise-upgrade arguments are proved locally and attribute no further claim to the source."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Assume Countable Choice ($\mathrm{AC}_\omega$), with the exact meaning of [[def-countable-choice]]. Let $\varepsilon_0>0$ be any scalar parameter and let $f\in C_c^\infty(\mathbb R^3;\mathbb R)$ and let

$$Nf(x)=\int_{\mathbb R^3}\frac{f(y)}{4\pi|x-y|}\,dy .$$

Then $Nf\in C^\infty(\mathbb R^3)$, $-\Delta Nf=f$ pointwise, and for every multi-index $\alpha$ the spatial derivative satisfies $D^\alpha Nf=N(D^\alpha f)$. In particular, for smooth compactly supported $\rho$ the field $E=-\varepsilon_0^{-1}\nabla N\rho$ is smooth. The statement is about the explicit integral transform of compactly supported smooth data and does not assume smoothness of the kernel at the pole; the distributional identity $-\Delta Nf=f$ is the one supplied by the Newtonian-potential theorem ([[thm-newtonian-potential-solves-poisson-distributionally]]), upgraded here from a distributional to a pointwise identity for smooth data.

## Facts & Assumptions
**Given:** A constant $\varepsilon_0>0$ and a function $f\in C_c^\infty(\mathbb R^3;\mathbb R)$; the function $\Phi(z)=1/(4\pi|z|)$ for $z\ne0$, whose point value at $0$ is arbitrary and whose class is the Newtonian kernel of [[def-newtonian-potential]] and [[thm-newtonian-potential-solves-poisson-distributionally]].

[L1] **Newtonian potential.** Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). For compactly supported $f\in L^1(\mathbb R^3)$, the potential $Nf$ of [[def-newtonian-potential]] depends only on the $L^1$ class, is finite a.e. and locally integrable, and its regular distribution satisfies $-\Delta T_{Nf}=T_f$ in $\mathcal D'(\mathbb R^3)$ ([[thm-newtonian-potential-solves-poisson-distributionally]]).

[L2] **Differentiation under the integral sign.** Let $X$ be a measure space, $I\subseteq\mathbb R$ an open interval, and $h:X\times I\to\mathbb C$ such that for each $t$ the section $x\mapsto h(x,t)$ is integrable, for almost every $x$ the map $t\mapsto h(x,t)$ is differentiable on $I$, the extended derivative is measurable in $x$, and $|\partial_th(x,t)|\le g(x)$ a.e. with $g$ integrable. Then $H(t)=\int h(x,t)\,d\mu(x)$ is differentiable with $H'(t)=\int\partial_th(x,t)\,d\mu(x)$ ([[thm-differentiation-under-the-integral-sign]]).

[L3] **Distributional versus classical derivatives.** If $u\in C^k(\Omega;\mathbb C)$ and $|\alpha|\le k$, then the distributional derivative of the regular distribution $T_u$ is the regular distribution of the classical derivative ([[thm-distributional-differentiation-is-continuous-and-commutes]]).

[L4] **Bumps and positive measure.** For $0<r<R$ there is $\rho\in C_c^\infty(\mathbb R^3)$ with $0\le\rho\le1$, $\rho=1$ on $\overline B_r(0)$ and $\operatorname{supp}\rho\subseteq B_R(0)$ ([[lem-smooth-bump-between-concentric-euclidean-balls]]). Under $\mathrm{AC}_\omega$, Lebesgue measure is the positive-density measure of density $1$, so every nonempty open subset of $\mathbb R^3$ has positive measure ([[cor-positive-density-measures-assign-positive-volume-to-nonempty-open-sets-and-metric-balls]]).

[L5] **Fundamental lemma.** If $g\in L^1_{\mathrm{loc}}(\Omega)$ satisfies $\int g\varphi=0$ for every test function $\varphi\in C_c^\infty(\Omega)$, then $g=0$ almost everywhere ([[lem-fundamental-lemma-of-the-calculus-of-variations]]).

## Proof

1.1 Substituting $z=x-y$ gives $Nf(x)=\int_{\mathbb R^3}\Phi(z)f(x-z)\,dz$, an absolutely convergent integral for every $x$: $f$ is bounded with support in some closed ball $\overline B_R(0)$, so the integrand is supported in $x-\overline B_R(0)$ and bounded there by $\|f\|_\infty|\Phi(z)|$ with $\Phi\in L^1_{\mathrm{loc}}(\mathbb R^3)$. The same substitution exhibits $Nf$ as the Newtonian potential of [L1], so the distributional identity $-\Delta T_{Nf}=T_f$ of [L1] holds. [L1, algebra]

2.1 Fix a multi-index $\alpha=(\alpha_1,\alpha_2,\alpha_3)$ and a point $x$, and let $K\subseteq\mathbb R^3$ be a compact set containing $x$ in its interior. For $z$ in the fixed compact set $K-\operatorname{supp}f$ and $x'\in K$, the function $z\mapsto\Phi(z)D^\alpha f(x'-z)$ is bounded by $\|D^\alpha f\|_\infty|\Phi(z)|$, integrable on that compact set, and $z\mapsto\Phi(z)D^{\alpha+e_j}f(x'-z)$ likewise; moreover $D^\alpha f$ is uniformly continuous on the compact set $K-\operatorname{supp}f$ shifted appropriately. Applying the differentiation-under-the-integral-sign theorem [L2] successively in the three coordinates (the parameter being one coordinate of $x$ and the measure space $\mathbb R^3$ with the dominated bounds above) gives $D^\alpha Nf(x)=\int\Phi(z)D^\alpha f(x-z)\,dz=N(D^\alpha f)(x)$ at every $x$, and the resulting function is continuous in $x$ because the bound $\|D^\alpha f(x-z)-D^\alpha f(x'-z)\|_\infty|\Phi(z)|$ on the compact $z$-set is uniform in $x,x'$ near $x$ and tends to $0$. Hence $Nf$ has continuous derivatives of every order, so $Nf\in C^\infty(\mathbb R^3)$, and the identity $D^\alpha Nf=N(D^\alpha f)$ holds for every multi-index $\alpha$; in particular the classical Laplacian $\Delta Nf=\sum_{j=1}^3N(\partial_j^2f)$ is a continuous function, and it is the classical Laplacian of the smooth function $Nf$. [step 1.1, L2, algebra]

3.1 By [L3] the distributional Laplacian of the smooth function $Nf$ is the regular distribution of the classical Laplacian, so the identity $-\Delta T_{Nf}=T_f$ of step 1.1 says that $\int_{\mathbb R^3}(f(y)+\Delta Nf(y))\varphi(y)\,dy=0$ for every test function $\varphi$. The function $g:=f+\Delta Nf$ is continuous by step 2.1, so it is locally integrable and the fundamental lemma [L5] gives $g=0$ almost everywhere. A continuous function vanishing almost everywhere vanishes everywhere: if $g(x_0)\ne0$, continuity gives $r>0$ with $|g|>|g(x_0)|/2>0$ on the nonempty open ball $B_r(x_0)$, which has positive Lebesgue measure by [L4], contradicting $g=0$ a.e.; hence $g(x_0)=0$ for every $x_0$. Therefore $-\Delta Nf=f$ pointwise on $\mathbb R^3$. [step 1.1, step 2.1, L3, L4, L5]

4.1 For smooth compactly supported $\rho$, the derivative identity of step 2.1 with $\alpha=e_j$ shows that $\nabla N\rho$ is a smooth field, and $E=-\varepsilon_0^{-1}\nabla N\rho$ is smooth because $\varepsilon_0^{-1}$ is a constant. Countable Choice is inherited from the exact statement of the Newtonian-potential theorem [L1] and from the positive-density-measure corollary [L4]; the differentiation and upgrade arguments use no further choice. This proves the smoothness of $Nf$, the pointwise Poisson identity and the derivative identity $D^\alpha Nf=N(D^\alpha f)$, and hence the smoothness of $E$. [step 2.1, step 3.1, L1, L4] ∎
