---
id: ex-gr-fx14-1
kind: example
title: Holonomy and discrete geometric interfaces — flat local transport with global holonomy
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-tetrad-spin-connection
  - def-gr-fx-connection-path-transport
  - prop-gr-fx-s1-loop-noncontractible
  - thm-a-regular-level-set-is-an-embedded-submanifold
  - def-smooth-differential-k-form
  - def-exterior-derivative-by-the-invariant-vector-field-formula
dependency_roles:
  def-gr-fx-tetrad-spin-connection: mathematical-premise
  def-gr-fx-connection-path-transport: mathematical-premise
  prop-gr-fx-s1-loop-noncontractible: mathematical-premise
  thm-a-regular-level-set-is-an-embedded-submanifold: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-exterior-derivative-by-the-invariant-vector-field-formula: mathematical-premise
physical_scope: null
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, §§3.3.3–3.4.2"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html"
      locator: "§3.3.3 on path dependence and curvature; §3.4.2 on the curvature two-form."
    - title: "Urs Schreiber and Konrad Waldorf, Parallel Transport and Functors, arXiv:0705.0452, §2.1"
      url: "https://arxiv.org/pdf/0705.0452"
      locator: "§2.1, thin path classes and global transport functor conventions."
verification:
  precheck: pass
---

## Statement

Let $M=S^1\times\mathbb R^3$, write $(x,y)$ for the standard embedding coordinates on $S^1$, and set $\alpha=x\,dy-y\,dx$. With real coordinates $t,z_1,z_2$ on $\mathbb R^3$, define

$$g=-dt\otimes dt+\alpha\otimes\alpha+dz_1\otimes dz_1+dz_2\otimes dz_2.$$

The global frame $E_0=\partial_t$, $E_1=-y\partial_x+x\partial_y$, $E_2=\partial_{z_1}$, $E_3=\partial_{z_2}$ is an orthonormal tetrad for $g$ with signature $(-,+,+,+)$. Orient $M$ by this ordered frame and time-orient it by $E_0$. Let $J$ be the constant matrix with $JE_2=E_3$, $JE_3=-E_2$, and $JE_0=JE_1=0$. Assume the $\mathrm{AC}_\omega$ convention in [[def-gr-fx-tetrad-spin-connection]]. Define $\omega=\tfrac14J\alpha$ and the affine connection on this frame by

$$\nabla_X\Bigl(\sum_Jv^J E_J\Bigr):=\sum_I\Bigl(X(v^I)+\sum_J\omega^I{}_J(X)v^J\Bigr)E_I.$$

This is a flat Lorentz connection. On any coordinate arc of $S^1$ with angular coordinate $\theta$, transport between endpoints is $\exp(-\tfrac14J(\theta_1-\theta_0))$, independent of the chosen path inside that arc. Around the once-around loop it is $\exp(-\tfrac\pi2J)\ne I_4$, although the curvature is zero; the loop is not thin-contractible.

## Statement references

[[def-gr-fx-tetrad-spin-connection]]

[[def-gr-fx-connection-path-transport]]

[[prop-gr-fx-s1-loop-noncontractible]]

## Facts & Assumptions

**Given:** The manifold, metric, tetrad, and matrix-valued one-form in the statement; use the connection and transport conventions of the linked A-page items.

[A1] Assume $\mathrm{AC}_\omega$ as required by [[def-gr-fx-tetrad-spin-connection]].

[F1] [[def-gr-fx-tetrad-spin-connection]]: a Lorentz connection matrix is $\eta$-skew, has curvature $F=d\omega+\omega\wedge\omega$, and in this signature uses $\eta=\operatorname{diag}(-1,1,1,1)$.

[F2] [[def-gr-fx-connection-path-transport]]: transport solves $U'=-\omega(\dot\gamma)U$ with initial value $I_4$.

[F3] [[prop-gr-fx-s1-loop-noncontractible]]: the once-around loop in $S^1$ is not the identity class in the thin path groupoid.

[F5] [[thm-a-regular-level-set-is-an-embedded-submanifold]]: a nonempty regular level set of a smooth real-valued function is a smooth embedded submanifold of codimension one.

[F6] [[def-exterior-derivative-by-the-invariant-vector-field-formula]]: for a one-form $\beta$, $d\beta(X,Y)=X(\beta(Y))-Y(\beta(X))-\beta([X,Y])$.

## Proof

**Proof technique:** direct construction.

1.1 The function $f(x,y)=x^2+y^2$ has derivative $(2x,2y)\ne0$ on $S^1=f^{-1}(1)$, so [F5] gives its usual smooth one-dimensional submanifold structure. The form $\alpha=x\,dy-y\,dx$ is smooth there. By [F6], $d\alpha(\partial_x,\partial_y)=1-(-1)=2$ in the ambient plane, so $d\alpha=2dx\wedge dy$; its restriction vanishes on the one-dimensional tangent spaces of $S^1$. Also $\alpha(E_1)=1$ and $\alpha$ vanishes on the other frame vectors, so the displayed frame is orthonormal for $g$; it is smooth and $E_0$ is future-directed. In the $E_2,E_3$ plane the matrix $J$ is the standard skew rotation generator, so $J^{\mathsf T}\eta+\eta J=0$. The displayed formula for $\nabla$ is linear over smooth functions in $X$, additive in the vector field argument, and satisfies $\nabla_X(fV)=X(f)V+f\nabla_XV$ by the ordinary product rule; hence it defines a smooth affine connection with tetrad matrix $\omega$. Since $\alpha\wedge\alpha=0$, its curvature is $F=d\omega+\omega\wedge\omega=\tfrac14Jd\alpha+\tfrac1{16}J^2\alpha\wedge\alpha=0$. It is $\eta$-skew and flat, so it is a Lorentz connection under [F1]. [given, A1, F1, F5, F6, algebra]

1.2 On an angular arc, $\alpha=d\theta$. The matrix $U(t)=\exp(-\tfrac14J(\theta(t)-\theta(0)))$ differentiates to $-\tfrac14J\dot\theta(t)U(t)$ and starts at $I_4$. By [F2] it is the transport by uniqueness, and it depends only on the endpoints on that arc. For the path $\theta(t)=2\pi t$, its endpoint is $\exp(-\tfrac\pi2J)$. Since $J^2=-I$ on $\operatorname{span}(E_2,E_3)$, this exponential equals $-J$ on that plane and is not the identity there. By [F3] the loop class is nontrivial, consistent with this nonidentity holonomy despite $F=0$. [given, F2, F3, step 1.1, algebra] ∎ 