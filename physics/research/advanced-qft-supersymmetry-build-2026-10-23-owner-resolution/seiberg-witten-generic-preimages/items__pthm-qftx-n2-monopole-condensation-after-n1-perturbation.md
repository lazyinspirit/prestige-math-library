---
id: pthm-qftx-n2-monopole-condensation-after-n1-perturbation
kind: physics-theorem
title: Conditional monopole Higgs vacuum after a small N=1 perturbation
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 10
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
- post-qftx-n2-pure-su2-ultraviolet-model
- pthm-qftx-n2-dual-higgs-vortex-flux-and-tension
- pthm-qftx-n2-linear-monopole-bps-vortex-bound
dependency_roles:
  def-qftx-n2-coulomb-branch-data: formulation-prerequisite
  def-qftx-n2-dual-higgs-flux-tube-sector: formulation-prerequisite
  def-qftx-n2-monopole-local-dual-higgs-model: formulation-prerequisite
  def-qftx-susy-vacuum-moduli-data: formulation-prerequisite
  post-qftx-n2-seiberg-witten-effective-solution: physical-assumption
  pthm-qftx-n2-dual-higgs-vortex-flux-and-tension: physical-result
  post-qftx-n2-pure-su2-ultraviolet-model: physical-assumption
  pthm-qftx-n2-linear-monopole-bps-vortex-bound: physical-result
proof_strategy: direct
physical_scope: Conditional local effective-model deduction near one pure-SU(2) N=2 monopole singularity after a small N=1 perturbation; the F/D vacuum and dual U(1) Higgs mass are proved, while linear electric confinement additionally assumes a minimizing finite-energy vortex sector and bounded endcaps. No UV continuum or framework-wide confinement claim is made.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: N. Seiberg and E. Witten, Electric-Magnetic Duality, Monopole Condensation, and Confinement in N=2 Supersymmetric Yang-Mills Theory
    url: https://arxiv.org/pdf/hep-th/9407087v1
    locator: '§5.6, printed pp. 29–31, equations (5.17)–(5.21): the local dual superpotential, F/D equations, monopole solution, Higgsing, and source''s effective-model confinement interpretation.'
  - title: Adel Bilal, Duality in N=2 SUSY SU(2) Yang-Mills Theory
    url: https://arxiv.org/pdf/hep-th/9601007v1
    locator: '§5.3, printed pp. 20–21: the weakly coupled dual monopole patch and its domain of applicability.'
  - title: 'David Tong, TASI Lectures on Solitons: Instantons, Monopoles, Vortices and Kinks'
    url: https://davidtong.org/pdfs/teaching/solitons/tasi.pdf
    locator: '§4.6.2, printed pp. 106–108: the Meissner flux-tube interpretation in a different N=2 SQCD model and its explicit bulk-solution limitation.'
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
$U(1)_D$ is fully Higgsed. With canonical charged-hypermultiplet kinetic terms in the
connection-normalized local model, the dual vector mass is

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
model and under the stated vortex/minimization assumption. The theorem does not prove that a vortex exists or minimizes the energy in the generic nonlinear model. In the separately specified constant-metric linear truncation $u=u_m+cA_D$, a supplied critical abelian-Higgs solution and fixed-flux finite-cylinder end traces with finite-energy collars suffice instead: the infimum of the full static energy is $4\pi v^2|n|L+O(1)$ without assuming that a straight tube already minimizes the energy. Arbitrary nonzero winding and arbitrary supplied vortex centres are allowed. Existence of those planar solutions and of collars matching a chosen probe model remains an explicit prerequisite; exact BPS saturation is asserted only for this linear truncation.

## Statement references

[Seiberg and Witten, §5.6, equations (5.17)–(5.21)](https://arxiv.org/pdf/hep-th/9407087v1).

[Bilal, §5.3](https://arxiv.org/pdf/hep-th/9601007v1).

[Tong, §4.6.2](https://davidtong.org/pdfs/teaching/solitons/tasi.pdf).

## Facts & Assumptions

**Given:** The pure-SU(2) N=2 source-proposed solution, its one-monopole
dual patch, the connection-normalized constant-metric local dual-Higgs data, the small perturbation
regime, and, for the last conclusion only, the explicit existence and
minimization assumption in the Statement.

[A1] [[post-qftx-n2-pure-su2-ultraviolet-model]]: the independently adopted pure ultraviolet SU(2) model has one vector multiplet, connection-normalized adjoint scalar, no microscopic matter hypermultiplets, and no chiral superpotential. The local charged monopole hypermultiplet is emergent infrared data.

[A2] [[post-qftx-n2-seiberg-witten-effective-solution]]: the pure-SU(2) source-proposed solution uses a local $U(1)_D$ frame near $a_D=0$ with a charge-one monopole hypermultiplet and the small N=1 perturbation $\mu u(A_D)$.

[F1] [[def-qftx-n2-monopole-local-dual-higgs-model]]: $W_\mu=\sqrt2 A_D M\widetilde M+\mu u(A_D)$, $D=g_D(|M|^2-|\widetilde M|^2)$, the scalar potential is $g_D^2|\partial_{A_D}W|^2+|\partial_MW|^2+|\partial_{\widetilde M}W|^2+D^2/2$ with positive weights, and the dual charges are $+1,-1$.

[F2] [[def-qftx-susy-vacuum-moduli-data]]: in the canonical scalar model a supersymmetric vacuum is exactly an orbit of simultaneous zeros of all F and D maps under the compact gauge group.

[F3] [[def-qftx-n2-dual-higgs-flux-tube-sector]]: a nonzero-winding tube profile is a smooth finite-energy static configuration whose phase winding and asymptotic gauge condition define its dual magnetic/original electric flux and transverse tension.

[F4] [[pthm-qftx-n2-dual-higgs-vortex-flux-and-tension]]: for any such admitted nonzero-winding profile, the flux is $2\pi n$ and the transverse tension is strictly positive; this supplier proves no profile existence or minimization.


[F5] [[pthm-qftx-n2-linear-monopole-bps-vortex-bound]]: in the frozen-metric linear truncation, the full-field square identity gives transverse energy at least $4\pi v^2|n|$; any supplied critical abelian-Higgs solution attains it, and supplied fixed-length finite-energy collars give the two-sided cylinder infimum bounds. For nonlinear $u$, a nonzero $g_D^2\bar\mu\overline{u^{\prime\prime}(0)}(\sqrt2M\widetilde M+\mu c)$ is an obstruction to the same embedded field being stationary.

## Proof

**Given:** [A2] and [F1] specify the local model. The mass term is small
enough that the stated patch applies, and $u'(A_D)\ne0$ throughout the
chosen neighborhood.

1.1 The pure ultraviolet input [A1] has no microscopic matter; [A2] separately supplies the emergent monopole fields. Use the exact constant-metric local data [F1]. Differentiating its superpotential gives
$\partial_{A_D}W_\mu=\sqrt2M\widetilde M+\mu u'(A_D)$,
$\partial_MW_\mu=\sqrt2A_D\widetilde M$, and
$\partial_{\widetilde M}W_\mu=\sqrt2A_DM$. Rescale the neutral scalar to its canonical coordinate $A_D/g_D$; because $g_D>0$, the zero set of all holomorphic derivatives is unchanged. By [F2] and positivity of every coefficient in [F1], a supersymmetric
vacuum of this potential must set all three derivatives and
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
effective model. This last conclusion is conditional: no preceding step establishes existence or minimization of the required profile. Original electric probes correspond to dual magnetic flux; the condensed original magnetic charges are dual electric charges and are screened in the linear response about the dual Higgs vacuum described by [F5]. This conclusion concerns classical effective energy, not a quantum Wilson-loop area law.
[F3, F4, F5, given, step 5.2, algebra]

7.1 In the explicitly linear truncation with the additional supplied critical solution and collars, apply [F5] with $\xi=2v^2$. Its square identity gives $T_n=2\pi\xi|n|=4\pi v^2|n|$. Slice-wise minimization yields the lower bound $T_nL$, while concatenating the two fixed collars and a minimizing middle segment yields $T_n(L-2\ell)+C_0+C_1$. Thus the static-energy infimum is $T_nL+O(1)$ for that fixed-flux boundary sector. This proof assumes neither an already minimizing straight finite tube nor quantum confinement, but it still needs the actual planar solution and the specified probe-to-boundary dictionary. The nonlinear stationarity obstruction in [F5] prevents transferring this exact BPS assertion to generic $u$. [F5, given, step 5.2, algebra] ∎

## Remarks

The exact unresolved prerequisite for the unqualified confinement part is a
proof that the local Seiberg--Witten dual-Higgs model admits a finite-energy
nonzero-winding vortex that minimizes the external-charge sector with
bounded endcap energy. The source-reported dual Meissner interpretation and
the conditional flux calculation do not supply that existence/minimization
argument. The arbitrary-winding/divisor critical-model existence and minimum-energy cylinder prerequisites are explicitly scaffolded in the owner resolution. Generic nonlinear soft-breaking corrections require separate existence/minimization/control; they are not discharged by the exact BPS result for the linear-superpotential truncation. This stronger approved confinement obligation remains unresolved and is not waived.
