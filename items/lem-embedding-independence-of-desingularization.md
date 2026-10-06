---
id: "lem-embedding-independence-of-desingularization"
kind: "lemma"
title: "Independence of the embedded desingularization from the ambient embedding"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 18
deps:
  - "def-axiom-of-choice"
  - "def-birational-morphism-schemes"
  - "def-closed-immersion-schemes"
  - "def-integral-scheme"
  - "def-locally-finite-type-and-finite-type-morphism"
  - "def-proper-morphism"
  - "def-smooth-morphism-schemes"
  - "lem-canonical-resolution-commutes-with-ambient-embeddings"
  - "lem-canonical-resolution-commutes-with-smooth-morphisms"
  - "thm-bravo-villamayor-full-transform"
  - "thm-weak-embedded-desingularization"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
---

## Statement

Assume AC ([[def-axiom-of-choice]]).

Let $U$ be an integral affine $K$-variety of finite type over a field $K$ of characteristic zero and let $\varphi_1\colon U\hookrightarrow X_1$ and $\varphi_2\colon U\hookrightarrow X_2$ be two closed immersions into smooth affine $K$-schemes ([[def-closed-immersion-schemes]]).
Let $\widetilde U_i\subseteq\widetilde X_i$ be the canonical embedded desingularizations of $U$ in $X_i$ ([[thm-bravo-villamayor-full-transform]]).
Then the induced desingularizations $\widetilde U_1\to U$ and $\widetilde U_2\to U$ are canonically isomorphic over $U$.
More precisely, the amalgamated embeddings $\Psi_0,\Psi_1,\Psi_2\colon U\to\mathbb A^{2n}$ of any two presentations of $U$ as a closed subvariety of affine space are related by automorphisms $\Phi_1,\Phi_2$ of $\mathbb A^{2n}$ with $\Phi_i\Psi_0=\Psi_i$, and commutativity of embedded desingularization with ambient embeddings identifies the resulting resolutions over $U$.

## Facts & Assumptions

**Given:** An affine $K$-variety $U$ of finite type over a field $K$ of characteristic zero and two closed embeddings $\varphi_1\colon U\hookrightarrow X_1$, $\varphi_2\colon U\hookrightarrow X_2$ into smooth affine $K$-varieties.



[A1] [[def-axiom-of-choice]]: AC is assumed for the canonical-resolution consumer clauses and their cited AC-dependent construction suppliers.

[F1] [[thm-weak-embedded-desingularization]], [[thm-bravo-villamayor-full-transform]]: embedded desingularization of $U\hookrightarrow X$ is compatible with closed embeddings of smooth ambient varieties: if $X\hookrightarrow X'$ is a closed embedding of smooth varieties and $U'$ denotes the closure extension, then the desingularization of $U$ in $X'$ restricts to the desingularization in $X$.

[F2] [[thm-weak-embedded-desingularization]], [[thm-bravo-villamayor-full-transform]]: for each closed embedding $U\hookrightarrow X$ there is a canonical embedded desingularization $\widetilde U\subset\widetilde X$ of $U$ in $X$.

[F3] [[def-closed-immersion-schemes]], [[def-locally-finite-type-and-finite-type-morphism]]: the embeddings $\varphi_i$ may be composed with closed embeddings $X_i\hookrightarrow\mathbb A^n$ (for $n$ large enough to accommodate finite generating lists for both affine coordinate rings) to obtain embeddings $\psi_i\varphi_i\colon U\to\mathbb A^n$; the coordinate functions of $X_i$ express the two families of generators of $K[U]$.

[F4] The automorphism lemma (source Lemma 4.8.1). If $g_1,\dots,g_n,h_1,\dots,h_n$ generate $K[U]$ and $\Psi_0(x)=(g,h)$, $\Psi_1(x)=(g,0)$, $\Psi_2(x)=(0,h)$ are the three embeddings $U\to\mathbb A^{2n}$, then choosing polynomials $w_i(h)=g_i$ and $v_i(g)=h_i$ (possible because the $h$'s generate $K[U]$) gives automorphisms $\Phi_1(x,y)=(x,y-v(x))$ and $\Phi_2(x,y)=(x-w(y),y)$ of $\mathbb A^{2n}$ with $\Phi_i\Psi_0=\Psi_i$; both are polynomial automorphisms with polynomial inverse.

## Proof

1.1 Reduction to a common ambient space. By [F3], compose the given embeddings with embeddings of $X_i$ into a common $\mathbb A^n$. Their coordinate functions give two generating lists $g,h$ for $K[U]$. In $\mathbb A^{2n}$ put $\Psi_0=(g,h)$, $\Psi_1=(g,0)$ and $\Psi_2=(0,h)$. By [F4], $\Phi_i\Psi_0=\Psi_i$, hence $\Phi_i^{-1}\Psi_i=\Psi_0$. Thus after the coordinate inclusions $\mathbb A^n\hookrightarrow\mathbb A^{2n}$, the inverse polynomial automorphisms carry each presentation to the same closed embedding $\Psi_0$. [A1, F3, F4]

2.1 Comparison of the resolutions. Use [F2] to resolve the common embedding $\Psi_0$. The compatibility with closed smooth ambient embeddings in [F1] identifies the resolution induced by each $X_i$ with that induced by its coordinate inclusion in $\mathbb A^{2n}$. Transport along $\Phi_i^{-1}$, using the naturality of the canonical construction under ambient automorphisms, then identifies it with the resolution of $\Psi_0$. Both comparisons are over $U$, so their composite canonically identifies $\widetilde U_1\to U$ with $\widetilde U_2\to U$. [A1, F1, F2, F4, step 1.1] ∎
