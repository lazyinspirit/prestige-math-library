---
dependency_level: 2
id: lem-maynard-smooth-simplex-approximation
kind: lemma
title: "Smooth interior approximation preserves Maynard's strict variational inequalities"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-maynard-variational-quantity-mk
  - thm-multidimensional-riemann-criterion
  - thm-multidimensional-integral-properties
  - thm-riemann-fubini-on-product-rectangles
  - lem-euclidean-bump-for-a-compact-set-inside-an-open-set
  - thm-heine-borel-rn
justified_by: []
proof_strategy: direct
axiom_use: "Finite grids and finitely many compact-set cutoffs suffice; no choice axiom is added."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Maynard, Small gaps between primes (2015)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
      locator: "Proposition 4.2 proof, printed p. 389: smooth approximation of the Riemann test function. The quantitative approximation below expands that step locally."
verification:
  precheck: pending
---

## Statement

Let $k\ge2$ and let $F\in\mathcal R_k$ have the Riemann section and marginal conventions of Maynard's simplex functionals. For every $\eta>0$ there is a real smooth function $\Phi$ on $\mathbb R^k$, compactly supported in
$$U_k=\{t:t_i>0\ (1\le i\le k),\ \sum_i t_i<1\},$$
such that
$$\int_{[0,1]^k}|F-\Phi|^2<\eta^2,\quad |\sqrt{I_k(F)}-\sqrt{I_k(\Phi)}|<\eta,\quad |\sqrt{J_{k,i}(F)}-\sqrt{J_{k,i}(\Phi)}|<\eta.$$
In particular, if $F\in\mathcal F_k$ and $\sum_iJ_{k,i}(F)>cI_k(F)$ for a real $c$, then such a $\Phi\in\mathcal F_k$ can be chosen with $\sum_iJ_{k,i}(\Phi)>cI_k(\Phi)$.

## Statement references

[[def-maynard-variational-quantity-mk]]

[Maynard, Proposition 4.2 proof, p. 389](https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf)

## Facts & Assumptions

**Given:** $k$, $F$ and $\eta$ as stated, with all integrals Riemann integrals.

[F1] [[thm-multidimensional-riemann-criterion]]: bounded functions are integrable exactly when their grid Darboux gaps can be made arbitrarily small.

[F2] [[thm-multidimensional-integral-properties]]: linearity, monotonicity and finite rectangular subdivision hold for integrable functions.

[F3] [[thm-riemann-fubini-on-product-rectangles]]: multiple and iterated integrals agree when the sections are integrable.

[F4] [[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]]: for compact $K\subset V$ open, a smooth cutoff into $[0,1]$ equals one on $K$ and has support in $V$. Closed boxes are compact by [[thm-heine-borel-rn]].

[F5] [[def-maynard-variational-quantity-mk]]: $F$ is bounded, vanishes outside $R_k$, every coordinate section is integrable and every squared marginal is integrable.

## Proof

1.1 Fix a bound $M\ge1$ for $|F|$. The square of any bounded integrable real function is integrable: on each grid cell its oscillation is at most twice its absolute bound times the original oscillation, so [F1] applies. For integrable $f,g$, applying [F2] to $(f-tg)^2\ge0$ for every real $t$ and considering the resulting quadratic gives [F1, F2, algebra]
$$\left|\int fg\right|^2\le\int f^2\int g^2.$$
Here products are integrable by $4fg=(f+g)^2-(f-g)^2$. Expanding squares then proves the triangle inequality for $\|f\|_2=(\int f^2)^{1/2}$ and hence $|\|f\|_2-\|g\|_2|\le\|f-g\|_2$. These arguments apply also to one-dimensional sections. [F1, F2, algebra]

1.2 For any prescribed $\varepsilon>0$, choose a rectangular grid with $\sum_Q\operatorname{osc}_Q(F)|Q|$ arbitrarily small using [F1], and refine it by a sufficiently fine uniform grid of mesh $h$. Discard cells whose closures are not contained in $U_k$. A discarded cell on which $F$ need not vanish lies within distance $O_k(h)$, in coordinate sup norm, of a face $t_i=0$ or $\sum_i t_i=1$. The coordinate strips have volume $O_k(h)$. For the oblique strip, fix the first $k-1$ coordinates: the allowed last-coordinate interval has length $O_k(h)$, so rectangular upper sums bound its volume by $O_k(h)$ as well. Thus the relevant discarded region has arbitrarily small volume. All grid faces have zero Riemann content, by finite strips of arbitrarily small total volume. [F1, F2, F5, construct]

2.1 On each remaining cell put $a_Q=\inf_QF$, and define the step function $P=a_Q$ on its interior and zero on all other cells and grid faces. Its square error satisfies [F1, F2, F5, step 1.1, step 1.2, algebra]
$$\int|F-P|^2\le2M\sum_Q\operatorname{osc}_Q(F)|Q|+M^2O_k(h).$$
Indeed, on a retained cell $|F-a_Q|^2\le2M\operatorname{osc}_Q(F)$, and on the relevant discarded region $|F|^2\le M^2$. Grid faces contribute zero. Choosing the original Darboux gap and then $h$ sufficiently small gives $\|F-P\|_2<\varepsilon$. All errors here are bounded integrable functions by [F1] and step 1.1. [F1, F2, F5, step 1.1, step 1.2, algebra]

3.1 In each of the finitely many retained cells $Q$, choose a concentric closed inner box $K_Q$ so close to its boundary that $\sum_Q|Q\setminus K_Q|<\varepsilon^2/M^2$. By [F4] obtain $0\le\rho_Q\le1$, equal to one on $K_Q$ and supported in $\operatorname{int}Q$. Define $\Phi=\sum_Qa_Q\rho_Q$. These finitely many supports are disjoint and compactly contained in $U_k$. Consequently $\Phi$ is smooth with compact support there, and [F2, F4, step 1.1, step 2.1, construct]
$$\int|P-\Phi|^2\le M^2\sum_Q|Q\setminus K_Q|<\varepsilon^2.$$
Step 1.1 gives $\|F-\Phi\|_2<2\varepsilon$. The empty retained list gives $P=\Phi=0$ and causes no exception. [F2, F4, step 1.1, step 2.1, construct]

4.1 Write $H=F-\Phi$. Every section of $H$ is integrable. Sectionwise step 1.1 with the constant function one gives $(\int_0^1H\,dt_i)^2\le\int_0^1H^2\,dt_i$. The squared marginal on the left is integrable: it is the square of the difference of the original marginal and a continuous marginal, and the original marginal itself is integrable by [F3]. Integrating and applying [F3] to $H^2$ yields $\|G_{F,i}-G_{\Phi,i}\|_2\le\|H\|_2$. Apply the reverse triangle inequality from step 1.1 to $F,\Phi$ and to their marginals, and choose $2\varepsilon<\eta$. This proves all three approximation bounds. [F1, F2, F3, F5, step 1.1, step 3.1, algebra]

5.1 If the original $I$ and every $J_i$ are positive, choose $\eta$ smaller than half the minimum of their square roots. Step 4.1 then makes the new $I$ and every $J_i$ positive. The same bounds make their values tend to the original values as $\eta$ decreases. The finite expression $\sum_iJ_i-cI$ therefore remains positive for sufficiently small $\eta$. All constructions used only finitely many boxes and cutoffs. [F2, F5, step 4.1, algebra] ∎
