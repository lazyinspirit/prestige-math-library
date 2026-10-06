---
id: rem-littlewood-paley-endpoints-require-hardy-and-bmo-replacements
kind: remark
title: "The Littlewood-Paley equivalence is strict-range: the endpoints need H1 and BMO"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 13
deps: [thm-littlewood-paley-square-function-equivalence-on-lp, def-real-hardy-space-by-a-radial-maximal-function, def-bmo-seminorm-and-quotient-by-constants, thm-real-hone-bmo-duality, def-axiom-of-choice]
external_refs: [rem-square-function-characterisation-of-real-hone]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "§7.2 'BMO as a substitute for L-infinity' and §7.7 H1-BMO duality; Proposition 7.30(a), printed pp. 32-33, 40, 46-47"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Theorem 6.1.2, stated for $1<p<\\infty$ (with the separate weak $(1,1)$ estimate), printed pp. 420-421"
---

## Statement

The two-sided square-function equivalence of
[[thm-littlewood-paley-square-function-equivalence-on-lp]] is asserted only
for $1<p<\infty$. It is not asserted at $p=1$ or $p=\infty$. The classical
lower-endpoint scale is real Hardy space $H^1(\mathbb R^n)$
([[def-real-hardy-space-by-a-radial-maximal-function]]); the recorded
homogeneous square-function characterization is
[[rem-square-function-characterisation-of-real-hone]]. At the upper endpoint
the natural dual scale is BMO modulo constants
([[def-bmo-seminorm-and-quotient-by-constants]]), by the duality
[[thm-real-hone-bmo-duality]]. These endpoint scales do not assert an endpoint
extension for the inhomogeneous square function of the strict-range theorem.

Accordingly the classical endpoint scales are $(H^1,\mathrm{BMO}/\mathbb C)$
in place of $(L^1,L^\infty)$. No endpoint substitution may be made into the
strict-range theorem or its consumers. This is a scope remark, not a proof: it
names the endpoint scales and proves nothing about $H^1$ or $\mathrm{BMO}$
beyond the recorded characterization, definitions and duality.

**Choice.** The upper-endpoint identification uses the duality theorem
[[thm-real-hone-bmo-duality]], which assumes the full Axiom of Choice; that
assumption is inherited here and declared through [[def-axiom-of-choice]]. The
lower-endpoint identification uses only the definition of $H^1$ and the
recorded square-function characterisation. No other step of this page uses
the Axiom of Choice.
