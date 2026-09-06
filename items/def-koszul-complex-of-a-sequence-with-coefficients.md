---
id: def-koszul-complex-of-a-sequence-with-coefficients
kind: definition
title: "Koszul Complex Of A Sequence With Coefficients"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-exterior-algebra-of-a-finite-free-module, def-tensor-product-of-modules-by-generators-and-relations, def-chain-complex-in-an-abelian-category]
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/0621"
pipeline_run: frontier-31a
---

## Definition

Let $R$ be a commutative unital ring, let $\mathbf x=(x_1,\ldots,x_n)$ be a finite ordered sequence in $R$, and let $M$ be an $R$-module. On $\bigwedge R^n$, with standard basis $e_1,\ldots,e_n$, let $\delta$ be the $R$-linear graded derivation of degree $-1$ with $\delta(e_i)=x_i$ and $\delta(R)=0$; thus $\delta(ab)=\delta(a)b+(-1)^pa\delta(b)$ for homogeneous $a$ of degree $p$.

The **Koszul complex with coefficients in $M$** is $K(\mathbf x;M)=(\bigwedge R^n\otimes_R M,d)$, where $d=\delta\otimes\operatorname{id}_M$. Its degree-$p$ term is $\bigwedge^pR^n\otimes_R M$ for $0\leq p\leq n$, and zero otherwise. Explicitly,

$$d(e_{i_1}\wedge\cdots\wedge e_{i_p}\otimes m)=\sum_{j=1}^p(-1)^{j-1}e_{i_1}\wedge\cdots\widehat{e_{i_j}}\cdots\wedge e_{i_p}\otimes x_{i_j}m.$$

The empty wedge is $1\in R$. In particular $d(e_i\otimes m)=1\otimes x_im$ in $K_0=R\otimes_R M$, canonically identified with $M$ by $r\otimes m\mapsto rm$ with inverse $m\mapsto1\otimes m$. The differential out of degree zero is zero. The derivation respects the exterior relations and the two orders of deleting distinct factors cancel in $d^2$, so these maps form a chain complex. For $n=0$ this is $M$ in degree zero under the same identification.
