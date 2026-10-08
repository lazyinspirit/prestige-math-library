---
id: thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology
kind: theorem
title: Harmonic star duality for line bundle valued dolbeault cohomology
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 9
deps:
- cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional
- cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero
- def-axiom-of-choice
- def-complex-l-two-inner-product
- def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
- def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
- def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface
- lem-dbar-adjoint-and-dolbeault-laplacian-local-formulas
- thm-elliptic-regularity-for-dolbeault-harmonic-forms
- thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface
- thm-riesz-representation-for-hilbert-space
- def-dual-and-hom-vector-bundles
- def-smooth-bundle-metric
- def-riemannian-hodge-star
- thm-hodge-star-is-a-smooth-bundle-isomorphism
- def-meromorphic-differential-on-a-riemann-surface
- thm-general-stokes-theorem
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Jean-Pierre Demailly, Complex Analytic and Differential Geometry (author manuscript, Universite Grenoble Alpes)
    url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
    locator: 'Ch. VI §7, (7.3)-(7.4), printed p. 310: the Serre duality pairing $\int_M s\wedge t$, its factorisation through Dolbeault cohomology by Stokes, the $\#$ operator with $\Delta''''_{E^\star}(\#s)=\#\Delta''''_Es$, and the nondegeneracy from $\|s\|^2=\int_Xs\wedge\#s$'
  - title: Jean-Pierre Demailly, Complex Analytic and Differential Geometry (author manuscript, Universite Grenoble Alpes)
    url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
    locator: 'Ch. VI §3.1, (3.3'')-(3.7), printed pp. 291-292: the operators $\star$ and $\#$, with $s\wedge\#t=\langle s,t\rangle dV$, $\#:\Lambda^{p,q}\otimes E\to\Lambda^{n-p,n-q}\otimes E^\star$ and $\star\star=(-1)^{p(m-1)}$'
  - title: Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)
    url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
    locator: 'Ch. 6 §4, Theorem 6.7 and its proof, printed pp. 56-57: Serre duality as a nondegenerate pairing between meromorphic differentials and $H^1(D)$ via residues, quoted here only as the independent classical shape of the duality'
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a compact Riemann surface, $E$ a holomorphic line bundle with Hermitian metric $h$, $g$ a compatible Riemannian metric, and let $E^*$ be the dual line bundle with the dual Hermitian metric $h^*$ and the induced holomorphic structure $\bar\partial_{E^*}$ ([[def-dual-and-hom-vector-bundles]], [[def-smooth-bundle-metric]]). Write $\langle\cdot,\cdot\rangle_{L^2}$ for the $L^2$ pairing, which is $\mathbb C$-linear in the first variable ([[def-complex-l-two-inner-product]]).

1. **The Hodge-# operator.** Write $\#$ for the conjugate-linear metric Hodge star $\star_E$ of [[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]] on $(0,1)$-forms and for $\star_{E^*}$ on $(1,0)$-forms with values in $E^*$ (using the canonical identification $E^{**}=E$), so that $\#:\Omega^{0,1}(E)\to\Omega^{1,0}(E^*)$ is defined by the requirement
$$s\wedge\# t=\langle s,t\rangle\,\mathrm dV_g ,$$
the wedge pairing the $E$- and $E^*$-factors by the canonical duality (this is the $\#$-operator of the Hodge-star calculus, [[def-riemannian-hodge-star]], [[thm-hodge-star-is-a-smooth-bundle-isomorphism]]). Then $\#$ is a conjugate-linear bundle isomorphism, $\#^2=-1$ on $(0,1)$-forms, and $s\wedge\# s=|s|^2\,\mathrm dV_g$; consequently $\int_X s\wedge\# s=\|s\|^2_{L^2}$ for every smooth $s$, and this top form is nonzero at every point where $s$ is nonzero; the inverse of the degree-one map is $-\star_{E^*}$.
2. **Commutation with the Laplacian, and the holomorphic image.** Identify the $E^*$-valued $(1,0)$-forms with the smooth sections of the holomorphic line bundle $F:=K\otimes E^*$, carrying the induced tensor Hermitian metric (the holomorphic frame $dz\otimes e^*$ has squared norm $2/(\rho\psi)$ when $g=\rho(dx^2+dy^2)$ and $h(e,e)=\psi$), and let $\Delta''_F$ be the Dolbeault Laplacian of $F$ as in [[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]]. Then $\#\Delta''_E=\Delta''_F\#$ on smooth $(0,1)$-forms, so $\#$ maps the harmonic space $\mathcal H^{0,1}(E)=\ker\Delta''_E$ conjugately and isomorphically onto the harmonic space of $F$, which is exactly the space
$$H^0(X,K\otimes E^*)=\ker\bigl(\bar\partial_F:C^\infty(X,F)\to C^\infty(X,\Lambda^{0,1}T^*X\otimes F)\bigr)$$
of holomorphic $E^*$-valued $(1,0)$-forms ([[def-meromorphic-differential-on-a-riemann-surface]]).
3. **Duality.** The $\mathbb C$-bilinear pairing
$$B:H^{0,1}(X,E)\times H^0(X,K\otimes E^*)\longrightarrow\mathbb C,\qquad B(u,\alpha)=\int_X u\wedge\alpha ,$$
is well defined on Dolbeault classes (the integrand is a $2$-form on the closed oriented surface, and Stokes' theorem shows that replacing $u$ by $u+\bar\partial_E f$ changes the integral by zero, [[thm-general-stokes-theorem]], [[cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero]]), and it is a nondegenerate duality: the induced map $u\mapsto B(u,\cdot)$ is a $\mathbb C$-linear isomorphism
$$H^{0,1}(X,E)\xrightarrow{\ \sim\ }H^0(X,K\otimes E^*)^*,$$
so the dual of the Dolbeault group is $H^{0,1}(X,E)^*\cong H^0(X,K\otimes E^*)$.
4. **Conjugations.** Written on harmonic representatives, the two pairings are related by
$$\langle u,v\rangle_{L^2}=B\bigl(u,\# v\bigr)\qquad(u,v\in \mathcal H^{0,1}(E)),$$
the $L^2$ pairing being $\mathbb C$-linear in the first variable and conjugate-linear in the second; correspondingly the Riesz map $\mathcal H^{0,1}(E)\to \mathcal H^{0,1}(E)^*$, $u\mapsto\langle\cdot,u\rangle$, is conjugate-linear, while the identification $u\mapsto B(u,\cdot)$ is $\mathbb C$-linear, and pulling $B(u,\cdot)$ back along the conjugate-linear map $\#:\mathcal H^{0,1}(E)\to H^0(X,K\otimes E^*)$ gives the functional $v\mapsto B(u,\#v)=\langle u,v\rangle_{L^2}$, which is conjugate-linear in $v$ and depends complex-linearly on $u$. This pullback is distinct from the ordinary complex-linear dual functional $v\mapsto\langle v,u\rangle_{L^2}$ defining the Riesz map.

## Facts & Assumptions

**Given:** The compact Riemann surface, holomorphic line bundle, supplied compatible metrics and full Axiom of Choice in the Statement.

[F1] The canonical bundle, holomorphic dual bundle and their coefficientwise Dolbeault operators are well defined, and the kernel on smooth sections is the space of holomorphic sections ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]).

[F2] The bundle star is conjugate-linear; its local formulas are $\star_E(u\,d\bar z\otimes e)=-i\psi\bar u\,dz\otimes e^*$ and $\star_{E^*}(a\,dz\otimes e^*)=i\psi^{-1}\bar a\,d\bar z\otimes e^{**}$. Their composition is minus the identity, and $s\wedge\star_Et=\langle s,t\rangle dV_g$. The induced covector norm satisfies $|dz|_g^2=2/\rho$ ([[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]).

[F3] For any supplied Hermitian holomorphic line bundle of local weight $w$, the smooth formulas are $\bar\partial^*(u\,d\bar z)=-2(\rho w)^{-1}\partial_z(wu)$, $\Delta''_0 a=-2(\rho w)^{-1}\partial_z(w\partial_{\bar z}a)$ and $\Delta''_1u=-2\partial_{\bar z}((\rho w)^{-1}\partial_z(wu))$ ([[lem-dbar-adjoint-and-dolbeault-laplacian-local-formulas]]).

[F4] The Hilbert harmonic kernels consist of smooth forms; in degree one their equation is $\bar D^*u=0$, and in degree zero it is $\bar Da=0$. The maximal and adjoint operators agree with their smooth expressions on these smooth forms ([[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]], [[thm-elliptic-regularity-for-dolbeault-harmonic-forms]]).

[F5] The degree-one Dolbeault group is finite-dimensional and has a unique smooth harmonic representative; the degree-zero harmonic kernel for every holomorphic line bundle equals its holomorphic-section space ([[cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional]], [[thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface]]).

[F6] An exact smooth top form whose primitive has compact support on a boundaryless oriented manifold has integral zero, under Countable Choice ([[cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero]]).

[F7] A complex Hilbert inner product is linear in its first variable. Under Countable Choice every bounded complex-linear functional has a unique Riesz representation $v\mapsto\langle v,u\rangle$ ([[def-complex-l-two-inner-product]], [[thm-riesz-representation-for-hilbert-space]]).

[F8] Full AC is assumed; its countable instances supply Stokes and Riesz, and it is inherited through all harmonic regularity and Hodge interfaces. No additional choice is used in the local star or finite-dimensional argument ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 By [F2], $\#$ in the forward direction sends $u\,d\bar z\otimes e$ to $-i\psi\bar u\,dz\otimes e^*$, is conjugate-linear, and is a smooth bundle isomorphism. In the reverse direction it sends $a\,dz\otimes e^*$ to $i\psi^{-1}\bar a\,d\bar z\otimes e^{**}$; substituting $a=-i\psi\bar u$ gives $-u$, so $\#^2=-1$ and the inverse is minus the reverse star. The wedge identity gives $s\wedge\#s=|s|^2dV_g$. A nonzero smooth $s$ has positive squared norm on a neighborhood of a point, hence its integral is $\|s\|_{L^2}^2>0$; the pointwise top form is nonzero exactly where $s$ is nonzero. [F2, given, algebra]

1.2 For a smooth section $f$ of $E$ and a holomorphic section $\alpha$ of $F$, evaluation contracts $f\alpha$ to a global smooth $(1,0)$-form. Its exterior derivative has only a $(1,1)$ component on a curve, and locally $\alpha=a\,dz\otimes e^*$ with $\partial_{\bar z}a=0$, so $d(f\alpha)=\bar\partial_Ef\wedge\alpha$. On compact $X$ the primitive $f\alpha$ has compact support, and [F6] applied to real and imaginary parts gives $\int_X\bar\partial_Ef\wedge\alpha=0$. Consequently the integral defines $B([u],\alpha)$ independently of the smooth representative, and coefficientwise wedge and evaluation make it complex-bilinear. [F1, F6, F8, given, algebra]

2.1 In the holomorphic frame $dz\otimes e^*$ of $F=K\otimes E^*$, the tensor metric has weight $w=2/(\rho\psi)$ by [F2]. The inverse and canonical cocycles are holomorphic, so this is a holomorphic line bundle by [F1]. For a smooth local coefficient $u$ of an $E$-valued $(0,1)$-form put $a=-i\psi\bar u$. Applying [F3] to $F$ gives $\Delta''_{F,0}a=-\psi\partial_z(2(\rho\psi)^{-1}\partial_{\bar z}(-i\psi\bar u))=2i\psi\partial_z((\rho\psi)^{-1}\partial_{\bar z}(\psi\bar u))$. Applying [F3] to $E$ and conjugating gives $-i\psi\overline{\Delta''_{E,1}u}=2i\psi\partial_z((\rho\psi)^{-1}\partial_{\bar z}(\psi\bar u))$, since $\rho,\psi$ are real. These equal coefficients prove $\Delta''_{F,0}\#=\#\Delta''_{E,1}$ on smooth forms; the local equalities are global because the operators and star are globally defined. [F1, F2, F3, step 1.1, algebra]

3.1 By [F4], a Hilbert harmonic degree-one form is smooth and harmonic exactly when $\partial_z(\psi u)=0$. Conjugating this equation gives $\partial_{\bar z}(\psi\bar u)=0$, exactly holomorphy of $a=-i\psi\bar u$ in the holomorphic frame of $F$. Conversely, if $a$ is a holomorphic section coefficient, the inverse star gives $u=-i\psi^{-1}\bar a$, which is smooth, satisfies that first-order equation and therefore belongs to the Hilbert harmonic kernel by [F4]. Thus $\#$ is a conjugate-linear bijection between $\mathcal H^{0,1}(E)$ and $H^0(X,F)$; the latter is the degree-zero harmonic kernel for $F$ by [F5]. This uses smooth representatives of maximal-domain kernels, not an identification of a maximal domain with smooth forms. [F1, F3, F4, F5, step 1.1, step 2.1]

4.1 Replace each Dolbeault class by its unique harmonic representative $u$ using [F5]. If $u\ne0$, then $\#u\in H^0(X,F)$ by step 3.1 and $B([u],\#u)=\|u\|_{L^2}^2>0$ by step 1.1. Conversely every nonzero $\alpha\in H^0(X,F)$ equals $\#v$ for a nonzero harmonic $v$, so $B([v],\alpha)>0$. This proves nondegeneracy in both variables. To prove the asserted isomorphisms explicitly, choose an $L^2$-orthonormal basis $e_1,\ldots,e_m$ of the finite-dimensional harmonic space; if it is zero take the empty basis. The $\#e_j$ form a complex basis of $H^0(X,F)$ by the conjugate-linear bijection, and $B([e_j],\#e_k)=\delta_{jk}$. Thus $[e_j]\mapsto B([e_j],\cdot)$ maps a basis to its dual basis and is a complex-linear isomorphism; likewise $\#e_k\mapsto B(\cdot,\#e_k)$ gives the complex-linear inverse-side duality $H^0(X,F)\cong H^{0,1}(X,E)^*$. [F5, F8, step 1.1, step 3.1, step 1.2, algebra]

5.1 Integrating [F2] gives $B([u],\#v)=\langle u,v\rangle_{L^2}$ for harmonic $u,v$. Since $B$ is complex-bilinear and $\#$ conjugate-linear, this expression is linear in $u$ and conjugate-linear in $v$; pulling back a linear functional on $H^0(X,F)$ along $\#$ therefore gives a conjugate-linear functional on the harmonic space. Separately, $R(u)(v)=\langle v,u\rangle$ is complex-linear in $v$ and satisfies $R(cu)=\bar cR(u)$. The harmonic space is finite-dimensional and hence Hilbert in its inherited pairing, so [F7] identifies this conjugate-linear map with the Riesz bijection to its ordinary complex-linear dual. This proves the stated conjugation conventions and completes all claims, with full AC inherited as in [F8]. [F2, F7, F8, step 3.1, step 1.2, step 4.1, algebra] ∎
