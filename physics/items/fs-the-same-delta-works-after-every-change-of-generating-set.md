---
id: fs-the-same-delta-works-after-every-change-of-generating-set
kind: false-statement
title: "FALSE: the same delta works after every finite change of generating set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-slim-triangle-gromov-product-and-four-point-hyperbolicity-are-equivalent-up-to-constants]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Brian H. Bowditch, A course on geometric group theory, Section 2.2"
      url: "https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-06-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

**False claim:** once a finitely generated group is hyperbolic, one numerical
slimness constant $\delta$ works for the Cayley graph of every finite
generating set.

## Facts & Assumptions

**Given:** The free group $F_2=\langle a,b \rangle$ and, for each integer $n \ge 2$, the generating set $S_n=\{a,b,a^n b^n\}$.

[A1] Write $t=a^n b^n$. A word over $S_n^{\pm1}$ with signed total exponent $r$ of $t$ and length $\ell$ has abelianization $(x,y)$ only if
$$\ell\ge |x-nr|+|y-nr|+|r|.$$
Indeed, its remaining $a$- and $b$-letters must supply the respective coordinate differences.

## Refutation

**Proof technique:** direct.

1.1 The generating set $\{a,b\}$ gives a tree Cayley graph, so $F_2$ is $0$-hyperbolic for that choice. [given]

1.2 Let $\delta\ge0$, and choose an even $n=2k$ with $k>\delta$. The paths labelled $a^n$ from $1$ to $a^n$ and $b^n$ from $a^n$ to $t$ have length $n$. They are geodesic: for every integer $r$, [A1] gives respective lower bounds $|n-nr|+|nr|+|r|\ge n$ and $|nr|+|n-nr|+|r|\ge n$. The edge labelled $t$ joins $1$ to $t$, so these paths form a geodesic triangle. [A1, choose, algebra]

2.1 Its midpoint vertex $a^k$ is distance $k$ from $1$. For any word from $a^k$ to $t$, [A1] gives $\ell\ge |k-nr|+|n-nr|+|r|\ge k+1$ for every integer $r$: the first term is at least $k$, and either $r\ne0$ or the second term is positive. Thus $a^k$ is at distance at least $k$ from the one-edge side $[1,t]$, including its interior. Every vertex $a^n b^j$ on the other long side, $0\le j\le n$, is also at distance at least $k$ from $a^k$, since the first term of the lower bound $|k-nr|+|j-nr|+|r|$ is at least $k$ for every integer $r$. The same bound holds for points inside its edges. Therefore this geodesic triangle is not $\delta$-slim. [A1, step 1.2, algebra]

3.1 Since $\delta$ was arbitrary, no single constant works for all finite generating sets of $F_2$. Therefore the claim is false. [step 1.1, step 1.2, step 2.1] ∎
