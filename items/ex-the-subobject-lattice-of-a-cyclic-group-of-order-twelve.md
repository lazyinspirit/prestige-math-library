---
id: ex-the-subobject-lattice-of-a-cyclic-group-of-order-twelve
kind: example
title: "The subobject lattice of a cyclic group of order twelve"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice, thm-the-subobject-lattice-of-an-abelian-category-is-modular]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Daniel Murfet, Abelian Categories, Section 4.2"
      url: "https://therisingsea.org/notes/AbelianCategories.pdf"
pipeline_run: frontier-22
---

## Example

For the cyclic group $C_{12}$, subgroups correspond to divisors of $12$. The
meet of two subgroups is their intersection, corresponding to the gcd of the two
orders, and the join is their sum, corresponding to the lcm. In particular this
subobject lattice is distributive, unlike the $M_3$ witness on the A page.

## Facts & Assumptions

**Given:** The cyclic group $C_{12}$.

[L1] Subobjects of an abelian-category object form a lattice
([[thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice]]).

[L2] Such lattices are modular
([[thm-the-subobject-lattice-of-an-abelian-category-is-modular]]).

## Verification

**Proof technique:** direct.

1.1 For each divisor $d$ of $12$, the cyclic group $C_{12}$ has a unique subgroup of order $d$, namely $\langle 12/d\rangle$. So the subgroup lattice is the divisor lattice of $12$ with elements of orders $1,2,3,4,6,12$. The meet is intersection, hence gcd of orders, and the join is subgroup sum, hence lcm of orders. [L1, algebra]
2.1 The divisor lattice of a single integer is distributive, so this example is more rigid than the modular-only situation of [L2]. It therefore illustrates that modularity does not force every concrete subobject lattice to look like the $M_3$ example. [L2, step 1.1] ∎