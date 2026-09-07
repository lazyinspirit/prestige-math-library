---
id: "ex-sierpinski-gasket-dimension-by-hand"
kind: "example"
title: "A Sierpinski gasket computed by hand"
deps: ["thm-hausdorff-mass-distribution-principle", "thm-hausdorff-dimension-critical-exponent", "thm-geometric-series", "thm-lebesgue-measure-of-a-box-of-every-kind", "thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Bishop–Peres Example 1.3.4 pp.15–16
      url: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: published
origin: "pipeline"
---

## Example

Assume the Axiom of Countable Choice. Let $D=\{(0,0),(1,0),(0,1)\}$ and

$$K=\left\{\sum_{j=1}^{\infty}2^{-j}d_j:d_j\in D\right\}\subseteq\mathbb R^2,\qquad s=\frac{\log3}{\log2}.$$

Then $0<\mathcal H^s(K)<\infty$ and $\dim_H K=s$. No exact critical measure is asserted.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Under the standing Countable Choice hypothesis, a finite Borel measure with outer mass on $K$ positive and small-set diameter bound $Cr^s$ yields $\mathcal H^s(K)\ge\mu^*(K)/C$. [[thm-hausdorff-mass-distribution-principle]]

[F2] Finite positive $s$-measure identifies dimension $s$. [[thm-hausdorff-dimension-critical-exponent]]

[F3] Geometric series with ratio $1/2$ have tails $\sum_{j>n}2^{-j}=2^{-n}$. [[thm-geometric-series]]

[F4] Under the standing Countable Choice hypothesis, a half-open interval has Lebesgue measure its length. [[thm-lebesgue-measure-of-a-box-of-every-kind]]

[F5] Pointwise limits of measurable functions are measurable. [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]

## Verification

1.1 Every length-$n$ word gives a lower-left corner $p=\sum_{j\le n}2^{-j}d_j$ and a containing closed square $Q=p+[0,2^{-n}]^2$. There are $3^n$ words, giving distinct grid squares because each coordinate prefix has a unique length-$n$ binary code. Their diameters are $\sqrt2\,2^{-n}$; hence their $s$-cost is $3^n(\sqrt2\,2^{-n})^s=2^{s/2}$. The series converge coordinatewise by geometric tails, and these covers at arbitrarily small scales give $\mathcal H^s(K)\le2^{s/2}$. [F3]

1.2 For $u\in[0,1)$ define $e_j(u)=\lfloor3^ju\rfloor-3\lfloor3^{j-1}u\rfloor\in\{0,1,2\}$, identify these three values with the listed members of $D$, and put $T(u)=\sum_{j\ge1}2^{-j}d(e_j(u))$. Each coordinate is a limit of Borel step functions, hence Borel measurable. The vector map is Borel since preimages of open rational rectangles are Borel and those rectangles form a countable basis. Define $\mu(B)=\lambda_1(T^{-1}(B))$ for Borel $B\subseteq\mathbb R^2$, with preimages taken in $[0,1)$. Disjoint Borel preimages prove countable additivity; thus $\mu$ is a Borel probability. [F3, F5]

2.1 Every ternary prefix event is a half-open interval of length $3^{-n}$, hence has probability $3^{-n}$. Its image lies in the corresponding square. Also $T([0,1))\subseteq K$, so every Borel superset of $K$ has $\mu$-measure one and $\mu^*(K)=1$; no measurability claim about an arbitrary image is needed. [F4, step 1.2]

3.1 For nonempty $U$ of diameter $r$ with $2^{-n}\le r<2^{1-n}$, each coordinate projection lies in an interval of length at most $r<2\cdot2^{-n}$. Such an interval meets at most four closed grid intervals of side $2^{-n}$, allowing all boundary contacts. Thus $U$ meets at most sixteen level-$n$ grid squares. Let $R$ be the closed coordinate bounding rectangle of $U$; its coordinate side lengths are at most $r$, so it meets at most sixteen squares. Every $u$ with $T(u)\in R$ has its own prefix square meeting $R$, so $\mu^*(U)\le\mu(R)\le16\,3^{-n}\le16r^s$. [step 1.1, step 2.1]

4.1 For a singleton use its coordinate point rectangle at arbitrarily fine levels; at most four squares contain the point, so its mass is at most $4\,3^{-n}\to0$. Empty sets have zero mass. The diameter estimate therefore holds also at zero. Apply mass distribution with constant sixteen and outer mass one to obtain $\mathcal H^s(K)\ge1/16$. Combined with the finite upper bound, this gives $\dim_H K=s$. [F1, F2, step 1.1, step 2.1, step 3.1] ∎
