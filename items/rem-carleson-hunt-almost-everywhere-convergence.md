---
id: rem-carleson-hunt-almost-everywhere-convergence
kind: remark
title: Carleson–Hunt maximal bound and almost-everywhere convergence — recorded theorem
deps: [def-carleson-maximal-partial-sum-operator]
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: 'Laugesen, Harmonic Analysis Lecture Notes'
      url: 'https://arxiv.org/pdf/0903.3845'
      locator: 'ch. 8, Theorem 8.7 and omitted-proof discussion, pp. 51–52'
proved_here: false
external_dependency:
  source_url: https://arxiv.org/pdf/0903.3845
  exact_statement: For each 1<p<infinity there is a finite C_p such that ||Cf||_p <= C_p||f||_p for every f in Lp(T). Consequently S_N f(x)->f(x) almost everywhere. Carleson established p=2 and Hunt the full open range.
  local_proof_attempt: The dense-polynomial closure is isolated locally in the weak-bound lemma. It cannot supply the missing maximal estimate. Read Lacey §3’s size, density and tree machinery and §7’s opening; FR-5 explicitly keeps the deep estimate external.
  necessity: Required by FR-5’s explicit literature boundary; retained for mathematical scope without making an unproved result a logical prerequisite.
status: draft
origin: pipeline
verification:
  precheck: n/a
---

## Recorded theorem

On the period-one torus with normalized Haar measure, for every $1<p<\infty$ there is a finite constant $C_p$ such that

$$\|Cf\|_p\le C_p\|f\|_p\qquad(f\in L^p(\mathbb T)),$$

where $C$ is [[def-carleson-maximal-partial-sum-operator]]. Consequently,

$$S_Nf(x)\longrightarrow f(x)\qquad\text{for almost every }x\in\mathbb T.$$

Carleson's original result concerns $p=2$; Hunt obtained the full open range. This is recorded literature, with no local proof of the maximal estimate. Laugesen's Theorem 8.7 and its omitted-proof discussion give the torus convergence statement and the required strong maximal estimate; the source's period $2\pi$ is rescaled by $t=2\pi x$ with normalized measure.

The norm here is $\|\sup_N|S_Nf|\|_p$. Uniformly bounding the separate numbers $\|S_Nf\|_p$ does not supply this estimate. The endpoint $p=1$ is excluded.
