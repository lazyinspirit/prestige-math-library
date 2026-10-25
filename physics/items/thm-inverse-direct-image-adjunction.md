---
id: thm-inverse-direct-image-adjunction
kind: theorem
title: "Inverse image is left adjoint to direct image on sheaves"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-direct-image-sheaf, def-inverse-image-presheaf-and-sheaf, thm-sheafification-universal-property]
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
    - title: "The Stacks Project, Section 6.21, display after Definition 6.21.7"
      url: "https://stacks.math.columbia.edu/tag/008C"
    - title: "Ravi Vakil, The Rising Sea, Exercise 2.7.B"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Statement

Let $f:X\to Y$ be a continuous map, let $\mathcal G$ be a sheaf on $Y$, and let
$\mathcal F$ be a sheaf on $X$. Then there is a natural bijection
$$\operatorname{Hom}_X(f^{-1}\mathcal G,\mathcal F) \cong \operatorname{Hom}_Y(\mathcal G,f_*\mathcal F).$$

## Facts & Assumptions

**Given:** A continuous map $f:X\to Y$, a sheaf $\mathcal G$ on $Y$, and a sheaf $\mathcal F$ on $X$.

[F1] The direct image satisfies $(f_*\mathcal F)(V)=\mathcal F(f^{-1}(V))$ ([[def-direct-image-sheaf]]).

[F2] The inverse image is the sheafification of the neighbourhood-colimit presheaf $f_{\mathrm p}\mathcal G$ ([[def-inverse-image-presheaf-and-sheaf]]).

[L1] A morphism from a presheaf to a sheaf factors uniquely through the sheafification ([[thm-sheafification-universal-property]]).

## Proof

**Proof technique:** direct.

1.1 Let $\alpha:f^{-1}\mathcal G\to\mathcal F$ be a sheaf morphism. By [F2] and [L1], $\alpha$ corresponds uniquely to a presheaf morphism $\widetilde\alpha:f_{\mathrm p}\mathcal G\to\mathcal F$. [F2, L1, given]

1.2 Conversely, let $\beta:\mathcal G\to f_*\mathcal F$ be a sheaf morphism. For an open $U \subseteq X$, represent an element of $(f_{\mathrm p}\mathcal G)(U)$ by a pair $(V,s)$ with $f(U)\subseteq V$ and $s\in\mathcal G(V)$, and define $$\widetilde\beta_U([V,s]):=\beta_V(s)|_U \in \mathcal F(U),$$ where the restriction is taken from $\mathcal F(f^{-1}(V))$ to $\mathcal F(U)$. If $(V,s)$ and $(V',s')$ represent the same colimit class, then on some smaller open neighbourhood $W \subseteq V\cap V'$ of $f(U)$ one has $s|_W=s'|_W$, so $\beta_V(s)|_U=\beta_{V'}(s')|_U$. Thus $\widetilde\beta$ is well defined and natural in $U$. [F1, F2, given, construct]

2.1 For an open set $V \subseteq Y$ and a section $s\in\mathcal G(V)$, let $[V,s]$ denote its class in $(f_{\mathrm p}\mathcal G)(f^{-1}(V))$, and define $$\beta_V(s):=\widetilde\alpha_{f^{-1}(V)}([V,s])\in \mathcal F(f^{-1}(V))=(f_*\mathcal F)(V).$$ If $V' \subseteq V$, naturality of $\widetilde\alpha$ shows $\beta_{V'}(s|_{V'})=\beta_V(s)|_{V'}$, so the $\beta_V$ define a morphism $\beta:\mathcal G\to f_*\mathcal F$. [F1, F2, step 1.1, construct]

2.2 By [F2] and [L1], the presheaf morphism $\widetilde\beta:f_{\mathrm p}\mathcal G\to\mathcal F$ factors uniquely through a sheaf morphism $\alpha:f^{-1}\mathcal G\to\mathcal F$. [F2, L1, step 1.2, construct]

3.1 The constructions of steps 2.1 and 2.2 are inverse, because both are recovered from the same formula on representative classes $[V,s]$. Therefore $$\operatorname{Hom}_X(f^{-1}\mathcal G,\mathcal F)\cong\operatorname{Hom}_Y(\mathcal G,f_*\mathcal F)$$ naturally in both sheaves. [step 2.1, step 2.2] ∎
