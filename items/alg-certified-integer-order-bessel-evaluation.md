---
id: alg-certified-integer-order-bessel-evaluation
kind: algorithm
title: Finite certified evaluation of integer-order Bessel functions
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-certified-evaluation-result-contract, def-integer-order-bessel-series, def-bessel-complementary-recurrence-solution, lem-integer-order-bessel-series-tail, lem-integer-order-bessel-recurrences-and-ode, lem-bessel-integral-representations-and-scaled-range, lem-bessel-integral-midpoint-error, lem-scaled-modified-bessel-midpoint-error, lem-bessel-casoratian-invariant-positive, lem-finite-miller-terminal-error-identity, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound, alg-certified-elementary-range-evaluation, thm-real-elementary-range-enclosures, lem-trigonometric-identities-machin-and-range-reduction, lem-range-reduced-exp-log-and-arctan-series-enclosures, def-factorial-and-falling-factorial, lem-of-naturals-positive]
justified_by: [thm-certified-integer-order-bessel-enclosures]
forward_refs: []
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: DLMF, §10.9, integral representations
      url: https://dlmf.nist.gov/10.9
    - title: DLMF, §10.6, recurrence relations and derivatives
      url: https://dlmf.nist.gov/10.6
    - title: DLMF, §10.2, Bessel functions of the first kind
      url: https://dlmf.nist.gov/10.2
    - title: DLMF, §§10.2, 10.6, 10.9, 10.25, and 10.74(iii)
      url: https://dlmf.nist.gov/10.74
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 4
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 6
---

## Definition

Inputs are an integer order $n\ge0$, a target $J$ or scaled $I$, an exact
dyadic real argument $x$, positive rational absolute tolerance
$\varepsilon_a$, optional positive rational relative tolerance
$\varepsilon_r$, a fixed exponent range $(e_{\min},e_{\max})$, and finite
positive integer caps $S_{\max},K_{\max},M_{\max},N_{\max},p_{\max},W$, with
$p_{\max}\ge2$.
The caps bound stages, series terms, midpoint panels, Miller terminal index,
dyadic precision, and exact interval operations and subroutine calls. Run
stages $q=1,\ldots,\min(S_{\max},K_{\max},M_{\max},p_{\max})$, using precision
$p=\max(2,\min(q,p_{\max}))$ and elementary-range truncation $q$. Reject
$n<0$, invalid targets, nonpositive tolerances, invalid caps,
$e_{\min}>e_{\max}$, or $x<0$ for the scaled $I$ target with
domain. The scaled
target is always $e^{-x}I_n(x)$.

Use exact rational endpoint formulas for finite sums, recurrences, mesh
construction, and error bounds, with final endpoints rounded outward to
precision $p$. Charge every exact arithmetic operation, range-evaluator
node operation, term, rounding, and loop update to the shared counter $W$;
interrupt a nested elementary-range call with inconclusive before its next
operation would exceed the remaining budget. Factorials use
[[def-factorial-and-falling-factorial]]. Call
[[alg-certified-elementary-range-evaluation]] for the real sine, cosine, and
exponential ranges in the midpoint branches. Before each call, round its
rational input interval outward to the fixed dyadic format. Its finite outputs are sound by
[[thm-real-elementary-range-enclosures]]. Count each exact operation, term,
rounding, and subroutine call against $W$; if the next operation would
exceed $W$, return inconclusive. A non-finite elementary call makes that
branch unavailable. Final endpoint overflow returns range.

Before forming any stage constant, if the target is scaled $I$ and $x=0$,
use precision $p=p_{\max}$, form $[1,1]$ when $n=0$ and $[0,0]$ when $n\ge1$, and round its
endpoints outward to that format. If either conversion overflows,
return range. Otherwise apply the ordinary absolute-radius test to the rounded candidate and return `success` only when it passes; return `inconclusive` if it fails. The internal exact candidate has radius zero, but outward underflow may widen its stored enclosure. Set a successful output's relative flag by the usual contract test, so a zero value
receives no relative certificate. This branch does not call the
elementary-range procedure.

At stage $q$, compute an outward dyadic interval $P_q$ containing $\pi$
from the Machin identity in
[[lem-trigonometric-identities-machin-and-range-reduction]] and the
arctangent series and geometric-tail argument in
[[lem-range-reduced-exp-log-and-arctan-series-enclosures]]: for
$r=1/5,1/239$, use the $q$-term sum
$\sum_{k=0}^{q-1}(-1)^kr^{2k+1}/(2k+1)$ and tail bound
$r^{2q+1}/((2q+1)(1-r^2))$, combine by $16\arctan(1/5)-4\arctan(1/239)$,
and round outward to the selected format at precision $p$. If this
conversion is non-finite or $\inf P_q\le0$, midpoint candidates are
unavailable at this stage; the independent power-series or Miller branches may
still be attempted.

For a requested $J_n(x)$, first form a power-series candidate if possible.
For any order $r\ge0$, define the finite subroutine $\operatorname{SeriesJ}(r)$:
start
$a_0=(x/2)^r/(0!\,r!)$ and
$a_{k+1}=-a_kx^2/(4(k+1)(k+r+1))$; sum $a_0,\ldots,a_{q-1}$, and
compute $a_q$. Put
$$\rho_J=\frac{x^2}{4(q+1)(q+r+1)}.$$
If $\rho_J<1$, return the interval partial sum enlarged by
$|a_q|/(1-\rho_J)$; otherwise mark this series candidate unavailable.
The tail lemma [[lem-integer-order-bessel-series-tail]] proves each returned
interval contains $J_r(x)$.

For each requested target, also form its composite-midpoint candidate with
$m=q$ panels, $h=\pi/m$, and nodes $\theta_j=(j+\tfrac12)h$,
$j=0,\ldots,m-1$, using $P_q$ as the interval for $\pi$. For $J_n$,
call the elementary-range algorithm for $\sin(\theta_j)$, form
$n\theta_j-x\sin(\theta_j)$, and call it for the cosine of that interval.
Let $Q_m$ be the interval sum $h\sum_j\cos(n\theta_j-x\sin\theta_j)$ and
$$E_J=\frac{h_{\max}^2}{24}\bigl((n+|x|)^2+|x|\bigr), \qquad h_{\max}=\sup(P_q)/m.$$
The candidate is $Q_m/P_q+[-E_J,E_J]$.
For the scaled $I$ target with $x>0$, call the elementary algorithm for
$\cos(\theta_j)$, form
$-x(1-\cos(\theta_j))$, call it for the real exponential, and also call it
for $\cos(n\theta_j)$. Let $Q_m$ be $h$ times the sum of the resulting
product intervals and set
$$E_I=\frac{h_{\max}^2}{24}\bigl((x+n)^2+x\bigr).$$
The candidate is $Q_m/P_q+[-E_I,E_I]$. The exact midpoint error lemmas
[[lem-bessel-integral-midpoint-error]] and
[[lem-scaled-modified-bessel-midpoint-error]] prove these inclusions.

For a $J_n(x)$ Miller candidate, only try this branch when $x>0$ and
$N=n+q\le N_{\max}$. Obtain $\operatorname{SeriesJ}(r)$ for
$r=0,1,n,N+1$; if any is unavailable, skip the branch. Set
$D_0=-J_1$, $D_1=J_0$, and compute
$D_{j+1}=2jD_j/x-D_{j-1}$ for $j=1,\ldots,N$ by interval arithmetic.
Set $u_{N+1}=0,u_N=1$, and compute
$u_{j-1}=2ju_j/x-u_{j+1}$ for $j=N,\ldots,1$. Require the intervals for
$D_{N+1}$, $u_s$, $J_s$, and $J_s+q_MD_s$ below to exclude zero. Form
$q_M=-J_{N+1}/D_{N+1}$. In the fixed order $s=0,1$, whenever the tests
pass, form
$$\widehat J_n=\frac{J_su_n}{u_s},\qquad E_M=\frac{q_M(J_sD_n-J_nD_s)}{J_s+q_MD_s}, \qquad C_M=\widehat J_n-E_M.$$
The exact finite terminal-contamination identity
[[lem-finite-miller-terminal-error-identity]] proves that each $C_M$
contains $J_n(x)$. The Casoratian lemma
[[lem-bessel-casoratian-invariant-positive]] supplies the independent
recurrence pair and positive invariant required by that identity.

Collect every available sound candidate for the requested target. If more
than one is available, intersect them; if the intersection is empty, discard
this stage. Round the selected candidate outward to precision $p$. Return
success at the first stage whose radius is at most $\varepsilon_a$. Set
relative_certified to true exactly when relative tolerance was requested,
zero is excluded, and the contract's relative-radius test passes; failure of
that relative test does not prevent absolute success. If no stage succeeds
before the finite caps, return inconclusive. No branch uses a limit in the
Miller terminal index.
