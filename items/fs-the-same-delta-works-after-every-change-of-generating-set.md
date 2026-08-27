---
id: fs-the-same-delta-works-after-every-change-of-generating-set
kind: false-statement
title: "FALSE: the same delta works after every finite change of generating set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-hyperbolic-group-definition-is-independent-of-finite-generating-set, thm-slim-triangle-gromov-product-and-four-point-hyperbolicity-are-equivalent-up-to-constants]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Brian H. Bowditch, A course on geometric group theory, Section 2.2"
      url: "https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf"
---

## Statement

**False claim:** once a finitely generated group is hyperbolic, one numerical
slimness constant $\delta$ works for the Cayley graph of every finite
generating set.

## Facts & Assumptions

**Given:** The free group $F_2=\langle a,b \rangle$ and, for each integer $n \ge 2$, the generating set $S_n=\{a,b,a^n b^n\}$.

[L1] Hyperbolicity is independent of the generating set, but only up to
quasi-isometry
([[thm-hyperbolic-group-definition-is-independent-of-finite-generating-set]]).

[A1] In the Cayley graph of $(F_2,S_n)$, the vertices $1$, $a^n$, and $a^n b^n$ form a geodesic triangle with side lengths $n$, $n$, and $1$.

## Refutation

**Proof technique:** direct.

1.1 The generating set $\{a,b\}$ gives a tree Cayley graph, so $F_2$ is $0$-hyperbolic for that choice. [given]

1.2 Let $\delta \ge 0$, and choose $n > 2\delta+2$. By [A1], the side from $1$ to $a^n$ is geodesic in the Cayley graph of $(F_2,S_n)$. Write $k=\lfloor n/2 \rfloor$. Any word from $a^k$ to $a^n b^n$ has abelianization $(n-k,n)$; using the generator $a^n b^n$ once leaves $(-k,0)$ and therefore still needs at least $k$ letters, while using it zero times needs at least $n$ letters. Hence $d(a^k,a^n b^n) \ge k+1$, so the distance from $a^k$ to the one-edge side $[1,a^n b^n]$ is at least $k > \delta$. Its distance to the side $[a^n,a^n b^n]$ is $n-k > \delta$. So this geodesic triangle is not $\delta$-slim. [A1, choose, algebra]

2.1 Since $\delta$ was arbitrary, no single constant works for all finite generating sets of $F_2$. The theorem [L1] preserves only existence of some constant for each generating set separately. Therefore the claim is false. [L1, step 1.1, step 1.2] ∎
