---
page: kronecker-coefficients-and-internal-products
title: "Kronecker Coefficients and Internal Products"
status: draft
requires:
  - frobenius-characteristic-and-the-symmetric-group-character-dictionary
  - specht-modules-and-the-irreducibles-of-the-symmetric-group
  - outer-products-skew-specht-modules-and-littlewood-richardson
items:
  - def-kronecker-coefficient-and-internal-tensor-product
  - lem-complex-specht-modules-are-self-dual
  - prop-kronecker-coefficient-is-a-three-character-inner-product
  - cor-kronecker-coefficients-are-nonnegative-integers-and-s3-symmetric
  - def-internal-product-on-symmetric-functions
  - prop-power-sums-diagonalize-the-internal-product
  - def-first-row-padding-of-a-partition
  - def-padded-kronecker-coefficient-sequence
  - lem-littlewood-internal-product-outer-compatibility
  - lem-kronecker-reduction-lemma
  - thm-row-gap-reduction-and-conditional-k-stability
  - rem-no-general-positive-combinatorial-rule-for-kronecker-coefficients-is-known
examples: []
---

**Objective.** This page defines the Kronecker coefficients of the symmetric
group, transports them to the internal product of symmetric functions, proves
the exact character, reduction and stability statements available on this
route, and marks the open boundary: no general positive combinatorial rule is
claimed. The page is a child of the character dictionary, the Specht-module
theory and the outer-product theory of
`frobenius-characteristic-and-the-symmetric-group-character-dictionary`,
`specht-modules-and-the-irreducibles-of-the-symmetric-group` and
`outer-products-skew-specht-modules-and-littlewood-richardson`; the outer
product is used only for contrast and for Littlewood's identity below.

The coefficient $g(\lambda,\mu,\nu)$ is the multiplicity of $S^\nu$ in the
internal tensor product $S^\lambda\otimes_{\mathbb C}S^\mu$, a diagonal
$S_n$-module that keeps the rank, unlike the outer induction product
([[def-kronecker-coefficient-and-internal-tensor-product]]). Complex Specht
modules are self-dual with real-valued characters
([[lem-complex-specht-modules-are-self-dual]]), so the multiplicity is computed
by the three-character inner product
$g(\lambda,\mu,\nu)=\frac1{n!}\sum_\sigma\chi^\lambda(\sigma)\chi^\mu(\sigma)\chi^\nu(\sigma)$
([[prop-kronecker-coefficient-is-a-three-character-inner-product]]). The multiplicity definition makes the coefficients nonnegative integers; the
character formula makes them fully $S_3$-symmetric, and
invariant under conjugating exactly two of the three partitions
([[cor-kronecker-coefficients-are-nonnegative-integers-and-s3-symmetric]]);
no positive combinatorial rule is asserted anywhere on the page
([[rem-no-general-positive-combinatorial-rule-for-kronecker-coefficients-is-known]]).

Transporting the same-rank tensor product through the Frobenius characteristic
defines the internal (Kronecker) product on symmetric functions, a
degree-preserving bilinear product with degreewise unit $h_n$
([[def-internal-product-on-symmetric-functions]]). In the power-sum basis this
product is diagonal, $p_\rho*p_\sigma=\delta_{\rho,\sigma}z_\rho p_\rho$, and
in the Schur basis it has the structure constants
$g(\lambda,\mu,\nu)$ ([[prop-power-sums-diagonalize-the-internal-product]]).
The stability route begins with first-row padding
$\alpha[n]=(n-|\alpha|,\alpha_1,\alpha_2,\dots)$, defined exactly from the
threshold $n\ge|\alpha|+\alpha_1$, and with the padded Kronecker coefficient
sequences built on the common domain of three padded families
([[def-first-row-padding-of-a-partition]],
[[def-padded-kronecker-coefficient-sequence]]). These are neutral definitions:
they assert no constancy of any coefficient along a padded family.

Littlewood's identity expresses the internal product against an outer product
as a sum over Littlewood–Richardson coefficients
([[lem-littlewood-internal-product-outer-compatibility]]), and it drives the
reduction lemma: either a row difference larger than $s=n-\nu_1$ forces
$g(\lambda,\mu,\nu)=0$, or the coefficient equals that of an explicitly
reduced triple, with the size bound $r\le 2s\ell^2$
([[lem-kronecker-reduction-lemma]]). Its corrected row shear retains a $2s$
separation at each shortened cut and supplies a complete proof of the bounded
reduction. Applying the same Littlewood–Richardson coefficient identity and
first-row Jacobi–Trudi expansion directly at a single cut gives row-gap reduction:
under the separation hypothesis
$\min\{\lambda_k,\mu_k\}\ge\max\{\lambda_{k+1},\mu_{k+1}\}+(n-\nu_1)$ one has
$g(\lambda+(t^k),\mu+(t^k),\nu+(tk))=g(\lambda,\mu,\nu)$ for all $t\ge0$, and
consequently the padded family is eventually constant for every triple
([[thm-row-gap-reduction-and-conditional-k-stability]]). Monotonicity,
boundedness for all $t$ and a limit formula are not claimed; the page stops at
eventual constancy, and the companion page shows that eventual constancy is not
immediacy.
