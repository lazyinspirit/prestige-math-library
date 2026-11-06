---
id: ex-open-string-veneziano-four-tachyon-amplitude
kind: example
title: Open bosonic four-tachyon Veneziano partial amplitudes
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 12
domain: physics
physical_scope: Disk four-point integral for flat critical open bosonic tachyons, conditional on the stated R1 spectrum and
  local Gaussian correlator; the meromorphic continuation and common external normalization are distinguished from the separately adopted local pole boundary convention.
deps:
- def-string-vertex-operator-and-covariant-insertion
- def-string-bc-ghost-moduli-pairing
- def-st-bosonic-bc-ghost-system
- lem-string-sphere-and-boundary-conformal-killing-modes
- post-st-bosonic-polyakov-model
- def-st-string-tension-alpha-prime
- pthm-st-critical-dimension-flat-bosonic-string
- pthm-st-open-bosonic-lightcone-spectrum
- ex-cft-2d-noncompact-free-boson-correlators
- def-euler-beta-function
- thm-beta-gamma-identity
- thm-gamma-meromorphic-continuation
- cor-gamma-function-has-no-zeros
dependency_roles:
  def-string-vertex-operator-and-covariant-insertion: formulation-prerequisite
  def-string-bc-ghost-moduli-pairing: formulation-prerequisite
  def-st-bosonic-bc-ghost-system: formulation-prerequisite
  lem-string-sphere-and-boundary-conformal-killing-modes: mathematical-premise
  post-st-bosonic-polyakov-model: physical-assumption
  def-st-string-tension-alpha-prime: formulation-prerequisite
  pthm-st-critical-dimension-flat-bosonic-string: physical-result
  pthm-st-open-bosonic-lightcone-spectrum: physical-result
  ex-cft-2d-noncompact-free-boson-correlators: mathematical-premise
  def-euler-beta-function: mathematical-premise
  thm-beta-gamma-identity: mathematical-premise
  thm-gamma-meromorphic-continuation: mathematical-premise
  cor-gamma-function-has-no-zeros: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: David Tong, String Theory, Cambridge Part III notes
    url: https://www.damtp.cam.ac.uk/user/tong/string/string.pdf
    locator: §4.0.1, printed p. 62 (PDF p. 69), explicit Euclidean worldsheet convention and coordinates; §6.3 and §6.3.1,
      printed pp. 142–144 (PDF pp. 149–151), upper-half-plane boundary ordering, beta integral, and open-string poles.
  - title: Timo Weigand, Introduction to String Theory, Winter term 2011/12
    url: https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf
    locator: §5.4.2, printed pp. 108–112, upper-half-plane residual $PSL(2,\mathbb R)$, boundary ordering, Chan–Paton traces,
      and the Veneziano sum (5.82).
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Adopt the flat critical bosonic open string on one D-brane with mostly-plus target metric, $\alpha'>0$, four on-shell tachyons $k_i^2=1/\alpha'$, $\sum_i k_i=0$, and normalized abelian Chan–Paton trace $1$. Fix the disk boundary correlator convention $\langle X^\mu(x)X^\nu(y)\rangle=-2\alpha'\eta^{\mu\nu}\log|x-y|$ and write $s=-(k_1+k_2)^2$, $t=-(k_2+k_3)^2$, $u=-(k_1+k_3)^2$. After fixing the three $PSL(2,\mathbb R)$ positions, the ordering $(1,2,3,4)$ gives, up to its common source-declared external-state normalization,
$$A(1,2,3,4)=B(-1-\alpha's,-1-\alpha't).$$
The three inequivalent cyclic orderings give the corresponding $(s,t)$, $(t,u)$, and $(u,s)$ partial amplitudes. In the stated abelian sector their Chan–Paton weights are all one, so the full disk result is their unweighted sum. First evaluate in the beta-integral convergence domain and then use the meromorphic Gamma quotient. At an isolated real $s$-channel pole $s=M^2$, with the other channels away from poles, separately adopt the boundary denominator $(s-M^2+i0)^{-1}$: the limit of $(s-M^2+i\varepsilon)^{-1}$ as $\varepsilon\downarrow0$ against smooth compactly supported real-$s$ test functions. Apply the same convention after relabeling an isolated $t$ or $u$ pole. This is an additional pole convention, not a consequence of the beta integral or an attribution to the cited disk passages; no global contour at intersecting channel poles or positivity of residues is proved.

## Facts & Assumptions

**Given:** The adopted flat tensile disk model, critical dimension and intercept, on-shell tachyon states, normalized identity Chan–Paton matrices, the displayed boundary Gaussian correlator convention, and a common external-state normalization. Complex kinematics are used first in a domain where the integral converges.

[F1] [[post-st-bosonic-polyakov-model]] adopts the flat tensile Polyakov model. For this disk calculation, use Tong's explicitly declared Euclidean worldsheet convention, $\left(\sigma^1,\sigma^2\right)=\left(\sigma^1,i\sigma^0\right)$ (§4.0.1, printed p. 62; PDF p. 69), as used in the upper-half-plane amplitude calculation of §6.3.1. This convention is attributed to Tong, not to the Lorentzian action postulate. [[def-st-string-tension-alpha-prime]] fixes $\alpha'>0$ and $T=(2\pi\alpha')^{-1}$.

[F2] [[pthm-st-critical-dimension-flat-bosonic-string]] supplies $D=26,a=1$ only conditionally: its current Step 1 record escalates the unproved quantum light-cone Lorentz-closure input.

[F3] [[pthm-st-open-bosonic-lightcone-spectrum]] gives $\alpha'M^2=N-1$ under the same criticality input; its current readiness is escalated. The chosen tachyon therefore has $N=0$ and $M^2=-1/\alpha'$ conditionally.

[F4] [[ex-cft-2d-noncompact-free-boson-correlators]] supplies the formal algebraic Gaussian exponential correlator with its exact charge-neutrality conventions. Its current readiness is escalated because a stress/primary-field supplier record is stale; it is not treated as a path-integral measure.

[F5] [[def-string-bc-ghost-moduli-pairing]] fixes the local $b$ pairing and conformal-Killing treatment; [[def-st-bosonic-bc-ghost-system]] gives the plane mode expansion $c(z)=\sum_n c_nz^{-n+1}$ and the vector-field transformation law for $c$. The global sphere and boundary zero-mode selection is supplied by [F6].

[F6] [[lem-string-sphere-and-boundary-conformal-killing-modes]]: the sphere has three complex conformal-Killing vector modes and the chosen boundary disk gauge has three real $PSL(2,\mathbb R)$ modes.

[F7] [[def-euler-beta-function]] defines $B(p,q)=\int_0^1x^{p-1}(1-x)^{q-1}dx$ for $\operatorname{Re}p,\operatorname{Re}q>0$; [[thm-beta-gamma-identity]] gives its Gamma quotient there.

[F8] [[thm-gamma-meromorphic-continuation]] and [[cor-gamma-function-has-no-zeros]]: Gamma is meromorphic on $\mathbb C$ and its reciprocal is entire, so the beta quotient has a meromorphic continuation.

[A1] The boundary correlator and physical-state normalization are the stated model/source conventions. In particular adopt Wick's rule for normal-ordered exponentials: their neutral correlation coefficient is $\prod_{i<j}|x_i-x_j|^{2\alpha' k_i\cdot k_j}$, continued in the momentum components. The rank-one chiral example [F4] is algebraic context; it does not supply this Lorentzian boundary normalization or a target-time integration measure. Any disk coupling and external-state normalization are separate inputs and are not derived here. Adopt additionally the isolated-channel +i0 convention of the Statement; the cited disk passages supply the meromorphic formula, not this boundary-value choice.

## Proof

1.1 For ordered real boundary points $x_1<x_2<x_3<x_4$, the fractional-linear map $f(z)=\frac{(z-x_1)(x_3-x_4)}{(z-x_4)(x_3-x_1)}$ sends $(x_1,x_3,x_4)$ to $(0,1,\infty)$. Its determinant is $(x_3-x_4)(x_3-x_1)(x_1-x_4)>0$, so after positive rescaling it lies in $PSL(2,\mathbb R)$; its derivative is positive between the poles, giving $x=f(x_2)\in(0,1)$. A fractional-linear map fixing $0,1,\infty$ is the identity, so this gauge fixing is unique. The three fixed $c$ insertions use the vector-field type in [F5] and the global boundary zero-mode basis from [F6]: their coefficient is the $3\times3$ determinant of the rows $(1,x_j,x_j^2)$ for $j=1,3,4$, equal to $(x_3-x_1)(x_4-x_1)(x_4-x_3)$. After the gauge choice $(x_1,x_3,x_4)=(0,1,R)$, this is $R(R-1)$; the primary limit $c(\infty)=\lim_{R\to\infty}R^{-2}c(R)$ makes it tend to $1$, independent of $x_2$. Thus only a common normalization is suppressed. The adopted boundary Gaussian convention in [A1], with normal-ordered exponentials evaluated by Wick's pair-contraction rule, contributes $x^{2\alpha' k_1\cdot k_2}(1-x)^{2\alpha' k_2\cdot k_3}$; the tachyon mass shell gives $2\alpha'k_1\cdot k_2=-2-\alpha's$ and $2\alpha'k_2\cdot k_3=-2-\alpha't$. Thus the remaining integral is $\int_0^1x^{-2-\alpha's}(1-x)^{-2-\alpha't}dx$. [given, F1, F2, F3, F4, F5, F6, A1, algebra]

2.1 Put $p=-1-\alpha's$ and $q=-1-\alpha't$. In the nonempty complex convergence region $\operatorname{Re}p,\operatorname{Re}q>0$, the integrand in 1.1 is exactly $x^{p-1}(1-x)^{q-1}$, so [F7] identifies it as $B(p,q)$. [F7, step 1.1, algebra]

3.1 The beta-gamma identity [F7] gives $B(p,q)=\Gamma(p)\Gamma(q)/\Gamma(p+q)$ in the convergence region, and [F8] makes that quotient meromorphic. The local pole boundary sign is the additional convention in the Statement and [A1], independent of this analytic identity. There are $(4-1)!=6$ cyclic orderings after fixing leg $1$ first; reversal pairs them, and $B(p,q)=B(q,p)$ by the substitution $x\mapsto1-x$. Representatives $(1,2,3,4)$, $(1,2,4,3)$, and $(1,3,2,4)$ give the channel pairs $(s,t)$, $(s,u)$, and $(u,t)$, respectively, which as unordered pairs are $(s,t),(u,s),(t,u)$. In the identity Chan–Paton sector each trace is $1$, so their sum is unweighted. This does not prove positivity of residues or a global causal contour. [F7, F8, A1, step 2.1, algebra] ∎

## Remarks

For nonabelian Chan–Paton data, each ordered partial amplitude keeps its own trace $\operatorname{Tr}(T_1T_2T_3T_4)$; they cannot be replaced by an unweighted sum. The conditional criticality and spectrum suppliers prevent current Step 1 readiness, but the beta-integral deduction is complete given their exact stated interface. The closed-surface coupling formula [[pthm-closed-string-genus-npoint-coupling-power]] is not applied to this disk amplitude.
