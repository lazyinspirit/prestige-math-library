---
id: ex-qftx-n2-monopole-perturbed-vacuum
kind: example
title: Symbolic monopole vacuum in the local dual U(1) model
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 8
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-moduli-and-dualities-examples
deps:
- def-qftx-n2-monopole-local-dual-higgs-model
- def-qftx-susy-vacuum-moduli-data
dependency_roles:
  def-qftx-n2-monopole-local-dual-higgs-model: formulation-prerequisite
  def-qftx-susy-vacuum-moduli-data: formulation-prerequisite
proof_strategy: direct
physical_scope: Symbolic local vacuum calculation for the source-motivated dual U(1) effective model near one monopole singularity with nonzero small N=1 perturbation; it asserts no flux-tube existence, confinement, or UV continuum theory.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: N. Seiberg and E. Witten, Electric-Magnetic Duality, Monopole Condensation, and Confinement in N=2 Supersymmetric Yang-Mills Theory
    url: https://arxiv.org/pdf/hep-th/9407087v1
    locator: '§5.6, printed pp. 29–31, equations (5.17)–(5.21): local superpotential and F/D solution near the monopole point.'
  - title: Adel Bilal, Duality in N=2 SUSY SU(2) Yang-Mills Theory
    url: https://arxiv.org/pdf/hep-th/9601007v1
    locator: '§5.3, printed pp. 20–21: weakly coupled dual monopole description at one singularity.'
verification:
  precheck: pass
---

## Example

In the local dual $U(1)_D$ model, let $u(A_D)$ be holomorphic near
$A_D=0$, let $c=u'(0)\ne0$, and choose a neighborhood small enough that
$u'(A_D)\ne0$ throughout. Choose a nonzero small perturbation
$\mu$ for which $(|\mu c|/\sqrt2)^{1/2}$ is below the effective cutoff.
The supersymmetric vacuum equations have the gauge orbit represented by

$$A_D=0,\qquad M=v>0,\qquad \widetilde M=-\frac{\mu c}{\sqrt2v},\qquad v=\left(\frac{|\mu c|}{\sqrt2}\right)^{1/2}.$$

At this representative $|M|=|\widetilde M|=v$, so the D equation vanishes.
The dual $U(1)_D$ is fully Higgsed and the canonical dual vector mass is
$m_D^2=4g_D^2v^2>0$. This is a symbolic local effective-model calculation.
The example does not assert existence of a finite-energy vortex or linear
confinement; the zero-perturbation case $\mu=0$ is outside its scope.

## Example references

[Seiberg and Witten, §5.6, equations (5.17)–(5.21)](https://arxiv.org/pdf/hep-th/9407087v1).

[Bilal, §5.3](https://arxiv.org/pdf/hep-th/9601007v1).

Local dual U(1) field content, potential, and mass normalization: [[def-qftx-n2-monopole-local-dual-higgs-model]].

F/D-flat vacuum and compact-gauge quotient definition: [[def-qftx-susy-vacuum-moduli-data]].

## Facts & Assumptions

**Given:** The local dual-Higgs fields, charge assignments, superpotential,
D map, kinetic normalization, and cutoff regime in the Example.

[F1] [[def-qftx-n2-monopole-local-dual-higgs-model]]: $W_\mu=\sqrt2 A_D M\widetilde M+\mu u(A_D)$, $D=g_D(|M|^2-|\widetilde M|^2)$, the F/D potential is a sum of squares, and the charged hypermultiplet kinetic terms are canonical while $A_D$ has kinetic coefficient $g_D^{-2}$, and the gauge kinetic term fixes the dual vector mass normalization.

[F2] [[def-qftx-susy-vacuum-moduli-data]] supplies the convention of taking compact-group orbits of simultaneous F/D zeros. Its global polynomial-superpotential model is not assumed to include this local holomorphic model; the latter's potential and vacuum equations are supplied directly by [F1].

[A1] Assume $\mu\ne0$, $c=u'(0)\ne0$, $u'(A_D)\ne0$ throughout the selected neighborhood, and the induced scale is below the effective cutoff.

## Verification

**Given:** [A1], the local F/D data [F1], and the vacuum definition [F2].

1.1 Differentiating $W_\mu=\sqrt2 A_D M\widetilde M+\mu u(A_D)$ gives
$F_{A_D}=\sqrt2 M\widetilde M+\mu u'(A_D)$,
$F_M=\sqrt2 A_D\widetilde M$, and
$F_{\widetilde M}=\sqrt2 A_DM$. The neutral kinetic term in [F1] is
$g_D^{-2}|\partial A_D|^2$, so set $A_{\mathrm{can}}=A_D/g_D$.
By the chain rule its canonical auxiliary field is
$F_{A_{\mathrm{can}}}=\partial W_\mu/\partial A_{\mathrm{can}}
=g_D\,\partial W_\mu/\partial A_D=g_DF_{A_D}$. Since $g_D>0$, the
canonical and connection-normalized neutral F equations have the same zero
set. Directly from [F1], the potential is
$|g_DF_{A_D}|^2+|F_M|^2+|F_{\widetilde M}|^2+D^2/2$;
positivity makes its zero locus exactly these four simultaneous zeros.
This argument uses only local holomorphy of $u$, without applying the global
polynomial hypothesis of [F2]. The zero locus is invariant under the stated
compact $U(1)_D$ action, and we use its orbit convention.
At $A_D=0$, the first equation
is $\sqrt2M\widetilde M+\mu c=0$, while the other two vanish.
[A1, F1, F2, given, algebra]

2.1 Set $v=(|\mu c|/\sqrt2)^{1/2}>0$ and
$\widetilde M=-\mu c/(\sqrt2v)$, with $M=v$. Then
$M\widetilde M=-\mu c/\sqrt2$ and
$|\widetilde M|=|\mu c|/(\sqrt2v)=v$, so all F equations and
$D=g_D(|M|^2-|\widetilde M|^2)=0$ hold. [A1, F1, F2, step 1.1, construct, algebra]

3.1 Any solution in this patch with $A_D\ne0$ would have
$M=\widetilde M=0$ by the last two F equations, contradicting
$\mu u'(A_D)\ne0$ in the first. Thus $A_D=0$; the first F equation fixes
the nonzero product and the D equation fixes equal magnitudes. The U(1)
phase can then make $M=v$ and fixes $\widetilde M$ as in the Example, so
the solution is one gauge orbit. [A1, F1, F2, step 1.1, step 2.1, algebra]

4.1 Expanding the canonical kinetic terms around $M=v$ and
$|\widetilde M|=v$, and canonically normalizing
$\widetilde A_c=\widetilde A/g_D$, gives
$m_D^2=2g_D^2(|M|^2+|\widetilde M|^2)=4g_D^2v^2>0$. This verifies the
local Higgs mass only; it supplies no vortex solution. [F1, step 2.1, algebra] ∎
