---
id: ex-flat-connections-have-vanishing-positive-degree-real-chern-weil-classes
kind: example
title: Flat connections and real characteristic classes
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-chern-pontryagin-and-euler-characteristic-forms
  - def-chern-classes-from-the-projective-bundle-relation
  - def-complex-projective-bundle-and-tautological-complex-line
  - def-euler-class-by-zero-section-pullback-of-the-thom-class
  - def-singular-cochain-complex-with-coefficients
  - def-singular-cohomology-with-coefficients
  - def-smooth-vector-bundle-rank-fibre-and-trivial-bundle
  - lem-compatible-connections-exist-on-smooth-hermitian-and-euclidean-bundles
  - lem-second-countable-smooth-manifolds-have-cw-homotopy-type
  - lem-transgression-between-two-connections-is-exact
  - prop-complexification-is-conjugation-invariant
  - prop-singular-cohomology-is-contravariantly-functorial
  - rem-integral-torsion-is-not-detected-by-real-characteristic-forms
  - thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals
  - thm-closed-hyperbolic-surface-has-geometric-deck-action
  - thm-connection-one-form-transformation-law
  - thm-curvature-two-form-structure-equation
  - thm-homotopic-maps-induce-equal-maps-in-singular-cohomology
  - thm-integral-complex-projective-bundle-theorem
  - thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law
  - thm-long-exact-sequence-of-a-pair-in-singular-cohomology
  - thm-naturality-orientation-sign-and-whitney-product-for-euler-classes
  - thm-thom-isomorphism-for-oriented-vector-bundles
  - thm-vector-bundles-glued-from-transition-cocycles
  - def-pontryagin-classes-by-complexification
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_audit: "Assume full AC. It supplies compatible Hermitian connections, CW-type models for the componentwise conjugation argument, and the real characteristic-class comparison; the explicit curvature and quotient-connection calculations are choice-free once the stated data are fixed."
sources:
  references:
    - title: John Milnor and James Stasheff, Characteristic Classes
      url: https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/milnor-stasheff2.pdf
      locator: "Appendix C, printed pp. 315–317, flat oriented plane bundle with nonzero real Euler number; §11.5, Corollary 11.12, printed p. 138, tangent Euler number equals Euler characteristic"
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Appendix to §1.2, Proposition 1.20, printed pp. 36–37: every CW complex is paracompact"
---

## Example

Assume full AC. Let $M$ be a finite-dimensional Hausdorff second-countable
smooth manifold, possibly empty or with boundary, and write
$\rho_M:H^*(M;\mathbb Z)\to H^*(M;\mathbb R)$ for change of coefficients.

1. If a finite-rank complex bundle $E\to M$ has a flat complex-linear
   connection, then $\rho_M(c_j(E))=0$ for every $j>0$. The flat connection
   need not be Hermitian.
2. If a finite-rank real bundle $V\to M$ has a flat real connection, then
   $\rho_M(p_j(V))=0$ and $\rho_M(c_j(V_{\mathbb C}))=0$ for every $j>0$.
3. If an oriented Euclidean bundle $W\to M$ of positive even rank has a flat
   metric-compatible connection, then $\rho_M(e(W))=0$. In rank zero, with
   the canonical unit orientation, $e(W)=1$ and $\rho_M(e(W))=1$ in degree
   zero, even though the unique connection is flat.
4. The metric-compatibility hypothesis in clause 3 cannot be omitted. There is
   a compact genus-two surface $\Sigma$ and an oriented real rank-two bundle
   $\widehat V\to\Sigma$, oriented so that its flat connection $D$ satisfies
   $\langle \rho_\Sigma(e(\widehat V)),[\Sigma]_{\mathbb R}\rangle=-1$.
   In particular, $D$ is compatible with no Euclidean metric on $\widehat V$.

The Euler class in clauses 3–4 is the Thom-normalized class. No integral
vanishing is asserted in clauses 1–3; the rank-zero equality in clause 3 is
an integral normalization, not a vanishing assertion.

## Facts & Assumptions

**Given:** Full AC; a manifold and one of the bundles and connections in the four clauses; for the counterexample, the explicitly constructed closed hyperbolic genus-two surface and its deck action.

[A1] Full AC means every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F1] Chern forms are determinant coefficients, Pontryagin forms are their real complexification coefficients, and the Euler Pfaffian form is defined only for an oriented even-rank Euclidean bundle with a metric-compatible connection ([[def-chern-pontryagin-and-euler-characteristic-forms]]).

[F2] Under full AC, every smooth complex bundle admits a Hermitian metric and a Hermitian connection ([[lem-compatible-connections-exist-on-smooth-hermitian-and-euclidean-bundles]]).

[F3] For the same supplied reduction, the difference of two invariant curvature evaluations is the exterior derivative of the transgression form ([[lem-transgression-between-two-connections-is-exact]]).

[F4] For a Hermitian complex connection, any real connection for Pontryagin forms, and a metric-compatible connection for the Euler form, the de Rham class maps to the real coefficient image of the corresponding topological class ([[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]]).

[F5] The topological Pontryagin classes satisfy $p_j(V)=(-1)^j c_{2j}(V_{\mathbb C})$ ([[def-pontryagin-classes-by-complexification]]).

[F6] Every smooth bundle on $M$ is numerable and $M$ has CW homotopy type, including componentwise for manifolds with boundary ([[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]).

[F7] Every CW complex is paracompact; a CW complex is Hausdorff under the library convention (Hatcher, *Vector Bundles & K-Theory*, Appendix to §1.2, Proposition 1.20, printed pp. 36–37).

[F8] For a numerable real bundle over a path-connected paracompact Hausdorff CW complex, complexification is isomorphic to its conjugate and $c_i(\overline U)=(-1)^ic_i(U)$ ([[prop-complexification-is-conjugation-invariant]]).

[F9] Singular cohomology pullbacks are functorial, homotopy equivalences induce isomorphisms, and homotopic maps induce equal pullbacks ([[prop-singular-cohomology-is-contravariantly-functorial]], [[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]]).

[F10] On a CW-type base, Chern classes are the unique coefficients in the projective-bundle relation; pulling that relation and the tautological Euler class back along a map proves naturality by uniqueness ([[def-chern-classes-from-the-projective-bundle-relation]], [[def-complex-projective-bundle-and-tautological-complex-line]], [[thm-integral-complex-projective-bundle-theorem]], [[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]]).

[F11] Every integral torsion class maps to zero in real cohomology ([[rem-integral-torsion-is-not-detected-by-real-characteristic-forms]]).

[F12] The mod-two Thom class of an oriented disk bundle maps to the mod-two Euler class under relative-to-absolute cohomology, and the pair has its long exact sequence ([[thm-thom-isomorphism-for-oriented-vector-bundles]], [[def-euler-class-by-zero-section-pullback-of-the-thom-class]], [[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]]).

[F13] A constant transition cocycle defines a smooth real vector bundle when its matrices lie in $\operatorname{GL}_r(\mathbb R)$ ([[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]], [[thm-vector-bundles-glued-from-transition-cocycles]]).

[F14] In frames $e'=eA$, connection matrices transform by $\omega'=A^{-1}\omega A+A^{-1}dA$, and matrices satisfying this identity glue to a unique connection ([[thm-connection-one-form-transformation-law]], [[thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law]]).

[F15] The curvature matrix is $\Omega=d\omega+\omega\wedge\omega$ ([[thm-curvature-two-form-structure-equation]]).

[F16] A closed hyperbolic surface has universal cover $\mathbb H^2$ with its geometric deck action ([[thm-closed-hyperbolic-surface-has-geometric-deck-action]]).

[F17] Singular cochains are functions on singular simplices, and singular cohomology is their cocycles modulo coboundaries; on a disjoint union the cochain complex therefore splits as the product of component complexes ([[def-singular-cochain-complex-with-coefficients]], [[def-singular-cohomology-with-coefficients]]).

## Proof

**Proof technique:** local curvature evaluation, transgression, and an explicit flat quotient bundle.

1.1 **Flat complex connections.** Let $\nabla_0$ be the supplied flat complex-linear connection on $E$. By full AC and [F2], choose a Hermitian metric and a compatible Hermitian connection $\nabla_1$. Both preserve the same underlying $\operatorname{GL}_r(\mathbb C)$ reduction. For each $j>0$, [F1] and $\Omega_{\nabla_0}=0$ give $c_j(\nabla_0)=0$ pointwise. The exact transgression in [F3] gives $$c_j(\nabla_1)=dT_j$$ for a possibly complex-valued $(2j-1)$-form $T_j$. The Hermitian form $c_j(\nabla_1)$ is real-valued by [F1], so $c_j(\nabla_1)=d\operatorname{Re}(T_j)$ is exact in the real form complex. The comparison theorem [F4], applied to $\nabla_1$, now gives $\rho_M(c_j(E))=0$. This step handles a flat connection that is not itself compatible with any selected Hermitian metric; it compares its zero forms to the Hermitian ones rather than applying the comparison theorem outside its hypotheses. [A1, F1, F2, F3, F4]

1.2 **Real Pontryagin classes and even Chern classes.** Let $D$ be a flat real connection on $V$. Every positive-degree Pontryagin form is a homogeneous positive-degree polynomial in $\Omega_D$, so [F1] gives $p_j(D)=0$ for $j>0$. The arbitrary-real-connection clause of [F4] yields $\rho_M(p_j(V))=0$. The induced connection on $V_{\mathbb C}$ is flat. For $k=2j>0$, [F5] gives $\rho_M(c_{2j}(V_{\mathbb C}))=(-1)^j\rho_M(p_j(V))=0$; indices above the rank vanish by the stated rank conventions. [F1, F4, F5]

1.3 **Odd Chern classes of a real complexification.** Fix a connected component $B$ of $M$. By [F6], choose a homotopy equivalence $h:X\to B$ from a path-connected CW complex. This CW complex is paracompact by [F7], and $h^*(V_{\mathbb C}|_B)$ is numerable because $V$ is numerable and numerability pulls back. The bundle is canonically isomorphic to its conjugate. Thus [F8] gives, for odd $k>0$, $$c_k(h^*V_{\mathbb C})=c_k(\overline{h^*V_{\mathbb C}}) =-c_k(h^*V_{\mathbb C}),$$ so $2c_k(h^*V_{\mathbb C})=0$. The relation [F10] identifies this class with $h^*c_k(V_{\mathbb C}|_B)$. Since $h^*$ is an isomorphism by [F9], $2c_k(V_{\mathbb C}|_B)=0$. The torsion statement [F11] then gives $\rho_B(c_k(V_{\mathbb C}|_B))=0$. This holds on every component; singular chains split as the direct sum over components, so cochains and cohomology split as products and the global real class is zero. [A1, F6, F7, F8, F9, F10, F11, F17]

1.4 **A closed genus-two hyperbolic surface.** In $\mathbb H^2$ take a regular octagon whose interior angle is $\pi/4$. Such an octagon exists: if $\ell$ is its side length and $\theta$ its angle, the right triangle from the center to a vertex and a side midpoint gives $$\sin(\theta/2)=\frac{\cos(\pi/8)}{\cosh(\ell/2)}.$$ Thus $\theta=\pi/4$ when $\cosh(\ell/2)=\cot(\pi/8)=1+\sqrt2$. Identify its sides by the oriented genus-two word $$a_1b_1a_1^{-1}b_1^{-1}a_2b_2a_2^{-1}b_2^{-1}.$$ The quotient is compact, oriented, and has genus two; all eight vertices become one point and their angles sum to $8(\pi/4)=2\pi$, so the hyperbolic metric extends smoothly across that point. Call this closed surface $\Sigma$. By [F16], its universal cover is $\mathbb H^2$. Its orientation-preserving deck transformations are fractional-linear transformations, giving a homomorphism $\rho:\Pi=\pi_1(\Sigma)\to\operatorname{PSL}(2,\mathbb R)$. [F16, construct]

1.5 **The deck representation's projective-line bundle.** Let $$\eta=(\mathbb H^2\times\mathbb {RP}^1)/\Pi\longrightarrow\Sigma,$$ where $\Pi$ acts diagonally through $\rho$ and its projective action. A nonzero tangent direction at $z\in\mathbb H^2$ determines the endpoint of the unique orthogonal geodesic ray to the ideal boundary $\mathbb {RP}^1$; this map is deck-equivariant. Hence $\eta$ is the unit direction circle bundle of $T\Sigma$. The tangent Euler number is the Euler characteristic (Milnor–Stasheff; the printed locator is recorded in the source notes), and the genus-two polygon has one 0-cell, four 1-cells, and one 2-cell. Therefore $$\langle e(\eta),[\Sigma]\rangle=\chi(\Sigma)=1-4+1=-2.$$ The sign is fixed by the chosen orientation; only its evenness and nonvanishing are used below. [F12, algebra]

1.6 **Lift to a flat oriented plane bundle.** Write $D(\eta)$ and $S(\eta)$ for the associated disk and circle bundles. The mod-two Thom class $u\in H^2(D(\eta),S(\eta);\mathbb F_2)$ maps to the reduction of $e(\eta)$, which is zero because its integer evaluation is $-2$ on the connected oriented surface. By exactness of the pair sequence in [F12], $u$ is the connecting image of a class $a\in H^1(S(\eta);\mathbb F_2)$. On each fiber, the connecting map $H^1(S^1;\mathbb F_2)\to H^2(D^2,S^1;\mathbb F_2)$ takes its nonzero class to the Thom generator; hence $a$ restricts nontrivially to the circle fiber. This degree-one class defines a double cover $\widehat\eta\to\eta$ whose restriction to every fiber is the connected degree-two circle cover. [F12, construct]

The obstruction, or equivalently the winding number of the clutching map, multiplies by the fiber degree under a circle-bundle covering. Thus $2\langle e(\widehat\eta),[\Sigma]\rangle=\langle e(\eta),[\Sigma]\rangle=-2$, so $\langle e(\widehat\eta),[\Sigma]\rangle=-1$. The lifted circle action comes from the double covering $\operatorname{SL}(2,\mathbb R)\to\operatorname{PSL}(2,\mathbb R)$: a matrix $A\in\operatorname{SL}(2,\mathbb R)$ acts on the unit circle by $v\mapsto Av/\|Av\|$, and its projectivization is the original action on $\mathbb {RP}^1$. The lifted transition maps are still discrete, so they give a homomorphism $\widehat\rho:\Pi\to\operatorname{SL}(2,\mathbb R)$ whose associated unit-direction circle bundle is $\widehat\eta$. This is the fiberwise lift described in Milnor–Stasheff, Appendix C, printed pp. 315–317; the mod-two exact-sequence and Euler-number calculations above make its obstruction and nonzero value explicit.

2.1 **The flat connection and its curvature.** Form the associated real two-plane bundle $$\widehat V=(\mathbb H^2\times\mathbb R^2)/\Pi\longrightarrow\Sigma, \qquad \gamma\cdot(z,v)=(\gamma z,\widehat\rho(\gamma)v).$$ Its transition matrices lie in $\operatorname{SL}(2,\mathbb R)$, so the bundle is oriented. In an evenly covered chart, use the standard basis of $\mathbb R^2$ as a frame. On each overlap the two chosen lifts differ by one deck transformation, so the transition matrix is the constant matrix $\widehat\rho(\gamma)$. These constant cocycles define the smooth bundle by [F13]. Put $\omega_\alpha=0$ in each such frame. Since every transition matrix $A_{\alpha\beta}$ is constant, $$A_{\alpha\beta}^{-1}\omega_\alpha A_{\alpha\beta} +A_{\alpha\beta}^{-1}dA_{\alpha\beta}=0=\omega_\beta.$$ Thus [F14] glues the zero matrices to a global connection $D$, and [F15] gives $\Omega_D=0$. The unit-circle bundle of $\widehat V$ is $\widehat\eta$, so its Thom-normalized Euler number is $-1$ by step 1.6. Changing the chosen orientation could reverse that sign, but not its nonvanishing. [F12, F13, F14, F15]

3.1 **Failure without metric compatibility.** The real image $\rho_\Sigma(e(\widehat V))$ evaluates to $-1$ on the real fundamental class, so it is nonzero. If the flat connection $D$ were compatible with any Euclidean metric, the Euler clause of [F4] would identify that real class with the de Rham class of its metric-compatible Pfaffian form. Since $\Omega_D=0$, that form is identically zero by [F1], contradicting the evaluation $-1$. Therefore $D$ is flat but compatible with no Euclidean metric, and the unqualified Euler conclusion is false. [F1, F4, step 1.6, step 2.1, algebra]

4.1 **Boundary and rank cases.** If $M$ is empty all cohomology groups in clauses 1–3 are zero. For clause 3 in rank $2m>0$, flatness gives $\Omega=0$, and the degree-$m$ Pfaffian is zero; [F4] therefore gives $\rho_M(e(W))=0$. At rank zero the empty Pfaffian and the Euler class in the canonical unit orientation are both $1$, so the real Euler class is the degree-zero unit, not a positive-degree vanishing class. Rank-zero bundles have no positive-degree Chern or Pontryagin classes; for rank one, the determinant/transgression argument of step 1.1 still applies, while positive Pontryagin classes vanish by the rank cutoff. Indices above the complex rank or the real Pontryagin cutoff vanish by definition; degree zero is excluded from the vanishing assertions and is recorded separately in clause 3. The flatness calculations and comparison theorem apply on boundary charts under their stated scopes. The counterexample is a fixed closed surface and has rank two. Full AC is used in [A1] through [F2], [F4], [F6], [F8], and [F12], including the componentwise CW models; after the connections, representation, and frames are supplied, the local matrix and quotient calculations make no further choices. There is no endpoint parameter and no biconditional in this example. [A1, F1, F2, F4, F6, F8, F12, step 1.1, step 1.2, step 1.3, step 1.4, step 1.6, step 2.1, step 3.1, cases] ∎

## Source notes

Milnor–Stasheff, *Characteristic Classes*, Appendix C, printed pp. 315–317, constructs the flat oriented two-plane example with nonzero real Euler number. The item spells out the quotient connection, curvature, mod-two lifting obstruction, and the genus-two Euler calculation. Their Chapter 11, §11.5, Corollary 11.12, printed p. 138, proves the tangent Euler number equals the Euler characteristic; the one-vertex, four-edge, one-face polygon gives $\chi(\Sigma)=-2$. Only nonvanishing matters, so an opposite orientation convention changes no conclusion.

Hatcher, *Vector Bundles & K-Theory*, Appendix to §1.2, Proposition 1.20, printed pp. 36–37, proves every CW complex is paracompact by extending partitions of unity across successive skeleta. This is used to meet the precise CW-base hypothesis of the conjugation-invariance supplier.
