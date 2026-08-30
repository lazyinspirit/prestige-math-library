---
id: cor-a-sequence-of-chain-maps-is-exact-exactly-when-it-is-exact-degreewise
kind: corollary
title: "A sequence of chain maps is exact exactly when it is exact degreewise"
status: draft
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-the-category-of-complexes-in-an-abelian-category-is-abelian,
       def-short-exact-sequence-of-complexes,
       prop-images-and-coimages-of-chain-maps-are-computed-degreewise,
       def-exactness-at-a-node]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Lemma 12.13.3"
      url: "https://stacks.math.columbia.edu/tag/010V"
pipeline_run: frontier-24
---

## Statement

Let
$$A_\bullet\xrightarrow{u}B_\bullet\xrightarrow{v}C_\bullet$$
be composable chain maps in an abelian category. The sequence is exact at
$B_\bullet$ in $\operatorname{Ch}(\mathcal A)$ if and only if for every
$n\in\mathbb Z$ the sequence
$$A_n\xrightarrow{u_n}B_n\xrightarrow{v_n}C_n$$
is exact at $B_n$ in $\mathcal A$.

## Facts & Assumptions

**Given:** Composable chain maps $A_\bullet\xrightarrow{u}B_\bullet\xrightarrow{v}C_\bullet$.

[L1] $\operatorname{Ch}(\mathcal A)$ is abelian ([[thm-the-category-of-complexes-in-an-abelian-category-is-abelian]]).

[L2] Exactness at a node means equality of the image and kernel subobjects ([[def-exactness-at-a-node]]).

[L3] Images and kernels of chain maps are computed degreewise ([[prop-images-and-coimages-of-chain-maps-are-computed-degreewise]]).

## Proof

**Proof technique:** direct.

1.1 If the sequence is exact at $B_\bullet$ in $\operatorname{Ch}(\mathcal A)$, then [L2] says $\operatorname{im}(u)=\ker(v)$ as subobjects of $B_\bullet$. By [L3], their $n$th components are $\operatorname{im}(u_n)$ and $\ker(v_n)$, so [L2] gives exactness of $A_n\to B_n\to C_n$ in every degree. [L1, L2, L3]

2.1 Conversely, if every degreewise sequence is exact, then [L2] gives $\operatorname{im}(u_n)=\ker(v_n)$ inside $B_n$ for every $n$. By [L3], that is exactly the degreewise comparison between the image and kernel complexes, so [L2] makes the sequence exact at $B_\bullet$ in $\operatorname{Ch}(\mathcal A)$. [L2, L3] ∎
