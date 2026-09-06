---
id: thm-scheme-theoretic-image-quasi-compact-morphism
kind: theorem
title: "Scheme-theoretic image of a quasi-compact morphism"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-scheme-theoretic-image, def-quasi-compact-and-quasi-separated-morphism, def-quasi-coherent-ideal-sheaf, thm-quasi-coherent-ideal-closed-subscheme-correspondence, lem-morphism-schemes-local-on-source-target]
proof_strategy: direct
verification:
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

Let $f:X\to Y$ be a quasi-compact morphism of schemes and put
$\mathcal I=\ker(\mathcal O_Y\to f_*\mathcal O_X)$. Then $\mathcal I$ is a
quasi-coherent ideal sheaf, and the closed subscheme $V(\mathcal I)$ is the
scheme-theoretic image of $f$. For every open $W\subseteq Y$, its restriction
$V(\mathcal I)\cap W$ is the scheme-theoretic image of
$f^{-1}(W)\to W$.

## Facts & Assumptions

**Given:** A quasi-compact morphism $f:X\to Y$.

[F1] A morphism is quasi-compact when inverse images of quasi-compact opens
are quasi-compact [[def-quasi-compact-and-quasi-separated-morphism]].

[F2] For a scheme, quasi-coherent ideal sheaves and closed subschemes are in
mutually inverse correspondence [[thm-quasi-coherent-ideal-closed-subscheme-correspondence]].

## Proof

**Proof technique:** direct.

1.1 Let $V=\operatorname{Spec}A$ be an affine open of $Y$. By [F1], $f^{-1}(V)$ is quasi-compact, so its affine-open cover has a finite subcover $U_1,\ldots,U_n$; when $f^{-1}(V)$ is empty, take the finite empty cover. [given, F1, choose]

2.1 Write $U_i=\operatorname{Spec}B_i$. The sheaf condition makes $\Gamma(f^{-1}(V),\mathcal O_X)$ inject into $\prod_i B_i$, so the kernel of $A\to\Gamma(f^{-1}(V),\mathcal O_X)$ equals the kernel $I_V$ of $A\to\prod_iB_i$. The latter is an ideal of $A$, and its localizations give the corresponding kernels on principal opens of $V$. [step 1.1]

3.1 Thus $\mathcal I|_V$ is the ideal sheaf associated to $I_V$ on every affine $V$, so $\mathcal I$ is quasi-coherent. [step 2.1]

4.1 By [F2], $\mathcal I$ defines a closed subscheme $V(\mathcal I)$. On each affine $V$, the map $A\to\prod_iB_i$ factors through $A/I_V$, so $f$ factors through it. If a closed subscheme defined on $V$ by $J\subseteq A$ also receives $f$, then $J\subseteq I_V$; hence $V(I_V)$ factors through that competing closed subscheme. This proves minimality. [F2, step 3.1]

5.1 Repeating the kernel computation on an open $W\subseteq Y$ gives the restriction of $\mathcal I$ to $W$. The correspondence in [F2] therefore identifies $V(\mathcal I)\cap W$ with the scheme-theoretic image of $f^{-1}(W)\to W$. [F2, step 3.1] ∎
