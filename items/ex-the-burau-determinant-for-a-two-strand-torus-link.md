---
id: ex-the-burau-determinant-for-a-two-strand-torus-link
kind: example
title: "The Burau determinant for a two-strand torus link"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 11
deps: [def-axiom-of-choice, prop-burau-determinant-recovers-the-alexander-polynomial-of-a-closed-braid,
       def-reduced-burau-representation, def-closure-of-a-geometric-braid,
       def-alexander-polynomial-from-the-first-elementary-ideal,
       def-braid-group-by-the-artin-presentation]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 4.2 equation (15) (printed p. 47) and Example 4.1 (printed p. 49)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "H. R. Morton, The multivariable Alexander polynomial for a closed braid, arXiv:math/9803138, Remark (1) and Remark (2) (printed pp. 3-4)"
      url: "https://arxiv.org/pdf/math/9803138"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]), as required by the Alexander module and determinant formula. For $\beta=\sigma_1^{m}\in B_2$ the reduced Burau representation is
one-dimensional, $\bar\rho_2(\sigma_1^{m})=(-t)^{m}$, and the formula of
[[prop-burau-determinant-recovers-the-alexander-polynomial-of-a-closed-braid]]
gives
$$\Delta_{\widehat{\sigma_1^m}}(t)\doteq \frac{(1-t)\bigl(1-(-t)^{m}\bigr)}{1-t^{2}} .$$
For $m=1$ this is the unknot with $\Delta\doteq1$; for $m=3$ it is the trefoil
with $\Delta\doteq t^2-t+1$; for $m=-3$ it is the mirror trefoil with
$\Delta\doteq t^{-2}-t^{-1}+1$; and for $m=2$ it is the Hopf link with
$\Delta\doteq1-t$. For even $m$ the closure of $\sigma_1^m$ has two components
(the $(2,m)$-torus link) and the same display gives the one-variable
Alexander polynomial of that link, $\Delta\doteq(1-t)(1-t^{m})/(1-t^{2})$,
which for $m=2$ is $1-t$; the knot formula is the special case of odd $m$.

## Verification

**Given:** AC and the braid $\beta=\sigma_1^m\in B_2$, the reduced Burau
representation $\bar\rho_2:B_2\to\operatorname{GL}_1(\Lambda_1)$,
$\Lambda_1=\mathbb Z[t^{\pm1}]$, and the closure
$\widehat{\sigma_1^m}$. AC is used through the Alexander module and determinant formula; the finite scalar calculations require no further choice.

[A1] $\Delta_{\widehat\beta}(t)\doteq
\frac{(1-t)\det(I_{n-1}-\bar\rho_n(\beta))}{1-t^{n}}$ for $\beta\in B_n$,
with the unit ambiguity $\pm t^m$
([[prop-burau-determinant-recovers-the-alexander-polynomial-of-a-closed-braid]],
[[def-alexander-polynomial-from-the-first-elementary-ideal]]).

[A2] For $n=2$ the reduced module is free of rank one with
$h_1=[\epsilon_1-\epsilon_2]$ and fixed basis $b_1=t h_1$
([[def-reduced-burau-representation]]). In that fixed basis
$\bar\rho_2(\sigma_1^m)=(-t)^m$, as supplied by
[[prop-burau-determinant-recovers-the-alexander-polynomial-of-a-closed-braid]].

[A3] The closure of $\beta\in B_n$ has as many components as the permutation
of $\beta$ has cycles
([[def-closure-of-a-geometric-braid]]); for $\sigma_1^m\in B_2$ the
permutation is the transposition $(1\,\,2)$ for odd $m$ and the identity for
even $m$, and the braid group is presented by the Artin generators
([[def-braid-group-by-the-artin-presentation]]).

**Proof technique:** direct substitution into the determinant formula.

1.1 *The one-dimensional representation.* By [A2] the image of $\sigma_1^m$ is the $1\times1$ matrix $(-t)^m$, so $\det(I_1-\bar\rho_2(\sigma_1^m))=1-(-t)^m$ is the scalar displayed. [A2]

2.1 *The formula.* Substituting step 1.1 into [A1] with $n=2$ gives $\Delta_{\widehat{\sigma_1^m}}(t)\doteq(1-t)(1-(-t)^m)/(1-t^2)$, the displayed formula. [A1, step 1.1]

3.1 *The odd cases.* For $m=1$: $(1-t)(1+t)/(1-t^2)=1$, the unknot value. For $m=3$: $(1-t)(1+t^3)/(1-t^2)=(1+t^3)/(1+t)=t^2-t+1$, the trefoil value. For $m=-3$: $(1-t)(1+t^{-3})/(1-t^2)=(1+t^{-3})/(1+t)=t^{-3}(t^2-t+1)$, which differs from $t^{-2}-t^{-1}+1=t^{-2}(t^2-t+1)$ by the unit $t^{-1}$, the mirror trefoil value; by [A3] these three closures are knots ($m$ odd). [A3, step 2.1, algebra]

3.2 *The even cases.* For even $m$ the permutation of $\sigma_1^m$ is the identity, so by [A3] the closure has two components; the same display gives $\Delta\doteq(1-t)(1-t^m)/(1-t^2)$, and for $m=2$ this is $(1-t)(1-t^2)/(1-t^2)=1-t$, the one-variable Alexander polynomial of the Hopf link in the convention of [A1]. The formula with the factor $(1-t)$ is the classical formula for knots and links, so no separate knot hypothesis is needed for the value; the distinction is only that for even $m$ the closure is not a knot. [A1, A3, step 2.1, algebra]

4.1 *The two-component value.* The Hopf link is the closure of $\sigma_1^2$, whose two components correspond to the two cycles of the identity permutation of $B_2$ by [A3]; its value $1-t$ is the unit multiple $\pm t^k$ representative of the Alexander polynomial of the Hopf link in the normalization of [A1]. This completes the verification of the displayed values. [A1, A3, step 3.2] ∎

## Remarks

- The values $t^2-t+1$ (trefoil) and $t^{-2}-t^{-1}+1$ (mirror trefoil) are
  exchanged by $t\mapsto t^{-1}$, as the Alexander polynomial of mirror links
  requires.
- The example is the smallest case of the determinant formula; the general
  $n$ case is [[prop-burau-determinant-recovers-the-alexander-polynomial-of-a-closed-braid]],
  and the Hopf-link value $1-t$ agrees with the direct computation of the
  zeroth elementary ideal of its total-linking Alexander module.
