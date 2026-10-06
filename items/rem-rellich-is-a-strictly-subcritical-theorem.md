---
id: rem-rellich-is-a-strictly-subcritical-theorem
kind: remark
title: "Rellich compactness is strictly subcritical"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [thm-rellich-kondrachov-for-p-less-than-n, thm-rellich-kondrachov-at-the-critical-source-exponent, thm-morrey-rellich-compactness-for-p-greater-than-n, thm-frechet-kolmogorov-compactness-criterion-in-lp, cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets, thm-critical-sobolev-embedding-into-every-finite-lq]
forward_refs: [cex-critical-sobolev-embedding-is-not-compact, cex-rellich-fails-without-uniform-tail-control, cex-morrey-compactness-loses-the-endpoint-holder-exponent]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Examples 3.46 and 3.47 and the closing paragraph of Section 3.10, printed pp. 74-75"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Examples 9.13 and 9.14, printed pp. 218-219"
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "The moral after Example 3.46: Rellich--Kondrachov does not hold at $q=p^{*}$, printed p. 90"
---

## Remarks

The compactness statements of this page are strictly subcritical ; the companion page gives witnesses
for the critical target exponents and for escape to infinity.

- (i) For $1\le p<n$ on a bounded domain the continuous embedding
  $W^{1,p}_0(\Omega)\hookrightarrow L^{p^{*}}(\Omega)$ is not compact, so the
  strict inequality $q<p^{*}$ in
  [[thm-rellich-kondrachov-for-p-less-than-n]] and
  [[cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets]]
  cannot be replaced by $q=p^{*}$ (witness:
  [[cex-critical-sobolev-embedding-is-not-compact|a concentrating bump sequence]]).
- (ii) On $\mathbb R^n$ boundedness in $W^{1,p}$ and translation control alone
  do not give compactness: the family of translates of one compactly supported
  bump satisfies the boundedness and translation hypotheses of
  [[thm-frechet-kolmogorov-compactness-criterion-in-lp]] but not its tightness
  hypothesis, and has no strongly convergent subsequence
  ([[cex-rellich-fails-without-uniform-tail-control]]); the tightness
  hypothesis is therefore indispensable.
- (iii) In the Morrey range $p>n$ the endpoint H\"older exponent
  $\beta=1-\frac np$ is excluded from
  [[thm-morrey-rellich-compactness-for-p-greater-than-n]] (witness:
  [[cex-morrey-compactness-loses-the-endpoint-holder-exponent|rescaled H\"older spikes]]).
- (iv) At the critical source exponent $p=n$,
  [[thm-rellich-kondrachov-at-the-critical-source-exponent]] gives compactness
  into every finite $L^q$ and makes no $L^\infty$ compactness claim. When
  $\Omega$ is nonempty, the local log-log test function constructed in the proof of
  [[thm-critical-sobolev-embedding-into-every-finite-lq]] belongs to
  $W^{1,n}(\Omega)$ and is essentially unbounded; this construction needs only
  an interior ball, independently of the extension hypotheses. For each $M>0$
  its superlevel set $E_M$ has positive measure, so
  $\|w\|_{L^q}\ge M|E_M|^{1/q}$ forces the best continuous embedding constants
  to tend to infinity as $q\to\infty$. On the empty domain all spaces are zero.

For the $W^{1,p}$ compactness theorems on extension domains, boundedness and
the extension hypothesis are part of the stated setting. The $W^{1,p}_0$
compactness results need only bounded openness and zero extension, with no
boundary regularity. On $\mathbb R^n$, translations and dilations destroy
compactness when the corresponding tail control is absent.
