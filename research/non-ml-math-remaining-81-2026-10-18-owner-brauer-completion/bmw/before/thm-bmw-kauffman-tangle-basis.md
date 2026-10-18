---
id: thm-bmw-kauffman-tangle-basis
kind: theorem
title: BMW basis by descending Kauffman tangles
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-brauer-and-partition-diagram-categories
  - lem-brauer-and-partition-diagram-basis-ranks
  - def-bmw-algebra-with-fixed-kauffman-skein-convention
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Goodman and Hauschild, Affine Birman-Wenzl-Murakami Algebras and Tangles in the Solid Torus, §§2, 3.1, 5.1–5.5"
      url: https://arxiv.org/pdf/math/0411155
      locator: "PDF pp. 4–16 and 33–50: framed Kauffman tangles, the ordinary BMW presentation, descending-tangle basis, and the Morton–Wassermann isomorphism proof."
---

## Statement

Let $n\ge0$ and
$$R=\mathbb Z[q^{\pm1},\rho^{\pm1},\delta^{\pm1}]/((q-q^{-1})(\delta-1)-(\rho-\rho^{-1})),\qquad z=q-q^{-1}.$$
Let $\Lambda_0=\mathbb Z[\lambda^{\pm1},z_0,\delta^{\pm1}]/(\lambda^{-1}-\lambda-z_0(\delta-1))$ and map it to $R$ by $\lambda\mapsto\rho$, $z_0\mapsto-z$, and $\delta\mapsto\delta$. A framed $(n,n)$ tangle is an isotopy class, fixing the boundary, of pairwise disjoint embedded ribbons in a rectangle times an interval, with $n$ prescribed ribbon intervals at each end. An ordinary $(n,n)$ tangle diagram is a generic immersed collection of arcs in the rectangle with those $2n$ fixed endpoints, with each transverse double point marked over/under. Regular isotopy means planar isotopy fixing the boundary together with Reidemeister moves II and III, but not move I; this is the framed-diagram convention of Goodman–Hauschild, §§2.1–2.2. Multiplication is vertical stacking, and the identity is the diagram of $n$ vertical strands. Define $KT_n(R)$ as the quotient of the free $R$-module on regular-isotopy classes by the local rules of Goodman–Hauschild, Definition 2.6, after the displayed parameter substitution: the crossing skein relation is $L_+-L_-=z(L_{\mathrm{id}}-L_{\mathrm{cup-cap}})$, the two opposite single-crossing curls evaluate to $\rho^{-1}$ and $\rho$ times the straight strand, and an isolated unknotted, untwisted circle is removed with coefficient $\delta$. Here $L_+$ and $L_-$ differ by the crossing, while $L_{\mathrm{id}}$ and $L_{\mathrm{cup-cap}}$ are its identity and cup-cap smoothings; all four diagrams agree outside a small disk. Order the $2n$ boundary labels by $1<\cdots<n<n'<\cdots<1'$. The standard orientation of a diagram orients each nonclosed strand from its lower-ordered endpoint to its higher-ordered endpoint and traverses the nonclosed strands by increasing initial endpoint. Such an oriented diagram is totally descending if every crossing is first met as an over-crossing in this traversal. For every perfect matching of the $2n$ boundary points there is a unique regular-isotopy class with that matching which is totally descending, has no strand self-crossings, and has no closed component. The universal BMW-to-tangle isomorphism over $\Lambda_0$ of Goodman–Hauschild, Theorem 5.41, base-changes along $\Lambda_0\to R$ to an isomorphism $BMW_n(R;q,\rho,\delta)\to KT_n(R)$ in the convention of [[def-bmw-algebra-with-fixed-kauffman-skein-convention]]. Both algebras are free over $R$ on these classes, so their rank is $(2n-1)!!$.

## Facts & Assumptions

**Given:** The BMW generators and relation convention in [[def-bmw-algebra-with-fixed-kauffman-skein-convention]] and the pair-partition connector convention in [[def-brauer-and-partition-diagram-categories]].

[F1] [[def-bmw-algebra-with-fixed-kauffman-skein-convention]]: the skein and untwisting relations define the source BMW algebra.

[F2] [[def-brauer-and-partition-diagram-categories]] and [[lem-brauer-and-partition-diagram-basis-ranks]]: pair partitions of the ordered $2n$ boundary vertices index the ordinary Brauer connectors and their number is $(2n-1)!!$.

## Proof

Escalated: the source gives the full route, but the local proof is not yet authored. It requires (i) crossing-number induction to span the tangle algebra by loop-free descending tangles, (ii) linear independence from the closure-form determinant argument and its generic Brauer-connector specialization, and (iii) the double induction on through-strand rank proving injectivity of the BMW-to-tangle map (Goodman–Hauschild, Lemmas 5.21–5.40 and Theorem 5.41). This basis theorem is a separate duty from the Brauer/O–Sp centralizer theorem and is not inferred from it.
