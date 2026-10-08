---
id: thm-symplectic-period-formula-for-wedge-integrals
kind: theorem
title: The symplectic period formula for integrals of wedge products
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
proof_strategy: direct
dependency_level: 18
deps:
  - cor-closed-differential-forms-are-locally-exact
  - cor-de-rham-vector-space-comparison-with-continuous-singular-cohomology
  - cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero
  - cor-poincare-duality-gives-a-nonsingular-cup-pairing
  - def-axiom-of-choice
  - def-bigraded-complex-differential-forms
  - def-countable-choice
  - def-de-rham-cohomology
  - def-de-rham-integration-cochain-map
  - def-fundamental-class-of-a-compact-oriented-manifold
  - def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold
  - def-integral-of-a-form-over-a-smooth-singular-simplex
  - def-kronecker-evaluation-pairing
  - def-meromorphic-differential-on-a-riemann-surface
  - def-period-pairing-and-period-lattice
  - def-singular-cup-product-on-cochains
  - def-singular-cochain-complex-with-coefficients
  - def-singular-chain-complex-and-singular-homology
  - def-singular-cohomology-with-coefficients
  - def-smooth-differential-k-form
  - def-smooth-singular-simplex
  - def-smooth-singular-chain-and-cochain-complexes
  - def-wedge-product-of-differential-forms
  - lem-cut-surface-and-boundary-jumps-of-primitives
  - lem-de-rham-integration-respects-wedge-and-cup-in-cohomology
  - lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision
  - lem-period-pairing-is-well-defined-and-computed-by-integration
  - lem-finite-choice
  - lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives
  - prop-integration-of-top-forms-by-finite-parametrizations
  - thm-barycentric-subdivision-is-a-chain-map
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-de-rham-integration-is-a-cochain-map
  - thm-excision-for-singular-homology
  - thm-smooth-singular-chains-compute-singular-homology
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - thm-symplectic-homology-basis-compact-riemann-surface
  - thm-topological-universal-coefficient-short-exact-sequence-for-cohomology
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 15, Theorem 15.13 and its proof, printed pp. 134–135: cut-surface boundary formula for the wedge integral and its period sign."
    - title: Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 3 §3, Proposition 3.19 and Corollary 3.20, printed pp. 34–35: the alternating integral pairing in a dual curve basis and its nondegeneracy."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), used for the selected
symplectic basis and, through dependent choice, the countable-choice
de Rham comparison. Let $X$ be a compact connected Riemann surface of genus
$g\ge1$, oriented by its complex structure, and let
$a_1,b_1,\ldots,a_g,b_g$ be the ordered symplectic homology basis with its
fixed continuous side-loop representatives from
[[thm-symplectic-homology-basis-compact-riemann-surface]]. For a closed smooth
complex $1$-form $\alpha$, let $\Pi_\alpha(a_i)$ and $\Pi_\alpha(b_i)$ be the
local-primitive path integrals along those representatives, as in
[[lem-cut-surface-and-boundary-jumps-of-primitives]]. Set
$$S(\alpha,\beta):=\sum_{i=1}^{g}\Bigl(\Pi_\alpha(a_i)\Pi_\beta(b_i)-\Pi_\alpha(b_i)\Pi_\beta(a_i)\Bigr).$$
Write $H^1_{\mathrm dR}(X;\mathbb C)$ for the complexification
$H^1_{\mathrm dR}(X;\mathbb R)\otimes_{\mathbb R}\mathbb C$, identified with
closed complex $1$-forms modulo exact complex $1$-forms. Then:

1. **Wedge-period formula.** For all closed smooth complex $1$-forms
   $\alpha,\beta$,
   $$\int_X\alpha\wedge\beta=S(\alpha,\beta).$$
2. **Descent and nondegeneracy.** The sum $S$ depends only on the de Rham
   classes, is complex-bilinear and alternating, and induces a nondegenerate
   pairing on $H^1_{\mathrm dR}(X;\mathbb C)$. For every degree $k$, let
   $J_X^k:H^k_{\mathrm dR}(X;\mathbb R)\to H^k(X;\mathbb R)$ be the real
   de Rham comparison and put
   $\mathcal J_X^k:=J_X^k\otimes_{\mathbb R}\operatorname{id}_{\mathbb C}$.
   Under this comparison the pairing is the Poincaré-dual cup pairing,
   evaluated as
   $\langle \mathcal J_X^1[\alpha]\smile \mathcal J_X^1[\beta],[X]\rangle$ with the
   cohomology-first and complex-orientation conventions of
   [[cor-poincare-duality-gives-a-nonsingular-cup-pairing]].
3. **Holomorphic isotropy.** If $\omega,\eta\in\Omega(X)$, then
   $\omega\wedge\eta=0$ pointwise and
   $S(\omega,\eta)=0$. For holomorphic differentials $\Pi_\omega=P(-,\omega)$,
   with $P$ as in [[def-period-pairing-and-period-lattice]].

## Facts & Assumptions

**Given:** Full AC, the compact connected Riemann surface $X$, its fixed
orientation-compatible symplectic side-loop basis, and closed smooth complex
$1$-forms $\alpha,\beta$.

[F1] Full AC supplies the ordered side-loop basis of $H_1(X;\mathbb Z)$ and
its standard symplectic intersection matrix; in the evaluation-dual basis of
$H^1(X;\mathbb Z)$ the cup-pairing matrix is
$J=\operatorname{diag}(J_2,\ldots,J_2)$, where
$J_2=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$
([[def-axiom-of-choice]],
[[thm-symplectic-homology-basis-compact-riemann-surface]]).

[F2] Every closed smooth real $1$-form has a smooth local primitive; apply
this to real and imaginary parts for complex forms. The local primitive
increments are complex-linear in the form, additive under path concatenation,
and reverse sign under path reversal
([[cor-closed-differential-forms-are-locally-exact]],
[[def-bigraded-complex-differential-forms]],
[[def-smooth-differential-k-form]],
[[lem-cut-surface-and-boundary-jumps-of-primitives]]).

[F3] A continuous singular $1$-cochain is a function on continuous singular
path generators, and its coboundary is precomposition with the boundary.
Finite singular chains become cover-small after iterated barycentric
subdivision, subdivision is a chain map, and finite local choices are
available in ZF ([[def-singular-chain-complex-and-singular-homology]],
[[def-singular-cochain-complex-with-coefficients]],
[[def-singular-cohomology-with-coefficients]],
[[lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision]],
[[thm-barycentric-subdivision-is-a-chain-map]], [[lem-finite-choice]]).

[F4] For every degree $k$, the real de Rham comparison
$J_X^k:H^k_{\mathrm dR}(X;\mathbb R)\to H^k(X;\mathbb R)$ is an isomorphism
under countable choice, and full AC implies that hypothesis. It is integration
on smooth singular simplices followed by the inverse of restriction from
continuous to smooth singular cohomology
([[cor-de-rham-vector-space-comparison-with-continuous-singular-cohomology]],
[[def-countable-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]],
[[def-de-rham-cohomology]], [[def-de-rham-integration-cochain-map]],
[[def-smooth-singular-chain-and-cochain-complexes]]).

[F5] For closed forms, the integration cochains of $\alpha\wedge\beta$ and
the front/back cup product of the integration cochains of $\alpha$ and
$\beta$ differ by an explicit coboundary; hence comparison carries wedge to
cup ([[def-singular-cup-product-on-cochains]],
[[lem-de-rham-integration-respects-wedge-and-cup-in-cohomology]]).

[F6] The cup pairing matrix on the complex coefficient extension of the
evaluation-dual basis is the same matrix $J$ as in [F1]; evaluation identifies
degree-one cohomology with the dual of the free group $H_1(X;\mathbb Z)$.
Poincaré duality identifies this cup pairing with the Poincaré-dual pairing
([[cor-poincare-duality-gives-a-nonsingular-cup-pairing]],
[[def-singular-cohomology-with-coefficients]],
[[def-kronecker-evaluation-pairing]],
[[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]],
[[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]]).

[F7] The top-form integral is the finite partition sum of oriented chart
integrals, the integration cochain evaluates a smooth simplex by its pullback
integral, and $[X]$ is characterized by its positive local orientation
generators. Excision compares a rectangle chain in a chart with this local
class, while finite parametrization computes its integral
([[def-fundamental-class-of-a-compact-oriented-manifold]],
[[def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold]],
[[def-integral-of-a-form-over-a-smooth-singular-simplex]],
[[def-smooth-singular-simplex]],
[[prop-integration-of-top-forms-by-finite-parametrizations]],
[[thm-de-rham-integration-is-a-cochain-map]],
[[thm-excision-for-singular-homology]],
[[thm-smooth-singular-chains-compute-singular-homology]],
[[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

[F8] General Stokes implies that every exact top form on compact boundaryless
$X$ integrates to zero
([[cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero]]).

[F9] On a complex curve, holomorphic differentials are locally $h(z)\,dz$;
therefore the wedge of any two is zero pointwise
([[def-meromorphic-differential-on-a-riemann-surface]],
[[def-wedge-product-of-differential-forms]]).

[F10] The local-primitive path integrals of holomorphic differentials on the
fixed side loops equal the period pairing $P$
([[def-period-pairing-and-period-lattice]],
[[lem-period-pairing-is-well-defined-and-computed-by-integration]]).

## Proof

**Proof technique:** identify the local-primitive periods with the de Rham
comparison coordinates, then compute the cup-pairing matrix in the symplectic
basis.

1.1 For a closed complex $1$-form $\alpha$, define a complex singular $1$-cochain $C_\alpha$ on each continuous singular path $\sigma$ by the local primitive path integral $\Pi_\alpha(\sigma)$. To see that it is a cocycle, take any continuous singular $2$-simplex and subdivide it until each small triangle lies in a neighborhood with a primitive from [F2], using [F3]. The integral around each such triangle is zero because it is the alternating sum of endpoint values of that primitive. Internal edges cancel in opposite orientations, and additivity of path integrals gives $C_\alpha(\partial\sigma)=0$. Thus $C_\alpha$ defines a continuous singular cohomology class. [F2, F3, construct]

1.2 On every smooth singular $1$-simplex, local-primitive increments are the usual integral of the pulled-back form, componentwise on real and imaginary parts. Hence the restriction of $C_\alpha$ to smooth singular cochains is the de Rham integration cochain. By the definition of $J_X^1$ in [F4] and the injectivity of the restriction isomorphism there, $[C_\alpha]$ is $\mathcal J_X^1[\alpha]$. Evaluating it on the fixed side-loop classes gives exactly $\Pi_\alpha(a_i),\Pi_\alpha(b_i)$; in particular these coordinates depend only on $[\alpha]$. The construction is complex-linear in $\alpha$: linear combinations of local primitives are local primitives of the same linear combinations of forms. [F1, F2, F4]

1.3 Put $\theta=\alpha\wedge\beta$. To identify top-degree evaluation with the global integral, cover $X$ by finitely many oriented coordinate rectangles $V_j$ and choose a smooth partition of unity $\rho_j$ subordinate to them; full AC supplies the countable-choice hypothesis of that partition supplier. Each $\theta_j=\rho_j\theta$ has compact support in one rectangle. Choose a smaller closed coordinate rectangle $R_j\subset V_j$ whose interior contains that support, and triangulate $R_j$ into two positively oriented affine simplices. Their common edge cancels, and their remaining boundary lies outside $\operatorname{supp}\theta_j$, so this relative chain is the positive local orientation generator. The integration cochain of $\theta_j$ is a cocycle by the cochain-map supplier and vanishes on simplices in $X\setminus\operatorname{int}(R_j)$. By the smooth-chain comparison it may be evaluated on a smooth representative of $[X]$; the local characterization of $[X]$ and excision identify this evaluation with its evaluation on the rectangle chain. By the finite parametrization formula in [F7], that sum of two simplex integrals is exactly $\int_X\theta_j$. Sum over $j$ and use $\sum_j\rho_j=1$ to obtain $\langle\mathcal J_X^2[\theta],[X]\rangle=\int_X\theta.$ This local argument also applies to complex forms by separating real and imaginary parts. [F4, F7, construct]

2.1 Let $c=\mathcal J_X^1[\alpha]$ and $d=\mathcal J_X^1[\beta]$. By [F5], $\mathcal J_X^2[\alpha\wedge\beta]=c\smile d$, so step 1.3 gives $\int_X\alpha\wedge\beta=\langle c\smile d,[X]\rangle.$ Write $c=\sum_i(A_i x_i+B_i y_i)$ and $d=\sum_i(A'_i x_i+B'_i y_i)$ in the evaluation-dual complex basis $x_i,y_i$ corresponding to $a_i,b_i$. The matrix in [F6] yields $\langle c\smile d,[X]\rangle=\sum_i(A_iB'_i-B_iA'_i).$ By step 1.2, $A_i=\Pi_\alpha(a_i)$, $B_i=\Pi_\alpha(b_i)$ and similarly for $\beta$. This proves the wedge-period formula. The matrix $J$ is invertible, and the period-coordinate map is an isomorphism by [F4,F6], so the pairing is nondegenerate. By [F6] it is the stated Poincaré-dual cup pairing. [F1, F4, F5, F6, step 1.2, step 1.3, algebra]

3.1 Replacing $\alpha$ by $\alpha+d\xi$ and $\beta$ by $\beta+d\eta$ changes their wedge by $d(\xi\wedge\beta-\alpha\wedge\eta+\xi\wedge d\eta),$ so [F8] makes its integral unchanged; step 1.2 also shows that all period coordinates depend only on the classes. Wedge is complex-bilinear and $\alpha\wedge\beta=-\beta\wedge\alpha$, so the descended pairing is complex-bilinear and alternating. If $\omega=h(z)\,dz$ and $\eta=k(z)\,dz$ in a local coordinate, then $\omega\wedge\eta=h(z)k(z)\,dz\wedge dz=0$ on each chart; the formula gives $S(\omega,\eta)=0$. The period integration lemma in [F10] identifies these holomorphic periods with $P(-,\omega)$, proving the final assertion. [F8, F9, F10, step 1.2, step 2.1, algebra] ∎

## Source notes

The holomorphic specialization in step 3.1 remains an open supplier obligation:
`def-period-pairing-and-period-lattice` supplies the fixed-basis $P$ interface,
and `lem-period-pairing-is-well-defined-and-computed-by-integration` proves
$P=\Pi$ on the side loops. Their current Step-3 decisions are `escalate`; the
period definition's reason identifies the unresolved
`lem-holomorphic-differentials-form-a-g-dimensional-space` input. The local
path-integral clauses in steps 1.1–1.2 use
`lem-cut-surface-and-boundary-jumps-of-primitives`, whose decision is also
`escalate` pending reconciliation of those same period suppliers. Keep this
item's decision escalated until the suppliers' current proofs and these exact
uses are reconciled.
