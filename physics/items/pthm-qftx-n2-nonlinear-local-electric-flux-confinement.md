---
id: pthm-qftx-n2-nonlinear-local-electric-flux-confinement
kind: physics-theorem
title: Nonlinear local electric-flux confinement from planar energy infima
status: draft
origin: session
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-moduli-and-dualities
dependency_level: 10
deps:
- def-qftx-n2-nonlinear-magnetostatic-flux-cylinder
- def-axiom-of-choice
- thm-general-stokes-theorem
- cor-cauchy-schwarz-inequality-for-l-two
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
dependency_roles:
  def-qftx-n2-nonlinear-magnetostatic-flux-cylinder: formulation-prerequisite
  def-axiom-of-choice: mathematical-premise
  thm-general-stokes-theorem: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
axiom_base: ZF + full Axiom of Choice (hence AC_omega), retained for the named integration/product-measure suppliers and compact-support calculus. No minimizer-selection theorem is used.
proof_strategy: direct
physical_scope: Actual classical positive asymptotically linear fixed-electric-flux energy in the stated generic nonlinear local monopole model, with uniformly vacuum-approaching boundary data and bounded positive local metric. No critical/BPS truncation, stationary noncritical vortex, finite-cylinder minimizer, generic O(1) remainder, microscopic matching or quantum area law is claimed.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: N. Seiberg and E. Witten, Electric-Magnetic Duality, Monopole Condensation, and Confinement in N=2 Supersymmetric Yang-Mills Theory
    url: https://arxiv.org/pdf/hep-th/9407087v1
    locator: §5.6, printedpp30–32, local superpotential and dual-Higgs vacuum; the precise classical flux-boundary variational problem and estimates are supplied locally, not imported as an existence or quantum theorem.
  - title: David Tong, TASI Lectures on Solitons, Lecture3 Vortices
    url: https://www.damtp.cam.ac.uk/user/tong/tasi/vortex.pdf
    locator: §§3.1–3.2, printedpp70–73, critical energy and Bogomolny comparison; generic nonlinear potential estimates and cylinder asymptotics derived locally.
verification:
  precheck: pass
---

## Statement

Assume full Axiom of Choice. Use the nonlinear local magnetostatic data, class $\mathcal P_n$ and fixed-flux cylinders defined above. In particular the neutral scalar lies in the specified small closed disk, the positive smooth **light-hyper-retaining** metric has the explicit bounds $b_-,b_+$, the vacuum approach is uniform, and theta is omitted or constant. Let

$$t_*=\min\{\xi/2,m_*/\sqrt2\}>0,\qquad C_V=\max\left\{\frac{4b_+\xi^2}{m_*^2},\;6b_++\frac{2K^2}{t_*}\right\},\qquad c_V=C_V^{-1},\qquad \gamma=\min\left\{1,\frac{b_-}{b_0},2b_0c_V\right\}>0.$$

Then the full nonlinear potential and every planar profile obey

$$V_b\ge c_V(s-\xi)^2,\qquad E_b\ge\gamma\,2\pi\xi|n|.$$

The class $\mathcal P_n$ is nonempty for **every** nonzero integer winding: a smooth compact-core radial test suffices, with no field equation, exact BPS profile or Taubes existence theorem assumed. Consequently

$$0<\gamma\,2\pi\xi|n|\le\tau_n<\infty.$$

Every admissible profile has a globally smooth gauge transform to a canonical exterior representative. Any two such canonical representatives admit a smooth fixed-width finite-energy interpolation collar in the same winding class; the collar keeps the neutral scalar in its convex disk. In particular, for fixed end traces $P_0,P_1$ and any $\varepsilon>0$, there are finite constants $C_\varepsilon$, $\ell>0$, independent of $L$, such that for $L\ge2\ell$

$$\tau_nL\le I_n(L;P_0,P_1)\le(\tau_n+\varepsilon)(L-2\ell)+C_\varepsilon.$$

Therefore

$$\lim_{L\to\infty}\frac{I_n(L;P_0,P_1)}{L}=\tau_n>0.$$

This is asymptotically linear classical confinement of the specified original electric flux in the stated local magnetostatic boundary model. It does not assert that the planar infimum or finite-cylinder infimum is attained, that a nonlinear stationary profile is BPS, or that $I_n(L)=\tau_nL+O(1)$. The end-collar constants may depend on the chosen $\varepsilon$-profile. Exact critical $O(1)$ bounds require the stronger critical minimizing-profile input, kept separately. No conclusion follows for arbitrary microscopic line charges, flux-changing processes, a field-dependent theta term, or a quantum Wilson-loop area law.

## Statement references

[Seiberg and Witten, §5.6](https://arxiv.org/pdf/hep-th/9407087v1).

[Tong, §§3.1–3.2](https://www.damtp.cam.ac.uk/user/tong/tasi/vortex.pdf).

## Facts & Assumptions

**Given:** The nonlinear data, compact neutral disk, metric bounds, uniform vacuum and angular boundary hypotheses, winding $n\ne0$, and fixed end profiles in the Statement.

[A1] Full AC means every family of nonempty sets has a choice function; it includes the countable-choice scope of the integration suppliers. [[def-axiom-of-choice]]

[F1] The nonlinear magnetostatic datum defines $H=\sqrt2M\widetilde M+\mu u'(a)$, $d=|M|^2-|\widetilde M|^2$, $s=|M|^2+|\widetilde M|^2$, $V_b=b^{-1}|H|^2+d^2/(2b)+2|a|^2s$, the small-disk and positive-metric bounds, and the exact broad admissible class with uniform vacuum approach. [[def-qftx-n2-nonlinear-magnetostatic-flux-cylinder]]

[F2] Smooth compactly supported forms satisfy Stokes on an oriented manifold with boundary, under its countable-choice scope; on a compact disk this gives the ordinary boundary integral for the one-form $A$. [[thm-general-stokes-theorem]]

[F3] If $f,g\in L^2(\nu)$, then $\int|fg|\,d\nu\le\|f\|_2\|g\|_2$. [[cor-cauchy-schwarz-inequality-for-l-two]]

[F4] An integrable function on a sigma-finite product space has almost-everywhere integrable sections and its integral is the iterated integral. This applies to the finite static energy on $\mathbb R^2\times[0,L]$. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces|Fubini's theorem for $L^1$ functions on a sigma-finite product]]

## Proof

**Given:** The nonlinear data, compact neutral disk, metric bounds, uniform vacuum and angular boundary hypotheses, winding $n\ne0$, and fixed end profiles in the Statement, with [A1] and the suppliers [F1], [F2], [F3], [F4].

1.1 Put $x=\sqrt2M\widetilde M$ and $U_0=\mu c$, so $s^2=d^2+2|x|^2$ and $\xi=\sqrt2|U_0|$. By the fundamental theorem of calculus along the segment from $0$ to $a$ inside the convex disk, $|\mu(u'(a)-c)|\le K|a|$. If $s\le t_*$, then $|x|\le s/\sqrt2\le m_*/2$, whereas the disk hypothesis gives $|\mu u'(a)|\ge m_*$. Hence $|H|\ge m_*/2$ and $V_b\ge m_*^2/(4b_+)\ge[m_*^2/(4b_+\xi^2)](s-\xi)^2$, since $s\le t_*\le\xi/2$. If $s\ge t_*$, give $\mathbb R\oplus\mathbb C$ the norm $\|(r,z)\|^2=r^2+|z|^2$ and use the reverse triangle inequality $|\|v\|-\|w\||\le\|v-w\|$ with $v=(d,\sqrt2x)$ and $w=(0,-\sqrt2U_0)$. It gives $(s-\xi)^2\le d^2+2|x+U_0|^2$. Set $\delta=\mu(u'(a)-c)$; then $x+U_0=H-\delta$, and $|x+U_0|^2\le2|H|^2+2K^2|a|^2$. Consequently $(s-\xi)^2\le d^2+4|H|^2+4K^2|a|^2$. The three terms are bounded by $2b_+V_b$, $4b_+V_b$, and $2K^2V_b/t_*$, respectively, because $V_b\ge2|a|^2s\ge2t_*|a|^2$. Combining the cases proves the stated uniform potential bound without a Hessian or minimizer assumption. [given, F1, algebra]

2.1 Use the unitary real-linear change $q=(M+e^{i\beta}\overline{\widetilde M})/\sqrt2$, $p=(M-e^{i\beta}\overline{\widetilde M})/\sqrt2$; both fields have charge +1 and $s=|q|^2+|p|^2$. Their summed covariant-gradient norms equal the original charged norms. Let $E_0$ be the critical two-charge functional with terms $b_0B^2/2+|Dq|^2+|Dp|^2+(s-\xi)^2/(2b_0)$ and no additional p-mass term. The Maxwell bound $b\ge b_-$, step 1.1 and the definition of $\gamma$ give $E_b\ge\gamma E_0$, after dropping the nonnegative neutral gradient. In particular $E_0$ is finite. Uniform vacuum approach makes q,p bounded near infinity, with $|q|\to\sqrt\xi$ and $p\to0$ in the vacuum phase frame. Stokes on disks and the original angular condition give limiting flux $2\pi n$. [given, F1, F2, step 1.1, algebra]

3.1 Write $G(R)=\int_{|x|=R}(|Dq|^2+|Dp|^2)\,ds$. Finiteness of the gradient integral implies $\int_{R_0}^{\infty}G(R)\,dR<\infty$. There are radii $R_j\to\infty$ with $R_jG(R_j)\to0$: otherwise $G(R)\ge\epsilon/R$ eventually for some $\epsilon>0$, contradicting that integral. By [F3] and bounded tail amplitudes, the absolute boundary-current integral $\oint(\bar qDq+\bar pDp)$ on these circles is at most $C\sqrt{R_jG(R_j)}\to0$. For $n>0$, expand the disk square identity using $[D_1,D_2]f=-iBf$ for $f=q,p$: $|(D_1+iD_2)f|^2=|Df|^2-B|f|^2+i\{\partial_1(\bar fD_2f)-\partial_2(\bar fD_1f)\}$ and $b_0[B-b_0^{-1}(\xi-s)]^2/2=b_0B^2/2+(s-\xi)^2/(2b_0)+Bs-\xi B$. Add the identities, integrate, and let $R_j\to\infty$. The boundary current vanishes along this subsequence, the flux tends to $2\pi n$ and the remaining squares are nonnegative, so $E_0\ge2\pi\xi n$. Reflection of the second transverse coordinate proves $E_0\ge2\pi\xi|n|$ for negative n. Step 2.1 now proves the claimed positive bound for every full-model profile. No full-circle boundary-current limit was assumed or inferred from finite energy. [given, F1, F2, F3, step 2.1, algebra]

4.1 Let $N=|n|$. Choose smooth radial functions f,h with f(r) equal to a positive constant times $r^N$ near zero, h(r) equal to a constant times $r^2$ near zero, and $f=h=1$ outside one fixed disk; choose the near-zero coefficients as smooth functions of $r^2$ and interpolate on a compact annulus. Set $q=\sqrt\xi f(r)e^{in\theta}$, $p=a=0$, and $A=nh(r)d\theta$, hence $M=q/\sqrt2$, $\widetilde M=e^{i\beta}\bar q/\sqrt2$. The charged fields are smooth at zero because $r^Ne^{in\theta}$ is $z^N$ or $\bar z^N$, and the connection is smooth because $r^2d\theta=x^1dx^2-x^2dx^1$. Curvature and every non-vacuum energy term are supported in a fixed disk; all are smooth there. Outside it the field is exactly in the vacuum orbit, the covariant gradients vanish and the angular flux coefficient is n. Thus this is an admitted finite-energy profile. Its energy is positive by step 3.1 and finite directly; consequently $0<\gamma2\pi\xi|n|\le\tau_n<\infty$. [given, F1, step 3.1, construct, algebra]

5.1 For any profile, M is nonzero outside a disk by uniform vacuum approach. The circle-valued function $(M/|M|)e^{-in\theta}$ has degree zero on that exterior annulus. It has a smooth real phase lift $\chi$: the closed real one-form $-if^{-1}df$ for this circle-valued function f has zero integral on each circle, so integrating first radially and then angularly from a fixed base point defines a smooth periodic lift with $e^{i\chi}=f$. Multiply $-\chi$ by a radial smooth cutoff equal to zero near the inner boundary and one on a larger exterior annulus, then exponentiate to obtain a globally smooth gauge transformation. The transformed fields have $M=m e^{in\theta}$, $m>0$, and $A=nd\theta+\alpha$ outside a compact set. This gauge change leaves energy and the original angular condition invariant and fixes the exact exterior M-phase; it does not impose a new decay hypothesis. Write $\widetilde M=e^{i\beta}w e^{-in\theta}$, so m,w tend uniformly to v. [given, F1, step 4.1, construct, algebra]

6.1 On this exterior, s is bounded below by $\xi/2$ and m by $v/2$. The potential controls $|a|^2\le V_b/\xi$, $d^2\le2b_+V_b$, $|H|^2\le b_+V_b$ and $(s-\xi)^2\le C_VV_b$. Since $m^2-v^2=(s+d-\xi)/2$, $|m-v|^2\le[(s-\xi)^2+d^2]/(2v^2)$ is integrable. Also $m w-v^2=e^{-i\beta}[H-\mu(u'(a)-c)]/\sqrt2$, so $|w-v|\le(2/v)\{(|H|+K|a|)/\sqrt2+v|m-v|\}$ is square-integrable. Thus a,m-v,w-v are in $L^2$ on the exterior. Finally $DM=e^{in\theta}(dm-im\alpha)$, with dm and alpha real. Its squared norm is $|dm|^2+m^2|\alpha|^2$, so finite charged energy and $m\ge v/2$ give $\alpha,dm\in L^2$. On compact sets all fields and coefficients are smooth and bounded. Hence any two canonical profiles differ in $L^2$ in a,M,$\widetilde M$ and their connection one-forms. These mass-tail conclusions use uniform approach to the vacuum as well as the finite potential/kinetic energy; finite energy alone was not asserted to force pointwise vacuum approach. [given, F1, step 1.1, step 5.1, algebra]

7.1 Let two canonical profiles be given and choose one radius beyond both cleanup disks. A smooth cutoff $\eta(t)$, t in [0,ell], constant zero near 0 and one near ell, defines an explicit collar by linearly blending a,M,$\widetilde M$,$A_1,A_2$ and setting $A_3=0$. The neutral disk is convex, so the blend stays in it. Longitudinal scalar derivatives and $F_{3i}$ are $\eta'$ times the corresponding $L^2$ differences from step 6.1, hence have finite energy. For either charged field f, its transverse covariant derivative along the blend equals the blend of the two original covariant derivatives plus a bounded coefficient times $(A^{(1)}-A^{(0)})(f^{(1)}-f^{(0)})$. The connection difference is $L^2$ and the field difference is bounded globally, so this term is $L^2$; neutral gradients and transverse curvatures also blend linearly. Near infinity the field deviations from the common canonical vacuum frame are $L^2$ and uniformly small. Smoothness of u,b and vanishing of the potential and its first derivatives on that vacuum orbit give the uniform local estimate $V_b\le C(|a|^2+|m-v|^2+|w-v|^2)$ along the blend, by a Taylor formula on one compact transverse slice of the phase orbit. This makes the collar potential integrable; compact interiors have finite energy by smoothness. The exterior M-phase remains exactly $e^{in\theta}$ because its blended amplitude is positive, and $A_\theta-n$ is a convex blend of two functions tending uniformly to zero. Thus winding, angular condition and limiting flux are preserved on every collar slice; uniform covariant-gradient decay is preserved by the same product formula, using $\alpha\to0$ from $DM\to0$ and $m\ge v/2$. This constructs an actual finite-energy collar, with cost independent of any later cylinder length L. [given, F1, step 5.1, step 6.1, construct, algebra]

8.1 The three-dimensional energy is the transverse planar energy on each slice plus nonnegative longitudinal Maxwell and scalar terms. By [F4] and the definition of $\tau_n$, every competitor has $E_{b,3}\ge\tau_nL$. For each fixed $\varepsilon>0$, the definition of the finite infimum provides one planar profile with energy below $\tau_n+\varepsilon$; gauge-clean it by step 5.1. Step 7.1 constructs collars from each fixed end trace to this profile, with one chosen width ell and finite total energy $C_\varepsilon$, independent of L. Concatenate the collars with its translation-invariant extension over length L-2ell. This is a smooth admissible competitor because each collar is constant near the inner face, and it has energy at most $(\tau_n+\varepsilon)(L-2\ell)+C_\varepsilon$. Taking the infimum proves the two-sided bounds. Dividing by L, taking limsup as L tends to infinity and then allowing each $\varepsilon>0$ to tend to zero gives $\limsup\le\tau_n$, while the lower bound gives $\liminf\ge\tau_n$. Hence the limit is $\tau_n>0$. No minimizer or uniform bound on $C_\varepsilon$ as epsilon tends to zero is used, so no generic $O(1)$ remainder follows. [A1, F1, F4, step 4.1, step 5.1, step 7.1, algebra]

9.1 In this specified magnetostatic model all time derivatives and $A_0$ vanish, so the electric field is zero and the charged time-current density vanishes. With constant or absent theta, the Gauss constraint is therefore zero on every constructed trial field, including collars, even when b varies spatially. The slice lower bound remains true on any further constraint subset. In the adopted charge dictionary, the fixed dual magnetic flux is original electric flux, so its positive asymptotic energy per separation proves the stated classical local confinement. It supplies neither the different Gauss law with field-dependent theta nor a statement about arbitrary quantum line operators or microscopic string-breaking processes. [given, F1, step 8.1, algebra] ∎
