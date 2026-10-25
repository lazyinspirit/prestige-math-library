---
id: ex-schwarz-overlap-shrinking-decomposition-bound
kind: example
title: "The stable-splitting guarantee worsens as overlap shrinks"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - thm-two-level-p1-poisson-stable-decomposition
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Jinchao Xu, Iterative Methods by Space Decomposition and Subspace
        Correction, SIAM Review 34(4) (1992)"
      url: https://numerik.mi.fu-berlin.de/wiki/SS_2020/NumericsIII_Dokumente/Xu92.pdf
      locator: "Sections 3.1–3.3 and 4.1, pp. 585–592: subspace correction,
        point-Jacobi splitting, and additive condition estimates."
    - title: "Peter Bastian, Lecture Notes on Parallel Solution of Large Sparse Linear
        Systems, University of Heidelberg (2015)"
      url: https://conan.iwr.uni-heidelberg.de/data/scripts/num3.pdf
      locator: "Chapter 3 §§3.2–3.4, pp. 41–50: overlapping local spaces and
        coarse-grid correction."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Assume Countable Choice. For any admissible overlap radius $\delta$ in the
structured family of
[[thm-two-level-p1-poisson-stable-decomposition]], put $r=H/\delta$.
Substitution into the proved stable-decomposition guarantee gives
$$ C_0\le C_{\rm FE}(1+r^2). $$
Along admissible families with $\delta/H\to0$, this upper-bound formula grows.
This substitution does not assert that the actual stable constant or
condition number must diverge.

## Facts & Assumptions

**Given:** Countable Choice and a member of the structured P1 Poisson family of
[[thm-two-level-p1-poisson-stable-decomposition]] and its admissible overlap
radius $\delta$.

[F1] The theorem proves
$C_0\le C_{\rm FE}(1+(H/\delta)^2)$, with $C_{\rm FE}$ independent of $h$,
$H$, and $\delta$
([[thm-two-level-p1-poisson-stable-decomposition]]).

## Verification

1.1 Put $r=H/\delta$. Substituting into [F1] gives $C_0\le C_{\rm FE}(1+r^2)$. [F1, given, algebra]

2.1 To exhibit admissible radii with $\delta/H\to0$, fix $M,d$, put $a=1/M$, choose $q_0=\lceil\sqrt d\rceil$, and take $\delta=q_0a/n$ as $n\to\infty$ with $n\ge q_0$. Then $h=\sqrt d\,a/n\le\delta\le a$, and $r=H/\delta=\sqrt d\,n/q_0\to\infty$. The right side of the one-sided upper-bound formula grows; it supplies no lower estimate on the actual stable constant or condition number. [step 1.1, given, algebra] ∎
