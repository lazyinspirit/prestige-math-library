---
id: def-outer-induction-product-for-symmetric-group-characters
kind: definition
title: "The outer induction product of symmetric-group characters"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-graded-ordinary-representation-ring-of-symmetric-groups
  - def-induced-character-of-a-complex-representation
  - def-external-direct-product-of-groups
  - def-young-subgroup-tabloid-and-permutation-module
  - def-tensor-product-of-complex-representations
  - thm-characters-of-direct-sums-tensor-products-and-duals
  - thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §7"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "(7.1) and the paragraph defining the product in R, printed pp. 112–113"
    - title: "Peter Webb, A Course in Finite Group Representation Theory, §4.3"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
      locator: "§4.3, printed pp. 54–58 (induced characters)"
---

## Definition

For $m,n\ge0$, $S_m$ is the symmetric group of $\{1,\dots,m\}$,
with $S_0=\{1\}$
([[def-young-subgroup-tabloid-and-permutation-module]]). Identify
$S_m\times S_n$ ([[def-external-direct-product-of-groups]]) with the subgroup
of $S_{m+n}$ preserving each of the two blocks: the first factor acts on
$\{1,\dots,m\}$ and the second on $\{m+1,\dots,m+n\}$, so that
$(\sigma,\tau)$ acts as $\sigma$ on the first block and as $\tau$ on the
second after shifting its labels by $m$. Either block may be empty; its
symmetric group is trivial. These actions give an injective homomorphism,
and every permutation preserving the blocks has a unique pair of restrictions,
so its image is exactly the stated subgroup. For honest characters $\chi$ of $S_m$ and $\psi$ of $S_n$, let
$\chi\boxtimes\psi$ be the character of $S_m\times S_n$ on the tensor product
$V\otimes_{\mathbb C}W$ of representations affording $\chi$ and $\psi$, with
$(\sigma,\tau)\cdot(v\otimes w):=\sigma v\otimes\tau w$, so that

$$(\chi\boxtimes\psi)(\sigma,\tau)=\chi(\sigma)\psi(\tau)$$

([[def-tensor-product-of-complex-representations]],
[[thm-characters-of-direct-sums-tensor-products-and-duals]]).

Every virtual character $f\in R(S_m)$ is an integral combination
$f=\sum_ia_i\chi_i$ of the irreducible characters $\chi_i$ of $S_m$
([[def-virtual-character-and-character-ring-of-a-finite-group]]), and the
coefficients $a_i$ are unique because the irreducible characters of a finite
group are orthonormal, hence $\mathbb Z$-linearly independent, in
$\mathrm{cf}(S_m)$
([[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]]).
So for $f=\sum_ia_i\chi_i$ and $g=\sum_jb_j\psi_j$ we may set

$$f\boxtimes g:=\sum_{i,j}a_ib_j\,(\chi_i\boxtimes\psi_j)\in R(S_m\times S_n),$$

an integral combination of honest characters of $S_m\times S_n$. Its value at
$(\sigma,\tau)$ is $f(\sigma)g(\tau)$ by the displayed character formula,
and uniqueness of the coefficients makes $f\boxtimes g$ well defined. The assignment
is $\mathbb Z$-bilinear in $(f,g)$. The **outer induction product** is

$$f\circ g:=\sum_{i,j}a_ib_j\,\operatorname{Ind}_{S_m\times S_n}^{S_{m+n}}\bigl(\chi_i\boxtimes\psi_j\bigr)\in R(S_{m+n}),$$

the induction of honest characters in the sense of
[[def-induced-character-of-a-complex-representation]]. The trivial character
of $S_0$ is the unit of degree zero. This is the outer product, defined across
different symmetric groups; the same-rank tensor product $f\cdot g$ on a single
$R(S_n)$ is a different operation, and the two are never conflated. No choice
principle is used.
