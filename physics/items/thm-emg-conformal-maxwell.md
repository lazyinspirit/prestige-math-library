---
id: thm-emg-conformal-maxwell
kind: theorem
title: "Four-dimensional conformal Maxwell covariance"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-countable-choice
  - def-emg-lorentzian-forms
  - lem-emg-conformal-hodge-multiplier
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
  lem-emg-conformal-hodge-multiplier: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, §3.1.3, author-hosted full-text HTML, Hodge dual"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html"
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, §4.5.1, author-hosted full-text HTML, Maxwell field equation and action"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html"
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, §§3.1–3.2 and 4.3–4.5, Hodge dual, Maxwell forms and electromagnetic stress"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Statement

Let $(M,g,N,o)$ and a smooth real two-form $F$ be as in [[def-emg-lorentzian-forms]]. Let $\Omega:M\to(0,\infty)$ be a smooth dimensionless function, put $\widetilde g=\Omega^2g$ with the same orientation, let $\mu_0>0$ be constant, and let $j$ be a smooth vector field. The Hodge operator is that of [[lem-emg-conformal-hodge-multiplier]]. Define

$$\mathcal Q_{ab}(g,F):=F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd},\qquad T_{ab}(g,F):=\mu_0^{-1}\mathcal Q_{ab}(g,F).$$

Then $(F,j)$ satisfies the differential-form Maxwell equations

$$dF=0,\qquad d(\star_gF)=\mu_0\,\iota_j\operatorname{vol}_g$$

if and only if $(F,\widetilde j)$ satisfies the same equations for $\widetilde g$, where $\widetilde j:=\Omega^{-4}j$. In addition,

$$\operatorname{vol}_{\widetilde g}=\Omega^4\operatorname{vol}_g,\qquad \iota_{\widetilde j}\operatorname{vol}_{\widetilde g}=\iota_j\operatorname{vol}_g,\qquad \widetilde T_{ab}=\Omega^{-2}T_{ab},\qquad \widetilde T^{ab}=\Omega^{-6}T^{ab}.$$

If $n$ is a $g$-unit timelike vector, then $\widetilde n:=\Omega^{-1}n$ is $\widetilde g$-unit timelike and $\widetilde T(\widetilde n,\widetilde n)=\Omega^{-4}T(n,n)$. On any oriented integration domain where the integral exists, or for a compactly supported action difference, the quadratic integral $\int F_{ab}F^{ab}\operatorname{vol}_g$ is unchanged. These are tensor identities; they do not assert Einstein-equation or matter-model invariance.

## Facts & Assumptions

**Given:** The smooth oriented Lorentzian manifold, volume form and smooth two-form of [[def-emg-lorentzian-forms]], a positive smooth $\Omega$, a constant $\mu_0>0$, and a smooth vector field $j$. The inherited geometric setup carries $\mathrm{AC}_\omega$ as in [A1].

[F1] The Hodge operators of $g$ and $\widetilde g=\Omega^2g$ satisfy $\star_{\widetilde g}\beta=\Omega^{4-2k}\star_g\beta$ for every smooth $k$-form $\beta$; hence they agree on two-forms. ([[lem-emg-conformal-hodge-multiplier]])

[F2] The metric volume form in an oriented chart is $\sqrt{|\det(g_{ab})|}\,dx^0\wedge dx^1\wedge dx^2\wedge dx^3$. ([[def-emg-lorentzian-forms]])

[A1] The inherited choice assumption is Countable Choice $\mathrm{AC}_\omega$, not the full Axiom of Choice; the pointwise conformal identities below use no additional choice. ([[def-countable-choice]])

## Proof

1.1 In dimension four, $\det(\widetilde g_{ab})=\Omega^8\det(g_{ab})$. Since $\Omega>0$, [F2] therefore gives $\operatorname{vol}_{\widetilde g}=\Omega^4\operatorname{vol}_g$. By [F1], $\star_{\widetilde g}F=\star_gF$. [given, F1, F2, A1, algebra]

1.2 If $dF=0$, then the same two-form $F$ still obeys $dF=0$ for $\widetilde g$, because the exterior derivative does not depend on the metric. [given, algebra]

1.3 The lower tensor satisfies $\widetilde F_b{}^c=\Omega^{-2}F_b{}^c$ and $\widetilde F_{cd}\widetilde F^{cd}=\Omega^{-4}F_{cd}F^{cd}$. Substitution in its definition gives $\widetilde{\mathcal Q}_{ab}=\Omega^{-2}\mathcal Q_{ab}$, hence $\widetilde T_{ab}=\Omega^{-2}T_{ab}$. Raising both indices with $\widetilde g^{-1}=\Omega^{-2}g^{-1}$ gives $\widetilde T^{ab}=\Omega^{-6}T^{ab}$. [given, F1, algebra]

2.1 Using step 1.1 and linearity of contraction in its vector argument, $\iota_{\widetilde j}\operatorname{vol}_{\widetilde g}=\iota_{\Omega^{-4}j}(\Omega^4\operatorname{vol}_g)=\iota_j\operatorname{vol}_g$. Thus $d(\star_{\widetilde g}F)=d(\star_gF)=\mu_0\iota_j\operatorname{vol}_g=\mu_0\iota_{\widetilde j}\operatorname{vol}_{\widetilde g}$ whenever the original sourced equation holds. [given, step 1.1, F1, algebra]

2.2 Since $\widetilde g(\Omega^{-1}n,\Omega^{-1}n)=g(n,n)=-1$, the rescaled vector is unit timelike. Contracting the lower-tensor identity twice with $\widetilde n=\Omega^{-1}n$ yields $\widetilde T(\widetilde n,\widetilde n)=\Omega^{-4}T(n,n)$. [given, step 1.3, algebra]

3.1 Conversely, $\widetilde j=\Omega^{-4}j$ implies $j=\Omega^4\widetilde j$. Reversing the contraction equality in step 2.1 and using $\star_gF=\star_{\widetilde g}F$ gives the original sourced equation; the homogeneous equation is unchanged by step 1.2. [given, step 1.2, step 2.1, algebra]

4.1 Raising the two indices of $F$ contributes $\Omega^{-4}$ and the volume form contributes $\Omega^4$, so $F_{ab}F^{ab}\operatorname{vol}_g$ is invariant pointwise. Integration over the same domain preserves equality whenever defined, as do compactly supported action differences. [given, step 1.1, algebra] ∎
