---
id: ex-curvature-and-first-chern-form-of-a-line-bundle
kind: example
title: Curvature and first Chern form of a complex line
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-smooth-vector-bundle-rank-fibre-and-trivial-bundle
  - def-complex-linear-and-compatible-bundle-connections
  - def-complex-projective-bundle-and-tautological-complex-line
  - lem-compatible-connections-exist-on-smooth-hermitian-and-euclidean-bundles
  - def-chern-pontryagin-and-euler-characteristic-forms
  - lem-first-chern-form-agrees-with-the-topological-line-class
  - thm-general-stokes-theorem
  - thm-curvature-two-form-structure-equation
  - thm-de-rham-theorem
  - def-de-rham-integration-cochain-map
  - thm-smooth-singular-chains-compute-singular-homology
  - def-fundamental-class-of-a-compact-oriented-manifold
  - def-kronecker-evaluation-pairing
justified_by: []
forward_refs: []
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
    - title: Stefan Haller, The Atiyah–Singer Index Theorem, Vienna lecture notes (2013)
      url: https://www.mat.univie.ac.at/~stefan/files/ASIT/ASIT.pdf
      locator: "§II.4.5, Example II.4.5, printed pp. 91–92 (PDF pp. 90–91): tautological CP¹ frames, transition, and two-disk Stokes calculation"
---

## Example

Assume full AC. Let $\gamma\to\mathbb{CP}^1$ be the tautological complex line,
with its Hermitian metric induced from $\mathbb C^2$, and let $\nabla$ be any
Hermitian connection on it. More generally, for a Hermitian line $L$ with
Hermitian connection on a finite-dimensional Hausdorff second-countable smooth
manifold $M$, possibly with boundary, every local unitary frame $s$ satisfies
$\nabla s=\omega s$ with $\omega$ imaginary-valued,
$\Omega_\nabla=d\omega$, and
$$c_1(\nabla)=-\frac{d\omega}{2\pi i}.$$
For the complex orientation of $\mathbb{CP}^1$,
$$\int_{\mathbb{CP}^1}c_1(\nabla)=-1.$$
By the first-Chern comparison, this is the period of the real image of the
published topological class $c_1(\gamma)=e(\gamma_{\mathbb R})$ on the oriented
fundamental class.

## Facts & Assumptions

**Given:** Full AC, a finite-dimensional Hausdorff second-countable smooth
manifold $M$ (possibly with boundary), a Hermitian line $L\to M$ with a
Hermitian connection, and the tautological line $\gamma\to\mathbb{CP}^1$
with its induced metric and a supplied Hermitian connection.

[A1] Full AC is the choice-function principle
([[def-axiom-of-choice]]).

[F1] The tautological complex line over the projective bundle of $\mathbb C^2$
is a complex line bundle ([[def-complex-projective-bundle-and-tautological-complex-line]]).

[F2] The local smooth frames verify the smooth rank-one bundle charts
([[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]).

[F3] Full AC supplies a compatible connection for a supplied Hermitian metric
([[lem-compatible-connections-exist-on-smooth-hermitian-and-euclidean-bundles]]).

[F4] A complex connection obeys the function Leibniz rule
([[def-complex-linear-and-compatible-bundle-connections]]).

[F5] A Hermitian connection obeys the Hermitian metric derivative identity
([[def-complex-linear-and-compatible-bundle-connections]]).

[F6] The curvature in a local frame is
$\Omega=d\omega+\omega\wedge\omega$
([[thm-curvature-two-form-structure-equation]]).

[F7] The line's first Chern form is $-\Omega_\nabla/(2\pi i)$
([[def-chern-pontryagin-and-euler-characteristic-forms]]).

[F8] For Hermitian connections the Chern forms are real-valued
([[def-chern-pontryagin-and-euler-characteristic-forms]]).

[F9] Stokes gives $\int_Dd\eta=\int_{\partial D}\eta$ for the oriented
two-disks used below ([[thm-general-stokes-theorem]]).

[F10] The first-Chern lemma identifies the de Rham class of this form with the
real image of the topological line class
([[lem-first-chern-form-agrees-with-the-topological-line-class]]).

[F11] The de Rham isomorphism is induced by integration on smooth singular
simplices ([[thm-de-rham-theorem]], [[def-de-rham-integration-cochain-map]]).

[F12] Smooth singular homology computes singular homology under the inherited
countable-choice hypothesis
([[thm-smooth-singular-chains-compute-singular-homology]]).

[F13] The complex orientation determines the fundamental class of the compact
boundaryless manifold ([[def-fundamental-class-of-a-compact-oriented-manifold]]).

[F14] Evaluation of a cohomology class on the fundamental cycle is the
Kronecker pairing ([[def-kronecker-evaluation-pairing]]).

## Verification

**Given:** The objects and hypotheses above, and the standard affine complex
coordinates on $\mathbb{CP}^1$.

1.1 The tautological line is the smooth subbundle of $\mathbb{CP}^1\times\mathbb C^2$ whose fiber at a line $\ell$ is $\ell$; on $U=\{[1:z]\}$ and $V=\{[w:1]\}$ its nowhere-zero frames are $s_U([1:z])=(1,z)$ and $s_V([w:1])=(w,1)$. These smooth local trivializations make it a smooth complex line, and the induced Hermitian metric and [F3] provide a Hermitian connection. [A1, F1, F2, F3, given, construct]

1.2 In a local unitary frame of any Hermitian line, the metric derivative identity in [F5] gives $\omega+\overline\omega=0$. The line curvature structure equation has no quadratic term because a scalar one-form wedges with itself to zero, so [F6] gives $\Omega_\nabla=d\omega$; [F7] then gives the normalized Chern-form formula, which is real-valued by [F8]. The same scalar structure equation applies in any smooth complex frame, even when that frame is not unitary. [F5, F6, F7, F8, algebra]

1.3 On $U\cap V$, $z=1/w$ and $s_U=z s_V$; applying the connection Leibniz rule in [F4] yields $\omega_U-\omega_V=z^{-1}dz=dz/z$. Set $D_U=\{[1:z]:|z|\leq1\}$ and $D_V=\{[w:1]:|w|\leq1\}$. These disks cover $\mathbb{CP}^1$; their boundary orientations are opposite, and $z=e^{it}$ positively parametrizes $\partial D_U$. By [F9], $$\int_{\mathbb{CP}^1}\Omega_\nabla=\int_{D_U}d\omega_U+\int_{D_V}d\omega_V=\int_{\partial D_U}(\omega_U-\omega_V)=\int_{S^1}\frac{dz}{z}=2\pi i.$$ The determinant normalization [F7] therefore gives $\int_{\mathbb{CP}^1}c_1(\nabla)=-1$. In particular, this curvature cannot vanish identically. [F4, F6, F7, F9, given, algebra]

2.1 By [F10], the real de Rham class of $c_1(\nabla)$ is the image of $c_1(\gamma)$. The de Rham isomorphism [F11], the smooth-chain comparison [F12], the complex-oriented fundamental class [F13], and the pairing [F14] identify the calculated integral with $\langle\rho(c_1(\gamma)),[\mathbb{CP}^1]\rangle$. This proves the stated topological normalization, with the sign fixed by the complex orientation and the library's convention. [F10, F11, F12, F13, F14, step 1.3]

3.1 If a local unitary frame changes by $s'=g s$ for a smooth $g:U\to U(1)$, the Leibniz rule gives $\omega'=\omega+g^{-1}dg$. This added one-form is imaginary and closed: $|g|=1$ gives $d\overline g=-g^{-2}dg$, so $\overline{g^{-1}dg}=-g^{-1}dg$, and $d(g^{-1}dg)=-g^{-2}dg\wedge dg=0$. It is locally exact by writing $g=e^{i\theta}$ locally. It need not be globally exact: for $g(z)=z$ on $S^1$, $\int_{S^1}g^{-1}dg=2\pi i$, whereas Stokes [F9] makes the integral of an exact one-form on $S^1$ zero, applying Stokes to the real and imaginary parts. Thus curvature and Chern form are unchanged under every unitary frame change, without asserting a global primitive. The disk computation uses explicit charts and adds no choices once $\nabla$ is supplied; full AC enters through the projective-line, compatible-connection, and first-Chern comparison suppliers. [A1, F3, F4, F6, F7, F9, algebra] $\square$
