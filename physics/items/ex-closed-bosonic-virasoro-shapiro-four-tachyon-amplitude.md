---
id: ex-closed-bosonic-virasoro-shapiro-four-tachyon-amplitude
kind: example
title: Closed bosonic four-tachyon Virasoro–Shapiro amplitude
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 12
domain: physics
physical_scope: "Four-point sphere integral for flat critical closed bosonic tachyons, conditional on the R1 spectrum and formal free-boson correlator; it retains the tachyonic vacuum instability."
deps:
  - def-string-vertex-operator-and-covariant-insertion
  - pthm-closed-string-genus-npoint-coupling-power
  - def-string-bc-ghost-moduli-pairing
  - def-st-bosonic-bc-ghost-system
  - lem-string-sphere-and-boundary-conformal-killing-modes
  - post-st-bosonic-polyakov-model
  - def-st-string-tension-alpha-prime
  - pthm-st-critical-dimension-flat-bosonic-string
  - pthm-st-closed-bosonic-lightcone-spectrum
  - ex-cft-2d-noncompact-free-boson-correlators
  - lem-string-complex-euler-beta-integral
  - def-euler-beta-function
  - thm-beta-gamma-identity
dependency_roles:
  def-string-vertex-operator-and-covariant-insertion: formulation-prerequisite
  pthm-closed-string-genus-npoint-coupling-power: formulation-prerequisite
  def-string-bc-ghost-moduli-pairing: formulation-prerequisite
  def-st-bosonic-bc-ghost-system: formulation-prerequisite
  lem-string-sphere-and-boundary-conformal-killing-modes: mathematical-premise
  post-st-bosonic-polyakov-model: physical-assumption
  def-st-string-tension-alpha-prime: formulation-prerequisite
  pthm-st-critical-dimension-flat-bosonic-string: physical-result
  pthm-st-closed-bosonic-lightcone-spectrum: physical-result
  ex-cft-2d-noncompact-free-boson-correlators: mathematical-premise
  lem-string-complex-euler-beta-integral: mathematical-premise
  def-euler-beta-function: mathematical-premise
  thm-beta-gamma-identity: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, String Theory, Cambridge Part III notes"
      url: "https://www.damtp.cam.ac.uk/user/tong/string/string.pdf"
      locator: "§6.2.2, printed pp. 134–144, Gaussian correlator, complex beta integral and Virasoro–Shapiro expression."
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "§5.4.1, printed pp. 102–108, sphere $PSL(2,\\mathbb C)$ gauge fixing, three ghost insertions, and the Virasoro–Shapiro complex beta integral (5.59)–(5.65)."
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

Use a flat critical closed bosonic background with mostly-plus target metric, $\alpha'>0$, four on-shell tachyons $k_i^2=4/\alpha'$, and $\sum_i k_i=0$. Set $s=-(k_1+k_2)^2$, $t=-(k_2+k_3)^2$, $u=-(k_1+k_3)^2$, so $s+t+u=-16/\alpha'$. In the source sphere-normalized convention, fixing three punctures leaves a complex integral proportional to
$$\frac{\Gamma(-1-\alpha's/4)\Gamma(-1-\alpha't/4)\Gamma(-1-\alpha'u/4)}{\Gamma(2+\alpha's/4)\Gamma(2+\alpha't/4)\Gamma(2+\alpha'u/4)}.$$
The formula is first established in a complex convergence domain and then meromorphically continued. At the isolated first $s$-channel tachyon pole adopt the source's local denominator $(s+4/\alpha'+i0)^{-1}$, meaning the limit of $(s+4/\alpha'+i\varepsilon)^{-1}$ as $\varepsilon\downarrow0$ against smooth compactly supported real-$s$ test functions, with other channel poles excluded. This is a separately adopted boundary prescription, not derived from meromorphic continuation or asserted to specify a global contour at intersecting channel poles. Its tachyon poles are retained; no stable-vacuum interpretation is implied.

## Facts & Assumptions

**Given:** The adopted critical flat model and its common source-declared external normalization, tachyon mass shell and momentum conservation, formal free-boson Gaussian correlator, and the closed genus coupling convention. The integral uses $d\mu=2dxdy$ on $\mathbb C$.

[F1] [[post-st-bosonic-polyakov-model]] and [[def-st-string-tension-alpha-prime]] fix the adopted flat model and $\alpha'>0$.

[F2] [[pthm-st-critical-dimension-flat-bosonic-string]] and [[pthm-st-closed-bosonic-lightcone-spectrum]] conditionally give $D=26$, intercept $1$, and $\alpha'M^2/4=N-1$; both current readiness records are escalated through the unresolved quantum Lorentz-closure prerequisite.

[F3] [[ex-cft-2d-noncompact-free-boson-correlators]] proves its one-component, real-charge chiral coefficient formula by oscillator commutation. The complex-charge, Lorentzian and nonchiral extension used here is established in [L1], not supplied by that example.

[F4] [[def-string-bc-ghost-moduli-pairing]] fixes the local antighost and conformal-Killing treatment; [[def-st-bosonic-bc-ghost-system]] gives the local $b,c$ mode algebra and the vector-field transformation law for $c$. The global sphere zero-mode basis is supplied by [F5].

[F5] [[lem-string-sphere-and-boundary-conformal-killing-modes]]: the sphere has exactly three complex conformal-Killing vector modes.

[F6] [[lem-string-complex-euler-beta-integral]]: for $a=-1-\alpha's/4$, $b=-1-\alpha't/4$ in its convergence region, $\int_{\mathbb C}|z|^{2a-2}|1-z|^{2b-2}d\mu=2\pi\Gamma(a)\Gamma(b)\Gamma(1-a-b)/[\Gamma(1-a)\Gamma(1-b)\Gamma(a+b)]$.

[F7] [[pthm-closed-string-genus-npoint-coupling-power]] gives $g_s^2$ for a sphere with four canonically sphere-normalized closed vertices; this topology factor is separate from any external-state conversion in another source convention.

[A1] The external-state normalization is a source input. For the isolated first tachyon pole the boundary sign is $s+4/\alpha'+i0$, because $s=-k^2$ and Weigand §5.4.1 Eq. (5.73), printed p. 106 (PDF p. 109), writes $-k^2+4/\alpha'+i\varepsilon$. This local pole convention is adopted separately from the Gamma quotient; no global multi-channel contour or residue positivity is derived. The tachyon amplitude's universal Gamma ratio is independent of that common prefactor.


[L1] The formal Gaussian input in Given uses two independent chiral copies of 26 polynomial Heisenberg systems. To specify its Lorentzian and complex-momentum convention, replace the real charge labels in [F3] by $\gamma\in\mathbb C^{26}$, take the algebraic direct sum of the corresponding polynomial sectors, and use coordinatewise charge shifts and the same normally ordered exponentials as [F3]. Put $r_0=i$, $r_j=1$ for $1\le j\le25$, and assign to momentum $k_i$ the charge vector $q_i^\mu=\sqrt{\alpha'/2}\,r_\mu k_i^\mu$. Then $\sum_\mu q_i^\mu q_j^\mu=(\alpha'/2)k_i\cdot k_j$. The central-commutator calculation in [F3], Verification 1.4 and 2.1, works unchanged for complex charges: its coefficients use only addition and multiplication of charges, and each fixed oscillator-degree coefficient is finite. Applying it in each of the 26 factors gives $\prod_{i<j}(z_i-z_j)^{(\alpha'/2)k_i\cdot k_j}$ when $\sum_i k_i=0$. Use a second, independent copy with the same charges, rather than their conjugates, for the barred coordinate. Choose opposite logarithm branches so $\log(z_i-z_j)+\log(\bar z_i-\bar z_j)=2\log|z_i-z_j|$ on the Euclidean configuration domain. The product is therefore $\prod_{i<j}\exp(\alpha' k_i\cdot k_j\log|z_i-z_j|)$, holomorphic in the complex momentum components on that branch. This is the specified formal nonchiral Gaussian correlator; the imaginary time-component charges do not define a positive Euclidean target-time measure.

## Proof

1.1 For distinct sphere points $z_1,z_3,z_4$, the fractional-linear map $f(z)=\frac{(z-z_1)(z_3-z_4)}{(z-z_4)(z_3-z_1)}$ sends them to $0,1,\infty$. A fractional-linear map fixing these three points is the identity, so [F5]'s three complex modes are exactly the gauge freedom removed. The three fixed $c$ insertions use the vector-field type in [F4] and the global zero-mode basis $1,z,z^2$ from [F5]; their coefficient is the $3\times3$ determinant of the rows $(1,z_j,z_j^2)$ for $j=1,3,4$, equal to $(z_3-z_1)(z_4-z_1)(z_4-z_3)$. In the gauge $(z_1,z_3,z_4)=(0,1,R)$ this is $R(R-1)$; the primary limit $c(\infty)=\lim_{R\to\infty}R^{-2}c(R)$ leaves the factor $1$, independent of the remaining puncture. Set $z_1=0,z_3=1$; the remaining coordinate is $z\in\mathbb C$. By [L1], the remaining correlator factor is $|z|^{\alpha'k_1\cdot k_2}|1-z|^{\alpha'k_2\cdot k_3}$. Since $k_i^2=4/\alpha'$, the definitions of $s,t$ give $\alpha'k_1\cdot k_2=-4-\alpha's/2$ and $\alpha'k_2\cdot k_3=-4-\alpha't/2$. Thus the powers are $2a-2$ and $2b-2$ for $a=-1-\alpha's/4$, $b=-1-\alpha't/4$. [given, F1, F2, F3, F4, F5, L1, A1, algebra]

2.1 In the region $\operatorname{Re}a,\operatorname{Re}b>0$ and $\operatorname{Re}(a+b)<1$, [F6] evaluates the integral as its Gamma quotient. Momentum conservation and the four mass-shell equations give
$$s+t+u=-\sum_{i=1}^4k_i^2=-16/\alpha',$$
so $c:=-1-\alpha'u/4=1-a-b$. Substituting $c$ in [F6] gives $2\pi\Gamma(a)\Gamma(b)\Gamma(c)/[\Gamma(1-a)\Gamma(1-b)\Gamma(1-c)]$. [F6, step 1.1, algebra]

3.1 Since $1-a=2+\alpha's/4$, $1-b=2+\alpha't/4$, and $1-c=2+\alpha'u/4$, the denominator in [F6] is exactly the denominator displayed in the Statement. The Gamma quotient continues meromorphically by [F6]; this continuation preserves rather than removes the bosonic tachyon poles. The separate sphere topology factor is [F7], and no disk/open-coupling rule is used. The local boundary prescription at the first tachyon pole is the separate input [A1], with its sign stated in the Statement. [F6, F7, A1, step 2.1, algebra] ∎

## Remarks

The criticality, closed-spectrum, and formal Gaussian suppliers are not currently Step 1 ready. The proof is a complete conditional derivation from their inspected interfaces; the tachyonic pole tower is not evidence for a stable bosonic vacuum.
