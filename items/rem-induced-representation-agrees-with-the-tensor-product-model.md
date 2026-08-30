---
id: rem-induced-representation-agrees-with-the-tensor-product-model
kind: remark
title: "The function model of induction agrees with the tensor-product model $k[G]\\otimes_{k[H]}W$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-bimodule, def-induced-r-linear-g-module-by-h-covariant-functions, prop-elementary-tensor-formulas-descend-exactly-when-balanced, thm-universal-property-of-module-tensor-products]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Proposition 4.3.2"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Anupam Singh, Representation Theory of Finite Groups, Section 18.1"
      url: "https://arxiv.org/pdf/1001.0462.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
---

## Remark

The present page defines induction by $H$-covariant functions because that model
is self-contained in the library's existing module language. When $R$ is
commutative and $[G:H]$ is finite, this is the same object as the tensor-product
model.

Indeed, the subgroup inclusion makes $R[G]$ an $(R[G],R[H])$-bimodule
([[def-bimodule]]), so $R[G]\otimes_{R[H]}W$ is defined by the universal
property of the tensor product
([[thm-universal-property-of-module-tensor-products]]). The elementary formula

$$ [g]\otimes w\longmapsto f_{g,w}, \qquad f_{g,w}(gh):=h^{-1}\cdot w, $$

with $f_{g,w}$ zero off the left coset $gH$, is balanced in the $R[H]$-variable
and therefore descends uniquely
([[prop-elementary-tensor-formulas-descend-exactly-when-balanced]]).
Comparing both sides on a finite left transversal shows that this descended map
is a $G$-equivariant isomorphism

$$
R[G]\otimes_{R[H]}W\cong \operatorname{Ind}_H^G W.
$$

Thus, in the finite-index setting used for finite-group character theory, the
function model and the tensor-product model are two descriptions of the same
induced module. For infinite index, the displayed function model is instead
larger: the tensor product corresponds to the finitely supported covariant
functions.
