---
id: ex-higher-k-group-ranks-for-q
kind: example
title: "Higher K-Group Ranks for the Rational Field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - cor-rational-algebraic-integers-are-integers
  - def-archimedean-embeddings-and-number-field-signature
  - thm-borel-ranks-of-higher-k-groups-of-number-fields
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-authored
  proof: ai-authored
sources:
  references:
    - title: "Armand Borel, Stable real cohomology of arithmetic groups"
      url: "https://numdam.org/item/10.24033/asens.1269.pdf"
      locator: "Proposition 12.2, specialized to $K=\\mathbb Q$."
    - title: "Charles A. Weibel, The K-book: An Introduction to Algebraic K-Theory"
      url: "https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf"
      locator: "Chapter IV, higher K-groups of rings of integers and their ranks."
verification: {}
---

## Example

The rational field has signature $(r_1,r_2)=(1,0)$. For $m\ge1$, Borel's rank formula gives

$$\operatorname{rank}_{\mathbb Z}K_{2m+1}(\mathbb Z)=\begin{cases}1,&m\text{ even},\\0,&m\text{ odd}.
\end{cases}$$

In particular, $K_3(\mathbb Z)$ has rank $0$ and $K_5(\mathbb Z)$ has rank $1$.

## Example references

[[thm-borel-ranks-of-higher-k-groups-of-number-fields]]

[Armand Borel, *Stable real cohomology of arithmetic groups*, Proposition 12.2](https://numdam.org/item/10.24033/asens.1269.pdf)

## Facts & Assumptions

**Given:** The field $\mathbb Q$ and an integer $m\ge1$.

[F1] [[def-archimedean-embeddings-and-number-field-signature]]: $\mathbb Q$ has one real embedding and no pair of nonreal embeddings.

[F2] [[thm-borel-ranks-of-higher-k-groups-of-number-fields]]: the rank is $r_1+r_2$ for even $m$ and $r_2$ for odd $m$.

[F3] [[cor-rational-algebraic-integers-are-integers]]: the rational algebraic integers are exactly $\mathbb Z$, so $\mathcal O_{\mathbb Q}=\mathbb Z$.

## Proof

1.1 The identity is the only embedding of $\mathbb Q$ into $\mathbb R$, and every embedding into $\mathbb C$ has real image. Thus [F1] gives $(r_1,r_2)=(1,0)$; [F3] identifies the ring of integers with $\mathbb Z$. [F1, F3, given, algebra]

2.1 If $m$ is even, [F2] gives rank $r_1+r_2=1$; if $m$ is odd, it gives rank $r_2=0$. Substituting $m=1$ and $m=2$ yields the stated $K_3$ and $K_5$ ranks. [F2, step 1.1, given, cases]

## Escalation

The arithmetic specialization is complete, but it depends on the Borel rank theorem, whose stable-cohomology proof is not locally supplied in this batch. This example is not a ready supplier until that theorem is proved locally.
