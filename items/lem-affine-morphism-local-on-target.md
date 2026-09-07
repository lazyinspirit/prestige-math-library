---
id: "lem-affine-morphism-local-on-target"
kind: "lemma"
title: "Affineness is local on the target"
status: published
origin: "pipeline"
deps: ["def-affine-morphism-schemes", "lem-affineness-from-unit-generating-global-sections", "lem-spectrum-localization-open-immersion", "cor-affine-scheme-quasi-compact", "thm-proper-ideal-contained-in-maximal-ideal"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Stacks 29.11.3(1) iff (2), Remark 29.11.4; 26.11.5–6"
      url: "https://stacks.math.columbia.edu/tag/01S5"
proof_strategy: direct
---

## Statement

A morphism $f:X\to S$ is affine if and only if there exists an affine open cover $S=\bigcup_i U_i$ for which every $f^{-1}(U_i)$ is affine.

## Facts & Assumptions

**Given:** The objects, hypotheses and conventions in the statement above.

[F1] A morphism of schemes $f:X\to S$ is **affine** when $f^{-1}(U)$ is affine for every affine open subscheme $U\subseteq S$. Here the inverse image carries the restricted structure sheaf, as in def-affine-open-subscheme, and $f$ is a morphism of locally ringed spaces as in def-morphism-of-schemes. The empty scheme is affine, being $\operatorname{Spec}0$. Affineness of a morphism does not require its total source or target to be affine. ([[def-affine-morphism-schemes]])

[F2] Let $X$ be a scheme, $R=\Gamma(X,\mathcal O_X)$, and $f_1,\ldots,f_n\in R$. Write $X_f$ for the open locus where the germ of $f$ is a unit. If $(f_1,\ldots,f_n)=R$ and each $U_i=X_{f_i}$ is affine, then $X$ is affine. In fact the canonical morphism $X\to\operatorname{Spec}R$ is an isomorphism. Empty $X$ and $n=0$ are allowed. ([[lem-affineness-from-unit-generating-global-sections]])

[F3] For $f\in A$, the morphism induced by $A\to A_f$ identifies $\operatorname{Spec}(A_f)$ with the open locally ringed subspace $D(f)$ of $\operatorname{Spec}A$. ([[lem-spectrum-localization-open-immersion]])

[F4] Every affine scheme is quasi-compact. ([[cor-affine-scheme-quasi-compact]])

[F5] Assume the Axiom of Choice (def-axiom-of-choice). In a nonzero commutative ring, every proper ideal is contained in a maximal ideal. ([[thm-proper-ideal-contained-in-maximal-ideal]])

## Proof

1.1 If $f$ is affine, F1 gives the condition on any affine cover. Conversely suppose such a cover is given and let $V=\operatorname{Spec}A\subset S$ be arbitrary affine open. For $v\in V\cap U_i$, choose a principal open $D_{U_i}(a)$ containing $v$ and contained in $V$. Choose a principal open $D_V(h)$ containing $v$ and contained in $D_{U_i}(a)$. On the affine $D_{U_i}(a)$ the restriction of $h$ is $b/a^m$, so $D_V(h)$ is also $D_{U_i}(ab)$, a principal open of $U_i$. [given, F1, F3]

2.1 F4 gives finitely many such $D_V(h_j)$ covering $V$. Their functions generate the unit ideal of $A$: if the ideal were proper F5 supplies a maximal, hence prime, ideal containing it would lie outside the cover, contrary to $V=\bigcup_jD(h_j)$. Each $f^{-1}(D_V(h_j))$ is principal in the affine $f^{-1}(U_{i(j)})$, so it is affine by F3. [F3, F4, step 1.1, F5]

3.1 The pullbacks of the $h_j$ are global sections of $\mathcal O_X$ on $f^{-1}(V)$ generating 1. F2 shows that $f^{-1}(V)$ is affine. Since $V$ was arbitrary, F1 proves $f$ affine. Empty $V$, a singleton cover, nilpotents, and an empty source are included by F2 and the same formulas. [F1, F2, step 2.1] ∎
