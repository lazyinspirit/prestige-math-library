---
id: def-modular-height-of-a-polarized-abelian-variety
kind: definition
title: "Modular height from the Hodge line on Siegel moduli"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field
  - def-axiom-of-choice
  - def-siegel-moduli-variety-of-polarized-abelian-varieties
  - thm-siegel-moduli-coarse-compactification-and-hodge-ampleness
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "G. Faltings, “Endlichkeitssätze für abelsche Varietäten über Zahlkörpern,” §2"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf"
      locator: "Printed pp. 355–357, moduli height used in the bounded-height argument."
verification:
  precheck: pending
axiom_use: "The explicit axiom branches are AC; the displayed item-local proof is choice-free after the cited hypotheses unless its Proof status records an unresolved internal use."
---

## Definition

Assume AC. Fix $g\ge1$ and a projective embedding $\iota:\mathcal A_g^*\hookrightarrow\mathbb P^N$ supplied by a positive power of the Hodge line on the projective Satake compactification. For a principally polarized abelian variety $A/K$, its **modular height** $h_{\mathrm{mod}}(A)$ is the absolute logarithmic Weil height of its moduli point $[A]\in\mathcal A_g(K)$ under $\iota$. The embedding and power are fixed once for the entire comparison; changing them changes this height by bounded factors and an additive bounded term.

## Definition references

[[def-siegel-moduli-variety-of-polarized-abelian-varieties]]

[[thm-siegel-moduli-coarse-compactification-and-hodge-ampleness]]

[[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]]

## Facts & Assumptions

**Given:** AC, a dimension $g$, the coarse moduli point of a principally polarized abelian variety, and a fixed projective embedding of the Satake compactification.

[A1] [[def-axiom-of-choice]]: AC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[F1] [[def-siegel-moduli-variety-of-polarized-abelian-varieties]]: the coarse moduli point records the isomorphism class of the principally polarized abelian variety.

[F2] [[thm-siegel-moduli-coarse-compactification-and-hodge-ampleness]]: the Satake compactification is projective and a positive power of its Hodge line is ample.

[F3] [[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]]: the embedding defines an absolute logarithmic Weil height on projective points.
