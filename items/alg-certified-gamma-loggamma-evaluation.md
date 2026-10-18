---
id: alg-certified-gamma-loggamma-evaluation
kind: algorithm
title: Finite certified evaluation of Gamma and a continued log-Gamma branch
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-certified-evaluation-result-contract, def-loggamma-right-halfplane-branch, def-loggamma-slit-plane-branch, lem-loggamma-series-convergence-and-gamma-identity, lem-loggamma-product-tail-bound, lem-loggamma-shift-independent, lem-sectorial-stirling-explicit-remainder-bound, lem-explicit-euler-constant-enclosure, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound, alg-certified-elementary-range-evaluation, thm-real-elementary-range-enclosures, thm-complex-elementary-range-enclosures, lem-trigonometric-identities-machin-and-range-reduction, lem-range-reduced-exp-log-and-arctan-series-enclosures]
justified_by: [thm-certified-gamma-loggamma-enclosures]
forward_refs: []
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: DLMF, §5.11, asymptotic expansions
      url: https://dlmf.nist.gov/5.11
    - title: DLMF, §5.5, functional relations
      url: https://dlmf.nist.gov/5.5
    - title: DLMF, §§5.5, 5.8, and 5.11
      url: https://dlmf.nist.gov/5.8
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 3
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 4
---

## Definition

Inputs are a finite dyadic complex rectangle $Z$, a target label $\Gamma$ or
$\ell$, positive exact rational absolute tolerance $\varepsilon_a$,
optional positive exact rational relative tolerance $\varepsilon_r$, a fixed
dyadic format precision $p_0\ge2$ and exponent range
$(e_{\min},e_{\max})$, fixed integer elementary truncation index $K\ge1$,
finite positive integer work cap $W$, and integer precision cap $P\ge p_0$.
The target
$\ell$ is the continued
branch in [[def-loggamma-slit-plane-branch]]. Reject an invalid target, empty or non-finite rectangle, invalid cap,
tolerance, $e_{\min}>e_{\max}$, or
$Z\not\subset\mathbb C\setminus(-\infty,0]$ by returning
domain. The exact rectangle test is: either the imaginary interval omits
zero, or the real interval has strictly positive lower endpoint. Reject a
selected shift $m>W$ with inconclusive. For stages $q=1,\ldots,P$, use
precision $p=\max(p_0,q)$, harmonic cutoff $M=\min(q,W)$, product cutoff
$N=\min(q,W)$, and the fixed elementary truncation index $K$ for every
range call. Output statuses are those of
[[def-certified-evaluation-result-contract]].

Use [[def-outward-rounded-interval-and-ball-operations]] for interval
arithmetic. Count every exact rational or interval operation, series term,
elementary-DAG node operation, rounding, and loop update against the shared
counter $W$. If the procedure is called by another evaluator, charge these
same primitive operations directly to that caller's shared counter, so the
caller can debit the actual child work; the local cap $W$ remains in force.
Before any operation would exceed either remaining cap, return inconclusive.
Run nested elementary-range calls under that counter and interrupt a subcall
before its next operation would exceed the remaining budget. A non-finite
range result makes the current candidate unavailable. Any other non-finite arithmetic result also makes its candidate unavailable; no partial result is retained. Final output overflow
returns range.

Choose
$$m=\max\!\left(0,\left\lfloor-\inf\Re Z\right\rfloor+1\right),$$
which is the least integer $m\ge0$ for which $\inf\Re Z+m>0$. Compute
this exactly from the rational endpoint; if $m>W$, return inconclusive
before forming the shift. Put $W_Z=Z+m$.
Before every elementary-range call, round each rational interval input
outward to the stage dyadic format; a conversion overflow makes that candidate
unavailable. A rounded Log input must still avoid the cut; otherwise its candidate is unavailable, rather than declaring the valid original input outside the domain. Embed a real interval $X$ explicitly as $X+i[0,0]$ whenever it participates in a complex expression; real and complex DAG nodes retain their declared types. All elementary-range calls below use
[[alg-certified-elementary-range-evaluation]] with the selected format and
fixed truncation $K$; its soundness for finite real and complex results is
given by
[[thm-real-elementary-range-enclosures]] and
[[thm-complex-elementary-range-enclosures]].

For stage $q=1,\ldots,P$, form a dyadic $P_q$ containing $\pi$:
for $r\in\{1/5,1/239\}$, compute exactly
$A_q(r)=\sum_{k=0}^{q-1}(-1)^kr^{2k+1}/(2k+1)$ and
$E_q(r)=r^{2q+1}/((2q+1)(1-r^2))$, combine
$\arctan r\in[A_q(r)-E_q(r),A_q(r)+E_q(r)]$ by the Machin identity, and
round outward to the selected format at precision $p$. The arctangent
series and its geometric-tail argument are in
[[lem-range-reduced-exp-log-and-arctan-series-enclosures]], and the Machin
identity is in [[lem-trigonometric-identities-machin-and-range-reduction]]. If the conversion
is non-finite or $\inf P_q\le0$, the Stirling candidate is unavailable for
this stage; still attempt the product candidate. Let
$a_W=\inf\Re W_Z>0$ and
$R_W=\max(|\inf\Re W_Z|,|\sup\Re W_Z|)
+\max(|\inf\Im W_Z|,|\sup\Im W_Z|)$; $R_W$ is an exact rational upper
bound for $|w|$ on $W_Z$.

For this stage, call the elementary-range algorithm on the principal-log node
for each $Z+j$, $j=0,\ldots,m-1$. Translation by these real integers
preserves avoidance of the cut for an input rectangle wholly in the slit
plane; if the exact branch-domain check fails, return domain. Add the finite
log rectangles to form the shift sum $L_Z$. If any shift-log call is non-finite, discard this whole stage, since both candidates require that sum. When $m=0$, set $L_Z=0$.

Construct the product candidate when $N>2R_W$. Call the elementary-range
algorithm for the real node $\log M$ to get an enclosure $G_M=[g_-,g_+]$ of
$\log M$, and form the outward-rounded Euler-constant interval
$[H_M-g_+-1/M,\ H_M-g_-]$, where $H_M=\sum_{k=1}^M1/k$ exactly. Call
the complex principal-log node on $W_Z$ and on each $1+W_Z/k$ for
$1\le k\le N$. All these rectangles lie in the principal-log domain since
$\Re W_Z>0$. Form
$$Q_N=-\operatorname{Log}(W_Z)-\gamma_E W_Z+ \sum_{k=1}^N\left(\frac{W_Z}{k}-\operatorname{Log}(1+W_Z/k)\right)$$
by interval arithmetic, and enlarge each coordinate by an outward upper bound for
$$T_N=\frac{R_W^2}{2N(1-R_W/(N+1))}.$$
The tail lemma [[lem-loggamma-product-tail-bound]] proves that this is an
enclosure of $\ell_+(W_Z)$, uniformly on the whole rectangle. Subtract
$L_Z$ to get the shifted product candidate for $\ell(Z)$. If $N\le2R_W$
or a required call is non-finite, this candidate is unavailable at this stage.

Construct the Stirling candidate only when $P_q$ is finite and has positive
lower endpoint. Call the complex principal-log node on $W_Z$, and the real
logarithm node on $2P_q$. Form
$$S_Z=(W_Z-\tfrac12)\operatorname{Log}(W_Z)-W_Z+ \tfrac12\log(2\pi)-L_Z$$
by interval arithmetic and enlarge each coordinate by an outward upper bound for $1/(4a_W)$.
The sectorial remainder lemma [[lem-sectorial-stirling-explicit-remainder-bound]]
proves this is an enclosure of $\ell(Z)$. If a required call is non-finite,
this candidate is unavailable at this stage.

If both log candidates are available, intersect them when the intersection is
nonempty; if empty, discard the stage. If only one is available, select it.
For target $\ell$, use this rectangle as the output candidate. For target
$\Gamma$, call the complex exponential node on the selected rectangle and
use its finite output rectangle. Return success at the first stage whose
candidate radius is at most $\varepsilon_a$. Set relative_certified to true
exactly when relative tolerance was requested, zero is excluded, and the
contract's relative-radius test passes; a failed relative test does not
prevent absolute success. If no stage succeeds before its caps, return
inconclusive.
