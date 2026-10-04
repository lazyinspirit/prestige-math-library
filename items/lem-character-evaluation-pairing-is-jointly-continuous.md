---
id: lem-character-evaluation-pairing-is-jointly-continuous
kind: lemma
title: "Evaluation of characters is jointly continuous"
deps:
- def-pontryagin-dual-and-compact-open-topology
- lem-unit-circle-is-a-compact-metrizable-topological-group
- def-locally-compact-space
- lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure
- lem-topological-group-translations-and-inversion
- def-product-topology
- def-continuous-map-top
- def-subspace-topology-top
- def-neighbourhood-top
- def-compact-space
- thm-compactness-under-continuous-maps
- lem-complex-conjugation-and-modulus-laws
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand 1953, Chapter VII, Sections 34-35 (printed pp. 134-140)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
    locator: "Section 34A (the evaluation pairing of the dual is continuous, used to define the compact-open topology)."
  - title: "Dikran D. Dikranjan, Introduction to Topological Groups (author lecture notes, Universita di Udine / Universidad Complutense de Madrid, 2007)"
    url: "http://www.mat.ucm.es/imi/documents/20062007_Dikran.pdf"
    locator: "Section 7.1 (printed pp. 46-47), the neighbourhood description of the compact-open topology used in the joint-continuity estimate."
status: published
origin: pipeline
proof_strategy: direct
---
## Statement

Let $G$ be a locally compact Hausdorff abelian group
([[def-locally-compact-space]]). The evaluation pairing
$$\widehat G\times G\to\mathbb T,\qquad(\gamma,x)\mapsto\gamma(x),$$
is continuous for the compact-open topology on $\widehat G$
([[def-pontryagin-dual-and-compact-open-topology]]) and the given topology on
$G$ ([[def-product-topology]], [[def-continuous-map-top]]).

## Facts & Assumptions

[F1] $G$ is a topological group whose translations and inversion are homeomorphisms, and $G$ is locally compact: every point has a compact neighbourhood. ([[lem-topological-group-translations-and-inversion]], [[def-locally-compact-space]])

[F2] In a locally compact Hausdorff space, every open neighbourhood $U$ of a point $x$ contains an open set $V$ with $x\in V\subseteq\overline V\subseteq U$ and $\overline V$ compact. ([[lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]], [[def-neighbourhood-top]])

[F3] The dual consists of the continuous homomorphisms $\gamma:G\to\mathbb T$, with the compact-open subbasis $S(K,V)=\{\gamma:\gamma[K]\subseteq V\}$ for compact $K\subseteq G$ and open $V\subseteq\mathbb T$; every such set is open in the subspace topology and contains every character mapping $K$ into $V$. ([[def-pontryagin-dual-and-compact-open-topology]], [[def-subspace-topology-top]])

[F4] Continuous images of compact sets are compact, and a translate of a compact set is compact; a translate of an open set is open. ([[thm-compactness-under-continuous-maps]], [[lem-topological-group-translations-and-inversion]], [[def-compact-space]])

[F5] For all $z,w\in\mathbb T$: $|z+w|\le|z|+|w|$, $|zw|=|z||w|$, $z^{-1}$ has modulus $1$, and $|z^{-1}-w^{-1}|=|z-w|$; in particular every $\gamma(x)$ and every $\gamma_{0}(x_{0})$ has modulus $1$. ([[lem-unit-circle-is-a-compact-metrizable-topological-group]], [[lem-complex-conjugation-and-modulus-laws]])

## Proof

**Given:** A locally compact Hausdorff abelian group $G$, a character $\gamma_{0}\in\widehat G$, a point $x_{0}\in G$, and $\varepsilon>0$.

1.1 Choose an open neighbourhood $U$ of $x_{0}$ with $\gamma_{0}[U]\subseteq B(\gamma_{0}(x_{0}),\varepsilon/2)$, possible because $\gamma_{0}$ is continuous at $x_{0}$ by [F3]; by [F2] choose an open $V$ with $x_{0}\in V\subseteq\overline V\subseteq U$ and $K:=\overline V$ compact. Then $K$ is a compact neighbourhood of $x_{0}$ with $\gamma_{0}[K]\subseteq B(\gamma_{0}(x_{0}),\varepsilon/2)$. [F1, F2, F3]

2.1 The translate $K-x_{0}=\{x-x_{0}:x\in K\}$ is compact and is a neighbourhood of $0$: it is the image of $K$ under the homeomorphism $x\mapsto x-x_{0}$ of [F1, F4], and it contains the open translate $V-x_{0}$ of $V$, which contains $0$. Moreover $\gamma_{0}[K-x_{0}]\subseteq B(1,\varepsilon/2)$, because for $x\in K\subseteq U$ one has $\gamma_{0}(x-x_{0})=\gamma_{0}(x)\gamma_{0}(x_{0})^{-1}$ and $|\gamma_{0}(x)\gamma_{0}(x_{0})^{-1}-1|=|\gamma_{0}(x)-\gamma_{0}(x_{0})|<\varepsilon/2$ by [F5]. [step 1.1, F1, F3, F4, F5]

3.1 Let $\gamma\in S(\{x_{0}\},B(\gamma_{0}(x_{0}),\varepsilon/2))\cap S(K-x_{0},B(1,\varepsilon/2))$ and $x\in K$. Since $\gamma$ is a homomorphism, $\gamma(x)=\gamma(x_{0})\gamma(x-x_{0})$, so $\gamma(x)-\gamma_{0}(x_{0})=\big(\gamma(x_{0})-\gamma_{0}(x_{0})\big)\gamma(x-x_{0})+\gamma_{0}(x_{0})\big(\gamma(x-x_{0})-1\big)$ and hence $|\gamma(x)-\gamma_{0}(x_{0})|\le|\gamma(x_{0})-\gamma_{0}(x_{0})|+|\gamma(x-x_{0})-1|<\varepsilon/2+\varepsilon/2=\varepsilon$ by [F5] and the choice of $\gamma$. [step 2.1, F3, F5]

4.1 The set $W:=\big(S(\{x_{0}\},B(\gamma_{0}(x_{0}),\varepsilon/2))\cap S(K-x_{0},B(1,\varepsilon/2))\big)\times V$ is a neighbourhood of $(\gamma_{0},x_{0})$ in $\widehat G\times G$: it is a product of an open set containing $\gamma_{0}$ and an open set containing $x_{0}$, the first because $\gamma_{0}(x_{0})\in B(\gamma_{0}(x_{0}),\varepsilon/2)$ and $\gamma_{0}[K-x_{0}]\subseteq B(1,\varepsilon/2)$ by step 2.1, the second because $V$ is open and $x_{0}\in V\subseteq K$. By step 3.1 the pairing maps $W$ into $B(\gamma_{0}(x_{0}),\varepsilon)$; since open balls form a neighbourhood base at $\gamma_{0}(x_{0})$, the pairing is continuous at the arbitrary point $(\gamma_{0},x_{0})$, hence continuous. [step 1.1, step 2.1, step 3.1, F2, F3] ∎
