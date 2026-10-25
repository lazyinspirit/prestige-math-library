---
id: thm-pullback-pushforward-module-adjunction
kind: theorem
title: "Pullback of modules is left adjoint to pushforward"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-pullback-module-ringed-spaces, thm-extension-of-scalars-is-left-adjoint-to-restriction, thm-inverse-direct-image-adjunction, thm-sheafification-universal-property]
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
    - title: "The Stacks Project, Section 6.26"
      url: "https://stacks.math.columbia.edu/tag/0094"
    - title: "Ravi Vakil, The Rising Sea, Chapter 6 and Section 2.7"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Statement

Let
$$
(f,f^\sharp):(X,\mathcal O_X)\longrightarrow(Y,\mathcal O_Y)
$$
be a morphism of ringed spaces, let $\mathcal G$ be an $\mathcal O_Y$-module,
and let $\mathcal F$ be an $\mathcal O_X$-module. Then there is a natural
bijection
$$\operatorname{Hom}_{\mathcal O_X}(f^*\mathcal G,\mathcal F) \cong \operatorname{Hom}_{\mathcal O_Y}(\mathcal G,f_*\mathcal F).$$

## Facts & Assumptions

**Given:** A morphism of ringed spaces $(f,f^\sharp):(X,\mathcal O_X)\to(Y,\mathcal O_Y)$, an $\mathcal O_Y$-module $\mathcal G$, and an $\mathcal O_X$-module $\mathcal F$.

[F1] The pullback is $f^*\mathcal G=\mathcal O_X\otimes_{f^{-1}\mathcal O_Y}f^{-1}\mathcal G$ ([[def-pullback-module-ringed-spaces]]).

[L1] Extension of scalars is left adjoint to restriction of scalars for a ring map ([[thm-extension-of-scalars-is-left-adjoint-to-restriction]]).

[L2] Inverse image is left adjoint to direct image on sheaves ([[thm-inverse-direct-image-adjunction]]).

[L3] A morphism from a presheaf to a sheaf factors uniquely through the sheafification ([[thm-sheafification-universal-property]]).

## Proof

**Proof technique:** direct.

1.1 Let $\alpha:f^*\mathcal G\to\mathcal F$ be an $\mathcal O_X$-linear morphism. By [F1] and [L3], $\alpha$ is equivalent to a morphism from the tensor-product presheaf $$U\longmapsto \mathcal O_X(U)\otimes_{(f^{-1}\mathcal O_Y)(U)}(f^{-1}\mathcal G)(U)$$ into the sheaf $\mathcal F$. [F1, L3, given]

1.2 Conversely, let $\beta:\mathcal G\to f_*\mathcal F$ be an $\mathcal O_Y$-linear morphism. By [L2], it corresponds to an $f^{-1}\mathcal O_Y$-linear morphism $\widetilde\beta:f^{-1}\mathcal G\to\mathcal F$. Applying [L1] on each open set gives a morphism from the tensor-product presheaf of [F1] into $\mathcal F$, and then [L3] factors it uniquely through the sheafification $f^*\mathcal G$. This yields an $\mathcal O_X$-linear morphism $\alpha:f^*\mathcal G\to\mathcal F$. [F1, L1, L2, L3, given, construct]

2.1 Applying [L1] on each open set $U \subseteq X$ converts the map of step 1.1 into an $(f^{-1}\mathcal O_Y)(U)$-linear map $(f^{-1}\mathcal G)(U)\to\mathcal F(U)$, compatible with restriction. Hence step 1.1 is equivalent to an $f^{-1}\mathcal O_Y$-linear sheaf morphism $$\widetilde\alpha:f^{-1}\mathcal G\to\mathcal F.$$ [L1, step 1.1]

3.1 By [L2], the underlying sheaf morphism $\widetilde\alpha$ corresponds to a sheaf morphism $\beta:\mathcal G\to f_*\mathcal F$. Because the maps in step 2.1 are $(f^{-1}\mathcal O_Y)(U)$-linear, the corresponding components $\beta_V$ are $\mathcal O_Y(V)$-linear. Thus $\beta$ is a morphism of $\mathcal O_Y$-modules. [L2, step 2.1]

4.1 The constructions in steps 3.1 and 1.2 are inverse because each stage is built from an adjunction with the standard mutually inverse formulas. Therefore $$\operatorname{Hom}_{\mathcal O_X}(f^*\mathcal G,\mathcal F)\cong\operatorname{Hom}_{\mathcal O_Y}(\mathcal G,f_*\mathcal F)$$ naturally in both variables. [step 2.1, step 3.1, step 1.2] ∎
