---
id: rem-the-general-fourier-restriction-problem
kind: remark
title: The general Fourier restriction problem remains open
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- def-fourier-restriction-and-adjoint-extension-operators
- thm-knapp-necessary-condition-for-spherical-ltwo-restriction
proved_here: false
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: n/a
  sources_checked:
    date: 2026-10-05
    by: Codex
    scope: "Read the exact authoritative PDFs: Merz printed pp.7-8, Section 3.1 and Conjecture 3.2; Jaming-Iosevich-Mayeli printed pp.16-17, Conjecture 4.1, its following paragraph and Theorem 4.2. Checked the strict L-infinity exponent threshold, constant-density necessity, dimension-two attribution, recorded open higher-dimensional status and the distinct Stein-Tomas L2 line."
external_dependency:
  source_url: https://www.iaa.tu-bs.de/konmerz/ss25/fr/material/NotesOnRestriction.pdf
  exact_statement: 'Conjecture 3.2: for sphere surface measure, extension from L-infinity to Lq is conjectured for q>2n/(n-1); §3.1 records constant-density sharpness. Jaming–Iosevich–Mayeli §4, Conjecture 4.1 and its following paragraph, records the dimension-two result (Fefferman and Zygmund) and open status for n>=3. The L2 line on this page is proved locally.'
  local_proof_attempt: No proof is attempted. The conjecture is open, and this page proves only the L2-density line; the statement is recorded with its exact source and sharpness constraints.
  necessity: Prevents the Stein-Tomas theorem from being read as the full restriction problem and records the exact open boundary; no item may cite this remark as a proof supplier.
sources:
  references:
  - title: K. Merz, Some notes on restriction theory
    url: https://www.iaa.tu-bs.de/konmerz/ss25/fr/material/NotesOnRestriction.pdf
    locator: §3, printed pp.7–8, especially Conjecture 3.2 and §3.1.
  - title: P. Jaming, A. Iosevich and A. Mayeli, Uncertainty principle, annihilating pairs and Fourier restriction
    url: https://arxiv.org/pdf/2502.13786
    locator: '§4, Conjecture 4.1 and following paragraph, printed p.16: dimension-two attribution and open higher-dimensional status; Theorem 4.2, p.17.'
---

## Remark

**Recorded orientation, not proved here.** For $f\in L^\infty(S^{n-1})$ the restriction conjecture asks for $\|\widehat{fd\sigma}\|_{L^q(\mathbb R^n)}\lesssim_q\|f\|_\infty$ for all $q>2n/(n-1)$; the constant density shows this range is best possible. The conjecture is known for $n=2$ (Fefferman and Zygmund) and remains open for $n\ge3$. The Stein-Tomas theorem of this page settles only the $L^2$-density line $q\ge2(n+1)/(n-1)$, which lies strictly above the conjectured $L^\infty$ range; no claim here settles the general restriction problem, and the Knapp examples of the companion page constrain every such estimate.

The operators in the display are those of [[def-fourier-restriction-and-adjoint-extension-operators]]; the necessity of the $L^2$-density threshold recorded here is the theorem [[thm-knapp-necessary-condition-for-spherical-ltwo-restriction]], and the companion page's counterexample exhibits the same cap family in the limit $\delta\downarrow0$.
