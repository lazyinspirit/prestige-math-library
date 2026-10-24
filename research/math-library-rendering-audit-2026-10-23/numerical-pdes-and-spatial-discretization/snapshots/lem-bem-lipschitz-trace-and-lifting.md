---
id: lem-bem-lipschitz-trace-and-lifting
kind: lemma
title: The H1 trace and lifting theorem on a compact Lipschitz boundary
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-bem-lipschitz-polyhedral-boundary-and-trace-spaces
  - lem-bem-half-order-bessel-slobodeckij-equivalence
  - thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms
  - thm-fourier-inversion-on-schwartz-space
  - thm-gagliardo-nirenberg-sobolev-inequality
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - thm-holder-inequality-for-integrals
  - def-axiom-of-choice
  - def-countable-choice
  - lem-na-lipschitz-scalar-h1-h2-extension
  - thm-l-one-approximate-identities-converge-in-l-p
  - thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
  - prop-mollifier-families-are-l-one-approximate-identities
  - lem-weak-leibniz-rule-with-a-smooth-factor
  - lem-bem-lipschitz-graph-sobolev-and-green-interface
justified_by: []
proof_strategy: direct
axiom_use: AC is now used also through Rademacher/ACL graph pullback/Green interface, in addition to homogeneous Sobolev; CC remains inherited for Fourier/integration.
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§2 and the proof of Lemma 3.6, printed pp. 614–616 and 619–625: the Lipschitz Gagliardo trace lemma, a continuous right inverse, and its localization proof."
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 1 §1.5, PDF pp. 12–14: local graph flattening, polyhedral Lipschitz domains, and the almost-everywhere normal convention."
---

## Statement

Assume the Axiom of Choice and let $\Gamma$ be any compact Lipschitz boundary in the geometry of [[def-bem-lipschitz-polyhedral-boundary-and-trace-spaces]]; no polyhedral restriction is imposed. The interior trace $\gamma^-:H^1(\Omega^-)\to H^{1/2}(\Gamma)$ is bounded. On every bounded exterior boundary collar $C=\Omega^+\cap U$, where $U$ is a bounded neighborhood of $\Gamma$ with Lipschitz collar boundary, the exterior trace $\gamma^+:H^1(C)\to H^{1/2}(\Gamma)$ is bounded. The corresponding localized assertion holds over each boundary chart. Thus an exterior function has this trace whenever it is $H^1$ up to the boundary on such collars; membership in $H^1_{\mathrm{loc}}(\Omega^+)$ alone does not assert a boundary trace. There is a bounded linear right inverse $L:H^{1/2}(\Gamma)\to H^1(\mathbb R^3)$ with $\gamma(Lg)=g$. There is also a bounded extension operator $E:H^1(\Omega^-)\to H^1(\mathbb R^3)$ with $(Eu)|_{\Omega^-}=u$.

Let $\dot H^1(\mathbb R^3)$ denote the completion of $C_c^\infty(\mathbb R^3)$ in the norm $\|u\|_{\dot H^1}=\|\nabla u\|_{L^2}$. Its elements have an $L^6$ representative, the trace $\gamma:\dot H^1(\mathbb R^3)\to H^{1/2}(\Gamma)$ is bounded, and the right inverse above may be chosen with compact support near $\Gamma$.

## Facts & Assumptions

**Given:** The Axiom of Choice, Countable Choice, and the fixed finite chart atlas and chartwise $H^{1/2}(\Gamma)$ norm of [[def-bem-lipschitz-polyhedral-boundary-and-trace-spaces]].

[A1] The Axiom of Choice is assumed through Gagliardo–Nirenberg–Sobolev, and Countable Choice is inherited through the Fourier suppliers ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] The Fourier transform with the negative-sign $2\pi$ convention agrees with the Plancherel extension on $L^2(\mathbb R^n)$; in particular Plancherel may be used on the tangential and normal Fourier variables ([[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]]).

[F2] Fourier inversion holds pointwise on Schwartz functions, with the negative-sign $2\pi$ convention ([[thm-fourier-inversion-on-schwartz-space]]).

[F3] Under the Axiom of Choice, $\|u\|_{L^6(\mathbb R^3)}\le C\|\nabla u\|_{L^2(\mathbb R^3)}$ for every $u\in W^{1,2}(\mathbb R^3)$; the inequality extends to the completion of $C_c^\infty$ in the gradient norm by completion ([[thm-gagliardo-nirenberg-sobolev-inequality]]).

[F4] Cauchy–Schwarz bounds a Fourier integral pairing by the product of its $L^2$ factors ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[F5] Hölder's inequality on any bounded measurable set $A\subset\mathbb R^3$ gives $\|u\|_{L^2(A)}\le |A|^{1/3}\|u\|_{L^6(A)}$ ([[thm-holder-inequality-for-integrals]]).

[F7] A Lipschitz graph shear and its inverse preserve volume and act boundedly on $H^1$. Its local endpoint trace agrees with the continuous restriction on smooth inputs; the graph Green identity, matching-trace gluing and zero-trace approximation hold. Graph surface measure and normal are intrinsic, with bounded chart area densities. ([[lem-bem-lipschitz-graph-sobolev-and-green-interface]])

[F8] The Bessel $H^{1/2}(\mathbb R^2)$ norm is equivalent to the Slobodeckij norm $\|g\|_2^2+\int\int|g(x)-g(y)|^2|x-y|^{-3}dxdy$ ([[lem-bem-half-order-bessel-slobodeckij-equivalence]]).

[F92] Under the already assumed AC, every bounded Lipschitz domain $B$ has a bounded $H^1$ extension $E_B$ to $\mathbb R^3$, including graph-chart pieces and bounded annuli. For $v\in H^1(B)$, multiply $E_Bv$ by a fixed smooth cutoff equal to one near $\overline B$ and convolve with a unit-mass smooth approximate identity. The weak product rule and derivative commutation give $D^\alpha(\rho_\epsilon*(\zeta E_Bv))=\rho_\epsilon*D^\alpha(\zeta E_Bv)$ for $|\alpha|\le1$; approximate-identity convergence in $L^2$ for each of these four functions gives convergence in $H^1(B)$. Thus restrictions of ambient smooth functions are dense in $H^1(B)$, with the convergence of every weak derivative supplied rather than inferred from pointwise smoothing. The same argument on a bounded flat half-box or its even reflection supplies the flat-chart approximation. ([[lem-na-lipschitz-scalar-h1-h2-extension]], [[lem-weak-leibniz-rule-with-a-smooth-factor]], [[prop-mollifier-families-are-l-one-approximate-identities]], [[thm-l-one-approximate-identities-converge-in-l-p]], [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]])

## Proof


1.1 The flat trace estimate. First take $u\in C_c^\infty(\mathbb R^3)$ and write $\widehat u(\xi,\tau)$ for its full Fourier transform, with $\xi\in\mathbb R^2$ tangential and $\tau\in\mathbb R$ normal. Fourier inversion [F2] in $\tau$ and Cauchy–Schwarz [F4] give $|\widehat{u(\cdot,0)}(\xi)|^2\le C\left(\int_{\mathbb R}(1+|\xi|^2+\tau^2)|\widehat u(\xi,\tau)|^2d\tau\right)(1+|\xi|^2)^{-1/2},$ because $\int_{\mathbb R}(1+|\xi|^2+\tau^2)^{-1}d\tau=\pi(1+|\xi|^2)^{-1/2}$. Multiplying by $(1+|\xi|^2)^{1/2}$, integrating in $\xi$, and applying [F1] proves $\|u(\cdot,0)\|_{H^{1/2}(\mathbb R^2)}\le C\|u\|_{H^1(\mathbb R^3)}$. [A1, F1, F2, F4, given, algebra]

2.1 A flat right inverse. Given $g\in H^{1/2}(\mathbb R^2)$, put $a(\xi)=(1+|\xi|^2)^{1/2}$ and define $\widehat{Eg}(\xi,t)=\widehat g(\xi)e^{-a(\xi)|t|}\chi(t)$, where $\chi\in C_c^\infty(\mathbb R)$ equals $1$ near $0$. Then $Eg(\cdot,0)=g$. Direct integration uses $\int_0^\infty e^{-2at}dt=(2a)^{-1}$ and $|\xi|^2\le a^2$ to give $\|Eg\|_{H^1(\mathbb R^3)}^2\le C\int_{\mathbb R^2}(1+|\xi|^2)^{1/2}|\widehat g(\xi)|^2d\xi$. Plancherel [F1] therefore gives a bounded right inverse on the flat boundary. [F1, step 1.1, algebra]

3.1 Flattening an arbitrary Lipschitz chart. Extend its graph function to a globally Lipschitz function with the same constant by the infimum extension, and use the shear in [F7]. The whole-space extension and smooth density in [F92], followed by bounded shear pullback, reduce the one-sided trace estimate to step 1.1; the endpoint trace of [F7] identifies the continuous boundary values on the smooth approximants and hence the one-sided trace independently of an extension. For the fixed Lipschitz chart partition, multiplication by a bounded Lipschitz cutoff $\chi$ is bounded on $H^{1/2}(\mathbb R^2)$: split the difference of $\chi g$ into $\chi(x)(g(x)-g(y))+g(y)(\chi(x)-\chi(y))$ and use $|\chi(x)-\chi(y)|\le\min(L_\chi|x-y|,2\|\chi\|_\infty)$. In two dimensions its extra Slobodeckij integral is bounded by $C\|g\|_2^2$, since the radial integrals near zero and infinity are respectively $\int_0^1dr$ and $\int_1^\infty r^{-2}dr$. Thus [F8] gives the required Bessel multiplier bound. On chart overlaps, [F7] supplies the same intrinsic surface measure; graph distances are bi-Lipschitz comparable and its graph area densities are bounded above and below. Consequently the localized surface double integrals, with denominator $|x-y|^3$, compare in both directions with their planar pullbacks using the graph measure in each variable, without any unproved Lipschitz volume substitution. Positive support margins inside each chart bound all zero-extension tail terms by $C\|g\|_2^2$. These observations justify the finite chart norm and the summed trace estimate. To lift $g$, take each zero-extended localized input $(\chi_jg)\circ\Phi_j$ in that Bessel space, use the flat right inverse of step 2.1, and push it through the inverse shear of [F7]. Multiply by a smooth ambient cutoff supported in the chart and equal to one near the support of $\chi_j$ on the surface. Its trace is exactly $\chi_jg$, not $\chi_j^2g$. The finite sum therefore has trace $\sum_j\chi_jg=g$ and bounded whole-space $H^1$ norm. The chart cutoffs give bounded support near $\Gamma$. The same construction on the other side proves the localized exterior-collar assertion. [F7, F8, F92, step 1.1, step 2.1, given, construct, algebra]

4.1 The bounded extension $E:H^1(\Omega^-)\to H^1(\mathbb R^3)$ with the correct restriction is supplied directly by the already proved general Lipschitz extension construction in [F92]; that construction assumes no boundary trace theorem. Its compact-support cutoff is allowed there. In a flattened collar, the one-dimensional fundamental theorem and Cauchy--Schwarz give $\|f(\cdot,t)-\tau f\|_{L^2(K)}^2\le t\int_0^t\|\partial_s f(\cdot,s)\|_{L^2(K)}^2ds$ for a compact tangential set $K$ and $t>0$, with $t$ measured into the chosen side. The weak-coordinate and endpoint argument of [F7] passes this to $H^1$ functions. Thus the trace just constructed agrees with the boundary restriction for a continuous $H^1$ representative, since continuity gives the same local $L^2$ limit. [F7, F92, step 3.1, given, construct]

5.1 The homogeneous energy trace. For $u\in C_c^\infty(\mathbb R^3)$, [F3] gives $\|u\|_6\le C\|\nabla u\|_2$; hence it continues to every element of $\dot H^1$ by completion. Fix $\zeta\in C_c^\infty(\mathbb R^3)$ equal to $1$ near $\Gamma$. Hölder's inequality [F5] on the bounded support of $\nabla\zeta$ gives $\|\zeta u\|_{H^1}\le C(\|\nabla u\|_2+\|u\|_6)\le C\|u\|_{\dot H^1}$. Applying the trace bound of step 3.1 to $\zeta u$ proves $\|\gamma u\|_{H^{1/2}(\Gamma)}\le C\|u\|_{\dot H^1}$; the compactly supported right inverse from step 3.1 is also a right inverse into $\dot H^1$. [A1, F3, F5, step 3.1, given, algebra] ∎

