---
id: lem-author-50b5133c29cc-klocal-supported-open-equivalence
kind: lemma
title: Supported perfect complexes are invariant under an open neighbourhood
status: published
domain: mathematics
deps:
  - thm-author-50b5133c29cc-klocal-extension-by-zero-input
  - def-scheme-perfect-complexes
  - def-nonconnective-k-spectrum-interface
  - thm-author-4f716d60801a-derived-enhancement-input
  - math:def-axiom-of-choice
dependency_roles:
  thm-author-50b5133c29cc-klocal-extension-by-zero-input: mathematical-premise
  def-scheme-perfect-complexes: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  thm-author-4f716d60801a-derived-enhancement-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 10
---

## Statement
Assume the Axiom of Choice and fix the suitable universes of the supplied derived and K-theory constructions. Let $X$ be qcqs, let $T\subseteq X$ be closed, and let $v:V\hookrightarrow X$ be a quasi-compact open containing $T$. Actual restriction induces an exact equivalence
$$v^*:\mathrm{Perf}_T(X)\xrightarrow{\sim}\mathrm{Perf}_T(V),$$
with inverse given in the supplied sheaf-derived model by degreewise module extension by zero $v_!$. It induces the natural equivalence $K_T(X)\simeq K_T(V)$, compatible with the support-to-global inclusions and restriction on global K spectra. No quasi-compactness of $X\setminus T$ is needed for this categorical excision lemma.

## Facts & Assumptions
[A1] Choice and the universe bounds are used to invoke the enhanced perfect-category and K-theory suppliers. [[math:def-axiom-of-choice]]

**Given:** $X,T,V,v$ as stated and the supplied sheaf-derived enhancement.

**Goal:** Construct an actual exact inverse on supported perfect categories, not merely a triangulated equivalence.

[F1] [[thm-author-50b5133c29cc-klocal-extension-by-zero-input]] gives actual degreewise exact functors $v_!,v^*$, their natural unit/counit, the stalk formula, and $v^*v_!=\mathrm{id}$.

[F2] [[def-scheme-perfect-complexes]] defines perfection locally and support by cohomology stalks; [[thm-author-4f716d60801a-derived-enhancement-input]] supplies the actual infinity-localizations. [[def-nonconnective-k-spectrum-interface]] supplies K on these full categories and actual restriction maps.

## Proof
1.1 Let $F\in\mathrm{Perf}_T(V)$. Exactness and the stalk formula in [F1] show that the cohomology of $v_!F$ equals that of $F$ on $V$ and is zero off $V$, so its support is contained in $T$. On the open $V$ it is perfect because $v^*v_!F=F$; on the open $X\setminus T$ it is acyclic, hence equivalent to the zero perfect object. These opens cover $X$ because $T\subseteq V$. Thus local perfection in [F2] makes $v_!F$ perfect on $X$. This is why closed ambient support, rather than preservation of arbitrary quasi-coherent sheaves by $v_!$, suffices. [F1, F2]

2.1 The degreewise unit identifies $v^*v_!$ with the identity. For $E\in\mathrm{Perf}_T(X)$ the actual counit $v_!v^*E\to E$ is a quasi-isomorphism: at points of $V$ it is an isomorphism on complex stalks, and outside $V$ the source is zero while the target is acyclic since those points lie outside $T$. Hence this natural transformation becomes an equivalence in the supplied infinity-localization. Both functors are exact by [F1], and step 1.1 verifies their restrictions have precisely the claimed perfect/support domain. They therefore give mutually inverse exact functors of the actual enhanced full subcategories. [F1, F2, step 1.1]

3.1 Apply the functor in [F2] to this exact equivalence. The square formed by the two support inclusions and the global/support restriction functors commutes already on complexes, and the common-family realization of the supplied interface represents the same restriction. Thus the K equivalence is compatible with the claimed maps. Extension by zero is used solely as an inverse on these support categories, without requiring it to preserve the common K-flat presentation or to be a global scheme pullback. [F1, F2, step 2.1] ∎
