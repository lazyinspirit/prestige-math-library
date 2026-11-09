---
id: prop-perfect-k-localization-input
kind: proposition
title: Perfect K theory localization and open excision
status: draft
domain: mathematics
deps:
  - def-nonconnective-k-spectrum-interface
  - def-stable-spectra-interface
  - lem-author-50b5133c29cc-klocal-enhanced-localization
  - lem-author-50b5133c29cc-klocal-supported-open-equivalence
  - lem-author-50b5133c29cc-klocal-kernel
  - lem-author-50b5133c29cc-klocal-quotient-full-faithfulness
  - lem-author-50b5133c29cc-klocal-retract-density
  - math:def-axiom-of-choice
dependency_roles:
  def-nonconnective-k-spectrum-interface: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  lem-author-50b5133c29cc-klocal-enhanced-localization: mathematical-premise
  lem-author-50b5133c29cc-klocal-supported-open-equivalence: mathematical-premise
  lem-author-50b5133c29cc-klocal-kernel: mathematical-premise
  lem-author-50b5133c29cc-klocal-quotient-full-faithfulness: mathematical-premise
  lem-author-50b5133c29cc-klocal-retract-density: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 14
---

## Statement
Assume the Axiom of Choice and fix the suitable universes of the supplied derived and K-theory constructions. Let $X$ be a quasi-compact quasi-separated scheme and $U\subseteq X$ a quasi-compact open with closed complement $T$. For the specified nonconnective perfect-complex K-theory there is a natural fiber sequence
$$K_T(X)\longrightarrow K(X)\longrightarrow K(U).$$
For every cover $X=U\cup V$ by quasi-compact opens, the restriction square is homotopy cartesian, equivalently
$$K(X)\xrightarrow{\sim}K(U)\times_{K(U\cap V)}K(V).$$
Thus K-theory has open-cover Mayer–Vietoris (and the corresponding finite quasi-compact-open covering form by iteration). If $T$ is closed with quasi-compact complement and $T\subseteq W\subseteq X$ with $W$ quasi-compact open, restriction gives the natural support excision equivalence $K_T(X)\simeq K_T(W)$, compatible with the support-to-global and restriction maps. All these assertions use the nonconnective spectra and their groups in every integer degree, without a regularity, field or resolution-property assumption.

## Statement references
[[def-nonconnective-k-spectrum-interface]]

[[lem-author-50b5133c29cc-klocal-enhanced-localization]]

[[lem-author-50b5133c29cc-klocal-supported-open-equivalence]]

## Facts & Assumptions
[A1] Choice and the universe bounds are used to invoke the enhanced perfect-category and K-theory suppliers. [[math:def-axiom-of-choice]]

**Given:** The schemes, opens and closed supports in the Statement, with the supplied essentially small sheaf-derived perfect categories and nonconnective functor.

**Goal:** Deduce localization, Mayer–Vietoris and open excision in exactly that model.

[F1] [[lem-author-50b5133c29cc-klocal-enhanced-localization]] proves the actual enhanced quotient exactness and resulting K fiber sequence, using [[lem-author-50b5133c29cc-klocal-kernel]], [[lem-author-50b5133c29cc-klocal-quotient-full-faithfulness]] and [[lem-author-50b5133c29cc-klocal-retract-density]].

[F2] [[lem-author-50b5133c29cc-klocal-supported-open-equivalence]] gives the actual support restriction equivalence and compatibility with global restriction.

[F3] [[def-stable-spectra-interface]] supplies coherent pullbacks and stable fiber/cofiber sequences. [[def-nonconnective-k-spectrum-interface]] identifies the K functor and all integer groups.

## Proof
1.1 The localization sequence is [F1] applied to $j:U\hookrightarrow X$ and its full kernel $\mathrm{Perf}_T(X)$. This identifies the category-defined $K_T(X)$ with the actual fiber, without assuming that identification in its definition or comparing with a different K-theory model. [F1, F3]

2.1 For a two-open cover $X=U\cup V$, quasi-separatedness makes $U\cap V$ quasi-compact, so [F1] applies both to $U\subseteq X$ and $U\cap V\subseteq V$. Put $T=X\setminus U$, a closed subset of $X$ contained in $V$. Their fiber terms are $K_T(X)$ and $K_T(V)$, and [F2] identifies the induced map between these fibers with an equivalence. The coherent restriction square therefore has equivalent horizontal fibers. To check it is cartesian, put $P=K(U)\times_{K(U\cap V)}K(V)$. The induced map $K(X)\to P$ lies over $K(U)$; its fiber map over that base is exactly $K_T(X)\to K_T(V)$ because pullbacks commute. Thus its map on fibers is an equivalence and its map on bases is the identity. The long exact sequences of spectrum homotopy groups give isomorphisms $\pi_iK(X)\to\pi_iP$ for all integers $i$, hence an equivalence of spectra. This proves Mayer–Vietoris. Repeated binary covering decompositions give the finite covering form. [F1, F2, F3, step 1.1]

3.1 For the stated support excision take $W$ in [F2]. Its support equivalence is induced by actual restriction and is compatible with inclusions. Because $X\setminus T$ is quasi-compact, so is $W\setminus T=W\cap(X\setminus T)$ by quasi-separatedness; hence both support terms are also the fibers in step 1.1 with their natural maps. This proves the entire interface, with every original qcqs, closed-support and quasi-compact-open condition retained. [F1, F2, F3, step 1.1, step 2.1] ∎
