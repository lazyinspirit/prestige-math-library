---
page: spin-geometry-dirac-and-index-theory
title: "Clifford Bundles, Dirac Operators, and Index Interfaces"
status: draft
items: [def-ahat-and-relative-chern-character-forms,
        lem-good-cover-nerve-computes-singular-cohomology,
        def-graded-hermitian-clifford-module-and-geometric-dirac,
        lem-geometric-dirac-operator-is-well-defined,
        lem-lichnerowicz-formula-for-geometric-dirac-operators,
        lem-dirac-maximal-domain-is-h1,
        lem-chiral-dirac-is-fredholm-with-kernel-and-cokernel,
        lem-dirac-heat-trace-and-mckeen-singer-index,
        lem-dirac-heat-parametrix-has-graph-norm-remainder,
        def-spin-lift-of-oriented-orthonormal-frame-bundle,
        def-even-dimensional-spinor-bundle-chirality-and-spin-connection,
        lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor,
        lem-spinor-and-clifford-associated-bundles-are-well-defined,
        lem-getzler-radial-gauge-oscillator-leading-term,
        prop-positive-scalar-curvature-forces-untwisted-spinor-kernel-zero,
        lem-mehler-supertrace-normalization-is-ahat-times-relative-chern-character,
        thm-geometric-clifford-module-dirac-index-formula,
        cor-spin-dirac-index-formula-with-arbitrary-twist]
examples: []
---

This page develops the geometric Spin lift, its spinor and Clifford-module
bundles, the geometric Dirac operator, its curvature identity, and the
closed-manifold complex index formula. The order above keeps each local
supplier before its consumers; cross-page items retain their explicit
dependencies in the run manifest.

## Conventions and hypotheses

For the universal real Clifford algebra the project uses the positive
quadratic-form convention $v^2=|v|^2$. The complex Dirac module is expressed
with skew-Hermitian generators satisfying
$c(\xi)c(\eta)+c(\eta)c(\xi)=-2g^{-1}(\xi,\eta)I$. Curvature is
$R(X,Y)=[\nabla_X,\nabla_Y]-\nabla_{[X,Y]}$, and the principal symbol of $D$
is $i\,c(\xi)$. All index statements here are for smooth finite-rank
coefficients on compact manifolds without boundary; the exact $L^2$ domain is
$H^1$, and no boundary condition is implicit. The index is complex-valued as
a Fredholm integer. No real $KO$-index claim follows from it.

The orientation and Euclidean metric reduce the oriented frame bundle from
$GL_n^+(\mathbb R)$ to $SO(n)$. In the relevant positive Clifford convention
the covering is the central extension
```tikzcd
1 \arrow[r] & \{\pm1\} \arrow[r,hook] & \operatorname{Spin}_{\mathrm{full}}(n)
  \arrow[r,"\rho",two heads] & SO(n) \arrow[r] & 1 .
```
The inclusion and projection have kernel $\{\pm1\}$, and $\rho$ is a
two-sheeted topological covering. For $n\ge3$ it is the universal cover;
rank two is the double-angle map $S^1\to S^1$, and rank one is handled
directly. The diagram records the extension only. The lifting, transition
cocycle, obstruction and torsor proofs are algebraic/topological arguments
in the carriers and do not rely on a diagram.

## Spin and Clifford-module constructions

- [[def-spin-lift-of-oriented-orthonormal-frame-bundle]] fixes the right-action
  convention and defines a Spin lift over the oriented orthonormal frame
  bundle.
- [[lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor]] proves
  existence exactly when $w_2=0$ and the free transitive $H^1(M;\mathbb F_2)$
  action on isomorphism classes. Rank zero is explicitly excluded from that
  torsor statement.
- [[def-even-dimensional-spinor-bundle-chirality-and-spin-connection]]
  defines the associated spinor bundle, the volume chirality operator, and
  the lifted Levi–Civita connection.
- [[def-graded-hermitian-clifford-module-and-geometric-dirac]] gives the
  compatible Clifford action, Hermitian grading and Dirac operator.
- [[lem-spinor-and-clifford-associated-bundles-are-well-defined]] checks the
  associated-bundle transition laws, connection gluing, relative curvature
  and relative trace form.
- [[lem-good-cover-nerve-computes-singular-cohomology]] supplies the local
  nerve-to-singular comparison needed by the $w_2$ obstruction proof.

## Analytic and index route

The proof chain is explicit. [[lem-geometric-dirac-operator-is-well-defined]]
checks frame independence and formal symmetry. The full
[[lem-lichnerowicz-formula-for-geometric-dirac-operators]] derives $D^2$ as
the connection Laplacian plus scalar curvature and the relative twisting
curvature. On a closed manifold [[lem-dirac-maximal-domain-is-h1]] identifies
the maximal domain, and
[[lem-chiral-dirac-is-fredholm-with-kernel-and-cokernel]] proves Fredholmness.
The supertrace identity is proved in
[[lem-dirac-heat-trace-and-mckeen-singer-index]].

For the local index density,
[[lem-dirac-heat-parametrix-has-graph-norm-remainder]] supplies the
differentiated Duhamel remainder,
[[lem-getzler-radial-gauge-oscillator-leading-term]] derives the rescaled
oscillator and lower-order supertrace vanishing, and
[[lem-mehler-supertrace-normalization-is-ahat-times-relative-chern-character]]
computes its normalized leading coefficient. The characteristic forms and
real-coefficient Chern–Weil interpretation are fixed by
[[def-ahat-and-relative-chern-character-forms]] and the declared Chern–Weil
supplier. Combining these steps gives
[[thm-geometric-clifford-module-dirac-index-formula]]; the spin case with any
finite-rank complex twist is
[[cor-spin-dirac-index-formula-with-arbitrary-twist]].

The untwisted positive-scalar-curvature consequence is
[[prop-positive-scalar-curvature-forces-untwisted-spinor-kernel-zero]]. A
twist is not covered by this vanishing claim: its curvature term in
Lichnerowicz's identity can be nonzero.

## Axiom and supplier status

The carriers declare full AC where inherited analytic, bundle, classifying,
or Chern–Weil suppliers require it. The Fourier counterexample on the B page
uses only countable choice. These branches are kept distinct. The
complex-spin-module statement
[[thm-complex-spin-modules-and-compact-reducibility]] remains conditional on
the PA-04 items
[[lem-clifford-even-subalgebra-signature-identification]] and
[[thm-real-complex-clifford-algebra-classification]]. The actual supplier body
and Step-1 record are not ready, so every carrier that uses its irreducible
module or half-spin decomposition remains escalated at handoff. This affects
the spinor construction, associated-bundle verification, oscillator
normalization, index theorem, positive-curvature statement, and the
spin-dependent B examples. It does not remove or weaken those claims.

Sources and dispositions are recorded item by item in the batch coverage
evidence. The cited index notes are not treated as substitutes for the
locally supplied analytic remainder or the oscillator calculation.
