---
id: def-virtual-character-and-character-ring-of-a-finite-group
kind: definition
title: "Virtual characters and the character ring $R(G)$ of a finite group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-class-function-and-the-space-of-complex-class-functions, def-irreducible-complex-character, thm-characters-of-direct-sums-tensor-products-and-duals, thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions, thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]
justified_by: []
aliases: []
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Definition 4.26"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf"
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Section 4.3"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Definition

Let $G$ be a finite group. A **virtual character** of $G$ is an integral linear
combination of irreducible complex characters:

$$ \vartheta=\sum_i n_i\chi_i, \qquad n_i\in\mathbb Z, $$

with only finitely many nonzero coefficients. Since irreducible characters are
class functions, every virtual character is a class function on $G$
([[def-class-function-and-the-space-of-complex-class-functions]],
[[def-irreducible-complex-character]]).

The set of all virtual characters is the **character ring** $R(G)$. Addition is
pointwise addition of class functions, and multiplication is the bilinear
extension of tensor-product multiplication on honest characters:

$$ (\chi_V+\chi_W)(g)=\chi_V(g)+\chi_W(g), \qquad (\chi_V\chi_W)(g)=\chi_{V\otimes W}(g) $$

([[thm-characters-of-direct-sums-tensor-products-and-duals]]).

## Remarks

- Multiplication stays in the integral span: a tensor product of two finite-dimensional complex representations is finite-dimensional, and repeated application of [[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]] decomposes it into irreducible summands. Its character is therefore a finite sum of irreducible characters with nonnegative integer multiplicities. Bilinearity then handles virtual characters.

- The ordinary characters form a subsemiring of $R(G)$, while $R(G)$ itself is
  their Grothendieck group.

- By
  [[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]],
  the irreducible characters are linearly independent as class functions.
  Since virtual characters are defined as their integral span, each virtual
  character has a unique decomposition in that basis.
