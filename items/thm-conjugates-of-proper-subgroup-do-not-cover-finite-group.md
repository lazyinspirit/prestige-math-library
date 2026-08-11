---
id: thm-conjugates-of-proper-subgroup-do-not-cover-finite-group
kind: theorem
title: "The conjugates of a proper subgroup do not cover a finite group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-conjugate-subgroups-are-counted-by-the-normalizer, def-normalizer-of-a-subgroup, lem-centralizers-and-normalizers-are-subgroups, thm-conjugation-is-an-automorphism, def-index, thm-lagrange, def-finite-cardinality, thm-subset-of-a-finite-set, thm-sum-rule, def-sum-over-a-finite-index-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "K. Conrad, Group Actions, Theorem 6.10"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/gpaction.pdf"
pipeline_run: null
---

## Statement

If $H$ is a proper subgroup of a finite group $G$, then

$$\bigcup_{g\in G}gHg^{-1}\ne G.$$

Thus some element of $G$ lies in no conjugate of $H$.

## Facts & Assumptions

**Given:** A finite group $G$ and a proper subgroup $H<G$.

[L1] There are $m=[G:N_G(H)]$ distinct conjugates of $H$ ([[thm-conjugate-subgroups-are-counted-by-the-normalizer]]).

[L2] The normalizer is $N_G(H)=\{g\in G:gHg^{-1}=H\}$ ([[def-normalizer-of-a-subgroup]]).

[L3] The normalizer is a subgroup of $G$ ([[lem-centralizers-and-normalizers-are-subgroups]]).

[L4] Conjugation is an automorphism, so every conjugate of $H$ has cardinality $|H|$ ([[thm-conjugation-is-an-automorphism]]).

[L5] For a finite group and subgroup, $|G|=[G:H]|H|$ ([[thm-lagrange]], [[def-index]], [[def-finite-cardinality]]).

[L6] A subset of a finite set is finite, has no larger cardinality, and has equal cardinality only when it is the whole set ([[thm-subset-of-a-finite-set]]).

[L7] The cardinality of a finite disjoint union is the sum of the cardinalities of its parts ([[thm-sum-rule]]).

[L8] Finite sums over finite index sets are well-defined ([[def-sum-over-a-finite-index-set]]).

## Proof

**Proof technique:** direct.

1.1 Let $K_1,\ldots,K_m$ be the distinct conjugates of $H$, where $m=[G:N_G(H)]$ by [L1]. Each $K_i$ has $|H|$ elements by [L4] and contains $e$. For $h\in H$, subgroup closure gives $hHh^{-1}=H$, so [L2] gives $H\le N_G(H)$. [L1, L2, L3, L4]

2.1 Add the sets successively after removing elements already counted. The common identity contributes once and each $K_i\setminus\{e\}$ contributes at most $|H|-1$, so [L6], [L7], and [L8] give $|\bigcup_iK_i|\le 1+m(|H|-1)$. [step 1.1, L6, L7, L8]

2.2 Put $n=[G:H]$. Properness gives $n\ge2$. Since $H\le N_G(H)$, [L5] gives $m\le n$, and [L5] also gives $|G|=n|H|$. [step 1.1, L2, L3, L5, L6]

3.1 Therefore $|\bigcup_iK_i|\le1+n(|H|-1)=|G|-n+1<|G|$, so the union is a proper subset of $G$. [step 2.1, step 2.2, algebra] ∎
