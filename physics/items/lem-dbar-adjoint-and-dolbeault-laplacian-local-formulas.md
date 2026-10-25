---
id: lem-dbar-adjoint-and-dolbeault-laplacian-local-formulas
kind: lemma
title: "The Dolbeault adjoint and Laplacian: local formulas and ellipticity"
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-elliptic-hyperbolic-and-parabolic-principal-symbols
  - def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
  - def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
  - def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface
  - def-principal-part-and-principal-symbol-of-a-scalar-pde
  - def-wirtinger-derivatives
  - thm-chern-connection-of-a-hermitian-holomorphic-line-bundle
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry (author manuscript, Universite Grenoble Alpes)"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. VI §1, (1.1)–(1.8), printed pp. 287–289: the principal-symbol convention, formal adjoints, and the injective-symbol ellipticity definition."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry (author manuscript, Universite Grenoble Alpes)"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. VI §3.2, (3.9)–(3.12), printed pp. 292–293: formal d-star and the smooth Laplace-Beltrami operator; the weighted bundle-valued adjoint is derived here from the maximal weak identity."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry (author manuscript, Universite Grenoble Alpes)"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. VI §7 opening paragraph immediately before (7.1), printed p. 309: for a compact Hermitian manifold and the Chern connection, the smooth Dolbeault Laplacian is formally self-adjoint elliptic with principal part one half the de Rham Laplacian. The item computes both Fourier and scalar-polynomial symbol conventions directly."
    - title: "Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 3 §4, Properties 3.25 and Lemma 3.26, printed pp. 37–38: local complex Hodge-star signs and conjugate-linearity, used through the bundle-star formulas proved in the preceding item."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice, inherited through the completed $L^2$ spaces and the Sobolev-localisation interface of [[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]]; the local calculations below make no new choice. Let $X$ be a compact Riemann surface, $E$ a holomorphic line bundle with Hermitian metric $h$, and $g$ a compatible Riemannian metric. Use the spaces, maximal operator $\bar D$, Hilbert adjoint $\bar D^*$, and Dolbeault Laplacian $\Delta''$ of [[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]]. Let $\star_E$ be the conjugate-linear bundle-valued Hodge map of [[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]], characterized by $s\wedge\star_Et=\langle s,t\rangle\,\mathrm dV_g$. In the formula below, $\star_E^{-1}$ means the inverse of its degree-zero map $E\to\Lambda^{1,1}T^*X\otimes E^*$.

For a smooth $E$-valued $(0,1)$-form $t$, define
$$\bar\partial_E^*t:=-\star_E^{-1}\,\bar\partial_{E^*}(\star_Et).$$
Then $\bar\partial_E^*t$ is smooth, every smooth $t$ lies in $\operatorname{dom}\bar D^*$, and $\bar D^*t=\bar\partial_E^*t$. In particular, for compactly supported smooth sections $s$ and $(0,1)$-forms $t$,
$$\langle\bar\partial_Es,t\rangle_{L^2}=\langle s,\bar\partial_E^*t\rangle_{L^2}.$$

In a holomorphic chart $z=x+iy$ and holomorphic frame $e$ with $\psi=h(e,e)>0$, write $g=\rho(dx^2+dy^2)$, so $\mathrm dV_g=\rho\,dx\,dy$. For smooth local coefficients $f,u$,
$$\bar\partial_E(fe)=\frac{\partial f}{\partial\bar z}\,d\bar z\otimes e,\qquad \bar\partial_E^*(u\,d\bar z\otimes e)=-\frac{2}{\rho\psi}\,\frac{\partial(\psi u)}{\partial z}\,e.$$
Thus
$$\Delta''_0f=-\frac{2}{\rho\psi}\frac{\partial}{\partial z}\left(\psi\frac{\partial f}{\partial\bar z}\right),\qquad \Delta''_1(u\,d\bar z\otimes e)=-2\frac{\partial}{\partial\bar z}\left(\frac{1}{\rho\psi}\frac{\partial(\psi u)}{\partial z}\right)d\bar z\otimes e,$$
so both blocks are divergence-form operators with smooth coefficients. The smooth operator $\Delta''$ is formally self-adjoint of order $2$. With the Fourier convention $\sigma_F(\partial_x)=i\xi_x$, $\sigma_F(\partial_y)=i\xi_y$, its principal symbol on both form degrees is
$$\sigma_F(\Delta'')(x,\xi)=\frac{1}{2\rho(x)}|\xi|_{\mathrm{eucl}}^2\,\operatorname{id}=\frac12|\xi|_g^2\,\operatorname{id}\qquad(\xi\ne0),$$
which is positive definite. Under the scalar-polynomial convention $p_2(x,\xi)=\sum_{|\alpha|=2}a_\alpha(x)\xi^\alpha$ of [[def-principal-part-and-principal-symbol-of-a-scalar-pde]], the same operator has $p_2=-\frac12|\xi|_g^2\operatorname{id}$; this is negative definite and hence also elliptic. The first-order Fourier symbols of $\bar\partial_E$ and $\bar\partial_E^*$ have trivial kernel on every nonzero real covector; hence these operators are locally elliptic in the injective-symbol sense.

## Facts & Assumptions

**Given:** A compact Riemann surface $X$, a holomorphic line bundle $E$ with supplied positive Hermitian metric, a compatible Riemannian metric, and the operators $\bar D,\bar D^*,\Delta''$ from the preceding item.

[F1] The bundle Dolbeault operators are globally defined; in a holomorphic frame $e$, $\bar\partial_E(fe)=(\partial_{\bar z}f)d\bar z\otimes e$, and the dual operator extends coefficientwise to $E^*$-valued forms ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]).

[F2] The bundle star is conjugate-linear, satisfies $s\wedge\star_Et=\langle s,t\rangle\mathrm dV_g$, and in a chart/frame of weight $\psi$ has $\star_E(fe)=\frac{i\rho\psi}{2}\bar f\,dz\wedge d\bar z\otimes e^*$ and $\star_E(u\,d\bar z\otimes e)=-i\psi\bar u\,dz\otimes e^*$ ([[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]).

[F3] The maximal operator's domain is defined by $\int_X\bar Du\wedge\varphi=-\int_Xu\wedge\bar\partial_{E^*}\varphi$ for every smooth test $\varphi\in C_c^\infty(X,K\otimes E^*)$, and $\bar D^*$ is defined by the first-variable-linear Hilbert adjoint identity ([[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]]).

[F4] The Wirtinger derivatives satisfy $\partial_z=\frac12(\partial_x-i\partial_y)$ and $\partial_{\bar z}=\frac12(\partial_x+i\partial_y)$ ([[def-wirtinger-derivatives]]).

[F5] For a scalar local differential expression of order $2$, the principal symbol is the homogeneous polynomial made from its top-order coefficients; a real scalar quadratic symbol is elliptic when it is nonzero for every nonzero real covector ([[def-principal-part-and-principal-symbol-of-a-scalar-pde]], [[def-elliptic-hyperbolic-and-parabolic-principal-symbols]]).

[F6] Full AC and its countable instances are inherited from the completed Hilbert and Sobolev-localisation interfaces stated in the preceding item; the local calculations here use no choice ([[def-axiom-of-choice]], [[def-countable-choice]], [[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]]).

[F7] The Chern connection's $(0,1)$ component is the holomorphic Dolbeault operator; thus Demailly's smooth Chern Dolbeault Laplacian in the cited comparison has the same differential expression as the blocks computed here ([[thm-chern-connection-of-a-hermitian-holomorphic-line-bundle]]).

## Proof

**Proof technique:** use the weak adjoint identity to prove the formal formula, compute its chart expression, then calculate the principal symbols.

1.1 For any $u\in\operatorname{dom}\bar D$, let $v=\bar Du$ and take the smooth test $\varphi=\star_Et$ in [F3]. By [F2], $\langle v,t\rangle_{L^2}=\int_Xv\wedge\star_Et$, and the weak identity gives $\langle v,t\rangle_{L^2}=-\int_Xu\wedge\bar\partial_{E^*}\star_Et$. The definition of $\bar\partial_E^*$ implies $\star_E(\bar\partial_E^*t)=-\bar\partial_{E^*}\star_Et$, so this is $\langle u,\bar\partial_E^*t\rangle_{L^2}$. Thus $t\in\operatorname{dom}\bar D^*$ and $\bar D^*t=\bar\partial_E^*t$; smooth sections belong to $\operatorname{dom}\bar D$ and $\bar D s=\bar\partial_Es$, giving the stated formal identity. [F1, F2, F3, given, algebra]

2.1 In the chart/frame of the statement, solving the $q=0$ star formula in [F2] for its coefficient gives $\star_E^{-1}(a\,dz\wedge d\bar z\otimes e^*)=\frac{2i}{\rho\psi}\bar a\,e$. For $t=u\,d\bar z\otimes e$, [F2] gives $\star_Et=-i\psi\bar u\,dz\otimes e^*$, and the local dual Dolbeault formula in [F1] gives $\bar\partial_{E^*}\star_Et=i\partial_{\bar z}(\psi\bar u)\,dz\wedge d\bar z\otimes e^*$. Applying the displayed inverse and conjugating the coefficient yields $\star_E^{-1}\bar\partial_{E^*}\star_Et=\frac{2}{\rho\psi}\partial_z(\psi u)e$, so the negative sign in the definition gives the claimed formula for $\bar\partial_E^*$. [F1, F2, F4, step 1.1, algebra]

3.1 The local Dolbeault formula in [F1] gives $\Delta''_0f=\bar\partial_E^*\bar\partial_Ef=-\frac{2}{\rho\psi}\partial_z(\psi\partial_{\bar z}f)$. Applying $\bar\partial_E$ to the formula from step 2.1 gives $\Delta''_1(u\,d\bar z\otimes e)=-2\partial_{\bar z}((\rho\psi)^{-1}\partial_z(\psi u))d\bar z\otimes e$. The coefficients are smooth because $\rho,\psi$ are smooth and positive. [F1, step 2.1, given]

4.1 For smooth sections $s_0,t_0$ and smooth $(0,1)$-forms $s_1,t_1$, the formal-adjoint identity in step 1.1 gives $\langle\Delta''_0s_0,t_0\rangle=\langle\bar\partial_Es_0,\bar\partial_Et_0\rangle=\langle s_0,\Delta''_0t_0\rangle$ and $\langle\Delta''_1s_1,t_1\rangle=\langle\bar\partial_E^*s_1,\bar\partial_E^*t_1\rangle=\langle s_1,\Delta''_1t_1\rangle$. Thus the smooth differential operator is formally self-adjoint. [step 1.1, step 3.1, given]

4.2 The top-order term of either Laplacian block in step 3.1 is $-\frac{2}{\rho}\partial_z\partial_{\bar z}=-\frac{1}{2\rho}(\partial_x^2+\partial_y^2)$; lower-order derivatives of $\psi$ and $\rho$ do not enter the symbol [F4, F5, step 3.1]. With $\sigma_F(\partial_j)=i\xi_j$, the Fourier symbol is $\sigma_F(\Delta'')(x,\xi)=\frac{1}{2\rho(x)}(\xi_x^2+\xi_y^2)\operatorname{id}=\frac12|\xi|_g^2\operatorname{id}$. With the scalar-polynomial convention from [F5], $p_2=-\frac{1}{2\rho(x)}(\xi_x^2+\xi_y^2)\operatorname{id}=-\frac12|\xi|_g^2\operatorname{id}$, which is nonzero for $\xi\ne0$ and has a definite sign. The first-order Fourier symbols are $\sigma_F(\bar\partial_E)(\xi)=\frac{i}{2}(\xi_x+i\xi_y)$ and $\sigma_F(\bar\partial_E^*)(\xi)=-\frac{i}{\rho}(\xi_x-i\xi_y)$ in the local line frames, each nonzero for nonzero real $\xi$. By [F7], the source's Chern-connection Dolbeault operator has this same $(0,1)$ part; the local computation itself proves the stated ellipticity. [F4, F5, F7, step 3.1, algebra]

5.1 Steps 1.1–4.2 prove the formal adjoint identity, agreement with the Hilbert adjoint on smooth forms, both local Laplacian formulas, formal self-adjointness, and the positive Fourier and negative scalar-polynomial symbols. Full AC is inherited exactly through the preceding maximal-operator item; the local computations themselves use no choice. [F1, F2, F3, F4, F5, F6, F7, step 1.1, step 2.1, step 3.1, step 4.1, step 4.2] ∎
