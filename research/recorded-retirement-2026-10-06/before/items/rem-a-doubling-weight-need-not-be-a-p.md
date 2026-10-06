---
id: rem-a-doubling-weight-need-not-be-a-p
kind: remark
title: A doubling weight need not lie in A_p
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
proved_here: false
deps: [def-muckenhoupt-a-p-and-a-one-weights, def-weight-and-weighted-lp-space, lem-a-p-weights-are-doubling, ex-power-weight-a-p-range]
provenance:
  statement: literature-derived
  proof: not-supplied
external_dependency:
  source_url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
  exact_statement: "The measures |x|^a dx are doubling for a>-n (Example 7.1.6), while |x|^a is an A_p weight, 1<p<infty, if and only if -n<a<n(p-1) (Example 7.1.7); hence for a>n(p-1) the doubling weight |x|^a lies in no A_p for that exponent."
  local_proof_attempt: "A local proof would combine the polar-coordinate computation of radial integrals with the type I/type II ball splitting used in the A_p range example; the statements are available verbatim in the source and this page records them for orientation, reserving its proof slots for the A_p theory."
  necessity: "Shows that the doubling lemma has no converse and prevents the page from treating the doubling property as equivalent to A_p membership."
verification:
  precheck: n/a
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Examples 7.1.6 and 7.1.7, printed pp. 505-507"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Example 4.17 and Definition 4.23, printed pp. 75 and 79"
---

## Remark

For every $1<p<\infty$ the converse of the doubling property of $A_p$ weights
fails: the power weights $|x|^\alpha$ with $\alpha>n(p-1)$ are locally
integrable and their measures $|x|^\alpha dx$ are doubling on $\mathbb R^n$ (the
doubling range is $\alpha>-n$), while the $A_p$ characteristic on balls centred
at the origin is $+\infty$ for $\alpha\ge n(p-1)$. Thus doubling alone does not
imply membership in $A_p$, and the interval $\alpha>n(p-1)$ exhibits doubling
weights outside $A_p$ for each fixed exponent.

This is recorded, not proved here: the doubling range and the exact $A_p$ range
for power weights are the sourced results of Examples 7.1.6 and 7.1.7 of
Grafakos (doubling for $\alpha>-n$; $A_p$ exactly for
$-n<\alpha<n(p-1)$), while Kinnunen Example 4.17 records the same ranges as an exercise. The
remark is orientation for the doubling lemma
([[lem-a-p-weights-are-doubling]], [[ex-power-weight-a-p-range]]) and is not a
dependency target of any item.
