---
id: lem-local-convergence-of-the-baker-campbell-hausdorff-series
kind: lemma
title: Local convergence of the Baker–Campbell–Hausdorff series
status: published
origin: pipeline
deps: ["def-baker-campbell-hausdorff-series", "def-finite-dimensional-lie-algebra", "thm-coordinate-map-for-a-finite-dimensional-normed-space", "cor-finite-dimensional-normed-spaces-are-banach", "lem-exponential-series-has-infinite-radius", "thm-exponential-addition-formula", "thm-binomial-theorem", "thm-binomial-closed-formula", "thm-geometric-series"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Michael Müger, Notes on the Baker-Campbell-Hausdorff-Dynkin theorem
      url: https://www.math.ru.nl/~mueger/PDF/BCHD.pdf
      locator: Proposition 2.4, Remark 2.5(2), Theorem 2.14 and complete proof, printed pages 5 and 10–11
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Appendix B §4, Theorem B.22 and formulas (B.23)–(B.24), printed pages 669–671
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Let $\mathfrak g$ be a finite-dimensional real Lie algebra equipped with any
norm $\lVert\cdot\rVert$. There is an $\varepsilon>0$ such that Dynkin's
series

$$\operatorname{BCH}(X,Y)=\sum_{N\ge1}H_N(X,Y)$$

converges absolutely whenever
$\lVert X\rVert+\lVert Y\rVert<\varepsilon$. Moreover, for every
$0<r_0<\varepsilon$, its partial sums converge uniformly on

$$D_{r_0}:=\{(X,Y):\lVert X\rVert+\lVert Y\rVert\le r_0\}.$$

No assertion here identifies this convergent sum with
$\log(\exp X\exp Y)$; that is the content of the following BCH theorem.

## Facts & Assumptions

**Given:** A finite-dimensional real Lie algebra $\mathfrak g$ with a norm.

[F1] The degree-$N$ Dynkin polynomial is the stated finite sum of
right-nested commutators, and BCH is its formal degree-indexed series.
[[def-baker-campbell-hausdorff-series]].

[F2] The Lie bracket is bilinear. [[def-finite-dimensional-lie-algebra]].

[F3] A chosen finite basis gives a bounded coordinate isomorphism for any
norm. [[thm-coordinate-map-for-a-finite-dimensional-normed-space]].

[F4] Every finite-dimensional normed real vector space is complete.
[[cor-finite-dimensional-normed-spaces-are-banach]].

[F5] The real exponential series converges absolutely everywhere and obeys
$\exp(a+b)=\exp(a)\exp(b)$.
[[lem-exponential-series-has-infinite-radius]].
[[thm-exponential-addition-formula]].

[F6] The binomial theorem and its factorial coefficient formula give
$\sum_{m+n=d}a^mb^n/(m!n!)=(a+b)^d/d!$ for nonnegative reals $a,b$.
[[thm-binomial-theorem]].
[[thm-binomial-closed-formula]].

[F7] If $0\le q<1$, the geometric series $\sum_{k\ge0}q^k$ converges.
[[thm-geometric-series]].

## Proof

**Proof technique:** direct.

1.1 If $\mathfrak g=0$, every $H_N$ vanishes and the conclusion holds for every positive $\varepsilon$. Otherwise choose one finite basis. By [F2]--[F3], its finitely many structure constants and the bounded coordinate maps give a constant $C\ge0$ such that $\lVert[U,V]\rVert\le C\lVert U\rVert\lVert V\rVert$ for all $U,V\in\mathfrak g$. This chooses one finite witness, not a family. [F2, F3]

2.1 Induction on word length now gives $\lVert[Z_1\cdots Z_N]_R\rVert\le C^{N-1}\prod_{j=1}^N\lVert Z_j\rVert$ for every right-nested commutator in [F1]. [F1, step 1.1, induction]

2.2 If $C=0$, all brackets vanish, so [F1] gives $H_1(X,Y)=X+Y$ and $H_N(X,Y)=0$ for $N\ge2$; take $\varepsilon=1$. Hence suppose $C>0$ and put $\varepsilon=1/(4C)$. [F1, step 1.1, cases]

3.1 Fix $0<r_0<\varepsilon$ and put $R=Cr_0<1/4$. For $a=C\lVert X\rVert$, $b=C\lVert Y\rVert$ and $(X,Y)\in D_{r_0}$, [F6] shows that the sum of the scalar weights $a^mb^n/(m!n!)$ over a block of positive total degree is $q(a,b)=\exp(a+b)-1$, and its degree-$d$ part is $(a+b)^d/d!\le R^d/d!$. Thus these coefficients are bounded degree by degree by those of $q_0:=\sum_{d\ge1}R^d/d!$. Since $R<1/4$ and $d!\ge1$, [F5]--[F7] give $0\le q_0\le\sum_{d\ge1}(1/4)^d=1/3<1$. [F5, F6, F7, step 2.2]

4.1 Apply step 2.1 to the formula in [F1]. For a $k$-block summand of total degree $N$, absorb $C^N$ into its scalar letter weights and retain the factor $1/C$. Since $1/N\le1$, the sum of the norms of all homogeneous terms, uniformly for $(X,Y)\in D_{r_0}$, is bounded by the nonnegative degree expansion of $\frac1C\sum_{k\ge1}q_0^k/k\le\frac1C\sum_{k\ge1}q_0^k$, which converges by [F7]. In particular, the resulting degree majorants $M_N$ satisfy $\lVert H_N(X,Y)\rVert\le M_N$ on $D_{r_0}$ and $\sum_NM_N<\infty$. [F1, F7, step 2.1, step 3.1, algebra]

5.1 For each $(X,Y)\in D_{r_0}$, step 4.1 makes the partial sums Cauchy by the triangle inequality, and [F4] supplies their limit. Moreover, the norm of every tail is bounded by the corresponding scalar tail $\sum_{N>m}M_N$, independently of $(X,Y)$; that tail tends to zero. Hence the convergence is absolute and uniform on $D_{r_0}$. [F4, step 4.1]

6.1 Any pair with $\lVert X\rVert+\lVert Y\rVert<\varepsilon$ lies in some $D_{r_0}$ with $\lVert X\rVert+\lVert Y\rVert<r_0<\varepsilon$, so step 5.1 proves both claims. The zero and one-dimensional cases are included; in dimension one the bracket is zero. Degenerate brackets are allowed. There is no interval or endpoint, no metric beyond the arbitrary norm in the statement, no choice principle beyond choosing one finite basis, and no biconditional. [F1, F2, step 1.1, step 2.2, step 5.1] ∎
