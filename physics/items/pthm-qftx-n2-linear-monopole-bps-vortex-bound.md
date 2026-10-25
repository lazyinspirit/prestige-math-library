---
id: pthm-qftx-n2-linear-monopole-bps-vortex-bound
kind: physics-theorem
title: 'Critical monopole truncation: BPS bound, minimizing tubes and nonlinear obstruction'
status: draft
origin: session
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-moduli-and-dualities
dependency_level: 11
deps:
- def-qftx-n2-monopole-local-dual-higgs-model
- def-qftx-n2-dual-higgs-flux-tube-sector
- def-axiom-of-choice
- thm-qftx-taubes-arbitrary-divisor-plane-vortex
- thm-qftx-critical-vortex-global-energy-minimum
- thm-qftx-critical-flux-cylinder-linear-energy
- pthm-qftx-n2-nonlinear-local-electric-flux-confinement
- def-qftx-n2-nonlinear-magnetostatic-flux-cylinder
- cor-cauchy-schwarz-inequality-for-l-two
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
- thm-monotone-convergence-for-the-integral
- thm-general-stokes-theorem
- thm-polar-coordinates-formula-for-lebesgue-measure
- def-polar-surface-measure-on-the-unit-sphere
dependency_roles:
  def-qftx-n2-monopole-local-dual-higgs-model: formulation-prerequisite
  def-qftx-n2-dual-higgs-flux-tube-sector: formulation-prerequisite
  def-axiom-of-choice: mathematical-premise
  thm-qftx-taubes-arbitrary-divisor-plane-vortex: mathematical-premise
  thm-qftx-critical-vortex-global-energy-minimum: mathematical-premise
  thm-qftx-critical-flux-cylinder-linear-energy: mathematical-premise
  pthm-qftx-n2-nonlinear-local-electric-flux-confinement: physical-result
  def-qftx-n2-nonlinear-magnetostatic-flux-cylinder: formulation-prerequisite
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-general-stokes-theorem: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
proof_strategy: direct
physical_scope: Exact classical arbitrary-divisor critical vortex existence and full-field minima for the explicitly specified polynomial linear-superpotential functional, including its formal extension to unrestricted core fields. Its physical interpretation is conditional on the local patch and effective cutoff; no validity of that extension or of arbitrary profiles beyond this regime is inferred. Actual finite collars give O(1) bounds for the stated neutral-disk cylinder class; additional hard cutoff constraints require admissible profiles and collars. No nonlinear exact BPS, microscopic matching or quantum area-law claim is made.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: 'David Tong, TASI Lectures on Solitons, Lecture 3: Vortices'
    url: https://www.damtp.cam.ac.uk/user/tong/tasi/vortex.pdf
    locator: '§§3.1–3.2, printed pp.70–73, equations (3.1),(3.7)–(3.10): critically tuned energy, square completion and flux bound. Local two-field normalization and nonlinear obstruction derived here.'
  - title: N. Seiberg and E. Witten, Electric-Magnetic Duality, Monopole Condensation, and Confinement in N=2 Supersymmetric Yang-Mills Theory
    url: https://arxiv.org/pdf/hep-th/9407087v1
    locator: '§5.6, printed pp.30–32, equations (5.17)–(5.21): local monopole superpotential, Higgs vacuum and limited patch.'
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
axiom_base: ZF + full AC, inherited through actual arbitrary-divisor existence, compactness and integration suppliers; no microscopic or quantum construction.
---

## Statement

Assume full Axiom of Choice. Use the constant-metric connection-normalized dual model, explicitly in the linear truncation $u(A_D)=u_m+cA_D$, with $c\ne0$, $\mu\ne0$ and $g=g_D>0$. Put $v^2=|\mu c|/\sqrt2$, $\xi=2v^2$ and $e^{i\beta}=-\mu c/(\sqrt2v^2)$. Define charge-one fields

$$q=\frac{M+e^{i\beta}\overline{\widetilde M}}{\sqrt2},\qquad p=\frac{M-e^{i\beta}\overline{\widetilde M}}{\sqrt2},\qquad s=|q|^2+|p|^2.$$

Let $A=\widetilde A_1dx^1+\widetilde A_2dx^2$ be smooth and real on $\mathbb R^2$, $D_i=\partial_i-iA_i$, $B=\partial_1A_2-\partial_2A_1$ and $a=A_D$. For this linear truncation, write $E$ for the transverse energy defined in the preceding dual-Higgs flux-tube definition; explicitly,

$$E=\int_{\mathbb R^2}\left\{\frac{B^2}{2g^2}+g^{-2}|\partial_i a|^2+|D_iM|^2+|\widetilde D_i\widetilde M|^2+g^2|\sqrt2M\widetilde M+\mu c|^2+\frac{g^2}{2}(|M|^2-|\widetilde M|^2)^2+2|a|^2(|M|^2+|\widetilde M|^2)\right\}d^2x.$$

The displayed polynomial expression also specifies a formal variational extension to all smooth complex fields $a,M,\widetilde M$ on $\mathbb R^2$, including core values outside the original local patch. The energy identities and the term **full-model minimum** below refer to this specified functional with all its fields allowed to vary. Its interpretation as a physical effective theory remains conditional on field values lying in the local patch and on the effective cutoff assumptions; no accuracy of the formal extension outside that regime follows. The embedded minimizers have $a=0$ and hence also minimize in every patch-restricted subclass containing them. An additional cutoff constraint transfers an existence or collar upper bound only if it admits the chosen minimizer and the constructed collars; their admissibility under such extra constraints is not asserted here.

For every smooth finite-energy profile in the uniform-vacuum winding-$n$ class, $n\ne0$, with $|q|\to\sqrt\xi$, $p,a\to0$ and limiting flux $2\pi n$, the positive-winding identity is

$$E=2\pi\xi n+\int_{\mathbb R^2}\left\{\frac{[B-g^2(\xi-s)]^2}{2g^2}+|(D_1+iD_2)q|^2+|(D_1+iD_2)p|^2+2g^2\xi|p|^2+g^{-2}|\partial_i a|^2+2|a|^2s\right\}d^2x.$$

The boundary current is removed along a radii subsequence furnished by finite energy and uniform bounded vacuum amplitudes; no full-circle current limit or extra exponential decay assumption is required. For negative winding conjugate the charged fields and reverse A, giving $E\ge2\pi\xi|n|=4\pi v^2|n|$.

For **every** nonzero integer n and every effective finite divisor of degree $|n|$, at arbitrary centres with arbitrary positive multiplicities, the actual planar vortex theorem supplies a smooth critical pair at $e=g$, with $(D_1+iD_2)q=0$, $B=g^2(\xi-|q|^2)$ for $n>0$ and the conjugate equations for $n<0$. Its embedding

$$a=p=0,\qquad M=q/\sqrt2,\qquad \widetilde M=e^{i\beta}\bar q/\sqrt2$$

is a stationary absolute transverse energy minimum among all the above full-model profiles with the same winding, with tension $T_n=2\pi\xi|n|$. This is actual existence and minimum energy, not an assumed solution. Gauge-invariant curvature and covariant gradients decay exponentially. Only the degree-zero correction relative to $n\theta$ is removed by a globally smooth gauge to obtain canonical exterior fields; the degree-changing local unwound gauge is not extended across the divisor.

For the precise classical cylinder problem, use the fixed-flux class $\mathcal C_n(L;P_0,P_1)$ of Nonlinear local dual-Higgs magnetostatic flux cylinders, specialized to this **linear** u and constant $b=g^{-2}$, with any fixed smooth canonical end profiles in one closed valid neutral disk and constant or omitted theta. For every chosen arbitrary-divisor minimizing profile above, actual smooth fixed-width finite-energy collars from both ends exist and give constants $\ell>0$, $C_0,C_1<\infty$ independent of L such that

$$T_nL\le I_L\le T_n(L-2\ell)+C_0+C_1\le T_nL+C_0+C_1\qquad(L\ge2\ell).$$

Thus $I_L=T_nL+O(1)$. Matching minimizing end traces give an exact translation-invariant minimum $T_nL$. The same estimate holds for any other stated fixed-flux boundary class which admits such collars; no unspecified probe-to-end-trace dictionary is inferred. In the special case $a=p=0$ at both ends, the mathematical critical cylinder theorem supplies the embedded collar construction directly. General full-model end profiles use the proved local magnetostatic collar construction, not an assumed endcap bound.

In linear response about the Higgs vacuum, original magnetic probes are dual electric sources for a vector of mass $m_D^2=2g^2\xi$; its unit canonical static source potential is $e^{-m_Dr}/(4\pi r)$, so that response is screened. The tube carries dual magnetic, hence original electric, flux in the adopted frame. These are classical boundary-energy statements, not a quantum Wilson-loop area law or an ultraviolet matching theorem.

For a generic nonlinear u, the same embedded fields with $a=0$ instead have the pointwise neutral potential derivative

$$\left.\partial_{\bar a}V_\mu\right|_{a=0}=g^2\bar\mu\,\overline{u''(0)}\bigl(\sqrt2M\widetilde M+\mu c\bigr).$$

If nonzero anywhere, the embedded profile is not stationary for that nonlinear model. The generic nonlinear theorem proves a positive limiting energy slope; it does not inherit exact critical BPS saturation or an $O(1)$ remainder from this theorem.

## Statement references

[[def-qftx-n2-nonlinear-magnetostatic-flux-cylinder]]

[Tong, §§3.1–3.2](https://www.damtp.cam.ac.uk/user/tong/tasi/vortex.pdf).

[Seiberg and Witten, §5.6](https://arxiv.org/pdf/hep-th/9407087v1).

## Facts & Assumptions

**Given:** The constant coupling, linear truncation, fields, uniform-vacuum flux sector and explicitly stated end data.

[A1] Full AC supplies the actual mathematical existence and integration hypotheses. [[def-axiom-of-choice]]

[F1] The connection-normalized local model has potential $g^2|\sqrt2M\widetilde M+\mu u'(a)|^2+2|a|^2(|M|^2+|\widetilde M|^2)+g^2(|M|^2-|\widetilde M|^2)^2/2$, neutral kinetic coefficient $g^{-2}$, and canonical charged kinetic coefficients. [[def-qftx-n2-monopole-local-dual-higgs-model]]

[F2] The admitted flux sector has finite full transverse energy, uniform approach to the stated vacuum and flux $2\pi n$ from its angular one-form condition; original electric flux means dual magnetic flux. [[def-qftx-n2-dual-higgs-flux-tube-sector]]

[F3] For every effective divisor, the scalar Taubes problem has its unique smooth desingularized solution and reconstructs a smooth finite-energy critical connection/Higgs field with the prescribed zeros, flux, and exponential gauge-invariant decay; negative winding uses conjugation. [[thm-qftx-taubes-arbitrary-divisor-plane-vortex]]

[F4] Those reconstructed pairs attain the exact single-field transverse minimum $2\pi\xi|n|$ in the corresponding winding class. [[thm-qftx-critical-vortex-global-energy-minimum]]

[F5] For the critical single-field model with fixed canonical end traces and arbitrary-divisor minimizing profile, actual finite-energy collars yield $T_nL\le\inf E_3\le T_n(L-2\ell)+C_0+C_1$. [[thm-qftx-critical-flux-cylinder-linear-energy]]

[F6] Any two canonical full-model end profiles in the bounded positive-metric local magnetostatic class admit smooth fixed-width finite-energy interpolation collars. This assertion is proved for the full nonlinear class and applies in particular to linear u and constant b; it requires no noncritical minimizer. [[pthm-qftx-n2-nonlinear-local-electric-flux-confinement]]

[F7] The local magnetostatic cylinder data specify the full three-dimensional energy, compact neutral disk, uniform vacuum/angular class, constant-theta constraint scope and canonical end representatives. [[def-qftx-n2-nonlinear-magnetostatic-flux-cylinder]]

[F8] Square-integrable functions obey $\int|fg|\le\|f\|_2\|g\|_2$. [[cor-cauchy-schwarz-inequality-for-l-two]]

[F9] Integrable product-space densities can be sliced and integrated in either order. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces|Fubini's theorem for $L^1$ functions on a sigma-finite product]]

[F10] Increasing nonnegative integrals converge to the integral of the pointwise limit. [[thm-monotone-convergence-for-the-integral]]

[F11] Stokes converts compact disk derivative integrals to their oriented boundary integrals. [[thm-general-stokes-theorem]]

[F12] Under [A1], the polar formula gives $d^2x=R\,dR\,d\sigma$ in dimension two. For $\gamma(\theta)=(\cos\theta,\sin\theta)$, the defining unit sector has area $|I|/2$ on an angular interval $I$, hence $\sigma(\gamma(I))=|I|$. Interval sums and uniform continuity therefore identify $d\sigma$ with $d\theta$ on continuous circle integrands. The radius-$R$ parametrization has speed $R$, so its arc length is $ds=R\,d\theta$; consequently, for every nonnegative continuous $f$,
$\int_{|x|>R_0}f(x)d^2x=\int_{R_0}^\infty\int_{|x|=R}f\,ds\,dR$.
[[thm-polar-coordinates-formula-for-lebesgue-measure|Polar coordinates decompose Lebesgue measure into $r^{n-1}\,dr\,d\sigma$]] and [[def-polar-surface-measure-on-the-unit-sphere]].

## Proof

**Given:** The full Axiom of Choice, the constant-metric linear truncation, the local field normalization and flux boundary data in the Statement, and the supplier claims and hypotheses [F1]–[F12].

1.1 The inverse change of variables is $M=(q+p)/\sqrt2$ and $e^{i\beta}\overline{\widetilde M}=(q-p)/\sqrt2$. It preserves the sum of charged kinetic norms and gives $|M|^2+|\widetilde M|^2=s$. Set $z=e^{-i\beta}M\widetilde M$. The charged part of the potential in [F1] at linear $u$ is $2g^2|z-v^2|^2+g^2(|M|^2-|\widetilde M|^2)^2/2=g^2s^2/2+2g^2v^4-4g^2v^2\operatorname{Re}z$. Since $2\operatorname{Re}z=|q|^2-|p|^2$ and $\xi=2v^2$, this is $g^2(s-\xi)^2/2+2g^2\xi|p|^2$. The remaining scalar potential is $2|a|^2s$ and its gradient term is $g^{-2}|\partial_i a|^2$. [given, F1, algebra]

2.1 For either charged field $f=q,p$, expand $|(D_1+iD_2)f|^2=|Df|^2-B|f|^2+i\{\partial_1(\bar fD_2f)-\partial_2(\bar fD_1f)\}$. Expanding $[B-g^2(\xi-s)]^2/(2g^2)$ gives $B^2/(2g^2)+g^2(\xi-s)^2/2+Bs-\xi B$. Step 1.1 shows all the required nonnegative densities are integrable. If $G(R)=\int_{|x|=R}(|Dq|^2+|Dp|^2)ds$, then [F12] and finite energy give $\int_{R_0}^\infty G(R)dR=\int_{|x|>R_0}(|Dq|^2+|Dp|^2)d^2x<\infty$. Hence there are increasing radii $R_j\to\infty$ with $R_jG(R_j)\to0$, since an eventual positive lower bound on $RG(R)$ would force logarithmic divergence. Uniform vacuum amplitudes and [F8] bound the boundary-current integral by $C\sqrt{R_jG(R_j)}\to0$. Integrating the two algebraic identities on those disks, using [F11], limiting flux $2\pi n$ and [F10] gives the stated whole-plane identity. For negative n, conjugation reverses flux and changes $D_1+iD_2$ to $D_1-iD_2$ without changing energy. [A1, F1, F2, F8, F10, F11, F12, step 1.1, algebra]

3.1 For each chosen effective divisor of degree $|n|$, apply [F3] with $e=g$ and $\xi=2v^2$, using its conjugate for negative n. [F4] fixes its finite energy and flux normalization. The polynomial phase correction relative to $n\theta$ is degree zero and tends to zero; the cutoff cleanup used in [F5] removes only this correction globally, preserving the divisor. The resulting embedded fields have $a=p=0$ and satisfy the appropriate critical equations, so all residuals in step 2.1 vanish and the full-model energy is exactly $T_n$. The same identity bounds every competing full-model profile below by $T_n$, proving absolute minimality for the specified polynomial functional and for every local subclass containing the embedded profile. This does not extend physical validity beyond the supplier patch or cutoff. Compactly supported smooth variations preserve the flux/vacuum class, so differentiability of their energy at the minimum gives vanishing first variation. This proves actual existence and stationarity for every divisor, without a radial or unit-winding restriction. [A1, F3, F4, F5, step 2.1, algebra]

4.1 First, if both end profiles have $a=p=0$, apply [F5] at $e=g$ and embed its whole single-field collar by $M=q/\sqrt2$, $\widetilde M=e^{i\beta}\bar q/\sqrt2$. Step 1.1 makes the embedded three-dimensional energy exactly its mathematical critical energy. For arbitrary fixed full-model ends in the class [F7], specialize [F6] to linear u and constant $b=g^{-2}$; the nonzero c and closed valid disk meet its hypotheses. It constructs actual finite collars from both ends to the selected profile of step 3.1, with the same flux, neutral disk and canonical vacuum frame, constant near each join. By [F9], the full energy is the slice energy plus nonnegative longitudinal terms, so step 2.1 bounds every competitor below by $T_nL$. Concatenating the two actual collars and the constant middle segment of length $L-2\ell$ gives energy $C_0+T_n(L-2\ell)+C_1$. The collars are constant near their inner faces, so the join is smooth also when the middle length is zero. Taking the infimum gives the claimed uniform $O(1)$ bound. Matching minimizing traces give the exact constant extension minimum. The collars keep a in its convex valid disk; no further hard cutoff is imposed on this variational class. Any additional such constraint needs a separate admissibility check before this upper bound transfers. These magnetostatic constant-theta trial fields satisfy the Gauss scope of [F7]; no microscopic boundary dictionary follows. [A1, F5, F6, F7, F9, step 1.1, step 2.1, step 3.1, algebra]

5.1 In the nonlinear potential [F1], put $H=\sqrt2M\widetilde M+\mu u'(a)$. Differentiation gives $\partial_{\bar a}(g^2H\bar H)=g^2H\bar\mu\,\overline{u''(a)}$. The derivative of $2|a|^2s$ is $2as$, which vanishes at $a=0$; all gradient terms also have zero first variation at identically zero $a$. Thus the displayed derivative is the remaining Euler–Lagrange source. If it is nonzero somewhere, a smooth compactly supported variation of the complex field $a$ supported in a small neighborhood makes the first variation nonzero, proving nonstationarity. For the screening distinction, the constant vacuum has $q=\sqrt\xi$, $p=a=0$. With $A_c=A/g$, its charged gradient term contributes $-g^2\xi A_{c,\mu}A_c^\mu$, hence $m_D^2=2g^2\xi$ by the Proca normalization. The linearized unit static source equation is $(-\Delta+m_D^2)A_{c,0}=\delta_0$ in three spatial dimensions. Radial differentiation verifies $G(r)=e^{-m_Dr}/(4\pi r)$ solves the homogeneous equation for $r>0$; $-4\pi r^2G^{\prime}(r)\to1$ and the locally integrable mass term establish the unit delta distribution at the origin. Its exponential decay proves screening only in this linear response. The cylinder statement instead fixes dual magnetic/original electric flux; it supplies no quantum observable or control of omitted nonlinear and higher-derivative terms. [given, F1, F2, algebra] ∎
