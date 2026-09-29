---
id: thm-quasi-coherent-ideal-closed-subscheme-correspondence
kind: theorem
title: "Quasi-coherent ideals and closed subschemes"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-quasi-coherent-ideal-sheaf, def-closed-immersion-schemes, def-direct-image-sheaf, thm-affine-quasi-coherent-equivalence, lem-closed-immersion-affine-quotient-and-base-change, thm-qc-ideal-closed-subscheme-correspondence-complete, thm-localisation-of-modules-commutes-with-quotients-and-sums, lem-associated-sheaf-stalk-localization, thm-prime-spectrum-of-a-quotient-bijection, thm-exactness-of-sheaves-stalkwise]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Lemma 2.3"
      url: "https://stacks.math.columbia.edu/download/morphisms.pdf"
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). For a scheme $X$, the assignments
$\mathcal I\mapsto V(\mathcal I)$ and
$i:Z\hookrightarrow X\mapsto\ker(\mathcal O_X\to i_*\mathcal O_Z)$
give mutually inverse correspondences between quasi-coherent ideal sheaves on
$X$ and closed subschemes of $X$.

## Facts & Assumptions

**Given:** The Axiom of Choice and a scheme $X$.

[F1] Under AC, a closed immersion restricted over $U=\operatorname{Spec}A$ is uniquely a quotient-spectrum map $\operatorname{Spec}(A/J)\to U$ for an ideal $J\subseteq A$; conversely every quotient gives a closed immersion, including the empty quotient $J=A$. ([[lem-closed-immersion-affine-quotient-and-base-change]])

[F2] On $U=\operatorname{Spec}A$, a quasi-coherent module is the associated sheaf of its global sections, naturally in morphisms. Thus a quasi-coherent ideal subsheaf of $\mathcal O_U$ is $\widetilde J\subseteq\widetilde A$ for the ideal $J=\Gamma(U,\mathcal I)\subseteq A$. ([[thm-affine-quasi-coherent-equivalence]], [[def-quasi-coherent-ideal-sheaf]])

[F3] Localization commutes with quotients: $(A/J)_{\mathfrak p}=A_{\mathfrak p}/J_{\mathfrak p}$. The associated sheaf has these localizations as stalks, and $\operatorname{Spec}(A/J)$ is homeomorphic to the closed subset $V(J)\subseteq\operatorname{Spec}A$. ([[thm-localisation-of-modules-commutes-with-quotients-and-sums]], [[lem-associated-sheaf-stalk-localization]], [[thm-prime-spectrum-of-a-quotient-bijection]])

[F4] A closed immersion is a homeomorphism onto a closed subset with surjective structure-sheaf map, and $(i_*\mathcal G)(V)=\mathcal G(i^{-1}V)$. Surjectivity and isomorphism of sheaves can be checked on stalks. ([[def-closed-immersion-schemes]], [[def-direct-image-sheaf]], [[thm-exactness-of-sheaves-stalkwise]])

[F5] The completed in-run correspondence constructs the global closed ringed subspace $Z_{\mathcal I}=(V(\mathcal I),(\mathcal O_X/\mathcal I)|_{V(\mathcal I)})$ and proves its affine quotient and inverse-kernel identifications under AC without using this published theorem. In particular its proof supplies the stalkwise identification of the restricted quotient sheaf with the affine quotient scheme on each chart. ([[thm-qc-ideal-closed-subscheme-correspondence-complete]])

## Proof

**Proof technique:** direct, using the completed in-run affine quotient and correspondence routes in place of the older published quotient citation.

1.1 Let $\mathcal I\subseteq\mathcal O_X$ be quasi-coherent and let $U=\operatorname{Spec}A$ be affine. By [F2], $J=\Gamma(U,\mathcal I)$ is an ideal of $A$ and the natural comparison identifies $\mathcal I|_U$ with $\widetilde J$ as an ideal subsheaf of $\mathcal O_U=\widetilde A$. At $\mathfrak p\in U$ one has $\mathcal I_{\mathfrak p}\ne\mathcal O_{U,\mathfrak p}$ exactly when $J\subseteq\mathfrak p$, so $V(\mathcal I)\cap U=V(J)$; these chartwise closed sets make $V(\mathcal I)$ closed in $X$. [F2, F3]

1.2 Conversely, let $i:Z\hookrightarrow X$ be closed and let $K=\ker(\mathcal O_X\to i_*\mathcal O_Z)$. For every affine $U=\operatorname{Spec}A\subseteq X$, the current affine quotient supplier [F1] gives a unique ideal $J\subseteq A$ and an isomorphism $i^{-1}(U)\cong\operatorname{Spec}(A/J)$ over $U$. By [F3], the kernel of the local quotient map $\widetilde A\to\widetilde{A/J}$ has stalks $J_{\mathfrak p}$, hence equals $\widetilde J$; therefore $K|_U=\widetilde J$. These local descriptions prove $K$ is a quasi-coherent ideal sheaf, including when $i^{-1}(U)$ is empty and $J=A$. [F1, F3, F4]

2.1 Form $Z_{\mathcal I}=(V(\mathcal I),(\mathcal O_X/\mathcal I)|_{V(\mathcal I)})$. On $U$ as in step 1.1, [F3] identifies its underlying closed set with $\operatorname{Spec}(A/J)$ and its stalk at $\mathfrak p\supseteq J$ with $A_{\mathfrak p}/J_{\mathfrak p}$, the same local ring as the quotient scheme. The canonical sheaf map from $\widetilde{A/J}$ to the restricted quotient sheaf is an isomorphism on these stalks, hence an isomorphism; this is also the exact chart identification of [F5]. Thus $Z_{\mathcal I}$ is locally $\operatorname{Spec}(A/J)$, hence a scheme, and its inclusion into $X$ is a closed immersion: it is a homeomorphism onto $V(\mathcal I)$ and $\mathcal O_X\to i_*\mathcal O_{Z_{\mathcal I}}$ is stalkwise the quotient $\mathcal O_{X,x}\to\mathcal O_{X,x}/\mathcal I_x$ on that set and the map to zero outside it, so is surjective by [F4]. Its kernel is $\mathcal I$. [F3, F4, F5, step 1.1]

3.1 Starting with $\mathcal I$, step 2.1 gives $K_{Z_{\mathcal I}}=\mathcal I$. Starting with $i:Z\hookrightarrow X$, step 1.2 gives $K$ and, on every affine $U$, both $Z_K\cap U$ and $Z\cap U$ are canonically $\operatorname{Spec}(A/J)$ over $U$; these local isomorphisms agree on overlaps because both are induced by $\mathcal O_X/K\cong i_*\mathcal O_Z$, so $Z_K\cong Z$ over $X$. If $\mathcal I=\mathcal O_X$, then $V(\mathcal I)=\varnothing$ and $Z_{\mathcal I}$ is empty; the empty immersion has kernel $\mathcal O_X$. These are the mutually inverse assignments in the Statement. The Axiom of Choice is used through [F1], [F2] and [F5]; no earlier published affine-quotient or correspondence theorem is a premise. [F1, F2, F4, F5, step 2.1, step 1.2] ∎
