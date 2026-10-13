---
id: pthm-em-inductor-energy
kind: physics-theorem
title: "Restricted inductor energy LI^2/2 and its identification with the frozen magnetic field energy"
domain: physics
status: published
origin: session
dependency_level: 20
proof_strategy: direct
deps:
  - post-em-circuit-approximation
  - pthm-em-inductance-reciprocity
  - def-em-steady-current-regime
  - def-em-si-conventions
  - def-interval
  - def-oriented-integral
  - thm-algebra-of-derivatives
  - thm-continuous-implies-integrable
  - thm-ftc-second-part
  - def-euclidean-inner-product
  - def-countable-choice
dependency_roles:
  post-em-circuit-approximation: physical-assumption
  pthm-em-inductance-reciprocity: physical-result
  def-em-steady-current-regime: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-interval: mathematical-premise
  def-oriented-integral: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Richard Fitzpatrick, Classical Electromagnetism: An intermediate level course (University of Texas at Austin; complete course book, 364 pp.)"
      url: http://www.physics.ntua.gr/ph03/doc/Fitzpatrick.R.@.Classical.Electromagnetism.pdf
      locator: '§7.5 printed pp. 225-231 (the RL circuit equation with the battery work for two coupled coils splitting into Ohmic terms plus the inductive energy $\frac12L_1I_1^2+\frac12L_2I_2^2+MI_1I_2$, and the statement that the energy stored in an inductor is stored in the surrounding magnetic field); read in the fetched complete 364-page course book.'
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (Lent Term 2015, 236 pp.)"
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: '§4.1.2 printed pp. 71-73 (the work done against the induced emf when building a current, integrated to $W=\frac12LI^2$, and rewritten as the field energy $\frac12\int J\cdot A\,d^3x=(1/2\mu_0)\int B\cdot B\,d^3x$ under a decay assumption); read in the retained complete text of the 236-page printing.'
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: '§7.2.4 printed pp. 317-320 (the energy stored in a magnetic field, $\frac12LI^2$ for a circuit and $U=\frac1{2\mu_0}\int B^2\,d\tau$ for the field); read in the stamped 596-page scan.'
physical_scope: 'The restricted inductive-energy bookkeeping of the adopted lumped model: for fixed geometry and a constant symmetric inductance matrix the accumulated terminal energy is the change of $\frac12I^{\mathsf T}LI$, and for a smooth compact conserved-current realization this equals the change of the frozen magnetic field energy $\frac1{2\mu_0}\int|B|^2$. It excludes changing geometry, radiation, distributed and material-loss effects, thin-wire self-inductance, and any empirical claim.'
---

## Statement

Assume the lumped circuit model of [[post-em-circuit-approximation]] with the units of [[def-em-si-conventions]], and assume Countable Choice ($\mathrm{AC}_\omega$, [[def-countable-choice]]) for clause (b), where it is inherited from the linkage suppliers.

For $y\in\mathbb R^n$ write $y_\alpha:=y(\alpha-1)$, and for $L\in\mathbb R^{n\times n}$ write $L_{\alpha\beta}:=L(\alpha-1,\beta-1)$, where $1\le\alpha,\beta\le n$, consistently with the zero-based coordinates of [[def-euclidean-inner-product]] and the profile labels of [[pthm-em-inductance-reciprocity]]. All sums over $\alpha,\beta$ below range from $1$ to $n$.

(a) [Terminal-energy bookkeeping] Let $J\subseteq\mathbb R$ be an interval ([[def-interval]]), let $t_0,t_1\in J$, let $L\in\mathbb R^{n\times n}$ be constant and symmetric, let $I:J\to\mathbb R^n$ be of class $C^1$ in the following sense: $I$ extends to a $C^1$ map on an open interval containing $J$, so that the derivatives used below are those of the extension (one-sided at included endpoints of $J$, and not intrinsic to a value restriction when $J$ is a singleton), and let $V(t):=L\dot I(t)$ be the terminal-voltage vector of the inductive branches as adopted in [[post-em-circuit-approximation]] (the Faraday branch: the terminal voltage of a branch is the rate of change of its flux linkage $\Phi=LI$). Then
$$\int_{t_0}^{t_1}\langle V(t),I(t)\rangle\,dt=\frac12\langle I(t_1),LI(t_1)\rangle-\frac12\langle I(t_0),LI(t_0)\rangle ,$$
and for $n=1$ with $L>0$ this reads $\int_{t_0}^{t_1}V I\,dt=\frac12L\bigl(I(t_1)^2-I(t_0)^2\bigr)$: the accumulated terminal energy equals the change of the inductor bookkeeping energy $\frac12LI^2$. The identity is exact for every such $C^1$ current and fixed geometry; it uses only symmetry of $L$, the product rule and the fundamental theorem of calculus. For a changing geometry the mechanical work done on the circuit is an additional term and is not covered here.

(b) [Identification with the frozen field energy] Suppose in addition that the currents are realized by fixed compact smooth conserved profiles $j_1,\dots,j_n$ of the class of [[def-em-steady-current-regime]](b), with instantaneous source $J_I(t):=\sum_\alpha I_\alpha(t)j_\alpha$, and that the inductance matrix is the linkage matrix of those profiles in the sense of [[pthm-em-inductance-reciprocity]]: $L_{\alpha\beta}=\frac{\mu_0}{4\pi}\iint\frac{\langle j_\alpha(x),j_\beta(y)\rangle}{|x-y|}\,d\lambda_3(y)\,d\lambda_3(x)$. Then for every $t\in J$
$$\frac12\langle I(t),LI(t)\rangle=\frac12\int_{\mathbb R^3}\langle J_I(t),A_{J_I(t)}\rangle\,d\lambda_3=\frac1{2\mu_0}\int_{\mathbb R^3}|B_{J_I(t)}|^2\,d\lambda_3\ \ge0,$$
where $A_{J_I(t)}$ is the Coulomb-gauge Newtonian vector potential and $B_{J_I(t)}=\operatorname{curl}A_{J_I(t)}$ of that theorem: the right-hand side is the magnetic field energy of the frozen instantaneous configuration, and the accumulated terminal energy of (a) between $t_0$ and $t_1$ is the change of this field energy. The relation $V=L\dot I$ is the explicitly adopted terminal law of [[post-em-circuit-approximation]]; the identification of the model's inductance matrix with the smooth-profile linkage matrix is part of the adopted model of [[post-em-circuit-approximation]].

(c) [Scope] no radiation, distributed-element, material-loss, moving-geometry or thin-wire self-inductance claim is made; the frozen-configuration energy is not asserted to be the energy of a time-dependent full Maxwell solution.

## Facts & Assumptions

**Given:** Assume the lumped model data of [[post-em-circuit-approximation]], a constant symmetric $L\in\mathbb R^{n\times n}$, an interval $J$, points $t_0,t_1\in J$, a current $I:J\to\mathbb R^n$ extending to a $C^1$ map on an open interval containing $J$, the terminal voltage $V=L\dot I$, and $\mathrm{AC}_\omega$ for clause (b).

[A1] Countable Choice, written $\mathrm{AC}_\omega$, says every sequence of nonempty sets has a choice function. ([[def-countable-choice]]).

[F1] The adopted lumped circuit model carries branch currents $I_\alpha:J\to\mathbb R$ and constant matrices $L,C,R$ with $L$ symmetric, the Faraday branch relation $V(t)=L\dot I(t)$ (each terminal potential is the rate of change of the branch flux linkage $LI$), and the circuit-level bookkeeping quantities $LI$, $\tfrac12I^{\mathsf T}LI$; the matrices, terminal geometry and loop choice are declared model data, not derived from the vacuum Maxwell equations. ([[post-em-circuit-approximation]]).

[F2] A subset of $\mathbb R$ is an interval when it has one of the nine order-convex forms listed in the definition; in particular every interval is order-convex. ([[def-interval]]).

[F3] If $f,g$ are differentiable at a point $c$ of their common domain and $\alpha\in\mathbb R$, then $f+g$, $\alpha f$ and $fg$ are differentiable at $c$, with $(f+g)'(c)=f'(c)+g'(c)$, $(\alpha f)'(c)=\alpha f'(c)$ and $(fg)'(c)=f'(c)g(c)+f(c)g'(c)$. ([[thm-algebra-of-derivatives]]).

[F4] If $a<b$ and $f:[a,b]\to\mathbb R$ is continuous on $[a,b]$, then $f$ is bounded and Riemann (Darboux) integrable on $[a,b]$. ([[thm-continuous-implies-integrable]]).

[F5] If $a<b$, $G:[a,b]\to\mathbb R$ is differentiable at every point of $[a,b]$ as a function on $[a,b]$ (one-sided at the endpoints), and $G'$ is integrable on $[a,b]$, then $\int_a^bG'=G(b)-G(a)$. ([[thm-ftc-second-part]]).

[F6] The oriented integral is defined for all $u,v\in\mathbb R$ by: the Darboux integral over $[u,v]$ when $u<v$; $0$ when $u=v$; and $-\int_v^u f$ when $u>v$; on $u<v$ it is the published integral verbatim. ([[def-oriented-integral]]).

[F7] For fixed compact smooth conserved profiles $j_1,\dots,j_n$ the linkage coefficients $L_{\alpha\beta}=\frac{\mu_0}{4\pi}\iint\langle j_\alpha(x),j_\beta(y)\rangle/|x-y|$ are finite real numbers with $L_{\alpha\beta}=L_{\beta\alpha}$, the linkage of the superposition is $\int\langle j_\beta,A_{J_I}\rangle=\sum_\alpha L_{\beta\alpha}I_\alpha$, and with $U(I):=\frac12\int\langle J_I,A_{J_I}\rangle$ one has $U(I)=\frac12\sum_{\alpha,\beta}L_{\alpha\beta}I_\alpha I_\beta=\frac1{2\mu_0}\int|B_{J_I}|^2\ge0$, with $U(I)=0$ exactly when $J_I=0$. ([[pthm-em-inductance-reciprocity]]).

[F8] The compact smooth current class consists of the currents $J\in C_c^\infty(\Omega;\mathbb R^3)$ with $\operatorname{div}J=0$, extended by zero to $\mathbb R^3$. ([[def-em-steady-current-regime]]).

[F9] The framework uses SI units: $V$ in volts, $I$ in amperes, $t$ in seconds and $L$ in henries ($\mathrm H=\mathrm V\,\mathrm s\,\mathrm A^{-1}$). ([[def-em-si-conventions]]).

[F10] The Euclidean inner product is $\langle x,y\rangle=\sum_{k=0}^{n-1}x(k)y(k)$; it is symmetric and bilinear over $\mathbb R$, so with the Statement's profile labels $\langle Ly,x\rangle=\sum_{\alpha,\beta=1}^nL_{\alpha\beta}y_\beta x_\alpha$ for every $L\in\mathbb R^{n\times n}$ and $x,y\in\mathbb R^n$. ([[def-euclidean-inner-product]]).



## Proof

**Proof technique:** direct.

1.1 Fix the $C^1$ extension of $I$ to an open interval $U\supseteq J$, and define $W(y):=\frac12\langle y,Ly\rangle=\frac12\sum_{\alpha,\beta}L_{\alpha\beta}y_\alpha y_\beta$ for $y\in\mathbb R^n$, so that $t\mapsto G(t):=W(I(t))=\frac12\langle I(t),LI(t)\rangle$ is the bookkeeping-energy function of the Statement. For each pair $(\alpha,\beta)$ the product $t\mapsto I_\alpha(t)I_\beta(t)$ is differentiable on $U$ with derivative $\dot I_\alpha I_\beta+I_\alpha\dot I_\beta$ by [F3], and $G$ is a finite linear combination of these products; applying the sum and scalar rules of [F3] repeatedly therefore gives, for every $t\in J$, $$G'(t)=\frac12\sum_{\alpha,\beta}L_{\alpha\beta}\bigl(\dot I_\alpha(t)I_\beta(t)+I_\alpha(t)\dot I_\beta(t)\bigr)=\sum_{\alpha,\beta}L_{\alpha\beta}\dot I_\alpha(t)I_\beta(t)=\langle L\dot I(t),I(t)\rangle=\langle V(t),I(t)\rangle ,$$ where the second equality relabels $\alpha\leftrightarrow\beta$ in one half of the sum and uses the symmetry $L_{\alpha\beta}=L_{\beta\alpha}$, and the last two use [F10] and $V=L\dot I$; the derivative $G'$ is continuous on $J$, being a finite sum of products of continuous functions. [F1, F3, F10, algebra]

1.2 Assume now the realization hypotheses of clause (b). For each fixed $t\in J$ put $J_I(t):=\sum_\alpha I_\alpha(t)j_\alpha$, a member of the compact smooth conserved class; applying [F7] to the amplitudes $I(t)=(I_1(t),\dots,I_n(t))$ (its coefficients are the linkage numbers of the profiles $j_1,\dots,j_n$, which by hypothesis coincide with the entries of $L$) gives $$\frac12\langle I(t),LI(t)\rangle=\frac12\sum_{\alpha,\beta}L_{\alpha\beta}I_\alpha(t)I_\beta(t)=U(I(t))=\frac12\int_{\mathbb R^3}\langle J_I(t),A_{J_I(t)}\rangle\,d\lambda_3=\frac1{2\mu_0}\int_{\mathbb R^3}|B_{J_I(t)}|^2\,d\lambda_3\ \ge0 ,$$ the outer equalities by [F10] and the definition of $U$ in [F7]; this is clause (b)'s energy identity at each fixed $t$. [F7, F8, F10, algebra]

2.1 Let $u:=\min\{t_0,t_1\}$ and $v:=\max\{t_0,t_1\}$; then $[u,v]\subseteq J$, since $J$ is order-convex by [F2] and contains both $u$ and $v$. If $u<v$, then $G$ is differentiable at every point of $[u,v]$ as a function on $[u,v]$ (interior points lie in the open set $U$, and at $u,v$ the one-sided derivatives exist by restriction of the extension), while $G'$ is continuous on $[u,v]$ by step 1.1 and hence integrable there by [F4]; [F5] gives $\int_u^vG'=G(v)-G(u)$, that is $\int_u^v\langle V,I\rangle=G(v)-G(u)$ by step 1.1. If $u=v$ the same display is $0=G(v)-G(u)$, which holds identically and is the $u=v$ reading of [F6]. If $t_0>t_1$, applying the already-proved case to the pair $(t_1,t_0)$ and the sign clause of [F6] gives $\int_{t_0}^{t_1}\langle V,I\rangle=-\int_{t_1}^{t_0}\langle V,I\rangle=-(G(t_0)-G(t_1))=G(t_1)-G(t_0)$. In every case $\int_{t_0}^{t_1}\langle V(t),I(t)\rangle\,dt=\frac12\langle I(t_1),LI(t_1)\rangle-\frac12\langle I(t_0),LI(t_0)\rangle$, which is the identity of (a); for $n=1$ the quadratic form is $\frac12LI^2$ by [F10]. [F2, F4, F5, F6, F10, step 1.1, algebra, cases]

3.1 Combining steps 2.1 and 1.2 gives, for all $t_0,t_1\in J$, $$\int_{t_0}^{t_1}\langle V(t),I(t)\rangle\,dt=\frac12\int_{\mathbb R^3}\langle J_I(t_1),A_{J_I(t_1)}\rangle\,d\lambda_3-\frac12\int_{\mathbb R^3}\langle J_I(t_0),A_{J_I(t_0)}\rangle\,d\lambda_3=\frac1{2\mu_0}\int_{\mathbb R^3}|B_{J_I(t_1)}|^2\,d\lambda_3-\frac1{2\mu_0}\int_{\mathbb R^3}|B_{J_I(t_0)}|^2\,d\lambda_3 ,$$ so that the accumulated terminal energy is the change of the frozen field energy, as asserted in (b). The terminal law $V=L\dot I$ is the adopted branch relation [F1], and the identification of the model's inductance matrix with the linkage matrix is the additional realization hypothesis of (b), not a consequence of the magnetostatic theorem alone. [step 2.1, step 1.2, F1, algebra]

4.1 Clause (c) holds as stated: the computation is fixed-geometry bookkeeping of the adopted model; changing geometry would add the mechanical work term, and the frozen realization is not asserted to solve any time-dependent Maxwell system. Units are those of [F9]; the singleton case of (a) was handled in step 2.1, where the extension supplies the derivative and no intrinsic derivative is inferred from the value restriction. Countable Choice enters only through clause (b), inherited from the linkage theorem [F7] and its Newtonian and measure interfaces; clause (a) is choice-free. [A1, F1, F9, step 2.1, step 1.2, step 3.1] ∎



## Source notes

Fitzpatrick §7.5, printed pp. 225-231, writes the battery work for coupled coils as Ohmic terms plus the inductive energy and states that the energy of an inductor is stored in the magnetic field; Tong §4.1.2, printed pp. 71-73, integrates the work against the induced emf to $W=\frac12LI^2$ and rewrites it as the magnetostatic field energy under a decay assumption; Griffiths §7.2.4, printed pp. 317-320, records $\frac12LI^2$ and $U=\frac1{2\mu_0}\int B^2\,d\tau$. The present theorem replaces the decay assumption by the compact smooth conservative profiles of [[pthm-em-inductance-reciprocity]] and keeps the terminal law and the matrix identification as explicitly adopted model content; no error bound and no singular thin-wire self-inductance are claimed.
