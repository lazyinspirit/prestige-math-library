---
id: ex-mtheory-circle-wrap-at-gs-three
kind: example
title: Wrapped-tension check at string coupling three
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 11
domain: physics
library: physics
deps:
  - post-m-theory-type-iia-circle-limit-dictionary
  - post-m2-m5-tension-normalizations
  - post-type-ii-dp-brane-dbi-wz-action
  - def-st-string-tension-alpha-prime
  - pthm-m-theory-circle-wrapped-brane-tension-matches
dependency_roles:
  post-m-theory-type-iia-circle-limit-dictionary: physical-assumption
  post-m2-m5-tension-normalizations: physical-assumption
  post-type-ii-dp-brane-dbi-wz-action: physical-assumption
  def-st-string-tension-alpha-prime: formulation-prerequisite
  pthm-m-theory-circle-wrapped-brane-tension-matches: physical-result
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
physical_scope: "Formal positive-parameter illustration of the conditional wrapped-tension identity at g_s=3; not a measurement, vacuum, or existence claim."
sources:
  references:
    - title: "Edward Witten, String Theory Dynamics in Various Dimensions, arXiv:hep-th/9503124v2"
      url: "https://arxiv.org/pdf/hep-th/9503124v2"
      locator: "§2, strong-coupling/radius scaling in the source's metric conventions; qualitative context only."
    - title: "Joseph Polchinski, TASI Lectures on D-Branes, arXiv:hep-th/9611050v2"
      url: "https://arxiv.org/pdf/hep-th/9611050v2"
      locator: "§5.2; qualitative circle and wrapped-brane interpretation, with numerical factors left schematic."
    - title: "Joseph Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture III §3.3, Eqs. (3.20)–(3.24), PDF pp. 27–31; leading constant-dilaton D4 tension."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
proof_strategy: direct
---

## Statement

Choose formal parameters $g_s=3$, $\ell_s=L>0$, and $\alpha'=L^2$. Under the conditional circle dictionary, $R_{11}=3L$ and $\ell_p^3=3L^3$. With the adopted leading M2 and M5 tensions, one wrapping gives
$$2\pi R_{11}T_{\mathrm{M2}}=\frac1{2\pi L^2}=T_F,\qquad 2\pi R_{11}T_{\mathrm{M5}}=\frac1{3(2\pi)^4L^5}=T_{\mathrm{D4}}.$$
This is a symbolic parameter check under the stated postulates, not an observed value or a claim that a string/M-theory vacuum with these parameters exists.

## Statement References

[Witten, *String Theory Dynamics in Various Dimensions*](https://arxiv.org/pdf/hep-th/9503124v2)

## Facts & Assumptions

**Given:** The parameter assignment in the statement and the conditional theorem below.

[F1] The current circle dictionary gives $R_{11}=g_s\ell_s$ and $\ell_p^3=g_s\ell_s^3$ ([[post-m-theory-type-iia-circle-limit-dictionary]]).

[F2] The tension postulate gives $T_{\mathrm{M2}}=(2\pi)^{-2}\ell_p^{-3}$ and $T_{\mathrm{M5}}=(2\pi)^{-5}\ell_p^{-6}$ ([[post-m2-m5-tension-normalizations]]).

[F3] The Dp action gives $T_{\mathrm{D4}}=\mu_4/g_s$ with $\mu_4=((2\pi)^4\alpha'^{5/2})^{-1}$ at constant dilaton ([[post-type-ii-dp-brane-dbi-wz-action]]); this example uses only its DBI tension clause.

[F4] The string-tension definition gives $T_F=1/(2\pi\alpha')$ and $\alpha'=\ell_s^2$ ([[def-st-string-tension-alpha-prime]]).

[F5] The A-page theorem states the two wrapped-tension identities under the same conditional dictionary and one-wrap hypotheses ([[pthm-m-theory-circle-wrapped-brane-tension-matches]]).

[A1] The values $g_s=3$ and $\ell_s=L>0$ are chosen formal parameters, not measured data or a specified solution.

## Proof

**Given:** [F1]–[F5], [A1], and the definitions $\alpha'=L^2$, $g_s=3$.

1.1 Substitution into [F1] gives $R_{11}=g_s\ell_s=3L$ and $\ell_p^3=g_s\ell_s^3=3L^3$, hence $\ell_p^6=9L^6$. [given, A1, F1, algebra]

2.1 Using [F2],
$$2\pi R_{11}T_{\mathrm{M2}} =(6\pi L)(2\pi)^{-2}(3L^3)^{-1} =\frac1{2\pi L^2} =T_F.$$
[F2, F4, step 1.1, algebra]

2.2 Using [F2],
$$2\pi R_{11}T_{\mathrm{M5}} =(6\pi L)(2\pi)^{-5}(9L^6)^{-1} =\frac1{3(2\pi)^4L^5}.$$
By [F3] and $\alpha'=L^2$, $T_{\mathrm{D4}}=((2\pi)^4g_s\ell_s^5)^{-1}=1/(3(2\pi)^4L^5)$, so the second equality follows. [F1, F2, F3, A1, step 1.1, algebra]

3.1 The two direct calculations agree with the conditional identities in [F5]. Positivity $L>0$ makes every inverse finite; this arithmetic supplies no existence statement for a physical background. [A1, F5, step 2.1, step 2.2] ∎

## Remarks

This example checks one non-unit coupling value and displays the cancellation of $g_s$ for the wrapped M2 and the surviving $g_s^{-1}$ in the D4 tension. It remains conditional on the source-reported dictionary.
