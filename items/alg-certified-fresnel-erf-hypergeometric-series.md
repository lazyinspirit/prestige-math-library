---
id: alg-certified-fresnel-erf-hypergeometric-series
kind: algorithm
title: Finite certified power-series evaluation for Fresnel, erf, and Gauss functions
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-certified-evaluation-result-contract, def-fresnel-erf-and-hypergeometric-series, lem-fresnel-series-geometric-tail, lem-erf-series-geometric-tail, lem-gauss-hypergeometric-series-geometric-tail, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound, alg-certified-elementary-range-evaluation, thm-real-elementary-range-enclosures, thm-complex-elementary-range-enclosures, lem-trigonometric-identities-machin-and-range-reduction, lem-range-reduced-exp-log-and-arctan-series-enclosures, def-factorial-and-falling-factorial, lem-of-naturals-positive]
justified_by: [thm-certified-fresnel-erf-hypergeometric-enclosures]
forward_refs: []
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: DLMF, §15.2(i), Gauss series
      url: https://dlmf.nist.gov/15.2
    - title: DLMF, §§7.6(i) and 15.2(i)
      url: https://dlmf.nist.gov/7.6
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §2
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 2
---

## Definition

Inputs are a target label $T\in\{C,S,\operatorname{erf},{}_2F_1\}$, an exact
dyadic complex argument $z$, and, for the Gauss-series target, exact dyadic
complex parameters $a,b,c$. Also input positive exact rational absolute
tolerance $\varepsilon_a$, optional positive exact rational relative
tolerance $\varepsilon_r$, a fixed exponent range $(e_{\min},e_{\max})$,
and finite positive integer caps $S_{\max},N_{\max},p_{\max},W$, with
$p_{\max}\ge2$. The stage
cap $S_{\max}$ bounds retries, $N_{\max}$ bounds series terms, $p_{\max}$
bounds dyadic precision, and $W$ bounds this procedure's exact interval
operations, term constructions, and elementary-DAG node operations. Every
nested elementary-range call shares this counter and is interrupted with
inconclusive before its next operation would exceed the remaining budget. At
stage $q$, use
precision $p=\max(2,\min(q,p_{\max}))$ and truncation index $q$ for every
elementary-range subcall.

Reject an invalid target, nonpositive tolerance, invalid cap, invalid exponent
range $e_{\min}>e_{\max}$, or a Gauss input with
$|z|^2\ge1$ or $c\in\{0,-1,-2,\ldots\}$ by returning domain. The
Fresnel and error-function branches accept every finite complex $z$.
Outputs are a finite interval or rectangle with status success, or a
status inconclusive, domain, or range as in
[[def-certified-evaluation-result-contract]].

All rational and interval arithmetic uses
[[def-outward-rounded-interval-and-ball-operations]]. Embed real coefficient intervals $X$ as $X+i[0,0]$ in complex arithmetic; typed elementary DAG nodes never use an implicit real-to-complex conversion. If a required
intermediate operation or output endpoint overflows its selected format,
return range. If an elementary-range subcall returns a non-finite status,
skip the current candidate; if no later stage succeeds, return inconclusive.
The same candidate-skip rule applies to every other non-finite arithmetic
status, including split-domain or entire when a rounded divisor contains
zero; never use such a status as a finite interval.
Charge each exact arithmetic operation, coefficient term, rounding, and
elementary-range call against $W$; before an operation that would exceed
$W$, return inconclusive.

At each stage, form $P_q$, a certified dyadic interval containing $\pi$,
only when $T\in\{C,S,\operatorname{erf}\}$. For $r\in\{1/5,1/239\}$, form
$A_q(r)=\sum_{j=0}^{q-1}(-1)^jr^{2j+1}/(2j+1)$ and
$E_q(r)=r^{2q+1}/((2q+1)(1-r^2))$ by exact rational arithmetic. The
arctangent series and geometric-tail argument in
[[lem-range-reduced-exp-log-and-arctan-series-enclosures]]
gives $\arctan r\in[A_q(r)-E_q(r),A_q(r)+E_q(r)]$. Combine these intervals
as $16\arctan(1/5)-4\arctan(1/239)$, then round the resulting endpoints
outward to the selected format at precision $p$. The Machin identity in
[[lem-trigonometric-identities-machin-and-range-reduction]] proves $\pi\in P_q$. If this conversion is non-finite,
skip this stage for the selected Fresnel or erf target. For the Gauss-series
target, omit $P_q$ and all square-root calls.

Only when $T=\operatorname{erf}$, call
[[alg-certified-elementary-range-evaluation]] on the one-node real DAG
$\sqrt{P_q}$ with the same exponent range and precision $p$, and truncation
index $q$. If it returns a finite interval $R_q$, continue only if
$\inf R_q>0$; otherwise skip this stage. This call encloses $\sqrt\pi$
by [[thm-real-elementary-range-enclosures]]. The $C,S$ branches use $P_q$
directly and do not call square root. For a complex rectangle
$B=X+iY$, write
$M(B)=\max(|\inf X|,|\sup X|)+\max(|\inf Y|,|\sup Y|)$; this rational
quantity bounds the modulus of every point in $B$.

At each stage $q=1,\ldots,\min(S_{\max},N_{\max},p_{\max})$, form the
following candidate for the selected target.

- For $C$, sum its defining terms $c_0,\ldots,c_{q-1}$ from
  [[def-fresnel-erf-and-hypergeometric-series]] by interval arithmetic,
  using $P_q/2$ for $\pi/2$. Let $c_q$ be the first omitted term and set
  $$r_C=\frac{(\sup P_q)^2 M(z)^4}{4(2q+1)(2q+2)}.$$
  If $r_C<1$, enlarge the partial-sum rectangle in both coordinates by
  $M(c_q)/(1-r_C)$; otherwise skip this stage.
- For $S$, sum its first $q$ defining terms using $P_q/2$, let $s_q$
  be the first omitted term, and set
  $$r_S=\frac{(\sup P_q)^2 M(z)^4}{4(2q+2)(2q+3)}.$$
  If $r_S<1$, enlarge the partial-sum rectangle in both coordinates by
  $M(s_q)/(1-r_S)$; otherwise skip this stage.
- For erf, use the interval $2/R_q$ from the single square-root call above
  for $2/\sqrt\pi$,
  sum the first $q$ defining terms, and let $e_q$ be the first omitted
  term. Set $r_E=M(z)^2/(q+1)$. If $r_E<1$, enlarge the partial-sum
  rectangle in both coordinates by $M(e_q)/(1-r_E)$; otherwise skip this
  stage.
- For the Gauss series, compute its terms by $h_0=1$ and
  $$h_{k+1}=h_k\,z\,\frac{(a+k)(b+k)}{(c+k)(k+1)}$$
  using outward interval operations. The exact $c+k$ is nonzero by the
  domain check, but its rounded enclosure may contain zero; in that case
  skip this candidate before division. If $a$ or $b$ is a nonpositive integer, let $L$ be one
  more than the smaller absolute value of those nonpositive integer
  parameters. If $L\le q$, sum exactly through $h_{L-1}$ and use zero
  tail. Otherwise put
  $$A=|\Re a|+|\Im a|,\quad B=|\Re b|+|\Im b|,\quad C_0=|\Re c|+|\Im c|,\quad Z_0=|\Re z|+|\Im z|,$$
  If $q\le C_0$, skip this stage before forming a quotient. Otherwise set
  $$r_H=Z_0\frac{(1+A/q)(1+B/q)}{1-C_0/q}.$$
  If $r_H<1$, sum $h_0,\ldots,h_{q-1}$, let $h_q$
  be the first omitted term, and enlarge the partial-sum rectangle in both
  coordinates by $M(h_q)/(1-r_H)$; otherwise skip this stage. The geometric
  bound in [[lem-gauss-hypergeometric-series-geometric-tail]] applies because
  $A,B,C_0,Z_0$ dominate the corresponding complex moduli.

Round each candidate's final endpoints outward to precision $p$. Return
success at the first stage where its radius is at most $\varepsilon_a$.
If relative tolerance was requested, set relative_certified to true exactly
when zero is excluded and the contract's relative-radius inequality holds;
failure of that relative test does not prevent absolute success. If no stage
produces a passing candidate, return inconclusive. The finite stage loop and
the finite elementary-range calls define the procedure completely.
