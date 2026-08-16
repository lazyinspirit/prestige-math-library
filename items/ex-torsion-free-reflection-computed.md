---
id: ex-torsion-free-reflection-computed
kind: example
title: "The torsion-free reflection of the integers direct sum a finite cyclic group"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
  truth_risk: "The torsion subgroup and quotient must be computed for every n, including n=1, and the universal factorisation must be shown."
  counterexample_search: "Computed torsion coordinatewise and checked the reflector's universal property directly."
deps: [thm-torsion-free-abelian-groups-are-reflective-in-abelian-groups, def-external-direct-product-of-groups, thm-external-direct-product-is-a-group, thm-a-full-subcategory-is-reflective-exactly-when-each-object-has-a-universal-arrow]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For $n\ge1$, let
$G_n=\mathbb Z\times(\mathbb Z/n\mathbb Z)$, the direct sum of its two
displayed abelian factors. Its torsion subgroup is
$\{0\}\times(\mathbb Z/n\mathbb Z)$, so its torsion-free reflection is
$$G_n/\operatorname{Tor}(G_n)\cong\mathbb Z.$$
For $n=1$ the finite cyclic factor and the torsion subgroup are both trivial,
and the same formula holds.

## Facts & Assumptions

**Given:** A natural number $n\ge1$ and the two displayed groups.

[L1] The external direct product has underlying set of pairs and componentwise operation ([[def-external-direct-product-of-groups]]).

[L2] This componentwise operation makes the product a group and its coordinate projections are homomorphisms ([[thm-external-direct-product-is-a-group]]).

[L3] The full subcategory of torsion-free abelian groups is reflective in $\mathbf{Ab}$, with reflector $G\mapsto G/\operatorname{Tor}(G)$ and unit the quotient map ([[thm-torsion-free-abelian-groups-are-reflective-in-abelian-groups]]).

[L4] For a full subcategory, a reflector with its adjunction is equivalently a specified universal arrow $(R_C,\eta_C)$ from each object $C$ to the inclusion, the specified arrows being the components of the reflection unit ([[thm-a-full-subcategory-is-reflective-exactly-when-each-object-has-a-universal-arrow]]).

## Verification

**Proof technique:** direct.

1.1 By [L1] and [L2], $G_n$ has componentwise addition. Every $(0,\bar a)$ is killed by $n$. Conversely, if a nonzero integer $k$ kills $(z,\bar a)$, then $kz=0$ in $\mathbb Z$, so $z=0$. Hence $\operatorname{Tor}(G_n)=\{0\}\times(\mathbb Z/n\mathbb Z)$. [L1, L2, algebra]

2.1 The first projection $\pi_1:G_n\to\mathbb Z$ is a homomorphism by [L2], and it is surjective because $\pi_1(z,0)=z$ for every $z\in\mathbb Z$. Its kernel is $\{(0,\bar a)\}=\operatorname{Tor}(G_n)$ by step 1.1, so the induced map $G_n/\operatorname{Tor}(G_n)\to\mathbb Z$, $(z,\bar a)+\operatorname{Tor}(G_n)\mapsto z$, is a well-defined surjective homomorphism, and it is injective because $z=0$ forces $(z,\bar a)\in\operatorname{Tor}(G_n)$. It is therefore an isomorphism $G_n/\operatorname{Tor}(G_n)\cong\mathbb Z$. [step 1.1, L2, algebra]

3.1 By [L3] the reflector sends $G_n$ to $G_n/\operatorname{Tor}(G_n)$ with unit the quotient map, and by the equivalence in [L4] that unit is a universal arrow from $G_n$ to the inclusion: every homomorphism $f:G_n\to H$ with $H$ torsion-free factors uniquely through it. Step 2.1 identifies the target of that quotient map with $\mathbb Z$. Thus the computed object has the reflection's universal property. [step 1.1, step 2.1, L3, L4]

4.1 When $n=1$, $\mathbb Z/n\mathbb Z$ is the trivial group, so step 1.1 gives the zero torsion subgroup and steps 2.1–3.1 remain valid without dividing by a nontrivial integer. [step 1.1, step 2.1, step 3.1] ∎
