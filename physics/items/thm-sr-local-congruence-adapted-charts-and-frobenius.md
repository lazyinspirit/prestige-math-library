---
id: thm-sr-local-congruence-adapted-charts-and-frobenius
kind: theorem
domain: mathematics
title: "Local flow boxes, adapted charts and the Frobenius criterion for rest distributions"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-flow-box-theorem, cor-codimension-one-frobenius-criterion, def-sr-affine-minkowski-model, lem-affine-minkowski-charts-form-a-smooth-atlas, def-sr-chart-tetrad-and-congruence-distinction, def-flat-covariant-derivative-on-affine-minkowski-space, def-sr-observer-congruence-and-kinematics, def-ck-tensor-field-on-minkowski-space, def-exterior-derivative-by-the-invariant-vector-field-formula, def-wedge-product-of-differential-forms, def-closed-and-exact-differential-forms, thm-sr-proper-time-and-observer-decomposition, def-lie-bracket-of-smooth-vector-fields, prop-coordinate-formula-for-the-lie-bracket, def-lorentz-orthogonality-and-orthogonal-complement]
dependency_roles:
  thm-flow-box-theorem: mathematical-premise
  cor-codimension-one-frobenius-criterion: mathematical-premise
  def-sr-chart-tetrad-and-congruence-distinction: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  lem-affine-minkowski-charts-form-a-smooth-atlas: mathematical-premise
  def-flat-covariant-derivative-on-affine-minkowski-space: mathematical-premise
  def-sr-observer-congruence-and-kinematics: mathematical-premise
  def-ck-tensor-field-on-minkowski-space: mathematical-premise
  def-exterior-derivative-by-the-invariant-vector-field-formula: mathematical-premise
  def-wedge-product-of-differential-forms: mathematical-premise
  def-closed-and-exact-differential-forms: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-lie-bracket-of-smooth-vector-fields: mathematical-premise
  prop-coordinate-formula-for-the-lie-bracket: mathematical-premise
  def-lorentz-orthogonality-and-orthogonal-complement: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "D. Giulini, Algebraic and geometric structures of Special Relativity, arXiv:math-ph/0602018: Section 5.5 pp. 41-49 (Definition 7 and equation (123) of Born rigidity, equations (125)-(126), Proposition 14, Lemma 16, Theorem 15 part 1, Lemmas 17-18, Theorem 19 part 2); signature (+---) converted to (-+++)"
      url: "https://arxiv.org/pdf/math-ph/0602018"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision): Sections 2.2-2.3 pp. 27-30 (Minkowski metric, causal classification, timelike proper time, observer measurements in an inertial chart, radar coordinates); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Statement

Let $\Omega$ be a nonempty open subset of $A$ ([[def-sr-affine-minkowski-model]]).

**(i) Flow box.** If $X$ is a smooth vector field on $\Omega$ ([[def-ck-tensor-field-on-minkowski-space]]) and $X(p)\ne0$ at a point $p\in\Omega$, then there is an open neighbourhood $U$ of $p$ in $\Omega$ and a chart $(u^0,u^1,u^2,u^3):U\to\mathbb R^4$ in which $X=\partial/\partial u^0$; the integral curves of $X$ in $U$ are therefore the $u^0$-coordinate lines up to reparametrization. In particular every observer congruence $n$ on $\Omega$ ([[def-sr-chart-tetrad-and-congruence-distinction]]) admits a local $n$-adapted chart, and in such a chart $n=\partial/\partial u^0$.

**(ii) Frobenius criterion.** For a smooth nowhere-zero one-form $\alpha$ on $\Omega$ ([[def-closed-and-exact-differential-forms]]) let $D:=\ker\alpha$ be the hyperplane distribution $D_p=\{v\in V:\alpha_p(v)=0\}$. Then $D$ is integrable on $\Omega$ (through every point there passes a local hypersurface whose tangent space at each of its points is the corresponding $D_p$) if and only if $\alpha\wedge d\alpha=0$ on $\Omega$ ([[def-wedge-product-of-differential-forms]]).

**(iii) Rest distributions of observer congruences.** Let $n$ be an observer congruence on $\Omega$ ([[def-sr-chart-tetrad-and-congruence-distinction]]), let $\alpha:=n^\flat$, and let $\theta,\omega$ be its expansion and vorticity ([[def-sr-observer-congruence-and-kinematics]]). Then:

(a) $d\alpha=2\nabla_{[a}n_{b]}$, that is, $d\alpha(X,Y)=(\nabla_Xn^\flat)(Y)-(\nabla_Yn^\flat)(X)$ for smooth vector fields $X,Y$;

(b) for every $p$ and all $X,Y$ with $\alpha(X)=\alpha(Y)=0$ one has $d\alpha(X,Y)=2\omega(X,Y)$; consequently $(\alpha\wedge d\alpha)(p)=0$ if and only if $\omega(p)=0$, and on an open set $U\subseteq\Omega$ the following are equivalent: $\alpha\wedge d\alpha=0$ on $U$, $\omega=0$ on $U$, and the rest distribution $\ker\alpha$ is integrable on $U$;

(c) when the rest distribution is integrable on $U$, its integral hypersurfaces are orthogonal to $n$ at every point and the restriction of $\eta$ to each of them is positive definite, so they are rest slices of the congruence.

**(iv) Scope.** All statements are local on $\Omega$; no global foliation, global synchronization, completeness or product structure is asserted, and no claim is made about variable-rank or non-smooth distributions.

## Facts & Assumptions

**Given:** A nonempty open subset $\Omega$ of the affine Minkowski space $A$, the smooth structure of the inertial atlas, a smooth vector field $X$ on $\Omega$, a smooth nowhere-zero one-form $\alpha$ on $\Omega$, an observer congruence $n$ on $\Omega$ with $\alpha=n^\flat$, $n_b=\eta_{bc}n^c$, and its kinematic fields $\theta,\omega$ ([[def-sr-chart-tetrad-and-congruence-distinction]], [[def-ck-tensor-field-on-minkowski-space]], [[def-sr-observer-congruence-and-kinematics]]).

[F1] Flow box: if $X$ is a smooth vector field on a smooth manifold $M$ and $X_p\ne0$, then there are local coordinates $(u^1,\dots,u^n)$ near $p$ in which $X=\partial/\partial u^1$ ([[thm-flow-box-theorem]]).

[F2] Codimension-one Frobenius: for a nowhere-zero one-form $\alpha$ on a smooth manifold, the hyperplane distribution $\ker\alpha$ is integrable if and only if $\alpha\wedge d\alpha=0$ ([[cor-codimension-one-frobenius-criterion]], [[def-wedge-product-of-differential-forms]]).

[F3] The flat covariant derivative is torsion-free, $\nabla_XY-\nabla_YX=[X,Y]$, is metric compatible, acts on functions as the directional derivative and satisfies the product rule; in inertial components $\nabla_a=\partial_a$ on components and $[X,Y]^a=X^b\partial_bY^a-Y^b\partial_bX^a$ ([[def-flat-covariant-derivative-on-affine-minkowski-space]], [[def-lie-bracket-of-smooth-vector-fields]], [[prop-coordinate-formula-for-the-lie-bracket]]).

[F4] For a smooth one-form $\alpha$ and smooth vector fields $X,Y$, $d\alpha(X,Y)=X(\alpha(Y))-Y(\alpha(X))-\alpha([X,Y])$, and $d\alpha$ is a smooth two-form with components $d\alpha_{ab}=\partial_a\alpha_b-\partial_b\alpha_a$ in any inertial chart ([[def-exterior-derivative-by-the-invariant-vector-field-formula]], [[def-closed-and-exact-differential-forms]]).

[F5] Kinematics of the congruence: $\nabla_an_b=-n_aa_b+\theta_{ab}+\omega_{ab}$ with $\theta$ symmetric, $\omega$ antisymmetric, both horizontal, and $a_b=\nabla_nn_b$ ([[def-sr-observer-congruence-and-kinematics]]).

[F6] $n(p)^\perp=\{v:\eta(n(p),v)=0\}$ is three-dimensional, the restriction of $\eta$ to it is positive definite, the projection is $h(v)=v+\eta(n,v)n$, and $\alpha(v)=\eta(n,v)$ vanishes exactly on $n(p)^\perp$; $n$ is nowhere zero because $\eta(n,n)=-1$ ([[thm-sr-proper-time-and-observer-decomposition]], [[def-lorentz-orthogonality-and-orthogonal-complement]]).

## Proof

**Proof technique:** direct.

1.1 Flow box and adapted charts: the flat model with its inertial atlas is a smooth 4-manifold ([[lem-affine-minkowski-charts-form-a-smooth-atlas]]) and $X$ is a smooth vector field on the open set $\Omega$, so [F1] applied on this manifold gives coordinates $(u^0,u^1,u^2,u^3)$ on an open neighbourhood $U$ of $p$ with $X=\partial/\partial u^0$. In such a chart the coordinate representation of a curve $\gamma$ in $U$ satisfies $\gamma'=X\circ\gamma$ if and only if $(u^a\circ\gamma)'=\delta^a_0$ for every $a$, i.e. if and only if $u^1,u^2,u^3$ are constant and $u^0\circ\gamma$ is affine; hence the integral curves of $X$ in $U$ are exactly the $u^0$-coordinate lines, up to reparametrization. If $n$ is an observer congruence, then $n$ is nowhere zero by [F6], so applying the flow box to $X=n$ produces a chart with $n=\partial/\partial u^0$ in which $u^1,u^2,u^3$ are constant along every integral curve of $n$ contained in $U$; this is precisely an $n$-adapted chart in the sense of [[def-sr-chart-tetrad-and-congruence-distinction]] clause (d). [F1, F6]

1.2 Frobenius criterion: the one-form $\alpha$ is smooth by hypothesis and nowhere zero, and $\ker\alpha$ is a hyperplane distribution by definition; [F2] gives immediately that $\ker\alpha$ is integrable on $\Omega$ if and only if $\alpha\wedge d\alpha=0$ on $\Omega$. [F2]

1.3 The exterior derivative of the metric dual (iii)(a): let $X,Y$ be smooth vector fields on $\Omega$. By [F4], $d\alpha(X,Y)=X(\alpha(Y))-Y(\alpha(X))-\alpha([X,Y])$; here $\alpha(Y)=n_bY^b$ and $\alpha(X)=n_bX^b$, and with [F3] the product rule gives $X(n_bY^b)=(\nabla_Xn_b)Y^b+n_b\nabla_XY^b$ and $Y(n_bX^b)=(\nabla_Yn_b)X^b+n_b\nabla_YX^b$, while torsion-freeness gives $\alpha([X,Y])=n_b(\nabla_XY^b-\nabla_YX^b)$. Substituting, the terms $n_b\nabla_XY^b$ and $n_b\nabla_YX^b$ cancel and $d\alpha(X,Y)=(\nabla_Xn_b)Y^b-(\nabla_Yn_b)X^b=(\nabla_an_b-\nabla_bn_a)X^aY^b$; since $\nabla n$ is a tensor, this is the component identity $d\alpha_{ab}=\nabla_an_b-\nabla_bn_a=2\nabla_{[a}n_{b]}$. [F3, F4]

2.1 The horizontal form of $d\alpha$ (iii)(b), first part: let $X,Y$ satisfy $\alpha(X)=\alpha(Y)=0$ at every point, so that $X,Y$ take values in the pointwise rest spaces by [F6]. By step 1.3, $d\alpha(X,Y)=2\nabla_{[a}n_{b]}X^aY^b$, and by [F5] $\nabla_an_b=-n_aa_b+\theta_{ab}+\omega_{ab}$; substituting the decomposition, the acceleration terms contribute $(-n_aa_b+n_ba_a)X^aY^b=-\alpha(X)a^\flat(Y)+\alpha(Y)a^\flat(X)=0$, because $\alpha(X)=\alpha(Y)=0$; the $\theta$ contribution is $(\theta_{ab}-\theta_{ba})X^aY^b=0$ because $\theta$ is symmetric; and the $\omega$ contribution is $(\omega_{ab}-\omega_{ba})X^aY^b=2\omega_{ab}X^aY^b$ because $\omega$ is antisymmetric. Hence $d\alpha(X,Y)=2\omega(X,Y)$ for horizontal $X,Y$. [F5, F6, step 1.3]

3.1 The wedge condition (iii)(b), equivalence: let $p\in\Omega$ and let $(v_0,v_1,v_2,v_3)$ be a basis of $V$ with $v_0:=n(p)$ and $v_1,v_2,v_3\in n(p)^\perp$. At $p$ one has $\alpha(v_0)=\eta(n,n)=-1$ and $\alpha(v_i)=0$ for $i\ge1$ by [F6]; every $u\in V$ decomposes as $u=-\alpha(u)n(p)+h(u)$ with $h(u)\in n(p)^\perp$ by [F6]. Since $\alpha\wedge d\alpha$ is a three-form, it is determined by its values on basis triples: $(\alpha\wedge d\alpha)(v_0,v_i,v_j)=-d\alpha(v_i,v_j)=-2\omega(v_i,v_j)$ by alternation and step 2.1, $(\alpha\wedge d\alpha)(v_i,v_j,v_k)=0$ because all three arguments are horizontal and $\alpha$ vanishes on them, and every triple with a repeated argument vanishes by alternation. Hence $\alpha\wedge d\alpha$ vanishes at $p$ if and only if $\omega(v_i,v_j)=0$ for all $i,j\ge1$, which by horizontality of $\omega$ is equivalent to $\omega(p)=0$. Passing to the open set $U\subseteq\Omega$: $\alpha\wedge d\alpha=0$ on $U$ if and only if $\omega=0$ on $U$ by the pointwise statement, and $\omega=0$ on $U$ if and only if $\ker\alpha$ is integrable on $U$ by steps 2.1 and 1.2, since $\ker\alpha$ is integrable exactly when $\alpha\wedge d\alpha=0$ there. [F2, F6, step 1.2, step 2.1]

4.1 Integral hypersurfaces are rest slices (iii)(c): suppose $\ker\alpha$ is integrable on $U$ and let $S\subseteq U$ be an integral hypersurface, so that $T_qS=\ker\alpha_q=\{v:\alpha_q(v)=0\}$ for every $q\in S$. Since $\alpha_q(v)=\eta(n(q),v)$, we have $T_qS=n(q)^\perp$ by [F6]; hence $n(q)$ is $\eta$-orthogonal to $T_qS$, and the restriction of $\eta$ to $T_qS=n(q)^\perp$ is positive definite by [F6]. Thus each integral hypersurface is a rest slice in the tangent-space sense; it need not equal an affine pointwise hyperplane. No global foliation is asserted. [F6, step 3.1]

5.1 Conclusion: step 1.1 proves (i), including the existence of local adapted charts for an observer congruence with $n=\partial/\partial u^0$; step 1.2 proves (ii) as a direct application of the codimension-one Frobenius criterion; step 1.3 proves (iii)(a); steps 2.1 and 3.1 prove the horizontal identity $d\alpha(X,Y)=2\omega(X,Y)$ and the equivalence of $\alpha\wedge d\alpha=0$, $\omega=0$ and integrability of the rest distribution on an open set; step 4.1 proves (iii)(c); and the scope clause (iv) is respected throughout, since every statement is local on $\Omega$ and none of the arguments uses a global foliation, completeness, or a variable-rank or non-smooth distribution. [step 1.1, step 1.2, step 1.3, step 2.1, step 3.1, step 4.1] ∎
