---
id: thm-dyadic-square-root-bisection-encloses
kind: theorem
title: Dyadic square-root bisection gives outward endpoints
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [alg-dyadic-square-root-bisection, lem-directed-dyadic-rounding-enclosure-and-error, lem-nonnegative-square-root-exists-and-unique]
sources:
  references:
    - title: "Kearfott, Interval Computations: Introduction, Uses, and Resources, §1"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
    - title: "Rump, Verification methods: Rigorous results using floating-point arithmetic, §7"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Statement

For every nonnegative exact dyadic input $x$ and $n\ge1$, the exact dyadic
pair returned by [[alg-dyadic-square-root-bisection]] contains $\sqrt{x}$ and
has width $2^{\lfloor j/2\rfloor-n}$ when $x>0$, where $j$ is the exponent
selected by that algorithm. Storing the endpoints after outward rounding
preserves enclosure, although storage rounding may increase the width.
For fixed $n$, both exact endpoint functions are nondecreasing in $x\ge0$;
directed storage rounding preserves that monotonicity.

## Facts & Assumptions

**Given:** The exact integer comparison loop in
[[alg-dyadic-square-root-bisection]] and directed endpoint rounding in
[[lem-directed-dyadic-rounding-enclosure-and-error]].

[L1] [[alg-dyadic-square-root-bisection]]: for $x>0$, $2^j\le x<2^{j+1}$,
$m=\lfloor j/2\rfloor$, $\delta=2^{m-n}$, and the initial index range is
$[0,2^{n+1}]$.

[L2] [[lem-directed-dyadic-rounding-enclosure-and-error]]: downward and
upward endpoint conversions bracket each exact endpoint.

[L3] [[lem-nonnegative-square-root-exists-and-unique]]: $x\ge0$ has a unique
nonnegative square root, and $t\mapsto t^2$ is strictly increasing on
$[0,\infty)$.

## Proof

1.1 For $x>0$, the initial lower candidate is $0$ and its square is at most
$x$. The initial upper candidate is $2^{n+1}\delta=2^{m+1}$; if $j=2m$ its
square is $2^{j+2}>x$, and if $j=2m+1$ its square is $2^{j+1}>x$. Thus initially
$(L\delta)^2\le x<(U\delta)^2$. [given, L1, algebra]

1.2 At each iteration, $Q$ lies strictly between the integer endpoints. The
exact comparison sets $L=Q$ only when $(Q\delta)^2\le x$, preserving the left
inequality; otherwise it sets $U=Q$, preserving the strict right inequality.
The square function is strictly increasing on nonnegative reals by [L3], so
the invariant implies $L\delta\le\sqrt{x}<U\delta$. The integer gap is
halved until it equals one;
the returned width is then $\delta$. [step 1.1, algebra, induction]

1.3 For $x=0$ the returned point interval is exact. For $x>0$, outward storage
rounding preserves both inequalities by [L2], so the stored result still
contains $\sqrt{x}$. [step 1.2, L2, L3, given]

1.4 On a fixed exponent bin, step 1.2 gives endpoints
$\delta\lfloor\sqrt{x}/\delta\rfloor$ and
$\delta(\lfloor\sqrt{x}/\delta\rfloor+1)$, both nondecreasing in $x$. At
the transition from exponent $2m$ to $2m+1$, $\delta$ is unchanged. At the
transition from exponent $2m+1$ to $2m+2$, the square-root threshold is
$2^{m+1}$ and the grid spacing doubles from $\delta$ to $2\delta$. Just below
the threshold the lower and upper endpoints are at most $2^{m+1}$; at or
above it they are at least $2^{m+1}$. Thus both exact endpoint functions are
nondecreasing across each transition. At $x=0$ both are zero. The directed
rounding maps are nondecreasing by their greatest-lower/least-upper
definitions, so storage preserves this order. [step 1.2, L1, L2, algebra] ∎

