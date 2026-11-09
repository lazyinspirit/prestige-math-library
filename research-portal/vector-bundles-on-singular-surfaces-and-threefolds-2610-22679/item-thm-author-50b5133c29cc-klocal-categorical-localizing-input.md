---
title: External enhanced quotient criterion and localizing nonconnective K
status: published
research_item: thm-author-50b5133c29cc-klocal-categorical-localizing-input
dependency_level: 10
---

PDF p. 7: Zariski locality; PDF p. 15: Localization diagram

## Prerequisites

- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Consider an actual sequence of exact functors $\mathcal A\to\mathcal B\to\mathcal C$ between small stable infinity-categories, with zero composite and fully faithful first arrow. It is exact precisely when the induced functor $h\mathcal B/h\mathcal A\to h\mathcal C$ is an equivalence after idempotent completion. Equivalently the actual enhanced quotient $\mathcal B/\mathcal A\to\mathcal C$ becomes an equivalence after idempotent completion. Here idempotent completion adjoins all retracts, and $h$ retains objects and homotopy classes of maps.

The BGT nonconnective functor $\mathbb K$ used in the supplied K interface carries any such exact sequence to a cofiber, hence fiber, sequence of spectra. These sequences are functorial for diagrams of the given exact functors and their nullhomotopies.

## Source contract
**Given:** Small stable categories and actual exact functors, with fixed universes; take $\kappa=\omega$ in BGT.

**Goal:** Specify the model-independent enhanced localization criterion and nonconnective localizing property.

[F1] BGT Propositions 5.13–5.15 compare actual enhanced quotients and triangulated quotients. Finite-colimit preservation is exactly the $\kappa=\omega$ hypothesis.

[F2] BGT Theorem 8.7 makes $U_{\mathrm{loc}}$ localizing, while Theorem 9.8 identifies $\mathbb K(-)$ naturally with $\operatorname{Map}(U_{\mathrm{loc}}(\mathrm{Sp}^{\omega}),U_{\mathrm{loc}}(-))$.

## External input
Import [F1] and [F2] with the recorded limits. Mapping spectra in a stable category preserve finite limits, and cofiber sequences are fiber sequences; therefore the displayed description in [F2] implies the localizing property. This is the nonconnective $IK$ of BGT already chosen by [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface). This input applies to an actual exact functor and never upgrades an unimplemented equivalence of triangulated categories to an infinity-functor.
