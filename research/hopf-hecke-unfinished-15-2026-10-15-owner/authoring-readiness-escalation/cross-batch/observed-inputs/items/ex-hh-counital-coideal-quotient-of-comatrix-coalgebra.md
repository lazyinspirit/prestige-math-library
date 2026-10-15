---
id: ex-hh-counital-coideal-quotient-of-comatrix-coalgebra
kind: example
title: "A counital coideal quotient of the two-by-two comatrix coalgebra"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 3
deps: [def-hh-coalgebra-and-coalgebra-map, def-hh-subcoalgebras-coideals-and-quotient-coalgebras, lem-hh-finite-comatrix-coalgebra-exists, thm-hh-coalgebra-quotient-and-kernel-descent, def-field]
aliases: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
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

[F1] On the comatrix basis, $\Delta(c_{ij})=\sum_\ell c_{i\ell}\otimes c_{\ell j}$ and $\varepsilon(c_{ij})=\delta_{ij}$ ([[lem-hh-finite-comatrix-coalgebra-exists]]).

[F2] A coideal satisfies $\varepsilon(I)=0$ and $\Delta(I)\subseteq I\otimes C+C\otimes I$ ([[def-hh-subcoalgebras-coideals-and-quotient-coalgebras]]).

[F3] The quotient coproduct and counit are induced by $(q\otimes q)\Delta$ and $\varepsilon$ ([[thm-hh-coalgebra-quotient-and-kernel-descent]]).

[F4] A field has distinct zero and unit, $0\ne1$ ([[def-field]]).

## Verification

1.1 The counit vanishes on $c_{12}$ and $c_{21}$, and $\varepsilon(c_{11}-c_{22})=1-1=0$ by [F1]. Also $\Delta(c_{12})=c_{11}\otimes c_{12}+c_{12}\otimes c_{22}$ and $\Delta(c_{21})=c_{21}\otimes c_{11}+c_{22}\otimes c_{21}$, so both lie in $I\otimes C+C\otimes I$. For the third generator, $\Delta(c_{11}-c_{22})=(c_{11}-c_{22})\otimes c_{11}+c_{22}\otimes(c_{11}-c_{22})+c_{12}\otimes c_{21}-c_{21}\otimes c_{12}$, whose four terms also lie in that sum. By linearity, $I$ is a coideal by [F2]. [given, F1, F2, algebra]

1.2 Define $\ell:C\to k$ on the basis by $\ell(c_{11})=\ell(c_{22})=1$ and $\ell(c_{12})=\ell(c_{21})=0$. Its kernel is exactly $I$: if $z=ac_{11}+bc_{12}+dc_{21}+ec_{22}$ then $\ell(z)=a+e=0$ precisely when $e=-a$, leaving $z$ in the span defining $I$. Every class is a scalar multiple of $u=q(c_{11})=q(c_{22})$, while $u\ne0$ because $c_{11}\notin I$: otherwise $\ell(c_{11})=0$, contrary to $\ell(c_{11})=1$ and [F4]. Also $q(c_{12})=q(c_{21})=0$. Hence $u$ is a basis of $C/I$. [given, F1, F2, F4, algebra]

2.1 By [F3], $\overline{\Delta}(u)=(q\otimes q)\Delta(c_{11})=u\otimes u+q(c_{12})\otimes q(c_{21})=u\otimes u$ and $\overline{\varepsilon}(u)=\varepsilon(c_{11})=1$. Since $u$ is a basis of the quotient, these are its complete comatrix-style structure formulas. [step 1.2, F1, F3, algebra] ∎
