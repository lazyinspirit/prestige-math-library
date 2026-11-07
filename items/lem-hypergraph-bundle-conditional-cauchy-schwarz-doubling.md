---
id: lem-hypergraph-bundle-conditional-cauchy-schwarz-doubling
kind: lemma
title: "Conditional Cauchy–Schwarz lowers bundle order"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-finite-coordinate-hypergraph-bundle
  - lem-finite-coordinate-projection-and-energy-pythagoras
  - def-good-atoms-in-a-finite-hypergraph-hierarchy
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Terence Tao, A variant of the hypergraph removal lemma, arXiv:math/0503572v2"
      url: "https://arxiv.org/pdf/math/0503572v2"
      locator: "§4 Lemma 4.3, equations (39)–(42) and complete duplication construction, printed pp. 22–24."
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics (2006), Chapter 11, §11.6"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "Printed pp. 461–462 (PDF pp. 481–482), informal higher-order counting framework only; the full doubling estimate is proved locally."
---

## Statement

Let $(K,\mathcal G,\pi)$ be a downward-closed finite coordinate bundle, let $g_0\in\mathcal G$ have maximal cardinality $j\ge1$, put $e=\pi(g_0)$, and choose a good family of face atoms $A_f$ with coarse-to-fine error $b_e$ and localized error parameter $\eta_j=1/F(M_j)$. Write
$$\mathcal G_0=\{g\in\mathcal G:g\subsetneq g_0\},\qquad \mathcal G_1=\{g\in\mathcal G:|g|<j,\ g\not\subseteq g_0\}.$$
Let
$$T_0=\mathbb E_{v\in V_{g_0}}\prod_{g\in\mathcal G_0}1_{A_{\pi(g)}}(v|_g).$$
Form $\widetilde K=K\oplus_{g_0}K$, and let $\widetilde{\mathcal G}$ consist of the shared edges in $\mathcal G_0$ and two copies of each edge in $\mathcal G_1$. This is a downward-closed bundle of order at most $j-1$; write $T_1$ for its bundle count. After discarding all other maximal-cardinality indicator factors, the $b_e$ contribution is bounded by
$$\sqrt{\eta_j}\sqrt{T_0T_1}.$$

## Statement references

[Tao, §4 Lemma 4.3, equations (39)–(42)](https://arxiv.org/pdf/math/0503572v2)

[Tao and Van H. Vu, *Additive Combinatorics*, Chapter 11, §11.6](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)

## Facts & Assumptions

**Given:** A downward-closed coordinate bundle, a maximal edge $g_0$, a face atom family satisfying the good-atom localized error bound, and finite product averages.

[F1] Duplicating a bundle identifies exactly the selected face coordinates and keeps all other coordinates as separate independent copies ([[def-finite-coordinate-hypergraph-bundle]]).

[F2] For the selected atom, $\mathbb E(|b_e|^2 1_{S_{<e}})\le\eta_j\mathbb E(1_{S_{<e}})$ ([[def-good-atoms-in-a-finite-hypergraph-hierarchy]]).

[F3] Finite conditional averages, Cauchy–Schwarz and Fubini/reindexing apply to these nonempty finite product spaces ([[lem-finite-coordinate-projection-and-energy-pythagoras]]).

## Proof

1.1 Identify the coordinates on $g_0$ with the coordinates of $e=\pi(g_0)$; this is a bijection by bundle injectivity. Downward closure then makes the proper subsets of $g_0$ correspond to every proper face of $e$. Put $D=\prod_{g\in\mathcal G_0}1_{A_{\pi(g)}}(v|_g)$ and let $A'(v)$ be the product over $\mathcal G_1$. Every other size-$j$ indicator is between $0$ and $1$, so dropping those factors bounds the absolute $b_e$ contribution by $\mathbb E_{v_{g_0}}[D|b_e|\,\mathbb E_{v_{K\setminus g_0}}A'(v)]$. Here $D$ is exactly the full proper-face support in the good-atom definition. [given, F1, F2, algebra]

2.1 Apply finite Cauchy–Schwarz to the step 1.1 average with weight $D$: $|\mathbb E[D b_e\,\mathbb E_{v_{K\setminus g_0}}A']|\le\sqrt{\mathbb E(D|b_e|^2)}\sqrt{\mathbb E(D(\mathbb E_{v_{K\setminus g_0}}A')^2)}\le\sqrt{\eta_jT_0}\sqrt{\mathbb E(D(\mathbb E_{v_{K\setminus g_0}}A')^2)}$, where the last inequality is [F2]. [step 1.1, F2, F3, algebra]

3.1 By finite Fubini, the second squared average in step 2.1 equals the average of $D A'(v_{g_0},v_W)A'(v_{g_0},v_{W'})$ over two independent copies $W,W'$ of the outside coordinates. This is exactly $T_1$ on $\widetilde K$: proper $g_0$-edges are shared once and every other remaining lower edge occurs in each copy. Subsets of a shared edge remain shared, and subsets not contained in $g_0$ occur in both copies, so $\widetilde{\mathcal G}$ is downward closed; all its edges have size at most $j-1$ and remain injective under the induced projection. Substitution into step 2.1 proves the bound. [step 2.1, F1, F3, algebra] ∎
