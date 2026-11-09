---
id: thm-adjudicate-f6007757a8ac-separated-cycle-descent-input
kind: theorem
title: Separated raw-cycle Zariski descent input
status: draft
domain: mathematics
deps:
  - def-bloch-higher-cycle-complex
dependency_roles:
  def-bloch-higher-cycle-complex: mathematical-premise
external_input: true
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: Mazza, Voevodsky and Weibel, Lecture Notes on Motivic Cohomology,
        December 2005 author PDF
      url: https://sites.math.rutgers.edu/~weibel/MVWnotes/xprova.pdf
      locator: Standing convention printed p.5; Definition19.10, Theorem19.11,
        Proposition19.12 and proof, printed pp.168–169 (PDF pp.179–180)
      statement: In the source separated finite-type scheme convention, the raw Bloch
        cycle complex has the Zariski Mayer–Vietoris property and its canonical
        map to derived sections of its degreewise sheafification is a
        quasi-isomorphism.
      hypotheses: Use only smooth quasi-projective finite-type schemes over a field,
        including affine schemes and quasi-compact open subschemes of an affine
        scheme. Use the actual simplicial cycle convention, not a replacement
        definition by hypercohomology.
      reading_limits: Read the standing convention and the complete named definition,
        theorem statement, proposition/proof and proof of19.1 in the primary
        xprova PDF. The Brown–Gersten and moving foundations are imported. No
        claim that this source itself includes nonseparated schemes.
dependency_level: 4
---

## Statement
Let $Y$ be a smooth quasi-projective finite-type scheme over a field, and $r\geq0$. Regard $C(W)=z^r(W,\bullet)$ in cohomological degrees $-n$, and let $aC$ be its degreewise sheafification on the small Zariski site of $Y$. The canonical unit
$$C(Y)\longrightarrow R\Gamma(Y_{\mathrm{Zar}},aC)$$
is a quasi-isomorphism. The comparison is natural for open restriction.

## Source contract
**Given:** The hypotheses above and the unnormalized simplicial Bloch convention.

**Goal:** Supply the established separated case used in finite-affine-cover induction.

[F1] MVW Proposition19.12 and its two-localization-row proof, together with Theorem19.11, supply this actual unit equivalence; the standing convention on printed p.5 is separated. Only the indicated quasi-projective cases are used.

## External input
Import [F1] at the stated scope and reading limits. The nonseparated extension is a separate local deduction. No proof of the Brown–Gersten theorem or the deep moving lemma is claimed here.
