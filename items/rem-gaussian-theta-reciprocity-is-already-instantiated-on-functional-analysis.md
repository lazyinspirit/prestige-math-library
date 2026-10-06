---
id: rem-gaussian-theta-reciprocity-is-already-instantiated-on-functional-analysis
kind: remark
title: "Gaussian Poisson summation and theta reciprocity are already instantiated on functional analysis (recorded)"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
design_row: FR-19
deps: []
justified_by: []
aliases: []
landmark: false
proved_here: false
provenance:
  statement: literature-derived
  proof: not-supplied
external_dependency:
  source_url: "https://math.mit.edu/classes/18.785/2015fa/LectureNotes16.pdf"
  exact_statement: "Sutherland, Lecture 16: Theorem 16.3 (Poisson summation, $\\sum_nf(n)=\\sum_n\\widehat f(n)$ for $f\\in\\mathcal S(\\mathbb R)$), Lemma 16.4 ($\\widehat g=g$ for $g(x)=e^{-\\pi x^2}$) and Lemma 16.6 ($\\Theta(i/y)=\\sqrt y\\,\\Theta(iy)$ for $y>0$, where $\\Theta(iy)=\\sum_ne^{-\\pi n^2y}$); equivalently $\\sum_ne^{-\\pi n^2y}=y^{-1/2}\\sum_ne^{-\\pi n^2/y}$."
  local_proof_attempt: "None written locally: the published functional-analysis item ex-poisson-summation-for-the-gaussian-and-theta-functional-equation already proves this instance, the design assigns this row proof provenance not-supplied, and the remark is a pointer that preserves ownership."
  necessity: "Prevents a duplicate Gaussian Poisson example on the sampling pair and keeps the published functional-analysis id as the single owner of the theta-reciprocity interface."
verification:
  precheck: n/a
sources:
  references:
    - title: "Andrew Sutherland, MIT 18.785 Lecture 16: The functional equation (course PDF)"
      url: "https://math.mit.edu/classes/18.785/2015fa/LectureNotes16.pdf"
      locator: "§16.1, Theorem 16.3 with Lemma 16.4 and Corollary 16.5; §16.1.1, Lemma 16.6 (theta functional equation), printed pp. 1-3"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845)"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "ch. 23, Example 23.7 (periodising the Gauss kernel) and the theta functional equation on p. 140, PDF pp. 138-140"
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (author PDF)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
      locator: "§7, (7.17)-(7.18): the Gaussian Poisson identity and the Jacobi transformation formula, printed p. 73"
---

## Remark

**Recorded, not proved here.** The Gaussian instance of Poisson summation and
the theta reciprocity identity $\theta(t)=t^{-1/2}\theta(1/t)$ with
$\theta(t)=\sum_{n\in\mathbb Z}e^{-\pi tn^2}$ for $t>0$ are already proved and published
on the functional-analysis page under its Countable Choice hypothesis and the exact stable id
`ex-poisson-summation-for-the-gaussian-and-theta-functional-equation` (that
item is homed on an examples page, so this recorded pointer cites its id
without creating a cross-examples dependency edge). This companion page does
not mint a second Gaussian example: Sutherland's Theorem 16.3, Lemma 16.4 and
Lemma 16.6 and Laugesen's Example 23.7 with the theta functional equation
verify that the published example is exactly this interface.
