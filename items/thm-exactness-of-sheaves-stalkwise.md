---
id: thm-exactness-of-sheaves-stalkwise
kind: theorem
title: "A sequence of abelian sheaves is exact exactly when it is exact on every stalk"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exact-sequence-sheaves, def-stalk-of-presheaf, thm-abelian-sheaves-form-abelian-category, thm-sheaf-morphism-isomorphism-stalkwise, def-kernel-cokernel-image-sheaves, thm-sheafification-preserves-stalks]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Lemma 17.3.2"
      url: "https://stacks.math.columbia.edu/tag/01AF"
    - title: "Ravi Vakil, The Rising Sea, Exercise 2.6.D"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Statement

Let
$$
\cdots\longrightarrow \mathcal F_{i-1}\xrightarrow{d_{i-1}}\mathcal F_i\xrightarrow{d_i}\mathcal F_{i+1}\longrightarrow\cdots
$$
be a sequence of sheaves of abelian groups on a topological space $X$. Then the
sequence is exact if and only if, for every point $x\in X$, the stalk sequence
$$
\cdots\longrightarrow (\mathcal F_{i-1})_x\xrightarrow{(d_{i-1})_x}(\mathcal F_i)_x\xrightarrow{(d_i)_x}(\mathcal F_{i+1})_x\longrightarrow\cdots
$$
is exact.

## Facts & Assumptions

**Given:** A sequence of sheaves of abelian groups on $X$.

[F1] Exactness of a sequence of sheaves means exactness in the abelian category of sheaves, so at each middle term the image sheaf equals the kernel sheaf ([[def-exact-sequence-sheaves]]).

[F2] Stalks are germs of neighbourhood sections ([[def-stalk-of-presheaf]]).

[L1] Kernels are objectwise, while images and cokernels are obtained by sheafifying the corresponding presheaves ([[def-kernel-cokernel-image-sheaves]]).

[L2] Sheafification preserves stalks ([[thm-sheafification-preserves-stalks]]).

[L3] A morphism of sheaves is an isomorphism exactly when it is so on every stalk ([[thm-sheaf-morphism-isomorphism-stalkwise]]).

## Proof

**Proof technique:** direct.

1.1 Assume the sheaf sequence is exact. At each middle term $\mathcal F_i$, [F1] says that the canonical map $\operatorname{im}(d_{i-1})\to\ker(d_i)$ is an isomorphism. Using [F2] for the stalk construction and then [L1] and [L2], its stalk at $x$ is the canonical map $$\operatorname{im}((d_{i-1})_x)\longrightarrow \ker((d_i)_x),$$ so the stalk sequence is exact at $x$. Since $x$ was arbitrary, the whole stalk sequence is exact. [F1, F2, L1, L2, given]

1.2 Conversely, assume every stalk sequence is exact. For each middle term, consider the canonical morphism $\operatorname{im}(d_{i-1})\to\ker(d_i)$. Using [F2] for the stalk construction and then [L1] and [L2], its stalk at $x$ is $$\operatorname{im}((d_{i-1})_x)\longrightarrow \ker((d_i)_x),$$ which is an isomorphism by the stalkwise exactness hypothesis. Therefore [L3] implies that $\operatorname{im}(d_{i-1})\to\ker(d_i)$ is an isomorphism of sheaves. [F2, L1, L2, L3, given]

2.1 By [F1], step 1.2 is exactly the assertion that the original sequence is exact. Together with step 1.1, this proves the equivalence. [F1, step 1.1, step 1.2] ∎
