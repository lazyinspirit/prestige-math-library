---
id: prop-chern-weil-forms-obey-direct-sum-and-pullback-formulas
kind: proposition
title: Direct-sum and pullback formulas for characteristic forms
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-chern-pontryagin-and-euler-characteristic-forms
  - def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles
  - thm-curvature-two-form-structure-equation
  - def-evaluation-of-an-invariant-polynomial-on-curvature
  - def-pullback-connection
  - thm-connection-one-form-transformation-law
  - thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law
  - lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary
  - lem-transgression-between-two-connections-is-exact
  - thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals
  - thm-de-rham-theorem
  - def-connection-on-a-smooth-vector-bundle
  - def-smooth-vector-bundle-rank-fibre-and-trivial-bundle
  - def-axiom-of-choice
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: Raoul Bott, Lectures on Characteristic Classes and Foliations
      url: https://poisson.phc.dm.unipi.it/~lmigliorini/secondo_magistrale/gauge_theory/bott_foliations.pdf
      locator: "§5, Proposition (5.6) and total Pontryagin form, printed pp. 31–33"
    - title: John W. Milnor and James D. Stasheff, Characteristic Classes
      url: https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/milnor-stasheff2.pdf
      locator: "Appendix C, split-sum Chern calculation and Corollary C.10, printed pp. 310–312; Pfaffian Lemma C.12 and its curvature application, printed pp. 313–314"
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II, Lecture 36
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Odd Chern classes of a complexified real bundle and the real Pontryagin Whitney formula, printed pp. 135–136"
axiom_audit: "Assume full AC. It is used through the characteristic-form definition to obtain exactness of odd Chern forms for arbitrary real connections, and through the real characteristic-class comparison theorem to identify arbitrary-connection Pontryagin classes with real coefficient images. The local direct-sum, Pfaffian, pullback and explicit counterexample calculations are choice-free once the bundles and connections are supplied."
dependency_level: 8
---

## Statement

Assume full Axiom of Choice. Let $M$ be a finite-dimensional Hausdorff
second-countable smooth manifold, possibly empty or with boundary, and let all
bundles below have finite rank. Use the characteristic-form conventions of
[[def-chern-pontryagin-and-euler-characteristic-forms]], including
$c_0=p_0=1$ and the rank-zero unit forms.

1. For complex bundles $E,F\to M$ with complex connections
   $\nabla^E,\nabla^F$, give $E\oplus F$ the direct-sum connection. Then
   $$c(\nabla^E\oplus\nabla^F)=c(\nabla^E)\wedge c(\nabla^F).$$
2. For oriented Euclidean bundles $E,F$ of even ranks with metric connections,
   give $E\oplus F$ the product metric, the direct-sum connection, and the
   orientation ordered as $E$ then $F$. Then
   $$e(\nabla^E\oplus\nabla^F)=e(\nabla^E)\wedge e(\nabla^F).$$
3. For real Euclidean bundles with metric connections,
   $$p(\nabla^E\oplus\nabla^F)=p(\nabla^E)\wedge p(\nabla^F).$$
   This is an equality of forms.
4. If $f:N\to M$ is smooth, pullback of any Chern, Pontryagin, or defined
   Euler characteristic form agrees exactly with the corresponding form of
   the pulled-back bundle and connection.
5. For arbitrary real connections $D_E,D_F$ on real bundles $E,F$ and any
   real connection $D$ on $E\oplus F$, the associated total Pontryagin forms
   need not obey the direct-sum identity pointwise, but their real de Rham
   classes satisfy
   $$[p(D)]=[p(D_E)]\wedge[p(D_F)]=[p(D_E\oplus D_F)].$$
   The real characteristic-class comparison theorem identifies these classes
   with the real coefficient images of the topological Pontryagin classes.
   No integral Whitney product formula is asserted here.

## Facts & Assumptions

**Given:** The stated bundles, connections, metrics and orientations; for the
pullback assertion, a smooth map $f:N\to M$ between manifolds in the stated
scope.

[A1] Full AC is assumed: every family of nonempty sets has a choice function
([[def-axiom-of-choice]]).

[F1] The total Chern form is the determinant of the normalized curvature; the
Pontryagin forms are its signed even coefficients on the complexified real
connection. They are closed, real-valued, and have rank-zero value $1$. Odd
Chern forms of a metric real connection vanish pointwise, and under full AC
odd Chern forms of any real connection are exact
([[def-chern-pontryagin-and-euler-characteristic-forms]]).

[F2] A Whitney sum has block-diagonal transition matrices, with the fiberwise
sum convention ([[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]]).

[F3] In a local frame, curvature is $\Omega=d\omega+\omega\wedge\omega$
([[thm-curvature-two-form-structure-equation]]).

[F4] Evaluating an invariant polynomial on curvature is multilinear in the
even-degree form entries ([[def-evaluation-of-an-invariant-polynomial-on-curvature]]).

[F5] The pullback connection has local matrix $f^*\omega$ in the pulled-back
frame ([[def-pullback-connection]]).

[F6] If frames satisfy $e'=eA$, their connection matrices obey
$\omega'=A^{-1}\omega A+A^{-1}dA$
([[thm-connection-one-form-transformation-law]]); local matrices obeying
this rule glue to a unique connection
([[thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law]]).

[F7] On manifolds with boundary, pullback preserves wedges and commutes with
the exterior derivative, using local smooth extensions in boundary charts
([[lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]]).

[F8] For two connections on the same general-linear reduction, every
Pontryagin curvature-polynomial difference is exact by transgression
([[lem-transgression-between-two-connections-is-exact]]).

[F9] For every real connection $D$ on $V$, the de Rham class of $p_j(D)$ maps
under the de Rham isomorphism to the real coefficient image of $p_j(V)$;
the statement includes empty and boundary cases and makes no integral torsion
claim ([[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]]).

[F10] The de Rham map for the stated manifolds is a natural ring isomorphism
([[thm-de-rham-theorem]]).

[F11] A connection on a real vector bundle obeys the Leibniz rule
([[def-connection-on-a-smooth-vector-bundle]]); the product real line is the
rank-one trivial smooth bundle ([[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]).

## Proof

**Proof technique:** compute in common local frames, then use exactness and
transgression for the arbitrary-connection class statement.

1.1 In concatenated local frames, the direct-sum connection has block-diagonal curvature. [F2, F3]
On a common trivializing neighbourhood, concatenate frames of $E$ and $F$.
The connection matrix is $\operatorname{diag}(\omega_E,\omega_F)$. The
structure equation shows that both exterior derivative and matrix wedge
product preserve this block form, so the curvature matrix is
$\operatorname{diag}(\Omega_E,\Omega_F)$. [F2, F3]

1.2 Pullback of the connection transformation law glues the local pullback matrices, including in boundary charts. [F5, F6, F7]
Let $f:N\to M$ be smooth and let $e'=eA$ be a frame change on a target
trivializing overlap. The connection forms satisfy the transformation law
[F6]. Pull it back. By [F7], pullback preserves matrix products and wedges
and commutes with $d$, so the pulled-back matrices satisfy the same transition
law with transition matrix $f^*A$. Thus they glue to the pullback connection
in boundary as well as interior charts. This supplies the local connection
calculation without assuming that $f$ is an immersion, submersion, or maps
interior points only to interior points. [F5, F6, F7]

1.3 Strict form-level Pontryagin multiplicativity can fail without metric compatibility; two trivial real lines witness the failure. [F1, F3, F11, algebra]
On $M=\mathbb R^4$, take trivial real line bundles with connections
$D_E=d+x_1\,dx_2$ and $D_F=d+x_3\,dx_4$. Expanding $D(fs)$ verifies the
connection Leibniz rule [F11]. Their curvature forms are
$F_E=dx_1\wedge dx_2$ and $F_F=dx_3\wedge dx_4$. Each rank-one total
Pontryagin form is $1$. On the direct sum, the complexified curvature is
block diagonal and the determinant convention gives
$$c_2((D_E\oplus D_F)_{\mathbb C})=-\frac{F_E\wedge F_F}{(2\pi)^2},\qquad p_1(D_E\oplus D_F)=\frac{dx_1\wedge dx_2\wedge dx_3\wedge dx_4}{(2\pi)^2}\ne0.$$
Thus this chosen total form differs from $p(D_E)\wedge p(D_F)=1$, so strict
form-level multiplicativity fails in this explicit example. [F1, F3, F11,
algebra]

2.1 The block determinant factors over even-degree curvature entries, giving the total Chern product. [F1, F4, step 1.1, algebra]
The curvature entries have even degree and commute in the exterior algebra,
so
$$\det\!\left(I-\frac{\operatorname{diag}(\Omega_E,\Omega_F)}{2\pi i}\right)=\det\!\left(I-\frac{\Omega_E}{2\pi i}\right)\wedge\det\!\left(I-\frac{\Omega_F}{2\pi i}\right).$$
Taking each homogeneous degree gives the total Chern form identity. The empty
determinant gives the rank-zero unit. [F1, F4, step 1.1, algebra]

2.2 For the ordered-sum orientation, the block-diagonal Pfaffian is the product of the two Pfaffians. [F1, F2, step 1.1, algebra]
In oriented orthonormal frames, metric compatibility makes the curvature
matrices skew-symmetric. The concatenated frame has the ordered-sum
orientation, and the direct-sum curvature is block diagonal by step 1.1. In
the Pfaffian alternating-sum formula, every nonzero term pairs indices inside
one block; because the $E$ block precedes the $F$ block, the surviving terms
factor with no permutation sign. Thus
$\operatorname{Pf}(\Omega_E\oplus\Omega_F)=
\operatorname{Pf}(\Omega_E)\wedge\operatorname{Pf}(\Omega_F)$, also when a
block has rank zero and its Pfaffian is $1$. The normalizing powers of $2\pi$
respect the product, proving the Euler form identity. [F1, F2, step 1.1,
algebra]

2.3 The local curvature equation gives $\Omega_{f^*\nabla}=f^*\Omega_\nabla$, hence every characteristic form pulls back exactly. [F3, F4, F5, F7, step 1.2, algebra]
In the pulled-back frame, [F3], [F5], and [F7] give
$$\Omega_{f^*\nabla}=d(f^*\omega)+(f^*\omega)\wedge(f^*\omega)=f^*(d\omega+\omega\wedge\omega)=f^*\Omega_\nabla.$$ 
Invariant-polynomial evaluation [F4] is a finite sum of scalar coefficients
times wedges of curvature entries, and [F7] preserves those wedges; hence
every such curvature form pulls back exactly. This includes Chern and
Pontryagin determinant coefficients and the oriented Euler Pfaffian. Pullback
preserves the supplied metric and orientation, so the Euler clause stays in
its stated domain. [F1, F3, F4, F5, F7, step 1.2, algebra]

3.1 For metric-compatible real connections, total Pontryagin forms multiply strictly. [F1, step 2.1, algebra]
Each complexified curvature matrix is skew-symmetric, so its odd Chern forms
vanish pointwise by [F1]. Apply step 2.1 to the complexifications of $E,F$:
only even-indexed Chern components remain. In degree $4j$, write their indices
as $2r,2s$ with $r+s=j$. Since $(-1)^j=(-1)^r(-1)^s$, the signed even
Chern coefficient of the direct sum is exactly
$\sum_{r+s=j}p_r(\nabla^E)\wedge p_s(\nabla^F)$. This proves the total
Pontryagin form identity in every degree. [F1, step 2.1, algebra]

3.2 For arbitrary real connections on the summands, odd-odd Chern cross terms change the product only by exact forms. [A1, F1, step 2.1, algebra]
Let $D_E,D_F$ be arbitrary real connections and first use their direct-sum
connection $D_E\oplus D_F$. By step 2.1 applied to the complexifications,
the degree-$4j$ Pontryagin form of the sum expands into even-even and odd-odd
Chern terms. The even-even terms are precisely
$p_r(D_E)\wedge p_s(D_F)$ for $r+s=j$. For an odd-odd term
$c_{2a+1}((D_E)_{\mathbb C})\wedge c_{2b+1}((D_F)_{\mathbb C})$, [F1]
and full AC give a primitive $\alpha$ for its first factor; the second
factor is closed by [F1]. Thus the term is
$d\bigl(\alpha\wedge c_{2b+1}((D_F)_{\mathbb C})\bigr)$. There are only
finitely many such terms in each rank, so the difference is exact and
$$[p(D_E\oplus D_F)]=[p(D_E)]\wedge[p(D_F)].$$ [A1, F1, step 2.1,
algebra]

4.1 Any real connection on $E\oplus F$ has Pontryagin forms cohomologous to those of the direct-sum connection. [F8, step 3.2]
For any real connection $D$ on $E\oplus F$, apply [F8] degree by degree to
the invariant polynomial defining each $p_j$. For $j=0$ the curvature
evaluation is the constant unit; for $j>0$ transgression shows
$p_j(D)-p_j(D_E\oplus D_F)$ is exact. Consequently
$[p(D)]=[p(D_E\oplus D_F)]$, which with step 3.2 proves the class formula.
[F8, step 3.2]

5.1 The comparison theorem identifies the class formula with multiplicativity of the real coefficient images of topological Pontryagin classes. [F9, F10, step 4.1]
Apply [F9] to $D_E,D_F$, and $D$ on the stated smooth bases. The de Rham
ring isomorphism [F10] carries the equality in step 4.1 to multiplicativity
of the real coefficient images of the topological Pontryagin classes. This
comparison is over $\mathbb R$ only; no integral torsion equality is asserted.
[F9, F10, step 4.1]

6.1 Empty, zero-rank, rank-one, degenerate-map, boundary, choice, and non-iff cases are covered as stated. [A1, F1, F7, step 2.1, step 2.2, step 2.3, step 3.1, step 3.2, step 5.1, cases]
On an empty base each equality is the equality of the unique empty form.
Rank-zero Chern, Pontryagin, and Euler forms are units, so a zero-rank
summand contributes the multiplicative unit. A complex line has only $c_0$
and $c_1$ components; a real rank-one bundle has $p=1$ by the rank cutoff,
and there is no odd-rank Euler form in this definition. Forms of degree
exceeding the base dimension vanish. Steps 1.2 and 2.3 apply to constant and
rank-deficient maps as written; for constant $f$, $f^*\omega=0$ and
positive-degree curvature forms pull back to zero. All calculations extend
to boundary points by [F7]. No statement is an iff. Full AC is used through
[F1] in step 3.2 for exact odd Chern forms and through [F9] in step 5.1 for
the topological comparison. The direct-sum, Pfaffian, pullback and explicit
counterexample calculations are choice-free once the data are supplied.
[A1, F1, F7, step 2.1, step 2.2, step 2.3, step 3.1, step 3.2, step 5.1,
cases] ∎

## Source notes

Bott, *Lectures on Characteristic Classes and Foliations*, §5, Proposition
(5.6) and the total Pontryagin form immediately following it, printed
pp. 31–33, identifies the metric skew-curvature vanishing and the total
Pontryagin determinant and records the Whitney product. That passage concerns
real characteristic classes; the form-level metric identity in step 3.1 is
also checked directly from the block determinant.

Milnor–Stasheff, *Characteristic Classes*, Appendix C, the split-sum Chern
calculation and Corollary C.10, printed pp. 310–312, give the curvature
normalization, the Chern–Weil comparison for real Pontryagin classes, and
exactness of odd curvature coefficients for arbitrary real connections.
Lemma C.12 and its curvature application, printed pp. 313–314, give the
Pfaffian covariance and normalization. Their convention is not imported
blindly: step 2.2 uses the library's stated ordered orientation and Pfaffian
normalization.

Miller, *Algebraic Topology II*, Lecture 36, printed pp. 135–136, explains
that odd Chern classes of a complexified real bundle are two-torsion and
that Pontryagin multiplicativity follows after passing to coefficients in
which $2$ is invertible. This corroborates why step 5.1 asserts only the
real-coefficient conclusion. The strict-form counterexample in step 1.3 is
computed directly and does not come from that source.
