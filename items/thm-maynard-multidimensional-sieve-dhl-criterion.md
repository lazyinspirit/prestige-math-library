---
dependency_level: 5
id: thm-maynard-multidimensional-sieve-dhl-criterion
kind: theorem
title: "Maynard’s multidimensional sieve criterion for DHL[k,m+1]"
status: draft
origin: pipeline
deps: [def-maynard-variational-quantity-mk, def-prime-level-of-distribution, def-admissible-prime-tuple, def-von-mangoldt-function, def-liminf-consecutive-prime-gap-hm, lem-prime-level-shifted-endpoint-and-divisor-weight-control, lem-maynard-smooth-simplex-approximation, thm-maynard-smooth-weighted-sieve-asymptotics, lem-nonnegative-prime-cluster-weights-detect-bounded-gaps, thm-riemann-fubini-on-product-rectangles, thm-multidimensional-integral-properties, thm-multidimensional-riemann-criterion]
justified_by: []
proof_strategy: direct
axiom_use: "Given level is a hypothesis. Finite weights, Riemann approximation and unbounded integer sets introduce no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "James Maynard, “Small gaps between primes” (2015)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory II: Primes and Sieves, Chapter 22"
      url: "https://personal.science.psu.edu/rcv4/Vol2/Vol2.pdf"
---

## Statement

Let $k\ge2$, $m\ge1$, and $\theta>0$. Suppose the primes have level of distribution $\theta$, and let $H=\{h_1<\cdots<h_k\}$ be an admissible tuple. If $M_k>2m/\theta$, then infinitely many positive integers $n$ have at least $m+1$ primes among $n+h_1,\ldots,n+h_k$. In particular, if $D=h_k-h_1$, then $H_m\le D$.


## Statement references

[[def-maynard-variational-quantity-mk|Maynard functionals]]

[[def-prime-level-of-distribution|Prime level of distribution]]

[[def-admissible-prime-tuple|Admissibility]]

[[def-liminf-consecutive-prime-gap-hm|Prime-gap constants]]


## Facts & Assumptions

**Given:** The original Statement's fixed $k,m,\theta,H$ and level hypothesis. The $I,J,M_k$ convention is the full Riemann class, not a restriction to smooth functions.

[F1] [[def-maynard-variational-quantity-mk]] defines the nonempty class $\mathcal F_k$, its section and squared-marginal conditions, and $M_k$ as the supremum of $\sum_iJ_{k,i}/I_k$.

[F2] [[lem-prime-level-shifted-endpoint-and-divisor-weight-control]] proves that the given level forces $\theta\le1$ and descends to smaller positive levels.

[F3] [[lem-maynard-smooth-simplex-approximation]] preserves positivity of $I$, every $J$ and any strict ratio threshold when replacing an actual Riemann test by a smooth compact interior function.

[F4] [[thm-maynard-smooth-weighted-sieve-asymptotics]] supplies $S_1=C_N(I+o(1))$ and $S_2=C_N(\alpha\sum J+o(1))$ for each fixed $0<2\alpha<\min(\theta,1)$ and smooth compact interior function, on finite nonnegative weights for every sufficiently large integer $N$.

[F5] [[lem-nonnegative-prime-cluster-weights-detect-bounded-gaps]] proves that for finite nonnegative weights with $1\le m<k$, $S_2>mS_1$ supplies a successful translate in their finite support.

[F6] [[thm-riemann-fubini-on-product-rectangles]] identifies multiple and iterated Riemann integrals when every section is integrable. [[thm-multidimensional-integral-properties]] gives linearity and monotonicity.

[F7] [[def-liminf-consecutive-prime-gap-hm]] defines $H_m=\sup_R\inf_{r\ge R}(p_{r+m}-p_r)$ for the increasing positive-prime enumeration.

[F8] [[thm-multidimensional-riemann-criterion]] characterizes bounded Riemann integrability by arbitrarily small grid Darboux gaps.

## Proof

1.1 The level hypothesis implies $0<\theta\le1$ by [F2]. In particular the apparently allowed range $\theta>1$ is inconsistent with the actual full-weight endpoint definition, rather than silently excluded from the Statement. [F2, given, algebra]

2.1 For every actual $F\in\mathcal F_k$, $F^2$ and each section square are Riemann integrable: on any grid cell their oscillation is at most $2\|F\|_\infty$ times the oscillation of $F$, so [F8] applies. For a one-dimensional integrable section $f$, nonnegativity of $\int_0^1(f-t)^2$ for every real $t$, expanded using [F6], gives $(\int_0^1f)^2\le\int_0^1f^2$. Integrate this inequality in the other coordinates. The left side is integrable by the definition of $\mathcal F_k$, and [F6] applies to $F^2$ with its integrable sections. It gives $J_{k,i}(F)\le I_k(F)$, hence $M_k\le k$. Therefore the strict premise and step 1.1 imply $2m/\theta<k$, in particular $m<k$. Thus the detector's range is a consequence, not an added restriction. [F1, F6, F8, step 1.1, algebra]

2.2 By the supremum definition [F1] and $M_k>2m/\theta$, some $F\in\mathcal F_k$ has $\sum_iJ_{k,i}(F)>(2m/\theta)I_k(F)$. Apply [F3] to get a real $\Phi\in C_c^\infty(U_k)\cap\mathcal F_k$ with the same strict inequality. Set $I=I_k(\Phi)>0$ and $Q=\sum_iJ_{k,i}(\Phi)/I>2m/\theta$. Then $b=2m/Q<\theta\le1$. Take $\theta'=(b+\theta)/2$ and $\alpha=\theta'/2$. These choices satisfy $0<2\alpha<\min(\theta,1)$ even when $\theta=1$, and $\alpha Q>m$. All selections here concern one existential test and one explicit real midpoint; no sequence choice is needed. [F1, F3, step 1.1, algebra, construct]

3.1 Use [F4] with these fixed parameters and the original admissible integer tuple. Its positive scale $C_N$ and finite nonnegative weights give [F4, F5, step 2.1, step 2.2, algebra]
$$S_2-mS_1=C_N\left(\alpha\sum_iJ_{k,i}(\Phi)-mI+o(1)\right)>0$$
for every sufficiently large integer $N$, since the fixed excess equals $I(\alpha Q-m)>0$. By [F5] and step 2.1, some $n\in[N,2N)\cap\mathbb Z$ has at least $m+1$ primes among its shifted tuple. Given any bound $B$, choose an integer $N$ beyond $B$ and the threshold; this gives a successful $n>B$. The successful set is therefore unbounded and infinite. This argument does not choose an infinite sequence of witnesses, and fixed negative shifts cause no issue once $N$ is large. [F4, F5, step 2.1, step 2.2, algebra]

4.1 Write $D=h_k-h_1$. For a successful translate let $p_r$ be the first positive prime at least $n+h_1$. The interval $[n+h_1,n+h_k]$ contains $m+1$ distinct primes, so $p_{r+m}\le n+h_k$ and $p_r\ge n+h_1$. Thus $p_{r+m}-p_r\le D$. These indices are unbounded: for any index bound $R$, use step 3.1 with a successful $n$ satisfying $n+h_1>p_R$, which forces $r>R$. Every tail infimum in [F7] is at most $D$, hence its supremum is at most $D$. This proves $H_m\le D$ with all original $k,m,\theta$ and Riemann-class quantifiers unchanged. [F7, step 3.1, algebra] ∎

## Proof scope

The given level is a hypothesis. Its use is at two exact shifted full-weight endpoints; no BV theorem, endpoint maximum or additional choice hypothesis is inserted. This proves the abstract fixed-tuple criterion, not an enlarged-support or growing-parameter sieve theorem and not an unqualified downstream numerical theorem using a distribution supplier with additional hypotheses.
