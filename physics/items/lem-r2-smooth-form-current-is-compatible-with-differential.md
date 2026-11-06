---
id: lem-r2-smooth-form-current-is-compatible-with-differential
kind: lemma
title: "Smooth forms define currents compatibly with the differential"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-r2-compact-de-rham-current-of-a-source-cycle
  - lem-r2-current-differential-is-continuous-and-squares-to-zero
  - thm-the-exterior-derivative-is-a-graded-derivation
  - lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes
dependency_roles:
  def-r2-compact-de-rham-current-of-a-source-cycle: mathematical-premise
  lem-r2-current-differential-is-continuous-and-squares-to-zero: mathematical-premise
  thm-the-exterior-derivative-is-a-graded-derivation: mathematical-premise
  lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  scraped: []
  references:
    - title: "Tien-Cuong Dinh and Nessim Sibony, Introduction to the Theory of Currents, §§3.1–3.2"
      url: "https://people.math.harvard.edu/~demarco/Math274/DinhSibony_Introduction.pdf"
    - title: "Victor Guillemin and Peter J. Haine, Differential Forms, MIT 18.952 course book, §5.5"
      url: "https://math.mit.edu/classes/18.952/2018SP/files/18.952_book.pdf"
---

## Statement

For every smooth real $k$-form $\alpha$ on $X$, the functional $T_\alpha(\eta)=\int_X\alpha\wedge\eta$ is a degree-$k$ current. With the current differential of [[def-r2-compact-de-rham-current-of-a-source-cycle]], it satisfies $dT_\alpha=T_{d\alpha}$.

## Statement references

[[def-r2-compact-de-rham-current-of-a-source-cycle]]

## Facts & Assumptions

**Given:** The compact oriented smooth manifold $X$, a smooth $k$-form $\alpha$, and the finite chart definition of integration.

[F1] [[def-r2-compact-de-rham-current-of-a-source-cycle]] defines $T_\alpha(\eta)=\int_X\alpha\wedge\eta$ and gives the current differential sign $(-1)^{k+1}$.

[F2] [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]] proves that compactly supported top forms on an oriented manifold without boundary have a choice-free finite chart integral and that the integral of an exact top form is zero.

[F3] [[thm-the-exterior-derivative-is-a-graded-derivation]] gives $d(\alpha\wedge\eta)=d\alpha\wedge\eta+(-1)^k\alpha\wedge d\eta$.

## Proof

**Given:** Since $X$ is compact, every smooth form on $X$ has compact support.

1.1 Fix a finite chart localization of $X$. On each chart, the coefficients of the fixed smooth form $\alpha$ are bounded on the compact support of the localized top-form integral. The coefficient of $\alpha\wedge\eta$ is a finite sum of products of such coefficients with coefficients of $\eta$. The Euclidean integral of each localized term is therefore bounded by a constant times an order-zero seminorm of $\eta$ on the finite chart cover. Summing the finitely many bounds proves that $T_\alpha$ is continuous; its linearity follows from linearity of wedge and chart integration. [F1, F2, given, algebra]

2.1 If $k=n$, both $dT_\alpha$ and $T_{d\alpha}$ are zero by the out-of-range current convention and the absence of $(n+1)$-forms. If $k<n$, take $\eta\in\Omega^{n-k-1}(X)$. By [F2] and [F3], $$0=\int_Xd(\alpha\wedge\eta)=\int_Xd\alpha\wedge\eta+(-1)^k\int_X\alpha\wedge d\eta.$$ Hence $(-1)^{k+1}\int_X\alpha\wedge d\eta=\int_Xd\alpha\wedge\eta$. By [F1] the left side is $\langle dT_\alpha,\eta\rangle$ and the right side is $\langle T_{d\alpha},\eta\rangle$. Equality for every test form proves $dT_\alpha=T_{d\alpha}$. [F1, F2, F3, step 1.1, algebra] ∎

## Statement references

[[thm-the-exterior-derivative-is-a-graded-derivation]]

[[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]]

