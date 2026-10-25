---
id: lem-stokes-for-piecewise-smooth-surface-regions
kind: lemma
title: "Stokes formula for finite ordinary surface corners"
status: published
origin: pipeline
deps:
  - def-regular-oriented-surface-region-with-piecewise-smooth-boundary
  - lem-finite-choice
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - def-integral-of-an-oriented-chart-supported-top-form
  - cor-change-of-variables-for-compactly-supported-functions
  - thm-graphs-of-continuous-functions-have-content-zero
  - lem-euclidean-stokes-for-a-compactly-supported-form
  - thm-fubini-over-a-region-between-continuous-graphs
  - thm-newton-leibniz-with-interior-derivative
  - def-smooth-differential-k-form
  - def-exterior-derivative-by-the-invariant-vector-field-formula
  - def-induced-boundary-orientation
  - def-scalar-and-vector-line-integrals-along-piecewise-c1-paths
  - lem-line-integrals-are-independent-of-the-piecewise-c1-partition
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature, Chapter 9"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Theorem 9.3 proof, printed pp. 164–166 (PDF pp. 180–182), contextual cornered-Stokes proof. The argument here derives the identity directly in positive charts from graph-section Fubini and Newton–Leibniz; Lee's smooth-domain approximation is not imported."
---

## Statement

Let $M$ be an oriented smooth surface without boundary, let $D\subseteq M$ be
a compact regular oriented surface region with finitely many ordinary corners,
and let $\eta$ be a smooth $1$-form on a neighbourhood of $D$. Then

$$\int_D d\eta=\int_{\partial D}\eta,$$

where the boundary integral is the sum over the finitely many positively
oriented $C^2$ boundary arcs.

## Facts & Assumptions

**Given:** The oriented smooth surface $M$, the compact region $D$, its supplied finite piecewise-$C^2$ boundary decomposition with ordinary corners, and the form $\eta$.

[F1] The boundary of $D$ is a finite disjoint union of simple closed curves made from regular $C^2$ arcs; near a smooth point $D$ occupies one side of the arc, and at a vertex it occupies one sector bounded by the two incident arcs. The one-sided tangent rays are distinct ([[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]]).

[F2] For a compact set inside an open subset of a smooth manifold, there is a smooth bump equal to $1$ near that compact set and supported in the open set ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[F3] Any finite indexed family of nonempty sets admits a choice function ([[lem-finite-choice]]); this is finite choice only.

[F4] In a positive chart, the coefficient of a compactly supported top form is integrated in its coordinates. Multiplication by $1_D$ preserves Riemann integrability because the finitely many boundary arcs are locally graphs of content zero. On chart overlaps, the compactly supported change-of-variables formula compares these integrals; a finite overlap refinement therefore makes the finite chart sum independent of the chosen localization ([[def-integral-of-an-oriented-chart-supported-top-form]], [[cor-change-of-variables-for-compactly-supported-functions]], [[thm-graphs-of-continuous-functions-have-content-zero]]).

[F5] A compact region between two continuous graphs is Jordan measurable, and continuous integrands integrate by vertical sections ([[thm-fubini-over-a-region-between-continuous-graphs]]).

[F6] If $G$ is continuous on $[a,b]$, differentiable on $(a,b)$, and its interior derivative has an integrable extension, then that extension integrates to $G(b)-G(a)$ ([[thm-newton-leibniz-with-interior-derivative]]).

[F7] A compactly supported smooth $1$-form on $\mathbb R^2$ has exterior derivative with integral zero ([[lem-euclidean-stokes-for-a-compactly-supported-form]]).

[F8] In positive coordinates, if $\alpha=P\,dx+Q\,dy$, then $d\alpha=(Q_x-P_y)\,dx\wedge dy$. Along a $C^2$ arc $\gamma(t)=(x(t),y(t))$, its line integral is $\int(Px'+Qy')\,dt=\int\alpha_{\gamma(t)}(\gamma'(t))\,dt$, which is coordinate invariant because it evaluates the covector on the tangent. It is the scalar product line integral of $(P,Q)$ with $\gamma'$. The exterior-derivative formula follows by evaluating the invariant formula on the coordinate fields, whose bracket is zero; finite subdivision does not change the line-integral sum ([[def-smooth-differential-k-form]], [[def-exterior-derivative-by-the-invariant-vector-field-formula]], [[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]], [[lem-line-integrals-are-independent-of-the-piecewise-c1-partition]]).

[F9] The positive boundary direction is selected by the outward-normal-first rule ([[def-induced-boundary-orientation]]).

## Proof

**Proof technique:** finite localization and graph integration.

1.1 If $D=\varnothing$, both integrals are zero. For nonempty $D$, every boundary arc is locally a $C^2$ graph, so the finite boundary has content zero in each chart meeting it. Thus a smooth top-form coefficient multiplied by $1_D$ is Riemann integrable in every relatively compact chart. [F1, F4, given]

2.1 Cover $D$ by positive coordinate rectangles lying inside $\operatorname{Int}D$, rectangles where a smooth boundary arc is a graph and $D$ lies on one side, and corner rectangles where the two incident arcs form a continuous piecewise-$C^2$ graph and $D$ lies on one side. At a corner, the two oriented one-sided tangent vectors are not negative multiples by [F1]; after normalizing them in any linear coordinates, their sum defines a linear coordinate whose differential is positive on both. Thus the boundary is a continuous graph across the corner. Compactness gives a finite refinement by smaller chart neighbourhoods $V_i\Subset U_i$ of these types still covering $D$. Use [F2] to choose $b_i=1$ near $\overline{V_i}$ with compact support in $U_i$; [F3] justifies these finitely many choices. The sum $B=\sum_i b_i$ is positive on a neighbourhood of $D$. Use [F2] once more to choose $\psi=1$ near $D$ with compact support in $\{B>0\}$, and set $\rho_i=\psi b_i/B$ on $\{B>0\}$, extended by zero. Then $\sum_i\rho_i=1$ near $D$, each $\rho_i$ is smooth and compactly supported in $U_i$, and $\eta=\sum_i\rho_i\eta$ near $D$. This finite partition defines $\int_D$ as the sum of the Riemann chart integrals of the localized top forms over $D$. If a second such partition is used, the products $\rho_i\widetilde\rho_j$ form a finite partition near $D$ subordinate to chart overlaps. On each overlap the transition is a diffeomorphism with positive Jacobian, so [F4] and compactly supported change of variables identify the corresponding terms and the resulting sums agree. The coordinate boundary integral is $\int\eta(\dot\gamma)$ on each supplied arc, so its finite chart localization is the same intrinsic integral. [F1, F2, F3, F4, F8, step 1.1, choose, construct]

3.1 Let $\alpha=\rho_i\eta$ be one localized term whose chart lies in $\operatorname{Int}D$. Its coordinate representative has compact support there; it vanishes near every point outside that support, so its coordinate derivative does too. Thus $\operatorname{supp}d\alpha\subseteq\operatorname{supp}\alpha\subset\operatorname{Int}D$, and [F7] gives $\int_Dd\alpha=\int_{\mathbb R^2}d\alpha=0$. Its boundary integral is zero because its support misses $\partial D$. [F7, step 2.1]

3.2 For a localized term in a smooth-boundary or corner chart, choose a positive coordinate rectangle $[a,b]\times[c,d]$ containing its support, with the form zero near the rectangle's artificial sides. Write $\alpha=P\,dx+Q\,dy$ and the local boundary as $y=f(x)$. At a corner $f$ is continuous and piecewise $C^2$. Suppose first that $D$ is the side $y\le f(x)$. By [F5], $\int_Dd\alpha=\int_a^b\int_c^{f(x)}(Q_x-P_y)\,dy\,dx$. On each smooth piece of $f$, the difference quotient for $H(x)=\int_c^{f(x)}Q(x,y)\,dy$ gives $H'(x)=\int_c^{f(x)}Q_x(x,y)\,dy+Q(x,f(x))f'(x)$; this follows by splitting the increment at $f(x)$ and using continuity of $Q_x$ and $f$. Split $[a,b]$ at the finitely many corner abscissas and apply [F6] on each smooth subinterval. The intermediate endpoint values of $H$ cancel by continuity, and $H$ vanishes near $a,b$, so $\int_a^b\int_c^{f(x)}Q_x\,dy\,dx=-\int_a^bQ(x,f(x))f'(x)\,dx$. Applying [F6] in the $y$ variable to $P$ gives $-\int_a^b\int_c^{f(x)}P_y\,dy\,dx=-\int_a^bP(x,f(x))\,dx$. Hence $\int_Dd\alpha=-\int_a^b(P(x,f(x))+Q(x,f(x))f'(x))\,dx$. By [F8] and [F9] the positive boundary direction on this side runs from right to left, so this is $\int_{\partial D}\alpha$. [F1, F5, F6, F8, F9, step 2.1, algebra]

4.1 If instead $D$ is the side $y\ge f(x)$, use [F5] on $\int_a^b\int_{f(x)}^d(Q_x-P_y)\,dy\,dx$. For $H(x)=\int_{f(x)}^dQ(x,y)\,dy$, the same difference-quotient argument gives $H'(x)=\int_{f(x)}^dQ_x(x,y)\,dy-Q(x,f(x))f'(x)$. Split at the finitely many corner abscissas and apply [F6] on each smooth subinterval; the intermediate $H$ values cancel by continuity and $H$ vanishes near $a,b$, giving $\int_a^b\int_{f(x)}^dQ_x\,dy\,dx=\int_a^bQ(x,f(x))f'(x)\,dx$. Integrating $-P_y$ in $y$ gives $\int_a^bP(x,f(x))\,dx$. Thus $\int_Dd\alpha=\int_a^b(P(x,f(x))+Q(x,f(x))f'(x))\,dx$. By [F8] and [F9] the positive boundary direction is left to right, so this equals $\int_{\partial D}\alpha$. These two graph-side calculations cover both convex and reflex corners. [F1, F5, F6, F8, F9, step 2.1, step 3.2, algebra]

5.1 Sum the local equalities of steps 3.1, 3.2, and 4.1 over the finite partition. Linearity and $\sum_i\rho_i=1$ near $D$ give $\int_Dd\eta=\int_{\partial D}\eta$. The empty case is in step 1.1; a single boundary component, an empty boundary, a smooth boundary with no corners, the zero form, and endpoints of the supplied arcs are covered by the same finite calculation (endpoints have measure zero). The regular-region hypothesis excludes degenerate arcs and lower-dimensional nonempty regions. Only finite choices were made in step 2.1 by [F3]; no countable or arbitrary choice is used. [F1, F3, F8, step 2.1, step 3.1, step 3.2, step 4.1, algebra, discharge-construct: Stokes formula] $\square$

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Theorem 9.3 proof, printed pp. 164–166 (PDF pp. 180–182), gives a contextual proof of the cornered formula by smooth-domain approximation. That approximation is not imported here. The proof above derives the identity in each chart directly from the graph-section Fubini formula and Newton–Leibniz, including the piecewise-$C^2$ corner case.
