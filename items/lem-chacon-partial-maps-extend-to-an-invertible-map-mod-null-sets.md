---
id: "lem-chacon-partial-maps-extend-to-an-invertible-map-mod-null-sets"
kind: "lemma"
title: "Chacon partial maps extend to an invertible map mod null sets"
deps: ["def-chacon-three-cut-one-spacer-towers", "thm-lebesgue-outer-measure-and-measurability-are-translation-invariant", "thm-finite-and-countable-subadditivity-of-measures", "thm-continuity-from-below-for-measures", "def-invertible-measure-preserving-system", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Sarig Problem 3.8(1–2) p.101
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
    - title: Katok–Thouvenot construction pp.696–697
      url: https://akatok.s3.amazonaws.com/pub/KT-spectral.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. The partial translations of the normalized Chacon towers determine an invertible Lebesgue-probability-preserving transformation modulo null sets. There is a measurable conull $X_0\subseteq[0,1)$ on which both directions are everywhere defined and measurable and $T(X_0)=X_0$. Extending by the identity off $X_0$ gives an ambient measure-preserving map.

## Facts & Assumptions

[F1] The towers and consecutive-level translations are defined with height $h_r$ and width $w_r=2/3^{r+1}$ [[def-chacon-three-cut-one-spacer-towers]].

[F2] Translation preserves Lebesgue measurability and measure [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]].

[F3] Countable unions of measurable null sets are null [[thm-finite-and-countable-subadditivity-of-measures]].

[F4] Increasing measurable unions have measure equal to the supremum [[thm-continuity-from-below-for-measures]].

[F5] Invertibility modulo null sets means an actual measurable invariant conull restriction with measurable inverse [[def-invertible-measure-preserving-system]].

[F6] Assume AC [[def-axiom-of-choice]].

## Proof

**Given:** The finite Chacon towers under AC.

1.1 Put $D_r=C_r\setminus L_{r,h_r-1}$ and $E_r=C_r\setminus L_{r,0}$. On each of its finitely many levels $T_r$ is a translation to the next level of the same width. Thus it is a measurable measure-preserving bijection $D_r\to E_r$ with measurable inverse. At stage zero both sets are empty. At the next stage each old non-top arrow restricts to the three corresponding third-to-third arrows; the remaining new arrows connect column tops to the next bases or spacer. Thus $D_r\subseteq D_{r+1}$, $E_r\subseteq E_{r+1}$ and $T_{r+1}$ extends $T_r$, as do their inverses. [F1, F2, F6]

2.1 The complement of either $D_r$ or $E_r$ has measure $3^{-(r+1)}+w_r=3^{-r}$. Hence $D=\bigcup_rD_r$ and $E=\bigcup_rE_r$ are conull by continuity from below. Compatible unions give a bijection $T:D\to E$. Partition $D$ into the measurable pieces $D_r\setminus D_{r-1}$ (with $D_{-1}=\varnothing$), subdivided by the finitely many level pieces of $T_r$. On each it is a translation; the images are disjoint because the union map is injective. Countable additivity and F2 therefore prove that images and preimages of measurable sets are measurable and have the same measure in the two domains. This also proves measurability of both directions. [F2, F4, step 1.1]

3.1 Define $B_0=[0,1)\setminus(D\cap E)$ and recursively $B_{n+1}=B_n\cup T(B_n\cap D)\cup T^{-1}(B_n\cap E)$. Each $B_n$ is measurable and null by step 2.1 and induction. Thus $B=\bigcup_{n\ge0}B_n$ is measurable and null. Put $X_0=[0,1)\setminus B\subseteq D\cap E$. If $x\in X_0$ and $Tx\in B_n$, then $x\in T^{-1}(B_n\cap E)\subseteq B_{n+1}$, impossible. The analogous implication using $T(B_n\cap D)$ shows $T^{-1}x\in X_0$. Hence both directions preserve $X_0$ and restrict to measurable inverse bijections there. [F3, step 2.1]

4.1 On $X_0$ measure preservation is inherited from step 2.1. Define the ambient map to be the identity on its measurable null complement. This map and its inverse are measurable by the two-piece definition; preimages differ from their $X_0$ preimages only by null subsets of that complement, so it preserves Lebesgue probability. It satisfies exactly F5's conull restriction convention. AC is used through the finite-tower measure assertions and hence the Lebesgue measure properties, with no selection of arbitrary pointwise inverses. [F5, F6, step 3.1] ∎
