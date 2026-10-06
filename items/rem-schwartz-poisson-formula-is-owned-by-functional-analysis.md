---
id: rem-schwartz-poisson-formula-is-owned-by-functional-analysis
kind: remark
title: "The unit-lattice Schwartz Poisson formula is owned by functional analysis (recorded, not proved here)"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
design_row: FR-19
deps: [thm-poisson-summation-for-schwartz-functions]
justified_by: []
aliases: []
landmark: false
proved_here: false
provenance:
  statement: literature-derived
  proof: not-supplied
external_dependency:
  source_url: "https://people.math.harvard.edu/~elkies/aws09.pdf"
  exact_statement: "Elkies, §2, Theorem 2 and its proof (printed pp. 10-11): for any lattice $L\\subset\\mathbb R^n$ and every Schwartz $f$, $\\sum_{x\\in L}f(x)=(\\operatorname{disc}L)^{-1/2}\\sum_{y\\in L^*}\\widehat f(y)$, where $\\widehat f(y)=\\int_{\\mathbb R^n}f(x)e^{2\\pi i\\langle x,y\\rangle}d\\mu(x)$; the proof periodises $F(z)=\\sum_{x\\in L}f(x+z)$ and expands it in its Fourier series, (28)-(32). For $L=\\mathbb Z^n$ this is $\\sum_kf(k)=\\sum_k\\widehat f(k)$, the statement proved locally by the published library item thm-poisson-summation-for-schwartz-functions in the negative-sign convention."
  local_proof_attempt: "Not reconstructed here: the design assigns this row proof provenance not-supplied. The published library item already proves the unit-lattice statement with countable choice, and this remark is its pointer; no second proof and no numerical instance are written on this page."
  necessity: "Preserves the existing stable id and ownership of the Schwartz Poisson theorem, prevents a duplicate proof on the sampling page, and fixes the exact published statement whose convergence clause the local periodisation lemma consumes."
verification:
  precheck: n/a
sources:
  references:
    - title: "Noam Elkies, Theta functions and weighted theta functions of Euclidean lattices (author PDF)"
      url: "https://people.math.harvard.edu/~elkies/aws09.pdf"
      locator: "§2, Theorem 2 (Poisson summation in $\\mathbb R^n$) and (26)-(32), printed pp. 9-11"
    - title: "Andrew Sutherland, MIT 18.785 Lecture 16: The functional equation (course PDF)"
      url: "https://math.mit.edu/classes/18.785/2015fa/LectureNotes16.pdf"
      locator: "§16.1, Theorem 16.3 (the one-dimensional case $\\sum_nf(n)=\\sum_n\\widehat f(n)$) with proof, printed pp. 1-2"
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (author PDF)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
      locator: "§7, (7.11)-(7.17): the periodisation and the Gaussian instance of the formula, printed pp. 72-73"
---

## Remark

**Recorded, not proved here.** The unit-lattice formula
$\sum_{k\in\mathbb Z^n}f(k)=\sum_{k\in\mathbb Z^n}\widehat f(k)$, together with
local uniform convergence of every derivative series of the periodisation
$\sum_kf(x+k)$, is the published
[[thm-poisson-summation-for-schwartz-functions]] under the negative-sign
$2\pi$-normalised convention of this library. This page cites that stable id
rather than minting a second proof: the local periodisation lemma below
consumes exactly its convergence clause, and the lattice scaling is proved
locally on this page; both of those items are independent of this recorded
remark.
