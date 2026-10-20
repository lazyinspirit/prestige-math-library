---
id: lem-lifted-energy-lipschitz-gradient
kind: lemma
title: The localized lifted feature energy is semiconvex
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-feature-measure-energy, def-localized-hilbert-lift, thm-riesz-representation-for-hilbert-space, thm-bounded-linear-maps-commute-with-bochner-integration, thm-bochner-dominated-convergence, thm-bochner-integrability-criterion, def-bochner-integrable-function, def-axiom-of-choice, def-countable-choice, thm-choice-implies-dependent-implies-countable-choice, thm-cauchy-schwarz-in-an-inner-product-space]
justified_by: []
proof_strategy: direct
axiom_use: "AC supplies the Hilbert/Riesz and Bochner approximation branches used by the label-space lift; no additional choice is used in the Taylor estimate."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Luigi Ambrosio, Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
---
## Statement

Assume AC and the hypotheses of the feature-measure energy definition. Fix an arbitrary probability label space $(S,\Sigma,\sigma)$, let $K=L^2(\sigma;\mathbb R^d)$, and let $C_r=\{X:X(s)\in Q_r\text{ for }\sigma\text{-almost every }s\}$. Write $A_r=\sup_{Q_r}\|d\Phi\|$, $B_r=\operatorname{Lip}_{Q_r}(d\Phi)$, $M_r=\sup_{Q_r}\|\partial V\|$, and let $L_r$ and $N_r$ be, respectively, a Lipschitz constant and a norm bound for $dR$ on the closed convex hull of $\Phi(Q_r)$. For all $X,Y\in C_r$, the smooth part $G_r(X)=R(\int\Phi(X)d\sigma)$ has the first-order expansion on $C_r$ with gradient $\nabla G_r(X)(s)=d\Phi_{X(s)}^*\nabla R(\int\Phi(X)d\sigma)$, and this gradient is Lipschitz with constant $L_rA_r^2+N_rB_r$. No separability of the label space is required for these estimates. Consequently $E_r(X)=G_r(X)+\int V(X)d\sigma+\iota_{C_r}(X)$ is $(\lambda_V-L_rA_r^2-N_rB_r)$-semiconvex on $K$.

## Statement references

[[def-feature-measure-energy]]

[[def-localized-hilbert-lift]]

[Chizat and Bach, Appendix B.2.1](https://arxiv.org/pdf/1805.09545)

## Facts & Assumptions

**Given:** AC, $\sigma,Q_r,\Phi,R,V$ and the constants in the Statement.

[F1] Bounded linear maps commute with Bochner integration, and Bochner integrability is characterized by strong measurability plus integrability of the norm. [[thm-bounded-linear-maps-commute-with-bochner-integration]] [[thm-bochner-integrability-criterion]] [[def-bochner-integrable-function]]

[F2] The differential of $R$ has a unique Hilbert gradient with the same norm. [[thm-riesz-representation-for-hilbert-space]]

[F3] The feature map is differentiable, $d\Phi$ is bounded and Lipschitz on $Q_r$, and $dR$ is Lipschitz on bounded sets; on the relevant bounded convex hull its norm has some finite bound. [[def-feature-measure-energy]]

[F6] On every segment in $Q_r$, semiconvexity of $V$ means $V(u)-(\lambda_V/2)|u|^2$ is convex. [[def-feature-measure-energy]]

[F4] AC supplies Countable Choice for the Bochner approximation and Riesz branches. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]] [[def-countable-choice]]

[F5] Cauchy–Schwarz controls integrals and the $L^2(\sigma)$ norm. [[thm-cauchy-schwarz-in-an-inner-product-space]]

## Proof


**Given:** AC and the data above.

1.1 For $X,Y\in C_r$, the segment $X_\theta=X+\theta(Y-X)$ lies in $C_r$ by convexity of $Q_r$. Pointwise Fréchet differentiability and the bound $A_r$ give $\|\Phi(Y)-\Phi(X)\|_{L^2(\sigma;\mathcal H)}\le A_r\|Y-X\|_K$; moreover Lipschitz continuity of $d\Phi$ gives the pointwise remainder bound $\|\Phi(Y)-\Phi(X)-d\Phi_X(Y-X)\|_{\mathcal H}\le(B_r/2)|Y-X|^2$. Integrating this bound and using [F1], [F4], and [F5] proves $m(Y)=m(X)+\int d\Phi_X(Y-X)d\sigma+O(\|Y-X\|_K^2)$, the required first-order expansion on $C_r$. [F1, F3, F4, F5, construct]

2.1 Write $m(Y)-m(X)=Dm(X)[Y-X]+O(\|Y-X\|_K^2)$ as in step 1.1. Fréchet differentiability of $R$ at $m(X)$ gives $R(m(Y))=R(m(X))+dR_{m(X)}[m(Y)-m(X)]+o(\|m(Y)-m(X)\|_{\mathcal H})$. By [F2] represent $dR_{m(X)}$ by its Riesz vector $\nabla R(m(X))$. The bounded-linear-map commutation in [F1] then gives $\displaystyle DG_r(X)[H]=\langle\nabla R(m(X)),Dm(X)[H]\rangle_{\mathcal H}=\langle d\Phi_{X(\cdot)}^*\nabla R(m(X)),H\rangle_K.$ The pointwise gradient is measurable by continuity of $d\Phi$ on $Q_r$ and has $K$-norm at most $N_rA_r$. [F1, F2, F3, step 1.1]

3.1 For $X,Y\in C_r$, [F3] and [F5] give $\|m(X)-m(Y)\|_{\mathcal H}\le A_r\|X-Y\|_K$. Add and subtract $d\Phi_X^*\nabla R(m(Y))$ in the gradient difference. The operator norm bounds yield $\displaystyle \|\nabla G_r(X)-\nabla G_r(Y)\|_K\le A_rL_r\|m(X)-m(Y)\|+N_rB_r\|X-Y\|_K\le(L_rA_r^2+N_rB_r)\|X-Y\|_K.$ Every term is finite by [F1] and [F3]. [F3, F5, step 2.1]

4.1 Integrating the gradient along $X_\theta$ and using step 3.1 gives $\displaystyle G_r(Y)\ge G_r(X)+\langle\nabla G_r(X),Y-X\rangle_K-\frac{L_rA_r^2+N_rB_r}{2}\|Y-X\|_K^2.$ The pointwise $\lambda_V$-semiconvex inequality [F6], integrated against $\sigma$, gives the same inequality for $X\mapsto\int V(X)d\sigma$ with coefficient $\lambda_V$. Adding the two inequalities and restricting to the convex set $C_r$ proves the claimed semiconvexity of $E_r$. [F3, F6, step 3.1] ∎