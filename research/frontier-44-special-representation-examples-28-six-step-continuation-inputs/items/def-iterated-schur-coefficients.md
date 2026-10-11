---
id: def-iterated-schur-coefficients
kind: definition
title: "Threefold Schur coefficients $c^\\delta_{a,b,c}$"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-littlewood-richardson-tableau-and-coefficient,
       thm-littlewood-richardson-schur-product-expansion,
       def-stable-schur-function-by-bialternants]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Emmanuel Briand, Rosa Orellana and Mercedes Rosas, The stability of the Kronecker product of Schur functions, arXiv:0907.4652v2 (2009); Section 2, equations (7)-(8), pp. 7-8 (the coefficients $c^\\delta_{\\alpha,\\beta,\\gamma}$ of $s_\\delta$ in $s_\\alpha s_\\beta s_\\gamma$ and their iterated Littlewood-Richardson form)"
      url: "https://arxiv.org/pdf/0907.4652"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford University Press 1995; Chapter I sections 3 and 5 (Schur functions and their products, Littlewood-Richardson coefficients)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
---

## Definition

For partitions $\delta,a,b,c$ with $|\delta|=|a|+|b|+|c|$, define the
**threefold Schur coefficient**
$$c^\delta_{a,b,c}:=[s_\delta]\,s_a s_b s_c,$$
the coefficient of $s_\delta$ in the ordinary product of the three Schur
functions of $\Lambda$ ([[def-stable-schur-function-by-bialternants]]); when
$|\delta|\ne|a|+|b|+|c|$ the coefficient is $0$, the product being homogeneous
of degree $|a|+|b|+|c|$. Since
$s_as_b=\sum_\phi c^\phi_{a,b}s_\phi$ with
$c^\phi_{a,b}$ the Littlewood–Richardson coefficients
([[thm-littlewood-richardson-schur-product-expansion]],
[[def-littlewood-richardson-tableau-and-coefficient]]), substituting gives
$$c^\delta_{a,b,c}=\sum_\phi c^\phi_{a,b}\,c^\delta_{\phi,c} =\sum_\psi c^\psi_{a,c}\,c^\delta_{\psi,b},$$
the sums over partitions $\phi$ of $|a|+|b|$ and $\psi$ of $|a|+|c|$; hence
each $c^\delta_{a,b,c}$ is a nonnegative integer, and the two displayed
expressions agree with the definition. These coefficients are symmetric in
$a,b,c$ because the product $s_as_bs_c$ is commutative, and equivalently
$$c^\delta_{a,b,c}=\langle s_a s_b s_c,\,s_\delta\rangle_H,$$
by the orthonormality of the Schur basis
([[thm-littlewood-richardson-schur-product-expansion]]). No fourfold or
longer iterated coefficient is introduced here; iterating the two identities
above gives every nested product of three factors, and the symmetry of the
three subscripts is used throughout this page.
