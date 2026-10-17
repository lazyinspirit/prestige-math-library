---
id: def-emg-causal-solution-and-horizon-vocabulary
kind: definition
title: "Causal solutions, Killing horizons, escape and metric extensions"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
proof_strategy: direct
deps:
  - def-gr-causal-curves-and-reachability
  - def-gr-causal-conditions-and-global-hyperbolicity
  - def-gr-spacelike-hypersurfaces-and-cauchy-sets
  - def-gr-killing-field
  - thm-gr-killing-and-on-shell-matter-identities
  - def-emg-lorentzian-forms
  - def-riemannian-volume-density
  - lem-the-riemannian-volume-density-is-coordinate-independent
  - def-riemannian-volume-of-a-compactly-supported-smooth-density
  - thm-density-integration-is-defined-without-an-orientation
  - def-extended-reals
  - lem-extended-reals-complete
  - def-countable-choice
dependency_roles:
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-killing-field: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
  def-riemannian-volume-density: mathematical-premise
  lem-the-riemannian-volume-density-is-coordinate-independent: mathematical-premise
  def-riemannian-volume-of-a-compactly-supported-smooth-density: mathematical-premise
  thm-density-integration-is-defined-without-an-orientation: mathematical-premise
  def-extended-reals: mathematical-premise
  lem-extended-reals-complete: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity, Cambridge lecture notes, October 12 2022 revision"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "Section 5.3 defines Killing fields by the vanishing Lie derivative of the metric. The causal, horizon, escape, area and extension definitions used here are stated locally and their required well-definedness arguments are supplied below and by the exact listed mathematical prerequisites."
verification:
  precheck: pending
dependency_level: 0
---

## Definition

Let $(M,g,N)$ be a smooth Hausdorff second-countable boundaryless four-manifold with smooth Lorentz metric of signature $(-,+,+,+)$ and smooth time orientation. All definitions below are mathematical. A solution of a specified covariant field system is a tuple of fields of the regularity stated by that system satisfying its equations on its stated domain; this terminology alone supplies neither existence nor a global electromagnetic potential.

**(a) Global causal and Cauchy conventions.** Use exactly [[def-gr-causal-curves-and-reachability]]: a future causal curve is locally absolutely continuous in coordinate charts, has nonzero future causal derivative almost everywhere, and has no constant subinterval. Inextendibility and causal reachability $J^\pm$ have that item's endpoint-extension meanings. A Cauchy set meets every inextendible causal curve at exactly one parameter value: its inverse image under each such curve is a singleton, as in [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]. A spacelike hypersurface is a smooth embedded codimension-one submanifold with positive-definite induced metric; this local condition does not assert the global Cauchy property. Strong causality has the small-neighborhood no-leaving-and-reentering meaning of [[def-gr-causal-conditions-and-global-hyperbolicity]]. Global hyperbolicity means strong causality and compactness of every $J^+(p)\cap J^-(q)$, exactly as there; no equivalence theorem is added here.

**(b) Null and Killing horizons.** A smooth embedded hypersurface $H\subset M$ is **null** when $g|_{TH}$ is degenerate. Equivalently, for any local defining function $f$ with $H=\{f=0\}$ and $df\ne0$ on $H$, $g^{-1}(df,df)=0$ on $H$. A specified smooth vector field $\xi$ is **Killing** when $\mathcal L_\xi g=0$, equivalently $\nabla_{(a}\xi_{b)}=0$, using [[def-gr-killing-field]] and [[thm-gr-killing-and-on-shell-matter-identities]]. A **Killing horizon for $\xi$** is a null hypersurface whose nonzero-generator part $H_*:=\{p\in H:\xi_p\ne0\}$ is nonempty and dense in $H$, and on that part the specified field is tangent, null and normal: $\xi_p\in T_pH$ and $g(\xi_p,X)=0$ for every $X\in T_pH$. A generator parameter or asymptotic normalization, when required, must be specified separately.

On $H_*$ the **signed surface gravity** for this precise $\xi$ is the unique smooth scalar $\kappa_H$ such that

$$d\bigl(g(\xi,\xi)\bigr)_p=-2\kappa_H(p)\,\xi^\flat_p\quad(p\in H_*).$$

This is an equality of ambient covectors at points of $H$, not merely of their pullbacks to $TH$. No constancy or positivity is asserted. Under a nonzero constant rescaling $\xi'=a\xi$, $\kappa'_H=a\kappa_H$. A **bifurcation surface** is a specified smooth spacelike two-surface $B$ where the extended Killing field vanishes and the specified horizon branches meet (or have $B$ as their common boundary). Surface gravity at such a surface means a smooth extension of the scalar from the adjacent nonzero-generator portions, with each point in their closure, only if that extension exists; the defining equation at $\xi=0$ alone determines no value. Neither a bifurcation surface nor such an extension is asserted to exist.

**(c) Sections, area and ergoregions.** A **horizon section** is a specified smooth spacelike embedded two-surface $S$ in the horizon, with positive induced metric $h$. Its area density is $\mu_h=\sqrt{\det(h_{ij})}\,|dy^1dy^2|$ of [[def-riemannian-volume-density]]. Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for intrinsic density integration, as in [[def-riemannian-volume-of-a-compactly-supported-smooth-density]]. Its possibly infinite area is the nonnegative extended value

$$\operatorname{Area}_g(S):=\sup\left\{\int_S\chi\mu_h:\chi\in C_c^\infty(S),\ 0\le\chi\le1\right\}\in[0,+\infty],$$

with the extended order of [[def-extended-reals]]. On compact $S$ this is $\int_S\mu_h$; orientation is unnecessary. The density glues by [[lem-the-riemannian-volume-density-is-coordinate-independent]]. A stationary field here is a specified Killing field timelike on a specified nonempty open region; no normalization is inferred from this adjective. Its **ergoregion** in the chosen model is $\{g(\xi,\xi)>0\}$, its **stationary-limit set** is $\{g(\xi,\xi)=0\}$, and its **ergosurface** is the relative boundary of its ergoregion. Every ergosurface point lies in the stationary-limit set; the converse requires a separate sign-change argument. Nullness, Killing-horizon status and escape-boundary status are separate claims; a coordinate root alone proves none of them.

**(d) Selected-model escape.** Fix a specified open spacetime model $U\subseteq M$ and specified smooth radius observable $r:U\to\mathbb R$. An admissible escape path is a continuous $\gamma:[0,T)\to U$, $0<T\le+\infty$, with $\gamma(0)=p$, such that every compact parameter segment has a finite subdivision on whose pieces the coordinate curve is $C^1$, with nonzero future causal tangent (one-sided at piece endpoints). Define

$$\mathcal E_{U,r}:=\left\{p\in U:\exists\gamma\text{ admissible from }p\ \forall R>0\ \exists t\in[0,T):r(\gamma(t))>R\right\}.$$

The **selected escape boundary** is $\partial_U\mathcal E_{U,r}$. This explicitly selected piecewise-$C^1$ path class is contained in the global causal-curve class of (a); it does not replace that class in Cauchy definitions. No geodesic restriction, conformal completion, event-horizon identification or maximal extension is implicit in this definition.

**(e) Approached metric extensions and curvature obstructions.** A $C^2$ nondegenerate metric extension of an open model $(U,g)$ consists of a smooth Hausdorff second-countable four-manifold $\widetilde M$, a $C^2$ Lorentz metric $\widetilde g$ of the same signature, and a smooth open embedding $j:U\to\widetilde M$ with $j^*\widetilde g=g$. An **approached added point** is $p\in\widetilde M\setminus j(U)$ with $j(x_n)\to p$ for a specified sequence $x_n\in U$ (or the corresponding limit of a specified curve). An **extension obstruction at that approach** means no such extension and added point can realize the stated approach. In particular, unbounded absolute values of a polynomial complete contraction of the curvature tensor and metric inverse along $x_n$ obstruct such an approached $C^2$ nondegenerate extension. This criterion concerns curvature without its covariant derivatives. A smooth metric extension is the same definition with smooth $\widetilde g$. These notions alone assert neither a distributional matter source nor geodesic incompleteness.

**(f) Observers and spatial fields.** Observers, smooth observer congruences and their integral curves, adapted charts and tetrads retain the distinct meanings of [[def-emg-lorentzian-forms]]. Relative to a future unit observer $n$, an electric or magnetic spatial covector is identified with a spatial vector only by raising with the positive rest metric $h=g+n^\flat\otimes n^\flat$ on $n^\perp$. Such spatial vectors $e,b$ are not tetrad basis vectors. No singular-source product or action is defined by this vocabulary.

## Facts & Assumptions

**Given:** The smooth time-oriented Lorentzian data and specified hypersurfaces, fields, sections, model and radius in the Definition; $\mathrm{AC}_\omega$ for the density integrals in (c).

[F1] [[def-gr-causal-curves-and-reachability]], [[def-gr-causal-conditions-and-global-hyperbolicity]] and [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] fix the global curve, causal, Cauchy and spacelike conventions reused in (a).

[F2] [[def-gr-killing-field]] and [[thm-gr-killing-and-on-shell-matter-identities]] give the Killing definition and its metric-connection equivalence.

[F3] [[def-riemannian-volume-density]] defines $\mu_h=\sqrt{\det(h_{ij})}\,|dy^1dy^2|$ in coordinates; [[lem-the-riemannian-volume-density-is-coordinate-independent]] proves the coordinate change law; [[def-riemannian-volume-of-a-compactly-supported-smooth-density]] defines its intrinsic compact-support integral under $\mathrm{AC}_\omega$.

[F4] [[def-emg-lorentzian-forms]] fixes smooth metric connection and curvature, the observer rest metric, and the distinct congruence, chart and frame objects.

[F5] [[thm-density-integration-is-defined-without-an-orientation]] states that compactly supported smooth density integration is linear and nonnegative on nonnegative densities. In particular, $0\le\chi\le1$ implies $\int_S\chi\mu_h\ge0$; when $S$ is compact, both $\chi\mu_h$ and $(1-\chi)\mu_h$ have compact support and $\int_S(1-\chi)\mu_h\ge0$.

[F6] [[lem-extended-reals-complete]] states that every subset of $\overline{\mathbb R}$ has a least upper bound in that ordered set, including subsets of $[0,+\infty]$. For a nonempty real subset bounded above, this supremum agrees with the real least upper bound; an unbounded real subset has supremum $+\infty$.

## Proof

1.1 Clause (a) reuses the exact global definitions in [F1]. For the smaller class in (d), on each compact parameter segment a finite $C^1$ partition has bounded coordinate derivatives on its compact pieces. Thus the coordinates are absolutely continuous there. On chart overlaps the ordinary chain rule carries the tangent by the transition Jacobian, preserving its nonzero future causal property; refinements of finite partitions preserve the class. The finitely many joining parameters on each compact segment have measure zero. Consequently the selected paths satisfy the global almost-everywhere causal convention, while retaining the stronger piecewise regularity required by this particular observable. The quantifiers in (d) define a subset of the specified $U$, whose relative topological boundary is unique even when the escape set is empty or all of $U$. [F1, given, algebra]

1.2 At a hypersurface point put $w=g^{-1}(df,\cdot)$. Nondegeneracy gives $w\ne0$ and $T_pH=w^\perp$. The radical of $g|_{T_pH}$ is $T_pH\cap(T_pH)^\perp=w^\perp\cap\operatorname{span}(w)$, so it is nonzero exactly when $g(w,w)=g^{-1}(df,df)=0$. Replacing the defining function replaces $df$ on $H$ by a nonzero scalar multiple and leaves this criterion unchanged. The Killing equivalence is precisely [F2]; no field equation is used. [F2, F4, given, algebra]

1.3 The spacelike condition makes $h$ positive definite. Under a section coordinate change with Jacobian $J$, $h'=J^ThJ$, so $\sqrt{\det h'}=|\det J|\sqrt{\det h}$. Thus [F3] makes every test integral in (c) intrinsic and finite. The test family contains the zero function, whose integral is zero, and every test density $\chi\mu_h$ is nonnegative, so every integral is nonnegative by [F5]. Its set of values is a subset of $\overline{\mathbb R}$ and therefore has an extended-real supremum by [F6]. On compact $S$, the constant test $1$ is allowed. For every other test, linearity and nonnegativity in [F5] give $\int_S\mu_h-\int_S\chi\mu_h=\int_S(1-\chi)\mu_h\ge0$; hence the supremum equals $\int_S\mu_h$. The same definition gives zero on the empty section without choosing an orientation. The norm of the specified stationary field is a smooth scalar, so the positive-norm set is open; continuity excludes positive and negative norm at its boundary, proving that boundary lies in its zero set. No converse is inferred. [F3, F4, F5, F6, given, algebra]

1.4 In a chart at an approached point the $C^2$ coefficients of $\widetilde g$ and their derivatives through order two are continuous. Nondegeneracy makes the inverse coefficients continuous by the cofactor-over-determinant formula and continuously differentiable as needed for the Christoffel expression. The curvature formula therefore has continuous coefficients, as does every specified polynomial complete contraction with inverse metrics. Such a scalar has a finite value at the point and converges to it along $j(x_n)$. On the embedded open image these scalars equal those of $g$, since the isometric embedding identifies the metric, connection and curvature. Their absolute values cannot be unbounded along that convergent sequence. This proves precisely the stated obstruction; it makes no assertion about distributional equations or parametrized geodesics. [F4, given, algebra]

2.1 On $H_*$, $g(\xi,\xi)$ vanishes, so its differential annihilates $TH$. The nonzero covector $\xi^\flat$ also annihilates $TH$, which has codimension one; hence the differential is a unique scalar multiple of $\xi^\flat$. Locally choose a smooth transverse field $Z$ with $\xi^\flat(Z)\ne0$. Then $\kappa_H=-d(g(\xi,\xi))(Z)/(2\xi^\flat(Z))$ is smooth and independent of $Z$, proving existence, uniqueness and patching. Constant scaling multiplies the left side by $a^2$ and the covector by $a$, giving $a\kappa_H$. The required nonempty dense $H_*$ excludes the identically zero Killing field and any open portion with zero generator, while allowing bifurcation zeros in its closure. At zeros of $\xi$ this division is unavailable. If a smooth extension from an adjacent nonzero portion exists, its values at closure points are uniquely fixed by continuity; no existence or zeroth-law claim follows. [F2, F4, step 1.2, algebra]

3.1 The positive rest metric and projection supplied by [F4] uniquely identify each spatial covector with a spatial vector. Integral curves are maps into the spacetime, a chart is a coordinate map, and a tetrad is a basis field; identifying spatial component lists with one of those objects is not licensed. All clauses therefore define intrinsic objects with their stated inputs and qualifications, without imposing a potential or changing a field equation. [F4, given, algebra] ∎
