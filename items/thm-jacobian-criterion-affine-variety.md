---
id: thm-jacobian-criterion-affine-variety
kind: theorem
title: "Jacobian rank detects regularity at closed points"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - cor-algebraic-extensions-of-perfect-fields-are-separable
  - def-axiom-of-choice
  - def-classical-affine-coordinate-ring
  - def-dimension-classical-variety
  - def-regular-local-ring-geometric-point
  - def-zariski-tangent-space-point
  - lem-ag-differentials-localization-base-change
  - lem-ag-polynomial-quotient-differentials
  - lem-ag-separable-residue-cotangent-sequence
  - lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct
  - lem-local-dimension-reduced-variety-components
  - lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite
  - thm-localisation-of-modules-is-tensor-product
  - thm-right-exactness-of-tensor-products
  - thm-zariski-tangent-space-jacobian-kernel
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, §4d, Definition 4.23 and Jacobian-rank discussion (printed pp. 87–88; PDF pp. 86–87), and §4i, Corollary 4.45 (printed p. 97)"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
    - title: "J. S. Milne, Algebraic Geometry Chapter 10 supplement, §f, items 10.58 and 10.60–10.64"
      url: https://www.jmilne.org/math/CourseNotes/AG10.pdf
    - title: "The Stacks Project, Algebra Lemma 10.140.4 (tag 00TU), separable-residue cotangent injection"
      url: https://stacks.math.columbia.edu/tag/00TU
    - title: "The Stacks Project, Algebra Lemma 10.140.5 (tag 00TV), regularity and smoothness with separable residue field"
      url: https://stacks.math.columbia.edu/tag/00TV
---

## Statement

Let $k$ be a field, let $n\geq 0$ be finite, put $P=k[t_1,\ldots,t_n]$, and let
$A=P/I$ with a specified finite generating list $I=(f_1,\ldots,f_r)$ for the
actual ideal defining the affine scheme. For a maximal ideal $\mathfrak m\subset
A$, write $L=A/\mathfrak m$. Let $J(\mathfrak m)$ be the $r\times n$ matrix over
$L$ obtained by mapping the formal partial derivatives $\partial f_i/\partial
t_j$ through $P\to A\to L$.

If $k$ is perfect, then $L/k$ is finite separable and
$$
\operatorname{rank}_L J(\mathfrak m)=n-\dim A_{\mathfrak m}
$$
if and only if $A_{\mathfrak m}$ is a regular local ring. For any field $k$,
the same equivalence holds at a $k$-rational point, where $L=k$, without a
perfectness assumption. If $I=I(X)$ for a reduced classical affine algebraic
set $X$ over an algebraically closed field and $\mathfrak m$ corresponds to a
closed point $x$, then, assuming AC,
$$
\dim A_{\mathfrak m}=\dim_xX=\max_{x\in X_i}\dim X_i,
$$
where $X_i$ ranges over the irreducible components through $x$. The finite
generating list need not be minimal, and $I$ need not be radical in the first
two assertions.

## Facts & Assumptions

**Given:** A field $k$, a finite $n$, the polynomial ring $P=k[t_1,\ldots,t_n]$,
an ideal $I\subseteq P$ with a specified finite generating list
$f_1,\ldots,f_r$, the quotient $A=P/I$, and a maximal ideal
$\mathfrak m\subset A$ with residue field $L=A/\mathfrak m$. For the rational
case, $L=k$. For the classical dimension clause, $k$ is algebraically closed,
$I=I(X)$ for a reduced classical affine algebraic set $X$, and AC is assumed.

[F1] [[lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct]]: every finite-variable polynomial ring over a field is Noetherian, so its quotients and localizations are Noetherian.

[F2] [[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]]: if $A$ is a finite-type $k$-algebra and $\mathfrak m$ is maximal, then $A/\mathfrak m$ is finite over $k$.

[F3] [[cor-algebraic-extensions-of-perfect-fields-are-separable]]: every algebraic extension of a perfect field is separable.

[F4] [[lem-ag-separable-residue-cotangent-sequence]]: for a Noetherian local $k$-algebra with finite separable residue field $L$, the map $\mathfrak n/\mathfrak n^2\to\Omega_{R/k}\otimes_R L$ is an isomorphism, where $\mathfrak n$ is the maximal ideal of $R$.

[F5] [[lem-ag-differentials-localization-base-change]]: localization of the source algebra localizes its module of Kähler differentials, so $\Omega_{A_{\mathfrak m}/k}\cong (\Omega_{A/k})_{\mathfrak m}$.

[F6] [[thm-localisation-of-modules-is-tensor-product]]: for a multiplicative set $S$, $S^{-1}M\cong S^{-1}A\otimes_A M$; after tensoring with the residue field of $A_{\mathfrak m}$ this identifies $(\Omega_{A/k})_{\mathfrak m}\otimes_{A_{\mathfrak m}}L$ with $\Omega_{A/k}\otimes_A L$.

[F7] [[lem-ag-polynomial-quotient-differentials]]: if $A=P/I$ and $I=(f_1,\ldots,f_r)$, then $\Omega_{A/k}$ is the cokernel of the map $A^r\to A^n$ whose columns are the formal derivative vectors of the $f_i$.

[F8] [[thm-right-exactness-of-tensor-products]]: tensoring a cokernel presentation with $L$ gives the cokernel of the base-changed map.

[F9] [[def-zariski-tangent-space-point]]: at a point with residue field $L$, $T_xX=\operatorname{Hom}_L(\mathfrak m_x/\mathfrak m_x^2,L)$.

[F10] [[def-regular-local-ring-geometric-point]]: for a locally Noetherian scheme, $x$ is regular exactly when $\dim_{\kappa(x)}T_xX=\dim\mathcal O_{X,x}$.

[F11] [[thm-zariski-tangent-space-jacobian-kernel]]: at a rational point of the affine scheme defined by the actual ideal $I$, the coordinate-velocity tangent space is canonically $\ker J(a)$.

[F12] [[def-classical-affine-coordinate-ring]]: the coordinate ring of an affine algebraic set $X\subseteq k^n$ is $k[X]=k[t_1,\ldots,t_n]/I(X)$.

[F13] [[lem-local-dimension-reduced-variety-components]]: for a reduced classical finite-type variety and closed point $x$, $\dim\mathcal O_{X,x}=\max_{x\in X_i}\dim X_i$.

[F14] [[def-dimension-classical-variety]]: at a closed point, $\dim_xX=\max_{x\in X_i}\dim X_i$ over the components containing $x$.

[F15] [[def-axiom-of-choice]]: AC asserts that every family of nonempty sets has a choice function; only the classical component-dimension clause below uses it, through [F13] and the convention in [F14].

## Proof

**Proof technique:** direct.

1.1 Since $A$ is a quotient of the finite-variable polynomial ring $P$, [F1] makes $A_{\mathfrak m}$ a Noetherian local ring. The algebra $A$ is finite type over $k$, so [F2] makes $L/k$ finite. If $k$ is perfect, [F3] then makes $L/k$ separable; this verifies the residue-field hypothesis in [F4] without assuming that $\mathfrak m$ is rational. [F1, F2, F3, F4, given]

1.2 Now let $k$ be any field and let $\mathfrak m$ be $k$-rational. By [F11], $T_x(\operatorname{Spec}A)\cong\ker J(\mathfrak m)$, so rank-nullity gives $\dim_kT_x(\operatorname{Spec}A)=n-\operatorname{rank}_kJ(\mathfrak m)$. Applying [F10] proves the same equivalence without a perfectness assumption. This argument uses the rational-point theorem only in the case $L=k$. [F9, F10, F11, algebra]

1.3 In the reduced classical case, [F12] identifies $A$ with the coordinate ring $k[X]$. Under the stated AC assumption, [F13] gives $\dim A_{\mathfrak m}=\max_{x\in X_i}\dim X_i$, and [F14] identifies this maximum with $\dim_xX$. This is the claimed classical dimension formula; AC enters this clause through the local-dimension lemma [F13] and the fixed-field convention in [F14]. [F12, F13, F14, F15, given]

2.1 In the perfect-field case put $R=A_{\mathfrak m}$ and $\mathfrak n=\mathfrak mR$. By [F4], $\mathfrak n/\mathfrak n^2\cong\Omega_{R/k}\otimes_RL$. Applying [F5] and then [F6] identifies this with $\Omega_{A/k}\otimes_AL$. [F4, F5, F6, step 1.1]

3.1 By [F7], $\Omega_{A/k}$ is the cokernel of $A^r\to A^n$ represented by the derivative vectors of $f_1,\ldots,f_r$. Right exactness [F8] identifies $\Omega_{A/k}\otimes_AL$ with the cokernel of $L^r\to L^n$ represented by those same vectors after mapping their entries to $L$. This is the transpose presentation of the equation-row matrix $J(\mathfrak m)$, so the map has rank $\operatorname{rank}_LJ(\mathfrak m)$. Hence $\dim_L(\mathfrak n/\mathfrak n^2)=n-\operatorname{rank}_LJ(\mathfrak m)$. Since this cokernel is finite-dimensional, [F9] gives $\dim_LT_x(\operatorname{Spec}A)=n-\operatorname{rank}_LJ(\mathfrak m)$. [F7, F8, F9, step 2.1, algebra]

4.1 The local-ring definition [F10] says $A_{\mathfrak m}$ is regular exactly when its tangent dimension equals $\dim A_{\mathfrak m}$. Substituting the dimension computed in step 3.1 gives $A_{\mathfrak m}$ regular iff $n-\operatorname{rank}_LJ(\mathfrak m)=\dim A_{\mathfrak m}$, equivalently iff $\operatorname{rank}_LJ(\mathfrak m)=n-\dim A_{\mathfrak m}$. This proves both directions for every closed point over a perfect field. [F10, step 3.1, algebra]

5.1 The degenerate cases fit the same calculations. If $I=P$, then $A=0$ has no maximal ideal and the pointwise assertions are vacuous. If $n=0$ and a maximal ideal exists, then $A=k$, $\mathfrak m=0$, the local ring is a field of dimension zero, and the empty-column Jacobian has rank zero; if $r=0$, the map $L^0\to L^n$ has rank zero and the cokernel calculation in step 3.1 still applies. For one equation in one variable, $A=k[t]/(t)$ at $(t)$ has local ring $k$, Jacobian $[1]$, and rank $1=n-0$, so it is regular. In contrast, $A=k[t]/(t^2)$ at $(t)$ has a unique prime $(t)$, local dimension zero, one-dimensional cotangent space $(t)/(t^2)$, and Jacobian entry $2t=0$ in the residue field (including characteristic two); it is not regular and its rank $0$ does not equal $n-\dim A_{(t)}=1$. The equivalence in steps 1.2 and 4.1 handles both iff directions. At local dimension zero the regularity equality requires full Jacobian rank; when tangent dimension is the ambient dimension $n$, it requires rank zero. No separate dimension-range assertion is used. No minimality of the generator list or reducedness of $I$ entered [F7], and the cokernel's dimension is independent of the chosen list. The general-field rational proof and the perfect-field proof use no choice or DC; AC enters only the classical clause through [F13] and [F14]. [F7, F9, F10, F13, F14, F15, step 1.2, step 1.3, step 3.1, step 4.1, algebra] ∎

## Source qualification

Milne, *Algebraic Geometry* v6.10, §4d, Definition 4.23 and the Jacobian tangent-rank discussion (printed pp. 87–88 / PDF pp. 86–87; web lines 4636–4672), computes $\dim T_aX=n-\operatorname{rank}J(a)$ and gives the classical nonsingularity criterion for algebraic sets over an algebraically closed field. §4i, Corollary 4.45 (printed p. 97 / PDF p. 96; web lines 5224–5229), identifies nonsingularity with regularity under its classical variety conventions. Those passages do not establish the arbitrary scheme-ideal or nonrational perfect-field clauses here. Milne, *Algebraic Geometry, Chapter 10 supplement*, §f, 10.58 and 10.60–10.64 (web lines 892–985), gives the cotangent-dimension/regularity comparison, rational-point tangent description, Jacobian-minor construction, and regularity/smoothness comparison in the stated classical settings; in particular 10.62 is for an irreducible closed subscheme and does not prove the arbitrary quotient statement here. The proof above instead uses the complete separable-residue cotangent sequence, differential localization, polynomial-quotient differential presentation, and tensor right exactness recorded in [F4]–[F8]. Stacks Lemma 10.140.4 (tag 00TU), full statement and proof, proves the separable-residue injection by constructing a section modulo $\mathfrak m^2$ after lifting a separating transcendence basis and correcting a lift using the derivative of its separable minimal polynomial. Stacks Lemma 10.140.5 (tag 00TV), full statement and proof, corroborates the regularity comparison for finite-type algebras with separable residue field but is not used as a logical input here.
