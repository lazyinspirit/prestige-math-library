---
id: "lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds"
kind: "lemma"
title: "Rational cohomology scalar comparison on compact smooth manifolds"
status: "draft"
origin: "session"
deps: ["def-axiom-of-choice", "lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice", "thm-cellular-homology-computes-singular-homology", "thm-universal-coefficient-theorem-for-cohomology-over-a-pid", "thm-de-rham-theorem"]
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Christian Schnell, Complex Manifolds, MAT 545, Fall 2024, classes 16–18", "url": "https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf"}]}
proof_strategy: direct
---

## Statement

For a compact smooth manifold $X$, the natural coefficient maps induce isomorphisms $H^k(X;\mathbb Q)\otimes_{\mathbb Q}F\cong H^k(X;F)$ for every characteristic-zero field $F$, finite-dimensional in each degree. For $F=\mathbb R,\mathbb C$ these identify singular cohomology with the real or complex de Rham cohomology. They preserve cup products and are natural for maps between such manifolds. No ordered-field or positivity structure is asserted for a general $F$.

## Facts & Assumptions

**Given:** The data and hypotheses of the Statement.

[F1] Compact finite CW models are supplied by [[lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice]], cellular homology by [[thm-cellular-homology-computes-singular-homology]], evaluation UCT by [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]], and de Rham comparison by [[thm-de-rham-theorem]].

## Proof

1.1 A finite CW homotopy model exists by the compact-manifold supplier. Its finite cellular chain groups over $\mathbb Q$ imply that $H_k(X;\mathbb Q)$ is finite-dimensional. For the singular rational chain complex choose, under AC, direct complements $Z_k=B_k\oplus A_k$ and $C_k=Z_k\oplus T_k$. The boundary bijects $T_k$ onto $B_{k-1}$. Tensoring with a field $F$ preserves these direct decompositions and this bijection, so the homology of $C_*(X;\mathbb Q)\otimes F=C_*(X;F)$ is $A_k\otimes F=H_k(X;\mathbb Q)\otimes F$. Although the proof chooses complements, the resulting isomorphism is the canonical coefficient map, as follows by applying it to a cycle. [given, algebra, choose]

2.1 Over a field, any linear functional on a subspace extends by a basis complement; thus the UCT evaluation kernel, described as the quotient of boundary functionals by restrictions of cycle functionals, is zero. The field UCT therefore gives canonical evaluation isomorphisms $H^k(X;\mathbb Q)=\operatorname{Hom}_{\mathbb Q}(H_k(X;\mathbb Q),\mathbb Q)$ and $H^k(X;F)=\operatorname{Hom}_F(H_k(X;F),F)$. The finite-dimensionality in step 1.1 makes $\operatorname{Hom}_{\mathbb Q}(H_k,\mathbb Q)\otimes F\to\operatorname{Hom}_F(H_k\otimes F,F)$ an isomorphism: on a finite basis it is the identity $F^d\to F^d$. Evaluation identifies this map with coefficient change, proving the claim. Cup products commute with coefficient inclusion directly from the front/back cup formula, and naturality follows by precomposition on cochains. Real de Rham comparison is the supplied theorem. Complex forms uniquely split into real and imaginary parts, so kernels, images and quotients complexify, giving its complex version. [step 1.1, given, algebra] ∎
