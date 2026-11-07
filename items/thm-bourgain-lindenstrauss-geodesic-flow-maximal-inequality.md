---
id: thm-bourgain-lindenstrauss-geodesic-flow-maximal-inequality
kind: theorem
title: "Geodesic-flow maximal inequality for the corrected entropy alternative"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [thm-integrals-are-invariant-under-measure-preserving-maps, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-continuity-from-below-for-measures, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-integral-triangle-inequality]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Jean Bourgain and Elon Lindenstrauss, Correction to Entropy of Quantum Limits"
      url: "https://math.huji.ac.il/~elon/Publications/erratum-pos-entropy.pdf"
      locator: "Theorem 2 and §2, printed pp. 2–3."
---

## Statement

Let $(X,\Sigma,\mu)$ be a sigma-finite measure space with a jointly measurable measure-preserving real flow $a(t)$, and let $f\in L^1(\mu)$ be real valued. On the invariant conull set where its orbit paths are locally integrable put $M(f,x)=\sup_{T>0}T^{-1}\int_0^T f(xa(t))\,dt$, and put $M=0$ elsewhere. For every $\lambda>0$,
\[
\mu\{M(f,\cdot)\ge\lambda\}\le\|f\|_1/\lambda.
\]
If $\|f\|_1>0$, this gives $\mu\{M\ge R\|f\|_1\}\le1/R$ for every $R>0$; if $\|f\|_1=0$, then $M=0$ almost everywhere. In particular, if $\mu(X\setminus\Omega)<\delta$, then $\mu\{M(1_{X\setminus\Omega},\cdot)>0.199\}\le5.1\delta$.

## Statement references

[Jean Bourgain and Elon Lindenstrauss, Correction to Entropy of Quantum Limits, Theorem 2 and §2, printed pp. 2–3.](https://math.huji.ac.il/~elon/Publications/erratum-pos-entropy.pdf)

## Facts & Assumptions

**Given:** The complete objects and hypotheses in the Statement. The positive-threshold formulation separates the zero-function case, for which the source's normalized non-strict level set is not valid.

[F1] [[thm-integrals-are-invariant-under-measure-preserving-maps]]: measure-preserving pullback preserves integrals.

[F2] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] and [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: nonnegative and integrable jointly measurable functions may be integrated in either order.

[F3] [[thm-continuity-from-below-for-measures]]: measure is continuous along increasing measurable sets.

[F4] [[thm-linearity-of-the-lebesgue-integral-on-l-one]] and [[thm-integral-triangle-inequality]]: linearity and the integral triangle inequality.

## Proof

**Proof technique:** direct.

1.1 First let $h\ge0$ be integrable and $T$ a measure-preserving transformation. Fix $\lambda>0$. Define $S_k=\sum_{j=0}^{k-1}(h\circ T^j-\lambda)$, $F_N=\max(0,S_1,\ldots,S_N)$ and $E_N=\{F_N>0\}$. This set is contained in $\bigcup_{j<N}\{h\circ T^j>\lambda\}$, of finite measure, and $0\le F_N\le\sum_{j<N}h\circ T^j$ is integrable. On $E_N$, deleting the first summand from a maximizing partial sum shows $F_N\le h-\lambda+F_N\circ T$. Consequently
\[
\int_{E_N}(h-\lambda)\,d\mu\ge\int F_N\,d\mu-\int_{E_N}F_N\circ T\,d\mu\ge0.
\]
The last inequality uses nonnegativity and invariance. Hence $\lambda\mu(E_N)\le\|h\|_1$. Since $E_N$ increases, [F3] gives $\mu\{\sup_{n\ge1}n^{-1}\sum_{j<n}h\circ T^j>\lambda\}\le\|h\|_1/\lambda$. [given, F1, F3, F4, construct, algebra]

1.2 By [F1] and [F2], for every integer $m\ge1$ the integral of $|f(xa(t))|$ over $X\times[-m,m]$ is $2m\|f\|_1$. Thus outside a measurable null set the orbit path is integrable on each such interval. The set $G$ of all these points is invariant under every real time shift: local integrability on the whole line is preserved by translation. Define all subsequent averages as zero outside $G$. [given, F1, F2, construct]

1.3 For $\delta_m=2^{-m}$ put $h_m(x)=\delta_m^{-1}\int_0^{\delta_m}|f(xa(t))|\,dt$ on $G$ and zero elsewhere. It is nonnegative, measurable and has integral $\|f\|_1$. Apply step 1.1 to $T_m=a(\delta_m)$ and $h_m$. Its $n$th discrete average is exactly $(n\delta_m)^{-1}\int_0^{n\delta_m}|f(xa(t))|\,dt$. The sets where the supremum over this grid exceeds $\lambda$ increase with $m$, and each has measure at most $\|f\|_1/\lambda$. [step 1.1, step 1.2, F1, F2, F4, algebra]

1.4 For an orbit path locally in $L^1$, its indefinite integral is continuous: over intervals of length tending to zero, split the integrand into its part bounded by $K$ and the integrable tail, first making the tail integral small and then the interval length small. Thus the supremum of its averages over positive dyadic times equals its supremum over all $T>0$. This also proves measurability for signed $f$. Applying [F3] to the grid sets in step 1.3 gives $\mu\{M(|f|)>\lambda\}\le\|f\|_1/\lambda$. Since $M(f)\le M(|f|)$, the same strict bound holds for $M(f)$. Replacing $\lambda$ by positive numbers increasing to $\lambda$ proves the non-strict bound (continuity from above applies since one such level set has finite measure). [step 1.2, step 1.3, F3, F4, algebra, algebra]

1.5 If $\|f\|_1>0$ substitute $\lambda=R\|f\|_1$. If it is zero, the bounds at $\lambda=1/n$ show $M(|f|)=0$ almost everywhere, hence all signed orbit averages vanish almost everywhere. Finally apply the bound to $f=1_{X\setminus\Omega}$ at $\lambda=0.199$; $1/0.199<5.1$. [step 1.4, algebra] ∎
