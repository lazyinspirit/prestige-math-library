---
id: thm-age-structured-renewal-cutoff-tail-and-outflow-bound
kind: theorem
title: Age-cutoff survival, outflow and infinite-age tail bounds
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - def-age-structured-renewal-transport-problem
  - thm-age-structured-renewal-characteristic-solution
  - thm-age-structured-renewal-semigroup-growth-and-data-stability
  - thm-age-structured-renewal-finite-cutoff-characteristic-solution
  - alg-age-structured-renewal-upwind-finite-volume
  - thm-age-structured-renewal-smooth-first-order-convergence
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
axiom_base: No choice axiom is used; the bounds follow by splitting the initial density into cohorts.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Benoît Perthame, Introduction to Structured Equations in Biology, full lecture notes"
      url: "https://www.math.cmu.edu/cna/LectureNotesFiles/Perthame.pdf"
      locator: "Chapter 1, §1.1.2, PDF pp. 4–5, and Chapter 2, §2.3, PDF pp. 17–20: inherited cohorts, survival and finite-cutoff outflow."
---

## Statement

Let $A>T$ and let $n_0\ge0$ be integrable. For an initial cohort of age $a$, its survival through duration $s$ satisfies

$$e^{-\|\mu\|_\infty s}\le S(a,s)\le e^{-\mu_*s},\qquad \mu_*:=\operatorname*{ess\,inf}_{r\ge0}\mu(r).$$

No cohort born during $[0,T]$ reaches age $A$. The exact number of initial individuals that exits through age $A$ by time $t\le T$ is

$$O_A(t)=\int_{A-t}^{A}n_0(a)S(a,A-a)\,da\le\int_{A-T}^{\infty}n_0(a)\,da.$$

Let $n^A$ be the finite-age solution from [[thm-age-structured-renewal-finite-cutoff-characteristic-solution]] with initial data $n_0^A=n_0\mathbf 1_{[0,A]}$, extended by zero above $A$. Then

$$\sup_{0\le t\le T}\|n(t)-n^A(t)\|_1\le2e^{\beta_\infty T}\int_{A-T}^{\infty}n_0(a)\,da.$$

Under the smooth discretization hypotheses of [[thm-age-structured-renewal-smooth-first-order-convergence]], let $u_h^k$ be its piecewise-constant reconstruction, extended by zero above $A$. At every time level,

$$\|u_h^k-n(t_k,\cdot)\|_1\le2e^{\beta_\infty T}\int_{A-T}^{\infty}n_0(a)\,da+C_T(\Delta a+\Delta t+\epsilon_Q).$$

The cutoff term and the mesh/time/quadrature term are separately displayed.

## Facts & Assumptions

**Given:** The infinite-age model and mild solution from [[def-age-structured-renewal-transport-problem]] and [[thm-age-structured-renewal-characteristic-solution]], with nonnegative initial density and $A>T$.

[F1] [[def-age-structured-renewal-transport-problem]]: a cohort of age $a$ follows $a(s)=a+s$ and survives for duration $s$ by $S(a,s)$.

[F2] [[thm-age-structured-renewal-characteristic-solution]]: the infinite-age mild solution is unique and is given by characteristics and its birth-rate Volterra equation.

[F3] [[thm-age-structured-renewal-finite-cutoff-characteristic-solution]]: the absorbing finite-age solution is unique and has mass at most $e^{\beta_\infty t}$ times its initial mass.

[F4] [[thm-age-structured-renewal-semigroup-growth-and-data-stability]]: infinite-age solutions with the same rates differ in $L^1$ by at most $e^{\beta_\infty t}$ times the difference in initial data.

[F5] [[thm-age-structured-renewal-smooth-first-order-convergence]]: for the exact finite-age solution, the numerical cell-mass error is bounded separately by $C_T(\Delta a+\Delta t+\epsilon_Q)$.

## Proof

1.1 For an initial cohort at age $a$, the survival factor is the exponential of minus the integrated mortality along $a(s)=a+s$ by [F1]. Since $\mu_*\le\mu(r)\le\|\mu\|_\infty$ almost everywhere, integrating these inequalities over $[a,a+s]$ and exponentiating proves the two survival bounds. [given, F1, algebra]

2.1 A newborn has age at most $t\le T<A$ by time $t$, so it cannot contribute to outflow at $A$. An initial individual of age $a$ exits by time $t$ exactly when $A-t\le a\le A$, and its survival to the exit age is $S(a,A-a)$. Integrating over those initial ages gives the formula for $O_A(t)$; using $S\le1$ and $A-t\ge A-T$ gives the stated upper bound. [given, step 1.1, algebra]

3.1 Split $n_0=n_0\mathbf 1_{[0,A-T]}+n_0\mathbf 1_{(A-T,\infty)}$. By linearity of the Volterra equations in [F2] and [F3], it suffices to compare the evolutions of these two parts. Every initial cohort in the first part remains below age $A$ through time $T$, and its newborn descendants have age at most $T<A$; the characteristic formulas therefore make the infinite-age and finite-age evolutions identical for this part. The infinite-age evolution of the second part has mass at most $e^{\beta_\infty T}\int_{A-T}^\infty n_0$ by [F4]. The finite-age model starts this part only with its restriction to $[0,A]$, whose mass is no larger than the same tail; its mass is at most that same exponential factor by [F3]. The triangle inequality gives the factor-two bound in the Statement. [given, F2, F3, F4, step 2.1, algebra]

4.1 Under the smooth hypotheses of [F5], the piecewise-constant reconstruction differs in $L^1$ from the finite-age solution by at most $C_T(\Delta a+\Delta t+\epsilon_Q)$ at each time level. Add this to the infinite-versus-cutoff error from step 3.1 by the triangle inequality. This is the displayed fully discrete bound, with the mesh/time/quadrature and age-tail contributions separate. [F5, step 3.1, algebra] ∎

