---
id: lem-rosenbrock-euler-step-map-lipschitz
kind: lemma
title: Rosenbrock-Euler step stability on a compact convex set
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [def-rosenbrock-euler-step-map, cor-mean-value-theorem, lem-rosenbrock-matrix-inverse-perturbation, thm-chain-rule-for-total-derivatives]
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ralf Kornhuber, Notes on Numerical Methods for ODEs and Numerical Linear Algebra, §1.8, pp. 33–37"
      url: "https://numerik.mi.fu-berlin.de/wiki/WS_2021/NumericsII_Dokumente/NumericsIIKornhuber_rev5.pdf"
    - title: "Luca Bonaventura, Lecture Notes on Numerical Methods for Large ODE Systems, §§2.3 and 5.3, pp. 44–47, 90–92"
      url: "https://www.researchgate.net/publication/386290653_LECTURE_NOTES_ON_NUMERICAL_METHODS_FOR_LARGE_ODE_SYSTEMS"
---

## Statement

Let $K\subset U\subset\mathbb R^d$ be compact and convex, let $f\in C^2(U,\mathbb R^d)$, and suppose on $K$ that $\|f\|\le F$, $\|Df\|\le L$, and $\|D^2f\|\le H$. For $0<h\le h_0$, assume $M_h(y):=I-hDf(y)$ is invertible for every $y\in K$ with $\|M_h(y)^{-1}\|\le B$. The exact-arithmetic autonomous exact-Jacobian Rosenbrock-Euler map $\Phi_h(y)=y+hM_h(y)^{-1}f(y)$ of [[def-rosenbrock-euler-step-map]], with $\gamma=1$, then satisfies
$$
\|\Phi_h(u)-\Phi_h(v)\|\le(1+L_*h)\|u-v\|,\qquad L_*:=BL+h_0B^2HF,
$$
for all $u,v\in K$.

## Facts & Assumptions

**Given:** The sets, derivative bounds, and uniform inverse bound in the statement.

[F1] [[def-rosenbrock-euler-step-map]]: in the autonomous exact-Jacobian branch with $\gamma=1$, the exact-method map is $\Phi_h(y)=y+hM_h(y)^{-1}f(y)$ when $M_h(y)$ is invertible.

[F2] [[lem-rosenbrock-matrix-inverse-perturbation]]: for invertible $P,Q$, $\|P^{-1}-Q^{-1}\|\le\|P^{-1}\|\,\|Q-P\|\,\|Q^{-1}\|$.

[F3] [[thm-chain-rule-for-total-derivatives]]: differentiating a composition gives the product of the outer derivative and the inner derivative.

[F4] [[cor-mean-value-theorem]]: a differentiable real function continuous on a closed interval has an interior derivative equal to its endpoint difference divided by the interval length.

## Proof

1.1 The segment from $v$ to $u$ lies in $K$. For any unit vector $a$, the scalar function $s\mapsto a\cdot f(v+s(u-v))$ has derivative bounded by $L\|u-v\|$ by [F3]; [F4] therefore gives $|a\cdot(f(u)-f(v))|\le L\|u-v\|$. Taking the supremum over unit $a$ yields $\|f(u)-f(v)\|\le L\|u-v\|$. Applying the same argument to $s\mapsto a\cdot Df(v+s(u-v))b$ for unit $a,b$, with [F3] and the Hessian bound $H$, gives $\|Df(u)-Df(v)\|\le H\|u-v\|$. [given, F3, F4, choose]

2.1 Put $M_u=M_h(u)$ and $M_v=M_h(v)$. Then $\|M_v-M_u\|=h\|Df(u)-Df(v)\|\le hH\|u-v\|$. By [F2], $\|M_u^{-1}-M_v^{-1}\|\le B^2hH\|u-v\|$. [given, F2, step 1.1, algebra]

3.1 Let $K_h(y)=M_h(y)^{-1}f(y)$. Adding and subtracting $M_u^{-1}f(v)$ and using steps 1.1 and 2.1 gives $\|K_h(u)-K_h(v)\|\le(BL+B^2hHF)\|u-v\|$. [F1, step 1.1, step 2.1, algebra]

4.1 By [F1], $\|\Phi_h(u)-\Phi_h(v)\|\le[1+hBL+h^2B^2HF]\|u-v\|\le(1+L_*h)\|u-v\|$, since $h\le h_0$. [F1, step 3.1, algebra] ∎
