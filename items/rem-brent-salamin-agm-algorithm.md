---
id: rem-brent-salamin-agm-algorithm
kind: remark
title: "The Gauss-Legendre (Brent-Salamin) AGM algorithm for $\\pi$"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "Quadratically convergent AGM iteration for π; proved 1976, rests on elliptic integrals"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Gauss-Legendre algorithm (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Gauss%E2%80%93Legendre_algorithm"
    - title: "E. Salamin, Computation of π using arithmetic-geometric mean, Mathematics of Computation 30 (1976) 565-570"
      url: "https://www.ams.org/journals/mcom/1976-30-135/S0025-5718-1976-0404124-9/"
    - title: "R. P. Brent, Fast multiple-precision evaluation of elementary functions, JACM 23 (1976) 242-251 (author's page)"
      url: "https://maths-people.anu.edu.au/~brent/pub/pub034.html"
    - title: "Arithmetic-geometric mean (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Arithmetic%E2%80%93geometric_mean"
pipeline_run: null
---

## Statement

**Gauss-Legendre / Brent-Salamin algorithm.** Set

$$a_0 = 1, \qquad b_0 = \tfrac{1}{\sqrt{2}}, \qquad t_0 = \tfrac{1}{4}, \qquad p_0 = 1,$$

and iterate

$$a_{n+1} = \frac{a_n + b_n}{2}, \quad b_{n+1} = \sqrt{a_n b_n}, \quad t_{n+1} = t_n - p_n (a_n - a_{n+1})^2, \quad p_{n+1} = 2 p_n.$$

Then

$$\frac{(a_{n+1} + b_{n+1})^2}{4 t_{n+1}} \longrightarrow \pi,$$

and the convergence is quadratic: the number of correct digits roughly doubles at
each step, so about $25$ iterations already give tens of millions of digits.

**Status: settled, but outside this library's stack.** Brent and Salamin published
the algorithm independently in 1976, and its correctness is a theorem. It is not
open. It is also not reachable here: the proof rests on Gauss's
arithmetic-geometric mean and its identification with a complete elliptic integral
of the first kind, on the companion integral of the second kind, and on Legendre's
relation

$$E(k)K(k') + E(k')K(k) - K(k)K(k') = \frac{\pi}{2},$$

none of which this library develops.

## Remarks

**Not proved in this library.** The algorithm is recorded, not derived, and no
page here may present it as established.

**What is known, and what would prove it here.** Everything about it is known; the
only obstacle is prerequisite. What would discharge this item is an elliptic
integral track: the AGM iteration and its quadratic convergence, the identity
$M(1,k') = \pi / (2K(k))$ expressing the AGM through the complete elliptic
integral $K$, the second complete integral $E$, and Legendre's relation. That is a
substantial classical development in its own right, and it belongs to a page this
library does not yet have.

**Why it matters here.** This library defines $\pi$ analytically and will prove
the elementary series and product formulas for it, including the Leibniz series
and the Machin-type arctangent formulas. Every one of those converges *linearly*:
each additional digit costs a bounded amount of extra work per digit. The AGM
algorithm converges quadratically and is the reason the record computations of the
1980s and 1990s were feasible at all. Recording it prevents the $\pi$ pages from
leaving the impression that the formulas they can prove are the ones that are
actually used.
