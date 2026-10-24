---
id: pthm-qftx-n2-monopole-condensation-after-n1-perturbation
kind: physics-theorem
title: Conditional monopole Higgs vacuum after a small N=1 perturbation
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 11
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-moduli-and-dualities
deps:
  - def-qftx-n2-coulomb-branch-data
  - def-qftx-n2-dual-higgs-flux-tube-sector
  - def-qftx-n2-monopole-local-dual-higgs-model
  - def-qftx-susy-vacuum-moduli-data
  - post-qftx-n2-seiberg-witten-effective-solution
  - post-qftx-n2-vector-hypermultiplet-model
  - pthm-qftx-n2-dual-higgs-vortex-flux-and-tension
dependency_roles:
  def-qftx-n2-coulomb-branch-data: formulation-prerequisite
  def-qftx-n2-dual-higgs-flux-tube-sector: formulation-prerequisite
  def-qftx-n2-monopole-local-dual-higgs-model: formulation-prerequisite
  def-qftx-susy-vacuum-moduli-data: formulation-prerequisite
  post-qftx-n2-seiberg-witten-effective-solution: physical-assumption
  post-qftx-n2-vector-hypermultiplet-model: physical-assumption
  pthm-qftx-n2-dual-higgs-vortex-flux-and-tension: physical-result
proof_strategy: direct
physical_scope: Conditional local effective-model deduction near one pure-SU(2) N=2 monopole singularity after a small N=1 perturbation; the F/D vacuum and dual U(1) Higgs mass are proved, while linear electric confinement additionally assumes a minimizing finite-energy vortex sector and bounded endcaps. No UV continuum or framework-wide confinement claim is made.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: N. Seiberg and E. Witten, Electric-Magnetic Duality, Monopole Condensation, and Confinement in N=2 Supersymmetric Yang-Mills Theory
      url: https://arxiv.org/pdf/hep-th/9407087v1
      locator: "§5.6, printed pp. 29–31, equations (5.17)–(5.21): the local dual superpotential, F/D equations, monopole solution, Higgsing, and source's effective-model confinement interpretation."
    - title: Adel Bilal, Duality in N=2 SUSY SU(2) Yang-Mills Theory
      url: https://arxiv.org/pdf/hep-th/9601007v1
      locator: "§5.3, printed pp. 20–21: the weakly coupled dual monopole patch and its domain of applicability."
    - title: "David Tong, TASI Lectures on Solitons: Instantons, Monopoles, Vortices and Kinks"
      url: https://davidtong.org/pdfs/teaching/solitons/tasi.pdf
      locator: "§4.6.2, printed pp. 106–108: the Meissner flux-tube interpretation in a different N=2 SQCD model and its explicit bulk-solution limitation."
verification:
  precheck: pass
---

## Statement

Use natural units $c=\hbar=1$, metric
$\eta=\operatorname{diag}(-1,1,1,1)$, and the local monopole patch of the
selected pure-SU(2) N=2 source-proposed low-energy model. Let $u(A_D)$,
$c=u'(0)\ne0$, $M$, $\widetilde M$, $g_D$, and $\mu$ be the data in the
local dual-Higgs definition, with $\mu\ne0$ and
$(|\mu c|/\sqrt2)^{1/2}$ well below the effective cutoff. Restrict to a
neighborhood of $A_D=0$ on which $u'(A_D)\ne0$. The supersymmetric vacuum
equations in this patch have exactly one $U(1)_D$ gauge orbit, represented
by

$$A_D=0,\qquad M\widetilde M=-\frac{\mu c}{\sqrt2},\qquad |M|=|\widetilde M|=v:=\left(\frac{|\mu c|}{\sqrt2}\right)^{1/2}>0.$$

Thus the local monopole fields have nonzero gauge-fixed amplitudes and
$U(1)_D$ is fully Higgsed. With the canonical kinetic normalization of the
local model, the dual vector mass is

$$m_D^2=2g_D^2\bigl(|M|^2+|\widetilde M|^2\bigr)=4g_D^2v^2>0.$$

For the confinement conclusion, make the following additional explicit
effective-model assumption: for a fixed nonzero original electric test-charge
sector and every sufficiently large separation $L$, the minimum-energy
configuration in that sector is a straight, translation-invariant dual
vortex of nonzero winding as defined here, and its endcap energy is bounded
uniformly in $L$. If that flux-tube sector exists, its original electric
flux is quantized and its tension is positive; the corresponding potential
has $V(L)=\sigma L+O(1)$, where $O(1)$ denotes a term bounded uniformly as
$L\to\infty$. This is linear confinement only in the stated local effective
model and under the stated vortex/minimization assumption. The theorem does
not prove that a vortex exists or minimizes the energy.

## Statement references

[Seiberg and Witten, §5.6, equations (5.17)–(5.21)](https://arxiv.org/pdf/hep-th/9407087v1).

[Bilal, §5.3](https://arxiv.org/pdf/hep-th/9601007v1).

[Tong, §4.6.2](https://davidtong.org/pdfs/teaching/solitons/tasi.pdf).

## Facts & Assumptions

**Given:** The pure-SU(2) N=2 source-proposed solution, its one-monopole
dual patch, the canonical local dual-Higgs data, the small perturbation
regime, and, for the last conclusion only, the explicit existence and
minimization assumption in the Statement.

[A1] [[post-qftx-n2-vector-hypermultiplet-model]]: the current carrier fixes the global gauge group to $SU(2)$ and specifies an N=1 vector-plus-adjoint-chiral sector with a $\sqrt2 g$ coupling, but it also adopts one hypermultiplet in an arbitrary finite-dimensional unitary representation. It therefore does not establish the empty-matter pure-SU(2) input required by the source-proposed solution used here. The deductions are conditional on a matching pure-model input; that interface and this carrier's Step 1 readiness remain unresolved.

[A2] [[post-qftx-n2-seiberg-witten-effective-solution]]: the pure-SU(2) source-proposed solution uses a local $U(1)_D$ frame near $a_D=0$ with a charge-one monopole hypermultiplet and the small N=1 perturbation $\mu u(A_D)$.

[F1] [[def-qftx-n2-monopole-local-dual-higgs-model]]: $W_\mu=\sqrt2 A_D M\widetilde M+\mu u(A_D)$, $D=g_D(|M|^2-|\widetilde M|^2)$, the scalar potential is the sum of the three squared holomorphic derivatives and $D^2/2$, and the dual charges are $+1,-1$.

[F2] [[def-qftx-susy-vacuum-moduli-data]]: in the canonical scalar model a supersymmetric vacuum is exactly an orbit of simultaneous zeros of all F and D maps under the compact gauge group.

[F3] [[def-qftx-n2-dual-higgs-flux-tube-sector]]: a nonzero-winding tube profile is a smooth finite-energy static configuration whose phase winding and asymptotic gauge condition define its dual magnetic/original electric flux and transverse tension.

[F4] [[pthm-qftx-n2-dual-higgs-vortex-flux-and-tension]]: for any such admitted nonzero-winding profile, the flux is $2\pi n$ and the transverse tension is strictly positive; this supplier proves no profile existence or minimization.

## Proof

**Given:** [A2] and [F1] specify the local model. The mass term is small
enough that the stated patch applies, and $u'(A_D)\ne0$ throughout the
chosen neighborhood.

1.1 The current model carrier [A1] fixes the $SU(2)$ gauge and coupling
conventions but includes one hypermultiplet, so it does not supply the
no-matter assumption in [A2]. We retain that pure-model input separately and
condition this calculation on the exact local effective data [F1].
Differentiating its superpotential gives
$\partial_{A_D}W_\mu=\sqrt2M\widetilde M+\mu u'(A_D)$,
$\partial_MW_\mu=\sqrt2A_D\widetilde M$, and
$\partial_{\widetilde M}W_\mu=\sqrt2A_DM$. By [F2], a supersymmetric
vacuum in this canonical model must set all three derivatives and
$D=g_D(|M|^2-|\widetilde M|^2)$ equal to zero. [A1, A2, F1, F2, given, algebra]

2.1 If $A_D\ne0$, the second and third equations in step 1.1 force
$M=\widetilde M=0$, after which the first equation is
$\mu u'(A_D)=0$, contradicting $\mu\ne0$ and the nonvanishing derivative
on the patch. Hence $A_D=0$. The first equation then gives
$M\widetilde M=-\mu c/\sqrt2\ne0$, so both fields are nonzero.
[F1, step 1.1, given, algebra]

3.1 The D equation in step 1.1 and $g_D>0$ give
$|M|=|\widetilde M|=:v$. Taking absolute values in the product equation
from step 2.1 yields $v^2=|\mu c|/\sqrt2$, so
$v=(|\mu c|/\sqrt2)^{1/2}>0$. [F1, step 1.1, step 2.1, algebra]

4.1 Given any solution of these equations, choose a $U(1)_D$ phase so that
$M=v$ is positive real. The product equation then uniquely fixes
$\widetilde M=-\mu c/(\sqrt2v)$. Thus every solution is gauge-equivalent
to this representative, proving uniqueness of the vacuum orbit in the
chosen patch. [F1, step 2.1, step 3.1, choose]

5.1 Since $M\ne0$, a gauge transformation that fixes the representative
must satisfy $e^{i\alpha}M=M$, hence $e^{i\alpha}=1$. The stabilizer is
trivial, so $U(1)_D$ is fully Higgsed. [F1, step 3.1, step 4.1, algebra]

5.2 Write $\widetilde A_{c,\mu}=\widetilde A_\mu/g_D$ for the canonically
normalized gauge field. Expanding the scalar kinetic terms from [F1] around
the constant representative gives the quadratic vector term
$-g_D^2(|M|^2+|\widetilde M|^2)
\widetilde A_{c,\mu}\widetilde A_c^{\mu}$. Comparing with the Proca
normalization $-m_D^2\widetilde A_{c,\mu}\widetilde A_c^{\mu}/2$
gives $m_D^2=2g_D^2(|M|^2+|\widetilde M|^2)=4g_D^2v^2>0$.
[F1, step 3.1, step 4.1, algebra]

6.1 Under the additional vortex/minimization hypothesis in the Statement,
[F4] gives nonzero quantized original electric flux and a tension
$\sigma>0$. The interior of a translation-invariant tube of length $L$
contains the same transverse profile at each longitudinal coordinate, so
its bulk energy is $\sigma L$. The uniformly bounded endcap contribution
therefore gives $V(L)=\sigma L+O(1)$, which is linear confinement in this
effective model. This last conclusion is conditional: no preceding step
establishes existence or minimization of the required profile.
[F3, F4, given, algebra] ∎

## Remarks

The exact unresolved prerequisite for the unqualified confinement part is a
proof that the local Seiberg--Witten dual-Higgs model admits a finite-energy
nonzero-winding vortex that minimizes the external-charge sector with
bounded endcap energy. The source-reported dual Meissner interpretation and
the conditional flux calculation do not supply that existence/minimization
argument. This item therefore remains escalated until that premise is
verified or a complete local alternative is authored.
