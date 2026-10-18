---
id: lem-square-root-kalman-householder-error-rational-envelope
kind: lemma
title: "An explicit rational envelope for the scaled Householder QR error"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - lem-scaled-householder-step-meets-local-backward-error-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Kevin S. Tracy, A Square-Root Kalman Filter Using Only QR Decompositions"
      url: "https://arxiv.org/pdf/2208.06452"
      locator: "§§2–3.4, square-root QR context; the rational envelope here is derived from the exact local coefficient in [F1]."
    - title: "M. A. Salzmann, Some Aspects of Kalman Filtering, Technical Report 140"
      url: "https://gge.ext.unb.ca/Pubs/TR140.pdf"
      locator: "§3.3.1, square-root covariance factors; the explicit rational coefficient is proved locally, not quoted from the report."
verification:
  precheck: pending
---

## Statement

Let $q\ge n\ge1$, $u>0$, and let $\kappa_q$ be the local scaled-Householder
coefficient of [[lem-scaled-householder-step-meets-local-backward-error-premise]]
at active row dimension $q$. Set
$$\beta_{q,n}=(1+\kappa_q)^n-1,\qquad C_{q,n}=200qn.$$
If $C_{q,n}u<1$, then
$$\beta_{q,n}\le\eta_{q,n}:=\frac{C_{q,n}u}{1-C_{q,n}u}.$$
Thus the QR backward-error factor can be bounded by the stated rational
dimension-dependent expression in this precision range.

## Facts & Assumptions

**Given:** Integers $q\ge n\ge1$, $u>0$, and $200qnu<1$.

[F1] For active row dimension $r$, the local constants are
$$e_r=(1+u)^{r/2+3}-1,\quad d_r=e_r+u(2+e_r),\quad a_r=\frac{1+u}{(1-u)^r}-1,\quad g_r=\frac{ru}{1-ru},$$
$$c_r=2\bigl((1+a_r)(1+u)^2(1+g_r)-1\bigr),\qquad \kappa_r=\max\{e_r+8d_r,(1+u)c_r+3u\}.$$
[[lem-scaled-householder-step-meets-local-backward-error-premise]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Put $x=qu$. The precision hypothesis gives $u\le1/(200q)$ and
$0<x<1/200$. Since $q/2+3\le7q/2$, set $s=(q/2+3)u\le7x/2<7/400$.
The power series gives $1+u\le e^u$ and, for $0\le z<1$,
$e^z-1=\sum_{j\ge1}z^j/j!\le z/(1-z)$. Therefore
$$e_q\le e^s-1\le\frac{s}{1-s} \le\frac{1400}{393}x<\frac{18}{5}x.$$
Also $ue_q\le(9/500)u$, so
$$d_q=e_q+2u+ue_q \le\frac{18}{5}x+\frac{1009}{500}u \le\frac{2809}{500}x<\frac{57}{10}x.$$
Hence the first branch in [F1] satisfies
$e_q+8d_q<(18/5+8\cdot57/10)x<50x$. [F1, given, algebra]

1.2 Bernoulli's inequality gives $(1-u)^q\ge1-qu=1-x$; for integer $q$,
this follows by induction from
$(1-u)(1-qu)=1-(q+1)u+qu^2\ge1-(q+1)u$.
Since $u\le1/200$ and $x\le1/200$,
$(1+u)^3\le1+4u$ by expansion, and
$(1-x)^{-2}\le1+3x$ because
$(1+3x)(1-x)^2-1=x(1-5x+3x^2)\ge0$. Thus
$$(1+a_q)(1+u)^2(1+g_q) \le\frac{(1+u)^3}{(1-x)^2} \le(1+4u)(1+3x).$$
As $u\le x$ and $u\le1/200$, the last expression minus $1$ is at most
$4x+3x+12ux\le(7+3/50)x<8x$. Consequently $c_q<16x$ and
$(1+u)c_q+3u<(16+16/200+3)x<20x$. Both branches in [F1] are therefore
bounded by $50x$, so $\kappa_q\le50qu$. [F1, given, algebra]

2.1 Put $t=C_{q,n}u<1$ and $y=n\kappa_q$. Step 1.2 gives
$0\le y\le50qnu=t/4<1/4$. Since $(1+\kappa_q)^n\le e^y$ and
$e^y-1\le y/(1-y)$ by the same power-series estimate as in step 1.1,
$$\beta_{q,n}\le\frac{y}{1-y} \le\frac{t/4}{1-t/4}=\frac{t}{4-t} \le\frac{t}{1-t}=\eta_{q,n}.$$
This proves the stated rational envelope. [F1, step 1.1, step 1.2, given, algebra] ∎
