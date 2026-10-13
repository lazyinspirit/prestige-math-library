---
page: projective-perverse-hard-lefschetz-and-decomposition
title: "Projective Perverse Hard Lefschetz And Decomposition"
status: published
items: [lem-perverse-closed-support-splitting-is-equivalent-to-costalk-stalk-isomorphism,
        lem-middle-lefschetz-primitive-polarization-follows-from-nonmiddle-polarizations,
        lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction,
        thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps,
        thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology]
requires:
  - affine-perverse-vanishing-and-universal-hyperplanes
  - analytic-derived-six-operations-and-duality
  - equivariant-constructible-perverse-foundations
  - geometric-fixed-parts-and-gauss-manin-semisimplicity
  - lefschetz-splitting-in-bounded-triangulated-categories
  - proj-projective-schemes-twisting-sheaves-and-ampleness
  - projective-hodge-polarization-foundations
  - proper-hyperresolutions-and-mixed-hodge-restriction-images
  - relations-functions-and-quotients
---

**Objective.** This page assembles the compact-source relative hard Lefschetz,
decomposition and semisimplicity theorem for a projective morphism whose source
is smooth projective, together with the two local mechanisms the induction needs.
It opens with the closed-support splitting criterion: for a closed inclusion
$Z\hookrightarrow Y$ with open complement, the degree-zero costalk-to-stalk map
of an ordinary constructible perverse sheaf $P$ is invertible exactly when $P$
splits as $i_*A\oplus j_{!*}j^*P$, with $A$ the perverse degree-zero costalk of
$P$; this criterion asserts no invertibility for projective direct images and
exposes it as a separate intersection-form obligation. The second local result
produces the middle primitive polarization of a smooth projective variety from
the nonmiddle graded forms and a Kähler limit $\Lambda=\lim_{\epsilon\downarrow0}
\ker(L+\epsilon\eta)$, computing its radical and its orthogonal complement to
$\eta\ker(L:H^{n-2}\to H^n)$ inside $\ker(L:H^n\to H^{n+2})$ without assuming
middle positivity. The central induction step then closes the simultaneous
package: relative $\eta$ hard Lefschetz, a finite normalized perverse splitting,
semisimplicity with semisimple complexified IC local systems, graded target hard
Lefschetz, pure Hodge graded groups and polarized double primitive
decompositions, by lexicographic induction on the defect and the image
dimension, preserving arbitrary projective fibres and assuming neither
semismallness nor affine paving. The page concludes with the resulting
compact-source theorem for an ample class and with its characteristic-zero
coefficient version: for any field $k$ of characteristic zero the complex
$Rf_*k_X[n]$ is a finite direct sum of shifts of simple perverse sheaves,
without any embedding of $k$ into $\mathbb C$; the rational simple constituents
are handled by the scalar-extension lemma on their semisimple
complexifications.
