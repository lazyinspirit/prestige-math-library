---
id: def-weak-bialgebra-and-weak-hopf-algebra
kind: definition
title: "Weak bialgebras, weak Hopf algebras, and counital maps"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-algebra-over-a-commutative-ring, def-hh-scalar-and-tensor-conventions, def-hh-coalgebra-and-coalgebra-map, thm-tensor-product-of-algebras-over-a-commutative-ring]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "Definition 7.23.1 and Exercises 7.23.2–7.23.5, printed pp. 186–189: weak Hopf axioms, counital bases, and module tensor product."
    - title: "P. Schauenburg, Weak Hopf Algebras and Quantum Groupoids"
      url: "https://www.impan.pl/shop/publication/transaction/download/product/86703"
      locator: "Sections 4–5, printed pp. 176–180: counital maps, source and target bases, separability, and the relative tensor product."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Fix a field $k$, an associative unital $k$-algebra $H$ (as in [[def-algebra-over-a-commutative-ring]]), and a coassociative counital coalgebra structure $(\Delta,\varepsilon)$ as in [[def-hh-coalgebra-and-coalgebra-map]]. Write $\Delta(h)=\sum h_{(1)}\otimes h_{(2)}$ and suppress the finite Sweedler sums. A **weak bialgebra** is these structures with multiplicative coproduct $\Delta(ab)=\Delta(a)\Delta(b)$, not necessarily a unital algebra map, and with the following weak unit and weak counit identities:
$$ (\Delta\otimes\mathrm{id})\Delta(1)=(\Delta(1)\otimes1)(1\otimes\Delta(1))=(1\otimes\Delta(1))(\Delta(1)\otimes1), $$
$$ \varepsilon(abc)=\sum\varepsilon(ab_{(1)})\varepsilon(b_{(2)}c)=\sum\varepsilon(ab_{(2)})\varepsilon(b_{(1)}c)\qquad(a,b,c\in H). $$
In general $\Delta(1)\ne1\otimes1$ and $\varepsilon$ is not multiplicative.

For $\Delta(1)=\sum1_{(1)}\otimes1_{(2)}$, define the **target** and **source counital maps**
$$ \varepsilon_t(h)=\sum\varepsilon(1_{(1)}h)1_{(2)},\qquad \varepsilon_s(h)=\sum1_{(1)}\varepsilon(h1_{(2)}). $$
Write $H_t=\varepsilon_t(H)$ and $H_s=\varepsilon_s(H)$. The source-and-target-bases lemma below proves these ranges are commuting unital subalgebras. We also use the variant
$$ \varepsilon_s'(h)=\sum1_{(1)}\varepsilon(1_{(2)}h). $$
The same lemma proves that its restriction to $H_t$ is the inverse anti-isomorphism to $\varepsilon_t|_{H_s}$.

A **weak Hopf algebra** is a weak bialgebra with a linear map $S:H\to H$ satisfying
$$ \sum h_{(1)}S(h_{(2)})=\varepsilon_t(h),\qquad \sum S(h_{(1)})h_{(2)}=\varepsilon_s(h),\qquad \sum S(h_{(1)})h_{(2)}S(h_{(3)})=S(h). $$
No bijectivity of $S$ is imposed in this definition. The module tensor product below uses the source-target maps and does not require an antipode.
