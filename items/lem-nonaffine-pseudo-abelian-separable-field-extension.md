---
id: lem-nonaffine-pseudo-abelian-separable-field-extension
kind: lemma
title: "Pseudo-abelian varieties under separable algebraic extension"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, def-abelian-variety-over-a-field, thm-nonaffine-maximal-smooth-connected-affine-normal-subgroup, lem-nonaffine-effective-affine-algebra-descent, lem-nonaffine-affine-and-finite-morphism-fppf-descent, lem-nonaffine-fppf-descent-of-scheme-morphisms, lem-ag-geometric-regularity-field-tests, thm-finite-galois-extension-characterizations, lem-nonaffine-connected-group-geometrically-connected, lem-trace-pairing-for-a-finite-separable-extension, thm-field-norm-and-trace-by-embeddings]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Milne, Algebraic Groups (2022), Proposition 8.5, p.149"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "Brion, Some structure theorems for algebraic groups, Sections 4.2-4.3"
      url: https://arxiv.org/pdf/1509.03059
---

## Statement

Assume AC. Let $G$ be a pseudo-abelian variety over a field $k$, and let $K/k$ be a separable algebraic extension, possibly infinite. Then $G_K$ is pseudo-abelian. Smoothness and connectedness are retained. No assertion for arbitrary inseparable extensions is made.

## Facts & Assumptions

[F1] Every finite-type group has a unique largest smooth connected affine normal subgroup. ([[thm-nonaffine-maximal-smooth-connected-affine-normal-subgroup]])

[F2] Affine algebra descent is effective, compatible morphisms descend along fppf covers, and affineness descends along finite faithfully flat field extension. Geometric regularity descends along field extension. ([[lem-nonaffine-effective-affine-algebra-descent]], [[lem-nonaffine-fppf-descent-of-scheme-morphisms]], [[lem-nonaffine-affine-and-finite-morphism-fppf-descent]], [[lem-ag-geometric-regularity-field-tests]])

[F3] A finite separable extension embeds in a finite Galois extension. ([[thm-finite-galois-extension-characterizations]], [[lem-nonaffine-connected-group-geometrically-connected]], [[lem-trace-pairing-for-a-finite-separable-extension]], [[thm-field-norm-and-trace-by-embeddings]])

## Proof

**Given:** AC, pseudo-abelian $G/k$, and separable algebraic $K/k$.

1.1 First let $K/k$ be finite Galois and let $N$ be the subgroup supplied by [F1] for $G_K$. Every semilinear Galois automorphism of $G_K$ takes $N$ to a smooth connected affine normal subgroup, hence fixes it by maximality. This stable closed subscheme descends to a closed subscheme $N_0\subset G$. Here is the ideal descent explicitly: on an affine chart $U=\operatorname{Spec}B\subset G$, its ideal $I\subset B\otimes_kK$ is stable. Choose trace-dual bases $c_i,d_i$ by [F3]. Their embedding matrices have transposed product equal to the identity by trace duality, hence also inverse product equal to the identity; the row for the identity embedding then gives that $\sum_i d_i\sigma(c_i)$ is $1$ for $\sigma=1$ and $0$ otherwise; thus for $b\in I$, $$b=\sum_i d_i\sum_{\sigma\in\operatorname{Gal}(K/k)}\sigma(c_i b).$$ The inner sums are invariant elements of $I$, so $I=(I\cap B)\otimes_kK$; invariants of $B\otimes_kK$ are $B$, by coefficientwise fixed-field equality. These ideals glue on chart overlaps by faithful flatness and define $N_0$. Multiplication, inverse, identity and conjugation factor through it since their defining ideal pullbacks become zero over $K$. By [F2], $N_0$ is affine and smooth. It is connected because a disconnection would pull back to one of $N$. Consequently pseudo-abelianness forces $N_0$ trivial and $N$ trivial. This proves the finite Galois case. [F1, F2, F3, given, construct, algebra]

2.1 For arbitrary separable algebraic $K/k$, suppose $G_K$ has a nontrivial smooth connected affine normal subgroup $H$. This subgroup, its group and conjugation factorizations, and its affine presentation descend to some finite separable $L/k$ inside $K$: choose a finite affine cover of $G$, finitely many ideal generators defining $H$, their finitely many gluing and factorization equations, and an affine finite-presentation model for $H$ and its inverse chart maps. Every coefficient belongs to a finite subextension; enlarge $L$ to contain the finitely many coefficients. Smoothness also spreads after enlarging $L$: on a finite cover of $H$ use its smooth presentations with invertible Jacobian minors, and include their coefficients and the equations giving the cover. Alternatively geometric regularity descends by [F2] once the model is defined. The descended $H_L$ is connected and nontrivial since scalar extension to $K$ is surjective on spaces and faithfully detects an identity isomorphism. Embed $L$ in a finite Galois $M/k$ by [F3]. Smoothness, affineness and normality persist, and connectedness persists by [F3]. Thus $H_M$ is nontrivial and contradicts the finite Galois case. Finally $G_K$ remains smooth by base change and connected by [F3]. AC enters through [F1]–[F3]. [F1, F2, F3, step 1.1, algebra] ∎
