---
id: rem-littlewood-paley-linfinity-endpoint-needs-bmo-carleson-control
kind: remark
title: "Recorded: the L-infinity endpoint needs BMO and Carleson control, not L-infinity"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
deps: [thm-littlewood-paley-square-function-equivalence-on-lp, def-lusin-area-function-for-a-fixed-admissible-kernel]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Theorem 7.19 (dyadic $L^p$ equivalence for $1<p<\\infty$), Definition 7.21(a) (dyadic $H^1$), Proposition 7.22 (the Carleson condition for dyadic BMO) and §7.5, printed pp. 36-39"
proved_here: false
verification:
  precheck: n/a
external_dependency:
  source_url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
  exact_statement: "Real-valued dyadic model with the L2-normalised real Haar basis. Theorem 7.19: for f in L^p([0,1]) with mean zero and 1<p<infinity, ||Sf||_p ~ ||f||_p, where S is the Haar square function. Definition 7.21(a): dyadic H^1([0,1]) = {f in L^1 : Av f = 0, Sf in L^1}. Proposition 7.22: for f in L^2 with mean zero, f is in dyadic BMO if and only if sup_I |I|^{-1} sum_{J subset I, J in D} a_J^2 = sup_I Av_I |f - f_I|^2 = ||f||_{BMO}^2 < infinity, where f = sum_I a_I h_I."
  local_proof_attempt: "Not attempted. The endpoint statements need the Haar/dyadic martingale square-function theory and the Carleson-measure characterisation of BMO, which are not developed on this page; the page proves the strict-range L^p theorem and defines the Lusin area function only."
  necessity: "Prevents the use of the strict-range theorem at p=infinity and records the BMO/Carleson scale that replaces L-infinity at the upper endpoint."
---

## Statement

*Recorded, not proved here.* The strict-range equivalence of
[[thm-littlewood-paley-square-function-equivalence-on-lp]] is not extended to
the endpoints, and the endpoint substitutes recorded in the dyadic model are
Hardy-space data at the bottom and BMO/Carleson data at the top, not a
two-sided $L^\infty$ statement. In the real-valued dyadic model on $[0,1]$,
let $\mathcal D$ be the dyadic intervals, including $[0,1]$, and let $h_I$
be the real $L^2$-normalised Haar functions. For mean-zero $f\in L^p$,
$f=\sum_{I\in\mathcal D}a_Ih_I$, the Haar square function satisfies
$\|Sf\|_p\asymp\|f\|_p$ for $1<p<\infty$. Dyadic $H^1$ consists of
mean-zero $L^1$ functions with $Sf\in L^1$. For real-valued mean-zero
$f\in L^2([0,1])$, membership in dyadic BMO is equivalent to the Carleson
condition
$$\sup_{I\in\mathcal D}|I|^{-1}\sum_{J\subset I,\,J\in\mathcal D}a_J^2=\sup_{I\in\mathcal D}\frac1{|I|}\int_I|f-f_I|^2=|f|_{\mathrm{BMO}}^2<\infty$$
holds; the inclusion $J\subset I$ in this formula includes $J=I$. Thus the endpoint ladder used in place of the strict-range theorem is
$(H^1,\mathrm{BMO})$ and not $(L^1,L^\infty)$; this item is a recorded leaf
and is not a dependency of any item on this page.

The Lusin area functional $A_{a,\psi}$ of
[[def-lusin-area-function-for-a-fixed-admissible-kernel]] is the conical form
in which the same endpoint theory is usually stated; no equivalence between
$A_{a,\psi}$ and $S$ is asserted here.
