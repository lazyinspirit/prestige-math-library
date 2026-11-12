---
id: lem-author-9f61e4df2141-split-image-filtration
kind: lemma
title: Image filtration for a split tower
status: published
domain: mathematics
deps:
  - def-decreasing-filtered-spectrum
  - lem-author-9f61e4df2141-tail-splitting
  - def-stable-spectra-interface
  - lem-author-9f61e4df2141-split-spectral-cofiber
  - math:def-quotient-group
  - math:def-axiom-of-choice
dependency_roles:
  def-decreasing-filtered-spectrum: mathematical-premise
  lem-author-9f61e4df2141-tail-splitting: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  lem-author-9f61e4df2141-split-spectral-cofiber: mathematical-premise
  math:def-quotient-group: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 6
---

## Statement
Assume the Axiom of Choice and use the foundational and smallness conventions of the stable-spectra interface. Let $F^\bullet E$ be equivalent as an augmented tower to the tail tower of a family $(G_j)_{j\geq0}$, including an equivalence $E\simeq\bigoplus_{j\geq0}G_j$. For every integer $n$ and $q\geq0$, the image of $\pi_nF^qE\to\pi_nE$ is the image of the canonical tail inclusion $\pi_n(\bigoplus_{j\geq q}G_j)\to\pi_n(\bigoplus_{j\geq0}G_j)$. Moreover the quotient of this image by the corresponding image at $q+1$ is naturally $\pi_nG_q$. This statement does not require identifying homotopy groups of an infinite coproduct with a direct sum.

## Facts & Assumptions
**Given:** The augmented tower equivalence, an integer $n$, and $q\geq0$, in the foundational setting of the statement.

**Goal:** Identify the image filtration and its successive quotient.

[F1] [[def-decreasing-filtered-spectrum]] defines coherent augmented towers and their image filtration groups.

[F2] [[lem-author-9f61e4df2141-tail-splitting]] specifies the tail tower: $T^q=\bigoplus_{j\geq q}G_j$ for $q\geq0$, extended constantly for $q\leq0$, with canonical inclusions and augmentation to $T^0$. Its statement identifies graded pieces and connecting maps; the decomposition used below is derived locally.

[F3] [[def-stable-spectra-interface]] supplies the stable infinity-category of spectra, small coherent limits and colimits with their universal properties, the zero spectrum, and functorial abelian groups $\pi_n(Z)=\pi_0\operatorname{Map}_{\mathrm{Sp}}(\mathbb S[n],Z)$. Here $\bigoplus$ denotes the coproduct of a discrete family, and every index family is small in the supplied universes.

[F4] [[lem-author-9f61e4df2141-split-spectral-cofiber]] states that the finite coproduct $A\oplus B$ is also the product in spectra. We use this finite biproduct identification, not any assertion about homotopy groups of infinite coproducts.

[F5] [[math:def-quotient-group]] supplies the quotient by a normal subgroup, written additively as cosets $x+H$. All homotopy groups here are abelian by [F3], so the image subgroup at $q+1$ is normal in that at $q$.

[A1] [[math:def-axiom-of-choice]] is assumed in the ZFC foundations inherited from [F3]. It is used when invoking that supplied categorical model and its existence of small limits and colimits; the explicit coproduct maps and coset maps below require no additional selection.

## Proof
1.1 Put $T^q=\bigoplus_{j\geq q}G_j$ for $q\geq0$ as in [F2]. The coherent augmentation square of the given tower equivalence becomes a commutative square of group homomorphisms under the functor $\pi_n$, with vertical isomorphisms; hence it identifies the two images in the statement. The coproduct universal property constructs a retraction $r_q:T^0\to T^q$: on $G_j$ use its canonical inclusion in $T^q$ when $j\geq q$, and the map through the zero spectrum otherwise. The composite with the tail inclusion is the identity of $T^q$, as is checked on each summand by that same universal property. Applying $\pi_n$ gives a left inverse, proving that the tail map on groups is injective. Thus, under the given equivalence, $I_q:=\operatorname{im}(\pi_nF^qE\to\pi_nE)$ is identified with $\pi_nT^q$ and $I_{q+1}\subseteq I_q$ is induced by the tail transition. [A1, F1, F2, F3, given, construct]

2.1 Partitioning the index set into $\{j\geq q+1\}$ and $\{q\}$, the coproduct universal property gives a natural equivalence $T^q\simeq T^{q+1}\oplus G_q$: maps out of either side are the same family of maps out of the $G_j$. This equivalence carries the tail transition to the first-summand inclusion. By [F4] this finite coproduct is the product, so its mapping space from $\mathbb S[n]$ is the product of the two mapping spaces by the product universal property. Taking $\pi_0$ therefore gives $\pi_nT^q\cong\pi_nT^{q+1}\times\pi_nG_q$ as abelian groups, carrying the transition to $a\mapsto(a,0)$. Via step 1.1, $I_q/I_{q+1}$ is consequently the quotient of this finite product by its first factor. The map sending the coset of $(a,b)$ to $b$ is well-defined, additive and inverse to $b\mapsto(0,b)+(\pi_nT^{q+1}\times\{0\})$, which proves the claimed isomorphism with $\pi_nG_q$. Every construction commutes with maps of families and the specified augmented tower equivalence, proving the asserted naturality. Only the finite product is evaluated on homotopy groups. [F3, F4, F5, step 1.1, construct] ∎
