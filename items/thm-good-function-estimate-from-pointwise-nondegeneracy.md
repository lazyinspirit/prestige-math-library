---
id: thm-good-function-estimate-from-pointwise-nondegeneracy
kind: theorem
title: "Good-function estimate from pointwise nondegeneracy"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-analytic-nondegenerate-point
  - def-good-function-on-a-ball
  - lem-uniform-directional-derivatives-in-orthonormal-frames
  - lem-choice-free-derivative-sublevel-estimate-on-cubes
  - thm-extreme-value-metric
proof_strategy: direct
sources:
  references:
    - title: "Kleinbock–Margulis 1998"
      url: "https://arxiv.org/pdf/math/9810036v1"
      locator: "§3 Proposition 3.4; §4 Theorem 4.1; §5 Theorems 5.2 and 5.4, with proofs"
    - title: "Beresnevich–Kleinbock 2022"
      url: "https://www.asau.ru/files/pdf/3028250.pdf"
      locator: "chapter 9, printed pp. 303–310: quantitative nondivergence and nondegeneracy conventions"
---

## Statement

Let $d,n,l\ge1$, let $U\subset\mathbb R^d$ be open, let $f=(f_1,\ldots,f_n):U\to\mathbb R^n$ be $C^l$, and suppose the vectors $\partial^\beta f(x_0)$ with $1\le|\beta|\le l$ span $\mathbb R^n$. Then there are an open neighbourhood $V\subset U$ of $x_0$ and $C>0$ such that for every $c=(c_0,\ldots,c_n)\in\mathbb R^{n+1}$ the function $F_c(x)=c_0+\sum_i c_i f_i(x)$ is $(C,1/(dl))$-good on $V$. Thus the same constants apply to every ball contained in $V$ and every affine linear combination, including constants and the zero function.

## Statement references

[Kleinbock–Margulis 1998, Proposition 3.4](https://arxiv.org/pdf/math/9810036v1) — the affine-span derivative argument, including the value branch treated explicitly below.

## Facts & Assumptions

**Given:** $d,n,l,U,f,x_0$ as stated.

[F1] A nonzero symmetric derivative tensor of order $j$ admits an orthonormal frame in which all pure evaluations have modulus at least $b_{d,j}$ times its largest coordinate coefficient, for a positive constant depending only on $d,j$. [[lem-uniform-directional-derivatives-in-orthonormal-frames]]

[F2] If mixed derivatives through order $j$ are bounded by $A_1$ and all pure order-$j$ derivatives are bounded below by $A_2>0$, the sublevel fraction on a cube is at most $dK_j(A_1/A_2)(\varepsilon/\sup|F|)^{1/(dj)}$. [[lem-choice-free-derivative-sublevel-estimate-on-cubes]]

[F3] Goodness means the same relative-sublevel estimate on every contained ball; the zero-supremum right side is interpreted as infinity. [[def-good-function-on-a-ball]]

[F4] A continuous real function on a nonempty compact metric space attains its minimum and maximum. [[thm-extreme-value-metric]]


## Proof

**Proof technique:** compact uniform control of finitely many derivatives, followed by the cube estimate.

1.1 The finite jet map $c\mapsto(D^\beta F_c(x_0))_{0\le|\beta|\le l}$ is injective. Indeed, vanishing of its positive-order entries forces $(c_1,\ldots,c_n)$ to be orthogonal to the spanning vectors in the hypothesis, and hence zero; the zero-order entry then forces $c_0=0$. On the compact unit sphere $|c|_2=1$, its maximum coordinate modulus therefore has a positive minimum $a$. Thus each unit $c$ has a witnessing order $0\le j\le l$ and a jet coefficient of modulus at least $a$. [given, F4, algebra]

2.1 For a positive witnessing order $j$, the symmetric tensor $D^jF_c(x_0)$ has a coordinate evaluation of modulus at least $a$. By F1 choose an orthonormal frame in which all its pure evaluations have modulus at least $b_{d,j}a$. Put $b=\min(1,b_{d,1},\ldots,b_{d,l})>0$. Continuity of the finitely many derivatives of the $f_i$, compactness of the coefficient-unit sphere and of $O(d)$, and the finite expansion of directional derivatives supply a ball $W$ about $x_0$, with compact closure in $U$, on which every rotated order-$j$ derivative of every unit-coefficient combination differs from its value at $x_0$ by at most $ba/2$. One can see the uniformity directly by bounding each finite directional expansion coefficient by a dimension-and-order constant and making the finitely many coordinate-derivative differences sufficiently small. On this same ball all derivatives of orders0 through $l$, in every orthogonal frame, are bounded by one finite $M\ge1$. [F1, step 1.1, construct]

3.1 For a unit $c$ whose witnessing order is0, shrink $W$ once more, uniformly over all unit $c$, so $|F_c(x)-F_c(x_0)|\le a/2$ there. Then $|F_c|\ge a/2$ and $\sup_W|F_c|\le M$. On any contained ball its $\varepsilon$-sublevel is empty for $\varepsilon\le a/2$; for $\varepsilon>a/2$ its relative measure is at most1, which is at most $(2M/a)^{1/(dl)}(\varepsilon/\sup|F_c|)^{1/(dl)}$. This explicitly includes pure nonzero constants. [step 1.1, step 2.1, F3, algebra]

3.2 Write $W=B(x_0,r)$ after a further restriction and take $V=B(x_0,r/(2\sqrt d))$. If $B(y,t)\subset V$, its circumscribed cube in any orthogonal frame lies in $W$: its farthest point has distance at most $|y-x_0|+\sqrt d\,t\le\sqrt d\,r/(2\sqrt d)=r/2$ from $x_0$. For a unit $c$ with positive witnessing order $j$, use its frame from step 2.1. On that entire cube every pure order-$j$ derivative has modulus at least $ba/2$ and every required mixed derivative at most $M$. F2 therefore applies with constants independent of $c$, the ball and its radius. [step 2.1, F2, construct]

4.1 The cube has volume $(2t)^d$ and the ball has volume $v_dt^d$, with $v_d>0$ the unit-ball volume. The ball's bad set is contained in the cube's bad set, and its supremum is no larger than the cube's supremum. Thus its relative bad measure is at most $(2^d/v_d)dK_j(2M/(ba))(\varepsilon/\sup_B|F_c|)^{1/(dj)}$. If the ratio is at most1, replace exponent $1/(dj)$ by $1/(dl)$ because $j\le l$; if the ratio is greater than1, use the trivial relative bound1. Take the maximum of1, the finitely many resulting constants, and the constant in step 3.1. This proves the uniform assertion for unit $c$. [F2, F3, step 3.1, step 3.2, algebra]

5.1 For arbitrary nonzero $c$, divide by $|c|_2$ and rescale the threshold $\varepsilon$ by the same factor; the relative-threshold ratio is unchanged. For $c=0$ the convention in F3 gives the claim directly. This proves goodness for every affine combination on the common open neighbourhood $V$. [F3, step 4.1, algebra] ∎

