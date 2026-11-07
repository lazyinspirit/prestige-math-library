---
id: thm-johnston-nickel-eimc-abelian-sylow-p-subgroup
kind: theorem
title: Johnston–Nickel EIMC for One-Dimensional Extensions with Abelian Sylow p-Subgroup
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 31
deps:
  - def-admissible-one-dimensional-p-adic-lie-extension
  - thm-johnston-nickel-abelian-eimc-with-uniqueness
  - thm-johnston-nickel-product-injectivity-p-elementary-subquotients
  - thm-johnston-nickel-sk1-vanishes-for-abelian-sylow
  - lem-finite-by-zp-profinite-group-splits
  - lem-abelian-sylow-elementary-subquotients-are-abelian
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
axiom_use: AC, Countable Choice, and Dependent Choice are inherited from the abelian EIMC supplier and its class-field inputs.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Johnston and Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: Corollary 11.17 and proof, printed p. 34.
verification: {}
---

## Statement

Assume AC, Countable Choice, and Dependent Choice. Let $p$ be an odd prime, let $K$ be a totally real number field, and let $L/K$ be an admissible one-dimensional $p$-adic Lie extension such that $\operatorname{Gal}(L/K)$ has an abelian Sylow $p$-subgroup. Then the equivariant Iwasawa main conjecture with uniqueness holds for $L/K$, with the relative-complex and $p$-adic Artin $L$-element conventions of the abelian theorem. No $\mu=0$ hypothesis is imposed.

## Statement references

[Johnston and Nickel, Corollary 11.17](https://arxiv.org/pdf/2010.03186)

[[def-admissible-one-dimensional-p-adic-lie-extension]]

[[lem-finite-by-zp-profinite-group-splits]]

[[thm-johnston-nickel-abelian-eimc-with-uniqueness]]

[[lem-abelian-sylow-elementary-subquotients-are-abelian]]

## Proof status

The conditional reduction below follows §11.4. Its two essential local inputs, product injectivity and $SK_1$-vanishing, have draft carriers whose proofs remain escalated.

## Facts & Assumptions

**Given:** AC, Countable Choice, Dependent Choice, $p,K,L$, and the Statement hypotheses.

[F1] The abelian one-dimensional EIMC holds without a $\mu=0$ hypothesis, conditional on its own local supplier proofs. [[thm-johnston-nickel-abelian-eimc-with-uniqueness]]

[F2] The finite-by-$\mathbb Z_p$ group has an open central subgroup $\Gamma_0\cong\mathbb Z_p$, and under the abelian Sylow hypothesis each $p$-elementary subquotient selected by the source reduction is abelian, including that central direction. [[lem-finite-by-zp-profinite-group-splits]] [[lem-abelian-sylow-elementary-subquotients-are-abelian]]

[A1] The reduction from the full EIMC to all $p$-elementary subquotients uses the product-injectivity theorem; its Frobenius-module and induction proof is not yet complete locally. [[thm-johnston-nickel-product-injectivity-p-elementary-subquotients]]

[A2] Uniqueness requires $SK_1(Q(G))=0$. The current local proof of this vanishing still depends on unreconstructed Ritter–Weiss, Lau, and reduced-norm inputs. [[thm-johnston-nickel-sk1-vanishes-for-abelian-sylow]]

## Proof

**Given:** The Statement hypotheses and the conditional suppliers [F1]–[A2].

1.1 The finite-by-$\mathbb Z_p$ splitting supplies a central open $\Gamma_0\cong\mathbb Z_p$. For every test subquotient in the source's family, [F2] gives abelianness from the abelian Sylow hypothesis, including the infinite $\Gamma_0$ direction. [F2, given]

1.2 By [F1], the EIMC holds for every one-dimensional admissible subextension with one of these abelian Galois groups. The product-injectivity theorem [A1] then descends existence of the EIMC from those subextensions to $L/K$. [F1, A1, F2, step 1.1]

2.1 The vanishing in [A2] makes the reduced-norm kernel trivial, so the EIMC element is unique. Thus Corollary 11.17 follows conditional on [A1]–[A2]; their local proof obligations remain escalated. [A1, A2, step 1.2] ∎

## Proof references

[Johnston and Nickel, §§11.1–11.4](https://arxiv.org/pdf/2010.03186)
