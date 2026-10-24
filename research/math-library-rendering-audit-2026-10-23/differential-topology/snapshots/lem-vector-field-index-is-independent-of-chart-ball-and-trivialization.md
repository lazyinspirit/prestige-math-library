---
id: lem-vector-field-index-is-independent-of-chart-ball-and-trivialization
kind: lemma
title: "The local index is independent of chart, ball and trivialization"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-isolated-zero-and-local-index-of-a-vector-field, def-reduced-degree-into-the-zero-sphere, lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative, def-degree-of-a-map-between-oriented-closed-manifolds, prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism, prop-degree-is-multiplicative-under-composition, thm-degree-is-invariant-under-proper-smooth-homotopy, thm-chain-rule-for-differentials-of-smooth-maps, cor-the-differential-of-a-diffeomorphism-is-an-isomorphism, def-countable-choice]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "John W. Milnor, Topology from the Differentiable Viewpoint (complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "§6, printed pp. 33-35 (Lemmas 1-2: the index is independent of the chart and of the small sphere)"
    - title: "Joel W. Robbin and Dietmar A. Salamon, Introduction to Differential Topology (web draft 2018, complete PDF)"
      url: "https://umutvg.github.io/difftop.pdf"
      locator: "Definition 2.2.2 and Lemma 2.2.3 discussion, printed pp. 31-32 (well-definedness of the index)"
dependency_level: 2
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the canonical smooth tangent-bundle structure.

Let $M$ be a smooth $n$-manifold without boundary, $n\ge1$, let $X$ have an
isolated zero $p$, and let $\varphi,\psi$ be smooth charts of the given smooth structure centered at $p$, with
admissible radii $\varepsilon,\delta$ as in
[[def-isolated-zero-and-local-index-of-a-vector-field]]. Then the maps
$$f_\varphi(v)=\frac{X_\varphi(\varepsilon v)}{|X_\varphi(\varepsilon v)|},\qquad f_\psi(v)=\frac{X_\psi(\delta v)}{|X_\psi(\delta v)|}$$
have the same degree, using reduced degree when $n=1$. Thus the local index
is independent of chart and radius. On a coordinate ball it is also
unchanged by a smooth fibre trivialization preserving the coordinate
orientation. Equivalently, base and fibre orientations must be chosen
consistently; reversing only the fibre orientation reverses the degree.
No orientation of $M$ is required.

## Facts & Assumptions

**Given:** A smooth vector field $X$ on the smooth $n$-manifold $M$ with an isolated zero $p$, smooth charts $(\varphi,U)$, $(\psi,V)$ centered at $p$, and admissible radii $\varepsilon,\delta>0$.

[F1] The chart representatives are related by the chain rule: with
$\theta:=\psi\circ\varphi^{-1}$ defined near $0$ and $u=\varphi(x)$,
$$X_\psi(\theta(u))=d\theta_u\bigl(X_\varphi(u)\bigr)$$
for $u$ near $0$ ([[thm-chain-rule-for-differentials-of-smooth-maps]],
[[def-isolated-zero-and-local-index-of-a-vector-field]]). In particular
$A:=d\theta_0$ is an isomorphism with $\det A\ne0$
([[cor-the-differential-of-a-diffeomorphism-is-an-isomorphism]]), and
$\theta(u)=Au+O(|u|^2)$, $\theta^{-1}(w)=A^{-1}w+O(|w|^2)$,
$d\theta_u=A+O(|u|)$ for $u\to0$.

[F2] Degree facts for the normalized sphere maps of $n\ge2$: homotopic smooth maps $S^{n-1}\to S^{n-1}$ have the same degree ([[thm-degree-is-invariant-under-proper-smooth-homotopy]]), and $\deg(G\circ F)=\deg(G)\deg(F)$ for such maps ([[prop-degree-is-multiplicative-under-composition]], [[def-degree-of-a-map-between-oriented-closed-manifolds]]). A diffeomorphism of $S^{n-1}$ has degree $+1$ or $-1$ according as it preserves or reverses the orientation ([[prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism]]).

[F3] For $n=1$ reduced degrees are used: the balanced source $S^0$ gives $\deg(f)=\frac{f(+1)-f(-1)}{2}\in\{-1,0,+1\}$, and $\deg(g\circ f)=\deg(g)\deg(f)$ for maps of $S^0$ ([[def-reduced-degree-into-the-zero-sphere]], [[lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative]]).

[F4] For an invertible linear $A$, the normalized linear map $L_A(v):=Av/|Av|$ is a diffeomorphism of $S^{n-1}$ with inverse $L_{A^{-1}}$, and its local orientation sign at every $v$ is $\operatorname{sign}\det A$: choosing a positively oriented basis $(v,e_2,\dots,e_n)$ of $\mathbb R^n$, the outward normal $v$ of the ball is the first basis vector, so the induced map on the tangent space $T_vS^{n-1}$ has the orientation sign of $A$ there, namely $\operatorname{sign}\det A$. Hence $\deg L_A=\operatorname{sign}\det A$ for $n\ge2$ by [F2], and the same formula holds for the reduced degree at $n=1$, since $L_A=\operatorname{sign}(A)\,\mathrm{id}$ on $S^0$ by [F3].

## Proof

1.1 Within either chart, varying the radius through positive admissible radii gives the homotopy $v\mapsto X_\varphi(r(t)v)/|X_\varphi(r(t)v)|$, since its numerator is nonzero. Its degree is constant by [F2] or [F3]. Shrink both radii to a common $\rho>0$ such that the transition and its inverse are defined and all points used below lie in a zero-free punctured coordinate ball. [F2, F3, given]

1.2 Put $\sigma(u)=X_\varphi(u)/|X_\varphi(u)|$, $f(v)=\sigma(\rho v)$ and $u(v)=\theta^{-1}(\rho v)$. The normalized $\psi$-field is $g(v)=L_{d\theta_{u(v)}}(\sigma(u(v)))$ by [F1]. Since $d\theta_{u(v)}$ tends uniformly to the invertible matrix $A=d\theta_0$, interpolation of this matrix to $A$ stays invertible for small $\rho$, giving $g\simeq L_A\circ\sigma\circ u$. The radial homotopy $u_t(v)=((1-t)|u(v)|+t\rho)u(v)/|u(v)|$ stays in the zero-free punctured ball; hence $L_A\sigma(u_t(v))$ joins this last map to $L_A\circ f\circ\widetilde u$, where $\widetilde u=u/|u|$. Finally $\widetilde u(v)=L_{A^{-1}}(v)+O(\rho)$ uniformly, so normalized convex interpolation gives $\widetilde u\simeq L_{A^{-1}}$. Thus $g\simeq L_A\circ f\circ L_{A^{-1}}$. [F1, F4, construct, algebra]

2.1 Multiplicativity and [F4] now give $\deg g=(\operatorname{sign}\det A)^2\deg f=\deg f$, also for reduced degree at $n=1$. Step 1.1 restores the original radii, proving equality of indices. This does not assert that $f_\varphi$ and $f_\psi$ themselves are homotopic: for $X(t)=t^2$ and $\psi=-\varphi$, they are the distinct constant maps of $S^0$, both of degree zero. [F2, F3, F4, step 1.1, step 1.2, algebra]

3.1 On a coordinate ball an orientation-preserving trivialization changes components to $B(u)X_\varphi(u)$ with $B(u)\in GL_n^+(\mathbb R)$. Contracting $B(u)$ to $B(0)$ through $B((1-t)u)$ gives a nonzero homotopy on the sphere. The resulting degree is $\deg L_{B(0)}\deg f=\deg f$ by [F4]. A negative determinant instead multiplies it by $-1$, which is compensated if the base orientation is also reversed. These are exactly the consistent orientation conventions in the statement. [F2, F3, F4, step 2.1, algebra] ∎
