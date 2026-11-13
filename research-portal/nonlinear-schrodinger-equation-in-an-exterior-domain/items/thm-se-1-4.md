---
id: thm-se-1-4
kind: theorem
domain: mathematics
title: "Theorem 1.4: linearized control around a trajectory"
status: published
proof_strategy: direct
deps:
  - def-se-geometry
  - def-se-trajectory
  - def-se-dirichlet-scale
  - def-se-control-cutoffs
  - def-se-linearized-pair
  - def-se-ucpw
  - def-se-real-hum
  - prop-se-real-hum-isomorphism
  - def-se-foundation-time-function-spaces
  - math:def-axiom-of-choice
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-trajectory: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  def-se-control-cutoffs: mathematical-premise
  def-se-linearized-pair: mathematical-premise
  def-se-ucpw: mathematical-premise
  def-se-real-hum: mathematical-premise
  prop-se-real-hum-isomorphism: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 5, Theorem 1.4; page 19, proof of Theorem 1.4
dependency_level: 19
---

## Statement

Assume the Axiom of Choice and hypothesis (H): $n\ge2$, $\Omega=\mathbb R^n\setminus\Theta$ is the connected exterior of a nonempty compact obstacle with smooth boundary, and $\Theta$ is non-trapping, meaning that every generalized reflected ray leaves every compact set in finite time. Let $T>0$ and $\lambda\in\mathbb R\setminus\{0\}$. Assume (W): $w\in C([0,T];H_D^2(\Omega)\cap W^{2,\infty}(\Omega))$ solves $i w_t+\Delta w+\lambda|w|^2w=0$ distributionally, with the homogeneous Dirichlet condition encoded by $H_D^2(\Omega)=H^2(\Omega)\cap H_0^1(\Omega)$.

Choose $R>0$ with $\Theta\subset B_R(0)$ and the real smooth cutoff $\varphi$ of [[def-se-control-cutoffs]], zero for $|x|\le R$, positive for $|x|>R$, and equal to one for $|x|\ge R+1$. Assume (UCPw): an adjoint solution $v\in C([0,T];H_0^1(\Omega))$ of $i v_t+\Delta v+2\lambda|w|^2v-\lambda w^2\overline v=0$ that vanishes on $(0,T)\times\{x\in\Omega:|x|>R\}$ is identically zero.

For $s\in\{1,2\}$ and arbitrary $z_0,z_T\in H_D^s(\Omega)$, there is a control $h\in C([0,T];H_D^s(\Omega))$ and a corresponding solution $z\in C([0,T];H_D^s(\Omega))$ of

$$i z_t+\Delta z+2\lambda|w|^2z+\lambda w^2\overline z=\varphi h,\qquad z|_{\partial\Omega}=0,\qquad z(0)=z_0,$$

such that $z(T)=z_T$. Here $H_D^1(\Omega)=H_0^1(\Omega)$, and continuity is in the relevant spectral norm. The solution is in the mild class of [[def-se-real-hum]]; no restriction to dimensions two and three is imposed on this linear statement.

## Facts & Assumptions

[F1] Under Choice and (H), (W), and (UCPw), [[prop-se-real-hum-isomorphism]] gives, for $E=H_D^s(\Omega)$ and $s\in\{1,2\}$, a bounded real-linear map $G_w:E\times E\to C([0,T];E)$ selecting a control that steers the linearized system between the prescribed endpoints.

[F2] In [[def-se-real-hum]], the selected control is $G_w(x_0,x_T)=h_a$, where $a=S_w^{-1}(x_0-P(0,T)x_T)$; the backward controlled solution starts at $S_wa$ and ends at zero, and the homogeneous evolution $P(t,T)x_T$ ends at $x_T$. The equation and cutoff are those of [[def-se-linearized-pair]] and [[def-se-control-cutoffs]].

[F3] The scale identifications and path-space meaning are supplied by [[def-se-dirichlet-scale]] and [[def-se-foundation-time-function-spaces]]. The hypotheses and their conventions are those of [[def-se-geometry]], [[def-se-trajectory]], [[def-se-ucpw]], and [[math:def-axiom-of-choice]].

## Proof

**Given:** The assumptions and endpoints in the statement.

**Goal:** Construct a continuous control and a mild solution with the two prescribed endpoints.

1.1 Put $E=H_D^s(\Omega)$ and set $h=G_w(z_0,z_T)$. The hypotheses of F1 are exactly those assumed, so $h\in C([0,T];E)$. In F2 set $a=S_w^{-1}(z_0-P(0,T)z_T)$; the inverse exists by F1. The corresponding backward controlled solution $z_a$ belongs to $C([0,T];E)$, has $z_a(T)=0$, and has $z_a(0)=z_0-P(0,T)z_T$. [given, F1, F2, F3]

2.1 Define $z(t)=z_a(t)+P(t,T)z_T$. By the real linearity of the equation and the mild evolution in F2, this is a mild solution with control $h$, and it is continuous in $E$. At time zero the two terms sum to $z_0$; at time $T$ they sum to $z_T$. The scale and boundary conventions in F3 give the stated formulation. [F2, F3, step 1.1] ∎

## Source notes

The original article is cited for attribution of Theorem 1.4 and its HUM method. The argument above applies the independently stated local control-operator proposition; it does not take the article's theorem as a premise.
