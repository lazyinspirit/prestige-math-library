---
id: lem-qftx-compact-torus-fixed-locus-normal-weights
kind: lemma
title: Fixed loci and normal weights of compact torus actions
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 0
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-countable-choice
  - def-smooth-left-action-of-a-lie-group
  - def-the-one-dimensional-torus-and-normalized-haar-integral
  - def-riemannian-metric-and-riemannian-manifold
  - thm-every-smooth-manifold-admits-a-riemannian-metric
  - thm-differentiation-under-the-integral-sign-on-a-compact-rectangle
  - thm-compactness-under-continuous-maps
  - thm-existence-uniqueness-and-smooth-dependence-of-geodesics
  - lem-local-isometries-send-geodesics-to-geodesics
  - thm-smooth-inverse-function-theorem-on-manifolds
dependency_roles:
  def-countable-choice: mathematical-premise
  def-smooth-left-action-of-a-lie-group: mathematical-premise
  def-the-one-dimensional-torus-and-normalized-haar-integral: mathematical-premise
  def-riemannian-metric-and-riemannian-manifold: mathematical-premise
  thm-every-smooth-manifold-admits-a-riemannian-metric: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  thm-compactness-under-continuous-maps: mathematical-premise
  thm-existence-uniqueness-and-smooth-dependence-of-geodesics: mathematical-premise
  lem-local-isometries-send-geodesics-to-geodesics: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
justified_by: []
axiom_strength: ZF + AC_omega
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: M. F. Atiyah and R. Bott, The Moment Map and Equivariant Cohomology
      url: https://www.math.stonybrook.edu/~mmovshev/MAT570Spring2008/BOOKS/atiyahbott_moment.pdf
      locator: Section 3, fixed-point and normal-representation discussion, printed pp. 7–9.
    - title: Shubham Dwivedi, Jonathan Herman, Lisa C. Jeffrey, and Theo van den Hurk, Hamiltonian Group Actions and Equivariant Cohomology
      url: https://www.math.toronto.edu/~jeffrey/mat1312/symplecbookpub.pdf
      locator: Section 9.9, Example 9.48, PDF pp. 85–86.
landmark: false
---

## Statement

Assume countable choice. Let $r\geq 0$, let $T=(\mathbb R/\mathbb Z)^r$ with its product Lie-group structure, and let $M$ be a compact, finite-dimensional, Hausdorff, second-countable smooth manifold without boundary. Let $a:T\times M\to M$ be a jointly smooth left action. Then $M$ admits a smooth Riemannian metric invariant under $a$. Its fixed set
$$
F=M^T:=\{p\in M:a(t,p)=p\text{ for every }t\in T\}
$$
is a compact embedded smooth submanifold with finitely many connected components, and $T_pF=(T_pM)^T$ for each $p\in F$. The orthogonal normal bundle $\nu_F=(TF)^\perp\subset TM|_F$ has no nonzero $T$-fixed vectors in any fiber. On each connected component of $F$, its normal representation has a finite weight decomposition into nontrivial characters of $T$, with constant multiplicities; equivalently, $\nu_F$ admits a smooth $T$-invariant complex structure and orientation on each component.

## Statement references

[Fixed set as a submanifold and nontrivial normal weights] [Atiyah–Bott, Section 3, printed pp. 7–9](https://www.math.stonybrook.edu/~mmovshev/MAT570Spring2008/BOOKS/atiyahbott_moment.pdf)

[Fixed component and equivariant normal weights] [Dwivedi et al., Section 9.9, Example 9.48, PDF pp. 85–86](https://www.math.toronto.edu/~jeffrey/mat1312/symplecbookpub.pdf)

## Facts & Assumptions

**Given:** Countable choice, $T=(\mathbb R/\mathbb Z)^r$, the compact smooth manifold $M$, and the jointly smooth left action $a$.

[A1] Countable choice is the principle that every sequence of nonempty sets has a choice function. It supplies the Riemannian metric and geodesic suppliers used below. [[def-countable-choice]]

[F1] A smooth left action is a jointly smooth map satisfying the identity and associativity laws; every fixed group element therefore acts by a diffeomorphism. [[def-smooth-left-action-of-a-lie-group]]

[F2] The product torus is compact and has a normalized translation-invariant probability measure, constructed from Lebesgue measure on a product fundamental cube. [[def-the-one-dimensional-torus-and-normalized-haar-integral]]

[F3] Under countable choice, every smooth manifold admits a smooth positive-definite Riemannian metric. [[thm-every-smooth-manifold-admits-a-riemannian-metric]] The term Riemannian metric means a smooth symmetric covariant two-tensor positive on every nonzero tangent vector. [[def-riemannian-metric-and-riemannian-manifold]]

[F4] A smooth parameter-dependent integrand on a compact rectangle may be differentiated under its Riemann integral; iterating this result gives smooth dependence on finitely many parameters. [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]

[F5] A continuous real-valued function on a nonempty compact space attains a minimum. [[thm-compactness-under-continuous-maps]]

[F6] For a Riemannian metric, geodesics exist uniquely locally and depend smoothly on initial tangent data; their evaluation domain is open. [[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]]

[F7] A local Riemannian isometry sends affinely parametrized geodesics to geodesics. [[lem-local-isometries-send-geodesics-to-geodesics]]

[F8] A smooth map with invertible differential at a point is a diffeomorphism on sufficiently small neighborhoods of that point and its image. [[thm-smooth-inverse-function-theorem-on-manifolds]]

## Proof

**Given:** The data in the statement.

1.1 Choose a smooth Riemannian metric $g_0$ by [F3], let $\mu$ be the normalized Haar probability measure from [F2], and define
$$
g_p(v,w):=\int_T (g_0)_{t^{-1}p}\bigl((d a_{t^{-1}})_p v,(d a_{t^{-1}})_p w\bigr)\,d\mu(t)
$$
for $p\in M$ and $v,w\in T_pM$. [A1, F2, F3, construct]

2.1 In every pair of local tangent-bundle frames the integrand in step 1.1 is smooth in $p$ and the torus coordinates; repeated application of [F4] on $[0,1]^r$ shows that the coefficients of $g$ are smooth. Each integrand is a symmetric bilinear form, and for $v\ne0$ its value on $(v,v)$ is strictly positive because $d a_{t^{-1}}$ is invertible. Its continuous positive value has a positive minimum on compact $T$ by [F5], so the integral is positive and $g$ is a Riemannian metric. For $s\in T$, translation invariance of $\mu$, with the change of variable $t=su$, gives $g_{sp}(d a_s v,d a_s w)=g_p(v,w)$. Thus $g$ is $T$-invariant. [F1, F2, F3, F4, F5, step 1.1, algebra]

3.1 For each $t\in T$, the equalizer $\{p:a(t,p)=p\}$ is closed: if $a(t,p)\ne p$, Hausdorffness gives disjoint neighborhoods of $p$ and $a(t,p)$, and continuity gives a neighborhood of $p$ disjoint from the equalizer. Hence $F$, their intersection, is closed in compact $M$, and is compact. [F1, given, step 2.1]

4.1 Fix $p\in F$. Each $a_t$ is a $g$-isometry fixing $p$; its differential $\rho_p(t)=(d a_t)_p$ is an orthogonal linear action on $T_pM$. The geodesic exponential $\exp_p$ is defined and smooth near zero by [F6], has differential the identity at zero by the initial-velocity definition of a geodesic, and is a local diffeomorphism there by [F8]. Isometries preserve geodesics by [F7], so uniqueness in [F6] gives $a_t(\exp_p v)=\exp_p(\rho_p(t)v)$ wherever both sides are defined. Choose a sufficiently small $\rho_p(T)$-invariant ball about zero on which $\exp_p$ is injective; in its image the fixed set is exactly the image of the linear fixed subspace $(T_pM)^T$. These charts show that $F$ is an embedded submanifold near every $p\in F$ and $T_pF=(T_pM)^T$. Since $F$ is compact, its connected components are finite in number: its components are open in the manifold $F$, so compactness gives a finite subcover by component neighborhoods. [F1, F6, F7, F8, step 2.1, step 3.1]

5.1 The orthogonal complement $\nu_{F,p}=(T_pF)^\perp$ has no fixed vector, since the fixed subspace is precisely $T_pF$ by step 4.1. Complexify $\nu_{F,p}$; the commuting orthogonal transformations $\rho_p(t)$ become commuting unitary transformations, so simultaneous diagonalization decomposes the complexified fiber into character eigenspaces. Every character is nontrivial because the fixed eigenspace has been removed. A self-inverse character of the connected group $T$ has image in $\{1,-1\}$ and is therefore trivial; hence complex conjugation pairs the remaining $\chi$ and $\chi^{-1}$ eigenspaces. Using the fixed lattice identification, retain the character whose first nonzero integer coordinate is positive from each pair; this equips the real normal fiber with a $T$-invariant complex structure and orientation. For a character $\chi$, the operator $P_\chi=\int_T\overline{\chi(t)}\rho_p(t)\,d\mu(t)$ is the orthogonal projection onto its $\chi$-eigenspace: on a $\psi$-eigenvector it acts by the scalar $\int_T\overline{\chi(t)}\psi(t)\,d\mu(t)$. If $\psi=\chi$, this integral is $1$. If $\psi\ne\chi$, then $\theta=\overline\chi\psi$ is a nontrivial character; choose $t_0\in T$ with $\theta(t_0)\ne1$. Translation invariance gives $I=\int_T\theta(t)\,d\mu(t)=\int_T\theta(t_0t)\,d\mu(t)=\theta(t_0)I$, so $I=0$. The character averages are therefore exactly the eigenspace projections. Their coefficients vary smoothly with $p$ by [F4]. Their ranks are integer-valued and continuous, hence locally constant, so they form smooth subbundles. At each $p$, finitely many weight projections have ranks summing to the full fiber dimension; their ranks remain constant on a neighborhood, leaving no dimension for any other weight there. Thus the finite weight list is locally constant, and compactness of $F$ gives a finite cover by such neighborhoods, so only finitely many weights occur globally. [F2, F4, step 2.1, step 4.1, algebra]

6.1 If $r=0$, the action is trivial, $F=M$, and $\nu_F=0$, so the weight assertion is vacuous. If $M$ is empty, all asserted submanifolds and bundles are empty. Otherwise the construction applies componentwise and uses no assumption on connectedness of $M$. [A1, F1, F2, F3, F5, F6, F7, F8, step 3.1, step 5.1] ∎
