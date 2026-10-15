---
id: lem-hh-free-right-right-hopf-module
kind: lemma
title: "The free right-right Hopf module on a vector space"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 4
deps:
  - def-hh-right-right-hopf-module-and-coinvariants
  - def-hh-bialgebra-and-bialgebra-map
  - def-hh-scalar-and-tensor-conventions
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Hans-Juergen Schneider, Lectures on Hopf Algebras, notes by Sonia Natale, Trabajos de Matematica 31/95"
      url: "https://www.famaf.unc.edu.ar/~andrus/papers/Schn1.pdf"
      locator: "Section 2, printed p. 22: the trivial Hopf module W tensor H and its right action and coaction."
    - title: "D. S. Drogalski, Chapter 3: Hopf Algebras, UC San Diego 207A lecture notes"
      url: "https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf"
      locator: "Section 3.6, printed p. 42: Example 3.36 and the tensor-factor construction."
---

## Statement

Let $k$ be a field, $H$ a Hopf algebra over $k$, and $V$ any $k$-vector space. On $V\otimes H$ define
$$
(v\otimes h)g:=v\otimes hg,\qquad \rho(v\otimes h):=\sum(v\otimes h_1)\otimes h_2.
$$
These maps make $V\otimes H$ a right-right Hopf module. No finite-dimensionality or choice of basis for $V$ is needed.

## Facts & Assumptions

**Given:** A field $k$, a Hopf algebra $H$ over $k$, and a $k$-vector space $V$.

[F1] A bialgebra has a unital associative algebra structure and a counital coassociative coalgebra structure ([[def-hh-bialgebra-and-bialgebra-map]]).

[F2] The coproduct and counit are unital algebra homomorphisms, so $\Delta(hg)=\sum h_1g_1\otimes h_2g_2$ ([[def-hh-bialgebra-and-bialgebra-map]]).

[F3] Tensor products are algebraic; their elements are finite sums of elementary tensors and multilinear formulas define linear maps on them ([[def-hh-scalar-and-tensor-conventions]]).

[F4] A right-right Hopf module is a right module and right comodule satisfying $\rho(xg)=\sum x_0g_1\otimes x_1g_2$ ([[def-hh-right-right-hopf-module-and-coinvariants]]).

## Proof

1.1 For each $g\in H$, the formula $(v\otimes h)g=v\otimes hg$ extends linearly to $V\otimes H$, since multiplication by $g$ is linear in $h$; it is bilinear in $(v\otimes h,g)$. Associativity of $H$ gives $((v\otimes h)g)t=v\otimes(hg)t=v\otimes h(gt)=(v\otimes h)(gt)$, and its unit gives $(v\otimes h)1_H=v\otimes h$. Thus it is a right module action. [given, F1, F3, construct]

1.2 The formula $\rho=\operatorname{id}_V\otimes\Delta$ is linear. Coassociativity of $\Delta$ gives $(\rho\otimes\operatorname{id})\rho(v\otimes h)=\sum(v\otimes h_1)\otimes h_2\otimes h_3=(\operatorname{id}\otimes\Delta)\rho(v\otimes h)$, and the counit equation gives $(\operatorname{id}_{V\otimes H}\otimes\varepsilon)\rho(v\otimes h)=\sum v\otimes h_1\varepsilon(h_2)=v\otimes h$ under the tensor-unit identification. Hence $\rho$ is a right coaction. [given, F1, F3]

2.1 For $v\otimes h$ and $g\in H$, multiplicativity of $\Delta$ gives $\rho((v\otimes h)g)=\sum(v\otimes h_1g_1)\otimes h_2g_2$. On the other side, $\sum(v\otimes h)_0g_1\otimes(v\otimes h)_1g_2=\sum((v\otimes h_1)g_1)\otimes h_2g_2$, which is the same tensor by the action definition. Thus the compatibility in [F4] holds on elementary tensors. [given, F2, F4, step 1.1, step 1.2, algebra]

3.1 Both compatibility sides are linear in the $V\otimes H$ input and in $g$, and elementary tensors span the tensor product by [F3]. Therefore the equality of step 2.1 holds for every element, proving the Hopf-module compatibility. [step 2.1, F3, algebra] ∎
