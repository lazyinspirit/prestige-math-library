---
id: pthm-string-rns-picture-charge-selection-rule
kind: physics-theorem
title: RNS chiral picture-charge selection rule
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 6
domain: physics
physical_scope: "Formal chiral free-field charge neutrality for a fixed genus-g RNS sector with the stated bosonized background-charge Ward convention; not a superstring measure."
deps:
  - def-string-rns-bosonized-picture-charge-convention
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - def-axiom-of-choice
  - thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces
dependency_roles:
  def-string-rns-bosonized-picture-charge-convention: formulation-prerequisite
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
      locator: "§§2.3.2–2.3.6 and §3.1.6, especially Eqs. (2.3.67)–(2.3.68) and (3.1.27)–(3.1.32), superghost background charge and picture selection."
    - title: "Edward Witten, Notes on Super Riemann Surfaces and Their Moduli"
      url: "https://arxiv.org/pdf/1209.2459v5"
      locator: "§§2.1–2.2 and §§6.1–6.2, supermoduli, spin sectors, and genus-dependent picture/degeneration conventions."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Fix a closed genus-$g$ RNS worldsheet and one chiral sector with the bosonized background convention of RNS bosonized picture charge convention. Here a scalar-picture eigenoperator $\mathcal O$ of charge $p$ means an insertion with the constant-shift law $\mathcal O[\phi+a]=e^{pa}\mathcal O[\phi]$ for every scalar constant $a$, with all other fields fixed. Equivalently, in the split $\phi=\phi_0+\widetilde\phi$, $\mathcal O[\phi]=e^{p\phi_0}\mathcal O[\widetilde\phi]$; $e^{p\phi}$ times shift-invariant derivative or spectator fields is included. This is the scalar-exponent picture convention, not an unspecified total grading involving $\eta,\xi$. For a formal chiral correlator with such picture eigenoperators of charges $p_1,\ldots,p_n$, a nonzero correlator requires
$$\sum_i p_i=2g-2.$$
The assertion is conditional on the stated bosonized zero-mode Ward convention and does not define a path-integral measure over moduli.

## Statement references

[[def-string-rns-bosonized-picture-charge-convention]]

## Facts & Assumptions

**Given:** A compact connected closed genus-$g$ surface, one fixed RNS chirality, the bosonized curvature coupling and formal zero-mode Ward functional of [[def-string-rns-bosonized-picture-charge-convention]]. Full AC is assumed as required by the genus and Gauss–Bonnet suppliers.

[F1] [[def-string-rns-bosonized-picture-charge-convention]]: for $Q_\phi=2$, the curvature term is $S_{\phi,\mathrm{curv}}=-(4\pi)^{-1}\int R^{(2)}\phi\,dA$; insertions of $e^{p_i\phi}$ contribute zero-mode exponent $\sum_i p_i$; the formal correlator is neutral only when the total coefficient vanishes.

[F2] [[def-genus-and-euler-characteristic-compact-riemann-surface]]: under full AC, $\chi=2-2g$.

[F3] [[thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces]]: $\int_\Sigma K_h\,dA_h=2\pi\chi(\Sigma)$; with the convention $R^{(2)}=2K_h$ fixed in [F1], this gives $\int_\Sigma R^{(2)}dA_h=4\pi\chi(\Sigma)$. The supplier proof carries full AC.

[A1] [[def-axiom-of-choice]] is assumed because [F2] and [F3] require it.

## Proof

1.1 In the zero-mode split $\phi=\phi_0+\widetilde\phi$, [F3] and [F2] give the curvature term
$$S_{\phi,\mathrm{curv}}=-\frac{2}{8\pi}(4\pi\chi)\phi_0=-\chi\phi_0.$$
Therefore $e^{-S_{\phi,\mathrm{curv}}}$ contributes $e^{\chi\phi_0}$, and each insertion contributes $e^{p_i\phi_0}$ by the eigenoperator shift law in the Statement (take $a=\phi_0$). Their product therefore contributes $e^{(\sum_i p_i)\phi_0}$, including derivative and spectator factors invariant under that shift. The total coefficient is $\sum_i p_i+\chi=\sum_i p_i+2-2g$. [given, F1, F2, F3, A1, algebra]

2.1 By the neutral zero-mode functional in [F1], a nonzero chiral correlator requires this coefficient to vanish. Solving $\sum_i p_i+2-2g=0$ gives $\sum_i p_i=2g-2$. The calculation applies independently to the right-moving chiral copy. [F1, step 1.1, algebra] ∎

## Remarks

Picture charge is not beta-gamma ghost number. The result follows from the explicit curvature coupling and neutral zero-mode convention; it neither chooses PCO locations nor constructs vertical chains or a global superstring integration cycle.
