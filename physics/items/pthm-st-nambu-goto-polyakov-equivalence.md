---
id: pthm-st-nambu-goto-polyakov-equivalence
kind: physics-theorem
title: Nambu Goto Polyakov Equivalence
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: physics
library: physics
deps:
  - def-st-flat-bosonic-string-model
  - def-st-string-tension-alpha-prime
  - post-st-bosonic-polyakov-model
dependency_roles:
  def-st-flat-bosonic-string-model: formulation-prerequisite
  def-st-string-tension-alpha-prime: formulation-prerequisite
  post-st-bosonic-polyakov-model: physical-assumption
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: "Classical equivalence of the free tensile flat-target Polyakov and Nambu–Goto actions for a nondegenerate timelike embedded worldsheet on the positive proportionality branch, with matched variational boundary data; no quantum-measure equivalence."
sources:
  references:
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, University of Cambridge Part III lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "§§1.2–1.3, printed pp. 14–24: induced metric, Polyakov metric variation, proportionality, and classical action substitution."
    - title: "Barton Zwiebach, A First Course in String Theory, second edition, Cambridge University Press, 2009"
      url: "https://pierre.ag.gerard.web.ulb.be/textbooks/books/A_First_Course_In_String_Theory.pdf"
      locator: "§24.6, printed pp. 583–587, equations (24.70)–(24.90): metric variation, proportionality, determinant, and classical action equivalence."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $\Sigma$ be an oriented smooth Lorentzian two-manifold, possibly with smooth boundary, and let $X:\Sigma\to\mathbb R^{1,D-1}$ be a $C^2$ embedding whose differential has rank two and whose induced metric $\gamma_{ab}=\partial_aX\cdot\partial_bX$ is nondegenerate Lorentzian. Let $h$ be a $C^1$ Lorentzian auxiliary metric and define $\lambda=\frac12h^{ab}\gamma_{ab}$. Use the positive branch $\lambda>0$, the adopted free Polyakov action $S_P=-\frac{T}{2}\int_\Sigma\sqrt{-\det h}\,h^{ab}\partial_aX\cdot\partial_bX\,d^2\sigma$, and $T=(2\pi\alpha')^{-1}$. Define the Nambu–Goto action by $S_{\rm NG}[X]=-T\int_\Sigma\sqrt{-\det\gamma}\,d^2\sigma$, using the positive square root. For either action, stationarity requires vanishing first variation for all admissible compactly supported $X$-variations $V=\delta X$ that are $C^2$ up to the boundary. Polyakov stationarity additionally requires vanishing first variation for all compactly supported $C^1$ symmetric variations of the auxiliary metric; the Nambu–Goto action has no independent metric variable. On each boundary piece choose the same fixed target components in both actions, imposing $V^\mu=0$ there; the other components are free and their boundary flux coefficients must vanish (natural data). Variations vanish on any initial/final time slices. On noncompact worldsheets, use these local first variations even when total actions diverge. Write $d\ell_a$ for the oriented coordinate boundary element characterized by $\int_\Sigma\partial_aJ^a\,d^2\sigma=\int_{\partial\Sigma}J^a d\ell_a$ for a compactly supported vector density $J$; this convention also applies at null boundaries. The auxiliary-metric Euler–Lagrange equation is $T_{ab}=\gamma_{ab}-\frac12h_{ab}h^{cd}\gamma_{cd}=0$, which gives $\gamma_{ab}=\lambda h_{ab}$. When this metric equation holds on the positive branch, the Polyakov and Nambu–Goto action densities agree pointwise, so their action integrals agree whenever defined; the $X$-equations and their boundary fluxes agree when the same variations and fixed or natural boundary data are used in both formulations. Conversely, any stationary Nambu–Goto embedding with nondegenerate Lorentzian $\gamma$ lifts to a Polyakov stationary pair by taking $h=\gamma$. This is a classical equivalence only.

## Statement references

[[def-st-flat-bosonic-string-model]]

[[def-st-string-tension-alpha-prime]]

[[post-st-bosonic-polyakov-model]]

## Facts & Assumptions

**Given:** An oriented smooth two-dimensional Lorentzian worldsheet $\Sigma$, a $C^2$ rank-two embedding $X$ into flat $M=\mathbb R^{1,D-1}$, its nondegenerate Lorentzian induced metric $\gamma$, a Lorentzian auxiliary metric $h$, $\lambda=\frac12h^{ab}\gamma_{ab}>0$, and matched admissible boundary variations.

[F1] [[def-st-flat-bosonic-string-model]] defines general $C^2$ Polyakov maps and the additional nondegenerate Lorentzian immersion branch. The Given hypotheses select that branch and further require an embedding; $h$ and $\gamma=X^*\eta$ are Lorentzian and the target metric is $\eta=\operatorname{diag}(-1,+1,\ldots,+1)$.

[F2] [[def-st-string-tension-alpha-prime]]: $T=(2\pi\alpha')^{-1}>0$.

[A1] [[post-st-bosonic-polyakov-model]]: the action is $S_P=-\frac{T}{2}\int_\Sigma\sqrt{-h}\,h^{ab}\partial_aX\cdot\partial_bX$, with no additional boundary term.


## Proof

1.1 Vary the inverse metric $h^{ab}$ in [A1]. The determinant identity $\delta\sqrt{-h}=-\frac12\sqrt{-h}\,h_{ab}\delta h^{ab}$ gives $\delta_hS_P=-\frac{T}{2}\int_\Sigma\sqrt{-h}\,\delta h^{ab}(\gamma_{ab}-\frac12h_{ab}h^{cd}\gamma_{cd})\,d^2\sigma$. Since compactly supported symmetric variations $\delta h^{ab}$ are arbitrary and $T>0$, stationarity implies $T_{ab}=0$ pointwise. [given, F1, A1, F2, algebra]

2.1 By the definition of $\lambda$, $T_{ab}=0$ rearranges to $\gamma_{ab}=\lambda h_{ab}$. [given, F1, step 1.1]

3.1 In two dimensions, multiplying each row of $h_{ab}$ by the common scalar $\lambda$ in step 2.1 gives $\det\gamma=\lambda^2\det h$; since $\lambda>0$, $\sqrt{-\det\gamma}=\lambda\sqrt{-\det h}$. The inverse relation is $\gamma^{ab}=\lambda^{-1}h^{ab}$. Contracting $\gamma_{ab}=\lambda h_{ab}$ with $h^{ab}$ gives $h^{ab}\gamma_{ab}=2\lambda$. Substitution into [A1] therefore yields equality of the densities $-\frac{T}{2}\sqrt{-\det h}\,h^{ab}\gamma_{ab}=-T\sqrt{-\det\gamma}$, which gives equality of the action integrals whenever they are defined. [given, F2, A1, step 2.1, algebra]

4.1 Put $Q^{ab}=\sqrt{-\det\gamma}\,\gamma^{ab}$. For $V=\delta X$, differentiating the induced metric gives $\delta\gamma_{ab}=\partial_aV\cdot\partial_bX+\partial_aX\cdot\partial_bV$. The determinant identity then gives $\delta S_{\rm NG}=-(T/2)\int_\Sigma Q^{ab}\delta\gamma_{ab}\,d^2\sigma=-T\int_\Sigma Q^{ab}\partial_bX_\mu\partial_aV^\mu\,d^2\sigma$. The product rule and Stokes' formula yield $\delta S_{\rm NG}=T\int_\Sigma\partial_a(Q^{ab}\partial_bX_\mu)V^\mu\,d^2\sigma-T\int_{\partial\Sigma}Q^{ab}\partial_bX_\mu V^\mu d\ell_a$. Varying $X$ in [A1] gives precisely this expression with $Q^{ab}$ replaced by $\sqrt{-\det h}\,h^{ab}$. Step 3.1 shows these densities agree on the metric-equation branch; hence their derivatives, bulk equations, and boundary fluxes agree. The same fixed components set the same $V^\mu$ to zero, and the same free components impose the same vanishing flux coefficients, so stationarity is equivalent for the stated boundary data. [given, A1, step 3.1, algebra]

5.1 Conversely, for any stationary $X$ of $S_{\rm NG}$ with nondegenerate Lorentzian $\gamma$, choose $h=\gamma$. Then $\lambda=1>0$, and $T_{ab}=\gamma_{ab}-\frac12\gamma_{ab}\gamma^{cd}\gamma_{cd}=0$, since $\gamma^{cd}\gamma_{cd}=2$. Step 3.1 and step 4.1 give the same $X$-equation and boundary flux, so $(X,h)$ is a Polyakov stationary pair. The conclusion concerns only classical equations and actions, not quantum measures. [given, F1, step 3.1, step 4.1, algebra] ∎
