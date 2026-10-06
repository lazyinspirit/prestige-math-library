---
id: rem-riesz-transform-characterisation-of-real-hone
kind: remark
title: "Recorded Riesz-transform characterisation of $H^1$ (not proved here)"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
proved_here: false
provenance:
  statement: literature-derived
  proof: not-supplied
dependency_level: 5
deps: [def-real-hardy-space-by-a-radial-maximal-function, def-countable-choice, def-riesz-transforms-on-euclidean-space, cor-riesz-transforms-are-ltwo-bounded]
justified_by: []
aliases: []
landmark: false
external_dependency:
  source_url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
  exact_statement: "Proposition 6.10 (The Hardy space H1). (a) The space H1(Rd) is the proper subspace of L1 consisting of functions such that |f|_H1 := |f|_L1 + |Sf|_L1 ~ |f|_L1 + sum_{j=1}^d |R_j f|_L1 ~ || sup_{t>0} |P_t * f| ||_L1 < infinity. Here the R_j are Riesz transforms if d >= 2, the Hilbert transform if d = 1, and P is the Poisson kernel."
  local_proof_attempt: "No proof of the harmonic-extension or singular-integral characterisation is attempted on this page; the maximal and atomic characterisations are proved here instead, and this remark only records the cited statement."
  necessity: "The statement is recorded for completeness of the page (it is the classical singular-integral description of H1); no item on this page or in the run uses it as a logical prerequisite, and the page does not prove it."
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Proposition 6.10(a), printed pp. 25-26: $|f|_{H^1}\\sim\\|f\\|_1+\\sum_j\\|R_jf\\|_1\\sim\\|\\sup_{t>0}|P_t*f|\\|_1$"
    - title: "Li-An Daniel Wang, Multiplier Theorems on Anisotropic Hardy Spaces (PhD dissertation, University of Oregon, 2012)"
      url: "https://scholarsbank.uoregon.edu/bitstreams/9f6ef525-2867-467f-8ce0-ae7bfbeca1c1/download"
      locator: "ch. I, section 1.1.1, printed p. 5 and the singular-integral characterisation, p. 14: the Riesz-transform description of $H^1$"
verification:
  precheck: n/a
---

## Recorded result

Assume Countable Choice. Recorded result (not proved here):
$f\in H^1(\mathbb R^n)$ if and only if
$f,R_1f,\dots,R_nf\in L^1(\mathbb R^n)$, with
$$\|f\|_{H^1}\asymp\|f\|_{L^1}+\sum_{j=1}^n\|R_jf\|_{L^1};$$
for $n=1$ the single Riesz transform is the Hilbert transform. The equivalence
is the substantial harmonic-extension/Calderon-Zygmund theorem of
Fefferman-Stein; it is recorded with its source and is **not proved on this
page**. The published Riesz transforms
[[def-riesz-transforms-on-euclidean-space]] and their $L^2$ boundedness
[[cor-riesz-transforms-are-ltwo-bounded]] are used only to state the result.
For $f\in H^1$ that is not in $L^2$, $R_jf$ means the singular-integral
extension in the cited Fefferman--Stein theorem; the linked local definition
specifies the normalization on $L^2$ and does not by itself define $R_j$ on all
of $H^1$. The source extension agrees with that $L^2$ operator on
$H^1\cap L^2$. No item on this page depends on this remark.
