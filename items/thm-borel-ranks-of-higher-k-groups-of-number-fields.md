---
id: thm-borel-ranks-of-higher-k-groups-of-number-fields
kind: theorem
title: "Borel's Ranks of Higher K-Groups of Number Fields"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-higher-quillen-k-group-of-ring-of-integers
  - def-archimedean-embeddings-and-number-field-signature
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Armand Borel, Stable real cohomology of arithmetic groups"
      url: "https://numdam.org/item/10.24033/asens.1269.pdf"
      locator: "Proposition 12.2, printed pp. 271–272; specialize the central division algebra to the field."
    - title: "Charles A. Weibel, The K-book: An Introduction to Algebraic K-Theory"
      url: "https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf"
      locator: "Chapter IV, Theorem 1.18 and §6.3.2, for the higher K-groups and their rank/regulator summary."
verification: {}
---

## Statement

Let $K$ be a number field with $r_1$ real embeddings and $r_2$ pairs of nonreal complex-conjugate embeddings. For every integer $m\ge1$, the abelian groups $K_{2m+1}(\mathcal O_K)$ and $K_{2m+1}(K)$ are finitely generated and have ranks

$$\operatorname{rank}_{\mathbb Z}K_{2m+1}(\mathcal O_K)=\operatorname{rank}_{\mathbb Z}K_{2m+1}(K)=\begin{cases}r_1+r_2,&m\text{ even},\\r_2,&m\text{ odd}.\end{cases}$$

Here the rank of a finitely generated abelian group $A$ is $\dim_{\mathbb Q}(A\otimes_{\mathbb Z}\mathbb Q)$; the assertion concerns only indices $2m+1\ge3$ and makes no claim about $K_0$ or torsion.

## Statement references

[[def-higher-quillen-k-group-of-ring-of-integers]]

[[def-archimedean-embeddings-and-number-field-signature]]

[Armand Borel, *Stable real cohomology of arithmetic groups*, Proposition 12.2](https://numdam.org/item/10.24033/asens.1269.pdf)

[Charles A. Weibel, *The K-book*, Chapter IV](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf)

## Facts & Assumptions

**Given:** A number field $K$ with signature $(r_1,r_2)$ and an integer $m\ge1$.

[F1] [[def-higher-quillen-k-group-of-ring-of-integers]]: $K_n(R)$ is defined by Quillen's Q-construction for $R=K$ and $R=\mathcal O_K$.

[F2] [[def-archimedean-embeddings-and-number-field-signature]]: $r_1$ counts real embeddings and $r_2$ counts conjugate pairs of nonreal complex embeddings.

## Escalation

The statement is Borel's established rank theorem, with the field and ring-of-integers cases in the source's $i\ge2$ range. The local proof is not supplied: Proposition 12.2 is deduced from the stable cohomology of arithmetic groups, and the complete stable-cohomology argument and its comparison with the Q-construction K-groups have not been reconstructed in this batch. The exact proposed prerequisite is `thm-borel-stable-cohomology-rank-calculation-for-sl-n`, placed on this A page immediately before the present item; it must give the stable primitive dimensions and the K-theory comparison under the source's $i\ge2$ hypotheses. The carrier records the exact statement and source boundary without treating the citation as a proof. No torsion, $K_0$, or $K_1$ assertion is implied.
