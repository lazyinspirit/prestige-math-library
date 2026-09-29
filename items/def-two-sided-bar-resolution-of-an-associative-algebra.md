---
id: def-two-sided-bar-resolution-of-an-associative-algebra
kind: definition
title: The augmented two-sided bar complex
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-enveloping-algebra-and-bimodule-module-dictionary, def-augmented-chain-complex-over-an-object, def-tensor-product-of-modules-by-generators-and-relations]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9: Hochschild and Cyclic Homology, §9.1.3–9.1.5"
      url: https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, Hochschild homology section"
      url: https://arxiv.org/pdf/math/0510265
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Definition

Let $k$ be a field and $A$ a unital associative $k$-algebra. Set
$A^{\otimes_k 0}:=k$ and, for every $n\geq0$, set

$$\operatorname{Bar}_n(A):=A\otimes_k A^{\otimes_k n}\otimes_k A.$$

Write a pure tensor as $a_0\otimes\cdots\otimes a_{n+1}$. For $n\geq1$
define

$$d_n:=\sum_{r=0}^{n}(-1)^r\mu_{r,r+1}:\operatorname{Bar}_n(A)\to\operatorname{Bar}_{n-1}(A),$$

where $\mu_{r,r+1}$ multiplies slots $r$ and $r+1$ and leaves the other
slots in order. The augmentation is

$$\varepsilon:=\mu:\operatorname{Bar}_0(A)=A\otimes_kA\to A,\qquad a_0\otimes a_1\mapsto a_0a_1.$$

In degree one,
$$d_1(a_0\otimes a_1\otimes a_2)=a_0a_1\otimes a_2-a_0\otimes a_1a_2.$$

The empty middle tensor convention makes $\operatorname{Bar}_0(A)=A\otimes_kA$;
there is no unaugmented differential out of degree zero.

Using [[def-enveloping-algebra-and-bimodule-module-dictionary]], each term has
the following left and right $A^e$-module structures, considered separately:

$$(c\otimes d^{\mathrm{op}})\cdot(a_0\otimes\cdots\otimes a_{n+1})=ca_0\otimes a_1\otimes\cdots\otimes a_{n+1}d,$$

$$(a_0\otimes\cdots\otimes a_{n+1})\cdot(c\otimes d^{\mathrm{op}})=da_0\otimes a_1\otimes\cdots\otimes a_{n+1}c.$$

Every adjacent-multiplication face is linear for each of these module
structures: at the first and last faces this is associativity, and at internal
faces the outer factors are unchanged. The augmentation is linear on both
sides, since $\varepsilon(ca_0\otimes a_1d)=c(a_0a_1)d$ and
$\varepsilon(da_0\otimes a_1c)=d(a_0a_1)c$. This item specifies the bar terms,
maps, and outer actions; the asserted zero-composite identities are addressed
by the following bar-boundary lemma.
