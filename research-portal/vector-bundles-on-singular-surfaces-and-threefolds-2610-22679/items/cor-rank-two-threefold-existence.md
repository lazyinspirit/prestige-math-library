---
id: cor-rank-two-threefold-existence
kind: corollary
title: Rank-two bundles with prescribed first two classes
status: published
domain: mathematics
deps:
  - thm-normal-threefold-classification
  - cor-rank-three-zero-chern-splitting
  - prop-chern-whitney-identities
  - def-motivic-chern-classes
  - math:def-axiom-of-choice
dependency_roles:
  thm-normal-threefold-classification: mathematical-premise
  cor-rank-three-zero-chern-splitting: mathematical-premise
  prop-chern-whitney-identities: mathematical-premise
  def-motivic-chern-classes: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 1, abstract; p. 3, Corollary D; p. 17, Corollary 6.10 and its
        proof
      statement: The first two motivic Chern classes of rank-two bundles give a
        surjection on a normal affine threefold over an algebraically closed
        field.
      hypotheses: Normal affine threefold over an algebraically closed field, under
        the article’s conventions.
      reading_limits: The supplied extracted article text at Corollary D and Corollary
        6.10 and its proof was read. The classification and splitting arguments
        are used through the named completed suppliers, not independently
        reconstructed here.
dependency_level: 36
---

## Statement
Assume the Axiom of Choice and the site and universe size bounds required by the cited motivic filtration, support and Chern-class constructions. Let $k$ be an algebraically closed field of arbitrary characteristic and let $X$ be a normal affine finite-type $k$-scheme of Krull dimension three. Then the map
$$ (c_1,c_2):\mathrm{Vect}_2(X)\longrightarrow H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)\times H^{4,2}_{\mathrm{mot}}(X,\mathbb Z) $$
is surjective.

Here an algebraically closed field is a field in which every nonconstant polynomial in one variable has a root. Affine and finite type mean $X=\operatorname{Spec}A$ for a finitely generated $k$-algebra $A$; normal means every local ring is an integrally closed domain; and Krull dimension is the supremum of lengths of strict chains of irreducible closed subsets. A vector bundle is a finite locally free $\mathcal O_X$-module, and $\mathrm{Vect}_2(X)$ is the set of isomorphism classes of bundles locally isomorphic to $\mathcal O_X^2$. The group $H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z)$ is degree-$2i$ cohomology of the weight-$i$ integral motivic complex, and $c_i$ is the corresponding motivic Chern-class operation on bundles. Choice says every family of nonempty sets has a choice function; the size bounds fix the sites and universes used by the suppliers.

## Facts & Assumptions

**Given:** $k$ and $X$ as in the statement, the Axiom of Choice, the stated size bounds, and a pair $(a_1,a_2)$ in the displayed target.

**Goal:** Produce a rank-two bundle $E'$ with $c_i(E')=a_i$ for $i=1,2$.

[F1] Under these field, scheme, Choice and size hypotheses, every triple in $\prod_{i=1}^3 H^{2i,i}_{\mathrm{mot}}(X,\mathbb Z)$ is the first three Chern classes of a rank-three bundle. [[thm-normal-threefold-classification]] [[math:def-axiom-of-choice]]

[F2] Under the same hypotheses, a rank-three bundle with third Chern class zero is isomorphic to $E'\oplus\mathcal O_X$ for some rank-two bundle $E'$. [[cor-rank-three-zero-chern-splitting]]

[F3] Chern classes are invariant under bundle isomorphism, vanish above the rank, and have $c_0=1$. The total Chern polynomial satisfies $c_t(V\oplus W)=c_t(V)c_t(W)$, and first Chern classes of line bundles are additive under tensor product. [[def-motivic-chern-classes]] [[prop-chern-whitney-identities]]

## Proof

**Proof technique:** Prescribe a zero third class, split off a trivial line, and compare Chern polynomials.

1.1 Apply [F1] to $(a_1,a_2,0)$. There is a rank-three bundle $E$ with $c_1(E)=a_1$, $c_2(E)=a_2$, and $c_3(E)=0$. The field, dimension, normality, finite-type, Choice and size hypotheses required by [F1] are precisely those given. [F1, given]

2.1 Apply [F2] to $E$. Its hypotheses hold by the statement and step 1.1, so $E\cong E'\oplus\mathcal O_X$ for a rank-two bundle $E'$. [F2, given, step 1.1]

3.1 By the line-bundle tensor identity in [F3], $c_1(\mathcal O_X)=2c_1(\mathcal O_X)$ because $\mathcal O_X\otimes\mathcal O_X\cong\mathcal O_X$. Cancellation in the cohomology group gives $c_1(\mathcal O_X)=0$. Its higher Chern classes vanish by rank, and $c_0=1$; hence $c_t(\mathcal O_X)=1$. [F3, algebra, step 2.1]

4.1 Using the isomorphism from step 2.1 and the Whitney identity, $c_t(E)=c_t(E')c_t(\mathcal O_X)=c_t(E')$. Comparing coefficients of $t$ and $t^2$ and using step 1.1 gives $c_1(E')=a_1$ and $c_2(E')=a_2$. Thus every target pair has a preimage, proving surjectivity. [F3, step 1.1, step 2.1, step 3.1] ∎
