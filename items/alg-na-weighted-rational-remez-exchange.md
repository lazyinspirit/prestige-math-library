---
id: alg-na-weighted-rational-remez-exchange
kind: algorithm
title: "Finite-budget weighted rational Remez exchange with defect status"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-na-weighted-rational-minimax-family
  - thm-na-weighted-rational-alternation-characterization
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Silviu-Ioan Filip, Yuji Nakatsukasa, Lloyd N. Trefethen, and Bernhard Beckermann, Rational Minimax Approximation via Adaptive Barycentric Representations, §§3–4.1"
      url: "https://people.maths.ox.ac.uk/trefethen/minimax_published.pdf"
      locator: "pp. A2432–A2436, rational Remez equations, normalization, and solve branches."
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Chapter 24"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/RAP_22/TRE13.pdf"
      locator: "Printed pp. 199–207, rational defect and alternation."
verification:
  precheck: n/a
---

## Definition

**Inputs.** A nondegenerate interval $I=[a,b]$, degrees $m,n\ge0$, continuous
real target $f$, strictly positive continuous weight $w$, a finite exchange
integer budget $B\in\mathbb N_0$, an initial reference
$X=(x_0,\ldots,x_{m+n+1})$ satisfying
$a\leq x_0<\cdots<x_{m+n+1}\leq b$, an
exact rational alternation-solver procedure, and an exact weighted-extrema
oracle.

The alternation solver is an explicit input procedure. On a reference
$X=(x_0,\ldots,x_{m+n+1})$, it solves the nonlinear equations
$$w(x_i)\bigl(f(x_i)-p(x_i)/q(x_i)\bigr)=(-1)^i\lambda$$
with $p,q$ coprime, $\deg p\le m$, $\deg q\le n$, $q>0$ on $I$, and
$\|q\|_{\mathrm{coef},2}=1$. It reports one of: a unique candidate with
defect $d=0$ and its solved level $\lambda$; an exact defective candidate
with its computed $d>0$ and solved level $\lambda$; singular or nonunique
system; no normal solution; or inconclusive. The procedure does not assume
that this nonlinear solve always succeeds.

The weighted-extrema oracle for a returned candidate $r=p/q$ reports one of:

- alternation$(E,Y)$ only when $E=\|w(f-r)\|_{\infty,I}$ and $Y$ consists of
  $N_{m,n}(r)+2$ ordered distinct points in $I$ with weighted residuals
  $\sigma(-1)^iE$;
- maximum$(E,x)$ only when $x\in I$, $E=\|w(f-r)\|_{\infty,I}$ and
  $|w(x)(f(x)-r(x))|=E$; or
- inconclusive.

**Procedure.** For $k=0,\ldots,B$, call the alternation solver on the current
reference. Return its singular, no-normal-solution, or inconclusive status
unchanged. If it returns a defective candidate, return
defective$(d,N_{m,n}(r))$ immediately; do not apply the normal
$m+n+2$-point count. For a normal candidate $(r,\lambda)$, query the
weighted-extrema oracle. If it returns inconclusive, return
oracle-inconclusive. A response alternation$(0,Y)$ or maximum$(0,x)$
returns exact$(r)$, since either certifies zero weighted error. An
alternation response with $E>0$ returns certified$(r,E,Y)$, with optimality supplied by
[[thm-na-weighted-rational-alternation-characterization]]. For maximum$(E,x)$
with $E=|\lambda|$, the current reference itself is an exact global
alternation certificate, so return certified$(r,E,X)$. If $\lambda=0<E$,
return zero-level-no-exchange. If $k=B$, return budget-exhausted before
attempting an exchange. Otherwise $E>|\lambda|$;
exchange the returned maximum point $x$ for the smallest reference node $x_i$
whose expected sign $\operatorname{sgn}(\lambda)(-1)^i$ matches the sign of
$w(x)(f(x)-r(x))$ and for which replacing $x_i$ by $x$ preserves strict
ordering. If no such index exists, return no-valid-exchange. After an
exchange, continue to the next iteration.

**Outputs.** The procedure returns an exact minimax certificate, an exact
zero-error candidate, or an explicit defect, singularity, no-solution,
oracle, exchange, or budget status. It claims no existence of a successful
nonlinear solve and no iterative convergence.
