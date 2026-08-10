---
id: ex-w-three-two-equals-nine
kind: example
title: "$W(3,2)=9$ by an explicit colouring of $\\{0,\\ldots,7\\}$ and an exhaustive symmetry-reduced proof for $\\{0,\\ldots,8\\}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-van-der-waerden-number, thm-van-der-waerden-with-monochromatic-difference, def-natural-numbers, def-nat-order]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.310, Chapter 3"
      url: "https://ocw.mit.edu/courses/18-310-principles-of-discrete-applied-mathematics-fall-2013/resources/mit18_310f13_ch3/"
pipeline_run: null
---

## Example

With the zero-based natural-number convention of [[def-natural-numbers]] and [[def-nat-order]], the van der Waerden number of [[def-van-der-waerden-number]] is $W(3,2)=9$. Translation identifies the intervals $\{0,\ldots,N-1\}$ and $\{1,\ldots,N\}$, so this is the same convention used by [[thm-van-der-waerden-with-monochromatic-difference]].

## Facts & Assumptions

**Given:** Two colours, red and blue, and three-term progressions $a,a+d,a+2d$ with $d>0$.

[L1] Every finite colouring of a sufficiently long initial interval has a monochromatic arithmetic progression whose common difference has the same colour ([[thm-van-der-waerden-with-monochromatic-difference]]).

## Verification

**Proof technique:** direct.

1.1 On $\{0,\ldots,7\}$ colour $0,1,4,5$ blue and $2,3,6,7$ red. Checking the possible differences $d=1,2,3$ shows that every three-term progression meets both two-point colour blocks. Thus $W(3,2)>8$. [construct]

2.1 Suppose $\{0,\ldots,8\}$ has an avoiding colouring. Exchange colour names to make $4$ red. The progression $0,4,8$ has a blue endpoint; reflect the interval if necessary to make $0$ blue. If $2$ is red, the progressions $2,3,4$ and $2,4,6$ force $3,6$ blue, making $0,3,6$ blue, a contradiction. Hence $2$ is blue, and $0,1,2$ forces $1$ red. [L1]

2.2 If $3$ is red, then $1,3,5$ forces $5$ blue, $1,4,7$ forces $7$ blue, $2,5,8$ forces $8$ red, and $4,6,8$ forces $6$ blue; now $5,6,7$ is blue. If $3$ is blue, then $0,3,6$ forces $6$ red, $1,4,7$ forces $7$ blue, and $3,5,7$ forces $5$ red; now $4,5,6$ is red. Both cases contradict avoidance, so every colouring of nine consecutive integers has a monochromatic three-term progression. [step 2.1]

3.1 Steps 1.1 and 2.2 give the lower and upper bounds, hence $W(3,2)=9$. [step 1.1, step 2.2] ∎

