---
id: cor-each-vector-in-a-compact-representation-has-countable-isotypic-support
kind: corollary
title: Each vector has at most countably many nonzero isotypic components
deps:
- thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely
- thm-regular-representation-peter-weyl-decomposition
- def-hilbert-direct-sum-of-unitary-representations
- def-square-summable-family-on-an-arbitrary-index-set
- thm-parseval-equivalences-for-a-complete-orthonormal-family
- def-hilbert-space
- def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader plus completed current item adjudication proof read; item cor-each-vector-in-a-compact-representation-has-countable-isotypic-support; evidence research/frontier-38-owner-30-reader-11.md, research/frontier-38-owner-30-reader-findings-11.json, research/frontier-38-owner-30-alpha-batch-11-5a-decisions.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (author-hosted draft, 338 pp.)
    url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
    locator: Theorem 5.4.1(5.20), printed p. 230 (the countable-support form is recorded for this pair)
  - title: David A. Vogan, Review of Harmonic Analysis on Compact Groups (MIT lecture notes, 12 pp.)
    url: https://math.mit.edu/~dav/compactrev.pdf
    locator: Corollary 2.16 and Theorem 2.13, printed pp. 9–11
status: published
origin: pipeline
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a compact Hausdorff group and let $\pi$ be a strongly continuous unitary representation of $K$ on a complex Hilbert space $H$, with isotypic decomposition $H=\widehat\bigoplus_{\sigma\in\widehat K}H_{(\sigma)}$ ([[thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely]]). For every $v\in H$ the set $\{\sigma\in\widehat K:v_{(\sigma)}\ne0\}$ of classes whose isotypic component meets $v$ nontrivially is at most countable, where $v_{(\sigma)}$ is the orthogonal projection of $v$ to $H_{(\sigma)}$. In particular each single $f\in L^2(K)$ has nonzero components in at most countably many isotypic summands of the Peter-Weyl decomposition ([[thm-regular-representation-peter-weyl-decomposition]]). No countability of $\widehat K$ and no countability of a Hilbert basis of $H$ is asserted.

## Facts & Assumptions

[F1] The isotypic decomposition of an arbitrary representation: $H=\widehat\bigoplus_{\sigma\in\widehat K}H_{(\sigma)}$ is a Hilbert direct sum of pairwise orthogonal closed invariant subspaces, the $H_{(\sigma)}$ are the ranges of the orthogonal projections $P_\sigma$, and every $\sigma$ with $H_{(\sigma)}\ne\{0\}$ occurs as the class of a subrepresentation. ([[thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely]], [[def-hilbert-direct-sum-of-unitary-representations]])

[F2] For a family $(x_i)_{i\in I}$ in a Hilbert space whose squared norms have finite finite-subset-supremum $S=\sum_i\|x_i\|^2<\infty$, the set $\{i:x_i\ne0\}$ is at most countable: for each $n\ge1$ the set $F_n=\{i:\|x_i\|>1/n\}$ is finite, because a nonempty finite subset $F\subseteq F_n$ contributes more than $|F|/n^2$ to $S$ while a finite subsum never exceeds $S$, so every finite subset of $F_n$ has at most $n^2S$ elements and hence $F_n$ itself is finite; the support is the countable union of the $F_n$, at most countable by Countable Choice supplied by AC. ([[def-square-summable-family-on-an-arbitrary-index-set]], [[def-hilbert-space]])

[F3] For $v$ in the Hilbert direct sum, the components satisfy $\|v\|^2=\sum_i\|v_i\|^2$ in the finite-subset-supremum convention, and the component in the summand $H_{(\sigma)}$ is the orthogonal projection $v_{(\sigma)}=P_\sigma v$. ([[def-hilbert-direct-sum-of-unitary-representations]], [[thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely]])

[F4] The regular representation $\lambda$ of $K$ on $L^2(K)$ has Peter-Weyl decomposition $L^2(K)=\widehat\bigoplus_{\pi\in\widehat K}M_\pi$, where $M_\pi$ is the span of the matrix coefficients of $\pi$ and $\lambda|_{M_\pi}\cong d_\pi\overline\pi$, so the same countable-support conclusion applies to the components of a single $L^2$ class. ([[thm-regular-representation-peter-weyl-decomposition]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]])

## Proof

**Given:** AC, a compact Hausdorff group $K$, a strongly continuous unitary representation $\pi$ of $K$ on $H$, and a vector $v\in H$.

1.1 Let $(x_i)_{i\in I}$ be any family in a Hilbert space with $\sum_i\|x_i\|^2<\infty$ in the finite-subset-supremum convention [F2]; for each $n\ge1$ put $F_n=\{i:\|x_i\|>1/n\}$ and let $F\subseteq F_n$ be a nonempty finite subset with $m$ elements: then $\sum_{i\in F}\|x_i\|^2>m/n^2$, while every finite subsum is at most the supremum $S=\sum_i\|x_i\|^2$, so $m<n^2S$; consequently every finite subset of $F_n$ has at most $n^2S$ elements, which forces $F_n$ to be finite (an infinite $F_n$ would contain a finite subset with at least $n^2S+1$ elements), and the support $\{i:x_i\ne0\}=\bigcup_{n\ge1}F_n$ is at most countable by Countable Choice supplied by AC. [F2]

2.1 Applying step 1.1 to the components of $v$ in the Hilbert direct sum $H=\widehat\bigoplus_{\sigma\in\widehat K}H_{(\sigma)}$ is legitimate because $\sum_\sigma\|v_{(\sigma)}\|^2=\|v\|^2<\infty$ by [F3], so the set of $\sigma$ with $v_{(\sigma)}\ne0$ is at most countable and the component is the orthogonal projection $P_\sigma v$; and applying it to the components of a class $f\in L^2(K)$ in the Peter-Weyl decomposition $L^2(K)=\widehat\bigoplus_{\pi\in\widehat K}M_\pi$ of [F4] gives the stated special case, because the squared norms of the components have finite sum equal to $\|f\|_2^2$. No countability of the index sets $\widehat K$ or of a Hilbert basis is used or asserted. The Axiom of Choice is inherited through the decomposition theorems and the cited suppliers. [F1, F3, F4, step 1.1] ∎
