---
id: def-string-rns-bosonized-picture-charge-convention
kind: definition
title: RNS bosonized picture charge convention
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 5
domain: physics
physical_scope: "Local bosonized RNS superghost convention and chiral picture grading; no global supermoduli integration cycle is defined."
deps:
  - def-rns-beta-gamma-superghost-picture-system
  - def-rns-spin-structures-and-sectors
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - def-axiom-of-choice
  - thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces
dependency_roles:
  def-rns-beta-gamma-superghost-picture-system: formulation-prerequisite
  def-rns-spin-structures-and-sectors: formulation-prerequisite
  def-genus-and-euler-characteristic-compact-riemann-surface: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Oliver Schlotterer, Scattering amplitudes in open superstring theory"
      url: "https://edoc.ub.uni-muenchen.de/13381/1/Schlotterer_Oliver.pdf"
      locator: "§§2.3.2–2.3.6 and §3.1.6, especially Eqs. (2.3.67)–(2.3.68) and (3.1.27)–(3.1.32), bosonized beta-gamma system, picture number, canonical NS/R pictures, and picture changing."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

In each chiral RNS sector use the bosonization convention $\beta=e^{-\phi}\partial\xi$, $\gamma=\eta e^{\phi}$, $\phi(z)\phi(w)\sim-\log(z-w)$, and $T_\phi=-\tfrac12(\partial\phi)^2-\partial^2\phi$. An operator $e^{p\phi}$ has picture charge $p$. The small Hilbert space is $\ker\eta_0$; picture number is a grading distinct from the $\beta\gamma$ ghost number. In this convention the canonical NS and R representatives have pictures $-1$ and $-\tfrac12$, respectively.

For formal chiral-correlator bookkeeping on a compact connected closed genus-$g$ worldsheet with Euclidean metric $h$, write $K_h$ for its Gaussian curvature and $dA_h$ for its Riemannian area form, and set the scalar curvature convention to $R^{(2)}(h):=2K_h$. Thus Gauss–Bonnet gives $\int_\Sigma R^{(2)}(h)dA_h=4\pi\chi(\Sigma)$. Adopt the bosonized background term
$$S_{\phi,\mathrm{curv}}=-\frac{Q_\phi}{8\pi}\int_\Sigma R^{(2)}(h)\phi\,dA_h,\qquad Q_\phi=2.$$
Split $\phi=\phi_0+\widetilde\phi$. Define the formal zero-mode Ward functional to retain a chiral correlator only when the total coefficient of $\phi_0$ vanishes. This is local CFT correlation data; it is not a functional measure over moduli or a claim that a global path integral exists.

## Facts & Assumptions

**Given:** A compact connected closed genus-$g$ RNS worldsheet, a chosen chirality and spin sector, the displayed bosonized stress tensor/background convention, and its formal zero-mode Ward functional. Full AC is assumed for the supplied genus and Gauss–Bonnet inputs.

[F1] [[def-rns-beta-gamma-superghost-picture-system]] fixes the commuting weights $(\tfrac32,-\tfrac12)$, bosonization $\beta=e^{-\phi}\partial\xi$, $\gamma=\eta e^\phi$, and picture number as the $e^{p\phi}$ exponent, distinct from ghost number.

[F2] [[def-rns-spin-structures-and-sectors]] fixes the NS and R sectors; the canonical pictures here are the source-convention representatives, not unique representatives of every cohomology class.

[F3] [[def-genus-and-euler-characteristic-compact-riemann-surface]]: under full AC, $\chi(\Sigma)=2-2g$.

[F4] [[thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces]]: for the declared compact oriented Riemannian surface, $\int_\Sigma K_h\,dA_h=2\pi\chi(\Sigma)$; with the Definition's convention $R^{(2)}=2K_h$, this gives $\int_\Sigma R^{(2)}dA_h=4\pi\chi(\Sigma)$. The supplier carries its stated full-AC hypothesis.

[A1] [[def-axiom-of-choice]] is assumed for [F3] and [F4].

[A2] Adopt the formal zero-mode Ward functional stated in the Definition: a correlator with a nonzero total $\phi_0$ coefficient is assigned zero; no divergent real zero-mode integral is claimed.
## Proof

1.1 The beta-gamma bosonization, scalar stress tensor, picture grading, and small-Hilbert-space convention are exactly the local data fixed by [F1]; the NS/R representatives are indexed by [F2]. Since the picture exponent belongs to the bosonized scalar while ghost number is the separate current in [F1], the two gradings remain distinct. [given, F1, F2, algebra]

2.1 For a constant mode $\phi_0$, [F4] and [F3] give
$$S_{\phi,\mathrm{curv}}=-\frac{Q_\phi}{8\pi}(4\pi\chi)\phi_0=-\frac{Q_\phi\chi}{2}\phi_0=-(2-2g)\phi_0.$$
Thus the Euclidean factor $e^{-S_{\phi,\mathrm{curv}}}$ contributes $e^{(2-2g)\phi_0}$, while insertions $\prod_i e^{p_i\phi}$ contribute $e^{(\sum_i p_i)\phi_0}$. Their total zero-mode coefficient is $\sum_i p_i+2-2g$, with neutrality imposed by [A2]. This is a formal chiral CFT convention, not a global moduli integral. [given, F3, F4, A1, A2, algebra] ∎

## Remarks

The picture-charge selection rule is proved conditionally in [[pthm-string-rns-picture-charge-selection-rule]]. The local PCO operation is defined in [[def-string-superstring-picture-changing-insertion]]; neither item chooses global PCO locations or constructs a measure.
