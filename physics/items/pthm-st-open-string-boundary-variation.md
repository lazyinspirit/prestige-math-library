---
id: pthm-st-open-string-boundary-variation
kind: physics-theorem
title: Open String Boundary Variation
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
domain: physics
library: physics
deps:
  - def-st-flat-bosonic-string-model
  - def-st-string-tension-alpha-prime
  - post-st-bosonic-polyakov-model
  - def-st-conformal-gauge-and-residual-symmetry
dependency_roles:
  def-st-flat-bosonic-string-model: formulation-prerequisite
  def-st-string-tension-alpha-prime: formulation-prerequisite
  post-st-bosonic-polyakov-model: physical-assumption
  def-st-conformal-gauge-and-residual-symmetry: formulation-prerequisite
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "Classical X-variation of the free Polyakov action on a smooth Lorentzian open strip with no endpoint interaction; no endpoint dynamics or D-brane claim."
sources:
  references:
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, University of Cambridge Part III lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "Chapter 3, printed pp. 50–52: open-strip Polyakov variation, endpoint flux, Dirichlet/Neumann conditions, and mode relation."
    - title: "Barton Zwiebach, A First Course in String Theory, second edition, Cambridge University Press, 2009"
      url: "https://pierre.ag.gerard.web.ulb.be/textbooks/books/A_First_Course_In_String_Theory.pdf"
      locator: "§6.5, printed pp. 113–115, equations (6.52)–(6.57): endpoint variation and fixed/free endpoint conditions."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $\Sigma=I\times[0,\pi]$ be a smooth Lorentzian strip with dimensionless coordinates $(\tau,\sigma)$, where $I=[\tau_i,\tau_f]$, and let $X\in C^2(\Sigma,\mathbb R^{1,D-1})$ and $h\in C^1$ be the fields of the adopted free Polyakov model, with nondegenerate $h$ of signature $(-,+)$. Assume there is no boundary interaction and that variations vanish on the initial and final time slices. Define $C_\mu:=\sqrt{-\det h}\,h^{\sigma b}\partial_bX_\mu$ and $[F]_0^\pi:=F(\tau,\pi)-F(\tau,0)$. The $X$-variation has bulk term $T\int_\Sigma \delta X_\mu\,\partial_a(\sqrt{-\det h}\,h^{ab}\partial_bX^\mu)\,d^2\sigma$ and spatial-boundary flux $-T\int_I[C_\mu\delta X^\mu]_0^\pi\,d\tau$. This coordinate-density expression applies without a causal-type assumption on the spatial faces. If those faces are timelike for $h$, equivalently $h_{\tau\tau}<0$ there, put $\varepsilon=+1$ at $\sigma=\pi$ and $\varepsilon=-1$ at $\sigma=0$, $n_a=\varepsilon(d\sigma)_a/\sqrt{h^{\sigma\sigma}}$, and $ds=\sqrt{-h_{\tau\tau}}\,d\tau$. Then $n$ is the outward unit spacelike conormal and the same flux is $-T\int_{\partial\Sigma_{\rm spatial}}ds\,n_a h^{ab}\partial_bX_\mu\,\delta X^\mu$. For each endpoint and target component, Dirichlet data $\delta X^\mu=0$ or natural Neumann data $C_\mu=0$ suffice to annihilate the flux; coordinatewise mixed choices are allowed. On timelike faces the Neumann condition is equivalently $n_a h^{ab}\partial_bX^\mu=0$ for that component. In conformal gauge on the flat strip it reduces to $\partial_\sigma X^\mu=0$.

## Statement references

[[def-st-flat-bosonic-string-model]]

[[def-st-string-tension-alpha-prime]]

[[post-st-bosonic-polyakov-model]]

[[def-st-conformal-gauge-and-residual-symmetry]]

## Facts & Assumptions

**Given:** The flat-target model, $\hbar=c=1$, $T=1/(2\pi\alpha')>0$, the adopted Polyakov action, and variations $\delta X$ that vanish at $\tau_i,\tau_f$.

[F1] [[def-st-flat-bosonic-string-model]]: $X$ is $C^2$, $h$ is the Lorentzian worldsheet metric, and the open strip has $\sigma\in[0,\pi]$ with dimensionless coordinates.

[F2] [[def-st-string-tension-alpha-prime]]: $T=(2\pi\alpha')^{-1}>0$.

[A1] [[post-st-bosonic-polyakov-model]]: the adopted action is $S_P=-\frac{T}{2}\int_\Sigma\sqrt{-h}\,h^{ab}\partial_aX\cdot\partial_bX$, with no boundary interaction.

[F3] [[def-st-conformal-gauge-and-residual-symmetry]]: on the flat strip conformal-gauge patch $h_{ab}=e^{2\phi}\operatorname{diag}(-1,+1)$.

## Proof

1.1 Varying $X$ in [A1] while holding $h$ fixed gives $\delta S_P=-T\int_\Sigma\sqrt{-h}\,h^{ab}\partial_aX_\mu\,\partial_b\delta X^\mu\,d^2\sigma$, because $h^{ab}$ is symmetric; [F2] fixes the positive coefficient $T=(2\pi\alpha')^{-1}$. [given, A1, F2, algebra]

2.1 Integrate the divergence $\partial_b(\sqrt{-\det h}\,h^{ab}\partial_aX_\mu\,\delta X^\mu)$ over the coordinate rectangle. The fundamental theorem of calculus in each variable gives the interior term $T\int_\Sigma\delta X_\mu\,\partial_b(\sqrt{-\det h}\,h^{ab}\partial_aX^\mu)d^2\sigma$ and the spatial term $-T\int_I[C_\mu\delta X^\mu]_0^\pi d\tau$; the temporal terms vanish by the Given clause. No unit normal is used in this calculation. On a timelike face, the two-dimensional inverse formula gives $h^{\sigma\sigma}=h_{\tau\tau}/\det h>0$. Thus $h^{ab}n_an_b=1$ and $ds\,n_a=\varepsilon\sqrt{-\det h}(d\sigma)_a\,d\tau$, proving the stated proper-time form on precisely those faces. [given, F1, step 1.1, algebra]

3.1 For each component and each endpoint, Dirichlet data make the corresponding $\delta X^\mu$ factor zero; Neumann data $C_\mu=0$ make its coordinate-density flux coefficient zero; on a timelike face the positive normalizing factors give exactly the equivalent unit-conormal condition. The sum of these endpoint integrands therefore vanishes for coordinatewise mixed choices as well. [given, step 2.1, algebra]

4.1 In the conformal gauge [F3], $h_{\tau\tau}=-e^{2\phi}<0$ and $C_\mu=\partial_\sigma X_\mu$. The unit conormal at constant $\sigma$ is $n_a=\pm e^\phi(d\sigma)_a$, so $n_a h^{ab}\partial_bX^\mu=\pm e^{-\phi}\partial_\sigma X^\mu$. Thus the natural condition is equivalent to $\partial_\sigma X^\mu=0$. [F3, step 3.1, algebra] ∎
