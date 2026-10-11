---
id: def-compact-kahler-manifold-and-hodge-polarization-conventions
kind: definition
title: "Compact Kähler and rational Hodge polarization conventions"
status: draft
origin: pipeline
dependency_level: 2
deps:
  - def-bigraded-complex-differential-forms
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - def-riemannian-hodge-star
  - def-smooth-differential-k-form
  - lem-formal-adjoints-of-differential-operators-exist-and-are-unique
  - prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles
  - def-riemannian-metric-and-riemannian-manifold
  - def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Christian Schnell, Complex Manifolds, MAT 545 (Stony Brook, Fall 2024), Class 18 'The Hodge decomposition' (October 31), 6 pp.; Corollaries 18.1-18.4, Theorem 18.5 (18.6), Corollary 18.7, Proposition 18.12 (∂∂̄-lemma), cohomological Lefschetz decomposition"
      url: "https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf"
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter VI (Hodge Theory), §5.1-§5.3 and §6.1, printed pp. 300-306; (5.1)-(5.17) operators of Hermitian geometry, primitive elements and hard Lefschetz; (6.3)-(6.7) Kähler commutation identities"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
    - title: "Pierre Deligne, Théorie de Hodge II, Publ. Math. IHES 40 (1971) 5-57; (2.1.10)-(2.1.17) printed pp. 26-27 (Hodge structures, Tate twist, orientations, polarizations), (2.2.1) printed p. 27 (spectral sequence of a compact Kähler manifold), Lemma (4.2.3) printed p. 44"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"
verification:
  precheck: n/a
---

## Definition

Throughout this page, assume the Axiom of Choice ([[def-axiom-of-choice]]): the
analytic and cohomological suppliers invoked by the results below assume full
AC, and each item records its exact use. The definitional content below uses no
choice.

**(1) Compact Kähler manifolds.** Let $n\ge1$. A **Kähler manifold** is a complex
manifold $X$ of complex dimension $n$
([[def-complex-manifolds-and-holomorphic-vector-bundles]]) with complex structure
$J$ and a **Hermitian metric** $g$ — a Riemannian metric
([[def-riemannian-metric-and-riemannian-manifold]]) satisfying
$g(Jv,Jw)=g(v,w)$ for all tangent vectors $v,w$ — whose **real fundamental form**
$\omega(v,w)=g(Jv,w)$ is

- a smooth real 2-form, the section of $\Lambda^2T^*X$ obtained by alternating
  $g(J\cdot,\cdot)$;
- **positive**: $\omega(v,Jv)=g(Jv,Jv)>0$ for every nonzero tangent vector $v$;
- **closed**: $d\omega=0$.

The manifold is **compact Kähler** when the topological space $X$ is compact.

**Orientation.** For a complex basis $(v_1,\dots,v_n)$ of a tangent space $T_xX$,
the ordered real basis $(v_1,Jv_1,\dots,v_n,Jv_n)$ is declared **positive**. This
is well defined: two complex bases differ by a complex-linear automorphism, whose
real determinant is the square of the modulus of its complex determinant and so
is positive, and the local orientations therefore glue along holomorphic charts
to a global orientation of $X$. Let $v_1,\dots,v_n$ be a $g$-orthonormal complex
frame, so $g(v_j,v_k)=\delta_{jk}$ and $g(v_j,Jv_k)=0$, and let $e_j=g(v_j,\cdot)$ and
$f_j=g(Jv_j,\cdot)$ be the metric-dual covectors. Then
$(e_1,f_1,\dots,e_n,f_n)$ is a positively oriented $g$-orthonormal coframe,
$f_j=-Je_j$ for the pullback action $(J\alpha)(v)=\alpha(Jv)$ of $J$ on
covectors, and

$$\omega=\sum_{j=1}^n e_j\wedge f_j .$$

The **oriented volume form** is the top form

$$dV:=\frac{\omega^n}{n!}=e_1\wedge f_1\wedge\cdots\wedge e_n\wedge f_n ,$$

which evaluates to $1$ on each positively oriented $g$-orthonormal frame.

**Complex dimension zero.** For $n=0$ a complex manifold is a discrete space and
compactness makes it a finite set of points with its unique complex structure;
there are no tangent vectors and no forms of positive degree, $\omega=0$, and the
operators $L,\Lambda,\partial,\bar\partial,d,\partial^*,\bar\partial^*,d^*$ and
all Laplacians introduced below are zero. The Hodge star is the identity on
degree zero, and $dV$ is the counting measure.

**(2) Complex-valued forms and Kähler operators.** Let $X$ be compact Kähler.
Write $\Omega^k(X;\mathbb C)$ for the complex-valued smooth $k$-forms, the
complex-linear extension of the real forms of
[[def-smooth-differential-k-form]]; the Hodge star $*$ of
[[def-riemannian-hodge-star]] extends complex-linearly, and for
$\alpha,\beta\in\Omega^k(X;\mathbb C)$ the **integral inner product**

$$\langle\alpha,\beta\rangle=\int_X\alpha\wedge*\bar\beta$$

is complex-linear in the first variable and conjugate-linear in the second; the
integral is that of
[[def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold]] and
the integrand is $\lvert\alpha\rvert^2\,dV$ when $\beta=\alpha$, so the pairing
is a positive definite Hermitian form. In holomorphic charts

$$\Omega^k(X;\mathbb C)=\bigoplus_{p+q=k}\Omega^{p,q}(X),\qquad d=\partial+\bar\partial ,$$

with $\partial$ and $\bar\partial$ of bidegree $(1,0)$ and $(0,1)$
([[def-bigraded-complex-differential-forms]]); the decomposition is independent
of the holomorphic chart because holomorphic chart changes preserve bidegree.

Put $L=\omega\wedge$, so that $L:\Omega^k(X;\mathbb C)\to\Omega^{k+2}(X;\mathbb C)$,
and let $\Lambda,\partial^*,\bar\partial^*,d^*$ be the formal adjoints of
$L,\partial,\bar\partial,d$ with respect to $\langle\,,\rangle$; existence and
uniqueness are supplied by
[[lem-formal-adjoints-of-differential-operators-exist-and-are-unique]], applied
to the bundle of complex-valued forms with the metric of
[[prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles]]
and the density $dV$. The **Laplacians** are

$$\Delta_d=dd^*+d^*d,\qquad \Delta_\partial=\partial\partial^*+\partial^*\partial,\qquad \Delta_{\bar\partial}=\bar\partial\bar\partial^*+\bar\partial^*\bar\partial ,$$

and $\epsilon(k)=(-1)^{k(k-1)/2}$.

**(3) Rational pure Hodge structures.** Let $k\in\mathbb Z$. A **rational pure
Hodge structure of weight $k$** is a finite-dimensional $\mathbb Q$-vector space
$V$ together with a direct-sum decomposition by $\mathbb C$-subspaces

$$V_{\mathbb C}=V\otimes_{\mathbb Q}\mathbb C=\bigoplus_{p+q=k}V^{p,q},\qquad \overline{V^{p,q}}=V^{q,p},$$

where conjugation is the $\mathbb C$-antilinear involution
$v\otimes\lambda\mapsto v\otimes\bar\lambda$. The sum is finite because
$V_{\mathbb C}$ is finite dimensional, and it is direct by definition. The **Weil
operator** $C$ is the $\mathbb C$-linear endomorphism of $V_{\mathbb C}$ acting
as $i^{p-q}$ on $V^{p,q}$; the conjugation symmetry makes $C$ commute with
conjugation, so $C$ is the complexification of a real-linear endomorphism
of $V_{\mathbb R}=V\otimes_{\mathbb Q}\mathbb R$. It need not preserve $V$.

A **polarization** of such a Hodge structure is a nondegenerate $\mathbb Q$-bilinear
form $Q:V\times V\to\mathbb Q$, extended $\mathbb C$-bilinearly to $V_{\mathbb C}$,
such that

- $Q(y,x)=(-1)^kQ(x,y)$ for all $x,y$;
- $Q(V^{p,q},V^{a,b})=0$ unless $(a,b)=(q,p)$;
- $h(x,y)=Q(Cx,\bar y)$ is a positive definite Hermitian form on $V_{\mathbb C}$.

A **rational sub-Hodge structure** is a $\mathbb Q$-subspace
$U\subseteq V$ with $U_{\mathbb C}=\bigoplus_{p+q=k}(U_{\mathbb C}\cap V^{p,q})$.
The **Tate shift** $V(-r)$, for $r\in\mathbb Z$, keeps the underlying $\mathbb Q$-vector
space, the Weil operator and $Q$ as they are and moves the bidegrees to
$(p+r,q+r)$, so that the weight becomes $k+2r$; equivalently, $(V(-r))^{p,q}=V^{p-r,q-r}$.

## Remarks

The orientation convention is exactly Deligne's $\mathrm{or}_i(X)$ for the choice
of square root of $-1$ implicit in $J$; replacing $i$ by $-i$ reverses the
orientation in odd complex dimension and preserves it in even dimension.

The normalization of $\omega$ above is the one in which a $g$-orthonormal complex
frame has $|\zeta_j|^2=2$: at a point, write $\zeta_j=e_j+if_j$ for the
associated type-$(1,0)$ coframe. Then
$\omega=\tfrac i2\sum_{j=1}^n\zeta_j\wedge\bar\zeta_j$. Some references instead write
$\omega=i\sum_j\zeta_j\wedge\bar\zeta_j$ with $\lvert\zeta_j\rvert=1$; that is the same
geometric structure with the rescaled metric $2g$, under which all four operator
identities of the Kähler commutator lemma below are invariant, but the two
normalizations must not be mixed inside one computation.

The declared [[def-axiom-of-choice]] records the standing assumption of this page
and not a use in the definitional content, which is choice-free.
