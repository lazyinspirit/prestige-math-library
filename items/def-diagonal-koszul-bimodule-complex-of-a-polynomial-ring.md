---
id: def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring
kind: definition
title: The polynomial diagonal Koszul bimodule complex
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-enveloping-algebra-and-bimodule-module-dictionary, def-koszul-complex-of-a-sequence-with-coefficients, def-graded-ring-module-bimodule-and-internal-shift]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9: Hochschild and Cyclic Homology, Exercise 9.1.3"
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

Let $k$ be a field and let $R=k[x_1,\ldots,x_n]$ for $n\geq0$. Since $R$
is commutative, identify its enveloping algebra
$R^e=R\otimes_kR^{\mathrm{op}}$ ([[def-enveloping-algebra-and-bimodule-module-dictionary]])
with $R\otimes_kR$. Write $x_i^L=x_i\otimes1$ and $x_i^R=1\otimes x_i$ for
the two copies of each polynomial generator, and put

$$u_i:=x_i^L-x_i^R.$$

The **diagonal Koszul bimodule complex** is the Koszul complex
$K(u_1,\ldots,u_n;R^e)$ defined in
[[def-koszul-complex-of-a-sequence-with-coefficients]], augmented by the
multiplication map $\mu:R^e\to R$. Its degree-$p$ term is free over $R^e$ on
symbols

$$\theta_{i_1}\wedge\cdots\wedge\theta_{i_p}\qquad(1\leq i_1<\cdots<i_p\leq n),$$

and its differential is

$$d(\theta_{i_1}\wedge\cdots\wedge\theta_{i_p})=\sum_{r=1}^p(-1)^{r-1}u_{i_r}\,\theta_{i_1}\wedge\cdots\wedge\widehat{\theta_{i_r}}\wedge\cdots\wedge\theta_{i_p}.$$

The augmentation is a chain map because $\mu(u_i)=0$ for every $i$; the
Koszul differential squares to zero by the defining alternating deletion
formula. There are $\binom np$ displayed basis symbols in degree $p$, and no
terms above degree $n$.

When $\deg_{\mathrm{int}}x_i=2$, assign each $\theta_i$ homological degree
$1$ and internal degree $2$. Then the differential lowers homological degree
by $1$ and preserves internal degree; degree $p$ is a direct sum of
$\binom np$ copies of $R^e\{2p\}$ under the shift convention
$M\{r\}_d=M_{d-r}$ from
[[def-graded-ring-module-bimodule-and-internal-shift]]. Internal grading adds
no super sign.

For $n=0$, the sequence and exterior generators are empty, $R=k$ and
$R^e=k$; the complex is $k$ in degree zero and $\mu:k\to k$ is the identity.
