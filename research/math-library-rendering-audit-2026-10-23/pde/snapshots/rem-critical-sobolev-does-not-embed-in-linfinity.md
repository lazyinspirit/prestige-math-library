---
id: rem-critical-sobolev-does-not-embed-in-linfinity
kind: remark
title: "The $p=n$ endpoint: no $L^\\infty$ or Holder embedding"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3 §3.2, Remark 3.16(1)-(3) and the Trudinger-Moser remark following it, printed pp. 73-74."
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 3 §3.7, Example 3.30 and the preceding limiting-case remark, printed p. 66."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 3, Theorem 3.23, printed p. 72, for the supercritical higher-order comparison; the critical limitation is supplied by Kinnunen and Hunter."
---

## Remark

Let $n\ge2$. On nonempty bounded $C^1$ domains in $\mathbb R^n$ (or domains satisfying the all-exponents extension hypothesis of the critical embedding theorem), $W^{1,n}$ embeds into $L^q$ for
every finite $q$ but not into $L^\infty$, and some $W^{1,n}$ classes have no representative in
$C^{0,\alpha}(\overline\Omega)$ for any $\alpha>0$. The exponential improvement
of Trudinger-Moser and the BMO/John-Nirenberg route to the same integrability
are outside this pair's scope and are recorded in the planning scope-denial
ledger; the companion page carries the witnesses.

The dimension restriction is essential: on a bounded interval $I$, every
$W^{1,1}(I)$ class has an absolutely continuous representative and satisfies
$\|u\|_{L^\infty(I)}\le |I|^{-1}\|u\|_{L^1(I)}+\|u'\|_{L^1(I)}$.

## Source notes

The endpoint limitation is Kinnunen's Remark 3.16 and the surrounding
discussion of the critical exponent, with Hunter's Example 3.30 as the explicit
logarithmic witness with Laugesen's Theorem 3.23 supplying the supercritical comparison. This remark records the limitation only: the positive embedding
$W^{1,n}\hookrightarrow L^q$ for finite $q$ and the failure of the $L^\infty$
and Holder bounds are proved elsewhere on this page and on its companion, and
the Trudinger-Moser and BMO routes are deliberately not built in this pair.
