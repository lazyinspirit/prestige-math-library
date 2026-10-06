---
id: "rem-hausdorff-cover-conventions-and-normalisation"
kind: "remark"
title: "Content, spherical covers, and normalisation"
deps: ["prop-hausdorff-content-and-measure-have-the-same-null-sets", "thm-hausdorff-n-measure-is-proportional-to-lebesgue-measure"]
sources:
  references:
    - title: Fremlin, Measure Theory, 264D(a,b,d),264H–I
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf
    - title: Bishop–Peres, §1.2 p.4, arbitrary versus ball covers
      url: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf
    - title: Falconer, The Geometry of Fractal Sets, §1.2 p.7, spherical convention
      url: https://www.ma.imperial.ac.uk/~jswlamb/M345PA46/F85%20chap%201.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
origin: "pipeline"
proved_here: false
external_dependency:
  source_url: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf
  exact_statement: For every integer n>=1 and every A subset R^n, unnormalised diameter-power Hausdorff measure satisfies H^n(A)=(2^n/lambda_n(B(0,1)))lambda_n^*(A).
  local_proof_attempt: Coordinate-box covers prove 1 <= c_n <= n^(n/2), and Borel uniqueness proves proportionality. These estimates do not identify the sharp constant; that requires the isodiametric inequality. The cover-family comparison proves comparability, not a strict-inequality example.
  necessity: Scope orientation only; neither the sharp factor nor strict spherical inequality is a dependency or used in an assigned proof.
verification:
  sources_checked:
    date: 2026-09-07
    scope: citations
    by: session-audit
  precheck: n/a
---

## Discussion

Assume the Axiom of Countable Choice. The covering convention matters. For the diameter-power definition, replacing nonempty covering sets by their closures leaves diameters unchanged, hence gives the same infimum even at a fixed scale. Open enlargement gives the same limiting measure for positive exponents, with scale and cost slack. Finite-scale content should not be confused with the limiting measure: [[prop-hausdorff-content-and-measure-have-the-same-null-sets]] establishes only their common null sets.

If $\mathcal S^s$ denotes the analogous limiting infimum restricted to open metric balls, then for $s>0$,

$$\mathcal H^s(A)\le\mathcal S^s(A)\le2^s\mathcal H^s(A).$$

For the second inequality, enclose each nonempty cover member of diameter $d_j$ in a ball about one of its points, of radius slightly greater than $d_j$. Its diameter is at most twice that radius. Choose positive enlargements with summable cost error, including when $d_j=0$; the covering scale is increased by a factor tending to two and still tends to zero. Infimisation, vanishing cost error, and the small-scale limit give the inequality. The first inequality is inclusion of cover families. The ball-only convention is called spherical Hausdorff measure; equality with arbitrary-cover measure is not a general convention equivalence (Falconer §1.2).

**Recorded, not proved here.** The sharper Euclidean identification for this unnormalised convention is

$$c_n=\frac{2^n}{\lambda_n(B(0,1))}.$$

Fremlin 264H–I supplies the isodiametric argument and exact factor. The local theorem [[thm-hausdorff-n-measure-is-proportional-to-lebesgue-measure]] proves proportionality and elementary bounds only. No proof or example here uses the displayed exact identification for $n\ge2$.
