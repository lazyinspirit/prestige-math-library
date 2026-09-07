---
id: "lem-base-change-affine-morphisms"
kind: "lemma"
title: "Base change and composition of affine morphisms"
status: "draft"
origin: "pipeline"
deps: ["def-affine-morphism-schemes", "lem-affine-morphism-local-on-target", "thm-affine-fibre-product-tensor-ring", "lem-fibre-product-open-restriction", "thm-affine-closed-immersions-quotient-rings", "lem-base-change-quasi-compact-morphisms"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Stacks 29.11.8–10"
      url: "https://stacks.math.columbia.edu/tag/01S5"
proof_strategy: direct
---

## Statement

Arbitrary base change preserves affine morphisms. Composites of affine morphisms are affine, and every closed immersion is affine.

## Facts & Assumptions

**Given:** The objects, hypotheses and conventions in the statement above.

[F1] A morphism of schemes $f:X\to S$ is **affine** when $f^{-1}(U)$ is affine for every affine open subscheme $U\subseteq S$. Here the inverse image carries the restricted structure sheaf, as in def-affine-open-subscheme, and $f$ is a morphism of locally ringed spaces as in def-morphism-of-schemes. The empty scheme is affine, being $\operatorname{Spec}0$. Affineness of a morphism does not require its total source or target to be affine. ([[def-affine-morphism-schemes]])

[F2] A morphism $f:X\to S$ is affine if and only if there exists an affine open cover $S=\bigcup_i U_i$ for which every $f^{-1}(U_i)$ is affine. ([[lem-affine-morphism-local-on-target]])

[F3] Let $A\to B$ and $A\to C$ be maps of commutative unital rings, allowing the zero ring. In the category of all schemes, $$\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}C\cong\operatorname{Spec}(B\otimes_A C).$$ The projections correspond to $b\mapsto b\otimes1$ and $c\mapsto1\otimes c$. ([[thm-affine-fibre-product-tensor-ring]])

[F4] Suppose $P=X\times_S Y$ exists, with projections $p,q$. If opens $V\subseteq X$, $W\subseteq Y$ map into an open $U\subseteq S$, then the open subscheme $Q=p^{-1}(V)\cap q^{-1}(W)$ represents $V\times_U W$, and also $V\times_S W$. Independently, for $f:X\to S$ and an open $U\subseteq S$, the open subscheme $f^{-1}(U)$ represents $X\times_S U$. ([[lem-fibre-product-open-restriction]])

[F5] For a ring $A$, closed immersions $Z\to\operatorname{Spec}A$ are, up to unique isomorphism over $\operatorname{Spec}A$, precisely the morphisms $\operatorname{Spec}(A/I)\to\operatorname{Spec}A$ for ideals $I\subseteq A$. ([[thm-affine-closed-immersions-quotient-rings]])

[F6] For $f:X\to S$, the following are equivalent: $f$ is quasi-compact; the inverse image of every affine open in $S$ is quasi-compact; some affine open cover of $S$ has quasi-compact inverse images. Moreover any arbitrary base change of a quasi-compact morphism is quasi-compact. ([[lem-base-change-quasi-compact-morphisms]])

## Proof

1.1 Let $f:X\to S$ be affine and $S^{\prime}\to S$ arbitrary. Around each point of $S^{\prime}$ choose an affine $V^{\prime}$ mapping into an affine $U\subset S$. By F1, $f^{-1}(U)$ is affine. F4 identifies the inverse image of $V^{\prime}$ with $f^{-1}(U)\times_U V^{\prime}$, which is affine by F3. [given, F1, F3, F4]

2.1 These $V^{\prime}$ cover the new base. Apply F2 to conclude that $f_{S^{\prime}}$ is affine. The proof includes empty charts and zero tensor rings. [F2, step 1.1]

3.1 For affine $X\to Y\to Z$ and affine open $U\subset Z$, the successive inverse images are affine by F1, hence the composite is affine. For a closed immersion, its restriction over any affine open $\operatorname{Spec}A$ is $\operatorname{Spec}(A/I)$ by F5, again affine by F1. The cases $I=0,(1)$ are the identity and empty closed immersion. Affine inverse images are quasi-compact, so the target-local criterion F6 also proves every affine morphism, and in particular every closed immersion, quasi-compact. [F1, F5, F6] ∎
