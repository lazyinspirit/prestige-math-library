---
id: cex-pathwise-riemann-stieltjes-integration-does-not-construct-the-brownian-ito-integral
kind: counterexample
title: "Bounded-variation Riemann-Stieltjes theory does not construct the Brownian Ito integral"
status: published
origin: pipeline
deps: [cor-brownian-paths-have-infinite-total-variation-on-every-interval, def-bounded-variation-and-total-variation, def-partition-and-refinement, thm-riemann-stieltjes-existence-continuous-bv, thm-uniform-brownian-quadratic-variation-process-on-dyadic-meshes, def-quadratic-variation-along-a-partition-sequence, def-brownian-motion, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 2.8"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
    - title: "Aad van der Vaart, Stochastic Integration and Differential Equations, Section 5.1"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
verification:
  audited: 2026-09-22
---

## Statement refuted

The inference "the pathwise Riemann--Stieltjes construction for a
bounded-variation integrator defines the Brownian Ito integral
$\int_0^TH\,dB$" is false. Almost surely, Brownian paths have infinite total
variation on every nondegenerate compact interval, so the hypothesis of the
Riemann--Stieltjes existence theorem for every continuous integrand fails;
and for the explicit integrand $f(x)=x$, $g=B$, the Riemann--Stieltjes sums
along dyadic partitions do not converge to a common limit, because the
left-endpoint rule gives $\tfrac12(B_t^2-t)$ while the right-endpoint rule
gives $\tfrac12(B_t^2+t)$. The counterexample refutes only the bounded-variation
construction; it does not assert that no pathwise integral of any other kind
exists, and it does not claim that the Ito integral fails to exist.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$ [[def-brownian-motion]], $t>0$, the dyadic partitions $t_k=kt/2^n$ of $[0,t]$, and the integrand $f(x)=x$.

[F1] Almost surely, on every nondegenerate compact interval $[a,b]$ the variation sums of the Brownian path are unbounded, so the path is not of bounded variation there. [[cor-brownian-paths-have-infinite-total-variation-on-every-interval]] [[def-bounded-variation-and-total-variation]]

[F2] If the integrator $g$ has bounded variation on $[a,b]$ and the integrand $f$ is continuous there, then the Riemann--Stieltjes sums converge along partitions of mesh tending to $0$, independently of the evaluation points, to the Riemann--Stieltjes integral $\int_a^bf\,dg$. [[thm-riemann-stieltjes-existence-continuous-bv]] [[def-partition-and-refinement]]

[F3] Along the dyadic partitions of $[0,t]$, $\sum_k(B_{t_{k+1}}-B_{t_k})^2\to t$ uniformly almost surely, and the two telescoping identities $2\sum_kB_{t_k}\Delta_k=B_t^2-\sum_k\Delta_k^2$ and $2\sum_kB_{t_{k+1}}\Delta_k=B_t^2+\sum_k\Delta_k^2$ hold with $\Delta_k=B_{t_{k+1}}-B_{t_k}$. [[thm-uniform-brownian-quadratic-variation-process-on-dyadic-meshes]] [[def-quadratic-variation-along-a-partition-sequence]]

[F4] AC is declared for the ambient interfaces. [[def-axiom-of-choice]]

## Counterexample

1.1 By [F1] there is an event of probability one on which the Brownian path is of unbounded variation on every nondegenerate compact interval; on that event the hypothesis "$g$ has bounded variation" of [F2] fails for $g=B$ and every interval $[0,t]$ with $t>0$, so the Riemann--Stieltjes existence theorem for a general continuous integrand is not available pathwise. [F1, F2, given]

1.2 For the specific integrand $f(x)=x$ and the dyadic partitions, the two evaluation rules give the sums $L_n:=\sum_kB_{t_k}\Delta_k$ and $R_n:=\sum_kB_{t_{k+1}}\Delta_k$, whose telescoping identities [F3] express them as $L_n=\tfrac12(B_t^2-\sum_k\Delta_k^2)$ and $R_n=\tfrac12(B_t^2+\sum_k\Delta_k^2)$. [F3, given]

2.1 By the quadratic-variation limit of [F3], $L_n\to\tfrac12(B_t^2-t)$ and $R_n\to\tfrac12(B_t^2+t)$ almost surely; the two limits differ by $t>0$, so the Riemann--Stieltjes sums of $f\,dg$ with $g=B$ have no common limit along dyadic partitions and the pathwise Riemann--Stieltjes integral $\int_0^tB\,dB$ does not exist in that sense, even though the Ito integral does. [F3, step 1.2]

3.1 Consequently the bounded-variation construction cannot serve as the definition of the Brownian Ito integral: its central hypothesis fails almost surely on every nondegenerate interval [F1], and its conclusion fails explicitly for the witness $f(x)=x$, $g=B$ by the limit mismatch of step 2.1. The Ito integral of the same integrand exists and equals $\tfrac12(B_t^2-t)$ by the companion example page, so the failure is a failure of the pathwise construction, not of the stochastic integral. AC enters only through [F4]. [F1, step 2.1, F4, given] ∎

## Source notes

Lawler, Section 2.8, records that Brownian paths have infinite variation on every interval and that the ordinary bounded-variation theory therefore does not apply; van der Vaart, Section 5.1, states the same boundary at the start of the stochastic-integration construction. The left/right limit mismatch is the standard quadratic-variation computation, included so that the failure is witnessed by an explicit pair of evaluation rules rather than only by the failure of a hypothesis.
