---
id: ex-hh-counital-coideal-quotient-of-comatrix-coalgebra
kind: example
title: "A counital coideal quotient of the two-by-two comatrix coalgebra"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 2
deps: [def-hh-coalgebra-and-coalgebra-map, def-hh-subcoalgebras-coideals-and-quotient-coalgebras, lem-hh-finite-comatrix-coalgebra-exists, def-field, prop-functoriality-of-module-tensor-products, thm-universal-property-of-free-modules, def-quotient-module, thm-quotient-module-laws]
aliases: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "UCSD Math 207A, Hopf Algebras lecture notes, Spring 2020"
      url: "https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf"
      locator: "Chapter 1, Examples 1.23 and 1.26, printed pp. 16–18: comatrix coproducts and a counital coideal quotient."
    - title: "Benedikt Stufler, Hopf Algebras lecture notes, University of Zurich course, 2018"
      url: "https://www.dmg.tuwien.ac.at/stufler/doc/lec/2018hopf.pdf"
      locator: "§3.1, Example 3.2(2), printed pp. 12–13: the finite comatrix coalgebra."
---

## Example

Let $C=E_2$ be the two-by-two comatrix coalgebra from [[lem-hh-finite-comatrix-coalgebra-exists]], with basis $c_{11},c_{12},c_{21},c_{22}$. Set
$$
I=\operatorname{span}\{c_{12},c_{21},c_{11}-c_{22}\}.
$$
This is a nonzero counital coideal. The quotient is one-dimensional, with the two diagonal basis vectors identified and the off-diagonal basis vectors killed.

## Facts & Assumptions

**Given:** A field $k$, the comatrix coalgebra $C=E_2$, and the subspace $I$ above.

[F1] Coalgebra maps preserve comultiplication and counit, and the coalgebra axioms use the associator and unit isomorphisms ([[def-hh-coalgebra-and-coalgebra-map]]).

[F2] On the comatrix basis, $\Delta(c_{ij})=\sum_\ell c_{i\ell}\otimes c_{\ell j}$ and $\varepsilon(c_{ij})=\delta_{ij}$ ([[lem-hh-finite-comatrix-coalgebra-exists]]).

[F3] The field-free coideal condition is $\varepsilon_C(I)=0$ and $\Delta_C(I)\subseteq\operatorname{im}(I\otimes C\to C\otimes C)+\operatorname{im}(C\otimes I\to C\otimes C)$, using the tensor maps induced by inclusion ([[def-hh-subcoalgebras-coideals-and-quotient-coalgebras]]).

[F4] The quotient vector space $C/I$ consists of cosets and its canonical map $q:C\to C/I$ is linear with kernel $I$ ([[def-quotient-module]], [[thm-quotient-module-laws]]).

[F5] A map prescribed on the basis of a free vector space extends uniquely to a linear map ([[thm-universal-property-of-free-modules]]).

[F6] Tensoring linear maps gives a well-defined linear map with $(q\otimes q)(x\otimes y)=q(x)\otimes q(y)$ ([[prop-functoriality-of-module-tensor-products]]).

[F7] A field has distinct zero and unit, $0\ne1$ ([[def-field]]).

## Verification

1.1 The counit vanishes on $c_{12}$ and $c_{21}$, and $\varepsilon(c_{11}-c_{22})=1-1=0$ by [F2]. The subspace $I$ is nonzero because it contains the basis vector $c_{12}$. Write $j_I:I\hookrightarrow C$ for the inclusion. The formulas $\Delta(c_{12})=c_{11}\otimes c_{12}+c_{12}\otimes c_{22}$ and $\Delta(c_{21})=c_{21}\otimes c_{11}+c_{22}\otimes c_{21}$ place their terms in $\operatorname{im}(\mathrm{id}_C\otimes j_I)+\operatorname{im}(j_I\otimes\mathrm{id}_C)$. For the third generator, $\Delta(c_{11}-c_{22})=(c_{11}-c_{22})\otimes c_{11}+c_{22}\otimes(c_{11}-c_{22})+c_{12}\otimes c_{21}-c_{21}\otimes c_{12}$, and its four terms lie in the same sum of images. By linearity, $I$ satisfies the field-free coideal condition [F3]. [given, F2, F3, algebra]

1.2 Define $\ell:C\to k$ on the basis by $\ell(c_{11})=\ell(c_{22})=1$ and $\ell(c_{12})=\ell(c_{21})=0$, extending linearly by [F5]. Its kernel is exactly $I$: if $z=ac_{11}+bc_{12}+dc_{21}+ec_{22}$ then $\ell(z)=a+e=0$ precisely when $e=-a$, leaving $z$ in the span defining $I$. Every class is a scalar multiple of $u=q(c_{11})=q(c_{22})$, while $u\ne0$ because $c_{11}\notin I$: otherwise $\ell(c_{11})=0$, contrary to $\ell(c_{11})=1$ and [F7]. Also $q(c_{12})=q(c_{21})=0$. Hence $u$ is a basis of $C/I$. [given, F4, F5, F7, algebra]

2.1 Define linear maps $\overline{\Delta}:C/I\to(C/I)\otimes(C/I)$ and $\overline{\varepsilon}:C/I\to k$ on the basis $u$ by $\overline{\Delta}(u)=u\otimes u$ and $\overline{\varepsilon}(u)=1$, extending them linearly by [F5]. On $u$, coassociativity gives $\alpha(\overline{\Delta}\otimes\mathrm{id})\overline{\Delta}(u)=u\otimes(u\otimes u)=(\mathrm{id}\otimes\overline{\Delta})\overline{\Delta}(u)$, and the left and right counit composites both give $u$. Since $u$ is a basis and these are linear maps, the coalgebra identities hold on all of $C/I$. For $c_{11}$, $(q\otimes q)\Delta(c_{11})=u\otimes u+0\otimes0=u\otimes u=\overline{\Delta}q(c_{11})$ and $\varepsilon(c_{11})=1=\overline{\varepsilon}q(c_{11})$. For $c_{12}$, $(q\otimes q)\Delta(c_{12})=u\otimes0+0\otimes u=0=\overline{\Delta}q(c_{12})$ and $\varepsilon(c_{12})=0=\overline{\varepsilon}q(c_{12})$. For $c_{21}$, $(q\otimes q)\Delta(c_{21})=0\otimes u+u\otimes0=0=\overline{\Delta}q(c_{21})$ and $\varepsilon(c_{21})=0=\overline{\varepsilon}q(c_{21})$. For $c_{22}$, $(q\otimes q)\Delta(c_{22})=0\otimes0+u\otimes u=u\otimes u=\overline{\Delta}q(c_{22})$ and $\varepsilon(c_{22})=1=\overline{\varepsilon}q(c_{22})$. By linearity these equalities hold on all of $C$, so $q$ is a coalgebra map by [F1]. [step 1.2, F1, F2, F4, F5, F6, algebra] ∎
