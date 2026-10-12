---
id: lem-nrqm-state-geometry-ray-to-rank-one-projection
kind: lemma
domain: mathematics
title: "Rays, unit vectors and rank-one Hilbert projections"
status: draft
origin: pipeline
dependency_level: 2
deps: [def-nrqm-state-geometry-state-vectors-and-rays, lem-nrqm-state-geometry-normalization-and-phase-classes, lem-nrqm-composites-rank-one-operator-calculus, def-hilbert-orthogonal-projection, cor-finite-dimensional-subspaces-are-closed, def-normed-subspace, def-linear-combination-and-span, cor-inner-product-induces-a-norm, def-real-and-complex-inner-product-space]
dependency_roles:
  def-nrqm-state-geometry-state-vectors-and-rays: mathematical-premise
  lem-nrqm-state-geometry-normalization-and-phase-classes: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  cor-finite-dimensional-subspaces-are-closed: mathematical-premise
  def-normed-subspace: mathematical-premise
  def-linear-combination-and-span: mathematical-premise
  cor-inner-product-induces-a-norm: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter 2 (updated July 2015), Sections 2.1 and 2.2.1, printed pages 4 and 8-9: every ray has a normalized representative, and a pure state of a qubit is the rank-one projector |psi><psi| on the ray of |psi>"
      url: "https://preskill.caltech.edu/ph219/chap2_15.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.3.4, printed page 12: the ket |psi> and the corresponding one-dimensional projection"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Topics in Real and Functional Analysis (17 November 2017), Section 3.6, printed pages 96-98: rank-one operators T_{u,v}, their trace and their products"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice, which is the choice hypothesis of the rank-one calculus [[lem-nrqm-composites-rank-one-operator-calculus]]. Let $H\ne\{0\}$ be a complex Hilbert space and let
$$T_{u,v}x=\langle x,v\rangle u\qquad(x\in H)$$
be the rank-one operator calculus of that item. Use the notation of [[def-nrqm-state-geometry-state-vectors-and-rays]] for the unit sphere $S(H)$, the nonzero vectors $H^{\times}$, the ray $[\psi]$, the ray space $R(H)$ and the normalization $\nu$. Then:

(a) For every $\psi\in H^{\times}$ the operator $T_{\psi,\psi}$ is a nonzero self-adjoint positive trace-class operator with
$$\|T_{\psi,\psi}\|_1=\operatorname{tr}(T_{\psi,\psi})=\|\psi\|^{2},\qquad T_{\psi,\psi}=\|\psi\|^{2}\,T_{\nu(\psi),\nu(\psi)},\qquad \langle T_{\psi,\psi}x,x\rangle=|\langle x,\psi\rangle|^{2}\quad(x\in H).$$

(b) For every $u\in S(H)$ the operator $T_{u,u}$ is the Hilbert orthogonal projection onto the one-dimensional linear subspace $\mathbb Cu$; in particular $T_{u,u}\ne0$, $T_{u,u}^{2}=T_{u,u}$ and $T_{u,u}^{*}=T_{u,u}$. Conversely, if $M$ is a one-dimensional linear subspace of $H$ and $u\in S(H)$ satisfies $M=\mathbb Cu$, then the Hilbert orthogonal projection $P_M$ onto $M$ equals $T_{u,u}$. Thus the operators $T_{u,u}$ with $u\in S(H)$ are exactly the Hilbert orthogonal projections of $H$ with one-dimensional range.

(c) For nonzero $\psi,\varphi\in H^{\times}$:
$$T_{\psi,\psi}=T_{\varphi,\varphi}\quad\Longleftrightarrow\quad \|\psi\|=\|\varphi\|\ \text{and}\ [\psi]=[\varphi].$$
In particular, for $u,w\in S(H)$ one has $T_{u,u}=T_{w,w}$ if and only if $w=\zeta u$ for some $\zeta\in U(1)$.

(d) The map
$$j:R(H)\longrightarrow \mathcal S_1(H),\qquad j([\psi]):=T_{\nu(\psi),\nu(\psi)},$$
is well defined and injective, and its image is exactly $\{T_{u,u}:u\in S(H)\}$.

## Facts & Assumptions

**Given:** A nonzero complex Hilbert space $H$; nonzero vectors $\psi,\varphi$; unit vectors $u,w$; the rank-one operators $T_{u,v}$.

[F1] **Rank-one calculus** ([[lem-nrqm-composites-rank-one-operator-calculus]]): $T_{u,v}$ is bounded with $\|T_{u,v}\|=\|u\|\,\|v\|$, the assignment is linear in the first and conjugate-linear in the second variable, $T_{u,v}$ is trace class with $\|T_{u,v}\|_1=\|u\|\,\|v\|$ and $\operatorname{tr}(T_{u,v})=\langle u,v\rangle$, one has $T_{u,v}^{*}=T_{v,u}$ and $T_{x,x}\ge0$, for bounded $B$ one has $BT_{u,v}=T_{Bu,v}$ and $T_{u,v}B=T_{u,B^{*}v}$, for trace-class $S$ one has $ST_{u,v}=T_{Su,v}$ and $\operatorname{tr}(ST_{x,y})=\langle Sx,y\rangle$, and $(u,v)\mapsto T_{u,v}$ is trace-norm continuous.

[F2] **The state-space vocabulary** ([[def-nrqm-state-geometry-state-vectors-and-rays]]): $S(H)$ is the set of unit vectors, $H^{\times}$ the set of nonzero vectors, $[\psi]=\{z\psi:z\ne0\}$, $R(H)$ the set of rays, $\nu(\psi)=\|\psi\|^{-1}\psi$, and $U(1)$ the phase group.

[F3] **Normalization and phases** ([[lem-nrqm-state-geometry-normalization-and-phase-classes]]): $\nu(\psi)\in[\psi]\cap S(H)$; $[\psi]=[\varphi]$ if and only if $\nu(\varphi)=\zeta\nu(\psi)$ for a unique $\zeta\in U(1)$; and for $u,w\in S(H)$, $[u]=[w]$ if and only if $w=\zeta u$ with unique $\zeta\in U(1)$.

[F4] **Hilbert orthogonal projection** ([[def-hilbert-orthogonal-projection]]): for a closed linear subspace $M$ of $H$ there is a unique map $P_M:H\to H$ with $P_Mx\in M$ and $x-P_Mx\in M^{\perp}$ for every $x$; a map with these two properties is therefore $P_M$.

[F5] **The line spanned by a unit vector is closed** ([[def-linear-combination-and-span]], [[def-normed-subspace]], [[cor-finite-dimensional-subspaces-are-closed]]): $\mathbb Cu=\{zu:z\in\mathbb C\}$ is a linear subspace admitting the one-element basis $(u)$, hence a finite-dimensional normed subspace of $H$ and therefore closed in $H$.

[F6] **Norm and pairing** ([[cor-inner-product-induces-a-norm]], [[def-real-and-complex-inner-product-space]]): $\|v\|\ge0$ with $\|v\|=0$ exactly for $v=0$, $\|z v\|=|z|\,\|v\|$; the pairing is linear in the first argument, conjugate-linear in the second and conjugate symmetric.

## Proof

1.1 [(a) trace, positivity and scaling] By [F1], $T_{\psi,\psi}$ is trace class with $\|T_{\psi,\psi}\|_1=\|\psi\|^{2}$ and $\operatorname{tr}(T_{\psi,\psi})=\langle\psi,\psi\rangle=\|\psi\|^{2}$, it satisfies $T_{\psi,\psi}^{*}=T_{\psi,\psi}$ and $T_{\psi,\psi}\ge0$, and for every $x$ one has $\langle T_{\psi,\psi}x,x\rangle=\langle\langle x,\psi\rangle\psi,x\rangle=|\langle x,\psi\rangle|^{2}\ge0$ by [F6]; also $T_{\psi,\psi}\psi=\|\psi\|^{2}\psi\ne0$, so $T_{\psi,\psi}$ is nonzero. For $z\ne0$ the conjugate-linearity of [F1] gives $T_{z\psi,z\psi}=|z|^{2}T_{\psi,\psi}$; substituting $z=\|\psi\|^{-1}$ and using $\nu(\psi)=\|\psi\|^{-1}\psi$ gives $T_{\nu(\psi),\nu(\psi)}=\|\psi\|^{-2}T_{\psi,\psi}$, that is the displayed identity after multiplying by $\|\psi\|^{2}$. [given, F1, F2, F6, algebra]

2.1 [(b) $T_{u,u}$ is the projection onto $\mathbb Cu$] Let $u\in S(H)$. The line $\mathbb Cu$ is a closed linear subspace by [F5]. For every $x$ one has $T_{u,u}x=\langle x,u\rangle u\in\mathbb Cu$, and $\langle x-T_{u,u}x,u\rangle=\langle x,u\rangle-\langle x,u\rangle\|u\|^{2}=0$ by [F6], so $x-T_{u,u}x\in(\mathbb Cu)^{\perp}$; by the characterisation of [F4] applied to $M=\mathbb Cu$, this says $T_{u,u}=P_{\mathbb Cu}$, so $T_{u,u}$ is a Hilbert orthogonal projection and in particular is nonzero with $T_{u,u}^{2}=T_{u,u}$ and $T_{u,u}^{*}=T_{u,u}$. [given, step 1.1, F1, F4, F5, F6, algebra]

2.2 [(c) equality of rank-one operators] Suppose first that $T_{\psi,\psi}=T_{\varphi,\varphi}$ with $\psi,\varphi\ne0$. Evaluating both sides at $\psi$ gives $\|\psi\|^{2}\psi=\langle\psi,\psi\rangle\psi=T_{\psi,\psi}\psi=T_{\varphi,\varphi}\psi=\langle\psi,\varphi\rangle\varphi$ by [F1] and [F6]; the left side is nonzero, so $\langle\psi,\varphi\rangle\ne0$ and $\varphi=z\psi$ with $z=\|\psi\|^{2}/\langle\psi,\varphi\rangle\ne0$. Hence $\varphi$ and $\psi$ lie in the same ray, so $\|\varphi\|=|z|\,\|\psi\|$ by [F6]; moreover $T_{\varphi,\varphi}=T_{z\psi,z\psi}=|z|^{2}T_{\psi,\psi}=T_{\psi,\psi}$ by conjugate-linearity and the hypothesis, and since $T_{\psi,\psi}\ne0$ this forces $|z|^{2}=1$, hence $\|\varphi\|=\|\psi\|$. Conversely, if $\|\psi\|=\|\varphi\|$ and $[\psi]=[\varphi]$, then $\varphi=z\psi$ for some $z\ne0$, and taking norms gives $|z|=1$; then $T_{\varphi,\varphi}=T_{z\psi,z\psi}=|z|^{2}T_{\psi,\psi}=T_{\psi,\psi}$. For unit vectors this is the stated equivalence $T_{u,u}=T_{w,w}\iff w=\zeta u$, $\zeta\in U(1)$, by [F3]. [given, step 1.1, F1, F2, F3, F6, algebra]

3.1 [(b) the converse identification] Let $M$ be a one-dimensional linear subspace and let $u\in S(H)$ with $M=\mathbb Cu$. For arbitrary $x$, the defining properties of $P_M$ in [F4] give $P_Mx\in M=\mathbb Cu$, so $P_Mx=\alpha u$ for a unique scalar $\alpha$, and $x-P_Mx\in M^{\perp}$, so $\langle x-P_Mx,u\rangle=0$. Consequently $\alpha=\alpha\|u\|^{2}=\langle\alpha u,u\rangle=\langle P_Mx,u\rangle=\langle x,u\rangle$, and therefore $P_Mx=\langle x,u\rangle u=T_{u,u}x$ for every $x$. Thus the Hilbert orthogonal projections with one-dimensional range are exactly the operators $T_{u,u}$, $u\in S(H)$. [given, step 2.1, F1, F4, F6, algebra]

4.1 [(d) the ray-to-state map] If $[\psi]=[\varphi]$, then by [F3] the unit representatives satisfy $\nu(\varphi)=\zeta\nu(\psi)$ for some $\zeta\in U(1)$, whence $T_{\nu(\varphi),\nu(\varphi)}=T_{\zeta\nu(\psi),\zeta\nu(\psi)}=|\zeta|^{2}T_{\nu(\psi),\nu(\psi)}=T_{\nu(\psi),\nu(\psi)}$ by the conjugate-linearity of [F1]; thus $j$ is well defined. If $T_{\nu(\psi),\nu(\psi)}=T_{\nu(\varphi),\nu(\varphi)}$, then step 2.2 applied to the unit vectors $\nu(\psi),\nu(\varphi)$ gives $\nu(\varphi)=\zeta\nu(\psi)$ for some $\zeta\in U(1)$, so $[\varphi]=[\psi]$ by [F3]; thus $j$ is injective. Its image is $\{T_{u,u}:u\in S(H)\}$ by definition of $\nu$, and by steps 2.1 and 3.1 this set consists exactly of the one-dimensional Hilbert orthogonal projections of $H$. This completes (a)-(d). [given, step 2.1, step 3.1, step 2.2, F1, F2, F3, algebra] ∎
