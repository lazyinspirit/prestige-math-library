---
id: ex-type-ii-four-graviton-tree-alpha-prime-expansion
kind: example
title: Type II four-graviton tree amplitude and alpha-prime expansion
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 6
domain: physics
physical_scope: "Source-normalized on-shell ten-dimensional Type II four-graviton tree amplitude and its local dimensionless Gamma-series expansion; the tensor kinematic factor and external normalization are source inputs."
deps:
  - def-axiom-of-choice
  - def-string-vertex-operator-and-covariant-insertion
  - post-rns-flat-worldsheet-model
  - def-string-coupling-genus-weight
  - pthm-closed-string-genus-npoint-coupling-power
  - lem-string-log-gamma-ratio-series
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-string-vertex-operator-and-covariant-insertion: formulation-prerequisite
  post-rns-flat-worldsheet-model: physical-assumption
  def-string-coupling-genus-weight: formulation-prerequisite
  pthm-closed-string-genus-npoint-coupling-power: formulation-prerequisite
  lem-string-log-gamma-ratio-series: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Eric D’Hoker and Michael B. Green, Exploring transcendentality in superstring amplitudes"
      url: "https://arxiv.org/pdf/1906.01652v3"
      locator: "§§2.1–2.2, PDF pp. 6–9, ten-dimensional normalization, kinematic invariants, exact Gamma ratio, and low-energy expansion."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

Assume full AC. In the source's flat ten-dimensional Type II convention, for four massless on-shell gravitons with momentum conservation let $s=-\alpha'(k_1+k_2)^2/4$, $t=-\alpha'(k_2+k_3)^2/4$, and $u=-\alpha'(k_1+k_3)^2/4$, so $s+t+u=0$. Use $E=\mathbb R^{1,9}$ with mostly-plus metric $\eta$, $k_i\in E^*\otimes\mathbb C$ of units length$^{-1}$, and dimensionless polarizations $\epsilon_i\in\operatorname{Sym}^2(E^*\otimes\mathbb C)$ satisfying $k_i^\mu\epsilon_{i,\mu\nu}=0$ and $\eta^{\mu\nu}\epsilon_{i,\mu\nu}=0$, with indices raised by $\eta^{-1}$. Here $\alpha'$ has units length$^2$ and $g_s>0$ is dimensionless. At these fixed external data supply a scalar $K\in\mathbb C$ of units length$^{-8}$ and define $\mathcal R^4:=K$. This symbol is a supplied scalar prefactor, not an unspecified tensor operation; its evaluation from polarizations is additional input. Conditional on this prefactor and gravitational normalization $\kappa_{10}^2=2^6\pi^7(\alpha')^4g_s^2$, the adopted source amplitude has the form
$$\mathcal M_4^{(0)}=\kappa_{10}^2g_s^{-2}\,\mathcal R^4\,\frac{G(s,t,u)}{stu},\qquad G(s,t,u)=\prod_{x\in\{s,t,u\}}\frac{\Gamma(1-x)}{\Gamma(1+x)}.$$
For $|s|,|t|,|u|<1$, $G-1$ is divisible by $stu$ on the plane $s+t+u=0$. Thus $G/(stu)=1/(stu)+H(s,t)$, where $H$ is analytic near $(0,0)$ and
$$H(s,t)=2\zeta(3)+\zeta(5)(s^2+t^2+u^2)+2\zeta(3)^2stu+\text{terms of higher Taylor degree}.$$
The first analytic contact coefficient is $2\zeta(3)\mathcal R^4$, at relative order $(\alpha')^3$ to the massless pole. The scalar prefactor and external normalization are inputs; this on-shell result does not select an off-shell action modulo field redefinitions.

## Example references

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** Full AC as defined in [[def-axiom-of-choice]], flat ten-dimensional Type II, massless on-shell graviton momenta with momentum conservation, $|s|,|t|,|u|<1$, and the source convention for $\kappa_{10}$ and the supplied scalar $K=\mathcal R^4$.

[F1] [[post-rns-flat-worldsheet-model]] fixes the flat RNS worldsheet model and its units. [[def-string-vertex-operator-and-covariant-insertion]] separates local BRST/vertex data from source-specific external normalization; its CFT suppliers currently have stale readiness hashes.

[F3] [[def-string-coupling-genus-weight]] supplies the closed-sphere topology factor $g_s^{-2}$. [[pthm-closed-string-genus-npoint-coupling-power]] instead gives $g_s^{2}$ for four canonically sphere-normalized external vertices. The source here uses its own canonical ten-dimensional graviton normalization, so the two conventions are not equated; the factor $\kappa_{10}^2g_s^{-2}$ is carried exactly as source data.

[F4] [[lem-string-log-gamma-ratio-series]]: $\log[\Gamma(1-w)/\Gamma(1+w)]=2\gamma w+2\sum_{m\ge1}\zeta(2m+1)w^{2m+1}/(2m+1)$ for $|w|<1$.

[A1] D’Hoker–Green's scalar tree function (2.2) and external normalization (2.1) are adopted source inputs. At fixed momenta and polarizations the instance supplies the scalar $K$ defined in the Example; identifying it with the source's kinematic contraction requires that separate evaluation. No worldsheet measure or tensor normalization is rederived here.

[A2] Full AC is assumed as defined in [[def-axiom-of-choice]], as stated in the Statement and Given. The external on-shell graviton states and exact tree amplitude are the source inputs in [A1]; no identification of relative RNS BRST cohomology with a light-cone spectrum is inferred here.

## Verification

1.1 Apply [F4] to $s,t,u$ and add the three logarithms. The linear contribution is $2\gamma(s+t+u)=0$. The cubic and quintic contributions are $\frac{2\zeta(3)}3(s^3+t^3+u^3)$ and $\frac{2\zeta(5)}5(s^5+t^5+u^5)$. Using $s+t+u=0$ gives $s^3+t^3+u^3=3stu$ and $s^5+t^5+u^5=\frac52stu(s^2+t^2+u^2)$, so the summed logarithm begins $2\zeta(3)stu+\zeta(5)stu(s^2+t^2+u^2)+O(\rho^7)$, where $\rho=\max(|s|,|t|,|u|)$. More generally, for every odd $m\ge3$, $s^m+t^m+u^m$ vanishes on each of the lines $s=0$, $t=0$, $u=0$ in the plane $s+t+u=0$; the factor theorem makes each such symmetric power sum divisible by $stu$. The locally convergent logarithm series is consequently divisible by $stu$. [given, F4, algebra]

2.1 Set $F(s,t):=G(s,t,-s-t)-1$, which is holomorphic near $(0,0)$ by [F4]. The factor $R(w):=\Gamma(1-w)/\Gamma(1+w)$ satisfies $R(w)R(-w)=1$ near $w=0$, so $F$ vanishes on each of the lines $s=0$, $t=0$, and $s+t=0$. To see the product divisibility holomorphically, write $F(s,t)=sF_1(s,t)$ with $F_1(s,t)=\int_0^1\partial_sF(rs,t)\,dr$. Since $F(s,0)=0$, one has $F_1(s,0)=0$ for $s\ne0$, and then for all $s$ by continuity; the same one-variable division formula gives $F_1=tF_2$ with $F_2$ holomorphic. On $s+t=0$ with $s\ne0$, this implies $F_2(s,-s)=0$, and continuity gives the same at $s=0$. In coordinates $(s,y=s+t)$, one-variable division by $y$ therefore gives $F_2(s,y)=yF_3(s,y)$ with $F_3$ holomorphic. Hence $F=st(s+t)F_3=-stuF_3$, and $H=F/(stu)$ is analytic. From step 1.1 and $s+t+u=0$, the degree-three and degree-five parts of $L=\log G$ are $L_3=2\zeta(3)stu$ and $L_5=\zeta(5)stu(s^2+t^2+u^2)$; all remaining terms of $L$ have degree at least seven. Thus $G-1=L_3+L_5+\tfrac12L_3^2$ plus terms of degree at least seven. Dividing by $stu$ gives the displayed constant, quadratic and cubic terms of $H$; because $H$ is analytic, the remaining Taylor terms have degree at least four. This establishes the contact expansion without a nonuniform big-O assertion at a channel pole. [F4, step 1.1, algebra]

3.1 The invariants $s,t,u$ are dimensionless and proportional to $\alpha'$ times quadratic momentum invariants. The massless pole is proportional to $(stu)^{-1}$, so a constant contact term relative to it carries the factor $stu=O((\alpha')^3)$ at fixed momenta. The prefactor $\kappa_{10}^2g_s^{-2}\mathcal R^4$ is common to both terms by [A1]; therefore the first analytic term has the stated relative $\alpha'^3$ order. The distinct sphere-normalized-vertex power in [F3] is not used to alter the source normalization. [A1, A2, F1, F3, step 2.1, algebra] ∎

## Remarks

The tree amplitude is on shell. It determines an on-shell $R^4$ amplitude structure, not a unique off-shell effective action. The external gravitons, tensor contraction and normalization are source inputs in [A1]; the local Gamma expansion does not require a BRST/light-cone or RR bispinor-to-form identification.
