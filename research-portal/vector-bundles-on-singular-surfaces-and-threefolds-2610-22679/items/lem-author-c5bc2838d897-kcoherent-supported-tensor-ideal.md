---
id: lem-author-c5bc2838d897-kcoherent-supported-tensor-ideal
kind: lemma
title: Support ideals, mixed products and pullback
status: draft
domain: mathematics
deps:
  - lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback
  - def-scheme-perfect-complexes
  - lem-author-4f716d60801a-restriction-support
  - lem-author-4f716d60801a-supported-stability
  - math:def-axiom-of-choice
  - lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison
dependency_roles:
  lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback: mathematical-premise
  def-scheme-perfect-complexes: mathematical-premise
  lem-author-4f716d60801a-restriction-support: mathematical-premise
  lem-author-4f716d60801a-supported-stability: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 7
---

## Statement
Assume the Axiom of Choice and fix the universes of the common-family construction. Let $X$ be a quasi-compact quasi-separated (qcqs) scheme, and use the common-family realizations of the supplied perfect fibers and their full supported subcategories. For any subsets $T,S\subseteq X$, derived tensor induces an exact-in-each-variable coherent pairing $\operatorname{Perf}_T(X)\times\operatorname{Perf}_S(X)\to\operatorname{Perf}_{T\cap S}(X)$ and a coherent unital action $\operatorname{Perf}(X)\times\operatorname{Perf}_T(X)\to\operatorname{Perf}_T(X)$. Thus $\operatorname{Perf}_T(X)$ is a stable tensor ideal and a module category over $\operatorname{Perf}(X)$; no distinguished tensor unit in $\operatorname{Perf}_T(X)$ is asserted for proper $T$. For every morphism $f:X\to Y$ between qcqs schemes and every subset $T\subseteq Y$, $Lf^*$ takes $\operatorname{Perf}_T(Y)$ to $\operatorname{Perf}_{f^{-1}T}(X)$, compatibly with the actions and pairings.

## Statement references

[[lem-author-c5bc2838d897-kcoherent-kflat-enhancement-comparison]]

## Facts & Assumptions
**Given:** Qcqs schemes in the fixed universe, arbitrary support subsets, any morphism between these schemes, and AC.

**Goal:** Supply supported multiplicative and contravariant functors without adding a false unit.

[F1] [[lem-author-c5bc2838d897-kcoherent-derived-tensor-pullback]] gives exact coherent tensor and pullback on the perfect fibers over qcqs schemes, using the same common family.

[F2] [[def-scheme-perfect-complexes]], [[lem-author-4f716d60801a-restriction-support]] and [[lem-author-4f716d60801a-supported-stability]] supply full stable support subcategories and stalk criteria.

[A1] [[math:def-axiom-of-choice]] is assumed through the common-family and enhanced-category constructions used in [F1] and [F2].

## Proof
1.1 For $E\in\operatorname{Perf}_T(X)$ and $F\in\operatorname{Perf}_S(X)$, at $x\notin T\cap S$ at least one factor has acyclic stalk. A derived tensor with a zero object is zero: compute with K-flat stalk representatives and use preservation of quasi-isomorphisms. Hence $(E\otimes^L F)_x$ is acyclic there. This proves the mixed pairing, including the special case of a $\operatorname{Perf}(X)$ factor by taking its support bound to be $X$. It is exact in each variable by [F1], since the support subcategories inherit finite stable operations. [F1, F2, A1]

2.1 The module associativity and the unit $\mathcal O_X$ action are restrictions of the ambient coherent tensor. These operations land in the supported full subcategories by step 1.1, so their higher coherences also restrict. The unit for the action lies in $\operatorname{Perf}(X)$; it is not asserted to lie in $\operatorname{Perf}_T(X)$. This proves the precise tensor-ideal and module statements. [F1, F2, step 1.1]

3.1 For $T\subseteq Y$ and $E\in\operatorname{Perf}_T(Y)$, if $x\notin f^{-1}T$ and $y=f(x)$, then $E_y\simeq0$. The stalk formula $(Lf^*E)_x\simeq\mathcal O_{X,x}\otimes^L_{\mathcal O_{Y,y}}E_y$, obtained from the K-flat pullback construction, makes $(Lf^*E)_x$ zero. Thus pullback has the stated support. Its symmetric monoidal comparison from [F1] commutes with the ambient actions and mixed products; fullness retains these coherences on supported objects. This proves the Statement for arbitrary subsets, using open restriction only when the complement is open. [F1, F2, step 1.1, step 2.1] ∎
