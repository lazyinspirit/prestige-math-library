---
id: rem-littlewood-paley-endpoints-require-hardy-and-bmo-replacements
kind: remark
title: "Littlewood-Paley endpoint scope and the H1-BMO dual pair"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 13
deps: [thm-littlewood-paley-square-function-equivalence-on-lp, def-real-hardy-space-by-a-radial-maximal-function, def-bmo-seminorm-and-quotient-by-constants, thm-real-hone-bmo-duality, def-axiom-of-choice]
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

The two-sided square-function equivalence of [[thm-littlewood-paley-square-function-equivalence-on-lp]] is stated for $1<p<\infty$. Its contract supplies no estimate at $p=1$ or $p=\infty$, so substituting either endpoint into it or its consumers is not justified by that theorem.

The locally defined real Hardy space $H^1(\mathbb R^n)$ is [[def-real-hardy-space-by-a-radial-maximal-function]]. Under the Axiom of Choice, its continuous dual is isomorphic, with equivalent norms, to BMO modulo constants ([[def-bmo-seminorm-and-quotient-by-constants]], [[thm-real-hone-bmo-duality]]), with the fixed Hardy kernel and auxiliary order required by that duality theorem. Thus the library supplies the pair $(H^1,\mathrm{BMO}/\mathbb C)$ as a proved duality of these defined spaces. That duality supplies no square-function endpoint estimate on its own.

**Choice.** The dual identification inherits the full Axiom of Choice from [[thm-real-hone-bmo-duality]], declared through [[def-axiom-of-choice]]. The strict-range statement is used only within its own hypotheses. The conclusions here use the defined spaces and local duality; no homogeneous or inhomogeneous endpoint square-function characterization is asserted.
