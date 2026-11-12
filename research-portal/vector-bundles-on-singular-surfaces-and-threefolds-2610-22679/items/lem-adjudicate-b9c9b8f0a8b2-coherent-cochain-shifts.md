---
id: lem-adjudicate-b9c9b8f0a8b2-coherent-cochain-shifts
kind: lemma
title: Cochain shifts preserve coherent limits and colimits
status: draft
domain: mathematics
deps:
  - thm-adjudicate-60ab133bec72-enhanced-mapping-input
  - lem-author-b747b28c359f-derived-cohomology
  - math:thm-shift-is-an-additive-autoequivalence-of-the-complex-and-homotopy-categories
dependency_roles:
  thm-adjudicate-60ab133bec72-enhanced-mapping-input: mathematical-premise
  lem-author-b747b28c359f-derived-cohomology: mathematical-premise
  math:thm-shift-is-an-additive-autoequivalence-of-the-complex-and-homotopy-categories: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Jacob Lurie, Higher Algebra, September 18, 2017
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Definition 1.3.4.1, printed p.108, zero-based PDF index 107, including
        its ordinary-category convention.
      statement: Precomposition with an infinity-localization is fully faithful on
        functor infinity-categories, with essential image the functors carrying
        the inverted arrows to equivalences.
      hypotheses: An infinity-category and a specified collection of arrows; for an
        ordinary category use its nerve. All categories are taken in suitable
        fixed universes.
      reading_limits: Read Definition 1.3.4.1 completely, including its
        ordinary-category convention, in the actual primary PDF text during this
        assignment. Only this universal property is imported. The existing
        enhanced-mapping supplier supplies the unbounded derived localization;
        its existence and model foundations are not reconstructed here.
dependency_level: 4
---

## Statement
Let $\mathcal D(\mathbb Z)$ be the unbounded derived infinity-category of cochain complexes of abelian groups, with homotopy category $D(\mathbb Z)$ and fixed universe and mapping-space conventions. For every integer $k$, the cochain shift $S_k$ given on complexes by $(S_kC)^n=C^{n+k}$ and $d_{S_kC}^n=(-1)^k d_C^{n+k}$, and on cochain maps by $(S_kf)^n=f^{n+k}$, induces an equivalence of $\mathcal D(\mathbb Z)$ with inverse $S_{-k}$. Naturally in $C$, it satisfies $H^n(S_kC)=H^{n+k}(C)$. It preserves every existing small coherent limit and colimit, including zero objects and derived fibers.

## Facts & Assumptions
**Given:** An integer $k$ and the unbounded derived infinity-category in the Statement; smallness is relative to the fixed universes.

**Goal:** Justify preservation in the coherent target, rather than only in its homotopy category.

[F1] [[thm-adjudicate-60ab133bec72-enhanced-mapping-input]] supplies the enhanced localization of unbounded complexes at quasi-isomorphisms, its ordinary homotopy category, and the mapping-space universal properties of coherent limits and colimits. [[lem-author-b747b28c359f-derived-cohomology]] supplies cohomology on the homotopy category and the cochain-to-chain reindexing $C^\sharp_n=C^{-n}$; quasi-isomorphisms induce isomorphisms in every cohomology degree.

[F2] [[math:thm-shift-is-an-additive-autoequivalence-of-the-complex-and-homotopy-categories]] gives mutually inverse shifts on complexes. Under the reindexing in [F1], its chain shift by $k$ is exactly the signed cochain shift in the Statement.

[F3] The source record supplies the functor-category universal property of infinity-localization, including natural transformations.

## External input
Import only [F3] with the hypotheses and reading limits in the source record. The shift construction and preservation argument below are local deductions from these explicit inputs.

## Proof
1.1 By [F2], $S_k$ and $S_{-k}$ are inverse functors on complexes. The displayed differential changes only by a sign, so its kernels and images in degree $n$ give $H^n(S_kC)=H^{n+k}(C)$, naturally on cochain maps. Consequently both functors preserve quasi-isomorphisms as defined in [F1]. Compose each with the localization functor and apply [F3] to obtain functors on $\mathcal D(\mathbb Z)$. Full faithfulness in [F3] transfers their inverse identities on complexes to inverse natural equivalences on the localization, including their coherence. Cohomology factors through its homotopy category by [F1], so the same natural cohomology identity holds there. [F1, F2, F3]

2.1 Write $S=S_k$ and $T=S_{-k}$. For a small coherent diagram $(D_i)$ with limit $L$ and any object $E$, the inverse equivalences of step 1.1 and the universal property in [F1] give $\operatorname{Map}(E,SL)\simeq\operatorname{Map}(TE,L)\simeq\lim_i\operatorname{Map}(TE,D_i)\simeq\lim_i\operatorname{Map}(E,SD_i)$, naturally with the induced cone. Hence $SL$ is its limit. If $Q$ is a colimit, the dual calculation is $\operatorname{Map}(SQ,E)\simeq\operatorname{Map}(Q,TE)\simeq\lim_{i\in I^{op}}\operatorname{Map}(D_i,TE)\simeq\lim_{i\in I^{op}}\operatorname{Map}(SD_i,E)$ for a diagram indexed by $I$. This proves colimit preservation. Empty diagrams give preservation of zero, and the pullback defining a fiber is therefore preserved as well. [F1, step 1.1] ∎
