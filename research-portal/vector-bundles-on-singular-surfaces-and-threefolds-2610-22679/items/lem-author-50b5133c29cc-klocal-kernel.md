---
id: lem-author-50b5133c29cc-klocal-kernel
kind: lemma
title: The exact restriction kernel and its denominators
status: draft
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - def-scheme-perfect-complexes
  - def-nonconnective-k-spectrum-interface
  - thm-author-4f716d60801a-derived-enhancement-input
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  def-scheme-perfect-complexes: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  thm-author-4f716d60801a-derived-enhancement-input: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 10
---

## Statement
Assume the Axiom of Choice and fix the suitable universes of the supplied derived and K-theory constructions. Let $X$ be qcqs, $U\subseteq X$ quasi-compact open, $T=X\setminus U$, and $j:U\hookrightarrow X$. In the supplied enhanced categories, $j^*:\mathrm{Perf}(X)\to\mathrm{Perf}(U)$ is exact and its full kernel is $\mathrm{Perf}_T(X)$. For a morphism $c$ of perfect objects, $j^*c$ is an equivalence if and only if $\operatorname{cofib}(c)$ belongs to this support category. The inclusion is fully faithful and stable, and the restriction of that inclusion is canonically zero.

## Facts & Assumptions
**Given:** $X,U,T,j$ as stated, with fixed universes. Assume the Axiom of Choice and use the universes fixed in the Statement.

**Goal:** Identify the actual sequence and the denominators in its triangulated quotient.

[A1] Choice is assumed when invoking the enhanced perfect-category, coherent restriction and derived-enhancement interfaces in [F1] and [F2]. [[math:def-axiom-of-choice]]

[F1] [[def-scheme-perfect-complexes]] gives the full stable perfect and supported sheaf-derived categories and the open-complement criterion.

[F2] [[def-nonconnective-k-spectrum-interface]] supplies the essentially small exact enhanced categories and coherent derived pullback; [[thm-author-4f716d60801a-derived-enhancement-input]] identifies its homotopy category with ordinary sheaf-derived complexes.

## Proof
1.1 Open restriction is degreewise exact on sheaves and preserves bounded finite locally free local presentations. It therefore induces the actual exact restriction functor in the supplied enhancement. An object lies in its kernel exactly when its cohomology vanishes on $U$, equivalently when its support is contained in $T$, by [F1]. The common-family realization in [F2] represents this same restriction: inclusion of its complexes into all sheaf complexes commutes with open restriction before localization. [A1, F1, F2]

2.1 Exact restriction takes the cofiber of $c$ to the cofiber of $j^*c$. In a stable category a map is an equivalence precisely when its cofiber is zero. This proves the denominator criterion. Fullness and stability of the kernel follow from [F1]. Its restriction lands in the full subcategory of zero objects, which is contractible, supplying the zero composite and its natural nullhomotopy. [F1, F2, step 1.1] ∎
