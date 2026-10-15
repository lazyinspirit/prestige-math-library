---
id: def-emg-lorentzian-forms
kind: definition
title: "Oriented Lorentzian fields, observers and coordinate conventions"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-countable-choice, def-gr-local-frame-and-tetrad-fields, def-gr-metric-selected-connection, def-gr-metric-volume-form-and-current-flux, def-gr-observer-and-rest-space, def-gr-observer-congruence-and-adapted-charts, def-gr-smooth-lorentzian-objects, def-gr-timelike-worldline-and-proper-time, def-oriented-smooth-manifold-and-oriented-chart, def-smooth-differential-k-form, lem-gr-observer-projection-decomposition, thm-gr-curvature-tensoriality-and-coordinate-formula, thm-real-power-continuity-and-derivatives, thm-ck-euclidean-maps-closed-under-algebra-and-composition]
dependency_roles:
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  def-countable-choice: mathematical-premise
  def-gr-local-frame-and-tetrad-fields: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, section 2.4.2, The Electromagnetic Field, equation (2.87)"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S2.html"
      locator: "Section 2.4.2, equation (2.87): field-strength components in Minkowski coordinates arranged in the electric/magnetic convention (with Tong's stated $c=1$ convention). The coordinate, unit, and curved-observer conventions here are defined or proved locally."
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, sections 3.1.3 and 3.2.2-3.2.3, the Hodge dual and metric-selected connection"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html"
      locator: "Section 3.1.3, equations (3.97)-(3.98): oriented volume, Hodge dual and the Lorentzian star-square sign; sections 3.2.2-3.2.3: metric-compatible connection and curvature conventions."
    - title: "H. S. Reall, Part III General Relativity, Cambridge, October 12 2022 revision, sections 2.2, 3.2, 4.2, and 8.1-8.5"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "Sections 2.2, 3.2 and 4.2: Lorentzian orthonormal bases, Levi-Civita connection and curvature; sections 8.1 and 8.5: forms, volume form and Hodge dual."
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Definition

Let $(M,g,N)$ be a smooth, Hausdorff, second-countable four-manifold without boundary, with smooth Lorentzian metric $g$ of signature $(-,+,+,+)$ and smooth time-orientation field $N$, as in [[def-gr-smooth-lorentzian-objects]]. Supply an independent orientation $o$ of $M$ in the sense of [[def-oriented-smooth-manifold-and-oriented-chart]]. The metric and time orientation do not select $o$. Write $\mathrm{vol}_g$ for the oriented metric volume form of [[def-gr-metric-volume-form-and-current-flux]]; in any positively oriented chart it has components $\sqrt{|\det(g_{ab})|}\,dx^0\wedge dx^1\wedge dx^2\wedge dx^3$.

A smooth real $k$-form is a smooth section of $\bigwedge^kT^*M$, and its space is denoted $\Omega^k(M)$, as in [[def-smooth-differential-k-form]]. In this page, $F\in\Omega^2(M)$ means an arbitrary smooth real two-form. No equation such as $dF=0$, no global potential, and no physical field law is included in this definition.

An **observer at $p\in M$** is a vector $n\in T_pM$ with $g_p(n,n)=-1$ and $g_p(n,N_p)<0$; its **rest space** is $n^\perp=\{v:g_p(v,n)=0\}$, as in [[def-gr-observer-and-rest-space]]. A smooth **observer congruence** on an open set $U\subseteq M$ is a smooth vector field whose value at every point is an observer. Its observer curves are the maximal integral curves, and a chart is adapted to it when its three spatial coordinate functions are constant along those curves, as in [[def-gr-observer-congruence-and-adapted-charts]]. Such a congruence need not be hypersurface-orthogonal.

A **local frame field** on $U$ is an ordered smooth basis field of $TM|_U$. A **coordinate frame** is the basis of coordinate vector fields supplied by a chart. A **tetrad field** is a local frame $(E_0,E_1,E_2,E_3)$ with $g(E_A,E_B)=\operatorname{diag}(-1,1,1,1)_{AB}$; it is future-directed when $E_0$ is future-directed, as in [[def-gr-local-frame-and-tetrad-fields]]. These are distinct objects: an observer congruence is a vector field, an adapted chart is a coordinate chart, and a tetrad is a basis field. A tetrad field is not presumed to be a coordinate frame. For every observer congruence $n$, each point has a neighborhood carrying an $n$-adapted tetrad; this is a local assertion only.

A **worldline** on this Lorentzian manifold means a $C^1$ or piecewise-$C^1$ regular curve with future-timelike tangent and specified interval domain, as defined precisely in [[def-gr-timelike-worldline-and-proper-time]]. Its parameter is arbitrary; the proper-time and four-velocity constructions of that definition apply under their stated hypotheses. A worldline is a mathematical curve here and does not assert the existence or motion of a physical body.

For coordinate bookkeeping only, when a chart is chosen with all four coordinate values assigned the metre, write $x^0=ct$, where $t$ is assigned seconds and $c>0$ is the corresponding scale in $\mathrm m\,\mathrm s^{-1}$. Then $g_{ab}$ is recorded as dimensionless. This is a unit convention on a chart, not a claim that the chart is inertial, orthonormal, global, or physically realized; $c$ in this mathematical convention has no asserted measured value.

Use the unique torsion-free metric-compatible connection $\nabla^g$ and the curvature convention of [[def-gr-metric-selected-connection]] and [[thm-gr-curvature-tensoriality-and-coordinate-formula]]. In a length-coordinate chart, the displayed Christoffel formula differentiates dimensionless metric components once, so $\Gamma^a{}_{bc}$ is recorded in $\mathrm m^{-1}$. The curvature coordinate formula contains one derivative of $\Gamma$ or a product of two $\Gamma$ components, so $R^a{}_{bcd}$ and its Ricci and scalar contractions are recorded in $\mathrm m^{-2}$. These component assignments apply only in length-coordinate charts; other coordinate units transform by their Jacobians.

## Facts & Assumptions

**Given:** A smooth time-oriented Lorentzian four-manifold $(M,g,N)$, an independent orientation $o$, and, where specified, a smooth observer congruence $n$ on an open set.

[F1] The geometric data consist of a smooth boundaryless four-manifold, a smooth nondegenerate metric of signature $(-,+,+,+)$, and a smooth timelike field $N$ selecting future direction. The time orientation does not supply a manifold orientation. ([[def-gr-smooth-lorentzian-objects]], [[def-oriented-smooth-manifold-and-oriented-chart]])

[F2] A pointwise observer is future unit timelike; its rest space is $n^\perp$. The orthogonal projection $h_n(v)=v+g(n,v)n$ has image $n^\perp$, and this three-dimensional subspace has positive-definite restricted metric. ([[def-gr-observer-and-rest-space]], [[lem-gr-observer-projection-decomposition]])

[F3] A smooth observer congruence is a smooth future unit timelike field; its maximal integral curves and adapted charts have the domains and spatial-coordinate condition stated in [[def-gr-observer-congruence-and-adapted-charts]]. A tetrad field and coordinate frame have the distinct meanings stated in [[def-gr-local-frame-and-tetrad-fields]].

[F4] The metric-selected connection is torsion-free and metric-compatible, with $\Gamma^a{}_{bc}=\frac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$. The curvature convention is $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$, $R(\partial_c,\partial_d)\partial_b=R^a{}_{bcd}\partial_a$, and ([[def-gr-metric-selected-connection]], [[thm-gr-curvature-tensoriality-and-coordinate-formula]])

$$R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\sum_e(\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb}).$$

The Ricci and scalar contractions are $\operatorname{Ric}_{bd}=\sum_aR^a{}_{bad}$ and $S=\sum_{b,d}g^{bd}\operatorname{Ric}_{bd}$.

[F5] For each $m\ge 0$, repeated differentiation of $x^{1/2}$ gives $D^m(x^{1/2})=\bigl(\prod_{j=0}^{m-1}(\frac12-j)\bigr)x^{1/2-m}$ on $(0,\infty)$; each derivative is continuous there, so $x\mapsto\sqrt{x}$ is smooth. For $m=0$ the product is empty and equals $1$; differentiating the formula at order $m$ by [[thm-real-power-continuity-and-derivatives]] multiplies its coefficient by $\frac12-m$, proving the next order by finite induction. The same induction with $\frac12$ replaced by any fixed real exponent $\alpha$ makes $x^\alpha$ smooth on $(0,\infty)$; in particular $\alpha=-\frac12$ covers reciprocal square-root normalizers. For each finite $k$, [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]] gives closure of $C^k$ maps under finite componentwise sums, products and composition on open Euclidean domains. Applying this for every finite $k$ shows that composing the square root with a smooth positive function preserves smoothness, as used to normalize a smooth timelike field.

[A1] The smooth tangent-bundle structure used by the existing Lorentzian and observer definitions is recorded under the Axiom of Countable Choice $\mathrm{AC}_\omega$. Its exact statement is that each countable family of nonempty sets has a choice function. No full Axiom of Choice is used by the finite local construction below. ([[def-countable-choice]])

## Proof

1.1 The normalization $n:=N/\sqrt{-g(N,N)}$ is smooth because $-g(N,N)$ is a smooth positive function and [F5] makes its positive square root smooth. Bilinearity gives $g(n,n)=-1$ and $g(n,N)=-\sqrt{-g(N,N)}<0$, so [F2] makes $n$ an observer at every point and hence a smooth observer congruence. This supplies an observer field without identifying it with a chart or tetrad. [F1, F2, F5, algebra]

1.2 Fix $p\in U$ and a connected chart around $p$. The four coordinate vectors form a basis at $p$. By [F2], the linear map $h_{n_p}$ has image the three-dimensional space $n_p^\perp$, so three projected coordinate vectors form a basis of $n_p^\perp$. Extend the chosen coordinate fields over the chart and project them by $h_n$; after shrinking the chart, their projections remain independent by continuity. They lie in the positive-definite rest spaces by [F2]. Apply the three finite Gram-Schmidt operations in these rest spaces; every denominator is the positive square root of a positive smooth squared norm, so [F5] makes the resulting fields smooth. Together with $E_0=n$, the three fields form a local tetrad. If needed, reverse one spatial member so the tetrad has the supplied orientation from [F1]; the sign remains fixed on the connected chart. This is a local tetrad field as in [F3], not a coordinate frame or an assertion of an adapted coordinate chart. Thus an $n$-adapted tetrad exists locally, with no global tetrad or hypersurface-orthogonality conclusion. [F1, F2, F3, F5, A1, construct, algebra]

2.1 In a length-coordinate chart, each first coordinate derivative of $g_{ab}$ has dimension $\mathrm m^{-1}$, so the Christoffel formula in [F4] has dimension $\mathrm m^{-1}$. Each term in the curvature formula in [F4] has dimension $\mathrm m^{-2}$; contraction with dimensionless $g^{ab}$ preserves that dimension for Ricci and scalar curvature. This is coordinate-unit bookkeeping, not a physical field equation. [F4, algebra] ∎
