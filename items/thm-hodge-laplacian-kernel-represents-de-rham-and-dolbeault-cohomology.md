---
id: thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology
kind: theorem
title: "Harmonic representatives for compact de Rham and Dolbeault complexes"
status: draft
origin: pipeline
dependency_level: 10
deps: [def-axiom-of-choice, thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition, lem-formal-adjoints-of-differential-operators-exist-and-are-unique, def-second-order-laplace-type-operators-on-vector-bundles, def-complex-manifolds-and-holomorphic-vector-bundles, def-e-valued-dolbeault-operators-and-ltwo-structure, def-smooth-manifold, def-smooth-differential-k-form, def-smooth-section-local-section-and-support, def-riemannian-metric-and-riemannian-manifold, prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles, def-riemannian-volume-density, def-integral-of-a-compactly-supported-smooth-density, def-density-bundle-and-smooth-density, thm-local-coordinate-formula-for-the-exterior-derivative, thm-the-exterior-derivative-squares-to-zero, def-de-rham-cohomology, def-bigraded-complex-differential-forms, thm-d-dbar-decomposition-and-identities, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, thm-gram-schmidt-orthonormalisation]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch VI §3.3, Theorems 3.16–3.17, pp. 294–295, and §7, Theorems 7.1–7.2, p. 309; all analytic and cohomological arguments supplied locally"
---

## Statement

Assume the Axiom of Choice. Let $M$ be a compact smooth Riemannian manifold without boundary, of real dimension at least two. Its metric defines the $L^2$ pairing on forms by the Riemannian density; orientation is unnecessary. Let $d^*$ denote the formal adjoint of $d$, and $\Delta=dd^*+d^*d$ on total real forms, or on their complexification. With domain $H^2$ the operator is nonnegative and selfadjoint. Its degreewise smooth kernels $\mathcal H^k$ are finite dimensional, and there is an orthogonal smooth decomposition
$$\Omega^k(M)=\mathcal H^k\mathbin{\oplus^\perp}d\Omega^{k-1}(M)\mathbin{\oplus^\perp}d^*\Omega^{k+1}(M).$$
The map $h\mapsto[h]$ is an isomorphism $\mathcal H^k\to H^k_{\mathrm{dR}}(M)$, over $\mathbb R$ or $\mathbb C$ as appropriate.

More generally let $X$ be a compact complex manifold of complex dimension $m\ge1$ with a smooth Hermitian metric. Let $E$ be a holomorphic bundle of finite rank with a smooth Hermitian metric. The holomorphic bundle structure supplies frames with holomorphic invertible transition matrices; the Hermitian metric is separate smooth positive-definite pairing data. On $E$-valued $(p,q)$ forms, define $\bar\partial_E$ by the coefficientwise Dolbeault operator in holomorphic bundle charts and let $\bar\partial_E^*$ be its formal adjoint. For each fixed $p$, $\Delta_{\bar\partial_E}=\bar\partial_E\bar\partial_E^*+\bar\partial_E^*\bar\partial_E$ on the sum over $q$ is nonnegative and selfadjoint on $H^2$; its smooth harmonic spaces $\mathcal H_E^{p,q}$ are finite dimensional and
$$\Omega^{p,q}(X,E)=\mathcal H_E^{p,q}\mathbin{\oplus^\perp}\bar\partial_E\Omega^{p,q-1}(X,E)\mathbin{\oplus^\perp}\bar\partial_E^*\Omega^{p,q+1}(X,E).$$
In particular harmonic forms represent the smooth Dolbeault quotient
$$H_{\bar\partial}^{p,q}(X,E):=\ker\bar\partial_E/\operatorname{im}\bar\partial_E$$
uniquely. Terms outside the degree range are zero. This asserts smooth Dolbeault cohomology; an identification with sheaf cohomology requires a separate Dolbeault-resolution comparison theorem.

For either complex write $D=d$ or $D=\bar\partial_E$, $P=DD^*+D^*D$, and let $\Pi,G$ be the preceding Green projection and inverse. They preserve degree, $G$ preserves smooth forms, and on smooth forms
$$DG=GD,\qquad D^*G=GD^*,\qquad D\Pi=\Pi D=D^*\Pi=\Pi D^*=0.$$
Every closed smooth $u$ satisfies $u=\Pi u+D(D^*Gu)$.

## Facts & Assumptions

**Given:** The AC assumption and the metric and complex data in the Statement; all formal adjoints use the first-variable-linear integral pairing.

[F1] Compact formally symmetric second-order bundle operators with scalar positive definite principal symbol have selfadjoint $H^2$ domains, finite smooth kernels, smoothing orthogonal projections and smooth Green inverses satisfying $PG=GP=I-\Pi$ ([[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]]).

[F2] The exterior derivative has the coordinate formula $d(\sum_I u_I dx^I)=\sum_I du_I\wedge dx^I$ and squares to zero; real de Rham cohomology is the closed/exact quotient ([[thm-local-coordinate-formula-for-the-exterior-derivative]], [[thm-the-exterior-derivative-squares-to-zero]], [[def-de-rham-cohomology]]).

[F3] Complex form types and their coordinate Dolbeault operators are invariant under holomorphic coordinate changes and $\bar\partial^2=0$; the $E$-valued operators $\bar\partial_E$, their formal adjoints, the Dolbeault Laplacian and its scalar principal symbol $|\xi^{0,1}|^2$ are those of the Definition ([[def-bigraded-complex-differential-forms]], [[thm-d-dbar-decomposition-and-identities]], [[def-e-valued-dolbeault-operators-and-ltwo-structure]]).

[F4] A smooth first-order differential operator between finite-rank metric bundles over a boundaryless manifold with a smooth positive density has a unique smooth first-order formal adjoint, and the leading coefficients of the adjoint are $(-1)^\delta$ times the fibre adjoint of the leading coefficients of the operator ([[lem-formal-adjoints-of-differential-operators-exist-and-are-unique]]).

[F5] Laplace-type operators, formal symmetry and the principal symbol $\sigma_2$ are as in [[def-second-order-laplace-type-operators-on-vector-bundles]]; the coefficient of $\partial_i\partial_j$ in a product of two first-order operators is the product of their leading coefficient matrices.

[F6] The metrics on exterior and tensor bundles are the induced ones, the $L^2$ pairing is first-variable-linear against the Riemannian density, and the completion is a Hilbert space ([[prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles]], [[def-riemannian-volume-density]], [[def-density-bundle-and-smooth-density]], [[def-integral-of-a-compactly-supported-smooth-density]], [[def-complex-manifolds-and-holomorphic-vector-bundles]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F7] At each point an orthonormal basis of the cotangent space (unitary in the complex case) exists, so the deletion identity for the exterior multiplication operator $\varepsilon(\eta)$ and its metric adjoint may be checked on wedge monomials ([[thm-gram-schmidt-orthonormalisation]], [[prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles]]).

## Proof

1.1 The de Rham Laplacian satisfies the hypotheses of [F1]. Let $D=d$ on real forms, or on their complexification, and $P=DD^*+D^*D$. The coordinate formula [F2] exhibits $D$ as a smooth first-order differential operator, so [F4] supplies its unique smooth first-order formal adjoint $D^*$. In an orthonormal basis of the cotangent space at a point ([F7]), the leading coefficient matrices of $D$ multiply, on a covector $\xi$, to exterior multiplication $\varepsilon(\xi)$, and those of $D^*$ are $(-1)^1$ times the metric adjoints, so they multiply to $-\varepsilon(\xi)^*$. The coefficient of $\partial_i\partial_j$ in $DD^*$ is therefore $\varepsilon(\xi)\bigl(-\varepsilon(\xi)^*\bigr)$ and in $D^*D$ it is $\bigl(-\varepsilon(\xi)^*\bigr)\varepsilon(\xi)$; by [F5] the second-order coefficient matrix of $P$ is $-(\varepsilon(\xi)\varepsilon(\xi)^*+\varepsilon(\xi)^*\varepsilon(\xi))$. The metric adjoint of $\varepsilon(\xi)$ is the contraction that deletes each factor of a wedge monomial pairing with $\xi$, with alternating signs, and deleting and reinserting the same factor on both sides gives the identity $\varepsilon(\xi)\varepsilon(\xi)^*+\varepsilon(\xi)^*\varepsilon(\xi)=|\xi|^2\mathrm{id}$; hence the second-order coefficient of $P$ is $-|\xi|^2\mathrm{id}$ and its principal symbol in the sense of [F5] is $\sigma_2(P)(x,\xi)=|\xi|^2\mathrm{id}$, a smooth positive definite scalar form. Finally, for compactly supported smooth forms, $(Pu,v)_{L^2}=(D^*u,D^*v)_{L^2}+(Du,Dv)_{L^2}$ by [F4], which is conjugate-symmetric in $u,v$ and equals $\|Du\|_2^2+\|D^*u\|_2^2\ge0$ when $u=v$; so $P$ is formally symmetric and nonnegative. Thus [F1] applies to $P$ with domain $H^2$. [F2, F4, F5, F6, F7, given, algebra]

2.1 The Dolbeault Laplacian satisfies the hypotheses of [F1]. Fix $p$ and let $D=\bar\partial_E$ on the sum over $q$, $P=DD^*+D^*D$, with the operator and its adjoint as in [F3]; by that item $D$ is a smooth first-order operator and the Dolbeault Laplacian is the formally symmetric Laplace-type operator with $\sigma_2(P)(x,\xi)=|\xi^{0,1}|^2\mathrm{id}$, notation as in [F5]. The same computation as in step 1.1, now with $\eta=\xi^{0,1}$ and unitary frames ([F7]), gives the deletion identity $\varepsilon(\eta)\varepsilon(\eta)^*+\varepsilon(\eta)^*\varepsilon(\eta)=|\eta|^2\mathrm{id}$ including the holomorphic $p$-factors and the bundle factor, so the second-order coefficient is $-|\eta|^2\mathrm{id}$ and the principal symbol is $|\xi^{0,1}|^2\mathrm{id}$; for a nonzero real covector the $(0,1)$-part is nonzero, so the form is positive definite. The energy identity and formal symmetry are those established in [F3], and no K\"ahler hypothesis is used. Hence [F1] applies to this $P$ as well. [F3, F4, F5, F7, step 1.1, given, algebra]

3.1 Consequences of $D^2=0$. Squaring $D^2=0$ and transposing the adjoint identity gives $(D^*)^2=0$, and expanding the two products gives $PD=DP$ and $PD^*=D^*P$. On smooth forms the energy identity of steps 1.1 and 2.1 shows $Pu=0$ exactly when $Du=0$ and $D^*u=0$; [F1] makes every $L^2$-harmonic element smooth, so this describes $\ker P$ on $H^2$ as well. Harmonic forms are orthogonal to the images of $D$ and $D^*$: for harmonic $h$, $(Dv,h)_{L^2}=(v,D^*h)_{L^2}=0$ and $(D^*v,h)_{L^2}=(v,Dh)_{L^2}=0$. Since $D$ raises the degree by one in the de Rham grading and the second bidegree by one in the Dolbeault bigrading, while $D^*$ lowers it, the operator $P$ preserves degrees, and the unique orthogonal solution defining $G$ in [F1] preserves degree: its other degree components solve the homogeneous equation and lie in the orthogonal complement of the kernel, hence vanish; the harmonic projection preserves degree as well. [F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 Commutation identities. For smooth $u$, $P(DGu)=D(PGu)=D(u-\Pi u)=Du$ by step 3.1 and [F1]. The section $DGu$ is smooth and orthogonal to $\ker P$ by step 3.1, and $Du$ is orthogonal to $\ker P$ as well; by the uniqueness of the orthogonal solution in [F1], $DGu=GDu$. The same reasoning applied to $D^*$ gives $D^*G=GD^*$. Since $\Pi$ projects onto $\ker P$ and the images of $D$ and $D^*$ are orthogonal to it, $D\Pi=D^*\Pi=0$; taking adjoints and using that $\Pi$ is an orthogonal projection gives $\Pi D=\Pi D^*=0$. All identities are asserted on smooth forms, so no composition of unbounded Hilbert-space domains has been formed. [F1, step 3.1, algebra]

5.1 Decomposition and harmonic representatives. For smooth $u$, [F1] gives $u=\Pi u+(I-\Pi)u=\Pi u+DD^*Gu+D^*DGu$, and the three summands are pairwise orthogonal: the harmonic summand is orthogonal to both images by step 3.1, and $(Da,D^*b)_{L^2}=(D^2a,b)_{L^2}=0$ since $D^2=0$. Conversely a harmonic form or a form in the image of $D$ or $D^*$ lies in the displayed ambient degree, so this is the orthogonal smooth decomposition. If $u$ is closed, $Du=0$, then step 4.1 gives $DGu=GDu=0$ and the coexact term vanishes: $u=\Pi u+D(D^*Gu)$, a harmonic representative of the class. If a harmonic $h$ is exact, $h=Dv$, then $\|h\|_2^2=(Dv,h)_{L^2}=(v,D^*h)_{L^2}=0$ because $D^*h=0$ by step 3.1, so $h=0$; hence $h\mapsto[h]$ is injective, and the preceding formula makes it surjective. It is linear as the composition of a linear projection with a linear quotient map, and its domain is finite dimensional by [F1]; the same argument applies over $\mathbb R$ or $\mathbb C$. [F1, F2, F3, step 3.1, step 4.1, algebra]

6.1 Conclusion and endpoints. Steps 1.1 and 2.1 verified the exact scalar-positive-symbol, formal-symmetry and nonnegativity hypotheses for the de Rham and Dolbeault Laplacians, so [F1] gives genuine nonnegative selfadjoint realizations with domain $H^2$, finite smooth kernels, smoothing projections and smooth Green inverses; steps 3.1 through 5.1 proved the degree, commutation, orthogonal-decomposition and harmonic-representative assertions for both complexes. At the endpoint degrees the operators mapping outside the displayed range are zero by the degree convention of [F3], so the identities hold there as well. The trivial line bundle case gives the usual Dolbeault cohomology of complex-valued forms, and no sheaf comparison has been used or asserted. [F1, F3, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎
