---
id: thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology
kind: theorem
title: "Harmonic representatives for compact de Rham and Dolbeault complexes"
status: draft
origin: session
deps: [def-axiom-of-choice, thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition, thm-local-coordinate-formula-for-the-exterior-derivative, thm-the-exterior-derivative-squares-to-zero, def-de-rham-cohomology, def-bigraded-complex-differential-forms, thm-d-dbar-decomposition-and-identities]
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch VI §3.3 and §7.1, harmonic decompositions; all analytic and cohomological arguments supplied locally"
---

## Statement

Assume the Axiom of Choice. Let $M$ be a compact smooth Riemannian manifold without boundary, of real dimension at least two. Its metric defines the $L^2$ pairing on forms by the Riemannian density; orientation is unnecessary. Let $d^*$ denote the formal adjoint of $d$, and $\Delta=dd^*+d^*d$ on total real forms, or on their complexification. With domain $H^2$ the operator is nonnegative and selfadjoint. Its degreewise smooth kernels $\mathcal H^k$ are finite dimensional, and there is an orthogonal smooth decomposition
$$\Omega^k(M)=\mathcal H^k\mathbin{\oplus^\perp}d\Omega^{k-1}(M)\mathbin{\oplus^\perp}d^*\Omega^{k+1}(M).$$
The map $h\mapsto[h]$ is an isomorphism $\mathcal H^k\to H^k_{\mathrm{dR}}(M)$, over $\mathbb R$ or $\mathbb C$ as appropriate.

More generally let $X$ be a compact complex manifold of complex dimension $m\ge1$ with a smooth Hermitian metric. Let $E$ be a holomorphic bundle of finite rank with a smooth Hermitian metric (meaning its local frames have holomorphic invertible transition matrices). On $E$-valued $(p,q)$ forms, define $\bar\partial_E$ by the coefficientwise Dolbeault operator in holomorphic bundle charts and let $\bar\partial_E^*$ be its formal adjoint. For each fixed $p$, $\Delta_{\bar\partial_E}=\bar\partial_E\bar\partial_E^*+\bar\partial_E^*\bar\partial_E$ on the sum over $q$ is nonnegative and selfadjoint on $H^2$; its smooth harmonic spaces $\mathcal H_E^{p,q}$ are finite dimensional and
$$\Omega^{p,q}(X,E)=\mathcal H_E^{p,q}\mathbin{\oplus^\perp}\bar\partial_E\Omega^{p,q-1}(X,E)\mathbin{\oplus^\perp}\bar\partial_E^*\Omega^{p,q+1}(X,E).$$
In particular harmonic forms represent the smooth Dolbeault quotient
$$H_{\bar\partial}^{p,q}(X,E):=\ker\bar\partial_E/\operatorname{im}\bar\partial_E$$
uniquely. Terms outside the degree range are zero. This asserts smooth Dolbeault cohomology; an identification with sheaf cohomology requires a separate Dolbeault-resolution comparison theorem.

For either complex write $D=d$ or $D=\bar\partial_E$, $P=DD^*+D^*D$, and let $\Pi,G$ be the preceding Green projection and inverse. They preserve degree, $G$ preserves smooth forms, and on smooth forms
$$DG=GD,\qquad D^*G=GD^*,\qquad D\Pi=\Pi D=D^*\Pi=\Pi D^*=0.$$
Every closed smooth $u$ satisfies $u=\Pi u+D(D^*Gu)$.

## Facts & Assumptions

**Given:** the AC assumption and metric and complex data in the Statement; all formal adjoints use the first-variable-linear integral pairing.

[F1] Compact formally symmetric second-order bundle operators with scalar positive definite principal symbol have selfadjoint $H^2$ domains, finite smooth kernels, smoothing orthogonal projections and smooth Green inverses satisfying $PG=GP=I-\Pi$ ([[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]]).

[F2] The exterior derivative has the coordinate formula $d(\sum_I u_I dx^I)=\sum_I du_I\wedge dx^I$ and squares to zero; real de Rham cohomology is the closed/exact quotient ([[thm-local-coordinate-formula-for-the-exterior-derivative]], [[thm-the-exterior-derivative-squares-to-zero]], [[def-de-rham-cohomology]]).

[F3] Complex form types and their coordinate Dolbeault operators are invariant under holomorphic coordinate changes, and $\bar\partial^2=0$ ([[def-bigraded-complex-differential-forms]], [[thm-d-dbar-decomposition-and-identities]]).

## Proof

1.1 Formal adjoints here exist as smooth differential operators: in a coordinate chart with bundle metric matrix $H$ and density $\gamma\,dx$, integrate each coefficient derivative once and transpose-conjugate its matrix, including the derivatives of $H$ and $\gamma$. The resulting local expression has smooth coefficients and order at most one, and satisfies $(Du,v)_2=(u,D^*v)_2$ when both are supported in the chart. A partition of unity gives the identity globally because there is no boundary. Uniqueness follows by testing the difference against all compactly supported smooth sections; hence the local expressions agree on overlaps. The total $P=DD^*+D^*D$ is formally symmetric and $$(Pu,u)_2=\|Du\|_2^2+\|D^*u\|_2^2\ge0.$$ For $d$, its positive-frequency principal symbol is $i\varepsilon(\xi)$, exterior multiplication by $i\xi$; that of $d^*$ is $-i\iota(\xi^\sharp)$. For a one-form $\xi$ and a wedge monomial $v$, the contraction product rule gives $\iota(\xi^\sharp)(\xi\wedge v)=|\xi|^2v-\xi\wedge\iota(\xi^\sharp)v$. This is checked directly by deleting each factor of the monomial with its alternating sign. Therefore $\varepsilon(\xi)\iota(\xi^\sharp)+\iota(\xi^\sharp)\varepsilon(\xi)=|\xi|^2I$, and $\sigma_2(P)=|\xi|^2I$. The hypotheses of [F1] are proved for the de Rham Laplacian. [F1, F2, given, algebra]

2.1 In a holomorphic frame define $D=\bar\partial_E$ coefficientwise by [F3]. Changing holomorphic frames multiplies coefficients by a holomorphic matrix $T$, with $\bar\partial T=0$, so $\bar\partial(Tu)=T\bar\partial u$; changing holomorphic coordinates preserves bidegrees and the coefficient operator by [F3]. Thus this defines a global smooth operator and $D^2=0$. Its principal symbol on a real covector $\xi$ is $i\varepsilon(\xi^{0,1})$, and its adjoint symbol is its Hermitian adjoint, $-i\varepsilon(\xi^{0,1})^*$. In a unitary wedge basis the same deletion-of-a-factor identity as in step 1.1 gives $\varepsilon(\eta)\varepsilon(\eta)^*+\varepsilon(\eta)^*\varepsilon(\eta)=|\eta|^2I$, including any fixed holomorphic $p$ factors and bundle factor. Hence $\sigma_2(P)=|\xi^{0,1}|^2I$. For a real covector $\xi\ne0$, its $(0,1)$ part is nonzero (the $(1,0)$ part is its conjugate), so this is a smooth positive definite real quadratic form in $\xi$. Step 1.1 supplies the formal symmetry and nonnegative energy identity. Thus [F1] applies also to each fixed-$p$ Dolbeault Laplacian, without requiring a Kähler metric. [F1, F3, step 1.1, algebra]

3.1 From now on use either $D$, with $D^2=0$. Taking formal adjoints gives $(D^*)^2=0$, by testing against all smooth sections. Thus on smooth forms $PD=DP$ and $PD^*=D^*P$ by expanding the two products and canceling the squared terms. The energy identity says $\mathcal H=\ker P=\ker D\cap\ker D^*$ on smooth forms; [F1] makes every $L^2$ harmonic element smooth, so this also describes its kernel. Both $D$-images and $D^*$-images are orthogonal to $\mathcal H$. Since $P$ preserves degree, the unique orthogonal solution defining $G$ in [F1] preserves degree: other degree components solve the homogeneous equation and lie in its orthogonal complement, hence vanish. The finite orthonormal harmonic projection preserves degree as well. [F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 For smooth $u$, $P(DGu)=D(PGu)=D(u-\Pi u)=Du$. The section $DGu$ is smooth and orthogonal to $\mathcal H$ by step 3.1, and $Du\perp\mathcal H$. Thus the unique orthogonal solution of this equation is $GDu$, proving $DG=GD$. The same reasoning gives $D^*G=GD^*$. Step 3.1 gives $D\Pi=D^*\Pi=0$ and orthogonality of the images gives $\Pi D=\Pi D^*=0$. All identities are asserted on smooth forms, so no compositions of unbounded Hilbert domains have been tacitly formed. [F1, step 3.1]

5.1 The Green identity gives $u=\Pi u+DD^*Gu+D^*DGu$, with smooth preimages by [F1]. These three summands are pairwise orthogonal: the harmonic summand is orthogonal to both images, and for smooth $a,b$ the adjoint identity gives $(Da,D^*b)_2=(D(Da),b)_2=0$. Conversely every harmonic or image section lies in the displayed ambient degree, so this proves the orthogonal smooth decomposition. If $Du=0$, step 4.1 gives $DGu=GDu=0$, so the coexact term vanishes and $u=\Pi u+D(D^*Gu)$. Harmonic forms are closed by step 3.1, and therefore each closed/exact quotient class has a harmonic representative. If a harmonic form $h$ is exact, $h=Dv$, then $\|h\|_2^2=(Dv,h)_2=(v,D^*h)_2=0$, so $h=0$. This proves uniqueness, injectivity and surjectivity of the harmonic-to-cohomology map. Linearity follows from the linear quotient and projection; finite dimensionality follows from [F1]. [F1, F2, F3, step 3.1, step 4.1]

6.1 Steps 1.1 and 1.2 verify the exact scalar-symbol hypotheses, formal symmetry, and nonnegative energy for the two Laplacians; [F1] therefore gives genuine nonnegative selfadjoint realizations with domain $H^2$. Steps 3.1–5.1 prove all degree, commutation, decomposition and representative assertions, including endpoint degrees where the out-of-range operators vanish. The trivial line bundle case gives the usual Dolbeault cohomology of complex-valued forms. No sheaf comparison has been used or asserted. [F1, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎
