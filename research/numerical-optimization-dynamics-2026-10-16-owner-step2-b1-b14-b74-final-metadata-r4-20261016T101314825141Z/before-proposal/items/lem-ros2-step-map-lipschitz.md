---
id: lem-ros2-step-map-lipschitz
kind: lemma
title: ROS2 step-map stability for a Lipschitz approximate Jacobian
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [alg-rosenbrock-ros2-step, lem-rosenbrock-matrix-inverse-perturbation]
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Luca Bonaventura, Lecture Notes on Numerical Methods for Large ODE Systems, §2.3, pp. 43–47"
      url: "https://www.researchgate.net/publication/386290653_LECTURE_NOTES_ON_NUMERICAL_METHODS_FOR_LARGE_ODE_SYSTEMS"
    - title: "Ralf Kornhuber, Notes on Numerical Methods for ODEs and Numerical Linear Algebra, §1.8, pp. 33–37"
      url: "https://numerik.mi.fu-berlin.de/wiki/WS_2021/NumericsII_Dokumente/NumericsIIKornhuber_rev5.pdf"
verification:
  precheck: pending
---

## Statement

Fix $t$ and $0<h\le h_0$. Let $K$ be a compact convex state set containing all stage points, and suppose $f$, $f_t$, and $W(t,\cdot)$ are Lipschitz on $K$ with constants $L_f,L_t,L_W$; suppose $\|f\|\le F$, $\|f_t\|\le F_t$, $\|W\|\le W_0$, and $M(y):=I-\gamma hW(t,y)$ has $\|M(y)^{-1}\|\le B$. Then the ROS2 map $\Psi_h$ of [[alg-rosenbrock-ros2-step]] satisfies $\|\Psi_h(u)-\Psi_h(v)\|\le(1+L_Rh)\|u-v\|$ for all $u,v\in K$, where the finite constant $L_R$ depends only on these bounds, $h_0$, $B$, and $\gamma$.

## Facts & Assumptions

**Given:** The compact convex set, Lipschitz and size bounds, and uniform inverse bound in the statement.

[F1] [[alg-rosenbrock-ros2-step]] defines $k_1=M(y)^{-1}(f(t,y)+\gamma h f_t(t,y))$, $k_2=M(y)^{-1}(f(t+h,y+hk_1)-2k_1-\gamma h f_t(t,y))$, and $\Psi_h(y)=y+\frac h2(3k_1+k_2)$.

[F2] [[lem-rosenbrock-matrix-inverse-perturbation]] bounds the difference of two inverse matrices by the product of their inverse norms and the difference of their matrices.

## Proof

1.1 For $u,v\in K$, [F2] and $\|W(t,u)-W(t,v)\|\le L_W\|u-v\|$ give $\|M(u)^{-1}-M(v)^{-1}\|\le B^2\gamma hL_W\|u-v\|$. Adding and subtracting $M(u)^{-1}(f(t,v)+\gamma h f_t(t,v))$ in [F1] shows $\|k_1(u)-k_1(v)\|\le C_1\|u-v\|$ for $C_1:=B(L_f+\gamma h_0L_t)+B^2\gamma h_0L_W(F+\gamma h_0F_t)$. [given, F1, F2, algebra]

1.2 The stage-state difference obeys $\|(u+hk_1(u))-(v+hk_1(v))\|\le(1+h_0C_1)\|u-v\|$. Hence the second right-hand side in [F1] has Lipschitz constant $C_2:=L_f(1+h_0C_1)+2C_1+\gamma h_0L_t$. Applying the same inverse-difference bound to its product with $M(y)^{-1}$ gives a finite stage constant $C_3:=BC_2+B^2\gamma h_0L_W(F+2B(F+\gamma h_0F_t)+\gamma h_0F_t)$ for $k_2$. [given, F1, step 1.1, algebra]

1.3 Subtract the two output formulas in [F1]. The state part contributes $\|u-v\|$, and the stages contribute at most $\frac h2(3C_1+C_3)\|u-v\|$. Taking $L_R=(3C_1+C_3)/2$ proves the claim. [F1, step 1.1, step 1.2, algebra] ∎
