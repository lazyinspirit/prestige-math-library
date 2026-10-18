---
id: thm-rosenbrock-euler-a-l-stable
kind: theorem
title: Rosenbrock-Euler is A-stable and L-stable on the scalar test equation
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [def-rosenbrock-euler-step-map, thm-rosenbrock-euler-scalar-a-and-l-stability]
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ralf Kornhuber, Notes on Numerical Methods for ODEs and Numerical Linear Algebra, §§1.3 and 1.8, pp. 11–13, 33–34"
      url: "https://numerik.mi.fu-berlin.de/wiki/WS_2021/NumericsII_Dokumente/NumericsIIKornhuber_rev5.pdf"
    - title: "Peter Benner and Hermann Mena, Rosenbrock methods for solving differential Riccati equations, §II, pp. 2–4"
      url: "https://cscproxy.mpi-magdeburg.mpg.de/preprints/2011/MPIMD11-06.pdf"
---

## Statement

Consider the exact-arithmetic Rosenbrock-Euler map of [[def-rosenbrock-euler-step-map]] with $\gamma=1$, exact Jacobian, and its complex scalar test equation $y'=\lambda y$, $z=h\lambda$. The complexification is the real two-dimensional exact map under $(\operatorname{Re}y,\operatorname{Im}y)$, with multiplication by $\lambda$ represented by $C_\lambda=\begin{pmatrix}\operatorname{Re}\lambda&-\operatorname{Im}\lambda\\\operatorname{Im}\lambda&\operatorname{Re}\lambda\end{pmatrix}$. Thus its exact stage equation is $(I_2-hC_\lambda)k=C_\lambda y$, equivalently $(1-z)k=\lambda y$, and its update is $y+hk$. This is the $\gamma=1$ exact complexification used in [[thm-rosenbrock-euler-scalar-a-and-l-stability]], not execution of a real rounded solver. Its amplification factor is $R(z)=(1-z)^{-1}$. A-stability means no pole and $|R(z)|\le1$ throughout $\operatorname{Re}z\le0$; L-stability additionally means $R(z)\to0$ as $|z|\to\infty$ within that half-plane. The exact method is both A-stable and L-stable, and its amplification factor agrees with backward Euler.

## Facts & Assumptions

**Given:** A scalar complex test equation, a step $h>0$, and $\operatorname{Re}\lambda\le0$ when stability is asserted.

[F1] [[def-rosenbrock-euler-step-map]] gives the real exact-Jacobian equation and update at $\gamma=1$. Under the real two-dimensional representation in the Statement these are exactly $y^+=y+hk$ and $(1-h\lambda)k=\lambda y$; [[thm-rosenbrock-euler-scalar-a-and-l-stability]] uses the same exact complexification and rational-function stability criteria.

## Proof

1.1 If $\operatorname{Re}z\le0$, then $1-z\ne0$. Solving the stage equation in [F1] gives $y^+=y+h\lambda y/(1-z)=y/(1-z)$, so $R(z)=(1-z)^{-1}$; this is also the scalar backward-Euler update. [given, F1, algebra]

2.1 For $\operatorname{Re}z\le0$, $|1-z|^2=1-2\operatorname{Re}z+|z|^2\ge1+|z|^2>0$. Hence there is no pole there and $|R(z)|\le1/\sqrt{1+|z|^2}\le1$. The same bound tends to zero whenever $|z|\to\infty$ within the closed left half-plane. These prove the stated A- and full L-stability conditions. [given, F1, step 1.1, algebra] ∎
