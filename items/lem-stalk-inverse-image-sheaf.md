---
id: lem-stalk-inverse-image-sheaf
kind: lemma
title: "The stalk of an inverse image sheaf is the stalk over the image point"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-inverse-image-presheaf-and-sheaf, def-stalk-of-presheaf, thm-sheafification-preserves-stalks]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Lemma 6.21.5"
      url: "https://stacks.math.columbia.edu/tag/008C"
    - title: "Ravi Vakil, The Rising Sea, Exercise 2.7.C"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Statement

Let $f:X\to Y$ be a continuous map, let $\mathcal G$ be a sheaf on $Y$, and let
$x\in X$. Then there is a canonical isomorphism
$$
(f^{-1}\mathcal G)_x\cong \mathcal G_{f(x)}.
$$

## Facts & Assumptions

**Given:** A continuous map $f:X\to Y$, a sheaf $\mathcal G$ on $Y$, and a
point $x\in X$.

[F1] The inverse image sheaf is the sheafification of the presheaf
$f_{\mathrm p}\mathcal G$
([[def-inverse-image-presheaf-and-sheaf]]).

[F2] A stalk is the colimit of sections over neighbourhoods of the point
([[def-stalk-of-presheaf]]).

[L1] Sheafification preserves stalks ([[thm-sheafification-preserves-stalks]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] and [L1], it is enough to identify the stalk $(f_{\mathrm p}\mathcal G)_x$. [F1, L1, given]

1.2 If $t\in\mathcal G(V)$ with $f(x)\in V$, then $x\in f^{-1}(V)$ and $t$ defines a class $[V,t]\in (f_{\mathrm p}\mathcal G)(f^{-1}(V))$. Sending the germ $t_{f(x)}$ to the germ of $[V,t]$ at $x$ gives a map $$\Phi:\mathcal G_{f(x)}\longrightarrow (f_{\mathrm p}\mathcal G)_x.$$ If two representatives agree on a smaller neighbourhood of $f(x)$, then their induced sections agree on the inverse image of that smaller neighbourhood, so $\Phi$ is well defined. [F1, F2, construct]

1.3 Conversely, represent a germ in $(f_{\mathrm p}\mathcal G)_x$ by a section $[V,t]\in (f_{\mathrm p}\mathcal G)(U)$ with $x\in U$ and $f(U)\subseteq V$. Since $f(x)\in V$, the section $t$ has a germ $t_{f(x)}\in \mathcal G_{f(x)}$. This depends only on the original germ at $x$, because equality of germs in $(f_{\mathrm p}\mathcal G)_x$ means equality after restricting to some smaller neighbourhood of $x$, hence after restricting $t$ and $t'$ to some common neighbourhood of $f(x)$. Thus there is a map $$\Psi:(f_{\mathrm p}\mathcal G)_x\longrightarrow \mathcal G_{f(x)}.$$ [F1, F2, construct]

2.1 The maps $\Phi$ and $\Psi$ are inverse on representatives, so $(f_{\mathrm p}\mathcal G)_x\cong\mathcal G_{f(x)}$. Step 1.1 then gives $(f^{-1}\mathcal G)_x\cong\mathcal G_{f(x)}$. [step 1.1, step 1.2, step 1.3] ∎
