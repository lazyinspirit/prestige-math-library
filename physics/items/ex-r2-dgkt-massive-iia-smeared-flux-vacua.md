---
id: ex-r2-dgkt-massive-iia-smeared-flux-vacua
kind: example
title: "DGKT massive IIA flux family with a smeared O6 truncation"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 4
proof_strategy: direct
axiom_strength: Conditional on the source-model and physical postulates listed in Facts & Assumptions.
deps:
  - post-r2-massive-iia-f0-h3-flux-quantization
  - post-r2-dgkt-smeared-classical-effective-model
dependency_roles:
  post-r2-massive-iia-f0-h3-flux-quantization: physical-assumption
  post-r2-dgkt-smeared-classical-effective-model: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: "One source-specific, classical, four-dimensional N=1 constant-mode DGKT solution with smeared/averaged O6 charge. It is not a localized global ten-dimensional solution or a universal theorem about massive IIA."
empirical_premises: []
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
sources:
  references:
    - title: "Oliver DeWolfe, Alexander Giryavets, Shamit Kachru, and Washington Taylor, Type IIA Moduli Stabilization"
      url: https://arxiv.org/pdf/hep-th/0505160v3
      locator: "§§2–5, especially flux normalization and tadpole in §§3.1–3.14, extrema in §5.1, and scaling/control in §5.2."
    - title: "Niccolò Cribiori, Daniel Junghans, Vincent Van Hemelryck, Thomas Van Riet, and Timm Wrase, Scale-separated AdS4 vacua of IIA orientifolds and M-theory"
      url: https://arxiv.org/pdf/2107.00019v1
      locator: "§§3–4, smeared massive-IIA scaling and the distinct massless-IIA first-order localization discussion."
---

## Example

In the DGKT source model of [[post-r2-dgkt-smeared-classical-effective-model]], use its $\ell_s=1$ string-unit convention and choose $f_0=1$, $h_3=-2$, $m_0>0$, and, for every bulk index $i$ and every blow-up index $A$, set
$$m_i=n_A=0,\qquad f_4^i=-N,\quad N\in\mathbb N,\qquad c_4:=\frac{\kappa^{1/3}}{\sqrt2}(2\pi)^3,\qquad e_i=c_4f_4^i=-\bar e,\quad \bar e:=c_4N,\qquad f_A\in\mathbb Z_{<0},\quad \bar e\gg |f_A|\gg |m_0|.$$
This is the $T^6/\mathbb Z_3$ orientifold with a further freely acting $\mathbb Z_3$ quotient described by DGKT, with all three bulk and all nine blow-up Kähler moduli included. Its source-reported classical stationary point has positive internal volume, weak coupling at large $\bar e$, and
$$(H_{\rm AdS}R_{KK})^2\sim\bar e^{-1},$$
so the four-dimensional classical constant-mode truncation is parametrically scale separated. Here $H_{\rm AdS}^2:=|\Lambda_4|/(3M_P^2)$ defines the AdS curvature scale in the source's four-dimensional Einstein frame. This is a smeared/averaged, leading-supergravity example; it does not certify a global exact localized O6 solution or a full string-theory vacuum.

## Facts & Assumptions

**Given:** The source model and flux data stated above.

[A1] [[post-r2-massive-iia-f0-h3-flux-quantization]]: $f_0=(2\pi\ell_s)F_0^{\rm Gra\~na}\in\mathbb Z$ and $n_H=(2\pi\ell_s)^{-2}\int_{\Sigma_3}H_3\in\mathbb Z$ in the declared free-period convention. In the DGKT convention of [A2], the positively oriented dual cycle has $n_H=-h_3$ because $H_3=-p\beta^0$ and $p=(2\pi\ell_s)^2h_3$.

[A2] [[post-r2-dgkt-smeared-classical-effective-model]] adopts the DGKT source-model branch, its source-normalized fluxes, solution formulas and signs, and source-reported scaling exponents. Its source-model tadpole input is $f_0h_3=-2$; this is part of the smeared/averaged reduction data, not a consequence of a localized-current theorem.

[A3] [[post-r2-dgkt-smeared-classical-effective-model]]: on the stated DGKT source cover, the signed source term is $N_{D6}-2N_{O6}=-2$. This is a different cover convention from the separate $T^3/\mathbb Z_2$ count in the generic tadpole item.

## Verification

**Given:** The conditional inputs [A1]–[A3], $\kappa,\beta,m_0>0$, and the integer family in the Example.

1.1 By [A1] and [A2], the selected periods have $f_0=1$ and $n_H=-h_3=2$, so they satisfy the free-period quantization input. Their dimensionful flux contribution to the integrated source equation is
$$\frac{F_0^{\rm Gra\~na}}{2\pi\ell_s}\int_{\Sigma_3}H_3=f_0n_H=-f_0h_3=2.$$
The source DGKT smeared/averaged model has signed source charge $-2$ by [A3] and adopts $f_0h_3=-2$ in [A2]; hence its own source-model tadpole sum is $-2-f_0h_3=0$ for this choice. This is a check of the DGKT model input, not an application of the separate localized-current theorem, and it does not assert a localized ten-dimensional solution. [A1, A2, A3, algebra]

1.2 The bulk choice is on the actual lattice in [A2]: $f_4^i=-N$ is integral and $e_{i,\mathrm{phys}}=\ell_s^3c_4f_4^i$, hence $e_i=-c_4N=-\bar e$ in string units. No integrality of the basis coefficient $e_i$ is assumed. Since $m_i=n_A=0$, [A2] gives $\widehat e_i=e_i=-\bar e$ and $\widehat f_A=f_A$. Thus the three $\widehat e_i$ have one common sign, $m_0\widehat e_1\widehat e_2\widehat e_3=-m_0\bar e^3<0$, and every $m_0\widehat f_A=m_0f_A<0$. All source sign conditions hold. [A2, given, algebra]

1.3 The bulk formula in [A2] now gives $b_i=0$ and
$$v_i=\frac1{\bar e}\sqrt{\frac{5\bar e^3}{3\kappa m_0}} =\sqrt{\frac{5}{3\kappa m_0}}\,\bar e^{1/2}>0.$$
For every one of the nine exceptional divisors it gives $b_A=0$ and
$$v_A=\sqrt{-\frac{10 f_A}{3\beta m_0}}>0.$$
Thus $t_i=i v_i$ and $t_A=-i v_A$: the positive $v_A$ denotes a magnitude, not the exceptional imaginary coordinate. The branch therefore fixes all twelve geometric Kähler coordinates. Its dilaton formula has positive right-hand side and fixes $e^D$; the source equation $\xi=e_0/p$ fixes the RR axion. As $h^{2,1}=0$ in the adopted model, no complex-structure moduli are omitted. [A2, given, algebra]

2.1 Take the allowed integer flux sequence $N\to\infty$ with $c_4$ fixed, so $\bar e=c_4N\to\infty$. With $\kappa,\beta,m_0,p,f_A$ fixed, the bulk term $\kappa v_1v_2v_3$ grows as $\bar e^{3/2}$ while the nine blow-up terms remain fixed; so $\mathcal V=A\bar e^{3/2}-B$ with $A:=\kappa(5/(3\kappa m_0))^{3/2}>0$ and $B:=(\beta/6)\sum_Av_A^3>0$ fixed. It is positive for every integer $N$ with $(c_4N)^{3/2}>B/A$, and $\mathcal V\sim\bar e^{3/2}$. The exact formula $e^D=5|p|/(4\sqrt2|m_0|\mathcal V)$ in [A2] gives $e^D\sim\bar e^{-3/2}$, and $e^\phi=e^D\sqrt{\mathcal V}$ gives $g_s=e^\phi\sim\bar e^{-3/4}$. In the source's four-dimensional Einstein frame, $|\Lambda_4|/M_P^4\sim\bar e^{-9/2}$, $M_P\ell_s\sim\bar e^0$, and $(R_{KK}/\ell_s)^2\sim\bar e^{7/2}$. Thus
$$ (H_{\rm AdS}R_{KK})^2=\frac13\frac{|\Lambda_4|}{M_P^4}(M_PR_{KK})^2\sim\bar e^{-1},$$
where $H_{\rm AdS}^2:=|\Lambda_4|/(3M_P^2)$ and $\Lambda_4$ is an energy density. The hierarchy $|\widehat e_i|\gg|\widehat f_A|\gg|m_0|$ is the source's dimensionless string-unit control regime; the calculation remains within the constant-mode approximation. [A2, given, step 1.3, algebra] ∎

## Source references

[[post-r2-dgkt-smeared-classical-effective-model]]

