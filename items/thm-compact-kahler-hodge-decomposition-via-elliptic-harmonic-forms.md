---
id: thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms
kind: theorem
title: "Compact Kähler Hodge decomposition from elliptic harmonic forms"
status: published
origin: pipeline
dependency_level: 10
deps:
  - def-compact-kahler-manifold-and-hodge-polarization-conventions
  - lem-kahler-commutators-and-laplacian-type-preservation
  - lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-sheaf-cohomology-derived-global-sections
  - thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
  - thm-dolbeault-lemma-polydisc
  - thm-smooth-function-module-sheaves-are-acyclic
  - thm-acyclic-resolution-theorem-for-right-derived-functors
  - thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology
  - def-second-order-laplace-type-operators-on-vector-bundles
  - lem-formal-adjoints-of-differential-operators-exist-and-are-unique
  - thm-de-rham-theorem
  - def-r-page-of-the-spectral-sequence-of-a-filtered-complex
  - def-abutment-to-a-filtered-object
  - thm-the-next-page-is-the-homology-of-the-current-page
  - def-pullback-of-a-differential-form
  - prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges
  - cor-pullback-carries-closed-forms-to-closed-forms-and-exact-forms-to-exact-forms
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - def-de-rham-cohomology
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christian Schnell, Complex Manifolds, MAT 545 (Stony Brook, Fall 2024), Class 18 'The Hodge decomposition' (October 31), 6 pp.; Corollaries 18.1-18.4, Theorem 18.5 (18.6), Corollary 18.7, Proposition 18.12 (∂∂̄-lemma), cohomological Lefschetz decomposition"
      url: "https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf"
    - title: "Pierre Deligne, Théorie de Hodge II, Publ. Math. IHES 40 (1971) 5-57; (2.1.10)-(2.1.17) printed pp. 26-27 (Hodge structures, Tate twist, orientations, polarizations), (2.2.1) printed p. 27 (spectral sequence of a compact Kähler manifold), Lemma (4.2.3) printed p. 44"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter VI (Hodge Theory), §5.1-§5.3 and §6.1, printed pp. 300-306; (5.1)-(5.17) operators of Hermitian geometry, primitive elements and hard Lefschetz; (6.3)-(6.7) Kähler commutation identities"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Statement

Assume AC. For a compact Kähler manifold $X$ in the sense of
[[def-compact-kahler-manifold-and-hodge-polarization-conventions]], every de
Rham class has a unique smooth harmonic representative and
$$H^k(X;\mathbb C)=\bigoplus_{p+q=k}H^{p,q}(X),\qquad \overline{H^{p,q}(X)}=H^{q,p}(X).$$
Here $H^{p,q}(X)$ is precisely the set of classes with a $d$-closed smooth
representative of type $(p,q)$, so the decomposition is independent of the
Kähler metric. Writing $\Omega_X^p$ for the sheaf of holomorphic $p$-forms (the
kernel of $\bar\partial$ on the sheaf $\mathcal A^{p,0}$ of smooth $(p,0)$-forms),
$H^{p,q}(X)$ is isomorphic to $H^q(X,\Omega_X^p)$, the sheaf cohomology of
[[def-sheaf-cohomology-derived-global-sections]]. The Hodge filtration
$F^a=\bigoplus_{p\ge a}H^{p,k-p}$ of $H^k(X;\mathbb C)$ equals the filtration
induced by the holomorphic-degree filtration of the de Rham complex, whose
spectral sequence has $E_1^{p,q}=H^q(X,\Omega_X^p)$ and degenerates at $E_1$.
Pullback by holomorphic maps of compact Kähler manifolds and cup product
preserve Hodge type, so $H^k(X;\mathbb Q)$ is a functorial rational pure Hodge
structure.

## Facts & Assumptions

**Given:** The Axiom of Choice; a compact Kähler manifold $X$ of complex dimension $n$ with the conventions of [[def-compact-kahler-manifold-and-hodge-polarization-conventions]], with its Kähler metric and the induced Riemannian structure.

[F1] Complex-valued forms, the bidegree decomposition, $d=\partial+\bar\partial$, the integral inner product, the formal adjoints $\partial^*,\bar\partial^*,d^*$ and the Laplacians $\Delta_d,\Delta_\partial,\Delta_{\bar\partial}$ with $\Delta_d=dd^*+d^*d$ are as in [[def-compact-kahler-manifold-and-hodge-polarization-conventions]]; a complex manifold of positive dimension is boundaryless, and the definitions of a second-order operator of Laplace type, of its principal symbol $\sigma_2$ and of formal symmetry are those of [[def-second-order-laplace-type-operators-on-vector-bundles]]; formal adjoints of order-$\le2$ operators exist uniquely and satisfy $(P^*)^*=P$ ([[lem-formal-adjoints-of-differential-operators-exist-and-are-unique]]); de Rham cohomology is that of [[def-de-rham-cohomology]].

[F2] The Kähler identities hold: $\Delta_d=2\Delta_\partial=2\Delta_{\bar\partial}$, the mixed anticommutators of $\partial,\bar\partial,\partial^*,\bar\partial^*$ vanish, $\Delta_d$ commutes with $L,\Lambda,\partial,\bar\partial,*$ and preserves each bidegree $\Omega^{p,q}(X)$ ([[lem-kahler-commutators-and-laplacian-type-preservation]]).

[F3] Assume AC. Let $M$ be compact boundaryless smooth of real dimension at least two with a smooth positive density, $E$ a finite-rank complex Hermitian smooth bundle, and $P$ a smooth second-order Laplace-type operator on $E$, formally symmetric with scalar positive-definite principal symbol. Then $\ker P$ is finite-dimensional and smooth, $\Pi$ is the orthogonal projection onto it, $L^2(M,E)=\ker P\oplus^\perp\operatorname{ran}P$, and there is a unique linear $G:L^2\to H^2\cap(\ker P)^\perp$ with $PG=I-\Pi$ on $L^2$, $GP=I-\Pi$ on $H^2$ and $G\Pi=\Pi G=0$, bounded $H^k\to H^{k+2}$ and preserving smooth sections; moreover $H^k=\ker P\oplus P(H^{k+2})$ and $C^\infty=\ker P\oplus P(C^\infty)$ for every $k\ge0$, and $\Pi$ is smoothing ([[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]]). Nonnegativity of the energy $\langle Pu,u\rangle_2$ holds here and gives nonnegative $P$ and $G$.

[F4] The coefficient comparison $H^k(X;\mathbb Q)\otimes_{\mathbb Q}\mathbb C\cong H^k(X;\mathbb C)$ and the identification of singular with real and complex de Rham cohomology are those of [[lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds]]; integration of forms gives a natural isomorphism of unital graded real algebras $H^*_{\mathrm{dR}}(X)\to H^*_{\mathrm{sing}}(X;\mathbb R)$ under which wedge of form classes is the cup product ([[thm-de-rham-theorem]]). Pullback of forms is smooth, functorial, preserves wedge products and carries closed forms to closed forms ([[def-pullback-of-a-differential-form]], [[prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]], [[cor-pullback-carries-closed-forms-to-closed-forms-and-exact-forms-to-exact-forms]]); for a holomorphic map between complex manifolds the local coordinate expression is holomorphic ([[def-complex-manifolds-and-holomorphic-vector-bundles]]).

[F5] Assume AC. On a polydisc $P'\subset\subset P\subseteq\mathbb C^n$ with $n\ge1$, every $\bar\partial$-closed smooth $(p,q)$-form with $1\le q\le n$ is the $\bar\partial$ of a smooth $(p,q-1)$-form on $P'$ ([[thm-dolbeault-lemma-polydisc]]).

[F6] $H^q(X,\mathcal F)$ is the right derived functor of global sections relative to the supplied injective resolution datum, with degree zero the global sections ([[def-sheaf-cohomology-derived-global-sections]]).

[F7] Assume AC. Every sheaf of modules over the sheaf of smooth functions on a smooth manifold is acyclic: all higher cohomology on every open set vanishes ([[thm-smooth-function-module-sheaves-are-acyclic]]); and assume DC. The right derived functors of a left exact functor are computed by any acyclic resolution ([[thm-acyclic-resolution-theorem-for-right-derived-functors]]); AC implies DC ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F8] The spectral sequence of a filtered chain complex with finite filtration on every chain object stabilizes pointwise and naturally abuts to the homology with its image filtration, which is finite, exhaustive and separated ([[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]]), with pages and abutment as in [[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]] and [[def-abutment-to-a-filtered-object]]; each page is the homology of the preceding one, naturally ([[thm-the-next-page-is-the-homology-of-the-current-page]]).

## Proof

1.1 Suppose $n=0$. Then compactness makes $X$ a finite discrete set of points; there are no forms of positive degree, every Laplacian is zero, and every function is smooth, so the de Rham cohomology is $H^0(X;\mathbb C)=\mathbb C^{\pi_0(X)}$ in degree zero and zero above, the harmonic forms are exactly the locally constant functions, and $H^{0,0}(X)=H^0(X;\mathbb C)$ while $H^{p,q}(X)=0$ otherwise, with the statement's conjugation symmetry, uniqueness and metric-independence vacuous. Here $\Omega_X^0$ is the kernel of $\bar\partial$ on smooth functions, i.e. the sheaf $\underline{\mathbb C}_X$ of locally constant functions, and $H^0(X,\underline{\mathbb C}_X)=\Gamma(X,\underline{\mathbb C}_X)=\mathbb C^{\pi_0(X)}$ with $H^q(X,\underline{\mathbb C}_X)=0$ for $q>0$ because $\underline{\mathbb C}_X$ is a sheaf of modules over the sheaf of smooth functions [F6, F7]; the holomorphic-degree filtration is concentrated in degree zero, so it induces the trivial filtration and the spectral sequence degenerates at $E_1$ with $E_1^{p,q}=H^q(X,\Omega_X^p)$ [F8]. Hence assume $n\ge1$ from now on, so the real dimension of $X$ is $2n\ge2$. [F1, F6, F7, F8, given, algebra]

1.2 For each degree $k$ let $E$ be the complex Hermitian bundle of complex-valued $k$-forms and $P=\Delta_d=dd^*+d^*d$, whose bundles we are given by [F1]. In local coordinates $d$ has leading symbol $i\varepsilon(\xi)$, exterior multiplication by $\xi$, and $d^*$ has leading symbol $-i\lrcorner_\xi$, contraction against $\xi$; since $\varepsilon(\xi)\lrcorner_\xi+\lrcorner_\xi\varepsilon(\xi)=|\xi|^2\mathrm{id}$, the principal symbol of $\Delta_d$ is $\sigma_2(\Delta_d)(x,\xi)=|\xi|^2\mathrm{id}$, a scalar positive-definite quadratic form, so $\Delta_d$ is Laplace type; moreover $\langle\Delta_du,u\rangle=\langle d^*u,d^*u\rangle+\langle du,du\rangle=\|du\|^2+\|d^*u\|^2$ for smooth $u$ by the defining adjoint property of $d^*$ [F1], so the energy is nonnegative, and the same computation read backwards gives $\langle\Delta_du,v\rangle=\langle u,\Delta_dv\rangle$, so $\Delta_d$ is formally symmetric. The bounds and elliptic hypotheses of [F3] are therefore met on the compact boundaryless manifold $X$ of real dimension $2n\ge2$; let $\mathcal H^k=\ker(\Delta_d)$ on $k$-forms, $\Pi_k$ its orthogonal projection and $G_k$ the Green operator. For a smooth $d$-closed $k$-form $u$ one has $u=\Pi_ku+\Delta_dG_ku$; since $\Delta_d$ commutes with $d$ [F2], $\Delta_d(dG_ku)=d(\Delta_dG_ku)=d(u-\Pi_ku)=0$, so $dG_ku$ is harmonic, and it is exact, so $\|dG_ku\|^2=\langle G_ku,d^*(dG_ku)\rangle=0$ because a harmonic form has vanishing adjoint by the energy identity above; hence $dG_ku=0$ and $u=\Pi_ku+dd^*G_ku$. Thus every de Rham class has the smooth harmonic representative $\Pi_ku$, and it is unique: if $h$ is harmonic and $h=d\beta$ for a smooth $\beta$, then $\|h\|^2=\langle\beta,d^*h\rangle=0$, so $h=0$. [F1, F2, F3, given, algebra]

2.1 By [F2] $\Delta_d=2\Delta_{\bar\partial}$ and $\Delta_d$ preserves each bidegree, so $\mathcal H^k=\bigoplus_{p+q=k}\mathcal H^{p,q}$ with $\mathcal H^{p,q}=\ker(\Delta_d)\cap\Omega^{p,q}(X)$, an orthogonal sum for the pointwise metric; hence $\Pi_k$ preserves each bidegree. The Green operator $G_k$ does too: if $u$ has pure type, decompose the smooth form $G_ku$ into types. Each component orthogonal to $\mathcal H^k$ solves the corresponding component of $\Delta_dG_ku=u-\Pi_ku$; all other-type components solve the homogeneous equation and are therefore both harmonic and orthogonal to the harmonic space, hence zero. Define $H^{p,q}(X)$ as the image in $H^{p+q}(X;\mathbb C)$ of the $d$-closed forms of type $(p,q)$. A class in $H^{p,q}(X)$ has harmonic representative $\Pi_{p+q}\alpha$ of type $(p,q)$ by bidegree preservation, and conversely a class whose harmonic representative has type $(p,q)$ lies in $H^{p,q}(X)$; since the harmonic representative is unique and additive, $H^k(X;\mathbb C)=\bigoplus_{p+q=k}H^{p,q}(X)$ with $H^{p,q}(X)\cong\mathcal H^{p,q}$ via $h\mapsto[h]$. Complex conjugation of complex-valued forms is the conjugate-linear involution induced by the real forms [F1]; it commutes with $d$ and $d^*$, which have real coefficients, hence with $\Delta_d$, and it exchanges $dz_j$ with $d\bar z_j$, hence $\Omega^{p,q}(X)$ with $\Omega^{q,p}(X)$ and $\mathcal H^{p,q}$ with $\mathcal H^{q,p}$; therefore $\overline{H^{p,q}(X)}=H^{q,p}(X)$. Finally $H^{p,q}(X)$ is defined by a closed representative of type $(p,q)$ alone, so it does not depend on the Kähler metric, and the decomposition just proved for one Kähler metric is a decomposition into these metric-free subspaces. [F1, F2, step 1.2, given, algebra]

3.1 Let $f:X\to Y$ be a holomorphic map of compact Kähler manifolds. Pullback of forms is functorial, preserves wedge products and commutes with $d$ [F4], and in holomorphic coordinates $f^*(dz_j)$ and $f^*(d\bar z_j)$ are holomorphic respectively conjugate-holomorphic linear combinations of $dz_k,d\bar z_k$ [F4]; hence $f^*\Omega^{p,q}(Y)\subseteq\Omega^{p,q}(X)$ and $f^*$ carries $d$-closed $(p,q)$-forms to $d$-closed $(p,q)$-forms. Therefore $f^*H^{p,q}(Y)\subseteq H^{p,q}(X)$, so pullback preserves Hodge type; by the naturality in [F4] it is a morphism of the rational structures. For classes $a\in H^{p,q}(X)$, $b\in H^{r,s}(X)$ represented by $d$-closed forms $\alpha,\beta$, the form $\alpha\wedge\beta$ is $d$-closed of type $(p+r,q+s)$ because $d$ is a graded derivation and $\partial,\bar\partial$ have bidegrees $(1,0)$ and $(0,1)$ [F1], and it represents the cup product $a\smile b$ under the de Rham isomorphism [F4]; hence cup product preserves Hodge type. With $V=H^k(X;\mathbb Q)$ finite-dimensional and $V_{\mathbb C}\cong H^k(X;\mathbb C)$ as in [F4], the decomposition $V_{\mathbb C}=\bigoplus_{p+q=k}H^{p,q}(X)$ with conjugation symmetry of step 2.1 and the functoriality just proved make $H^k(X;\mathbb Q)$ a functorial rational pure Hodge structure in the sense of [F1]. [F1, F4, step 2.1, given, algebra]

3.2 Define the sheaves $\mathcal A^{p,q}$ of smooth $(p,q)$-forms on $X$ and $\Omega_X^p=\ker(\bar\partial:\mathcal A^{p,0}\to\mathcal A^{p,1})$; the sections of $\Omega_X^p$ over an open set are exactly the holomorphic $p$-forms, since $\bar\partial f=0$ is the Cauchy-Riemann condition on the coefficients in degree zero. At each point, the polydisc lemma [F5] provides, for $q\ge1$, a local primitive of every $\bar\partial$-closed $(p,q)$-form on a smaller polydisc, so the stalk sequence $0\to\Omega_X^p\to\mathcal A^{p,0}\xrightarrow{\bar\partial}\mathcal A^{p,1}\xrightarrow{\bar\partial}\cdots\xrightarrow{\bar\partial}\mathcal A^{p,n}\to0$ is exact: exactness at $\mathcal A^{p,0}$ holds by the definition of $\Omega_X^p$, and exactness at $\mathcal A^{p,q}$ for $1\le q\le n$ is exactly the local solvability supplied by [F5]. Each $\mathcal A^{p,q}$ is a sheaf of modules over the sheaf of smooth functions (real-valued functions acting by multiplication), and its global sections are the smooth $(p,q)$-forms, so it is acyclic for global sections by [F7], and the acyclic resolution theorem [F7], whose DC hypothesis follows from AC [F7], therefore identifies $H^q(X,\Omega_X^p)$ [F6] with the cohomology of the deleted complex of global sections $\Omega^{p,0}(X)\xrightarrow{\bar\partial}\Omega^{p,1}(X)\xrightarrow{\bar\partial}\cdots$, i.e. with the global Dolbeault cohomology $H^{p,q}_{\bar\partial}(X)=\ker\bar\partial/\operatorname{im}\bar\partial$ in degree $q$. For a $\bar\partial$-closed smooth $(p,q)$-form $\alpha$ the identity $\alpha=\Pi\alpha+2\Delta_{\bar\partial}G\alpha$ holds because $\Delta_d=2\Delta_{\bar\partial}$ [F2]; here $\bar\partial(\Delta_dG\alpha)=\Delta_d(\bar\partial G\alpha)$ by [F2] and equals $\bar\partial(\alpha-\Pi\alpha)=0$, so $\bar\partial G\alpha$ is harmonic, and for any harmonic $v$, $0=\langle\Delta_dv,v\rangle=2(\|\bar\partial v\|^2+\|\bar\partial^*v\|^2)$ by [F2] and adjunction. Thus $\bar\partial^*\bar\partial G\alpha=0$; hence $\alpha=\Pi\alpha+2\bar\partial(\bar\partial^*G\alpha)$ with $\Pi\alpha$ harmonic of type $(p,q)$ by step 2.1, and every Dolbeault class has the harmonic representative $\Pi\alpha$, unique because a harmonic form that is $\bar\partial$-exact has zero norm. Therefore $H^q(X,\Omega_X^p)\cong\mathcal H^{p,q}\cong H^{p,q}(X)$ by steps 1.2 and 2.1. [F2, F5, F6, F7, step 1.2, step 2.1, given, algebra]

4.1 Filter the de Rham complex by holomorphic degree, $F^a\Omega^k(X;\mathbb C)=\bigoplus_{r\ge a}\Omega^{r,k-r}(X)$; both $\partial$ and $\bar\partial$ map $F^a$ into $F^a$ by their bidegrees [F1], so the filtration is compatible with $d$ and finite on each degree ($F^a=0$ for $a>k$, $F^a=\Omega^k$ for $a\le0$). Reindex to the homology convention of [F8] by setting $C_m=\Omega^{-m}(X;\mathbb C)$ and the increasing filtration $G_pC_m=F^{-p}\Omega^{-m}(X;\mathbb C)$; [F8] then supplies a spectral sequence with pages $\tilde E^r_{p,q}$ and differentials $\tilde d^r:\tilde E^r_{p,q}\to\tilde E^r_{p-r,q+r-1}$, stabilizing pointwise and abutting to $H_m(C_\bullet)=H^{-m}(X;\mathbb C)$ with the image filtration. Writing $E_r^{a,q}=\tilde E^r_{-a,-q}$ for the cohomological indexing, we get $E_1^{a,q}=H^{a+q}(F^a/F^{a+1})=H^q(\Omega^{a,\bullet},\bar\partial)=H^{a,q}_{\bar\partial}(X)\cong H^{a,q}(X)$ by step 3.2, and $d_r:E_r^{a,q}\to E_r^{a+r,q-r+1}$ is induced by $d$. Each $E_1^{a,q}$ is finite-dimensional by steps 2.1 and 3.2. For a class in $E_1^{a,q}$ represented by the harmonic form $h$ of step 3.2, $dh=\partial h+\bar\partial h=0$ with $\bar\partial h=0$ gives $\partial h=0$, so $d_1=0$. By [F8] each page is naturally the homology of the preceding one, so $E_r$ is a subquotient of $E_1$ and the dimensions are non-increasing in $r$; explicitly $\dim E_{r+1}^{a,q}=\dim E_r^{a,q}-\operatorname{rank}(d_r^{a,q})-\operatorname{rank}(d_r^{a-r,q+r-1})$. The abutment identifies $\operatorname{gr}^aH^k(X;\mathbb C)\cong E_\infty^{a,k-a}$, so $\sum_{a+q=k}\dim E_\infty^{a,q}=\dim H^k(X;\mathbb C)$, while steps 2.1 and 3.2 give $\sum_{a+q=k}\dim E_1^{a,q}=\sum_{a+q=k}\dim H^{a,q}(X)=\dim H^k(X;\mathbb C)$; since $\dim E_\infty^{a,q}\le\dim E_1^{a,q}$ for every $(a,q)$, the diagonal sums being equal forces $\dim E_\infty^{a,q}=\dim E_1^{a,q}$ termwise, hence every rank vanishes and $d_r=0$ for all $r\ge1$ with $E_\infty=E_1$, whence $\operatorname{gr}^aH^k(X;\mathbb C)\cong H^{a,k-a}(X)$ and the spectral sequence degenerates at $E_1$ with $E_1^{a,q}=H^q(X,\Omega_X^a)$. Finally the image filtration is $F^aH^k(X;\mathbb C)=\operatorname{im}\bigl(H^k(F^a\Omega^\bullet)\to H^k(X;\mathbb C)\bigr)$ [F8], which is the set of classes with a $d$-closed representative in $\bigoplus_{r\ge a}\Omega^{r,k-r}(X)$; it contains $\bigoplus_{r\ge a}H^{r,k-r}(X)$ because such a class has a closed representative of pure type, and its successive graded quotients are $\operatorname{gr}^rH^k\cong H^{r,k-r}(X)$, so the finite filtrations have equal dimensions and $F^aH^k(X;\mathbb C)=\bigoplus_{r\ge a}H^{r,k-r}(X)$, as asserted. [F1, F8, step 3.2, step 2.1, given, algebra] ∎
