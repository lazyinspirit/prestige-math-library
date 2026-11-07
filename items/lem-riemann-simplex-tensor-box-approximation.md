---
dependency_level: 0
id: lem-riemann-simplex-tensor-box-approximation
kind: lemma
title: Finite tensor-box approximation with truncated-marginal boundary control
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- thm-multidimensional-riemann-criterion
- thm-multidimensional-integral-properties
- thm-riemann-fubini-on-product-rectangles
- lem-euclidean-bump-for-a-compact-set-inside-an-open-set
justified_by: []
proof_strategy: direct
axiom_use: Finite arithmetic and proper Riemann integrals; no choice hypothesis is added.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: D. H. J. Polymath, Variants of the Selberg sieve, and bounded intervals containing many primes
    url: https://arxiv.org/pdf/1407.4897v4
    locator: FullSection5.3, printedpp36–40, finiteproduct approximation and GOOD/BAD component partition; compareSection5.1 product form(82)
---

## Statement

Let $k\ge2$, $0<B<A$, and let $F:\mathbb R^k\to\mathbb R$ be bounded, zero outside $\{t_i\ge0,\sum_i t_i\le A\}$, Riemann integrable on an enclosing rectangle, with all coordinate sections integrable. Assume also its coordinate marginals and their squares are Riemann integrable. Set $M=\max(1,\|F\|_\infty)$ and $H_iF(t_{-i})=\int_0^AF(t)\,dt_i$. For every $h,\eta>0$ there is a real smooth compactly supported function $G$ in $\{t_i>0,\sum_i t_i<A\}$, a FINITE decomposition $G=\sum_Qc_Q\prod_l\rho_{Q,l}(t_l)$ into box products, and functions $G_i$ obtained by retaining boxes whose OTHER-coordinate right endpoints sum to $<B$, such that $\|F-G\|_2<\eta$. Each box has side lengths at most $h$; $0\le\rho_{Q,l}\le1$, its support is interior to its interval, and the FULL boxes have disjoint interiors. The absolute envelope satisfies $\sum_Q|c_Q|\prod_l|\rho_{Q,l}|\le M$. Each $G_i$ has outer-coordinate support compactly inside $\sum_{l\ne i}t_l<B$. Moreover
$$\|H_iF-H_iG\|_2\le\sqrt A\|F-G\|_2,$$
$$\beta_i:=2\int H_iG\,H_iG_i-\int(H_iG_i)^2=J_{i,B}(G)-\int_{\sum_{l\ne i}t_l\le B}(H_iG-H_iG_i)^2\ge J_{i,B}(G)-C_{k,A}M^2h,$$
where $J_{i,B}(G)=\int_{\sum_{l\ne i}t_l\le B}(H_iG)^2$. All norms are proper Riemann norms. The constant is independent of the number of boxes and their coefficients. No choice axiom is added.

## Facts & Assumptions

**Given:** The data in the Statement. All integrals are proper Riemann integrals of zero extensions to enclosing rectangles.

[F1] [[thm-multidimensional-riemann-criterion]] gives finite Darboux grids with arbitrarily small gaps; [[thm-multidimensional-integral-properties]] gives linearity, monotonicity and coordinate additivity.

[F2] [[thm-riemann-fubini-on-product-rectangles]] permits iterated integrals for integrable functions with integrable sections.

[F3] [[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]] gives a smooth cutoff valued in $[0,1]$ equal to one on a compact inner interval and supported inside its open outer interval.

## Proof

1.1 Take a finite Darboux grid for $F$ on $[0,A]^k$ with arbitrarily small gap $\delta$, and refine it to mesh at most $\min(h,\varepsilon)$. Delete every closed cell that meets $t_l=0$ or $\sum_l t_l=A$ or is not contained in the positive interior simplex. The union of boundary-meeting cells has content $O_{k,A}(\varepsilon)$: the coordinate faces have thickness at most $\varepsilon$, and fixing $k-1$ coordinate intervals confines the last-coordinate threshold to width $k\varepsilon$. Away from this union, cells outside the simplex have $F=0$. On a retained cell put $c_Q=\inf_QF$. The piecewise constant step function $E$ with these values and zero elsewhere has $|E|\le M$ and [F1] gives $\int|F-E|^2\le2M\delta+4M^2O_{k,A}(\varepsilon)$, because $|F-c_Q|^2\le2M(\sup_QF-\inf_QF)$ on retained cells. Grid-face values affect only finite faces of zero content. Choose $\delta,\varepsilon$ so this norm is less than $\eta/2$. The step-function error and its square are integrable by cellwise Darboux oscillation estimates. [F1, given, algebra]

2.1 In every retained box choose a closed inner rectangle whose removed volume is as small as prescribed, and use [F3] in each coordinate to obtain $\rho_{Q,l}$. Only finitely many choices are made. Choose the sum of removed volumes less than $\eta^2/(4M^2)$. Put $G=\sum_Qc_Q\prod_l\rho_{Q,l}$. It is smooth, with support compactly inside the positive simplex; all products lie in disjoint box interiors. Thus the absolute envelope is at most $M$, and $\|E-G\|_2<\eta/2$. The elementary inequality $\|u+v\|_2\le\|u\|_2+\|v\|_2$ follows by expanding the square and applying integral Cauchy–Schwarz, which follows from $\int(u-tv)^2\ge0$ for every real $t$. It proves $\|F-G\|_2<\eta$. This includes the empty collection, which gives $G=0$. [F1, F3, step 1.1, algebra]

3.1 For completeness the functions required in the norm estimate are integrable: bounded Riemann functions remain integrable on taking squares, since oscillation of $u^2$ is at most $2\|u\|_\infty$ times that of $u$; products follow by polarization. With $D=F-G$, the sections are integrable by assumption and smoothness. Sectionwise Cauchy–Schwarz gives $|\int_0^ADdt_i|^2\le A\int_0^AD^2dt_i$. The marginal difference and square are integrable by the stated hypotheses and smoothness of $G$. Apply [F1],[F2] to obtain $\|H_iF-H_iG\|_2^2\le A\|F-G\|_2^2$. The same argument holds with the outer domain truncated at $B$, whose boundary has zero content. It follows in particular that $I(G)\to I(F)$ and $J_{i,B}(G)\to J_{i,B}(F)$ as $\eta\to0$, by the norm triangle inequality. [F1, F2, step 2.1, algebra]

3.2 For coordinate $i$ call a retained box GOOD if the sum of its other-coordinate right endpoints is $<B$; let $G_i$ be the finite sum of these products. If the collection is nonempty, its maximal such sum is a fixed number strictly below $B$, so its outer support has the asserted compact cutoff; for an empty collection use cutoff zero. The envelope in step 2.1 bounds $|H_iG|,|H_iG_i|\le AM$. At any outer point with sum $<B-(k-1)h$, every box product nonzero there has other right-endpoint sum at most the point's sum plus $(k-1)h$, hence is GOOD. It follows, including after integration in coordinate $i$, that $H_iG_i=H_iG$ there. At outer sum $\ge B$ every GOOD component vanishes. All integrals are integrable piecewise smooth functions, including their restrictions at $B$. [F1, F2, step 2.1, algebra]

4.1 Expanding the square on the truncated domain and using the vanishing outside it proves the exact $\beta_i$ identity in the Statement. Its error is supported in $B-(k-1)h\le\sum_{l\ne i}t_l\le B$ in $[0,A]^{k-1}$. Fixing $k-2$ coordinates bounds its content by $(k-1)h A^{k-2}$, also when its lower bound is negative. The squared difference is at most $4A^2M^2$. Thus one may take $C_{k,A}=4(k-1)A^k$, independently of the number of components. The choice of grid and its derivative constants is finite and fixed before any later asymptotic limit. This proves all assertions without an infinite selection. [F1, F2, step 3.1, step 3.2, algebra] ∎

## Source notes


**Statement adaptation:** Restricts the source L2density argument to bounded properRiemann functions and proves finite Darboux tensor approximation, a uniform absolute envelope and explicit boundary-slab control locally; not asserted verbatim or imported. The actual source reading and local proof boundary are recorded in `source-reading-and-barriers.json`; this is not a claim of verbatim source wording or an external theorem input.
