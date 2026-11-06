---
id: pthm-st-canonical-phase-space-constraints
kind: physics-theorem
title: Canonical Phase Space Constraints
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: physics
library: physics
deps:
  - def-st-flat-bosonic-string-model
  - def-st-string-tension-alpha-prime
  - post-st-bosonic-polyakov-model
  - def-st-conformal-gauge-and-residual-symmetry
  - pthm-st-polyakov-eom-virasoro-constraints
  - def-st-canonical-string-phase-space
dependency_roles:
  def-st-flat-bosonic-string-model: formulation-prerequisite
  def-st-string-tension-alpha-prime: formulation-prerequisite
  post-st-bosonic-polyakov-model: physical-assumption
  def-st-conformal-gauge-and-residual-symmetry: formulation-prerequisite
  pthm-st-polyakov-eom-virasoro-constraints: physical-result
  def-st-canonical-string-phase-space: operational-prerequisite
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "Classical canonical phase-space form and first-class metric constraints of the flat tensile Polyakov string after conformal gauge fixing; no quantization claim."
sources:
  references:
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, University of Cambridge Part III lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "§§1.3.2 and 2.2, printed pp. 22–24 and 32–36: conformal-gauge constraints and canonical string variables."
    - title: "Barton Zwiebach, A First Course in String Theory, second edition, Cambridge University Press, 2009"
      url: "https://pierre.ag.gerard.web.ulb.be/textbooks/books/A_First_Course_In_String_Theory.pdf"
      locator: "§§24.1 and 24.6, printed pp. 570–571 and 583–587: canonical momentum, Hamiltonian density, and metric constraints."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For the adopted flat Polyakov model in conformal gauge $h_{ab}=\operatorname{diag}(-1,+1)$, the Lagrangian density is $\mathcal L=\frac{T}{2}(\dot X^2-X'^2)$, the canonical momentum is $\Pi^\mu=T\dot X^\mu$, and the Hamiltonian density is $\mathcal H=\frac{1}{2T}\Pi^2+\frac{T}{2}X'^2$. The metric equation is equivalent to the constraints $D(\sigma)=\Pi\cdot X'=0$ and $G(\sigma)=\Pi^2+T^2X'^2=0$. On $J=\mathbb R/(2\pi\mathbb Z)$ for a closed string or $J=(0,\pi)$ for the open-string interior, use the canonical phase-space bracket specified in the Facts & Assumptions below. For smooth smearings $f,g$ that are periodic on the circle or compactly supported in the open-string interior, the brackets of $D[f]=\int_J fD\,d\sigma$ and $G[g]=\int_JgG\,d\sigma$ are $\{D[f],D[g]\}=D[fg'-gf']$, $\{D[f],G[g]\}=G[fg'-gf']$, and $\{G[f],G[g]\}=4T^2D[fg'-gf']$. Their closure as linear combinations of the constraints is the meaning of first-class here.

## Statement references

[[def-st-flat-bosonic-string-model]]

[[def-st-string-tension-alpha-prime]]

[[post-st-bosonic-polyakov-model]]

[[def-st-conformal-gauge-and-residual-symmetry]]

[[pthm-st-polyakov-eom-virasoro-constraints]]

[[def-st-canonical-string-phase-space]]

## Facts & Assumptions

**Given:** A smooth equal-time string configuration $X(\sigma)$, momentum density $\Pi_\mu(\sigma)$, the flat-target metric $\eta$, the adopted Polyakov action, and conformal gauge $h_{ab}=\operatorname{diag}(-1,+1)$.

[F1] [[def-st-flat-bosonic-string-model]]: $X$ takes values in $\mathbb R^{1,D-1}$ with $\eta=\operatorname{diag}(-1,+1,\ldots,+1)$; $\tau,\sigma$ are dimensionless.

[F2] [[def-st-string-tension-alpha-prime]]: $T=(2\pi\alpha')^{-1}>0$.

[A1] [[post-st-bosonic-polyakov-model]]: $S_P=-\frac{T}{2}\int\sqrt{-h}\,h^{ab}\partial_aX\cdot\partial_bX\,d^2\sigma$.

[F3] [[def-st-conformal-gauge-and-residual-symmetry]]: a local classical gauge choice permits $h_{ab}=e^{2\phi}\operatorname{diag}(-1,+1)$, and Weyl gauge sets $\phi=0$.

[F4] [[pthm-st-polyakov-eom-virasoro-constraints]]: the metric equation gives $T_{00}=\frac12(\dot X^2+X'^2)=0$ and $T_{01}=\dot X\cdot X'=0$.

[F5] [[def-st-canonical-string-phase-space]]: the canonical bracket is $\{F,G\}=\int_J(\delta F/\delta X^\mu\,\delta G/\delta\Pi_\mu-\delta F/\delta\Pi_\mu\,\delta G/\delta X^\mu)\,d\sigma$, with periodic smearings on the circle and compactly supported smearings on the open-string interior.

## Proof

1.1 For the flat target and its mostly-plus metric [F1], substituting $h_{ab}=\operatorname{diag}(-1,+1)$ into [A1] gives $\mathcal L=-\frac{T}{2}(-\dot X^2+X'^2)=\frac{T}{2}(\dot X^2-X'^2)$. [given, F1, A1, F3, algebra]

1.2 For smooth smearings $f,g$ of the boundary type in [F5], set $D[f]=\int_Jf\,\Pi\cdot X'\,d\sigma$ and $G[g]=\int_Jg(\Pi^2+T^2X'^2)\,d\sigma$. Their variational derivatives are $\delta D[f]/\delta X=-(f\Pi)'$, $\delta D[f]/\delta\Pi=fX'$, $\delta G[g]/\delta X=-2T^2(gX')'$, and $\delta G[g]/\delta\Pi=2g\Pi$, by differentiating the integrands and integrating by parts with no boundary term. [F5, algebra]

2.1 Differentiating this density with respect to $\dot X_\mu$ gives $\Pi^\mu=\partial\mathcal L/\partial\dot X_\mu=T\dot X^\mu$. Since $T>0$, $\dot X^\mu=\Pi^\mu/T$. [F2, step 1.1, algebra]

3.1 The Legendre transform is $\mathcal H=\Pi_\mu\dot X^\mu-\mathcal L=T\dot X^2-\frac{T}{2}(\dot X^2-X'^2)=\frac{T}{2}(\dot X^2+X'^2)$. Substituting step 2.1 yields $\mathcal H=\frac{1}{2T}\Pi^2+\frac{T}{2}X'^2$. [step 1.1, step 2.1, algebra]

3.2 Multiplying the two metric constraints in [F4] by $T$ and $T^2$, respectively, and using step 2.1 gives $D=\Pi\cdot X'=T\dot X\cdot X'=0$ and $G=\Pi^2+T^2X'^2=T^2(\dot X^2+X'^2)=0$. Conversely, because $T>0$, these canonical constraints imply both metric constraints. [F2, F4, step 2.1, algebra]

4.1 Substituting the derivatives from step 1.2 into the bracket, the first constraint bracket is
$$\{D[f],D[g]\}=\int_J\bigl(-(f\Pi)'\cdot gX'+fX'\cdot(g\Pi)'\bigr)d\sigma=\int_J(fg'-gf')\Pi\cdot X'\,d\sigma,$$
because the $\Pi'\cdot X'$ terms cancel. For the mixed bracket, expand the derivatives:
$$-2g\Pi\cdot(f\Pi)'=-2gf'\Pi^2-fg(\Pi^2)',\qquad 2T^2fX'\cdot(gX')'=2T^2fg'X'^2+T^2fg(X'^2)'.$$
Integration by parts on the total-derivative terms, with no endpoint term by [F5], makes their sum $(fg'-gf')(\Pi^2+T^2X'^2)$, hence $\{D[f],G[g]\}=G[fg'-gf']$. Finally,
$$\{G[f],G[g]\}=4T^2\int_J\bigl(-g\Pi\cdot(fX')'+f\Pi\cdot(gX')'\bigr)d\sigma=4T^2D[fg'-gf'],$$
since the terms proportional to $fg\,\Pi\cdot X''$ cancel. Thus all three brackets are smearings of the constraints, which is first-class closure by definition here. [F5, step 1.2, algebra] ∎

