---
id: lem-cech-twisted-vector-bundle-produces-azumaya-algebra
kind: lemma
title: "A Čech-twisted vector bundle produces an Azumaya algebra"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-axiom-of-choice
  - def-azumaya-algebra-on-a-variety
  - thm-pgl-torsors-classify-azumaya-algebras
  - lem-faithfully-flat-effective-descent-of-modules-and-algebras
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for the declared PGL torsor and cohomology interfaces."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "A. J. de Jong, A result of Gabber"
      url: "https://www.math.columbia.edu/~dejong/papers/2-gabber.pdf"
      locator: "§2.3 and §2.13–2.14, twisted sheaves and their endomorphism algebras; the supplied Čech-data direction is reconstructed below."
verification: {}
---

## Statement

Assume AC. Let $X$ be a scheme, let $\{U_i\to X\}$ be an étale covering, and let $c_{ijk}\in\Gamma(U_i\times_XU_j\times_XU_k,\mathbb G_m)$ be a multiplicative Čech $2$-cocycle. Suppose finite locally free modules $E_i$ of a common positive rank $n$ on the $U_i$ are equipped with isomorphisms $g_{ij}:E_j|_{U_{ij}}\to E_i|_{U_{ij}}$ satisfying $g_{ij}g_{jk}=c_{ijk}g_{ik}$ on triple overlaps. Then the algebras $\mathcal E nd(E_i)$ descend to a degree-$n$ Azumaya algebra on $X$, whose cohomological class is the image of $[c]$ in $H^2_{\mathrm{fppf}}(X,\mathbb G_m)$. On Noetherian $X$, the same class corresponds to the étale cohomological Brauer class.

## Facts & Assumptions

**Given:** Exactly the scheme, covering, scalar cocycle and twisted vector-bundle data in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] An algebra locally isomorphic to $M_n$ is a degree-$n$ Azumaya algebra. [[def-azumaya-algebra-on-a-variety]]

[F2] Degree-$n$ Azumaya algebras are classified by $\operatorname{PGL}_n$ torsors and the scalar lifting cocycle is their cohomological class; on Noetherian schemes étale and fppf classes agree. [[thm-pgl-torsors-classify-azumaya-algebras]]

[F3] Faithfully flat module and algebra descent is effective. [[lem-faithfully-flat-effective-descent-of-modules-and-algebras]]

## Proof

**Proof technique:** conjugation cancels the scalar defect, which reappears in the $\operatorname{PGL}_n$ connecting cocycle.

1.1 On $U_{ij}$ let $\operatorname{Ad}(g_{ij})$ identify $\mathcal E nd(E_j)$ with $\mathcal E nd(E_i)$. On a triple overlap, the scalar $c_{ijk}$ acts trivially by conjugation, so the given twisted identity yields $\operatorname{Ad}(g_{ij})\operatorname{Ad}(g_{jk})=\operatorname{Ad}(g_{ik})$. These are genuine algebra descent data. By [F3], after refining by affine charts if necessary, they descend to an $\mathcal O_X$-algebra $\mathcal A$ whose pullback to $U_i$ is $\mathcal E nd(E_i)$. [A1, F3, given, construct, algebra]

2.1 Each $E_i$ is locally free of rank $n$, so $\mathcal A$ is locally a matrix algebra after the given étale cover. Its underlying module is finite locally free and its tensor-to-endomorphism map is an isomorphism there; faithfully flat descent of these two properties and [F1] make $\mathcal A$ a degree-$n$ Azumaya algebra. [F1, F3, step 1.1, algebra]

3.1 Refine the cover so each $E_i$ has a chosen frame. The projective images of the transition matrices $g_{ij}$ are the transition functions for the splitting torsor of $\mathcal A$, because they act by the conjugations used in step 1.1. Their chosen linear lifts have triple-product defect $g_{ij}g_{jk}g_{ik}^{-1}=c_{ijk}$. By [F2], this scalar cocycle is the cohomological class of $\mathcal A$. The same supplier identifies its étale and fppf classes when $X$ is Noetherian. Rank one and the trivial cocycle are included. [F2, step 1.1, step 2.1, choose, construct, algebra] ∎
