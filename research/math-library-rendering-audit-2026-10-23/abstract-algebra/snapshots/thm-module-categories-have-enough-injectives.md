---
id: thm-module-categories-have-enough-injectives
kind: theorem
title: "Module categories have enough injectives"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-every-abelian-group-embeds-in-a-divisible-group, lem-coinduced-modules-are-injective, thm-products-of-injective-modules, thm-universal-property-of-free-modules, thm-injective-modules-over-a-pid-are-exactly-divisible, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. For every unital ring $R$ and every left $R$-module $M$, there is an injective left $R$-module $I$ and a monomorphism $M\to I$. Thus left $R$-modules have enough injectives.

For commutative $R$, one explicit functorial target is
$$J(M)=\left(R^{(M^\vee)}\right)^\vee\cong\prod_{\phi\in M^\vee}R^\vee,$$
where $X^\vee=\operatorname{Hom}_{\mathbb Z}(X,\mathbb Q/\mathbb Z)$; the embedding is $M\to M^{\vee\vee}\to J(M)$.
Here $X^\vee$ is a left $R$-module by $(r\phi)(x)=\phi(rx)$.

## Facts & Assumptions

**Given:** A unital ring $R$ and a left $R$-module $M$.

[L1] Every abelian group embeds, without choice, in a divisible abelian group ([[lem-every-abelian-group-embeds-in-a-divisible-group]]).

[L2] If $D$ is an injective abelian group, then $\operatorname{Hom}_{\mathbb Z}(R,D)$ is an injective left $R$-module ([[lem-coinduced-modules-are-injective]]).

[L3] Under AC, products of injective modules are injective ([[thm-products-of-injective-modules]]).

[L4] The free module on a set has its universal property and canonical basis ([[thm-universal-property-of-free-modules]]).

[L5] Under AC, divisible abelian groups are injective $\mathbb Z$-modules ([[thm-injective-modules-over-a-pid-are-exactly-divisible]]).

[F1] AC supplies choices for arbitrary nonempty families ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** constructive.

1.1 Regard $M$ as an abelian group. By [L1], choose an embedding $j:M\to D$ into a divisible abelian group $D$. Under AC, [L5] makes $D$ injective as an abelian group. [L1, L5, F1, choose]

1.2 Now assume $R$ commutative and put $D_0=\mathbb Q/\mathbb Z$. This group is divisible, hence injective by [L5]. For every nonzero $m\in M$, define a nonzero map on the cyclic subgroup $\mathbb Zm$ by sending $m$ to $1/n+\mathbb Z$ when $m$ has finite order $n$, or to $1/2+\mathbb Z$ when $m$ has infinite order; injectivity extends it to $M$. Therefore evaluation $M\to M^{\vee\vee}$ is injective. [L5, construct]

2.1 Define $\eta:M\to\operatorname{Hom}_{\mathbb Z}(R,D)$ by $\eta(m)(r)=j(rm)$. It is $R$-linear for the coinduced action, and evaluation at $1$ gives $\eta(m)(1)=j(m)$, so $\eta$ is injective. [step 1.1, L2, construct]

2.2 Let $\varepsilon:R^{(M^\vee)}\to M^\vee$ be the canonical free cover given by [L4]. Precomposition with its surjection embeds $M^{\vee\vee}$ into $J(M)=(R^{(M^\vee)})^\vee$. [step 1.2, L4, construct]

3.1 The target in step 2.1 is injective by [L2], proving enough injectives for arbitrary unital rings. [step 2.1, L2]

3.2 A homomorphism from a direct sum to $D_0$ is the same as a family of homomorphisms from its summands, so $J(M)\cong\prod_{\phi\in M^\vee}R^\vee$. Each $R^\vee$ is injective by [L2], and the product is injective by [L3]. [step 2.2, L2, L3, L4]

4.1 A module map $M\to N$ induces $N^\vee\to M^\vee$, then a map between the canonical free modules, and dualizing reverses direction again; these maps commute with evaluation and the free covers, so $M\mapsto J(M)$ and the embeddings are functorial. [step 2.2, step 3.2, L4]

5.1 Steps 1.1, 2.1, and 3.1 prove enough injectives over every unital ring. Steps 1.2, 2.2, 3.2, and 4.1 give the stated functorial commutative-ring construction. Full AC enters through injectivity of divisible groups and arbitrary products, not through the divisible-hull embedding itself. [step 1.1, step 2.1, step 3.1, step 1.2, step 2.2, step 3.2, step 4.1, discharge-construct] ∎
