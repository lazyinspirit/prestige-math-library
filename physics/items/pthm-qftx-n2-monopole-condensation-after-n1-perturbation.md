---
id: pthm-qftx-n2-monopole-condensation-after-n1-perturbation
kind: physics-theorem
title: Conditional monopole Higgs vacuum after a small N=1 perturbation
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 12
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
- def-qftx-n2-nonlinear-magnetostatic-flux-cylinder
- pthm-qftx-n2-nonlinear-local-electric-flux-confinement
- def-axiom-of-choice
dependency_roles:
  def-qftx-n2-coulomb-branch-data: formulation-prerequisite
  def-qftx-n2-dual-higgs-flux-tube-sector: formulation-prerequisite
  def-qftx-n2-monopole-local-dual-higgs-model: formulation-prerequisite
  def-qftx-susy-vacuum-moduli-data: formulation-prerequisite
  post-qftx-n2-seiberg-witten-effective-solution: physical-assumption
  pthm-qftx-n2-dual-higgs-vortex-flux-and-tension: physical-result
  post-qftx-n2-pure-su2-ultraviolet-model: physical-assumption
  pthm-qftx-n2-linear-monopole-bps-vortex-bound: physical-result
  def-qftx-n2-nonlinear-magnetostatic-flux-cylinder: formulation-prerequisite
  pthm-qftx-n2-nonlinear-local-electric-flux-confinement: physical-result
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
physical_scope: Local effective-model F/D vacuum and dual Higgs mass near one pure-SU(2) monopole singularity, plus actual positive asymptotically linear nonlinear magnetostatic fixed-electric-flux energy on the explicitly bounded neutral patch. Generic infima need not be attained and no generic O(1) remainder, UV matching, quantum area law or framework-wide confinement is asserted; the separate exact critical-truncation branch retains its stronger hypotheses.
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
axiom_base: ZF + AC_omega for the algebraic vacuum and mass calculation; full AC for the generic nonlinear static-energy branch through its named integration/product-measure suppliers.
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

For an actual generic nonlinear confinement conclusion, use the precise magnetostatic flux-boundary class of the nonlinear cylinder definition, with the full $u$, a closed neutral disk on which $u'\ne0$, positive metric bounds, constant or absent theta, uniformly vacuum-approaching profiles, and fixed canonical end traces. For this energy branch assume full AC, as required by its integration suppliers. The planar energy infimum $\tau_n$ is positive and finite for every $n\ne0$, and the full static-energy infimum obeys

$$\lim_{L\to\infty}\frac{I_n(L)}{L}=\tau_n>0.$$

This proves asymptotically linear confinement of the specified original electric flux in that classical local effective model without assuming a noncritical stationary vortex or any attained minimum. It makes no generic $O(1)$ remainder claim.

For the stronger exact-remainder conclusion, make the following additional explicit
effective-model assumption: for a fixed nonzero original electric test-charge
sector and every sufficiently large separation $L$, the minimum-energy
configuration in that sector is a straight, translation-invariant dual
vortex of nonzero winding as defined here, and its endcap energy is bounded
uniformly in $L$. If that flux-tube sector exists, its original electric
flux is quantized and its tension is positive; the corresponding potential
has $V(L)=\sigma L+O(1)$, where $O(1)$ denotes a term bounded uniformly as
$L\to\infty$. This is linear confinement only in the stated local effective
model and under the stated vortex/minimization assumption. The theorem does not assert that a generic nonlinear model has an attained vortex minimum. In the separately specified constant-metric linear truncation $u=u_m+cA_D$, assume full AC and take the actual canonical fixed-flux cylinder class defined above. The critical vortex supplier now proves existence and an absolute transverse energy minimum for **every** nonzero winding and every effective divisor of degree $|n|$, with arbitrary centres and multiplicities. Actual fixed-width full-model collars exist for any fixed smooth canonical end traces in the stated closed valid neutral disk. Hence its full static-energy infimum is $4\pi v^2|n|L+O(1)$, with an exact translation-invariant minimum for matching minimizing traces. This exact critical conclusion no longer assumes a supplied solution or endcap bound; it does not transfer BPS saturation or an $O(1)$ remainder to generic nonlinear u.

## Statement references

[Seiberg and Witten, §5.6, equations (5.17)–(5.21)](https://arxiv.org/pdf/hep-th/9407087v1).

[Bilal, §5.3](https://arxiv.org/pdf/hep-th/9601007v1).

[Tong, §4.6.2](https://davidtong.org/pdfs/teaching/solitons/tasi.pdf).

## Facts & Assumptions

**Given:** The pure-SU(2) N=2 source-proposed solution, its one-monopole
dual patch, the connection-normalized constant-metric local dual-Higgs data, the small perturbation
regime and the distinct generic, exact-critical and explicitly additional exact-remainder boundary hypotheses in the Statement.

[A1] [[post-qftx-n2-pure-su2-ultraviolet-model]]: the independently adopted pure ultraviolet SU(2) model has one vector multiplet, connection-normalized adjoint scalar, no microscopic matter hypermultiplets, and no chiral superpotential. The local charged monopole hypermultiplet is emergent infrared data.

[A2] [[post-qftx-n2-seiberg-witten-effective-solution]]: the pure-SU(2) source-proposed solution uses a local $U(1)_D$ frame near $a_D=0$ with a charge-one monopole hypermultiplet and the small N=1 perturbation $\mu u(A_D)$.

[F1] [[def-qftx-n2-monopole-local-dual-higgs-model]]: $W_\mu=\sqrt2 A_D M\widetilde M+\mu u(A_D)$, $D=g_D(|M|^2-|\widetilde M|^2)$, the scalar potential is $g_D^2|\partial_{A_D}W|^2+|\partial_MW|^2+|\partial_{\widetilde M}W|^2+D^2/2$ with positive weights, and the dual charges are $+1,-1$.

[F2] [[def-qftx-susy-vacuum-moduli-data]]: in the canonical scalar model a supersymmetric vacuum is exactly an orbit of simultaneous zeros of all F and D maps under the compact gauge group.

[F3] [[def-qftx-n2-dual-higgs-flux-tube-sector]]: a nonzero-winding tube profile is a smooth finite-energy static configuration whose phase winding and asymptotic gauge condition define its dual magnetic/original electric flux and transverse tension.

[F4] [[pthm-qftx-n2-dual-higgs-vortex-flux-and-tension]]: for any such admitted nonzero-winding profile, the flux is $2\pi n$ and the transverse tension is strictly positive; this supplier proves no profile existence or minimization.


[F5] [[pthm-qftx-n2-linear-monopole-bps-vortex-bound]]: in the frozen-metric linear truncation, actual mathematical arbitrary-divisor vortices embed as stationary absolute full-model minima with $T_n=4\pi v^2|n|$; actual canonical full-model collars give $T_nL+O(1)$ for fixed-flux cylinder infima. Its nonlinear stationarity obstruction and screened dual-electric response keep this exact critical result separate from generic nonlinear confinement.


[A3] Full AC is retained for the generic nonlinear integration argument and the actual arbitrary-divisor critical existence/cylinder argument; no minimum-attainment or minimizer-selection theorem is assumed. [[def-axiom-of-choice]]

[F6] The full nonlinear magnetostatic model on a compact neutral disk with $u'\ne0$, bounded positive light-hyper-retaining metric and constant theta has $0<\tau_n<\infty$ and $I_n(L)/L\to\tau_n$ for every nonzero winding and fixed canonical end traces. The theorem derives an explicit potential comparison, smooth finite-energy test profiles, exterior gauge cleanup and actual finite-energy interpolation collars; it assumes no critical solution or noncritical minimizer. [[pthm-qftx-n2-nonlinear-local-electric-flux-confinement]]

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

6.2 In the explicitly linear truncation, assume [A3] and apply [F5] with $\xi=2v^2$ to each chosen effective divisor of degree $|n|$. It supplies an actual smooth stationary full-model minimum of tension $T_n=2\pi\xi|n|=4\pi v^2|n|$, and actual finite collars from every fixed canonical full-model end trace in the stated valid neutral disk. Thus $T_nL\le I_L\le T_n(L-2\ell)+C_0+C_1$, proving $I_L=T_nL+O(1)$; matching minimizing traces attain $T_nL$ exactly. No solution or endcap existence is assumed for this critical boundary problem. The nonlinear obstruction in [F5] prevents extending its exact BPS assertion to generic u. [A3, F5, given, step 5.2, algebra]

7.1 The separate critical result in step 6.2 does not alter the full nonlinear data. With the stated compact neutral disk, uniform-vacuum angular class, bounded positive metric and constant-theta magnetostatic scope, apply [F6] under [A3]. It gives positive finite $\tau_n$ and the actual asymptotic formula $I_n(L)/L\to\tau_n$ without assuming the stronger straight-tube/endcap premise used in step 6.1. This is the generic classical confinement conclusion in the Statement. The exact critical $O(1)$ conclusion of step 6.2 remains separate; no exact BPS claim about nonlinear $u$ is inferred. [A3, F6, step 6.1, step 6.2, algebra] ∎

## Remarks

The generic nonlinear **classical fixed-flux** duty is now proved by energy comparison and asymptotic infima; it does not need a noncritical planar or three-dimensional minimizer. Uniform vacuum approach, a closed valid neutral disk with nonzero $u'$, explicit positive metric bounds and the magnetostatic constant-theta boundary problem are part of the stated model. The exact critical/BPS existence and equality duty is stronger and is now supplied by the actual reviewed arbitrary-divisor mathematical theorem; it remains a linear-superpotential result. A generic formula $I_n(L)=\tau_nL+O(1)$, unrestricted behavior at a singular or unbounded metric, microscopic matching/error control, arbitrary line-charge dictionaries, and quantum confinement are not conclusions of this theorem. They are not silently substituted for the original local classical confinement contract.
