---
id: alg-certified-airy-evaluation
kind: algorithm
title: Finite certified Airy power-series evaluation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-certified-evaluation-result-contract, def-airy-initial-value-series, lem-airy-series-coefficient-recurrence-and-tail, alg-certified-gamma-loggamma-evaluation, thm-certified-gamma-loggamma-enclosures, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound, alg-certified-elementary-range-evaluation, thm-real-elementary-range-enclosures, thm-complex-elementary-range-enclosures, def-dyadic-floating-point-format-and-directed-rounding, lem-directed-dyadic-rounding-enclosure-and-error, def-real-elementary-functions-and-domains]
justified_by: [thm-certified-airy-enclosures]
forward_refs: []
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: DLMF, §9.17(i), numerical evaluation
      url: https://dlmf.nist.gov/9.17
    - title: DLMF, §9.4, Airy Maclaurin series
      url: https://dlmf.nist.gov/9.4
    - title: DLMF, §§9.2(ii), 9.4, and 9.17(i)
      url: https://dlmf.nist.gov/9.2
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §2
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 6
---

## Definition

Inputs are an exact dyadic complex number $z$, a target label
$\operatorname{Ai}$ or $\operatorname{Bi}$, positive rational absolute
tolerance $\varepsilon_a$, optional positive rational relative tolerance
$\varepsilon_r$, a fixed exponent range $(e_{\min},e_{\max})$, and finite
positive integer caps $S_{\max},K_{\max},p_{\max},W$, with $p_{\max}\ge2$.
Reject an invalid target, nonpositive tolerance, invalid cap, or
$e_{\min}>e_{\max}$ with domain. The caps bound stages,
terms per residue class, final dyadic precision, and this procedure's exact
interval operations and subroutine calls. For stage $q$, use $K=q$,
precision $p=\max(2,\min(q,p_{\max}))$, and elementary-range truncation $q$;
run stages $q=1,\ldots,\min(S_{\max},K_{\max},p_{\max})$.

All arithmetic uses [[def-outward-rounded-interval-and-ball-operations]].
Charge every exact arithmetic operation, range-evaluator node operation,
term, rounding, and loop update to the shared counter $W$. Return
inconclusive before any local operation would exceed $W$; interrupt a nested
subroutine before its next operation would exceed the remaining budget. When
nested, charge every Gamma-child operation directly to the same parent counter.
If a final
endpoint overflows, return range. A non-finite subroutine result makes the
current stage unavailable; later stages may still be tried. Other statuses
are those of [[def-certified-evaluation-result-contract]].

At stage $q$, outward-round the rational points $1/3$ and $2/3$ to
dyadic intervals $G_r$ at precision $p$. For each $r\in\{1/3,2/3\}$, charge the
child-call operation to the parent counter. If no parent work unit remains,
return inconclusive; otherwise pass the positive remaining budget as the
child's work cap and call
[[alg-certified-gamma-loggamma-evaluation]] with target $\Gamma$ on the
complex rectangle $G_r+i[0,0]$, absolute tolerance $2^{-q}$, no relative
tolerance, the same exponent range, fixed elementary truncation $q$,
base format precision $p$, and precision cap $p$. Debit every operation
performed by the Gamma child to the shared counter. A
success output rectangle encloses
$\Gamma(r)$, since $r\in G_r$; if either call is not successful or its
rectangle contains zero, skip this stage. A failed rational-to-dyadic conversion also makes the stage unavailable.

For $s\in\{1/6,1/3,2/3\}$, outward-round the exact rational $s$ to a
dyadic interval $S_{s,p}$, then call
[[alg-certified-elementary-range-evaluation]] on the real expression DAG
$\exp(S_{s,p}\log 3)$, with the same exponent range, precision $p$, and
truncation $q$. These calls enclose $3^s$ by
[[thm-real-elementary-range-enclosures]]. If a required call is not finite,
skip this stage. Embed each real power interval $X$ as the complex rectangle $X+i[0,0]$, then combine it with the Gamma rectangles by outward complex arithmetic
to enclose the two initial coefficients
$$(a_0,a_1)=\left(\frac{1}{3^{2/3}\Gamma(2/3)}, -\frac{1}{3^{1/3}\Gamma(1/3)}\right)$$
for Ai, or
$$(b_0,b_1)=\left(\frac{1}{3^{1/6}\Gamma(2/3)}, \frac{3^{1/6}}{\Gamma(1/3)}\right)$$
for Bi. If any divisor rectangle contains zero or an arithmetic operation is non-finite, skip this stage.

Put $R=|\Re z|+|\Im z|$, an exact rational upper bound for $|z|$.
For each residue $r=0,1$, initialize $t_{r,0}=c_r z^r$ using the
selected pair of initial coefficient intervals, and compute
$t_{r,j+1}=t_{r,j}z^3/((k+3)(k+2))$, where $k=r+3j$. Sum
$t_{r,0},\ldots,t_{r,q-1}$ and compute the first omitted term
$t_{r,q}$. Put $k_r=r+3q$ and
$$\rho_r=\frac{R^3}{(k_r+3)(k_r+2)}.$$
If either $\rho_r\ge1$, skip the stage. Otherwise enlarge the sum of both
partial rectangles in each coordinate by
$$\frac{M(t_{0,q})}{1-\rho_0}+\frac{M(t_{1,q})}{1-\rho_1},$$
where $M(X+iY)=\max(|\inf X|,|\sup X|)
+\max(|\inf Y|,|\sup Y|)$. The $c_2=0$ residue class vanishes identically.
The ratio and tail lemma [[lem-airy-series-coefficient-recurrence-and-tail]]
therefore makes the enlarged rectangle a containing enclosure of the selected
Airy value.

Round the final rectangle outward to precision $p$. Return success at the
first stage whose radius is at most $\varepsilon_a$. Set relative_certified
to true exactly when relative tolerance was requested, zero is excluded, and
the contract's relative-radius test passes; a failed relative test does not
prevent absolute success. If no stage succeeds before its caps, return
inconclusive. The stage loop and all subroutine calls have finite caps, so the
procedure has no unbounded retry.
