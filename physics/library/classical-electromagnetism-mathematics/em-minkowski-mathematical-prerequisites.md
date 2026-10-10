---
page: em-minkowski-mathematical-prerequisites
title: Em Minkowski Mathematical Prerequisites
status: draft
items: [def-em-minkowski-affine-space,
        lem-em-boost-preserves-metric,
        lem-em-proper-time-reparametrization,
        lem-em-antisymmetric-tensor-contraction]
examples: []
---

The finite-dimensional Minkowski algebra used by the covariant formulation of
classical electromagnetism. The definition [[def-em-minkowski-affine-space]]
fixes the affine four-space with its form $\eta$ of signature $(-1,1,1,1)$, the
causal classification and the future cone $C^+$, the standard orientation,
Lorentz maps with the matrix criterion $M^{\mathsf T}\eta M=\eta$, the proper
and orthochronous classes, frames, and the component laws of tensors under a
frame change, with the fixed positive scalar $c$ carried as extra structure.
The lemma [[lem-em-boost-preserves-metric]] verifies that the explicit boost
$\Lambda_\beta$ preserves the form, has determinant $1$, preserves the future
cone and has inverse $\Lambda_{-\beta}$, and records that the hypothesis
$0\le\beta<1$ is not removable. The lemma
[[lem-em-proper-time-reparametrization]] constructs proper time along a $C^1$
future timelike curve, proves that the reparametrizing function is strictly
increasing with inverse derivative $c/\sqrt{g}$, obtains the unit tangent with
$\eta(U,U)=-c^2$, and disposes of the null and straight-line cases. The lemma
[[lem-em-antisymmetric-tensor-contraction]] identifies the index-raised
operator $\Phi$ of a skew bilinear form, proves $\eta(u,\Phi(u))=0$, and shows
that the conditional equation $mU'=q\Phi(U)$ preserves $\eta(U,U)$, pointwise
operators of a varying form included.

All items are mathematics: they carry `domain: mathematics`, depend only on
mathematical suppliers, and assert no physical conclusion. The identification
of the affine space with physical spacetime, of $c$ with the vacuum speed of
light, and of the conditional force equation with the Lorentz force are adopted
physical premises belonging to the consuming physical items. The companion
examples page tests the hypothesis boundaries of these statements.
