---
id: thm-the-unit-object-of-a-multitensor-category-is-semisimple
kind: theorem
title: "The unit object of a multitensor category is semisimple"
status: draft
origin: pipeline
deps: [def-tensor-and-multitensor-category, def-semisimple-object-and-semisimple-abelian-category, def-simple-object, def-object-of-finite-length, thm-the-tensor-product-in-a-multitensor-category-is-biexact, thm-dualization-in-a-multitensor-category-is-exact, thm-images-commute-with-tensor-products-in-a-multitensor-category]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Theorem 4.3.8(ii)"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

The unit object of a multitensor category is semisimple.

## Facts & Assumptions

**Given:** A multitensor category $\mathcal C$.

[F1] $\mathcal C$ is locally finite and its unit has finite length ([[def-tensor-and-multitensor-category]], [[def-object-of-finite-length]]).

[F2] Tensoring is exact and dualization is exact ([[thm-the-tensor-product-in-a-multitensor-category-is-biexact]], [[thm-dualization-in-a-multitensor-category-is-exact]]).

[F3] Images commute with tensor products ([[thm-images-commute-with-tensor-products-in-a-multitensor-category]]).

[F4] A semisimple object is a finite direct sum of simple objects ([[def-semisimple-object-and-semisimple-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 The Eckmann--Hilton argument makes $E=\operatorname{End}(\mathbf1)$ a finite-dimensional commutative $k$-algebra. If $a^2=0$, put $J=\operatorname{im}a$ and $K=\ker a$. By [F3], $J\otimes J=0$ and $K\otimes J=0$. Tensoring $0\to K\to\mathbf1\to J\to0$ by $J$ and using [F2] then gives $J=0$, hence $a=0$. A nonzero nilpotent has a nonzero square-zero power, so $E$ is reduced. Thus the commutative Artinian algebra $E$ is a finite product of fields. Its primitive idempotents split $\mathbf1$ as a finite direct sum of indecomposable component units $\mathbf1_i$, each with $\operatorname{End}(\mathbf1_i)$ a field (not necessarily $k$). [F1, F2, F3, given]

2.1 Fix a component and a simple subobject $S\subseteq\mathbf1_i$, which exists by [F1].  Dualizing $0\to S\to\mathbf1_i\to Q\to0$ and then tensoring on the left by $S$ gives an exact sequence $0\to S\otimes Q^\vee\to S\to S\otimes S^\vee\to0$.  The last object is nonzero by the coevaluation zig-zag, so simplicity of $S$ makes $S\to S\otimes S^\vee$ an isomorphism. [F1, F2, step 1.1]

3.1 The coevaluation followed by the inverse of the isomorphism in step 2.1 is a nonzero epimorphism $p:\mathbf1_i\twoheadrightarrow S$. If $j:S\hookrightarrow\mathbf1_i$ is the inclusion, then $jp$ is a nonzero element of the field $\operatorname{End}(\mathbf1_i)$, hence an isomorphism. Therefore $j$ is also epic and thus an isomorphism. So every component unit is simple, and step 1.1 together with [F4] makes $\mathbf1$ semisimple. [step 1.1, step 2.1, F4] ∎
