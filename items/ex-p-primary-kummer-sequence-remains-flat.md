---
id: ex-p-primary-kummer-sequence-remains-flat
kind: example
title: "Why p-primary Kummer theory must retain the flat topology"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-abelian-variety-over-a-field
  - def-axiom-of-choice
  - def-dependent-choice
  - def-dual-numbers-scheme
  - def-etale-morphism-schemes
  - def-n-torsion-of-an-abelian-variety-as-a-finite-flat-group-scheme
  - def-zariski-tangent-space-point
  - thm-differentials-smooth-locally-free
  - thm-etale-equivalent-flat-unramified-fp
  - thm-fppf-kummer-exact-sequence-for-abelian-variety
  - thm-multiplication-by-n-has-degree-n-to-2g
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, Chapter I, Theorem 8.2 and Chapter XX, Proposition 20.7"
      url: "https://www.jmilne.org/math/xnotes/AVs.pdf"
      locator: "Theorem 8.2 and Proposition 20.7 on finite flat multiplication and its characteristic-dependent étale behavior."
    - title: "The Stacks Project, Groupoid Schemes, Section 39.9, Lemma 39.9.8 and Proposition 39.9.11"
      url: "https://stacks.math.columbia.edu/tag/0BFG"
      locator: "The degree formula and étale criterion for multiplication on abelian varieties."
---

## Example

Assume the Axiom of Choice and Dependent Choice. Let $K=\mathbb F_5$, let $A/K$ be an abelian variety of positive dimension $g$, and take $n=5$. Then $[5]:A\to A$ is finite faithfully flat of degree $5^{2g}$, its kernel $A[5]$ is finite flat of rank $5^{2g}$ but is not étale, and
$$0\longrightarrow A[5]\longrightarrow A\xrightarrow{[5]}A\longrightarrow0$$
is exact on the big fppf site. This is the characteristic-dividing-$n$ case, so the prime-to-characteristic étale/Galois sequence does not apply.

## Example references

[Milne, Abelian Varieties, Theorem 8.2 and Proposition 20.7](https://www.jmilne.org/math/xnotes/AVs.pdf)

[The Stacks Project, Groupoid Schemes, Lemma 39.9.8 and Proposition 39.9.11](https://stacks.math.columbia.edu/tag/0BFG)

## Facts & Assumptions


**Given:** The Axiom of Choice, Dependent Choice, $K=\mathbb F_5$, and an abelian variety $A/K$ of dimension $g>0$.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[A2] Dependent Choice states that every serial relation on a nonempty set admits an infinite chain ([[def-dependent-choice]]).

[F1] [[thm-multiplication-by-n-has-degree-n-to-2g]]: $[n]$ is finite faithfully flat of degree $n^{2g}$, with finite flat kernel $A[n]$ of rank $n^{2g}$.

[F2] [[thm-fppf-kummer-exact-sequence-for-abelian-variety]]: the scheme-theoretic kernel sequence for $[n]$ is exact on the big fppf site for every field and every $n\ge2$.

[F3] [[def-abelian-variety-over-a-field]]: an abelian variety is a smooth group variety over its field; its identity is a rational point and its dimension is the dimension of its smooth structure morphism.

[F4] [[def-dual-numbers-scheme]], [[def-zariski-tangent-space-point]], and [[def-n-torsion-of-an-abelian-variety-as-a-finite-flat-group-scheme]]: first-order maps from $\operatorname{Spec}(K[\epsilon]/(\epsilon^2))$ reducing to the identity represent tangent vectors at the identity; the fiber-product definition of $A[5]$ identifies $T_eA[5]$ with $\ker(d[5]_e)$.

[F5] [[def-etale-morphism-schemes]], [[thm-differentials-smooth-locally-free]], [[thm-etale-equivalent-flat-unramified-fp]], and [[def-zariski-tangent-space-point]]: an étale morphism over $K$ is smooth of relative dimension zero, so its relative differentials and tangent space at a $K$-point vanish; a smooth $g$-dimensional $K$-scheme has a $g$-dimensional tangent space at such a point.

## Verification


1.1 Apply [F1] with $K=\mathbb F_5$ and $n=5$. This gives finite faithful flatness of degree $5^{2g}$ and a finite flat kernel $A[5]$ of rank $5^{2g}$. [A1, A2, F1, given]

1.2 A tangent vector at the identity is a first-order point over $K[\epsilon]/(\epsilon^2)$ reducing to the identity. The group-law differential at $(e,e)$ restricts to the identity on each tangent summand by the two unit laws, so by linearity it sends $(v,w)$ to $v+w$. Iterating the group law therefore gives $d[5]_e=5\,\mathrm{id}_{T_eA}=0$ in characteristic $5$. By [F4], $T_eA[5]=\ker(d[5]_e)=T_eA$, which is nonzero because $\dim_KT_eA=g>0$ by [F5]. [F3, F4, F5, algebra]

2.1 If $A[5]$ were étale over $K$, [F5] would make its tangent space at the identity zero. This contradicts the nonzero tangent space from step 1.2, so $A[5]$ is not étale. The Kummer sheaf sequence is nevertheless exact by [F2], which is why this p-primary case must remain on the fppf site. [F2, F5, step 1.2] ∎
