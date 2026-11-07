---
id: thm-kleinbock-margulis-strong-extremality-of-nondegenerate-manifolds
kind: theorem
title: "Strong extremality of nondegenerate manifolds"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-analytic-nondegenerate-point
  - def-strongly-extremal-parametrized-manifold
  - thm-quantitative-nondivergence-for-nondegenerate-manifold-maps
  - cor-first-borel-cantelli-lemma-for-events
  - lem-vwma-produces-short-diagonal-lattice-vectors
proof_strategy: direct
sources:
  references:
    - title: "Kleinbock–Margulis 1998"
      url: "https://arxiv.org/pdf/math/9810036v1"
      locator: "Theorem A, Proposition 2.3, Lemma 2.1, Corollary 2.2 and proofs in §§2–5"
    - title: "Beresnevich–Kleinbock 2022"
      url: "https://www.asau.ru/files/pdf/3028250.pdf"
      locator: "printed pp. 303–310: quantitative nondivergence, nondegeneracy and strong extremality"
---

## Statement

Kleinbock and Margulis's strong-extremality theorem states the following.

Let $U\subset\mathbb R^d$ be open, let $f:U\to\mathbb R^n$ be a $C^m$ embedding, and assume $f(x)$ is nondegenerate for Lebesgue-almost every $x\in U$. Then for almost every $x\in U$, $f(x)$ is not very well multiplicatively approximable; equivalently, $f(U)$ is strongly extremal.

In this statement, VWMA means that for some $\eta>0$ infinitely many $q\in\mathbb Z^n$ admit $p\in\mathbb Z$ with $|q\cdot f(x)+p|\Pi_+(q)\le\Pi_+(q)^{-\eta}$, where $\Pi_+(q)=\prod_i\max(1,|q_i|)$.

## Statement references

[Kleinbock–Margulis 1998](https://arxiv.org/pdf/math/9810036v1) — Theorem A, Proposition 2.3, Lemma 2.1, Corollary 2.2 and proofs in §§2–5.

[Beresnevich–Kleinbock 2022](https://www.asau.ru/files/pdf/3028250.pdf) — printed pp. 303–310: quantitative nondivergence, nondegeneracy and strong extremality.


## Choice-free proof scope

The quantitative supplier now supplies the original unqualified bound. The countable bookkeeping below uses all rational-ball/integer-constant codes and canonical open-event tail covers, not Countable Choice.

## Facts & Assumptions

**Given:** the $C^m$ parametrization and almost-everywhere nondegeneracy.

[F1] The pointwise derivative-span convention is the specified nondegeneracy definition. [[def-analytic-nondegenerate-point]]

[F2] Strong extremality means almost-everywhere failure of VWMA. [[def-strongly-extremal-parametrized-manifold]]

[F3] Quantitative nondivergence bounds short-vector events uniformly in nonnegative diagonal parameters. [[thm-quantitative-nondivergence-for-nondegenerate-manifold-maps]]

[F4] VWMA produces exponentially short lattice vectors for infinitely many integer diagonal parameters. [[lem-vwma-produces-short-diagonal-lattice-vectors]]

[F5] The first Borel–Cantelli lemma makes a limsup of summable events null. [[cor-first-borel-cantelli-lemma-for-events]]


## Proof

1.1 Fix a rational $\gamma>0$. Normalize Lebesgue measure on each ball by its positive volume when applying the probability version of Borel–Cantelli. On a ball centered at any $l$-nondegenerate point, apply [F3] with $\varepsilon_{\mathbf t}=e^{-\gamma\sum_i t_i}$ for all sufficiently large $\mathbf t\in\mathbb Z_{\ge0}^n$. The measure bound is at most a constant times $e^{-\gamma\sum_i t_i/(dl)}$. For each integer $k\ge0$, there are at most $(k+1)^n$ indices with coordinate sum $k$, so the total event measure is summable. [given, F3, algebra]

2.1 For these OPEN short-vector events the conclusion of [F5] is the elementary tail bound: the limsup is contained in every tail union, whose outer measure is at most the tail sum. Use the canonical coded-open subadditivity constructed in [F3], not a general choice-dependent measure regularity theorem. The exponential-polynomial bound in step1.1 has tails tending to zero. For any specified rational error, take the FIRST integer tail cutoff giving a smaller bound. Thus the limsup is null. Enumerate the positive rational $\gamma$; assigning error $e2^{-j}$ to its $j$-th member and taking the corresponding first cutoff supplies ONE explicit open cover of their union with measure at most $e$. Hence intersecting these full-measure conclusions preserves full measure without choosing a null cover for each member. If $f(x)$ were VWMA, [F4] would give some $\gamma_x>0$ and infinitely many integer parameters with systole at most $e^{-\gamma_x\sum_i t_i}$. Choose rational $0<\gamma<\gamma_x$; for all sufficiently large coordinate sums those parameters belong to the $\gamma$-events, a contradiction. [step 1.1, F4, F5, algebra, F3]

3.1 Use ALL codes $(C,l,M,R)$, where $C$ is a rational-center rational-radius ball contained in $U$, $1\le l\le m$, and $M,R$ are positive integers, for which
$$|\{x\in C:\delta_\infty(g_{\mathbf t}u_{f(x)}\mathbb Z^{n+1})<\varepsilon\}|
\le M(R\varepsilon)^{1/(dl)}|C|$$
holds for every nonnegative real diagonal parameter and $0<\varepsilon\le1/R$. This is a definite predicate on a fixed integer-code set; no witnesses are selected for its members. These coded balls cover every nondegenerate point: its supplied ball $B$ from [F3] contains a rational ball $C$ about that point; restriction gives the same estimate with the finite volume ratio $|B|/|C|$, and sufficiently large integers $M$ and $R$ dominate that ratio and $1/\rho$. Thus some code is valid. Steps1.1–2.1 apply on every such code, with its OWN already specified integers. Enumerating all code/rational-$\gamma$ pairs and using their explicit first-cutoff null covers gives a null exceptional union by the same geometric error budget. The nondegenerate set's complement is null by hypothesis. Therefore almost every parameter is not VWMA, which by [F2] is strong extremality. No point-indexed neighborhood selection or countable choice of a representative ball has been made. [step 2.1, F1, F2, F3, given, algebra] ∎

## Remarks

The original full Statement and VWMA convention remain unchanged. Only the now-supplied quantitative interface and its explicit countable bookkeeping were updated; no broader dynamics or general measure-theory theorem is asserted.
