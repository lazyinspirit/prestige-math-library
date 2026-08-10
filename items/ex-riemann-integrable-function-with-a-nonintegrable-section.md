---
id: ex-riemann-integrable-function-with-a-nonintegrable-section
kind: example
title: "An integrable function on the unit square with one Dirichlet section and only one defined order of ordinary iteration"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-riemann-fubini-on-product-rectangles, def-dirichlet-and-thomae-functions, fs-bounded-implies-riemann-integrable, thm-multidimensional-riemann-criterion]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Example 10.2.1"
      url: "https://www.jirka.org/ra/realanal2.pdf"
pipeline_run: null
---

## Example

On $Q=[0,1]^2$, define
$$f(x,y)=\begin{cases}1,&x=\tfrac12\text{ and }y\in\mathbb Q,\\0,&\text{otherwise}.\end{cases}$$
Then $f$ is Riemann integrable with integral $0$. Every horizontal section is integrable, but the vertical section at $x=1/2$ is the Dirichlet function. Hence the $x$-then-$y$ ordinary iterated integral exists and equals $0$, whereas the other ordinary order is not defined.

## Facts & Assumptions

**Given:** The displayed function on the unit square.

[L1] The Dirichlet function is nonintegrable on every nondegenerate interval ([[def-dirichlet-and-thomae-functions]]); boundedness by itself does not imply Riemann integrability ([[fs-bounded-implies-riemann-integrable]]).

[L2] A bounded function is Riemann integrable when grids make its upper-minus-lower sum arbitrarily small ([[thm-multidimensional-riemann-criterion]]).

[L3] Riemann--Fubini distinguishes ordinary iterated integrals from lower/upper completion across exceptional sections ([[thm-riemann-fubini-on-product-rectangles]]).

## Verification

**Proof technique:** direct.

1.1 Every lower sum of $f$ is $0$. Put grid lines immediately to either side of $x=1/2$ with total intervening width below $\varepsilon$; only cells in that strip can have supremum $1$, so the upper sum is below $\varepsilon$. Thus [L2] gives integrability and integral $0$. [L2, given]

2.1 For fixed $y$, the $x$-section is either zero or the indicator of the singleton $\{1/2\}$, and in both cases its integral is $0$. The resulting outer function is zero, so that ordinary iteration exists and equals $0$. [step 1.1]

3.1 For fixed $x\ne1/2$, the $y$-section is zero; at $x=1/2$ it is the Dirichlet function and is nonintegrable by [L1]. Therefore the reverse ordinary iteration is undefined, exactly as [L3] permits despite multiple integrability. [L1, L3, step 2.1] ∎
