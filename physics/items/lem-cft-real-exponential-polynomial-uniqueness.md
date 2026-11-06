---
id: lem-cft-real-exponential-polynomial-uniqueness
kind: lemma
title: Absolute exponential-polynomial expansions with real exponents
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-retained-2026-10-29
page: vertex-modules-intertwiners-and-fusion
dependency_level: 0
domain: mathematics
library: mathematics
proof_strategy: direct
deps: []
dependency_roles: {}
sources:
  references:
    - title: "Huang, Lepowsky and Zhang, Part V, Lemma 7.7, Proposition 7.8 and Proposition 7.9"
      url: https://arxiv.org/pdf/1012.4199v3
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $D\subseteq\mathbb R$, $N\geq0$, $a_{n,j}\in\mathbb C$, and $P_n(s)=\sum_{j=0}^Na_{n,j}s^j$. Suppose the family $\sum_{n\in D}|e^{ns}P_n(s)|$ is summable for every $s$ in a nonempty complex open set $U$. Summability of an arbitrary family means that the supremum of its finite subsums is finite. Then, locally on $U$, the expanded family $\sum_{n,j}a_{n,j}e^{ns}s^j$ and all its termwise derivatives converge absolutely and uniformly on compact sets. If its sum is zero on a nonempty complex open subset of $U$, every coefficient $a_{n,j}$ is zero. The exponents need not be discrete, bounded or contained in finitely many integer cosets.

## Facts & Assumptions

**Given:** Exactly the data and pointwise absolute convergence in the Statement. Elementary finite-dimensional polynomial interpolation, Cauchy's integral formula, the holomorphic identity theorem, and the binomial formula are used with their explicit arguments below.

## Proof

1.1 Fix $s_0\in U$ and choose $\epsilon>0$ such that the closed rectangle $|\operatorname{Re}(s-s_0)|\leq2\epsilon$, $|\operatorname{Im}(s-s_0)|\leq2\epsilon$ lies in $U$. On each of the two vertical lines with real parts $c_- =\operatorname{Re}s_0-\epsilon$ and $c_+=\operatorname{Re}s_0+\epsilon$, choose $N+1$ distinct points $s_{\pm,l}$ in this rectangle. Polynomial interpolation has a fixed inverse Vandermonde matrix at these points, so for a finite constant $C$ independent of $n$, $$|a_{n,j}|e^{nc_\pm}\leq C\sum_{l=0}^N|e^{ns_{\pm,l}}P_n(s_{\pm,l})|.$$ The right sides have finite sums over $n$ by hypothesis. Hence $\sum_n|a_{n,j}|e^{nc_\pm}<\infty$ for every $j$. In particular all nonzero coefficients have countable support: for a summable nonnegative family, the sets of entries at least $1/k$ are finite, and their union contains its positive support. Interpolation shows the nonzero $P_n$ have the same countability property. [given, algebra]

2.1 On the smaller rectangle $|\operatorname{Re}(s-s_0)|\leq\epsilon/2$, $|\operatorname{Im}(s-s_0)|\leq\epsilon/2$, one has $e^{n\operatorname{Re}s}\leq e^{nc_+}$ for $n\geq0$ and at most $e^{nc_-}$ for $n<0$. The finitely many powers $s^j$ are uniformly bounded there. Thus step 1.1 gives a summable majorant independent of $s$, proving absolute uniform convergence. For every integer $r\geq0$, the bound $|n|^r e^{-|n|\epsilon/2}\leq C_{r,\epsilon}$ bounds the derivatives of $e^{ns}s^j$ by the same endpoint coefficient sums on a slightly smaller rectangle. Every derivative is a finite combination of these terms. This proves normal convergence of all derivatives, holomorphy of the sum by integrating uniformly convergent sums over small circles, and legitimate termwise differentiation. [step 1.1, algebra]

3.1 Suppose the sum is zero on a nonempty open subset, and fix an arbitrary $n_0\in D$. Choose real $c_2<c_1$ through a rectangle contained in that zero set. Step 1.1 gives finite sums $\sum_{n,j}|a_{n,j}|e^{nc_l}$ for $l=1,2$. Define $$F_+(s)=\sum_{n\geq n_0}e^{(n-n_0)s}P_n(s),\qquad F_-(s)=-\sum_{n<n_0}e^{(n-n_0)s}P_n(s).$$ The first series is normally convergent on $\operatorname{Re}s<c_1$, using its nonnegative exponents and the coefficient sum at $c_1$; the second is normally convergent on $\operatorname{Re}s>c_2$, using its negative exponents and the coefficient sum at $c_2$. Their equality on the chosen rectangle follows from the zero sum. The identity theorem on the connected overlap strip gives equality everywhere on that strip. Hence they glue to one entire function $F$. On the first half-plane the finite constant coefficient sums at $c_1$ bound $|F(s)|$ by $C_1\sum_{j=0}^N|s|^j$; on the second the analogous sums at $c_2$ give the same bound with $C_2$. These two half-planes cover $\mathbb C$, so $|F(s)|\leq C(1+|s|)^N$ globally. Cauchy's formula on circles of radius $R$ shows $|F^{(k)}(0)|/k!\leq C(1+R)^N/R^k\to0$ for every $k>N$. Thus $F$ is a polynomial of degree at most $N$. [given, step 1.1, step 2.1, algebra]

4.1 Along the positive real axis use $F_-$, divide by $s^N$, and let $s\to+\infty$. Every summand tends to zero, since its exponent is strictly negative, and the summable majorant at any fixed $s=M>\max(c_2,1)$ permits passage of the limit through the sum. Thus the coefficient of $s^N$ in the polynomial $F$ is zero. Along the negative real axis use $F_+$ and let $s\to-\infty$. The analogous majorant at $M'<\min(c_1,-1)$ permits passage through the sum. Terms with $n>n_0$ tend to zero and those with $n=n_0$ tend to $a_{n_0,N}$ after division by $s^N$. The same polynomial leading coefficient must therefore equal $a_{n_0,N}$. It follows that $a_{n_0,N}=0$. Since $n_0$ was arbitrary, every degree-$N$ coefficient vanishes. Repeat the argument with $N-1$, down to $0$. All coefficients vanish, including when $N=0$. [step 3.1, algebra] ∎
