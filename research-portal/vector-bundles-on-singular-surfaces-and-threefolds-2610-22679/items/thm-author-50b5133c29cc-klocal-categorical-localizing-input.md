---
id: thm-author-50b5133c29cc-klocal-categorical-localizing-input
kind: theorem
title: External enhanced quotient criterion and localizing nonconnective K
status: draft
domain: mathematics
deps:
  - def-nonconnective-k-spectrum-interface
  - def-stable-spectra-interface
  - math:def-axiom-of-choice
dependency_roles:
  def-nonconnective-k-spectrum-interface: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
external_input: true
sources:
  references:
    - title: Andrew J. Blumberg, David Gepner and Gonçalo Tabuada, A universal
        characterization of higher algebraic K-theory
      url: https://arxiv.org/pdf/1001.2282v4
      locator: Definition 5.12, Proposition 5.13 and Proposition 5.14 pp. 35–36;
        Proposition 5.15 p. 36; Theorem 8.7 p. 55; Definition 9.6 and Theorem
        9.8 p. 58; localizing invariant convention p. 4.
      statement: "For an actual sequence of exact functors between small stable
        infinity-categories, exactness is detected by the associated
        triangulated sequence: zero composite, full first inclusion and Verdier
        quotient equivalence after idempotent completion. Nonconnective K is
        naturally Map(U_loc(Sp^omega),U_loc(−)); U_loc sends exact sequences to
        cofiber sequences."
      hypotheses: "Take kappa=omega: stable categories have finite colimits and exact
        functors preserve them. Categories are small relative to fixed universes
        (or essentially small via equivalent small models); quotient equivalence
        is only claimed after idempotent completion."
      reading_limits: Read pp. 4, 33–37, 55 and 58, including Proposition 5.15 and its
        full proof and Theorem 8.7/9.8 statements. The proof of 9.8 and the
        construction of motives and quotient comparisons are imported, not
        reconstructed. The supplied nonconnective functor is the same BGT IK;
        connective K is not substituted.
dependency_level: 10
---

## Statement
Consider an actual sequence of exact functors $\mathcal A\to\mathcal B\to\mathcal C$ between small stable infinity-categories, with zero composite and fully faithful first arrow. It is exact precisely when the induced functor $h\mathcal B/h\mathcal A\to h\mathcal C$ is an equivalence after idempotent completion. Equivalently the actual enhanced quotient $\mathcal B/\mathcal A\to\mathcal C$ becomes an equivalence after idempotent completion. Here idempotent completion adjoins all retracts, and $h$ retains objects and homotopy classes of maps.

The BGT nonconnective functor $\mathbb K$ used in the supplied K interface carries any such exact sequence to a cofiber, hence fiber, sequence of spectra. These sequences are functorial for diagrams of the given exact functors and their nullhomotopies.

## Source contract
**Given:** Small stable categories and actual exact functors, with fixed universes; take $\kappa=\omega$ in BGT.

**Goal:** Specify the model-independent enhanced localization criterion and nonconnective localizing property.

[F1] BGT Propositions 5.13–5.15 compare actual enhanced quotients and triangulated quotients. Finite-colimit preservation is exactly the $\kappa=\omega$ hypothesis.

[F2] BGT Theorem 8.7 makes $U_{\mathrm{loc}}$ localizing, while Theorem 9.8 identifies $\mathbb K(-)$ naturally with $\operatorname{Map}(U_{\mathrm{loc}}(\mathrm{Sp}^{\omega}),U_{\mathrm{loc}}(-))$.

## External input
Import [F1] and [F2] with the recorded limits. Mapping spectra in a stable category preserve finite limits, and cofiber sequences are fiber sequences; therefore the displayed description in [F2] implies the localizing property. This is the nonconnective $IK$ of BGT already chosen by [[def-nonconnective-k-spectrum-interface]]. This input applies to an actual exact functor and never upgrades an unimplemented equivalence of triangulated categories to an infinity-functor.
