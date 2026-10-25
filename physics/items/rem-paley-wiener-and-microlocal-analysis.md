---
id: rem-paley-wiener-and-microlocal-analysis
kind: remark
title: Paley wiener and microlocal analysis
status: published
origin: pipeline
deps: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
      url: "https://web.archive.org/web/20250519141924if_/https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "Section 11.2.5, Theorem 11.31, pp. 132–133 (Paley-Wiener); Section 14.3, printed p. 196 and following (microlocal orientation)"
---

## Scope boundary

This pair develops only the foundational Fourier calculus on tempered
distributions.  Two major continuations are deliberately not recorded here as
proved results.

**Paley-Wiener theory.**  The compact-support calculation on the A page proves
only that the real-frequency Fourier transform of a compactly supported
distribution is smooth and polynomially bounded.  Paley-Wiener theory goes
much further: it studies holomorphic continuation to complex frequency and
relates quantitative growth there to the support of the original
distribution.  Neither direction of that characterization is proved in this
pair, so it must not be used as a dependency supplied here.

**Microlocal analysis.**  The examples here distinguish global support only
when a compact-support hypothesis makes a convolution or Fourier argument
legal.  Microlocal analysis refines singular support by retaining cotangent
directions of nonsmoothness and studies how those directions propagate under
differential and pseudodifferential operators.  Wavefront sets,
pseudodifferential calculus, and propagation theorems require substantial new
definitions and estimates and are outside this pair.

The cited notes state the Paley-Wiener theorem in §11.2.5 and identify the
pseudodifferential framework as part of microlocal analysis in §14.3.  Those
source statements are orientation only here; this remark is not a supplier
for either theory.
