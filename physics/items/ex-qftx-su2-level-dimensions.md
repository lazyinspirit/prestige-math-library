---
id: ex-qftx-su2-level-dimensions
kind: example
title: "$SU(2)$ level $k$ has $k+1$ torus states"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: "Pure mathematics; no physical premises or physical claim."
dependency_level: 2
deps:
  - prop-qftx-modular-dimension-sewing
  - thm-su2-root-unity-ribbon-category-is-modular
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  prop-qftx-modular-dimension-sewing: mathematical-premise
  thm-su2-root-unity-ribbon-category-is-modular: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity, arXiv:math/0308281v2"
      url: "https://arxiv.org/pdf/math/0308281"
      locator: "§6, PDF pp. 24–27: root-of-unity ribbon quotient and modularity theorem; the present exact $sl_2$ data are taken from the current supplier."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Example

For an integer level $k\ge1$, let $\ell=k+2$ and take the actual positive-trace ribbon semisimplification of the finite-dimensional integrable type-1 Lusztig divided-power $U_q(\mathfrak{sl}_2)$ tilting modules at $q=e^{\pi i/\ell}$. Its simple labels are $a=0,1,\ldots,k$, and its normalized matrix is

$$S_{ab}=\sqrt{\frac{2}{k+2}}\sin\!\left(\frac{(a+1)(b+1)\pi}{k+2}\right),\qquad 0\le a,b\le k.$$

Its unmarked torus state space has dimension $k+1$. At $k=1$, its closed genus-$g$ state-space dimension is $2^g$ for every integer $g\ge0$. These are mathematical consequences for the specified tilting quotient, not claims about a physical realization.

## Example references

[[thm-su2-root-unity-ribbon-category-is-modular]]

[[prop-qftx-modular-dimension-sewing]]

## Facts & Assumptions

**Given:** An integer level $k\ge1$, the convention $\ell=k+2$ and $q=e^{\pi i/\ell}$, and the weighted RT state spaces of the actual root-of-unity quotient.

[A1] Full AC and its inherited countable-choice consequences are retained from the modularity and weighted RT suppliers ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] [[thm-su2-root-unity-ribbon-category-is-modular]] establishes the actual positive-trace tilting quotient for every $\ell\ge3$, with simple labels $a=0,\ldots,\ell-2$ and normalized matrix $S_{ab}=\sqrt{2/\ell}\sin((a+1)(b+1)\pi/\ell)$.

[F2] [[prop-qftx-modular-dimension-sewing]] gives $\dim V(\Sigma_g)=\sum_{a\in I}S_{0a}^{2-2g}$ for all closed unmarked surfaces and $\dim V(T^2)=|I|$.

## Verification

1.1 Since $k\ge1$, $\ell=k+2\ge3$. By [F1], the actual quotient is modular and its label set is $I=\{0,\ldots,\ell-2\}=\{0,\ldots,k\}$, with the displayed $S$ matrix under the positive-trace convention. For each $a\in I$, $S_{0a}=\sqrt{2/\ell}\sin((a+1)\pi/\ell)\ne0$ because $0<(a+1)\pi/\ell<\pi$. [A1, F1, given, algebra]

2.1 The genus-one formula in [F2] has exponent zero and therefore contributes one for each of the $k+1$ nonzero entries just identified. Thus $\dim V(T^2)=|I|=k+1$. [F1, F2, step 1.1, algebra]

3.1 For $k=1$, $\ell=3$ and $S_{00}=S_{01}=\sqrt{2/3}\sin(\pi/3)=1/\sqrt2$. Applying [F2] gives, for every $g\ge0$,
$$\dim V(\Sigma_g)=2\left(\frac1{\sqrt2}\right)^{2-2g}=2\cdot2^{g-1}=2^g.$$
The exponent formula is valid also at $g=0$, and no limiting or path-integral argument is used. [F1, F2, step 1.1, algebra] ∎
