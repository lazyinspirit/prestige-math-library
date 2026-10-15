---
id: ex-hh-relative-primitive-elements-in-two-dimensional-coalgebra
kind: example
title: "Group-like elements and primitives relative to g in a two-dimensional coalgebra"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 2
deps: [def-hh-coalgebra-and-coalgebra-map, def-hh-group-like-and-primitive-elements, def-hh-scalar-and-tensor-conventions, thm-tensor-product-basis-from-bases, thm-universal-property-of-free-modules, def-field]
aliases: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Benedikt Stufler, Hopf Algebras lecture notes, University of Zurich course, 2018"
      url: "https://www.dmg.tuwien.ac.at/stufler/doc/lec/2018hopf.pdf"
      locator: "§3.1, Examples 3.2(1) and 3.2(4), printed pp. 12–13: group-like and skew-primitive basis vectors."
    - title: "William Chin, A Brief Introduction to Coalgebra Representation Theory"
      url: "https://condor.depaul.edu/~wchin/crt.pdf"
      locator: "§2.4, group-like and skew-primitive elements, printed pp. 5–6."
---

## Example

Let $C$ have basis $g,x$, with
$$\Delta(g)=g\otimes g,\quad \varepsilon(g)=1,\quad \Delta(x)=x\otimes g+g\otimes x,\quad \varepsilon(x)=0.$$
Then $C$ is a coalgebra. Its only group-like element is $g$, and its elements primitive relative to $g$ are exactly the scalar multiples of $x$. No multiplication or algebra unit on $C$ is being assumed.

## Facts & Assumptions

**Given:** A field $k$ and a vector space $C$ with basis $g,x$ and the displayed maps.

[F1] A coalgebra satisfies coassociativity and both counit identities ([[def-hh-coalgebra-and-coalgebra-map]]).

[F2] Group-like and $g$-primitive elements satisfy the equations in [[def-hh-group-like-and-primitive-elements]].

[F3] The elementary tensors of basis vectors form a basis of the tensor product ([[thm-tensor-product-basis-from-bases]]).

[F4] A map on a basis extends uniquely to a linear map ([[thm-universal-property-of-free-modules]]).

[F5] Every nonzero field element has a multiplicative inverse ([[def-field]]).

## Verification

1.1 The displayed assignments extend linearly by [F4]. On $g$, coassociativity and both counit identities follow from $\Delta(g)=g\otimes g$ and $\varepsilon(g)=1$. On $x$, the left coassociativity composite is $x\otimes g\otimes g+g\otimes x\otimes g+g\otimes g\otimes x$, and the right composite gives the same three terms; the left and right counit contractions of $\Delta(x)$ each equal $x$. Since the coalgebra identities are equalities of linear maps and $g,x$ form a basis, [F1] holds. [given, F1, F4, algebra]

1.2 Write $y=ag+bx$. If $y$ is group-like, the coefficient of $x\otimes x$ in $\Delta(y)=y\otimes y$, compared in the basis from [F3], gives $b^2=0$. If $b\ne0$, multiplication by $b^{-1}$ from [F5] gives $b=0$, a contradiction; hence $b=0$. Then $\varepsilon(y)=a=1$, so $y=g$, which is indeed group-like by the displayed formulas and [F2]. [given, F2, F3, F5, algebra]

2.1 If $y=ag+bx$ is primitive relative to $g$, then $\varepsilon(y)=a=0$ by [F2]. Conversely, for every $b\in k$, $\Delta(bx)=b(x\otimes g+g\otimes x)=bx\otimes g+g\otimes bx$ and $\varepsilon(bx)=0$ by linearity; thus precisely the vectors $bx$ are $g$-primitive. [given, F2, algebra] ∎
