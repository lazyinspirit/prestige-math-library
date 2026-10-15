---
id: thm-standard-gaussian-log-sobolev-inequality
kind: theorem
title: "Gross logarithmic Sobolev inequality for standard Gaussian measure"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-standard-normal-and-normal-laws
  - def-multivariate-normal-law
  - thm-nondegenerate-multivariate-normal-law-has-density
  - def-independent-random-elements
  - lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal
  - lem-characteristic-function-of-a-multivariate-normal-law
  - thm-differentiation-under-the-integral-sign
  - thm-dominated-convergence
  - thm-monotone-convergence-for-the-integral
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-integration-by-parts-for-absolutely-continuous-functions
  - thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
  - cor-cauchy-schwarz-inequality-for-l-two
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "AC is a stated hypothesis used by the finite-dimensional Gaussian suppliers. DC and countable choice are stated separately and discharge the integration-by-parts and fundamental-theorem-of-calculus interfaces."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "N. Berestycki and R. Nickl, Concentration of Measure"
      url: "https://www.stat.cmu.edu/~arinaldo/36788/berestycki_nickl_notes.pdf"
      locator: "Chapter 4, Theorem 11 and complete proof: Gaussian logarithmic Sobolev inequality."
    - title: "D. Chafaï and D. Lehec, Lectures on the logarithmic Sobolev inequality"
      url: "https://djalil.chafai.net/docs/M2/chafai-lehec-m2-lsie-lecture-notes.pdf"
      locator: "Gaussian Ornstein–Uhlenbeck semigroup proof of the logarithmic Sobolev inequality."
---

## Statement

Assume AC, DC, and countable choice, and let $\gamma_d$ be standard Gaussian
measure on $\mathbb R^d$. For every
$g\in C^2(\mathbb R^d)$ bounded above and below by positive constants, with
bounded first and second derivatives,
$$\operatorname{Ent}_{\gamma_d}(g) :=\int g\log g\,d\gamma_d -\left(\int g\,d\gamma_d\right)\log\left(\int g\,d\gamma_d\right) \le \frac12\int\frac{|\nabla g|^2}{g}\,d\gamma_d.$$

## Facts & Assumptions

[F1] The standard $d$-dimensional Gaussian $\gamma_d=N_d(0,I_d)$ has Lebesgue density $(2\pi)^{-d/2}e^{-|x|^2/2}$ ([[thm-nondegenerate-multivariate-normal-law-has-density]]), and independent standard Gaussian vectors have joint standard Gaussian law ([[def-standard-normal-and-normal-laws]], [[lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal]]).

[A1] AC, DC, and countable choice are assumed in the Statement: AC meets the Gaussian suppliers' hypotheses, and DC and countable choice meet the integration-by-parts and fundamental-theorem-of-calculus hypotheses ([[def-axiom-of-choice]], [[def-dependent-choice]], [[def-countable-choice]]).

[F2] Differentiation under an integral is justified by a common integrable majorant ([[thm-differentiation-under-the-integral-sign]]).

[F3] Under DC and countable choice, one-dimensional integration by parts holds for absolutely continuous functions on compact intervals ([[thm-integration-by-parts-for-absolutely-continuous-functions]]).

[F4] Dominated convergence and Fubini apply to the bounded semigroup integrands ([[thm-dominated-convergence]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F5] Monotone convergence passes the nonnegative entropy dissipation integrals to their endpoint limits ([[thm-monotone-convergence-for-the-integral]]).

[F6] The fundamental theorem of calculus applies to the continuously differentiable entropy function on every compact time interval ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]).


[F7] Cauchy–Schwarz holds for square-integrable functions on $\gamma_d$ ([[cor-cauchy-schwarz-inequality-for-l-two]]).

## Proof


**Given:** AC, DC, countable choice, $d\ge1$, standard Gaussian measure $\gamma_d$, and $g$ satisfying the hypotheses in the Statement.

1.1 For $t>0$, put $a=e^{-t}$, $b=\sqrt{1-e^{-2t}}$, and $P_tg(x)=\int g(ax+by)\,d\gamma_d(y)$. By [F1], $aX+bY$ is standard Gaussian for independent $X,Y\sim\gamma_d$; Fubini [F4] gives $\int P_tg\,d\gamma_d=\int g\,d\gamma_d$. Differentiation under the integral [F2] gives $\nabla P_tg=aP_t(\nabla g)$ and $\Delta P_tg=a^2P_t(\Delta g)$. It also gives $\partial_tP_tg=-a x\cdot P_t(\nabla g)+(a^2/b)\int y\cdot\nabla g(ax+by)\,d\gamma_d(y)$. For each coordinate, [F3] applied against the Gaussian density gives $\int y_i\partial_i g(ax+by)\,d\gamma_d =b\int\partial_{ii}g(ax+by)\,d\gamma_d$; the boundary terms vanish because $\partial_i g$ is bounded and the Gaussian density tends to zero at both ends. Thus $\partial_tP_tg=\Delta P_tg-x\cdot\nabla P_tg$. [A1, F1, F2, F3, F4, given, algebra]

2.1 Put $u_t=P_tg$. Differentiate the entropy using step 1.1 and [F2]: $\frac d{dt}\operatorname{Ent}_{\gamma_d}(u_t) =\int(1+\log u_t)(\Delta u_t-x\cdot\nabla u_t)\,d\gamma_d$. For each coordinate, [F3] applied to $v=1+\log u_t$ and $\partial_i u_t$ against the Gaussian density [F1] gives $\int v(\partial_{ii}u_t-x_i\partial_i u_t)d\gamma_d=-\int (\partial_i u_t)^2/u_t\,d\gamma_d$; the boundary term vanishes because $v$ and $\nabla u_t$ are bounded and the density tends to zero. Summing coordinates yields $\frac{d}{dt}\operatorname{Ent}_{\gamma_d}(u_t) =-\int\frac{|\nabla u_t|^2}{u_t}\,d\gamma_d$. The differentiated integrands are dominated on each compact time interval because $u_t$ stays between the positive bounds for $g$ and its first two derivatives are bounded. As $t\downarrow0$, continuity of $g$ and bounded convergence [F4] give $P_tg(x)\to g(x)$ and $\operatorname{Ent}_{\gamma_d}(u_t)\to\operatorname{Ent}_{\gamma_d}(g)$. As $t\to\infty$, $u_t(x)\to\int g\,d\gamma_d$, so [F4] gives entropy limit zero. Integrate the derivative on $[\delta,T]$ by [F6], then let $\delta\downarrow0$ and $T\uparrow\infty$ using [F5] on the nonnegative dissipation. Therefore $\operatorname{Ent}_{\gamma_d}(g)=\int_0^\infty\int|\nabla P_tg|^2/(P_tg)\,d\gamma_d\,dt$. [A1, F1, F2, F3, F4, F5, F6, step 1.1, algebra]

2.2 For each $x,t$, apply [F7] to each coordinate after writing $\nabla g=(\nabla g/\sqrt g)\sqrt g$ inside the probability integral defining $P_t$. Summing the coordinate inequalities gives $\frac{|P_t(\nabla g)(x)|^2}{P_tg(x)} \le P_t\!\left(\frac{|\nabla g|^2}{g}\right)(x).$ [F7, step 1.1, algebra]

3.1 By step 1.1, $|\nabla P_tg|^2=e^{-2t}|P_t(\nabla g)|^2$; apply step 2.2, integrate using invariance of $\gamma_d$, and use $\int_0^\infty e^{-2t}\,dt=1/2$ in the entropy representation of step 2.1. This gives $\operatorname{Ent}_{\gamma_d}(g) \le \frac12\int\frac{|\nabla g|^2}{g}\,d\gamma_d.$ [F4, step 1.1, step 2.1, step 2.2, algebra] ∎

