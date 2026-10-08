---
id: lem-an-lch-group-has-an-open-sigma-compact-subgroup
kind: lemma
title: Every locally compact Hausdorff group has an open sigma-compact subgroup
status: draft
origin: pipeline
dependency_level: 0
deps:
  - def-group
  - def-topological-group
  - def-hausdorff-space
  - def-locally-compact-space
  - def-neighbourhood-top
  - def-compact-space
  - def-natural-numbers
  - lem-group-inverse-laws
  - thm-induction-principle
  - thm-finite-products-of-compact-spaces
  - thm-compactness-under-continuous-maps
  - lem-topological-group-translations-and-inversion
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Chapter 1, §1.3, proof of Theorem 1.3.1 (printed pp. 41–42); Chapter 3, §3.2 opening remark (printed p. 152)"
---

## Statement

Let $G$ be a locally compact Hausdorff topological group and let $K$ be a
compact neighbourhood of its identity $e$. Set $U:=KK^{-1}$ and, for
$n\in\mathbb N$, let $U^n$ be the set of products of $n$ elements of $U$, with
$U^0:=\{e\}$. Then $H:=\bigcup_{n\in\mathbb N}U^n$ is an open subgroup of $G$
and a countable union of compact subsets. Here a topological space is
**sigma-compact** when it is a countable union of compact subsets. In
particular, every locally compact Hausdorff group has an open sigma-compact
subgroup. No axiom of choice is used.

## Facts & Assumptions

**Given:** A locally compact Hausdorff topological group $G$ with identity $e$.

[F1] Local compactness gives a compact neighbourhood of $e$, and every
neighbourhood contains an open neighbourhood ([[def-locally-compact-space]],
[[def-neighbourhood-top]]).

[F2] Multiplication and inversion in a topological group are continuous
([[def-topological-group]]).

[F3] Finite products and continuous images of compact spaces are compact
([[thm-finite-products-of-compact-spaces]],
[[thm-compactness-under-continuous-maps]]).

[F4] The group inverse law $(xy)^{-1}=y^{-1}x^{-1}$ holds
([[lem-group-inverse-laws]]).

[F5] Induction on $\mathbb N$ is valid
([[def-natural-numbers]], [[thm-induction-principle]]).

[F6] Left translations in a topological group are homeomorphisms
([[lem-topological-group-translations-and-inversion]]).

## Proof

**Proof technique:** direct.

1.1 Choose a compact neighbourhood $K$ of $e$, which exists by [F1]. Its inverse $K^{-1}$ is compact by [F2] and [F3], so $K\times K^{-1}$ is compact; the continuous multiplication map sends it onto $U=KK^{-1}$, hence $U$ is compact by [F2] and [F3]. Since $e\in K$, we have $K\subseteq U$, so $U$ contains an open neighbourhood of $e$ by [F1]. Finally, [F4] gives $(xy^{-1})^{-1}=yx^{-1}$, and relabeling $x,y\in K$ shows $U^{-1}=U$. Thus $U$ is a symmetric compact neighbourhood of $e$. [F1, F2, F3, F4]

2.1 We have $e\in U^0$, $U=U^{-1}$, and $U^mU^n=U^{m+n}$ for all $m,n\in\mathbb N$, so $H=\bigcup_n U^n$ contains $e$, is closed under products, and is closed under inverses; hence it is a subgroup. Each $U^n$ is compact: $U^0=\{e\}$ is compact, and if $U^n$ is compact, then $U^{n+1}$ is the continuous image of the compact product $U^n\times U$ under multiplication, so it is compact by [F3]. Induction [F5] proves this for every $n$, and the displayed $\mathbb N$-indexed union makes $H$ sigma-compact. [F3, F4, F5, step 1.1]

3.1 By [F1], choose an open neighbourhood $V$ of $e$ contained in $K$; then $V\subseteq U\subseteq H$. For every $h\in H$, [F6] makes $hV$ open, and the subgroup property gives $hV\subseteq H$. Since $e\in V$, each $h\in H$ lies in $hV$, so $H=\bigcup_{h\in H}hV$ is open. The existence of $K$ follows from local compactness, completing the claim for every locally compact Hausdorff group. [F1, F6, step 2.1] ∎
