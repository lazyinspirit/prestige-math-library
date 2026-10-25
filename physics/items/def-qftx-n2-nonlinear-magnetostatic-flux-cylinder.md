---
id: def-qftx-n2-nonlinear-magnetostatic-flux-cylinder
kind: definition
title: Nonlinear local dual-Higgs magnetostatic flux cylinders
status: "published"
origin: session
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-moduli-and-dualities
dependency_level: 9
deps:
- def-qftx-n2-monopole-local-dual-higgs-model
- def-qftx-n2-dual-higgs-flux-tube-sector
dependency_roles:
  def-qftx-n2-monopole-local-dual-higgs-model: formulation-prerequisite
  def-qftx-n2-dual-higgs-flux-tube-sector: formulation-prerequisite
axiom_base: ZF + AC_omega inherited from the specified local model; the later integration theorem states its full-AC supplier scope separately.
physical_scope: A precisely specified classical magnetostatic, fixed-dual-flux boundary sector of the nonlinear local monopole model. No BPS truncation or noncritical minimizer, quantum observable, global period metric regularity, or ultraviolet construction is included.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: N. Seiberg and E. Witten, Electric-Magnetic Duality, Monopole Condensation, and Confinement in N=2 Supersymmetric Yang-Mills Theory
    url: https://arxiv.org/pdf/hep-th/9407087v1
    locator: §5.6, printedpp30–32, local superpotential and dual-Higgs vacuum; the precise classical flux-boundary variational problem and estimates are supplied locally, not imported as an existence or quantum theorem.
  - title: David Tong, TASI Lectures on Solitons, Lecture3 Vortices
    url: https://www.damtp.cam.ac.uk/user/tong/tasi/vortex.pdf
    locator: §§3.1–3.2, printedpp70–73, critical energy and Bogomolny comparison; generic nonlinear potential estimates and cylinder asymptotics derived locally.
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

Use the local monopole fields, charges and superpotential with $a=A_D$, $c=u'(0)\ne0$, $\mu\ne0$, $v^2=|\mu c|/\sqrt2$ and $\xi=2v^2$. Keep the holomorphic function $u$ nonlinear. Choose a closed disk $K_\delta=\{|a|\le\delta\}$ contained in its open valid patch with $u'(a)\ne0$ throughout. Define

$$m_*=\min_{a\in K_\delta}|\mu u'(a)|>0,\qquad K=\sup_{a\in K_\delta}|\mu u''(a)|<\infty.$$

Continuity, compactness and the nonzero $c$ allow such a disk. No linear Taylor replacement of $u$ is made. In the already adopted constant-metric model put $b(a)=b_0=g_D^{-2}$. More generally, the same classical energy problem may be specified with a supplied smooth real function $b$ on a neighborhood of $K_\delta$ and constants $0<b_-\le b(a)\le b_+<\infty$. This is additional explicit local Wilsonian metric data, not the vector-only logarithmically singular period metric inferred at a massless-monopole point. Let $b_0=b(0)$ and $g_0^2=b_0^{-1}$. Define

$$H=\sqrt2M\widetilde M+\mu u'(a),\qquad d=|M|^2-|\widetilde M|^2,\qquad s=|M|^2+|\widetilde M|^2,$$

$$V_b=b(a)^{-1}|H|^2+\frac{d^2}{2b(a)}+2|a|^2s.$$

Charged kinetic terms are canonical. The gauge kinetic coefficient is $b(a)$ and the neutral kinetic coefficient is $b(a)$. Work in the classical magnetostatic model with omitted or **constant** theta angle, no dynamical dual magnetic sources in the interior, static fields and $A_0=0$. No field-dependent-theta Gauss-law conclusion is included.

Fix $n\in\mathbb Z\setminus\{0\}$ and $e^{i\beta}=-\mu c/(\sqrt2v^2)$. A planar admissible profile is a smooth real one-form $A=A_1dx^1+A_2dx^2$ and smooth complex fields $a,M,\widetilde M$ on $\mathbb R^2$, with $a(x)\in K_\delta$, finite energy

$$E_b=\int_{\mathbb R^2}\left\{\frac{b(a)}2B^2+b(a)|\partial_i a|^2+|D_iM|^2+|\widetilde D_i\widetilde M|^2+V_b\right\}d^2x,$$

where $i=1,2$, $B=\partial_1A_2-\partial_2A_1$, $D_i=\partial_i-iA_i$ and $\widetilde D_i=\partial_i+iA_i$. Require **uniform** approach to the vacuum orbit at transverse infinity:

$$a\to0,\qquad |M|,|\widetilde M|\to v,\qquad M\widetilde M\to e^{i\beta}v^2.$$

This is an independent boundary hypothesis, not inferred from finite energy. Outside a compact set $M$ is nonzero and its phase has winding $n$ on each sufficiently large circle; the phase of $\widetilde M$ has winding $-n$. In the angular coordinate $\theta$, require the coefficient of $d\theta$ in $A-d\arg M$ to tend uniformly to zero, and the limiting flux to exist. Require also $D_iM,\widetilde D_i\widetilde M\to0$ uniformly, as in the admitted flux-sector data. These conditions define the gauge-invariant class $\mathcal P_n$. Gauge transformations are arbitrary smooth maps $U:\mathbb R^2\to U(1)$ acting by $M\mapsto UM$, $\widetilde M\mapsto U^{-1}\widetilde M$ and $A\mapsto A-iU^{-1}dU$; there is no added asymptotic-constant gauge restriction. A **canonical exterior representative** has $M=m e^{in\theta}$ with $m>0$ real outside a compact set.

Write

$$\tau_n=\inf_{P\in\mathcal P_n}E_b(P).$$

This notation alone asserts neither nonemptiness nor attainment. The adopted electric/magnetic dictionary identifies the dual magnetic flux with the original electric flux only for the specified test-charge/flux boundary sector.

For fixed canonical exterior representatives $P_0,P_1\in\mathcal P_n$ and $L>0$, use coordinates $(x^1,x^2,x^3)$ on $\mathbb R^2\times[0,L]$ and write the cylinder gauge potential as $\mathcal A=A_1dx^1+A_2dx^2+A_3dx^3$. Define $F=d\mathcal A$, so $F_{ij}=\partial_iA_j-\partial_jA_i$ for $1\le i,j\le3$, and extend the charged covariant derivatives by $D_i=\partial_i-iA_i$ and $\widetilde D_i=\partial_i+iA_i$ for $i=1,2,3$. The tangential end traces are $(A_1dx^1+A_2dx^2,a,M,\widetilde M)$ at $x^3=0,L$; no endpoint value is prescribed for the normal component $A_3$. Let $\mathcal C_n(L;P_0,P_1)$ be the smooth static fields on $\mathbb R^2\times[0,L]$ with these end traces, $a\in K_\delta$, and a planar admissible winding-$n$ profile on almost every slice. The flux $2\pi n$ is thus fixed throughout the cylinder, with no flux leakage to transverse infinity or interior magnetic source. Allow $A_3$ but choose $A_3=0$ in trial collars. Define

$$E_{b,3}=\int_0^L\!\int_{\mathbb R^2}\left\{\frac{b(a)}2\sum_{i<j}F_{ij}^2+b(a)\sum_{i=1}^3|\partial_i a|^2+\sum_{i=1}^3\bigl(|D_iM|^2+|\widetilde D_i\widetilde M|^2\bigr)+V_b\right\}d^2x\,dx^3,$$

and $I_n(L;P_0,P_1)=\inf_{\mathcal C_n(L;P_0,P_1)}E_{b,3}$. Competitors have finite displayed energy and the stated flux/boundary data; no stationary solution or minimizer is assumed. Any further hard field cutoff is part of a different admissible class and must be checked to admit the profiles and interpolation paths used here. This functional is the specified local classical model; no error control to a microscopic action or quantum Wilson-loop interpretation is asserted.

## Definition references

[Seiberg and Witten, §5.6](https://arxiv.org/pdf/hep-th/9407087v1).

[Tong, §§3.1–3.2](https://www.damtp.cam.ac.uk/user/tong/tasi/vortex.pdf).

[[def-qftx-n2-monopole-local-dual-higgs-model]]

[[def-qftx-n2-dual-higgs-flux-tube-sector]]
