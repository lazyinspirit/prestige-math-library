---
id: ex-qftx-multiple-centred-critical-vortex
kind: example
title: A double vortex and a separate third vortex
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps:
- def-qftx-critical-abelian-higgs-divisor-data
- thm-qftx-taubes-arbitrary-divisor-plane-vortex
- thm-qftx-critical-vortex-global-energy-minimum
- thm-qftx-critical-flux-cylinder-linear-energy
dependency_roles:
  def-qftx-critical-abelian-higgs-divisor-data: mathematical-premise
  thm-qftx-taubes-arbitrary-divisor-plane-vortex: mathematical-premise
  thm-qftx-critical-vortex-global-energy-minimum: mathematical-premise
  thm-qftx-critical-flux-cylinder-linear-energy: mathematical-premise
dependency_level: 5
axiom_base: ZF + full Axiom of Choice, inherited through the explicitly listed mathematical suppliers. No physical premise.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: 'David Tong, TASI Lectures on Solitons, Lecture 3: Vortices'
    url: https://www.damtp.cam.ac.uk/user/tong/tasi/vortex.pdf
    locator: '§§3.1–3.3, printed pp. 70–75: winding, critical square completion, tension and arbitrary-position context.'
  - title: Shouxin Chen and Yisong Yang, Existence of Multiple Vortices in Supersymmetric Gauge Field Theory
    url: https://arxiv.org/pdf/1203.3071
    locator: '§§2–3 and 5–7, PDF pp. 2–20: independent multiple-vortex scalar equation, existence, flux and tension context; this example uses the local suppliers listed in deps.'
---

## Example

Let $e,\xi>0$, $\kappa=2e^2\xi$, and let $z_0\ne z_1$ be any two points of $\mathbb C$. For the positive-winding divisor $D=2[z_0]+[z_1]$, whose degree is $3$, the unique scalar solution satisfies
$$\Delta h+\kappa(1-e^h)=8\pi\delta_{z_0}+4\pi\delta_{z_1},\qquad h-4\log|z-z_0|\text{ extends smoothly at }z_0,\qquad h-2\log|z-z_1|\text{ extends smoothly at }z_1,\qquad h\to0\text{ at infinity},$$
with $h<0$ off $\{z_0,z_1\}$. For $P(z)=(z-z_0)^2(z-z_1)$ and $s=2\log|P|$, the reconstructed fields $q=\sqrt\xi e^{(h-s)/2}P$ and $A=-\tfrac12*d(h-s)$ are smooth, have flux $6\pi$, and attain transverse energy $6\pi\xi$. The solution is specified by this unique nonlinear elliptic problem; no elementary closed-form profile is asserted.

Separately, for each $n\in\mathbb Z$ and each effective divisor of degree $|n|$, the corresponding planar minimizer has signed flux $2\pi n$ and transverse energy $T_n=2\pi\xi|n|$. For fixed smooth end traces in winding $n$ and the same canonical exterior gauge, its cylinder infimum satisfies
$$T_nL\le\inf\mathcal E_L\le T_n(L-2\ell)+C_0+C_1\quad(L\ge2\ell),$$
for a fixed collar width $\ell>0$ and finite constants $C_0,C_1$ independent of $L$; matching minimizing end traces give the exact value $T_nL$. This is the fixed-flux variational estimate for the stated cylinder class.

## Example references

[Critical vortex winding, square completion and tension (Tong, §§3.1–3.3)](https://www.damtp.cam.ac.uk/user/tong/tasi/vortex.pdf)

[Independent multiple-vortex existence and flux conventions (Chen–Yang, §§2–3 and 5–7)](https://arxiv.org/pdf/1203.3071)

## Facts & Assumptions

**Given:** $e,\xi>0$, distinct $z_0,z_1\in\mathbb C$, and the critical Abelian-Higgs conventions of [[def-qftx-critical-abelian-higgs-divisor-data]].

[F1] [[def-qftx-critical-abelian-higgs-divisor-data]]: the scalar divisor equation has source $4\pi\sum_jm_j\delta_{z_j}$, the flux/tension conventions are $\Phi=\int B$ and $E=\int(B^2/(2e^2)+|D_Aq|^2+e^2(|q|^2-\xi)^2/2)$.

[F2] [[thm-qftx-taubes-arbitrary-divisor-plane-vortex]]: for each effective divisor there is a unique scalar $h$ with the stated logarithmic subtractions and decay; the reconstruction is smooth, solves the positive first-order equations, has finite energy, and has flux $2\pi$ times the degree. Negative winding follows by conjugation.

[F3] [[thm-qftx-critical-vortex-global-energy-minimum]]: a reconstructed fixed-divisor solution attains the absolute transverse minimum $2\pi\xi|n|$ in its winding sector.

[F4] [[thm-qftx-critical-flux-cylinder-linear-energy]]: for fixed canonical-gauge ends in winding $n$, the finite-cylinder infimum obeys $T_nL\le\inf\mathcal E_L\le T_n(L-2\ell)+C_0+C_1$ for $L\ge2\ell$, and identical minimizing ends attain $T_nL$.

## Proof

**Given:** The divisor $D=2[z_0]+[z_1]$ and the assumptions above.

1.1 Its multiplicities give degree $N=2+1=3$ and distributional source $4\pi(2\delta_{z_0}+\delta_{z_1})=8\pi\delta_{z_0}+4\pi\delta_{z_1}$. The center subtraction coefficients are $2m_0=4$ and $2m_1=2$. Applying [F2] gives the unique scalar $h$, its smooth subtractions, $h\to0$, and strict negativity away from the divisor. [F1, F2, given, algebra]

1.2 Apply [F2] to the explicit effective divisor $|n|[0]$ of degree $|n|$ (the empty divisor if $n=0$) and conjugate when $n<0$. Its signed flux is $2\pi n$, and [F3] gives $T_n=2\pi\xi|n|$. [F2, F3, given, algebra]

2.1 Here $P=(z-z_0)^2(z-z_1)$ and $s=2\log|P|$. The reconstruction in [F2] extends smoothly over both centers, solves the positive critical equations, and has flux $2\pi N=6\pi$. Since it is a fixed-divisor reconstructed solution, [F3] gives its attained absolute transverse energy $2\pi\xi N=6\pi\xi$. The argument determines the profile by the unique scalar boundary-value problem and supplies no elementary closed form. [F1, F2, F3, step 1.1, algebra]

3.1 Fix end traces in that same winding sector and canonical exterior gauge. Applying [F4] with the value of $T_n$ from step 1.2 gives the stated cylinder bounds for every $L\ge2\ell$; if both traces are the same selected planar minimizer, [F4] gives the exact translation-invariant minimum. No step assumes radial symmetry or a unit-winding profile. [F4, step 1.2, given, algebra] ∎
## Proof sources

[Arbitrary-divisor scalar equation and reconstruction (Taubes attribution; local proof in supplier)](https://doi.org/10.1007/BF01197552)

[Critical tension normalization (Tong, §§3.1–3.3)](https://www.damtp.cam.ac.uk/user/tong/tasi/vortex.pdf)
