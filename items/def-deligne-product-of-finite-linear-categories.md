---
id: def-deligne-product-of-finite-linear-categories
kind: definition
title: "The Deligne product of finite linear categories"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-abelian-category, def-equivalence-and-adjoint-equivalence-of-categories, def-finite-k-linear-abelian-category, def-functor-category, def-k-linear-category-and-k-linear-functor, def-left-exact-and-right-exact-functor, def-natural-transformation, def-product-category, lem-finite-vector-space-copowers-in-a-linear-abelian-category, rem-category-theory-class-and-size-conventions]
justified_by: [thm-finite-deligne-products-exist-by-tensor-product-algebras]
provenance:
  statement: literature-derived
  proof: not-applicable
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, author final version, §1.11 (Definition 1.11.1 and Proposition 1.11.2 with its coalgebra-realization sketch), printed pp.15–16"
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
    - title: "Fuchs, Schaumann, Schweigert, Eilenberg–Watts calculus for finite categories and a bimodule Radford S^4 theorem, arXiv:1612.04561v3, §2.1 (Lemma 2.1 and (2.1)), §2.3 ((2.6)–(2.9)), §2.4 (Proposition 2.8, Corollary 2.9 and (2.18)–(2.31)), §§3.1–3.2 (Definition 3.1, Theorem 3.2, Lemma 3.3, Proposition 3.4 and Corollaries 3.5–3.7), §3.5 (Definition 3.14, Lemmas 3.15–3.16 and (3.56)–(3.58))"
      url: https://arxiv.org/pdf/1612.04561v3
dependency_level: 1
---

## Definition

Let $k$ be a field and let $\mathcal C,\mathcal D$ be finite $k$-linear abelian categories ([[def-finite-k-linear-abelian-category]], [[def-k-linear-category-and-k-linear-functor]], [[def-abelian-category]]). A **Deligne product** of $\mathcal C$ and $\mathcal D$ is a $k$-linear abelian category $\mathcal C\boxtimes\mathcal D$ together with a functor $\boxtimes:\mathcal C\times\mathcal D\to\mathcal C\boxtimes\mathcal D$ ([[def-product-category]]) that is $k$-linear in each variable, right exact in each variable ([[def-left-exact-and-right-exact-functor]]), and universal with these properties: for every $k$-linear abelian category $\mathcal E$ the restriction functor $G\mapsto G\circ\boxtimes$, from $k$-linear right exact functors $\mathcal C\boxtimes\mathcal D\to\mathcal E$ with all natural transformations to $k$-linear functors $\mathcal C\times\mathcal D\to\mathcal E$ right exact in each variable with all natural transformations ([[def-functor-category]], [[def-natural-transformation]]), is an equivalence of categories ([[def-equivalence-and-adjoint-equivalence-of-categories]]). The universal property is an equivalence of categories, not merely a bijection on functor objects; existence is not asserted here but is supplied by [[thm-finite-deligne-products-exist-by-tensor-product-algebras]], and uniqueness means an equivalence respecting the universal bifunctor. Bilinearity is expressed through the action of finite-dimensional $k$-vector spaces that every $k$-linear abelian category carries by the finite copowers of [[lem-finite-vector-space-copowers-in-a-linear-abelian-category]]; the class and size bookkeeping is that of [[rem-category-theory-class-and-size-conventions]], and no choice beyond the supplied finite universal-object data is made.

## Remarks

- **The definition asserts no existence.** It fixes data $(\mathcal C\boxtimes\mathcal D,\boxtimes)$ and a property, and it postulates rather than constructs them; the finite construction and the verification of the equivalence of functor categories are the content of the `justified_by` supplier [[thm-finite-deligne-products-exist-by-tensor-product-algebras]]. The universal property is required for every $k$-linear abelian $\mathcal E$, including $\mathcal E=\mathcal C\boxtimes\mathcal D$, where restriction also classifies right exact endofunctors together with their transformations.

- **Reading the universal property.** "With all natural transformations" means the restriction functor is an equivalence between the two categories of functors, so it is full, faithful and essentially surjective: transformations of bifunctors correspond bijectively to natural transformations of the induced functors on $\mathcal C\boxtimes\mathcal D$, and every $k$-linear right exact functor out of $\mathcal C\boxtimes\mathcal D$ is induced up to natural isomorphism by such a bifunctor. Uniqueness is uniqueness of the pair up to an equivalence of $k$-linear abelian categories compatible with the universal bifunctors; no literal equality of objects, of categories, or of chosen representatives is asserted.

- **Bilinearity and size.** $k$-linearity in each variable is expressed by the partial functors $\mathcal C\to\mathcal E$ and $\mathcal D\to\mathcal E$ being $k$-linear ([[def-k-linear-category-and-k-linear-functor]]), and every $k$-linear abelian category carries the finite vector-space action $V\odot Y$ supplied by [[lem-finite-vector-space-copowers-in-a-linear-abelian-category]]; right exactness is the exactness convention of [[def-left-exact-and-right-exact-functor]]. The sources of functor categories are chosen small representatives of the finite categories, as required by [[def-functor-category]]; transport along supplied equivalences is understood. No category of all proper-class-sized functors is formed. The definition performs no selection; the existence theorem states its choice assumption separately.
