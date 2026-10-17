---
id: thm-emg-xs-kn-verification
kind: theorem
title: Fully verified electric Kerr-Newman electrovacuum
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 6
deps:
  - lem-emg-xs-kn-rational-calculus
  - def-emg-xs-kn-data
  - def-emg-xs-kn-full-sphere-exterior
  - def-emg-xs-geometric-electrovac
  - lem-emg-maxwell-observer-stress
  - lem-emg-lorentz-hodge-calculus
  - thm-gr-density-divergence-and-finite-chain-flux
  - thm-gr-point-normal-and-exponential-coordinate-charts
dependency_roles:
  lem-emg-xs-kn-rational-calculus: mathematical-premise
  def-emg-xs-geometric-electrovac: mathematical-premise
  lem-emg-maxwell-observer-stress: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  thm-gr-density-divergence-and-finite-chain-flux: mathematical-premise
  thm-gr-point-normal-and-exponential-coordinate-charts: mathematical-premise
  def-emg-xs-kn-full-sphere-exterior: mathematical-premise
  def-emg-xs-kn-data: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Sections 2.1-2.2, printed pp. 4-11 (PDF pp. 5-12): KN metric, Maxwell field and direct Newman-Penrose verification"
    - title: S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.114)-(7.116) and charge substitution, printed p. 207 (PDF p. 214): rotating metric and charged form"
physical_scope: null
---


## Statement

For $M,a,q\in\mathbb R$, on every pole-free Boyer-Lindquist domain with
$\Sigma>0$ and $\Delta\ne0$, the metric and potential of
[[def-emg-xs-kn-data]] satisfy the equations below. In addition, for every
$R_0>4|M|$, the full-sphere exterior extension of
[[def-emg-xs-kn-full-sphere-exterior]] satisfies the same equations on
$\mathbb R_{x^0}\times(R_0,\infty)\times S^2$. On all these domains,
$$d\mathcal F=0,\qquad d(\star_g\mathcal F)=0,\qquad \operatorname{Ric}_{ij}=2\left(\mathcal F_{ik}\mathcal F_j{}^k -\frac14g_{ij}\mathcal F_{kl}\mathcal F^{kl}\right).$$
Thus it is a geometric electrovac datum on every such chart component. No
maximal extension, uniqueness, horizon classification, or physical
measurement is asserted.

For arbitrary formal $c,\mu_0,G_N>0$, set $\alpha=\sqrt{4\pi G_N/(\mu_0c^4)}$, $F=\mathcal F/\alpha$, and $T_{ab}:=\mu_0^{-1}Q_g(F)_{ab}$. Then the same datum satisfies

$$dF=d(\star_gF)=0,\qquad S=0,\qquad G_{ab}=\operatorname{Ric}_{ab}=\frac{8\pi G_N}{c^4}T_{ab},$$

where $S$ is scalar curvature and $G_{ab}=\operatorname{Ric}_{ab}-\frac12Sg_{ab}$. This is the formal SI-to-geometric tensor normalization of [[lem-emg-maxwell-observer-stress]](d). It asserts neither measured parameter values nor a bundle realization for arbitrary flux. When the separate fixed-sector action hypotheses hold, $T$ is also the electromagnetic Hilbert tensor of that supplier.

## Facts & Assumptions

**Given:** The exact Boyer-Lindquist Kerr-Newman metric and potential with
$\Sigma>0$, $\Delta\ne0$, $0<\theta<\pi$.

[F1] [[def-emg-xs-kn-data]]: on a pole-free patch,
$\mathcal A=-qr\Sigma^{-1}(dx^0-a\sin^2\theta\,d\phi)$ is smooth
and $\mathcal F=d\mathcal A$.

[F5] [[def-emg-xs-kn-full-sphere-exterior]]: the smooth global exterior metric
and potential agree with those Boyer-Lindquist formulas off the poles; the
full-sphere exterior is Lorentzian and time-oriented.

[F2] [[lem-emg-xs-kn-rational-calculus]]: with $y=\cos\theta$ and
$w=\Sigma$, the inverse, determinant, four Maxwell-density residuals, Ricci
table and sixteen Einstein residuals are computed by exact rational functions.

[F3] [[lem-emg-lorentz-hodge-calculus]] and
[[thm-gr-density-divergence-and-finite-chain-flux]]: the Lorentzian Hodge map
uses the metric volume orientation. The divergence theorem supplies the
vector-current density formula; the corresponding antisymmetric-tensor
formula is derived in Proof 1.2 below.

[L1] The current [[lem-emg-maxwell-observer-stress]] draft supplies the tensor
formula $T_{\mathrm{EM}}=\mu_0^{-1}Q_g(F)$, its trace identity, and clause (d)'s
conditional scale normalization. Its proof is AI-generated and not
independently accepted; the Hilbert-tensor interpretation retains its
fixed-sector action-variation hypotheses. The pointwise scale identity is used
only under this exact conditional interface and does not assume a global
circle-bundle realization of this geometric field.

[F4] [[def-emg-xs-geometric-electrovac]]: a source-free geometric electrovac
datum satisfies $d\mathcal F=d(\star_g\mathcal F)=0$ and
$\operatorname{Ric}=2Q(\mathcal F)$.

[A1] Each pole-free chart has $\Sigma>0$, $\Delta\ne0$, and
$0<\theta<\pi$; the rational identities specialize only after their
recorded divisors are nonzero. For the additional full-sphere conclusion use
the exterior domain $r>R_0>4|M|$ of [F5].

[A2] On each connected pole-free component choose the coordinate orientation
$o=dx^0\wedge dr\wedge d\theta\wedge d\phi$. If $\Delta>0$, set
$N=(r^2+a^2)\partial_{x^0}+a\partial_\phi$; the two coframe factors in [F1]
evaluate on $N$ as $\Sigma$ and $0$, so $g(N,N)=-\Delta\Sigma<0$. If
$\Delta<0$, set $N=\partial_r$, for which $g(N,N)=\Sigma/\Delta<0$. Each
component is therefore oriented and time-oriented. On the full-sphere exterior
use [F5]'s $N=\partial_{x^0}$ and $o=dx^0\wedge dr\wedge\omega$; on the
polar overlap this orientation is the same because
$\omega=\sin\theta\,d\theta\wedge d\phi$.

## Proof


1.1 On a pole-free patch, [F1] and commutation of smooth mixed partials give $d\mathcal F=d^2\mathcal A=0$. On the full-sphere exterior, the global potential in [F5] gives the same identity everywhere. [F1, F5, algebra]

1.2 Put $w=\sqrt{|\det g|}$. For any smooth vector field $J$, the vector-current density identity in [F3] and the coordinate formula $\nabla_iJ^i=\partial_iJ^i+\Gamma^i{}_{ik}J^k$ imply $\Gamma^i{}_{ik}=w^{-1}\partial_kw$ by comparing arbitrary $J$. For the antisymmetric field, the tensor derivative expands as $\nabla_i\mathcal F^{ij}=\partial_i\mathcal F^{ij}+\Gamma^i{}_{ik}\mathcal F^{kj}+\Gamma^j{}_{ik}\mathcal F^{ik}$. The last term vanishes by symmetry of the connection in $i,k$ and antisymmetry of the field. Thus $\nabla_i\mathcal F^{ij}=w^{-1}\partial_i(w\mathcal F^{ij})$. In the rational chart $(x^0,r,y=\cos\theta,\phi)$, [F2] gives $w=\Sigma$, so its four zero Maxwell-density residuals give $v^j:=\nabla_i\mathcal F^{ij}=0$ there. To relate this divergence to $d(\star_g\mathcal F)$ without assuming the divergence equation, fix any pole-free point and use the point-normal chart supplied by the direct prerequisite [[thm-gr-point-normal-and-exponential-coordinate-charts]], choosing its orientation positive (if necessary, reverse one spatial coordinate, which preserves the normal form). At the point, $g_{ab}=\eta_{ab}$, $\Gamma^a{}_{bc}=0$, and $\partial g_{ab}=0$. Differentiating $g^{ac}g_{cb}=\delta^a_b$ gives $\partial g^{ab}=0$ there, and $w=\sqrt{|\det(g_{ab})|}$ gives $\partial w=0$. Put $E_i:=-\mathcal F_{0i}$ and $B_i:=\tfrac12\epsilon_{ijk}\mathcal F_{jk}$ as local component abbreviations only, with $\epsilon_{123}=+1$, and define $(\operatorname{curl}B)_k:=\epsilon_{kij}\partial_iB_j$. The Hodge component formula in [F3] gives $\mathcal F^{0i}=E_i$, $\mathcal F^{ij}=\epsilon_{ijk}B_k$, $({\star_g\mathcal F})_{0i}=B_i$, and $({\star_g\mathcal F})_{ij}=\epsilon_{ijk}E_k$ at the point. Since the inverse-metric and volume derivatives vanish there, differentiating the Hodge formula contributes no extra terms. The coordinate formulas for divergence and exterior derivative therefore give $v^0=-\partial_iE_i$, $v^k=\partial_0E_k-(\operatorname{curl}B)_k$, $d({\star_g\mathcal F})_{123}=\partial_iE_i$, and $d({\star_g\mathcal F})_{0ij}=\epsilon_{ijk}(\partial_0E_k-(\operatorname{curl}B)_k)$. Also $(\iota_v\mathrm{vol}_g)_{123}=v^0$ and $(\iota_v\mathrm{vol}_g)_{0ij}=-\epsilon_{ijk}v^k$. Hence $d({\star_g\mathcal F})=-\iota_v\mathrm{vol}_g$ at this point, and therefore at every pole-free point. As $v=0$, $d({\star_g\mathcal F})=0$ on that region. In the full-sphere extension, this three-form is smooth by [F5] and vanishes on the dense pole-free set, so it vanishes at the poles by continuity. [F3, F5, A1, A2, algebra]

1.3 The sixteen metric-field residuals in [F2] are exactly zero on every pole-free patch, using the metric, orientation and curvature convention in [F3] and [A2]. In the full-sphere extension both sides of the geometric Einstein equation are smooth by [F5]; equality on the dense pole-free region therefore extends to the poles by continuity. This proves $\operatorname{Ric}=2Q(\mathcal F)$ for the length-normalized form. The tensor conversion follows from [L1] as established below. [F2, F3, F5, L1, A2, algebra]

2.1 Steps 1.1, 1.2 and 1.3 give the three equations in [F4] on every pole-free chart under [A1]. For the full-sphere exterior, [F5] supplies the smooth time-oriented Lorentzian datum, and the same equations hold at the poles by the continuity arguments in steps 1.2 and 1.3. Thus both stated domains are geometric electrovac data. No horizon or maximal-extension claim is made. [F4, F5, A1, step 1.1, step 1.2, step 1.3]

3.1 With the positive constant $\alpha$ in the Statement, linearity gives $dF=\alpha^{-1}d\mathcal F=0$ and $d(\star_gF)=\alpha^{-1}d(\star_g\mathcal F)=0$. Trace-freeness of the quadratic tensor follows by contracting its formula: $g^{ab}Q_g(\mathcal F)_{ab}=\mathcal F_{ac}\mathcal F^{ac}-\frac44\mathcal F_{cd}\mathcal F^{cd}=0$. Taking the trace of the Ricci equation in step 1.3 gives $S=0$, hence $G=\operatorname{Ric}$. By [L1], $2Q_g(\mathcal F)=\kappa_E\mu_0^{-1}Q_g(F)=\kappa_ET$, proving every normalized equation in the Statement. This is algebra for the explicitly defined tensor $T$; identifying it as a Hilbert tensor requires the separate stated action hypotheses. [L1, step 1.1, step 1.2, step 1.3, algebra] ∎

## Remarks

The exact rational run is recorded in
research/physics-remaining-80-2026-10-17-batch-21.finite-check.json.
It verifies this finite component table; it does not establish physical
applicability or independent proof acceptance.

