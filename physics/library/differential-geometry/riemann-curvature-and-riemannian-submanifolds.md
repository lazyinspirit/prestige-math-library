---
page: riemann-curvature-and-riemannian-submanifolds
title: Riemann Curvature and Riemannian Submanifolds
status: published
items: [def-curvature-of-an-affine-connection, lem-curvature-is-c-infinity-linear-in-all-three-vector-fields, thm-curvature-is-a-type-one-three-tensor, prop-curvature-is-skew-in-its-first-two-arguments, prop-coordinate-formula-for-the-curvature-tensor, def-curvature-of-a-vector-bundle-connection, prop-vector-bundle-curvature-is-an-endomorphism-valued-two-form, thm-curvature-two-form-structure-equation, thm-second-bianchi-identity-for-a-bundle-connection, prop-flat-connections-have-locally-path-independent-parallel-transport-on-a-coordinate-ball, thm-a-flat-connection-admits-local-parallel-frames, def-riemann-curvature-four-tensor, thm-first-bianchi-identity, thm-algebraic-symmetries-of-the-riemann-tensor, thm-differential-second-bianchi-identity, def-sectional-curvature, lem-sectional-curvature-is-independent-of-the-basis-of-the-plane, thm-sectional-curvatures-determine-the-riemann-tensor, def-constant-sectional-curvature-and-space-form, prop-curvature-tensor-of-constant-sectional-curvature, def-ricci-curvature, lem-ricci-curvature-is-symmetric-and-basis-independent, def-scalar-curvature, prop-scalar-curvature-is-twice-the-sum-of-sectional-curvatures-of-coordinate-planes, def-kulkarni-nomizu-product-trace-free-ricci-and-weyl-curvature, prop-ricci-decomposition-of-the-riemann-tensor-in-dimension-at-least-three, thm-contracted-second-bianchi-identity, thm-schurs-lemma-for-pointwise-constant-sectional-curvature, thm-a-riemannian-manifold-is-flat-iff-it-is-locally-isometric-to-euclidean-space, def-tangential-and-normal-projections-along-a-riemannian-submanifold, def-induced-connection-and-second-fundamental-form, thm-the-induced-connection-is-levi-civita, lem-the-second-fundamental-form-is-a-symmetric-normal-bundle-valued-two-tensor, def-normal-connection, def-shape-operator, thm-weingarten-equation-and-adjointness-of-the-shape-operator, thm-gauss-equation-for-a-riemannian-submanifold, thm-codazzi-equation-for-a-riemannian-submanifold, thm-ricci-equation-for-the-normal-connection, def-totally-geodesic-submanifold, thm-equivalent-characterizations-of-a-totally-geodesic-submanifold, def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface, prop-euclidean-hypersurface-sectional-curvature-from-principal-curvatures, thm-gausss-theorema-egregium, def-mean-curvature-vector, prop-first-variation-of-volume-for-a-normal-variation, rem-mean-curvature-and-minimal-submanifolds, fs-curvature-is-obtained-by-commuting-two-covariant-derivatives-without-a-bracket-correction, fs-christoffel-symbols-vanishing-at-one-point-implies-curvature-vanishes-there, fs-sectional-curvature-depends-on-an-ordered-basis-of-the-plane, fs-ricci-curvature-and-scalar-curvature-determine-the-full-riemann-tensor-in-every-dimension, fs-the-second-fundamental-form-is-intrinsic-to-the-abstract-riemannian-manifold, fs-zero-mean-curvature-implies-a-submanifold-is-totally-geodesic, ex-the-round-sphere-has-positive-constant-sectional-curvature, ex-euclidean-space-has-zero-curvature]
examples: []
---

Curvature measures the failure of two covariant derivatives to commute after
the derivative in the bracket direction has been removed. Throughout this
page the sign is
$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$.
The bracket correction is what makes the expression
$C^\infty(M)$-linear in all three vector-field arguments, hence a tensor.
The coordinate formula then records the same convention in Christoffel
symbols.

For a general vector-bundle connection, curvature is an
$\operatorname{End}(E)$-valued two-form. In a local frame its connection and
curvature forms satisfy
$\Omega=d\omega+\omega\wedge\omega$, with the order of matrix
multiplication retained, and the covariant exterior derivative gives the
second Bianchi identity. Vanishing curvature yields path-independent
parallel transport on a sufficiently small coordinate ball and local
parallel frames. These are local conclusions; no global holonomy conclusion
is being asserted.

For the Levi–Civita connection the four-tensor convention is
$\operatorname{Rm}(X,Y,Z,W)=g(R(X,Y)Z,W)$, so
$\operatorname{Rm}(u,v,v,u)$ is positive on a positively curved round sphere.
The first Bianchi identity and metric compatibility give the algebraic
symmetries, while differentiating curvature gives the differential second
Bianchi identity. Sectional curvature is the normalized value of
$\operatorname{Rm}(X,Y,Y,X)$ on a tangent two-plane; it is independent of the
chosen ordered basis, and all sectional curvatures together determine the
full Riemann tensor.

Constant sectional curvature is equivalently encoded by the standard metric
wedge expression for $\operatorname{Rm}$. Ricci and scalar curvature are its
successive traces, and scalar curvature is twice the sum over the coordinate
two-planes of an orthonormal basis. The Kulkarni–Nomizu product separates the
scalar, trace-free Ricci, and Weyl parts in the dimensions where those pieces
exist. The contracted Bianchi identity and Schur's lemma add differential
information; in particular, pointwise plane-independent sectional curvature
is constant on each connected component when the dimension is at least
three. Flatness is locally equivalent to Euclidean geometry under the stated
boundaryless hypothesis.

For an embedded Riemannian submanifold, orthogonal projection splits the
ambient derivative into tangential and normal parts. The tangential part is
the induced Levi–Civita connection, while the normal part is the symmetric
second fundamental form. For a normal field $\nu$, the convention
$S_\nu X=-(\overline\nabla_X\nu)^\top$ fixes the signs in the Weingarten,
Gauss, Codazzi, and Ricci equations. Those equations distinguish intrinsic
curvature from the extrinsic bending encoded by $\mathrm{II}$, the shape
operators, and the normal connection.

Total geodesy is the vanishing of $\mathrm{II}$ and, for boundaryless
submanifolds, is equivalent to the ambient preservation of intrinsic
geodesics. For an oriented hypersurface, the principal curvatures are the
eigenvalues of the self-adjoint shape operator; their product is extrinsic
Gaussian curvature and their average is the scalar mean curvature. Gauss's
equation relates these extrinsic quantities to intrinsic sectional
curvature, yielding the intrinsic character of Gaussian curvature for
surfaces.

For an immersion of positive dimension $m$, the mean-curvature vector on this
page uses the averaged convention
$\mathbf H=\frac1m\operatorname{tr}_g\mathrm{II}$. Consequently a compactly
supported normal variation satisfies
$A'(0)=-m\int\langle V,\mathbf H\rangle\,d\mu$ on an eligible compact domain.
When the source manifold is boundaryless, the same formula applies to an
arbitrary compactly supported variation. Minimal means $\mathbf H=0$; it does
not mean that the immersion is automatically totally geodesic or even a
volume minimizer.

Several selected statements explicitly record a countable-choice assumption
inherited from the library's projection, bundle, completeness, or integration
interfaces. In particular, the available coordinate-smoothness interface for
vector fields makes the first-Bianchi proof conditional on
$\mathrm{AC}_\omega$; that same assumption is propagated through the
algebraic-symmetry, sectional-curvature, Ricci/scalar, Ricci-decomposition,
contracted-Bianchi, and Schur consumers. The coordinate calculations that
follow those interfaces make no additional countable-family choice, and the
page narrative does not erase the item-level qualifications. The closing
false statements isolate the other essential boundaries:
the bracket term cannot be dropped, normal coordinates do not annihilate
curvature, sectional curvature is plane data rather than ordered-basis data,
Ricci and scalar curvature need not determine the whole tensor in higher
dimensions, and the second fundamental form is extrinsic.
