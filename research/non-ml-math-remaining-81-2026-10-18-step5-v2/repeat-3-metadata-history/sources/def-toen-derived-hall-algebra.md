---
id: def-toen-derived-hall-algebra
kind: definition
title: "Toën derived Hall algebra by homotopy-cofiber convolution"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-toen-locally-finite-dg-category
  - def-locally-finite-homotopy-type
justified_by:
  - lem-derived-hall-moduli-spaces-and-convolution-are-finite
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bertrand Toën, Derived Hall algebras, arXiv:math/0501343v4, §§3–4"
      url: "https://arxiv.org/pdf/math/0501343v4"
    - title: "Olivier Schiffmann, Lectures on Hall algebras, arXiv:math/0611617v2, §5.6"
      url: "https://arxiv.org/pdf/math/0611617v2"
verification:
  precheck: n/a
---

## Definition

Let $\mathcal T$ be a locally finite dg-enhancement over the finite field $\Bbbk=\mathbb F_q$ in the sense of [[def-toen-locally-finite-dg-category]]. Let $X^{(0)}$ be the core homotopy type of its perfect-module category: points are perfect modules, paths are quasi-isomorphisms, and higher paths are the derived mapping spaces. Let $X^{(1)}$ be the core homotopy type of arrows between perfect modules and $X^{(2)}$ the core homotopy type of composable pairs. These are the cores of the corresponding objectwise homotopy theories, so their equivalences are objectwise quasi-isomorphisms.

An arrow $u:x\to y$ determines three maps
$$
s(u)=x,\qquad c(u)=y,\qquad t(u)=\operatorname{Cone}(u),
$$
where $\operatorname{Cone}(u)$ is the functorial homotopy cofiber in the supplied dg enhancement. Thus $s\times t:X^{(1)}\to X^{(0)}\times X^{(0)}$ remembers the source and cofiber, and $c:X^{(1)}\to X^{(0)}$ remembers the target. For a composable pair $x\to y\to z$, write $f$ for the first arrow, $g$ for the second, $h$ for the composite, and $k:\operatorname{Cone}(f)\to\operatorname{Cone}(h)$ for the induced map of cofibers.

Set
$$
\mathcal{DH}(\mathcal T):=\mathbb Q_c(X^{(0)}).
$$
The product is the convolution
$$
\alpha*\beta:=c_!\big((s\times t)^*(\alpha\otimes\beta)\big),
$$
where $(\alpha\otimes\beta)(x,y)=\alpha(x)\beta(y)$ on $X^{(0)}\times X^{(0)}$, and $c_!$ and pullback are those of [[def-locally-finite-homotopy-type]]. For an isomorphism class $x$ of perfect modules, let $\chi_x$ be its characteristic function. The $\chi_x$ form a basis, and
$$
\chi_x*\chi_y=\sum_z g^z_{x,y}\chi_z,
$$
where $g^z_{x,y}$ is the weighted homotopy cardinality of the fiber of $c$ over $z$ restricted to arrows with source isomorphic to $x$ and cofiber isomorphic to $y$.

The zero module gives the candidate unit $\chi_0$. The definition is well-defined: local finiteness and finite support of the convolution follow from [[lem-derived-hall-moduli-spaces-and-convolution-are-finite]].

## Correspondence diagram

```tikzcd
X^{(1)} \arrow[r,"c"] \arrow[d,"s\times t"'] & X^{(0)} \\
X^{(0)}\times X^{(0)}
```

The horizontal map sends an arrow to its target; the vertical map sends it to its source and homotopy cofiber. The product pulls two input functions back along the vertical map and pushes them forward along the horizontal map. The diagram records this correspondence; it supplies no proof of associativity.
