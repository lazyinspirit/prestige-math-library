---
page: compact-lie-groups-maximal-tori-and-peter-weyl-theory
title: Compact Lie Groups, Maximal Tori, and Peter–Weyl Theory
status: draft
items:
  - def-left-right-and-bi-invariant-borel-measure-on-a-lie-group
  - cor-normalized-haar-measure-on-a-compact-lie-group
  - prop-integration-against-haar-is-invariant-under-translations-and-conjugation
  - def-continuous-and-unitary-representation-of-a-compact-lie-group
  - thm-every-finite-dimensional-continuous-representation-of-a-compact-lie-group-is-unitarizable
  - cor-complete-reducibility-for-compact-lie-groups
  - def-matrix-coefficient-and-character-of-a-compact-group-representation
  - thm-schur-orthogonality-for-compact-lie-groups
  - cor-irreducible-characters-are-orthonormal-class-functions
  - prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics
  - def-torus-and-maximal-torus-in-a-compact-lie-group
  - thm-structure-of-a-compact-connected-abelian-lie-group
  - thm-maximal-tori-exist-in-compact-lie-groups
  - thm-every-element-of-a-compact-connected-lie-group-lies-in-a-maximal-torus
  - thm-conjugacy-of-maximal-tori
  - cor-every-compact-connected-abelian-subgroup-is-contained-in-a-maximal-torus
  - cor-rank-of-a-compact-connected-lie-group-is-well-defined
  - def-weyl-group-of-a-compact-connected-lie-group
  - thm-compact-group-weyl-group-is-finite
  - prop-conjugacy-classes-meet-a-fixed-maximal-torus-in-weyl-orbits
  - def-roots-of-a-compact-connected-lie-group
  - thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part
  - thm-analytic-and-root-system-weyl-groups-agree
  - def-weyl-jacobian-on-a-maximal-torus
  - prop-weyl-jacobian-is-well-defined-and-weyl-invariant
  - thm-weyl-integration-formula
  - def-character-and-cocharacter-lattices-of-a-torus
  - prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t
  - def-root-datum-of-a-compact-connected-lie-group
  - prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group
  - thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems
  - thm-compact-connected-lie-groups-are-classified-by-root-data
  - prop-central-quotients-correspond-to-intermediate-character-lattices
  - def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group
  - def-convolution-operator-associated-to-a-continuous-function-on-a-compact-group
  - lem-continuous-convolution-operators-are-hilbert-schmidt-and-compact
  - lem-compact-convolution-operators-decompose-into-finite-dimensional-invariant-subspaces
  - lem-compact-lie-groups-admit-central-continuous-approximate-identities
  - thm-peter-weyl-for-compact-lie-groups
  - cor-matrix-coefficients-are-uniformly-dense-in-continuous-functions-on-a-compact-lie-group
  - cor-finite-dimensional-unitary-representations-separate-points-of-a-compact-lie-group
  - cor-every-compact-lie-group-is-isomorphic-to-a-closed-matrix-lie-group
  - thm-highest-weight-classification-for-a-compact-connected-lie-group
  - prop-differentiation-relates-compact-group-and-complexified-lie-algebra-highest-weights
  - lem-weyl-denominator-and-anti-invariant-orbit-sum-basis
  - lem-weyl-orthogonality-identifies-the-highest-weight-character-numerator
  - thm-weyl-character-formula-for-compact-connected-lie-groups
  - cor-representation-ring-has-the-dominant-character-basis
  - fs-haar-measure-on-a-compact-group-is-only-left-invariant-not-right-invariant
  - fs-every-element-of-a-disconnected-compact-lie-group-lies-in-the-identity-components-maximal-torus
  - fs-a-root-system-determines-a-compact-connected-semisimple-group-up-to-isomorphism
  - fs-every-dominant-weight-of-the-abstract-weight-lattice-integrates-to-every-compact-group-form
  - fs-peter-weyl-says-every-continuous-function-is-a-finite-sum-of-matrix-coefficients
  - fs-every-unitary-representation-of-a-compact-group-is-finite-dimensional
examples: []
---

This page develops the global structure and representation theory of compact
connected Lie groups. It begins with normalized Haar measure
([[cor-normalized-haar-measure-on-a-compact-lie-group]]), the two-sided
invariance of the Haar integral
([[prop-integration-against-haar-is-invariant-under-translations-and-conjugation]]),
unitarizability of finite-dimensional representations by averaging
([[thm-every-finite-dimensional-continuous-representation-of-a-compact-lie-group-is-unitarizable]]),
complete reducibility, and Schur orthogonality
([[thm-schur-orthogonality-for-compact-lie-groups]]). A bi-invariant Riemannian
metric is produced by the same averaging construction
([[prop-compact-lie-groups-admit-bi-invariant-riemannian-metrics]]), and its
geodesics through the identity are exactly the one-parameter subgroups.

The torus theory that follows shows that compact connected abelian Lie groups
are quotients $\mathfrak t/\Lambda\cong(S^1)^r$
([[thm-structure-of-a-compact-connected-abelian-lie-group]]), that maximal
tori exist and contain every element and every torus
([[thm-maximal-tori-exist-in-compact-lie-groups]],
[[thm-every-element-of-a-compact-connected-lie-group-lies-in-a-maximal-torus]]),
and that maximal tori are conjugate, so the rank is well defined
([[thm-conjugacy-of-maximal-tori]]). The analytic Weyl group is then proved
finite, with connected torus centralizers and $C_G(T)=T$
([[thm-compact-group-weyl-group-is-finite]]), and identified with the Weyl
group of the root system through the compact root $SU(2)$ subgroups
([[thm-analytic-and-root-system-weyl-groups-agree]]).

Weyl integration ([[thm-weyl-integration-formula]]) and the character theory
that follows it are stated on the actual character lattice $X^*(T)$ of the
maximal torus: characters correspond to integral weights
([[prop-differentiation-identifies-characters-with-the-integral-weight-lattice-of-t]]),
the sandwich $Q\subseteq X^*(T)\subseteq P$ is proved with the simply connected
and adjoint endpoints
([[prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group]]), and
compact connected Lie groups are classified by root data
([[thm-compact-connected-lie-groups-are-classified-by-root-data]]).

Peter–Weyl theory is proved from the regular representations on $L^2(G)$,
continuous convolution operators, compact self-adjoint spectral theory, and
central continuous approximate identities
([[thm-peter-weyl-for-compact-lie-groups]]), with uniform density, separation of
points and the closed-matrix-group theorem as consequences. The page closes
with the compact highest-weight classification
([[thm-highest-weight-classification-for-a-compact-connected-lie-group]]), the
Weyl denominator and anti-invariant basis, the orthogonality identification of
the numerator, and the Weyl character formula on the finite central cover
$Z(G)^0\times G_{\mathrm{der}}^{\mathrm{sc}}\to G$
([[thm-weyl-character-formula-for-compact-connected-lie-groups]]), together with
the representation-ring basis by dominant characters. Six false statements
record the standard traps: bi-invariance is automatic for compact Haar measure,
connectedness is needed for torus containment, root systems determine groups
only up to isogeny, only the *actual* lattice weights integrate, Peter–Weyl
gives density and not finite equality, and unitary representations of compact
groups may be infinite-dimensional.
