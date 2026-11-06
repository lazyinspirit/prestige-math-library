---
id: pthm-m-theory-circle-wrapped-brane-tension-matches
kind: physics-theorem
title: Wrapped M2 and M5 tensions match the IIA string and D4 tensions
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 10
domain: physics
library: physics
deps:
  - post-m-theory-type-iia-circle-limit-dictionary
  - post-m2-m5-tension-normalizations
  - post-type-ii-dp-brane-dbi-wz-action
  - def-st-string-tension-alpha-prime
dependency_roles:
  post-m-theory-type-iia-circle-limit-dictionary: physical-assumption
  post-m2-m5-tension-normalizations: physical-assumption
  post-type-ii-dp-brane-dbi-wz-action: physical-assumption
  def-st-string-tension-alpha-prime: formulation-prerequisite
aliases: []
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "Conditional leading-tension identities for one M2 or M5 wrapped once on the same flat circle, with negligible backreaction; no full M/IIA equivalence or compactification solution is proved."
sources:
  references:
    - title: "Edward Witten, String Theory Dynamics in Various Dimensions, arXiv:hep-th/9503124v2"
      url: "https://arxiv.org/pdf/hep-th/9503124v2"
      locator: "§2, especially the discussion of the eleventh-circle scaling and the IIA/11D metric rescaling; qualitative scaling only, with numerical factors left schematic."
    - title: "Joseph Polchinski, TASI Lectures on D-Branes, arXiv:hep-th/9611050v2"
      url: "https://arxiv.org/pdf/hep-th/9611050v2"
      locator: "§5.2, Eqs. (116)–(120), and the following brane-origin discussion; qualitative IIA/M-theory radius scaling and wrapped M5/D4 identification, with numerical factors explicitly left schematic."
    - title: "Paolo Pasti, Dmitri Sorokin, and Mario Tonin, Covariant Action for a D=11 Five-Brane with the Chiral Field, arXiv:hep-th/9701037v3"
      url: "https://arxiv.org/pdf/hep-th/9701037v3"
      locator: "§4, Eqs. (19)–(23), PDF pp. 6–7; source-reported double dimensional reduction, with stated simplifying truncations."
    - title: "Joseph Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture III §3.3, Eqs. (3.20)–(3.24), PDF pp. 27–31; leading D4 DBI tension."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
proof_strategy: direct
---

## Statement

Assume the low-energy circle dictionary
$$R_{11}=g_s\ell_s,\qquad \ell_p^3=g_s\ell_s^3,\qquad \ell_s^2=\alpha',$$
the adopted M2/M5 tensions, and the leading constant-dilaton tensions
$$T_F=\frac1{2\pi\alpha'},\qquad T_{\mathrm{D4}}=\frac1{(2\pi)^4g_s\ell_s^5}.$$
For a single M2 or M5 wrapped once on the same flat circle of radius $R_{11}>0$, the wrapped tensions obey
$$2\pi R_{11}T_{\mathrm{M2}}=T_F,\qquad 2\pi R_{11}T_{\mathrm{M5}}=T_{\mathrm{D4}}.$$
These are conditional parameter identities for the leading tensions. They correspond to double dimensional reduction but do not prove full M/IIA equivalence.

## Statement References

[Witten, §§1–2.2](https://arxiv.org/pdf/hep-th/9503124v2)

[Pasti–Sorokin–Tonin, §4](https://arxiv.org/pdf/hep-th/9701037v3)

## Facts & Assumptions

**Given:** $g_s>0$, $\ell_s>0$, $\alpha'=\ell_s^2$, one flat circle of circumference $2\pi R_{11}$, and the exact planned/current supplier interfaces below.

[F1] The current circle-dictionary carrier adopts $R_{11}=g_s\ell_s$, $\ell_p^3=g_s\ell_s^3$, and $\ell_s=\sqrt{\alpha'}$, with a flat-circle sector identification and an explicit non-equivalence caveat ([[post-m-theory-type-iia-circle-limit-dictionary]]).

[F2] The adopted normalization postulate fixes $T_{\mathrm{M2}}=(2\pi)^{-2}\ell_p^{-3}$ and $T_{\mathrm{M5}}=(2\pi)^{-5}\ell_p^{-6}$ ([[post-m2-m5-tension-normalizations]]).

[F3] The current Dp action states $\mu_p=((2\pi)^p\alpha'^{(p+1)/2})^{-1}$ and $T_p=\mu_p/g_s$ at constant dilaton; this proof uses only its DBI tension clause, not its Wess–Zumino coupling or its explicit local RR-potential crosswalk ([[post-type-ii-dp-brane-dbi-wz-action]]).

[F4] The string-tension definition gives $\ell_s^2=\alpha'$ and $T_F=1/(2\pi\alpha')$ ([[def-st-string-tension-alpha-prime]]).

[A1] Both wrapped objects use the leading tensions, wrap the same flat circle exactly once, and have negligible backreaction.

## Proof

**Given:** [F1]–[F4], $g_s>0$, $\ell_s>0$, and [A1].

1.1 Using $R_{11}=g_s\ell_s$, $\ell_p^3=g_s\ell_s^3$, and [F2],
$$2\pi R_{11}T_{\mathrm{M2}} =(2\pi g_s\ell_s)(2\pi)^{-2}(g_s\ell_s^3)^{-1} =(2\pi)^{-1}\ell_s^{-2} =\frac1{2\pi\alpha'} =T_F.$$
The positive $g_s$ and $\ell_s$ hypotheses justify the cancellations and inverses. [given, F1, F2, F4, algebra]

1.2 Since $\ell_p^6=(\ell_p^3)^2=g_s^2\ell_s^6$, the M5 product is
$$2\pi R_{11}T_{\mathrm{M5}} =(2\pi g_s\ell_s)(2\pi)^{-5}(g_s^2\ell_s^6)^{-1} =(2\pi)^{-4}g_s^{-1}\ell_s^{-5}.$$
By [F3] with $p=4$ and $\alpha'=\ell_s^2$, $T_{\mathrm{D4}}=(2\pi)^{-4}g_s^{-1}\ell_s^{-5}$. Hence the second equality holds. [given, F1, F2, F3, algebra]

2.1 The two equalities are therefore established under the stated source-reported dictionary and leading-tension assumptions; no RR Wess–Zumino term or full compactification equivalence was used. [A1, F3, step 1.1, step 1.2] ∎

## Remarks

The Dp item has a current escalation for its RR convention, but its own statement separately authorizes the DBI tension clause used here; this proof does not use its RR Wess–Zumino conversion. The result remains a conditional leading-tension identity, not a proof of full M/IIA equivalence.
