---
id: def-koszul-euler-characteristic-and-degree-indexed-multiplicity
kind: definition
title: "koszul euler characteristic and degree indexed multiplicity"
status: draft
origin: pipeline
deps: [def-koszul-complex-of-a-sequence-with-coefficients, def-composition-series-and-length-of-a-module, lem-module-relative-hilbert-samuel-polynomial-for-koszul-comparison]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Stacks Project, 43.15.4\u20136; local proof with stated module-relative and coefficient conventions"
      url: "https://stacks.math.columbia.edu/tag/0AZU"
    - title: "Hochster, Math 615 Winter 2012, pp.104\u2013108: Euler characteristics and the multiplicity theorem"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2024/10/615W12.pdf"
pipeline_run: phase-2-catchup-24
---

## Definition

Write $\ell_R$ for [[def-composition-series-and-length-of-a-module|module length]]. If $C_\bullet$ is a bounded homological complex of $R$-modules and every $H_i(C)$ has finite length, its **Euler characteristic** is
$$\chi(C)=\sum_{i\in\mathbb Z}(-1)^i\ell_R(H_i(C)).$$
Boundedness makes the sum finite. The terms of $C$ themselves need not have finite length. For a cochain complex use $\sum_n(-1)^n\ell_R(H^n(C))$; reindexing $C^n=C_{-n}$ preserves this number.

Let $(R,\mathfrak m)$ be a commutative Noetherian local ring and $M$ a finite $R$-module. Call $I$ a **module-relative ideal of definition** if $\ell_R(M/IM)<\infty$, allowing $I=R$. The unique eventual polynomial
$$P_{I,M}(n)=\ell_R(M/I^{n+1}M)\quad(n\gg0)$$
exists by [[lem-module-relative-hilbert-samuel-polynomial-for-koszul-comparison]]. For each integer $j\geq0$ define the **degree-indexed coefficient**
$$e_j(I,M)=j![T^j]P_{I,M}(T).$$
Here $[T^j]$ means the coefficient of $T^j$, and $0!=1$. Set $P_{I,0}=0$, $P_{R,M}=0$ and their coefficients equal to zero, consistently with that lemma. A coefficient above the degree is zero. Coefficients below the degree depend on the fixed $n+1$ convention; this definition does not identify the index with support dimension.

For a finite ordered sequence $\mathbf f$, $K(\mathbf f;M)$ denotes [[def-koszul-complex-of-a-sequence-with-coefficients]]. Its Euler characteristic is defined whenever its homology has finite length. For the empty sequence $I=0$ and $K(\varnothing;M)=M[0]$. The module-relative hypothesis then says $M$ has finite length, and $P_{0,M}$ is the constant $\ell_R(M)$.

## Remarks

Source locators: Hochster, Math 615 (Winter 2012), printed pp.104–108; Stacks 43.15.1 and 43.15.6. Our definition extends coefficient indexing to every nonnegative integer and uses the fixed $n+1$ variable convention. Polynomial existence is an earlier prerequisite, so there is no circular well-definedness reference to the later bridge theorem.
