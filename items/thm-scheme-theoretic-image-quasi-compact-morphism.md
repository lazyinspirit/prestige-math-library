---
id: thm-scheme-theoretic-image-quasi-compact-morphism
kind: theorem
title: "Scheme-theoretic image of a quasi-compact morphism"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-scheme-theoretic-image, def-quasi-compact-and-quasi-separated-morphism, def-quasi-coherent-ideal-sheaf, thm-quasi-coherent-ideal-closed-subscheme-correspondence, lem-morphism-schemes-local-on-source-target, thm-localisation-of-modules-is-exact, thm-sections-basic-open-affine-scheme]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Lemma 29.6.3"
      url: "https://stacks.math.columbia.edu/tag/01R5"
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $f:X\to Y$ be a quasi-compact morphism of schemes and put
$\mathcal I=\ker(\mathcal O_Y\to f_*\mathcal O_X)$. Then $\mathcal I$ is a
quasi-coherent ideal sheaf, and the closed subscheme $V(\mathcal I)$ is the
scheme-theoretic image of $f$. For every open $W\subseteq Y$, its restriction
$V(\mathcal I)\cap W$ is the scheme-theoretic image of
$f^{-1}(W)\to W$.

## Facts & Assumptions

**Given:** The Axiom of Choice and a quasi-compact morphism $f:X\to Y$.

[F1] A morphism is quasi-compact when inverse images of quasi-compact opens are quasi-compact [[def-quasi-compact-and-quasi-separated-morphism]].

[F2] Under AC, for a scheme, quasi-coherent ideal sheaves and closed subschemes are in mutually inverse correspondence [[thm-quasi-coherent-ideal-closed-subscheme-correspondence]].

[F3] Localization of modules is exact, so it preserves kernels; it also commutes with finite products, including the empty product. [[thm-localisation-of-modules-is-exact]]

[F4] For an affine scheme $\operatorname{Spec}B$ and $b\in B$, the structure-sheaf sections on $D(b)$ are $B_b$. [[thm-sections-basic-open-affine-scheme]]

## Proof

**Proof technique:** direct.

1.1 Let $V=\operatorname{Spec}A$ be an affine open of $Y$. By [F1], $f^{-1}(V)$ is quasi-compact, so its affine-open cover has a finite subcover $U_1,\ldots,U_n$; when $f^{-1}(V)$ is empty, take the finite empty cover. The finite-subcover step and the correspondence used below are licensed by the given AC. [given, F1, choose]

2.1 Write $U_i=\operatorname{Spec}B_i$ and let $\varphi_i:A\to B_i$ be induced by $f|_{U_i}$. The sheaf condition makes $\Gamma(f^{-1}(V),\mathcal O_X)$ inject into $\prod_i B_i$, so the kernel of $A\to\Gamma(f^{-1}(V),\mathcal O_X)$ equals the ideal $I_V=\ker(A\to\prod_iB_i)$. For $g\in A$, the opens $U_i\cap f^{-1}(D(g))=D_{U_i}(\varphi_i(g))$ cover $f^{-1}(D(g))$, and [F4] identifies their section rings with $(B_i)_{\varphi_i(g)}$. The sheaf condition therefore makes the kernel of $A_g\to\Gamma(f^{-1}(D(g)),\mathcal O_X)$ equal to $\ker(A_g\to\prod_i(B_i)_{\varphi_i(g)})$. By [F3], localizing the exact sequence $0\to I_V\to A\to\prod_iB_i$ identifies this kernel with $(I_V)_g$: localization commutes with the finite product. The same argument includes the empty cover, for which both kernels are the whole source ring. [step 1.1, F3, F4]

3.1 Thus $\mathcal I|_V$ is the ideal sheaf associated to $I_V$ on every affine $V$, so $\mathcal I$ is quasi-coherent. [step 2.1]

4.1 By [F2], $\mathcal I$ defines a closed subscheme $V(\mathcal I)$. On each affine $V$, the map $A\to\prod_iB_i$ factors through $A/I_V$, so $f$ factors through it. If a closed subscheme defined on $V$ by $J\subseteq A$ also receives $f$, then $J\subseteq I_V$; hence $V(I_V)$ factors through that competing closed subscheme. This proves minimality. [F2, step 3.1]

5.1 Repeating the kernel computation on an open $W\subseteq Y$ gives the restriction of $\mathcal I$ to $W$. The correspondence in [F2] therefore identifies $V(\mathcal I)\cap W$ with the scheme-theoretic image of $f^{-1}(W)\to W$. [F2, step 3.1] ∎
