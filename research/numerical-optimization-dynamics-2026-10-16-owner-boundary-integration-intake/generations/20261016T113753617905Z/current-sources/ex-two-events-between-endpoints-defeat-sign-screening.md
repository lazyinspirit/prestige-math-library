---
id: ex-two-events-between-endpoints-defeat-sign-screening
kind: example
title: "Two guard crossings between endpoints defeat sign-only screening"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 11
deps:
  - def-hybrid-mode-guard-reset-system
  - alg-safeguarded-hybrid-event-location-and-restart
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Joel M. Esposito, Vijay Kumar, and George J. Pappas, Accurate Event Detection for Simulating Hybrid Systems, HSCC 2001, pp. 204–217"
      url: "https://citeseerx.ist.psu.edu/document?doi=4e069deb655ea94f14b16e764dd30aaf3f7f5b11&repid=rep1&type=pdf"
---

## Example

On $[0,1]$, let an initial mode have $x'=1$ and one outgoing transition with time-dependent guard $g(t,x)=(t-1/3)(t-2/3)$, positive crossing orientation, and reset $R(t,x)=0$ into a terminal mode with $x'=0$. The initial state is $x(0)=0$. The exact guard along the mode is $h(t)=g(t,x(t))$.

## Facts & Assumptions

**Given:** The smooth-mode oriented-event convention and the safeguarded locator's complete root-isolation and direction-classification rule.

[F1] [[def-hybrid-mode-guard-reset-system]]: an event occurs at an oriented guard crossing; its crossing direction is the sign of the guard derivative along the mode.

[F2] [[alg-safeguarded-hybrid-event-location-and-restart]]: the locator isolates all roots on the trial interval, classifies each certified root by derivative sign, and reports no event only after complete isolation with no enabled root.

## Verification

1.1 The trajectory is $x(t)=t$, but the guard is independent of $x$, so $h(t)=(t-1/3)(t-2/3)$. Its endpoint values are $h(0)=h(1)=2/9>0$. A rule that checks only endpoint signs therefore reports no crossing. The roots $1/3$ and $2/3$ are not dyadic, so neither lies on a midpoint boundary of the isolator's dyadic bisection of $[0,1]$. [given, F1, algebra]

2.1 The two roots are $1/3$ and $2/3$, and $h'(t)=2t-1$. Thus $h'(1/3)=-1/3$ is a downward crossing while $h'(2/3)=1/3$ is an upward crossing. Under the declared positive orientation, the first root is nontriggering and the second is enabled. [given, F1, step 1.1, algebra]

3.1 With exact polynomial range and derivative enclosures and a finite box budget sufficient for a complete result, the interval isolator in [F2] finds both roots and classifies their derivative signs. It cannot certify `no event`, because the root at $2/3$ is enabled and is the earliest enabled event. Thus equal endpoint signs do not justify an event-absence conclusion, while complete root isolation and orientation classification do. [given, F1, F2, step 2.1] ∎
