---
id: lem-pullback-modules-right-exact
kind: lemma
title: "Pullback of modules is right exact, and flat stalk maps make it exact"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-flat-and-faithfully-flat-modules-and-ring-maps, def-pullback-module-ringed-spaces, lem-stalk-tensor-product, thm-exactness-of-sheaves-stalkwise, thm-right-exactness-of-tensor-products, lem-stalk-inverse-image-sheaf]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sections 6.21, 6.26, and 17.16"
      url: "https://stacks.math.columbia.edu/tag/0094"
    - title: "Ravi Vakil, The Rising Sea, Exercise 2.7.E and Section 2.6.J"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Statement

Let
$$
(f,f^\sharp):(X,\mathcal O_X)\longrightarrow(Y,\mathcal O_Y)
$$
be a morphism of ringed spaces. Then the pullback functor
$$
f^*:\operatorname{Mod}(\mathcal O_Y)\longrightarrow \operatorname{Mod}(\mathcal O_X)
$$
is right exact. Moreover, if every stalk ring map
$$
\mathcal O_{Y,f(x)}\longrightarrow \mathcal O_{X,x}
$$
is flat, then $f^*$ is exact.

## Facts & Assumptions

**Given:** A morphism of ringed spaces $(f,f^\sharp):(X,\mathcal O_X)\to(Y,\mathcal O_Y)$.

[F1] The pullback is $f^*\mathcal G=\mathcal O_X\otimes_{f^{-1}\mathcal O_Y}f^{-1}\mathcal G$ ([[def-pullback-module-ringed-spaces]]).

[F2] A ring map is flat exactly when tensoring with the target module is exact ([[def-flat-and-faithfully-flat-modules-and-ring-maps]]).

[L1] The stalk of an inverse image is the stalk over the image point ([[lem-stalk-inverse-image-sheaf]]).

[L2] The stalk of a tensor-product sheaf is the tensor product of the stalks ([[lem-stalk-tensor-product]]).

[L3] Exactness of sheaf sequences is equivalent to stalkwise exactness ([[thm-exactness-of-sheaves-stalkwise]]).

[L4] Tensoring with a fixed module is right exact ([[thm-right-exactness-of-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal M'\to\mathcal M\to\mathcal M''\to0$ be an exact sequence of $\mathcal O_Y$-modules, and fix $x\in X$ with $y=f(x)$. By [L1], the stalk sequence after applying $f^{-1}$ is $$\mathcal M'_y\longrightarrow \mathcal M_y\longrightarrow \mathcal M''_y\longrightarrow 0,$$ which is exact because the original sequence is exact at every stalk. Hence $f^{-1}$ is exact on the underlying sheaves. [L1, L3, given]

2.1 By [F1] and [L2], the stalk of the pulled-back sequence at $x$ is $$\mathcal O_{X,x}\otimes_{\mathcal O_{Y,y}}\mathcal M'_y\longrightarrow\mathcal O_{X,x}\otimes_{\mathcal O_{Y,y}}\mathcal M_y\longrightarrow\mathcal O_{X,x}\otimes_{\mathcal O_{Y,y}}\mathcal M''_y\longrightarrow0.$$ Step 1.1 gives exactness before tensoring, so [L4] makes this sequence right exact. Since this holds for every $x$, [L3] shows that $f^*$ is right exact. [F1, L2, L3, L4, step 1.1]

3.1 Assume every stalk ring map $$ \mathcal O_{Y,f(x)}\to\mathcal O_{X,x} $$ is flat. By [F2], for each $x\in X$ the functor $$ \mathcal O_{X,x}\otimes_{\mathcal O_{Y,f(x)}}- $$ is exact on $\mathcal O_{Y,f(x)}$-modules. Applying this to the exact stalk sequence from step 1.1 shows that the sequence in step 2.1 is exact at every $x$. Therefore [L3] implies that $f^*$ is exact. [F2, L3, step 1.1, step 2.1] ∎
