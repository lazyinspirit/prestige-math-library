---
id: lem-separability-contracts-normalized-categorical-hochschild-complex
kind: lemma
title: A separability element contracts the normalized categorical Hochschild complex
status: draft
dependency_level: 0
origin: session
deps: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, Proposition 9.1.1 and formula (9.2)
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
---

## Statement

Let $A$ be an algebra object in a $k$-linear monoidal category and $B$ an $A$-bimodule. Suppose $e:\mathbf1\to A\otimes A$ satisfies
$$\mu e=\eta,\qquad (\mu\otimes\mathrm{id})(\mathrm{id}\otimes e)=(\mathrm{id}\otimes\mu)(e\otimes\mathrm{id}).$$
Set $C^n=\operatorname{Hom}(A^{\otimes n},B)$, with the Hochschild differential given by the alternating sum of the left action, adjacent multiplications, and the right action. Its normalized subcomplex consists of maps vanishing whenever any input is the unit $\eta$. For every $n\geq1$, define
$$h_n(f)=\lambda_B(\mathrm{id}_A\otimes f)(e\otimes\mathrm{id}_{A^{\otimes(n-1)}}),$$
where $\lambda_B$ denotes the left $A$-action. Then $h$ preserves the normalized subcomplex and $dh+hd=\mathrm{id}$ in every positive degree.

## Proof

**Given:** The two separability identities and the commuting left and right $A$-actions on $B$. We suppress coherent associators. The formal notation $e=\sum_r x_r\otimes y_r$ denotes a morphism composite; it does not assume that objects have elements.

1.1 Write the differential explicitly as $$(df)(a_1,\ldots,a_{n+1})=a_1f(a_2,\ldots,a_{n+1})+\sum_{j=1}^n(-1)^jf(a_1,\ldots,a_ja_{j+1},\ldots,a_{n+1})+(-1)^{n+1}f(a_1,\ldots,a_n)a_{n+1}.$$ Each pair of successive faces occurs twice with opposite signs in $d^2$, by associativity of multiplication and the bimodule axioms; hence $d^2=0$. At a unit input, the two faces adjoining that input cancel, and all other faces vanish for a normalized cochain. Thus normalization defines a subcomplex. The formula $h_nf=\sum_r x_rf(y_r,-)$ preserves normalization because every original input is still an input of $f$. [given, algebra]

2.1 For $n\geq1$, expansion gives $$(h_{n+1}df)(a_1,\ldots,a_n)=f(a_1,\ldots,a_n)-\sum_rx_rf(y_ra_1,a_2,\ldots,a_n)+\sum_{j=1}^{n-1}(-1)^{j+1}\sum_rx_rf(y_r,a_1,\ldots,a_ja_{j+1},\ldots,a_n)+(-1)^{n+1}\sum_rx_rf(y_r,a_1,\ldots,a_{n-1})a_n.$$ The first term uses $\sum_rx_ry_r=1$. The other expansion is $$(dh_nf)(a_1,\ldots,a_n)=\sum_ra_1x_rf(y_r,a_2,\ldots,a_n)+\sum_{j=1}^{n-1}(-1)^j\sum_rx_rf(y_r,a_1,\ldots,a_ja_{j+1},\ldots,a_n)+(-1)^n\sum_rx_rf(y_r,a_1,\ldots,a_{n-1})a_n.$$ Centrality of $e$ identifies the first term of the second expansion with $\sum_rx_rf(y_ra_1,a_2,\ldots,a_n)$. All remaining terms cancel in pairs, proving $h_{n+1}d+dh_n=\mathrm{id}_{C^n}$, including $n=1$ where the interior sums are empty. This identity restricts to the normalized subcomplex by the preceding step. [given, step 1.1, algebra] ∎

In degree zero the corresponding identity is $h_1d=\mathrm{id}-P$, where $P(b)=\sum_rx_rby_r$ projects onto the bimodule-invariant part. No degree-zero vanishing is asserted.
