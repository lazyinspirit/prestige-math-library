---
id: lem-cheeger-sweep-and-layer-cake
kind: lemma
title: "Cheeger sweep and layer cake"
status: draft
origin: pipeline
deps: [lem-cheeger-indicator-and-positive-part-energy, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; §4.5.2 Lemmas4.12–4.13, pp41–42."
      url: "https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf"
---

## Statement

For a finite $d$-regular graph on $n\ge2$ vertices and a nonnegative $f$ supported on at most $n/2$ vertices, use the unnormalized inner product $\langle f,g\rangle_0=\sum_v f(v)g(v)$ and energy $E(f)=\langle f,(I-M)f\rangle_0$. Then
$$h\|f\|_0^2\le\frac1d\sum_{u<v}A_{uv}|f(u)^2-f(v)^2|\le\sqrt{2E(f)\|f\|_0^2}.$$
Also $\gamma\le2h$, and there exists a nonzero nonnegative function $g$, supported on at most $n/2$ vertices, with $E(g)\le\gamma\|g\|_0^2$: namely, the positive part of a suitable sign of a nonzero mean-zero $\mu_2$ eigenvector. These are the indicator and positive-part conclusions of the preceding lemma in the unnormalized inner product.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] Let $n\ge2$ and use normalized edge expansion $h$ and algebraic gap $\gamma=1-\mu_2$. Then $\gamma\le2h$. Moreover some sign of a nonzero mean-zero $\mu_2$ eigenvector has positive part $f\ne0$ supported on at most $n/2$ vertices and satisfying $\langle f,(I-M)f\rangle\le\gamma\|f\|^2$. ([[lem-cheeger-indicator-and-positive-part-energy]]).

[F2] For vectors $u,v$ in a real or complex inner product space, $$|\langle u,v\rangle|\le\lVert u\rVert\lVert v\rVert.$$ Equality holds if and only if $u$ and $v$ are linearly dependent, including the case in which either vector is zero. ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).


## Proof

1.1 Order coordinates $f_1\ge\cdots\ge f_n\ge0$ and let $a=|\operatorname{supp}f|\le n/2$. Put $f_{a+1}=0$. Each difference of squared values telescopes across initial segments, so the middle numerator equals $\sum_{i=1}^a(f_i^2-f_{i+1}^2)\operatorname{cut}(\{1,\ldots,i\})$. Each cut is at least $dh i$, and $\sum_{i=1}^a i(f_i^2-f_{i+1}^2)=\sum_i f_i^2$. For $a=0$ all sums are zero. [given, algebra]

2.1 Factor $|f(u)^2-f(v)^2|=|f(u)-f(v)|\,|f(u)+f(v)|$ and apply Cauchy–Schwarz with weights $A_{uv}$ for $u<v$. The first squared sum is $dE(f)$; the second is at most $2\sum_{u<v}A_{uv}(f(u)^2+f(v)^2)\le2d\|f\|_0^2$. Dividing by $d$ proves the upper estimate. Loop terms vanish in the difference sum and only reduce the nonloop degree sum. [F2, step 1.1]

3.1 Multiplying all normalized inner products by $n$ leaves the preceding lemma's inequalities unchanged; thus its positive-part and indicator estimates have exactly the stated unnormalized form. No division by $E(f)$ or $\|f\|_0$ was used above, so zero functions and zero energy are included. [F1, step 2.1] ∎
